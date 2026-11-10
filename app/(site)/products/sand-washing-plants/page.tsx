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
  Droplets,
  Layers,
  Filter,
  Factory,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TechnicalSpecTable } from '@/components/ui/TechnicalSpecTable';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Sand Washing Plants & Hydrocyclone Dewatering Separators | 30 to 200 TPH',
  description:
    'Industrial bucket wheel sand washing plants, hydrocyclone deslimers, and spiral classifiers (30 to 200 TPH). Recovering fine sand down to 75 microns with low moisture discharge.',
  alternates: {
    canonical: '/products/sand-washing-plants/',
  },
};

export default function SandWashingPlantsPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const equipmentList = [
    {
      name: 'Bucket Wheel Sand Washing Machine',
      badge: 'High Recovery Silt Removal',
      desc: 'Slow-rotating wheel with perforated dewatering buckets scooping washed sand out of the settling pool, ensuring minimal fine loss and low maintenance power consumption.',
      capacity: '30 - 150 TPH',
    },
    {
      name: 'Hydrocyclone Desliming & Dewatering Unit',
      badge: 'Down to 75 Micron Recovery',
      desc: 'Polyurethane-lined hydrocyclone cluster driven by heavy slurry pump, capturing 0.075 mm fine sand from wash water and discharging onto high-frequency linear dewatering screen.',
      capacity: '50 - 200 TPH',
    },
    {
      name: 'Spiral Screw Sand Classifier',
      badge: 'Continuous Coarse & Fine Separation',
      desc: 'Continuous Archimedean screw flights with wear-resistant replaceable shoe liners that convey settled solids upward while overflow weir discharges suspended silts.',
      capacity: '20 - 100 TPH',
    },
    {
      name: 'Quartz Stone & Aggregate Log Washer',
      badge: 'Aggressive Clay Scrubbing',
      desc: 'Contra-rotating twin shafts with manganese steel paddle blades providing intense mechanical attrition to scour stubborn plastic clays and loam from gravel and quartz.',
      capacity: '30 - 120 TPH',
    },
  ];

  const sandWasherSpecs = [
    { label: 'Plant Classification', value: 'Integrated Bucket Wheel & Hydrocyclone Sand Washer', highlight: true },
    { label: 'Feed Processing Capacity', value: '30 TPH to 200 TPH bulk feed', highlight: true },
    { label: 'Fine Sand Cut-off Point', value: 'Recovers fine fraction down to 75 microns (200 mesh)', highlight: true },
    { label: 'Discharge Moisture Rating', value: '12% to 15% surface moisture ready for immediate stockpiling' },
    { label: 'Wheel Bucket Metallurgy', value: 'Perforated high-tensile wear plate with polyurethane screen inserts' },
    { label: 'Slurry Pump Specification', value: 'High-chrome alloy wet end pump for abrasive slurry duty' },
    { label: 'Hydrocyclone Lining', value: 'Molded natural rubber / polyurethane abrasion-resistant liners' },
    { label: 'Dewatering Screen Deck', value: 'Linear high-frequency vibrating screen with polyurethane panels' },
    { label: 'Water Requirement', value: 'Recirculation closed-loop system reduces fresh water demand' },
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
          <span className="text-[#111111] font-semibold">Sand Washing Plants</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#E10613] text-xs font-bold uppercase tracking-wider">
              <Waves className="w-3.5 h-3.5" />
              <span>Mineral Recovery &amp; Desliming</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
              Sand Washing &amp; Mineral Recovery Plants
            </h1>
            <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
              Engineered bucket wheel sand washers, hydrocyclone deslimers, and spiral classifiers designed
              to wash crushed stone, silica sand, and river aggregate. Eliminate clay and silt while recovering
              marketable fine sand down to 75 microns.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button href="/request-quote" variant="primary" size="md">
                Request Washing Plant Quote
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
                <span className="font-mono font-bold text-[#111111] block">30 - 200 TPH</span>
                <span className="text-neutral-500">Processing Range</span>
              </div>
              <div>
                <span className="font-mono font-bold text-[#111111] block">75 Micron</span>
                <span className="text-neutral-500">Fine Sand Recovery</span>
              </div>
              <div>
                <span className="font-mono font-bold text-[#111111] block">&lt;15% Moisture</span>
                <span className="text-neutral-500">Stackable Product</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E7E7EB] bg-neutral-900 shadow-xl">
              <Image
                src="/images/products/mineral-processing/river-sand-washing-plant-lg.webp"
                alt="Minerals Solutions heavy bucket wheel sand washing plant at aggregate processing site"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm p-3 rounded-xl text-white text-xs">
                <span className="font-bold block">Bucket Wheel Sand Washer Installation</span>
                <span className="text-neutral-400 text-[11px]">Manufactured at Zak GIDC Works, Dahegam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Considerations */}
        <div className="bg-white rounded-3xl border border-[#E7E7EB] p-8 sm:p-10 mb-16 shadow-[0_4px_24px_rgba(17,17,17,0.04)] space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-[#111111] tracking-tight">
              Design Considerations for Aggregate &amp; Silica Washing
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              Every quarry and mineral deposit presents different clay content and grain distributions.
              Our engineering team sizes the washing, cyclone separation, and dewatering stages based on:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] space-y-1">
              <span className="text-xs font-bold text-[#111111] block">1. Silt &amp; Clay Content</span>
              <p className="text-xs text-neutral-600">Feed washing requirement depends on whether clay is free silt or plastic adherent coatings.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] space-y-1">
              <span className="text-xs font-bold text-[#111111] block">2. Particle Size Sieve Grading</span>
              <p className="text-xs text-neutral-600">Target zone classification (e.g. Zone II plaster sand vs glass-grade silica sand).</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] space-y-1">
              <span className="text-xs font-bold text-[#111111] block">3. Water Availability &amp; Recycling</span>
              <p className="text-xs text-neutral-600">Thickener tank and filter press integration allows up to 90% closed-loop water recovery.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] space-y-1">
              <span className="text-xs font-bold text-[#111111] block">4. Stockpile Dewatering</span>
              <p className="text-xs text-neutral-600">High frequency dewatering screen removes excess water, allowing immediate loading on trucks.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Validation Note:</strong> Recovery down to 75 microns and discharged moisture under 15%
              require proper cyclone operating pressure and suitable feed sieve curves. Sieve analysis of raw
              feed is recommended prior to final plant sign-off.
            </span>
          </div>
        </div>

        {/* Machinery Units Grid */}
        <div className="mb-16" id="machinery">
          <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-6">
            Available Sand Washing &amp; Separation Equipment
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
                    <Waves className="w-4 h-4 text-neutral-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111]">
                    {eq.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                    {eq.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-100 text-xs text-neutral-600 font-mono">
                  <strong>Operating Capacity:</strong> {eq.capacity}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="mb-16" id="specifications">
          <TechnicalSpecTable
            title="Bucket Wheel &amp; Hydrocyclone Plant Specifications"
            subtitle="Engineering baseline for MS-series combined sand washing and dewatering plants."
            modelCode="MS-SW-100"
            specs={sandWasherSpecs}
            caption="Complete plants include feed hopper, slurry transfer pump, polyurethane cyclone assembly, and high-frequency dewatering screen mounted on skid or structural frame."
          />
        </div>

        {/* Call to Action */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
              Quarry &amp; Sand Plant Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Upgrade Your Aggregate Washing Recovery
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Stop losing valuable fine sand to your settling ponds. Talk with our mineral recovery engineers
              to install a high-yield hydrocyclone washing circuit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button href="/request-quote" variant="primary" size="lg">
              Request Washing Plant Quote
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

