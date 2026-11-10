# Minerals Solutions -  Industrial Design System Specification

**Version:** 1.0.0 (Gate 4 Next.js 16 Foundation)  
**Status:** Production Standard  
**Brand Authority:** Derived from verified Minerals Solutions logo (`#BE2323` Crimson, `#2A2C2D` Charcoal)  
**Dial Calibration:**
- `DESIGN_VARIANCE: 5` (Structured industrial geometry, disciplined grid alignment, zero frivolous asymmetry)
- `MOTION_INTENSITY: 3` (Restrained, high-speed engineering feel; subtle state transitions, no scroll-hijacking)
- `VISUAL_DENSITY: 5` (Information-rich industrial datasheets, clear specification tables, high procurement clarity)

---

## 1. Design Philosophy: The Engineering Precision Language

Minerals Solutions is a heavy B2B manufacturer specializing in rotary dryers, fertilizer granulation plants, sand washing systems, and heavy-duty conveyor systems. Buyers are plant engineers, procurement directors, and mining executives.

The design language rejects consumer gimmicks:
1. **No Bubbly Consumer Slop:** Maximum corner radius on industrial cards is `rounded-md` (6px) or `rounded-lg` (8px). No 24px pill cards.
2. **No Frivolous AI Gradients:** Backgrounds are solid white (`#FFFFFF`) or technical light slate (`#F8FAFC`). No purple or neon mesh gradients.
3. **High-Contrast Data Typography:** Technical specifications (capacities in TPH, diameters in mm, motor power in kW/HP, temperatures in °C) utilize tabular figures and monospaced accents.
4. **Authentic Imagery Focus:** Actual workshop fabrication photos and on-site plant installations are showcased cleanly with 1px precision framing.

---

## 2. Color System Tokens (CSS Custom Properties)

```css
:root {
  /* Brand Identity (Logo-Derived) */
 --brand-primary: #BE2323;         /* Industrial Crimson Red */
 --brand-primary-hover: #9E1B1B;   /* Deepened Crimson on interaction */
 --brand-primary-light: #FEF2F2;   /* 50-tint Red surface */
 --brand-secondary: #2A2C2D;       /* Deep Industrial Charcoal / Graphite */
 --brand-secondary-hover: #1E2124; /* Elevated Graphite */
  
  /* Action & Accent */
 --brand-accent: #DC2626;          /* High-visibility Action Red */
 --brand-accent-amber: #D97706;    /* Industrial Safety & Certification Amber */
 --brand-whatsapp: #16A34A;        /* Verified WhatsApp Emerald (#16A34A / #22C55E) */
  
  /* Surfaces & Backgrounds */
 --bg-primary: #FFFFFF;            /* Main Page Ground */
 --bg-secondary: #F8FAFC;          /* Slate 50 Technical Section Fill */
 --bg-surface: #FFFFFF;            /* Card & Modal Surface */
 --bg-dark: #0F172A;               /* Deep Slate 900 Footer / Technical Bar */
 --bg-dark-elevated: #1E293B;      /* Slate 800 Card in Dark Context */
  
  /* Typography & Text */
 --text-primary: #0F172A;          /* Slate 900 - Headings & High Emphasis */
 --text-secondary: #334155;        /* Slate 800 - Body & Technical Details */
 --text-muted: #64748B;            /* Slate 500 - Captions, Breadcrumbs, Timestamps */
 --text-inverse: #FFFFFF;          /* Text on Dark Backgrounds */
  
  /* Structural Borders */
 --border-subtle: #E2E8F0;         /* Slate 200 - Spec Tables, Card Outlines */
 --border-strong: #CBD5E1;         /* Slate 300 - Interactive Hover Borders */
 --border-primary: rgba(190, 35, 35, 0.25); /* Subtle Crimson Brand Accent Stroke */
  
  /* Shadows */
 --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
 --shadow-card: 0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.04);
 --shadow-card-hover: 0 8px 20px -4px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03);
}
```

---

## 3. Typography Scale & Hierarchy

- **Display & Headings:** `font-sans` with `-0.025em` tracking for crisp, authoritative engineering weight.
- **Body & Editorial:** `font-sans` with `1.6` line-height for effortless scanning of heavy machinery datasheets.
- **Data & Metric Figures:** `font-mono` with tabular figures (`font-variant-numeric: tabular-nums`).

| Level | Size | Weight | Tracking | Leading | Target Element |
|---|---|---|---|---|---|
| **H1 Hero** | 2.5rem - 3.75rem (40-60px) | 800 (Extrabold) | `-0.03em` | `1.08` | Primary Page Title |
| **H2 Section** | 1.875rem - 2.25rem (30-36px) | 700 (Bold) | `-0.02em` | `1.2` | Major Product / Technical Sections |
| **H3 Subsection** | 1.25rem - 1.5rem (20-24px) | 600 (Semibold) | `-0.01em` | `1.3` | Machine Feature Headers, Spec Cards |
| **Body Large** | 1.125rem (18px) | 400 (Regular) | `normal` | `1.6` | Hero Intro, Executive Summaries |
| **Body Base** | 1.0rem (16px) | 400 (Regular) | `normal` | `1.6` | General Copy, Equipment Descriptions |
| **Body Small** | 0.875rem (14px) | 500 (Medium) | `normal` | `1.5` | Technical Spec Labels, Table Content |
| **Data / Metric** | 0.875rem (14px) | 600 (Semibold) | `0.02em` | `1.4` | TPH, kW, mm, RPM (Monospace) |
| **Micro Caption** | 0.75rem (12px) | 600 (Semibold) | `0.05em` | `1.4` | Upper-case Subtitle Pills & Category Tags |

---

## 4. Spacing, Grid & Layout Standards

- **Page Max Width:** `max-w-7xl` (1280px) for standard containers; `max-w-6xl` (1152px) for focused reading.
- **Horizontal Container Padding:** `px-4 sm:px-6 lg:px-8`.
- **Section Vertical Padding:**
 - Standard Section: `py-16 md:py-24` (64px to 96px).
 - Compact Section / CTA Banner: `py-12 md:py-16` (48px to 64px).
- **Grid Layout Rules:**
 - Product Grid: 1 col (mobile) → 2 cols (tablet `md:`) → 3 cols (desktop `lg:`).
 - Spec Tables: 2-column key-value or multi-column responsive grid with horizontal scrolling fallback.
 - Avoid flexbox percentage hacks; strictly adhere to CSS Grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).

---

## 5. Component Standards

### 5.1 Header & Navigation
- **Top Utility Bar (`bg-slate-900 text-slate-300 text-xs py-2`):**
 - Left: Verified GSTIN `24AUSPP9555F1ZZ` & UDYAM Registration badges.
 - Right: Direct Factory Phone `+91 97262 61271` / `+91 80476 26632` and Factory Location (Zak GIDC, Dehgam).
- **Main Nav Bar (`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200`):**
 - Authentic Minerals Solutions Logo (`components/brand/Logo.tsx`).
 - Navigation Links with dropdown support for:
 - **Rotary Dryers** (Sand, Saw Dust, Mineral, Triple Pass, Slag)
 - **Fertilizer Plants** (Pan Granulator, Rotary Drum, Cooling, Turnkey)
 - **Sand Washing** (Bucket Washer, Hydrocyclone, Screw Classifier)
 - **Conveyor Systems** (Idlers, Pulleys, Belts, Overland)
 - **About Us & Plant**
 - **Contact / RFQ**
 - Primary Action Button: "Request Quotation (RFQ)" in Brand Crimson (`#BE2323`).

### 5.2 Footer
- 4-Column Layout on Dark Slate Ground (`#0F172A`):
 - **Col 1 (Company & Trust):** Brand Logo, Brief Description, GSTIN & UDYAM compliance badges, IndiaMART Trust Seal (4.8★).
 - **Col 2 (Machinery Categories):** Direct canonical links to top cluster pages.
 - **Col 3 (Quick Links & Resources):** About Us, Manufacturing Facility, Engineering Specs, Sitemap, Privacy Policy.
 - **Col 4 (Plant & Factory Contact):** Exact registered address: *Plot No. 12, Shed No. 3, Shreenathji Estate, Zak GIDC, Dehgam, Gandhinagar - 382330, Gujarat, India*. Direct phone, WhatsApp, and email links.
- Bottom Bar: Copyright © 2026 Minerals Solutions. All rights reserved.

### 5.3 Interactive Buttons
- **Primary Button:** High-contrast Crimson (`bg-[#BE2323] hover:bg-[#9E1B1B] text-white font-semibold px-6 py-3 rounded-md shadow-sm`).
- **Secondary Button:** Deep Charcoal (`bg-[#2A2C2D] hover:bg-[#1E2124] text-white font-medium px-6 py-3 rounded-md`).
- **Outline Button:** Border-slate-300 with hover border-slate-400 and text-slate-800.
- **WhatsApp Button:** Authentic Emerald (`bg-[#16A34A] hover:bg-[#15803D] text-white font-medium`).
- **Phone Call Button:** Primary Crimson or Slate Blue pill with phone icon.

### 5.4 Sticky Mobile Contact Bar (`components/common/StickyContactBar.tsx`)
- Fixed at viewport bottom for mobile devices (`sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-2 flex items-center gap-2`).
- 3 Instant Actions:
  1. Call Direct (`tel:+919726261271`)
  2. WhatsApp Inquiry (`https://wa.me/919726261271?text=...`)
  3. RFQ Modal / Form trigger.

