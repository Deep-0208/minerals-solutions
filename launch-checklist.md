# Minerals Solutions: Production Launch & Post-Launch Growth Checklist

**Domain:** `https://mineralssolution.in/`  
**Standard:** Enterprise B2B Launch Protocol & Search Performance Tracking  
**Target Search Engine:** Google Search Console, Bing Webmaster Tools, Google Business Profile (GBP)

---

## 1. Pre-Launch Technical Verification (Staging Gate)

Before domain DNS points to production, the staging environment must pass 100% of the following verification checks:

### A. Infrastructure & Protocol Security
- [ ] **SSL / TLS Certificate:** Valid, auto-renewing Let's Encrypt / Cloudflare certificate active. HTTP traffic redirects via 301 to HTTPS.
- [ ] **Canonical Host Enforcement:** Requests to `http://mineralssolution.in`, `http://www.mineralssolution.in`, and `https://www.mineralssolution.in` all redirect in exactly **1 hop** to `https://mineralssolution.in/`.
- [ ] **Trailing Slash Parity:** Requests to `https://mineralssolution.in/products` 308 redirect directly to `https://mineralssolution.in/products/`.
- [ ] **Custom 404 Page:** Custom error page renders with HTTP 404 status (no soft 404s), maintaining site navigation and search links.
- [ ] **Security Headers:**
 - `X-Frame-Options: SAMEORIGIN`
 - `X-Content-Type-Options: nosniff`
 - `Referrer-Policy: strict-origin-when-cross-origin`
 - Production Content Security Policy (CSP) active with zero `unsafe-eval`.

### B. Search Engine Crawlability & Metadata
- [ ] **Robots.txt Active:** Located at `/robots.txt` with HTTP 200 OK, linking to `https://mineralssolution.in/sitemap.xml`.
- [ ] **XML Sitemap Active:** Located at `/sitemap.xml` with HTTP 200 OK. Contains all 33 canonical routes with trailing slashes. Zero 404 or redirect URLs inside sitemap.
- [ ] **Meta Robots Directives:** Staging environment has `noindex` removed prior to production cutover; all production pages serve `<meta name="robots" content="index, follow">`.
- [ ] **Metadata Display Validation:** All 33 routes have unique title tags (calibrated ~50-60 characters) and unique meta descriptions (~140-160 characters).
- [ ] **Structured Data Validation:** Tested via Google Rich Results Test and Schema.org Validator:
 - Homepage: Valid `Organization`, `WebSite`, `LocalBusiness`.
 - Spoke Pages: Valid `Product`, `BreadcrumbList`.
 - Zero fake ratings or `AggregateRating` leaks.

### C. Asset & Performance Verification
- [ ] **WebP Responsive Imagery:** All 89 photos load as compressed `.webp` files with explicit `width` and `height` attributes to prevent CLS.
- [ ] **Above-the-Fold LCP:** Main hero banner imagery configured with `priority={true}` for rapid Largest Contentful Paint (<1.5s on mobile lab).
- [ ] **Below-the-Fold Lazy Loading:** All gallery and spoke photos load lazily.

---

## 2. Conversion Tracking & Lead Attribution Setup

Industrial websites succeed by generating qualified B2B RFQs. Tracking must be operational from hour zero:

### A. Analytics Configuration
- [ ] **Google Analytics 4 (GA4):** Measurement ID (`G-XXXXXXXXXX`) initialized via Next.js Script in root layout with `afterInteractive` loading strategy.
- [ ] **Google Tag Manager (Optional / Recommended):** Container initialized if client uses marketing automation or retargeting.

### B. Custom Event Measurement
- [ ] **`whatsapp_inquiry` Event:** Fires whenever a user clicks any WhatsApp contact button or floating pill. Captures `{ event_category: 'contact', machine_model: 'current_page_slug' }`.
- [ ] **`phone_call_click` Event:** Fires on clicks to `tel:+916352453050` or `tel:+919106163058`.
- [ ] **`rfq_form_submission` Event:** Fires on successful completion of the multi-step quotation form on `/request-quote/` or on-page RFQ modules. Captures `{ machine_category: '...', capacity_tph: '...' }`.
- [ ] **`spec_pdf_download` Event:** Fires when users download engineering datasheets or brochure pages.

---

## 3. Launch Day Operations & Search Engine Submission

Execute in sequence during production cutover:

1. **DNS Propagation Check:** Verify A-records and CNAME point to the production host.
2. **Google Search Console (GSC) Registration:**
   * Verify domain ownership via DNS TXT record (`mineralssolution.in`).
   * Add both URL Prefix (`https://mineralssolution.in/`) and Domain Property (`mineralssolution.in`).
   * Submit XML sitemap: `https://mineralssolution.in/sitemap.xml`.
   * Request manual indexing via URL Inspection for the top 5 high-priority routes (`/`, `/products/rotary-dryers/`, `/products/rotary-dryers/double-pass-dryer/`, `/products/mineral-processing/`, `/products/granulation-pellet-plants/`).
3. **Bing Webmaster Tools & IndexNow API:**
   * Import verified GSC profile into Bing Webmaster Tools.
   * Dispatch IndexNow API payload with all 33 URLs for instant crawling by Bing and partner engines.
4. **Google Business Profile (GBP) Synchronization:**
   * Claim and verify facility listing at: **10, Shyam Estate, Zak GIDC, Zak-Vahelal Road, Dahegam, Gandhinagar - 382330, Gujarat**.
   * Set primary category to: **Mining equipment manufacturer** / **Industrial equipment supplier**.
   * Link website URL directly to `https://mineralssolution.in/`.
   * Add direct phone numbers: `+91 6352453050`, `+91 9106163058`.
   * Upload all 89 authentic workshop, signboard, team, and machine photos.

---

## 4. Post-Launch 30 / 60 / 90-Day Growth Framework

### Days 1 to 30: Crawl & Indexation Validation
* **Daily GSC Coverage Monitoring:** Verify zero "Discovered - currently not indexed" or "Crawled - currently not indexed" errors.
* **Core Web Vitals Field Baseline:** Monitor CrUX field data in GSC as real user traffic begins.
* **Live SERP Position Check:** Track baseline rankings for core brand terms (`minerals solutions dahegam`, `minerals solutions ahmedabad`) and initial long-tail queries.
* **Conversion Funnel Test:** Verify real WhatsApp and phone leads are reaching Mr. Vipulbhai A. Prajapati and being logged in GA4.

### Days 31 to 60: Search Query Mining & CTR Optimization
* **GSC Search Performance Audit:** Identify impressions with high search volume but low CTR (positions 5-15).
* **Snippet Refinement:** Tweak title tags and meta descriptions on spoke pages to match exact queries users are searching for in Gujarat and pan-India.
* **Internal Link Optimization:** Add contextual body links from newly indexing pages to deeper machine spokes based on user navigation paths.
* **B2B Directory Citation Expansion:** Ensure consistent NAP across TradeIndia, ExportersIndia, YellowPages India, and regional GIDC business directories.

### Days 61 to 90: Topical Authority & Competitive Expansion
* **Competitive Rank Comparison:** Audit rank positions against local competitors (e.g. Vira Engineering in Dahegam, Convotech, Aksh Engineering).
* **Content Gap Analysis:** Identify any new machine models or customer questions not fully covered in initial specs.
* **Case Study & Field Installation Additions:** As new installations are commissioned, add customer project photographs and operational performance metrics to E-E-A-T sections.

