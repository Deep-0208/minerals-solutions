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
  Droplets,
  Filter,
  Check,
  TrendingDown,
  Activity,
  HardHat,
  Gem,
  Hammer,
  ShieldAlert,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Quartz Stone & Mineral Log Washer | Minerals Solutions',
  },
  description: 'Scrub tough clay from quartz stone and ore up to 75mm with heavy twin-shaft mineral log washers (30 to 150 TPH). Fabricated at Zak GIDC, Dahegam workshop.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/sand-washing-plants/mineral-log-washer/',
  },
  openGraph: {
    title: 'Heavy Duty Mineral Log Washer Line | Minerals Solutions',
    description:
      'Heavy duty twin shaft log washers (10 to 50 TPH) for quartz and mineral ores. Scrub sticky clay from coarse rocks up to 75mm. Zak GIDC, Dahegam.',
    url: `${company.siteUrl}/products/sand-washing-plants/mineral-log-washer/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quartz Stone & Mineral Log Washer | Minerals Solutions',
    description:
      'Heavy duty twin shaft log washers (10 to 50 TPH) for quartz and mineral ores. Scrub sticky clay from coarse rocks up to 75mm. Zak GIDC, Dahegam.',
    images: [defaultTwitterImage],
  },
};

export default function MineralLogWasherPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const rfqLink = '/request-quote/?product=mineral-log-washer';
  const whatsappUrl = `https://wa.me/916352453050?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering sizing sheet and quotation for a Heavy Duty Quartz Stone & Mineral Log Washer.'
  )}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Sand Washing Plants', href: '/products/sand-washing-plants/' },
    { label: 'Mineral Log Washer', href: '/products/sand-washing-plants/mineral-log-washer/' },
  ];

  const models = [
    {
      model: 'MS-LW-500',
      tubSize: '6,000 × 900 mm',
      capacity: '10 – 18 TPH',
      maxFeed: '50 mm',
      shaftSpeed: '28 – 34 RPM',
      motorPower: '25 HP (18.5 kW)',
      waterDemand: '30 – 50 m³/hr',
      weight: '6,800 kg',
    },
    {
      model: 'MS-LW-800',
      tubSize: '7,500 × 1,050 mm',
      capacity: '18 – 30 TPH',
      maxFeed: '65 mm',
      shaftSpeed: '24 – 30 RPM',
      motorPower: '40 HP (30 kW)',
      waterDemand: '50 – 75 m³/hr',
      weight: '9,200 kg',
    },
    {
      model: 'MS-LW-1000',
      tubSize: '8,500 × 1,200 mm',
      capacity: '30 – 45 TPH',
      maxFeed: '75 mm',
      shaftSpeed: '22 – 28 RPM',
      motorPower: '60 HP (45 kW)',
      waterDemand: '70 – 100 m³/hr',
      weight: '12,800 kg',
    },
    {
      model: 'MS-LW-2000',
      tubSize: '10,000 × 1,400 mm',
      capacity: '45 – 60 TPH',
      maxFeed: '75 mm',
      shaftSpeed: '20 – 26 RPM',
      motorPower: '75 HP (55 kW)',
      waterDemand: '95 – 135 m³/hr',
      weight: '16,500 kg',
    },
  ];

  const paddleFeatures = [
    {
      title: 'Mn13 Hadfield Austenitic Manganese Alloy',
      desc: 'Cast from high-work-hardening Mn13 manganese steel, the paddle tips absorb severe impact from 75mm quartz rock. Their surface hardness work-hardens from 220 HB up to 500+ HB in active operation while maintaining a ductile, shatter-proof core.',
      spec: 'Work-Hardens to 500+ HB',
      icon: <Hammer className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Reversible Dual-Wear Bolt-On Tips',
      desc: 'Every paddle blade features a symmetrical, reversible design mounted with high-tensile Grade 10.9 countersunk bolts. Plant maintenance crews can rotate worn tips 180° to double effective operational lifespan before replacement.',
      spec: '2x Service Life via 180° Flip',
      icon: <RotateCw className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Helical Staggered Intermeshing Geometry',
      desc: 'Paddles are arranged along twin contra-rotating heavy tubular shafts in a calculated helical pitch. This intermeshing overlap forces coarse rocks into intense mutual attrition without bridging or jamming coarse feed.',
      spec: 'Zero Dead-Zone Advance',
      icon: <Layers className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Hardox 450 Removable Tub Wear Liners',
      desc: 'The lower semicircular troughs of the structural steel washing tub are shielded with replaceable 10mm Hardox 450 wear plates, preventing rock gouging from eroding the structural pressure containment walls.',
      spec: '10 mm Hardox 450 Trough Bed',
      icon: <ShieldCheck className="h-6 w-6 text-amber-600" />,
    },
  ];

  const applications = [
    {
      title: 'High-Purity Quartz & Solar Glass Lump Beneficiation',
      desc: 'Removes tenacious surface clay coatings, ferruginous silt skins, and organic loam from high-grade silica quartz lumps before secondary crushing and optical laser color sorting, elevating SiO2 purity above 99.8%.',
      gain: '> 99.8% SiO₂ Purity',
      icon: <Gem className="h-6 w-6 text-cyan-600" />,
    },
    {
      title: 'Ferrosilicon & Metallurgical Silicon Smelting Feed',
      desc: 'Scans and strips 25mm to 75mm quartz lumps of alumina and alkaline clay films. Clean lumps prevent refractory tapping nozzle blockage and reduce electrical slag resistance inside submerged arc smelting furnaces.',
      gain: 'Alumina (Al₂O₃) < 0.25%',
      icon: <Factory className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Bauxite & Lateritic Ore De-Sliming',
      desc: 'Vigorously disintegrates sticky, plastic red clay from high-alumina gibbsite and boehmite bauxite nodules, upgrading aluminum content while reducing reactive silica prior to Bayer alumina digestion.',
      gain: 'Reactive Silica Reduction',
      icon: <Layers className="h-6 w-6 text-rose-600" />,
    },
    {
      title: 'Crushed Limestone & Granite Ballast Washing',
      desc: 'Scrubs quarry overburden and weathered clay seams from blasted ballast stone up to 75mm, ensuring 100% compliance with strict railway ballast and highway asphalt aggregate cleanliness indices.',
      gain: 'Clay Lumps < 0.5% (IS 383)',
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-600" />,
    },
  ];

  const faqs = [
    {
      question: 'Why is a log washer required instead of a rotary trommel or bucket wheel for coarse quartz?',
      answer:
        'Rotary trommels and bucket wheel washers rely on tumbling or gentle mechanical dredging, which is insufficient to break down tough, plastic clay envelopes and cohesive lateritic mud adhering to quartz rocks. A twin-shaft log washer operates like an intense industrial pug mill: two intermeshing contra-rotating shafts with heavy manganese paddles physically grind coarse rocks against one another (rock-on-rock attrition) under continuous hydrodynamic shear, stripping away 98%+ of adherent clay.',
    },
    {
      question: 'What is the maximum feed lump size the MS-LW log washer can handle?',
      answer:
        'Standard Minerals Solutions MS-LW log washers accept coarse lump rock feeds up to 75 mm (3 inches) top size directly from primary jaw crushers or vibrating grizzly screens. The heavy structural shafts, fabricated from 200 mm to 300 mm heavy-wall seamless carbon steel pipe, and massive reduction gearboxes are engineered to absorb the high shock loads generated when crushing 75mm quartz lumps.',
    },
    {
      question: 'How does the counter-current water flushing mechanism operate?',
      answer:
        'The log washer tub is installed at an incline of 6° to 10°. High-pressure clean wash water is injected through manifold spray nozzles near the upper rock discharge end. As the twin shafts convey scrubbed rocks uphill toward the discharge chute, water flows downhill against the advancing material. This counter-current flow continuously washes away liberated clay slimes toward the lower overflow weir, ensuring that clean rocks exit without recontamination.',
    },
    {
      question: 'What wear life can be expected from the Mn13 manganese steel paddles?',
      answer:
        'In abrasive silica quartz washing (Mohs hardness 7), Minerals Solutions cast Mn13 austenitic manganese paddle tips routinely achieve 1,200 to 1,800 operating hours on the primary scrubbing face. Because the tips are symmetrical and reversible, flipping them 180° extends total service life to 2,400–3,600 hours before replacement is required. Trough liner plates fabricated from Hardox 450 typically last 4,000+ hours.',
    },
    {
      question: 'How are the lower submerged bearings protected against slurry ingress?',
      answer:
        'Minerals Solutions incorporates an elevated outboard bearing configuration. The heavy spherical roller bearing pedestals are situated completely outside the tub endplates on heavy steel cantilever frames. The shaft penetration through the tub wall features a multi-stage labyrinth mechanical seal, double spring-loaded viton lip seals, and an automatic positive-pressure grease injection block that prevents abrasive quartz slurry from penetrating the bearing housing.',
    },
    {
      question: 'What downstream equipment is typically paired with the mineral log washer?',
      answer:
        'After scrubbing in the log washer, clean rocks discharge onto a double-deck rinsing screen to wash away residual surface films. The dirty overflow slurry from the log washer lower weir is directed into our Hydrocyclone Fine Sand Recovery Unit (MS-FSR series) to recover valuable +75 micron fine sand, while clean, de-slimed quartz lumps proceed to secondary cone crushers or optical color sorters.',
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Quartz Stone and Mineral Log Washer',
      image: `${company.siteUrl}/images/products/mineral-processing/quartz-stone-washer-lg.webp`,
      description:
        'Heavy-duty industrial twin-shaft quartz stone and mineral log washers (10 to 60 TPH) for processing coarse rocks up to 75mm. Contra-rotating shafts with reversible Mn13 manganese steel paddles remove 98%+ adherent plastic clay.',
      brand: {
        '@type': 'Brand',
        name: 'Minerals Solutions',
      },
      sku: 'MS-LW-SERIES',
      mpn: 'MS-LW-1000-2000',
      manufacturer: {
        '@type': 'Organization',
        name: company.legalName,
        url: company.siteUrl,
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: 1650000,
        highPrice: 4200000,
        offerCount: 4,
        priceValidUntil: '2027-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Minerals Solutions',
        },
      },
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Feed Size Acceptance',
          value: 'Up to 75 mm coarse mineral rock lumps',
        },
        {
          '@type': 'PropertyValue',
          name: 'Scrubbing Action',
          value: 'Contra-rotating twin log shafts with rock-on-rock attrition',
        },
        {
          '@type': 'PropertyValue',
          name: 'Paddle Metallurgy',
          value: 'Reversible Cast Mn13 Austenitic Manganese Steel (Hadfield Alloy)',
        },
        {
          '@type': 'PropertyValue',
          name: 'De-Sliming Efficiency',
          value: 'Removes 98%+ adherent plastic clay and surface loam',
        },
        {
          '@type': 'PropertyValue',
          name: 'Drive System',
          value: 'Heavy parallel-shaft helical reduction gearbox with oil-bath lubrication',
        },
        {
          '@type': 'PropertyValue',
          name: 'Manufacturing Facility',
          value: 'Zak GIDC, Dahegam, Gandhinagar, Gujarat, India',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${company.siteUrl}/`,
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
          name: 'Sand Washing Plants',
          item: `${company.siteUrl}/products/sand-washing-plants/`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Mineral Log Washer',
          item: `${company.siteUrl}/products/sand-washing-plants/mineral-log-washer/`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <main className="min-h-screen bg-white text-slate-900">
        {/* Breadcrumb Navigation Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-3">
          <Container>
            <Breadcrumbs items={breadcrumbs} />
          </Container>
        </section>

        {/* Hero Section */}
        <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading, Commercial Positioning & Badges */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-950 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Hammer className="h-3.5 w-3.5 text-amber-700" />
                  Heavy Coarse Mineral Scrubbing & Attrition
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
                  Heavy Duty Quartz Stone & Mineral Log Washers
                </h1>

                <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                  Engineered in Zak GIDC, Dahegam, Minerals Solutions twin-shaft mineral log washers aggressively scrub
                  off tough, sticky plastic clay, decomposed feldspar, and ferruginous silt coatings from coarse quartz lumps
                  and mineral ores up to 75mm prior to secondary crushing and optical grading.
                </p>

                {/* Key Technical Highlights Badges */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Throughput</span>
                    <span className="text-base font-bold text-slate-900">10 – 60 TPH</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Max Feed Lump</span>
                    <span className="text-base font-bold text-amber-700">Up to 75 mm</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Clay Removal</span>
                    <span className="text-base font-bold text-emerald-700">&gt; 98% Efficiency</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Paddle Steel</span>
                    <span className="text-base font-bold text-slate-900">Mn13 Hadfield</span>
                  </div>
                </div>

                {/* Commercial CTA Group */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href={rfqLink} variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                    Request Workshop Sizing Quote
                  </Button>
                  <Button href={whatsappUrl} variant="outline" size="lg" external icon={<Phone className="h-4 w-4" />}>
                    WhatsApp Flowsheet
                  </Button>
                </div>

                {/* Quick Trust Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Reversible 180° Paddle Tips
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Outboard Roller Bearings
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> 10 mm Hardox Bed Liners
                  </span>
                </div>
              </div>

              {/* Right Column: Equipment Visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 shadow-xl bg-slate-900">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/products/mineral-processing/quartz-stone-washer-lg.webp"
                      alt="Heavy Duty Quartz Stone and Mineral Log Washer Fabricated by Minerals Solutions in Dahegam Gujarat" width={800} height={600}
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                    />
                  </div>
                  <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-white flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">MS-LW Twin Shaft Washer</p>
                      <p className="text-xs text-slate-400">Fabricated at Zak GIDC, Dahegam Workshop</p>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      75 mm Feed Capable
                    </span>
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
                  <strong className="text-slate-950 font-semibold">What is a heavy duty mineral log washer? </strong>
                  A heavy duty mineral log washer is an intensive high-torque attrition scrubber engineered to break down and wash away stubborn plastic clays, soft mudstone, and conglomerate binders from coarse quartz, manganese ore, silica rock, and limestone. Manufactured at Zak GIDC, Dahegam, the machine features twin counter-rotating steel shafts (up to 7.5m length) housed in a welded IS 2062 steel trough inclined at 6 to 10 degrees. Staggered high-chromium alloy steel (600+ BHN) or Hardox 500 paddle blades continuously intermesh at 25 to 35 RPM, subjecting wet mineral rock up to 75mm to severe rock-on-rock attrition and hydraulic shear. Processing capacities range from 30 to 150 TPH with water consumption of 1.5 to 2.5 m³ per ton, discharging pristine de-slimed gravel while suspended clay colloids overflow a rear adjustable weir for continuous plant operation.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: Contra-Rotating Twin Shaft Scrubbing & Attrition Physics */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Mechanical Scrubbing Dynamics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Contra-Rotating Twin Shaft Scrubbing & Attrition Physics
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Sticky plastic clays (such as bentonitic mud and montmorillonite loams) form an elastic envelope around quartz
                and mineral rocks that cannot be washed away with water sprays alone. The Minerals Solutions log washer utilizes
                mechanical pug-mill shear and severe hydrodynamic attrition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-4 font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Intermeshing Shear Zone</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Twin contra-rotating shafts turn inward toward each other. The overlapping paddle paths continuously draw
                  rock lumps down into the central convergence zone, where intense crushing contact shears off plastic mud.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-4 font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Rock-on-Rock Attrition</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rather than relying solely on metal-to-mineral abrasion, rocks grind against each other under hydrostatic
                  immersion. This natural attrition strips iron oxide stains without fracturing high-value crystalline quartz.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-4 font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Counter-Current Flushing</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Fresh water enters at the top discharge end and cascades downhill toward the lower feed weir. Liberated
                  clay slimes are carried away instantly, preventing re-coating of cleaned lumps as they exit the machine.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Manganese Steel Paddle Metallurgy & Wear Life (Mn13 / Hardox) */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Heavy Metallurgy
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Manganese Steel Paddle Metallurgy & Wear Life (Mn13 / Hardox)
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Processing tough 75mm quartz stone (Mohs hardness 7) exerts violent shock loads and gouging abrasion.
                Minerals Solutions utilizes austenitic Hadfield manganese steel that work-hardens dynamically during operation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paddleFeatures.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Advantage</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                      {item.spec}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Hadfield Manganese Metallurgy Callout */}
            <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 block mb-1">
                    Hadfield Work-Hardening Physics
                  </span>
                  <h4 className="text-lg font-bold">Why Mn13 Beats Standard High-Chrome or Nihard in Log Washers</h4>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Brittle cast alloys like Nihard or 27% high-chrome can shatter when struck by coarse 75mm rocks. In contrast,
                    Mn13 austenitic manganese steel possesses exceptional impact toughness: repeated impacts convert surface
                    austenite into martensite, raising skin hardness to 500+ HB while the core remains tough and shatter-proof.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-end">
                  <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-center w-full">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">Reversible Tip Life</span>
                    <span className="text-2xl font-extrabold text-amber-400">2,400 – 3,600 Hrs</span>
                    <span className="block text-xs text-slate-400 mt-1">Dual 180° Wear Surfaces</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: Technical Specifications & Tonnage Matrix (MS-LW Series) */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Engineering Specifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Technical Specifications & Tonnage Matrix (MS-LW Series)
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Fabricated with IS 2062 heavy structural steel plate (10 mm to 16 mm thickness) and heavy-wall carbon steel
                seamless pipe log shafts, our MS-LW twin-shaft machines deliver continuous scrubbing from 10 to 60 TPH.
              </p>
            </div>

            {/* Technical Specification Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold tracking-wider">
                  <tr>
                    <th className="py-4 px-4 border-b border-slate-200">Model</th>
                    <th className="py-4 px-4 border-b border-slate-200">Tub Size (L×W)</th>
                    <th className="py-4 px-4 border-b border-slate-200">Throughput (TPH)</th>
                    <th className="py-4 px-4 border-b border-slate-200">Max Feed Lump</th>
                    <th className="py-4 px-4 border-b border-slate-200">Shaft Speed</th>
                    <th className="py-4 px-4 border-b border-slate-200">Motor Power</th>
                    <th className="py-4 px-4 border-b border-slate-200">Water Demand</th>
                    <th className="py-4 px-4 border-b border-slate-200">Operating Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {models.map((item, idx) => (
                    <tr key={item.model} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-3.5 px-4 font-bold text-slate-950 font-mono">{item.model}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.tubSize}</td>
                      <td className="py-3.5 px-4 font-bold text-amber-700">{item.capacity}</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">{item.maxFeed}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.shaftSpeed}</td>
                      <td className="py-3.5 px-4 text-slate-900 font-medium">{item.motorPower}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.waterDemand}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500 italic">
              * Note: Capacities vary based on feed rock density, clay adhesiveness, and required retention time. Custom tub lengths, heavy VFD variable-speed drives, and acid-resistant SS316 contact liners are custom-fabricated on request at our Dahegam workshop.
            </p>
          </Container>
        </section>

        {/* Section 4: Processing Tough Plastic Clays & Coarse Rock Feed (Up to 75mm) */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Mineral Applications
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Processing Tough Plastic Clays & Coarse Rock Feed (Up to 75mm)
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Minerals Solutions log washers are deployed across mining operations where high clay content prevents downstream
                screening, magnetic separation, or crushing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                        {app.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-950">{app.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{app.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Quality Achievement</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300">
                      {app.gain}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 5: Heavy Reduction Gearbox Drive & Submerged Bearings */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Drive Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Heavy Reduction Gearbox Drive & Submerged Bearings Sealing
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Operating under severe torque and heavy radial loads requires an unyielding drive train and bearing protection
                system that isolates critical mechanical assemblies from quartz grit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 w-fit mb-4">
                  <Cog className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-950 text-base mb-2">Heavy Helical Reduction Drive</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Precision ground helical gears running in a continuous oil bath deliver high starting torque with a 2.5 service
                  factor, effortlessly breaking free jammed 75mm lumps after emergency plant power shutoffs.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 w-fit mb-4">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-950 text-base mb-2">Outboard Spherical Bearings</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Heavy double-row spherical roller bearing pedestals are situated entirely outside the tub endplates,
                  completely separating mechanical bearing journals from water and abrasive rock contact.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 w-fit mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-950 text-base mb-2">Multi-Chamber Labyrinth Seals</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Shaft penetrations feature dual-chamber labyrinth seals and automatic continuous grease purging that
                  expels micro-fines before they can penetrate packing glands or reach bearing tracks.
                </p>
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
                href="/products/sand-washing-plants/"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#DA020D] transition-colors shrink-0"
              >
                Explore Full Sand Washing & Mineral Processing Hub <ChevronRight className="w-4 h-4 text-[#DA020D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sibling Spoke 1 */}
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#DA020D]/40 transition-all flex flex-col justify-between group">
                <Link
                  href="/products/sand-washing-plants/silica-sand-washing-plant/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Silica Sand Washing Plant System specifications"
                >
                  <Image
                    src="/images/products/mineral-processing/river-sand-washing-plant-md.webp"
                    alt="Silica Sand Washing Plant Circuit"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Sibling Washing Line
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/sand-washing-plants/silica-sand-washing-plant/" className="hover:underline">
                        Silica Sand Washing Plant System
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Turnkey washing and classification line for glass sand and high-purity quartz rock.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/sand-washing-plants/silica-sand-washing-plant/"
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
                  href="/products/sand-washing-plants/bucket-wheel-sand-washer/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Bucket Wheel Sand Washer System specifications"
                >
                  <Image
                    src="/images/products/mineral-processing/river-sand-washing-plant-variant-md.webp"
                    alt="Bucket Wheel Sand Washer"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold text-blue-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Sibling Washing Line
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/sand-washing-plants/bucket-wheel-sand-washer/" className="hover:underline">
                        Bucket Wheel Sand Washer System
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      High-volume sand washing wheel separating clays from washed gravel and M-Sand.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/sand-washing-plants/bucket-wheel-sand-washer/"
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
                      Downstream heavy rotary drum dryer removing moisture from washed quartz and mineral rocks.
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

        {/* Section 7: Frequently Asked Questions on Mineral Log Washing */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Mining Engineering FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Frequently Asked Questions on Mineral Log Washing
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Practical technical insights to help mining engineers, plant promoters, and quarry managers select the right
                log washer capacity and metallurgy.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 8: Direct Workshop Procurement & RFQ Conversion */}
        <section className="py-14 lg:py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider inline-block mb-4">
                  Direct Factory Procurement &bull; Zak GIDC, Dahegam
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight font-display">
                  Order Your Heavy Duty Mineral Log Washer Directly from the Manufacturer
                </h2>
                <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Inspect raw steel test certificates and witness trial assembly at our Dahegam heavy fabrication workshop.
                  Get direct OEM pricing, full site erection support, and guaranteed spare parts availability.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Factory className="h-4 w-4 text-amber-400" />
                    <span>Zak GIDC, Dahegam Workshop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HardHat className="h-4 w-4 text-amber-400" />
                    <span>Turnkey Site Erection & Commissioning</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <Button href={rfqLink} variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  Request Price Quotation
                </Button>
                <Button href={`tel:${cleanPhone}`} variant="outline" size="lg" external icon={<Phone className="h-4 w-4" />}>
                  Call: {primaryPhone}
                </Button>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 py-1"
                >
                  Direct WhatsApp Engineering Chat &rarr;
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

