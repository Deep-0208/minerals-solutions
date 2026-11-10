# Minerals Solutions: SEO Quality Gates & Technical Acceptance Framework

**Target Domain:** `https://mineralssolution.in/`  
**Standard:** Production Engineering & Search Architecture Standards (Next.js 16 / React 19)  
**Governance:** Zero-Tolerance Invariants for Crawlability, Canonical Integrity, Structured Data & Rendering

---

## 1. Technical SEO Acceptance Matrix

Every gate in the production lifecycle must pass the following verifiable automated and manual checks before code promotion.

| Category | Check ID | Audit Item | Pass Condition | Failure Condition | Verification Method |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Crawlability** | `CRAWL-01` | Robots.txt Syntax & Location | Serves at `/robots.txt` with HTTP 200, clean syntax, references canonical XML sitemap. | Missing, HTTP 404/500, syntax error, or blocking CSS/JS/images. | `curl -sI https://mineralssolution.in/robots.txt` |
| **Crawlability** | `CRAWL-02` | Asset Crawlability | `/images/`, `/_next/static/` are fully accessible to user-agents (`Googlebot`, `Bingbot`). | Disallow rules blocking stylesheets, client scripts, or WebP imagery. | Robots.txt parser validation |
| **Indexability** | `INDX-01` | Robots Meta Directives | All 33 canonical routes emit `<meta name="robots" content="index, follow">`. | Accidental `noindex` on public routes or missing robots tag. | HTML parser regex / Headless crawl |
| **Indexability** | `INDX-02` | Staging / Preview Protection | Staging environments (`preview.mineralssolution.in` or Vercel preview) serve `X-Robots-Tag: noindex, nofollow`. | Staging environment indexed by search engines. | HTTP Header inspection on preview URLs |
| **URL Parity** | `URL-01` | Trailing Slash Parity | Every internal `<Link>`, sitemap entry, canonical tag, and server response enforces trailing slash. | Inconsistent slash vs non-slash links triggering 308 redirect chains. | Internal link crawler & sitemap validator |
| **URL Parity** | `URL-02` | Canonical URL Self-Reference | Canonical URL matches exact served URL (`https://mineralssolution.in/<path>/`), protocol (HTTPS), lowercase. | Canonical points to HTTP, www, cross-domain, or missing trailing slash. | Automated DOM assertion |
| **Rendering** | `SSR-01` | Server-Side First Byte HTML | Complete text content, H1, H2s, spec tables, and schema are rendered in raw HTML from server. | Content gated behind client-side `useEffect` or client-only rendering (`'use client'` empty shell). | `curl -s https://mineralssolution.in/products/rotary-dryers/` |
| **Rendering** | `SSR-02` | Streaming & Suspense Audit | No `<Suspense>` boundary wraps critical SEO content in a way that delivers empty fallback to bot. | Critical technical descriptions or headings delayed inside streaming skeletons. | Raw HTML inspection without JS |
| **Status Codes**| `HTTP-01` | Clean Status Codes | All 33 canonical routes return HTTP 200 OK. Invalid routes return clean HTTP 404. | Soft 404s (200 OK with "not found" text), 500 errors, or chained 301/308 redirects. | Route status checker script |
| **Status Codes**| `HTTP-02` | Redirection Integrity | Any legacy or variant URL redirects via 301/308 directly to the final destination in exactly 1 hop. | Redirect loops, multi-hop chains (A -> B -> C), or 302 temporary redirects. | Redirect audit script |
| **Sitemap** | `MAP-01` | XML Sitemap Validity | `/sitemap.xml` valid XML, UTF-8 encoded, `<loc>` URLs match canonical URLs 100%, includes `<lastmod>`. | Broken XML tags, non-canonical URLs, 404 URLs in sitemap, or URLs missing trailing slash. | XML schema validator (`xmllint`) |
| **Architecture**| `ARCH-01` | Zero Orphan Routes | Every canonical route has at least 3 incoming internal links from within the website body. | Orphan routes isolated from parent hubs or navigation hierarchy. | Adjacency matrix link analysis |
| **Architecture**| `ARCH-02` | Maximum Click Depth | Every product spoke is reachable within 2 clicks from the homepage (`Home -> Hub -> Spoke`). | Pages buried 4+ clicks deep in navigation. | Crawl depth analysis |
| **Security** | `SEC-01` | Security Headers | `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`. | Missing headers or insecure CSP exposing eval in production. | Security headers audit script |

---

## 2. On-Page SEO Quality Standards

Every single page on `mineralssolution.in` must fulfill the following content and structural specifications:

### 1. Title Tag Engineering
* **Pattern:** `[Primary Target Keyword] | Minerals Solutions` (Spokes) or `[Category] | Minerals Solutions Gujarat` (Hubs).
* **Display Target:** Calibrated for typical SERP pixel widths (~580px desktop, ~540px mobile). Aim for 50-60 characters as a practical guideline to prevent truncation while ensuring complete keyword coverage.
* **Uniqueness:** 100% unique across all 33 routes. Zero duplicate title tags.

### 2. Meta Description Engineering
* **Pattern:** Active voice, technical value proposition, mentioning key parameters (e.g. *inlet temperature*, *capacity*, *GIDC Dahegam workshop*), ending with a clear B2B call to action.
* **Display Target:** 140-160 characters as a practical guideline to fill standard Google desktop and mobile snippet real estate without truncation.
* **Zero Fabrication:** Never claim unverified certifications, exaggerated production capacity, or fake pricing.

### 3. Heading Hierarchy (H1, H2, H3)
* **Single H1:** Exactly one `<h1>` per page matching the primary commercial intent of that specific route.
* **Semantic Structure:**
  * `<h1>`: Primary commercial equipment entity (e.g., *Double Pass Rotary Drum Dryer Manufacturer*).
  * `<h2>`: Major technical sections (*Working Principle & Concentric Drum Design*, *Technical Specifications & Engineering Matrix*, *Industrial Mineral & Aggregate Applications*, *Zak GIDC Fabrication & Quality Assurance*, *Frequently Asked Technical Questions*).
  * `<h3>`: Specific sub-models, component breakdowns, or application sectors.
* **No Skipped Levels:** Never jump from `<h1>` to `<h3>` directly.

### 4. Content Depth & Utility (Anti-Thin Content Rules)
* **No Word Count Inflation:** Content must be dense, technically accurate, and engineering-focused. Avoid repetitive filler phrases ("we are the best", "quality guaranteed" without evidence).
* **Mandatory Technical Details for Machinery Pages:**
  * Operating mechanism (direct vs indirect firing, co-current vs counter-current air draft).
  * Material compatibility (silica sand, quartz lumps, bio-fertilizer granules, agro-waste biomass).
  * Structural metallurgy (Mild Steel IS 2062, Stainless Steel SS304/SS316, manganese liner plates).
  * Drive & transmission design (girth gear and pinion, friction drive, high-torque reduction gearbox).
  * Dust control integration (cyclone separators, pulse-jet bag filters, wet scrubbers).
* **B2B Procurement Intent:** Include clear guidelines for plant managers on how to specify capacity (TPH), moisture reduction delta ($\Delta M$), and available plant footprint.

---

## 3. Structured Data Quality & Google Rich Result Standards

### A. General Schema Governance
* **100% Reality Matching:** Every property in JSON-LD must reflect visible, readable text on the page.
* **No Simulated Trust:** Strictly ZERO `AggregateRating`, fake 5-star review marks, or simulated testimonials.
* **No Fake Pricing:** Indicative prices extracted from IndiaMART must either be presented with genuine RFQ qualifiers (`"priceSpecification"`) or the schema must use standard inquiry structure (`"priceCurrency": "INR"`, `"price": "2500000"` only where explicitly verified by client).
* **Validation Standard:** Must validate with 0 errors and 0 critical warnings in Google's Rich Results Test and Schema.org Validator.

### B. Schema Assignment Matrix by Route Type

| Route Type | Primary Schemas | Supporting Schemas | Required Properties |
| :--- | :--- | :--- | :--- |
| **Homepage (`/`)** | `Organization`, `WebSite` | `LocalBusiness` | `legalName`, `url`, `logo`, `contactPoint`, `address`, `geo`, `sameAs` |
| **Company (`/about/`)** | `AboutPage`, `Organization` | `LocalBusiness` | `description`, `foundingDate`, `address`, `knowsAbout`, `employee` |
| **Contact (`/contact/`, `/request-quote/`)**| `ContactPage`, `LocalBusiness` | `PostalAddress`, `GeoCoordinates`| `telephone`, `email`, `openingHoursSpecification`, `geo`, `areaServed` |
| **Product Hub (`/products/.../`)** | `CollectionPage`, `ItemList` | `BreadcrumbList` | `name`, `description`, `itemListElement` (linking to spokes) |
| **Product Spoke (`.../double-pass-dryer/`)**| `Product`, `ItemPage` | `BreadcrumbList`, `FAQPage` (if applicable) | `name`, `image`, `description`, `category`, `manufacturer`, `offers` (verified) |
| **Legal (`/privacy-policy/`, `/terms/`)** | `WebPage` | `BreadcrumbList` | `name`, `description`, `inLanguage`, `publisher` |

---

## 4. AI Search & Answer Engine Optimization (AEO / GEO) Standards

Search is rapidly shifting toward generative engines (Google AI Overviews, Perplexity AI, ChatGPT Search). The site must be structured for machine understanding and accurate citability:

### 1. Entity Disambiguation
* Establish unambiguous company identity: *Minerals Solutions* is an industrial equipment fabrication company in Zak GIDC, Dahegam, Gujarat, India, specializing in rotary thermal drying systems, mineral beneficiation plants, fertilizer granulators, and material handling conveyors.
* Use consistent Wikidata and Schema.org entity references where appropriate (`knowsAbout`: *Rotary dryer*, *Fluidized bed dryer*, *Mineral processing*, *Granulation*).

### 2. High-Citability Fact Formatting
* Use clear definition paragraphs at the top of each section answering core queries directly (e.g. *"What is a Double Pass Rotary Dryer?"* followed by a 2-3 sentence concise, factual answer).
* Structure data in clean HTML tables (`<table>`, `<th>`, `<td>`) rather than image-based text. Generative engines parse HTML tables with significantly higher reliability than image OCR.

### 3. Technical Question Coverage
* Directly address real engineering evaluation criteria in FAQ sections:
  * Fuel consumption rates (coal vs natural gas vs biomass pellets).
  * Moisture reduction calculations from feed to discharge.
  * Footprint comparisons between single-pass and concentric multi-pass drums.
  * Wear life and metallurgy of internal flights and trunnion support rollers.

---

## 5. Automated Build-Time Invariant Audits (QA Pipeline)

Before any build is accepted or merged, the following automated scripts must run and pass with exit code `0`:

```bash
# Automated Pre-Build & Post-Build QA Suite
npm run audit:titles-descs    # Validates length, uniqueness, and format
npm run audit:canonicals       # Asserts exact canonical match and trailing slashes
npm run audit:schemas          # Validates JSON-LD structure against Schema.org
npm run audit:no-rating-leak   # Strict check ensuring zero AggregateRating in output
npm run audit:links            # Crawls HTML export to verify zero 404s and zero redirects
npm run audit:images           # Checks alt texts, WebP presence, and dimension attributes
```

**Definition of QA Acceptance:**
1. Zero TypeScript compilation errors (`tsc --noEmit`).
2. Zero ESLint errors or warnings on core routes.
3. 5/5 passing audit scripts.
4. Clean static generation of all 33 HTML pages.

