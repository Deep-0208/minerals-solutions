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
  Sliders,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Rotary Drum Granulator Machine | Minerals Solutions',
  },
  description: 'Source high-capacity rotary drum fertilizer granulators (3 to 20 TPH) with internal steam injection and UHMWPE anti-stick lining from Zak GIDC, Dahegam.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/rotary-drum-granulator/',
  },
  openGraph: {
    title: 'Rotary Drum Granulator Machines | Minerals Solutions',
    description:
      'High capacity rotary drum fertilizer granulators (3 to 20 TPH). Internal steam injection & UHMWPE non-stick lining. Zak GIDC, Dahegam, Gujarat.',
    url: `${company.siteUrl}/products/fertilizer-granulation-plants/rotary-drum-granulator/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotary Drum Granulator Machine | Minerals Solutions',
    description:
      'High capacity rotary drum fertilizer granulators (3 to 20 TPH). Internal steam injection & UHMWPE non-stick lining. Zak GIDC, Dahegam, Gujarat.',
    images: [defaultTwitterImage],
  },
};

export default function RotaryDrumGranulatorPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const rfqLink = '/request-quote/?product=rotary-drum-granulator';
  const whatsappUrl = `https://wa.me/916352453050?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering sizing sheet and quotation for an Industrial Rotary Drum Fertilizer Granulator.'
  )}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Fertilizer Granulation Plants', href: '/products/fertilizer-granulation-plants/' },
    { label: 'Rotary Drum Granulator', href: '/products/fertilizer-granulation-plants/rotary-drum-granulator/' },
  ];

  const models = [
    {
      model: 'MS-RDG-1500',
      dimensions: 'Ø 1,500 × 6,000 mm',
      capacity: '3 – 5 TPH',
      incline: '2.5° – 3.0°',
      speed: '10 – 14 RPM',
      motorPower: '22.0 kW (30 HP)',
      linerType: 'UHMWPE / Acid Rubber',
      weight: '11,500 kg',
    },
    {
      model: 'MS-RDG-1800',
      dimensions: 'Ø 1,800 × 8,000 mm',
      capacity: '5 – 8 TPH',
      incline: '2.5° – 3.0°',
      speed: '9 – 13 RPM',
      motorPower: '30.0 kW (40 HP)',
      linerType: 'UHMWPE / Acid Rubber',
      weight: '16,800 kg',
    },
    {
      model: 'MS-RDG-2200',
      dimensions: 'Ø 2,200 × 10,000 mm',
      capacity: '8 – 12 TPH',
      incline: '2.0° – 2.5°',
      speed: '8 – 12 RPM',
      motorPower: '45.0 kW (60 HP)',
      linerType: 'UHMWPE / Acid Rubber',
      weight: '24,500 kg',
    },
    {
      model: 'MS-RDG-2500',
      dimensions: 'Ø 2,500 × 12,000 mm',
      capacity: '12 – 16 TPH',
      incline: '2.0° – 2.5°',
      speed: '7 – 11 RPM',
      motorPower: '55.0 kW (75 HP)',
      linerType: 'UHMWPE / Acid Rubber',
      weight: '34,000 kg',
    },
    {
      model: 'MS-RDG-2800',
      dimensions: 'Ø 2,800 × 14,000 mm',
      capacity: '16 – 20 TPH',
      incline: '1.5° – 2.0°',
      speed: '6 – 10 RPM',
      motorPower: '75.0 kW (100 HP)',
      linerType: 'UHMWPE / Acid Rubber',
      weight: '46,000 kg',
    },
  ];

  const drumFeatures = [
    {
      title: 'Sub-Bed Steam & Slurry Sparger Header',
      desc: 'Stainless steel 316L internal distribution manifolds inject low-pressure saturated steam directly beneath the rolling bed of material. Condensation releases latent heat, raising bed temperature to 65°C–80°C to activate chemical plasticity with minimal water addition.',
      spec: '65°C – 80°C Bed Heating',
      icon: <Flame className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Anti-Stick UHMWPE / Natural Rubber Liners',
      desc: 'To prevent sticky NPK formulations and moist bio-organic compost from adhering to the inner cylinder, the entire shell is lined with 10mm ultra-high-molecular-weight polyethylene or flexible breathing rubber that eliminates material crusting.',
      spec: 'Zero Material Caking',
      icon: <ShieldCheck className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Induction-Hardened Cast Girth Gear Drive',
      desc: 'High-torque rotation is driven by a precision-machined cast alloy steel girth gear ring and forged alloy pinion running in a heavy enclosed lubrication guard, engineered with a 2.5 service factor for continuous 24/7 industrial duty.',
      spec: '2.5 Service Factor Drive',
      icon: <Cog className="h-6 w-6 text-amber-600" />,
    },
    {
      title: 'Forged 42CrMo Riding Tyres & Trunnion Rollers',
      desc: 'Heavy seamless forged alloy tyres mounted on floating chair pads accommodate thermal shell expansion, supported by spherical roller bearing trunnions with dual mechanical thrust rollers for axial stability.',
      spec: 'Forged 42CrMo Tyres',
      icon: <RotateCw className="h-6 w-6 text-amber-600" />,
    },
  ];

  const formulations = [
    {
      name: 'High-Analysis NPK Compounds (15-15-15, 20-20-0, 10-26-26)',
      desc: 'Ammoniation-granulation process combining phosphoric acid, ammonia vapour, urea, and potash inside the tumbling bed, producing perfectly spherical, chemically homogeneous multi-nutrient granules.',
      metric: '> 90% Spherical Roundness',
    },
    {
      name: 'Diammonium Phosphate (DAP) & Single Superphosphate (SSP)',
      desc: 'Agglomerates neutralized phosphate slurry and cured SSP powders into dense, moisture-stable granules that resist moisture absorption during tropical warehouse storage.',
      metric: 'Crush Strength > 28 N',
    },
    {
      name: 'High-Tonnage Bio-Organic & Sugar Mill Press Mud',
      desc: 'Continuous large-scale pelletizing of composted distillery spent wash, boiler ash, and sugar mill filter cake at 10 to 20 TPH, transforming bulky organic waste into high-value bagged fertilizer.',
      metric: 'Up to 20 TPH Continuous Output',
    },
    {
      name: 'Clay Soil Conditioners & Bentonite Agglomerates',
      desc: 'Forms uniform spherical bentonite and mineral clay granules for pesticide carriers and macro-porous agricultural water retention beads with high absorption capacity.',
      metric: 'Calibrated 2.5 – 5.0 mm Sizing',
    },
  ];

  const faqs = [
    {
      question: 'What is the working mechanism of a rotary drum fertilizer granulator?',
      answer:
        'A rotary drum granulator operates via continuous rolling-curtain agglomeration. Raw powder is fed into an inclined rotating cylinder (tilted at 2° to 3° and rotating at 8 to 14 RPM). As the cylinder rotates, friction and internal flights carry the powder upward along the cylinder wall until gravity causes it to cascade downward in a continuous, smooth rolling curtain. Multi-point stainless steel spargers inject steam, water, or chemical slurries beneath the tumbling bed. Liquid capillary forces and mechanical tumbling pressure aggregate particles into dense, uniform spherical granules, which discharge continuously from the lower end.',
    },
    {
      question: 'Why is steam injection utilized instead of spraying cold water?',
      answer:
        'Steam injection provides dual thermochemical advantages: latent heat and minimal water volume. When saturated steam condenses beneath the rolling bed, it releases massive latent heat, raising the bed temperature to 65°C–80°C. At this elevated temperature, fertilizer salts (especially urea and ammonium compounds) become partially plastic and soluble, allowing rapid balling with only 8% to 12% moisture (compared to 18%–25% required with cold water). This dramatically reduces the drying fuel load in downstream rotary dryers, saving thousands of rupees in coal and gas costs every shift.',
    },
    {
      question: 'How do UHMWPE and flexible rubber drum linings prevent caking?',
      answer:
        'Sticky compound fertilizers (such as urea-based NPKs) easily bake onto hot mild steel shells, forming thick insulating crusts that choke drum volume. Minerals Solutions installs either 10 mm UHMWPE sheets (which have a near-zero friction coefficient that prevents paste adhesion) or flexible natural rubber sheets mounted with a breathing backing. As the drum rotates, the rubber sheet flexes under material weight, automatically popping off any adhering crusts and maintaining 100% active drum volume without shutdown scraping.',
    },
    {
      question: 'What is the typical production capacity range of the MS-RDG series?',
      answer:
        'Our standard drum diameters range from 1,500 mm up to 2,800 mm with cylinder lengths from 6,000 mm up to 14,000 mm, delivering continuous production throughputs from 3 TPH up to 20 TPH. For mega fertilizer plants, custom tandem lines exceeding 30 TPH are engineered and fabricated at our Zak GIDC, Dahegam facility.',
    },
    {
      question: 'How are the girth gears and forged trunnion rollers maintained?',
      answer:
        'The forged girth gear and drive pinion run inside a heavy sheet-steel lubrication guard equipped with continuous automatic spray or bath lubrication. Support trunnions feature heavy-duty spherical roller bearings housed in cast steel plummer blocks with grease purge ports. Periodic greasing every 150 operating hours and monitoring tyre-roller contact patterns ensures trouble-free 24/7 continuous operation for over 10 years.',
    },
    {
      question: 'What downstream equipment is required to complete an NPK granulation plant?',
      answer:
        'A complete turnkey NPK granulation plant requires a 4-stage continuous circuit: 1) Rotary Drum Granulator (MS-RDG series), 2) Heavy Duty Rotary Drum Dryer (to reduce moisture below 2%), 3) Rotary Fertilizer Cooler (to cool granules before coating), 4) Rotary Coating Drum (to apply anti-caking wax and neem oil), integrated with our heavy bucket elevators and screening trommels.',
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Rotary Drum Fertilizer Granulator',
      image: `${company.siteUrl}/images/products/fertilizer-pellet/fertilizer-granulation-plant-variant-lg.webp`,
      description:
        'High-capacity industrial rotary drum fertilizer granulators (3 to 20 TPH). Internal steam injection spargers, anti-stick UHMWPE/rubber lining, forged girth gear drive, and continuous tumbling agglomeration for NPK and bio-organic plants.',
      brand: {
        '@type': 'Brand',
        name: 'Minerals Solutions',
      },
      sku: 'MS-RDG-SERIES',
      mpn: 'MS-RDG-1500-2800',
      manufacturer: {
        '@type': 'Organization',
        name: company.legalName,
        url: company.siteUrl,
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: 1850000,
        highPrice: 5800000,
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
          name: 'Processing Throughput',
          value: '3.0 to 20.0 TPH continuous duty',
        },
        {
          '@type': 'PropertyValue',
          name: 'Drum Dimensions',
          value: 'Ø 1,500 mm to 2,800 mm diameter × 6,000 mm to 14,000 mm length',
        },
        {
          '@type': 'PropertyValue',
          name: 'Internal Lining',
          value: 'UHMWPE non-stick polymer sheets / flexible breathing acid-resistant rubber',
        },
        {
          '@type': 'PropertyValue',
          name: 'Agglomeration Method',
          value: 'Continuous rolling-curtain tumbling with sub-bed steam & slurry injection',
        },
        {
          '@type': 'PropertyValue',
          name: 'Drive Mechanism',
          value: 'Cast alloy girth ring gear with forged pinion and spherical trunnion rollers',
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
          name: 'Rotary Drum Granulator',
          item: `${company.siteUrl}/products/fertilizer-granulation-plants/rotary-drum-granulator/`,
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
                  <RotateCw className="h-3.5 w-3.5 text-amber-700 animate-spin-slow" />
                  High-Tonnage Continuous Agglomeration &bull; 3 to 20 TPH
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
                  Industrial Rotary Drum Fertilizer Granulators
                </h1>

                <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                  Engineered in Zak GIDC, Dahegam, Minerals Solutions heavy rotary drum granulators deliver continuous
                  high-tonnage tumbling agglomeration for compound NPK fertilizers, DAP, and large-scale bio-organic manure
                  plants, featuring sub-bed steam injection and non-stick UHMWPE/rubber drum linings.
                </p>

                {/* Key Technical Highlights Badges */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Throughput</span>
                    <span className="text-base font-bold text-slate-900">3 – 20 TPH</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Drum Diameter</span>
                    <span className="text-base font-bold text-slate-900">Ø 1.5m – 2.8m</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Internal Lining</span>
                    <span className="text-base font-bold text-amber-700">UHMWPE / Rubber</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <span className="block text-xs text-slate-500 font-medium">Granule Roundness</span>
                    <span className="text-base font-bold text-emerald-700">&gt; 90% Spherical</span>
                  </div>
                </div>

                {/* Pricing & Commercial CTA Group */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href={rfqLink} variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                    Request High-Tonnage Quote
                  </Button>
                  <Button href={whatsappUrl} variant="outline" size="lg" external icon={<Phone className="h-4 w-4" />}>
                    WhatsApp Technical Sheet
                  </Button>
                </div>

                {/* Quick Trust Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Sub-Bed Steam Injection
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Forged 42CrMo Riding Tyres
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Precision Girth Gear Drive
                  </span>
                </div>
              </div>

              {/* Right Column: Authentic Equipment Visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 shadow-xl bg-slate-900">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/products/fertilizer-pellet/fertilizer-granulation-plant-variant-lg.webp"
                      alt="Industrial Rotary Drum Fertilizer Granulator Fabricated by Minerals Solutions in Dahegam Gujarat" width={800} height={600}
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                    />
                  </div>
                  <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-white flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">MS-RDG Continuous Drum Granulator</p>
                      <p className="text-xs text-slate-400">Fabricated at Zak GIDC, Dahegam Workshop</p>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Up to 20 TPH Duty
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
                  <strong className="text-slate-950 font-semibold">What is an industrial rotary drum fertilizer granulator? </strong>
                  An industrial rotary drum fertilizer granulator is a continuous tumbling agglomeration cylinder engineered for large-scale production of compound NPK fertilizers, DAP, and fortified bio-organic granules. Fabricated in Zak GIDC, Dahegam, the machine comprises a heavy-duty IS 2062 carbon steel cylindrical shell (up to 2,500mm diameter and 12m length) lined with acid-resistant natural rubber or ultra-high molecular weight polyethylene (UHMWPE) to prevent internal scaling. Supported on twin cast alloy steel tyres and induction-hardened trunnion rollers, the drum rotates at 10 to 18 RPM inclined at 2 to 2.5 degrees. An internal submerged stainless spray pipe injects pressurized steam and liquid binder into the tumbling bed, promoting capillary coalescence at 60°C to 80°C. Delivering throughputs from 3 to 20 TPH, it achieves high pelletization sphericity and yield exceeding 90% (2.0mm to 4.75mm) for bulk agricultural fertilizer distribution lines.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: High-Tonnage Continuous Agglomeration with Steam Injection */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Thermodynamic Balling Physics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                High-Tonnage Continuous Agglomeration with Steam Injection
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Large-scale fertilizer production demands continuous non-stop operation without batch interruptions.
                Minerals Solutions rotary drum granulators harness sub-bed steam injection to achieve high balling rates
                while minimizing downstream drying energy requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-4 font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Rolling Curtain Cascade</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Internal longitudinal lifters and shell friction lift material up the cylinder wall, creating a continuous
                  falling sheet where particles collide under uniform gravitational shear.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-4 font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Sub-Bed Steam Injection</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Low-pressure steam condensing inside the bed releases latent heat, raising temperature to 75°C. This activates
                  salts plasticity with only 8%–12% moisture, drastically reducing dryer fuel consumption.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-4 font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Continuous Throughput</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Inclined drum angle (1.5° to 3.0°) provides steady axial material transport, ensuring stable retention times
                  and high single-pass conversion yields exceeding 75% on-size product.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Anti-Stick Polymer (UHMWPE) & Rubber Drum Liners */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Anti-Caking Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Anti-Stick Polymer (UHMWPE) & Flexible Rubber Drum Liners
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                In high-nitrogen compound fertilizer production, warm urea paste adheres tenaciously to raw mild steel drum walls,
                forming thick insulating rings that choke throughput. Minerals Solutions installs advanced non-stick linings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {drumFeatures.map((item, idx) => (
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
                    <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Advantage</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                      {item.spec}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Liner Comparison Callout */}
            <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 block mb-1">
                    Self-Cleaning Breathing Action
                  </span>
                  <h4 className="text-lg font-bold">How Flexible Rubber Lining Eliminates Manual Scraping</h4>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Our engineered rubber lining sheets are secured with countersunk stainless fasteners and flexible perimeter
                    retaining bars. As the heavy cylinder rotates, the rubber sheet deflects slightly under material weight at
                    the bottom and flexes back at the top. This perpetual breathing action creates shear tension between the
                    rubber and any adhering crusts, causing deposits to crack and flake off automatically without plant shutdowns.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-end">
                  <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-center w-full">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">Plant Availability</span>
                    <span className="text-2xl font-extrabold text-amber-400">&gt; 95% Uptime</span>
                    <span className="block text-xs text-slate-400 mt-1">Zero Downtime Scraping</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: Technical Specifications & Sizing Matrix (MS-RDG Series) */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Equipment Engineering Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Technical Specifications & Sizing Matrix (MS-RDG Series)
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Fabricated with IS 2062 Grade B structural steel plate (12 mm to 20 mm shell thickness) and heavy forged alloy
                riding tyres, designed for continuous multi-year operation under full fertilizer slurry loads.
              </p>
            </div>

            {/* Technical Specification Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold tracking-wider">
                  <tr>
                    <th className="py-4 px-4 border-b border-slate-200">Model</th>
                    <th className="py-4 px-4 border-b border-slate-200">Drum Dimensions (Ø×L)</th>
                    <th className="py-4 px-4 border-b border-slate-200">Capacity (TPH)</th>
                    <th className="py-4 px-4 border-b border-slate-200">Drum Incline</th>
                    <th className="py-4 px-4 border-b border-slate-200">Rotation Speed</th>
                    <th className="py-4 px-4 border-b border-slate-200">Drive Motor</th>
                    <th className="py-4 px-4 border-b border-slate-200">Lining Type</th>
                    <th className="py-4 px-4 border-b border-slate-200">Operating Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {models.map((item, idx) => (
                    <tr key={item.model} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-3.5 px-4 font-bold text-slate-950 font-mono">{item.model}</td>
                      <td className="py-3.5 px-4 text-slate-700 font-medium">{item.dimensions}</td>
                      <td className="py-3.5 px-4 font-bold text-amber-700">{item.capacity}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.incline}</td>
                      <td className="py-3.5 px-4 text-slate-700">{item.speed}</td>
                      <td className="py-3.5 px-4 text-slate-900 font-medium">{item.motorPower}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.linerType}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500 italic">
              * Note: Throughput capacities depend on raw formulation bulk density, steam pressure, and moisture content. Complete variable speed VFD drives and custom dual-incline drums are manufactured on order at our Dahegam workshop.
            </p>
          </Container>
        </section>

        {/* Section 4: High-Analysis NPK & Bio-Organic Compound Formulations */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Formulation Versatility
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                High-Analysis NPK & Bio-Organic Compound Formulations
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Minerals Solutions rotary drum granulators accommodate complex chemical reaction slurries and bulky organic
                waste materials across high-capacity fertilizer manufacturing plants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formulations.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 mb-2">{item.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider">Quality Benchmark</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300">
                      {item.metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 5: Turnkey NPK Flowsheet Integration */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Turnkey Fertilizer Plants
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Turnkey NPK Flowsheet: 4-Stage Continuous Granulation & Finishing Circuit
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                The rotary drum granulator serves as the primary agglomeration heart of our turnkey compound fertilizer
                production plants manufactured in Dahegam.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="h-8 w-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mb-3">
                    01
                  </div>
                  <h4 className="font-bold text-slate-950 text-base mb-2">Drum Granulation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Powders tumble into green spherical granules under steam injection at 65°C–80°C.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="h-8 w-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mb-3">
                    02
                  </div>
                  <h4 className="font-bold text-slate-950 text-base mb-2">Thermal Drum Drying</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rotary dryer evaporates residual moisture from 10% down to &lt;2% without thermal degradation.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="h-8 w-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mb-3">
                    03
                  </div>
                  <h4 className="font-bold text-slate-950 text-base mb-2">Counter-Flow Cooling</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rotary cooler lowers granule temperature to ambient, hardening internal crystal structures.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="h-8 w-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mb-3">
                    04
                  </div>
                  <h4 className="font-bold text-slate-950 text-base mb-2">Anti-Caking Coating</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Coating drum atomizes anti-caking oil, neem oil, or talc powder onto granules for bag storage.
                  </p>
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
                href="/products/fertilizer-granulation-plants/"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#DA020D] transition-colors shrink-0"
              >
                Explore Full Fertilizer Granulation & Pellet Plants Hub <ChevronRight className="w-4 h-4 text-[#DA020D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sibling Spoke 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider mb-2">
                    Sibling Pellet Line
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Industrial Pan Disc Granulator
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Pan disc granulator with stepless angle control for organic and compost pellet lines.
                  </p>
                </div>
                <Link
                  href="/products/fertilizer-granulation-plants/disc-granulator/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  View Machine Specifications <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Sibling Spoke 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-2">
                    Sibling Finishing Line
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Fertilizer Coating & Cooling Drum
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Finishing stage rotary drum reducing pellet temperature and applying anti-caking oil.
                  </p>
                </div>
                <Link
                  href="/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/"
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
                    Triple Pass Rotary Drum Dryer Line
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Downstream thermal rotary drum drying hot compound granules from 15% moisture to below 2%.
                  </p>
                </div>
                <Link
                  href="/products/industrial-rotary-dryers/triple-pass-dryer/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  Explore Complementary Machine <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 7: Frequently Asked Questions on Drum Granulation Plants */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider block mb-2">
                Fertilizer Engineering FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 font-display">
                Frequently Asked Questions on Drum Granulation Plants
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Practical answers to guide plant engineers, project managers, and fertilizer corporate executives.
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
                  Heavy Industrial Fabrication &bull; Zak GIDC, Dahegam
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight font-display">
                  Order Your High-Tonnage Rotary Drum Granulator from the Manufacturer
                </h2>
                <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Inspect heavy steel plate rolling, submerged arc welding, and girth gear machining in progress at our
                  Dahegam workshop. Direct factory procurement, guaranteed performance, and comprehensive site commissioning.
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
