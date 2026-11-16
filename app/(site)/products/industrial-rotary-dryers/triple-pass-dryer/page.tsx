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
    absolute: 'Triple Pass Rotary Drum Dryer Manufacturer | Minerals Solutions',
  },
  description: 'Procure high-efficiency triple pass rotary drum dryers (500 kg to 15 TPH). Concentric 3-cylinder design saving fuel, fabricated in Zak GIDC, Dahegam.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/triple-pass-dryer/',
  },
  openGraph: {
    title: 'Triple Pass Rotary Drum Dryer Line | Minerals Solutions',
    description:
      'High-efficiency triple pass rotary drum dryers (500 kg to 15 TPH). Concentric 3-cylinder design saving 40% space. Fabricated in Zak GIDC, Dahegam.',
    url: `${company.siteUrl}/products/industrial-rotary-dryers/triple-pass-dryer/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triple Pass Rotary Drum Dryer Manufacturer | Minerals Solutions',
    description:
      'High-efficiency triple pass rotary drum dryers (500 kg to 15 TPH). Concentric 3-cylinder design saving 40% space. Fabricated in Zak GIDC, Dahegam.',
    images: [defaultTwitterImage],
  },
};

export default function TriplePassDryerPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const rfqLink = '/request-quote/?product=triple-pass-dryer';
  const whatsappUrl = `https://wa.me/916352453050?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering quote and drawing for a Triple Pass Rotary Drum Dryer.'
  )}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Industrial Rotary Dryers', href: '/products/industrial-rotary-dryers/' },
    { label: 'Triple Pass Dryer', href: '/products/industrial-rotary-dryers/triple-pass-dryer/' },
  ];

  const models = [
    {
      model: 'MS-TPD-500',
      capacity: '500 kg/hr',
      outerDia: '1,200 mm',
      length: '4.5 m',
      motorPower: '7.5 HP (5.5 kW)',
      evaporation: '75 kg/hr H2O',
      exhaustCfm: '2,400 CFM',
    },
    {
      model: 'MS-TPD-1500',
      capacity: '1,500 kg/hr',
      outerDia: '1,500 mm',
      length: '6.0 m',
      motorPower: '15 HP (11 kW)',
      evaporation: '225 kg/hr H2O',
      exhaustCfm: '4,200 CFM',
    },
    {
      model: 'MS-TPD-3000',
      capacity: '3,000 kg/hr',
      outerDia: '1,800 mm',
      length: '7.5 m',
      motorPower: '25 HP (18.5 kW)',
      evaporation: '450 kg/hr H2O',
      exhaustCfm: '6,800 CFM',
    },
    {
      model: 'MS-TPD-5000',
      capacity: '5,000 kg/hr (5 TPH)',
      outerDia: '2,200 mm',
      length: '9.0 m',
      motorPower: '40 HP (30 kW)',
      evaporation: '750 kg/hr H2O',
      exhaustCfm: '9,500 CFM',
    },
    {
      model: 'MS-TPD-10000',
      capacity: '10,000 kg/hr (10 TPH)',
      outerDia: '2,600 mm',
      length: '12.0 m',
      motorPower: '60 HP (45 kW)',
      evaporation: '1,500 kg/hr H2O',
      exhaustCfm: '16,000 CFM',
    },
    {
      model: 'MS-TPD-15000',
      capacity: '15,000 kg/hr (15 TPH)',
      outerDia: '3,000 mm',
      length: '14.0 m',
      motorPower: '75 HP (55 kW)',
      evaporation: '2,250 kg/hr H2O',
      exhaustCfm: '22,000 CFM',
    },
  ];

  const thermodynamicSteps = [
    {
      pass: 'Pass 1',
      title: 'Inner Core Cylinder: High-Velocity Flash Drying',
      temperature: '300°C – 350°C Inlet Zone',
      flowType: 'Co-Current High Heat Flux',
      description:
        'Wet feed enters the innermost cylinder directly in line with incoming burner gases. The intense thermal gradient causes instant flash evaporation of surface water, removing up to 55% to 60% of total moisture within the first 30% of barrel transit. The heavy IS 2062 Grade B / SS304 inner shell acts as a heat radiator for surrounding passes.',
      lifters: 'Dense forward-pitch helical spiral flights to prevent material buildup.',
    },
    {
      pass: 'Pass 2',
      title: 'Middle Annular Cylinder: Counter-Cascading Core',
      temperature: '180°C – 220°C Thermal Transfer',
      flowType: 'Reverse Annular Cascade',
      description:
        'At the end of Pass 1, material and gases reverse 180 degrees into the middle cylinder. Specially engineered radial lifting vees shower the granular mineral bed across the returning flue gas stream, driving out trapped capillary moisture through sustained convective mass transfer.',
      lifters: 'Radial lifting vees with serrated curtain-shower profiles.',
    },
    {
      pass: 'Pass 3',
      title: 'Outer Shell Cylinder: Radiant Polishing & Cyclonic Exit',
      temperature: '80°C – 110°C Gentle Polishing',
      flowType: 'Final Forward Discharge',
      description:
        'The mineral flows into the outer cylinder for its final transit toward the discharge hood. By capturing residual heat conducted through the middle cylinder, moisture drops below 0.5% without thermal degradation. The outer shell exterior maintains an exceptionally low skin temperature (<50°C), safeguarding plant operators and minimizing heat dissipation into the factory bay.',
      lifters: 'Low-profile sweeping flights directing bone-dry aggregate to rotary airlock.',
    },
  ];

  const comparisonRows = [
    {
      parameter: 'Thermal Heat Retention & Efficiency',
      triplePass: '80% – 88% (Concentric nested heat recovery)',
      doublePass: '75% – 82% (Dual concentric shell transfer)',
      singlePass: '55% – 65% (High uninsulated shell radiation losses)',
    },
    {
      parameter: 'Factory Floor Space / Bay Length',
      triplePass: 'Ultra-Compact (approx. 40% – 50% bay reduction)',
      doublePass: 'Compact (approx. 35% – 40% bay reduction)',
      singlePass: 'Extended length (requires long industrial bay)',
    },
    {
      parameter: 'Outer Shell Skin Temperature',
      triplePass: '<50°C (Radiant heat absorbed by inner passes)',
      doublePass: '65°C – 75°C (Moderate outer shell heat loss)',
      singlePass: '110°C – 140°C (Severe heat loss; burn hazard)',
    },
    {
      parameter: 'Specific Fuel Consumption (Coal/Gas)',
      triplePass: 'Lowest (approx. 18 – 24 kg coal / ton dry sand)',
      doublePass: 'Moderate (approx. 24 – 28 kg coal / ton dry sand)',
      singlePass: 'High (approx. 32 – 40 kg coal / ton dry sand)',
    },
    {
      parameter: 'Optimum Feed Particle Size',
      triplePass: '0.05 mm – 10 mm (Free-flowing sands & crystals)',
      doublePass: '0.1 mm – 25 mm (Wide granular spectrum)',
      singlePass: '1.0 mm – 60 mm (Handles coarse rock & lumps)',
    },
    {
      parameter: 'Moisture Reduction Benchmark',
      triplePass: 'From 16% feed moisture down to <0.5%',
      doublePass: 'From 20% feed moisture down to <1.0%',
      singlePass: 'From 25% feed moisture down to <1.5%',
    },
    {
      parameter: 'Drive Mechanism & Power Demand',
      triplePass: '7.5 HP – 75 HP (Low rotational inertia)',
      doublePass: '15 HP – 90 HP (Balanced concentric drive)',
      singlePass: '20 HP – 120 HP (Heavy long drum inertia)',
    },
  ];

  const suitableMaterials = [
    {
      title: 'Silica & Foundry Sand',
      specs: '0.1 mm to 2.5 mm grain sizing',
      desc: 'Dries washed silica sand from 12% moisture down to 0.2% for resin coating (RCS), glassmaking, and high-precision foundry mold cores.',
    },
    {
      title: 'River Sand & Plaster Aggregates',
      specs: 'M-Sand, Zone II & Zone III sand',
      desc: 'High-throughput moisture elimination for dry-mix mortar plants, tile adhesives, and premixed polymer-modified plaster bagging lines.',
    },
    {
      title: 'Quartz & Feldspar Fines',
      specs: '30 to 150 mesh crushed mineral sand',
      desc: 'Non-contaminating thermal drying using optional SS304 inner barrel liners, safeguarding ceramic tile and porcelain body whiteness.',
    },
    {
      title: 'Bio-Organic Fertilizer Pellets',
      specs: '2.0 mm to 4.5 mm extruded granules',
      desc: 'Gentle temperature control in the middle and outer passes prevents organic nitrogen burning while drying moisture down to 4% for packaging.',
    },
    {
      title: 'Bentonite & Mineral Clays',
      specs: 'Granular clay & cat litter absorbent',
      desc: 'Uniform convective heat transfer dries activated bentonite without destroying swelling index or liquid absorption capacities.',
    },
    {
      title: 'Chemical Salts & Borate Powders',
      specs: 'Boric powder, borax, sodium sulfates',
      desc: 'Paired with heat exchangers to yield pure, snow-white chemical crystals free from combustion ash and diesel soot.',
    },
  ];

  const faqs = [
    {
      question: 'How does a triple pass rotary dryer achieve over 80% thermal efficiency?',
      answer:
        'In a triple pass rotary dryer, three concentric cylinders are nested along a common rotational axis. The hottest flue gas and wet material enter the inner core cylinder. The heat that would normally radiate out into the atmosphere from a single-pass shell is instead completely captured by the surrounding middle and outer cylinders. Consequently, the exhaust gas exit temperature is optimized, outer shell skin temperature stays below 50°C, and overall thermal efficiency exceeds 80% to 88%.',
    },
    {
      question: 'What is the factory floor space advantage of a triple pass dryer vs single pass drum?',
      answer:
        'Because the material travels through three successive concentric drum lengths within a single machine chassis, the effective drying path is nearly three times the machine length. An 8-meter triple pass dryer provides the equivalent drying retention time of a 22-meter single-pass rotary drum, reducing factory bay length requirements by 40% to 50% and significantly lowering plant civil foundation costs.',
    },
    {
      question: 'Can sticky river sand or clay-rich silt be dried in a triple pass dryer?',
      answer:
        'Triple pass dryers are engineered primarily for free-flowing granular solids up to 10mm. Highly sticky materials or wet clay pastes with plasticity indices above 15 may blind the narrow annular clearances between the inner and middle shells. For high-clay river sand, Minerals Solutions engineers recommend either pre-screening via our Rotary Trommel / Sand Washing Plant or installing our Double-Pass Dryer equipped with heavy anti-stick mechanical scrapers.',
    },
    {
      question: 'Which combustion fuels can fire Minerals Solutions triple pass dryers?',
      answer:
        'Our hot air generators (HAG) are fully modular. We engineer combustion systems for pulverized coal, agro-waste briquettes, wood chips, natural gas (PNG), LPG, and light diesel. Indirect shell-and-tube heat exchangers are also available for chemical and food-grade mineral drying where combustion flue gases must not touch the product.',
    },
    {
      question: 'What quality testing and guarantees are provided at your Zak GIDC works?',
      answer:
        'Every Minerals Solutions triple pass dryer undergoes ultrasonic weld inspection, hydrostatic alignment, and workshop dynamic balancing to ISO 1940 standards before dispatch from our Dahegam facility. Shells are fabricated from certified IS 2062 Grade B structural steel, and trunnions are forged from high-hardness EN-8/EN-9 alloy steel, backed by a comprehensive 12-month structural manufacturing guarantee.',
    },
  ];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${company.siteUrl}/products/industrial-rotary-dryers/triple-pass-dryer/#product`,
    name: 'Triple Pass Concentric Rotary Drum Dryer',
    model: 'MS-TPD-Series',
    description:
      'High-efficiency triple pass concentric rotary drum dryers (500 kg to 15 TPH). Concentric 3-cylinder design saving 40% floor space with >80% thermal efficiency for silica sand, river aggregates, and minerals.',
    image: `${company.siteUrl}/images/products/rotary-dryers/double-pass-rotary-dryer-assembly-lg.webp`,
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
      lowPrice: '1850000',
      highPrice: '4500000',
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
        name: 'Thermal Efficiency',
        value: '>80% to 88%',
      },
      {
        '@type': 'PropertyValue',
        name: 'Bay Space Reduction',
        value: '40% to 50% less floor area',
      },
      {
        '@type': 'PropertyValue',
        name: 'Throughput Capacity',
        value: '500 kg/hr to 15 TPH',
      },
      {
        '@type': 'PropertyValue',
        name: 'Shell Metallurgy',
        value: 'Heavy IS 2062 Grade B / Optional SS304 Inner Barrel',
      },
      {
        '@type': 'PropertyValue',
        name: 'Running Gear',
        value: 'Forged EN-8 / EN-9 Alloy Steel Trunnion Rollers',
      },
      {
        '@type': 'PropertyValue',
        name: 'Manufacturing Works',
        value: '10, Shyam Estate, Zak GIDC, Dahegam, Gandhinagar - 382330',
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
        name: 'Triple Pass Dryer',
        item: `${company.siteUrl}/products/industrial-rotary-dryers/triple-pass-dryer/`,
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
        <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Technical Headers & CTAs */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DA020D] text-xs font-bold tracking-wide uppercase mb-4">
                  <Flame className="w-3.5 h-3.5" />
                  Concentric Nested Thermal Technology
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] mb-5">
                  Triple Pass Concentric <span className="text-[#DA020D]">Rotary Drum Dryers</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
                  Heavy industrial triple-cylinder drying systems engineered for silica sand, river aggregates, minerals, and agro-pellets. Designed with 3 nested rotating drums that eliminate radiant heat loss, cut factory bay length by 40%, and achieve <strong>&gt;80% thermal efficiency</strong> from our Zak GIDC, Dahegam manufacturing facility.
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-xl bg-slate-100/80 border border-slate-200 mb-8">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#DA020D] tracking-tight">
                      &gt;80%
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Thermal Efficiency
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      -40%
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Bay Footprint
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      &lt;0.5%
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Exit Moisture
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      15 TPH
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Max Capacity
                    </div>
                  </div>
                </div>

                {/* Dual Conversion Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    href={rfqLink}
                    size="lg"
                    variant="primary"
                    className="shadow-md shadow-red-600/10 font-bold"
                    icon={<FileText className="w-4 h-4" />}
                  >
                    Request Sizing & Pricing
                  </Button>

                  <Button
                    href={whatsappUrl}
                    external
                    size="lg"
                    variant="outline"
                    className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold"
                    icon={<Phone className="w-4 h-4 text-emerald-600" />}
                  >
                    WhatsApp Direct Hotline
                  </Button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    IS 2062 Grade B Heavy Shell
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Forged EN-8/EN-9 Rollers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    GSTIN & UDYAM Verified
                  </span>
                </div>
              </div>

              {/* Right Column: Authentic Equipment Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-900/5 group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="/images/products/rotary-dryers/double-pass-rotary-dryer-assembly-lg.webp"
                      alt="Triple Pass Concentric Rotary Drum Dryer manufacturing assembly at Zak GIDC Dahegam works"
                      fill
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                    />
                  </div>

                  <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-white flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">MS-TPD Series Triple Pass Concentric Dryer</p>
                      <p className="text-xs text-slate-400">Authentic Factory Assembly · Dahegam Works</p>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      ₹ 26,00,000 Baseline
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
                  <strong className="text-slate-950 font-semibold">What is a triple pass rotary drum dryer? </strong>
                  A triple pass rotary drum dryer is an advanced continuous industrial thermal processing system constructed from three nested concentric rotating cylinders engineered to maximize heat transfer efficiency in compact factory layouts. Manufactured in Zak GIDC, Dahegam from certified IS 2062 Grade B carbon steel (with optional SS 304 or SS 316 inner contact passes), wet granular minerals or crystalline powders travel through an inner co-current cylinder, reverse 180 degrees into a middle counter-cascading annular cylinder, and discharge through an outer low-temperature cylinder. This nested geometry triples thermal retention time while occupying approximately 40% to 50% less linear bay length than equivalent single-pass drums. Operating with evaporative capacities from 500 kg/hr to 15 TPH, thermal efficiency ranges from 80% to 88%, dropping mineral feed moisture from 16% down to below 0.5% at exit shell skin temperatures under 50°C for optimal fuel economy.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Thermodynamic Flow Walkthrough Section */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Airflow Dynamics & Heat Transfer
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                3-Cylinder Nested Thermodynamics & Airflow Mechanics
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Discover how triple-pass concentric geometry maximizes convective heat exchange while recycling energy through conductive boundaries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {thermodynamicSteps.map((step, idx) => (
                <div
                  key={step.pass}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 text-white font-extrabold text-sm">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#DA020D] bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
                        {step.pass}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 mb-2">
                      {step.title}
                    </h3>

                    <div className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-700 mb-4">
                      {step.temperature}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-2">
                    <div className="text-xs font-semibold text-slate-900 mb-1">
                      Flight Flight Lifter Design:
                    </div>
                    <div className="text-xs text-slate-500 leading-normal">
                      {step.lifters}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Callout Banner */}
            <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#DA020D] flex items-center justify-center shrink-0">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Need Custom TPH Sizing for Wet River Sand or Slurry?
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                    Our technical engineering team calculates heat balances, water evaporation loads, and required air volumes (CFM) tailored to your specific fuel and feed moisture.
                  </p>
                </div>
              </div>
              <Button
                href={rfqLink}
                size="lg"
                variant="primary"
                className="shrink-0 font-bold"
              >
                Consult Senior Engineer
              </Button>
            </div>
          </Container>
        </section>

        {/* Technical Specifications & Sizing Matrix Table */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Scale className="w-4 h-4" />
                Standard Engineering Series
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Technical Specifications & Sizing Matrix (MS-TPD Series)
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Standard manufacturing matrix from 500 kg/hr pilot units up to 15 TPH heavy commercial lines. Custom shell lengths and diameters are rolled to client specifications in our Dahegam workshop.
              </p>
            </div>

            {/* Desktop & Tablet HTML Engineering Specification Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-800 border-collapse">
                <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Model Series</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Throughput Capacity</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Outer Drum Dia.</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Overall Length</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Drive Motor</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Evaporation Capacity</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Exhaust Draft</th>
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
                      <td className="py-3.5 px-4 sm:px-6">{item.outerDia}</td>
                      <td className="py-3.5 px-4 sm:px-6">{item.length}</td>
                      <td className="py-3.5 px-4 sm:px-6">{item.motorPower}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-700 font-mono text-xs">
                        {item.evaporation}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 font-mono text-xs">
                        {item.exhaustCfm}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <p>
                * Ratings based on ambient 30°C air, initial moisture of 12% reducing to &lt;0.5% with direct solid-fuel hot air generator.
              </p>
              <Link
                href={rfqLink}
                className="font-bold text-[#DA020D] hover:underline inline-flex items-center gap-1"
              >
                Request custom sizing datasheet <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Container>
        </section>

        {/* Engineering Comparison Matrix: Single vs Double vs Triple Pass */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4" />
                Performance Benchmarks
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Comparative Thermal Efficiency: Single Pass vs Triple Pass
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Why modern quartz, chemical, and sand processing plants in Gujarat and Rajasthan are transitioning from long single-drum kilns to concentric triple-pass dryers.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-800 border-collapse">
                <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800 w-1/4">
                      Engineering Parameter
                    </th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800 bg-[#DA020D]/90 text-white w-1/4">
                      Triple Pass (MS-TPD)
                    </th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800 w-1/4">
                      Double Pass Concentric
                    </th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800 w-1/4">
                      Conventional Single Pass
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row.parameter}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                        {row.parameter}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#DA020D] bg-red-50/50">
                        {row.triplePass}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-700">{row.doublePass}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600">{row.singlePass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Engineering Selection Advice:</strong> For large aggregate rocks (&gt;30 mm) or heavily cohesive wet clay pastes, our heavy-duty{' '}
                <Link
                  href="/products/industrial-rotary-dryers/sand-dryer/"
                  className="font-bold underline text-amber-950 hover:text-[#DA020D]"
                >
                  single-pass industrial sand dryer
                </Link>{' '}
                is recommended to prevent annular bridging. For free-flowing silica sand, quartz powders, and granulates &lt;10 mm, the triple-pass design delivers the lowest cost per dried ton.
              </div>
            </div>
          </Container>
        </section>

        {/* Material Processing Suitability */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Boxes className="w-4 h-4" />
                Raw Material Versatility
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Material Processing Suitability (Silica, Quartz, Minerals)
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Engineered flight geometry allows the MS-TPD series to handle diverse bulk density materials across mineral, chemical, and agriculture sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suitableMaterials.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#DA020D] flex items-center justify-center font-bold text-base mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-1">{item.title}</h3>
                  <div className="text-xs font-semibold text-slate-500 mb-3">{item.specs}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Workshop Quality Control & Dynamic Balancing */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                  <Factory className="w-4 h-4" />
                  Zak GIDC Heavy Engineering
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight mb-5">
                  Workshop Quality Control & Dynamic Balancing at Zak GIDC
                </h2>
                <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                  Fabricating concentric triple-pass drums requires extreme rolling precision. If the inner and outer drums are misaligned by even 3mm, excessive runout will cause trunnion roller vibration and premature tyre spalling. At our Dahegam workshop, every shell is rolled on hydraulic 3-roll plate benders and checked against strict concentricity tolerances.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        Hydraulic Plate Rolling to 20mm+ (IS 2062 Grade B)
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        High structural rigidity carbon steel shells fabricated with double-bevel edge preparation for 100% full-penetration SAW welds.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        Forged EN-8 / EN-9 Alloy Support Trunnions
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Solid forged alloy steel rollers, induction-hardened to 280–320 BHN, mounted in heavy split plummer blocks with spherical roller bearings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        ISO 1940 Dynamic Balancing Test
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Pre-dispatch trial rotation testing ensuring drum vibration velocity remains below 1.8 mm/s across the full operating RPM.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <Link
                    href="/manufacturing/"
                    className="inline-flex items-center gap-2 font-bold text-[#DA020D] hover:underline text-sm"
                  >
                    Tour our Zak GIDC manufacturing bays & machinery <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[4/3] shadow-lg">
                  <Image
                    src="/images/products/rotary-dryers/double-pass-rotary-dryer-assembly-lg.webp"
                    alt="Precision lathe turning and plate rolling of rotary drum shells at Minerals Solutions Dahegam facility" width={800} height={600}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <div className="font-bold text-slate-200">
                      Quality Gate 4 Verification: Workshop Trial Rotation
                    </div>
                    <div className="text-slate-400">
                      Zak-Vahelal Road, Zak GIDC, Dahegam, Gandhinagar
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
                href="/products/industrial-rotary-dryers/"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#DA020D] transition-colors shrink-0"
              >
                Explore Full Rotary Dryers & Thermal Systems Hub <ChevronRight className="w-4 h-4 text-[#DA020D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sibling Spoke 1 */}
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#DA020D]/40 transition-all flex flex-col justify-between group">
                <Link
                  href="/products/industrial-rotary-dryers/sand-dryer/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Industrial Rotary Sand Dryer specifications"
                >
                  <Image
                    src="/images/products/rotary-dryers/silica-sand-rotary-dryer-md.webp"
                    alt="Industrial Rotary Sand Dryer Drum"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <span className="inline-block text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mb-2 border border-emerald-100">
                      Sibling Dryer Line
                    </span>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#E10613] transition-colors leading-snug">
                      <Link href="/products/industrial-rotary-dryers/sand-dryer/" className="hover:underline">
                        Industrial Rotary Sand Dryer
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Heavy single-pass rotary sand drying drum for high-tonnage river sand and aggregate processing.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/industrial-rotary-dryers/sand-dryer/"
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
                  href="/products/industrial-rotary-dryers/chemical-powder-dryer/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Stainless Chemical Powder Dryer specifications"
                >
                  <Image
                    src="/images/products/rotary-dryers/boric-powder-dryer-md.webp"
                    alt="Chemical Powder and Mineral Rotary Dryer"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <span className="inline-block text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded mb-2 border border-blue-100">
                      Sibling Dryer Line
                    </span>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#E10613] transition-colors leading-snug">
                      <Link href="/products/industrial-rotary-dryers/chemical-powder-dryer/" className="hover:underline">
                        Stainless Chemical Powder Dryer
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Sanitary SS304/SS316 indirect thermal processing drum for active chemical powders and minerals.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/industrial-rotary-dryers/chemical-powder-dryer/"
                      className="font-bold text-[#E10613] hover:text-[#BC0711] text-xs inline-flex items-center gap-1 group/link"
                    >
                      <span>View Machine Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Cross-Pillar Machine */}
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#E10613]/40 transition-all flex flex-col justify-between group">
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
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <span className="inline-block text-[11px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded mb-2 border border-purple-100">
                      Complementary Wet Circuit
                    </span>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#E10613] transition-colors leading-snug">
                      <Link href="/products/sand-washing-plants/silica-sand-washing-plant/" className="hover:underline">
                        Silica Sand Washing Plant System
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Upstream wet scrubbing and desliming circuit delivering washed sand directly to the dryer feed hopper.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/sand-washing-plants/silica-sand-washing-plant/"
                      className="font-bold text-[#E10613] hover:text-[#BC0711] text-xs inline-flex items-center gap-1 group/link"
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

        {/* Frequently Asked Questions */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-[#E10613] mb-2 flex items-center gap-1.5 font-mono">
                <HelpCircle className="w-4 h-4" />
                Engineering Knowledge Base
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Frequently Asked Technical Questions
              </h2>
              <p className="text-slate-600 mt-2 text-base">
                Authoritative technical inquiries answered by our heavy process equipment engineering team. Click to reveal each response.
              </p>
            </div>

            <div className="max-w-4xl">
              <FaqAccordion
                items={faqs}
                allowMultiple={false}
                defaultOpenIndex={null}
              />
            </div>
          </Container>
        </section>

        {/* RFQ & Sizing Consultation Call-To-Action */}
        <section className="py-14 lg:py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#DA020D_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Flame className="w-3.5 h-3.5 text-[#DA020D]" />
                Direct Manufacturer Procurement ,  Zak GIDC Dahegam Works
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
                Request an Engineering Drawing & Sizing Quotation
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                Submit your feed moisture, required dry throughput (TPH), and available combustion fuel. Our engineering team will supply an equipment layout drawing, heat balance calculation, and direct manufacturer quotation.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={rfqLink}
                  size="lg"
                  variant="primary"
                  className="px-8 font-bold shadow-lg shadow-red-900/30"
                  icon={<FileText className="w-4 h-4" />}
                >
                  Request Machinery Sizing Quote
                </Button>

                <Button
                  href={`tel:${cleanPhone}`}
                  external
                  size="lg"
                  variant="outline"
                  className="bg-white text-slate-900 hover:bg-slate-100 border border-white font-bold px-8 shadow-sm"
                  icon={<Phone className="w-4 h-4 text-emerald-600" />}
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
