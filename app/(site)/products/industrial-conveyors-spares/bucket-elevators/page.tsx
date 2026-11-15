import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
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
  ArrowUpCircle,
  RotateCcw,
  Compass,
  AlertTriangle,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Bucket Elevator Manufacturers | Minerals Solutions',
  },
  description: 'Source heavy duty industrial bucket elevators (5 to 100 TPH, up to 45m height) with centrifugal and continuous chain/belt drives from Zak GIDC, Dahegam.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/industrial-conveyors-spares/bucket-elevators/',
  },
  openGraph: {
    title: 'Industrial Bucket Elevator Systems | Minerals Solutions',
    description:
      'Heavy duty industrial bucket elevators (5 to 100 TPH, up to 45m height). Centrifugal & continuous chain/belt drives. Zak GIDC, Dahegam, Gujarat.',
    url: `${company.siteUrl}/products/industrial-conveyors-spares/bucket-elevators/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bucket Elevator Manufacturers | Minerals Solutions',
    description:
      'Heavy duty industrial bucket elevators (5 to 100 TPH, up to 45m height). Centrifugal & continuous chain/belt drives. Zak GIDC, Dahegam, Gujarat.',
    images: [defaultTwitterImage],
  },
  keywords: [
    'bucket elevator manufacturers',
    'bucket elevator manufacturer in ahmedabad',
    'continuous bucket elevator gujarat',
    'centrifugal discharge elevator',
    'heavy chain bucket elevator',
    'industrial vertical bucket conveyor',
    'cement silica sand bucket elevator',
    'bucket elevator price india',
  ],
};

const belSpecs = [
  {
    model: 'MS-BEL-200',
    capacity: '5 - 12 TPH',
    bucketWidth: '200 mm',
    maxHeight: '20 Meters',
    drivePower: '3.7 - 7.5 kW',
    tractionMedia: '3-Ply EP315 / 14mm Round Link Chain',
    casingGauge: '3.0 mm IS 2062',
    speed: '1.2 - 1.6 m/s',
    dischargeMode: 'Centrifugal / Continuous',
  },
  {
    model: 'MS-BEL-300',
    capacity: '12 - 25 TPH',
    bucketWidth: '300 mm',
    maxHeight: '30 Meters',
    drivePower: '7.5 - 15 kW',
    tractionMedia: '4-Ply EP400 / 16mm Round Link Chain',
    casingGauge: '3.15 mm IS 2062',
    speed: '1.2 - 1.8 m/s',
    dischargeMode: 'Centrifugal / Continuous',
  },
  {
    model: 'MS-BEL-400',
    capacity: '25 - 45 TPH',
    bucketWidth: '400 mm',
    maxHeight: '35 Meters',
    drivePower: '15 - 22 kW',
    tractionMedia: '5-Ply EP500 / 19mm Alloy Chain',
    casingGauge: '4.0 mm IS 2062',
    speed: '1.0 - 1.8 m/s',
    dischargeMode: 'Centrifugal / Continuous',
  },
  {
    model: 'MS-BEL-500',
    capacity: '45 - 75 TPH',
    bucketWidth: '500 mm',
    maxHeight: '40 Meters',
    drivePower: '22 - 37 kW',
    tractionMedia: '6-Ply EP630 / 22mm Heavy Chain',
    casingGauge: '4.0 mm IS 2062',
    speed: '0.8 - 1.6 m/s',
    dischargeMode: 'Centrifugal / Continuous',
  },
  {
    model: 'MS-BEL-600',
    capacity: '75 - 100+ TPH',
    bucketWidth: '600 mm',
    maxHeight: '45 Meters',
    drivePower: '37 - 55 kW',
    tractionMedia: 'Steel Cord Belt / 26mm Bushed Chain',
    casingGauge: '5.0 mm IS 2062',
    speed: '0.6 - 1.4 m/s',
    dischargeMode: 'Centrifugal / Continuous',
  },
];

const faqs = [
  {
    q: 'How do I choose between a centrifugal discharge and continuous discharge bucket elevator?',
    a: 'The selection depends on material bulk density, particle size, and friability. Centrifugal elevators operate at higher linear speeds (1.2 to 2.0 m/s) with spaced buckets, using centrifugal force at the head pulley to throw free-flowing, non-fragile materials like dry silica sand, grains, coal fines, and chemical prills into the discharge chute. In contrast, continuous elevators run at gentle, low speeds (0.5 to 0.8 m/s) with closely overlapping buckets; material is fed directly into the buckets without dredging through a boot pool, and gravity discharges it over the flanged back of the preceding bucket, making it ideal for large abrasive quartz lumps, fragile fertilizer granules, hot clinker, and sticky ores.',
  },
  {
    q: 'What prevents a loaded bucket elevator from rolling backward during a sudden power outage?',
    a: 'Every Minerals Solutions industrial bucket elevator comes standard with a heavy-duty mechanical cam-clutch backstop integrated directly into the head shaft or the gearbox high-speed shaft. If electrical power trips while the casing is carrying up to 10 tonnes of suspended vertical material, the hardened precision sprags or cam rollers instantaneously lock against the stationary outer race in less than 2 milliseconds. This prevents catastrophic reverse acceleration, bucket jamming in the boot, and motor drive destruction.',
  },
  {
    q: 'When should I specify a high-tensile rubber belt versus an alloy link-chain drive?',
    a: 'High-tensile multi-ply EP rubber belting or steel-cord belts are selected for non-abrasive or moderate-abrasion materials below 80°C operating temperature, offering quiet operation, lower horsepower requirements, and high linear speeds up to 2.0 m/s. For high-temperature bulk solids up to 250°C (such as rotary kiln clinker, hot foundry sand, or calcined minerals) and severe heavy lump loading above 50mm, forged alloy round-link chain (20MnCr5 case-hardened) or bushed steel roller chains are mandatory, eliminating belt thermal degradation and elongation creep.',
  },
  {
    q: 'What maintenance access and safety instrumentation are included in the MS-BEL casing?',
    a: 'Minerals Solutions bucket elevators feature full-height modular trunking with quick-release bolted inspection doors at the head, intermediate casing, and boot sections. Safety instrumentation includes an inductive zero-speed switch on the non-driven tail pulley to detect belt slippage, optical or mechanical belt sway detectors at the head section, explosion relief vent panels (ATEX compliant) for explosive powders, and a cleanout slide gate with removable curved bottom plates in the boot to purge residual material between batch campaigns.',
  },
];

export default function BucketElevatorPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Industrial Bucket Elevator System',
    description:
      'Heavy duty vertical bucket elevator systems (5 to 100 TPH, up to 45m lift height). Centrifugal and continuous discharge configurations with heavy folded plate casing, anti-rollback cam clutches, and forged chain or high-tensile rubber belt drives.',
    image: `${company.siteUrl}/images/products/conveyor-systems/belt-conveyor-mineral-ore-beneficiation-lg.webp`,
    sku: 'MS-BEL-200-600',
    mpn: 'MS-BEL-SERIES',
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
      lowPrice: '350000',
      highPrice: '1850000',
      offerCount: '5',
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
        name: 'Bucket Elevators',
        item: `${company.siteUrl}/products/industrial-conveyors-spares/bucket-elevators/`,
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
                    label: 'Bucket Elevators',
                    href: '/products/industrial-conveyors-spares/bucket-elevators/',
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
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-950 text-xs font-semibold uppercase tracking-wider">
                  <ArrowUpCircle className="w-3.5 h-3.5" />
                  Dust-Tight Enclosed Vertical Elevation | Up to 45m Lift Height
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
                  Heavy Duty Industrial{' '}
                  <span className="text-amber-700">
                    Bucket Elevator Systems
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Continuous, high-tonnage vertical bulk conveying engineered for abrasive silica sand,
                  calcined minerals, fertilizer granules, cement clinker, and foundry sand. Designed with
                  laser-cut jig-welded modular casings, anti-rollback cam clutches, and multi-ply EP belt
                  or alloy chain traction media from 5 to 100+ TPH.
                </p>

                {/* Key Metric Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Max Lift Height
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900-400 mt-1">
                      Up to 45m
                    </div>
                    <div className="text-[11px] text-slate-500">Vertical Rise</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Capacity Range
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900-400 mt-1">
                      5 - 100 TPH
                    </div>
                    <div className="text-[11px] text-slate-500">Continuous Bulk</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Discharge Type
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      Dual Mode
                    </div>
                    <div className="text-[11px] text-slate-500">Centrifugal / Cont.</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Safety Clutch
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
                      Zero Rollback
                    </div>
                    <div className="text-[11px] text-slate-500">Sprag Cam Backstop</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button
                    href="/request-quote/?product=bucket-elevator"
                    variant="primary"
                    size="lg"
                    icon={<FileText className="w-5 h-5" />}
                  >
                    Request Sizing Proposal &amp; GA Drawing
                  </Button>
                  <Button
                    href="tel:+919227004455"
                    variant="outline"
                    size="lg"
                    external
                    icon={<Phone className="w-5 h-5 text-amber-400" />}
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
                      alt="Minerals Solutions Industrial Vertical Bulk Material Handling and Bucket Elevator Systems at Zak GIDC Dahegam" width={800} height={600}
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                    
                  </div>

                  <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-white flex items-center justify-between">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>SERIES: MS-BEL-400</span>
                      <span className="text-amber-700 font-bold">45 TPH VERTICAL LIFT</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Factory view: Heavy folded plate casing section with laser-machined inspection
                      doors, rubber-lagged crowned head pulley, and shaft-mounted geared motor drive.
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
                  <strong className="text-slate-950 font-semibold">What is an industrial bucket elevator? </strong>
                  An industrial bucket elevator is a heavy-duty vertical bulk material handling system engineered to elevate free-flowing or sluggish powders, minerals, and granular solids through vertical heights up to 45 meters. Fabricated in Zak GIDC, Dahegam in strict compliance with IS 7198 standards, the system features a self-supporting dust-tight carbon steel casing (3mm to 6mm plate), high-tensile multi-ply rubber belt or alloy steel traction chain, and pressed steel or ductile cast iron buckets. Operating in either centrifugal discharge mode (1.2 to 2.5 m/s) for dry aggregates or continuous gravity discharge mode (0.5 to 1.0 m/s) for fragile pellets, throughputs range from 5 to 150 TPH. Standard safety equipment includes an integrated backstop sprag clutch, zero-speed shaft monitor, and explosion relief vent panels for combustible materials in demanding heavy industrial plant environments.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: Vertical Bulk Elevation: Centrifugal vs Continuous Discharge */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Kinematics &amp; Discharge Dynamics
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Vertical Bulk Elevation: Centrifugal vs Continuous Discharge
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Selecting the correct discharge kinematics is the single most critical engineering decision
                in vertical conveyor design. Operating a fragile material at centrifugal speed causes severe
                pellet fracture, while operating sluggish material in a continuous unit causes boot blockages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Centrifugal Card */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 font-mono font-bold">
                      MODE A
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">Centrifugal Discharge Elevators</h3>
                      <div className="text-xs text-amber-400 font-mono">High Velocity: 1.2 to 2.0 m/sec</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-700 text-slate-200 font-mono">
                    Spaced Buckets
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Buckets are spaced intermittently along the belt or chain. At the boot section, buckets
                  dredge through the material pool. At the head pulley, high centrifugal force throws material
                  outward in a parabolic arc directly into the discharge throat before the bucket reaches top dead center.
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 font-mono pt-2 border-t border-slate-700/60">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Best Materials:</span>
                    <span className="text-slate-900 font-semibold">Dry Silica Sand, Grains, Coal Fines, Prilled Urea</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Bucket Spacing:</span>
                    <span className="text-amber-400">2.0 to 3.0 &times; Bucket Depth</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Boot Intake:</span>
                    <span className="text-slate-900">Dredge &amp; Direct Chute Combination</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Traction Type:</span>
                    <span className="text-emerald-400">Multi-Ply EP Rubber Belting</span>
                  </div>
                </div>
              </div>

              {/* Continuous Card */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 font-mono font-bold">
                      MODE B
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">Continuous Discharge Elevators</h3>
                      <div className="text-xs text-yellow-400 font-mono">Gentle Velocity: 0.5 to 0.8 m/sec</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-700 text-slate-200 font-mono">
                    Overlapping Buckets
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Buckets are mounted edge-to-edge without gaps. Material feeds directly into the buckets
                  from an elevated inlet chute, bypassing boot dredging entirely. Over the head pulley, gravity
                  causes material to slide gently out and flow down the flanged chute-back of the preceding bucket.
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 font-mono pt-2 border-t border-slate-700/60">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Best Materials:</span>
                    <span className="text-slate-900 font-semibold">Abrasive Quartz Lumps, Friable Fertilizer, Hot Clinker</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Bucket Spacing:</span>
                    <span className="text-yellow-400">Zero Gap (Continuous Overlap)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Boot Intake:</span>
                    <span className="text-slate-900">Direct Feed Chute (Zero Dredging Damage)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Traction Type:</span>
                    <span className="text-amber-400">High-Tensile Belt or Forged Alloy Chain</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Belt-Type vs Link-Chain Drive Selection Matrix */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold">
                  Traction Media Engineering
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                  Belt-Type vs Link-Chain Drive Selection Matrix
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  The choice between industrial rubber belting and forged alloy chains is determined by
                  material lump size, operating temperature, and continuous duty factor. Minerals Solutions
                  manufactures both drive architectures with certified metallurgy.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 p-1 rounded-full bg-amber-400/20 text-amber-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-slate-950 font-semibold text-sm">
                        High-Tensile EP Rubber Belting (IS 1891 Grade M24 / HR)
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        Constructed with polyester-warp and nylon-weft multi-ply carcasses offering
                        minimal elongation (&lt;1.5%), high fastener tear-resistance, and whisper-quiet
                        operation up to 80°C (or 150°C with EPDM heat-resistant covers).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 p-1 rounded-full bg-amber-400/20 text-amber-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-slate-950 font-semibold text-sm">
                        20MnCr5 Forged Case-Hardened Round Link Chains
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        High-strength alloy steel chain links with deep case hardening (58–62 HRC) to
                        resist severe abrasive quartz and mineral slurry. Operates reliably at extreme bulk
                        temperatures up to 250°C without loss of structural yield strength.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 p-1 rounded-full bg-amber-400/20 text-amber-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-slate-950 font-semibold text-sm">
                        Segmented Toothed Drive Sprockets
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        Chain elevators utilize bolt-on reversible induction-hardened sprocket tooth
                        segments. Worn teeth can be replaced without disassembling the head shaft or
                        unstringing the heavy vertical chain loop, slashing maintenance downtime by 70%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engineering Feature Box */}
              <div className="lg:col-span-6">
                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-bold">
                      <Scale className="w-5 h-5" />
                      <span>TRACTION MEDIA SELECTION GUIDE</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-mono font-semibold">
                      Design Guide
                    </span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950 flex justify-between">
                        <span>High-Speed Sand &amp; Chemical Elevation</span>
                        <span className="text-emerald-400 font-mono">BELT DRIVE</span>
                      </div>
                      <p className="text-slate-600 mt-1">
                        Best for material temp &lt;80°C, lump size &lt;20mm. Multi-ply EP315 to EP630
                        belting with countersunk bucket bolts and heavy rubber top covers.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950 flex justify-between">
                        <span>Abrasive Minerals, Clinker &amp; Large Ores</span>
                        <span className="text-amber-400 font-mono">CHAIN DRIVE</span>
                      </div>
                      <p className="text-slate-600 mt-1">
                        Best for material temp up to 250°C, lump size &gt;25mm. 14mm to 26mm calibrated
                        alloy chain with forged bucket shackles and wear-resistant guide rails.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950 flex justify-between">
                        <span>Extreme Heavy Lift Above 35 Meters</span>
                        <span className="text-yellow-400 font-mono">STEEL CORD BELT</span>
                      </div>
                      <p className="text-slate-600 mt-1">
                        Zero elongation, high safety factor (&gt;10:1), and high throughput up to 100 TPH
                        for tall cement silos and glass plant batching towers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: Technical Specifications & Lift Heights */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Engineering Sizing &amp; Lift Parameters
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Technical Specifications &amp; Lift Heights (MS-BEL Series)
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Standard modular specifications for Minerals Solutions bucket elevators fabricated in Zak
                GIDC, Dahegam. Standard modular casing lengths are 2.0m and 2.5m, allowing easy plant
                expansion or custom site height matching.
              </p>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-100 text-slate-800 font-mono text-xs uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-4 px-4 font-bold text-slate-950">Model</th>
                    <th className="py-4 px-4 font-bold text-amber-400">Capacity (TPH)</th>
                    <th className="py-4 px-4">Bucket Width</th>
                    <th className="py-4 px-4">Max Lift Height</th>
                    <th className="py-4 px-4">Motor Power</th>
                    <th className="py-4 px-4">Traction Media</th>
                    <th className="py-4 px-4">Casing Plate</th>
                    <th className="py-4 px-4">Speed Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono">
                  {belSpecs.map((spec, idx) => (
                    <tr
                      key={spec.model}
                      className={
                        idx % 2 === 0
                          ? 'bg-white hover:bg-slate-50 transition-colors'
                          : 'bg-slate-50/60 hover:bg-slate-100/70 transition-colors'
                      }
                    >
                      <td className="py-4 px-4 font-bold text-slate-950">{spec.model}</td>
                      <td className="py-4 px-4 font-bold text-amber-400">{spec.capacity}</td>
                      <td className="py-4 px-4">{spec.bucketWidth}</td>
                      <td className="py-4 px-4 text-emerald-400 font-semibold">{spec.maxHeight}</td>
                      <td className="py-4 px-4">{spec.drivePower}</td>
                      <td className="py-4 px-4 text-slate-600">{spec.tractionMedia}</td>
                      <td className="py-4 px-4">{spec.casingGauge}</td>
                      <td className="py-4 px-4 text-slate-600">{spec.speed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-mono">
              <div>* Dual casing trunking, explosion relief vents, and SS304/SS316 food-grade construction available on request.</div>
              <div className="text-amber-400">Certified IS 2062 Structural Steel Fabrication</div>
            </div>
          </Container>
        </section>

        {/* Section 4: Deep-Drawn Steel & Polyurethane Bucket Profiles */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Bucket Metallurgy &amp; Material Profiles
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Deep-Drawn Steel &amp; Polyurethane Bucket Profiles
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Choosing the right bucket metallurgy and geometry determines scooping efficiency, wear
                life, and energy consumption. Explore our 3 industrial bucket grades:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile 1 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-extrabold text-base">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-950">Seamless Deep-Drawn Carbon Steel</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Pressed from single sheets of IS 513 deep-draw carbon steel with zero internal corner welds.
                  Smooth radiused corners eliminate material hang-up, while an induction-hardened digger lip
                  resists scooping wear against hard silica grains and coal.
                </p>
                <div className="pt-2 text-xs font-mono text-amber-400">Hardness: 350 - 400 BHN Lip</div>
              </div>

              {/* Profile 2 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-extrabold text-base">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-950">Heavy Fabricated Hardox 400 Buckets</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Fabricated from 4mm to 8mm heavy steel plate with welded Hardox 400 wear strips across
                  the leading lip. Designed for high-impact continuous dredging of sharp quartz rocks,
                  granite aggregates, iron ore, and abrasive mineral beneficiation feed.
                </p>
                <div className="pt-2 text-xs font-mono text-yellow-400">Service: Severe Quarry Duty</div>
              </div>

              {/* Profile 3 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-extrabold text-base">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-950">Molded Anti-Static Nylon / PU Buckets</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Engineered from high-density polyethylene (HDPE), nylon, or polyurethane with anti-static
                  compounds. 70% lighter than steel buckets, drastically reducing motor power consumption while
                  providing 100% non-stick release for sticky damp fertilizers and chemical powders.
                </p>
                <div className="pt-2 text-xs font-mono text-emerald-400">Benefit: 30% Power Saving</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 5: Boot Section Gravity & Screw Take-Up Tensioning Mechanisms */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Tensioning &amp; Alignment Systems
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Boot Section Gravity &amp; Screw Take-Up Tensioning Mechanisms
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Proper tensioning prevents belt slippage on the head pulley and ensures chains do not ride
                off sprocket teeth. Minerals Solutions provides two field-proven take-up architectures:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Screw Take-Up */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">Heavy ACME Screw Take-Up (Low to Mid Rise)</h3>
                    <div className="text-xs text-amber-400 font-mono font-semibold">
                      Standard on Lifts Up to 25 Meters
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Precision ACME Threaded Rods:</strong> Heavy trapezoidal lead screws with
                      bronze nuts provide smooth, accurate adjustment of boot shaft alignment.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>External Self-Aligning Bearings:</strong> Spherical roller bearings housed in
                      slotted sliding plummer blocks with external multi-labyrinth grease purge seals.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Independent Side Adjustment:</strong> Allows millwrights to precisely correct
                      belt tracking differences across left and right shaft positions.
                    </span>
                  </li>
                </ul>

                <div className="p-3.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-semibold">
                  MAINTENANCE: Manual periodic checks every 500 operating hours.
                </div>
              </div>

              {/* Gravity Counterweight Take-Up */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">Automatic Internal Gravity Take-Up</h3>
                    <div className="text-xs text-yellow-400 font-mono font-semibold">
                      Mandatory on Lifts Above 25 Meters
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Self-Compensating Dynamic Tension:</strong> Counterweighted floating boot
                      frame automatically compensates for belt thermal expansion and load stretch in real time.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Zero Maintenance Retensioning:</strong> Eliminates manual belt tightening
                      inspections, preventing sudden slack that causes boot bucket fouling.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Sealed Boot Slides:</strong> Telescoping rubber bellow seals isolate
                      dust-laden boot interior from external ambient plant atmosphere.
                    </span>
                  </li>
                </ul>

                <div className="p-3.5 rounded-lg bg-amber-100/70 border border-amber-200 text-xs font-mono text-amber-950 font-semibold">
                  MAINTENANCE: 100% automatic continuous tensioning with zero manual adjustment.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 6: Safety & Zero-Downtime Instrumentation */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Operational Safety &amp; Protection
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Built-In Safety Instrumentation &amp; Zero-Rollback Clutches
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Vertical bulk material conveying carries serious mechanical safety risks. Minerals Solutions
                integrates multiple interlocking fail-safe systems to safeguard plant personnel and capital equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Cam-Clutch Anti-Rollback Backstop</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Shaft-mounted mechanical backstop locks instantly if power fails under full vertical load,
                  preventing catastrophic backward runaway, bucket tearing, and motor destruction.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Inductive Zero-Speed Switch</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Non-contact proximity sensor on the tail boot pulley monitors true rotational velocity.
                  If belt slip exceeds 10%, the PLC instantly halts upstream feed conveyors to prevent boot choking.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Explosion Relief &amp; Misalignment Sensors</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ATEX-compliant rupture panels vent internal overpressure safely outside the building during
                  organic dust deflagrations. Mechanical belt sway limit switches alarm before belt edges rub casing.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 7: Workshop Quality Control & Manufacturing Proof */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold">
                  Workshop Engineering Precision
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                  Jig-Welded Modular Casing &amp; Crowned Pulley Fabrication
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  Every elevator section is manufactured in precision welding jigs at our Zak GIDC,
                  Dahegam workshop. Standardized modular casing sections ensure strict vertical alignment,
                  preventing belt wander and premature casing wear.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-amber-700 font-bold text-sm">Crowned Rubber Pulleys</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Machined crowned head drums hot-vulcanized with diamond-grooved rubber lagging
                      to shed water and maximize traction grip.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-amber-700 font-bold text-sm">Flanged Angle Ring Joints</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Continuous external angle flanges with Neoprene gasketing provide a 100% dust-tight,
                      weatherproof enclosure suitable for outdoor installation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-amber-700 font-bold text-sm">Quick-Access Hatches</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Bolted inspection doors at the head hood, discharge throat, and boot cleanout area
                      permit rapid inspection without dismantling trunking.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-amber-700 font-bold text-sm">Shaft-Mounted Geared Motors</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Helical geared motors mounted directly on the drive shaft via hollow bore and torque arm,
                      eliminating open roller chain maintenance and guards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Workshop Images Gallery */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/images/products/conveyor-systems/conveyor-head-tail-pulleys-lg.webp"
                    alt="Precision crowned and rubber lagged elevator head pulleys undergoing dynamic balancing at Minerals Solutions Zak GIDC Dahegam workshop" width={800} height={600}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-mono text-slate-200">
                    Workshop Bay: Heavy Duty Elevator Pulleys &amp; Rubber Lagging
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <Image
                      src="/images/products/conveyor-systems/head-pulley-rubber-lagging-lg.webp"
                      alt="Diamond pattern vulcanized rubber lagging on conveyor drive pulley preventing belt slippage" width={800} height={600}
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 text-[11px] font-mono text-slate-200">
                      Vulcanized Rubber Lagging
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <Image
                      src="/images/products/conveyor-systems/conveyor-belt-system-truss-lg.webp"
                      alt="Heavy structural steel trunking and conveyor support trusses assembled at Zak GIDC" width={800} height={600}
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 text-[11px] font-mono text-slate-200">
                      Modular Structural Trunking
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
                  href="/products/industrial-conveyors-spares/screw-conveyors/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Industrial Screw Conveyor Systems specifications"
                >
                  <Image
                    src="/images/products/conveyor-systems/belt-conveyor-system-variant-1-md.webp"
                    alt="Industrial Screw Conveyor Feeder"
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
                      <Link href="/products/industrial-conveyors-spares/screw-conveyors/" className="hover:underline">
                        Industrial Screw Conveyor Systems
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Dust-tight horizontal and inclined screw augers for enclosed powder and ash transport.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/industrial-conveyors-spares/screw-conveyors/"
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
                      High-tonnage troughed belt conveyors for overland mineral and aggregate transport.
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
                  href="/products/industrial-rotary-dryers/sand-dryer/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Industrial Rotary Sand Dryer Unit specifications"
                >
                  <Image
                    src="/images/products/rotary-dryers/silica-sand-rotary-dryer-md.webp"
                    alt="Industrial Rotary Sand Dryer Drum"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold text-purple-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Complementary Thermal System
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/industrial-rotary-dryers/sand-dryer/" className="hover:underline">
                        Industrial Rotary Sand Dryer Unit
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Upstream or downstream thermal drum handling high-capacity mineral moisture reduction.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/industrial-rotary-dryers/sand-dryer/"
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

        {/* Section 9: Engineering Sizing & RFQ Form */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-6 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
                  <span>ENGINEERING SIZING &amp; GA DRAWING</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Request a Custom Industrial Bucket Elevator Proposal
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Specify your required vertical lift height (meters), target bulk capacity (TPH),
                  material bulk density, and maximum lump size. Our design team in Zak GIDC, Dahegam will
                  compute motor kilowatt requirements, bucket spacing, and deliver a certified GA drawing
                  within 24 hours.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <Button
                    href="/request-quote/?product=bucket-elevator"
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
                    icon={<Phone className="w-5 h-5 text-amber-400" />}
                  >
                    Direct Technical Call: +91 92270 04455
                  </Button>
                </div>

                <div className="pt-6 border-t border-slate-200/80 text-xs text-slate-400 font-mono flex flex-wrap justify-center gap-6">
                  <span>GSTIN: 24AUSPP9555F1ZZ</span>
                  <span>•</span>
                  <span>Factory: Zak GIDC, Dahegam, Gandhinagar</span>
                  <span>•</span>
                  <span>Heavy Conveying Solutions Pan-India</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 10: Frequently Asked Questions */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="text-amber-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Knowledge Base &amp; Technical Guidance
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Frequently Asked Questions on Industrial Bucket Elevators
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Expert technical guidance on discharge selection, anti-rollback protection, chain vs belt
                traction, and explosion safety.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 flex items-start gap-3">
                    <span className="text-amber-400 font-mono text-sm mt-0.5">0{idx + 1}.</span>
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

