import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Flame,
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ChevronRight,
  Info,
  Layers,
  Thermometer,
  Gauge,
  Factory,
  HelpCircle,
  Scale,
  Maximize2,
  Zap,
  RotateCw,
  Sparkles,
  Cog,
  Wrench,
  Boxes,
  Waves,
  ShieldAlert,
  Sprout,
  TreeDeciduous,
  Wind,
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
    absolute: 'Biomass & Sawdust Rotary Dryers | Minerals Solutions',
  },
  description: 'Fabricate industrial biomass and sawdust rotary dryers (500 to 5,000 kg/hr) with anti-clogging flights & spark arrestors. Built at Zak GIDC, Dahegam works.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/biomass-sawdust-dryer/',
  },
  openGraph: {
    title: 'Biomass & Sawdust Rotary Dryer Line | Minerals Solutions',
    description:
      'Industrial biomass and sawdust rotary dryers (500 to 5,000 kg/hr). Anti-clogging flights & spark arrestors. Fabricated in Zak GIDC, Dahegam.',
    url: `${company.siteUrl}/products/industrial-rotary-dryers/biomass-sawdust-dryer/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biomass & Sawdust Rotary Dryer Manufacturer | Minerals Solutions',
    description:
      'Industrial biomass and sawdust rotary dryers (500 to 5,000 kg/hr). Anti-clogging flights & spark arrestors. Fabricated in Zak GIDC, Dahegam.',
    images: [defaultTwitterImage],
  },
};

export default function BiomassSawdustDryerPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const rfqLink = '/request-quote/?product=biomass-sawdust-dryer';
  const whatsappUrl = `https://wa.me/916352453050?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering quotation and layout drawing for a Biomass & Sawdust Rotary Dryer.'
  )}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Industrial Rotary Dryers', href: '/products/industrial-rotary-dryers/' },
    { label: 'Biomass & Sawdust Dryer', href: '/products/industrial-rotary-dryers/biomass-sawdust-dryer/' },
  ];

  const models = [
    {
      model: 'MS-BMD-500',
      capacity: '500 kg/hr',
      drumDia: '1,000 mm',
      length: '6.0 m',
      motorPower: '5 HP (3.7 kW)',
      feedMoisture: '45% – 55%',
      exitMoisture: '10% – 12%',
      cycloneModel: 'Single High-Efficiency Cyclone',
    },
    {
      model: 'MS-BMD-1000',
      capacity: '1,000 kg/hr',
      drumDia: '1,200 mm',
      length: '8.0 m',
      motorPower: '7.5 HP (5.5 kW)',
      feedMoisture: '45% – 55%',
      exitMoisture: '10% – 12%',
      cycloneModel: 'Twin Cyclone with Air-Lock',
    },
    {
      model: 'MS-BMD-1500',
      capacity: '1,500 kg/hr (Flagship)',
      drumDia: '1,500 mm',
      length: '10.5 m',
      motorPower: '12.5 HP (9.3 kW)',
      feedMoisture: '50% – 60%',
      exitMoisture: '10% – 12%',
      cycloneModel: 'Twin Heavy Cyclone Assembly',
    },
    {
      model: 'MS-BMD-3000',
      capacity: '3,000 kg/hr (3 TPH)',
      drumDia: '1,800 mm',
      length: '14.0 m',
      motorPower: '20 HP (15 kW)',
      feedMoisture: '50% – 60%',
      exitMoisture: '10% – 12%',
      cycloneModel: 'Quad Cyclone Multi-Draft',
    },
    {
      model: 'MS-BMD-5000',
      capacity: '5,000 kg/hr (5 TPH)',
      drumDia: '2,200 mm',
      length: '18.0 m',
      motorPower: '30 HP (22 kW)',
      feedMoisture: '50% – 60%',
      exitMoisture: '10% – 12%',
      cycloneModel: 'Multi-Cyclone with Secondary Scrubber',
    },
  ];

  const safetyFeatures = [
    {
      title: 'Cyclone Spark Arrestor & Quench Chamber',
      badge: 'Deflagration Prevention',
      icon: ShieldAlert,
      desc: 'Refractory-lined dropout box positioned between the combustion furnace and the dryer drum entrance. Heavy inertial baffles knock out incandescent glowing embers and sparks before hot gas touches combustible biomass particles.',
    },
    {
      title: 'Automated Cold-Air Dilution Dampers',
      badge: 'Thermal Runaway Guard',
      icon: Thermometer,
      desc: 'High-speed pneumatic dampers connected to dual drum-inlet thermocouples. If inlet temperature exceeds the programmed setpoint (typically 220°C for wood or 160°C for coir), fresh ambient air instantly blends to prevent fiber ignition.',
    },
    {
      title: 'Explosion Relief Rupture Vents',
      badge: 'NFPA 68 / 69 Compliance',
      icon: AlertTriangle,
      desc: 'Calibrated aluminum bursting panels installed on the cyclone collector, duct transitions, and drum discharge hood. Directs excess deflagration pressure upward and safely outdoors during sudden dust deflagration events.',
    },
    {
      title: 'Emergency Water Fogging Quench Nozzles',
      badge: 'Automatic Suppression',
      icon: Waves,
      desc: 'High-pressure atomizing misting nozzles integrated into the feed chute and cyclone drop box, triggered by optical flame detectors or thermal runaway sensors for sub-second fire suppression.',
    },
  ];

  const feedMaterials = [
    {
      material: 'Timber Sawdust & Wood Shavings',
      bulkDensity: '160 – 220 kg/m³',
      moistureDrop: '50% down to 10%',
      output: 'High-density biomass briquettes & white wood fuel pellets.',
    },
    {
      material: 'Raw Coconut Coir Pith (Cocopeat)',
      bulkDensity: '100 – 150 kg/m³',
      moistureDrop: '65% down to 14%',
      output: 'Compressed 5 kg cocopeat horticultural blocks & animal bedding.',
    },
    {
      material: 'Groundnut Shell & Mustard Stalk Fines',
      bulkDensity: '180 – 250 kg/m³',
      moistureDrop: '35% down to 10%',
      output: 'Agricultural biomass boiler pellets & gasifier fuel briquettes.',
    },
    {
      material: 'Bagasse & Crushed Sugarcane Pith',
      bulkDensity: '120 – 180 kg/m³',
      moistureDrop: '52% down to 12%',
      output: 'Captive sugar mill cogeneration boilers & molded fiber pulp.',
    },
    {
      material: 'Rice Husk & Agro Crop Residues',
      bulkDensity: '140 – 190 kg/m³',
      moistureDrop: '25% down to 9%',
      output: 'Uniform combustible bio-coal substitute for brick kilns and boilers.',
    },
    {
      material: 'Cotton Stalk & Corn Cob Granules',
      bulkDensity: '170 – 230 kg/m³',
      moistureDrop: '40% down to 10%',
      output: 'Industrial briquettes replacing imported fossil coal across Saurashtra.',
    },
  ];

  const plantSteps = [
    {
      step: '01',
      title: 'Raw Material Shredding & Infeed',
      desc: 'Tubular screw feeder or inclined belt conveyor with magnetic cross-belt separator to remove tramp iron before dryer entry.',
    },
    {
      step: '02',
      title: 'Continuous Rotary Drying',
      desc: 'MS-BMD rotating drum cascades light biomass through gentle convective drafts, evaporating up to 1,500 kg/hr of water.',
    },
    {
      step: '03',
      title: 'Cyclonic Separation & Fines Capture',
      desc: 'High-efficiency twin cyclone separates dried biomass fibers from vapor-laden exhaust air, discharging via rotary airlock.',
    },
    {
      step: '04',
      title: 'Pelletizing or Briquette Extrusion',
      desc: 'Conditioned biomass at 10%–12% moisture feeds directly into ring-die pellet mills or hydraulic briquetting presses.',
    },
  ];

  const faqs = [
    {
      question: 'Why must biomass moisture be strictly reduced to 10%–12% before pelletization?',
      answer:
        'Biomass pellet mills and briquetting presses rely on the natural lignin present in plant fibers to bind particles under high extrusion pressure and frictional heat. If raw feed moisture exceeds 14%, steam pockets explode inside the die holes, creating brittle, crumbling pellets. If moisture is below 8%, friction spikes and blocks the pellet die. Minerals Solutions dryers maintain a precise 10% to 12% moisture window to ensure high-density (1.2–1.4 g/cm³) export-grade pellets.',
    },
    {
      question: 'How do you prevent fire hazards inside the sawdust drying drum?',
      answer:
        'Fine sawdust particles suspended in hot air can form explosive dust clouds if sparks enter the drum. Minerals Solutions integrates a four-tier fire safety protocol: (1) An external refractory quench chamber that traps sparks, (2) Pneumatic cold-air dilution dampers that prevent drum temperatures from exceeding 220°C, (3) Calibrated explosion relief doors on cyclone collectors, and (4) Emergency misting deluge nozzles in the feed box.',
    },
    {
      question: 'How are internal flights designed to prevent fibrous coir and sawdust jamming?',
      answer:
        'Unlike dense mineral sand that slides easily, fibrous sawdust and coconut coir pith tend to mat, cling, and form rope-like tangles. We engineer self-cleaning, open-curtain lifting flights with staggered serrated edges and steep discharge angles. The flights continuously disperse the fibrous bed without narrow corners where wet coir fibers can pack and char.',
    },
    {
      question: 'Can the biomass dryer run using its own wood waste or agro-waste as fuel?',
      answer:
        'Yes. Our solid-fuel hot air furnaces are custom-built with stepped grates to burn sawdust, wood chips, tree bark, groundnut shells, or damaged briquettes. This creates a self-sustaining closed-loop thermal cycle where approximately 4% to 6% of dried biomass is fed into the furnace, eliminating the expense of external fossil fuels.',
    },
    {
      question: 'What is the indicative price and footprint of the MS-BMD-1500 biomass drying plant?',
      answer:
        'Our popular 1,500 kg/hr biomass rotary drying system begins at approximately ₹ 14,50,000 for the core rotating drum, girth gear drive, trunnion rollers, and discharge hood. Complete turnkey packages including agro-waste furnace, twin cyclones, ID fan, spark arrestor, and screw conveyor feed start at ₹ 24,00,000, requiring a bay length of approximately 14 meters at your plant.',
    },
  ];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${company.siteUrl}/products/industrial-rotary-dryers/biomass-sawdust-dryer/#product`,
    name: 'Biomass, Sawdust & Coir Pith Rotary Dryer',
    model: 'MS-BMD-1500 Series',
    description:
      'Industrial biomass and sawdust rotary drum dryers (500 to 5,000 kg/hr). Anti-clogging flights, spark arrestors, and cyclone recovery for wood shavings, cocopeat, and agro-waste pellet plants.',
    image: `${company.siteUrl}/images/products/rotary-dryers/saw-dust-biomass-dryer-lg.webp`,
    brand: {
      '@type': 'Brand',
      name: 'Minerals Solutions',
    },
    manufacturer: {
      '@id': `${company.siteUrl}/#organization`,
    },
    category: 'Thermal Drying Systems',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '1450000',
      highPrice: '3800000',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@id': `${company.siteUrl}/#organization`,
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Throughput Capacity',
        value: '500 kg/hr to 5,000 kg/hr (5 TPH)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Moisture Reduction',
        value: 'From 50%–60% feed down to 10%–12% for pelleting',
      },
      {
        '@type': 'PropertyValue',
        name: 'Fire Safety Engineering',
        value: 'Cyclone Spark Arrestor + Automatic Cold-Air Dilution Damper',
      },
      {
        '@type': 'PropertyValue',
        name: 'Drum Shell Metallurgy',
        value: 'Heavy IS 2062 Structural Steel with Anti-Clogging Serrated Lifters',
      },
      {
        '@type': 'PropertyValue',
        name: 'Primary Applications',
        value: 'Wood Sawdust, Coconut Coir Pith, Groundnut Shell, Bagasse, Briquette Pellets',
      },
      {
        '@type': 'PropertyValue',
        name: 'Manufacturing Works',
        value: '10, Shyam Estate, Zak GIDC, Dahegam, Gandhinagar - 382330, Gujarat',
      },
    ],
  };

  const breadcrumbSchema = {
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
        name: 'Industrial Rotary Dryers',
        item: `${company.siteUrl}/products/industrial-rotary-dryers/`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Biomass & Sawdust Dryer',
        item: `${company.siteUrl}/products/industrial-rotary-dryers/biomass-sawdust-dryer/`,
      },
    ],
  };

  const faqSchema = {
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
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main className="bg-white text-slate-900 min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-slate-200 bg-slate-50/80">
          <Container>
            <Breadcrumbs items={breadcrumbs} />
          </Container>
        </div>

        {/* Hero Section */}
        <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Headers & CTAs */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-4">
                  <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                  Bio-Energy & Agro-Waste Pelleting Technology
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] mb-5">
                  Industrial Biomass, Sawdust & <span className="text-[#DA020D]">Coir Pith Rotary Dryers</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
                  Heavy-duty continuous rotary drying drums engineered specifically for low-density organic fibers, sawdust, wood shavings, and cocopeat. Features <strong>anti-clogging flight lifters</strong>, inline <strong>spark arrestors</strong>, and cyclone fines recovery, drying <strong>50% initial moisture down to 10%–12%</strong> for bio-pellet mills and briquetting lines across Gujarat and India.
                </p>

                {/* Pricing & Commercial Badge */}
                <div className="p-4 rounded-xl bg-slate-900 text-white mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Indicative Starting Price (MS-BMD Series)
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-0.5">
                      ₹ 14,50,000 <span className="text-xs font-normal text-slate-300">/ Piece</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-300 border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-4">
                    <div>1,500 Kg/Hr Continuous Pellet Feed Rating</div>
                    <div className="text-emerald-400 font-semibold mt-0.5">Complete Turnkey Plants from ₹ 24.0 Lakh</div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-xl bg-slate-100/80 border border-slate-200 mb-8">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#DA020D] tracking-tight">
                      1,500 kg
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Per Hour Dry Output
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      10–12%
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Target Pellet Moisture
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      100%
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Spark Arrestor Protected
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      5 TPH
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Max Scalable Capacity
                    </div>
                  </div>
                </div>

                {/* Conversion CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    href={rfqLink}
                    size="lg"
                    variant="primary"
                    className="shadow-md shadow-red-600/10 font-bold"
                    icon={<FileText className="w-4 h-4" />}
                  >
                    Request Biomass Dryer Quote
                  </Button>

                  <Button
                    href={whatsappUrl}
                    external
                    size="lg"
                    variant="outline"
                    className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold"
                    icon={<Phone className="w-4 h-4 text-emerald-600" />}
                  >
                    WhatsApp Plant Engineer
                  </Button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Anti-Clogging Flight Vees
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Wood Waste & Husk Furnace
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Zak GIDC Dahegam Works
                  </span>
                </div>
              </div>

              {/* Right Column: Authentic Equipment Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                  <div className="relative aspect-[4/3] w-full bg-slate-900">
                    <Image
                      src="/images/products/rotary-dryers/saw-dust-biomass-dryer-lg.webp"
                      alt="Industrial Biomass and Sawdust Rotary Dryer manufactured at Minerals Solutions Zak GIDC Dahegam facility" width={800} height={600}
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 550px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-1">
                        Verified Bio-Pellet Installation
                      </div>
                      <div className="text-sm font-semibold text-slate-100">
                        Continuous Sawdust & Coir Pith Dryer Assembly with Cyclone
                      </div>
                    </div>
                  </div>

                  {/* Micro Specs Card Strip */}
                  <div className="p-4 bg-slate-900 text-slate-200 text-xs divide-y divide-slate-800">
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Primary Feed Form</span>
                      <span className="font-semibold text-white">Sawdust, Cocopeat, Wood Shavings</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Safety System</span>
                      <span className="font-semibold text-emerald-400">Spark Trap + Dilution Damper</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Fines Capture</span>
                      <span className="font-semibold text-white">High Efficiency Cyclone Collector</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Fabrication Facility</span>
                      <span className="font-semibold text-white">10, Shyam Estate, Dahegam, Gujarat</span>
                    </div>
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
                  <strong className="text-slate-950 font-semibold">What is an industrial biomass and sawdust rotary dryer? </strong>
                  An industrial biomass and sawdust rotary dryer is a continuous convective thermal drying drum specifically engineered to dehydrate wet wood shavings, sawdust, sugarcane bagasse, agricultural stalks, and rice husk prior to briquetting and pelletizing. Fabricated in Zak GIDC, Dahegam from heavy-gauge IS 2062 carbon steel, the cylinder is fitted with anti-clogging multi-zone lifting flights that maintain continuous dispersion of low-bulk-density organic particulates without bridging or balling. Operating at throughput capacities from 500 kg/hr to 5,000 kg/hr, hot flue gases (250°C to 400°C inlet) evaporate high green moisture from 45%-55% down to an optimal 10%-12% required for ring-die pellet mills. Integrated safety engineering includes heavy-duty spark arrestor cyclones, explosion relief rupture discs compliant with NFPA guidelines, and automated deluge water quenching nozzles to eliminate biomass smolder hazards during continuous high-tonnage factory production.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Thermal Physics of Fibrous Organic Materials */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Thermometer className="w-4 h-4" />
                Thermodynamic Equilibrium
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Thermal Physics of Fibrous & Low-Density Organic Materials
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Why standard mineral sand dryers fail on biomass: managing low bulk density, variable fiber lengths, and hygroscopic bound cellular water.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                      01
                    </span>
                    <h3 className="text-lg font-bold text-slate-950">
                      Low Particle Pneumatic Floatation Velocity
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Unlike heavy quartz sand (bulk density ~1,600 kg/m³), dried sawdust and coir pith weigh only 120 to 200 kg/m³. If internal air draft exceeds 2.5 m/s, light particles prematurely blow out into the exhaust before drying. Our dryers feature enlarged drum diameters that reduce linear air velocity to 1.8–2.2 m/s, ensuring particles stay in the thermal zone until properly dehydrated.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                      02
                    </span>
                    <h3 className="text-lg font-bold text-slate-950">
                      Cellular Bound Moisture Extraction
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Organic plant cells hold moisture inside vascular capillaries. Evaporating this bound water requires gentle residence time (8 to 15 minutes) without surface scorching. If dried too aggressively at &gt;300°C, the particle surface case-hardens while the core stays damp, ruining downstream pellet extrusion quality.
                  </p>
                </div>
              </div>

              {/* Technical Callout Card */}
              <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 relative">
                <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2">
                  Biofuel Pellet Production Standard
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  The Critical 10%–12% Moisture Window
                </h4>
                <div className="space-y-3 text-xs text-slate-300 mb-6">
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                    <strong className="text-red-400">Feed &gt; 14% Moisture:</strong> Causes excessive steam pressure in pellet die channels, inducing structural cracks, crumbling pellets, and bacterial mould during bagging.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                    <strong className="text-amber-400">Feed &lt; 8% Moisture:</strong> Deprives raw material of necessary lubrication, creating extreme die friction, high motor amps, and die hole glazing.
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-200">
                    <strong>Minerals Solutions MS-BMD Standard:</strong> Guarantees uniform 10%–12% moisture discharge across fluctuating seasonal raw feedstock.
                  </div>
                </div>
                <Button
                  href={rfqLink}
                  size="md"
                  variant="primary"
                  className="font-bold text-white shadow-md shadow-red-600/10"
                >
                  Consult Bio-Energy Engineer
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Explosion Mitigation & Spark Arrestor Safety Integration */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                Active Fire Prevention Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Explosion Mitigation & Spark Arrestor Safety Integration
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Four critical engineering fail-safes incorporated into every Minerals Solutions biomass drying line to safeguard your personnel and factory investment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyFeatures.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DA020D] flex items-center justify-center font-bold mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full inline-block mb-2">
                        {feat.badge}
                      </span>
                      <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Technical Specifications: MS-BMD-1500 System */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Scale className="w-4 h-4" />
                Standard Engineering Series
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Technical Specifications: MS-BMD-1500 System
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Engineered capacity spans from 500 kg/hr pilot lines to 5 TPH industrial pellet mill feed preparation installations.
              </p>
            </div>

            {/* Responsive HTML Engineering Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-800 border-collapse">
                <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Model Number</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Rated Output</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Drum Dimensions</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Geared Motor</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Raw Feed Moisture</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Discharge Moisture</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Cyclone System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-normal">
                  {models.map((item, idx) => (
                    <tr
                      key={item.model}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/70 hover:bg-slate-100/70'}
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-950 font-mono text-xs">
                        {item.model}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#DA020D]">
                        {item.capacity}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-slate-700">
                        Ø {item.drumDia} × {item.length}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">{item.motorPower}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-700 font-mono text-xs">{item.feedMoisture}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700 font-mono text-xs">{item.exitMoisture}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-xs text-slate-600">{item.cycloneModel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <p>
                * Shell fabricated from certified IS 2062 Grade B structural carbon steel with continuous submerged arc welding (SAW).
              </p>
              <Link
                href={rfqLink}
                className="font-bold text-[#DA020D] hover:underline inline-flex items-center gap-1"
              >
                Request custom layout drawing <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Container>
        </section>

        {/* Cascading Flight Design for Non-Clogging Agro-Waste Flow */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <RotateCw className="w-4 h-4" />
                Anti-Clog Mechanical Design
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Cascading Flight Design for Non-Clogging Agro-Waste Flow
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                How internal lifter geometry prevents wet sawdust and long coconut coir fibers from forming tangled ropes or dead-zone clogs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  Helical Entry Flighting
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Steep-pitch continuous screw flights at the feed intake rapidly push wet, sticky biomass into the hot air draft, preventing back-spilling into the burner hood.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  Serrated Shoveling Lifters
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Staggered serrated flight vees shred clumps and create a continuous, dense fibrous shower curtain across the entire drum diameter for maximum convective exposure.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  Gravity Discharge Sweepers
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Low-profile sweeping vanes channel dried biomass smoothly into the cyclonic suction duct and rotary airlock valve without fiber abrasion or static clinging.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Feed Material Suitability & Briquetting Plant Walkthrough */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <TreeDeciduous className="w-4 h-4" />
                Raw Material Versatility
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Multi-Fuel Furnace Integration (Wood Waste, Briquette, Husk)
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Self-sustaining thermal loops: burn your own agro-waste to generate clean hot air for continuous drying operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {feedMaterials.map((mat) => (
                <div
                  key={mat.material}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950 mb-1">{mat.material}</h3>
                  <div className="text-xs text-[#DA020D] font-bold mb-2">{mat.moistureDrop}</div>
                  <div className="text-xs text-slate-500 mb-2">Density: {mat.bulkDensity}</div>
                  <p className="text-slate-600 text-xs leading-relaxed">{mat.output}</p>
                </div>
              ))}
            </div>

            {/* Turnkey Walkthrough Steps */}
            <div className="p-8 rounded-2xl bg-slate-900 text-white">
              <h3 className="text-xl font-bold text-white mb-6">
                Turnkey Bio-Pellet & Briquette Production Workflow
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {plantSteps.map((st) => (
                  <div key={st.step} className="border-t border-slate-800 pt-4">
                    <div className="text-2xl font-black text-amber-400 font-mono mb-2">
                      {st.step}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{st.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                  </div>
                ))}
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
                href="/products/industrial-rotary-dryers/"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#DA020D] transition-colors shrink-0"
              >
                Explore Full Rotary Dryers & Thermal Systems Hub <ChevronRight className="w-4 h-4 text-[#DA020D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sibling Spoke 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider mb-2">
                    Sibling Dryer Line
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Triple Pass Rotary Drum Dryer Line
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Concentric three-cylinder drum saving factory floor length and drying fuel.
                  </p>
                </div>
                <Link
                  href="/products/industrial-rotary-dryers/triple-pass-dryer/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  View Machine Specifications <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Sibling Spoke 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-2">
                    Sibling Dryer Line
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Industrial Rotary Sand Dryer Unit
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    High-tonnage heavy mineral dryer handling continuous moisture reduction below 0.5%.
                  </p>
                </div>
                <Link
                  href="/products/industrial-rotary-dryers/sand-dryer/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  View Machine Specifications <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Cross-Pillar Machine */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider mb-2">
                    Complementary Pelletizing Line
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Industrial Pan Disc Granulator
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Downstream rotary pelletizing disc turning dried sawdust into bio-fertilizer compost pellets.
                  </p>
                </div>
                <Link
                  href="/products/fertilizer-granulation-plants/disc-granulator/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  Explore Complementary Machine <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Frequently Asked Questions on Biomass Drying Lines */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                Biofuel Plant Engineering Q&A
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Frequently Asked Questions on Biomass Drying Lines
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Operational answers on spark detection, moisture tolerances, and multi-fuel combustion economics.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-6 sm:py-8">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 flex items-start gap-3">
                    <span className="text-[#DA020D] font-mono text-base font-extrabold shrink-0 mt-0.5">
                      Q{idx + 1}.
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* RFQ Call-To-Action */}
        <section className="py-14 lg:py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#DA020D_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                Direct Manufacturer Procurement ,  Zak GIDC Dahegam Works
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
                Request a Biomass Dryer Sizing & Price Quotation
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                Submit your feedstock type (sawdust, coir, bagasse), raw moisture %, and required dried output (TPH). Our engineering team provides custom plant layout drawings, cyclone recovery calculations, and competitive ex-factory pricing.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={rfqLink}
                  size="lg"
                  variant="primary"
                  className="px-8 font-bold shadow-lg shadow-red-900/30"
                  icon={<FileText className="w-4 h-4" />}
                >
                  Request Biomass Sizing Quote
                </Button>

                <Button
                  href={`tel:${cleanPhone}`}
                  external
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-100 hover:bg-slate-900 font-semibold px-8"
                  icon={<Phone className="w-4 h-4 text-emerald-400" />}
                >
                  Call Engineering Desk: {primaryPhone}
                </Button>
              </div>

              <div className="mt-8 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
                <span>📍 Works: 10, Shyam Estate, Zak GIDC, Dahegam, Gandhinagar</span>
                <span>📋 GSTIN: {company.gstin}</span>
                <span>⏱️ Factory Trial Inspection Welcomed</span>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

