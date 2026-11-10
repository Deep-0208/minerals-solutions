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
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TechnicalSpecTable } from '@/components/ui/TechnicalSpecTable';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Industrial Rotary Dryers Manufacturer | Single, Double & Triple Pass Dryers',
  description:
    'Custom-engineered industrial rotary drum dryers (500 kg/hr to 50 TPH) for silica sand, sawdust, minerals, and chemicals. Fabricated at Zak GIDC, Gujarat.',
  alternates: {
    canonical: '/products/industrial-rotary-dryers/',
  },
};

export default function RotaryDryersPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const dryerTypes = [
    {
      name: 'Double Pass Concentric Rotary Dryer',
      badge: 'Up to 40% Smaller Footprint',
      desc: 'Features two nested concentric cylinders where wet feed travels through the inner cylinder and returns via the annular outer jacket, capturing heat from both surfaces.',
      applications: 'Silica sand, foundry sands, organic fertilizer granules, and mineral aggregates.',
    },
    {
      name: 'Single Pass Industrial Rotary Dryer',
      badge: 'High Throughput Heavy Duty',
      desc: 'Robust cylindrical drum inclined at 3-5 degrees, equipped with internal flight curtains that cascade material through co-current or counter-current hot air draft.',
      applications: 'River sand, limestone, crushed slag, bauxite, and coarse mineral ores.',
    },
    {
      name: 'Triple Pass Drum Dryer',
      badge: 'Optimal Thermal Efficiency',
      desc: 'Three concentric passes designed for low-density or heat-sensitive materials requiring extended residence time without requiring excessive factory bay length.',
      applications: 'Biomass sawdust, wood chips, agro-waste, and light chemical powders.',
    },
    {
      name: 'Rotary Calciners & Dehydrators',
      badge: 'High Temperature Treatment',
      desc: 'Refractory-lined or indirect-heated rotating kilns operating up to 800°C for chemical transformation, crystal water dehydration, and mineral calcining.',
      applications: 'Boric acid crystals, chemical salts, bentonite, and catalyst beads.',
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

  return (
    <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E10613]">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#E10613]">Products</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">Industrial Rotary Dryers</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#E10613] text-xs font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              <span>Thermal Drying Systems</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
              Industrial Rotary Drum Dryers &amp; Thermal Systems
            </h1>
            <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
              Minerals Solutions engineers single-pass, double-pass concentric, and triple-pass rotary dryers
              with capacities from 500 kg/hr up to 50 TPH. Custom-designed for reliable moisture reduction
              in silica sand, minerals, sawdust, gypsum, and chemicals.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button href="/request-quote" variant="primary" size="md">
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
                fill
                priority
                className="object-cover"
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
              a stream of hot gases. Final equipment sizing depends on key variables:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] space-y-1">
              <span className="text-xs font-bold text-[#111111] block">1. Feed &amp; Target Moisture</span>
              <p className="text-xs text-neutral-600">Initial moisture percentage vs required discharge dryness (e.g. 18% down to &lt; 0.5%).</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] space-y-1">
              <span className="text-xs font-bold text-[#111111] block">2. Bulk Density &amp; Particle Size</span>
              <p className="text-xs text-neutral-600">Material density, stickiness, angle of repose, and risk of airborne fine entrainment.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] space-y-1">
              <span className="text-xs font-bold text-[#111111] block">3. Available Fuel Source</span>
              <p className="text-xs text-neutral-600">Solid fuel (coal/briquette), natural gas, or oil determine combustion chamber sizing.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] space-y-1">
              <span className="text-xs font-bold text-[#111111] block">4. Footprint Constraints</span>
              <p className="text-xs text-neutral-600">Double pass concentric shells provide space savings where factory bay length is limited.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Technical Note:</strong> Thermal efficiency and moisture reduction figures depend on operating
              conditions, ambient air temperature, and material feed consistency. Our team evaluates raw material
              samples before validating guaranteed performance curves.
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
                className="bg-white rounded-2xl border border-[#E7E7EB] p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#E10613] uppercase tracking-wider">
                      {type.badge}
                    </span>
                    <Flame className="w-4 h-4 text-neutral-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111]">
                    {type.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                    {type.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-100 text-xs text-neutral-600">
                  <strong>Typical Materials:</strong> {type.applications}
                </div>
              </div>
            ))}
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

        {/* Inquiry Call to Action */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
              Custom Engineering Quote
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Discuss Your Material Drying Requirements
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Provide your input moisture, required output moisture, and hourly capacity. Our chief thermal
              engineers will calculate heat balance and recommend the ideal drum configuration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button href="/request-quote" variant="primary" size="lg">
              Request Dryer Quote
            </Button>
            <a
              href={`tel:${cleanPhone}`}
              className="px-6 py-3.5 rounded-full border border-neutral-700 hover:border-white text-xs font-bold text-white transition-colors"
            >
              Call Works: {primaryPhone}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

