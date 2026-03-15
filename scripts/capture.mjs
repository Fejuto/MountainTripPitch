import { mkdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import process from "node:process";
import { setTimeout as delay } from "node:timers/promises";
import { chromium, devices } from "@playwright/test";

const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;

async function warmLazyImages(page) {
  // This page loads a lot of lazy media. Warm the scroll path first so artifact screenshots
  // reflect the real gallery state rather than placeholder blocks.
  const viewportHeight = page.viewportSize()?.height ?? 900;
  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);

  for (let y = 0; y < scrollHeight; y += Math.max(480, Math.floor(viewportHeight * 0.7))) {
    await page.evaluate((scrollY) => window.scrollTo({ top: scrollY, behavior: "instant" }), y);
    await page.waitForTimeout(300);
  }

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(500);
}

async function scrollIntoViewWithOffset(page, selector, offset = 120) {
  await page.locator(selector).scrollIntoViewIfNeeded();
  await page.evaluate((scrollOffset) => window.scrollBy({ top: -scrollOffset, behavior: "instant" }), offset);
}

async function safeScreenshot(page, options) {
  try {
    await page.screenshot(options);
  } catch (error) {
    if (!options.fullPage) {
      throw error;
    }

    // Once the page gets tall enough, Chromium can reject a huge full-page bitmap. Fall back to
    // a viewport capture so the command still produces a current artifact for inspection.
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(250);
    await page.screenshot({ path: options.path });
  }
}

async function waitForServer(url) {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Wait for the server process to come up.
    }
    await delay(200);
  }

  throw new Error(`Timed out waiting for ${url}`);
}

async function isServerUp(url) {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch {
    return false;
  }
}

let server;

if (!(await isServerUp(baseUrl))) {
  server = spawn(process.execPath, ["scripts/serve.mjs"], {
    stdio: "inherit",
    cwd: process.cwd()
  });
}

try {
  await waitForServer(baseUrl);
  await mkdir("artifacts", { recursive: true });

  const browser = await chromium.launch();

  const desktopPage = await browser.newPage();
  await desktopPage.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await warmLazyImages(desktopPage);
  // Keep both a top-of-page and a warmed day-gallery viewport artifact. Full-page screenshots are
  // useful for coverage, but the image-led layout decisions are much easier to inspect in these
  // focused shots.
  await safeScreenshot(desktopPage, { path: "artifacts/top-focus.png" });
  await safeScreenshot(desktopPage, { path: "artifacts/homepage-desktop.png", fullPage: true });
  await scrollIntoViewWithOffset(desktopPage, "#compare", 110);
  await desktopPage.waitForTimeout(500);
  await safeScreenshot(desktopPage, { path: "artifacts/compare-focus.png" });
  await scrollIntoViewWithOffset(desktopPage, "#dolomites .trip-head", 118);
  await desktopPage.waitForTimeout(500);
  await safeScreenshot(desktopPage, { path: "artifacts/dolomites-header-focus.png" });
  await scrollIntoViewWithOffset(desktopPage, "#rofan", 60);
  await desktopPage.waitForTimeout(500);
  await safeScreenshot(desktopPage, { path: "artifacts/route-transition-focus.png" });
  await scrollIntoViewWithOffset(desktopPage, '#karwendel .days .day-card:nth-of-type(1)', 96);
  await desktopPage.waitForTimeout(700);
  await safeScreenshot(desktopPage, { path: "artifacts/day-focus-loaded.png" });
  await scrollIntoViewWithOffset(desktopPage, '#dolomites .days .day-card:nth-of-type(2)', 96);
  await desktopPage.waitForTimeout(700);
  await safeScreenshot(desktopPage, { path: "artifacts/dolomites-days-focus.png" });
  await desktopPage.locator('#rofan .days .day-card:nth-of-type(4) figure.media:last-child').scrollIntoViewIfNeeded();
  await desktopPage.locator('#rofan .days .day-card:nth-of-type(4) figure.media:last-child').click();
  await desktopPage.waitForTimeout(400);
  await desktopPage.screenshot({ path: "artifacts/lightbox-gallery.png" });
  await desktopPage.keyboard.press("Escape");
  // Keep this probe aligned with the route order if the first trip's long-form video changes.
  await desktopPage.locator('iframe[data-video-id="DrTc0Tg1i2Y"]').scrollIntoViewIfNeeded();
  await desktopPage.waitForTimeout(2500);
  await desktopPage.locator('iframe[data-video-id="DrTc0Tg1i2Y"]').screenshot({ path: "artifacts/first-video.png" });
  await desktopPage.close();

  const mobileContext = await browser.newContext({
    ...devices["Pixel 7"]
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await warmLazyImages(mobilePage);
  await safeScreenshot(mobilePage, { path: "artifacts/homepage-mobile.png", fullPage: true });
  await mobileContext.close();

  const mobileLandscapeContext = await browser.newContext({
    viewport: { width: 932, height: 430 },
    isMobile: true
  });
  const mobileLandscapePage = await mobileLandscapeContext.newPage();
  await mobileLandscapePage.goto(baseUrl, { waitUntil: "domcontentloaded" });
  await warmLazyImages(mobileLandscapePage);
  await safeScreenshot(mobileLandscapePage, { path: "artifacts/homepage-mobile-landscape.png", fullPage: true });
  await mobileLandscapeContext.close();

  await browser.close();
} finally {
  if (server) {
    server.kill();
  }
}
