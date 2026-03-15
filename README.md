# IMPORTANT
This repo is entirely vibe coded. Just a throwaway experiment to see the current state of LLM tooling.

# README

## Requirements

- Node.js with `npm`
- A local install of project dependencies via `npm install`
- For publish: Cloudflare Pages access through `npx wrangler login` or a `CLOUDFLARE_API_TOKEN`

## Setup

```powershell
npm install
```

## Development Commands

```powershell
npm run preview
```

- Starts the local static preview server at `http://127.0.0.1:4173`

```powershell
npm run test:e2e
```

- Runs the Playwright end-to-end suite against the local preview server

```powershell
npm run test:e2e:headed
```

- Runs the same Playwright suite in headed mode

```powershell
npm run capture
```

- Generates desktop and mobile screenshots in `artifacts/`, including focused top and day-gallery views for visual design checks

```powershell
npm run media:sync
```

- Rebuilds the inline-page thumbnail set in `media/` and refreshes `media-manifest.js`

## Publish

```powershell
npm run publish
```

What it does:

- Runs `npm run publish:stage`
- Rebuilds `dist/`
- Copies `index.html`, `route-photo-data.js`, `trip-explain-data.js`, and the generated media files into `dist/`
- Deploys `dist/` with `wrangler pages deploy dist`

Notes:

- Authenticate first with `npx wrangler login`, or provide `CLOUDFLARE_API_TOKEN`
- On a first deploy, Wrangler may ask for the Pages project interactively

Manual staging only:

```powershell
npm run publish:stage
```

## GitHub Pages

- `.github/workflows/deploy-pages.yml` deploys the staged `dist/` folder to GitHub Pages on every push to `master`.
- The workflow runs:
  - `npm ci`
  - `npm run publish:stage`
  - `actions/upload-pages-artifact`
  - `actions/deploy-pages`
- `scripts/publish.mjs` now writes `dist/.nojekyll` so Pages serves the staged output as plain static files.
- In the GitHub repository settings, Pages should be set to `GitHub Actions` as the source.
- A live GitHub Pages publish still requires:
  - a real GitHub repository remote
  - push access to that repository
  - Pages enabled in the repository settings

## File Organization

- `index.html`: page markup, CSS, maps, embeds, sticky navigation, and client-side behavior
- `trip-explain-data.js`: route-specific explainer metadata, insurance / paperwork assumptions, and the 1-adult / 2-adult cost model
- `media-manifest.js`: generated thumb/full/hero mapping for inline page images
- `media/`: generated thumbnail and hero assets used by the page
- `route-photo-data.js`: per-day image data and runtime gallery population
- `AGENTS.md`: project-specific content, design, and routing constraints for future Codex sessions
- `scripts/serve.mjs`: local static server used for preview and tests
- `scripts/capture.mjs`: Playwright-based screenshot generation
- `scripts/publish.mjs`: `dist/` staging script
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow for `dist/`
- `tests/page.spec.mjs`: Playwright regression checks
- `playwright.config.mjs`: Playwright config and local server wiring
- `artifacts/`: generated screenshots
- `dist/`: staged publish output
- `test-results/`: Playwright output

## Typical Local Flow

```powershell
npm install
npm run preview
npm run test:e2e
npm run capture
```

## Project-Specific Editing Notes

- The page is intentionally factual, not sales-oriented.
- Route order is based on outbound public-transport hops first, then cleaner / faster access.
- The top of the page includes a shared overview map and a cross-route comparison block before the route sections.
- The cross-route comparison block now includes route totals, decision factors, and an indicative cost summary.
- `Fitness requirement` now lives in the decision table, not in the trip fact stack.
- That fitness column uses a concrete `1-6` hiking-fitness scale on this page.
- Facts, stats, comparison cells, and cost items are intentionally clickable and open a source-backed explainer dialog.
- The bottom source list is rendered as thumbnail cards; route-linked sources reuse the corresponding route accent and image.
- The page is intentionally photo-led:
  - larger day-gallery tiles
  - hidden in-grid captions
  - a route-specific section wash that scrolls with each route
  - a fixed full-screen route backdrop that fades to the currently active route hero image
  - stronger separation bands and spacing between route sections
- The outer-most section wrappers are intentionally transparent now.
  - The design should read as text and inner panels placed on the backdrop, not as one large card nested around smaller cards.
- Each route header now uses one runtime-built full-bleed hero image.
  - The hero should be a scenic landscape frame, ideally near 16:9.
  - The title, summit pill, and lede sit directly on the image, so keep the dark overlay and white text treatment aligned if the header changes.
- Day-gallery tiles, nav images, source-card images, and route hero / backdrop assets use managed media from `media/` where available.
- The lightbox still uses the larger source from `data-fullsrc`.
- Every route is a 4-day car-free trip from Rotterdam.
- Every route fact stack includes `Technical range`, `Footwear`, `Gear beyond boots`, and `Current planning note`.
- Every route fact stack also includes a short `Public transport` outbound summary; the detailed journey wording stays in Day 1 and Day 4.
- Visible transport summaries on the page should use the `x h journey / y changes` convention rather than raw leg counts.
- Every route fact stack also includes `Insurance / paperwork`.
- That fact uses a Dutch-traveler-from-Rotterdam assumption and should say whether any permit, registration, hut-booking step, EHIC assumption, or rescue-insurance caveat applies.
- The old `Endurance load` card was intentionally removed to avoid duplication; the same concept is now represented by the `Fitness requirement` decision column.
- Every route also includes an `Estimated cost` panel.
- Cost panels and the top cost summary now show both `1 adult` and `2 adults`.
- `Hut accommodation` is explicitly the cost of `3 overnight stays`.
- Day 1 must contain outbound travel information.
- Day 4 must contain return travel information and explain any change-count discrepancy.
- Day 2 and Day 3 must both stay at or above 3 hours of hiking.
- Each day currently renders 10 media tiles:
  - 2 in `index.html`
  - 8 appended from `route-photo-data.js`
- Day galleries now use a masonry-style multi-column layout instead of a span-heavy grid.
- Do not restore the old gallery clone filler that synthesized crop variants from surviving images.
  - It was removed because it could create repeated visible photos inside one day gallery.
- Trip-level videos are longer route videos.
- Summit clips belong inside the relevant summit day card.
- Route maps are indicative route-structure maps, not navigation tracks.
- Cost estimates are approximate by design:
  - use a budget weekday fare in the recommended hiking months
  - use adult non-member hut pricing where relevant
  - show both one-adult and two-adult totals
  - keep hut accommodation scoped to the route's three overnight stays
  - keep inferred hut cost splits labeled as such when official pages only publish bundled totals

## Important Technical Notes

- Use `npm run preview` for browser checks. Do not rely on `file://index.html`.
- The local preview server sets the referrer behavior required for stable YouTube embeds.
- `index.html` contains a runtime Commons image resolver because large numbers of Wikimedia redirect URLs caused blank image tiles and throttling.
- `index.html` also applies the gallery tile pattern, the route-header hero build, the fixed route-backdrop fade, and the route-section accent-wash styling; if any of those behaviors change, keep `AGENTS.md` and `tests/page.spec.mjs` aligned.
- After changing inline page images, nav images, or route-header hero images, rerun `npm run media:sync` before publishing.
- `npm run publish:stage` is the common staging step for both Cloudflare Pages and GitHub Pages.
- If you change route count, gallery size, or video count, update `tests/page.spec.mjs` in the same change.
- `npm run capture` now writes focused design artifacts in addition to the full-page screenshots, including:
  - `artifacts/top-focus.png`
  - `artifacts/compare-focus.png`
  - `artifacts/day-focus-loaded.png`
  - `artifacts/dolomites-days-focus.png`
