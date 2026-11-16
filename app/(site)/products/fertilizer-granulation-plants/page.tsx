import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sprout,
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ChevronRight,
  Info,
  Layers,
  Settings2,
  RotateCw,
  Boxes,
  Factory,
  Scale,
  HelpCircle,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TechnicalSpecTable } from '@/components/ui/TechnicalSpecTable';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Fertilizer Granulation & Pellet Plants | Gujarat Works',
  },
  description:
    'Fabricate turnkey bio-organic & chemical fertilizer granulation plants (1 to 20 TPH). Pan granulators and cooling drums built at Zak GIDC, Dahegam works.',
  alternates: {
    canonical: `${company.siteUrl}/products/fertilizer-granulation-plants/`,
  },
  openGraph: {
    title: 'Fertilizer Granulation & Pellet Plants | Gujarat Works',
    description:
      'Turnkey organic compost and chemical fertilizer granulation systems engineered with pan granulators, rotary coolers, and coating drums at Zak GIDC.',
    url: `${company.siteUrl}/products/fertilizer-granulation-plants/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fertilizer Granulation Plants | Minerals Solutions Gujarat',
    description:
      'Turnkey NPK and bio-organic granulation machinery with stepless angle pan granulators and rotary dryers.',
    images: [defaultTwitterImage],
  },
};

export default function FertilizerPlantsPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const equipmentList = [
    {
      name: 'Pan Disc Fertilizer Granulator',
      href: '/products/fertilizer-granulation-plants/disc-granulator/',
      badge: '35° - 55° Stepless Tilt',
      image: '/images/products/fertilizer-pellet/fertilizer-pan-granulator-unit-md.webp',
      alt: 'Industrial pan disc fertilizer granulator unit with angle tilt frame at Zak GIDC Dahegam works',
      desc: 'Heavy circular disc granulator featuring worm-gear stepless angle adjustment, automatic tungsten carbide scrapers, and liquid binder spray nozzles for dense, spherical granules (≥90% yield).',
      capacity: '0.5 - 5 TPH per pan',
    },
    {
      name: 'Double Roller Granulator (Dry Compaction)',
      href: '/products/fertilizer-granulation-plants/double-roller-granulator/',
      badge: 'Zero Thermal Drying',
      image: '/images/products/fertilizer-pellet/fertilizer-granulation-plant-primary-md.webp',
      alt: 'Double roller compaction granulator machine assembly for chemical NPK fertilizer',
      desc: 'High-pressure dry compaction press for chemical salts, ammonium sulphate, and NPK blends. Ambient room-temperature operation saves up to 80% energy vs wet methods.',
      capacity: '1.0 - 5.5 TPH',
    },
    {
      name: 'Rotary Drum Fertilizer Granulator',
      href: '/products/fertilizer-granulation-plants/rotary-drum-granulator/',
      badge: 'Continuous Tumbling Line',
      image: '/images/products/fertilizer-pellet/fertilizer-granulation-plant-variant-md.webp',
      alt: 'Heavy continuous rotary drum fertilizer granulator with forged girth gear drive',
      desc: 'Heavy industrial rolling-drum granulator with sub-bed steam/liquid spargers, non-stick UHMWPE/rubber liners, and forged girth gear drive for large-scale plants.',
      capacity: '3.0 - 20.0 TPH',
    },
    {
      name: 'Fertilizer Cooling & Coating Drum',
      href: '/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/',
      badge: 'Anti-Caking Hardening',
      image: '/images/products/rotary-dryers/rotary-drum-dryer-md.webp',
      alt: 'Rotary cooling drum for hardening fertilizer granules and preventing caking',
      desc: 'Rotary cooling drum hardening granules via ambient air draft, paired with rotary coating drum applying micronized conditioning oils and neem/talc anti-caking powders.',
      capacity: '2.0 - 15.0 TPH',
    },
  ];

  const panGranulatorSpecs = [
    { label: 'Equipment Classification', value: 'Industrial Disc / Pan Fertilizer Granulator', highlight: true },
    { label: 'Disc Diameter Range', value: '1,500 mm to 3,200 mm (Standard 2,200 mm Model)', highlight: true },
    { label: 'Angle Adjustment Control', value: '35° to 55° stepless worm-gear manual/motorized control', highlight: true },
    { label: 'Throughput Capacity', value: '500 kg/hr to 3,500 kg/hr per unit (Line scaling up to 20 TPH)' },
    { label: 'Pan Rim Construction', value: '300 mm to 450 mm reinforced flange plate (IS 2062 MS / SS304)' },
    { label: 'Scraper System', value: 'Spring-loaded tungsten carbide tipped adjustable floor and rim scrapers' },
    { label: 'Drive Mechanism', value: 'High-torque reduction gearbox with matched electric motor' },
    { label: 'Granule Size Uniformity', value: '2.0 mm to 4.75 mm round pellets (≥90% in-spec yield)' },
    { label: 'Base Pedestal Frame', value: 'Heavy structural ISMC channel iron welded foundation chassis' },
  ];

  const comparisonRows = [
    {
      parameter: 'Raw Feed Moisture Tolerance',
      bioOrganic: 'High (25% to 35% feed moisture from manure/press mud)',
      chemicalNpk: 'Low (<5% moisture; requires steam/liquid binder dosing)',
    },
    {
      parameter: 'Primary Granulation Machine',
      bioOrganic: 'Pan / Disc Granulator with stepless angle control',
      chemicalNpk: 'Heavy rotary drum granulator or high-capacity disc pan',
    },
    {
      parameter: 'Drying Temperature Restrictions',
      bioOrganic: 'Max 100°C-120°C (preserves organic carbon & beneficial microbes)',
      chemicalNpk: 'Up to 180°C-220°C (inlet hot air to flash evaporate chemical water)',
    },
    {
      parameter: 'Binder / Additive Requirements',
      bioOrganic: 'Bentonite clay, humic acid, or sugarcane molasses binder',
      chemicalNpk: 'Sulphuric acid, phosphoric acid, or ammonium salts reaction',
    },
    {
      parameter: 'Finished Pellet Sphericity',
      bioOrganic: 'Dense, smooth spherical pellets (2.5 mm to 5.0 mm)',
      chemicalNpk: 'Hard crystalline spheres (2.0 mm to 4.75 mm)',
    },
    {
      parameter: 'Post-Granulation Hardening',
      bioOrganic: 'Rotary air cooler followed by anti-caking neem oil coat',
      chemicalNpk: 'Intensive rotary cooling and conditioning wax spray',
    },
  ];

  const granulatorComparisonRows = [
    {
      parameter: 'Working Principle',
      panDisc: 'Centrifugal rolling snowball agglomeration in 35°–55° inclined rotating pan',
      rotaryDrum: 'Continuous rolling-curtain cascading tumbling in an inclined rotating cylinder',
    },
    {
      parameter: 'Throughput Capacity',
      panDisc: '0.5 – 5.0 TPH per pan unit (scalable in multi-pan batteries)',
      rotaryDrum: '3.0 – 20.0 TPH continuous mega-tonnage single-line processing',
    },
    {
      parameter: 'Pellet Sphericity & Yield',
      panDisc: '≥90% spherical yield (2.0–4.75 mm) with natural rim self-classification',
      rotaryDrum: '70%–80% in-spec yield; requires oversize crushing and recycle loop',
    },
    {
      parameter: 'Feed Moisture & Steam Feed',
      panDisc: 'Wet powder agglomeration (18%–30% moisture with liquid binder sprays)',
      rotaryDrum: 'Sub-bed steam sparging, chemical slurry reaction, or liquid fertilizer dosing',
    },
    {
      parameter: 'Visual Process Monitoring',
      panDisc: '100% open visual bed: operators adjust tilt angle and spray mist in real time',
      rotaryDrum: 'Enclosed continuous cylinder with end-hood inspection ports',
    },
    {
      parameter: 'Lining & Anti-Stick System',
      panDisc: 'Carbon steel / SS304 pan with spring-loaded tungsten carbide scrapers',
      rotaryDrum: 'High-wear steel shell with flexible breathing rubber or UHMWPE liners',
    },
    {
      parameter: 'Ideal Production Scope',
      panDisc: 'Bio-organic compost, city waste, vermicompost, bentonite, small-mid NPK',
      rotaryDrum: 'High-tonnage chemical compound NPK, DAP, urea-based, and complex fertilizers',
    },
  ];

  const processStages = [
    { stage: '1. Material Preparation', desc: 'Crushing, screening, and proportioned batching of raw bio-mass, cow dung compost, or chemical salts.' },
    { stage: '2. Continuous Mixing', desc: 'Homogeneous pre-mixing with liquid binder sprays in horizontal twin-shaft paddle mixers.' },
    { stage: '3. Pan or Drum Granulation', desc: 'Centrifugal snowball agglomeration building round, uniform granules at calibrated rotation speeds.' },
    { stage: '4. Rotary Thermal Drying', desc: 'Gentle moisture reduction in industrial rotary dryers without degrading heat-sensitive nutrients.' },
    { stage: '5. Rotary Air Cooling', desc: 'Counter-current ambient air cooling to harden granule crystalline shell before packing.' },
    { stage: '6. Vibrating Screening', desc: 'Double-deck classification separating oversize (re-crushed) and undersize (recycled to granulator).' },
    { stage: '7. Anti-Caking Coating', desc: 'Rotary drum micro-application of conditioning oils and neem/talc coating.' },
    { stage: '8. Automatic Bagging', desc: 'Weighing, sealing, and palletizing into 25 kg / 50 kg moisture-proof commercial sacks.' },
  ];

  const faqs = [
    {
      question: 'When should a plant use a pan (disc) granulator versus a rotary drum granulator?',
      answer:
        'Pan (disc) granulators are ideal for bio-organic compost and lines up to 5 TPH where operators need visual control over granule snowballing and high spherical uniformity (≥90%). Rotary drum granulators are favored for mega-tonnage chemical NPK plants (10 to 30 TPH) handling chemical slurry ammoniation.',
    },
    {
      question: 'How do you prevent heat damage to organic microbes during fertilizer drying?',
      answer:
        'Our rotary fertilizer dryers utilize co-current warm air flow (inlet temperatures carefully moderated between 100°C and 130°C) with high air volumes rather than scorching radiant heat. This gently drives off surface moisture down to 10-12% without degrading valuable humic acids or beneficial microbes.',
    },
    {
      question: 'What is the function of the rotary cooling and coating drum in the circuit?',
      answer:
        'Warm granules discharged from the dryer are prone to caking and clumping if bagged immediately. The rotary cooler lowers granule core temperatures to within 5°C of ambient, while the downstream coating drum coats each sphere with neem oil or talc powder to prevent moisture absorption in storage.',
    },
    {
      question: 'What is the required floor space for a 3 TPH complete granulation plant?',
      answer:
        'A standard 3 TPH turnkey bio-fertilizer line (including mixer, pan granulators, dryer, cooler, screening decks, and packaging) requires approximately 45 meters in length by 12 meters in width with a minimum 6-meter overhead crane clearance.',
    },
  ];

  const fertilizerSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${company.siteUrl}/products/fertilizer-granulation-plants/#product`,
      name: 'Turnkey Fertilizer Granulation & Bio-Pellet Plants',
      description:
        'Complete bio-organic compost and NPK chemical fertilizer granulation machinery featuring disc pan granulators, rotary dryers, and coating drums.',
      image: `${company.siteUrl}/images/products/fertilizer-pellet/fertilizer-granulation-plant-primary-lg.webp`,
      brand: {
        '@type': 'Brand',
        name: 'Minerals Solutions',
      },
      manufacturer: {
        '@id': `${company.siteUrl}/#organization`,
      },
      category: 'Granulation & Pellet Machinery',
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Plant Capacity Range',
          value: '1 TPH to 20 TPH',
        },
        {
          '@type': 'PropertyValue',
          name: 'Disc Granulator Tilt',
          value: '35° to 55° Stepless Angle',
        },
        {
          '@type': 'PropertyValue',
          name: 'Pellet Size Uniformity',
          value: '2.0 mm to 6.0 mm round pellets (≥90% in-spec yield)',
        },
        {
          '@type': 'PropertyValue',
          name: 'Finished Granule Crush Strength',
          value: '15 N to 25 N compressive hardness',
        },
        {
          '@type': 'PropertyValue',
          name: 'Drive Power Range',
          value: '7.5 kW to 75 kW matched to line capacity',
        },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '500000',
        highPrice: '5500000',
        offerCount: '10',
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
          name: 'Fertilizer Granulation Plants',
          item: `${company.siteUrl}/products/fertilizer-granulation-plants/`,
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
      <JsonLd data={fertilizerSchema} />
      <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
        <Container>
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#E10613]">Home</Link>
            <span>/</span>
            <Link href="/products/" className="hover:text-[#E10613]">Products</Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">Fertilizer Granulation Plants</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
                <Sprout className="w-3.5 h-3.5" />
                <span>Fertilizer Processing &amp; Pelletizing • Zak GIDC Works</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
                Fertilizer Granulation &amp; Bio-Pellet Plants
              </h1>
              <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
                Minerals Solutions designs and manufactures turnkey organic compost and chemical NPK fertilizer
                granulation machinery. From disc pan granulators with stepless tilt control to continuous rotary
                cooling and conditioning drums.
              </p>

              {/* AI Citability Definition Passage */}
              <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-[#E10613] text-xs sm:text-sm text-slate-700 leading-relaxed shadow-xs">
                A fertilizer granulation plant is an industrial manufacturing line engineered to transform fine chemical powders, animal manure, pressed mud, and organic compost into uniform 2.0 mm to 4.5 mm spherical pellets. Engineered in Zak GIDC, Dahegam, Gujarat by Minerals Solutions, these turnkey installations achieve production capacities from 1 to 20 TPH across bio-organic fertilizers, city compost, vermicompost, and compound NPK blends. The process incorporates pan disc granulators with stepless 40° to 55° inclination adjustment, dry double-roller compaction presses, continuous tumbling drum granulators, rotary coolers, and rotary anti-caking coating drums. Built with certified IS 2062 steel shells, acid-resistant 304 stainless steel or UHMWPE liners, and hardened alloy steel internal scrapers, Minerals Solutions granulation lines consistently yield over 90% in-spec finished granules with compressive crush strengths exceeding 15 to 25 N, preventing product degradation and dusting during bagging, transport, and automated field spreading.
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button href="/request-quote/?product=fertilizer-granulation-plant&type=granulation-test" variant="primary" size="md">
                  Request Custom Granulation Test / Sizing Calculation
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
                  <span className="font-mono font-bold text-[#111111] block">1 - 20 TPH</span>
                  <span className="text-neutral-500">Plant Throughput</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#111111] block">35° - 55°</span>
                  <span className="text-neutral-500">Pan Tilt Control</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#111111] block">≥90% Sphericity</span>
                  <span className="text-neutral-500">Finished Yield</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E7E7EB] bg-neutral-900 shadow-xl">
                <Image
                  src="/images/products/fertilizer-pellet/fertilizer-granulation-plant-primary-lg.webp"
                  alt="Minerals Solutions turnkey fertilizer granulation plant installation showing pan disc granulators and conveyor belts"
                  width={1200}
                  height={800}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm p-3 rounded-xl text-white text-xs">
                  <span className="font-bold block">Turnkey Fertilizer Granulation Line</span>
                  <span className="text-neutral-400 text-[11px]">Fabricated at Zak GIDC Works, Dahegam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Turnkey Process Flow */}
          <div className="bg-white rounded-3xl border border-[#E7E7EB] p-8 sm:p-10 mb-12 shadow-[0_4px_24px_rgba(17,17,17,0.04)] space-y-6">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl font-bold text-[#111111] tracking-tight">
                Turnkey Process Flow: From Raw Manure to Bagged Granules
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed">
                Producing commercial-grade organic and compound fertilizer pellets requires an integrated sequential
                circuit. Each unit operation is linked via heavy-duty{' '}
                <Link href="/products/industrial-conveyors-spares/" className="font-semibold text-[#E10613] hover:underline">
                  troughed belt conveyors
                </Link>{' '}
                and specialized{' '}
                <Link href="/products/industrial-rotary-dryers/" className="font-semibold text-[#E10613] hover:underline">
                  rotary drum drying systems
                </Link>:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {processStages.map((st) => (
                <div
                  key={st.stage}
                  className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] hover:border-red-200 transition-all space-y-1"
                >
                  <span className="text-xs font-bold text-[#111111] block">{st.stage}</span>
                  <p className="text-xs text-neutral-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-[#E7E7EB] text-xs text-neutral-700 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#E10613] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#111111]">Engineering Note:</strong> Granulation efficiency depends on particle size distribution
                and moisture content of the input compost. Our engineers at Zak GIDC evaluate raw materials to configure the optimal
                spray nozzle positions and rotational pan speeds.
              </span>
            </div>
          </div>

          {/* Equipment Showcase Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-6">
              Core Equipment Units in Granulation Lines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipmentList.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl border border-[#E7E7EB] overflow-hidden shadow-[0_4px_24px_rgba(17,17,17,0.04)] hover:shadow-[0_16px_36px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all flex flex-col justify-between group"
                >
                  {/* Product Image Header with Link */}
                  <Link
                    href={item.href}
                    className="relative block aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-900 overflow-hidden"
                    aria-label={`View ${item.name} specifications`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#E10613] text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm border border-white/50">
                        {item.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-white text-[10px] font-mono font-medium">
                        Capacity: {item.capacity}
                      </span>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                          Granulation Line
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-red-50 text-[#E10613] flex items-center justify-center border border-red-100">
                          <Sprout className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#E10613] transition-colors leading-snug">
                        <Link href={item.href} className="hover:underline">
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                      <span className="text-neutral-600">
                        <strong className="text-[#111111]">Output:</strong> {item.capacity}
                      </span>
                      <Link
                        href={item.href}
                        className="font-bold text-[#E10613] hover:text-[#b0050f] inline-flex items-center gap-1 shrink-0 group/link"
                      >
                        <span>View Specifications</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Comparison Module: Bio-Organic vs Chemical NPK */}
          <div className="mb-16 bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-[#E10613]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10613]">
                Agronomic &amp; Engineering Guide
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-3">
              Bio-Organic Compost vs. Chemical NPK Fertilizer Granulation
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed max-w-3xl mb-8">
              Granulating organic bio-fertilizer and chemical fertilizers requires distinct drying profiles, binder
              formulations, and corrosion-resistant contact metallurgies. Below is our engineering comparison:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#E7E7EB] bg-[#F5F5F7]">
                    <th className="p-3.5 font-bold text-[#111111] rounded-l-xl">Process Parameter</th>
                    <th className="p-3.5 font-bold text-[#E10613]">Bio-Organic Compost Granulation</th>
                    <th className="p-3.5 font-bold text-[#111111] rounded-r-xl">Chemical NPK Compound Fertilizer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="p-3.5 font-semibold text-[#111111]">{row.parameter}</td>
                      <td className="p-3.5 text-neutral-800 bg-red-50/20 font-medium">{row.bioOrganic}</td>
                      <td className="p-3.5 text-neutral-600">{row.chemicalNpk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 leading-relaxed">
              <strong className="text-[#111111] block mb-1">Fertilizer Plant Specialist Recommendation:</strong>
              Because organic manures contain delicate nitrogen-fixing microbes, direct high-temperature flame drying causes
              nutrient loss. Minerals Solutions specifies indirect warm air draft dryers for organic lines and heavy SS304
              lined disc granulators to withstand corrosive manure acids.
            </div>
          </div>

          {/* Machinery Selection Comparison: Pan / Disc vs Rotary Drum */}
          <div className="mb-16 bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-[#E10613]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10613]">
                Machinery Selection Matrix
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-3">
              Pan / Disc Granulator vs. Rotary Drum Granulator
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed max-w-3xl mb-8">
              Selecting between an inclined disc pan granulator and a heavy rotary drum granulator depends on your production
              scale, raw material chemistry, and target granule sphericity:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#E7E7EB] bg-[#F5F5F7]">
                    <th className="p-3.5 font-bold text-[#111111] rounded-l-xl">Engineering Parameter</th>
                    <th className="p-3.5 font-bold text-[#E10613]">Pan / Disc Granulator (MS-PG Series)</th>
                    <th className="p-3.5 font-bold text-[#111111] rounded-r-xl">Rotary Drum Granulator (MS-RDG Series)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {granulatorComparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="p-3.5 font-semibold text-[#111111]">{row.parameter}</td>
                      <td className="p-3.5 text-neutral-800 bg-red-50/20 font-medium">{row.panDisc}</td>
                      <td className="p-3.5 text-neutral-600">{row.rotaryDrum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 text-white">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">Unsure which technology matches your formulation?</span>
                <p className="text-xs text-slate-300">Our Zak GIDC engineers conduct laboratory trial pelletizing and sizing calculations on your raw compost or chemical blend.</p>
              </div>
              <Button href="/request-quote/?product=fertilizer-granulation-plant&type=granulation-test" variant="primary" size="sm" className="shrink-0 font-bold">
                Request Custom Granulation Test / Sizing Calculation &rarr;
              </Button>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="mb-16">
            <TechnicalSpecTable
              title="Industrial Disc Pan Granulator Specifications"
              subtitle="Engineering parameters for circular disc agglomeration and pelletizing pans."
              modelCode="MS-PG-2200"
              specs={panGranulatorSpecs}
              caption="Specifications reflect the standard MS-PG-2200 model. Custom pan diameters (1.5m to 3.2m), motorized inclination jacks, and stainless steel linings are engineered upon request."
            />
          </div>

          {/* Technical FAQ Section */}
          <div className="mb-16 bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-[#E10613]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10613]">
                Plant Engineering &amp; Operation FAQs
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-8">
              Frequently Asked Questions (Fertilizer Plants)
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

          {/* Call to Action */}
          <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
                Turnkey Fertilizer Plant Engineering
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Plan Your Fertilizer Production Plant
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Connect with our process equipment engineers at Zak GIDC. We provide plant layout drawings,
                granulation recipes, and equipment manufacturing for bio-organic and chemical fertilizer projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button href="/request-quote/?product=fertilizer-granulation-plant&type=granulation-test" variant="primary" size="lg">
                Request Custom Granulation Test / Sizing Calculation
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
