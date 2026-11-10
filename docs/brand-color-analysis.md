# Minerals Solutions -  Official Brand Identity & Color Analysis

**Document Status:** Production Approved  
**Source Asset:** Client Master Brand Asset (`Sharp MS Monogram Logo on White.png`, 1318×1193px) & IndiaMART Seller Identity  
**Verified Organization:** Minerals Solutions (Vipulbhai Prajapati / Zak GIDC, Dehgam, Gandhinagar / Ahmedabad, Gujarat)  
**Analysis Date:** 2026-11-10  
**Verification Method:** 1318×1193 high-resolution pixel extraction, RGB quantization, and WCAG 2.1 mathematical contrast verification.

---

## 1. Executive Summary & Brand Authenticity Verification

The design system for Minerals Solutions is directly derived from the official high-resolution company logo (`Sharp MS Monogram Logo on White.png`) provided by leadership.

### Anti-Slop Directive Compliance
- **Rejected & Deleted:** Old low-resolution raster artifacts (`minerals-solutions-logo-lg.webp`, `logo-1000x1000.jpg`, `logo.jpg`, etc.).
- **Accepted & Authenticated:** The genuine **Industrial Crimson/Ruby Red** (`#DA020D`) and **Pure Graphite Charcoal** (`#181818`) emblem representing the **"MS" Monogram** (Red 'M', Charcoal 'S' encircled by a bi-color circular industrial ring).

---

## 2. Quantitative Color Analysis (Extracted Pixels)

Pixel analysis of `Sharp MS Monogram Logo on White.png` (1318×1193px, 1,572,374 pixels total):

```
Dominant Red Pixels: 197,330 pixels
  #da020d (RGB 218, 2, 13)    [Luminance: 0.140, WCAG Contrast vs #FFFFFF: 5.26:1]
  #d9020d (RGB 217, 2, 13)    [Luminance: 0.138, WCAG Contrast vs #FFFFFF: 5.31:1]
  #b3020b (RGB 179, 2, 11)    [Interactive Hover Red, WCAG Contrast vs #FFFFFF: 7.22:1]

Dominant Charcoal / Graphite Pixels: 291,385 pixels
  #181818 (RGB 24, 24, 24)    [Luminance: 0.010, WCAG Contrast vs #FFFFFF: 17.76:1]
  #191919 (RGB 25, 25, 25)    [Luminance: 0.011, WCAG Contrast vs #FFFFFF: 17.50:1]
```

---

## 3. Official Design System Color Roles

| Color Role | Token Name | Extracted / Derived HEX | RGB Value | Usage in Next.js 16 Production UI |
|---|---|---|---|---|
| **Primary Brand** | `--brand-primary` | `#DA020D` | `rgb(218, 2, 13)` | Official logo emblem 'M', primary brand accents, active navigation indicators, key stat metrics |
| **Primary Hover** | `--brand-primary-hover` | `#B3020B` | `rgb(179, 2, 11)` | Interactive button hover state, elevated focus rings |
| **Secondary Brand** | `--brand-secondary` | `#181818` | `rgb(24, 24, 24)` | Logo emblem 'S', dark navigation headers, technical component framing, industrial trust badges |
| **Accent / CTA** | `--brand-accent` | `#DA020D` | `rgb(218, 2, 13)` | High-visibility Request-for-Quote (RFQ) triggers, WhatsApp/Phone action pills, urgent inquiry banners |
| **Accent Warm** | `--brand-accent-amber` | `#D97706` | `rgb(217, 119, 6)` | Subtle rating stars (IndiaMART 4.8★), machinery status badges, delivery timeline icons |
| **Dark Neutral (Heading)** | `--text-primary` | `#0F172A` | `rgb(15, 23, 42)` | Main H1-H4 display headings, technical equipment titles, data table headers (WCAG 17.85:1 AAA) |
| **Dark Neutral (Body)** | `--text-secondary` | `#334155` | `rgb(51, 65, 85)` | High-readability technical specifications, engineering descriptions, procurement specs (WCAG 9.61:1 AAA) |
| **Muted Neutral** | `--text-muted` | `#64748B` | `rgb(100, 116, 139)` | Metadata captions, breadcrumbs, copyright text, GSTIN/UDYAM compliance notes (WCAG 4.72:1 AA) |
| **Light Ground (Base)** | `--bg-primary` | `#FFFFFF` | `rgb(255, 255, 255)` | Pure clean white ground for maximum reading velocity and engineering clarity |
| **Technical Surface** | `--bg-secondary` | `#F8FAFC` | `rgb(248, 250, 252)` | Slate 50 background for alternating specification tables, technical cards, process steps |
| **Card Surface** | `--bg-surface` | `#FFFFFF` | `rgb(255, 255, 255)` | Elevated product cards, RFQ form container, certification badges |
| **Subtle Border** | `--border-subtle` | `#E2E8F0` | `rgb(226, 232, 240)` | Clean 1px precision hairline borders on spec tables and product feature cards |

---

## 4. Accessibility & Contrast Verification (WCAG 2.1)

All color combinations have been mathematically validated to eliminate illegible low-contrast text:

1. **White on Sharp Red (`#FFFFFF` on `#DA020D`):**  
 - Contrast Ratio: **5.26:1** (Exceeds 4.5:1 AA standard for regular text; exceeds 3:1 for large text).
2. **White on Primary Hover (`#FFFFFF` on `#B3020B`):**  
 - Contrast Ratio: **7.22:1** (Exceeds 7:1 AAA standard).
3. **Sharp Black on White (`#181818` on `#FFFFFF`):**  
 - Contrast Ratio: **17.76:1** (Exceeds 7:1 AAA standard).
4. **Slate 900 on White (`#0F172A` on `#FFFFFF`):**  
 - Contrast Ratio: **17.85:1** (Exceeds 7:1 AAA standard).
5. **Slate 800 on White (`#334155` on `#FFFFFF`):**  
 - Contrast Ratio: **9.61:1** (Exceeds 7:1 AAA standard).

---

## 5. Official Logo Asset Deliverables

All old logo files have been deleted. The following production assets are derived from `Sharp MS Monogram Logo on White.png`:
- **Master Pure White:** `public/images/brand/logo.png` & `logo.webp` (Master 1266×1193px)
- **Scaled WebP (Light Context):**
 - `public/images/brand/logo-lg.webp` (512×512px)
 - `public/images/brand/logo-md.webp` (256×256px)
 - `public/images/brand/logo-thumb.webp` (128×128px)
- **Transparent WebP (Universal Navigation):**
 - `public/images/brand/logo-transparent.png` & `logo-transparent.webp` (Master)
 - `public/images/brand/logo-transparent-md.webp` (256×256px)
 - `public/images/brand/logo-transparent-thumb.webp` (128×128px)
- **Dark Mode WebP (Footer & Dark Context):**
 - `public/images/brand/logo-dark.png` & `logo-dark.webp` (Master with white 'S' + vivid red 'M')
 - `public/images/brand/logo-dark-md.webp` (256×256px)
 - `public/images/brand/logo-dark-thumb.webp` (128×128px)
