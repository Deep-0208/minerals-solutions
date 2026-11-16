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
  Flame,
  CircleDollarSign,
  TrendingUp,
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
    absolute: 'Double Roller Granulator Machine | Minerals Solutions',
  },
  description: 'Fabricate double roller dry compaction granulators (1 to 5 TPH) for chemical and NPK fertilizers. Zero heat drying required, manufactured in Zak GIDC.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/double-roller-granulator/',
  },
  openGraph: {
    title: 'Double Roller Compactor Granulator | Minerals Solutions',
    description:
      'Double roller dry compaction fertilizer granulators (1 to 5 TPH). Room-temperature granulation with zero drying required. Zak GIDC, Gujarat.',
    url: `${company.siteUrl}/products/fertilizer-granulation-plants/double-roller-granulator/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Double Roller Granulator Machine | Minerals Solutions',
    description:
      'Double roller dry compaction fertilizer granulators (1 to 5 TPH). Room-temperature granulation with zero drying required. Zak GIDC, Gujarat.',
    images: [defaultTwitterImage],
  },
};

export default function DoubleRollerGranulatorPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const rfqLink = '/request-quote/?product=double-roller-granulator';
  const whatsappUrl = `https://wa.me/916352453050?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering sizing sheet and quotation for a Double Roller Dry Compaction Fertilizer Granulator.'
  )}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Fertilizer Granulation Plants', href: '/products/fertilizer-granulation-plants/' },
    { label: 'Double Roller Granulator', href: '/products/fertilizer-granulation-plants/double-roller-granulator/' },
  ];

  const models = [
    {
      model: 'MS-DRG-1000',
      capacity: '1.0 – 1.5 TPH',
      rollerSize: 'Ø 300 × 200 mm',
      rollerShell: 'Forged 9Cr2Mo Alloy',
      drivePower: '15.0 kW (20 HP)',
      hydraulicPressure: '15 – 25 MPa',
      crushStrength: '> 25 N',
      weight: '3,200 kg',
    },
    {
      model: 'MS-DRG-2000',
      capacity: '2.0 – 3.0 TPH',
      rollerSize: 'Ø 450 × 260 mm',
      rollerShell: 'Forged 9Cr2Mo Alloy',
      drivePower: '22.0 kW (30 HP)',
      hydraulicPressure: '25 – 40 MPa',
      crushStrength: '> 30 N',
      weight: '4,800 kg',
    },
    {
      model: 'MS-DRG-3000',
      capacity: '3.0 – 4.0 TPH',
      rollerSize: 'Ø 550 × 320 mm',
      rollerShell: 'Forged 9Cr2Mo / SS316',
      drivePower: '30.0 kW (40 HP)',
      hydraulicPressure: '35 – 55 MPa',
      crushStrength: '> 35 N',
      weight: '6,500 kg',
    },
    {
      model: 'MS-DRG-5000',
      capacity: '4.5 – 5.5 TPH',
      rollerSize: 'Ø 650 × 400 mm',
      rollerShell: 'Forged 9Cr2Mo / SS316',
      drivePower: '45.0 kW (60 HP)',
      hydraulicPressure: '45 – 70 MPa',
      crushStrength: '> 38 N',
      weight: '8,900 kg',
    },
  ];

  const compactionAdvantages = [
    {
      title: 'Room-Temperature Process (No Coal or Gas Burner)',
      desc: 'Extrudes and compacts dry powder entirely at ambient temperature without adding steam, fuel, or liquid binders. Eliminates expensive rotary dryers, industrial boilers, and furnace fuel procurement.',
      highlight: 'Zero Boiler Fuel Required',
      icon: <Flame className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: 'Forged 9Cr2Mo Alloy Roller Shells (HRC 58–62)',
      desc: 'Vacuum-quenched alloy steel roller sleeves feature high wear-resistant surfaces that withstand extreme compressive contact pressures, achieving 4,000+ operating hours even with abrasive potash salts.',
      highlight: 'HRC 58–62 Vacuum Hardened',
      icon: <ShieldCheck className="h-6 w-6 text-cyan-600" />,
    },
    {
      title: 'Pre-Compression De-Aerating Feed Auger',
      desc: 'A variable-speed vertical screw auger continuously removes entrained air from fluid powder, forcing dense, pre-compacted feed directly into the hydraulic roller nip to prevent flake slippage.',
      highlight: 'De-Aerating Positive Feeding',
      icon: <Gauge className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Synchronized Heavy Helical Gear Drive',
      desc: 'Precision-timed synchronized dual helical gears ensure that counter-rotating roller pockets align with sub-millimeter precision, producing perfectly symmetrical pillow or ball-shaped pellets.',
      highlight: 'Sub-Millimeter Pocket Timing',
      icon: <Cog className="h-6 w-6 text-indigo-600" />,
    },
  ];

  const energyComparison = [
    {
      aspect: 'Thermal Heat Energy Required',
      wetDrum: 'Massive (Coal/Gas/Biomass furnace for rotary drying)',
      dryRoller: 'Zero (Ambient room-temperature compaction)',
      savings: '100% Thermal Fuel Cost Eliminated',
    },
    {
      aspect: 'Specific Electricity Consumption',
      wetDrum: '150 – 210 kWh / Ton (Pumps, drum, drying fan, coolers)',
      dryRoller: '24 – 32 kWh / Ton (Motor drive + hydraulic pack)',
      savings: 'Up to 80% Reduction in Total kWh Draw',
    },
    {
      aspect: 'Feed Moisture Operating Window',
      wetDrum: 'Requires 12% to 28% water addition, then evaporated',
      dryRoller: 'Processes dry feed directly at 1.5% to 5.0% moisture',
      savings: 'Zero Water Addition & No Effluent Slurry',
    },
    {
      aspect: 'Plant Footprint & Civil Costs',
      wetDrum: 'Huge (Dryer drum, cooler drum, bag filters, cyclone lines)',
      dryRoller: 'Compact skid footprint (Press + Breaker + Sifter)',
      savings: '65% Less Floor Area Required',
    },
    {
      aspect: 'Estimated Utility Cost Per Ton',
      wetDrum: '₹ 1,350 – ₹ 1,700 / Metric Ton',
      dryRoller: '₹ 220 – ₹ 310 / Metric Ton',
      savings: 'Save ₹ 1,100+ Per Ton Produced',
    },
  ];

  const targetMaterials = [
    {
      material: 'Ammonium Sulphate (Caprolactam Byproduct)',
      desc: 'Agglomerates sticky, fine crystalline ammonium sulphate powder into 3mm to 5mm hard agricultural granules without heat decomposition or screen clogging.',
      yield: '3.0 – 4.5 mm Pillow Pellets',
    },
    {
      material: 'Muriate of Potash (MOP / KCl)',
      desc: 'Compacts dry pink and white potassium chloride powder into dense agricultural prills with crush strength exceeding 30 N, preventing dusting during mechanical field broadcasting.',
      yield: 'High Bulk Density (> 1.05 g/cm³)',
    },
    {
      material: 'Bentonite Clay & Cat Litter Aggregates',
      desc: 'Forces fine sodium and calcium bentonite clay into uniform, high-density granules for commercial clumping cat litter and agricultural pesticide granular carriers.',
      yield: 'Fast Clumping & High Sphericity',
    },
    {
      material: 'Dry NPK Formulations & Micro-Nutrients',
      desc: 'Blends urea, DAP, SSP, zinc sulphate, and magnesium sulphate into homogeneous multi-nutrient pellets without any chemical decomposition caused by thermal drying.',
      yield: 'Zero Thermal Nutrient Degradation',
    },
  ];

  const faqs = [
    {
      question: 'How does double roller compaction granulate without adding water or heat?',
      answer:
        'Double roller compaction relies on mechanical force rather than liquid binding. Dry powder (1.5% to 5% moisture) is fed into the converging nip between two counter-rotating alloy rollers. Heavy hydraulic cylinders exert 30 to 70 MPa linear contact pressure. This extreme force brings powder particles within interatomic distances, causing molecular bonding and plastic deformation. The powder is extruded into a dense, solid cake or pocket-shaped briquettes that are mechanically separated and sized at room temperature, eliminating the need for water spray, steam, or thermal rotary drying.',
    },
    {
      question: 'What is the energy cost difference between dry roller compaction and wet drum granulation?',
      answer:
        'Wet granulation systems require massive thermal energy to evaporate 15% to 25% added moisture in coal or gas-fired rotary dryers, costing ₹1,350 to ₹1,700 in fuel and electricity per ton of fertilizer. In contrast, Minerals Solutions double roller granulators operate purely on electricity (drawing only 24 to 32 kWh/ton), with a total utility cost of approximately ₹240 to ₹310 per ton. A 3 TPH plant operating 16 hours daily saves over ₹55,000 every single day in energy expenses alone.',
    },
    {
      question: 'What shapes and sizes of granules can be produced with roller pocket dies?',
      answer:
        'We manufacture precision CNC-machined roller shells in multiple pocket geometries: oblate spherical ball shape (2.5 mm to 4.5 mm), pillow shape (3 mm to 6 mm, popular for NPK and ammonium sulphate), cylindrical tablet shapes, and corrugated sheet flakers. For irregular granular fertilizers, smooth or corrugated rollers press the powder into a continuous sheet that is broken by our integrated flaker breaker into angular granules matching imported DAP aesthetics.',
    },
    {
      question: 'What is the typical lifespan of the forged 9Cr2Mo roller shells?',
      answer:
        'Manufactured from vacuum-degassed, forged 9Cr2Mo alloy steel and heat-treated to HRC 58–62, our roller shells typically achieve 3,500 to 5,000 working hours in chemical fertilizer and NPK operations. In highly corrosive environments (such as ammonium chloride or acidic superphosphate), we supply stainless steel SS316 or high-nickel alloy roller sleeves that resist chemical pitting.',
    },
    {
      question: 'How does the closed-loop crushing and screening circuit work?',
      answer:
        'The compacted sheets or briquettes discharging from the roller press enter an integrated flaker breaker that gently shatters the cake along natural cleavage lines. The product falls into a twin-deck rotary sifter or vibrating screen: on-spec granules (2 mm to 4.5 mm) discharge to the finished product packaging line, oversize lumps are returned to the breaker, and undersize fines are elevated back to the feed hopper via a bucket elevator, achieving a 100% closed-circuit yield with zero material waste.',
    },
    {
      question: 'What is the price range and delivery timeline from your Dahegam workshop?',
      answer:
        'Standard standalone MS-DRG-1000 roller presses start at ₹ 6,80,000, while complete 2 to 3 TPH turnkey closed-loop granulation lines (including pre-feeder, hydraulic roller press, flaker breaker, rotary screen, and return elevator) range from ₹ 14,50,000 to ₹ 22,00,000. All machines are fabricated in our Zak GIDC, Dahegam facility with delivery in 14 to 21 business days.',
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Double Roller Compaction Granulator',
      image: `${company.siteUrl}/images/products/fertilizer-pellet/pellet-mill-roller-assembly-lg.webp`,
      description:
        'High-pressure double roller dry compaction fertilizer granulators (1 to 5 TPH). Room-temperature granulation with zero drying required for ammonium sulphate, MOP, bentonite, and dry NPK blends.',
      brand: {
        '@type': 'Brand',
        name: 'Minerals Solutions',
      },
      sku: 'MS-DRG-SERIES',
      mpn: 'MS-DRG-1000-3000',
      manufacturer: {
        '@type': 'Organization',
        name: company.legalName,
        url: company.siteUrl,
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: 680000,
        highPrice: 2200000,
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
          name: 'Granulation Method',
          value: 'Dry room-temperature hydraulic compaction (Zero thermal drying required)',
        },
        {
          '@type': 'PropertyValue',
          name: 'Throughput Capacity',
          value: '1.0 to 5.5 TPH',
        },
        {
          '@type': 'PropertyValue',
          name: 'Roller Shell Metallurgy',
          value: 'Forged 9Cr2Mo Alloy Steel / Vacuum Hardened HRC 58-62',
        },
        {
          '@type': 'PropertyValue',
          name: 'Hydraulic Working Pressure',
          value: '15 to 70 MPa adjustable hydraulic force',
        },
        {
          '@type': 'PropertyValue',
          name: 'Energy Savings',
          value: 'Saves up to 80% utility cost vs wet drum granulation (~28 kWh/T vs ~180 kWh/T)',
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
          name: 'Fertilizer Granulation Plants',
          item: `${company.siteUrl}/products/fertilizer-granulation-plants/`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Double Roller Granulator',
          item: `${company.siteUrl}/products/fertilizer-granulation-plants/double-roller-granulator/`,
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
        <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-slate-100/70 via-white to-white">
          <Container size="hero">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading, Commercial Positioning & Badges */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-950 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Flame className="h-3.5 w-3.5 text-emerald-700" />
                  Room-Temperature Dry Extrusion &bull; Zero Drying Required
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
                  Double Roller Dry Compaction Fertilizer Granulators
                </h1>

                <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                  Engineered in Zak GIDC, Dahegam, Minerals Solutions double roller granulators transform dry chemical
                  fertilizers, ammonium sulphate, potash, and bentonite into high-density pellets at ambient room temperature,
                  slashing plant energy bills by up to 80% by eliminating rotary dryers and boilers.
                </p>

                {/* Key Technical Highlights Badges */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Throughput</span>
                    <span className="text-base font-bold text-slate-900">1.0 – 5.5 TPH</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Thermal Fuel</span>
                    <span className="text-base font-bold text-emerald-700">Zero (No Boiler)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Hydraulic Nip</span>
                    <span className="text-base font-bold text-slate-900">Up to 70 MPa</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Crush Strength</span>
                    <span className="text-base font-bold text-slate-900">&gt; 30 N Hardness</span>
                  </div>
                </div>

                {/* Pricing & Commercial CTA Group */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href={rfqLink} variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                    Request Pricing: ₹ 6,80,000+
                  </Button>
                  <Button href={whatsappUrl} variant="outline" size="lg" external icon={<Phone className="h-4 w-4" />}>
                    WhatsApp Technical Sheet
                  </Button>
                </div>

                {/* Quick Trust Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Forged 9Cr2Mo Roller Shells
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> 100% Closed-Loop Recirculation
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Pillow, Tablet & Ball Pocket Dies
                  </span>
                </div>
              </div>

              {/* Right Column: Authentic Equipment Visual */}
              <div className="lg:col-span-5 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 shadow-xl bg-slate-900">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11] 2xl:aspect-[4/3] w-full min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] xl:min-h-[440px] 2xl:min-h-[480px] overflow-hidden bg-slate-900">
                    <Image
                      src="/images/products/fertilizer-pellet/pellet-mill-roller-assembly-lg.webp"
                      alt="Double Roller Compaction Fertilizer Granulation Plant Manufactured by Minerals Solutions in Dahegam Gujarat" width={800} height={600}
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                    />
                  </div>
                  <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold truncate">MS-DRG Roller Press Plant</p>
                      <p className="text-xs text-slate-400">Fabricated at Zak GIDC, Dahegam Workshop</p>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      80% Energy Savings
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
                  <strong className="text-slate-950 font-semibold">What is a double roller compaction granulator? </strong>
                  A double roller compaction fertilizer granulator is a heavy mechanical dry extrusion machine engineered to agglomerate chemical fertilizer salts, ammonium sulphate, potassium chloride, and mineral powders into dense granules at room temperature without boiler steam or drying fuel. Built in Zak GIDC, Dahegam, the unit features two synchronized counter-rotating rollers forged from 9Cr2Mo / 38CrMoAl alloy steel, induction-hardened to 55-58 HRC. Driven by a cycloidal pinwheel reducer and pressurized by a dual-cylinder hydraulic accumulator (10 to 25 MPa), raw powder entering the nip area is subjected to immense mechanical linear force (30 to 60 kN/cm), compacting it into dense sheets that are crushed and classified into 2.5mm to 5.0mm angular pellets. Operating at 1 to 5 TPH throughput, energy consumption is only 12 to 18 kWh per ton of finished high-density granules.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: Room-Temperature Extrusion: Eliminating Thermal Drying Costs */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Operational Energy Economics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Room-Temperature Extrusion: Eliminating Thermal Drying Costs
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                In wet drum or pan granulation, evaporating water from wet granules consumes hundreds of kilograms of coal or
                furnace oil per ton. Double roller dry compaction operates completely without boilers, rotary dryers, or cooling
                fans, transforming plant economics.
              </p>
            </div>

            {/* Energy Cost Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mb-10">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4 border-b border-slate-200">Utility & Operational Factor</th>
                    <th className="py-3.5 px-4 border-b border-slate-200">Conventional Wet Drum Process</th>
                    <th className="py-3.5 px-4 border-b border-slate-200">MS-DRG Dry Roller Compaction</th>
                    <th className="py-3.5 px-4 border-b border-slate-200">Commercial Bottom-Line Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {energyComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{row.aspect}</td>
                      <td className="py-3.5 px-4 text-rose-700 text-xs font-mono">{row.wetDrum}</td>
                      <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs font-mono">{row.dryRoller}</td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Financial Savings Highlight Callout */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <h4 className="text-base font-bold text-slate-950 flex items-center gap-2">
                    <CircleDollarSign className="h-5 w-5 text-emerald-700" />
                    Annual OPEX Saving in a 3 TPH Plant
                  </h4>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    Operating a 3 TPH fertilizer plant for 16 hours daily over 300 days generates 14,400 metric tons.
                    At an energy savings of ₹1,100 per ton, Minerals Solutions double roller granulators yield over
                    <strong className="text-slate-900 font-semibold"> ₹ 1.58 Crores in direct annual utility savings</strong>,
                    paying for the entire machinery installation within 4 to 5 months.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-end">
                  <div className="p-4 rounded-xl bg-white border border-emerald-400 text-center w-full">
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">Annual Energy Savings</span>
                    <span className="text-2xl font-extrabold text-emerald-800">₹ 1.58+ Crores / Yr</span>
                    <span className="block text-xs text-emerald-700 font-medium mt-1">Payback in 4 to 5 Months</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Alloy Roller Shell Metallurgy & Precision Pocket Profiling */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Mechanical Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Alloy Roller Shell Metallurgy & Precision Pocket Profiling
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Compressing chemical powders at 70 MPa creates extreme surface abrasive wear. Minerals Solutions utilizes
                forged alloy steel roller sleeves heat-treated to HRC 58–62 with precision CNC-machined pocket geometries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {compactionAdvantages.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Advantage</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pocket Geometries Box */}
            <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 block mb-1">
                    Custom Die Configurations
                  </span>
                  <h4 className="text-lg font-bold">Pillow, Ball & Flaker Pocket Profiles</h4>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Our Dahegam facility precision-mills roller shells to match client pellet preferences:
                    <strong> Oblate Ball (2.5 to 4.5 mm)</strong> for free-flowing fertilizer spreaders,
                    <strong> Pillow Shape (3.5 to 6.0 mm)</strong> for maximum compaction density, and
                    <strong> Corrugated Flaker Sleeves</strong> for angular granular NPK fertilizers.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-end">
                  <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-center w-full">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">Shell Hardness</span>
                    <span className="text-2xl font-extrabold text-emerald-400">HRC 58 – 62</span>
                    <span className="block text-xs text-slate-400 mt-1">4,000+ Operating Hours Life</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: Technical Specifications & Hydraulic Force Ratings (MS-DRG Series) */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Manufacturing Parameters
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Technical Specifications & Hydraulic Force Ratings (MS-DRG Series)
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Fabricated with heavy IS 2062 steel base frames, forged 9Cr2Mo rollers, and integrated hydraulic accumulator
                systems that protect mechanical journals against uncrushable tramp metal.
              </p>
            </div>

            {/* Technical Specification Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold tracking-wider">
                  <tr>
                    <th className="py-4 px-4 border-b border-slate-200">Model</th>
                    <th className="py-4 px-4 border-b border-slate-200">Capacity (TPH)</th>
                    <th className="py-4 px-4 border-b border-slate-200">Roller Size (Ø×W)</th>
                    <th className="py-4 px-4 border-b border-slate-200">Roller Metallurgy</th>
                    <th className="py-4 px-4 border-b border-slate-200">Motor Power</th>
                    <th className="py-4 px-4 border-b border-slate-200">Hydraulic Pressure</th>
                    <th className="py-4 px-4 border-b border-slate-200">Crush Hardness</th>
                    <th className="py-4 px-4 border-b border-slate-200">Total Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {models.map((item, idx) => (
                    <tr key={item.model} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-3.5 px-4 font-bold text-slate-950 font-mono">{item.model}</td>
                      <td className="py-3.5 px-4 font-bold text-emerald-700">{item.capacity}</td>
                      <td className="py-3.5 px-4 text-slate-700 font-medium">{item.rollerSize}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.rollerShell}</td>
                      <td className="py-3.5 px-4 text-slate-900 font-medium">{item.drivePower}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.hydraulicPressure}</td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">{item.crushStrength}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500 italic">
              * Note: Capacities vary with powder bulk density and target granule size. Hydraulic accumulators automatically release under tramp metal intrusion, preventing roller fracture.
            </p>
          </Container>
        </section>

        {/* Section 4: Processing Ammonium Sulphate, Potash, Bentonite & Dry NPK */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Proven Formulations
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Processing Ammonium Sulphate, Potash, Bentonite & Dry NPK Blends
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Minerals Solutions roller compactors are installed in plants processing crystalline salts and mineral clays
                that are impossible to pelletize using wet thermal methods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetMaterials.map((mat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 mb-2">{mat.material}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{mat.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Granule Output</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-900 border border-slate-300">
                      {mat.yield}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 5: Integrated Crushing & Screening Closed-Loop Circuit */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Flowsheet Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Integrated Crushing & Screening Closed-Loop Circuit (100% Yield)
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                A complete double roller dry granulation line operates as a closed continuous circuit where 100% of the raw
                material is converted into on-spec finished product without waste.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-500 block mb-1">STAGE 01</span>
                <h4 className="font-bold text-slate-950 text-base mb-2">Pre-Feed Auger</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Vertical screw de-aerates powder and forces it uniformly into the roller nip.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-emerald-700 block mb-1">STAGE 02</span>
                <h4 className="font-bold text-slate-950 text-base mb-2">Hydraulic Press</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Counter-rotating rollers compact powder into high-density solid sheets or briquettes.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-500 block mb-1">STAGE 03</span>
                <h4 className="font-bold text-slate-950 text-base mb-2">Flaker Breaker</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dual-toothed rolls shatter the compacted sheet into coarse pre-granules.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-500 block mb-1">STAGE 04</span>
                <h4 className="font-bold text-slate-950 text-base mb-2">Rotary Sieve</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Twin-deck screen separates target 2–4.5mm granules; oversize returns to breaker.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-emerald-700 block mb-1">STAGE 05</span>
                <h4 className="font-bold text-slate-950 text-base mb-2">Elevator Recycle</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Undersize fines travel via bucket elevator back to the feed hopper with 0% waste.
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
                href="/products/fertilizer-granulation-plants/"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#DA020D] transition-colors shrink-0"
              >
                Explore Full Fertilizer Granulation & Pellet Plants Hub <ChevronRight className="w-4 h-4 text-[#DA020D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sibling Spoke 1 */}
              <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#DA020D]/40 transition-all flex flex-col justify-between group">
                <Link
                  href="/products/fertilizer-granulation-plants/disc-granulator/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Industrial Pan Disc Granulator specifications"
                >
                  <Image
                    src="/images/products/fertilizer-pellet/fertilizer-pan-granulator-unit-md.webp"
                    alt="Pan Disc Fertilizer Granulator"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/fertilizer-granulation-plants/disc-granulator/" className="hover:underline">
                        Industrial Pan Disc Granulator
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Adjustable tilt angle agglomeration pan producing round bio-organic fertilizer pellets.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/fertilizer-granulation-plants/disc-granulator/"
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
                  href="/products/fertilizer-granulation-plants/rotary-drum-granulator/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Rotary Drum Granulator Machines specifications"
                >
                  <Image
                    src="/images/products/fertilizer-pellet/fertilizer-granulation-plant-variant-md.webp"
                    alt="Rotary Drum Fertilizer Granulator"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/fertilizer-granulation-plants/rotary-drum-granulator/" className="hover:underline">
                        Rotary Drum Granulator Machines
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Continuous rotary drum for large-scale industrial compound fertilizer manufacturing.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/fertilizer-granulation-plants/rotary-drum-granulator/"
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
                  href="/products/industrial-conveyors-spares/bucket-elevators/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Industrial Bucket Elevator Systems specifications"
                >
                  <Image
                    src="/images/products/conveyor-systems/conveyor-tail-drum-pulley-md.webp"
                    alt="Industrial Bucket Elevator System"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/industrial-conveyors-spares/bucket-elevators/" className="hover:underline">
                        Industrial Bucket Elevator Systems
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Vertical continuous elevator transporting raw chemical powder to the compactor feed hopper.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/industrial-conveyors-spares/bucket-elevators/"
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

        {/* Section 7: Frequently Asked Questions on Double Roller Granulation */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Engineering FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Frequently Asked Questions on Double Roller Granulation
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Practical answers to help chemical engineers, plant managers, and fertilizer company directors evaluate
                roller dry compaction technology.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
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
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider inline-block mb-4">
                  Direct OEM Fabrication &bull; Zak GIDC, Dahegam
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight font-display">
                  Order Your Double Roller Compaction Granulator from the Manufacturer
                </h2>
                <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Send us your powder sample for a live compaction pilot run at our Dahegam facility. Review raw steel test
                  certificates, examine roller pocket machining, and buy directly at transparent manufacturer prices.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Factory className="h-4 w-4 text-emerald-400" />
                    <span>Zak GIDC, Dahegam Facility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HardHat className="h-4 w-4 text-emerald-400" />
                    <span>Pilot Compaction Trials Available</span>
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
                  className="text-center text-xs text-emerald-400 hover:text-emerald-300 underline underline-offset-4 py-1"
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

