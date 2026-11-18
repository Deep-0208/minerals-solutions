# Minerals Solutions — 29-Page Internal Linking Page Matrix

**Scope:** All 29 indexable routes in `app/(site)/` (`app/sitemap.ts`)  
**Legend:**
- **Click Depth (Nav):** Clicks from `/` via always-rendered desktop Header/Footer (`1` = direct in Header/Footer; note `Products` mega-menu renders all 4 pillars + 16 spokes in initial DOM).
- **Click Depth (Body/Hub):** Clicks from `/` traversing strictly through page-body content links (ignoring global Header/Footer).
- **In / Out Body:** Page-body links only (excluding the 48 sitewide Header + Footer + StickyBar links rendered on every page).
- **Ctx:** True contextual inline links inside prose paragraphs / engineering advice / spec-table notes.

---

## 1. Master 29-Page Link Matrix

| # | Route | Page Type | Click Depth (Nav / Body) | Out Body (Total) | Out Ctx | Out Card | Out CTA | Out BC | Out Hub | In Body (Total) | In Ctx | In Card | In CTA | In BC | In Hub | In Hdr / Ftr | Unique Body Sources | Priority |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|---|
| 1 | `/` | Homepage | 0 / 0 | 21* | 0 | 9 | 11 | 0 | 0 | 28 | 0 | 0 | 0 | 28 | 0 | 1 / 1 | 28 | **P1** |
| 2 | `/products/` | Catalog Hub | 1 / 1 | 26 | 0 | 20 | 5 | 1 | 0 | 22 | 0 | 0 | 2 | 20 | 0 | 1 / 1 | 21 | **P1** |
| 3 | `/about/` | Company / E-E-A-T | 1 / 1 | 4 | 0 | 0 | 3 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 / 1 | 1 | **P0** |
| 4 | `/manufacturing/` | Works / E-E-A-T | 1 / 1 | 3 | 0 | 0 | 2 | 1 | 0 | 4 | 1 | 0 | 3 | 0 | 0 | 1 / 1 | 4 | **P0** |
| 5 | `/industries/` | Industries Hub | 1 / 1 | 20 | 0 | 9 | 10 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 / 1 | 1 | **P1** |
| 6 | `/contact/` | Works Contact | 1 / 2 | 1 | 0 | 0 | 0 | 1 | 0 | 3 | 0 | 0 | 3 | 0 | 0 | 1 / 1 | 2 | **P2** |
| 7 | `/request-quote/` | RFQ Conversion | 1 / 1 | 1 | 0 | 0 | 0 | 1 | 0 | 74 | 5 | 0 | 69 | 0 | 0 | 3 / 2 | 24 | **P0** |
| 8 | `/privacy-policy/` | Legal | 1 / ∞ (Footer) | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 1 | 0 | **P3** |
| 9 | `/terms/` | Legal | 1 / ∞ (Footer) | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 / 1 | 0 | **P3** |
| 10 | `/products/industrial-rotary-dryers/` | Pillar 1 Hub | 1 / 1 | 19 | 3 | 12 | 2 | 2 | 0 | 15 | 3 | 4 | 0 | 4 | 4 | 2 / 1 | 9 | **P1** |
| 11 | `.../industrial-rotary-dryers/triple-pass-dryer/` | Pillar 1 Spoke | 1 / 2 | 19 | 2 | 9 | 4 | 3 | 1 | 23 | 0 | 23 | 0 | 0 | 0 | 1 / 0 | 9 | **P1** |
| 12 | `.../industrial-rotary-dryers/sand-dryer/` | Pillar 1 Spoke | 1 / 2 | 18 | 1 | 9 | 4 | 3 | 1 | 28 | 1 | 27 | 0 | 0 | 0 | 1 / 0 | 10 | **P1** |
| 13 | `.../industrial-rotary-dryers/chemical-powder-dryer/` | Pillar 1 Spoke | 1 / 2 | 17 | 1 | 9 | 3 | 3 | 1 | 8 | 0 | 8 | 0 | 0 | 0 | 1 / 0 | 4 | **P1** |
| 14 | `.../industrial-rotary-dryers/biomass-sawdust-dryer/` | Pillar 1 Spoke | 1 / 2 | 17 | 1 | 9 | 3 | 3 | 1 | 8 | 0 | 8 | 0 | 0 | 0 | 1 / 0 | 4 | **P1** |
| 15 | `/products/sand-washing-plants/` | Pillar 2 Hub | 1 / 1 | 18 | 2 | 12 | 2 | 2 | 0 | 13 | 2 | 3 | 0 | 4 | 4 | 2 / 1 | 8 | **P1** |
| 16 | `.../sand-washing-plants/silica-sand-washing-plant/` | Pillar 2 Spoke | 1 / 2 | 17 | 1 | 9 | 3 | 3 | 1 | 22 | 0 | 22 | 0 | 0 | 0 | 1 / 0 | 8 | **P1** |
| 17 | `.../sand-washing-plants/bucket-wheel-sand-washer/` | Pillar 2 Spoke | 1 / 2 | 15 | 0 | 9 | 2 | 3 | 1 | 14 | 0 | 14 | 0 | 0 | 0 | 1 / 0 | 6 | **P1** |
| 18 | `.../sand-washing-plants/hydrocyclone-sand-separator/` | Pillar 2 Spoke | 1 / 2 | 15 | 0 | 9 | 2 | 3 | 1 | 10 | 0 | 10 | 0 | 0 | 0 | 1 / 0 | 4 | **P1** |
| 19 | `.../sand-washing-plants/mineral-log-washer/` | Pillar 2 Spoke | 1 / 2 | 15 | 0 | 9 | 2 | 3 | 1 | 5 | 0 | 5 | 0 | 0 | 0 | 1 / 0 | 3 | **P0** |
| 20 | `/products/fertilizer-granulation-plants/` | Pillar 3 Hub | 1 / 1 | 19 | 2 | 12 | 3 | 2 | 0 | 12 | 1 | 3 | 0 | 4 | 4 | 2 / 1 | 7 | **P1** |
| 21 | `.../fertilizer-granulation-plants/disc-granulator/` | Pillar 3 Spoke | 1 / 2 | 15 | 0 | 9 | 2 | 3 | 1 | 20 | 0 | 20 | 0 | 0 | 0 | 1 / 0 | 8 | **P1** |
| 22 | `.../fertilizer-granulation-plants/double-roller-granulator/` | Pillar 3 Spoke | 1 / 2 | 15 | 0 | 9 | 2 | 3 | 1 | 7 | 0 | 7 | 0 | 0 | 0 | 1 / 0 | 3 | **P1** |
| 23 | `.../fertilizer-granulation-plants/rotary-drum-granulator/` | Pillar 3 Spoke | 1 / 2 | 15 | 0 | 9 | 2 | 3 | 1 | 13 | 0 | 13 | 0 | 0 | 0 | 1 / 0 | 5 | **P1** |
| 24 | `.../fertilizer-granulation-plants/fertilizer-cooling-coating-drum/` | Pillar 3 Spoke | 1 / 2 | 15 | 0 | 9 | 2 | 3 | 1 | 7 | 0 | 7 | 0 | 0 | 0 | 1 / 0 | 3 | **P0** |
| 25 | `/products/industrial-conveyors-spares/` | Pillar 4 Hub | 1 / 1 | 19 | 3 | 12 | 2 | 2 | 0 | 14 | 3 | 3 | 0 | 4 | 4 | 2 / 1 | 9 | **P1** |
| 26 | `.../industrial-conveyors-spares/belt-conveyors/` | Pillar 4 Spoke | 1 / 2 | 15 | 0 | 9 | 2 | 3 | 1 | 17 | 0 | 17 | 0 | 0 | 0 | 1 / 0 | 7 | **P0** |
| 27 | `.../industrial-conveyors-spares/bucket-elevators/` | Pillar 4 Spoke | 1 / 2 | 15 | 0 | 9 | 2 | 3 | 1 | 16 | 0 | 16 | 0 | 0 | 0 | 1 / 0 | 6 | **P0** |
| 28 | `.../industrial-conveyors-spares/screw-conveyors/` | Pillar 4 Spoke | 1 / 2 | 15 | 0 | 9 | 2 | 3 | 1 | 16 | 0 | 16 | 0 | 0 | 0 | 1 / 0 | 6 | **P0** |
| 29 | `.../industrial-conveyors-spares/forged-trunnion-rollers/` | Pillar 4 Spoke | 1 / 2 | 15 | 0 | 9 | 2 | 3 | 1 | 4 | 0 | 4 | 0 | 0 | 0 | 1 / 0 | 2 | **P0** |
| — | **TOTALS (Page-Body)** | **29 Pages** | — | **406** | **16** | **230** | **79** | **64** | **16** | **405** | **16** | **230** | **79** | **64** | **16** | **33 / 14 per pg** | — | — |

*\*Homepage `Out Body = 21` includes `1` non-HTML asset link to `/llms-full.txt`, accounting for the 1-link difference between `406` total outbound page-body links and `405` inbound links targeting the 29 HTML routes.*

---

## 2. Page-by-Page Diagnostic Breakdown (Related Machinery & Missing Connections)

### Core, Company & Conversion Pages

| Route | Currently Linked Machinery / Targets (Page Body) | Weak / Defective Patterns | Missing High-Value Connections |
|---|---|---|---|
| `/` | 4 pillars (cards), `/products/`, `/manufacturing/`, `/industries/`, `/about/`, `/request-quote/`, `/llms-full.txt` | Duplicate `"Explore Industrial Specs"` for 2 pillars; 4× bare `"Quote"`; `/llms-full.txt` in FAQ UI; 8 industry cards have 0 links; 6 FAQ answers have 0 links. | Contextual links in intro + 6 FAQs to pillars/spokes (`triple-pass-dryer`, `hydrocyclone-sand-separator`, `forged-trunnion-rollers`, `disc-granulator`, `/manufacturing/`); link 8 industry cards to matching machinery; add `?product=` to card quote buttons. |
| `/products/` | 4 pillars + 16 spokes + `/request-quote/` (5×) | 4× `"Explore Specifications"`; 4× `"Request Quotation"` (no `?product=`); division `<h2>` headings unlinked. | Link division `<h2>` titles; link intro `"Zak GIDC works"` → `/manufacturing/`; pass `?product=<pillar>` on each category quote button; add contextual cross-link to `/industries/`. |
| `/about/` | `/`, `/request-quote/`, `/manufacturing/`, `/contact/` | **0** product links; **0** industry links. | Link intro mentions of *"industrial rotary dryers"*, *"fertilizer granulation plants"*, *"sand washing systems"*, and *"bulk material handling conveyors"* to all 4 pillars; link *"trunnion bearing assembly"* → `forged-trunnion-rollers/`. |
| `/manufacturing/` | `/`, `/contact/` (2×) | **0** product links; **0** `/request-quote/` links; **0** `/about/` links. | Link capability cards & inspection paragraph to `industrial-rotary-dryers/`, `disc-granulator/`, `forged-trunnion-rollers/`, `belt-conveyors/`, `fertilizer-granulation-plants/`, and add `/request-quote/` + `/about/` links. |
| `/industries/` | 8 spokes (`sand-dryer` linked 2×, `triple-pass-dryer`, `chemical-powder-dryer`, `biomass-sawdust-dryer`, `bucket-wheel-sand-washer`, `mineral-log-washer`, `disc-granulator`, `belt-conveyors`), `/request-quote/` (10×) | **0** pillar links; **8 spokes completely missing**; all "Recommended Equipment" chips are non-clickable `<span>`s; 9× identical `"Discuss Sector Requirements"`. | Convert relevant equipment chips/solution phrases into links covering `silica-sand-washing-plant/`, `hydrocyclone-sand-separator/`, `rotary-drum-granulator/`, `double-roller-granulator/`, `fertilizer-cooling-coating-drum/`, `bucket-elevators/`, `screw-conveyors/`, `forged-trunnion-rollers/`, and all 4 pillars; add `?sector=` params. |
| `/contact/` | `/` (breadcrumb only) | **0** links to `/request-quote/`, `/manufacturing/`, `/products/`, `/about/`. | Add guided link to `/request-quote/` (formal GA drawing & sizing RFQ) and `/manufacturing/` (Zak GIDC factory inspection tour). |
| `/request-quote/` | `/` (breadcrumb only) | **P0:** Ignores `?product=` query param (`useSearchParams` missing). **0** links back to machinery specs, `/manufacturing/`, `/contact/`, or `/terms/`. | Implement `?product=` pre-selection; add sidebar reference links to all 4 product pillars + `/manufacturing/` + `/contact/` + `/terms/`. |
| `/privacy-policy/` & `/terms/` | `/` (breadcrumb only) | Footer-only incoming links (`0` body incoming). `/terms/` mentions all 4 machinery divisions + Zak GIDC inspection without linking. | Link `/terms/` and `/privacy-policy/` subtly beneath the submit buttons on `/request-quote/` and `/contact/`; optionally link `"Zak GIDC workshop"` in `/terms/` → `/manufacturing/`. |

---

### Pillar 1 — Industrial Rotary Dryers (`5 Pages`)

| Route | Current Related Machinery Cards (Bottom) | Current Contextual Links | Missing Connections & Defects |
|---|---|---|---|
| `/products/industrial-rotary-dryers/` | All 4 Dryer spokes (`triple-pass`, `sand`, `chemical`, `biomass`) | `sand-washing-plants/`, `industrial-conveyors-spares/` (anchor `"troughed belt conveyors"` — too broad!), `/manufacturing/` | Update `"troughed belt conveyors"` → `belt-conveyors/`; link FAQ #3 (`forged EN-8/EN-9 alloy steel` trunnion rollers) → `forged-trunnion-rollers/`; link FAQ #4 (`Zak GIDC works`) → `/manufacturing/`; add `/industries/` link; add `?product=rotary-dryers` to RFQ CTAs. |
| `.../triple-pass-dryer/` | `sand-dryer/`, `chemical-powder-dryer/`, `silica-sand-washing-plant/` | `sand-dryer/` (callout), `/request-quote/?product=triple-pass-dryer` (spec table); plus section CTA → `/manufacturing/` | Missing sibling link to `biomass-sawdust-dryer/`; missing link to `forged-trunnion-rollers/` (L830 explicitly describes solid forged alloy steel rollers 280–320 BHN!); missing FAQ #3 link → `silica-sand-washing-plant/` & FAQ #4 link → `chemical-powder-dryer/`; missing `/industries/` link; nested `<main>`. |
| `.../sand-dryer/` | `triple-pass-dryer/`, `biomass-sawdust-dryer/`, `silica-sand-washing-plant/` | `/request-quote/?product=sand-dryer` (spec table only). **0** inline prose product links. | Link `"bucket washers"` (L550) → `bucket-wheel-sand-washer/`; link `"Zak GIDC workshops"` (L665) → `/manufacturing/`; link FAQ #3 `"trunnion rollers"` → `forged-trunnion-rollers/`; link downstream hot sand transfer → `belt-conveyors/`; link ceramic/foundry applications → `/industries/`; nested `<main>`. |
| `.../chemical-powder-dryer/` | `triple-pass-dryer/`, `sand-dryer/`, `screw-conveyors/` | `/request-quote/?product=chemical-powder-dryer` (spec table only). **0** inline prose product links. | Only 1 sibling incoming (`triple-pass-dryer`), 0 cross-pillar incoming. Link `"Zak GIDC workshops"` (FAQ #4) → `/manufacturing/`; link fine chemical powder transfer → `screw-conveyors/`; link Ankleshwar/Dahej chemical applications → `/industries/`; link rotary support running gear → `forged-trunnion-rollers/`; nested `<main>`. |
| `.../biomass-sawdust-dryer/` | `triple-pass-dryer/`, `sand-dryer/`, `disc-granulator/` | `/request-quote/?product=biomass-sawdust-dryer` (spec table only). **0** inline prose product links. | Only 1 sibling incoming (`sand-dryer`), 0 cross-pillar incoming. Link `"mineral sand dryers"` (L541) → `sand-dryer/`; link FAQ #5 `"trunnion rollers"` → `forged-trunnion-rollers/` and `"screw conveyor"` → `screw-conveyors/`; link Step 1 feed (`Tubular screw feeder or inclined belt conveyor`) → `screw-conveyors/` & `belt-conveyors/`; link `/manufacturing/`; nested `<main>`. |

---

### Pillar 2 — Sand Washing Plants (`5 Pages`)

| Route | Current Related Machinery Cards (Bottom) | Current Contextual Links | Missing Connections & Defects |
|---|---|---|---|
| `/products/sand-washing-plants/` | All 4 Sand Washing spokes | `industrial-conveyors-spares/` (`"heavy belt conveyors"` — too broad!), `industrial-rotary-dryers/` (`"industrial rotary dryer"`) | Update `"heavy belt conveyors"` → `belt-conveyors/` and consider linking `"industrial rotary dryer"` or FAQ #3 `"industrial rotary sand dryer"` → `sand-dryer/`; link L364 `"attrition log washers"` → `mineral-log-washer/` and `"bucket wheel"` → `bucket-wheel-sand-washer/`; link L368 `"Polyurethane hydrocyclone circuits"` → `hydrocyclone-sand-separator/`; link L539 `"Zak GIDC"` → `/manufacturing/`. |
| `.../silica-sand-washing-plant/` | `bucket-wheel-sand-washer/`, `hydrocyclone-sand-separator/`, `sand-dryer/` | `/request-quote/?product=silica-sand-washing-plant` (spec table only). **0** inline product links. | **Missing sibling link to `mineral-log-washer/`** even though L351, Stage 1, FAQ #1, and FAQ #2 all name `"twin-shaft attrition log washer"`! Link L351/L700 → `mineral-log-washer/`, `hydrocyclone-sand-separator/`, `bucket-wheel-sand-washer/`; link FAQ #5 → `belt-conveyors/` & `sand-dryer/`; link L572 `"Dahegam-manufactured"` → `/manufacturing/`; link Morbi/glass/foundry → `/industries/`; nested `<main>`. |
| `.../bucket-wheel-sand-washer/` | `silica-sand-washing-plant/`, `hydrocyclone-sand-separator/`, `sand-dryer/` | **0** contextual links. | **Missing sibling link to `mineral-log-washer/`**; link FAQ #5 `"hydrocyclone dewatering screen"` → `hydrocyclone-sand-separator/`; link L618/L1009 `"Dahegam workshop"` → `/manufacturing/`; link washed sand discharge → `belt-conveyors/` & `sand-dryer/`; nested `<main>`. |
| `.../hydrocyclone-sand-separator/` | `silica-sand-washing-plant/`, `bucket-wheel-sand-washer/`, `belt-conveyors/` | **0** contextual links. | **Missing sibling link to `mineral-log-washer/`** even though L452 (`"bucket wheels or log washers"`) and FAQ #5 (`"bucket wheel washers, spiral classifiers, or log washers"`) explicitly name it! Link L452 & FAQ #5 → `bucket-wheel-sand-washer/` & `mineral-log-washer/`; link L609/FAQ #6 `"Zak GIDC, Dahegam"` → `/manufacturing/`; link dewatered sand to `belt-conveyors/` & `sand-dryer/`; nested `<main>`. |
| `.../mineral-log-washer/` | `silica-sand-washing-plant/`, `bucket-wheel-sand-washer/`, `sand-dryer/` | **0** contextual links. | **P0 Severely Under-Linked Spoke (0 sibling incoming links)!** Outbound: link FAQ #1 `"bucket wheel washers"` → `bucket-wheel-sand-washer/`; link FAQ #6 `"Hydrocyclone Fine Sand Recovery Unit (MS-FSR series)"` → `hydrocyclone-sand-separator/`; link L894 `"Dahegam heavy fabrication workshop"` → `/manufacturing/`; link quartz/bauxite mining → `/industries/`; nested `<main>`. |

---

### Pillar 3 — Fertilizer Granulation Plants (`5 Pages`)

| Route | Current Related Machinery Cards (Bottom) | Current Contextual Links | Missing Connections & Defects |
|---|---|---|---|
| `/products/fertilizer-granulation-plants/` | All 4 Fertilizer spokes | `industrial-conveyors-spares/` (`"troughed belt conveyors"` — too broad!), `industrial-rotary-dryers/` (`"rotary drum drying systems"`) | Update `"troughed belt conveyors"` → `belt-conveyors/`; link L338 `"disc pan granulators"` → `disc-granulator/` & `"rotary cooling and conditioning drums"` → `fertilizer-cooling-coating-drum/`; link L562 `"disc pan granulator"` & `"rotary drum granulator"` → respective spokes; link FAQ #1 & FAQ #3 to spokes; link L591/L640 `"Zak GIDC"` → `/manufacturing/`. |
| `.../disc-granulator/` | `double-roller-granulator/`, `rotary-drum-granulator/`, `triple-pass-dryer/` | **0** contextual links. | **Missing sibling link to `fertilizer-cooling-coating-drum/`**! Link FAQ #3 `"downstream rotary drum dryer"` → `triple-pass-dryer/` (or `industrial-rotary-dryers/`); link L648/L920 `"Dahegam workshop"` → `/manufacturing/`; link L664 `"fertilizer plants"` → `/industries/`; link raw powder metering → `screw-conveyors/`; nested `<main>`. |
| `.../double-roller-granulator/` | `disc-granulator/`, `rotary-drum-granulator/`, `bucket-elevators/` | **0** contextual links. | Only 3 unique body sources (0 from `/industries/`). Link L484 `"wet drum or pan granulation"` → `rotary-drum-granulator/` & `disc-granulator/` and `"rotary dryers"` → `industrial-rotary-dryers/`; link L748 & FAQ #5 `"bucket elevator"` → `bucket-elevators/`; link L588/L941 `"Dahegam facility"` → `/manufacturing/`; nested `<main>`. |
| `.../rotary-drum-granulator/` | `disc-granulator/`, `fertilizer-cooling-coating-drum/`, `triple-pass-dryer/` | **0** contextual links. | Link L696 `"Rotary dryer"` → `triple-pass-dryer/`, L709–722 `"Rotary cooler"` / `"Coating drum"` → `fertilizer-cooling-coating-drum/`; link FAQ #5 `"girth gears and forged trunnion rollers"` → `forged-trunnion-rollers/`; link FAQ #6 `"bucket elevators"` → `bucket-elevators/`; link L915 `"Dahegam workshop"` → `/manufacturing/`; nested `<main>`. |
| `.../fertilizer-cooling-coating-drum/` | `disc-granulator/`, `rotary-drum-granulator/`, `belt-conveyors/` | **0** contextual links. | **P0 Bug:** Hardcoded wrong phone `tel:+919227004455`. Only 3 unique body sources. Link FAQ #1 `"rotary drying drum"` → `industrial-rotary-dryers/` (or `triple-pass-dryer/`); link L720 `"packaging elevator"` → `bucket-elevators/`; link L929 `"Zak GIDC, Dahegam manufacturing facility"` → `/manufacturing/`; link L947 `"trunnion rollers"` → `forged-trunnion-rollers/`; nested `<main>`. |

---

### Pillar 4 — Industrial Conveyors & Spares (`5 Pages`)

| Route | Current Related Machinery Cards (Bottom) | Current Contextual Links | Missing Connections & Defects |
|---|---|---|---|
| `/products/industrial-conveyors-spares/` | All 4 Conveyor/Spares spokes | `sand-washing-plants/`, `industrial-rotary-dryers/` (`"rotary sand dryers"` — too broad!), `fertilizer-granulation-plants/` (`"fertilizer granulation pans"` — too broad!) | Update `"rotary sand dryers"` → `sand-dryer/` and `"fertilizer granulation pans"` → `disc-granulator/`; link L377 `"forged replacement trunnion support rollers and split girth gears"` → `forged-trunnion-rollers/`; link FAQ #1 & FAQ #4 → `forged-trunnion-rollers/` & `/manufacturing/`; link FAQ #2 → `belt-conveyors/`; add `?product=` to RFQ CTAs. |
| `.../belt-conveyors/` | `bucket-elevators/`, `screw-conveyors/`, `silica-sand-washing-plant/` | **0** contextual links. | **P0 Bug:** Hardcoded wrong phone `tel:+919227004455`. Link L531 `"sand washing plants"` → `sand-washing-plants/`; link L690 `"downstream of industrial rotary sand dryers"` → `sand-dryer/`; link L580 `"Zak GIDC, Dahegam facility"` → `/manufacturing/`; link quarry/mineral applications → `/industries/`; nested `<main>`. |
| `.../bucket-elevators/` | `screw-conveyors/`, `belt-conveyors/`, `sand-dryer/` | **0** contextual links. | **P0 Bug:** Hardcoded wrong phone `tel:+919227004455` + singular `?product=bucket-elevator` slug. Link L289 `"fertilizer granules"` → `fertilizer-granulation-plants/`; link L929 `"Zak GIDC, Dahegam workshop"` → `/manufacturing/`; link closed-loop recycling → `double-roller-granulator/`; nested `<main>`. |
| `.../screw-conveyors/` | `bucket-elevators/`, `belt-conveyors/`, `disc-granulator/` | **0** contextual links. | **P0 Bug:** Hardcoded wrong phone `tel:+919227004455` + singular `?product=screw-conveyor` slug. Link L428 `"Open belt conveyors"` → `belt-conveyors/`; link L465 `"rotary dryers"` → `industrial-rotary-dryers/`; link L873 `"SS304/SS316 food and chemical augers"` → `chemical-powder-dryer/`; link L562/L840 `"Zak GIDC, Dahegam facility"` → `/manufacturing/`; nested `<main>`. |
| `.../forged-trunnion-rollers/` | `bucket-elevators/`, `screw-conveyors/`, `triple-pass-dryer/` | **0** contextual links. | **P0 Bug:** Hardcoded wrong phone `tel:+919227004455`. **P0 Severely Under-Linked Spoke (only 2 body sources — 0 sibling, 0 dryer, 0 fertilizer drum, 0 industry, 0 manufacturing incoming links)!** Outbound: link L615 `"sand dryers"` → `sand-dryer/` and `"granulators"` → `rotary-drum-granulator/`; link L935 & FAQ #4 `"Zak GIDC, Dahegam facility"` → `/manufacturing/`; link `"cooling drums"` → `fertilizer-cooling-coating-drum/`; nested `<main>`. |
