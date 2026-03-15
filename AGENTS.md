# Project Guidance For Future Codex Sessions

## What This Repo Is

- This is a static single-page trip comparison site.
- The deliverable is the HTML page in `index.html` plus the gallery data in `route-photo-data.js`.
- The page is intentionally hand-authored. There is no build step for the main page content.

## Maintenance Rules

- Treat `AGENTS.md` as a living handoff file, not as one-time documentation.
- After any substantive change, keep these in sync in the same edit when relevant:
  - `AGENTS.md`
  - `README.md`
  - inline source-code comments that explain why a behavior or constraint exists
  - tests that encode product constraints
- Do not leave comments or docs describing behavior that no longer exists.
- If a future user request changes the product constraints, update `AGENTS.md` to match the new direction.
- If a future user request conflicts with existing `AGENTS.md` guidance:
  - follow the newest explicit user instruction
  - update `AGENTS.md` so the repo reflects that new decision
  - if the conflict is non-obvious, high-impact, or ambiguous, tell the user and ask for clarification before making the change
- Keep rationale comments current. If a comment explains a workaround, fallback, layout constraint, or data assumption, revise that comment when the underlying reason changes.

## Non-Negotiable Content Style

- Keep the writing factual and descriptive.
- Do not turn the page back into a sales page.
- Avoid fluffy or persuasive phrases such as slogan-like hero copy, "why it sells", or marketing-style headers.
- Avoid duplication. The page should not describe the same route structure twice.
- Keep the top of the page minimal:
  - a single heading
  - a shared overview map showing all route locations
  - a cross-route comparison block with route totals, choice factors, and indicative cost
  - the trip navigation immediately below it
- The sticky nav is allowed to condense visually on scroll, but it must remain visible at all times.

## Route Constraints

- Every option is a `4-day car-free alpine trip option from Rotterdam`.
- All options must be reachable within about `12 hours` by public transport on a favorable departure.
- The intended dry-summer version of each route should avoid requiring a via ferrata set.
- Sort options by outbound public-transport hops first.
- If multiple options have the same change count, shorter / cleaner outbound access should come first.
- Day 1 must include outbound travel information from Rotterdam.
- Day 4 must include return travel information to Rotterdam.
- Travel notes should include:
  - total time
  - method
  - change count
  - concrete board / exit / short-walk language when that can be verified
- If the return has more or fewer hops than the arrival, explain why in the Day 4 travel note.
- Day 2 and Day 3 must each be at least `3 hours` of hiking.
- If a draft route violates that floor, lengthen or redesign the route instead of just leaving a short stage in place.

## Day Card Content Contract

- Every day card should include:
  - a short factual title
  - a one-paragraph route description
  - `Hike`, `Ascend`, `Descend`, and `Length`
  - travel info on Day 1 and Day 4 where relevant
  - either a summit clip or a stage note when relevant
  - a photo gallery for that specific day
- The current gallery contract is `10 photos per day`:
  - `2` are embedded directly in `index.html`
  - `8` are appended from `route-photo-data.js`
- Keep that contract aligned with the tests if you change it.
- Every trip-level fact stack should include `Gear beyond boots`.
- Every trip-level fact stack should also include a concise `Public transport` summary for outbound access.
- Every trip-level fact stack should also include `Insurance / paperwork`.
- Endurance / physical-load comparison now lives in the top decision table as `Fitness requirement`, not in the trip-level fact stack.
- That fitness metric should use a concrete `1-6` hiking-fitness scale on this page.
- That gear note should explicitly cover:
  - via ferrata set
  - helmet
  - snow / ice or glacier gear
  - rope
- Be explicit about helmet status:
  - not necessary / not standard
  - sensible / recommended
  - required
  depending on the route
- The trip-level `Public transport` summary should stay short:
  - total outbound time from Rotterdam
  - journey / changes
- Keep the detailed step-by-step public-transport wording in Day 1 and Day 4.
- The `Insurance / paperwork` fact should:
  - say whether any route permit or mandatory trail registration was found
  - say which traveler assumption the page used
  - say what hut-booking step matters
  - distinguish EHIC / normal state-care logic from rescue or repatriation cover
  - keep the visible card short and move the detailed logic into the explainer dialog
- The current paperwork basis is a Dutch traveler starting from Rotterdam.
- If future work changes the assumed nationality or admin basis, update both the visible fact and the explainer data in the same edit.
- Keep those notes tied to the intended dry-summer hiking version of the route, not to winter or mountaineering variants.
- `Fitness requirement` is separate from technical grade.
- The page now uses a concrete `1-6` hiking-fitness scale for that metric.
- That score should be derived from the route's actual hiking totals, biggest day, and cumulative ascent rather than guessed independently from the route name.
- Keep the visible decision cell concrete and short, such as `4 / 6`; the explainer dialog should carry the interpretation and the route-specific reasoning.

## Media Constraints

- Photos should be route-specific, not generic mountain wallpaper.
- For each day, prioritize:
  - actual trail surface / terrain for that day leg
  - the crux or hardest-looking section, if there is one
  - the hut or day-end stop
- Prefer unique, relevant images over reusing the same few pictures across multiple days.
- The page was explicitly pushed away from postcard-only imagery. Show what the walking terrain actually looks like.
- Summit clips belong inside the relevant summit day card, not in the trip-level video block.
- Each summit should have its own summit clip.
- Summit clips should stay focused on the final approach / summit top when possible.
- The trip-level video block should hold only the longer route video.

## Map Constraints

- Each trip section has one map.
- The intro area also has one shared overview map for all routes.
- The top area also has one cross-route comparison section.
- That comparison section is there to make route choice faster without re-reading six full trip sections.
- It should summarize:
  - total hiking time
  - total distance
  - total ascent and descent
  - outbound access friction
  - technical ceiling
  - weather sensitivity
  - route-finding load
  - bailout quality
  - booking certainty
- The same top comparison block should also carry an indicative cost view.
- Every trip section should also include an `Estimated cost` panel.
- Facts, stats, decision cells, and cost items should remain clickable and open the explainer dialog.
- That explainer dialog exists so a reader can understand the meaning of a statistic, see how this page arrived at it, and jump to the relevant source links without leaving context.
- Cost panels should show, at minimum:
  - public transport
  - cable cars / lifts
  - hut accommodation
  - hut water
  - hut dinner / breakfast
  - hut trail food
  - local taxes / fees
- Cost UI must show both `1 adult` and `2 adults`.
- `Hut accommodation` must explicitly mean `3 overnight stays` on the route.
- Keep cost figures explicitly approximate:
  - use a typical budget weekday fare in the recommended hiking months
  - use adult non-member hut pricing where relevant
  - keep the two-adult figure on a comparable basis; do not silently mix in private-room pricing unless that choice is clearly documented
  - say when a meal / accommodation split is inferred from a bundled half-board price
- That overview map uses one accent-colored line per route and only shows overall hike start to hike exit.
- The maps are indicative route-structure maps, not navigation tracks.
- Keep the explicit copy that tells users to use official route descriptions or GPX for navigation.
- If you change route order or add routes, update:
  - nav order
  - section order CSS
  - `routeMaps`
  - tests

## Design Constraints

- Preserve the existing visual language unless the user explicitly asks for a redesign.
- The page should remain readable and information-dense, not flashy.
- The current design direction is image-led:
  - larger photo surfaces
  - less repeated explanatory text around each image
  - restrained glass / paper panels over route-specific section washes that scroll with each route
  - a fixed full-screen route backdrop that crossfades to the currently active route hero image
- The outer-most section shells are intentionally transparent now:
  - intro
  - compare wrapper
  - trip wrapper
  - practical wrapper
  - sources wrapper
  Keep the actual card treatment on the inner panels and day cards unless the user asks for a fuller redesign.
- In-grid photo captions are intentionally hidden.
- Image descriptions should appear in the lightbox only, where route/day context is preserved.
- The nav must:
  - sit under the page heading initially
  - stay visible while scrolling
  - highlight the currently viewed section
  - show a small representative image for each route link
- Route transitions should be obvious.
  - Each route section now owns its own accent wash and separation band, and that color treatment should move with the section while scrolling.
  - A non-scrolling full-screen backdrop also fades to the active route hero image behind the route cards.
  - Keep the section-local treatment and the fixed backdrop aligned; do not let one contradict the other visually.
- The map must never overlap above the sticky nav or the lightbox.
- The image lightbox must always appear above the maps.
- The image lightbox is a continuous gallery across the full page:
  - next / previous moves in DOM order across days and then into the next trip
  - the overlay must show the current trip, day, stage line, and route accent color
- Day-card media rows were tuned so mixed content types line up better:
  - route photos
  - hut photos
  - summit clips
  - stage notes
  Do not casually undo that layout work.
- Day galleries now use a masonry-style multi-column layout instead of a span-heavy grid.
  - This was done to remove obvious holes and make the page feel closer to a photography site.
  - If you change that layout, recheck for blank slots and awkward card stacking in the captured artifacts.
- Large desktop layouts should prioritize bigger photography over squeezing in more day cards per row.
- Mobile and mobile-landscape layouts still need to remain clean after any photo-led adjustments.

## Important Implementation Notes

- `index.html` contains the markup, CSS, route metadata, maps, embeds, nav behavior, lightbox, and the Commons image URL resolver.
- `trip-explain-data.js` holds the route-specific decision-factor explanations, paperwork assumptions, source-hint lists, and the richer cost-model data.
- `media-manifest.js` and `media/` are generated assets for first-open page performance.
- The thumbnail generation command is `npm run media:sync`.
- That sync currently targets inline page gallery images, nav images, source cards, and route-header hero / backdrop sources that affect first-open load time the most.
- Day-gallery images may use managed thumbs on the page, but the lightbox should still point at the larger source in `data-fullsrc`.
- `route-photo-data.js` stores the per-day extra image data only.
- `index.html` also owns the route-section accent-wash styling and the gallery-decoration logic that enlarges selected photo tiles.
- `index.html` also builds one full-bleed route-header hero image per route.
  - That hero should use a scenic landscape image, ideally near a 16:9 composition.
  - Title copy sits directly on top of the hero, so preserve the dark overlay and text-shadow treatment that keeps the heading readable.
  - The hero source is configured from the route media metadata rather than from day-gallery tiles.
  - The same hero source also drives the fixed full-screen backdrop fade for the active route.
  - If those hero sources change, keep `scripts/sync-media.mjs` aligned so the header images still get managed assets.
- The Commons image entries intentionally use Wikimedia file titles; `index.html` rewrites those redirect URLs to direct image URLs at runtime through the Wikimedia API.
- That resolver exists because many `Special:FilePath` redirects in parallel caused blank image tiles and throttling.
- Do not reintroduce the old gallery clone / crop filler.
  - It was removed because it could repeat the same photo several times inside one day gallery when remote assets failed.
  - If a gallery image truly fails now, remove that figure instead of synthesizing a fake replacement from another image.
- YouTube embeds should be tested through `http://127.0.0.1:4173`, not by opening the file directly.
- Opening `index.html` as `file://` can trigger YouTube `Error 153`.
- `scripts/serve.mjs` sets the referrer policy needed for stable YouTube embeds.
- The source list at the bottom is rendered as thumbnail cards:
  - route-linked references should reuse the relevant route accent color and representative image
  - general references such as rail or FX sources may use neutral fallback visuals
  - if source URLs or titles change enough to break classification, update the source-card matcher logic in `index.html`
- The explainer dialog pulls source links by matching against the visible source-list labels and route-match patterns.
  - If a source title changes materially, update both `trip-explain-data.js` source hints and the matcher logic in `index.html`.
- `scripts/capture.mjs` now has a full-page screenshot fallback:
  - if Chromium refuses an oversized full-page bitmap, it falls back to a viewport capture
  - keep that behavior unless a better robust capture method replaces it
  - if capture behavior changes, update both the inline comment in `scripts/capture.mjs` and this file
- `scripts/capture.mjs` now also records focused design checkpoints, not just full-page dumps.
  - Current useful artifacts include `top-focus.png`, `compare-focus.png`, `day-focus-loaded.png`, and `dolomites-days-focus.png`.
- `scripts/publish.mjs` is the shared staging step for hosted deploys.
  - It prepares `dist/` for both Cloudflare Pages and GitHub Pages.
  - It also writes `dist/.nojekyll` so GitHub Pages serves the staged output as plain static files.
- `.github/workflows/deploy-pages.yml` is the GitHub Pages deploy path.
  - It builds `dist/` with `npm run publish:stage` and deploys that artifact with the official Pages actions.
  - If the default branch changes from `master`, update the workflow trigger in the same edit.

## Tests And Regression Expectations

- `tests/page.spec.mjs` encodes several product constraints, not just DOM existence.
- Current expected structure:
  - `6` routes
  - `6` route-section wrappers
  - `1` fixed trip-background shell with `2` crossfade layers
  - `1` top overview map
  - `1` comparison section with `2` tables, `1` cost summary block, and `6` route entries in each
  - `24` day cards
  - `24` day galleries
  - `10` media tiles per gallery
  - `6` route-header hero images
  - `6` route videos
  - `6` summit videos
  - `6` detailed route cost cards
- Tests also verify:
  - sticky nav behavior
  - active route highlighting
  - active route background accent / backdrop state
  - map count
  - z-order between nav, maps, and lightbox
  - explainer dialog behavior for facts, decision factors, and cost items
  - insurance / paperwork explainer content
  - hidden in-grid captions with lightbox copy still intact
  - uniqueness of image URLs within each day gallery
  - fitness-requirement decision rendering
  - source-card rendering and route / generic classification
  - Day 2 and Day 3 minimum hiking duration
- If you intentionally change those contracts, update the tests in the same edit.

## Local Workflow

- Use:
  - `npm run preview`
  - `npm run media:sync`
  - `npm run test:e2e`
  - `npm run test:e2e:headed`
  - `npm run capture`
  - `npm run publish`
- After content-heavy changes, run at least:
  - `npm run test:e2e`
  - `npm run capture`
- If image-heavy edits were made, inspect the generated screenshots in `artifacts/`.
- If inline page images, nav images, or the route backdrops changed, rerun `npm run media:sync` before testing or publishing.
- For design checks, the most useful current artifacts are:
  - `artifacts/top-focus.png`
  - `artifacts/day-focus-loaded.png`
  - `artifacts/lightbox-gallery.png`

## Current Route Order And Reasoning

- Current order is based on outbound hops, then cleaner / faster access:
  - `Karwendel`
  - `Stubai`
  - `Dolomites`
  - `Rofan`
  - `Rätikon`
  - `Bernese Oberland`
- The current Karwendel version is the Bettelwurfhütte - Speckkarspitze - Pfeishütte - Goetheweg line.
  - It replaced the older Großer Bettelwurf variant specifically to remove the via-ferrata-set requirement while keeping the same region and access chain.
- Keep this principle if routes are added, removed, or updated.

## When Editing Route Data

- Recheck public transport if the user asks for "latest", "best", "most favorable", or similar.
- Recheck hut operational status before changing booking language.
- Recheck summit videos and photo relevance if you swap routes or change summit days.
- Recheck cost assumptions if transport chains, hut choices, or hiking months change.
- Keep source links current in the sources section near the bottom of `index.html`, including pricing sources when cost figures change.
- If cost figures change, update:
  - the `costRoutes` data in `index.html`
  - the top comparison cost summary
  - the per-route cost cards
  - the source list and any related inline comments
