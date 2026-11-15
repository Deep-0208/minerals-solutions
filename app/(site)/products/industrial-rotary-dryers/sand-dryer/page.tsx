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
  MapPin,
  TrendingDown,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Industrial Rotary Sand Dryer Manufacturer | Minerals Solutions',
  },
  description: 'Source heavy duty industrial rotary sand dryers (300 kg/hr to 15 TPH) from Minerals Solutions. Moisture drop below 1%, custom built in Zak GIDC, Dahegam.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/sand-dryer/',
  },
  openGraph: {
    title: 'Industrial Rotary Sand Dryer Unit | Minerals Solutions',
    description:
      'Heavy duty industrial rotary sand dryers (300 kg/hr to 15 TPH). Moisture reduction from 16% to <1%. Built in Zak GIDC, Dahegam, Gujarat.',
    url: `${company.siteUrl}/products/industrial-rotary-dryers/sand-dryer/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Rotary Sand Dryer Manufacturer | Minerals Solutions',
    description:
      'Heavy duty industrial rotary sand dryers (300 kg/hr to 15 TPH). Moisture reduction from 16% to <1%. Built in Zak GIDC, Dahegam, Gujarat.',
    images: [defaultTwitterImage],
  },
};

export default function RotarySandDryerPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const rfqLink = '/request-quote/?product=sand-dryer';
  const whatsappUrl = `https://wa.me/916352453050?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering quotation and layout drawing for an Industrial Rotary Sand Dryer.'
  )}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Industrial Rotary Dryers', href: '/products/industrial-rotary-dryers/' },
    { label: 'Rotary Sand Dryer', href: '/products/industrial-rotary-dryers/sand-dryer/' },
  ];

  const models = [
    {
      model: 'MS-RSD-300',
      capacity: '300 – 500 kg/hr',
      drumDia: '900 mm',
      length: '5.9 m',
      power: '3 HP (2.2 kW)',
      heatSource: 'Coal / Biomass Briquette',
      feedMoisture: '14% – 16%',
      exitMoisture: '<0.5%',
    },
    {
      model: 'MS-RSD-1000',
      capacity: '1,000 – 1,500 kg/hr',
      drumDia: '1,200 mm',
      length: '7.5 m',
      power: '7.5 HP (5.5 kW)',
      heatSource: 'Coal / Agro-Waste / Gas',
      feedMoisture: '14% – 18%',
      exitMoisture: '<0.5%',
    },
    {
      model: 'MS-RSD-3000',
      capacity: '3,000 – 4,000 kg/hr (3-4 TPH)',
      drumDia: '1,500 mm',
      length: '9.0 m',
      power: '12.5 HP (9.3 kW)',
      heatSource: 'Direct Hot Air Furnace',
      feedMoisture: '15% – 20%',
      exitMoisture: '<0.5%',
    },
    {
      model: 'MS-RSD-5000',
      capacity: '5,000 kg/hr (5 TPH)',
      drumDia: '1,800 mm',
      length: '12.0 m',
      power: '20 HP (15 kW)',
      heatSource: 'Pulverized Coal / Gas HAG',
      feedMoisture: '15% – 20%',
      exitMoisture: '<0.5%',
    },
    {
      model: 'MS-RSD-10000',
      capacity: '10,000 kg/hr (10 TPH)',
      drumDia: '2,200 mm',
      length: '15.0 m',
      power: '25 HP (18.5 kW)',
      heatSource: 'High-Output Coal/Gas Furnace',
      feedMoisture: '16% – 22%',
      exitMoisture: '<0.5%',
    },
    {
      model: 'MS-RSD-15000',
      capacity: '15,000 kg/hr (15 TPH)',
      drumDia: '2,600 mm',
      length: '18.0 m',
      power: '30 HP (22 kW)',
      heatSource: 'Dual Burner Heavy Combustion',
      feedMoisture: '16% – 22%',
      exitMoisture: '<0.5%',
    },
  ];

  const combustionOptions = [
    {
      title: 'Biomass Briquette & Agro-Waste Furnace',
      badge: 'Eco-Friendly / Low Operating OPEX',
      fuel: 'Groundnut Shell, Sawdust Briquettes, Cotton Stalk',
      tempRange: '250°C – 320°C Hot Air Inflow',
      description:
        'Refractory-lined external combustion chamber featuring a heavy cast iron stepped grate. Utilizes abundant agricultural residue and wood briquettes across Gujarat and Saurashtra to reduce thermal fuel costs by up to 45% compared to diesel or natural gas.',
      benefit: 'Ideal for silica sand washing plants and rural aggregate quarries seeking lowest fuel expenditure.',
    },
    {
      title: 'Pulverized Coal & Lignite Combustion Chamber',
      badge: 'Maximum Tonnage Thermal Output',
      fuel: 'Steam Coal, Indonesian Coal, Kutch Lignite',
      tempRange: '300°C – 400°C High Calorie Flame',
      description:
        'Equipped with an automatic coal pulverizer and secondary preheated combustion air blower. Generates steady, high-temperature thermal drafts for high-tonnage industrial sand plants (5 to 15 TPH) with rapid moisture flash-off.',
      benefit: 'Best suited for round-the-clock foundry sand processing and large river sand extraction facilities.',
    },
    {
      title: 'Automated Natural Gas & PNG Burners',
      badge: 'Zero Ash & High Purity Combustion',
      fuel: 'Piped Natural Gas (PNG), LPG, Light Diesel',
      tempRange: '180°C – 350°C Precision Modulating',
      description:
        'Modulating industrial gas burner assembly paired with automated flame safeguard and thermocouple temperature feedback. Completely eliminates fly-ash, soot, and sulfur residues, keeping dried mineral sand 100% spotless.',
      benefit: 'Mandatory for high-purity glass silica sand, ceramic body formulations, and dry-mix tile adhesives.',
    },
  ];

  const flightZones = [
    {
      zone: 'Zone 1: Spiral Feed Flights',
      position: 'First 1.5 to 2.0 meters at drum inlet',
      action:
        'Continuous high-pitch helical spiral flights force wet, sticky sand away from the hot entry chute immediately, preventing annular back-spill and sand clogging at the burner head.',
      design: 'High-wear IS 2062 carbon steel plates with reinforced leading edges.',
    },
    {
      zone: 'Zone 2: Radial Cascading Curtains',
      position: 'Main drying cylinder body (60% to 70% of length)',
      action:
        'Serrated lifting flights scoop the tumbling sand and shower it across the full cross-sectional diameter of the drum. This creates a dense, uniform "sand curtain" that maximizes convective contact with the hot gas draft.',
      design: 'Alternating angled lifters engineered to maximize air contact time while advancing material down the 3° drum slope.',
    },
    {
      zone: 'Zone 3: Discharge Sweeping Flights',
      position: 'Last 1.5 meters at drum discharge head',
      action:
        'Gentle low-profile radial flights guide bone-dry silica sand toward the bottom gravity chute without generating excessive dust turbulence, discharging directly into rotary airlocks or screw conveyors.',
      design: 'Hardened discharge vanes with replaceable wear liners.',
    },
  ];

  const regionalApplications = [
    {
      cluster: 'Morbi & Surendranagar Ceramic Belt',
      role: 'Ceramic Body Sand & Glaze Aggregates',
      description:
        'High-purity silica sand dried from 14% down to <0.2% moisture for vitrified tile body preparation, sanitaryware slurry batches, and engineered quartz slabs in Morbi and Wankaner.',
    },
    {
      cluster: 'Ahmedabad & Rajkot Foundry Corridor',
      role: 'Resin Coated Sand (RCS) & Core Casting',
      description:
        'Automated drying lines feeding hot silica and chromite sand directly into resin coating mulling units for precision automotive cylinder blocks and heavy machine tool castings.',
    },
    {
      cluster: 'Kutch & Dahej Chemical Salt & Mineral Belts',
      role: 'Industrial Minerals & Abrasive Blast Sand',
      description:
        'Continuous drying of washed river sand and graded silica for abrasive sandblasting, water filtration media, and dry-mix construction adhesives across Gujarat.',
    },
  ];

  const faqs = [
    {
      question: 'What is the fuel consumption of an industrial rotary sand dryer per ton of dried sand?',
      answer:
        'When drying silica sand from 14% initial moisture down to <0.5% residual moisture, specific fuel consumption averages 22 to 28 kg of steam coal or 28 to 35 kg of biomass briquettes per ton of dried product. Automated gas-fired units consume approximately 12 to 16 SCM of piped natural gas (PNG) per ton, depending on ambient air temperatures and hot air furnace refractory insulation.',
    },
    {
      question: 'How do you prevent wet sand from sticking and clogging the drum entrance?',
      answer:
        'We engineer continuous, steep-pitch helical spiral feed flights in the first 1.5 to 2.0 meters of the drum. These forward flights physically propel wet sand into the active cascade zone before capillary surface moisture causes it to pack against the drum shell. For extremely cohesive clay-rich sand, we incorporate mechanical shell knocker assemblies.',
    },
    {
      question: 'What is the indicative price for a complete rotary sand drying plant?',
      answer:
        'A standard 1 to 2 TPH rotary sand dryer begins at approximately ₹ 20,50,000, which includes the IS 2062 steel rotating drum, girth gear drive, trunnion rollers, and discharge hood. Turnkey plants with a coal/biomass hot air furnace, high-efficiency twin cyclone dust collector, and induced draft exhaust fan range from ₹ 28,00,000 to ₹ 48,00,000 depending on tonnage capacity.',
    },
    {
      question: 'Why is IS 2062 Grade B structural steel preferred for the drum shell?',
      answer:
        'Silica sand is extremely abrasive and undergoes continuous tumbling friction at temperatures reaching 250°C. IS 2062 Grade B carbon steel (rolled from 10mm to 16mm plate) provides superior tensile strength and thermal stress resistance, preventing shell sagging or ovality deformation across decades of operation.',
    },
    {
      question: 'Can this dryer handle both washed river sand and crushed manufactured sand (M-Sand)?',
      answer:
        'Yes. Our internal lifter flights are custom-pitched for both rounded river sand grains and sharp angular crushed M-Sand. When paired with our variable frequency drive (VFD), drum rotational speed can be adjusted between 3 and 8 RPM to optimize residence time based on mineral bulk density.',
    },
  ];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${company.siteUrl}/products/industrial-rotary-dryers/sand-dryer/#product`,
    name: 'Industrial Rotary Sand Dryer with Combustion Furnace',
    model: 'MS-RSD-Series',
    description:
      'Heavy duty industrial rotary sand dryers (300 kg/hr to 15 TPH). Moisture reduction from 16% to <1%. Built in Zak GIDC, Dahegam, Gujarat for ceramic, foundry, and silica sand processing.',
    image: `${company.siteUrl}/images/products/rotary-dryers/sand-dryer-coal-fired-hag-lg.webp`,
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
      lowPrice: '2050000',
      highPrice: '4800000',
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
        value: '300 kg/hr to 15 TPH',
      },
      {
        '@type': 'PropertyValue',
        name: 'Moisture Reduction',
        value: 'From 16%–18% down to <0.5%',
      },
      {
        '@type': 'PropertyValue',
        name: 'Combustion Fuel Options',
        value: 'Biomass Briquettes, Coal, Piped Natural Gas (PNG), Diesel',
      },
      {
        '@type': 'PropertyValue',
        name: 'Drum Shell Material',
        value: 'Heavy IS 2062 Grade B Structural Carbon Steel (10mm to 16mm)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Support Trunnion Rollers',
        value: 'Twin Forged EN-8 / EN-9 Alloy Steel on Spherical Plummer Blocks',
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
        name: 'Industrial Rotary Dryers',
        item: `${company.siteUrl}/products/industrial-rotary-dryers/`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Rotary Sand Dryer',
        item: `${company.siteUrl}/products/industrial-rotary-dryers/sand-dryer/`,
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
        {/* Breadcrumbs */}
        <div className="border-b border-slate-200 bg-slate-50/80">
          <Container>
            <Breadcrumbs items={breadcrumbs} />
          </Container>
        </div>

        {/* Hero Section */}
        <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Technical Headers & CTAs */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wide uppercase mb-4">
                  <Flame className="w-3.5 h-3.5 text-[#DA020D]" />
                  Heavy Mineral Sand Thermal Engineering
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] mb-5">
                  Industrial Rotary <span className="text-[#DA020D]">Sand Dryers</span> with Hot Air Furnaces
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
                  Heavy-duty single-shell rotary drum dryers engineered for continuous moisture evaporation in silica sand, river aggregate, quartz fines, and foundry sands. Paired with high-efficiency coal, biomass, or gas hot air generators, drying <strong>16% initial moisture down to &lt;0.5%</strong> across capacities from <strong>300 kg/hr to 15 TPH</strong>.
                </p>

                {/* Pricing & Commercial Badge */}
                <div className="p-4 rounded-xl bg-slate-900 text-white mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Indicative Starting Price
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-0.5">
                      ₹ 20,50,000 <span className="text-xs font-normal text-slate-300">/ Piece</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-300 border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-4">
                    <div>Direct Ex-Factory Zak GIDC Works</div>
                    <div className="text-emerald-400 font-semibold mt-0.5">Turnkey Plants from ₹ 28.0 Lakh</div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-xl bg-slate-100/80 border border-slate-200 mb-8">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#DA020D] tracking-tight">
                      15 TPH
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Max Continuous Tonnage
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      &lt;0.5%
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Residual Moisture
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      18 Meter
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Max Drum Length
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      IS 2062
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Carbon Steel Plate
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
                    Request Sand Dryer Quote
                  </Button>

                  <Button
                    href={whatsappUrl}
                    external
                    size="lg"
                    variant="outline"
                    className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold"
                    icon={<Phone className="w-4 h-4 text-emerald-600" />}
                  >
                    WhatsApp Plant Sizing
                  </Button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Forged EN-8 Trunnion Rollers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Coal / Biomass / PNG Options
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Zak GIDC Dahegam Factory
                  </span>
                </div>
              </div>

              {/* Right Column: Real Equipment Photograph */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                  <div className="relative aspect-[4/3] w-full bg-slate-900">
                    <Image
                      src="/images/products/rotary-dryers/sand-dryer-coal-fired-hag-lg.webp"
                      alt="Industrial Rotary Sand Dryer with coal-fired hot air generator manufactured by Minerals Solutions in Zak GIDC Gujarat" width={800} height={600}
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 550px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-1">
                        Authentic Factory Assembly
                      </div>
                      <div className="text-sm font-semibold text-slate-100">
                        Heavy Rotary Sand Dryer Paired with Solid Fuel Furnace
                      </div>
                    </div>
                  </div>

                  {/* Micro Specs Card Strip */}
                  <div className="p-4 bg-slate-900 text-slate-200 text-xs divide-y divide-slate-800">
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Model Designation</span>
                      <span className="font-semibold text-white">MS-RSD Series (Single Drum)</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Drive Type</span>
                      <span className="font-semibold text-white">Machined Girth Gear & Pinion</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Operating Temperature</span>
                      <span className="font-semibold text-amber-400">Up to 250°C – 320°C Inflow</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Manufacturing Works</span>
                      <span className="font-semibold text-white">10, Shyam Estate, Dahegam, Gandhinagar</span>
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
                  <strong className="text-slate-950 font-semibold">What is an industrial rotary sand dryer? </strong>
                  An industrial rotary sand dryer is a heavy-duty continuous thermal drum engineered to remove surface and capillary moisture from natural river sand, manufactured sand (M-Sand), silica sand, and foundry aggregates. Built at Minerals Solutions in Zak GIDC, Dahegam, the unit features an IS 2062 Grade B structural carbon steel cylindrical shell (12mm to 20mm plate thickness) inclined at 3 to 5 degrees and rotated at 3 to 8 RPM on forged alloy steel trunnion rollers induction-hardened to 280-320 BHN. Internal radial lifting and curtain cascading flighting showers the wet sand bed continuously through high-temperature burner flue gases (600°C to 800°C inlet). Designed for throughputs from 300 kg/hr to 15 TPH, it achieves high thermal heat transfer, reducing raw aggregate moisture from 12%-18% down to bone-dry levels under 0.5% with specific coal consumption as low as 18 to 24 kg per ton of dried aggregate.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Moisture Evaporation Dynamics */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Thermometer className="w-4 h-4" />
                Thermodynamic Mass Transfer
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Moisture Evaporation Dynamics: 16% Feed Down to &lt;0.5% Residual
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Understanding the two distinct drying stages within Minerals Solutions rotating drum shells: rapid constant-rate surface flash-off followed by falling-rate pore desorption.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-red-100 text-[#DA020D] flex items-center justify-center font-bold text-sm">
                      01
                    </span>
                    <h3 className="text-lg font-bold text-slate-950">
                      Constant-Rate Surface Flash Zone (First 40% Drum Length)
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Wet washed sand exiting bucket washers carries unbound surface water in the pore interstices. The high Delta-T between the 300°C combustion draft and the 30°C wet sand causes instantaneous boiling and flash evaporation, reducing moisture from 16% down to approximately 4% without elevating sand core temperatures above 80°C.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                      02
                    </span>
                    <h3 className="text-lg font-bold text-slate-950">
                      Falling-Rate Pore Dehydration Zone (Final 60% Drum Length)
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    As surface liquid vanishes, heat must penetrate into the microscopic quartz grain fissures. The dense shower curtains created by our radial lifting flights provide the necessary dwell time (6 to 12 minutes residence), vaporizing the remaining internal moisture down to &lt;0.2%–0.5% for direct delivery to resin coating or dry-mix bagging.
                  </p>
                </div>
              </div>

              {/* Technical Callout Card */}
              <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 relative">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
                  Engineering Heat Balance Formula
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Evaporation Thermal Duty Calculation
                </h4>
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-2 mb-6">
                  <div>Q_total = M_w * [Cp_w * (100 - T_in) + H_evap + Cp_v * (T_out - 100)] + M_s * Cp_s * (T_s - T_in)</div>
                  <div className="text-amber-400">// Where:</div>
                  <div className="text-slate-400">• M_w: Evaporated water mass (kg/hr)</div>
                  <div className="text-slate-400">• H_evap: Latent heat of vaporization (540 kcal/kg)</div>
                  <div className="text-slate-400">• Cp_s: Specific heat of silica quartz (0.19 kcal/kg°C)</div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Every Minerals Solutions rotary sand dryer is engineered with precise air velocities (1.5 to 2.2 m/s) to prevent fine sand particulate carryover while delivering 100% complete thermal utilization.
                </p>
                <Button
                  href={rfqLink}
                  size="md"
                  variant="primary"
                  className="font-bold text-white shadow-md shadow-red-600/10"
                >
                  Request Heat Balance Sheet
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Combustion Furnace Configurations */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Flame className="w-4 h-4" />
                Custom Thermal Energy Sources
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Combustion Furnace Configurations (Biomass Briquette, Coal, Gas)
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Hot air generators (HAG) manufactured in our Dahegam facility, optimized for fuel availability across Saurashtra, Central Gujarat, and North India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {combustionOptions.map((opt) => (
                <div
                  key={opt.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DA020D] bg-red-50 border border-red-200 px-2.5 py-1 rounded-full inline-block mb-3">
                      {opt.badge}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 mb-3">{opt.title}</h3>

                    <div className="space-y-2 text-xs mb-4">
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500 font-medium">Fuel Source:</span>
                        <span className="text-slate-900 font-semibold text-right">{opt.fuel}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500 font-medium">Air Inflow:</span>
                        <span className="text-amber-700 font-bold">{opt.tempRange}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {opt.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium italic">
                    {opt.benefit}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Technical Specifications & Drum Sizing (MS-RSD Series) */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Scale className="w-4 h-4" />
                Engineering Sizing Matrix
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Technical Specifications & Drum Sizing (MS-RSD Series)
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Verified dimensional parameters and drive motor ratings based on authentic fabrication data from our Zak GIDC workshops.
              </p>
            </div>

            {/* Desktop & Mobile Responsive HTML Specification Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-800 border-collapse">
                <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Model Number</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Sand Capacity</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Drum Diameter</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Shell Length</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Geared Motor Power</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Inlet Moisture</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Discharge Moisture</th>
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
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#DA020D]">
                        {item.capacity}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">{item.drumDia}</td>
                      <td className="py-3.5 px-4 sm:px-6">{item.length}</td>
                      <td className="py-3.5 px-4 sm:px-6">{item.power}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-700 font-mono text-xs">
                        {item.feedMoisture}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-emerald-700 font-mono text-xs">
                        {item.exitMoisture}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <p>
                * Shell thickness engineered from 10mm to 16mm IS 2062 Grade B structural carbon steel. Optional SS304/SS316 liners for chemical silica.
              </p>
              <Link
                href={rfqLink}
                className="font-bold text-[#DA020D] hover:underline inline-flex items-center gap-1"
              >
                Inquire about custom diameter rolling <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Container>
        </section>

        {/* Internal Flight Lifter Geometry */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <RotateCw className="w-4 h-4" />
                Fluid Dynamics & Mechanical Cascading
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Internal Flight Lifter Geometry (Radial & Spiral Curtains)
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Why shell internals make or break sand drying performance: eliminating material dead zones and maximizing continuous heat transfer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {flightZones.map((zone) => (
                <div
                  key={zone.zone}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-sm mb-4">
                    <Cog className="w-5 h-5 text-[#DA020D]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-1">{zone.zone}</h3>
                  <div className="text-xs font-semibold text-slate-500 mb-3">{zone.position}</div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{zone.action}</p>
                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Metallurgy: </span>
                    {zone.design}
                  </div>
                </div>
              ))}
            </div>

            {/* Flight Engineering Blueprint Highlight */}
            <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#DA020D] flex items-center justify-center shrink-0">
                <Wrench className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-slate-950">
                  Replaceable Bolted Lifters for High-Silica Quartz Sand
                </h4>
                <p className="text-slate-600 text-sm mt-1">
                  When drying sharp angular silica or crushed quartz abrasive fines, welded lifters wear out within 18–24 months. Minerals Solutions offers modular bolted flight sections lined with Hardox 400 wear plates for 3X extended operating life.
                </p>
              </div>
              <Button
                href={rfqLink}
                size="md"
                variant="outline"
                className="shrink-0 font-semibold"
              >
                Inquire Wear-Plate Options
              </Button>
            </div>
          </Container>
        </section>

        {/* Foundry & Ceramic Sand Applications in Gujarat */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Gujarat Industrial Deployment
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Foundry & Ceramic Sand Applications in Gujarat
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Proven industrial drying installations serving critical mineral corridors across Ahmedabad, Morbi, Surendranagar, and Kutch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regionalApplications.map((reg) => (
                <div
                  key={reg.cluster}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-1">{reg.cluster}</h3>
                  <div className="text-xs font-semibold text-[#DA020D] mb-3">{reg.role}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{reg.description}</p>
                </div>
              ))}
            </div>

            {/* Regional Transport Callout */}
            <div className="mt-8 p-5 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm flex items-start gap-3 border border-slate-200">
              <Factory className="w-5 h-5 text-[#DA020D] shrink-0 mt-0.5" />
              <div>
                <strong>Manufacturing Proximity:</strong> Located at Zak GIDC, Dahegam, our facility provides rapid transport connectivity via Ahmedabad Outer Ring Road and Gandhinagar highway to all industrial clusters across Gujarat, Rajasthan, and Madhya Pradesh.
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
                  href="/products/industrial-rotary-dryers/triple-pass-dryer/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Triple Pass Rotary Drum Dryer Line specifications"
                >
                  <Image
                    src="/images/products/rotary-dryers/continuous-type-rotary-dryer-md.webp"
                    alt="Triple Pass Concentric Rotary Drum Dryer"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Sibling Dryer Line
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/industrial-rotary-dryers/triple-pass-dryer/" className="hover:underline">
                        Triple Pass Rotary Drum Dryer Line
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Concentric 3-pass high-efficiency drum providing 40% fuel savings in compact plant spaces.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/industrial-rotary-dryers/triple-pass-dryer/"
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
                  href="/products/industrial-rotary-dryers/biomass-sawdust-dryer/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Biomass & Sawdust Rotary Dryer Line specifications"
                >
                  <Image
                    src="/images/products/rotary-dryers/saw-dust-biomass-dryer-md.webp"
                    alt="Biomass and Sawdust Rotary Drum Dryer"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold text-blue-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Sibling Dryer Line
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/industrial-rotary-dryers/biomass-sawdust-dryer/" className="hover:underline">
                        Biomass & Sawdust Rotary Dryer Line
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Continuous organic material drying cylinder with spark arrestor and explosion protection.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/industrial-rotary-dryers/biomass-sawdust-dryer/"
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
                    <span className="text-[10px] font-mono font-bold text-purple-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Complementary Wet Circuit
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
                      Upstream wet scrubbing and desliming circuit delivering washed sand directly to the dryer feed hopper.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/sand-washing-plants/silica-sand-washing-plant/"
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

        {/* Frequently Asked Questions */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                Plant Engineer Q&A
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Frequently Asked Questions About Sand Drying Plants
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Operational questions regarding fuel consumption, anti-stick internals, and civil foundation guidelines.
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
                Request an Industrial Sand Dryer Sizing & Price Quotation
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                Submit your wet sand moisture (%), required dried output (TPH), and preferred combustion fuel. Our engineering team provides custom civil foundation diagrams, heat balance calculations, and competitive factory-direct pricing.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={rfqLink}
                  size="lg"
                  variant="primary"
                  className="px-8 font-bold shadow-lg shadow-red-900/30"
                  icon={<FileText className="w-4 h-4" />}
                >
                  Request Sand Dryer Sizing Quote
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

