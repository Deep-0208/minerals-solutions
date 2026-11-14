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
  Compass,
  AlertTriangle,
  MoveRight,
  Truck,
  Package,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Industrial Belt Conveyor Systems | Minerals Solutions',
  },
  description: 'Install heavy duty industrial troughed belt conveyors (300mm to 1400mm width) with M24 rubber belting & lagged pulleys. Heavy built in Zak GIDC, Dahegam.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/industrial-conveyors-spares/belt-conveyors/',
  },
  openGraph: {
    title: 'Industrial Belt Conveyor Systems | Minerals Solutions',
    description:
      'Heavy duty industrial troughed belt conveyors (300mm to 1400mm width). M24 rubber belts, diamond lagged pulleys & idlers. Zak GIDC, Dahegam.',
    url: `${company.siteUrl}/products/industrial-conveyors-spares/belt-conveyors/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belt Conveyor Manufacturer | Minerals Solutions',
    description:
      'Heavy duty industrial troughed belt conveyors (300mm to 1400mm width). M24 rubber belts, diamond lagged pulleys & idlers. Zak GIDC, Dahegam.',
    images: [defaultTwitterImage],
  },
  keywords: [
    'belt conveyor manufacturer',
    'industrial conveyor belt manufacturer ahmedabad',
    'conveyor belt suppliers gujarat',
    'troughed belt conveyor system',
    'nylon rubber conveyor belt M24',
    'quarry stone crusher belt conveyor',
    'overland bulk material conveyor',
    'belt conveyor price india',
  ],
};

const bcSpecs = [
  {
    model: 'MS-BC-400',
    beltWidth: '400 mm (16")',
    capacity: '15 - 35 TPH',
    maxLength: '30 Meters',
    beltSpeed: '1.0 - 1.5 m/s',
    frameSection: 'ISMC 100 Channel',
    motorPower: '2.2 - 5.5 kW',
    typicalDuty: 'Small chemical transfer, packaging feed',
  },
  {
    model: 'MS-BC-500',
    beltWidth: '500 mm (20")',
    capacity: '35 - 75 TPH',
    maxLength: '50 Meters',
    beltSpeed: '1.2 - 1.8 m/s',
    frameSection: 'ISMC 125 Channel',
    motorPower: '5.5 - 11 kW',
    typicalDuty: 'Dry silica sand, washed river sand transfer',
  },
  {
    model: 'MS-BC-650',
    beltWidth: '650 mm (26")',
    capacity: '75 - 140 TPH',
    maxLength: '80 Meters',
    beltSpeed: '1.4 - 2.0 m/s',
    frameSection: 'ISMC 150 / Lattice Truss',
    motorPower: '11 - 22 kW',
    typicalDuty: 'Medium stone crushers, rotary dryer feed',
  },
  {
    model: 'MS-BC-800',
    beltWidth: '800 mm (32")',
    capacity: '140 - 220 TPH',
    maxLength: '100 Meters',
    beltSpeed: '1.5 - 2.2 m/s',
    frameSection: 'Heavy Structural Lattice Truss',
    motorPower: '18.5 - 37 kW',
    typicalDuty: 'High-tonnage aggregate quarries & coal handling',
  },
  {
    model: 'MS-BC-1000',
    beltWidth: '1,000 mm (40")',
    capacity: '220 - 300 TPH',
    maxLength: '120 Meters',
    beltSpeed: '1.8 - 2.5 m/s',
    frameSection: 'Heavy Structural Lattice Truss',
    motorPower: '30 - 55 kW',
    typicalDuty: 'Cement plant limestone & clinker transport',
  },
  {
    model: 'MS-BC-1200',
    beltWidth: '1,200 mm (48")',
    capacity: '300 - 350+ TPH',
    maxLength: '120+ Meters',
    beltSpeed: '2.0 - 2.8 m/s',
    frameSection: 'Deep Heavy Box Lattice Truss',
    motorPower: '45 - 75 kW',
    typicalDuty: 'Overland mining beneficiation & port shiploading',
  },
];

const faqs = [
  {
    q: 'How do 20°, 30°, and 35° troughing angles affect bulk material carrying capacity?',
    a: 'The troughing angle formed by the two wing rollers relative to the horizontal center roller dictates the cross-sectional area of bulk material that can be conveyed without edge spillage. A standard 20° trough angle is ideal for flat, lightweight, or sticky materials with low surcharge angles. Moving to a 30° trough angle increases cross-sectional payload capacity by approximately 18% and represents the Indian quarry industry standard. Transitioning to a deep 35° trough angle expands carrying volume by up to 28% over 20° sets, significantly reducing spillage of granular free-flowing solids like dry silica sand, fine aggregate, and chemical fertilizers while keeping belt width narrower and capital costs lower.',
  },
  {
    q: 'What is the difference between Grade M24 and Grade N17 rubber conveyor belting under IS 1891?',
    a: 'Indian Standard IS 1891 (Part 1) classifies conveyor belting based on tensile strength and rubber cover abrasion resistance. Grade M24 is the premium heavy-duty aggregate standard: it features a minimum tensile strength of 24 MPa, elongation at break of 450%, and an exceptionally low maximum volume abrasion loss of 150 mm³. This makes M24 mandatory for sharp, gouging, and highly abrasive materials such as crushed quartz stone, silica sand, and basalt aggregates. Grade N17 offers 17 MPa tensile strength and 200 mm³ abrasion loss, making it an economical choice for non-abrasive, rounded materials such as grains, compost, and bagged goods.',
  },
  {
    q: 'Why does Minerals Solutions hot-vulcanize diamond rubber lagging onto drive pulleys?',
    a: 'In heavy industrial and outdoor quarry environments, bare steel drive pulleys suffer from severe frictional loss when wet or coated in stone dust, resulting in catastrophic belt slippage, belt burn, and motor stall. Minerals Solutions hot-vulcanizes 10mm to 12mm thick, 60–65 Shore A natural rubber onto the crowned steel pulley shell under high hydraulic pressure and heat, creating a chemical bond stronger than the rubber itself. The molded diamond herringbone grooving channels water, moisture, and slurry away from the belt-pulley interface, increasing the effective traction friction coefficient from 0.20 to over 0.38.',
  },
  {
    q: 'Can Minerals Solutions manufacture mobile wheel-mounted truck loading conveyor systems?',
    a: 'Yes. In addition to stationary overland conveyors, our Zak GIDC, Dahegam facility engineers mobile wheel-mounted radial stackers and truck-loading belt conveyors. These mobile systems feature heavy tubular structural frames mounted on heavy-duty pneumatic tractor tyres, swivel wheel casters, and dual hydraulic hand-pump or electric lifting cylinders that allow continuous height adjustment from 2.5 meters to 7.5 meters. Equipped with heavy receiving hoppers and integrated towing tow-bars, they allow a single operator to load 30-tonne dumpers or bag-trucks in under 20 minutes.',
  },
];

export default function BeltConveyorPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Industrial Belt Conveyor System',
    description:
      'Heavy duty industrial troughed belt conveyor systems (300mm to 1,400mm width, 15 to 350+ TPH). Designed to IS 11592 standards with Grade M24 abrasion-resistant rubber belting, 3-roller troughing idlers, and hot-vulcanized diamond rubber-lagged drive pulleys.',
    image: `${company.siteUrl}/images/products/conveyor-systems/belt-conveyor-mineral-ore-beneficiation-lg.webp`,
    sku: 'MS-BC-500-1200',
    mpn: 'MS-BC-SERIES',
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
      lowPrice: '150000',
      highPrice: '1250000',
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
        name: 'Belt Conveyors',
        item: `${company.siteUrl}/products/industrial-conveyors-spares/belt-conveyors/`,
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
                    label: 'Belt Conveyors',
                    href: '/products/industrial-conveyors-spares/belt-conveyors/',
                  },
                ]}
              />
            </Container>
          </section>

        {/* Hero Section */}
        <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-white">

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
                    <MoveRight className="w-3.5 h-3.5" />
                    IS 11592 Design Standard | Grade M24 Abrasion Belting
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                    <span>Verified: ₹ 1,50,000 / Unit Base</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
                  Industrial Troughed{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300">
                    Belt Conveyor Systems
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Continuous high-volume bulk material handling engineered for silica sand, quarry aggregates,
                  crushed minerals, fertilizer pellets, and coal. Fabricated with heavy ISMC channel or
                  deep lattice truss frames, hot-vulcanized diamond rubber-lagged drive drums, and precision
                  labyrinth-sealed idler rollers from 300mm to 1,400mm belt widths up to 350+ TPH.
                </p>

                {/* Key Metric Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Belt Widths
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-red-400 mt-1">
                      300 - 1,400mm
                    </div>
                    <div className="text-[11px] text-slate-500">12&quot; to 56&quot; Carcass</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Capacity Rating
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900-400 mt-1">
                      15 - 350+ TPH
                    </div>
                    <div className="text-[11px] text-slate-500">Continuous Duty</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Conveyor Length
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      5m - 120m+
                    </div>
                    <div className="text-[11px] text-slate-500">Overland &amp; Incline</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Belting Standard
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
                      IS 1891 M24
                    </div>
                    <div className="text-[11px] text-slate-500">High Tear Strength</div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button
                    href="/request-quote/?product=belt-conveyors"
                    variant="primary"
                    size="lg"
                    icon={<FileText className="w-5 h-5" />}
                  >
                    Request Sizing Quote &amp; GA Drawing
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
                      src="/images/products/conveyor-systems/belt-conveyor-mineral-ore-beneficiation-lg.webp"
                      alt="Minerals Solutions Heavy Troughed Belt Conveyor System for Mineral Processing and Quarry Aggregates at Zak GIDC Dahegam" width={800} height={600}
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                    
                  </div>

                  <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-white flex items-center justify-between">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>SERIES: MS-BC-800</span>
                      <span className="text-red-400 font-bold">220 TPH OVERLAND STACKER</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Factory view: 800mm wide lattice truss troughed belt conveyor showing 3-roller
                      35° troughing idlers, vulcanized diamond rubber head drum, and safety pull-cords.
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
                  <strong className="text-slate-950 font-semibold">What is an industrial troughed belt conveyor system? </strong>
                  An industrial troughed belt conveyor system is a continuous bulk material handling installation designed in strict accordance with Bureau of Indian Standards (IS 11592) to convey crushed stone, silica sand, minerals, ores, and fertilizer pellets across horizontal and inclined paths up to 18 degrees. Fabricated in Zak GIDC, Dahegam from heavy structural IS 2062 channel stringers or welded lattice truss sections, the conveyor incorporates multi-ply nylon-nylon (NN) or polyester-polyamide (EP) rubber belting with Grade M24 wear covers. Heavy-duty three-roll troughing idlers (20°, 35°, or 45° angle) fitted with triple labyrinth dust seals and sealed-for-life deep-groove ball bearings ensure ultra-low rolling friction. Handling throughputs from 20 to 500 TPH at belt speeds between 0.8 and 2.5 m/s, systems feature diamond-groove rubber lagged drive drums for reliable slip-free power transmission.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: Bulk Material Handling Engineering (IS 11592 Standards) */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-red-400 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Structural Rigidity &amp; Indian Standards
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Bulk Material Handling Engineering (IS 11592 Standards)
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Flimsy structural framing causes belt mistracking, premature edge fraying, and structural sagging
                under heavy stone loads. Minerals Solutions engineers every conveyor frame in strict compliance
                with IS 11592 code of practice for design and installation of troughed belt conveyors:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Rigid ISMC Channel &amp; Truss Frames</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Conveyors up to 30m utilize heavy ISMC 100 to 150 structural steel channel stringers.
                  For spans exceeding 30m, we fabricate deep Warren or Pratt lattice trusses in angle and
                  tubular steel, allowing clear unsupported spans up to 24 meters between support bents.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Controlled Dynamic Deflection</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Structural frame deflection under full static plus dynamic 120% surge load is strictly
                  restricted to less than L/500 of the span. This rigid baseline prevents stringer twist
                  and ensures that idler rollers remain permanently perpendicular to the belt travel vector.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Complete Integrated Safety Suite</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every conveyor is equipped with bi-directional emergency pull-cord switches along both
                  walkways, mechanical belt sway limit switches at head and tail sections, and an internal
                  mechanical cam-clutch backstop preventing backward runaway on inclined runs.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: 3-Roller Troughing Idler Sets: 20°, 30° & 35° Geometry */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Idler Kinematics &amp; Volumetric Geometry
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                3-Roller Troughing Idler Sets: 20°, 30° &amp; 35° Geometry
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                The troughing angle formed by equal-length three-roll carrying idlers determines the cross-sectional
                capacity of bulk material and controls spillage across varying surcharge angles:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Angle 1 */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 font-mono font-bold">
                      20°
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">20° Trough Angle</h3>
                      <div className="text-xs text-slate-400 font-mono">Standard Baseline Capacity</div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Best suited for thick, stiff conveyor belting carcasses with low transverse flexibility
                  (such as heavy 5-ply belts) or lightweight materials with flat surcharge angles (grains,
                  dry bio-pellets, and packaged bag transfer).
                </p>

                <div className="pt-2 text-xs font-mono text-slate-400 border-t border-slate-200">
                  Relative Volume: 100% Baseline | Surcharge: 10° - 15°
                </div>
              </div>

              {/* Angle 2 */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 font-mono font-bold">
                      30°
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">30° Trough Angle</h3>
                      <div className="text-xs text-amber-400 font-mono">+18% Carrying Capacity</div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  The universal workhorse standard across Indian stone crushing and sand washing plants.
                  Offers an optimal balance between volumetric payload and belt flex fatigue, preventing
                  center-line belt creasing while conveying sand, gravel, and coal.
                </p>

                <div className="pt-2 text-xs font-mono text-amber-400 border-t border-slate-200">
                  Relative Volume: 118% | Universal Quarry Standard
                </div>
              </div>

              {/* Angle 3 */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 font-mono font-bold">
                      35°
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">35° Deep Trough Angle</h3>
                      <div className="text-xs text-red-400 font-mono">+28% Carrying Capacity</div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Deep troughing configuration engineered for high-tonnage bulk materials like wet silica sand,
                  fine mineral slurry filter cake, and fertilizer prills. Maximizes cross-sectional payload
                  and allows narrower belts to move higher tonnages without edge spillage.
                </p>

                <div className="pt-2 text-xs font-mono text-red-400 border-t border-slate-200">
                  Relative Volume: 128% | Zero Edge Spillage
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: Technical Specifications & Linear Capacity */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-red-400 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Engineering Sizing &amp; Parameters
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Technical Specifications &amp; Linear Capacity (MS-BC Series)
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Standard technical specifications for Minerals Solutions industrial troughed belt conveyors
                fabricated at our Zak GIDC, Dahegam facility. Available in channel stringer or lattice truss frames:
              </p>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-100 text-slate-800 font-mono text-xs uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-4 px-4 font-bold text-slate-950">Model</th>
                    <th className="py-4 px-4 font-bold text-red-400">Belt Width</th>
                    <th className="py-4 px-4 font-bold text-amber-400">Capacity (TPH)</th>
                    <th className="py-4 px-4">Max Length</th>
                    <th className="py-4 px-4">Speed Range</th>
                    <th className="py-4 px-4">Frame Profile</th>
                    <th className="py-4 px-4">Motor Power</th>
                    <th className="py-4 px-4">Belting Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono">
                  {bcSpecs.map((spec, idx) => (
                    <tr
                      key={spec.model}
                      className={
                        idx % 2 === 0
                          ? 'bg-white hover:bg-slate-50 transition-colors'
                          : 'bg-slate-50/60 hover:bg-slate-100/70 transition-colors'
                      }
                    >
                      <td className="py-4 px-4 font-bold text-slate-950">{spec.model}</td>
                      <td className="py-4 px-4 font-bold text-red-400">{spec.beltWidth}</td>
                      <td className="py-4 px-4 font-bold text-amber-400">{spec.capacity}</td>
                      <td className="py-4 px-4">{spec.maxLength}</td>
                      <td className="py-4 px-4 text-slate-600">{spec.beltSpeed}</td>
                      <td className="py-4 px-4 text-slate-600">{spec.frameSection}</td>
                      <td className="py-4 px-4 text-emerald-400">{spec.motorPower}</td>
                      <td className="py-4 px-4 text-slate-600">IS 1891 M24</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-mono">
              <div>* Capacities calculated based on aggregate density of 1.6 t/m³ at 30° trough angle. Custom widths up to 1,600mm available.</div>
              <div className="text-red-400">Designed per IS 11592 Standards | Verified IS 1891 Belting</div>
            </div>
          </Container>
        </section>

        {/* Section 4: Rubber Belting Metallurgy: M24 & Heat Resistant Grades */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold">
                  Tensile Carcass &amp; Cover Compounds
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                  Rubber Belting Metallurgy: M24 &amp; Heat Resistant Grades (IS 1891)
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  Cheap recycled rubber belting cracks, delaminates, and rips under sharp stone impact.
                  Minerals Solutions supplies heavy-duty multi-ply EP (polyester warp / nylon weft) belting
                  strictly adhering to IS 1891 standards with virgin rubber cover compounds:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 p-1 rounded-full bg-red-400/20 text-red-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-slate-950 font-semibold text-sm">
                        Grade M24 Heavy Abrasion &amp; Gouge Resistance
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        Tensile strength &gt;24 MPa, elongation at break &gt;450%, and abrasion loss &lt;150 mm³.
                        Reinforced top and bottom rubber covers (4mm top / 2mm bottom or 5mm top / 3mm bottom)
                        resist cut and gouge from sharp crushed granite, basalt, and silica rocks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 p-1 rounded-full bg-amber-400/20 text-amber-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-slate-950 font-semibold text-sm">
                        Multi-Ply EP Tensile Carcass (EP315 to EP1000)
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        High-modulus polyester warp yarns deliver exceptionally low elastic elongation (&lt;1.5%),
                        minimizing take-up travel distance, while nylon weft yarns provide superior transverse
                        troughability and high fastener retention strength.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 p-1 rounded-full bg-emerald-400/20 text-emerald-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-slate-950 font-semibold text-sm">
                        Grade HR / SHR High Temperature Formulations
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        Specialized EPDM / butyl rubber compounds engineered to convey hot materials up to 150°C
                        continuous (HR) or 180°C peak (SHR), eliminating belt hardening, surface cracking, and
                        carcass delamination downstream of industrial rotary sand dryers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Belting Image Frame */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl">
                  <Image
                    src="/images/products/conveyor-systems/rubber-conveyor-belting-roll-lg.webp"
                    alt="Heavy duty multi-ply M24 grade rubber conveyor belting rolls stocked at Minerals Solutions Zak GIDC Dahegam workshop" width={800} height={600}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-950 font-bold">IS 1891 GRADE M24 / HR BELTING</span>
                      <span className="text-emerald-400 font-bold">IN STOCK AT DAHEGAM</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Ready rolls of 3-ply and 4-ply EP315, EP400, and EP500 rubber belting in widths from 500mm to 1,200mm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 5: Drive & Tail Pulleys: Hot Vulcanized Diamond Rubber Lagging */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-red-400 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Pulley Engineering &amp; Traction Grip
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Drive &amp; Tail Pulleys: Hot Vulcanized Diamond Rubber Lagging
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Belt slippage burns belting and stalls plant production. Minerals Solutions manufactures
                crowned, statically and dynamically balanced conveyor pulleys with heavy hot-vulcanized lagging:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pulley 1 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700">
                  <Image
                    src="/images/products/conveyor-systems/head-pulley-rubber-lagging-lg.webp"
                    alt="Hot vulcanized diamond grooved rubber lagging on conveyor drive head pulley" width={800} height={600}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Diamond Grooved Rubber Lagging</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  10mm to 12mm thick natural rubber hot-vulcanized onto crowned steel drums under hydraulic
                  curing presses. Molded diamond grooves shed water, clay, and slurry, raising the friction
                  coefficient above 0.38 to eliminate wet weather belt slip.
                </p>
              </div>

              {/* Pulley 2 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700">
                  <Image
                    src="/images/products/conveyor-systems/conveyor-head-tail-pulleys-lg.webp"
                    alt="Heavy duty crowned conveyor head and tail drum pulleys precision machined at Zak GIDC" width={800} height={600}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Machined Crowned Shells</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Heavy-wall steel pipes (8mm to 16mm thick) are precision machined with a 1:100 taper crown
                  toward the center. The crown continuously steers the conveyor belt into central alignment,
                  preventing edge drift and structural rubbing.
                </p>
              </div>

              {/* Pulley 3 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700">
                  <Image
                    src="/images/products/conveyor-systems/conveyor-troughing-idler-roller-lg.webp"
                    alt="Precision troughing idler rollers with deep multi-labyrinth seals and heavy steel tubing" width={800} height={600}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Labyrinth-Sealed Idler Rollers</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Carrying and return idlers fabricated from ERW steel tubes with pressed steel bearing
                  housings. Equipped with deep-groove 6204/6205 bearings and multi-lip labyrinth seals
                  purged with lithium grease, providing &gt;30,000 hours of maintenance-free rotation.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 5B: Tensioning Towers, Impact Beds & Dual Scraper Engineering */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Belt Protection &amp; Clean Running
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Belt Tensioning, Impact Beds &amp; Dual Scraper Engineering
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Excessive carryback spillage and puncture damage at feed loading chutes account for 80% of
                quarry conveyor maintenance expenses. Minerals Solutions integrates three critical protection
                sub-assemblies into every heavy conveyor line:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center font-mono font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-950">Automatic Gravity Take-Up Towers</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For conveyors exceeding 40 meters, manual screw take-ups fail to accommodate dynamic belt
                  elasticity during motor starting surges. Vertical gravity take-up towers with sliding counterweight
                  carriages continuously maintain exact T2 slack-side tension, completely eliminating drive pulley
                  slippage and belt sag.
                </p>
                <div className="pt-2 text-xs font-mono text-red-400">Tension Control: 100% Dynamic</div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-950">UHMWPE Slide Impact Cradle Beds</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Conventional rubber impact rollers bend and seize under heavy rock drops. Our heavy fabricated
                  steel impact cradles feature 25mm thick ultra-low-friction UHMWPE top slider bars bonded to
                  high-durometer elastomeric shock absorbers, forming a continuous supporting bed that prevents
                  sharp quartz rocks from piercing the carcass.
                </p>
                <div className="pt-2 text-xs font-mono text-amber-400">Impact Absorption: Extreme Quarry Grade</div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-950">Dual-Stage Scraper &amp; V-Plow Cleaners</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A primary spring-tensioned polyurethane pre-cleaner strips 90% of bulk material at the head
                  drum discharge trajectory. Downstream, secondary segmented tungsten carbide blades scrape off
                  fines, while an internal return V-plow protects tail drums from rocks falling onto the return belt run.
                </p>
                <div className="pt-2 text-xs font-mono text-yellow-400">Carryback Efficiency: &gt;98% Clean</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 6: Mobile Truck Loading Conveyor Adaptation */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-red-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  Flexible Plant Logistics
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                  Mobile Truck Loading &amp; Radial Stacker Conveyors
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  For quarry stockpiling and bulk dumper dispatch, Minerals Solutions manufactures mobile
                  wheel-mounted radial stackers and truck-loading belt conveyors. Designed for fast site
                  repositioning and continuous high-tonnage loading:
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Hydraulic Height Adjustment:</strong> Hand-pump or electro-hydraulic cylinder raises discharge height from 2.5m to 7.5m, minimizing material drop breakage and dust.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Heavy Swivel Wheel Undercarriage:</strong> Heavy-duty pneumatic tractor tyres with 360° swivel capability for kidney-shaped radial stockpiling.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Large Reception Feed Hopper:</strong> Heavy steel hopper lined with Hardox wear plates receives direct discharge from front-end loaders without spillage.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Towing Tow-Bar &amp; Pintle Hitch:</strong> Easily towed around quarry sites by tractor or wheel loader for rapid deployment.</span>
                  </div>
                </div>
              </div>

              {/* Logistics Feature Box */}
              <div className="lg:col-span-6">
                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 font-mono font-bold">
                      <Truck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950">Mobile Loading Performance Metrics</h3>
                      <div className="text-xs text-red-400 font-mono">Truck &amp; Dumper Dispatch</div>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950 flex justify-between">
                        <span>30-Tonne Dumper Loading Time</span>
                        <span className="text-emerald-400 font-mono">&lt;18 Minutes</span>
                      </div>
                      <p className="text-slate-600 mt-1">
                        Continuous 150 TPH belt loading eliminates loader turnaround congestion at weighbridges.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950 flex justify-between">
                        <span>Radial Stockpile Height</span>
                        <span className="text-amber-400 font-mono">Up to 8.5 Meters</span>
                      </div>
                      <p className="text-slate-600 mt-1">
                        Creates expansive kidney-shaped aggregate storage piles without requiring secondary earthmovers.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950 flex justify-between">
                        <span>Power Options</span>
                        <span className="text-sky-400 font-mono">Electric / Diesel Genset</span>
                      </div>
                      <p className="text-slate-600 mt-1">
                        Operates via standard 415V 3-phase grid power or integrated portable diesel generator.
                      </p>
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
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider mb-2">
                    Sibling Conveyor Line
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Industrial Bucket Elevator Systems
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Vertical bulk material elevating systems lifting aggregates and pellets up to 45m.
                  </p>
                </div>
                <Link
                  href="/products/industrial-conveyors-spares/bucket-elevators/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  View Machine Specifications <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Sibling Spoke 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-2">
                    Sibling Conveyor Line
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Industrial Screw Conveyor Systems
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Dust-tight tubular and U-trough augers transporting powders and slurry cakes.
                  </p>
                </div>
                <Link
                  href="/products/industrial-conveyors-spares/screw-conveyors/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  View Machine Specifications <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Cross-Pillar Machine */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider mb-2">
                    Complementary Wet Circuit
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Silica Sand Washing Plant System
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Upstream wet scrubbing plant using troughed belt conveyors to transfer raw sand and feed.
                  </p>
                </div>
                <Link
                  href="/products/sand-washing-plants/silica-sand-washing-plant/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  Explore Complementary Machine <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 8: Sizing Proposal & RFQ Consultation Form */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900 border border-red-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-6 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-semibold">
                  <span>CUSTOM CONVEYOR SIZING &amp; GA DRAWING</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Request a Custom Industrial Belt Conveyor Sizing Proposal
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Specify your required conveyor length (meters), belt width, target throughput capacity (TPH),
                  material bulk density, and incline angle. Our bulk handling design team at Zak GIDC, Dahegam
                  will calculate motor kilowatt requirements, belt tension, and deliver a certified GA drawing
                  within 24 hours.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <Button
                    href="/request-quote/?product=belt-conveyors"
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
                  <span>Works: 10, Shyam Estate, Zak GIDC, Dahegam</span>
                  <span>•</span>
                  <span>Heavy Conveyor Manufacturing Pan-India</span>
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
                Knowledge Base &amp; Technical FAQs
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Frequently Asked Questions on Industrial Belt Conveyors
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Expert technical answers on troughing angle capacity, M24 belting standards, diamond rubber
                lagging, and mobile truck loading.
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
