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
  Wind,
  Snowflake,
  PackageCheck,
  ShieldAlert,
  ThermometerSnowflake,
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
    absolute: 'Fertilizer Coating & Cooling Drum | Minerals Solutions',
  },
  description: 'Order rotary cooling and anti-caking coating drums for fertilizer pellets (2 to 15 TPH). Prevent bag caking and clumping. Heavy built in Zak GIDC, Dahegam.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/',
  },
  openGraph: {
    title: 'Fertilizer Coating & Cooling Drum | Minerals Solutions',
    description:
      'Rotary cooling and anti-caking coating drums for fertilizer pellets (2 to 15 TPH). Stop bag caking & moisture reabsorption. Zak GIDC, Dahegam.',
    url: `${company.siteUrl}/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fertilizer Coating & Cooling Drum | Minerals Solutions',
    description:
      'Rotary cooling and anti-caking coating drums for fertilizer pellets (2 to 15 TPH). Stop bag caking & moisture reabsorption. Zak GIDC, Dahegam.',
    images: [defaultTwitterImage],
  },
  keywords: [
    'fertilizer coating drum manufacturer',
    'rotary cooler for fertilizer pellets',
    'neem oil coating drum gujarat',
    'anti caking fertilizer drum ahmedabad',
    'fertilizer pellet cooler machine',
    'fertilizer conditioning drum',
    'npk granule coating drum',
    'rotary cooling drum fertilizer plant',
  ],
};

const ccdSpecs = [
  {
    model: 'MS-CCD-1200',
    capacity: '2.0 - 4.0 TPH',
    diameter: '1,200 mm',
    length: '8,000 mm',
    motorPower: '11 kW / 15 HP',
    coolingAirflow: '4,500 m³/hr',
    nozzleZones: '3 Heated Atomizers',
    shellThickness: '8 mm IS 2062',
    speed: '3 - 6 RPM',
    weight: '6.8 Tonnes',
  },
  {
    model: 'MS-CCD-1500',
    capacity: '4.0 - 7.0 TPH',
    diameter: '1,500 mm',
    length: '10,000 mm',
    motorPower: '15 kW / 20 HP',
    coolingAirflow: '7,200 m³/hr',
    nozzleZones: '4 Heated Atomizers',
    shellThickness: '10 mm IS 2062',
    speed: '3 - 5 RPM',
    weight: '9.5 Tonnes',
  },
  {
    model: 'MS-CCD-1800',
    capacity: '7.0 - 10.0 TPH',
    diameter: '1,800 mm',
    length: '12,000 mm',
    motorPower: '22 kW / 30 HP',
    coolingAirflow: '11,000 m³/hr',
    nozzleZones: '6 Heated Atomizers',
    shellThickness: '12 mm IS 2062',
    speed: '2.5 - 4.5 RPM',
    weight: '14.2 Tonnes',
  },
  {
    model: 'MS-CCD-2000',
    capacity: '10.0 - 13.0 TPH',
    diameter: '2,000 mm',
    length: '14,000 mm',
    motorPower: '30 kW / 40 HP',
    coolingAirflow: '14,500 m³/hr',
    nozzleZones: '8 Heated Atomizers',
    shellThickness: '12 mm IS 2062',
    speed: '2.0 - 4.0 RPM',
    weight: '18.6 Tonnes',
  },
  {
    model: 'MS-CCD-2200',
    capacity: '13.0 - 15.0+ TPH',
    diameter: '2,200 mm',
    length: '16,000 mm',
    motorPower: '37 kW / 50 HP',
    coolingAirflow: '18,000 m³/hr',
    nozzleZones: '10 Heated Atomizers',
    shellThickness: '14 mm IS 2062',
    speed: '2.0 - 3.8 RPM',
    weight: '23.5 Tonnes',
  },
];

const faqs = [
  {
    q: 'Why must fertilizer granules be cooled below 40°C before applying anti-caking coatings?',
    a: 'Granules discharging from the rotary drying drum typically exit at 75°C to 85°C. At these elevated temperatures, standard hydrophobic coating agents, such as refined neem oil, paraffin wax emulsions, and fatty amine conditioners, experience severe thermal breakdown and fail to form an intact external lipid film. Furthermore, if hot granules are directly bagged, internal thermal condensation creates microscopic water pockets inside the 50kg poly-woven sacks, dissolving granule contact surfaces and forming hard crystalline bridges that cause severe bag caking within 14 to 30 days of warehouse stacking.',
  },
  {
    q: 'What is the typical consumption rate of neem oil or anti-caking agent in the MS-CCD drum?',
    a: 'The MS-CCD Series operates with an ultra-precise liquid dosing manifold coupled with positive displacement metering pumps and loss-in-weight flow control. Liquid coating consumption averages between 0.1% and 0.3% of total pellet mass (1.0 to 3.0 kg of coating oil per metric tonne of finished fertilizer). When paired with the secondary talc or diatomaceous earth powder dusting auger, parting powder consumption averages 0.2% to 0.5% (2.0 to 5.0 kg per metric tonne), delivering 99.4%+ microscopic surface barrier coverage at minimal operational consumable cost.',
  },
  {
    q: 'How does the counter-current airflow configuration avoid sucking fine fertilizer dust into the exhaust fan?',
    a: 'Our drum employs an engineered non-turbulent counter-current airflow design where induced draft ambient air enters through the lower discharge hood and flows toward the feed inlet. The internal flighting in the cooling zone is uniquely calibrated as spiral cascading ribbons with minimal free-fall distance, generating a dense, gentle curtain rather than violent dust-generating turbulence. Air velocity is strictly maintained under 1.8 m/sec across the cross-sectional drum area, and the exhaust air passes through an integrated high-efficiency cyclone separator and wet scrubber system to recover any airborne fines back into the granulator feed stream.',
  },
  {
    q: 'Can the MS-CCD conditioning drum handle both organic bio-fertilizer pellets and chemical NPK granules?',
    a: 'Yes. The MS-CCD Series is engineered for universal fertilizer conditioning. For chemical compound fertilizers (NPK 15-15-15, 20-20-0, DAP, Urea blends), the system applies heating-jacketed oil and talc powder to neutralize extreme hygroscopic salts. For organic bio-fertilizer pellets and humic acid granules, the spray manifold can be switched to bio-pesticide liquid inoculants, micronutrient suspensions, or organic neem coatings without modifying drum mechanical internals. The contact zones can be optionally fabricated in SS304/SS316 stainless steel for acidic or highly corrosive organic formulations.',
  },
];

export default function FertilizerCoolingCoatingDrumPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Fertilizer Cooling and Anti-Caking Coating Drum',
    description:
      'Industrial rotary cooling and anti-caking coating drums for fertilizer pellets (2 to 15 TPH). Ambient counter-current convective cooling from 80°C to below 40°C combined with atomized liquid neem/wax coating and powder conditioning to prevent bag caking.',
    image: `${company.siteUrl}/images/products/fertilizer-pellet/fertilizer-granulation-plant-variant-lg.webp`,
    sku: 'MS-CCD-1200-2200',
    mpn: 'MS-CCD-SERIES',
    brand: {
      '@type': 'Brand',
      name: 'Minerals Solutions',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Minerals Solutions',
      url: company.siteUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '10, Shyam Estate, Zak GIDC, Dahegam',
        addressLocality: 'Gandhinagar',
        addressRegion: 'Gujarat',
        postalCode: '382330',
        addressCountry: 'IN',
      },
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '1450000',
      highPrice: '3800000',
      offerCount: '5',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: company.siteUrl,
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
        name: 'Fertilizer Cooling & Coating Drum',
        item: `${company.siteUrl}/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main className="min-h-screen bg-white text-slate-900">
        {/* Breadcrumb Navigation Bar */}
        <section className="bg-slate-50 border-b border-slate-200 py-3">
          <Container>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products/' },
                {
                  label: 'Fertilizer Granulation Plants',
                  href: '/products/fertilizer-granulation-plants/',
                },
                {
                  label: 'Fertilizer Cooling & Coating Drum',
                  href: '/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/',
                },
              ]}
            />
          </Container>
        </section>

        {/* Hero Section */}
        <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-white">

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/80 border border-teal-300 text-teal-950 text-xs font-semibold uppercase tracking-wider">
                  <PackageCheck className="w-3.5 h-3.5" />
                  Bag-Ready Storage Quality | Anti-Caking Surface Passivation
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 font-display">
                  Fertilizer Rotary Cooling &{' '}
                  <span className="text-teal-700">
                    Anti-Caking Coating Drums
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Continuous ambient counter-current convective cooling from 80°C down to below 40°C
                  combined with high-pressure atomized liquid neem oil, wax emulsions, and talc powder
                  conditioning. Engineered by Minerals Solutions to eliminate bag hardening, moisture
                  reabsorption, and granule degradation across tropical warehouse storage.
                </p>

                {/* Key Metric Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Thermal Drop
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900-400 mt-1">
                      80°C &rarr; &lt;40°C
                    </div>
                    <div className="text-[11px] text-slate-500">Packaging Safe</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Coating Coverage
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900-400 mt-1">
                      99.4%
                    </div>
                    <div className="text-[11px] text-slate-500">Uniform 360° Shield</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Plant Throughput
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                      2 - 15 TPH
                    </div>
                    <div className="text-[11px] text-slate-500">Continuous Duty</div>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Shelf Stability
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
                      12 Months
                    </div>
                    <div className="text-[11px] text-slate-500">Zero Bag Clumping</div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button
                    href="/request-quote/?product=fertilizer-cooling-coating-drum"
                    variant="primary"
                    size="lg"
                    icon={<FileText className="w-5 h-5" />}
                  >
                    Request Sizing Quote & Drawing
                  </Button>
                  <Button
                    href="tel:+919227004455"
                    variant="outline"
                    size="lg"
                    external
                    icon={<Phone className="w-5 h-5 text-teal-400" />}
                  >
                    Talk to Chemical Process Engineer
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 bg-slate-900 shadow-xl">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/products/fertilizer-pellet/fertilizer-granulation-plant-variant-lg.webp"
                      alt="Minerals Solutions Industrial Fertilizer Cooling and Coating Drum undergoing workshop commissioning at Zak GIDC Dahegam" width={800} height={600}
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />

                  </div>

                  <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-white flex items-center justify-between">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>MODEL: MS-CCD-1800</span>
                      <span className="text-teal-700 font-bold">10 TPH FINISHING SECTION</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Factory view: Dual-zone conditioning drum showing counter-current cooling hood,
                      heated liquid neem oil spray bar, and variable-speed powder dusting auger.
                    </p>
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
                  <strong className="text-slate-950 font-semibold">What is a fertilizer cooling and anti-caking coating drum? </strong>
                  A fertilizer cooling and anti-caking coating drum is a critical continuous rotary post-processing machine deployed in chemical compound (NPK, DAP) and organic bio-fertilizer manufacturing lines. Fabricated at Minerals Solutions works in Zak GIDC, Dahegam, freshly granulated pellets exiting thermal dryers at 70°C to 85°C enter the counter-current cooling zone where high-volume ambient air passes through cascading internal flights, reducing pellet core temperature below 40°C to eliminate condensation inside bags. The cooled pellets then transfer directly into an enclosed oil-spray coating barrel where high-pressure atomizing nozzles meter liquid paraffin, micronized amine, or neem oil (0.15% to 0.35% by weight), followed by micronized talc dusting. Processing capacities range from 2 to 15 TPH, completely preventing granule caking, bag hardening, and hygroscopic moisture absorption during long-term commercial warehouse storage.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: Thermodynamic Counter-Current Air Cooling */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-teal-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Convective Heat Exchange Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Ambient Counter-Current Air Cooling: 80°C Down to &lt;40°C
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Direct bagging of hot fertilizer granules is the primary root cause of warehouse
                caking disputes. Minerals Solutions rotary cooling drums utilize high-volume
                counter-current convective airflow to strip residual sensible heat before moisture can
                condense in packaging bags.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
                  <ThermometerSnowflake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Eliminating Bag Condensation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  When granules enter 50kg poly-woven sacks above 45°C, the temperature differential
                  between the warm bag core and cool warehouse ambient air drives moisture migration to
                  the bag inner wall. Droplets dissolve local fertilizer salts, recrystallizing into rock-hard
                  solid slabs. Cooling below 40°C permanently removes this thermodynamic driving force.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
                  <Wind className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Counter-Current Flow Dynamics</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Filtered ambient air enters at the discharge hood where the coolest pellets exit,
                  maximizing the temperature delta across the entire cylinder length. Induced draft fans
                  pull the warmed air toward the feed end at controlled non-turbulent velocities under 1.8
                  m/sec, preventing granule entrainment while extracting up to 45°C of sensible heat.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">Gentle Non-Attrition Cascading Flights</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Standard drying flights create violent drops that smash fragile pellets into fine dust.
                  Our cooling drum incorporates proprietary curved spiral cascading flights that gently lift
                  and shower granules through the air stream in a continuous dense curtain, achieving
                  maximum surface contact while maintaining 99%+ granule integrity without dust creation.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Micronized Liquid Coating Manifold */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-teal-700 font-mono text-xs uppercase tracking-wider font-semibold">
                  Surface Passivation & Lipid Barrier
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                  Micronized Liquid Coating Manifold (Neem Oil & Wax Agents)
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  Applying coating oil to hot granules causes thermal vaporisation and uneven blotches.
                  Once cooled below 40°C, the granules enter our precision liquid atomization zone.
                  Heated stainless steel spray manifolds deliver a micro-fine mist of hydrophobic coating
                  agents, forming a continuous protective lipid jacket over every single pellet.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 p-1 rounded-full bg-amber-400/20 text-amber-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-slate-950 font-semibold text-sm">
                        Heated Water-Jacketed Spray Bar
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        High-viscosity neem oil and molten paraffin wax require strict temperature
                        control (55°C–70°C). Our jacketed circulation bar prevents wax crystallization
                        and guarantees instantaneous pneumatic atomization down to 25-micron droplets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 p-1 rounded-full bg-amber-400/20 text-amber-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-slate-950 font-semibold text-sm">
                        Loss-In-Weight Dosing Integration
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        Coupled with variable-frequency positive displacement gear pumps, dosing rates
                        dynamically calibrate to incoming pellet mass flux, maintaining exact 0.1% to 0.3%
                        oil addition without over-coating or wet slurry buildup.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 p-1 rounded-full bg-amber-400/20 text-amber-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-slate-950 font-semibold text-sm">
                        Aerosol Containment & Zero-Fume Hood
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        Engineered sealed end-hoods with internal demister baffles contain oil aerosol
                        mist inside the rotating drum envelope, protecting plant operators and eliminating
                        oil loss into exhaust ductwork.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic Feature Box */}
              <div className="lg:col-span-6">
                <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-bold">
                      <Droplets className="w-5 h-5" />
                      <span>COATING CHEMICAL COMPATIBILITY MATRIX</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-mono font-semibold">
                      PLC Automated
                    </span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950 flex justify-between">
                        <span>Refined Neem Oil (Azadirachtin Inoculation)</span>
                        <span className="text-teal-400 font-mono">0.15% - 0.25% wt</span>
                      </div>
                      <p className="text-slate-600 mt-1">
                        Mandatory for neem-coated urea and bio-fertilizer branding. Provides natural
                        nitrification inhibition and insect-repellent surface finish.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950 flex justify-between">
                        <span>Paraffin Wax & Microcrystalline Blends</span>
                        <span className="text-amber-400 font-mono">0.10% - 0.20% wt</span>
                      </div>
                      <p className="text-slate-600 mt-1">
                        Molten hydrocarbon barrier sealing micropores against high relative humidity
                        (&gt;75% RH) during maritime shipping and monsoon storage.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950 flex justify-between">
                        <span>Fatty Alkyl Amines & Surfactant Formulations</span>
                        <span className="text-yellow-400 font-mono">0.05% - 0.15% wt</span>
                      </div>
                      <p className="text-slate-600 mt-1">
                        Positively charged surfactant molecules that electrostatically neutralize
                        nitrate and potassium surface ions, halting crystal-lattice cross-linking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: Powder Dosing Augers for Talc & Inert Parting Powders */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-teal-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Parting Agent Dispersion Technology
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Powder Dosing Augers for Talc &amp; Inert Parting Powders
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Liquid oil provides moisture repellence, but liquid-only coatings can leave granules tacky.
                Our dual-action conditioning drum incorporates an automated powder dusting zone immediately
                following the liquid spray, creating a dry, silk-smooth exterior that flows effortlessly
                through high-speed automatic bag-filling scales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-teal-400 font-mono font-bold text-lg">01 / Dosing Hopper</div>
                <h4 className="text-slate-950 font-bold text-base">Vibratory Fluidized Bin</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Integrated 150-liter SS304 surge hopper equipped with pneumatic vibrators and fluidizing
                  pads prevents bridging of cohesive talc, diatomite, or clay powders.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-teal-400 font-mono font-bold text-lg">02 / Screw Feeder</div>
                <h4 className="text-slate-950 font-bold text-base">Twin Volumetric Augers</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Precision inverter-driven metering screw delivers steady powder rates from 5 to 50
                  kg/hr with ±1.5% accuracy, ensuring consistent parting layer thickness.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-teal-400 font-mono font-bold text-lg">03 / Drum Zone 2</div>
                <h4 className="text-slate-950 font-bold text-base">Polishing Tumble Action</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  The drum’s downstream flighting gently rolls powder particles across the tacky oil
                  membrane, embedding the talc into a durable, non-dusting exterior shell.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-teal-400 font-mono font-bold text-lg">04 / Bagging Ready</div>
                <h4 className="text-slate-950 font-bold text-base">Zero Scale Buildup</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Fully conditioned granules discharge completely dry to the touch, preventing fouling of
                  bagging hoppers, weigh buckets, and heat-sealing jaws.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 4: Anti-Caking Mechanism Walkthrough */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="text-teal-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Continuous Finishing Line Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                4-Stage Granule Conditioning &amp; Passivation Process
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                How Minerals Solutions MS-CCD drums transform brittle, hot, hygroscopic granules into
                free-flowing commercial fertilizer products ready for long-haul transport.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-mono font-extrabold text-base">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-950">Counter-Current Thermal Cooling</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Hot granules at 75°C–85°C enter through the feed trunnion. Ambient air pulled by an
                  induced draft fan sweeps across the cascading granule curtain, rapidly lowering bulk
                  temperature below 40°C.
                </p>
                <div className="pt-2 text-xs font-mono text-teal-400">Exit Temp: &lt;40°C</div>
              </div>

              {/* Step 2 */}
              <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-extrabold text-base">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-950">Micro-Atomized Liquid Coating</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Thermally stabilized granules pass under pneumatic heated spray nozzles. Metered neem oil
                  or paraffin wax is atomized into a 25-micron aerosol, wrapping each pellet in a hydrophobic
                  lipid film.
                </p>
                <div className="pt-2 text-xs font-mono text-amber-400">Dosage: 0.1% - 0.3% wt</div>
              </div>

              {/* Step 3 */}
              <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-extrabold text-base">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-950">Dry Parting Powder Dusting</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  A high-accuracy metering screw injects micronized talcum, silica, or diatomite dust directly
                  into the tumbling bed. The powder electrostatically adheres to the oily film, locking the
                  protective barrier.
                </p>
                <div className="pt-2 text-xs font-mono text-yellow-400">Coverage: 0.2% - 0.5% wt</div>
              </div>

              {/* Step 4 */}
              <div className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-extrabold text-base">
                  04
                </div>
                <h3 className="text-lg font-bold text-slate-950">Spiral Baffle Polishing &amp; Discharge</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  The final polishing flight zone gently tumbles pellets against one another to buff out
                  microscopic imperfections and discharge free-flowing granules directly to the packaging
                  elevator or bagging bin.
                </p>
                <div className="pt-2 text-xs font-mono text-emerald-400">Granule Roundness: &gt;90%</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 5: Technical Specifications & Sizing Matrix */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-teal-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Engineering Sizing &amp; Parameters
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Technical Specifications &amp; Sizing Matrix (MS-CCD Series)
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Fabricated to heavy-duty industrial standards at our Zak GIDC, Dahegam facility.
                All models feature machined riding tyres, forged alloy support rollers, precision gear drives,
                and optional SS304 stainless steel internals for high-corrosion chemical formulations.
              </p>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-100 text-slate-800 font-mono text-xs uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-4 px-4 font-bold text-slate-950">Model</th>
                    <th className="py-4 px-4 font-bold text-teal-400">Capacity (TPH)</th>
                    <th className="py-4 px-4">Drum Dimensions (Dia &times; L)</th>
                    <th className="py-4 px-4">Drive Power</th>
                    <th className="py-4 px-4">Cooling Airflow</th>
                    <th className="py-4 px-4">Coating Nozzles</th>
                    <th className="py-4 px-4">Shell Thickness</th>
                    <th className="py-4 px-4">Total Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono">
                  {ccdSpecs.map((spec, idx) => (
                    <tr
                      key={spec.model}
                      className={
                        idx % 2 === 0
                          ? 'bg-white hover:bg-slate-50 transition-colors'
                          : 'bg-slate-50/60 hover:bg-slate-100/70 transition-colors'
                      }
                    >
                      <td className="py-4 px-4 font-bold text-slate-950">{spec.model}</td>
                      <td className="py-4 px-4 font-bold text-teal-400">{spec.capacity}</td>
                      <td className="py-4 px-4">
                        {spec.diameter} &times; {spec.length}
                      </td>
                      <td className="py-4 px-4">{spec.motorPower}</td>
                      <td className="py-4 px-4">{spec.coolingAirflow}</td>
                      <td className="py-4 px-4 text-amber-300">{spec.nozzleZones}</td>
                      <td className="py-4 px-4">{spec.shellThickness}</td>
                      <td className="py-4 px-4 text-slate-600">{spec.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-mono">
              <div>* Custom drum lengths, variable speed VFD drives, and SS316 food-grade contact metallurgy available on request.</div>
              <div className="text-teal-400">Certified IS 2062 Grade B Steel Shell Fabrication</div>
            </div>
          </Container>
        </section>

        {/* Section 6: Warehouse Shelf-Life Demonstration (Untreated vs Coated) */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-teal-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Storage Stability Comparison
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Preventing Moisture Reabsorption &amp; Bag Caking in Warehouse Storage
              </h2>
              <p className="text-slate-700 text-base mt-4 leading-relaxed">
                Chemical fertilizers containing ammonium nitrate, urea, or potassium chloride are
                inherently hygroscopic. In humid monsoon climates (relative humidity &gt;75%), untreated
                granules absorb water vapor and cake into hard blocks. The MS-CCD coating drum creates an
                impermeable hydrophobic barrier that keeps fertilizer free-flowing for over a year.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Failure State Card */}
              <div className="p-8 rounded-2xl bg-rose-950/20 border border-rose-800/40 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-rose-100 text-rose-700">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">Untreated / Uncooled Fertilizer</h3>
                    <div className="text-xs text-rose-400 font-mono font-semibold">
                      Direct Bagged at 75°C without Coating
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>
                      <strong>Internal Bag Condensation:</strong> Temperature drop inside closed 50kg
                      sacks causes moisture to condense on poly-liners within 48 hours.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>
                      <strong>Crystalline Bridge Formation:</strong> Dissolved salts at pellet contact
                      points recrystallize under warehouse stack pressure into rock-hard aggregates.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>
                      <strong>Granule Crushing &amp; Dust:</strong> Brittle, hot pellets fracture under
                      conveying stresses, resulting in up to 8% fines at the farmer end.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>
                      <strong>Commercial Returns &amp; Disputes:</strong> Dealers and farmers reject
                      hardened bags, leading to severe warranty and logistics penalties.
                    </span>
                  </li>
                </ul>

                <div className="p-3.5 rounded-lg bg-rose-900/30 border border-rose-800/50 text-xs font-mono text-rose-300">
                  CRITICAL DEFECT: Bag hardening begins within 14 to 30 days of warehouse stacking.
                </div>
              </div>

              {/* Success State Card */}
              <div className="p-8 rounded-2xl bg-teal-950/20 border border-teal-800/40 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-100 text-teal-800">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">MS-CCD Conditioned Fertilizer</h3>
                    <div className="text-xs text-teal-400 font-mono font-semibold">
                      Cooled to &lt;40°C + Atomized Neem Oil &amp; Talc
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Zero Bag Condensation:</strong> Stabilized pellets enter packaging at ambient
                      equilibrium temperature, eliminating internal vapor condensation entirely.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Hydrophobic Moisture Shield:</strong> 25-micron lipid coating passivates salt
                      crystals, preventing moisture uptake even in 85% relative humidity environments.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Silky Flowability:</strong> Micronized talc dusting eliminates tackiness,
                      allowing granules to pour cleanly through automatic farm spreader machines.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>12+ Months Stack Life:</strong> 20-bag high warehouse pallet stacks remain
                      completely free-flowing throughout seasonal multi-month storage.
                    </span>
                  </li>
                </ul>

                <div className="p-3.5 rounded-lg bg-teal-900/30 border border-teal-800/50 text-xs font-mono text-teal-300">
                  RESULT: 100% free-flowing commercial grade fertilizer with zero bag rejections.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 7: Workshop Quality Control & Manufacturing Proof */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-teal-700 font-mono text-xs uppercase tracking-wider font-semibold">
                  Precision Workshop Fabrication
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                  Dynamic Balancing &amp; Heavy Mechanical Engineering
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  Every Minerals Solutions cooling and coating drum is fabricated under strict quality
                  protocols at our 10, Shyam Estate, Zak GIDC, Dahegam manufacturing facility. From
                  ultrasonic weld testing to CNC-machined riding rings, our drums are engineered for 24/7
                  continuous plant operation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-teal-700 font-bold text-sm">42CrMo Forged Tyres</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Solid forged alloy steel riding rings machined to tight concentric tolerances
                      prevent radial wobble and ensure smooth, vibration-free rotation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-teal-700 font-bold text-sm">Plummer Block Rollers</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Heavy cast steel trunnion rollers mounted on spherical roller bearings with grease
                      lubrication and bronze thrust collars to absorb longitudinal thrust loads.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-teal-700 font-bold text-sm">Machined Girth Drive</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Cast steel ring gear paired with hardened alloy pinion, driven by a heavy helical
                      gearbox and variable frequency motor for infinite speed regulation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-teal-700 font-bold text-sm">Flush Internal Welds</div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Internal seam welds are ground perfectly flush before flight installation to prevent
                      granule snagging, stagnation, or sticky paste buildup inside the drum.
                    </p>
                  </div>
                </div>
              </div>

              {/* Workshop Images Gallery */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/images/products/rotary-dryers/continuous-type-rotary-dryer-lg.webp"
                    alt="Heavy industrial rotary drum cylinder undergoing precision tyre machining and balancing at Minerals Solutions Zak GIDC Dahegam workshop" width={800} height={600}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-mono text-slate-200">
                    Workshop Bay: Continuous Rotary Drum Machining &amp; Alignment
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <Image
                      src="/images/products/fertilizer-pellet/fertilizer-granulation-plant-primary-lg.webp"
                      alt="Turnkey fertilizer granulation and finishing plant assembly line including cooling and coating units" width={800} height={600}
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 text-[11px] font-mono text-slate-200">
                      Turnkey Line Assembly
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <Image
                      src="/images/products/rotary-dryers/roto-louvre-dryer-lg.webp"
                      alt="Rotary drum internal air manifold and flighting inspection at Zak GIDC" width={800} height={600}
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 text-[11px] font-mono text-slate-200">
                      Internal Flighting Quality
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
                      Upstream pan agglomeration unit producing uniform spherical fertilizer pellets.
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
                      Continuous drum granulator producing high-tonnage compound NPK and DAP fertilizer.
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
                  href="/products/industrial-conveyors-spares/belt-conveyors/"
                  className="relative block aspect-[16/10] w-full bg-slate-900 overflow-hidden"
                  aria-label="View Industrial Belt Conveyor Systems specifications"
                >
                  <Image
                    src="/images/products/conveyor-systems/conveyor-belt-system-truss-md.webp"
                    alt="Troughed Belt Conveyor System"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#DA020D] transition-colors leading-snug">
                      <Link href="/products/industrial-conveyors-spares/belt-conveyors/" className="hover:underline">
                        Industrial Belt Conveyor Systems
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                      Downstream troughed belt conveyor transporting conditioned pellets to automatic bagger lines.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/products/industrial-conveyors-spares/belt-conveyors/"
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

        {/* Section 9: Engineering Sizing & RFQ Form */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-950 border border-teal-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-6 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-semibold">
                  <span>CUSTOM SIZING &amp; ENGINEERING LAYOUT</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Request a Dedicated Fertilizer Cooling &amp; Coating Drum Sizing Proposal
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Specify your target hourly capacity (TPH), inlet pellet temperature, granulator type,
                  and desired coating agent (neem oil, wax, talcum powder). Our engineering team in Zak
                  GIDC, Dahegam will calculate thermal air volume, drum length, and provide a GA drawing
                  within 24 hours.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <Button
                    href="/request-quote/?product=fertilizer-cooling-coating-drum"
                    variant="primary"
                    size="lg"
                    icon={<FileText className="w-5 h-5" />}
                  >
                    Get Sizing Proposal &amp; Price Quote
                  </Button>
                  <Button
                    href="tel:+919227004455"
                    variant="outline"
                    size="lg"
                    external
                    icon={<Phone className="w-5 h-5 text-teal-400" />}
                  >
                    Direct Technical Call: +91 92270 04455
                  </Button>
                </div>

                <div className="pt-6 border-t border-slate-200/80 text-xs text-slate-400 font-mono flex flex-wrap justify-center gap-6">
                  <span>GSTIN: 24AUSPP9555F1ZZ</span>
                  <span>•</span>
                  <span>Factory: Zak GIDC, Dahegam, Gandhinagar</span>
                  <span>•</span>
                  <span>Turnkey Commissioning Across India</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 10: Frequently Asked Questions */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="text-teal-700 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                Knowledge Base &amp; Specifications
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight font-display">
                Frequently Asked Questions on Fertilizer Conditioning Drums
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Expert technical answers on thermal cooling limits, neem oil dosing rates, dust collection,
                and retrofit installation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 flex items-start gap-3">
                    <span className="text-teal-400 font-mono text-sm mt-0.5">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

