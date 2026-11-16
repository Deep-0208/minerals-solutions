import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  RotateCw,
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ChevronRight,
  Info,
  Layers,
  Gauge,
  Factory,
  HelpCircle,
  Scale,
  Maximize2,
  Zap,
  Sparkles,
  Cog,
  Wrench,
  Boxes,
  Check,
  TrendingDown,
  Activity,
  HardHat,
  Flame,
  CircleDollarSign,
  TrendingUp,
  Sliders,
  ShieldAlert,
  ArrowUpRight,
  Workflow,
  Cpu,
  Settings,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Industrial Screw Conveyor Manufacturers | Minerals Solutions',
  },
  description: 'Procure industrial screw conveyors: U-trough & tubular pipe feeders (100mm to 600mm dia). Dust-tight carbon & stainless steel, built in Zak GIDC, Dahegam.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/industrial-conveyors-spares/screw-conveyors/',
  },
  openGraph: {
    title: 'Industrial Screw Conveyor Systems | Minerals Solutions',
    description:
      'Heavy duty industrial screw conveyors: U-trough & tubular pipe feeders (100mm to 600mm dia). Dust-tight carbon & SS304/SS316. Zak GIDC, Dahegam.',
    url: `${company.siteUrl}/products/industrial-conveyors-spares/screw-conveyors/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screw Conveyor Manufacturers | Minerals Solutions',
    description:
      'Heavy duty industrial screw conveyors: U-trough & tubular pipe feeders (100mm to 600mm dia). Dust-tight carbon & SS304/SS316. Zak GIDC, Dahegam.',
    images: [defaultTwitterImage],
  },
  keywords: [
    'screw conveyor manufacturers',
    'screw conveyor manufacturer near me',
    'u trough screw conveyor gujarat',
    'tubular screw feeder ahmedabad',
    'stainless steel screw conveyor',
    'industrial auger conveyor manufacturer',
    'horizontal screw conveyor price india',
    'chemical powder screw feeder',
  ],
};

const scSpecs = [
  {
    model: 'MS-SC-150',
    capacity: '1.0 - 3.0 TPH',
    screwDia: '150 mm (6")',
    maxPitch: '150 mm',
    maxSpeed: '45 - 90 RPM',
    troughThickness: '3.15 mm IS 2062 / SS304',
    maxIncline: 'Up to 30°',
    motorRange: '1.5 - 3.7 kW',
    typicalDuty: 'Fine powders, borax, dosing augers',
  },
  {
    model: 'MS-SC-200',
    capacity: '3.0 - 8.0 TPH',
    screwDia: '200 mm (8")',
    maxPitch: '200 mm',
    maxSpeed: '40 - 80 RPM',
    troughThickness: '4.0 mm IS 2062 / SS304',
    maxIncline: 'Up to 35°',
    motorRange: '3.7 - 7.5 kW',
    typicalDuty: 'Dry silica sand, cement, fly ash',
  },
  {
    model: 'MS-SC-300',
    capacity: '8.0 - 18.0 TPH',
    screwDia: '300 mm (12")',
    maxPitch: '300 mm',
    maxSpeed: '35 - 70 RPM',
    troughThickness: '5.0 mm IS 2062 / Hardox',
    maxIncline: 'Up to 40°',
    motorRange: '7.5 - 15 kW',
    typicalDuty: 'Rotary dryer discharge, NPK compost',
  },
  {
    model: 'MS-SC-400',
    capacity: '18.0 - 35.0 TPH',
    screwDia: '400 mm (16")',
    maxPitch: '400 mm',
    maxSpeed: '30 - 60 RPM',
    troughThickness: '6.0 mm IS 2062 / Hardox',
    maxIncline: 'Up to 45°',
    motorRange: '15 - 22 kW',
    typicalDuty: 'Crushed minerals, wet cake, biomass',
  },
  {
    model: 'MS-SC-500',
    capacity: '35.0 - 50.0 TPH',
    screwDia: '500 mm (20")',
    maxPitch: '500 mm',
    maxSpeed: '25 - 50 RPM',
    troughThickness: '8.0 mm IS 2062 / Hardox',
    maxIncline: 'Up to 45°',
    motorRange: '22 - 30 kW',
    typicalDuty: 'Heavy mineral beneficiation, clinker',
  },
  {
    model: 'MS-SC-600',
    capacity: '50.0 - 60.0+ TPH',
    screwDia: '600 mm (24")',
    maxPitch: '600 mm',
    maxSpeed: '20 - 45 RPM',
    troughThickness: '8.0 mm IS 2062 / Hardox',
    maxIncline: 'Up to 45°',
    motorRange: '30 - 37 kW',
    typicalDuty: 'High-volume overland bulk conveying',
  },
];

const faqs = [
  {
    q: 'How do I choose between a U-trough and a tubular pipe screw conveyor?',
    a: 'U-trough conveyors feature a removable bolted top cover along their entire length, making them the standard choice for horizontal or low-incline applications (up to 15°). They provide easy access for cleaning, washdown, and inspecting internal hanger bearings. In contrast, tubular pipe conveyors enclose the rotating helical screw inside a fully sealed round pipe casing. They are mandatory for steep inclines (15° to 45°), pressure-tight connections, toxic or hygroscopic chemicals, and outdoor installations where weatherproofing and zero dust emission are paramount.',
  },
  {
    q: 'What determines the maximum recommended trough cross-sectional loading percentage?',
    a: 'According to CEMA standards, the trough filling percentage must be strictly calibrated to material abrasiveness and flowability. For light, free-flowing, non-abrasive materials like grain or hydrated lime, a 45% trough loading (Class A) is acceptable. For medium-abrasion granular solids like dry silica sand, coal, or fertilizer prills, loading is limited to 30% (Class B). For severe abrasive, dense minerals such as quartz fines, alumina, or iron ore, loading must never exceed 15% (Class C) while reducing screw rotational speed below 40 RPM to prevent rapid flight wear and intermediate hanger bearing fouling.',
  },
  {
    q: 'How does Minerals Solutions isolate shaft bearings from abrasive material intrusion?',
    a: 'Our screw conveyors utilize external flanged plummer block bearings mounted on dedicated standoff brackets spaced 50mm to 100mm away from the trough end plates. The shaft penetration through the end plate is sealed with an industrial split-gland stuffing box packed with self-lubricating braided PTFE or graphite packing rings, with optional air-purge lantern rings. This physical standoff ensures that even if a seal experiences packing wear, falling material discharges harmlessly to the ground rather than migrating into the bearing housing, completely eliminating premature bearing failure.',
  },
  {
    q: 'Can the MS-SC Series handle sticky, cohesive, or semi-solid wet cake materials?',
    a: 'Yes. For cohesive bulk solids such as centrifuge dewatered cake, bio-compost, bentonite sludge, and hygroscopic fertilizer pastes, we replace standard continuous flights with open-center ribbon flights or adjustable paddle screws. Ribbon flights eliminate the solid center pipe surface where sticky material tends to build up and wrap around, allowing sticky masses to roll through the annular space without causing blockages or motor overloads.',
  },
];

export default function ScrewConveyorPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Industrial Screw Conveyor',
    description:
      'Heavy duty industrial screw conveyors: U-trough and tubular pipe feeders (100mm to 600mm diameter). Dust-tight carbon steel and SS304/SS316 construction with split gland stuffing box seals and shaft-mounted geared motors.',
    image: `${company.siteUrl}/images/products/conveyor-systems/conveyor-idler-roller-variant-1-lg.webp`,
    sku: 'MS-SC-150-600',
    mpn: 'MS-SC-SERIES',
    brand: {
      '@type': 'Brand',
      name: 'Minerals Solutions',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Minerals Solutions',
      url: company.siteUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '10, Shyam Estate, Zak GIDC, Dahegam',
        addressLocality: 'Gandhinagar',
        addressRegion: 'Gujarat',
        postalCode: '382330',
        addressCountry: 'IN',
      },
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '185000',
      highPrice: '850000',
      offerCount: '6',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: company.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${company.siteUrl}/products/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Industrial Conveyors & Spares',
        item: `${company.siteUrl}/products/industrial-conveyors-spares/`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Screw Conveyors',
        item: `${company.siteUrl}/products/industrial-conveyors-spares/screw-conveyors/`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main className="min-h-screen bg-white text-slate-900">
        {/* Breadcrumb Navigation Bar */}
        <section className="bg-slate-50 border-b border-slate-200 py-3">
          <Container>
            <Breadcrumbs
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Products', href: '/products/' },
                  {
                    label: 'Industrial Conveyors & Spares',
                    href: '/products/industrial-conveyors-spares/',
                  },
                  {
                    label: 'Screw Conveyors',
                    href: '/products/industrial-conveyors-spares/screw-conveyors/',
                  },
                ]}
              />
            </Container>
          </section>

        {/* Hero Section */}
        <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-white">

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
                  <Workflow className="w-3.5 h-3.5" />
                  100% Dust-Tight Enclosure | Precision Volumetric Metering
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
                  Industrial U-Trough &amp;{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300">
                    Tubular Screw Conveyors
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Continuous enclosed mechanical conveying from 1 to 60 TPH for dry silica sand, fly ash,
                  fertilizer minerals, borax powder, and abrasive crushed ores. Engineered with heavy-wall
                  carbon steel or SS304/SS316 troughs, split gland stuffing box seals, and hardfaced
                  helical flights for horizontal and steep inclined routing up to 45°.
                </p>

                {/* Key Metric Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Diameter Range
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-red-400 mt-1">
                      100 - 600mm
                    </div>
                    <div className="text-[11px] text-slate-500">4&quot; to 24&quot; Casing</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Throughput
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900-400 mt-1">
                      1 - 60 TPH
                    </div>
                    <div className="text-[11px] text-slate-500">Volumetric Feed</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Incline Angle
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      0° - 45°
                    </div>
                    <div className="text-[11px] text-slate-500">Horizontal to Steep</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Dust Containment
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
                      100% Sealed
                    </div>
                    <div className="text-[11px] text-slate-500">Gland Packed</div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button
                    href="/request-quote/?product=screw-conveyor"
                    variant="primary"
                    size="lg"
                    icon={<FileText className="w-5 h-5" />}
                  >
                    Request Sizing Quote &amp; Drawing
                  </Button>
                  <Button
                    href="tel:+919227004455"
                    variant="outline"
                    size="lg"
                    external
                    icon={<Phone className="w-5 h-5 text-red-400" />}
                  >
                    Speak with Bulk Handling Engineer
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 bg-slate-900 shadow-xl">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/products/conveyor-systems/conveyor-idler-roller-variant-1-lg.webp"
                      alt="Minerals Solutions Industrial Screw Conveyor Systems Workshop Assembly at Zak GIDC Dahegam" width={800} height={600}
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                    
                  </div>

                  <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-white flex items-center justify-between">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>SERIES: MS-SC-300</span>
                      <span className="text-red-400 font-bold">18 TPH DISCHARGE FEEDER</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Factory view: Heavy U-trough screw conveyor showing bolted dust-tight cover,
                      split gland stuffing box, and shaft-mounted helical gearmotor drive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Top-30% Citability Definition Block (Targeted for AI Overviews & Answer Engines) */}
        <section className="py-8 bg-slate-50 border-b border-slate-200">
          <Container>
            <div className="p-6 rounded-xl bg-white border-l-4 border-l-[#DA020D] border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-[#DA020D] shrink-0 mt-0.5" />
                <div className="text-slate-800 text-sm sm:text-base leading-relaxed">
                  <strong className="text-slate-950 font-semibold">What is an industrial screw conveyor? </strong>
                  An industrial screw conveyor (also known as an auger conveyor or spiral feeder) is a positive-displacement bulk material handling machine that transports powders, slurries, and granular solids along horizontal or inclined paths up to 30 degrees. Fabricated in Zak GIDC, Dahegam in heavy U-trough or tubular pipe configurations, the conveyor incorporates continuous helical flighting (100mm to 600mm diameter) welded to a heavy-gauge central torque shaft. Driven by high-efficiency IE3 geared motors with spherical roller hanger bearings, the unit handles abrasive materials like silica sand, fly ash, cement, and hot fertilizer salts at 3 to 50 TPH. Completely sealed dust-tight bolted covers with silicone gaskets and gland-packing shaft seals eliminate fugitive dust emissions and external product contamination in rigorous continuous manufacturing plant operations across mineral and chemical industrial facilities in India.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: Enclosed Dust-Tight Powder & Granular Material Transport */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-red-400 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Containment &amp; Metering Physics
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Enclosed Dust-Tight Powder &amp; Granular Material Transport
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Open belt conveyors create hazardous airborne fugitive dust when handling fine powders,
                fly ash, and toxic minerals. Minerals Solutions screw conveyors seal bulk materials inside
                continuous gasketed housings, protecting workforce health and eliminating raw material shrinkage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Zero Fugitive Dust Emissions</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Continuous rubber or ceramic-fiber gasketing between trough flanges and removable cover
                  plates ensures 100% airborne containment, complying with PCB workplace air quality limits
                  for cement, silica, and hazardous chemical plants.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Gauge className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Precision Volumetric Dosing</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Unlike gravity slides, screw rotation delivers a constant linear volumetric displacement
                  per revolution. Coupled with variable frequency inverter drives (VFD), the conveyor doubles
                  as a precise continuous feeder with ±2% batching repeatability.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Compact Mechanical Footprint</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Requires zero return belt run, tensioning towers, or idler frames. The self-contained
                  trough installs directly beneath hoppers, bag filters, cyclone discharges, and rotary dryers
                  where overhead clearance is severely restricted.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Helical Flight Geometries */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Custom Blade Metallurgy &amp; Pitch Profiles
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Helical Flight Geometries (Continuous, Ribbon, Paddle &amp; Hardfaced)
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Standard sectional flights fail rapidly when handling sticky cakes or abrasive minerals.
                Minerals Solutions presses custom flight geometries engineered specifically for your
                material’s bulk rheology and abrasiveness index.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Flight 1 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-mono font-extrabold text-base">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-950">Continuous Full-Pitch Flights</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Cold-rolled continuous helicoid or sectional flights where pitch equals screw diameter.
                  The standard high-efficiency configuration for free-flowing sand, grain, fertilizer prills,
                  and non-cohesive dry chemicals.
                </p>
                <div className="pt-2 text-xs font-mono text-red-400">Application: Free-Flowing Solids</div>
              </div>

              {/* Flight 2 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-extrabold text-base">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-950">Variable / Stepped Pitch Flights</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Short-pitch flights beneath hopper inlet throats transition into standard pitch downstream.
                  Draws material evenly along the entire length of the feed opening, preventing bridging,
                  rat-holing, and feed flooding.
                </p>
                <div className="pt-2 text-xs font-mono text-amber-400">Application: Loss-In-Weight Feeders</div>
              </div>

              {/* Flight 3 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-extrabold text-base">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-950">Open-Center Ribbon Flights</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Continuous steel ribbon attached to the center pipe by radial supporting spokes. The open
                  annular space prevents sticky pastes, compost, filter cake, and wet clay from wrapping
                  around the center shaft.
                </p>
                <div className="pt-2 text-xs font-mono text-yellow-400">Application: Viscous &amp; Sticky Pastes</div>
              </div>

              {/* Flight 4 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-extrabold text-base">
                  04
                </div>
                <h3 className="text-lg font-bold text-slate-950">Hardfaced Stellite / Hardox Lips</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Sectional flights with 55–60 HRC chromium carbide weld overlay or plasma-cut Hardox 400
                  outer wear edges. Multiplies service life by 400% against highly abrasive quartz fines,
                  granite dust, and clinker.
                </p>
                <div className="pt-2 text-xs font-mono text-emerald-400">Hardness: 55 - 60 HRC Overlay</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: Technical Specifications & Sizing Matrix */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-red-400 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Standard Engineering Parameters
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Technical Specifications &amp; TPH Sizing Matrix (MS-SC Series)
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Fabricated to heavy-duty industrial standards at our Zak GIDC, Dahegam facility.
                Available in mild steel (IS 2062 Grade B), wear-resistant Hardox, and chemical/sanitary
                stainless steel grades (SS304, SS316, SS316L).
              </p>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-100 text-slate-800 font-mono text-xs uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-4 px-4 font-bold text-slate-950">Model</th>
                    <th className="py-4 px-4 font-bold text-red-400">Capacity (TPH)</th>
                    <th className="py-4 px-4">Screw Dia</th>
                    <th className="py-4 px-4">Max Pitch</th>
                    <th className="py-4 px-4">Speed Range</th>
                    <th className="py-4 px-4">Trough Thickness</th>
                    <th className="py-4 px-4">Max Incline</th>
                    <th className="py-4 px-4">Drive Power</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono">
                  {scSpecs.map((spec, idx) => (
                    <tr
                      key={spec.model}
                      className={
                        idx % 2 === 0
                          ? 'bg-white hover:bg-slate-50 transition-colors'
                          : 'bg-slate-50/60 hover:bg-slate-100/70 transition-colors'
                      }
                    >
                      <td className="py-4 px-4 font-bold text-slate-950">{spec.model}</td>
                      <td className="py-4 px-4 font-bold text-red-400">{spec.capacity}</td>
                      <td className="py-4 px-4">{spec.screwDia}</td>
                      <td className="py-4 px-4">{spec.maxPitch}</td>
                      <td className="py-4 px-4 text-slate-600">{spec.maxSpeed}</td>
                      <td className="py-4 px-4 text-amber-300">{spec.troughThickness}</td>
                      <td className="py-4 px-4 text-emerald-400">{spec.maxIncline}</td>
                      <td className="py-4 px-4 text-slate-600">{spec.motorRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-mono">
              <div>* Custom lengths up to 30 meters, water-cooled jacketed troughs, and food-grade sanitary finishes available on request.</div>
              <div className="text-red-400">Certified IS 2062 / SS304 / SS316 Fabrication</div>
            </div>
          </Container>
        </section>

        {/* Section 4: U-Trough vs Tubular Pipe Configurations */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Structural Casing Selection
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                U-Trough vs Tubular Pipe Configurations (Horizontal &amp; Inclined)
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                The mechanical casing profile governs material containment, steep incline capabilities,
                and maintenance accessibility. Compare our two core body formats:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* U-Trough Format */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 font-mono font-bold">
                      FORMAT A
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">Modular U-Trough Conveyors</h3>
                      <div className="text-xs text-red-400 font-mono">Horizontal to 15° Incline</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-mono font-semibold">
                    Removable Covers
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Formed semi-cylindrical bottom trough with vertical top side plates. Bolted or clamp-action
                  dust covers along the full length provide instant visual access for millwright inspection,
                  washdown sanitation, and replacement of internal intermediate hanger bearings.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2 border-t border-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Full-Length Access:</strong> Complete inspection without dismantling drive or end plates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Flexible Inlets:</strong> Multiple gravity drop feed chutes along the upper cover plate.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Best Environments:</strong> Chemical powder plants, fertilizer mixing, and indoor processing bays.</span>
                  </li>
                </ul>
              </div>

              {/* Tubular Pipe Format */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 font-mono font-bold">
                      FORMAT B
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">Tubular Pipe Screw Feeders</h3>
                      <div className="text-xs text-amber-400 font-mono">Steep Incline 15° to 45°</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-mono font-semibold">
                    100% Sealed Pipe
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Seamless heavy-wall structural steel pipe enclosing the flight with tight radial clearance.
                  Prevents material from tumbling backward over flight edges during steep inclined conveying,
                  allowing continuous vertical elevation up to 45° with full volumetric efficiency.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2 border-t border-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Steep Incline Angles:</strong> Transports bulk solids up to 45° without material back-sliding.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Weatherproof Outdoor Duty:</strong> Resists heavy rain, wind-blown sand, and washdown spray.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Best Environments:</strong> Cement silo discharge, mobile batching plants, and boiler ash transfer.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 5: Hanger Bearings, Split Gland Shaft Seals & Geared Drives */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-red-400 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Mechanical Sub-Assemblies &amp; Reliability
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Hanger Bearings, Split Gland Shaft Seals &amp; Geared Drives
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Bearing failure and shaft seal leakage cause 90% of screw conveyor plant shutdowns.
                Minerals Solutions eliminates these failure modes with industrial-grade mechanical components:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">
                  <Cog className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Split-Gland Stuffing Boxes</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Two-piece cast iron or stainless split gland followers allow repacking without removing
                  the drive shaft or motor. Braided PTFE / graphite packing rings seal fine powders against
                  shaft rotation with adjustable gland bolts.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Maximize2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Outboard Standoff Bearings</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Drive and tail flanged bearings are physically offset 75mm from trough end plates via
                  machined standoff brackets. Abrasive powders discharging past a worn seal fall to the floor
                  rather than contaminating bearing grease cavities.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Self-Lubricating Hanger Bearings</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For conveyors over 4 meters, intermediate pipe couplings are supported by bronze,
                  oil-impregnated sintered iron, or Hardox split hanger bushings with hardened journal
                  sleeves, minimizing friction without grease contamination.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 5B: CEMA Sizing Formulas & Wear Liner Engineering */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                CEMA Calculation &amp; Metallurgy
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                CEMA Volumetric Sizing Principles &amp; Replaceable Wear Liners
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Proper mechanical sizing prevents motor stall under choked conditions while maximizing
                flight life. Minerals Solutions adheres strictly to CEMA (Conveyor Equipment Manufacturers
                Association) design formulas and offers replaceable wear liners for aggressive bulk handling:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center font-mono font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-950">CEMA Volumetric Capacity</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Volumetric displacement is calculated as cross-sectional screw area multiplied by pitch,
                  rotational speed, and the material loading factor (Class A 45%, Class B 30%, Class C 15%).
                  Restricting flight tip speeds below 0.6 m/s prevents particle degradation and abrasive scouring.
                </p>
                <div className="pt-2 text-xs font-mono text-red-400">Class C Loading: 15% Maximum</div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-950">UHMWPE Low-Friction Liners</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For cohesive chemicals, wet filter cake, and bio-fertilizer compost, bolt-in 8mm to 12mm
                  UHMWPE polymer trough liners provide a near-zero friction surface (coefficient of friction
                  &lt;0.12). Eliminates material sticking and reduces motor drive kilowatt requirements by up to 25%.
                </p>
                <div className="pt-2 text-xs font-mono text-amber-400">Surface Friction: &lt;0.12 Coefficient</div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-950">Hardox 400 / 500 Bolt-In Plates</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For high-abrasion silica sand, quartz rocks, and foundry sand, troughs are fitted with
                  segmented 6mm Hardox wear liners secured with countersunk plow bolts. Worn trough sections
                  can be replaced in under 2 hours without replacing the entire structural steel casing.
                </p>
                <div className="pt-2 text-xs font-mono text-yellow-400">Hardness: 400 - 500 BHN Steel</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 6: Workshop Quality Control & Manufacturing Proof */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-red-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  Workshop Engineering Precision
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                  True-Formed Flight Pressing &amp; Heavy Pipe Center Shafts
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  Fabricated in precision hydraulic flight-forming fixtures at our Zak GIDC, Dahegam facility.
                  Our heavy center pipe shafts eliminate rotational whip and center sag, guaranteeing smooth
                  clearance and whisper-quiet rotation across 24/7 continuous industrial duty.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-red-400 font-bold text-sm">Schedule 80 Center Pipe</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Heavy-wall seamless pipe center shafts minimize beam deflection (&lt;3mm over 4m),
                      preventing flight rubbing against the trough bottom.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-red-400 font-bold text-sm">Submerged Arc Seam Welds</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Continuous robotic or semi-automatic penetration welds along both sides of the
                      flight root prevent flight detachment under high torque starting loads.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-red-400 font-bold text-sm">Precision Flanged Joints</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Trough sections are CNC-machined with mating angle flanges and alignment dowels
                      to ensure continuous straightness across 30-meter assemblies.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-red-400 font-bold text-sm">Chemical Sanitary Polish</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      SS304/SS316 food and chemical augers are glass-bead blasted or mirror-polished
                      (Ra &lt;0.8 µm) to eliminate crevices and chemical cross-contamination.
                    </p>
                  </div>
                </div>
              </div>

              {/* Workshop Images Gallery */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/images/products/conveyor-systems/mild-steel-conveyor-idler-roller-lg.webp"
                    alt="Machined steel shafts and mechanical components precision manufactured at Minerals Solutions Zak GIDC Dahegam workshop" width={800} height={600}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-mono text-slate-200">
                    Workshop Bay: Precision Machined Shafts &amp; Mechanical Drives
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <Image
                      src="/images/products/rotary-dryers/continuous-type-rotary-dryer-lg.webp"
                      alt="Heavy industrial rotary machinery and screw discharge casing assembly at Dahegam" width={800} height={600}
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 text-[11px] font-mono text-slate-200">
                      Discharge Casing Integration
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <Image
                      src="/images/products/conveyor-systems/conveyor-belt-system-truss-lg.webp"
                      alt="Structural steel conveyor casings and support frames fabricated at Zak GIDC" width={800} height={600}
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 text-[11px] font-mono text-slate-200">
                      Modular Structural Troughs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Internal Linking Triangle: Parent Hub, 2 Sibling Spokes, 1 Cross-Pillar Machine */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/70">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5 font-mono">
                  <Layers className="w-4 h-4" />
                  Engineered Plant Integration & Sibling Equipment
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Turnkey Plant Integration & Complementary Systems
                </h2>
                <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
                  Connect this unit into a continuous, high-efficiency manufacturing line with matched upstream and downstream equipment.
                </p>
              </div>
              <Link
                href="/products/industrial-conveyors-spares/"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#DA020D] transition-colors shrink-0"
              >
                Explore Full Industrial Conveyors & Mechanical Spares Hub <ChevronRight className="w-4 h-4 text-[#DA020D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sibling Spoke 1 */}
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#DA020D]/40 transition-all flex flex-col justify-between group">
                <Link
                  href="/products/industrial-conveyors-spares/bucket-elevators/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Industrial Bucket Elevator Systems specifications"
                >
                  <Image
                    src="/images/products/conveyor-systems/conveyor-tail-drum-pulley-md.webp"
                    alt="Industrial Bucket Elevator System"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Sibling Conveyor Line
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/industrial-conveyors-spares/bucket-elevators/" className="hover:underline">
                        Industrial Bucket Elevator Systems
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Continuous vertical bucket elevator systems lifting materials up to 45 meters height.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/industrial-conveyors-spares/bucket-elevators/"
                      className="font-bold text-[#DA020D] hover:text-[#900] text-xs inline-flex items-center gap-1 group/link"
                    >
                      <span>View Machine Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sibling Spoke 2 */}
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#DA020D]/40 transition-all flex flex-col justify-between group">
                <Link
                  href="/products/industrial-conveyors-spares/belt-conveyors/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Industrial Belt Conveyor Systems specifications"
                >
                  <Image
                    src="/images/products/conveyor-systems/conveyor-belt-system-truss-md.webp"
                    alt="Troughed Belt Conveyor System"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold text-blue-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Sibling Conveyor Line
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/industrial-conveyors-spares/belt-conveyors/" className="hover:underline">
                        Industrial Belt Conveyor Systems
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Three-roll troughed belt conveyors for bulk minerals, sand, and bagged goods.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/industrial-conveyors-spares/belt-conveyors/"
                      className="font-bold text-[#DA020D] hover:text-[#900] text-xs inline-flex items-center gap-1 group/link"
                    >
                      <span>View Machine Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Cross-Pillar Machine */}
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#DA020D]/40 transition-all flex flex-col justify-between group">
                <Link
                  href="/products/fertilizer-granulation-plants/disc-granulator/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Industrial Pan Disc Granulator specifications"
                >
                  <Image
                    src="/images/products/fertilizer-pellet/fertilizer-pan-granulator-unit-md.webp"
                    alt="Pan Disc Fertilizer Granulator"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold text-purple-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Complementary Pelletizing Line
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/fertilizer-granulation-plants/disc-granulator/" className="hover:underline">
                        Industrial Pan Disc Granulator
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Feed preparation pan granulator receiving metered dry powders from the screw conveyor.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/fertilizer-granulation-plants/disc-granulator/"
                      className="font-bold text-[#DA020D] hover:text-[#900] text-xs inline-flex items-center gap-1 group/link"
                    >
                      <span>Explore Complementary Machine</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 8: Engineering Sizing & RFQ Form */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900 border border-red-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-6 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-semibold">
                  <span>CUSTOM SIZING &amp; GA DRAWING</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Request a Dedicated Screw Conveyor Engineering Proposal
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Specify your required conveyor length (meters), capacity (TPH), material characteristics,
                  and incline angle. Our design engineering team in Zak GIDC, Dahegam will calculate flight
                  pitch, motor kilowatt, and deliver a certified GA drawing within 24 hours.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <Button
                    href="/request-quote/?product=screw-conveyor"
                    variant="primary"
                    size="lg"
                    icon={<FileText className="w-5 h-5" />}
                  >
                    Get Detailed Proposal &amp; Pricing
                  </Button>
                  <Button
                    href="tel:+919227004455"
                    variant="outline"
                    size="lg"
                    external
                    icon={<Phone className="w-5 h-5 text-red-400" />}
                  >
                    Direct Technical Call: +91 92270 04455
                  </Button>
                </div>

                <div className="pt-6 border-t border-slate-200/80 text-xs text-slate-400 font-mono flex flex-wrap justify-center gap-6">
                  <span>GSTIN: 24AUSPP9555F1ZZ</span>
                  <span>•</span>
                  <span>Factory: Zak GIDC, Dahegam, Gandhinagar</span>
                  <span>•</span>
                  <span>OEM Screw Feeder Manufacturing Pan-India</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 9: Frequently Asked Questions */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="text-red-400 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Technical Knowledge Base
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Frequently Asked Questions on Industrial Screw Conveyors
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Expert technical answers on casing selection, CEMA loading limits, outboard bearing isolation,
                and handling sticky materials.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 flex items-start gap-3">
                    <span className="text-red-400 font-mono text-sm mt-0.5">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
