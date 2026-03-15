import { copyFile, cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const distDir = join(root, "dist");
const filesToCopy = ["index.html", "route-photo-data.js", "media-manifest.js", "trip-explain-data.js"];
const dirsToCopy = ["media"];

async function stageDist() {
  await rm(distDir, { recursive: true, force: true });
  await mkdir(distDir, { recursive: true });

  await Promise.all(
    filesToCopy.map(async (file) => {
      await copyFile(join(root, file), join(distDir, file));
    })
  );
  await Promise.all(
    dirsToCopy.map(async (dir) => {
      await cp(join(root, dir), join(distDir, dir), { recursive: true });
    })
  );
  // GitHub Pages should treat the staged output as plain static files, not as a Jekyll site.
  await writeFile(join(distDir, ".nojekyll"), "");
  console.log(`Prepared ${distDir} with ${filesToCopy.length + 1} files and ${dirsToCopy.length} directories.`);
}

await stageDist();
