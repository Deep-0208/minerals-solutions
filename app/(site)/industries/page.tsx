import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Factory,
  Flame,
  Sprout,
  Waves,
  Boxes,
  ArrowRight,
  Phone,
  CheckCircle2,
  Layers,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Industries Served | Mineral Processing, Fertilizer, Sand Washing & Chemicals',
  description:
    'Discover industrial equipment applications by Minerals Solutions: rotary dryers, fertilizer granulators, sand washers, and conveyor systems across 8 core heavy industry sectors.',
  alternates: {
    canonical: '/industries/',
  },
};

export default function IndustriesPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const sectors = [
    {
      title: 'Silica Sand & Foundry Sand Processing',
      icon: Flame,
      challenge: 'High initial moisture in washed silica sand causing sand bonding failure in foundries and glass furnaces.',
      solution: 'Single & double pass rotary sand dryers with high-efficiency cyclones reducing moisture from 15% to below 0.5%.',
      machinery: ['Double Pass Rotary Dryer', 'Fluidized Bed Cooler', 'Vibrating Sizing Screen'],
    },
    {
      title: 'NPK & Organic Bio-Fertilizer Plants',
      icon: Sprout,
      challenge: 'Uneven granule sizes, poor spherical strength, and high recycle rates during compost agglomeration.',
      solution: 'Pan/disc granulators with stepless 35°-55° tilt adjustment paired with rotary coolers and anti-caking coating drums.',
      machinery: ['Disc Granulator MS-PG-2200', 'Rotary Fertilizer Dryer', 'Cooling & Coating Drum'],
    },
    {
      title: 'River Sand & Aggregate Washing',
      icon: Waves,
      challenge: 'Excessive loss of marketable fine sand (down to 75 microns) into quarry slimes and high residual water content.',
      solution: 'Integrated bucket wheel washers with polyurethane hydrocyclones and linear dewatering screens.',
      machinery: ['Bucket Wheel Sand Washer', 'Hydrocyclone Separator', 'High-Frequency Dewatering Screen'],
    },
    {
      title: 'Chemical Salts & Inorganic Crystals',
      icon: Factory,
      challenge: 'Thermal degradation of heat-sensitive chemical crystals and corrosive vapor damage to dryer drum shells.',
      solution: 'Stainless steel contact parts (SS304/SS316), indirect hot air heating, and pulse-jet baghouse dust collection.',
      machinery: ['Indirect Rotary Calciner', 'Stainless Steel Rotary Dryer', 'Bag Filter Exhaust'],
    },
    {
      title: 'Biomass & Sawdust Pelletizing',
      icon: Layers,
      challenge: 'High moisture variability in raw agro-waste and saw dust causing pellet mill die plugging and low calorific value.',
      solution: 'Triple pass rotary drum dryers with spark arrestors and uniform hot air draft for safe, continuous drying.',
      machinery: ['Triple Pass Biomass Dryer', 'Biomass Hammer Mill', 'Heavy Pellet Mill'],
    },
    {
      title: 'Fly Ash, Slag & Gypsum Processing',
      icon: Boxes,
      challenge: 'Extremely abrasive sticky slurry and high cake moisture from flue-gas desulfurization (FGD) systems.',
      solution: 'Heavy-duty rotary kilns and dryers with specialized flight lifters and abrasion-resistant steel plate shells.',
      machinery: ['Heavy Slag Dryer', 'Troughed Belt Conveyor', 'Support Trunnion Running Gear'],
    },
    {
      title: 'Quartz Stone & Mineral Beneficiation',
      icon: Waves,
      challenge: 'Tenacious plastic clay coatings adhering to quartz lumps and gravel preventing pure optical separation.',
      solution: 'Twin-shaft paddle log washers applying high-intensity mechanical scouring to release adhering clays.',
      machinery: ['Quartz Stone Log Washer', 'Rotary Trommel Screen', 'Slurry Slime Sump'],
    },
    {
      title: 'Bulk Material Handling & Quarry Logistics',
      icon: Boxes,
      challenge: 'Material rollback, belt slippage, and high idler failure rates under severe outdoor quarry dust loads.',
      solution: 'IS 11592 compliant troughed belt conveyors with hot vulcanized diamond rubber lagged drive pulleys.',
      machinery: ['Heavy Troughed Belt Conveyor', 'Diamond Lagged Head Pulley', 'Labyrinth Sealed Idlers'],
    },
  ];

  return (
    <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E10613]">Home</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">Industries Served</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
            <Factory className="w-3.5 h-3.5" />
            <span>Industrial Sector Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
            Heavy Process Solutions for Core Industries
          </h1>
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
            Minerals Solutions delivers purpose-engineered equipment built to address the specific challenges
            of mineral extraction, chemical drying, fertilizer pelletizing, and bulk material logistics.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sectors.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.title}
                className="bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-8 shadow-[0_4px_24px_rgba(17,17,17,0.04)] hover:shadow-[0_12px_32px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E10613] flex items-center justify-center border border-red-100">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#E10613] transition-colors">
                    {sec.title}
                  </h2>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-red-50/50 border border-red-100">
                      <strong className="text-[#BC0711] block mb-1">Process Challenge:</strong>
                      <span className="text-neutral-700 leading-relaxed">{sec.challenge}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#E7E7EB]">
                      <strong className="text-[#111111] block mb-1">Engineering Solution:</strong>
                      <span className="text-neutral-700 leading-relaxed">{sec.solution}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                    Recommended Equipment:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sec.machinery.map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 rounded-md bg-[#F5F5F7] text-[#111111] text-xs font-medium border border-neutral-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <Button href="/request-quote/" variant="outline" size="sm" className="w-full">
                    Discuss Sector Requirements
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
              Material Feasibility Testing
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Unsure Which Machine Fits Your Material?
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Send us a sample or process analysis of your feed. Our engineering team will assess
              bulk density, moisture profile, and thermal behavior to recommend the right machinery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button href="/request-quote/" variant="primary" size="lg">
              Request Technical Consultation
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
  );
}

