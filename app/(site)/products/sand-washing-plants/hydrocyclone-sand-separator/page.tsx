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
  TrendingUp,
  CircleDollarSign,
  Cpu,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Hydrocyclone Fine Sand Recovery Unit | Minerals Solutions',
  },
  description: 'Recover 95%+ fine sand down to 75 microns with high-pressure hydrocyclone sand separators (60 to 120 m³/hr). Built by Minerals Solutions in Zak GIDC.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/sand-washing-plants/hydrocyclone-sand-separator/',
  },
  openGraph: {
    title: 'Hydrocyclone Fine Sand Recovery Unit | Minerals Solutions',
    description:
      'High efficiency hydrocyclone fine sand recovery plants (30 to 150 m3/hr slurry). Recover 95% of 75-micron fines. Zak GIDC, Dahegam, Gujarat.',
    url: `${company.siteUrl}/products/sand-washing-plants/hydrocyclone-sand-separator/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hydrocyclone Fine Sand Recovery Unit | Minerals Solutions',
    description:
      'High efficiency hydrocyclone fine sand recovery plants (30 to 150 m3/hr slurry). Recover 95% of 75-micron fines. Zak GIDC, Dahegam, Gujarat.',
    images: [defaultTwitterImage],
  },
};

export default function HydrocycloneFineSandRecoveryPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const rfqLink = '/request-quote/?product=hydrocyclone-sand-separator';
  const whatsappUrl = `https://wa.me/916352453050?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering sizing sheet and quotation for a Hydrocyclone Fine Sand Recovery Unit.'
  )}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Sand Washing Plants', href: '/products/sand-washing-plants/' },
    { label: 'Hydrocyclone Fine Sand Recovery', href: '/products/sand-washing-plants/hydrocyclone-sand-separator/' },
  ];

  const models = [
    {
      model: 'MS-FSR-30',
      slurryFlow: '30 – 45 m³/hr',
      solidRecovery: '5 – 10 TPH',
      cycloneDia: 'Ø 250 mm (PU Lined)',
      screenDeck: '1,000 × 2,000 mm',
      pumpPower: '15 HP (11 kW)',
      screenPower: '2.5 HP (2×0.9 kW)',
      cutPoint: '75 – 150 Micron',
    },
    {
      model: 'MS-FSR-60',
      slurryFlow: '60 – 85 m³/hr',
      solidRecovery: '10 – 18 TPH',
      cycloneDia: 'Ø 350 mm (PU Lined)',
      screenDeck: '1,200 × 2,400 mm',
      pumpPower: '25 HP (18.5 kW)',
      screenPower: '4.0 HP (2×1.5 kW)',
      cutPoint: '75 – 150 Micron',
    },
    {
      model: 'MS-FSR-100',
      slurryFlow: '90 – 120 m³/hr',
      solidRecovery: '18 – 26 TPH',
      cycloneDia: 'Ø 500 mm (PU Lined)',
      screenDeck: '1,500 × 3,000 mm',
      pumpPower: '35 HP (26 kW)',
      screenPower: '6.0 HP (2×2.2 kW)',
      cutPoint: '63 – 150 Micron',
    },
    {
      model: 'MS-FSR-150',
      slurryFlow: '130 – 170 m³/hr',
      solidRecovery: '25 – 35 TPH',
      cycloneDia: 'Twin Ø 350 mm Cluster',
      screenDeck: '1,800 × 3,600 mm',
      pumpPower: '50 HP (37 kW)',
      screenPower: '8.0 HP (2×3.0 kW)',
      cutPoint: '63 – 150 Micron',
    },
    {
      model: 'MS-FSR-200',
      slurryFlow: '180 – 220 m³/hr',
      solidRecovery: '32 – 45 TPH',
      cycloneDia: 'Twin Ø 500 mm Cluster',
      screenDeck: '2,000 × 4,000 mm',
      pumpPower: '60 HP (45 kW)',
      screenPower: '10.0 HP (2×3.7 kW)',
      cutPoint: '50 – 150 Micron',
    },
  ];

  const cycloneComponents = [
    {
      name: 'Involute Tangential Slurry Feed Inlet',
      desc: 'The curved involute geometry guides incoming slurry smoothly along the inner cylindrical circumference, reducing kinetic turbulence, eliminating eddy currents, and maximizing initial rotational angular velocity.',
      icon: <RotateCw className="h-5 w-5 text-cyan-600" />,
    },
    {
      name: 'High-Wear Polyurethane Vortex Finder',
      desc: 'Precision molded from 90–95 Shore A polyurethane, the vortex finder column prevents unclassified feed short-circuiting directly into the overflow, ensuring sharp particle separation cut-points.',
      icon: <Filter className="h-5 w-5 text-cyan-600" />,
    },
    {
      name: 'Modular Molded Polyurethane Cone Sections',
      desc: 'Flanged modular cone liners allow quick replacement of high-wear bottom apex zones without changing upper cylinder bodies. Exhibits 4x longer lifespan than Nihard or high-manganese cast alloys in silica slurry.',
      icon: <Layers className="h-5 w-5 text-cyan-600" />,
    },
    {
      name: 'Adjustable Apex Orifice (Spigot)',
      desc: 'Calibrated ceramic or polyurethane apex discharge nozzle controls underflow solid concentration (>70% solids), forming a steady umbrella spray while preventing air core collapse or roping.',
      icon: <Gauge className="h-5 w-5 text-cyan-600" />,
    },
  ];

  const dewateringFeatures = [
    {
      title: 'High-Frequency 4G–5.5G Linear Excitation',
      desc: 'Twin synchronized unbalance vibratory motors run in counter-rotation, generating high-g linear acceleration that forces trapped water out of the fine sand capillary matrix.',
    },
    {
      title: '5° Upward Inclined Screen Deck',
      desc: 'The counter-slope screen angle creates an uphill travel resistance, forming a dense dynamic bed of fine sand that acts as an autogenous filter cake, preventing fines loss.',
    },
    {
      title: 'Modular PU Screen Panels (0.3 – 0.8 mm)',
      desc: 'Injection-molded polyurethane panels with tapered self-relieving slots resist blinding and pegging, providing maximum open area and consistent dewatering performance.',
    },
    {
      title: '12% – 15% Final Sand Moisture',
      desc: 'Discharges stackable, drippable sand directly onto stockpile belt conveyors without slurry pooling, water runoff, or conveyor belt slippage.',
    },
  ];

  const faqs = [
    {
      question: 'Why do bucket wheels and spiral classifiers lose valuable fine sand?',
      answer:
        'Bucket wheel sand washers and spiral classifiers rely primarily on gravity settling in an unpressurized water basin. According to Stokes Law, particles smaller than 150 microns (and especially below 75 microns) have very slow settling velocities. When washing at high throughputs, water velocity carrying overflow into slurry ponds sweeps these valuable fines away. Minerals Solutions hydrocyclones use centrifugal acceleration exceeding 50G to force these micro-particles to the outer wall and recover over 95% of +75 micron fines.',
    },
    {
      question: 'What is the quality and commercial value of the recovered fine sand?',
      answer:
        'The recovered fine sand consists of clean, washed 0.075 mm to 0.8 mm silica/basalt particles free from clay slimes. In the Indian market, this recovered fraction is classified as premium Plaster Sand (P-Sand) meeting IS 1542 specifications. Quarries sell this material at ₹350 to ₹500 per metric ton for plastering, dry-mix mortars, tile adhesives, and block manufacturing, transforming a waste disposal cost into a lucrative revenue stream.',
    },
    {
      question: 'How does the hydrocyclone eliminate settling pond dredging expenses?',
      answer:
        'Conventional sand washing plants discharge fine sand slurry into settling ponds. Without a fine sand recovery unit, a 100 TPH plant dumps 80 to 120 tons of sand daily into the pond, rapidly silting it up. Plant owners must spend ₹1,20,000 to ₹1,80,000 every month renting excavators and dumpers to dredge and desilt ponds. By stripping out 95% of solid sand upfront, settling ponds remain virtually sand-free, drastically extending dredging cycles and cutting diesel expenses.',
    },
    {
      question: 'What type of slurry pump is integrated into the MS-FSR system?',
      answer:
        'We integrate heavy-duty centrifugal horizontal slurry pumps equipped with high-chrome alloy impellers (27% Chromium, 60–65 HRC) and thick natural rubber or alloy casing liners. The pump utilizes an oversized shaft, heavy spherical roller bearings, and dynamic expeller seals (or mechanical gland seals) designed to handle abrasive quartz and basalt slurries with solid concentrations up to 30% by weight.',
    },
    {
      question: 'Can the hydrocyclone unit be retrofitted to an existing sand washing plant?',
      answer:
        'Yes. Over 60% of our installations across Gujarat, Rajasthan, and Maharashtra are retrofits to existing bucket wheel washers, spiral classifiers, or log washers. The unit connects directly to the overflow launder of your existing washer; slurry drains into our compact sump tank, where the slurry pump feeds the hydrocyclone cluster mounted overhead above the dewatering screen.',
      answerNode: (
        <>
          Yes. Over 60% of our installations across Gujarat, Rajasthan, and Maharashtra are retrofits to existing{' '}
          <Link href="/products/sand-washing-plants/bucket-wheel-sand-washer/" className="font-semibold text-cyan-800 hover:underline">
            bucket wheel washers
          </Link>
          , spiral classifiers, or{' '}
          <Link href="/products/sand-washing-plants/mineral-log-washer/" className="font-semibold text-cyan-800 hover:underline">
            log washers
          </Link>
          . The unit connects directly to the overflow launder of your existing washer; slurry drains into our compact sump tank, where the slurry pump feeds the hydrocyclone cluster mounted overhead above the dewatering screen.
        </>
      ),
    },
    {
      question: 'What maintenance is required and what are the primary wear parts?',
      answer:
        'Primary wear parts include the hydrocyclone apex nozzle (spigot), vortex finder, and slurry pump impeller. Because our hydrocyclone components are molded from high-resilience polyurethane (90–95 Shore A), apex spigots typically last 1,200 to 1,800 operating hours. Polyurethane dewatering screen decks routinely operate for 2,500+ hours. All spare parts are manufactured in-house at our Zak GIDC, Dahegam facility for immediate off-the-shelf dispatch.',
      answerNode: (
        <>
          Primary wear parts include the hydrocyclone apex nozzle (spigot), vortex finder, and slurry pump impeller. Because our hydrocyclone components are molded from high-resilience polyurethane (90–95 Shore A), apex spigots typically last 1,200 to 1,800 operating hours. Polyurethane dewatering screen decks routinely operate for 2,500+ hours. All spare parts are manufactured in-house at our{' '}
          <Link href="/manufacturing/" className="font-semibold text-cyan-800 hover:underline">
            Zak GIDC, Dahegam facility
          </Link>{' '}
          for immediate off-the-shelf dispatch.
        </>
      ),
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Hydrocyclone Fine Sand Recovery & Dewatering Unit',
      image: `${company.siteUrl}/images/products/mineral-processing/circular-vibrating-screen-lg.webp`,
      description:
        'High-efficiency hydrocyclone fine sand recovery and dewatering plants (30 to 220 m3/hr slurry). Recovers 95%+ of 75-micron fines from washing plant overflow, eliminating pond dredging and generating saleable plaster sand.',
      brand: {
        '@type': 'Brand',
        name: 'Minerals Solutions',
      },
      sku: 'MS-FSR-SERIES',
      mpn: 'MS-FSR-60-120',
      manufacturer: {
        '@type': 'Organization',
        name: company.legalName,
        url: company.siteUrl,
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: 750000,
        highPrice: 2400000,
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
          name: 'Slurry Flow Capacity',
          value: '30 to 220 m³/hr',
        },
        {
          '@type': 'PropertyValue',
          name: 'Solid Fine Sand Recovery',
          value: '5 to 45 TPH (95%+ recovery of +75 micron particles)',
        },
        {
          '@type': 'PropertyValue',
          name: 'Hydrocyclone Body Material',
          value: 'High-Resilience Cast Polyurethane (90–95 Shore A)',
        },
        {
          '@type': 'PropertyValue',
          name: 'Dewatering Screen G-Force',
          value: '4.0G to 5.5G Linear Acceleration',
        },
        {
          '@type': 'PropertyValue',
          name: 'Final Product Moisture',
          value: '12% to 15% Gravity/Vibration Dewatered (Drippable Sand)',
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
          name: 'Hydrocyclone Sand Separator',
          item: `${company.siteUrl}/products/sand-washing-plants/hydrocyclone-sand-separator/`,
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

      <div className="min-h-screen bg-white text-slate-900">
        {/* Breadcrumb Navigation Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-3">
          <Container>
            <Breadcrumbs items={breadcrumbs} />
          </Container>
        </section>

        {/* Hero Section */}
        <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-cyan-50/40 via-white to-white">
          <Container size="hero">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading, Commercial Positioning & Badges */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-300 text-cyan-950 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Filter className="h-3.5 w-3.5 text-cyan-700 animate-pulse" />
                  Centrifugal Fines Separation & High-G Dewatering
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
                  Hydrocyclone Fine Sand Recovery & Dewatering Units
                </h1>

                <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                  Stop losing 15% to 25% of valuable fine sand into your slurry settling ponds. Manufactured in Zak GIDC,
                  Dahegam, Minerals Solutions hydrocyclone systems capture 95%+ of 75–150 micron particles, producing
                  lucrative, dry plaster sand while slashing pond dredging costs.
                </p>

                {/* Key Technical Highlights Badges */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Slurry Volume</span>
                    <span className="text-base font-bold text-slate-900">30 – 220 m³/h</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Fines Recovery</span>
                    <span className="text-base font-bold text-cyan-700">&gt; 95% (+75µm)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Solid Yield</span>
                    <span className="text-base font-bold text-slate-900">Up to 45 TPH</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Final Moisture</span>
                    <span className="text-base font-bold text-emerald-700">12% – 15%</span>
                  </div>
                </div>

                {/* Commercial CTA Group */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href={rfqLink} variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                    Request Sizing & ROI Sheet
                  </Button>
                  <Button href={whatsappUrl} variant="outline" size="lg" external icon={<Phone className="h-4 w-4" />}>
                    WhatsApp Flowsheet
                  </Button>
                </div>

                {/* Quick Trust Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> High-Chrome (27% Cr) Slurry Pump
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> 95 Shore A Polyurethane Liner
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> High-G Linear Motion Screen
                  </span>
                </div>
              </div>

              {/* Right Column: Equipment Visual */}
              <div className="lg:col-span-5 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 shadow-xl bg-slate-900">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11] 2xl:aspect-[4/3] w-full min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] xl:min-h-[440px] 2xl:min-h-[480px] overflow-hidden bg-slate-900">
                    <Image
                      src="/images/products/mineral-processing/circular-vibrating-screen-lg.webp"
                      alt="Hydrocyclone Fine Sand Recovery and Dewatering Plant Fabricated by Minerals Solutions in Dahegam Gujarat" width={800} height={600}
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                    />
                  </div>
                  <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold truncate">MS-FSR Skid-Mounted Unit</p>
                      <p className="text-xs text-slate-400">Cyclone + Dewatering Screen + Sump</p>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      95% Fines Catch
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
                  <strong className="text-slate-950 font-semibold">What is a hydrocyclone fine sand recovery unit? </strong>
                  A hydrocyclone fine sand recovery unit is a specialized centrifugal slurry separation machine engineered to capture and dewater saleable 75 to 150 micron (100–200 mesh) fine sand from quarry wash-plant effluent streams. Fabricated at Minerals Solutions in Zak GIDC, Dahegam, the compact skid comprises a heavy-duty slurry pump, high-shear vortex hydrocyclone lined with 95% high-alumina ceramic or 25mm cast polyurethane, and a high-frequency linear vibrating dewatering screen. Processing slurry flows from 60 to 120 m³/hr with 20% to 30% solids, incoming pulp enters tangentially at 0.15 to 0.25 MPa. Centrifugal forces exceeding 500 Gs separate dense fine silica downward into an underflow spigot while water and ultra-fine silt (under 40 microns) exit through the overflow vortex finder, recovering over 95% of saleable plaster sand at 12% to 14% stackable moisture for commercial sale.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: Centrifugal Slurry Separation & 75-Micron Fines Conservation */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-cyan-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Fluid Dynamics & Classification
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Centrifugal Slurry Separation & 75-Micron Fines Conservation
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Quarries operating{' '}
                <Link href="/products/sand-washing-plants/bucket-wheel-sand-washer/" className="font-semibold text-cyan-800 hover:underline">
                  bucket wheels
                </Link>{' '}
                or{' '}
                <Link href="/products/sand-washing-plants/mineral-log-washer/" className="font-semibold text-cyan-800 hover:underline">
                  log washers
                </Link>{' '}
                lose massive volumes of valuable fines because fine sand
                particles (&lt;150µm) cannot settle quickly enough against upward water currents in washing tanks.
                Centrifugal hydrocyclone classification solves this physical limitation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-800 mb-4 font-bold">
                  50G+
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Centrifugal Acceleration</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  By replacing slow 1G gravity sedimentation with 50G to 80G centrifugal forces, particle settling velocity
                  increases by orders of magnitude, capturing micro-fines down to 45 microns.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-800 mb-4 font-bold">
                  95%+
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Fines Recovery Ratio</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Recovers 95% of solid particles greater than 75 microns (200 mesh), ensuring that valuable construction
                  and plaster aggregates remain in product stockpiles rather than settling silt beds.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-800 mb-4 font-bold">
                  IS 1542
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Plaster Sand Quality</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The dewatered fine fraction has clean particle distribution ideal for wall plastering, dry-mix mortars,
                  and ready-mix concrete sand blending, fetching top-tier market prices.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Polyurethane-Lined Hydrocyclone Geometry & Vortex Mechanics */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-cyan-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Internal Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Polyurethane-Lined Hydrocyclone Geometry & Vortex Mechanics
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Every component of the Minerals Solutions hydrocyclone is calculated to ensure smooth laminar acceleration,
                clean vortex stability, and extreme resistance against abrasive quartz erosion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cycloneComponents.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-950">{item.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Polyurethane Metallurgy Callout */}
            <div className="mt-10 p-6 rounded-2xl bg-cyan-900 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <span className="text-xs uppercase tracking-wider font-semibold text-cyan-300 block mb-1">
                    Wear Part Longevity
                  </span>
                  <h4 className="text-lg font-bold">Hot-Cast Polyurethane (90–95 Shore A Hardness)</h4>
                  <p className="text-sm text-cyan-100 mt-2 leading-relaxed">
                    Unlike rubber-lined steel cyclones that delaminate under high-velocity slurry shear, Minerals Solutions
                    uses monolithic centrifugal cast polyurethane. It absorbs particle impact without chipping and resists
                    corrosive mine water, ensuring consistent vortex geometry over thousands of operating hours.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-end">
                  <div className="p-4 rounded-xl bg-cyan-950/80 border border-cyan-700 text-center w-full">
                    <span className="block text-xs uppercase tracking-wider text-cyan-300 font-medium">Apex Spigot Life</span>
                    <span className="text-2xl font-extrabold text-white">1,500 – 1,800 Hrs</span>
                    <span className="block text-xs text-cyan-300 mt-1">4x Longer than Cast Iron</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: High-Frequency Polyurethane Dewatering Screen Integration */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-cyan-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Dewatering Dynamics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                High-Frequency Polyurethane Dewatering Screen Integration
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Hydrocyclone underflow still contains roughly 30% moisture. Direct gravity filtration cannot dewater fine
                sand due to surface tension. Our integrated high-frequency linear vibrating screen strips interstitial water,
                delivering dry, conveyable aggregate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dewateringFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="h-8 w-8 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-sm mb-3">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-slate-950 text-base mb-2">{feat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dewatering Screen Bed Physics Diagram Box */}
            <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h4 className="font-bold text-slate-950 text-base mb-2 flex items-center gap-2">
                <Filter className="h-5 w-5 text-cyan-600" />
                The Self-Filtering Bed Phenomenon on 5° Sloped Decks
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                As cyclone underflow hits the backplate of the upward-sloping deck, coarse particles rapidly form a permeable
                cake. As this bed travels uphill under 4G linear acceleration, it serves as a natural micro-filter: trapped water
                percolates through the bed into the underscreen sump while fine sand particles remain trapped on top, preventing
                loss through 0.5 mm screen openings.
              </p>
            </div>
          </Container>
        </section>

        {/* Section 4: Technical Specifications & Slurry Ratings (MS-FSR Series) */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-cyan-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Engineered Models
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Technical Specifications & Slurry Ratings (MS-FSR Series)
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Standard skid-mounted units include slurry sump tank, high-chrome heavy slurry pump, overhead polyurethane
                cyclone cluster, and high-frequency dewatering screen deck fabricated in Dahegam.
              </p>
            </div>

            {/* Technical Specification Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold tracking-wider">
                  <tr>
                    <th className="py-4 px-4 border-b border-slate-200">Model</th>
                    <th className="py-4 px-4 border-b border-slate-200">Slurry Flow</th>
                    <th className="py-4 px-4 border-b border-slate-200">Fines Recovery</th>
                    <th className="py-4 px-4 border-b border-slate-200">Hydrocyclone Spec</th>
                    <th className="py-4 px-4 border-b border-slate-200">Screen Deck (W×L)</th>
                    <th className="py-4 px-4 border-b border-slate-200">Pump Motor</th>
                    <th className="py-4 px-4 border-b border-slate-200">Vibrator Power</th>
                    <th className="py-4 px-4 border-b border-slate-200">Cut-Point (d50)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {models.map((item, idx) => (
                    <tr key={item.model} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-3.5 px-4 font-bold text-slate-950 font-mono">{item.model}</td>
                      <td className="py-3.5 px-4 font-semibold text-cyan-700">{item.slurryFlow}</td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{item.solidRecovery}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.cycloneDia}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.screenDeck}</td>
                      <td className="py-3.5 px-4 text-slate-900 font-medium">{item.pumpPower}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.screenPower}</td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">{item.cutPoint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500 italic">
              * Note: Custom twin and four-cyclone clusters can be configured for massive aggregate plants exceeding 300 m³/hr slurry throughput. Skid mounting enables rapid 2-day installation at your quarry site.
            </p>
          </Container>
        </section>

        {/* Section 5: Economic ROI: Eliminating Slurry Settling Pond Dredging Costs */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-cyan-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Commercial Payback Economics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Economic ROI: Eliminating Slurry Settling Pond Dredging Costs
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Investing in a hydrocyclone recovery unit is not an equipment expense, it is a self-liquidating capital
                asset that typically achieves full payback in 4 to 6 months of quarry operation.
              </p>
            </div>

            {/* ROI Breakdown Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pillar 1: New Revenue */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-700 mb-3">
                    <CircleDollarSign className="h-6 w-6" />
                    <span className="text-xs font-bold uppercase tracking-wider">Revenue Creation</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-2">Plaster Sand Production</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Recovering 15 TPH of fine sand across a 10-hour shift yields 150 tons daily. Sold at ₹350/ton, this creates
                    <strong className="text-slate-900 font-semibold"> ₹52,500 daily revenue</strong> from sand previously discarded as waste.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-medium">Monthly Added Income</span>
                  <p className="text-xl font-extrabold text-emerald-700">₹ 13.5 Lakhs / Month</p>
                </div>
              </div>

              {/* Pillar 2: Pond Dredging Elimination */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-700 mb-3">
                    <TrendingDown className="h-6 w-6" />
                    <span className="text-xs font-bold uppercase tracking-wider">OPEX Reduction</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-2">Zero Excavator Dredging</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Settling ponds stay free of silt beds. Eliminates continuous excavator hire (₹1,500/hr) and dumper hauling,
                    saving over <strong className="text-slate-900 font-semibold">₹1,50,000 to ₹2,00,000 monthly</strong> in operating expenses.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-medium">Monthly Dredging Savings</span>
                  <p className="text-xl font-extrabold text-cyan-700">₹ 1.8 Lakhs / Month</p>
                </div>
              </div>

              {/* Pillar 3: Fast Capital Payback */}
              <div className="p-6 rounded-2xl bg-cyan-900 text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-300 mb-3">
                    <TrendingUp className="h-6 w-6" />
                    <span className="text-xs font-bold uppercase tracking-wider">Financial Payback</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Full Capital Payback</h3>
                  <p className="text-sm text-cyan-100 leading-relaxed">
                    With combined monthly revenue and dredging savings exceeding ₹15,00,000, standard MS-FSR systems
                    (₹7,50,000 to ₹18,00,000) recover 100% of purchase and erection costs in less than 4 to 6 months.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-cyan-800">
                  <span className="text-xs text-cyan-300 font-medium">Calculated Break-Even</span>
                  <p className="text-2xl font-black text-amber-300">Under 120 Days</p>
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
                href="/products/sand-washing-plants/"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#DA020D] transition-colors shrink-0"
              >
                Explore Full Sand Washing & Mineral Processing Hub <ChevronRight className="w-4 h-4 text-[#DA020D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sibling Spoke 1 */}
              <div className="relative rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#DA020D]/40 transition-all flex flex-col justify-between group">
                <div className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src="/images/products/mineral-processing/river-sand-washing-plant-md.webp"
                    alt="Silica Sand Washing Plant Circuit"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/sand-washing-plants/silica-sand-washing-plant/" className="hover:underline after:absolute after:inset-0">
                        Silica Sand Washing Plant System
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Turnkey wet-processing line for high-purity glass, foundry, and construction sand.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span aria-hidden="true" className="font-bold text-[#DA020D] hover:text-[#900] text-xs inline-flex items-center gap-1 group/link">
                      <span>View Machine Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Sibling Spoke 2 */}
              <div className="relative rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#DA020D]/40 transition-all flex flex-col justify-between group">
                <div className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src="/images/products/mineral-processing/river-sand-washing-plant-variant-md.webp"
                    alt="Bucket Wheel Sand Washer"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/sand-washing-plants/bucket-wheel-sand-washer/" className="hover:underline after:absolute after:inset-0">
                        Bucket Wheel Sand Washer System
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      High-volume sand washing wheel separating clays from washed gravel and M-Sand.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span aria-hidden="true" className="font-bold text-[#DA020D] hover:text-[#900] text-xs inline-flex items-center gap-1 group/link">
                      <span>View Machine Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Cross-Pillar Machine */}
              <div className="relative rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#DA020D]/40 transition-all flex flex-col justify-between group">
                <div className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src="/images/products/conveyor-systems/conveyor-belt-system-truss-md.webp"
                    alt="Troughed Belt Conveyor System"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/industrial-conveyors-spares/belt-conveyors/" className="hover:underline after:absolute after:inset-0">
                        Industrial Belt Conveyor Systems
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Downstream troughed conveyor elevating dewatered fine sand to stockyard piles.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span aria-hidden="true" className="font-bold text-[#DA020D] hover:text-[#900] text-xs inline-flex items-center gap-1 group/link">
                      <span>Explore Complementary Machine</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 7: Frequently Asked Questions on Hydrocyclone Fines Recovery */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-cyan-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Engineering Answers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Frequently Asked Questions on Hydrocyclone Fines Recovery
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Detailed technical guidance to help plant managers optimize cyclone pressures, apex spigot sizing, and
                dewatering screen operations.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed pl-8">{('answerNode' in faq && faq.answerNode) ? faq.answerNode : faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 8: Direct Workshop Procurement & RFQ Conversion */}
        <section className="py-14 lg:py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider inline-block mb-4">
                  OEM Skid Fabrication &bull; Zak GIDC, Dahegam
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight font-display">
                  Recover Lost Fine Sand & Eliminate Settling Pond Costs
                </h2>
                <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Send us your slurry flow rate or current sand washing plant specs. Our engineering team at Zak GIDC, Dahegam
                  will calculate your exact fine sand recovery tonnage and custom-build your skid unit.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Factory className="h-4 w-4 text-cyan-400" />
                    <span>Zak GIDC, Dahegam Workshop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HardHat className="h-4 w-4 text-cyan-400" />
                    <span>Full Plant Site Commissioning</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <Button href={rfqLink} variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  Request Recovery Sizing Sheet
                </Button>
                <Button href={`tel:${cleanPhone}`} variant="outline" size="lg" external icon={<Phone className="h-4 w-4" />}>
                  Call: {primaryPhone}
                </Button>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-4 py-1"
                >
                  Direct WhatsApp Engineering Chat &rarr;
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

