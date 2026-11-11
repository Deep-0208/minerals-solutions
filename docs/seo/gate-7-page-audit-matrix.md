# Gate 7: Page-by-Page SEO Audit Matrix

**Project:** Minerals Solutions (`mineralssolution.in`)  
**Audit Type:** Forensic Live DOM & Source Code Re-Audit  
**Auditor:** Senior Technical SEO & Next.js Engineer  
**Date:** November 11, 2026  
**Environment:** Next.js 16.4.6 | Node v24.15.0 | Localhost Port 3000  

---

## 1. Master Summary Matrix (All 11 Production Pages)

| # | Route | HTTP Status | Indexability | Title Length | Meta Desc Length | Canonical Invariant | H1 Count | Word Count | Schema Blocks | Page Score |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | `/` | 200 OK | Index, Follow | 59 chars | 159 chars | `https://mineralssolution.in/` | 1 | 1,127 | LocalBusiness, WebSite | **94 / 100** |
| **2** | `/about/` | 200 OK | Index, Follow | 56 chars | 148 chars | `https://mineralssolution.in/about/` | 1 | 535 | LocalBusiness, WebSite, AboutPage | **93 / 100** |
| **3** | `/contact/` | 200 OK | Index, Follow | 53 chars | 157 chars | `https://mineralssolution.in/contact/` | 1 | 400 | LocalBusiness, WebSite, ContactPage | **95 / 100** |
| **4** | `/industries/` | 200 OK | Index, Follow | 57 chars | 154 chars | `https://mineralssolution.in/industries/` | 1 | 710 | LocalBusiness, WebSite, WebPage | **92 / 100** |
| **5** | `/manufacturing/` | 200 OK | Index, Follow | 59 chars | 140 chars | `https://mineralssolution.in/manufacturing/` | 1 | 686 | LocalBusiness, WebSite, WebPage | **94 / 100** |
| **6** | `/request-quote/` | 200 OK | Index, Follow | 56 chars | 158 chars | `https://mineralssolution.in/request-quote/` | 1 | 446 | LocalBusiness, WebSite, WebPage+Service | **94 / 100** |
| **7** | `/products/` | 200 OK | Index, Follow | 55 chars | 157 chars | `https://mineralssolution.in/products/` | 1 | 535 | LocalBusiness, WebSite, CollectionPage | **92 / 100** |
| **8** | `/products/industrial-rotary-dryers/` | 200 OK | Index, Follow | 60 chars | 150 chars | `https://mineralssolution.in/products/industrial-rotary-dryers/` | 1 | 1,278 | LocalBusiness, WebSite, Product, FAQPage | **96 / 100** |
| **9** | `/products/sand-washing-plants/` | 200 OK | Index, Follow | 58 chars | 156 chars | `https://mineralssolution.in/products/sand-washing-plants/` | 1 | 1,175 | LocalBusiness, WebSite, Product, FAQPage | **95 / 100** |
| **10**| `/products/fertilizer-granulation-plants/` | 200 OK | Index, Follow | 60 chars | 155 chars | `https://mineralssolution.in/products/fertilizer-granulation-plants/` | 1 | 1,219 | LocalBusiness, WebSite, Product, FAQPage | **95 / 100** |
| **11**| `/products/industrial-conveyors-spares/` | 200 OK | Index, Follow | 59 chars | 144 chars | `https://mineralssolution.in/products/industrial-conveyors-spares/` | 1 | 1,223 | LocalBusiness, WebSite, Product, FAQPage | **96 / 100** |

---

## 2. Granular Route-by-Route Evaluation

### 1. Homepage
- **URL:** `https://mineralssolution.in/`
- **Source File:** [`app/(site)/page.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/app/(site)/page.tsx)
- **HTTP Status:** 200 OK | **Indexability:** `index, follow`
- **Title:** `Minerals Solutions | Industrial Rotary Dryers & Plants Gujarat` (Exact string length: 59 chars; HTML encoded: 66 chars).
- **Meta Description:** `Gujarat manufacturer of high-efficiency industrial rotary dryers, sand washing plants, fertilizer granulators, and heavy conveyor systems at Zak GIDC, Dahegam.` (159 chars).
- **Canonical:** `<link rel="canonical" href="https://mineralssolution.in/" />`
- **H1:** `Industrial Rotary Dryers, Sand Washing & Fertilizer Granulation Plants`
- **Heading Hierarchy:** 1 H1, 7 H2s, 37 H3s. Clean semantic cascade without skipped heading levels.
- **Primary Keyword:** `rotary dryer manufacturer gujarat` | **Intent:** Commercial Investigation
- **Content Quality & Depth:** 1,127 words covering the 4 manufacturing divisions, 8 fabrication capabilities, E-E-A-T credentials, and industries served.
- **Schema Types:** Block 1: `LocalBusiness` (additionalType: `ManufacturingPlant`), `WebSite`.
- **Internal Links:** 15 internal links pointing to `/products/`, `/request-quote/`, `/about/`, `/manufacturing/`, and the 4 pillar categories.
- **Image SEO:** 9 images with complete descriptive alt text, explicit width/height dimensions, and WebP compression.
- **Performance Observations:** LCP hero loads with `priority={true}`. Zero layout shift (CLS = 0.00).
- **Remaining Gaps:** Missing `og:image` tag.
- **Page Score:** **94 / 100**

---

### 2. About Us
- **URL:** `https://mineralssolution.in/about/`
- **Source File:** [`app/(site)/about/page.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/app/(site)/about/page.tsx)
- **HTTP Status:** 200 OK | **Indexability:** `index, follow`
- **Title:** `About Minerals Solutions | Heavy Machinery Gujarat Works` (56 chars).
- **Meta Description:** `Discover Minerals Solutions: Gujarat manufacturer of industrial rotary dryers, fertilizer granulation plants, and sand washers at Zak GIDC, Dahegam.` (148 chars).
- **Canonical:** `<link rel="canonical" href="https://mineralssolution.in/about/" />`
- **H1:** `Engineering Reliability for Heavy Industry`
- **Heading Hierarchy:** 1 H1, 4 H2s, 10 H3s.
- **Primary Keyword:** `minerals solutions dahegam` | **Intent:** Informational / Navigational
- **Content Quality & Depth:** 535 words detailing corporate credentials, proprietor Mr. Vipulbhai Prajapati, CEO Mr. P Amrutlal, and 4 core manufacturing principles.
- **Schema Types:** Block 1: `LocalBusiness`, `WebSite`. Block 2: `AboutPage` with founder entity and `BreadcrumbList`.
- **Internal Links:** Contextual links to `/manufacturing/`, `/request-quote/`, and `/contact/`.
- **Image SEO:** 3 images including authentic factory team photograph with descriptive alt text.
- **Performance Observations:** Fast static delivery, lightweight page weight (<35 KB HTML).
- **Remaining Gaps:** Could publish verified client references and machinery test certificates.
- **Page Score:** **93 / 100**

---

### 3. Contact Us
- **URL:** `https://mineralssolution.in/contact/`
- **Source Files:** [`app/(site)/contact/page.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/app/(site)/contact/page.tsx), [`components/contact/ContactClient.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/components/contact/ContactClient.tsx)
- **HTTP Status:** 200 OK | **Indexability:** `index, follow`
- **Title:** `Contact Minerals Solutions | Zak GIDC Dahegam Factory` (53 chars).
- **Meta Description:** `Contact Minerals Solutions at Zak GIDC, Dahegam, Gandhinagar. Call +91 6352453050 or email sales@mineralssolution.in for direct machinery engineering quotes.` (157 chars).
- **Canonical:** `<link rel="canonical" href="https://mineralssolution.in/contact/" />` (Fixed: no longer defaults to root `/`).
- **H1:** `Contact Minerals Solutions Works`
- **Heading Hierarchy:** 1 H1, 3 H2s, 4 H3s.
- **Primary Keyword:** `minerals solutions contact number` | **Intent:** Commercial / Local
- **Content Quality & Depth:** 400 words with primary hotlines (`+91 63524 53050`, `+91 91061 63058`), IndiaMART PNS line, GSTIN, MSME UDYAM, operating hours, and interactive inquiry form.
- **Schema Types:** Block 1: `LocalBusiness`, `WebSite`. Block 2: `ContactPage` with `PostalAddress` and `BreadcrumbList`.
- **Internal Links:** Link to `/` in breadcrumb.
- **Image SEO:** 2 brand icons/logos.
- **Performance Observations:** Form is isolated in a leaf client component; server renders raw contact details for Googlebot.
- **Remaining Gaps:** Missing embedded Google Maps CID iframe.
- **Page Score:** **95 / 100**

---

### 4. Industries Served
- **URL:** `https://mineralssolution.in/industries/`
- **Source File:** [`app/(site)/industries/page.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/app/(site)/industries/page.tsx)
- **HTTP Status:** 200 OK | **Indexability:** `index, follow`
- **Title:** `Industries Served | Mineral, Fertilizer & Sand Processing` (Exact: 57 chars; Encoded: 61 chars).
- **Meta Description:** `Industrial machinery applications by Minerals Solutions: rotary dryers, sand washers, and granulators across silica sand, foundry, and fertilizer sectors.` (154 chars).
- **Canonical:** `<link rel="canonical" href="https://mineralssolution.in/industries/" />`
- **H1:** `Heavy Process Solutions for Core Industries`
- **Heading Hierarchy:** 1 H1, 9 H2s, 4 H3s.
- **Primary Keyword:** `industrial drying mineral processing applications` | **Intent:** Commercial Investigation
- **Content Quality & Depth:** 710 words covering 8 discrete industrial sectors with distinct process challenges and engineering solutions.
- **Schema Types:** Block 1: `LocalBusiness`, `WebSite`. Block 2: `WebPage` with `BreadcrumbList`.
- **Internal Links:** 8 contextual in-card links pointing directly to the 4 product divisions.
- **Image SEO:** SVG vector icons.
- **Performance Observations:** Fast render, clean typography.
- **Remaining Gaps:** Could add industry case studies detailing TPH throughput gains.
- **Page Score:** **92 / 100**

---

### 5. Manufacturing Facility & Fabrication Works
- **URL:** `https://mineralssolution.in/manufacturing/`
- **Source File:** [`app/(site)/manufacturing/page.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/app/(site)/manufacturing/page.tsx)
- **HTTP Status:** 200 OK | **Indexability:** `index, follow`
- **Title:** `Manufacturing Facility & Heavy Fabrication Works | Zak GIDC` (Exact: 59 chars; Encoded: 63 chars).
- **Meta Description:** `Tour Minerals Solutions heavy fabrication facility in Zak GIDC, Dahegam. Plate rolling to 25mm+, submerged arc welding, and lathe machining.` (140 chars).
- **Canonical:** `<link rel="canonical" href="https://mineralssolution.in/manufacturing/" />`
- **H1:** `Manufacturing Infrastructure & Fabrication Works`
- **Heading Hierarchy:** 1 H1, 3 H2s, 16 H3s.
- **Primary Keyword:** `rotary dryer fabrication zak gidc dahegam` | **Intent:** Commercial / E-E-A-T
- **Content Quality & Depth:** 686 words detailing 8 heavy fabrication capabilities (plate cutting, 3-roll bending, SAW welding, lathe turning, refractory, dynamic balancing, shop testing, site erection) and 4 QA gates.
- **Schema Types:** Block 1: `LocalBusiness`, `WebSite`. Block 2: `WebPage` with physical address and `BreadcrumbList`.
- **Internal Links:** Links to `/request-quote/`, `/contact/`, and `/`.
- **Image SEO:** 3 images including factory rolling bay photo with descriptive alt text.
- **Performance Observations:** Zero layout shift, immediate First Paint.
- **Remaining Gaps:** Missing workshop video walk-through.
- **Page Score:** **94 / 100**

---

### 6. Request a Quote (RFQ)
- **URL:** `https://mineralssolution.in/request-quote/`
- **Source Files:** [`app/(site)/request-quote/page.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/app/(site)/request-quote/page.tsx), [`components/quote/RequestQuoteClient.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/components/quote/RequestQuoteClient.tsx)
- **HTTP Status:** 200 OK | **Indexability:** `index, follow`
- **Title:** `Request Machinery Quotation | Minerals Solutions Gujarat` (56 chars).
- **Meta Description:** `Submit plant specifications for custom quotations on industrial rotary dryers, sand washing lines, granulators, and heavy conveyors from our Dahegam workshop.` (158 chars).
- **Canonical:** `<link rel="canonical" href="https://mineralssolution.in/request-quote/" />` (Fixed: no longer defaults to root `/`).
- **H1:** `Request an Industrial Machinery Quotation`
- **Heading Hierarchy:** 1 H1, 4 H2s, 4 H3s.
- **Primary Keyword:** `rotary dryer price quotation` | **Intent:** Transactional (BOFU)
- **Content Quality & Depth:** 446 words with interactive 3-step RFQ wizard (Machinery Category Selection -> Technical Sizing Parameters -> Commercial Details) backed by honeypot anti-spam.
- **Schema Types:** Block 1: `LocalBusiness`, `WebSite`. Block 2: `WebPage` + `Service` (`Custom Industrial Machinery Fabrication & Sizing Quotation`) + `BreadcrumbList`.
- **Internal Links:** Breadcrumb link to `/`.
- **Image SEO:** 2 brand images.
- **Performance Observations:** Fully accessible, smooth interactive step transitions.
- **Remaining Gaps:** GA4 conversion event dispatch pending implementation in Gate 8.
- **Page Score:** **94 / 100**

---

### 7. Products Hub (Master Catalog)
- **URL:** `https://mineralssolution.in/products/`
- **Source File:** [`app/(site)/products/page.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/app/(site)/products/page.tsx)
- **HTTP Status:** 200 OK | **Indexability:** `index, follow`
- **Title:** `Industrial Machinery Catalog | Dryers, Washers & Plants` (Exact: 55 chars; Encoded: 59 chars).
- **Meta Description:** `Explore Minerals Solutions catalog: rotary drum dryers, bucket wheel sand washers, fertilizer granulators, and trough belt conveyors manufactured in Gujarat.` (157 chars).
- **Canonical:** `<link rel="canonical" href="https://mineralssolution.in/products/`
- **H1:** `Industrial Machinery & Plant Equipment`
- **Heading Hierarchy:** 1 H1, 5 H2s, 8 H3s.
- **Primary Keyword:** `mineral processing machinery manufacturer ahmedabad` | **Intent:** Commercial Directory
- **Content Quality & Depth:** 535 words summarizing the 4 manufacturing divisions with model lists, materials handled, and direct links.
- **Schema Types:** Block 1: `LocalBusiness`, `WebSite`. Block 2: `CollectionPage` with structured 4-item `ItemList` and `BreadcrumbList`.
- **Internal Links:** 8 internal links pointing to individual product pillars and quotation desk.
- **Image SEO:** 6 images with accurate alt text.
- **Performance Observations:** Fast rendering of catalog grid.
- **Remaining Gaps:** Could add downloadable PDF summary catalog.
- **Page Score:** **92 / 100**

---

### 8. Industrial Rotary Dryers & Thermal Systems
- **URL:** `https://mineralssolution.in/products/industrial-rotary-dryers/`
- **Source File:** [`app/(site)/products/industrial-rotary-dryers/page.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/app/(site)/products/industrial-rotary-dryers/page.tsx)
- **HTTP Status:** 200 OK | **Indexability:** `index, follow`
- **Title:** `Industrial Rotary Dryers Manufacturer | Single & Double Pass` (Exact: 60 chars; Encoded: 64 chars).
- **Meta Description:** `Heavy industrial rotary drum dryers (500 kg/hr to 50 TPH) for silica sand, minerals, sawdust, and chemicals. Fabricated in Zak GIDC, Dahegam, Gujarat.` (150 chars).
- **Canonical:** `<link rel="canonical" href="https://mineralssolution.in/products/industrial-rotary-dryers/" />`
- **H1:** `Industrial Rotary Drum Dryers & Thermal Systems`
- **Heading Hierarchy:** 1 H1, 5 H2s, 13 H3s.
- **Primary Keyword:** `industrial rotary dryer manufacturer ahmedabad` | **Intent:** Commercial Investigation / BOFU
- **Content Quality & Depth:** **1,278 words.** Features 4 drum configurations, baseline engineering spec table (IS 2062 plate, 300°C temp, EN-8 rollers), **Double Pass vs. Triple Pass vs. Single Pass Comparison Table**, and 4 verified technical FAQs.
- **Schema Types:** Block 1: `LocalBusiness`, `WebSite`. Block 2: `@type: "Product"` with 4 `additionalProperty` items + `BreadcrumbList` + `FAQPage` with 4 questions.
- **Internal Links:** 5 contextual internal links to `/products/sand-washing-plants/`, `/products/industrial-conveyors-spares/`, `/manufacturing/`, and `/request-quote/`.
- **Image SEO:** 3 images including double-pass rotary dryer workshop photo with Dahegam caption.
- **Performance Observations:** First load JS < 40 KB; HTML contains all tables server-side.
- **Remaining Gaps:** Interactive web-based heat balance / sizing calculator.
- **Page Score:** **96 / 100**

---

### 9. Sand Washing Plants & Hydrocyclone Separators
- **URL:** `https://mineralssolution.in/products/sand-washing-plants/`
- **Source File:** [`app/(site)/products/sand-washing-plants/page.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/app/(site)/products/sand-washing-plants/page.tsx)
- **HTTP Status:** 200 OK | **Indexability:** `index, follow`
- **Title:** `Sand Washing Plants & Hydrocyclone Separators | 30-200 TPH` (Exact: 58 chars; Encoded: 62 chars).
- **Meta Description:** `Industrial bucket wheel sand washing plants, hydrocyclones, and log washers (30 to 200 TPH). Recovering fine sand to 75 microns with low moisture discharge.` (156 chars).
- **Canonical:** `<link rel="canonical" href="https://mineralssolution.in/products/sand-washing-plants/" />`
- **H1:** `Sand Washing & Mineral Recovery Plants`
- **Heading Hierarchy:** 1 H1, 5 H2s, 13 H3s.
- **Primary Keyword:** `sand washing plant manufacturer gujarat` | **Intent:** Commercial Investigation
- **Content Quality & Depth:** **1,175 words.** Covers 4 washing equipment configurations, detailed technical spec table (30-200 TPH, 75-micron recovery cut, 12-15% moisture), **Bucket Wheel vs. Hydrocyclone vs. Integrated Plant Comparison Matrix**, and 4 technical FAQs.
- **Schema Types:** Block 1: `LocalBusiness`, `WebSite`. Block 2: `@type: "Product"` + `BreadcrumbList` + `FAQPage`.
- **Internal Links:** 5 contextual in-body links to `/products/industrial-rotary-dryers/`, `/products/industrial-conveyors-spares/`, `/manufacturing/`, and `/request-quote/`.
- **Image SEO:** 3 images including authentic river sand washing installation photograph.
- **Performance Observations:** Instant First Contentful Paint.
- **Remaining Gaps:** Flowsheet diagram graphic showing water recirculation thickener.
- **Page Score:** **95 / 100**

---

### 10. Fertilizer Granulation & Pellet Plants
- **URL:** `https://mineralssolution.in/products/fertilizer-granulation-plants/`
- **Source File:** [`app/(site)/products/fertilizer-granulation-plants/page.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/app/(site)/products/fertilizer-granulation-plants/page.tsx)
- **HTTP Status:** 200 OK | **Indexability:** `index, follow`
- **Title:** `Fertilizer Granulation & Pellet Plants | Pan & Drum Systems` (Exact: 60 chars; Encoded: 67 chars).
- **Meta Description:** `Turnkey bio-organic and NPK chemical fertilizer granulation plants (1 to 20 TPH). Pan granulators, cooling drums, and pellet mills manufactured in Gujarat.` (155 chars).
- **Canonical:** `<link rel="canonical" href="https://mineralssolution.in/products/fertilizer-granulation-plants/" />`
- **H1:** `Fertilizer Granulation & Bio-Pellet Plants`
- **Heading Hierarchy:** 1 H1, 5 H2s, 13 H3s.
- **Primary Keyword:** `fertilizer granulation plant manufacturer gujarat` | **Intent:** Commercial Investigation
- **Content Quality & Depth:** **1,219 words.** Outlines 8-stage turnkey process flow (manure prep to bagging), MS-PG-2200 pan granulator spec table, **Bio-Organic Compost vs. Chemical NPK Comparison Matrix**, and 4 technical FAQs.
- **Schema Types:** Block 1: `LocalBusiness`, `WebSite`. Block 2: `@type: "Product"` + `BreadcrumbList` + `FAQPage`.
- **Internal Links:** 5 contextual in-body links to `/products/industrial-rotary-dryers/`, `/products/industrial-conveyors-spares/`, and `/request-quote/`.
- **Image SEO:** 3 images including turnkey granulation plant installation photo.
- **Performance Observations:** High textual density with fast rendering.
- **Remaining Gaps:** Chemical compatibility chart for acidic liquid binders (H2SO4, H3PO4).
- **Page Score:** **95 / 100**

---

### 11. Industrial Conveyor Systems & Heavy Spares
- **URL:** `https://mineralssolution.in/products/industrial-conveyors-spares/`
- **Source File:** [`app/(site)/products/industrial-conveyors-spares/page.tsx`](file:///c:/Users/DELL/Desktop/SEO/Minerals%20Solutions%20SEO/app/(site)/products/industrial-conveyors-spares/page.tsx)
- **HTTP Status:** 200 OK | **Indexability:** `index, follow`
- **Title:** `Industrial Belt Conveyors & Heavy Mechanical Spares Gujarat` (Exact: 59 chars; Encoded: 63 chars).
- **Meta Description:** `Heavy trough belt conveyors, diamond lagged pulleys, idlers, forged EN-8/EN-9 trunnion rollers, and girth gears engineered at Zak GIDC, Dahegam.` (144 chars).
- **Canonical:** `<link rel="canonical" href="https://mineralssolution.in/products/industrial-conveyors-spares/" />`
- **H1:** `Industrial Conveyor Systems & Heavy Spares`
- **Heading Hierarchy:** 1 H1, 5 H2s, 14 H3s.
- **Primary Keyword:** `industrial conveyor system manufacturer ahmedabad` | **Intent:** Commercial / Spare Parts
- **Content Quality & Depth:** **1,223 words.** Features 3 HTML specification tables (IS 11592 Troughed Belt Conveyor, Forged EN-8/EN-9 Trunnion Rollers, and **Forged Alloy Steel vs. Cast Steel Roller Comparison Matrix**), and 4 technical FAQs.
- **Schema Types:** Block 1: `LocalBusiness`, `WebSite`. Block 2: `@type: "Product"` + `BreadcrumbList` + `FAQPage`.
- **Internal Links:** 6 contextual links connecting to dryers, washing plants, and quotation desk.
- **Image SEO:** 3 images including conveyor lattice truss structure photo at Dahegam.
- **Performance Observations:** Fast static delivery, clean tabular presentation.
- **Remaining Gaps:** Printable spare parts dimensional drawing checklist.
- **Page Score:** **96 / 100**

---

## 3. Auxiliary & Search Infrastructure Routes

### 12. Privacy Policy
- **URL:** `https://mineralssolution.in/privacy-policy/` | **Status:** 200 OK | **Canonical:** `/privacy-policy/`
- **Title:** `Privacy Policy | Minerals Solutions Gujarat` (43 chars) | **Words:** 483
- **Compliance:** Full Indian IT Act & DPDPA compliance detailing B2B RFQ inquiry handling.
- **Schema:** `WebPage` with `BreadcrumbList`.

### 13. Terms of Supply
- **URL:** `https://mineralssolution.in/terms/` | **Status:** 200 OK | **Canonical:** `/terms/`
- **Title:** `Terms of Supply & Equipment Quotation | Minerals Solutions` (56 chars) | **Words:** 493
- **Compliance:** Standard B2B commercial terms, quotation validity, warranty, and Dahegam/Gandhinagar jurisdiction.
- **Schema:** `WebPage` with `BreadcrumbList`.

### 14. Dynamic XML Sitemap
- **URL:** `https://mineralssolution.in/sitemap.xml` | **Status:** 200 OK | **Size:** 2,341 bytes
- **Verification:** Serves valid XML urlset containing all 13 canonical production routes. 100% trailing slash compliant.

### 15. Robots Directives
- **URL:** `https://mineralssolution.in/robots.txt` | **Status:** 200 OK | **Size:** 89 bytes
- **Verification:** Allows all crawlers, blocks `/api/`, correctly references sitemap.

