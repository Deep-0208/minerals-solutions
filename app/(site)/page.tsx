import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Factory,
  ChevronRight,
  Phone,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { company } from '@/data/company';

export default function HomePage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const equipmentLines = [
    {
      id: 'dryers',
      title: 'Industrial Rotary Dryers',
      category: 'Thermal Processing',
      tagline: 'High-Efficiency Rotary Dryers (1 to 50 TPH)',
      desc: 'Single, double, and triple-pass rotary drum dryers with direct or indirect hot air generators for sand, sawdust, slag, and minerals.',
      image: '/images/products/rotary-dryers/double-pass-rotary-dryer-primary-md.webp',
      specs: [
        { label: 'Thermal Capacity', val: '500 kg to 50 TPH' },
        { label: 'Operating Temp', val: 'Up to 300°C' },
        { label: 'Fuel Options', val: 'Coal / Gas / Diesel / Biomass' },
        { label: 'Moisture Removal', val: '18% down to <0.5%' },
      ],
      href: '/rotary-dryer-manufacturer-ahmedabad/',
    },
    {
      id: 'fertilizer',
      title: 'Fertilizer Granulation Plants',
      category: 'Pelletizing Systems',
      tagline: 'Turnkey NPK & Organic Fertilizer Lines',
      desc: 'Complete pan granulators, rotary drum granulators, rotary coolers, and coating drums for uniform round fertilizer pellets.',
      image: '/images/products/fertilizer-pellet/fertilizer-granulation-plant-line-md.webp',
      specs: [
        { label: 'Plant Throughput', val: '1 to 20 TPH' },
        { label: 'Pellet Sphericity', val: '92% uniform granules' },
        { label: 'Drive Rating', val: '5 HP to 45 HP Geared' },
        { label: 'Material Handling', val: 'Manure, compost & chemical NPK' },
      ],
      href: '/fertilizer-granulation-plant-manufacturer/',
    },
    {
      id: 'sand-washing',
      title: 'Sand Washing Plants',
      category: 'Mineral Recovery',
      tagline: 'High-Purity Sand Desliming (Up to 200 TPH)',
      desc: 'Bucket wheel sand washers, hydrocyclone desliming separators, and spiral screw classifiers for concrete sand, plaster sand, and silica.',
      image: '/images/products/mineral-processing/river-sand-washing-plant-md.webp',
      specs: [
        { label: 'Washing Capacity', val: '30 to 200 TPH' },
        { label: 'Fine Sand Recovery', val: 'Down to 75 Microns' },
        { label: 'Silt Removal', val: 'Clay wash out 95%+' },
        { label: 'Dewatering Moisture', val: 'Discharge moisture 12-15%' },
      ],
      href: '/sand-washing-plant-manufacturer-gujarat/',
    },
    {
      id: 'conveyors',
      title: 'Industrial Conveyor Systems',
      category: 'Bulk Handling',
      tagline: 'Heavy-Duty Belt Handling (400mm to 1600mm)',
      desc: 'Troughing belt conveyors, overland conveyors, dynamic head and tail pulleys with vulcanized rubber lagging, and precision idlers.',
      image: '/images/products/conveyor-systems/conveyor-belt-system-wide-md.webp',
      specs: [
        { label: 'Belt Widths', val: '400 mm to 1600 mm' },
        { label: 'Handling Capacity', val: '50 to 800 TPH' },
        { label: 'Pulley Lagging', val: '10-12mm Vulcanized Diamond' },
        { label: 'Bearing Type', val: 'Spherical Roller Bearings' },
      ],
      href: '/industrial-conveyor-belt-system-manufacturer/',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* ═══════════════════════════════════════════════
          1. HERO SECTION (Disciplined 4-Element Stack, Under 20 Words Subtext)
          ═══════════════════════════════════════════════ */}
      <section className="relative bg-slate-900 text-white overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <Container size="lg" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Element 1: Eyebrow / Facility Badge (Only 1 eyebrow on page) */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
                <span className="text-white">Zak GIDC, Dahegam</span>
                <span className="text-slate-500">•</span>
                <span className="text-amber-400 font-bold">GSTIN: {company.gstin}</span>
              </div>

              {/* Element 2: Primary H1 Headline (Max 2 lines) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Heavy Industrial <span className="text-[#DA020D]">Rotary Dryers</span> &amp; Turnkey Mineral Plants
              </h1>

              {/* Element 3: Subtext (Max 20 words) */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                Custom thermal rotary dryers, turnkey fertilizer granulation lines, and sand washing plants engineered for
                continuous 24/7 heavy industrial operation.
              </p>

              {/* Element 4: Action CTAs (Single-line labels) */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Button
                  href="/request-quote/"
                  variant="primary"
                  size="lg"
                  icon={<FileText className="w-5 h-5" />}
                >
                  Request Engineering Quote
                </Button>
                <Button
                  href={`tel:${cleanPhone}`}
                  variant="outline"
                  size="lg"
                  className="bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
                  icon={<Phone className="w-5 h-5 text-[#DA020D]" />}
                >
                  Call Works: {primaryPhone}
                </Button>
              </div>
            </div>

            {/* Right Media Card Column (5 cols, clean photography with no floating overlays) */}
            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-800 shadow-xl">
                <div className="relative aspect-[4/3] w-full bg-slate-950">
                  <Image
                    src="/images/products/rotary-dryers/double-pass-rotary-dryer-primary-md.webp"
                    alt="Double Pass Rotary Dryer fabricated at Minerals Solutions workshop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </div>
                <div className="p-4 bg-slate-900 border-t border-slate-700 text-xs text-slate-300 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">Fabrication Plant:</span>
                    <span className="font-mono text-slate-300">Zak GIDC, Dahegam</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">Shell Metallurgy:</span>
                    <span className="font-mono text-slate-300">IS 2062 Heavy Plate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          2. CREDENTIALS & TRUST SECTION (Moved under Hero)
          ═══════════════════════════════════════════════ */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <Container size="lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                1-50 <span className="text-[#DA020D] text-lg font-bold">TPH</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">Custom Thermal Capacity</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                4.8 / 5.0 <span className="text-amber-500 text-lg">★</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">IndiaMART Verified Rating</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                100% <span className="text-emerald-600 text-lg">✓</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">In-House Quality Audits</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                382330
              </div>
              <div className="text-xs text-slate-600 font-medium">Zak GIDC Industrial Hub</div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          3. FOUR FLAGSHIP MACHINERY DIVISIONS
          ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <Container size="lg">
          <SectionHeading
            title="Four Specialized Industrial Machinery Divisions"
            subtitle="Explore our manufacturing capabilities across thermal drying, high-tonnage fertilizer granulation, aggregate sand washing, and heavy conveyor logistics."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipmentLines.map((eq) => (
              <div
                key={eq.id}
                className="flex flex-col rounded-lg border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 overflow-hidden group"
              >
                {/* Image without overlays */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={eq.image}
                    alt={eq.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      {eq.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#DA020D] transition-colors">
                      {eq.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#DA020D] mt-1">
                      {eq.tagline}
                    </div>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {eq.desc}
                    </p>

                    {/* Specification Data */}
                    <div className="mt-5 p-3.5 rounded-md bg-slate-50 border border-slate-100 grid grid-cols-2 gap-2 text-xs">
                      {eq.specs.map((sp) => (
                        <div key={sp.label} className="space-y-0.5">
                          <span className="text-slate-500 font-medium">{sp.label}:</span>
                          <span className="block font-semibold text-slate-800 font-mono">
                            {sp.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={eq.href}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#DA020D] group-hover:text-[#B3020B]"
                    >
                      <span>Explore Technical Specs</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/request-quote/"
                      className="text-xs font-semibold text-slate-700 hover:text-slate-900 underline"
                    >
                      Get Machine Price
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          4. TECHNICAL SPECIFICATION DATASHEET
          ═══════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <Container size="lg">
          <SectionHeading
            title="Verified Equipment Specifications and Build Standards"
            subtitle="Every machine is fabricated at our Zak GIDC plant following strict ASME and IS weld standards, precision dynamic balancing, and thorough thermal flow testing."
          />

          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h3 className="text-lg font-bold">Double Pass Rotary Drum Dryer Specifications</h3>
                <span className="text-xs text-slate-400">Model: MS-DPD Series | Tested and Commissioned in Gujarat</span>
              </div>
              <span className="text-xs font-mono font-bold bg-[#DA020D] text-white px-3 py-1 rounded">
                Throughput: 500 kg to 5,000 kg/hr
              </span>
            </div>

            <div className="p-4 sm:p-6 overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-3 px-4 bg-slate-50">Technical Parameter</th>
                    <th className="py-3 px-4 bg-slate-50">Engineering Specification</th>
                    <th className="py-3 px-4 bg-slate-50">Design Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">Cylinder Geometry</td>
                    <td className="py-3.5 px-4 font-mono text-slate-700">Concentric nested dual-cylinder layout</td>
                    <td className="py-3.5 px-4 text-xs text-slate-600">Up to 40% smaller footprint than conventional single-pass</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">Operating Temperature</td>
                    <td className="py-3.5 px-4 font-mono text-slate-700">Up to 300°C Inlet Air Draft</td>
                    <td className="py-3.5 px-4 text-xs text-slate-600">High thermal gradient for accelerated moisture flash-off</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">Shell Metallurgy</td>
                    <td className="py-3.5 px-4 font-mono text-slate-700">Heavy IS 2062 Carbon Steel / Optional SS304</td>
                    <td className="py-3.5 px-4 text-xs text-slate-600">High abrasion and thermal expansion resistance</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">Drive Transmission</td>
                    <td className="py-3.5 px-4 font-mono text-slate-700">15 HP to 45 HP Geared Motor with Girth Gear</td>
                    <td className="py-3.5 px-4 text-xs text-slate-600">Machined girth gear and forged pinion for smooth drive</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">Dust Separation</td>
                    <td className="py-3.5 px-4 font-mono text-slate-700">High-efficiency single / twin cyclone separator</td>
                    <td className="py-3.5 px-4 text-xs text-slate-600">99%+ product recovery with minimal bag-filter load</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Need custom shell length, SS316 lining, or explosion-proof electrics?
              </span>
              <Button href="/request-quote/" variant="primary" size="sm">
                Request Custom CAD / Layout Drawing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════
          5. CALL TO ACTION & WORKS CONSULTATION
          ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        <Container size="md" className="relative z-10 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Consult Directly with Our Works Engineering Team
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Send us your moisture parameters, target throughput, and material feed properties.
            We will provide a custom GA drawing and formal quotation within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Button
              href="/request-quote/"
              variant="primary"
              size="lg"
              icon={<FileText className="w-5 h-5" />}
            >
              Submit Machine Specifications
            </Button>
            <Button
              href={`https://wa.me/${company.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
                company.whatsapp.prefill
              )}`}
              external
              variant="whatsapp"
              size="lg"
            >
              Chat on WhatsApp ({company.telephones[0]})
            </Button>
          </div>

          <div className="pt-3 text-xs text-slate-400">
            Factory: 10, Shyam Estate, Zak GIDC, Zak-Vahelal Road, Dahegam, Gandhinagar - 382330, Gujarat
          </div>
        </Container>
      </section>
    </div>
  );
}
