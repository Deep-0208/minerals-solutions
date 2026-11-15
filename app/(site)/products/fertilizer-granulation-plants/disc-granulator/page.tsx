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
  CircleDot,
  Sprout,
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
    absolute: 'Pan Disc Fertilizer Granulator | Minerals Solutions',
  },
  description: 'Procure heavy duty industrial pan disc granulators (1 to 8 TPH) for NPK, bentonite, and compost pellets. 40° to 55° tilt angle, built in Zak GIDC, Dahegam.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/disc-granulator/',
  },
  openGraph: {
    title: 'Industrial Pan Disc Granulators | Minerals Solutions',
    description:
      'Industrial pan disc granulators (2.2m diameter, 1 to 3 TPH). Stepless tilt adjustment (35°-55°) for organic & NPK fertilizer. Zak GIDC, Gujarat.',
    url: `${company.siteUrl}/products/fertilizer-granulation-plants/disc-granulator/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pan Disc Fertilizer Granulator | Minerals Solutions',
    description:
      'Industrial pan disc granulators (2.2m diameter, 1 to 3 TPH). Stepless tilt adjustment (35°-55°) for organic & NPK fertilizer. Zak GIDC, Gujarat.',
    images: [defaultTwitterImage],
  },
};

export default function PanDiscGranulatorPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const rfqLink = '/request-quote/?product=disc-granulator';
  const whatsappUrl = `https://wa.me/916352453050?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering sizing sheet and quotation for an Industrial Pan Disc Fertilizer Granulator.'
  )}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Fertilizer Granulation Plants', href: '/products/fertilizer-granulation-plants/' },
    { label: 'Pan Disc Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/' },
  ];

  const models = [
    {
      model: 'MS-PG-1500',
      panDiameter: 'Ø 1,500 mm (1.5 m)',
      capacity: '0.5 – 1.0 TPH',
      tiltRange: '35° – 55° Stepless',
      rimHeight: '300 mm Flanged',
      motorPower: '3.0 HP (2.2 kW)',
      scrapers: '2 Bottom + 1 Rim Blade',
      weight: '1,400 kg',
    },
    {
      model: 'MS-PG-1800',
      panDiameter: 'Ø 1,800 mm (1.8 m)',
      capacity: '0.8 – 1.5 TPH',
      tiltRange: '35° – 55° Stepless',
      rimHeight: '350 mm Flanged',
      motorPower: '5.0 HP (3.7 kW)',
      scrapers: '3 Bottom + 1 Rim Blade',
      weight: '1,850 kg',
    },
    {
      model: 'MS-PG-2200',
      panDiameter: 'Ø 2,200 mm (2.2 m)',
      capacity: '1.5 – 2.5 TPH',
      tiltRange: '35° – 55° Stepless',
      rimHeight: '400 mm Flanged',
      motorPower: '7.5 HP (5.5 kW)',
      scrapers: '3 Bottom + 2 Rim Blades',
      weight: '2,600 kg',
    },
    {
      model: 'MS-PG-2800',
      panDiameter: 'Ø 2,800 mm (2.8 m)',
      capacity: '2.5 – 4.0 TPH',
      tiltRange: '35° – 55° Stepless',
      rimHeight: '450 mm Flanged',
      motorPower: '10.0 HP (7.5 kW)',
      scrapers: '4 Bottom + 2 Rim Blades',
      weight: '3,800 kg',
    },
    {
      model: 'MS-PG-3200',
      panDiameter: 'Ø 3,200 mm (3.2 m)',
      capacity: '4.0 – 6.0 TPH',
      tiltRange: '35° – 55° Stepless',
      rimHeight: '500 mm Flanged',
      motorPower: '15.0 HP (11.0 kW)',
      scrapers: '5 Bottom + 2 Rim Blades',
      weight: '5,200 kg',
    },
  ];

  const pelletizingFeatures = [
    {
      title: 'Stepless Worm-Gear Tilt Angle Adjustment (35° to 55°)',
      desc: 'Precision handwheel and heavy worm-gear mechanism allows plant operators to adjust disc inclination in seconds while running. Calibrating tilt angle accurately controls pellet residence time and final granule diameter from 1 mm to 6 mm.',
      spec: '35° – 55° Angle Control',
      icon: <Compass className="h-6 w-6 text-amber-700" />,
    },
    {
      title: 'Spring-Loaded Tungsten Carbide Scrapers',
      desc: 'Independent spring-tensioned scrapers continuously sweep the rotating pan bottom and inner rim. Equipped with tungsten carbide wear shoes, they prevent sticky organic compost or bentonite clay from building up without gouging the disc plate.',
      spec: 'Tungsten Carbide Wear Shoes',
      icon: <Wrench className="h-6 w-6 text-amber-700" />,
    },
    {
      title: 'Atomized Liquid Binder Spray Manifold',
      desc: 'An overhead multi-nozzle spray header delivers micro-atomized water or liquid binders (molasses, starch slurry, lignosulfonate) across the powder tumbling path, ensuring uniform moisture penetration without localized agglomerate mudding.',
      spec: 'Uniform Droplet Mist Distribution',
      icon: <Droplets className="h-6 w-6 text-amber-700" />,
    },
    {
      title: 'Heavy Structural Pedestal & Unyielding Base',
      desc: 'The entire pan disc is supported by an extra-heavy IS 2062 channel-iron triangular pedestal base that absorbs rotational dynamic thrust and prevents frame flexing under full 3-ton live operating bed loads.',
      spec: 'IS 2062 Reinforced Frame',
      icon: <ShieldCheck className="h-6 w-6 text-amber-700" />,
    },
  ];

  const applications = [
    {
      title: 'Organic Fertilizer & Composted Cow Dung',
      desc: 'Transforms raw, bulky decomposed compost, poultry litter, and vermicompost into hard, dust-free spherical granules (3 mm to 4 mm) compatible with commercial tractor-mounted seed drills and broadcast spreaders.',
      highlight: '93%+ Granulation Balling Rate',
      icon: <Sprout className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: 'NPK Compound Fertilizers & Chemical Blends',
      desc: 'Agglomerates mixed powders of urea, diammonium phosphate (DAP), single superphosphate (SSP), and potassium chloride (MOP) into balanced multi-nutrient granules with uniform chemical composition in each pellet.',
      highlight: 'Uniform Multi-Nutrient Release',
      icon: <Layers className="h-6 w-6 text-cyan-600" />,
    },
    {
      title: 'Bentonite Clay Pellets & Cat Litter',
      desc: 'Pelletizes raw sodium and calcium bentonite clay powder into perfectly spherical granules for agricultural pesticide carriers, soil conditioning granules, and high-clumping commercial cat litter products.',
      highlight: 'Smooth Spherical Morphology',
      icon: <CircleDot className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Humic Acid, Biochar & Organic Soil Improvers',
      desc: 'Agglomerates fine black humic acid potassium humate powders and crushed biochar fines with organic binders to create slow-release soil regeneration beads that improve soil cation exchange capacity.',
      highlight: 'Zero Powder Blow-Away Loss',
      icon: <Factory className="h-6 w-6 text-indigo-600" />,
    },
  ];

  const qualityComparison = [
    {
      metric: 'Bulk Density & Packaging Volume',
      raw: 'Low (0.45 – 0.55 g/cm³), bulky storage',
      pellet: 'High (0.80 – 0.95 g/cm³), 40% bag volume saved',
      impact: 'Dramatically reduces warehousing footprint and road freight transportation costs per metric ton.',
    },
    {
      metric: 'Workplace Dust & Operator Safety',
      raw: 'Severe dust plumes during bagging & field handling',
      pellet: 'Virtually 100% dust-free hard granules',
      impact: 'Protects factory workforce and prevents wind blow-away drift during farm broadcasting.',
    },
    {
      metric: 'Mechanical Drill Machine Applicability',
      raw: 'Chokes hopper chutes, bridges seed boxes',
      pellet: 'Smooth free-flowing spherical rollability',
      impact: 'Enables modern precision farming drills to dispense uniform fertilizer dosages without blockage.',
    },
    {
      metric: 'Nutrient Leaching & Soil Release Rate',
      raw: 'Instant flash dissolution or surface runoff in rain',
      pellet: 'Controlled slow capillary moisture release',
      impact: 'Ensures plant roots absorb nutrients progressively over 60–90 days without root scorching.',
    },
  ];

  const faqs = [
    {
      question: 'What is the working principle of a pan disc fertilizer granulator?',
      answer:
        'A pan disc granulator operates on wet agglomeration physics. Dry powder is fed continuously onto a disc rotating at 14 to 22 RPM, inclined at 35° to 55°. Atomized binder liquid is sprayed onto the tumbling powder. Centrifugal force carries the powder upward along the pan disc wall until gravity causes it to cascade downward. This rolling snowball motion nucleates small seeds, accreting successive powder layers. Because larger, denser granules have greater mass, they naturally migrate to the surface of the tumbling bed and spill over the low rim edge once they reach target size (2 mm to 4 mm), providing automatic self-classification without internal screening.',
    },
    {
      question: 'How does adjusting the pan tilt angle affect granule size and production rate?',
      answer:
        'Tilt angle directly dictates granule retention time inside the pan. A steeper inclination (48° to 55°) creates a shallower rolling bed and faster overflow, producing smaller granules (1 mm to 3 mm, ideal for bentonite pesticide carriers and chemical seed coating). A flatter inclination (35° to 42°) deepens the material retention pool, allowing particles to roll longer and grow larger and denser (3 mm to 6 mm, ideal for organic compost and agricultural NPK fertilizer). Stepless worm-gear control allows adjustment while running.',
    },
    {
      question: 'What moisture level is required in the raw material for successful disc granulation?',
      answer:
        'Optimal granulation moisture depends on material composition. For organic compost and cow dung manure, initial powder moisture should be between 20% and 25%, with spray mist bringing total moisture in the pan to 28%–32%. For inorganic chemical NPK formulations and bentonite clay, required moisture is much lower, typically 10% to 16%. Following granulation, the green granules are discharged into a downstream rotary drum dryer to reduce moisture below 10% for bagging.',
    },
    {
      question: 'What types of liquid binders are used with pan disc granulators?',
      answer:
        'Common binders include plain atomized water (when the raw powder contains natural soluble salts or clays), molasses (diluted 1:3 with water, excellent for organic compost), sodium bentonite slurry, lignosulfonate, soluble starch paste, or humic acid liquid. The choice depends on target granule crush strength, final product cost, and agricultural solubility requirements.',
    },
    {
      question: 'Can the disc pan be manufactured with stainless steel or anti-corrosion lining?',
      answer:
        'Yes. While standard machines feature heavy IS 2062 Grade B carbon steel pans, Minerals Solutions regularly fabricates complete SS304 or SS316 contact pans and disc rims for corrosive chemical fertilizers (such as ammonium sulphate, SSP, and acidic formulations). For sticky organic compost, we also offer ultra-high-molecular-weight polyethylene (UHMW-PE) anti-stick linings that eliminate material adhesion.',
    },
    {
      question: 'What is the indicative price and manufacturing lead time at your Dahegam workshop?',
      answer:
        'Our baseline MS-PG-1500 (1.5 m) starts at ₹ 3,50,000 / piece, while the flagship MS-PG-2200 (2.2 m, 2 TPH line) is priced around ₹ 3,75,000 to ₹ 4,20,000 depending on motor brand and scraper metallurgy. Larger 2.8m and 3.2m lines range up to ₹ 9,50,000. Standard units are manufactured in our Zak GIDC, Dahegam facility with delivery lead times of 10 to 18 business days.',
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Industrial Pan Disc Fertilizer Granulator',
      image: `${company.siteUrl}/images/products/fertilizer-pellet/fertilizer-pan-granulator-unit-lg.webp`,
      description:
        'Industrial pan disc fertilizer granulators (1.5m to 3.2m diameter, 0.5 to 6 TPH) for organic compost, NPK fertilizer, and bentonite clay. Stepless worm-gear tilt adjustment (35°-55°), spring-loaded tungsten scrapers, and high balling rate.',
      brand: {
        '@type': 'Brand',
        name: 'Minerals Solutions',
      },
      sku: 'MS-PG-SERIES',
      mpn: 'MS-PG-2200',
      manufacturer: {
        '@type': 'Organization',
        name: company.legalName,
        url: company.siteUrl,
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: 350000,
        highPrice: 950000,
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
          name: 'Pan Disc Diameter',
          value: '2,200 mm (2.2 Meter Standard, available 1.5m to 3.2m)',
        },
        {
          '@type': 'PropertyValue',
          name: 'Production Capacity',
          value: '1.5 to 2.5 TPH (MS-PG-2200 flagship line)',
        },
        {
          '@type': 'PropertyValue',
          name: 'Tilt Angle Regulation',
          value: '35° to 55° stepless worm-gear handwheel control',
        },
        {
          '@type': 'PropertyValue',
          name: 'Balling Efficiency',
          value: '> 93% spherical granule yield (2 mm to 4 mm target size)',
        },
        {
          '@type': 'PropertyValue',
          name: 'Scraper System',
          value: 'Multi-blade spring-loaded with tungsten carbide wear shoes',
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
          name: 'Pan Disc Granulator',
          item: `${company.siteUrl}/products/fertilizer-granulation-plants/disc-granulator/`,
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
                  <CircleDot className="h-3.5 w-3.5 text-amber-700 animate-pulse" />
                  Centrifugal Agglomeration & Spherical Pelletizing
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
                  Industrial Pan Disc Fertilizer Granulators (MS-PG Series)
                </h1>

                <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                  Engineered in Zak GIDC, Dahegam, Minerals Solutions pan disc granulators transform organic compost,
                  decomposed manure, NPK chemical powders, and bentonite clay into uniform, dust-free spherical granules
                  (2 mm to 4 mm) with over 93% balling yield.
                </p>

                {/* Key Technical Highlights Badges */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Pan Diameter</span>
                    <span className="text-base font-bold text-slate-900">Ø 2,200 mm</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Throughput</span>
                    <span className="text-base font-bold text-slate-900">1.5 – 2.5 TPH</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Tilt Adjustment</span>
                    <span className="text-base font-bold text-amber-700">35° – 55° Stepless</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Balling Rate</span>
                    <span className="text-base font-bold text-emerald-700">&gt; 93% Yield</span>
                  </div>
                </div>

                {/* Pricing & Commercial CTA Group */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href={rfqLink} variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                    Request Pricing: ₹ 3,50,000+
                  </Button>
                  <Button href={whatsappUrl} variant="outline" size="lg" external icon={<Phone className="h-4 w-4" />}>
                    WhatsApp Technical Sheet
                  </Button>
                </div>

                {/* Quick Trust Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Tungsten Carbide Scrapers
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> High-Torque Geared Drive
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Optional SS304 Lined Pan
                  </span>
                </div>
              </div>

              {/* Right Column: Authentic Equipment Visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 shadow-xl bg-slate-900">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/products/fertilizer-pellet/fertilizer-pan-granulator-unit-lg.webp"
                      alt="Industrial Pan Disc Fertilizer Granulator Fabricated by Minerals Solutions in Dahegam Gujarat" width={800} height={600}
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                    />
                  </div>
                  <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-white flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">MS-PG-2200 Pan Granulator</p>
                      <p className="text-xs text-slate-400">Fabricated at Zak GIDC, Dahegam Workshop</p>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      ₹ 3,50,000 Baseline
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
                  <strong className="text-slate-950 font-semibold">What is an industrial pan disc fertilizer granulator? </strong>
                  An industrial pan disc fertilizer granulator is a continuous rotary agglomeration machine engineered to transform fine powdered compost, vermicompost, NPK compounds, bentonite clay, and dolomite into uniform, dense spherical pellets. Manufactured in Zak GIDC, Dahegam, the machine consists of a heavy circular pan (1,800mm to 3,600mm diameter) lined with polypropylene or stainless steel to prevent sticking, mounted on a rigid structural base with stepless tilt adjustment from 40 to 55 degrees. Powered by high-torque IE3 motors (7.5 to 30 kW), the inclined disc rotates at 12 to 24 RPM while atomized liquid binder sprays over tumbling powder. Centrifugal classification automatically stratifies growing granules, discharging 93%+ on-size spherical pellets (2.0mm to 4.5mm) over the outer rim at continuous production capacities from 1 to 8 TPH for high-efficiency commercial packaging and bulk agricultural distribution.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: Disc Pelletizing Physics: Centrifugal Agglomeration & Size Grading */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Agglomeration Mechanics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Disc Pelletizing Physics: Centrifugal Agglomeration & Size Grading
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Unlike extrusion pellet mills that consume massive electrical power forcing paste through dies, pan disc
                granulation harnesses natural rotational physics and surface tension, consuming only 3.7 to 5.5 kW per 2 TPH of
                pelletized fertilizer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-4 font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Nucleation & Seeding</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Micro-droplets from atomizing spray nozzles wet dry powder particles, forming liquid capillary pendular
                  bridges that aggregate into tiny 0.5 mm nucleation seed cores in the lower quadrant of the pan.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-4 font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Snowball Layering Growth</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  As seed cores roll continuously across the ascending powder bed, compressive rotational pressure packs
                  dry powder onto the wetted exterior, steadily growing uniform spherical layers with high internal density.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-4 font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Self-Classifying Rim Overflow</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Larger granules possess greater kinetic energy and buoyant segregation. They rise to the top surface of the
                  tumbling bed and naturally crest the flanged rim edge, discharging continuously without blocking incoming feed.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Stepless Worm-Gear Tilt Adjustment (35° to 55° Angle Control) */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Operational Control
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Stepless Worm-Gear Tilt Adjustment (35° to 55° Angle Control)
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Different fertilizer formulations require distinct residence times. Minerals Solutions integrates an unyielding
                worm-gear tilting mechanism that allows plant operators to adjust pan angle in seconds while running.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pelletizingFeatures.map((item, idx) => (
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
                    <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Engineering Spec</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                      {item.spec}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tilt Angle Dynamic Guidance Box */}
            <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 block mb-1">
                    Granule Sizing Physics
                  </span>
                  <h4 className="text-lg font-bold">How Tilt Angle Calibrates Granule Diameter</h4>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Setting the pan at <strong>48° to 55°</strong> reduces powder pool depth and speeds up discharge,
                    producing fine 1.5 mm to 2.5 mm granules ideal for bentonite pesticide carriers. Flattening the angle to
                    <strong>38° to 44°</strong> deepens the retention bed, allowing pellets to roll longer and accrete into
                    larger 3.5 mm to 5.0 mm granules for agricultural compost and NPK broadcasting.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-end">
                  <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-center w-full">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">Balling Efficiency</span>
                    <span className="text-2xl font-extrabold text-amber-400">&gt; 93% In-Spec</span>
                    <span className="block text-xs text-slate-400 mt-1">2 mm to 4 mm Target Size</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: Technical Specifications & Capacities (MS-PG-2200 Line) */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Manufacturing Specifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Technical Specifications & Capacities (MS-PG Series)
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Fabricated with heavy IS 2062 carbon steel plates (or optional food/chemical-grade SS304 pan liners) and
                driven by high-torque helical geared reduction motors.
              </p>
            </div>

            {/* Technical Specification Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold tracking-wider">
                  <tr>
                    <th className="py-4 px-4 border-b border-slate-200">Model</th>
                    <th className="py-4 px-4 border-b border-slate-200">Pan Diameter</th>
                    <th className="py-4 px-4 border-b border-slate-200">Capacity (TPH)</th>
                    <th className="py-4 px-4 border-b border-slate-200">Tilt Adjustment</th>
                    <th className="py-4 px-4 border-b border-slate-200">Rim Height</th>
                    <th className="py-4 px-4 border-b border-slate-200">Motor Power</th>
                    <th className="py-4 px-4 border-b border-slate-200">Scraper System</th>
                    <th className="py-4 px-4 border-b border-slate-200">Operating Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {models.map((item, idx) => (
                    <tr key={item.model} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-3.5 px-4 font-bold text-slate-950 font-mono">{item.model}</td>
                      <td className="py-3.5 px-4 text-slate-700 font-semibold">{item.panDiameter}</td>
                      <td className="py-3.5 px-4 font-bold text-amber-700">{item.capacity}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.tiltRange}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.rimHeight}</td>
                      <td className="py-3.5 px-4 text-slate-900 font-medium">{item.motorPower}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.scrapers}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500 italic">
              * Note: Capacities depend on powder bulk density, moisture content, and binder cohesiveness. Variable frequency speed drives (VFD) and complete SS304/SS316 anti-corrosive pan assemblies are custom built at our Dahegam workshop.
            </p>
          </Container>
        </section>

        {/* Section 4: Applications: Organic Manure, NPK Compounds & Bentonite Clay */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Industry Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Applications: Organic Manure, NPK Compounds & Bentonite Clay
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Minerals Solutions pan disc granulators are deployed in over 85 fertilizer plants and mineral processing
                facilities across Gujarat, Rajasthan, and central India.
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
                    <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Quality Advantage</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300">
                      {app.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 5: Granule Quality Comparison: Spherical Disc Pellets vs Raw Powder */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Commercial Superiority
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Granule Quality Comparison: Spherical Disc Pellets vs. Raw Powder
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Selling ungranulated powdered manure or compost yields low margins and creates customer complaints due to dust
                and caking. Upgrading to spherical disc granules transforms waste into premium branded agricultural products.
              </p>
            </div>

            {/* Quality Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mb-8">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4 border-b border-slate-200">Performance Metric</th>
                    <th className="py-3.5 px-4 border-b border-slate-200">Raw Powder / Compost</th>
                    <th className="py-3.5 px-4 border-b border-slate-200">Pan Disc Spherical Granules</th>
                    <th className="py-3.5 px-4 border-b border-slate-200">Commercial & Farming Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {qualityComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{row.metric}</td>
                      <td className="py-3.5 px-4 text-rose-700 text-xs font-mono">{row.raw}</td>
                      <td className="py-3.5 px-4 text-emerald-700 font-bold text-xs font-mono">{row.pellet}</td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  href="/products/fertilizer-granulation-plants/double-roller-granulator/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Double Roller Compactor Granulator specifications"
                >
                  <Image
                    src="/images/products/fertilizer-pellet/fertilizer-granulation-plant-primary-md.webp"
                    alt="Double Roller Compaction Granulator"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Sibling Pellet Line
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/fertilizer-granulation-plants/double-roller-granulator/" className="hover:underline">
                        Double Roller Compactor Granulator
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Dry compaction extrusion granulator requiring zero moisture addition or drying fuel.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/fertilizer-granulation-plants/double-roller-granulator/"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-mono font-bold text-blue-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Sibling Pellet Line
                    </span>
                  </div>
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/fertilizer-granulation-plants/rotary-drum-granulator/" className="hover:underline">
                        Rotary Drum Granulator Machines
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      High-tonnage continuous tumbling agglomeration drum for NPK and DAP fertilizer lines.
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
                    <span className="text-[10px] font-mono font-bold text-purple-700 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">
                      Complementary Thermal System
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
                      Downstream thermal rotary dryer reducing wet green compost pellets to hard storage moisture.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/industrial-rotary-dryers/triple-pass-dryer/"
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

        {/* Section 7: Frequently Asked Questions on Disc Granulation Equipment */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Plant Manager FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Frequently Asked Questions on Disc Granulation Equipment
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Practical answers to guide plant engineers, compost project developers, and fertilizer manufacturers.
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
                  Order Your Pan Disc Fertilizer Granulator from the Direct Manufacturer
                </h2>
                <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Eliminate trader markups. Visit our Dahegam workshop to test-run your raw compost powder on our pilot disc
                  granulator. Get transparent factory pricing starting at ₹ 3,50,000 / piece with full OEM warranty.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Factory className="h-4 w-4 text-amber-400" />
                    <span>Zak GIDC, Dahegam Facility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HardHat className="h-4 w-4 text-amber-400" />
                    <span>Pilot Pelletizing Trials Available</span>
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

