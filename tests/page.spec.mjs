import { mkdir } from "node:fs/promises";
import { expect, test } from "@playwright/test";

const expectedVideoIds = [
  "DrTc0Tg1i2Y",
  "PYZFM6Z45J8",
  "ii7MPj66ueI",
  "qHBhRU2RPlY",
  "MhfirzHNVBI",
  "j2UorcY9L2w",
  "V0eboF3CgD0",
  "y1y5VCfRoiE",
  "u8ajUeIGemQ",
  "TH_91hBJZqc",
  "bt_mI10275c",
  "thsUn7KGt8I"
];

// These counts are a product contract, not just incidental DOM counts:
// 6 routes, 4 days each, 4 visible stats per day, 10 media tiles per day, one route video and
// one summit clip per route, one route-header hero per route, plus one cost card per route and
// the click-for-basis explainer layer.
test("homepage renders and youtube embeds are http-preview friendly", async ({ page }) => {
  test.setTimeout(60000);
  const embedReferers = new Map();

  page.on("request", (request) => {
    const match = request.url().match(/youtube-nocookie\.com\/embed\/([^?]+)/);
    if (!match) {
      return;
    }

    embedReferers.set(match[1], request.headers().referer || "");
  });

  await page.goto("/");

  await expect(page.getByRole("heading", { name: "4-day car-free alpine trip options from Rotterdam" })).toBeVisible();
  await expect(page.locator("#map-overview")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Route totals, choice factors, and indicative cost" })).toBeVisible();
  await expect(page.locator("#page-nav a")).toHaveCount(6);
  await expect(page.locator("section.route-section")).toHaveCount(6);
  await expect(page.locator("#trip-background")).toHaveCount(1);
  await expect(page.locator("#trip-background .trip-background-layer")).toHaveCount(2);
  await expect(page.locator(".map")).toHaveCount(7);
  await expect(page.locator(".day-stats")).toHaveCount(24);
  await expect(page.locator(".day-stat")).toHaveCount(96);
  await expect(page.locator("figure.media")).toHaveCount(240);
  await expect(page.locator(".day-media")).toHaveCount(24);
  await expect(page.locator(".trip-hero")).toHaveCount(6);
  await expect(page.locator('.trip[data-route-kicker]')).toHaveCount(6);
  await expect(page.locator('.fact small').filter({ hasText: "Gear beyond boots" })).toHaveCount(6);
  await expect(page.locator('.fact small').filter({ hasText: "Public transport" })).toHaveCount(6);
  await expect(page.locator('.fact small').filter({ hasText: "Insurance / paperwork" })).toHaveCount(6);
  await expect(page.locator('th').filter({ hasText: "Fitness requirement" })).toHaveCount(1);
  await expect(page.locator('td[data-decision-metric="fitness"]')).toHaveCount(6);
  await expect(page.locator("iframe[data-video-id]")).toHaveCount(12);
  await expect(page.locator('iframe[data-video-role="route"]')).toHaveCount(6);
  await expect(page.locator('.day-card iframe[data-video-role="summit"]')).toHaveCount(6);
  await expect(page.locator(".leaflet-container")).toHaveCount(7);
  await expect(page.locator("#totals-body tr")).toHaveCount(6);
  await expect(page.locator("#decision-body tr")).toHaveCount(6);
  await expect(page.locator("#cost-summary-grid .cost-summary-item")).toHaveCount(6);
  await expect(page.locator(".cost-card")).toHaveCount(6);
  await expect(page.locator("#page-nav .page-nav-link span")).toHaveText([
    "Karwendel",
    "Stubai",
    "Dolomites",
    "Rofan",
    "Rätikon",
    "Bernese Oberland"
  ]);
  await expect
    .poll(() => page.locator("#page-nav").evaluate((nav) => nav.classList.contains("is-condensed")))
    .toBe(false);
  await expect(page.locator('.page-nav-link.is-active')).toHaveAttribute("href", "#karwendel");
  await expect(page.locator("#page-nav")).toHaveCSS("--nav-accent", "#4f7fa3");
  await expect(page.locator(".page-nav-link img").first()).toHaveAttribute("src", /media\/thumbs\/|upload\.wikimedia\.org\/wikipedia\/commons\/thumb\//);
  await expect(page.locator("#trip-background")).toHaveCSS("--trip-bg-accent", "#4f7fa3");
  await expect(page.locator("#karwendel .day-card figure.media img").first()).toHaveAttribute("data-fullsrc", /^https?:/);

  const captionsHidden = await page.locator("figure.media figcaption").evaluateAll((captions) =>
    captions.every((caption) => getComputedStyle(caption).display === "none")
  );
  expect(captionsHidden).toBeTruthy();

  const sectionOrder = await page.evaluate(() =>
    ["karwendel", "stubai", "dolomites", "rofan", "ratikon", "bernese"]
      .map((id) => ({
        id,
        top: document.getElementById(id).getBoundingClientRect().top
      }))
      .sort((a, b) => a.top - b.top)
      .map((entry) => entry.id)
  );
  expect(sectionOrder).toEqual(["karwendel", "stubai", "dolomites", "rofan", "ratikon", "bernese"]);

  const gallerySizes = await page.locator(".day-media").evaluateAll((galleries) =>
    galleries.map((gallery) => gallery.querySelectorAll("figure.media").length)
  );
  expect(gallerySizes.every((size) => size === 10)).toBeTruthy();
  const galleryUniqueness = await page.locator(".day-media").evaluateAll((galleries) =>
    galleries.map((gallery) => {
      const urls = [...gallery.querySelectorAll("figure.media img")].map((img) => img.dataset.fullsrc || img.currentSrc || img.src);
      return new Set(urls).size === urls.length;
    })
  );
  expect(galleryUniqueness.every(Boolean)).toBeTruthy();

  await expect(page.locator("#totals-body tr").nth(2).locator("td")).toHaveText([
    "Dolomites",
    "2",
    "12h 25m",
    "31.5 km",
    "1660 m",
    "2020 m"
  ]);
  await expect(page.locator("#decision-body tr").nth(4).locator("td")).toContainText([
    "Rätikon",
    "5 / 6",
    "Higher",
    "High",
    "Moderate",
    "Moderate",
    "Check Carschina"
  ]);
  await expect(page.locator("#cost-summary-grid .cost-summary-item").nth(3)).toContainText("Rofan");
  await expect(page.locator("#cost-summary-grid .cost-summary-item").nth(3)).toContainText("€339");
  await expect(page.locator("#cost-summary-grid .cost-summary-item").nth(3)).toContainText("€678");
  await expect(page.locator("#cost-summary-grid .cost-summary-item").nth(3)).toContainText("Transport €108");
  await expect(page.locator("#cost-summary-grid .cost-summary-item").nth(3)).toContainText("Huts €90");
  await expect(page.locator("#bernese .cost-card")).toContainText("Expected total for 1 adult and 2 adults");
  await expect(page.locator("#bernese .cost-card")).toContainText("€487");
  await expect(page.locator("#bernese .cost-card")).toContainText("€974");
  await expect(page.locator("#bernese .cost-card")).toContainText("Cable cars / lifts");
  await expect(page.locator("#bernese .cost-card")).toContainText("€50");
  await expect(page.locator("#bernese .cost-card")).toContainText("Hut accommodation (3 nights)");
  await expect(page.locator("#bernese .cost-card")).toContainText("2 adults €242");
  await expect(page.locator("#bernese .cost-card")).toContainText("Local taxes / fees");
  await expect(page.locator("#bernese .cost-card")).toContainText("€7");
  await expect(page.locator('#decision-body tr[data-route-id="dolomites"] td[data-decision-metric="fitness"]')).toContainText("3 / 6");
  await expect(page.locator('#decision-body tr[data-route-id="karwendel"] td[data-decision-metric="fitness"]')).toContainText("4 / 6");
  await expect(page.locator('#decision-body tr[data-route-id="rofan"] td[data-decision-metric="fitness"]')).toContainText("4 / 6");
  await expect(page.locator('#decision-body tr[data-route-id="bernese"] td[data-decision-metric="fitness"]')).toContainText("5 / 6");
  await expect(page.locator('#decision-body tr[data-route-id="ratikon"] td[data-decision-metric="fitness"]')).toContainText("5 / 6");
  await expect(page.locator('#decision-body tr[data-route-id="stubai"] td[data-decision-metric="fitness"]')).toContainText("6 / 6");
  await expect(page.locator("#dolomites .facts")).toContainText("Roughly 6 to 8 hours from Rotterdam, 3 legs / 2 changes outbound");
  await expect(page.locator("#karwendel .facts")).toContainText("Via ferrata set and helmet required");
  await expect(page.locator("#bernese .facts")).toContainText("No via ferrata set or rope on the SAC hiking line");
  const sourceCardChecks = await page.locator(".source-list li").evaluateAll((items) =>
    items.map((item) => ({
      hasCard: Boolean(item.querySelector(".source-link")),
      hasThumb: Boolean(item.querySelector(".source-thumb")),
      hasBadge: Boolean(item.querySelector(".source-badge"))
    }))
  );
  expect(sourceCardChecks.every((entry) => entry.hasCard && entry.hasThumb && entry.hasBadge)).toBeTruthy();
  await expect(page.locator('.source-link').filter({ hasText: "Rifugio Vallandro official site" })).toHaveAttribute("data-source-route", "dolomites");
  await expect(page.locator('.source-link').filter({ hasText: "Rifugio Vallandro official site" }).locator(".source-badge")).toHaveText("Dolomites");
  await expect(page.locator('.source-link').filter({ hasText: "NS International official site" })).toHaveAttribute("data-source-kind", "rail");
  await expect(page.locator('.source-link').filter({ hasText: "ECB euro foreign exchange reference rates" })).toHaveAttribute("data-source-kind", "fx");

  await page.locator('#dolomites .facts .fact').filter({ hasText: "Public transport" }).click();
  await expect(page.locator('#info-modal[aria-hidden="false"]')).toBeVisible();
  await expect(page.locator("#info-title")).toContainText("Dolomites Public transport");
  await expect(page.locator("#info-meaning")).toContainText("outbound access summary");
  await expect(page.locator("#info-links a")).toHaveCount(6);
  await expect(page.locator("#info-links")).toContainText("Prato Piazza access page");
  await page.locator("#info-close").click();
  await expect(page.locator('#info-modal[aria-hidden="true"]')).toBeHidden();

  await page.locator('#decision-body tr[data-route-id="bernese"] td[data-decision-metric="weather"]').click();
  await expect(page.locator('#info-modal[aria-hidden="false"]')).toBeVisible();
  await expect(page.locator("#info-title")).toContainText("Bernese Oberland Weather sensitivity");
  await expect(page.locator("#info-value")).toContainText("Very high");
  await expect(page.locator("#info-breakdown")).toContainText("least forgiving");
  await page.locator("#info-close").click();

  await page.locator('#decision-body tr[data-route-id="stubai"] td[data-decision-metric="fitness"]').click();
  await expect(page.locator('#info-modal[aria-hidden="false"]')).toBeVisible();
  await expect(page.locator("#info-title")).toContainText("Stubai Fitness requirement");
  await expect(page.locator("#info-value")).toContainText("6 / 6");
  await expect(page.locator("#info-breakdown")).toContainText("1-6 hiking-fitness scale");
  await expect(page.locator("#info-links")).toContainText("Outdooractive fitness requirement scale");
  await page.locator("#info-close").click();

  await page.locator('#bernese .cost-item[data-cost-field="hutAccommodation"]').click();
  await expect(page.locator('#info-modal[aria-hidden="false"]')).toBeVisible();
  await expect(page.locator("#info-title")).toContainText("Bernese Oberland Hut accommodation (3 nights)");
  await expect(page.locator("#info-value")).toContainText("1 adult €121 / 2 adults €242");
  await expect(page.locator("#info-breakdown")).toContainText("Night 3: Blüemlisalphütte");
  await page.locator("#info-close").click();

  await page.locator('#ratikon .facts .fact').filter({ hasText: "Insurance / paperwork" }).click();
  await expect(page.locator('#info-modal[aria-hidden="false"]')).toBeVisible();
  await expect(page.locator("#info-title")).toContainText("Rätikon Insurance / paperwork");
  await expect(page.locator("#info-value")).toContainText("Swiss rescue / evacuation can still be your cost");
  await expect(page.locator("#info-breakdown")).toContainText("a Dutch traveler starting from Rotterdam");
  await expect(page.locator("#info-links")).toContainText("Netherlands Worldwide Switzerland travel advice");
  await expect(page.locator("#info-links")).toContainText("Dutch government EHIC page");
  await page.locator("#info-close").click();

  const dayMetricChecks = await page.locator(".day-card").evaluateAll((cards) =>
    cards.map((card) => ({
      statCount: card.querySelectorAll(".day-stats .day-stat").length,
      distance: Number(card.dataset.distance || "0")
    }))
  );
  expect(dayMetricChecks.every((entry) => entry.statCount === 4)).toBeTruthy();
  expect(dayMetricChecks.every((entry) => entry.distance > 0)).toBeTruthy();

  const summitFrameRatios = await page.locator(".day-video .video-frame").evaluateAll((frames) =>
    frames.map((frame) => {
      const rect = frame.getBoundingClientRect();
      return rect.width / rect.height;
    })
  );
  expect(summitFrameRatios.every((ratio) => ratio > 1.7 && ratio < 1.85)).toBeTruthy();

  const minimumStageChecks = [
    ["#karwendel", 2],
    ["#karwendel", 3],
    ["#stubai", 2],
    ["#stubai", 3],
    ["#dolomites", 2],
    ["#dolomites", 3],
    ["#rofan", 2],
    ["#rofan", 3],
    ["#bernese", 2],
    ["#bernese", 3],
    ["#ratikon", 2],
    ["#ratikon", 3]
  ];
  for (const [section, dayIndex] of minimumStageChecks) {
    // Day 2 and Day 3 must stay at or above the user's 3-hour minimum.
    const hours = await page
      .locator(`${section} .days .day-card:nth-of-type(${dayIndex})`)
      .evaluate((card) => Number(card.dataset.hikeHours || "0"));
    expect(hours).toBeGreaterThanOrEqual(3);
  }

  for (const videoId of expectedVideoIds) {
    await expect(page.locator(`iframe[data-video-id="${videoId}"]`)).toHaveAttribute(
      "src",
      new RegExp(`^https://www\\.youtube-nocookie\\.com/embed/${videoId}\\?`)
    );
  }

  for (const videoId of expectedVideoIds) {
    await page.locator(`iframe[data-video-id="${videoId}"]`).scrollIntoViewIfNeeded();
    await expect.poll(() => embedReferers.get(videoId)).toBe("http://127.0.0.1:4173/");
  }
  await page.locator("#rofan").scrollIntoViewIfNeeded();
  await expect
    .poll(() => page.locator("#page-nav").evaluate((nav) => nav.classList.contains("is-condensed")))
    .toBe(true);
  await expect(page.locator('.page-nav-link.is-active')).toHaveAttribute("href", "#rofan");
  await expect(page.locator("#page-nav")).toHaveCSS("--nav-accent", "#a0682c");
  await expect(page.locator("#trip-background")).toHaveCSS("--trip-bg-accent", "#a0682c");
  await expect.poll(() =>
    page.locator("#trip-background .trip-background-layer.is-visible").evaluate((layer) => getComputedStyle(layer).backgroundImage)
  ).not.toBe("none");

  await page.evaluate(() => {
    const nav = document.getElementById("page-nav");
    const map = document.querySelector("#bernese .map");
    const navHeight = nav.getBoundingClientRect().height;
    const targetTop = window.scrollY + map.getBoundingClientRect().top - Math.max(navHeight / 2, 40);
    window.scrollTo({ top: targetTop });
  });
  await page.waitForTimeout(300);

  const navStackProbe = await page.evaluate(() => {
    const nav = document.getElementById("page-nav");
    const rect = nav.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const top = document.elementsFromPoint(x, y)[0];
    return {
      insideNav: Boolean(top?.closest("#page-nav")),
      insideLeaflet: Boolean(top?.closest(".leaflet-container")),
      tagName: top?.tagName || "",
      className: typeof top?.className === "string" ? top.className : ""
    };
  });
  expect(navStackProbe.insideNav).toBeTruthy();
  expect(navStackProbe.insideLeaflet).toBeFalsy();

  await page.locator('#rofan .days .day-card:nth-of-type(4) figure.media:last-child').scrollIntoViewIfNeeded();
  await page.locator('#rofan .days .day-card:nth-of-type(4) figure.media:last-child').click();
  await expect(page.locator('#lightbox[aria-hidden="false"]')).toBeVisible();
  await expect(page.locator("#lightbox-route")).toHaveText("Rofan");
  await expect(page.locator("#lightbox-day")).toHaveText("Day 4");
  await expect(page.locator("#lightbox-stage")).toHaveText("Dalfaz Alm to Maurach");
  await expect(page.locator(".lightbox-panel")).toHaveCSS("--lightbox-accent", "#a0682c");
  const lightboxUsesFullSource = await page.evaluate(() => !document.getElementById("lightbox-image").src.includes("/media/thumbs/"));
  expect(lightboxUsesFullSource).toBeTruthy();

  // The lightbox now behaves like one continuous gallery, so the last image of Rofan Day 4
  // should advance directly into Rätikon Day 1 without closing the overlay.
  await page.locator("#lightbox-next").click();
  await expect(page.locator("#lightbox-route")).toHaveText("Rätikon");
  await expect(page.locator("#lightbox-day")).toHaveText("Day 1");
  await expect(page.locator("#lightbox-stage")).toHaveText("Seewis to Schesaplanahütte");
  await expect(page.locator(".lightbox-panel")).toHaveCSS("--lightbox-accent", "#4f8a49");
  await page.keyboard.press("Escape");
  await expect(page.locator('#lightbox[aria-hidden="true"]')).toBeHidden();

  await page.locator("#bernese .day-card figure.media").first().click();
  await expect(page.locator('#lightbox[aria-hidden="false"]')).toBeVisible();

  const lightboxStackProbe = await page.evaluate(() => {
    const image = document.getElementById("lightbox-image");
    const rect = image.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const top = document.elementsFromPoint(x, y)[0];
    return {
      insideLightbox: Boolean(top?.closest("#lightbox")),
      insideLeaflet: Boolean(top?.closest(".leaflet-container")),
      tagName: top?.tagName || "",
      className: typeof top?.className === "string" ? top.className : ""
    };
  });
  expect(lightboxStackProbe.insideLightbox).toBeTruthy();
  expect(lightboxStackProbe.insideLeaflet).toBeFalsy();
  await page.keyboard.press("Escape");
  await expect(page.locator('#lightbox[aria-hidden="true"]')).toBeHidden();

  await mkdir("artifacts", { recursive: true });
  await page.screenshot({ path: "artifacts/homepage-desktop.png", fullPage: true });
  await page.locator('iframe[data-video-id="DrTc0Tg1i2Y"]').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2500);
  await page.locator('iframe[data-video-id="DrTc0Tg1i2Y"]').screenshot({ path: "artifacts/first-video.png" });
});

test("mobile layout renders cleanly", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 430, height: 1200 },
    isMobile: true
  });
  const page = await context.newPage();

  await page.goto("http://127.0.0.1:4173/");

  await expect(page.getByRole("heading", { name: "4-day car-free alpine trip options from Rotterdam" })).toBeVisible();
  await expect(page.locator(".day-card")).toHaveCount(24);

  await mkdir("artifacts", { recursive: true });
  await page.screenshot({ path: "artifacts/homepage-mobile.png", fullPage: true });

  await context.close();
});

test("mobile landscape layout renders cleanly", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 932, height: 430 },
    isMobile: true
  });
  const page = await context.newPage();

  await page.goto("http://127.0.0.1:4173/");

  await expect(page.getByRole("heading", { name: "4-day car-free alpine trip options from Rotterdam" })).toBeVisible();
  await expect(page.locator("#page-nav a")).toHaveCount(6);
  await expect(page.locator(".day-card")).toHaveCount(24);

  await mkdir("artifacts", { recursive: true });
  await page.screenshot({ path: "artifacts/homepage-mobile-landscape.png", fullPage: true });

  await context.close();
});
