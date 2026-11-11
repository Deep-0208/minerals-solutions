import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Waves,
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
  Flame,
  Droplets,
  Filter,
  Check,
  TrendingDown,
  Activity,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Silica Sand Washing Plant Manufacturer | Minerals Solutions',
  },
  description: 'Engineer complete silica sand washing plants (20 to 150 TPH) with log washing, hydrocyclones & dewatering for glass and foundry sand. Zak GIDC, Dahegam.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/sand-washing-plants/silica-sand-washing-plant/',
  },
  openGraph: {
    title: 'Silica Sand Washing Plant System | Minerals Solutions',
    description:
      'Complete silica sand washing plants (20 to 150 TPH). Log washing, hydrocyclone desliming & dewatering for glass & ceramic sand. Zak GIDC, Dahegam.',
    url: `${company.siteUrl}/products/sand-washing-plants/silica-sand-washing-plant/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silica Sand Washing Plant Manufacturer | Minerals Solutions',
    description:
      'Complete silica sand washing plants (20 to 150 TPH). Log washing, hydrocyclone desliming & dewatering for glass & ceramic sand. Zak GIDC, Dahegam.',
    images: [defaultTwitterImage],
  },
};

export default function SilicaSandWashingPlantPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const rfqLink = '/request-quote/?product=silica-sand-washing-plant';
  const whatsappUrl = `https://wa.me/916352453050?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering flowsheet and quotation for a Turnkey Silica Sand Washing Plant.'
  )}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Sand Washing Plants', href: '/products/sand-washing-plants/' },
    { label: 'Silica Sand Washing Plant', href: '/products/sand-washing-plants/silica-sand-washing-plant/' },
  ];

  const models = [
    {
      model: 'MS-SWP-20',
      capacity: '20 – 30 TPH',
      feedSize: '0 – 5 mm',
      waterDemand: '80 – 120 m³/hr',
      cycloneDiameter: 'Ø 350 mm (Polyurethane)',
      dewateringScreen: '1.2 m × 2.4 m High-Frequency',
      totalConnectedPower: '45 HP (33 kW)',
    },
    {
      model: 'MS-SWP-50',
      capacity: '50 – 60 TPH (Popular)',
      feedSize: '0 – 6 mm',
      waterDemand: '150 – 200 m³/hr',
      cycloneDiameter: 'Ø 500 mm Polyurethane',
      dewateringScreen: '1.5 m × 3.6 m High-Frequency',
      totalConnectedPower: '85 HP (63 kW)',
    },
    {
      model: 'MS-SWP-100',
      capacity: '100 – 120 TPH',
      feedSize: '0 – 8 mm',
      waterDemand: '250 – 320 m³/hr',
      cycloneDiameter: 'Twin Ø 500 mm Hydrocyclones',
      dewateringScreen: '1.8 m × 4.2 m High-Frequency',
      totalConnectedPower: '140 HP (105 kW)',
    },
    {
      model: 'MS-SWP-150',
      capacity: '150 – 180 TPH (Heavy Industrial)',
      feedSize: '0 – 10 mm',
      waterDemand: '380 – 450 m³/hr',
      cycloneDiameter: 'Twin Ø 660 mm Hydrocyclones',
      dewateringScreen: '2.1 m × 4.8 m High-Frequency',
      totalConnectedPower: '210 HP (155 kW)',
    },
  ];

  const processStages = [
    {
      stage: 'Stage 1',
      title: 'Coarse Screening & Attrition Scrubbing',
      equipment: 'Vibrating Scalping Screen & Twin-Shaft Log Washer',
      description:
        'Raw mined silica sand and quartz lumps enter a high-frequency scalper screen to reject +8mm oversize stones. The slurry passes into a contra-rotating twin-shaft log washer where heavy manganese steel paddles violently scrub adherent red clay coatings and silt films from individual quartz crystal faces.',
    },
    {
      stage: 'Stage 2',
      title: 'High-Shear Slurry Pumping',
      equipment: 'Heavy-Duty Natural Rubber Lined Slurry Pump',
      description:
        'Scrubbed mineral slurry is collected in a specialized agitation sump tank. A high-efficiency slurry pump equipped with wear-resistant high-chrome alloy impellers propels the 35% solid density mixture upward into the desliming hydrocyclone cluster under controlled centrifugal pressure (1.2 to 1.8 bar).',
    },
    {
      stage: 'Stage 3',
      title: 'Hydrocyclone Centrifugal Desliming',
      equipment: 'Polyurethane Hydrocyclone Separator Cluster',
      description:
        'In the hydrocyclone body, centrifugal G-force separates heavy quartz grains from ultra-fine clay slimes. Clean +75 micron silica sand discharges through the bottom vortex finder (apex nozzle), while -75 micron clay, mica flakes, and turbidity overflow to the water treatment thickener.',
    },
    {
      stage: 'Stage 4',
      title: 'High-Frequency Dewatering Screen',
      equipment: 'Linear Motion Polyurethane Screen (45 Hz Vibration)',
      description:
        'The hydrocyclone underflow discharges directly onto an inclined dewatering screen fitted with 0.3mm to 0.5mm modular polyurethane panels. Dual out-of-balance vibratory motors strip excess gravitational water, producing a semi-dry, stackable cake at 12%–14% residual moisture.',
    },
  ];

  const purityComparison = [
    {
      parameter: 'Silicon Dioxide Content (SiO2)',
      rawMined: '92.5% – 95.8% (Clay & feldspar dilution)',
      washedGlass: '99.2% – 99.7% (Ultra-pure crystalline quartz)',
      significance: 'Essential for glass clarity and ceramic tile vitrification temperature.',
    },
    {
      parameter: 'Iron Oxide Impurity (Fe2O3)',
      rawMined: '0.45% – 1.20% (Red clay & iron staining)',
      washedGlass: '<0.030% – 0.045% (Bleached white sand)',
      significance: 'Prevents green/brown coloration in optical containers and ceramic bodies.',
    },
    {
      parameter: 'Silt & Ultra-Fine Clay (-75 Micron)',
      rawMined: '8.0% – 16.0% (High turbidity)',
      washedGlass: '<0.5% (Meets IS 650 & IS 1622 standards)',
      significance: 'Eliminates binder waste in dry-mix mortar and foundry resin casting.',
    },
    {
      parameter: 'Moisture at Stockpile Discharge',
      rawMined: 'Variable / Soggy slurry',
      washedGlass: '12% – 14% (Dripless, stackable cake)',
      significance: 'Directly conveyor-transferable to rotary drying without puddle pools.',
    },
    {
      parameter: 'Market Realization Value / Ton',
      rawMined: '₹ 350 – ₹ 550 / Ton (Low-grade)',
      washedGlass: '₹ 1,400 – ₹ 2,800 / Ton (Premium glass/foundry)',
      significance: 'Enables 3X to 5X commercial revenue uplift for mine operators.',
    },
  ];

  const faqs = [
    {
      question: 'What is the complete silica sand washing plant cost for a 50 TPH turnkey setup?',
      answer:
        'A complete 50 TPH turnkey silica sand washing plant manufactured by Minerals Solutions typically ranges between ₹ 28,00,000 and ₹ 48,00,000 for the core mechanical beneficiation circuit (heavy scalping screen, twin-shaft log washer scrubber, high-chrome slurry pump, polyurethane hydrocyclone, and high-frequency dewatering screen). Turnkey lines equipped with automated flocculant dosing, high-rate lamella thickeners, and filter presses for 90% water recovery range from ₹ 55,00,000 to ₹ 95,00,000 depending on civil automation levels.',
    },
    {
      question: 'How does the plant reduce Iron Oxide (Fe2O3) to meet glass-grade standards?',
      answer:
        'Most iron in natural silica sand occurs as red hematite/limonite clay films coating quartz crystals. Our intensive twin-shaft log washer rubs grain against grain in a dense slurry bed, shearing away the adherent iron-bearing clay coatings. The downstream hydrocyclone then ejects these liberated iron-clay micro-slimes into the overflow, dropping Fe2O3 levels from 0.8% down to <0.035% without requiring hazardous chemical acid leaching.',
    },
    {
      question: 'What are the water consumption and recycling requirements of the washing plant?',
      answer:
        'A 50 TPH silica washing line requires approximately 150 to 180 m³/hr of circulating water. However, when paired with Minerals Solutions high-rate water clarification thickeners and sludge filter presses, 85% to 90% of water is recycled immediately back into the washing circuit. Fresh make-up water demand is limited to only 15–20 m³/hr, making the plant fully operable in water-scarce mining belts like Kutch and Surendranagar.',
    },
    {
      question: 'Why are polyurethane screen panels preferred over stainless steel mesh?',
      answer:
        'Silica sand is extremely abrasive (Mohs hardness 7.0). Stainless wire cloth typically blinds within 100 operating hours and fails from fatigue within 3 to 4 weeks. High-grade cast polyurethane panels provide 8X to 10X longer wear life (1,500+ operating hours), prevent pegging and sand blinding with tapered relief apertures, and can be replaced in modular 300x300mm sections in minutes.',
    },
    {
      question: 'Can the washed silica sand feed directly into your industrial rotary dryer?',
      answer:
        'Yes. Our high-frequency dewatering screen discharges washed silica sand at approximately 12% to 14% moisture, which is dripless and free-flowing. It discharges directly onto an inclined troughed belt conveyor that charges our Industrial Rotary Sand Dryer, creating a continuous automated Wash-and-Dry production line.',
    },
  ];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${company.siteUrl}/products/sand-washing-plants/silica-sand-washing-plant/#product`,
    name: 'Turnkey Silica Sand Washing & Classification Plant',
    model: 'MS-SWP-Series',
    description:
      'Turnkey silica sand washing and classification plants (20 to 150 TPH). Log washing, hydrocyclone desliming, and high-frequency dewatering for glass, ceramic, and foundry sand processing in Gujarat.',
    image: `${company.siteUrl}/images/products/mineral-processing/river-sand-washing-plant-lg.webp`,
    brand: {
      '@type': 'Brand',
      name: 'Minerals Solutions',
    },
    manufacturer: {
      '@id': `${company.siteUrl}/#organization`,
    },
    category: 'Mineral Beneficiation Plants',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '2800000',
      highPrice: '9500000',
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
        value: '20 TPH to 150 TPH',
      },
      {
        '@type': 'PropertyValue',
        name: 'Beneficiation Technology',
        value: 'Attrition Log Washing + Hydrocyclone Centrifugal Desliming + 45Hz Dewatering',
      },
      {
        '@type': 'PropertyValue',
        name: 'Clay Silt Cutoff',
        value: '-75 Micron Slime Elimination (<0.5% silt retention)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Glass Grade Purity',
        value: 'SiO2 > 99.2%, Fe2O3 < 0.035%',
      },
      {
        '@type': 'PropertyValue',
        name: 'Water Recycling Rate',
        value: 'Up to 90% water recovery with integrated thickener circuit',
      },
      {
        '@type': 'PropertyValue',
        name: 'Manufacturing Facility',
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
        name: 'Sand Washing Plants',
        item: `${company.siteUrl}/products/sand-washing-plants/`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Silica Sand Washing Plant',
        item: `${company.siteUrl}/products/sand-washing-plants/silica-sand-washing-plant/`,
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
        <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-cyan-50/40 via-white to-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Headers & CTAs */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-bold tracking-wide uppercase mb-4">
                  <Waves className="w-3.5 h-3.5 text-cyan-700" />
                  Turnkey Wet Mineral Beneficiation Engineering
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] mb-5">
                  Turnkey Silica Sand <span className="text-cyan-700">Washing</span> & Beneficiation Plants
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
                  Heavy-duty wet classification systems engineered to upgrade raw mined quartz and silica sand into ultra-pure <strong>glass-grade (Fe2O3 &lt; 0.03%)</strong> and <strong>Morbi ceramic-grade</strong> feed. Featuring twin-shaft attrition log washers, polyurethane hydrocyclone desliming, and 45Hz dewatering screens across capacities from <strong>20 to 150 TPH</strong>.
                </p>

                {/* Pricing & Commercial Badge */}
                <div className="p-4 rounded-xl bg-slate-900 text-white mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Indicative Turnkey System Pricing
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-cyan-400 mt-0.5">
                      ₹ 28,00,000 <span className="text-xs font-normal text-slate-300">to ₹ 95,00,000</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-300 border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-4">
                    <div>Capacities: 20 TPH to 150 TPH</div>
                    <div className="text-emerald-400 font-semibold mt-0.5">85%–90% Water Recovery Recirculation</div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-xl bg-slate-100/80 border border-slate-200 mb-8">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-cyan-800 tracking-tight">
                      &gt;99.2%
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      SiO2 Purity
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#DA020D] tracking-tight">
                      &lt;0.03%
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Fe2O3 Iron Oxide
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      150 TPH
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Max Capacity
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">
                      12–14%
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Stackable Moisture
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
                    Request Plant Flowsheet & Sizing
                  </Button>

                  <Button
                    href={whatsappUrl}
                    external
                    size="lg"
                    variant="outline"
                    className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold"
                    icon={<Phone className="w-4 h-4 text-emerald-600" />}
                  >
                    WhatsApp Beneficiation Desk
                  </Button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Polyurethane Cyclone Liners
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Manganese Log Washer Paddles
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Dahegam Workshop Trial Tested
                  </span>
                </div>
              </div>

              {/* Right Column: Authentic Equipment Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                  <div className="relative aspect-[4/3] w-full bg-slate-900">
                    <Image
                      src="/images/products/mineral-processing/river-sand-washing-plant-lg.webp"
                      alt="Turnkey Silica Sand Washing & Beneficiation Plant manufactured by Minerals Solutions in Zak GIDC Gujarat" width={800} height={600}
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 550px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-1">
                        Turnkey Mineral Processing Works
                      </div>
                      <div className="text-sm font-semibold text-slate-100">
                        Integrated Hydrocyclone Washing & Dewatering Plant
                      </div>
                    </div>
                  </div>

                  {/* Micro Specs Card Strip */}
                  <div className="p-4 bg-slate-900 text-slate-200 text-xs divide-y divide-slate-800">
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Target Minerals</span>
                      <span className="font-semibold text-white">Silica Sand, Quartz, Foundry Aggregate</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Slime Cut Point</span>
                      <span className="font-semibold text-cyan-400">-75 Micron (200 Mesh)</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Dewatering Motion</span>
                      <span className="font-semibold text-white">Linear 45Hz High-Frequency</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Fabrication Source</span>
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
                  <strong className="text-slate-950 font-semibold">What is a turnkey silica sand washing plant? </strong>
                  A silica sand washing plant is a turnkey mineral wet-processing circuit engineered to eliminate clay slimes, refractory silt, and surface iron staining from raw silica rock and glass sand deposits. Fabricated at Minerals Solutions works in Zak GIDC, Dahegam, the modular plant integrates an attrition scrubbing cell, twin-shaft log washer, high-pressure hydrocyclone desliming tower, and high-frequency polyurethane dewatering screen. Processing feed rates from 20 to 150 TPH, the circuit scrubs away stubborn plastic clay coatings, separates detrimental -75 micron fines, and recovers 95%+ of saleable 100 to 600 micron silica sand. Discharging clean industrial aggregate at 12% to 14% residual moisture with silt contents below 0.5%, the plant reliably delivers high-purity SiO2 grades (exceeding 99.2%) conforming to strict IS 488 standards for container glass, solar photovoltaics, and automotive foundry casting operations.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 4-Stage Beneficiation Flowsheet Section */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-cyan-800 mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-700" />
                Engineering Process Flowsheet
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Multi-Stage Beneficiation: Scrubbing, Desliming & Dewatering
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                How Minerals Solutions closed-circuit flowsheet purifies run-of-mine quartz sand into export-grade raw materials.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processStages.map((st) => (
                <div
                  key={st.stage}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-800 bg-cyan-50 border border-cyan-200 px-2.5 py-1 rounded-full">
                        {st.stage}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-950 mb-1 leading-snug">
                      {st.title}
                    </h3>

                    <div className="text-xs font-semibold text-cyan-700 mb-3">
                      {st.equipment}
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Plant Capex & Operating Cost Notice */}
            <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1">
                  Evaluating Commercial Feasibility?
                </div>
                <h4 className="text-lg font-bold text-white">
                  Silica Sand Washing Plant Capex & Operating Cost Guide
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                  Average electrical power cost per ton of washed silica sand is ₹ 18 to ₹ 26/ton; water treatment flocculant cost is ₹ 3.50 to ₹ 6.00/ton, delivering a full capital payback within 9 to 14 months for commercial quarry operators.
                </p>
              </div>
              <Button
                href={rfqLink}
                size="lg"
                variant="primary"
                className="shrink-0 font-bold shadow-md shadow-red-600/10"
              >
                Request Detailed Project Report (DPR)
              </Button>
            </div>
          </Container>
        </section>

        {/* End-Product Purity Comparison Table */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-cyan-800 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-700" />
                Quality Transformation Benchmark
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Achieving Glass & Ceramic Grade Purity: Fe2O3 and Clay Reduction
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Direct metallurgical comparison between raw pit sand and high-purity glassmaker sand processed through our Dahegam-manufactured lines.
              </p>
            </div>

            {/* Responsive Purity Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-800 border-collapse">
                <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800 w-1/4">
                      Beneficiation Parameter
                    </th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800 w-1/4">
                      Raw Mined Silica Sand
                    </th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800 bg-cyan-900 text-cyan-200 w-1/4">
                      Washed Glass-Grade Sand
                    </th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800 w-1/4">
                      Commercial Impact
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {purityComparison.map((row, idx) => (
                    <tr
                      key={row.parameter}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                        {row.parameter}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 font-mono text-xs">
                        {row.rawMined}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-cyan-900 bg-cyan-50/60 font-mono text-xs">
                        {row.washedGlass}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 text-xs">
                        {row.significance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* Plant Flowsheet & Equipment Specifications (MS-SWP Series) */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Scale className="w-4 h-4" />
                Standard Equipment Series
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Plant Flowsheet & Equipment Specifications (MS-SWP Series)
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Engineering models from 20 TPH single-cyclone modules up to 150 TPH multi-stream industrial sand washing lines.
              </p>
            </div>

            {/* Responsive Engineering Specification Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-800 border-collapse">
                <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Model Series</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Sand Capacity</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Feed Size</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Circulating Water</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Hydrocyclone Cluster</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Dewatering Screen</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Connected Power</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {models.map((item, idx) => (
                    <tr
                      key={item.model}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/70 hover:bg-slate-100/70'}
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-950 font-mono text-xs">
                        {item.model}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-cyan-800">
                        {item.capacity}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-xs">{item.feedSize}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-slate-700">{item.waterDemand}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-xs text-slate-700">{item.cycloneDiameter}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-xs text-slate-700">{item.dewateringScreen}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-xs font-bold text-slate-900">{item.totalConnectedPower}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <p>
                * Slurry pump fitted with heavy Ni-Hard / 28% Chrome alloy impellers. Hydrocyclone body lined with virgin 95 Shore A cast polyurethane.
              </p>
              <Link
                href={rfqLink}
                className="font-bold text-[#DA020D] hover:underline inline-flex items-center gap-1"
              >
                Request custom water balance calculation <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Container>
        </section>

        {/* Hydrocyclone Fines Recovery & Dewatering Screen Deep Dive */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-cyan-800 mb-2 flex items-center gap-1.5">
                <Filter className="w-4 h-4 text-cyan-700" />
                Precision Desliming Mechanics
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Hydrocyclone Fines Recovery & Polyurethane Dewatering Screen
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Why traditional bucket wheel sand washers lose up to 25% of valuable fine sand (150 to 75 microns) into tailing ponds, and how our hydrocyclone circuit recovers it completely.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-cyan-900 text-base mb-3">
                  <Cog className="w-5 h-5 text-cyan-700" />
                  Cast Polyurethane Hydrocyclones (95 Shore A)
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Slurry enters tangential involute inlets creating extreme rotational vortex velocity. Fine silica particles down to 75 microns are driven outward against the cone walls by centrifugal force, discharging through the siphon apex nozzle. Mud, clay colloids, and organic particles remain suspended in the central air core and exit through the overflow.
                </p>
                <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 p-2.5 rounded-lg">
                  ✓ Over 95% recovery of usable Zone-II and Zone-III fine sand grains.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-cyan-900 text-base mb-3">
                  <Activity className="w-5 h-5 text-cyan-700" />
                  Linear High-Frequency Dewatering Screen (45 Hz)
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Driven by dual contra-rotating out-of-balance vibratory motors inclined at 5 degrees uphill. The continuous forward throw forms an autogenous cake filter on modular 0.3mm to 0.5mm polyurethane panels. Surface water is vacuum-pulled through the screen deck, discharging dripless silica sand at 12%–14% moisture.
                </p>
                <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 p-2.5 rounded-lg">
                  ✓ Eliminates soggy stockpile drainage puddles and enables direct conveyor transport.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Water Clarification & Closed-Loop Recycling Systems */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-emerald-600" />
                Zero Liquid Discharge (ZLD)
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Water Clarification & Closed-Loop Recycling Systems
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Operating high-capacity silica washing in water-scarce mining corridors across Surendranagar, Kutch, and Rajasthan without needing massive tailing settling ponds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  Automated Flocculant Dosing
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Precision polymer preparation system automatically blends anionic polyacrylamide flocculants, rapidly binding suspended clay colloids into heavy flocs.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  High-Rate Lamella Thickener
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Inclined lamella plate packs settle clay flocs 5X faster than standard clarifiers, discharging crystal-clear recycled water back to the log washer sump.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  Chamber Sludge Filter Press
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  High-pressure hydraulic recessed plate filter press squeezes thickened clay underflow into dry, shovelable clay cakes (25% moisture) for easy dry stacking.
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
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider mb-2">
                    Sibling Washing Line
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Bucket Wheel Sand Washer System
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Low-power solid-liquid classification machine for M-Sand and gravel desilting.
                  </p>
                </div>
                <Link
                  href="/products/sand-washing-plants/bucket-wheel-sand-washer/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  View Machine Specifications <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Sibling Spoke 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-2">
                    Sibling Washing Line
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Hydrocyclone Fine Sand Recovery Unit
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Centrifugal fines recovery skid capturing 95%+ of 75-150 micron fine plaster sand.
                  </p>
                </div>
                <Link
                  href="/products/sand-washing-plants/hydrocyclone-sand-separator/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  View Machine Specifications <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Cross-Pillar Machine */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider mb-2">
                    Complementary Thermal System
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Industrial Rotary Sand Dryer Unit
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Downstream thermal processing drum to convert washed sand into bone-dry foundry and glass sand.
                  </p>
                </div>
                <Link
                  href="/products/industrial-rotary-dryers/sand-dryer/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  Explore Complementary Machine <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Frequently Asked Questions About Silica Sand Plant Costs */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-cyan-800 mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-cyan-700" />
                Mining Plant Procurement Q&A
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Frequently Asked Questions About Silica Sand Plant Costs
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Commercial and technical answers on plant setup costs, iron reduction benchmarks, and water recovery.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-6 sm:py-8">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 flex items-start gap-3">
                    <span className="text-cyan-800 font-mono text-base font-extrabold shrink-0 mt-0.5">
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
          <div className="absolute inset-0 bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Waves className="w-3.5 h-3.5 text-cyan-400" />
                Direct Manufacturer Procurement ,  Zak GIDC Dahegam Works
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
                Request a Silica Sand Washing Plant Flowsheet & Quotation
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                Submit your raw sand sieve analysis (mesh sizing), clay/silt percentage, and target capacity (TPH). Our senior mineral engineers provide custom plant layout drawings, water balance diagrams, and competitive factory-direct pricing.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={rfqLink}
                  size="lg"
                  variant="primary"
                  className="px-8 font-bold shadow-lg shadow-cyan-900/30"
                  icon={<FileText className="w-4 h-4" />}
                >
                  Request Turnkey Washing Plant Quote
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

