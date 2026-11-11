import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Industrial Rotary Dryers & Plants | Minerals Solutions',
  },
  description:
    'Gujarat manufacturer of high-efficiency industrial rotary dryers, sand washing plants, fertilizer granulators, and heavy conveyor systems at Zak GIDC, Dahegam.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Industrial Rotary Dryers & Plants | Minerals Solutions',
    description:
      'Engineered heavy machinery: rotary drum dryers, bucket wheel sand washers, fertilizer granulators, and bulk material handling conveyors from Zak GIDC, Gujarat.',
    url: 'https://mineralssolution.in/',
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minerals Solutions | Industrial Rotary Dryers & Plants Gujarat',
    description:
      'Direct manufacturer of rotary drum dryers, sand washing plants, and fertilizer granulators in Gujarat.',
    images: [defaultTwitterImage],
  },
};
import {
  Flame,
  Sprout,
  Waves,
  Boxes,
  ArrowRight,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Award,
  ExternalLink,
  ChevronRight,
  Settings2,
  Cpu,
  Layers,
  Wrench,
  Gauge,
  Factory,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { company } from '@/data/company';

export default function HomePage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const secondaryPhone = company.telephones[1] || '+91 91061 63058';

  // 4 Core Machinery Divisions
  const divisions = [
    {
      id: 'rotary-dryers',
      title: 'Industrial Rotary Dryers & Thermal Systems',
      description:
        'Single-pass, double-pass concentric drum, and triple-pass dryers engineered for silica sand, minerals, sawdust, and chemicals with custom hot air furnaces.',
      capacity: '500 kg/hr - 50 TPH',
      image: '/images/products/rotary-dryers/double-pass-rotary-dryer-primary-md.webp',
      alt: 'Minerals Solutions double pass concentric rotary dryer showing outer shell and blue drive frame at Dahegam workshop',
      href: '/products/industrial-rotary-dryers/',
      features: ['Concentric Nested Shells', '300°C Inlet Draft', 'IS 2062 Carbon Steel'],
      icon: Flame,
    },
    {
      id: 'fertilizer-plants',
      title: 'Fertilizer Granulation & Pellet Plants',
      description:
        'Turnkey organic compost and chemical NPK fertilizer pelletizing systems featuring heavy pan granulators with 35°-55° stepless angle adjustment.',
      capacity: '1 - 20 TPH',
      image: '/images/products/fertilizer-pellet/fertilizer-granulation-plant-primary-md.webp',
      alt: 'Minerals Solutions complete fertilizer granulation plant installation showing granulator pan and conveyor feed',
      href: '/products/fertilizer-granulation-plants/',
      features: ['Stepless Angle Tilt', '≥92% Sphericity', 'Tungsten Carbide Scrapers'],
      icon: Sprout,
    },
    {
      id: 'sand-washing',
      title: 'Sand Washing & Mineral Recovery Plants',
      description:
        'Bucket wheel sand washing units, hydrocyclone deslimers, and spiral screw classifiers recovering fines down to 75 microns (200 mesh) with low moisture discharge.',
      capacity: '30 - 200 TPH',
      image: '/images/products/mineral-processing/river-sand-washing-plant-md.webp',
      alt: 'Minerals Solutions heavy bucket wheel sand washing plant at aggregate processing site',
      href: '/products/sand-washing-plants/',
      features: ['75 Micron Recovery', 'Hydrocyclone Desliming', 'Low Water Footprint'],
      icon: Waves,
    },
    {
      id: 'conveyors-spares',
      title: 'Industrial Conveyors & Heavy Mechanical Spares',
      description:
        'Heavy-duty trough belt conveyor assemblies (400 mm to 1600 mm width), motorized pulleys with vulcanized diamond lagging, forged trunnions, and girth gears.',
      capacity: '400 - 1600 mm Width',
      image: '/images/products/conveyor-systems/conveyor-belt-system-truss-md.webp',
      alt: 'Heavy industrial conveyor belt system lattice truss structure fabricated at Minerals Solutions workshop',
      href: '/products/industrial-conveyors-spares/',
      features: ['Diamond Lagged Pulleys', 'EN-8/EN-9 Forged Trunnions', 'Machined Girth Gears'],
      icon: Boxes,
    },
  ];

  // 8 Engineering Capabilities
  const capabilities = [
    {
      title: 'Heavy Plate Rolling & Bending',
      desc: 'Precision 3-roll and 4-roll bending for steel plate shells up to 25 mm+ thickness with uniform roundness.',
      icon: Layers,
    },
    {
      title: 'Submerged Arc Structural Welding',
      desc: 'Automatic submerged arc longitudinal and circumferential welds for high pressure and thermal cycling.',
      icon: Flame,
    },
    {
      title: 'Rotating Drum Dynamic Balancing',
      desc: 'Electronic dynamic balance verification to eliminate operational vibration and preserve bearing longevity.',
      icon: Gauge,
    },
    {
      title: 'Heavy Lathe Shaft Machining',
      desc: 'Precision turning of trunnion roller shafts, head pulleys, and drive pinions within tight micrometer tolerances.',
      icon: Settings2,
    },
    {
      title: 'Refractory Lining & Thermal Insulation',
      desc: 'Engineered high-alumina brick and castable refractory lining for hot air furnaces and combustion chambers.',
      icon: ShieldCheck,
    },
    {
      title: 'Girth Gear & Trunnion Alignment',
      desc: 'Optical and laser alignment of forged riding tyres, support rollers, and cast iron drive girth gears.',
      icon: Wrench,
    },
    {
      title: 'Factory Pre-Assembly & Dry Testing',
      desc: 'Complete trial assembly and no-load drive spin testing in our Zak GIDC workshop prior to logistics dispatch.',
      icon: Factory,
    },
    {
      title: 'Turnkey Site Erection & Commissioning',
      desc: 'Mechanical positioning, drive anchoring, electrical integration, and initial material trial heating runs on-site.',
      icon: Cpu,
    },
  ];

  // 4 Core Value Pillars
  const valuePillars = [
    {
      title: 'Application-Specific Engineering',
      desc: 'Every machine is customized around your feed material moisture, bulk density, abrasive qualities, and site footprint constraints.',
    },
    {
      title: 'Direct Manufacturing Access',
      desc: 'Direct consultation with our chief fabrication engineers at Zak GIDC with zero middleman or trading house markups.',
    },
    {
      title: 'Turnkey Plant Execution',
      desc: 'Comprehensive execution covering plant layout design, equipment sizing, civil coordination, and hot commissioning.',
    },
    {
      title: 'In-Stock Replacement Spares',
      desc: 'Direct factory availability of replacement trunnion rollers, lagged pulleys, conveyor belting, and heat-resistant lifters.',
    },
  ];

  // 8 Industries Served
  const industries = [
    { name: 'Silica Sand & Foundry', desc: 'Drying and classification of high-purity glass and casting sands.' },
    { name: 'Fertilizer & Bio-Compost', desc: 'NPK compounding and organic manure pelletizing granulation.' },
    { name: 'Chemicals & Industrial Salts', desc: 'Continuous moisture removal for boric acid, soda ash, and salts.' },
    { name: 'Biomass & Wood Pelletizing', desc: 'Thermal drying of sawdust and agro-waste for biofuel production.' },
    { name: 'River Sand & Aggregate Washing', desc: 'Desliming and fine sand recovery for construction aggregate.' },
    { name: 'Fly Ash & Slag Processing', desc: 'Rotary drying and handling of thermal power and steel mill byproducts.' },
    { name: 'Mineral Beneficiation & Clays', desc: 'Calcining, drying, and washing of bentonite, quartz, and bauxite.' },
    { name: 'Bulk Material Handling', desc: 'Heavy overland conveyors and truck loading systems for mines and ports.' },
  ];

  // 8 Process Steps
  const processSteps = [
    { step: '01', title: 'Process Assessment', desc: 'Analysis of material feed moisture, target output, and capacity requirements.' },
    { step: '02', title: 'Thermal & Machine Sizing', desc: 'Thermodynamic heat balance, air velocity calculations, and drum dimensioning.' },
    { step: '03', title: 'CAD Engineering Layout', desc: 'General arrangement mechanical drawings and foundation load coordination.' },
    { step: '04', title: 'In-House Steel Fabrication', desc: 'Plate cutting, rolling, submerged arc welding, and lathe machining at Zak GIDC.' },
    { step: '05', title: 'Workshop Trial Assembly', desc: 'Pre-assembly, drive alignment, and dynamic balancing checks before dispatch.' },
    { step: '06', title: 'Logistics Coordination', desc: 'Heavy transport logistics handling oversized drum shells to customer sites.' },
    { step: '07', title: 'Site Erection & Rigging', desc: 'Mechanical placement on trunnions, drive motor coupling, and burner firing.' },
    { step: '08', title: 'Spares & Ongoing Support', desc: 'Continuous provision of wear parts, trunnions, and scheduled preventive maintenance.' },
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative bg-gradient-to-b from-neutral-50 via-white to-white border-b border-[#E7E7EB] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-24">
        {/* Subtle Background Glow & Radial Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-200/40 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-xs font-bold uppercase tracking-wider text-[#E10613] shadow-xs">
                <Flame className="w-3.5 h-3.5" />
                <span>Heavy Industrial Machinery &amp; Plant Engineering</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-[1.08] font-display">
                Industrial Rotary Dryers, Sand Washing &amp;{' '}
                <span className="text-[#E10613]">Fertilizer Granulation Plants</span>
              </h1>

              {/* Supporting Marketing Message */}
              <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#111111] mt-2">
                Engineered for Performance. <span className="text-[#E10613]">Built for Industry.</span>
              </p>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#737373] max-w-2xl leading-relaxed">
                Minerals Solutions designs and manufactures industrial drying systems, fertilizer
                granulation plants, sand washing equipment, and bulk material handling solutions tailored
                to your process requirements.
              </p>

              {/* Primary, Secondary, and Hotline Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button href="/products/" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore Our Machinery
                </Button>
                <Button href="/request-quote/" variant="outline" size="lg">
                  Request a Quote
                </Button>
              </div>

              {/* Direct Engineering Hotline Link */}
              <div className="pt-1 flex items-center gap-3 text-xs text-neutral-500">
                <span>Direct Engineering Desk:</span>
                <a
                  href={`tel:${cleanPhone}`}
                  className="font-mono font-bold text-[#111111] hover:text-[#E10613] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E10613]" />
                  <span>{primaryPhone}</span>
                </a>
              </div>

              {/* Trust Metric Strip */}
              <div className="pt-6 border-t border-[#E7E7EB] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <div className="font-mono font-bold text-lg text-[#111111]">500 kg - 50 TPH</div>
                  <div className="text-neutral-500 mt-0.5">Dryer Capacities</div>
                </div>
                <div>
                  <div className="font-mono font-bold text-lg text-[#111111]">Zak GIDC</div>
                  <div className="text-neutral-500 mt-0.5">Fabrication Works</div>
                </div>
                <div>
                  <div className="font-mono font-bold text-lg text-[#E10613]">4.8 / 5.0 ★</div>
                  <div className="text-neutral-500 mt-0.5">IndiaMART Rating</div>
                </div>
                <div>
                  <div className="font-mono font-bold text-lg text-[#111111]">UDYAM MSME</div>
                  <div className="text-neutral-500 mt-0.5">Registered Enterprise</div>
                </div>
              </div>
            </div>

            {/* Right Media Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#E7E7EB] bg-white shadow-[0_20px_48px_rgba(17,17,17,0.08)] group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/products/rotary-dryers/double-pass-rotary-dryer-primary-lg.webp"
                    alt="Minerals Solutions double pass concentric rotary dryer showing outer shell and heavy drive frame"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono font-semibold text-[#111111] border border-[#E7E7EB] shadow-xs">
                    Zak GIDC Fabrication Bay
                  </div>
                </div>

                <div className="p-5 bg-white border-t border-[#E7E7EB] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E10613] block">
                      Featured Industrial Equipment
                    </span>
                    <h3 className="text-sm font-bold text-[#111111] group-hover:text-[#E10613] transition-colors">
                      Double Pass Concentric Rotary Dryer
                    </h3>
                  </div>
                  <Link
                    href="/products/industrial-rotary-dryers/"
                    className="text-xs font-bold text-[#111111] hover:text-[#E10613] flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#E10613]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: PRODUCT CATEGORY NAVIGATION */}
      <section className="py-20 bg-[#F5F5F7]" id="products">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
                <Boxes className="w-3.5 h-3.5" />
                <span>Manufacturing Divisions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                Industrial Machinery Divisions
              </h2>
              <p className="mt-2 text-base text-[#737373] max-w-2xl">
                Explore our core machinery lines designed for thermal moisture elimination, continuous
                fertilizer granulation, mineral recovery, and heavy material transit.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button href="/products/" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                View Complete Catalog
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#E7E7EB] overflow-hidden shadow-[0_4px_24px_rgba(17,17,17,0.04)] hover:shadow-[0_12px_36px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all flex flex-col group"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-mono font-semibold">
                      {item.capacity}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E10613] flex items-center justify-center border border-red-100">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#E10613] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#737373] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-neutral-100 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {item.features.map((feat) => (
                          <span
                            key={feat}
                            className="px-2.5 py-0.5 rounded-md bg-[#F5F5F7] text-[#111111] text-xs font-medium border border-neutral-200"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <Link
                          href={item.href}
                          className="font-bold text-sm text-[#E10613] hover:underline inline-flex items-center gap-1"
                        >
                          <span>Explore Specifications</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Button href="/request-quote/" variant="ghost" size="sm">
                          Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 3: ENGINEERING CAPABILITIES */}
      <section className="py-20 bg-white" id="manufacturing">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
                <Wrench className="w-3.5 h-3.5" />
                <span>Zak GIDC Heavy Fabrication</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                In-House Manufacturing &amp; Fabrication Capabilities
              </h2>
              <p className="text-base text-[#737373] leading-relaxed">
                Operating from our manufacturing facility in Dahegam, Gandhinagar, Minerals Solutions
                maintains complete in-house control over heavy steel rolling, automatic submerged arc welding,
                rotary drum dynamic balancing, and trial mechanical assembly.
              </p>
              <div className="pt-2">
                <Button href="/manufacturing/" variant="primary" size="md">
                  Explore Manufacturing Tour
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E7E7EB] shadow-md">
                <Image
                  src="/images/facility/manufacturing-unit-lg.webp"
                  alt="Heavy fabrication workshop floor showing rotary drum rolling, turning lathes, and structural welding bays"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E7E7EB] shadow-md mt-6">
                <Image
                  src="/images/facility/working-team-md.webp"
                  alt="Mechanical fabrication and plant engineering working team at Minerals Solutions Dahegam facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="p-6 rounded-2xl border border-[#E7E7EB] bg-[#FAFAFA] hover:bg-white hover:border-[#E10613] hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-50 text-[#E10613] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#111111]">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 4: WHY MINERALS SOLUTIONS */}
      <section className="py-20 bg-[#111111] text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-[#E10613] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The Minerals Solutions Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Process Operators Choose MS
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              We combine heavy manufacturing precision with process engineering to supply machines that
              reliably endure abrasive, continuous, high-temperature industrial duty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-[#1B1B1D] border border-neutral-800 hover:border-red-500/50 transition-all space-y-3"
              >
                <div className="text-xs font-mono font-bold text-[#E10613]">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5: INDUSTRIES SERVED */}
      <section className="py-20 bg-[#F5F5F7]" id="industries">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-2">
              <Factory className="w-3.5 h-3.5" />
              <span>Broad Industrial Applications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Industries Served Across India
            </h2>
            <p className="text-sm sm:text-base text-[#737373]">
              Supplying dedicated plant equipment engineered for diverse bulk mineral processing,
              agricultural fertilizer lines, and heavy material handling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="p-6 rounded-2xl bg-white border border-[#E7E7EB] hover:shadow-[0_12px_32px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all space-y-2 group"
              >
                <div className="w-2 h-2 rounded-full bg-[#E10613]" />
                <h3 className="text-base font-bold text-[#111111] group-hover:text-[#E10613] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/industries/" variant="outline" size="md">
              Learn More About Sector Applications
            </Button>
          </div>
        </Container>
      </section>

      {/* SECTION 6: PROCESS & PROJECT EXECUTION */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Turnkey Execution Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              From Raw Material Assessment to Commissioning
            </h2>
            <p className="text-sm sm:text-base text-[#737373]">
              Our systematic 8-stage engineering process ensures equipment is designed for your specific
              bulk density, moisture profile, and installation layout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl border border-[#E7E7EB] bg-[#FAFAFA] hover:bg-white hover:border-red-200 hover:shadow-md transition-all relative overflow-hidden space-y-2 group"
              >
                <span className="text-3xl font-black font-mono text-neutral-200 group-hover:text-red-100 transition-colors absolute top-4 right-4">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-[#111111] pt-2 group-hover:text-[#E10613] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 7: TRUST & CREDENTIALS BANNER */}
      <section className="py-16 bg-[#1B1B1D] text-white border-y border-neutral-800">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
                Commercial &amp; Compliance Transparency
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Verified Indian Manufacturing Enterprise
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Registered under the Ministry of Micro, Small and Medium Enterprises (UDYAM-GJ-09-0021428)
                with active GST compliance (24AUSPP9555F1ZZ) and verified 4.8/5.0 seller reputation on IndiaMART.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="https://www.indiamart.com/mineralssolutions-ahmedabad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-[#E10613] text-xs font-bold text-white transition-colors"
              >
                <span>Verify on IndiaMART</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E10613]" />
              </a>
              <Button href="/about/" variant="secondary-dark" size="md">
                About Our Leadership &amp; Works
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 8: FINAL HOMEPAGE CTA */}
      <section className="py-20 bg-gradient-to-b from-[#111111] to-[#1B1B1D] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-[#E10613] flex items-center justify-center mx-auto border border-red-500/30">
              <Flame className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Planning Your Next Industrial Project?
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl mx-auto">
              Share your material, capacity, and process requirements with our team. We'll help identify
              a suitable machinery or plant solution.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/request-quote/" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Request a Quote
              </Button>
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[52px] rounded-full border border-neutral-600 hover:border-white text-white font-semibold text-base transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E10613]" />
                <span>Call Our Team: {primaryPhone}</span>
              </a>
            </div>

            <p className="text-xs text-neutral-500 pt-2">
              Works Facility: Plot No. 10, Shed No. 3, Shyam Estate, Zak GIDC, Zak-Vahelal Road, Ta. Dahegam, Gandhinagar - 382330, Gujarat.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
