# Minerals Solutions — Internal Linking Implementation Report

**Project:** Minerals Solutions (`https://mineralssolution.in/`)  
**Implementation Date:** November 18, 2026  
**Status:** Completed & Verified — Phase 1 + Approved Phase 2 (`npx tsc --noEmit` + `npm run build` passing 100%, 36/36 static pages prerendered)  
**Scope Executed:** All P0, P1, and P2 verified internal linking, navigation deduplication, stretched-link card consolidation, schema, and accessibility recommendations from [internal-linking-audit.md](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/docs/seo/internal-linking-audit.md) and [contextual-link-insertion-plan.md](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/docs/seo/contextual-link-insertion-plan.md).

---

## 1. Executive Implementation Summary

| Metric | Before Implementation (Audit Baseline) | After Implementation (Phase 1 + Phase 2) | Delta / Impact |
|---|---:|---:|---|
| **Routes receiving contextual / discovery incoming links** | 7 of 29 (24.1%) | **27 of 29 (93.1%)** | +20 routes (all non-root/hub routes covered) |
| **Equipment spokes receiving contextual incoming links** | 1 of 16 (6.3%) | **16 of 16 (100%)** | **100% spoke coverage achieved** |
| **Inline contextual prose / FAQ / spec links** | 11 product/mfg (+5 spec RFQ) | **141 product/mfg/E-E-A-T** (+5 spec RFQ) | **+130 newly added** (+ 5 refined to exact spokes) |
| **Structured discovery links added** (Homepage industries, `/industries/` chips, `/products/` H2s, `/request-quote/` sidebar, `/manufacturing/` RFQ CTA) | 0 | **45** | **+45 newly added** |
| **Total net new internal links added** | — | **175** | Verified across 28 routes & shared components |
| **Redundant sitewide links removed** (Header mega-menu duplicates + triple-linked product cards) | 244 redundant nodes | **0** | **-116 Header duplicates** + **-128 card duplicates** |
| **`forged-trunnion-rollers/` contextual incoming source pages** | 0 | **12 pages** | Rescued from isolation across Dryers, Fertilizer, Mfg, About, Industries |
| **`mineral-log-washer/` contextual incoming source pages** | 0 | **6 pages** | Rescued across all Pillar 2 siblings, Homepage & Morbi/Quartz sectors |
| **`/manufacturing/` contextual incoming source pages** | 1 | **24 pages** | Central E-E-A-T fabrication proof hub connected sitewide |
| **`/industries/` unique spokes linked** | 8 of 16 (50%) | **16 of 16 (100%) + 4 pillars** | Complete sector-to-equipment coverage |
| **Hardcoded wrong phone (`tel:+919227004455`) instances** | 10 (across 5 spokes) | **0** | 100% unified on `company.telephones[0]` |
| **Broken redirect hash fragments (`next.config.ts`)** | 4 (`#process`, `#machinery`, 2× `#conveyors`) | **0** | All 4 target section `id`s verified in DOM |
| **RFQ `?product=` / `?sector=` context handoff** | 0% (ignored) | **100% wired** | `useSearchParams()` + `<Suspense>` in `RequestQuoteClient` |
| **Nested `<main>` landmarks on spoke pages** | 16 pages | **0 pages** | Clean single `<main id="main-content">` landmark sitewide |

---

## 2. Files Modified (`33` Files Total)

### Root Layout & Shared Components (`6` Files)
1. `app/layout.tsx` — Removed broken `WebSite` `SearchAction` schema pointing to `/products/?q={search_term_string}`.
2. `components/layout/Header.tsx` — Converted top-level `"Products"` into a real `<Link href="/products/">` with chevron dropdown button; removed 4 duplicate bottom mega-menu pillar links (**-116 sitewide link instances**) and cleaned keyword-stuffed `title`/`aria-label` strings.
3. `components/ui/FaqAccordion.tsx` — Added optional `answerNode?: React.ReactNode` prop on `FaqItem` (keeping `answer: string` untouched for `FAQPage` JSON-LD).
4. `components/ui/TechnicalSpecTable.tsx` — Added optional `valueNode?: React.ReactNode` prop on `SpecRow` (keeping `value: string` untouched).
5. `components/quote/RequestQuoteClient.tsx` — Wired `useSearchParams()` for `?product=` and `?sector=` pre-selection (supporting all 4 categories + 16 spoke slugs + legacy singular aliases); added contextual links to `/privacy-policy/`, `/terms/`, `/manufacturing/`, `/contact/`, and all 4 product pillars.
6. `components/contact/ContactClient.tsx` — Added 3 contextual links in hero paragraph (`/request-quote/`, `forged-trunnion-rollers/`, `/manufacturing/`).

### Next.js App Router Pages (`27` Page Files Covering `28` Active Routes)
- **Core, Company, Hub, Legal & Conversion (`7` files):** `app/(site)/page.tsx`, `app/(site)/about/page.tsx`, `app/(site)/manufacturing/page.tsx`, `app/(site)/products/page.tsx`, `app/(site)/industries/page.tsx`, `app/(site)/request-quote/page.tsx` (`<Suspense>` wrapper), `app/(site)/terms/page.tsx`.
- **Pillar 1 — Industrial Rotary Dryers (`5` files):** Pillar hub + `triple-pass-dryer`, `sand-dryer`, `chemical-powder-dryer`, `biomass-sawdust-dryer`.
- **Pillar 2 — Sand Washing Plants (`5` files):** Pillar hub + `silica-sand-washing-plant`, `bucket-wheel-sand-washer`, `hydrocyclone-sand-separator`, `mineral-log-washer`.
- **Pillar 3 — Fertilizer Granulation Plants (`5` files):** Pillar hub + `disc-granulator`, `double-roller-granulator`, `rotary-drum-granulator`, `fertilizer-cooling-coating-drum`.
- **Pillar 4 — Industrial Conveyors & Spares (`5` files):** Pillar hub + `belt-conveyors`, `bucket-elevators`, `screw-conveyors`, `forged-trunnion-rollers`.

*(Not modified: `app/(site)/privacy-policy/page.tsx` — legal policy page requiring no outbound machinery links; `app/(site)/contact/page.tsx` — server wrapper delegating UI to modified `ContactClient.tsx`.)*

---

## 3. Complete Log of Added & Refined Internal Links

### 3.1 Existing Over-Broad Contextual Links Refined (`5` Fixes — P1)

| Ref | Source Page | Old Target → New Target | Exact Anchor Text | Reason |
|---|---|---|---|---|
| R1 | `/products/industrial-rotary-dryers/` | `/products/industrial-conveyors-spares/` → `/products/industrial-conveyors-spares/belt-conveyors/` | `troughed belt conveyors` | Exact spoke match for hot-discharge dryer conveyors |
| R2 | `/products/sand-washing-plants/` | `/products/industrial-conveyors-spares/` → `/products/industrial-conveyors-spares/belt-conveyors/` | `heavy belt conveyors` | Exact spoke match for wet washed sand transfer |
| R3 | `/products/fertilizer-granulation-plants/` | `/products/industrial-conveyors-spares/` → `/products/industrial-conveyors-spares/belt-conveyors/` | `troughed belt conveyors` | Exact spoke match for inter-stage granulation belts |
| R4 | `/products/industrial-conveyors-spares/` | `/products/industrial-rotary-dryers/` → `/products/industrial-rotary-dryers/sand-dryer/` | `rotary sand dryers` | Exact spoke match for washed-sand thermal drying |
| R5 | `/products/industrial-conveyors-spares/` | `/products/fertilizer-granulation-plants/` → `/products/fertilizer-granulation-plants/disc-granulator/` | `fertilizer granulation pans` | Exact spoke match for MS-PG pan disc granulators |

### 3.2 Core, E-E-A-T, Catalog, Industries & Conversion Pages (`70` Links Added)

| Source Page | Links Added | Destination(s) & Exact Anchor Text | Context & Audit Reference |
|---|---:|---|---|
| `/` (Homepage) | **14** | 6 FAQ links: `triple-pass rotary dryer` → `triple-pass-dryer/`, `sand washing plants` → `sand-washing-plants/`, `hydrocyclone separator units` → `hydrocyclone-sand-separator/`, `heavy workshop for in-person inspection` → `/manufacturing/`, `Trunnion riding tyres` → `forged-trunnion-rollers/`, `disc pan granulators` → `disc-granulator/`. 8 Industry cards linked: `Silica Sand & Foundry` → `sand-dryer/`, `Fertilizer & Bio-Compost` → `fertilizer-granulation-plants/`, `Chemicals & Industrial Salts` → `chemical-powder-dryer/`, `Biomass & Wood Pelletizing` → `biomass-sawdust-dryer/`, `River Sand & Aggregate Washing` → `sand-washing-plants/`, `Fly Ash & Slag Processing` → `triple-pass-dryer/`, `Mineral Beneficiation & Clays` → `mineral-log-washer/`, `Bulk Material Handling` → `belt-conveyors/`. *(Also fixed duplicate `"Explore Industrial Specs"` anchor bug, `"View Specifications"` → `"Rotary Dryer Specifications"`, `"Learn More..."` → `"Explore All 9 Industrial Applications"`, wired `?product=` on 4 card Quote buttons, forwarded `answerNode`, and removed visible `/llms-full.txt` FAQ footer link.)* | Audit P0-4, Plan #35, #57–#61 |
| `/about/` | **5** | Hero intro: `industrial rotary dryers` → Pillar 1, `fertilizer granulation plants` → Pillar 3, `sand washing systems` → Pillar 2, `bulk material handling conveyors` → Pillar 4. Principles card: `trunnion bearing assembly` → `forged-trunnion-rollers/`. | Audit P0-5, Plan #44–#45 |
| `/manufacturing/` | **8** | Cap 02: `rotary dryers` → Pillar 1, `pan granulators` → `disc-granulator/`. Cap 04: `trunnion roller shafts` → `forged-trunnion-rollers/`. Cap 07: `granulator` → Pillar 3, `conveyor module` → `belt-conveyors/`. Bottom CTA: `trunnion roller forgings` → `forged-trunnion-rollers/`, `senior engineering team` → `/about/`, CTA button `Request Engineering Quote` → `/request-quote/`. | Audit P0-5, Plan #39–#43, P-A3 |
| `/products/` | **6** | Intro: `Zak GIDC works` → `/manufacturing/`, `industrial sector applications` → `/industries/`. 4 Division `<h2>` headings linked to all 4 pillar hubs. *(Also replaced 4× `"Explore Specifications"` with division-specific labels and wired `?product=` on 4 Quote buttons.)* | Audit P1, Matrix `/products/` |
| `/industries/` | **35** | 9 inline challenge/solution links (`rotary mineral dryers`, `heavy log washers`, `washed silica sand`, `Pan/disc granulators`, `rotary coolers and anti-caking coating drums`, `bucket wheel washers`, `polyurethane hydrocyclones`, `Triple pass rotary drum dryers`, `troughed belt conveyors`) + **26 clickable Recommended Equipment chips** covering all 16 spokes + 4 pillars. *(Also wired `?sector=<slug>` on all 9 sector RFQ buttons.)* | Audit P1-9, Plan #27–#34, P-A4 |
| `/contact/` (`ContactClient`) | **3** | Hero paragraph: `equipment quotes` → `/request-quote/`, `replacement spares` → `forged-trunnion-rollers/`, `Zak GIDC plant` → `/manufacturing/`. | Plan P-A1 |
| `/request-quote/` (`RequestQuoteClient`) | **8** | Confidentiality note: `Privacy Policy` → `/privacy-policy/`, `Terms of Supply` → `/terms/`. Works sidebar: `Inspect Fabrication Bay` → `/manufacturing/`, `Works Contact Desk` → `/contact/`. Spec reference card: all 4 product pillars. *(Plus wired `useSearchParams()` for `?product=` / `?sector=`.)* | Audit P0-2, Plan P-A2 |
| `/terms/` | **1** | Inspection clause: `Zak GIDC workshop` → `/manufacturing/`. | Matrix `/terms/` |

### 3.3 Product Pillars & Spokes Contextual Links (`105` Links Added)

| Source Page | New Links | Destination(s) & Exact Anchor Text | Context & Audit Ref |
|---|---:|---|---|
| `/products/industrial-rotary-dryers/` | **3** | Spec table (`L110`): `forged alloy steel (EN-8 / EN-9) rollers` → `forged-trunnion-rollers/`. FAQ #3: `support trunnion rollers` → `forged-trunnion-rollers/`. FAQ #4: `Zak GIDC works` → `/manufacturing/`. *(+ R1 refinement + stretched-link cards)* | Plan #51, #62, R1 |
| `.../triple-pass-dryer/` | **6** | QA card: `Solid forged alloy steel rollers` → `forged-trunnion-rollers/`. FAQ #3: `Sand Washing Plant` → `silica-sand-washing-plant/`, `Double-Pass Dryer` → `industrial-rotary-dryers/`. FAQ #4: `chemical and food-grade mineral drying` → `chemical-powder-dryer/`. FAQ #5: `Dahegam facility` → `/manufacturing/`, `trunnions are forged from high-hardness EN-8/EN-9 alloy steel` → `forged-trunnion-rollers/`. | Plan #1, #63–#64 |
| `.../sand-dryer/` | **6** | Stage 1 physics: `bucket washers` → `bucket-wheel-sand-washer/`. Spec intro: `our Zak GIDC workshops` → `/manufacturing/`. Lifter section: `heat-resistant troughed belt conveyors` → `belt-conveyors/`, `forged trunnion support rollers` → `forged-trunnion-rollers/`. Morbi cluster app: `vitrified tile body preparation` → `/industries/`. FAQ #3: `trunnion rollers` → `forged-trunnion-rollers/`. | Plan #12, #36, #46, P-A6 |
| `.../chemical-powder-dryer/` | **2** | Hero: `borax, chemical salts, pharmaceutical intermediates` → `/industries/`. FAQ #4: `our Zak GIDC workshops` → `/manufacturing/`. | Plan #37 |
| `.../biomass-sawdust-dryer/` | **5** | Step 1 feed: `Tubular screw feeder` → `screw-conveyors/`, `inclined belt conveyor` → `belt-conveyors/`. Physics lead: `mineral sand dryers` → `sand-dryer/`. FAQ #5: `trunnion rollers` → `forged-trunnion-rollers/`, `screw conveyor feed` → `screw-conveyors/`. | Plan #13–#15, #65 |
| `/products/sand-washing-plants/` | **6** | Feed guidance: `intensive attrition log washers` → `mineral-log-washer/`, `bucket wheel desliming` → `bucket-wheel-sand-washer/`, `Polyurethane hydrocyclone circuits` → `hydrocyclone-sand-separator/`. Engineering note: `Zak GIDC` → `/manufacturing/`. FAQ #3: `trough belt conveyor` → `belt-conveyors/`, `industrial rotary sand dryer` → `sand-dryer/`. *(+ R2 refinement + `id="machinery"` + stretched-link cards)* | Plan #9–#11, #66, R2 |
| `.../silica-sand-washing-plant/` | **8** | Hero: `twin-shaft attrition log washers` → `mineral-log-washer/`, `polyurethane hydrocyclone desliming` → `hydrocyclone-sand-separator/`. Purity intro: `our Dahegam-manufactured lines` → `/manufacturing/`. Recovery lead: `bucket wheel sand washers` → `bucket-wheel-sand-washer/`. FAQ #2: `twin-shaft log washer` → `mineral-log-washer/`, `downstream hydrocyclone` → `hydrocyclone-sand-separator/`. FAQ #5: `inclined troughed belt conveyor` → `belt-conveyors/`, `Industrial Rotary Sand Dryer` → `sand-dryer/`. | Plan #5–#6, #16, #47, #67–#68 |
| `.../bucket-wheel-sand-washer/` | **4** | Comparison callout: `twin-shaft mineral log washer` → `mineral-log-washer/`, `M24 troughed belt conveyors` → `belt-conveyors/`. FAQ #5: `hydrocyclone dewatering screen` → `hydrocyclone-sand-separator/`. FAQ #6: `Zak GIDC, Dahegam` → `/manufacturing/`. | Plan P-A7 |
| `.../hydrocyclone-sand-separator/` | **5** | Fluid dynamics intro: `bucket wheels` → `bucket-wheel-sand-washer/`, `log washers` → `mineral-log-washer/`. FAQ #5: `bucket wheel washers` → `bucket-wheel-sand-washer/`, `log washers` → `mineral-log-washer/`. FAQ #6: `Zak GIDC, Dahegam facility` → `/manufacturing/`. | Plan #7–#8, #70 |
| `.../mineral-log-washer/` | **3** | Bottom CTA: `our Dahegam heavy fabrication workshop` → `/manufacturing/`. FAQ #1: `bucket wheel washers` → `bucket-wheel-sand-washer/`. FAQ #6: `Hydrocyclone Fine Sand Recovery Unit (MS-FSR series)` → `hydrocyclone-sand-separator/`. | Plan #48, #69 |
| `/products/fertilizer-granulation-plants/` | **8** | Hero: `disc pan granulators with stepless tilt control` → `disc-granulator/`, `rotary cooling and conditioning drums` → `fertilizer-cooling-coating-drum/`. Comparison intro: `disc pan granulator` → `disc-granulator/`, `heavy rotary drum granulator` → `rotary-drum-granulator/`. Callout: `Zak GIDC` → `/manufacturing/`. FAQ #1: `Pan (disc) granulators` → `disc-granulator/`, `Rotary drum granulators` → `rotary-drum-granulator/`. FAQ #3: `rotary cooler and downstream coating drum` → `fertilizer-cooling-coating-drum/`. *(+ R3 refinement + `id="process"` + stretched-link cards)* | Plan #17–#19, R3 |
| `.../disc-granulator/` | **5** | Applications lead: `fertilizer plants and mineral processing facilities` → `/industries/`. Quality lead: `dust-tight screw conveyors` → `screw-conveyors/`, `rotary cooling and anti-caking coating drum` → `fertilizer-cooling-coating-drum/`. FAQ #3: `downstream rotary drum dryer` → `triple-pass-dryer/`. FAQ #6: `our Zak GIDC, Dahegam facility` → `/manufacturing/`. | Plan #38, #71, P-A5 |
| `.../double-roller-granulator/` | **6** | Economics intro: `wet drum` → `rotary-drum-granulator/`, `pan granulation` → `disc-granulator/`, `rotary dryers` → `industrial-rotary-dryers/`. Stage 05: `bucket elevator` → `bucket-elevators/`. FAQ #5: `bucket elevator` → `bucket-elevators/`. FAQ #6: `our Zak GIDC, Dahegam facility` → `/manufacturing/`. | Plan #20–#21, #72 |
| `.../rotary-drum-granulator/` | **8** | Features: `spherical roller bearing trunnions` → `forged-trunnion-rollers/`. Circuit Steps 2 & 4: `Rotary dryer` → `triple-pass-dryer/`, `Coating drum` → `fertilizer-cooling-coating-drum/`. Bottom CTA: `heavy steel plate rolling, submerged arc welding, and girth gear machining` → `/manufacturing/`. FAQ #5: `Support trunnions` → `forged-trunnion-rollers/`. FAQ #6: `Heavy Duty Rotary Drum Dryer` → `industrial-rotary-dryers/`, `Rotary Coating Drum` → `fertilizer-cooling-coating-drum/`, `bucket elevators` → `bucket-elevators/`. | Plan #3, #22–#23, #49, #73 |
| `.../fertilizer-cooling-coating-drum/` | **4** | Stage 04: `packaging elevator` → `bucket-elevators/`. Quality section: `10, Shyam Estate, Zak GIDC, Dahegam manufacturing facility` → `/manufacturing/`, `trunnion rollers mounted on spherical roller bearings` → `forged-trunnion-rollers/`. FAQ #1: `rotary drying drum` → `industrial-rotary-dryers/`. *(+ P0 fixed 2 wrong `tel:+919227004455` buttons)* | Audit P0-1, Plan #2, #24, #74 |
| `/products/industrial-conveyors-spares/` | **4** | Intro: `forged replacement trunnion support rollers and split girth gears` → `forged-trunnion-rollers/`. Comparison intro: `Trunnion support rollers` → `forged-trunnion-rollers/`. FAQ #1: `Forged EN-8/EN-9 rollers` → `forged-trunnion-rollers/`. FAQ #4: `heavy machine shop in Zak GIDC` → `/manufacturing/`. *(+ R4 & R5 refinements + `id="conveyors"` + stretched-link cards)* | Plan #4, #56, R4–R5 |
| `.../belt-conveyors/` | **3** | 30° Trough card: `sand washing plants` → `sand-washing-plants/`. Specs intro: `our Zak GIDC, Dahegam facility` → `/manufacturing/`. HR/SHR card: `industrial rotary sand dryers` → `sand-dryer/`. *(+ P0 fixed 2 wrong `tel:+919227004455` buttons)* | Audit P0-1, Plan #25 |
| `.../bucket-elevators/` | **2** | Hero: `fertilizer granules` → `fertilizer-granulation-plants/`. Workshop section: `our Zak GIDC, Dahegam workshop` → `/manufacturing/`. *(+ P0 fixed 2 wrong `tel:+919227004455` buttons + normalized `?product=bucket-elevators`)* | Audit P0-1, Matrix |
| `.../screw-conveyors/` | **4** | Intro: `Open belt conveyors` → `belt-conveyors/`. Footprint card: `rotary dryers` → `industrial-rotary-dryers/`. Workshop intro: `our Zak GIDC, Dahegam facility` → `/manufacturing/`. Sanitary card: `SS304/SS316 food and chemical augers` → `chemical-powder-dryer/`. *(+ P0 fixed 2 wrong `tel:+919227004455` buttons + normalized `?product=screw-conveyors`)* | Audit P0-1, Plan #26 |
| `.../forged-trunnion-rollers/` | **3** | EN-8 card: `sand dryers` → `sand-dryer/`, `granulators` → `rotary-drum-granulator/`. Emergency breakdown section: `our Zak GIDC, Dahegam facility` → `/manufacturing/`. *(+ P0 fixed 2 wrong `tel:+919227004455` buttons)* | Audit P0-1, Plan #50, #54–#55 |

---

## 4. Phase 2 Approved Structural, Navigation, Schema & Accessibility Pass

Following explicit user approval, all previously deferred structural, navigation, schema, and accessibility improvements were executed and build-verified:

| Item | Files Modified | Exact Change & SEO / Accessibility Impact |
|---|---|---|
| **Header Mega-Menu Deduplication & Direct Products Link** | `components/layout/Header.tsx` | Converted top-level `"Products"` into a real `<Link href="/products/">` paired with a separate chevron toggle button; removed the 4 duplicate bottom `"Explore ... in Gujarat/India"` links inside the desktop mega-menu (**-116 redundant internal link instances** sitewide across 29 pages) and removed keyword-stuffed `title`/`aria-label` strings. |
| **Stretched-Link Product Card Deduplication (52 Card Templates)** | All 4 Pillar hubs + All 16 Spoke pages (`20` files) | Replaced triple-linked cards (Image `<Link>` + `<h3><Link>` + generic bottom `<Link>`) with a single accessible stretched `<Link>` on the descriptive `<h3>` machine title (`after:absolute after:inset-0` on `relative` card containers) and converted `"View Machine Specifications"` / `"Explore Complementary Machine"` into visual `aria-hidden="true"` cues (**-128 redundant card links** across 20 product pages; full card remains 100% clickable). |
| **Nested `<main>` Landmark Removal** | All 16 Spoke pages (`16` files) | Replaced redundant inner `<main>` tags with `<div>` containers so every page exposes a single semantic `<main id="main-content">` landmark from `app/(site)/layout.tsx`. |
| **FAQ `answerNode` Rendering Forwarding** | `app/(site)/page.tsx` + 6 Spoke pages (`disc-granulator`, `double-roller-granulator`, `rotary-drum-granulator`, `bucket-wheel-sand-washer`, `hydrocyclone-sand-separator`, `mineral-log-washer`) | Forwarded `answerNode` in Homepage's `FaqAccordion` mapping and updated inline `{faq.answer}` renders on the 6 spoke pages so 100% of FAQ contextual links render live while keeping plain-text `FAQPage` JSON-LD intact. |
| **Removed Invalid `WebSite` `SearchAction` Schema** | `app/layout.tsx` | Removed `potentialAction` (`SearchAction` targeting `/products/?q={search_term_string}`) because `/products/` is a static catalog page without search filtering. |
| **Removed Visible `/llms-full.txt` Link in Homepage FAQ UI** | `app/(site)/page.tsx` | Removed raw `.txt` link from visible buyer FAQ footer while preserving machine-readable `<link rel="alternate" type="text/plain" href=".../llms-full.txt">` in `app/layout.tsx` `<head>`. |

### Cleanup & Tooling Completed
- **Removed unused legacy `data/routes.ts`** (`git rm data/routes.ts` — confirmed 0 imports across the repository).
- **Installed & configured ESLint 9 + `eslint-config-next` 16** (`eslint.config.mjs` using Next.js `core-web-vitals` + `typescript` flat config) and resolved all 7 repo-wide ESLint errors (`AgentationClient.tsx`, `Header.tsx`, `RequestQuoteClient.tsx`, `ContactClient.tsx`, `page.tsx`, `sand-dryer/page.tsx`).

---

## 5. Validation & Production Build Results

| Verification Check | Command / Tool | Actual Result |
|---|---|---|
| **ESLint Check** | `npm run lint -- --quiet` (`eslint --quiet`) | **PASS** — Exit code `0` (**0 errors**) |
| **TypeScript Type Check** | `npm run typecheck` (`tsc --noEmit`) | **PASS** — Exit code `0` (**0 errors**) |
| **Next.js Production Build** | `npm run build` (`next build --webpack`) | **PASS** — Exit code `0`; compiled in **21.1s**, TypeScript passed in **10.4s**, **36/36 static pages prerendered** in **5.5s** cleanly (all 29 routes + sitemap/robots/OG images + `/api/quote`) |
| **Route & Trailing-Slash Integrity** | Automated validator across all 29 routes + Header/Client components | **PASS** — `0` broken routes (404s), `0` missing trailing slashes (0 redirect hops) |
| **Wrong Phone Number Sweep** | `Select-String` for `9227004455` / `92270 04455` across `app/` & `components/` | **PASS** — `0` matches remaining |
| **Redirect Hash Target Verification** | Automated DOM `id` check on `next.config.ts` redirect destinations | **PASS** — All 4/4 targets verified (`#configurations`, `#process`, `#machinery`, `#conveyors`) |
| **Phase 2 Structural Assertions** | Automated check across all 29 pages + `layout.tsx` + `Header.tsx` | **PASS** — `0` nested `<main>` tags, `52/52` stretched card templates, `0` unforwarded FAQ `answerNode`s, `SearchAction` removed, `/llms-full.txt` removed from Homepage UI (`<head>` alternate preserved), Header deduplicated & `"Products"` linked |

---

## 6. Remaining Opportunities (Post-DNS Launch Only)

1. **Post-DNS Live Crawl Audit (upon launch):** Once `https://mineralssolution.in/` resolves in DNS, run a live HTTP 200/301 crawl across all 29 routes and all 60+ `next.config.ts` legacy redirects, smoke-test `?product=` / `?sector=` pre-selection on `/request-quote/`, and submit `https://mineralssolution.in/sitemap.xml` in Google Search Console.
