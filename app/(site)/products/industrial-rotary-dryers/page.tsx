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
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TechnicalSpecTable } from '@/components/ui/TechnicalSpecTable';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Industrial Rotary Dryers Manufacturer | Minerals Solutions',
  },
  description:
    'Heavy industrial rotary drum dryers (500 kg/hr to 50 TPH) for silica sand, minerals, sawdust, and chemicals. Fabricated in Zak GIDC, Dahegam, Gujarat.',
  alternates: {
    canonical: `${company.siteUrl}/products/industrial-rotary-dryers/`,
  },
  openGraph: {
    title: 'Industrial Rotary Dryers Manufacturer | Single & Double Pass',
    description:
      'Engineered industrial rotary dryers: single, concentric double-pass, and triple-pass drum dryers with custom hot air furnaces at Zak GIDC, Gujarat.',
    url: `${company.siteUrl}/products/industrial-rotary-dryers/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Rotary Dryers Manufacturer | Minerals Solutions Gujarat',
    description:
      'Thermal drying systems engineered for silica sand, minerals, and chemicals from 500 kg/hr to 50 TPH.',
    images: [defaultTwitterImage],
  },
};

export default function RotaryDryersPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const dryerTypes = [
    {
      name: 'Triple Pass Concentric Rotary Dryer',
      href: '/products/industrial-rotary-dryers/triple-pass-dryer/',
      badge: 'Concentric Thermal Shells',
      image: '/images/products/rotary-dryers/continuous-type-rotary-dryer-md.webp',
      alt: 'Minerals Solutions triple pass concentric rotary drum dryer assembly at Zak GIDC works',
      desc: 'Engineered nested concentric cylinders with internal cascading lifters, capturing maximum thermal efficiency with minimal factory bay footprint.',
      applications: 'Fly ash, mineral slag, gypsum, and fine aggregates.',
      capacity: '500 kg/hr - 15 TPH',
    },
    {
      name: 'Industrial Rotary Sand Dryer',
      href: '/products/industrial-rotary-dryers/sand-dryer/',
      badge: 'Integrated Thermal Draft',
      image: '/images/products/rotary-dryers/silica-sand-rotary-dryer-md.webp',
      alt: 'Industrial rotary sand dryer drum with high-efficiency refractory furnace',
      desc: 'Complete thermal assembly paired with high-efficiency refractory-lined furnace for river sand, silica sand, and foundry sand drying to <0.5% moisture.',
      applications: 'Silica sand, river sand, foundry sand, and bauxite.',
      capacity: '1 - 50 TPH',
    },
    {
      name: 'Chemical Powder & Mineral Rotary Dryer',
      href: '/products/industrial-rotary-dryers/chemical-powder-dryer/',
      badge: 'Indirect Clean Air Heating',
      image: '/images/products/rotary-dryers/boric-powder-dryer-md.webp',
      alt: 'Indirect clean air heating chemical powder and mineral rotary dryer with stainless steel contacts',
      desc: 'Indirect heating and stainless contact surfaces preventing contamination and discoloration of sensitive minerals and chemical crystals.',
      applications: 'Bentonite, chemical salts, calcined minerals, and pigments.',
      capacity: '500 kg/hr - 10 TPH',
    },
    {
      name: 'Biomass & Sawdust Rotary Dryer',
      href: '/products/industrial-rotary-dryers/biomass-sawdust-dryer/',
      badge: 'High Tonnage Continuous Duty',
      image: '/images/products/rotary-dryers/saw-dust-biomass-dryer-md.webp',
      alt: 'Heavy-duty biomass and sawdust rotary drum dryer line at manufacturing workshop',
      desc: 'Heavy-duty single cylinder rotary drum with specialized lifters designed for high initial moisture biomass, sawdust, and agricultural residues.',
      applications: 'Sawdust, wood chips, bagasse, and agro-waste briquettes.',
      capacity: '1 - 25 TPH',
    },
  ];

  const doublePassSpecs = [
    { label: 'Equipment Configuration', value: 'Double Pass Nested Concentric Cylinders', highlight: true },
    { label: 'Throughput Capacity', value: '500 kg/hr to 5,000 kg/hr (Scalable to 15 TPH)', highlight: true },
    { label: 'Inlet Air Temperature', value: 'Up to 300°C' },
    { label: 'Shell Material & Thickness', value: 'Heavy Mild Steel (IS 2062 Grade E250) / Optional SS304' },
    { label: 'Drive Mechanism', value: 'Machined cast steel girth gear & forged alloy steel pinion' },
    { label: 'Support Trunnions', value: 'Twin forged alloy steel (EN-8 / EN-9) rollers on spherical bearings' },
    { label: 'Flight Metallurgy', value: 'Continuous spiral feed flights with radial cascading lifting vees' },
    { label: 'Heating Combustion Furnace', value: 'Compatible with Biomass, Coal, Natural Gas, or Light Diesel' },
    { label: 'Dust Separation', value: 'High efficiency cyclone collector with rotary air-lock valve' },
    { label: 'Exhaust Draught', value: 'Induced draft (ID) heavy-duty backward-curved centrifugal fan' },
  ];

  const comparisonRows = [
    {
      parameter: 'Floor Space / Footprint',
      doublePass: 'Compact (approx. 40% less floor space than single-pass)',
      triplePass: 'Ultra-compact (approx. 50% less floor space)',
      singlePass: 'Large footprint; requires long factory bay',
    },
    {
      parameter: 'Thermal Efficiency',
      doublePass: 'High (75% to 85% heat retention)',
      triplePass: 'Very High (80% to 88% heat retention)',
      singlePass: 'Moderate (55% to 65% due to outer radiation loss)',
    },
    {
      parameter: 'Feed Moisture Handling',
      doublePass: 'High tolerance (up to 30% initial feed moisture)',
      triplePass: 'Moderate (best for feeds below 20% moisture)',
      singlePass: 'Wide tolerance (handles coarse, sticky feeds)',
    },
    {
      parameter: 'Clogging & Sticky Mineral Risk',
      doublePass: 'Low risk (wide annular gaps prevent wet sand choke)',
      triplePass: 'High risk (narrow inner shell prone to sand blinding)',
      singlePass: 'Minimal risk (open single diameter tube)',
    },
    {
      parameter: 'Internal Flight Maintenance',
      doublePass: 'Accessible for inspection and flight replacement',
      triplePass: 'Complex; difficult to access middle shell lifters',
      singlePass: 'Easiest internal inspection and maintenance',
    },
    {
      parameter: 'Recommended Material Applications',
      doublePass: 'Silica sand, foundry sand, river sand, fertilizer granules',
      triplePass: 'Light sawdust, non-abrasive wood chips, clean grains',
      singlePass: 'Heavy mineral ores, bauxite lumps, coarse aggregates',
    },
  ];

  const faqs = [
    {
      question: 'Why choose a double-pass concentric dryer over a single-pass drum for silica sand?',
      answer:
        'A double-pass rotary dryer nests an inner drum inside an outer cylinder. Hot air travels through the inner cylinder and returns via the outer annular chamber, cutting radiated heat loss by up to 40% and requiring a significantly shorter factory bay footprint while maintaining complete access for maintenance.',
    },
    {
      question: 'Which combustion fuels can be used with Minerals Solutions rotary dryers?',
      answer:
        'Our hot air generators (HAG) are custom-engineered for solid fuels (pulverized coal, agro-waste briquettes, wood sawdust), natural gas, piped PNG, or light diesel burners, depending on local fuel availability in your industrial zone.',
    },
    {
      question: 'How do you prevent abrasive wear on the drum shell and support rollers?',
      answer:
        'We construct shells from certified IS 2062 structural carbon steel (up to 16mm-25mm plate) with optional SS304 liners for corrosive materials. All support trunnion rollers are machined from forged EN-8/EN-9 alloy steel, induction hardened to 280-320 BHN to eliminate pitting and premature fatigue.',
    },
    {
      question: 'What is the typical manufacturing lead time for an industrial rotary dryer?',
      answer:
        'Standard capacity units (1 to 5 TPH) typically require 4 to 6 weeks for plate rolling, submerged arc welding, dynamic balancing, and workshop trial testing at our Zak GIDC works. Turnkey plants with hot air furnaces and dust collectors range from 6 to 10 weeks.',
    },
  ];

  const dryerSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${company.siteUrl}/products/industrial-rotary-dryers/#product`,
      name: 'Industrial Rotary Drum Dryer & Thermal Systems',
      description:
        'Industrial single, double, and triple pass rotary dryers engineered for high-efficiency moisture reduction in silica sand, minerals, sawdust, and chemicals.',
      image: `${company.siteUrl}/images/products/rotary-dryers/double-pass-rotary-dryer-primary-lg.webp`,
      brand: {
        '@type': 'Brand',
        name: 'Minerals Solutions',
      },
      manufacturer: {
        '@id': `${company.siteUrl}/#organization`,
      },
      category: 'Thermal Drying Systems',
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Throughput Capacity',
          value: '500 kg/hr to 50 TPH',
        },
        {
          '@type': 'PropertyValue',
          name: 'Operating Temperature',
          value: 'Up to 300°C',
        },
        {
          '@type': 'PropertyValue',
          name: 'Drum Shell Metallurgy',
          value: 'IS 2062 Grade E250 Mild Steel / SS304',
        },
        {
          '@type': 'PropertyValue',
          name: 'Support Trunnions',
          value: 'Forged EN-8 / EN-9 Alloy Steel',
        },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '250000',
        highPrice: '3500000',
        offerCount: '12',
        priceValidUntil: '2027-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        seller: {
          '@id': `${company.siteUrl}/#organization`,
        },
      },
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
          name: 'Industrial Rotary Dryers',
          item: `${company.siteUrl}/products/industrial-rotary-dryers/`,
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
      <JsonLd data={dryerSchema} />
      <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
        <Container>
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#E10613]">Home</Link>
            <span>/</span>
            <Link href="/products/" className="hover:text-[#E10613]">Products</Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">Industrial Rotary Dryers</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
                <Flame className="w-3.5 h-3.5" />
                <span>Thermal Drying Systems • Zak GIDC Works</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
                Industrial Rotary Drum Dryers &amp; Thermal Systems
              </h1>
              <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
                Minerals Solutions engineers single-pass, double-pass concentric, and triple-pass rotary dryers
                with capacities from 500 kg/hr up to 50 TPH. Fabricated at our Zak GIDC workshop for continuous
                moisture reduction in silica sand, minerals, sawdust, gypsum, and chemicals.
              </p>

              {/* AI Citability Definition Passage */}
              <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-[#E10613] text-xs sm:text-sm text-slate-700 leading-relaxed shadow-xs">
                An industrial rotary dryer is a heavy continuous thermal processing cylinder designed to reduce the moisture content of bulk solids from up to 35% down to below 0.5%. Manufactured in Zak GIDC, Dahegam, Gujarat by Minerals Solutions, these systems feature single-pass direct-fired drums, concentric double-pass return cylinders, and triple-pass high-efficiency configurations handling throughputs from 500 kg/hr to 50 TPH. The machine utilizes certified IS 2062 Grade B structural steel shells (12 mm to 25 mm thickness), custom engineered internal lifting flights, and forged EN-8/EN-9 alloy steel trunnion support rollers induction hardened to 280-320 BHN. Driven by precision-machined 42CrMo4 girth gears and Siemens/ABB IE3 energy-efficient motors, each unit interfaces with hot air furnaces fueled by coal, agro-waste briquettes, natural gas, or light diesel, delivering thermal efficiencies up to 85% across silica sand, foundry sand, bauxite, clay minerals, and chemical fertilizers.
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button href="/request-quote/" variant="primary" size="md">
                  Request Dryer Quote
                </Button>
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-300 hover:border-[#111111] text-xs font-bold text-[#111111] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E10613]" />
                  <span>Call Works: {primaryPhone}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#E7E7EB] grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="font-mono font-bold text-[#111111] block">500 kg - 50 TPH</span>
                  <span className="text-neutral-500">Capacities</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#111111] block">Up to 300°C</span>
                  <span className="text-neutral-500">Operating Temp</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#111111] block">Multiple Fuels</span>
                  <span className="text-neutral-500">Coal, Gas, Biomass</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E7E7EB] bg-neutral-900 shadow-xl">
                <Image
                  src="/images/products/rotary-dryers/double-pass-rotary-dryer-primary-lg.webp"
                  alt="Minerals Solutions double pass concentric rotary dryer showing outer shell and heavy blue drive frame at Dahegam workshop"
                  width={1200}
                  height={800}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm p-3 rounded-xl text-white text-xs">
                  <span className="font-bold block">Double Pass Concentric Drum Assembly</span>
                  <span className="text-neutral-400 text-[11px]">Fabricated at Zak GIDC Works, Dahegam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Principle & Selection Factors */}
          <div className="bg-white rounded-3xl border border-[#E7E7EB] p-8 sm:p-10 mb-12 shadow-[0_4px_24px_rgba(17,17,17,0.04)] space-y-6">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl font-bold text-[#111111] tracking-tight">
                Operating Principle &amp; Equipment Selection
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed">
                Industrial rotary drying is a continuous convective heat and mass transfer process. Wet feed enters
                the rotating cylinder where engineered internal lifters repeatedly lift and cascade the material through
                a stream of hot gases. When drying silica sand processed in{' '}
                <Link href="/products/sand-washing-plants/" className="font-semibold text-[#E10613] hover:underline">
                  sand washing plants
                </Link>
                , continuous discharge is typically transported by heavy{' '}
                <Link href="/products/industrial-conveyors-spares/" className="font-semibold text-[#E10613] hover:underline">
                  troughed belt conveyors
                </Link>{' '}
                to screening silos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] hover:border-red-200 transition-all space-y-1">
                <span className="text-xs font-bold text-[#111111] block">1. Feed &amp; Target Moisture</span>
                <p className="text-xs text-neutral-600">Initial moisture percentage vs required discharge dryness (e.g. 18% down to &lt; 0.5%).</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] hover:border-red-200 transition-all space-y-1">
                <span className="text-xs font-bold text-[#111111] block">2. Bulk Density &amp; Particle Size</span>
                <p className="text-xs text-neutral-600">Material density, stickiness, angle of repose, and risk of airborne fine entrainment.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] hover:border-red-200 transition-all space-y-1">
                <span className="text-xs font-bold text-[#111111] block">3. Available Fuel Source</span>
                <p className="text-xs text-neutral-600">Solid fuel (coal/briquette), natural gas, or oil determine combustion chamber sizing.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] hover:border-red-200 transition-all space-y-1">
                <span className="text-xs font-bold text-[#111111] block">4. Footprint Constraints</span>
                <p className="text-xs text-neutral-600">Double pass concentric shells provide space savings where factory bay length is limited.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-[#E7E7EB] text-xs text-neutral-700 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#E10613] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#111111]">Technical Note:</strong> Thermal efficiency and moisture reduction figures depend on operating
                conditions, ambient air temperature, and material feed consistency. Inspect our{' '}
                <Link href="/manufacturing/" className="font-semibold text-[#E10613] hover:underline">
                  manufacturing capabilities
                </Link>{' '}
                to see how our dynamic balancing and submerged arc welding eliminate thermal runout.
              </span>
            </div>
          </div>

          {/* Available Configurations Grid */}
          <div className="mb-16" id="configurations">
            <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-6">
              Available Dryer Drum Configurations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dryerTypes.map((type) => (
                <div
                  key={type.name}
                  className="bg-white rounded-2xl border border-[#E7E7EB] overflow-hidden shadow-[0_4px_24px_rgba(17,17,17,0.04)] hover:shadow-[0_16px_36px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all flex flex-col justify-between group"
                >
                  {/* Product Image Header with Link */}
                  <Link
                    href={type.href}
                    className="relative block aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-900 overflow-hidden"
                    aria-label={`View ${type.name} specifications`}
                  >
                    <Image
                      src={type.image}
                      alt={type.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#E10613] text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm border border-white/50">
                        {type.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-white text-[10px] font-mono font-medium">
                        Capacity: {type.capacity}
                      </span>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                          Zak GIDC Works
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-red-50 text-[#E10613] flex items-center justify-center border border-red-100">
                          <Flame className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#E10613] transition-colors leading-snug">
                        <Link href={type.href} className="hover:underline">
                          {type.name}
                        </Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                        {type.desc}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                      <span className="text-neutral-600 line-clamp-1">
                        <strong className="text-[#111111]">Materials:</strong> {type.applications}
                      </span>
                      <Link
                        href={type.href}
                        className="font-bold text-[#E10613] hover:text-[#b0050f] inline-flex items-center gap-1 shrink-0 group/link"
                      >
                        <span>View Machine Specs</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Comparison Module: Double vs Triple vs Single Pass */}
          <div className="mb-16 bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-[#E10613]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10613]">
                Engineering Selection Guide
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-3">
              Double Pass vs. Triple Pass vs. Single Pass Rotary Dryers
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed max-w-3xl mb-8">
              Selecting the optimal rotary dryer design requires balancing thermal efficiency against raw feed
              moisture, abrasiveness, and internal flight maintenance access. Below is our objective engineering
              trade-off comparison:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#E7E7EB] bg-[#F5F5F7]">
                    <th className="p-3.5 font-bold text-[#111111] rounded-l-xl">Design Parameter</th>
                    <th className="p-3.5 font-bold text-[#E10613]">Double Pass (Minerals Solutions)</th>
                    <th className="p-3.5 font-bold text-[#111111]">Triple Pass Standard</th>
                    <th className="p-3.5 font-bold text-[#111111] rounded-r-xl">Single Pass Traditional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="p-3.5 font-semibold text-[#111111]">{row.parameter}</td>
                      <td className="p-3.5 text-neutral-800 bg-red-50/20 font-medium">{row.doublePass}</td>
                      <td className="p-3.5 text-neutral-600">{row.triplePass}</td>
                      <td className="p-3.5 text-neutral-600">{row.singlePass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 leading-relaxed">
              <strong className="text-[#111111] block mb-1">Chief Engineer&apos;s Recommendation:</strong>
              While triple-pass dryers offer high thermal efficiency for dry sawdust and light grains, they are prone to severe
              internal choke points when handling sticky or abrasive silica sands. Minerals Solutions&apos; engineered Double-Pass
              configuration provides 75% to 85% thermal efficiency with full internal inspection access, making it the proven choice
              for mineral, sand, and fertilizer drying operations.
            </div>
          </div>

          {/* Technical Specification Table */}
          <div className="mb-16" id="specifications">
            <TechnicalSpecTable
              title="Double Pass Concentric Rotary Dryer Specifications"
              subtitle="Standard engineering parameters for double-pass concentric drum drying systems."
              modelCode="MS-DP-DRYER"
              specs={doublePassSpecs}
              caption="Parameters shown are representative baseline specifications. Custom drum lengths, shell alloys (SS304/SS316), and drive ratings are engineered based on client requirements."
            />
          </div>

          {/* Technical FAQ Section */}
          <div className="mb-16 bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-[#E10613]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10613]">
                Procurement &amp; Engineering Answers
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-8">
              Frequently Asked Questions (Technical &amp; Commercial)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] space-y-2"
                >
                  <h3 className="text-sm font-bold text-[#111111] leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Call to Action */}
          <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
                Custom Engineering Quote
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Discuss Your Material Drying Requirements
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Provide your input moisture, required output moisture, and hourly capacity. Our chief thermal
                engineers in Zak GIDC will calculate heat balance and recommend the ideal drum configuration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button href="/request-quote/" variant="primary" size="lg">
                Request Dryer Quote
              </Button>
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-700 hover:border-white text-xs font-bold text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E10613]" />
                <span>Call Works: {primaryPhone}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
