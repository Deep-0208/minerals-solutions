import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Boxes,
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ChevronRight,
  Info,
  Settings2,
  Wrench,
  Layers,
  CircleDot,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TechnicalSpecTable } from '@/components/ui/TechnicalSpecTable';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Industrial Belt Conveyor Systems & Heavy Mechanical Spares | 400 to 1600 mm',
  description:
    'Manufacturer of heavy-duty trough belt conveyors, diamond rubber lagged pulleys, idlers, forged EN-8/EN-9 trunnion rollers, and girth gears. Fabricated in Gujarat.',
  alternates: {
    canonical: '/products/industrial-conveyors-spares/',
  },
};

export default function ConveyorsSparesPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const conveyorProducts = [
    {
      name: 'Heavy-Duty Troughed Belt Conveyor System',
      badge: '400 mm to 1600 mm Widths',
      desc: 'Robust channel-iron or fabricated lattice truss conveyors with 20°, 30°, or 35° troughing idlers designed for bulk mineral, aggregate, and sand transport.',
      specs: 'Spans from 5m to 120m, up to 300 TPH bulk material',
    },
    {
      name: 'Motorized Head & Tail Drive Pulleys',
      badge: 'Hot Vulcanized Lagging',
      desc: 'Machined steel pipe pulleys crowned to maintain belt tracking, equipped with heavy shafts and cold/hot vulcanized diamond pattern rubber lagging to prevent belt slip.',
      specs: 'Diameters from 200 mm to 800 mm, shaft journals turned to fit',
    },
    {
      name: 'Forged Alloy Trunnion Support Rollers',
      badge: 'EN-8 / EN-9 / 42CrMo4 Forgings',
      desc: 'Heavy forged alloy steel trunnion rollers induction hardened to 280-320 BHN, mounted on spherical roller bearings in heavy cast steel split plummer blocks for rotary kilns and dryers.',
      specs: 'Face widths and diameters engineered to load ratings',
    },
    {
      name: 'Machined Girth Gears & Drive Pinions',
      badge: 'Precision Spur & Helical Gearing',
      desc: 'Heavy cast steel or fabricated ring gears machined in split halves for easy mounting on rotary dryer shells, mated with forged alloy steel pinions.',
      specs: 'Module 10 to Module 25, precision tooth profiling',
    },
  ];

  const conveyorSpecs = [
    { label: 'System Type', value: 'Industrial Troughed Belt Conveyor (IS 11592 Design Code)', highlight: true },
    { label: 'Belt Width Availability', value: '400 mm, 500 mm, 650 mm, 800 mm, 1000 mm, 1200 mm, 1600 mm', highlight: true },
    { label: 'Belting Grade & Plies', value: 'Nylon / EP Grade M24 3-Ply / 4-Ply belting (IS 1891 Part 1)', highlight: true },
    { label: 'Troughing Idler Sets', value: '3-roller fixed frame sets with 20°, 30°, or 35° angle' },
    { label: 'Idler Roller Construction', value: 'Heavy MS ERW pipe with labyrinth-sealed deep groove ball bearings' },
    { label: 'Head Pulley Lagging', value: 'Hot vulcanized 10 mm to 15 mm diamond grooved natural rubber' },
    { label: 'Frame Structure', value: 'Heavy structural ISMC channel stringers or open web lattice truss' },
    { label: 'Drive Arrangement', value: 'Shaft mounted gear reducer / bevel helical drive with TEFC motor' },
    { label: 'Take-up Tensioner', value: 'Screw take-up for short spans / gravity vertical counterweight for long runs' },
  ];

  const trunnionSpecs = [
    { label: 'Component Type', value: 'Forged Steel Trunnion Support Roller Assembly', highlight: true },
    { label: 'Roller Material', value: 'Forged Alloy Steel (EN-8 / EN-9 / 42CrMo4)', highlight: true },
    { label: 'Surface Hardness', value: 'Induction hardened to 280-320 BHN for anti-wear longevity', highlight: true },
    { label: 'Shaft Inspection', value: 'Precision ground shaft journal with 100% ultrasonic flaw testing' },
    { label: 'Bearing Housing Type', value: 'Heavy cast steel split plummer blocks with spherical roller bearings' },
    { label: 'Lubrication Method', value: 'Continuous oil-bath / heavy EP-2 grease cavity packing' },
    { label: 'Typical Applications', value: 'Rotary dryers, rotary calciners, coolers, and ball mills' },
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
          <span className="text-[#111111] font-semibold">Conveyors &amp; Spares</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-[#E10613] text-xs font-bold uppercase tracking-wider">
              <Boxes className="w-3.5 h-3.5" />
              <span>Material Handling &amp; Mechanical Spares</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
              Industrial Conveyor Systems &amp; Heavy Spares
            </h1>
            <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
              Minerals Solutions manufactures heavy troughed belt conveyors (400 mm to 1600 mm width)
              along with precision mechanical replacement spares including rubber-lagged drive pulleys,
              forged EN-8/EN-9 trunnion rollers, and machined rotary drum girth gears.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button href="/request-quote" variant="primary" size="md">
                Request Conveyor Quote
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
                <span className="font-mono font-bold text-[#111111] block">400 - 1600 mm</span>
                <span className="text-neutral-500">Belt Widths</span>
              </div>
              <div>
                <span className="font-mono font-bold text-[#111111] block">EN-8 / EN-9</span>
                <span className="text-neutral-500">Forged Trunnions</span>
              </div>
              <div>
                <span className="font-mono font-bold text-[#111111] block">Hot Vulcanized</span>
                <span className="text-neutral-500">Diamond Lagging</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E7E7EB] bg-neutral-900 shadow-xl">
              <Image
                src="/images/products/conveyor-systems/conveyor-belt-system-truss-lg.webp"
                alt="Heavy industrial conveyor belt system lattice truss structure fabricated at Minerals Solutions workshop"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm p-3 rounded-xl text-white text-xs">
                <span className="font-bold block">Heavy Lattice Conveyor Truss Fabrication</span>
                <span className="text-neutral-400 text-[11px]">Fabricated at Zak GIDC Works, Dahegam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-6">
            Conveyor Equipment &amp; Mechanical Replacement Spares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conveyorProducts.map((prod) => (
              <div
                key={prod.name}
                className="bg-white rounded-2xl border border-[#E7E7EB] p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#E10613] uppercase tracking-wider">
                      {prod.badge}
                    </span>
                    <Boxes className="w-4 h-4 text-neutral-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111]">
                    {prod.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                    {prod.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-100 text-xs text-neutral-600 font-mono">
                  <strong>Standard Rating:</strong> {prod.specs}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specification Table 1: Conveyors */}
        <div className="mb-16">
          <TechnicalSpecTable
            title="Heavy-Duty Troughed Belt Conveyor Specifications"
            subtitle="Standard engineering parameters conforming to IS 11592 / IS 1891."
            modelCode="MS-BC-800"
            specs={conveyorSpecs}
            caption="Conveyor lengths and motor power ratings are customized based on linear distance, material bulk density, inclination angle, and hourly tonnage."
          />
        </div>

        {/* Technical Specification Table 2: Trunnion Rollers */}
        <div className="mb-16">
          <TechnicalSpecTable
            title="Forged Steel Trunnion Support Roller Specifications"
            subtitle="Mechanical running gear for rotary dryers, calciners, and coating drums."
            modelCode="MS-TR-400"
            specs={trunnionSpecs}
            caption="Rollers are available as direct replacement spares for existing plant machinery. Send bore size, shaft length, and diameter for precision machining quote."
          />
        </div>

        {/* Call to Action */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
              Spares &amp; Conveyor Engineering
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Order Conveyor Systems or Replacement Spares
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Whether you need a complete 50-meter plant transit conveyor or emergency replacement trunnion
              support rollers, connect directly with our machining desk at Zak GIDC.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button href="/request-quote" variant="primary" size="lg">
              Request Spares Quote
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

