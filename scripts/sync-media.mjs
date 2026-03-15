import { createHash } from "node:crypto";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import { join } from "node:path";
import vm from "node:vm";
import sharp from "sharp";

const root = process.cwd();
const indexPath = join(root, "index.html");
const manifestPath = join(root, "media-manifest.js");
const thumbsDir = join(root, "media", "thumbs");
const heroesDir = join(root, "media", "heroes");
const thumbWidth = 1200;
const heroWidth = 2048;
const maxConcurrency = 1;
const commonsResolvedUrls = new Map();

function isRemoteUrl(value) {
  return /^https?:\/\//i.test(value || "");
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getAttr(tag, name) {
  const match = tag.match(new RegExp(`\\b${escapeRegex(name)}="([^"]*)"`, "i"));
  return match?.[1] || "";
}

function setAttr(tag, name, value) {
  const attrRegex = new RegExp(`\\b${escapeRegex(name)}="[^"]*"`, "i");
  if (attrRegex.test(tag)) {
    return tag.replace(attrRegex, `${name}="${value}"`);
  }

  return tag.replace(/>$/, ` ${name}="${value}">`);
}

async function fileExists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function loadExistingManifest() {
  if (!(await fileExists(manifestPath))) {
    return {};
  }

  const text = await readFile(manifestPath, "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(text, sandbox, { filename: "media-manifest.js" });
  return sandbox.window.mediaManifest || {};
}

function collectInlineImageUrls(html) {
  const urls = new Set();

  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = match[0];
    if (/\bid="lightbox-image"/i.test(tag)) {
      continue;
    }

    const source = getAttr(tag, "data-fullsrc") || getAttr(tag, "src");
    if (isRemoteUrl(source)) {
      urls.add(source);
    }
  }

  return urls;
}

function collectScriptImageUrls(html) {
  const urls = new Set();
  for (const match of html.matchAll(/\bimage:\s*"([^"]+)"/g)) {
    const url = match[1];
    if (isRemoteUrl(url)) {
      urls.add(url);
    }
  }
  return urls;
}

function collectBackdropUrls(html) {
  const urls = new Set();
  const blockMatch = html.match(/const routeBackdrops = \{([\s\S]*?)\n    \};/);
  const block = blockMatch?.[1] || "";
  // Route backdrops use dedicated left/right focal images, and both need hero-size outputs.
  for (const match of block.matchAll(/\b(?:image|leftImage|rightImage):\s*"([^"]+)"/g)) {
    const url = match[1];
    if (isRemoteUrl(url)) {
      urls.add(url);
    }
  }
  return urls;
}

function outputName(url) {
  return createHash("sha1").update(url).digest("hex").slice(0, 20);
}

async function fetchImage(url) {
  const requestUrl = await resolveFetchUrl(url);
  for (let attempt = 0; attempt < 6; attempt += 1) {
    const response = await fetch(requestUrl, {
      redirect: "follow",
      headers: {
        "user-agent": "CodexMediaSync/1.0"
      }
    });

    if (response.ok) {
      const contentType = response.headers.get("content-type") || "";
      if (!contentType.startsWith("image/")) {
        throw new Error(`Non-image response for ${url}: ${contentType || "unknown"}`);
      }

      return {
        buffer: Buffer.from(await response.arrayBuffer()),
        resolvedUrl: response.url
      };
    }

    if (![429, 500, 502, 503, 504].includes(response.status) || attempt === 5) {
      throw new Error(`Fetch failed for ${url}: ${response.status}`);
    }

    const waitMs = 1200 * (attempt + 1);
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  throw new Error(`Fetch failed for ${url}`);
}

async function resolveFetchUrl(url) {
  const title = getCommonsFileTitle(url);
  if (!title) {
    return url;
  }

  if (commonsResolvedUrls.has(url)) {
    return commonsResolvedUrls.get(url);
  }

  for (let attempt = 0; attempt < 6; attempt += 1) {
    const params = new URLSearchParams({
      action: "query",
      prop: "imageinfo",
      iiprop: "url",
      iiurlwidth: "1600",
      format: "json",
      formatversion: "2",
      origin: "*",
      titles: `File:${title}`
    });

    const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params.toString()}`, {
      headers: {
        "user-agent": "CodexMediaSync/1.0"
      }
    });

    if (response.ok) {
      const data = await response.json();
      const page = data?.query?.pages?.[0];
      const resolvedUrl = page?.imageinfo?.[0]?.thumburl || page?.imageinfo?.[0]?.url || url;
      commonsResolvedUrls.set(url, resolvedUrl);
      return resolvedUrl;
    }

    if (![429, 500, 502, 503, 504].includes(response.status) || attempt === 5) {
      break;
    }

    const waitMs = 1200 * (attempt + 1);
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  return url;
}

function getCommonsFileTitle(url) {
  try {
    const parsed = new URL(url);

    if (url.includes("commons.wikimedia.org/wiki/Special:FilePath/")) {
      return decodeURIComponent(parsed.pathname.split("/Special:FilePath/")[1] || "");
    }

    if (parsed.hostname !== "upload.wikimedia.org") {
      return "";
    }

    const parts = parsed.pathname.split("/").filter(Boolean);
    if (!parts.includes("commons")) {
      return "";
    }

    const thumbIndex = parts.indexOf("thumb");
    if (thumbIndex !== -1) {
      return decodeURIComponent(parts[thumbIndex + 3] || "");
    }

    return decodeURIComponent(parts.at(-1) || "");
  } catch {
    return "";
  }
}

function toWebPath(path) {
  return path.replace(/\\/g, "/");
}

async function generateMediaVariant(buffer, outputPath, width, quality) {
  await sharp(buffer, { limitInputPixels: false })
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath);
}

function reuseExistingEntry(existingEntry, needsHero) {
  if (!existingEntry?.thumb || !existingEntry?.full) {
    return false;
  }

  const thumbPath = join(root, existingEntry.thumb);
  const heroPath = existingEntry.hero ? join(root, existingEntry.hero) : "";
  return fileExists(thumbPath).then(async (hasThumb) => {
    if (!hasThumb) {
      return false;
    }

    if (needsHero && existingEntry.hero) {
      return fileExists(heroPath);
    }

    return !needsHero || Boolean(existingEntry.hero);
  });
}

async function canReuseOutputFiles(thumbRel, heroRel, needsHero) {
  const hasThumb = await fileExists(join(root, thumbRel));
  if (!hasThumb) {
    return false;
  }

  if (needsHero) {
    return fileExists(join(root, heroRel));
  }

  return true;
}

function rewriteInlineImages(html, manifest) {
  return html.replace(/<img\b[^>]*>/g, (tag) => {
    if (/\bid="lightbox-image"/i.test(tag)) {
      return tag;
    }

    const fullUrl = getAttr(tag, "data-fullsrc") || getAttr(tag, "src");
    if (!isRemoteUrl(fullUrl)) {
      return tag;
    }

    const asset = manifest[fullUrl];
    if (!asset) {
      return tag;
    }

    let updated = setAttr(tag, "src", asset.thumb);
    updated = setAttr(updated, "data-fullsrc", asset.full);
    updated = setAttr(updated, "decoding", "async");
    return updated;
  });
}

async function main() {
  const indexHtml = await readFile(indexPath, "utf8");
  const existingManifest = await loadExistingManifest();
  const inlineUrls = collectInlineImageUrls(indexHtml);
  const scriptUrls = collectScriptImageUrls(indexHtml);
  const backdropUrls = collectBackdropUrls(indexHtml);
  const allUrls = [...new Set([...inlineUrls, ...scriptUrls])];
  const manifest = {};

  await mkdir(thumbsDir, { recursive: true });
  await mkdir(heroesDir, { recursive: true });

  let cursor = 0;
  const workers = Array.from({ length: maxConcurrency }, async () => {
    while (cursor < allUrls.length) {
      const url = allUrls[cursor];
      cursor += 1;

      const key = outputName(url);
      const thumbRel = toWebPath(join("media", "thumbs", `${key}.webp`));
      const heroRel = toWebPath(join("media", "heroes", `${key}.webp`));
      const needsHero = backdropUrls.has(url);
      const existingEntry = existingManifest[url];

      if (await reuseExistingEntry(existingEntry, needsHero)) {
        manifest[url] = existingEntry;
        continue;
      }

      if (await canReuseOutputFiles(thumbRel, heroRel, needsHero)) {
        manifest[url] = {
          thumb: thumbRel,
          full: existingEntry?.full || url,
          ...(needsHero ? { hero: heroRel } : {})
        };
        continue;
      }

      try {
        const { buffer, resolvedUrl } = await fetchImage(url);
        await generateMediaVariant(buffer, join(root, thumbRel), thumbWidth, 72);

        const nextEntry = {
          thumb: thumbRel,
          full: resolvedUrl
        };

        if (needsHero) {
          await generateMediaVariant(buffer, join(root, heroRel), heroWidth, 76);
          nextEntry.hero = heroRel;
        }

        manifest[url] = nextEntry;
        console.log(`Synced ${url}`);
        await new Promise((resolve) => setTimeout(resolve, 700));
      } catch (error) {
        const fallbackUrl = await resolveFetchUrl(url);
        manifest[url] = {
          thumb: fallbackUrl,
          full: existingEntry?.full || fallbackUrl,
          ...(needsHero ? { hero: fallbackUrl } : {})
        };
        console.warn(`Fell back to remote thumb for ${url}: ${error.message}`);
      }
    }
  });

  await Promise.all(workers);

  const rewrittenHtml = rewriteInlineImages(indexHtml, manifest);
  await writeFile(indexPath, rewrittenHtml);

  const manifestBody = `// Generated by scripts/sync-media.mjs. Keep this file in sync with index.html.\nwindow.mediaManifest = ${JSON.stringify(manifest, null, 2)};\n`;
  await writeFile(manifestPath, manifestBody);

  console.log(`Synced ${allUrls.length} remote images into local thumbnails.`);
}

await main();
