# Minerals Solutions — Gate 7 SEO & Engineering Priority Roadmap

**Target Website:** https://mineralssolution.in/  
**Framework:** Next.js 16 (React 19)  
**Audit Date:** November 11, 2026  
**Auditor:** Senior Technical SEO & Growth Engineering Lead  
**Scope:** Immediate to Long-Term Prioritized Action Plan (P0 – P3)  
**Branch:** `development`  

---

## 1. Roadmap Architecture & Strategic Overview

Following the successful completion of the Gate 6 baseline implementation and Gate 7 verification, Minerals Solutions has established a high-performance, technically sound digital foundation (Composite SEO Score: **92.9 / 100**). 

This roadmap outlines the prioritized engineering, content, and off-page initiatives required to transition Minerals Solutions from a high-scoring technical site into the #1 ranked organic manufacturer in Western India for mineral processing machinery.

```
┌────────────────────────────────────────────────────────────────────────┐
│  PHASE 0: Critical Fixes & Search Verification (Week 1)                │
│  • Open Graph Social Preview Image (`og:image`)                        │
│  • Google Search Console DNS TXT Verification                          │
│  • IndexNow API Automatic Indexation Ping                              │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│  PHASE 1: High-Intent Spoke Route Rollout (Weeks 2 – 4)                │
│  • Triple-Pass Rotary Sand Dryer Dedicated Route                       │
│  • Hydrocyclone Sand Washing Plant Dedicated Route                     │
│  • Rotary Drum Fertilizer Granulator Dedicated Route                   │
│  • SVG Asset Minification & Asset Compression                          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│  PHASE 2: Interactive Engineering Tools & Spoke Phase 2 (Weeks 5 – 8)  │
│  • Interactive Material Drying Sizing Calculator                       │
│  • M-Sand Slurry & Water Recovery Calculator                           │
│  • Heavy Conveyor Belting & Idler Replacement Guide                    │
│  • Granulation Binder & Moisture Optimization Hub                      │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│  PHASE 3: Industry Authority, Backlinks & Expansion (Weeks 9 – 16)     │
│  • High-Authority Mineral & Cement Trade Backlinks                     │
│  • Plant Engineering Case Studies & Metallurgical Whitepapers          │
│  • Regional Localization & Geo-Corridor Expansion                      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Phase 0: Immediate Critical Fixes & Search Verification (P0 / P1)

### Task 0.1: Implement Universal & Route-Specific Open Graph Images (`og:image`)
- **Priority:** **P1 (High Impact)**
- **Impacted Routes:** All 11 existing production routes + root layout.
- **Estimated Effort:** 2 hours.
- **Dependencies:** Brand graphic design assets (1200x630px).
- **SEO & Commercial Benefit:** Enables rich visual link previews when URLs are shared on LinkedIn, WhatsApp B2B trade groups, and client emails, increasing social referral CTR by >45%.
- **Implementation Strategy:**
  1. Create a master 1200x630px branded image (`public/images/og-default.jpg`) highlighting the Minerals Solutions logo, Zak GIDC facility, and primary heavy machinery.
  2. Create 4 product-specific 1200x630px images for Rotary Dryers, Sand Washing Plants, Fertilizer Granulators, and Conveyors.
  3. Update `app/layout.tsx` to export default `openGraph.images`:
     ```typescript
     openGraph: {
       images: [
         {
           url: 'https://mineralssolution.in/images/og-default.jpg',
           width: 1200,
           height: 630,
           alt: 'Minerals Solutions Heavy Industrial Machinery Manufacturer',
         },
       ],
     }
     ```
  4. Add route-specific `openGraph.images` overrides in the 4 product pillar pages.
- **Acceptance Criteria:**
  - `curl http://localhost:3000/products/industrial-rotary-dryers/` displays valid `<meta property="og:image" content="..." />`.
  - LinkedIn Post Inspector and WhatsApp link previews render the correct image, title, and description.

### Task 0.2: Google Search Console DNS TXT Verification
- **Priority:** **P0 (Critical Blocker)**
- **Impacted Routes:** Entire domain (`mineralssolution.in`).
- **Estimated Effort:** 30 minutes (DNS propagation dependent).
- **Dependencies:** Access to domain registrar/DNS provider (Cloudflare / GoDaddy / Hostinger).
- **SEO & Commercial Benefit:** Unlocks official Google crawling data, indexation coverage monitoring, real organic keyword impressions, click-through rates, and average SERP rankings.
- **Acceptance Criteria:**
  - DNS TXT record `google-site-verification=...` resolves via `nslookup -type=TXT mineralssolution.in`.
  - Domain property is successfully verified in Google Search Console.
  - Sitemaps (`https://mineralssolution.in/sitemap.xml`) are submitted and processed with 0 errors.

### Task 0.3: IndexNow Instant Search Indexing Integration
- **Priority:** **P1**
- **Impacted Routes:** Automated Next.js build / deployment hook.
- **Estimated Effort:** 1.5 hours.
- **Dependencies:** Unique IndexNow API key.
- **SEO & Commercial Benefit:** Instantly notifies Bing, Yandex, Seznam, and partner engines of URL modifications within minutes of deployment.
- **Acceptance Criteria:**
  - IndexNow key text file hosted at `https://mineralssolution.in/{api-key}.txt`.
  - Deployment script triggers a webhook POST to `https://api.indexnow.org/indexnow` submitting updated routes.

---

## 3. Phase 1: High-Intent Spoke Route Rollout (P1)

Currently, 20 high-value long-tail search terms are permanently redirected to hash anchors on pillar pages (e.g., `/products/industrial-rotary-dryers/#configurations`). While this preserves link equity, creating dedicated, search-intent-specific landing pages allows Minerals Solutions to rank #1 for high-intent long-tail queries.

### Task 1.1: Triple-Pass Rotary Sand Dryer Dedicated Route
- **Route:** `/products/industrial-rotary-dryers/triple-pass-dryer/`
- **Primary Keyword:** `triple pass rotary dryer manufacturer india` (Search intent: Commercial / Transactional).
- **Estimated Effort:** 6 hours.
- **Dependencies:** Technical copy, 3-drum concentric engineering diagram, specification table.
- **Content Deliverables:**
  - Thermal efficiency breakdown vs single-pass (up to 85% thermal efficiency).
  - Space footprint comparison (50% reduction in plant floor area).
  - Metallurgical specs for inner, middle, and outer drum passes.
  - JSON-LD `Product` schema with nested `FAQPage`.
- **Acceptance Criteria:**
  - Route returns HTTP 200 OK directly.
  - Added to dynamic sitemap with `priority: 0.85`.
  - Previous 301 redirect updated to point to the new dedicated route.

### Task 1.2: Hydrocyclone Sand Washing Plant Dedicated Route
- **Route:** `/products/sand-washing-plants/hydrocyclone-washing-plant/`
- **Primary Keyword:** `hydrocyclone sand washing plant manufacturer gujarat`
- **Estimated Effort:** 6 hours.
- **Content Deliverables:**
  - Silt and clay desliming efficiency curves (<75 micron cutoff).
  - Polyurethane hydrocyclone liners and high-frequency dewatering screen integration.
  - Slurry pump power and head calculations.
- **Acceptance Criteria:**
  - Route returns HTTP 200 OK directly with unique metadata and schema.
  - Internal links updated from Sand Washing pillar.

### Task 1.3: Rotary Drum Fertilizer Granulator Dedicated Route
- **Route:** `/products/fertilizer-granulation-plants/rotary-drum-granulator/`
- **Primary Keyword:** `rotary drum granulator manufacturer india`
- **Estimated Effort:** 6 hours.
- **Content Deliverables:**
  - NPK chemical vs organic compost agglomeration physics.
  - Rubber/UHMWPE anti-stick drum lining specifications.
  - Drive girth gear and variable speed trunnion drive systems.
- **Acceptance Criteria:**
  - Route returns HTTP 200 OK directly with unique metadata and schema.

### Task 1.4: SVG & Static Asset Optimization
- **Priority:** **P2**
- **Impacted Routes:** Global UI elements (`public/` icons, diagrams).
- **Estimated Effort:** 1.5 hours.
- **Benefit:** Reduces asset transfer size by ~15-25KB, optimizing mobile FCP.
- **Acceptance Criteria:**
  - SVGs compressed via SVGO removing redundant metadata and comment blocks.

---

## 4. Phase 2: Interactive Engineering Tools & Conversion Assets (P2)

B2B plant procurement managers frequently calculate sizing and energy requirements before issuing tenders. Interactive calculation tools create enormous "link magnets" and generate exceptionally high dwell time, signaling supreme topical authority to Google.

### Task 2.1: Interactive Industrial Rotary Dryer Sizing Calculator
- **Route:** `/tools/rotary-dryer-sizing-calculator/`
- **Features:**
  - Inputs: Feed Material (Quartz, Silica Sand, Bentonite, Coal, Sawdust), Wet Moisture (%), Desired Dry Moisture (%), Throughput Capacity (TPH), Fuel Type (Coal, Biomass, Gas, Diesel).
  - Outputs: Estimated Water Evaporated (kg/hr), Recommended Shell Diameter (m) & Length (m), Estimated Thermal Energy Required (kcal/hr), Recommended Exhaust Baghouse CFM.
  - Direct CTA: *"Request Quotation for This Exact Configuration"* pre-filling the RFQ form.
- **Estimated Effort:** 12 hours.
- **Technical Stack:** React 19 Client Component with real thermodynamic formulas, styled with Tailwind.
- **Acceptance Criteria:**
  - Instant calculation results with 0 layout shift.
  - Pre-fills `/request-quote/` form via URL query params (`?feed=sand&tph=20`).

### Task 2.2: Manufactured Sand (M-Sand) Water & Slurry Recovery Calculator
- **Route:** `/tools/sand-washing-water-calculator/`
- **Features:**
  - Calculates fresh water requirement vs recycled water recovery through thickeners and filter presses.
- **Estimated Effort:** 8 hours.

### Task 2.3: Heavy Industrial Conveyor Power & Troughing Calculator
- **Route:** `/tools/belt-conveyor-power-calculator/`
- **Features:**
  - Inputs: Belt Width (mm), Length (m), Lift Angle (°), Material Bulk Density (t/m³), Belt Speed (m/s).
  - Outputs: Drive Motor Power (kW / HP), Belt Tension (kN), Recommended Pulley Diameter.
- **Estimated Effort:** 8 hours.

---

## 5. Phase 3: Authority Building, Digital PR & Localization (P3)

### Task 3.1: High-Authority Industrial Directory & Trade Citations
- **Goal:** Elevate Domain Rating (DR) from ~10 to 25+ within 6 months.
- **Target Directories:**
  - Indian Cement Review / Cement Equipment Directory
  - Mining & Minerals India Directory
  - Gujarat Chamber of Commerce & Industry (GCCI)
  - Dun & Bradstreet India Verified Supplier Listing
  - Projects Today Industrial Project Vendors
- **Acceptance Criteria:**
  - Consistent NAP and canonical URL across all external citations.

### Task 3.2: Technical Whitepaper & Case Study Publishing
- **Topics:**
  1. *"Thermodynamic Heat Loss Optimization in Industrial Rotary Sand Dryers: A Comparative Field Study in Morbi Ceramics Zone"*
  2. *"Eliminating Clay Slimes from River Sand: Hydrocyclone vs Bucket Wheel Recovery Analysis"*
- **Format:** Un-gated web versions (for indexing) with optional downloadable high-res PDF.

### Task 3.3: Regional Geo-Corridor Expansion
- **Strategy:** Target key industrial corridors across Gujarat, Rajasthan, and Maharashtra:
  - Dahegam & Gandhinagar (Local Hub)
  - Ahmedabad & Sanand (Manufacturing Hub)
  - Morbi & Surendranagar (Ceramic & Silica Sand Belt)
  - Surat & Bharuch (Chemical Processing Corridor)
  - Udaipur & Bhilwara (Mineral Mining Belt)

---

## 6. Implementation Summary Matrix

| Phase | Task ID | Initiative Description | Priority | Route(s) | Engineering Complexity | Expected Outcome |
|:---:|:---:|---|:---:|---|:---:|---|
| **P0** | **0.1** | Add Master & Route `og:image` Preview Cards | **P1** | All 11 Routes | Low (2 hrs) | Social CTR +45%, branded link preview. |
| **P0** | **0.2** | Verify Google Search Console DNS TXT Record | **P0** | Domain | Low (30 mins) | Official Google indexation & query tracking. |
| **P0** | **0.3** | Implement IndexNow Automated Ping Hook | **P1** | Build Hook | Low (1.5 hrs) | Instant crawl notice to Bing/partner engines. |
| **P1** | **1.1** | Triple-Pass Rotary Dryer Dedicated Route | **P1** | `/products/...` | Medium (6 hrs) | Top 3 rank for high-intent drying queries. |
| **P1** | **1.2** | Hydrocyclone Sand Washer Dedicated Route | **P1** | `/products/...` | Medium (6 hrs) | Top 3 rank for M-sand washing queries. |
| **P1** | **1.3** | Rotary Drum Granulator Dedicated Route | **P1** | `/products/...` | Medium (6 hrs) | Top 3 rank for fertilizer granulation. |
| **P1** | **1.4** | SVG Asset Optimization & Minification | **P2** | `public/` assets | Low (1.5 hrs) | Optimized FCP & asset weight. |
| **P2** | **2.1** | Industrial Rotary Dryer Sizing Calculator | **P2** | `/tools/...` | High (12 hrs) | Viral link magnet, high-intent RFQ generator. |
| **P2** | **2.2** | Sand Washing Slurry & Water Calculator | **P2** | `/tools/...` | Medium (8 hrs) | Industry utility & quarry engineer dwell time. |
| **P2** | **2.3** | Belt Conveyor Power & Troughing Calculator | **P2** | `/tools/...` | Medium (8 hrs) | Technical procurement capture. |
| **P3** | **3.1** | Acquire High-Authority Trade Backlinks | **P3** | Off-page | Ongoing | Elevate DR from ~10 to 25+. |
| **P3** | **3.2** | Field Engineering Case Studies | **P3** | `/case-studies/` | Medium | Strong E-E-A-T proof for Google & clients. |
| **P3** | **3.3** | Regional Industrial Corridor Geo-Landing Pages | **P3** | Regional Routes | Medium | Dominate localized regional searches. |

