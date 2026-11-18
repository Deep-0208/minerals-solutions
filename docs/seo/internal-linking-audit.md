# Minerals Solutions — Comprehensive Internal Linking & Content Contextual Link Audit

**Project:** Minerals Solutions (`https://mineralssolution.in/`)  
**Audit Date:** November 18, 2026  
**Implementation Status:** **Implemented (P0, P1, P2 Verified Items — November 18, 2026)** — See [internal-linking-implementation.md](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/docs/seo/internal-linking-implementation.md) for the complete log of 175 added links, 5 refined pillar links, phone & `?product=` fixes, and passing `tsc` + `next build` validation.  
**Original Audit Mode:** Audit & Recommendations Only (Baseline Snapshot Preserved Below)  
**Scope:** Full 29-route Next.js App Router repository (`app/(site)/`) + shared navigation/conversion components + `next.config.ts` redirect rules + `app/sitemap.ts` + `public/llms.txt`

---

## 1. Executive Summary

Minerals Solutions has expanded from the **11 pages** recorded in the original Gate 6 audit to **29 indexable routes**: 1 homepage, 6 core company/hub/conversion pages, 2 legal pages, 4 machinery pillar hubs, and 16 dedicated equipment spoke pages. The site now has strong technical product copy, structured specification tables, and 103 technical FAQs.

However, from an **internal linking architecture and contextual SEO** perspective, the website relies almost entirely on global chrome (mega-menu header, footer, breadcrumbs) and bottom-of-page product cards. Across all 29 pages and **1,798 rendered internal link instances**, there are only **11 true contextual product/manufacturing links** and **5 inline spec-table quotation links** (**16 contextual body links total** — just **0.89%** of all internal links).

### Headline Audit Findings
- **Severe Contextual Link Deficit:** **22 of 29 pages (75.9%)** — including **15 of the 16 individual machinery spoke pages (93.8%)** — receive **zero** contextual incoming links from body copy on other pages.
- **Zero FAQ-Based Internal Linking:** **0 of 103 FAQ answers** contain any internal link, largely because `FaqAccordion.tsx` types `answer` strictly as a plain `string` rather than supporting rich JSX nodes alongside plain-text JSON-LD strings.
- **Two Critically Under-Linked Machinery Spokes:**
  - `/products/industrial-conveyors-spares/forged-trunnion-rollers/` receives **zero** links from its 3 sibling conveyor spokes, **zero** links from any rotary dryer or fertilizer drum page (despite every rotary drum describing forged EN-8/EN-9/42CrMo4 trunnion rollers), and **zero** links from `/industries/` or `/manufacturing/`.
  - `/products/sand-washing-plants/mineral-log-washer/` receives **zero** links from any of its 3 sibling sand-washing spokes (`silica-sand-washing-plant`, `bucket-wheel-sand-washer`, `hydrocyclone-sand-separator`) and **zero** cross-pillar links.
- **E-E-A-T & Industry Isolation:** `/manufacturing/` and `/about/` have **zero** outbound links to any product hub or spoke page; `/industries/` links to **0 of 4 pillar hubs**, misses **8 of 16 spokes**, and receives **zero** reciprocal links from any product page.
- **P0 Conversion & Technical Bugs Discovered:**
  1. **Broken Product Context Handoff on `/request-quote/`:** 18 product pages pass `?product=...` query parameters (e.g., `/request-quote/?product=triple-pass-dryer`), but `components/quote/RequestQuoteClient.tsx` never reads `useSearchParams()` and always defaults to `rotary-dryers`, discarding buyer product intent.
  2. **Unverified/Wrong Phone Number on 5 Spoke Pages:** Five spoke pages hardcode `tel:+919227004455` (`+91 92270 04455`) instead of the verified Zak GIDC hotlines in `data/company.ts` (`+91 63524 53050` / `+91 91061 63058`).
  3. **Broken Hash Fragment Redirects in `next.config.ts`:** 4 permanent 301 redirects point to `#process`, `#machinery`, and `#conveyors` anchors that do not exist as DOM `id` attributes on their destination pages.
  4. **Duplicate/Broken Dynamic Anchor on Homepage:** `Explore {item.title.split(' ')[0]} Specs` outputs identical anchor text **`"Explore Industrial Specs"`** for two completely different pillars (`/products/industrial-rotary-dryers/` and `/products/industrial-conveyors-spares/`).

> [!IMPORTANT]
> **Live Domain Resolution Note:** During live discovery, `https://mineralssolution.in/`, `/sitemap.xml`, and `/robots.txt` failed to resolve in DNS (NXDOMAIN / unconfigured DNS A/AAAA/CNAME records at audit time, while external domains resolved normally). Therefore, all route discovery, canonical verification, redirect mapping, and link extraction were conducted directly against the authoritative Next.js App Router codebase (`app/(site)/`, `app/sitemap.ts`, `next.config.ts`, `lib/seo.ts`, and `components/`). Live HTTP 200/301 verification must be re-run immediately after DNS cutover.

---

## 2. Complete Website Discovery & Route Inventory

All **29 indexable routes** exist in `app/(site)/` and match `app/sitemap.ts` with `trailingSlash: true` enforced in `next.config.ts`. No unpublished draft routes exist inside `app/(site)/`.

| # | Route Path | Page Group | Status vs Gate 6 (11 Pages) | FAQs |
|---|---|---|---|---|
| 1 | `/` | Homepage | Original (11) | 6 |
| 2 | `/about/` | Company / E-E-A-T | Original (11) | 0 |
| 3 | `/contact/` | Conversion / Works Desk | Original (11) | 0 |
| 4 | `/industries/` | Industry Applications Hub | Original (11) | 0 |
| 5 | `/manufacturing/` | Manufacturing / E-E-A-T | Original (11) | 0 |
| 6 | `/request-quote/` | Conversion / RFQ Funnel | Original (11) | 0 |
| 7 | `/products/` | Master Product Catalog Hub | Original (11) | 0 |
| 8 | `/privacy-policy/` | Legal | New since Gate 6 | 0 |
| 9 | `/terms/` | Legal | New since Gate 6 | 0 |
| 10 | `/products/industrial-rotary-dryers/` | Pillar 1 Hub (Dryers) | Original (11) | 4 |
| 11 | `/products/industrial-rotary-dryers/triple-pass-dryer/` | Pillar 1 Spoke | New since Gate 6 | 5 |
| 12 | `/products/industrial-rotary-dryers/sand-dryer/` | Pillar 1 Spoke | New since Gate 6 | 5 |
| 13 | `/products/industrial-rotary-dryers/chemical-powder-dryer/` | Pillar 1 Spoke | New since Gate 6 | 5 |
| 14 | `/products/industrial-rotary-dryers/biomass-sawdust-dryer/` | Pillar 1 Spoke | New since Gate 6 | 5 |
| 15 | `/products/sand-washing-plants/` | Pillar 2 Hub (Sand Washing) | Original (11) | 4 |
| 16 | `/products/sand-washing-plants/silica-sand-washing-plant/` | Pillar 2 Spoke | New since Gate 6 | 5 |
| 17 | `/products/sand-washing-plants/bucket-wheel-sand-washer/` | Pillar 2 Spoke | New since Gate 6 | 6 |
| 18 | `/products/sand-washing-plants/hydrocyclone-sand-separator/` | Pillar 2 Spoke | New since Gate 6 | 6 |
| 19 | `/products/sand-washing-plants/mineral-log-washer/` | Pillar 2 Spoke | New since Gate 6 | 6 |
| 20 | `/products/fertilizer-granulation-plants/` | Pillar 3 Hub (Fertilizer) | Original (11) | 4 |
| 21 | `/products/fertilizer-granulation-plants/disc-granulator/` | Pillar 3 Spoke | New since Gate 6 | 6 |
| 22 | `/products/fertilizer-granulation-plants/double-roller-granulator/` | Pillar 3 Spoke | New since Gate 6 | 6 |
| 23 | `/products/fertilizer-granulation-plants/rotary-drum-granulator/` | Pillar 3 Spoke | New since Gate 6 | 6 |
| 24 | `/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/` | Pillar 3 Spoke | New since Gate 6 | 4 |
| 25 | `/products/industrial-conveyors-spares/` | Pillar 4 Hub (Conveyors & Spares) | Original (11) | 4 |
| 26 | `/products/industrial-conveyors-spares/belt-conveyors/` | Pillar 4 Spoke | New since Gate 6 | 4 |
| 27 | `/products/industrial-conveyors-spares/bucket-elevators/` | Pillar 4 Spoke | New since Gate 6 | 4 |
| 28 | `/products/industrial-conveyors-spares/screw-conveyors/` | Pillar 4 Spoke | New since Gate 6 | 4 |
| 29 | `/products/industrial-conveyors-spares/forged-trunnion-rollers/` | Pillar 4 Spoke | New since Gate 6 | 4 |

### Verified Offerings vs. Discovery Topics
- **Offered with dedicated spoke pages:** Triple-Pass Rotary Dryer, Industrial Rotary Sand Dryer, Stainless Chemical Powder Dryer, Biomass & Sawdust Rotary Dryer, Silica Sand Washing Plant, Bucket Wheel Sand Washer, Hydrocyclone Fine Sand Recovery Unit, Mineral Log Washer, Pan Disc Fertilizer Granulator, Double Roller Compaction Granulator, Rotary Drum Granulator, Fertilizer Cooling & Coating Drum, Troughed Belt Conveyors, Bucket Elevators, Screw Conveyors, Forged Trunnion Rollers (plus riding tyres, thrust rollers, and split girth gears covered on the same page).
- **Mentioned in pillar/FAQ copy without dedicated spoke pages:** Double-Pass Concentric Dryers (covered on `/products/industrial-rotary-dryers/`), Spiral Screw Classifiers (covered on `/products/sand-washing-plants/`), Hot Air Generators / Furnaces (covered inside dryer pages), Rotary Calciners (redirected via 301 to `/products/industrial-rotary-dryers/#configurations`).
- **Legacy Dead Code Note:** `data/routes.ts` contains legacy unbuilt routes (e.g., `/products/rotary-dryers/`, `double-pass-dryer`, `roto-louvre-dryer`, `hot-air-generators`, `riding-rings-girth-gears`, `/products/mineral-processing/*`, `/products/conveyor-systems/*`). Repository grep confirms **zero imports** of `data/routes.ts` across `app/`, `components/`, and `lib/` — none of these stale URLs are rendered on the site.

---

## 3. Quantitative Internal Linking Metrics

All categories are strictly separated between **Global Shell (Header/Footer/StickyBar)** and **Page-Body** links, computed programmatically across all 29 routes.

| # | Metric Category | Verified Count | Audit Interpretation |
|---|---|---|---|
| 1 | **Total indexable pages** | **29** | 1 home + 6 core + 2 legal + 4 pillars + 16 spokes (`app/sitemap.ts`) |
| 2 | **Total rendered internal link instances (all 29 pages)** | **1,798** | `1,392` global shell + `406` page-body internal links |
| 3 | **Unique internal destination URLs linked** | **29 routes + 1 asset** | All 29 routes linked in shell; 27 routes + `/llms-full.txt` linked in page body (`/privacy-policy/` and `/terms/` are footer-only) |
| 4 | **Total contextual body links (all 29 pages)** | **16** | **11** product/manufacturing inline prose links + **5** inline spec-table RFQ links (**0.89%** of total links; **3.94%** of page-body links) |
| 5 | **Total navigation (Header) links** | **33 / page (957 sitewide)** | Desktop DOM always renders mega-menu (incl. 4 duplicate pillar links + 3 `/request-quote/` links). Mobile drawer adds 25 links only when opened. |
| 6 | **Total footer links** | **14 / page (406 sitewide)** | Links to 4 pillars, `/products/`, 6 core/legal pages, and `/request-quote/` (2×). **0** links to any of the 16 spoke pages. |
| 7 | **Total sticky mobile bar internal links** | **1 / page (29 sitewide)** | `/request-quote/` (`Get Quote`) rendered in `StickyContactBar.tsx`. |
| 8 | **Total breadcrumb links (all 29 pages)** | **64** | 56 via `<Breadcrumbs>` + 8 inline `<nav aria-label="Breadcrumb">` on 4 pillars. |
| 9 | **Total product / related / sector card links** | **230** | Includes 3× duplicate links per card (Image + H3 + bottom text link) across pillars and 16 spokes. |
| 10 | **Total hub back-navigation links** | **16** | 1 `"Explore Full ... Hub"` link on each of the 16 spoke pages. |
| 11 | **Total page-body CTA / action button links** | **79** | Buttons and section CTAs (69 point to `/request-quote/`, 3 to `/contact/`, 3 to `/manufacturing/`, 2 to `/products/`, 1 to `/industries/`, 1 to `/about/`). |
| 12 | **Total non-HTML internal asset links** | **1** | `/` → `/llms-full.txt` inside user-facing FAQ section footer. |
| 13 | **Total broken internal links (404s)** | **0** (in JSX) | **4 broken hash-fragment targets** in `next.config.ts` 301 redirects (`#process`, `#machinery`, `#conveyors`) + **1 broken `SearchAction` URL** (`/products/?q=...`) in `app/layout.tsx` JSON-LD + **5 pages with wrong `tel:+919227004455`** links. |
| 14 | **Total redirecting internal links (301/302)** | **0** (in JSX) | All internal `<Link>`/`<Button>` targets use canonical trailing slashes matching `trailingSlash: true`. |
| 15 | **Total orphan pages (0 incoming internal links)** | **0** | All 29 routes are linked from Header and/or Footer. However, **2 pages** (`/privacy-policy/`, `/terms/`) have **0** incoming page-body links, and **2 machinery spokes** (`forged-trunnion-rollers`, `mineral-log-washer`) have **0** incoming sibling-spoke links. |
| 16 | **Pages with 0 contextual incoming links** | **22 of 29 (75.9%)** | Includes **15 of 16 spoke pages**, `/`, `/about/`, `/contact/`, `/industries/`, `/products/`, `/privacy-policy/`, and `/terms/`. |
| 17 | **Pages relying only on nav/footer/cards/breadcrumbs** | **22 of 29 (75.9%)** | Every equipment spoke except `sand-dryer/` relies 100% on Header mega-menu and product cards for internal discovery. |
| 18 | **Pages with weak or repetitive anchor text** | **25 of 29 (86.2%)** | Homepage, `/products/`, `/industries/`, all 4 pillars, all 16 spokes, plus global Header/Footer patterns. |
| 19 | **Missing high-value product-to-product relationships** | **24** | Documented in [internal-linking-architecture.md](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/docs/seo/internal-linking-architecture.md). |
| 20 | **Missing industry-to-product & product-to-industry relationships** | **21** | 8 unlinked spokes + 4 unlinked pillars on `/industries/` + 9+ missing reciprocal links back to `/industries/`. |
| 21 | **Total contextual link opportunities discovered** | **75** | **68** existing-sentence insertions (including **18** FAQ-based insertions) + **7** proposed new content additions in [contextual-link-insertion-plan.md](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/docs/seo/contextual-link-insertion-plan.md). |

---

## 4. Existing Internal Link Audit

### 4.1 Broken Links, Broken Hash Targets & Technical Link Defects

| Severity | Location | Exact Issue | Impact & Recommendation |
|---|---|---|---|
| **P0** | `components/quote/RequestQuoteClient.tsx` (all 18 product RFQ links) | Spoke/pillar pages pass `?product=triple-pass-dryer`, `?product=bucket-elevator`, `?product=belt-conveyors`, `?product=fertilizer-granulation-plant&type=granulation-test`, etc. **`RequestQuoteClient` never calls `useSearchParams()`** — it always initializes `category: 'rotary-dryers'` and discards `?product=`. | Every buyer clicking a machine-specific quote button lands on a form pre-selected to "Rotary Dryers" with zero machine pre-fill. Read `searchParams` and map every `?product=` slug to category + specific model field, and standardize singular/plural slugs (`bucket-elevators`, `screw-conveyors`). |
| **P0** | 5 spoke pages (`fertilizer-cooling-coating-drum`, `belt-conveyors`, `bucket-elevators`, `screw-conveyors`, `forged-trunnion-rollers`) | Hardcoded `tel:+919227004455` (`+91 92270 04455`) in Hero and Bottom CTA call buttons, contradicting `data/company.ts` (`+91 63524 53050` / `+91 91061 63058`). | Buyers calling from 5 equipment pages may dial an unverified/wrong telephone number. Import `company.telephones[0]` from `data/company.ts` consistently across all pages. |
| **P1** | `next.config.ts` (4 permanent 301 redirects) | Legacy redirects point to non-existent hash IDs: `/organic-fertilizer-granulation-plant/` → `#process`; `/spiral-screw-sand-classifier/` → `#machinery`; `/conveyor-pulleys-head-tail-snub/` and `/conveyor-rollers-idlers-manufacturer/` → `#conveyors`. (Only `#configurations` on `industrial-rotary-dryers` exists.) | Redirected visitors land at top of page without jumping to the promised section. Add matching section `id` attributes or update redirect targets to exact spoke URLs (e.g., `/products/industrial-conveyors-spares/belt-conveyors/`). |
| **P2** | `app/layout.tsx` (line 245) | `WebSite` JSON-LD `SearchAction` declares target `https://mineralssolution.in/products/?q={search_term_string}`, but `/products/page.tsx` is a static server page with no search input or `?q=` filtering. | Broken sitelinks search box schema contract. Either implement `?q=` client filtering on `/products/` or remove `SearchAction`. |
| **P2** | All 16 spoke pages | Every spoke page wraps content in a `<main>` tag inside `app/(site)/layout.tsx`, which already renders `<main id="main-content">`. | Invalid nested `<main>` landmarks hurt accessibility and assistive navigation. Replace spoke-level `<main>` with `<div>` or `<article>`. |

### 4.2 Weak, Generic & Duplicate Anchor Text Audit

| Source Page(s) | Current Anchor Text | Destination | Issue | Recommended Descriptive Anchor |
|---|---|---|---|---|
| `/` (Homepage, L483) | **`Explore Industrial Specs`** (used TWICE for 2 different URLs!) | `/products/industrial-rotary-dryers/` AND `/products/industrial-conveyors-spares/` | `item.title.split(' ')[0]` produces identical ambiguous anchor text for two unrelated machinery divisions. | `Explore Industrial Rotary Dryers` / `Explore Industrial Conveyors & Spares` |
| `/` (Homepage, L386) | `View Specifications` | `/products/industrial-rotary-dryers/` | Generic non-descriptive anchor on hero showcase card. | `Industrial Rotary Dryer Specifications` |
| `/` (Homepage, L490, 4×) | `Quote` (4×) | `/request-quote/` | Bare single-word anchor without product context or `?product=` param. | `Request Rotary Dryer Quote`, `Request Sand Washing Quote`, etc. (with `?product=`) |
| `/` (Homepage, L652) | `Learn More About Sector Applications` | `/industries/` | Generic "Learn More" phrasing. | `Explore All 9 Industrial Applications` |
| `/products/` (L245, 4×) | `Explore Specifications` (4×) | All 4 pillar hubs | Identical generic anchor repeated 4 times; division `<h2>` titles are not linked. | Link division `<h2>` titles and use `Explore Rotary Dryers Hub`, `Explore Sand Washing Plants`, etc. |
| `/products/` (L248, 4×) | `Request Quotation` (4×) | `/request-quote/` | Identical anchor without category `?product=` query parameter. | `Quote Rotary Dryers`, `Quote Fertilizer Plants`, etc. |
| `/industries/` (L249, 9×) | `Discuss Sector Requirements` (9×) | `/request-quote/` | Identical generic CTA repeated 9 times with zero sector query context. | Pass `?sector=<slug>` or differentiate per industry (`Quote Ceramic Drying Line`, etc.). |
| All 4 Pillar Pages | `View Machine Specifications` (4× per page = 16×) | All 16 spoke pages | Generic repeated CTA on every spoke card, paired with empty-text image `<Link>` and H3 `<Link>` (3 links to same URL per card). | Consolidate card click target (stretched link on H3 title) or use model-specific text (`Triple Pass Dryer MS-TPD Specs`). |
| All 16 Spoke Pages | `View Machine Specifications` (2×) + `Explore Complementary Machine` (1×) = **48× sitewide** | Related spoke cards | Generic text + **3 links per card** (9 card links to only 3 unique URLs per spoke page), inflating link count without adding semantic clarity. | Use stretched-link pattern on the descriptive `<h3>` machine title (1 clean descriptive link per card instead of 3). |
| `Header.tsx` (Desktop Mega-Menu) | Each pillar linked **twice** (Heading + `"Explore ... in Gujarat/India"`) + `"All 16 Equipment Models"` | 4 pillars + `/products/` | Duplicate pillar links in global nav (8 links for 4 pillars on every page = 116 redundant links sitewide). Also `"Products"` top nav trigger is a `<button>`, not an `<a>`. | Make `"Products"` top-level item a direct `<Link href="/products/">` with hover/chevron dropdown; keep 1 link per pillar inside mega-menu. |

### 4.3 Exact-Match Overuse & Anchors Pointing to Wrong Granularity

1. **Over-broad Pillar Anchors Instead of Exact Spoke Targets:**
   - `/products/industrial-rotary-dryers/` (L370) links anchor **`"troughed belt conveyors"`** to the broad hub `/products/industrial-conveyors-spares/` instead of the exact spoke `/products/industrial-conveyors-spares/belt-conveyors/`.
   - `/products/sand-washing-plants/` (L350) links **`"heavy belt conveyors"`** to `/products/industrial-conveyors-spares/` instead of `/products/industrial-conveyors-spares/belt-conveyors/`, and **`"industrial rotary dryer"`** to `/products/industrial-rotary-dryers/` (acceptable, though `sand-dryer/` is more specific for washed silica sand).
   - `/products/fertilizer-granulation-plants/` (L409) links **`"troughed belt conveyors"`** to `/products/industrial-conveyors-spares/` instead of `/products/industrial-conveyors-spares/belt-conveyors/`.
   - `/products/industrial-conveyors-spares/` (L383 & L387) links **`"rotary sand dryers"`** to `/products/industrial-rotary-dryers/` instead of `/products/industrial-rotary-dryers/sand-dryer/`, and **`"fertilizer granulation pans"`** to `/products/fertilizer-granulation-plants/` instead of `/products/fertilizer-granulation-plants/disc-granulator/`.
2. **Geographic Keyword Stuffing in Global Nav (`Header.tsx`):** Mega-menu bottom pillar CTAs append `"in Gujarat"` / `"in India"` across all 29 pages (`Explore Rotary Dryers in Gujarat`, `Explore Sand Washing Plants in India`, etc.) and pack `title`/`aria-label` attributes with long SEO strings (`Triple Pass Rotary Dryer Manufacturer in Ahmedabad, Gujarat, India`). This is unnecessary in sitewide navigation and risks over-optimization signals.
3. **Zero Anchor Diversity on Spoke Cards:** Every spoke receives the exact same 1–2 card title anchors across the site (e.g., `Triple Pass Rotary Drum Dryer Line` repeated 7×; `Industrial Rotary Sand Dryer Unit` repeated 6×) with almost no natural contextual phrasing.

### 4.4 Navigation-Only & Card-Only Linking Analysis

- **Footer-Only Pages (0 page-body incoming links):** `/privacy-policy/` and `/terms/` (acceptable for legal pages, though `/request-quote/` and `/contact/` can include a subtle Terms of Supply / Privacy Policy notice link near the submit button for B2B procurement trust).
- **Navigation + Card Only Machinery Pages (0 contextual incoming links):** **15 of 16 equipment spokes** (`triple-pass-dryer`, `chemical-powder-dryer`, `biomass-sawdust-dryer`, `silica-sand-washing-plant`, `bucket-wheel-sand-washer`, `hydrocyclone-sand-separator`, `mineral-log-washer`, `disc-granulator`, `double-roller-granulator`, `rotary-drum-granulator`, `fertilizer-cooling-coating-drum`, `belt-conveyors`, `bucket-elevators`, `screw-conveyors`, `forged-trunnion-rollers`).
- **Severely Under-Connected Spokes (Weakest Internal Link Equity):**
  1. `/products/industrial-conveyors-spares/forged-trunnion-rollers/` — Only **2** unique page-body sources (`/products/` and `/products/industrial-conveyors-spares/`). **0** sibling links, **0** rotary dryer links, **0** fertilizer drum links, **0** `/industries/` links, **0** `/manufacturing/` links.
  2. `/products/sand-washing-plants/mineral-log-washer/` — Only **3** unique page-body sources (`/products/`, `/products/sand-washing-plants/`, `/industries/`). **0** links from any of its 3 sibling sand-washing spokes despite being the upstream scrubber for `silica-sand-washing-plant` and feeding `hydrocyclone-sand-separator`.
  3. `/products/fertilizer-granulation-plants/double-roller-granulator/` — Only **3** unique page-body sources (`/products/`, `/products/fertilizer-granulation-plants/`, `disc-granulator/`). **0** links from `/industries/`, `rotary-drum-granulator/`, or `bucket-elevators/`.
  4. `/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/` — Only **3** unique page-body sources (`/products/`, `/products/fertilizer-granulation-plants/`, `rotary-drum-granulator/`). **0** links from `disc-granulator/`, **0** links from any rotary dryer, and **0** links from `/industries/` (even though `/industries/` explicitly names `"Cooling & Coating Drum"` in its NPK & Organic Bio-Fertilizer sector!).
  5. `/products/industrial-rotary-dryers/chemical-powder-dryer/` & `/products/industrial-rotary-dryers/biomass-sawdust-dryer/` — Only **4** unique page-body sources each, with only 1 sibling link each and 0 cross-pillar incoming links (e.g., `screw-conveyors` does not link to `chemical-powder-dryer` or `biomass-sawdust-dryer` despite describing SS304/316 chemical augers and dryer feed screws).

### 4.5 Unnecessary or Low-Value Links

1. **Homepage FAQ Footer → `/llms-full.txt` (`target="_blank"`):** Placed directly in the visible customer-facing FAQ section (`"Access our LLM Engineering Dossier (llms-full.txt)"`). Raw markdown LLM dossiers are already declared cleanly via `<link rel="alternate" type="text/plain" href=".../llms-full.txt">` in `app/layout.tsx` `<head>`. Exposing raw `.txt` files in visible B2B buyer UI confuses procurement visitors and leaks link equity to a non-HTML text file. **Recommendation:** Remove from visible FAQ UI (keep `<head>` `<link rel="alternate">` + `/llms.txt`).
2. **Triple-Linked Cards (Image + H3 + Bottom Link):** Every product card across all 4 pillars and 16 spokes wraps 3 separate `<Link>` tags to the exact same destination URL, creating **160+ redundant link nodes** without adding anchor variety or usability. Use a single semantic `<Link>` on the `<h3>` with CSS `after:inset-0` stretched-card click area.
3. **Header Mega-Menu Duplicate Pillar Links:** Each of the 4 pillars is linked twice inside the same mega-menu column (top title + bottom `"Explore ... in Gujarat/India"`), adding 4 redundant links × 29 pages = **116 redundant link instances**.

---

## 5. Manufacturing, About & E-E-A-T Linking Audit

Minerals Solutions' primary competitive trust asset is its **in-house heavy fabrication facility at Plot No. 10, Shyam Estate, Zak GIDC, Dahegam, Gandhinagar (Gujarat)** — equipped with hydraulic plate rolling (25mm+), automated submerged arc welding (SAW), heavy turning lathes, dynamic drum balancing, and 4-hour no-load shop trial spins.

- **Current Outbound Deficit from `/manufacturing/`:** Contains **0** links to any product hub, spoke, `/products/`, `/about/`, `/industries/`, or `/request-quote/` (only `/` breadcrumb + 2 `/contact/` buttons). Even though `/manufacturing/` explicitly describes rolling shells for *"rotary dryers, calciners, and pan granulators"*, lathe-turning *"trunnion roller shafts, head pulley journals, and drive gear hubs"*, and shop-testing *"Every dryer, granulator, and conveyor module"*, none of those phrases link to the actual equipment pages!
- **Current Outbound Deficit from `/about/`:** Contains **0** links to `/products/`, any of the 4 pillar hubs, any spoke page, or `/industries/`, despite opening with *"We design, fabricate, and commission industrial rotary dryers, fertilizer granulation plants, sand washing systems, and bulk material handling conveyors."*
- **Current Inbound Deficit to `/manufacturing/`:** Only **2 of 20 product pages** (`industrial-rotary-dryers` and `triple-pass-dryer`) link to `/manufacturing/`. The other **18 product pages** all repeatedly reference *"our Zak GIDC, Dahegam workshop / facility"* in their metallurgy, QA, and bottom CTA copy without a single link to `/manufacturing/` to substantiate those fabrication claims!
- **Current Inbound Deficit to `/about/`:** Only the Homepage links to `/about/` inside page body copy (`"About Our Leadership & Works"`). Zero links from `/manufacturing/`, `/contact/`, or `/request-quote/`.

---

## 6. Quotation & Conversion Journey Audit

| Funnel Touchpoint | Current State | Conversion Friction / Gap | Recommendation |
|---|---|---|---|
| **Spoke & Pillar RFQ CTAs → `/request-quote/`** | 16 spokes + 2 pillars append `?product=<slug>` (69 CTA links + 5 spec-table inline links). 2 pillars (`industrial-rotary-dryers`, `industrial-conveyors-spares`), Homepage, `/products/`, and `/industries/` omit `?product=` entirely. | **`RequestQuoteClient.tsx` ignores `?product=` completely** and always defaults to `rotary-dryers`. Slug mismatch also exists (`bucket-elevator` vs `bucket-elevators`, `screw-conveyor` vs `screw-conveyors`). | Wire `useSearchParams()` in `RequestQuoteClient` to pre-select both `category` and exact machine model; standardize all `?product=` slugs to match route slugs; add `?product=` / `?sector=` params to all pillar, `/products/`, and `/industries/` CTAs. |
| **Direct Telephone CTAs on 5 Spoke Pages** | `fertilizer-cooling-coating-drum`, `belt-conveyors`, `bucket-elevators`, `screw-conveyors`, `forged-trunnion-rollers` hardcode `tel:+919227004455`. | Contradicts official hotlines (`+91 63524 53050`, `+91 91061 63058`) in `data/company.ts`. High risk of lost leads. | Replace hardcoded number with `company.telephones[0]` across all 5 files (**P0**). |
| **`/contact/` Page** | Contains phone, WhatsApp, email, Google Maps, and callback form — but **0** internal links to `/request-quote/`, `/manufacturing/`, `/products/`, or `/about/`. | Buyers visiting `/contact/` who need formal technical sizing/GA drawings have no guided pathway to `/request-quote/` or factory inspection info on `/manufacturing/`. | Add contextual CTA card linking to `/request-quote/` (for formal sizing/GA drawings) and `/manufacturing/` (for Zak GIDC factory visit details). |
| **`/request-quote/` Page** | Has only 1 internal link (`/` breadcrumb; plus `/` after form submission). Zero links to `/products/`, `/manufacturing/`, `/contact/`, or `/terms/`. | Engineers unsure which dryer/washer/granulator capacity fits their feed have no quick jump back to product comparison tables or direct works contact info. | Add a compact "Need Sizing References First?" sidebar block linking to the 4 product pillars + `/manufacturing/` (for pilot testing/inspection) + `/contact/`. |
| **Manufacturing Proof in Conversion Zone** | Product bottom CTA boxes invite clients to *"Visit our Dahegam workshop"* / *"Inspect heavy fabrication in progress"* with buttons only to RFQ/Call. | High-ticket B2B buyers (₹3.5L–₹95L+ plants) want to verify workshop capability before submitting RFQs. | Link *"Zak GIDC, Dahegam workshop"* inline to `/manufacturing/` directly inside each product's fabrication/QA section and bottom CTA copy. |

---

## 7. Destination-Wise Anchor Text Strategy Matrix

Use natural, varied descriptive anchors across contextual insertions. Never repeat exact-match anchors mechanically; match each anchor to the surrounding engineering sentence.

| Destination URL | Primary Descriptive Anchor | Secondary Natural Variations | Contextual Engineering Anchors | Brand-Based Anchors | Weak Anchors to Replace |
|---|---|---|---|---|---|
| `/` | `Minerals Solutions` | `heavy process machinery manufacturer in Gujarat`, `industrial equipment works` | `Minerals Solutions engineering works` | `Minerals Solutions (Zak GIDC, Dahegam)` | `Home` (keep only in breadcrumbs) |
| `/products/` | `industrial machinery catalog` | `complete process equipment range`, `heavy mineral processing machinery` | `all four heavy machinery divisions` | `Minerals Solutions equipment catalog` | `Explore Our Machinery`, `All 16 Equipment Models` |
| `/products/industrial-rotary-dryers/` | `industrial rotary dryers` | `rotary drum drying systems`, `thermal rotary drying equipment` | `single, double, and triple-pass rotary dryers` | `Minerals Solutions rotary dryers` | `Explore Industrial Specs`, `View Specifications`, `Explore Specifications` |
| `/products/industrial-rotary-dryers/triple-pass-dryer/` | `triple-pass rotary drum dryer` | `triple-pass concentric dryer`, `high-efficiency 3-pass dryer` | `MS-TPD triple-pass rotary dryer`, `concentric triple-pass drying line` | `Minerals Solutions MS-TPD dryer` | `View Machine Specifications`, `Explore Complementary Machine` |
| `/products/industrial-rotary-dryers/sand-dryer/` | `industrial rotary sand dryer` | `single-pass rotary sand dryer`, `silica sand rotary dryer` | `MS-RSD rotary sand dryer`, `heavy-duty mineral sand dryer` | `Minerals Solutions rotary sand dryer` | `View Machine Specifications`, `Explore Complementary Machine`, `rotary sand dryers` (currently pointing to pillar) |
| `/products/industrial-rotary-dryers/chemical-powder-dryer/` | `stainless steel chemical powder dryer` | `indirect SS304/SS316 rotary dryer`, `sanitary chemical dryer` | `MS-CPD indirect chemical powder dryer`, `contamination-free stainless rotary dryer` | `Minerals Solutions chemical powder dryers` | `View Machine Specifications`, `Explore Complementary Machine` |
| `/products/industrial-rotary-dryers/biomass-sawdust-dryer/` | `biomass and sawdust rotary dryer` | `wood waste rotary drying drum`, `sawdust rotary dryer` | `MS-BMD biomass rotary dryer`, `spark-protected sawdust dryer` | `Minerals Solutions biomass dryers` | `View Machine Specifications` |
| `/products/sand-washing-plants/` | `sand washing plants` | `wet sand classification and washing circuits`, `aggregate and silica washing lines` | `complete sand washing and desliming systems` | `Minerals Solutions sand washing plants` | `Explore Sand Specs`, `Explore Specifications` |
| `/products/sand-washing-plants/silica-sand-washing-plant/` | `silica sand washing plant` | `glass-grade silica beneficiation line`, `silica washing and desliming plant` | `MS-SWP silica sand washing plant`, `turnkey wet silica processing circuit` | `Minerals Solutions silica washing plant` | `View Machine Specifications`, `Explore Complementary Machine` |
| `/products/sand-washing-plants/bucket-wheel-sand-washer/` | `bucket wheel sand washer` | `bucket wheel sand washing machine`, `M-Sand bucket wheel washer` | `MS-BWW bucket wheel washer`, `low-power bucket wheel dewatering unit` | `Minerals Solutions bucket wheel washers` | `View Machine Specifications` |
| `/products/sand-washing-plants/hydrocyclone-sand-separator/` | `hydrocyclone fine sand recovery unit` | `hydrocyclone sand separator`, `polyurethane hydrocyclone deslimer` | `MS-FSR hydrocyclone separator`, `75-micron fine sand recovery hydrocyclone` | `Minerals Solutions hydrocyclone systems` | `View Machine Specifications` |
| `/products/sand-washing-plants/mineral-log-washer/` | `twin-shaft mineral log washer` | `quartz stone log washer`, `heavy attrition log washer` | `MS-LW mineral log washer`, `twin-shaft clay-scrubbing log washer` | `Minerals Solutions mineral log washers` | `View Machine Specifications` |
| `/products/fertilizer-granulation-plants/` | `fertilizer granulation plants` | `bio-organic and NPK granulation lines`, `turnkey fertilizer pelletizing systems` | `integrated fertilizer granulation circuits` | `Minerals Solutions fertilizer plants` | `Explore Fertilizer Specs`, `Explore Specifications` |
| `/products/fertilizer-granulation-plants/disc-granulator/` | `pan disc fertilizer granulator` | `inclined disc pan granulator`, `organic compost disc granulator` | `MS-PG pan disc granulator`, `stepless-tilt fertilizer pan granulator` | `Minerals Solutions pan granulators` | `View Machine Specifications`, `fertilizer granulation pans` (currently pointing to pillar) |
| `/products/fertilizer-granulation-plants/double-roller-granulator/` | `double roller compaction granulator` | `dry double roller fertilizer press`, `room-temperature roller compactor` | `MS-DRG double roller dry granulator`, `zero-drying roller compaction press` | `Minerals Solutions double roller granulators` | `View Machine Specifications` |
| `/products/fertilizer-granulation-plants/rotary-drum-granulator/` | `rotary drum fertilizer granulator` | `continuous tumbling drum granulator`, `steam-injection NPK drum granulator` | `MS-RDG rotary drum granulator`, `UHMWPE-lined rotary drum granulator` | `Minerals Solutions rotary drum granulators` | `View Machine Specifications` |
| `/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/` | `fertilizer cooling and coating drum` | `rotary fertilizer cooler and coater`, `anti-caking cooling and coating drum` | `MS-CCD rotary cooling and coating drum`, `counter-current pellet cooler and neem-oil coater` | `Minerals Solutions cooling and coating drums` | `View Machine Specifications` |
| `/products/industrial-conveyors-spares/` | `industrial conveyors and mechanical spares` | `bulk material handling conveyors and spares`, `heavy quarry conveying equipment` | `conveyor systems and forged dryer spares` | `Minerals Solutions conveyors and spares` | `Explore Industrial Specs`, `Explore Specifications` |
| `/products/industrial-conveyors-spares/belt-conveyors/` | `industrial troughed belt conveyors` | `IS 11592 troughed belt conveyor`, `heavy-duty M24 rubber belt conveyor` | `MS-BC troughed belt conveyor`, `heat-resistant discharge belt conveyor` | `Minerals Solutions belt conveyors` | `View Machine Specifications`, `Explore Complementary Machine`, `troughed belt conveyors` (currently pointing to pillar) |
| `/products/industrial-conveyors-spares/bucket-elevators/` | `heavy-duty industrial bucket elevators` | `vertical belt and chain bucket elevator`, `centrifugal and continuous bucket elevator` | `MS-BEL vertical bucket elevator`, `closed-circuit return bucket elevator` | `Minerals Solutions bucket elevators` | `View Machine Specifications`, `Explore Complementary Machine` |
| `/products/industrial-conveyors-spares/screw-conveyors/` | `industrial U-trough and tubular screw conveyors` | `dust-tight screw feeder`, `SS304/SS316 chemical screw conveyor` | `MS-SC enclosed screw conveyor`, `variable-pitch metering screw feeder` | `Minerals Solutions screw conveyors` | `View Machine Specifications`, `Explore Complementary Machine` |
| `/products/industrial-conveyors-spares/forged-trunnion-rollers/` | `forged alloy steel trunnion support rollers` | `EN-8/EN-9 forged trunnion rollers and riding tyres`, `rotary dryer support rollers and split girth gears` | `MS-TR forged trunnion rollers (280–320 BHN)`, `replacement trunnion assemblies and girth gears` | `Minerals Solutions forged trunnion rollers` | `View Machine Specifications` |
| `/manufacturing/` | `Zak GIDC heavy fabrication facility` | `in-house plate rolling and SAW welding workshop`, `Dahegam manufacturing capabilities` | `plate rolling, submerged arc welding, and dynamic balancing works` | `Minerals Solutions Zak GIDC works` | `Tour Manufacturing Facility`, `Explore Manufacturing Tour` |
| `/industries/` | `industrial sector applications` | `industries served across Gujarat and India`, `ceramic, foundry, chemical, and quarry applications` | `mineral processing and fertilizer sector solutions` | `Minerals Solutions industry applications` | `Learn More About Sector Applications` |
| `/about/` | `Minerals Solutions leadership and works` | `heavy engineering team in Dahegam, Gujarat`, `verified OEM credentials and GST/MSME registration` | `direct OEM fabrication background` | `About Minerals Solutions` | `About` (fine in nav; expand in body) |
| `/request-quote/` | `request a technical equipment quotation` | `get custom dryer/plant sizing and GA drawing`, `request factory-direct pricing` | `custom heat balance and GA drawing quotation` | `Minerals Solutions quotation desk` | `Quote`, `Discuss Sector Requirements`, `Request Quotation` |
| `/contact/` | `contact our Zak GIDC engineering desk` | `schedule a Dahegam workshop inspection`, `direct factory phone and visiting coordinates` | `book an in-person fabrication bay visit` | `Contact Minerals Solutions` | `Contact` (fine in nav) |

---

## 8. Prioritized Action Plan (P0 – P3)

### P0 — Critical Conversion, Accuracy & Structural Fixes (Implement Immediately)
1. **Fix unverified telephone number (`tel:+919227004455`) on 5 spoke pages** (`fertilizer-cooling-coating-drum`, `belt-conveyors`, `bucket-elevators`, `screw-conveyors`, `forged-trunnion-rollers`) by importing `company.telephones[0]` from `data/company.ts`.
2. **Wire `useSearchParams()` in `RequestQuoteClient.tsx`** so every `?product=` query parameter pre-selects the matching category + model (and normalize singular/plural query slugs).
3. **Rescue the 2 critically under-linked spokes** (`forged-trunnion-rollers` and `mineral-log-washer`) with high-relevance contextual body links from all rotary dryer pages, fertilizer drum pages, `silica-sand-washing-plant`, `bucket-wheel-sand-washer`, `hydrocyclone-sand-separator`, `/manufacturing/`, and `/industries/`.
4. **Fix Homepage duplicate anchor bug:** Replace `Explore {item.title.split(' ')[0]} Specs` (which generates `"Explore Industrial Specs"` twice) with explicit descriptive anchors per pillar.
5. **Add outbound product links from `/manufacturing/` and `/about/`** to all 4 pillar hubs and key spokes (`forged-trunnion-rollers`, `triple-pass-dryer`, `disc-granulator`, `belt-conveyors`).

### P1 — High-Impact Contextual Linking & Cross-Pillar Equity
6. **Upgrade `FaqAccordion.tsx`** to support optional rich JSX answers (`answerNode?: React.ReactNode`) alongside plain-text `answer: string` (for `FAQPage` JSON-LD), then deploy the **18 high-value FAQ contextual links** documented in [contextual-link-insertion-plan.md](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/docs/seo/contextual-link-insertion-plan.md).
7. **Fix 5 over-broad existing contextual links on pillar pages** so exact machine mentions (`troughed belt conveyors`, `rotary sand dryers`, `fertilizer granulation pans`) point directly to their exact spoke pages instead of broad parent hubs.
8. **Deploy core process-chain contextual links across all 16 spokes** (Wash → Convey → Dry; Granulate → Dry → Cool/Coat → Elevate/Convey; Drum Equipment → Forged Trunnion Rollers; Equipment → `/manufacturing/`).
9. **Upgrade `/industries/`** so all 9 sector cards link to multiple genuine recommended spokes (covering all 16 spokes + 4 pillars instead of only 8 spokes) and add reciprocal contextual links from product application sections back to `/industries/`.
10. **Fix 4 broken hash-fragment targets** (`#process`, `#machinery`, `#conveyors`) in `next.config.ts` 301 redirects.

### P2 — Semantic Cleanup, Crawl Efficiency & UX Refinement
11. **De-duplicate triple-linked product cards** across all 4 pillars and 16 spokes (1 stretched-link on `<h3>` instead of 3 separate `<Link>` elements per card) and replace `"View Machine Specifications"` / `"Explore Complementary Machine"` generic anchors.
12. **Clean up `Header.tsx` mega-menu duplication** (remove duplicate `"Explore ... in Gujarat/India"` links, make `"Products"` a direct `<Link href="/products/">`, remove keyword-stuffed `title` attributes).
13. **Remove visible `/llms-full.txt` link from Homepage FAQ UI** (retain machine-readable `<link rel="alternate">` in `<head>`).
14. **Connect `/contact/` ↔ `/request-quote/` ↔ `/manufacturing/` ↔ `/about/`** conversion & trust pathways.
15. **Fix nested `<main>` tags** on all 16 spoke pages and align `WebSite` `SearchAction` in `app/layout.tsx`.

### P3 — Ongoing Polish & Maintenance
16. **Add optional `noteNode` / reference link support to `TechnicalSpecTable.tsx`** for key subsystem links (e.g., forged trunnion rollers row on rotary dryer spec tables, M24/HR belting downstream of sand dryers).
17. **Archive or remove unused `data/routes.ts`** dead code so stale/unbuilt URLs cannot be accidentally imported in future sprints.
18. **Post-DNS Launch Verification:** Once `https://mineralssolution.in/` resolves live, run a full HTTP status crawl (Screaming Frog / curl) verifying 200 OK on all 29 routes, 301 single-hop resolution on all 60+ `next.config.ts` redirects, and trailing-slash canonical consistency.
