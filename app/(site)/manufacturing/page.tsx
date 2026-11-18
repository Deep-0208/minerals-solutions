import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Factory,
  Wrench,
  Layers,
  Gauge,
  ShieldCheck,
  Cpu,
  Flame,
  Settings2,
  CheckCircle2,
  Phone,
  ArrowRight,
  Eye,
  MapPin,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Heavy Fabrication Works & Facility | Minerals Solutions',
  },
  description:
    'Tour Minerals Solutions heavy fabrication facility in Zak GIDC, Dahegam. Plate rolling to 25mm+, submerged arc welding, and lathe turning in Gujarat.',
  alternates: {
    canonical: `${company.siteUrl}/manufacturing/`,
  },
  openGraph: {
    title: 'Heavy Fabrication Works & Facility | Minerals Solutions',
    description:
      'In-house heavy engineering facility in Zak GIDC, Dahegam, Gujarat: plate bending, submerged arc welding, dynamic drum balancing, and lathe turning.',
    url: `${company.siteUrl}/manufacturing/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing Facility & Heavy Fabrication Works | Zak GIDC',
    description:
      'In-house heavy equipment fabrication infrastructure at Zak GIDC, Dahegam, Gujarat.',
    images: [defaultTwitterImage],
  },
};

export default function ManufacturingPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const manufacturingSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${company.siteUrl}/manufacturing/#webpage`,
    url: `${company.siteUrl}/manufacturing/`,
    name: 'Manufacturing Facility & Heavy Fabrication Works | Zak GIDC',
    description:
      'Heavy fabrication, machining, and dynamic testing infrastructure of Minerals Solutions in Zak GIDC, Dahegam, Gujarat.',
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${company.siteUrl}/#organization`,
      name: company.legalName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.streetAddress,
        addressLocality: company.address.locality,
        addressRegion: company.address.regionName,
        postalCode: company.address.postalCode,
        addressCountry: company.address.country,
      },
    },
    breadcrumb: {
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
          name: 'Manufacturing Infrastructure',
          item: `${company.siteUrl}/manufacturing/`,
        },
      ],
    },
  };

  const capabilities = [
    {
      num: '01',
      title: 'Heavy Plate Cutting & Edge Beveling',
      desc: 'Precision CNC profile gas cutting and hydraulic shearing of structural steel plates (IS 2062 Grade E250/E350) with automated edge beveling for full-penetration welding.',
      spec: 'Up to 32 mm plate thickness processing',
      icon: Layers,
    },
    {
      num: '02',
      title: 'Heavy 3-Roll & 4-Roll Plate Bending',
      desc: (
        <>
          Hydraulic pyramid plate rolling machines cold-forming heavy cylindrical shells for{' '}
          <Link href="/products/industrial-rotary-dryers/" className="font-semibold text-[#E10613] hover:underline">
            rotary dryers
          </Link>
          , calciners, and{' '}
          <Link href="/products/fertilizer-granulation-plants/disc-granulator/" className="font-semibold text-[#E10613] hover:underline">
            pan granulators
          </Link>{' '}
          with minimal ovality and true diameter profiling.
        </>
      ),
      spec: 'Diameters from 800 mm to 3,600 mm',
      icon: Factory,
    },
    {
      num: '03',
      title: 'Automatic Submerged Arc Welding (SAW)',
      desc: 'Automated tractor submerged arc welding stations producing deep-penetration, defect-free longitudinal and circumferential shell seams engineered for high thermal expansion cycling.',
      spec: '100% radiographic & ultrasonic quality grade',
      icon: Flame,
    },
    {
      num: '04',
      title: 'Heavy Lathe Shaft Machining & Boring',
      desc: (
        <>
          Large bed heavy-duty industrial turning lathes machining{' '}
          <Link href="/products/industrial-conveyors-spares/forged-trunnion-rollers/" className="font-semibold text-[#E10613] hover:underline">
            trunnion roller shafts
          </Link>
          , head pulley journals, and drive gear hubs to precise micrometer tolerance fits.
        </>
      ),
      spec: 'Precision ground bearing journals',
      icon: Settings2,
    },
    {
      num: '05',
      title: 'Refractory Lining & Thermal Insulation',
      desc: 'Installation of high-alumina firebricks (45%-70% Al2O3), ceramic fiber blanket backing, and abrasion-resistant castable refractories in combustion furnaces and calciner zones.',
      spec: 'Withstands up to 1,200°C furnace environments',
      icon: ShieldCheck,
    },
    {
      num: '06',
      title: 'Rotary Drum Dynamic Balancing',
      desc: 'Electronic dynamic balancing of fabricated drums, fan impellers, and drive assemblies to neutralize rotational eccentricity and maximize spherical bearing operating lifespan.',
      spec: 'ISO 1940 balance quality grade compliance',
      icon: Gauge,
    },
    {
      num: '07',
      title: 'Complete Workshop Trial Assembly',
      desc: (
        <>
          Every dryer,{' '}
          <Link href="/products/fertilizer-granulation-plants/" className="font-semibold text-[#E10613] hover:underline">
            granulator
          </Link>
          , and{' '}
          <Link href="/products/industrial-conveyors-spares/belt-conveyors/" className="font-semibold text-[#E10613] hover:underline">
            conveyor module
          </Link>{' '}
          undergoes full mechanical shop assembly, tyre-to-roller alignment, and 4-hour continuous no-load dry spin testing prior to dispatch.
        </>
      ),
      spec: 'Eliminates on-site fitment delays',
      icon: Wrench,
    },
    {
      num: '08',
      title: 'Turnkey On-Site Erection & Rigging',
      desc: 'Deployment of senior installation supervisors with heavy crane rigging plans, precision laser trunnion leveling, motor drive wiring integration, and hot material commissioning.',
      spec: 'Complete handover with operating training',
      icon: Cpu,
    },
  ];

  const qualityChecks = [
    { title: 'Ultrasonic & Dye-Penetrant Testing', desc: 'Critical weld seams and forged shaft billets are inspected for subsurface voids and micro-cracks.' },
    { title: 'Dial-Gauge Concentricity Verification', desc: 'Drum tyre runout and girth gear backlash are measured with precision dial indicators under rotation.' },
    { title: 'Bearing Temperature & Vibration Baselines', desc: 'Plummer blocks are monitored during trial spins to confirm zero overheating and smooth rolling contact.' },
    { title: 'Hardness Testing of Wear Components', desc: 'Trunnion rollers and scraper tips are tested for Rockwell / Brinell hardness compliance.' },
  ];

  return (
    <>
      <JsonLd data={manufacturingSchema} />
      <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
        <Container size="hero">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#E10613]">Home</Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">Manufacturing Facility</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
                <Factory className="w-3.5 h-3.5" />
                <span>Zak GIDC Heavy Engineering Facility</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
                Manufacturing Infrastructure &amp; Fabrication Works
              </h1>
              <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
                Situated in the industrial corridor of Dahegam, Gandhinagar, Minerals Solutions operates
                a dedicated heavy engineering plant equipped for plate rolling up to 25 mm+, automatic
                submerged arc welding, lathe machining, and full equipment trial assembly.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button href="/contact/" variant="primary" size="md">
                  Schedule a Factory Inspection
                </Button>
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-300 hover:border-[#111111] text-xs font-bold text-[#111111] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E10613]" />
                  <span>Call Works Desk: {primaryPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-3xl overflow-hidden border border-[#E7E7EB] bg-white shadow-xl group">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11] 2xl:aspect-[4/3] w-full min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] xl:min-h-[440px] 2xl:min-h-[480px] overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/facility/manufacturing-unit-lg.webp"
                    alt="Heavy fabrication workshop floor showing rotary drum rolling, turning lathes, and structural welding bays"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 650px"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-slate-950 text-white border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="min-w-0 flex-1">
                    <span className="font-bold text-sm block truncate">Workshop Fabrication Bay at Zak GIDC</span>
                    <span className="text-neutral-400 text-xs">Equipped for Drums up to 3.6m Diameter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 8 Core Fabrication Capabilities */}
          <div className="mb-16">
            <div className="max-w-2xl mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                Core Manufacturing Capabilities
              </h2>
              <p className="text-sm text-[#737373]">
                Every machine is built in-house under strict engineering tolerances to withstand heavy industrial duty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.num}
                    className="bg-white rounded-2xl border border-[#E7E7EB] p-6 sm:p-7 shadow-[0_4px_24px_rgba(17,17,17,0.04)] hover:shadow-[0_12px_32px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E10613] flex items-center justify-center border border-red-100">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-neutral-400">
                          {cap.num}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#E10613] transition-colors">
                        {cap.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <span className="text-neutral-500 font-medium">Rating:</span>
                      <span className="font-mono font-semibold text-[#111111]">{cap.spec}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quality Standards & Testing Section */}
          <div className="bg-white rounded-3xl border border-[#E7E7EB] p-8 sm:p-10 mb-16 shadow-[0_4px_24px_rgba(17,17,17,0.04)] space-y-6">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Inspection Rigor</span>
              </div>
              <h2 className="text-2xl font-bold text-[#111111] tracking-tight">
                Pre-Dispatch Inspection &amp; Quality Gates
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed">
                Industrial machinery failures are expensive. To eliminate on-site commissioning delays,
                every unit built at our Dahegam facility passes structured quality checkpoints:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {qualityChecks.map((qc) => (
                <div key={qc.title} className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] hover:border-red-200 transition-all space-y-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E10613]" />
                  <h3 className="text-xs font-bold text-[#111111]">{qc.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{qc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Factory Visit Invitation */}
          <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
                Open Factory Policy
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Inspect Our Facility in Person
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Review our machines in production, examine steel plate thicknesses, inspect{' '}
                <Link href="/products/industrial-conveyors-spares/forged-trunnion-rollers/" className="font-semibold text-white underline hover:text-[#E10613]">
                  trunnion roller forgings
                </Link>
                , and discuss your plant layouts with our{' '}
                <Link href="/about/" className="font-semibold text-white underline hover:text-[#E10613]">
                  senior engineering team
                </Link>
                .
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <MapPin className="w-4 h-4 text-[#E10613] shrink-0" />
                <span>Plot No. 10, Shed No. 3, Shyam Estate, Zak GIDC, Dahegam, Gandhinagar, Gujarat.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button href="/request-quote/" variant="primary" size="lg">
                Request Engineering Quote
              </Button>
              <Button href="/contact/" variant="outline" size="lg" className="border-neutral-700 text-white hover:border-white hover:bg-neutral-900">
                Book Factory Visit
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
    </>
  );
}

