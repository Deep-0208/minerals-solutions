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
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TechnicalSpecTable } from '@/components/ui/TechnicalSpecTable';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Fertilizer Granulation & Pellet Plants Manufacturer | NPK & Bio-Organic',
  description:
    'Turnkey organic bio-fertilizer and NPK chemical granulation plants (1 to 20 TPH). Pan granulators, drum granulators, rotary coolers, and coating drums from Gujarat.',
  alternates: {
    canonical: '/products/fertilizer-granulation-plants/',
  },
};

export default function FertilizerPlantsPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const equipmentList = [
    {
      name: 'Pan / Disc Fertilizer Granulator',
      badge: '35° - 55° Stepless Tilt',
      desc: 'Heavy circular disc featuring worm-gear stepless angle adjustment, automatic tungsten carbide scrapers, and liquid binder spray nozzles for dense, spherical granules.',
      capacity: '100 kg/hr - 5 TPH per pan',
    },
    {
      name: 'Rotary Drum Granulator',
      badge: 'Continuous High Volume',
      desc: 'Heavy rotating cylinder with special UHMW-PE or rubber internal lining to prevent material sticking during continuous large-scale chemical NPK or bio-fertilizer agglomeration.',
      capacity: '3 - 20 TPH continuous',
    },
    {
      name: 'Rotary Fertilizer Dryer & Cooler',
      badge: 'Moisture & Hardening Control',
      desc: 'Sequential thermal drum drying followed by counter-current ambient air rotary cooling to ensure granules achieve proper hardness before bagging without caking.',
      capacity: 'Matched to plant capacity',
    },
    {
      name: 'Rotary Coating & Polishing Drum',
      badge: 'Anti-Caking Finish',
      desc: 'Rotary drum unit applying liquid coating oils and powder talc or conditioners to ensure granules remain free-flowing during long-term storage and bag stacking.',
      capacity: '1 - 20 TPH',
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

  return (
    <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E10613]">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#E10613]">Products</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">Fertilizer Granulation Plants</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#E10613] text-xs font-bold uppercase tracking-wider">
              <Sprout className="w-3.5 h-3.5" />
              <span>Granulation &amp; Pellet Machinery</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
              Fertilizer Granulation &amp; Bio-Pellet Plants
            </h1>
            <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
              Minerals Solutions manufactures turnkey organic bio-fertilizer and chemical NPK granulation lines
              from 1 TPH to 20 TPH. From heavy disc granulators with stepless tilt control to complete drying,
              cooling, screening, and anti-caking coating installations.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button href="/request-quote" variant="primary" size="md">
                Request Granulator Quote
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
                <span className="text-neutral-500">Plant Capacities</span>
              </div>
              <div>
                <span className="font-mono font-bold text-[#111111] block">35° - 55° Tilt</span>
                <span className="text-neutral-500">Stepless Adjustment</span>
              </div>
              <div>
                <span className="font-mono font-bold text-[#111111] block">NPK &amp; Organic</span>
                <span className="text-neutral-500">Dual Process Scope</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E7E7EB] bg-neutral-900 shadow-xl">
              <Image
                src="/images/products/fertilizer-pellet/fertilizer-granulation-plant-primary-lg.webp"
                alt="Minerals Solutions complete fertilizer granulation plant installation showing granulator pan and conveyor feed"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm p-3 rounded-xl text-white text-xs">
                <span className="font-bold block">Turnkey Granulation Plant Installation</span>
                <span className="text-neutral-400 text-[11px]">Manufactured at Zak GIDC Works, Dahegam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow Timeline */}
        <div className="bg-white rounded-3xl border border-[#E7E7EB] p-8 sm:p-10 mb-16 shadow-[0_4px_24px_rgba(17,17,17,0.04)] space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-[#111111] tracking-tight">
              Turnkey Process Flow: From Raw Manure to Bagged Granules
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              We engineer complete integrated production lines ensuring optimal pellet roundness, minimal
              recycle fraction, and high mechanical crush strength.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {processStages.map((stg) => (
              <div key={stg.stage} className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] space-y-1">
                <span className="text-xs font-bold text-[#E10613] block">{stg.stage}</span>
                <p className="text-xs text-neutral-600 leading-relaxed">{stg.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Note on Granulation Yields:</strong> Actual granule sphericity and yield percentages depend
              on raw material fineness, binder characteristics, and moisture balancing. Equipment is fine-tuned
              during trial commissioning.
            </span>
          </div>
        </div>

        {/* Machinery Breakdown Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-6">
            Core Equipment Units in Granulation Lines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipmentList.map((eq) => (
              <div
                key={eq.name}
                className="bg-white rounded-2xl border border-[#E7E7EB] p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#E10613] uppercase tracking-wider">
                      {eq.badge}
                    </span>
                    <Sprout className="w-4 h-4 text-neutral-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111]">
                    {eq.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                    {eq.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-100 text-xs text-neutral-600 font-mono">
                  <strong>Standard Rating:</strong> {eq.capacity}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="mb-16">
          <TechnicalSpecTable
            title="Pan / Disc Fertilizer Granulator Specifications"
            subtitle="Standard engineering parameters for MS-series adjustable disc granulators."
            modelCode="MS-PG-2200"
            specs={panGranulatorSpecs}
            caption="Units can be supplied individually or integrated as part of a complete turnkey line with batching bins, rotary dryer, rotary cooler, bucket elevators, and bagging machines."
          />
        </div>

        {/* Call to Action */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
              Plant Engineering Inquiry
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Planning a Bio-Compost or NPK Granulation Unit?
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Share your available raw materials and hourly pellet target. Our plant engineers will prepare
              a detailed flow diagram and equipment layout.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button href="/request-quote" variant="primary" size="lg">
              Request Plant Proposal
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

