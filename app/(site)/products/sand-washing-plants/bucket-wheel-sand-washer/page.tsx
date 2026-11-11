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
  Anchor,
  Compass,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Bucket Wheel Sand Washer Manufacturer | Minerals Solutions',
  },
  description:
    'Heavy duty bucket wheel sand washing machines (30 to 120 TPH) for M-Sand and river gravel. Low power, high recovery. Zak GIDC, Dahegam, Gujarat.',
  alternates: {
    canonical: '/products/sand-washing-plants/bucket-wheel-sand-washer/',
  },
  openGraph: {
    title: 'Bucket Wheel Sand Washer Manufacturer | Minerals Solutions',
    description:
      'Heavy duty bucket wheel sand washing machines (30 to 120 TPH) for M-Sand and river gravel. Low power, high recovery. Zak GIDC, Dahegam, Gujarat.',
    url: `${company.siteUrl}/products/sand-washing-plants/bucket-wheel-sand-washer/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bucket Wheel Sand Washer Manufacturer | Minerals Solutions',
    description:
      'Heavy duty bucket wheel sand washing machines (30 to 120 TPH) for M-Sand and river gravel. Low power, high recovery. Zak GIDC, Dahegam, Gujarat.',
    images: [defaultTwitterImage],
  },
};

export default function BucketWheelSandWasherPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const rfqLink = '/request-quote/?product=bucket-wheel-sand-washer';
  const whatsappUrl = `https://wa.me/916352453050?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering sizing sheet and quotation for a Bucket Wheel Sand Washing Machine.'
  )}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Sand Washing Plants', href: '/products/sand-washing-plants/' },
    { label: 'Bucket Wheel Sand Washer', href: '/products/sand-washing-plants/bucket-wheel-sand-washer/' },
  ];

  const models = [
    {
      model: 'MS-BWW-2600',
      type: 'Single Wheel',
      capacity: '30 – 45 TPH',
      wheelDia: 'Ø 2,600 mm',
      wheelWidth: '900 mm',
      buckets: '12 Buckets',
      motorPower: '7.5 HP (5.5 kW)',
      tankCapacity: '5.8 m³',
      waterDemand: '40 – 60 m³/hr',
      weight: '4,200 kg',
    },
    {
      model: 'MS-BWW-2800',
      type: 'Single Wheel',
      capacity: '45 – 65 TPH',
      wheelDia: 'Ø 2,800 mm',
      wheelWidth: '1,050 mm',
      buckets: '14 Buckets',
      motorPower: '10 HP (7.5 kW)',
      tankCapacity: '7.2 m³',
      waterDemand: '60 – 85 m³/hr',
      weight: '5,500 kg',
    },
    {
      model: 'MS-BWW-3200',
      type: 'Heavy Single Wheel',
      capacity: '70 – 90 TPH',
      wheelDia: 'Ø 3,200 mm',
      wheelWidth: '1,200 mm',
      buckets: '16 Buckets',
      motorPower: '15 HP (11 kW)',
      tankCapacity: '9.8 m³',
      waterDemand: '85 – 120 m³/hr',
      weight: '7,400 kg',
    },
    {
      model: 'MS-BWW-3600',
      type: 'High-Volume Single Wheel',
      capacity: '90 – 120 TPH',
      wheelDia: 'Ø 3,600 mm',
      wheelWidth: '1,400 mm',
      buckets: '18 Buckets',
      motorPower: '20 HP (15 kW)',
      tankCapacity: '13.5 m³',
      waterDemand: '110 – 160 m³/hr',
      weight: '9,800 kg',
    },
    {
      model: 'MS-BWW-3200D',
      type: 'Dual Basin / Twin Wheel',
      capacity: '120 – 160 TPH',
      wheelDia: 'Twin Ø 3,200 mm',
      wheelWidth: '2x 1,200 mm',
      buckets: '32 Buckets (2x16)',
      motorPower: '2x 15 HP (22 kW)',
      tankCapacity: '19.5 m³',
      waterDemand: '160 – 240 m³/hr',
      weight: '14,800 kg',
    },
  ];

  const scoopFeatures = [
    {
      title: 'Replaceable Polyurethane (PU) Screen Panels',
      desc: 'Perforated modular PU screen decks with slot apertures from 0.5 mm to 2.0 mm offer 4x to 6x longer abrasion resistance than woven mild steel wire cloth, preventing mesh blinding and maintaining consistent water percolation.',
      spec: '4x–6x Life vs MS Wire Mesh',
      icon: <Layers className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Manganese Hardfaced Bucket Leading Edges',
      desc: 'Every dredge bucket features a bolt-on Hardox 450 or manganese alloy wear lip that absorbs direct gouging friction when dredging coarse aggregates from the bottom of the water sedimentation basin.',
      spec: 'Hardox 450 / Mn Alloy Lips',
      icon: <ShieldCheck className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Perimeter Gravity Drainage Perforations',
      desc: 'Engineered drainage slots on bucket sidewalls and backplates allow liberated wash water and floating slimes to rapidly cascade back into the tank while retaining all +150 micron concrete sand particles.',
      spec: '> 96% Retention of +150μ Fines',
      icon: <Filter className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Modular Wedge Pin Quick-Release Decks',
      desc: 'Standardized pin-and-wedge fasteners enable plant operators to replace worn bucket screening modules in under 25 minutes per wheel without gas torches or hot work permits on the plant structure.',
      spec: '< 25 Min Maintenance Downtime',
      icon: <Wrench className="h-6 w-6 text-amber-600" />,
    },
  ];

  const msandParameters = [
    {
      param: 'Silt & Micro-Fines (< 75 Micron)',
      raw: '12.0% – 18.0% (Crusher Dust)',
      washed: '< 2.5% (IS 383 Compliant)',
      impact: 'Eliminates excess cement demand; achieves target 28-day concrete cube compressive strengths.',
    },
    {
      param: 'Grading Zone Conformance',
      raw: 'Erratic / Out of Spec',
      washed: 'Strict Zone II Gradation',
      impact: 'Guarantees smooth workability and pumpability in commercial ready-mix concrete (RMC) trucks.',
    },
    {
      param: 'Organic Impurities & Soil Slimes',
      raw: 'Present in pit quarry feed',
      washed: 'Zero / 100% Overflow Cleared',
      impact: 'Prevents efflorescence, delamination, and bonding failure in plaster and mortar applications.',
    },
    {
      param: 'Sand Moisture at Discharge Chute',
      raw: 'Slurry State (100% Saturated)',
      washed: '12% – 15% Gravity Dewatered',
      impact: 'Permits immediate stockpile conveying without catastrophic water ponding at conveyor transfer boot.',
    },
    {
      param: 'Specific Power Consumption',
      raw: 'N/A (Unwashed)',
      washed: '0.22 – 0.28 kWh / Ton Sand',
      impact: 'Cuts electricity operating expenses by up to 55% compared to heavy screw spiral sand classifiers.',
    },
  ];

  const driveFeatures = [
    {
      title: 'Outboard Elevated Bearing Housings',
      desc: 'The heavy spherical roller bearing pedestals are mounted completely outside the water slurry basin on elevated structural pillars, isolating critical rolling elements from abrasive quartz slurry contamination.',
    },
    {
      title: 'Multi-Stage Grease Labyrinth Sealing',
      desc: 'Rotary shaft penetrations are armored with dual mechanical face seals, nitrile V-rings, and an active grease-purge barrier that expels any micro-fines before they reach bearing journals.',
    },
    {
      title: 'Hardened Helical Reduction Gearbox',
      desc: 'High-torque industrial helical reduction gearboxes provide slow, steady wheel rotation (1.2 to 2.5 RPM), delivering massive torque reserves to restart smoothly even if the tank is fully bogged after a power outage.',
    },
    {
      title: 'Heavy Structural Box-Channel Chassis',
      desc: 'The water settling basin and superstructure are fabricated from 8 mm to 12 mm IS 2062 Grade B structural steel plate, reinforced with external channel stiffeners to resist hydrostatic and dredging thrust.',
    },
  ];

  const faqs = [
    {
      question: 'How does a bucket wheel sand washer compare to a spiral screw classifier?',
      answer:
        'A bucket wheel sand washer consumes roughly 50% to 60% less electrical power (0.25 kWh/ton vs. 0.60 kWh/ton for screw washers) and has significantly lower wear part costs. Because only the bucket scoops rotate through the slurry bed while the heavy drive and bearings remain completely elevated above the water line, bearing failure and abrasive flight wear are minimized. Spiral screw classifiers can retain slightly finer dust, but for standard IS 383 Zone II M-Sand and concrete aggregates, bucket wheels provide superior operational uptime and lower maintenance costs.',
    },
    {
      question: 'Can the bucket wheel sand washer process both river sand and manufactured sand (M-Sand)?',
      answer:
        'Yes. Minerals Solutions bucket wheel sand washers are universally deployed for both river sand dredging and manufactured sand (M-Sand) from VSI and cone crushers. For M-Sand, where stone dust and micro-fines (<75 micron) often exceed 15%, the adjustable adjustable weir plates and calibrated polyurethane bucket screen apertures (0.8 mm to 1.5 mm) allow precise silt overflow while retaining essential +150 micron fine construction sand.',
    },
    {
      question: 'What is the typical lifespan of the polyurethane bucket screen panels?',
      answer:
        'Under continuous operation in abrasive basalt or granite stone crusher lines, Minerals Solutions premium modular polyurethane screen panels routinely achieve an operational lifespan of 1,800 to 2,500 working hours (approx. 6 to 9 months). In natural silica and river sand plants, screen life typically exceeds 3,000 hours. This is 4x to 6x longer than traditional high-carbon mild steel wire mesh panels.',
    },
    {
      question: 'How is the submerged shaft sealed against abrasive water and sand ingress?',
      answer:
        'Minerals Solutions implements an outboard bearing architecture. The spherical roller bearing pedestals are located entirely outside the slurry tank wall. The shaft penetration through the tank wall incorporates a multi-stage labyrinth seal, dual mechanical PTFE lip seals, and a continuous grease pressure chamber that forms an impenetrable positive-pressure barrier against abrasive grit.',
    },
    {
      question: 'How much water does a bucket wheel sand washing machine require?',
      answer:
        'Water consumption depends on wheel diameter and plant feed throughput, typically ranging from 40 m³/hr for the MS-BWW-2600 (30–45 TPH) up to 160 m³/hr for the MS-BWW-3600 (90–120 TPH). However, the net water lost with the washed sand is only 12% to 15% of the sand weight. When integrated with a closed-loop water recovery circuit (hydrocyclone dewatering screen and settling pond or high-rate thickener), up to 85% to 90% of the wash water is continuously clarified and recycled back into the process.',
    },
    {
      question: 'What models and wheel diameters are manufactured at your Dahegam workshop?',
      answer:
        'We manufacture standard single-wheel models with diameters of 2,600 mm, 2,800 mm, 3,200 mm, and 3,600 mm covering throughput capacities from 30 TPH to 120 TPH. For massive 120–160 TPH quarry installations, we fabricate dual-wheel twin-basin systems (MS-BWW-3200D). Custom bucket depths, variable speed VFD drives, and integrated dewatering screen chutes are fabricated to exact client specifications in Zak GIDC, Dahegam.',
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Bucket Wheel Sand Washing & Dewatering Machine',
      image: `${company.siteUrl}/images/products/mineral-processing/river-sand-washing-plant-lg.webp`,
      description:
        'Heavy-duty industrial bucket wheel sand washing and dewatering machines (30 to 120 TPH) for manufactured sand (M-Sand) and river gravel. Low energy consumption, modular polyurethane screens, and outboard bearing protection.',
      brand: {
        '@type': 'Brand',
        name: 'Minerals Solutions',
      },
      sku: 'MS-BWW-SERIES',
      mpn: 'MS-BWW-2600-3600',
      manufacturer: {
        '@type': 'Organization',
        name: company.legalName,
        url: company.siteUrl,
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: 850000,
        highPrice: 2600000,
        offerCount: 5,
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
          name: 'Wheel Diameter',
          value: '2,600 mm to 3,600 mm',
        },
        {
          '@type': 'PropertyValue',
          name: 'Processing Capacity',
          value: '30 to 120 TPH (Single Wheel), up to 160 TPH (Dual Wheel)',
        },
        {
          '@type': 'PropertyValue',
          name: 'Specific Power Consumption',
          value: '~0.25 kWh per ton of washed sand',
        },
        {
          '@type': 'PropertyValue',
          name: 'Screening Deck Material',
          value: 'Modular Perforated Polyurethane (PU) Panels',
        },
        {
          '@type': 'PropertyValue',
          name: 'Silt Reduction',
          value: 'Reduces fines from 18% down to <2.5% (IS 383 Zone II compliant)',
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
          name: 'Bucket Wheel Sand Washer',
          item: `${company.siteUrl}/products/sand-washing-plants/bucket-wheel-sand-washer/`,
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
              {/* Left Column: Heading, Metrics & Commercial Positioning */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4">
                  <RotateCw className="h-3.5 w-3.5 text-amber-700 animate-spin-slow" />
                  Heavy Mechanical Dredging & Gravity Dewatering
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
                  Industrial Bucket Wheel Sand Washing Machines
                </h1>

                <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                  Engineered in Zak GIDC, Dahegam, Minerals Solutions heavy-duty bucket wheel sand washers provide
                  ultra-low-power, high-volume classification and dewatering for manufactured sand (M-Sand), river
                  gravel, and crushed aggregate quarry plants across Gujarat and Western India.
                </p>

                {/* Key Technical Highlights Badges */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Throughput</span>
                    <span className="text-base font-bold text-slate-900">30 – 120 TPH</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Wheel Diameter</span>
                    <span className="text-base font-bold text-slate-900">Ø 2.6m – 3.6m</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Energy Use</span>
                    <span className="text-base font-bold text-slate-900">~0.25 kWh/T</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Silt Level</span>
                    <span className="text-base font-bold text-amber-700">&lt; 2.5% IS 383</span>
                  </div>
                </div>

                {/* Commercial CTA Group */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href={rfqLink} variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                    Request Sizing Quote
                  </Button>
                  <Button href={whatsappUrl} variant="outline" size="lg" external icon={<Phone className="h-4 w-4" />}>
                    WhatsApp Flowsheet
                  </Button>
                </div>

                {/* Quick Trust Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Modular PU Screen Panels
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Outboard Bearing Pedestals
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Hardox 450 Bucket Lips
                  </span>
                </div>
              </div>

              {/* Right Column: Authentic Equipment Visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 shadow-xl bg-slate-900">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/products/mineral-processing/river-sand-washing-plant-lg.webp"
                      alt="Industrial Bucket Wheel Sand Washing Machine Manufactured by Minerals Solutions in Dahegam Gujarat"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                    />
                  </div>
                  <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-white flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">MS-BWW Heavy Sand Washer</p>
                      <p className="text-xs text-slate-400">Fabricated at Zak GIDC, Dahegam Workshop</p>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      IS 383 Zone II
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
            <div className="p-6 rounded-xl bg-white border-l-4 border-l-amber-600 border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-slate-800 text-sm sm:text-base leading-relaxed">
                  <strong className="text-slate-950 font-semibold">What is an industrial bucket wheel sand washer? </strong>
                  An industrial bucket wheel sand washing machine is a heavy mechanical solid-liquid classifier engineered to
                  scrub, desilt, and dewater natural river gravel and manufactured sand (M-Sand). Material enters an integrated
                  water sedimentation basin where slowly rotating dredging wheels (1.2 to 2.5 RPM) equipped with perforated
                  polyurethane screen buckets dredge settled sand from the bottom. Free wash water and suspended clays drain
                  by gravity through calibrated perimeter perforations as the bucket ascends above the slurry line, while fine
                  silt and excess clay colloids overflow an adjustable peripheral weir. The resulting washed sand discharges at
                  12% to 15% moisture, meeting Indian Standard IS 383 Zone II grading requirements with power consumption of
                  only ~0.25 kWh per ton.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: Low-Power Mechanical Washing & Gravity Dewatering Action */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Mechanical Energy Physics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Low-Power Mechanical Washing & Gravity Dewatering Action
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Conventional sand washing systems often rely on high-speed screw spirals or slurry pumps that consume
                massive electrical energy and subject internal contact parts to violent continuous abrasion. The Minerals
                Solutions bucket wheel architecture harnesses slow rotational dredging and natural gravity drainage to cut
                operational expenditure by up to 55%.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4 font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Slow-Speed Dredging Motion</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Operating at only 1.2 to 2.5 RPM, the wheel buckets gently scoop settled sand from the deep sediment bed
                  without violent agitation that would otherwise shatter friable particle edges or generate excess micro-fines.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4 font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Free Gravity Percolation</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  As the loaded bucket climbs through its 180° arc above the slurry level, free water naturally percolates
                  through the polyurethane screen deck back into the tank, eliminating the need for motorized dewatering vibrators.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4 font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Calibrated Overflow Weir</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  An extended perimeter overflow weir regulates slurry velocity so that lightweight organic particles and
                  -75 micron clay silts float over the edge into the settling channel while +150 micron construction sand settles.
                </p>
              </div>
            </div>

            {/* Comparison Callout: Wheel vs Screw Washer */}
            <div className="mt-10 p-6 rounded-2xl bg-amber-50/50 border border-amber-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <h4 className="text-base font-bold text-slate-950 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-amber-700" />
                    Operational Cost Advantage: Bucket Wheel vs. Spiral Screw Washer
                  </h4>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    In a standard 100 TPH sand processing facility operating 16 hours daily, a spiral screw classifier draws
                    roughly 37 kW (50 HP) with monthly replacement of submerged lower bearings and flights. A Minerals Solutions
                    MS-BWW-3600 bucket wheel draws only 15 kW (20 HP) with an external bearing pedestal, saving over ₹6,80,000 in
                    annual electricity and avoiding catastrophic bearing contamination.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-end">
                  <div className="p-4 rounded-xl bg-white border border-amber-300 text-center w-full">
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">Annual Energy Savings</span>
                    <span className="text-2xl font-extrabold text-amber-800">Up to 55% Less Power</span>
                    <span className="block text-xs text-emerald-700 font-medium mt-1">₹ 6.8L+ Saved / Year</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Wheel Diameter & Sizing Specifications (MS-BWW Series) */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Engineering Specifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Wheel Diameter & Sizing Specifications (MS-BWW Series)
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Fabricated with IS 2062 heavy structural steel plates and precision machined journals, the MS-BWW series
                is available in single and twin wheel configurations to handle feed capacities from 30 TPH up to 160 TPH.
              </p>
            </div>

            {/* Technical Specification Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold tracking-wider">
                  <tr>
                    <th className="py-4 px-4 border-b border-slate-200">Model</th>
                    <th className="py-4 px-4 border-b border-slate-200">Configuration</th>
                    <th className="py-4 px-4 border-b border-slate-200">Throughput (TPH)</th>
                    <th className="py-4 px-4 border-b border-slate-200">Wheel Dia & Width</th>
                    <th className="py-4 px-4 border-b border-slate-200">Buckets</th>
                    <th className="py-4 px-4 border-b border-slate-200">Motor Power</th>
                    <th className="py-4 px-4 border-b border-slate-200">Water Demand</th>
                    <th className="py-4 px-4 border-b border-slate-200">Operating Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {models.map((item, idx) => (
                    <tr key={item.model} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-3.5 px-4 font-bold text-slate-950 font-mono">{item.model}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.type}</td>
                      <td className="py-3.5 px-4 font-semibold text-amber-700">{item.capacity}</td>
                      <td className="py-3.5 px-4 text-slate-700">
                        {item.wheelDia} × {item.wheelWidth}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">{item.buckets}</td>
                      <td className="py-3.5 px-4 text-slate-900 font-medium">{item.motorPower}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.waterDemand}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500 italic">
              * Note: Water demand and actual throughput depend on feed particle size distribution and clay slime percentage. Custom bucket geometries and variable speed VFD drives are manufactured on order at our Dahegam workshop.
            </p>
          </Container>
        </section>

        {/* Section 3: Perforated Polyurethane Bucket Panels & Wear Life */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Abrasion Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Perforated Polyurethane Bucket Panels & Wear Life
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                The bucket dredge system is the frontline contact zone subject to severe gouging and sliding abrasion.
                Minerals Solutions combines cast polyurethane modular screen decks with Hardox manganese bucket lips to
                ensure maximum durability without frequent shutdown maintenance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {scoopFeatures.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 shrink-0">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-950">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Benchmark</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                      {feature.spec}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* In-depth Screen Deck Callout */}
            <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider inline-block mb-3">
                    Polyurethane Screening Physics
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display">
                    Why Polyurethane Replaces Wire Mesh in Abrasive M-Sand
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Crushed stone dust generated by VSI impactors contains sharp, angular quartz and basalt particles that
                    quickly abrade and deform standard woven wire screens, causing aperture expansion and catastrophic loss
                    of construction fines. Our injection-molded polyurethane panels exhibit high rebound elasticity, preventing
                    particle pegging while dampening kinetic impact.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                    <span className="block text-xs text-slate-400">Aperture Range</span>
                    <span className="text-lg font-bold text-amber-400">0.5 mm to 2.0 mm</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                    <span className="block text-xs text-slate-400">Working Life</span>
                    <span className="text-lg font-bold text-amber-400">2,000+ Operating Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 4: Manufactured Sand (M-Sand) Silt & Fines Regulation */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Quality Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Manufactured Sand (M-Sand) Silt & Fines Regulation (IS 383:2016)
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                With natural river sand mining heavily restricted across India, quarry operators produce Manufactured
                Sand (M-Sand) from crushed rock. However, dry crusher dust contains 12% to 18% micro-fines (&lt;75 micron),
                far exceeding the 3% limit mandated by IS 383:2016 for concrete aggregate.
              </p>
            </div>

            {/* IS 383 Benchmark Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mb-10">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4 border-b border-slate-200">Critical Quality Parameter</th>
                    <th className="py-3.5 px-4 border-b border-slate-200">Raw Crusher Feed</th>
                    <th className="py-3.5 px-4 border-b border-slate-200">Post-Bucket Wheel Washed</th>
                    <th className="py-3.5 px-4 border-b border-slate-200">Engineering & Ready-Mix Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {msandParameters.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{item.param}</td>
                      <td className="py-3.5 px-4 text-rose-700 font-mono text-xs">{item.raw}</td>
                      <td className="py-3.5 px-4 text-emerald-700 font-bold font-mono text-xs">{item.washed}</td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">{item.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quality Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <h4 className="font-bold text-slate-950 mb-2 flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  Cement Economy
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Removing excessive silt from M-Sand drops the required water-cement ratio by 15%, saving concrete batching
                  plants 25 to 40 kg of OPC cement per cubic meter of concrete.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <h4 className="font-bold text-slate-950 mb-2 flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  Pumping Reliability
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Zone II grading prevents segregation and line choking in commercial concrete boom placer pipelines,
                  allowing continuous pouring in multi-story infrastructure projects.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <h4 className="font-bold text-slate-950 mb-2 flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  Plaster Sand Quality
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  By fitting finer 0.8 mm polyurethane screens, the bucket washer delivers premium plaster sand (P-Sand)
                  with zero clay balls, preventing surface cracking in interior wall finishes.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 5: Heavy Gearbox Drive & Submerged Bearing Sealing */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Mechanical Reliability
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Heavy Gearbox Drive & Submerged Bearing Sealing Architecture
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                In wet sand plants, bearing and gearbox failure is the primary cause of unplanned downtime. Minerals Solutions
                engineers out this failure mode through elevated outboard bearing pedestals and multi-chamber labyrinth sealing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {driveFeatures.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-800">
                      <Cog className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-950">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Workshop Fabrication Standards Box */}
            <div className="mt-12 p-6 rounded-2xl bg-amber-50/60 border border-amber-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-950 text-base">Dahegam Quality Assurance Standards</h4>
                  <p className="text-sm text-slate-700 mt-1">
                    Every MS-BWW wheel shaft is CNC turned from forged EN-8/EN-9 steel alloy and dynamically balanced to eliminate
                    harmonic vibration under maximum dredged slurry load.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-amber-400 text-xs font-bold text-slate-900 shadow-xs">
                    <ShieldCheck className="h-4 w-4 text-amber-700" /> 100% Workshop Tested
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 6: Plant Layout Integration & Cross-Pillar Synergies */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Turnkey Plant Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Upstream & Downstream Integration Across Minerals Solutions Machinery
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                The bucket wheel sand washer operates as the central desilting anchor within complete wet processing plants.
                Connect it seamlessly with our material handling and drying equipment manufactured in Dahegam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Fine Sand Recovery Sibling Link */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                    Sibling Equipment
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">Fine Sand Hydrocyclone Recovery</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Capture +75 micron fine sand overflowing from the bucket wheel settling weir with our polyurethane
                    hydrocyclone and high-frequency dewatering screen unit.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/products/sand-washing-plants/hydrocyclone-sand-separator/"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors"
                  >
                    View Hydrocyclone Unit <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Stockpile Belt Conveyors Cross-Pillar Link */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                    Cross-Pillar Material Handling
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">Troughed Stockpile Conveyors</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Discharge dewatered M-Sand directly onto our 650 mm to 1,000 mm heavy troughed belt conveyors for radial
                    kidney stockpiling and front-end wheel loader loading.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/products/industrial-conveyors-spares/belt-conveyors/"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors"
                  >
                    View Troughed Conveyors <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Downstream Thermal Sand Dryer Cross-Pillar Link */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                    Thermal Processing
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">Industrial Rotary Sand Dryers</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    For dry-mix mortar, ready-mix tile adhesives, and foundry core sand, dry washed M-Sand from 14% down to
                    &lt;0.5% moisture with our rotary sand drum dryers.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/products/industrial-rotary-dryers/sand-dryer/"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors"
                  >
                    View Rotary Sand Dryers <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 7: Frequently Asked Questions on Wheel Sand Washers */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Quarry Operations FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Frequently Asked Questions on Wheel Sand Washers
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Clear engineering answers to guide crusher owners, mining contractors, and project directors in selecting
                the optimal sand washing configuration.
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
                  Order Your Bucket Wheel Sand Washer Directly from the Manufacturer
                </h2>
                <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Eliminate middleman margins. Inspect heavy fabrication in progress at our Dahegam workshop, review raw steel
                  test certificates, and commission your sand washing plant with OEM warranty and lifetime spare support.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Factory className="h-4 w-4 text-amber-400" />
                    <span>Zak GIDC, Dahegam Facility</span>
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
