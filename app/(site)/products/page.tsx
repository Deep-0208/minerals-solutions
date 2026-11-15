import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Flame,
  Sprout,
  Waves,
  Boxes,
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Industrial Machinery Catalog | Dryers, Washers & Plants',
  },
  description:
    'Explore industrial equipment catalog: rotary dryers, sand washing plants, fertilizer granulators, and conveyors manufactured at Zak GIDC, Dahegam, Gujarat.',
  alternates: {
    canonical: `${company.siteUrl}/products/`,
  },
  openGraph: {
    title: 'Industrial Machinery Catalog | Dryers, Washers & Plants',
    description:
      'Complete manufacturing catalog of industrial rotary drum dryers, sand washing lines, pan granulators, and conveyor systems at Zak GIDC, Gujarat.',
    url: `${company.siteUrl}/products/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Machinery Catalog | Minerals Solutions Gujarat',
    description:
      'Explore heavy equipment divisions: thermal dryers, sand recovery plants, fertilizer granulators, and bulk conveyors.',
    images: [defaultTwitterImage],
  },
};

export default function ProductsPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const catalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${company.siteUrl}/products/#webpage`,
    url: `${company.siteUrl}/products/`,
    name: 'Industrial Machinery Catalog | Dryers, Washers & Plants',
    description:
      'Manufacturing catalog of industrial rotary drum dryers, sand washing plants, fertilizer granulators, and conveyor systems manufactured in Gujarat.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Industrial Rotary Dryers & Thermal Systems',
          url: `${company.siteUrl}/products/industrial-rotary-dryers/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Sand Washing & Mineral Recovery Plants',
          url: `${company.siteUrl}/products/sand-washing-plants/`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Fertilizer Granulation & Bio-Pellet Plants',
          url: `${company.siteUrl}/products/fertilizer-granulation-plants/`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Industrial Conveyor Systems & Heavy Spares',
          url: `${company.siteUrl}/products/industrial-conveyors-spares/`,
        },
      ],
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
          name: 'Products',
          item: `${company.siteUrl}/products/`,
        },
      ],
    },
  };

  const categories = [
    {
      id: 'industrial-rotary-dryers',
      title: 'Industrial Rotary Dryers & Thermal Systems',
      slug: '/products/industrial-rotary-dryers/',
      capacity: '500 kg/hr - 50 TPH',
      summary:
        'Continuous industrial drum drying systems engineered for high moisture reduction across silica sand, minerals, sawdust, gypsum, slag, and chemical salts.',
      image: '/images/products/rotary-dryers/double-pass-rotary-dryer-primary-lg.webp',
      alt: 'Minerals Solutions double pass concentric rotary dryer showing outer shell and heavy drive frame',
      icon: Flame,
      keyModels: [
        { name: 'Rotary Sand Dryer', href: '/products/industrial-rotary-dryers/sand-dryer/' },
        { name: 'Triple Pass Drum Dryer', href: '/products/industrial-rotary-dryers/triple-pass-dryer/' },
        { name: 'Biomass & Sawdust Dryer', href: '/products/industrial-rotary-dryers/biomass-sawdust-dryer/' },
        { name: 'Chemical & Mineral Powder Dryer', href: '/products/industrial-rotary-dryers/chemical-powder-dryer/' },
      ],
      materials: 'Silica sand, river sand, sawdust, biomass, slag, gypsum, fly ash, chemical salts',
    },
    {
      id: 'fertilizer-granulation-plants',
      title: 'Fertilizer Granulation & Pellet Plants',
      slug: '/products/fertilizer-granulation-plants/',
      capacity: '1 - 20 TPH',
      summary:
        'Turnkey chemical and organic fertilizer pelletizing lines designed for uniform particle sizing, high granulation yields, and continuous operation.',
      image: '/images/products/fertilizer-pellet/fertilizer-granulation-plant-primary-lg.webp',
      alt: 'Minerals Solutions complete fertilizer granulation plant installation showing granulator pan and conveyor feed',
      icon: Sprout,
      keyModels: [
        { name: 'Pan Disc Fertilizer Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/' },
        { name: 'Double Roller Compaction Granulator', href: '/products/fertilizer-granulation-plants/double-roller-granulator/' },
        { name: 'Rotary Cooling & Coating Drum', href: '/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/' },
        { name: 'Rotary Drum Fertilizer Granulator', href: '/products/fertilizer-granulation-plants/rotary-drum-granulator/' },
      ],
      materials: 'Organic compost, cow dung manure, NPK chemical fertilizers, bentonite clay balls',
    },
    {
      id: 'sand-washing-plants',
      title: 'Sand Washing & Mineral Recovery Plants',
      slug: '/products/sand-washing-plants/',
      capacity: '30 - 200 TPH',
      summary:
        'High-recovery washing and desliming plants designed to eliminate clay, silt, and mica while recovering valuable fine sand down to 75 microns (200 mesh).',
      image: '/images/products/mineral-processing/river-sand-washing-plant-lg.webp',
      alt: 'Minerals Solutions heavy bucket wheel sand washing plant at aggregate processing site',
      icon: Waves,
      keyModels: [
        { name: 'Bucket Wheel Sand Washer', href: '/products/sand-washing-plants/bucket-wheel-sand-washer/' },
        { name: 'Hydrocyclone Sand Separator', href: '/products/sand-washing-plants/hydrocyclone-sand-separator/' },
        { name: 'Quartz Stone & Mineral Log Washer', href: '/products/sand-washing-plants/mineral-log-washer/' },
        { name: 'Silica Sand Washing Plant', href: '/products/sand-washing-plants/silica-sand-washing-plant/' },
      ],
      materials: 'River sand, silica sand, crushed stone aggregate, quartz stone, mineral ores',
    },
    {
      id: 'industrial-conveyors-spares',
      title: 'Industrial Conveyors & Heavy Mechanical Spares',
      slug: '/products/industrial-conveyors-spares/',
      capacity: '400 - 1600 mm Belt Width',
      summary:
        'Heavy material transit solutions and precision mechanical replacement components engineered for long service life in harsh, abrasive environments.',
      image: '/images/products/conveyor-systems/conveyor-belt-system-truss-lg.webp',
      alt: 'Heavy industrial conveyor belt system lattice truss structure fabricated at Minerals Solutions workshop',
      icon: Boxes,
      keyModels: [
        { name: 'Heavy Troughed Belt Conveyors', href: '/products/industrial-conveyors-spares/belt-conveyors/' },
        { name: 'Forged Steel Trunnion Rollers', href: '/products/industrial-conveyors-spares/forged-trunnion-rollers/' },
        { name: 'Industrial Bucket Elevators', href: '/products/industrial-conveyors-spares/bucket-elevators/' },
        { name: 'Industrial Screw Conveyors', href: '/products/industrial-conveyors-spares/screw-conveyors/' },
      ],
      materials: 'Bulk mineral transfer, quarry aggregate, dryer feed and discharge logistics',
    },
  ];

  return (
    <>
      <JsonLd data={catalogSchema} />
      <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
        <Container>
        {/* Header Breadcrumb & Title */}
        <div className="mb-12 max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#E10613]">Home</Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">Products</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
            <Boxes className="w-3.5 h-3.5" />
            <span>Heavy Equipment Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
            Industrial Machinery &amp; Plant Equipment
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#737373] leading-relaxed">
            Custom-engineered thermal rotary dryers, continuous fertilizer granulation lines,
            sand washing separators, and heavy material handling conveyors built at our Zak GIDC works.
          </p>
        </div>

        {/* 4 Divisions Detailed Showcase */}
        <div className="space-y-10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={cat.id}
                id={cat.id}
                className="bg-white rounded-3xl border border-[#E7E7EB] overflow-hidden shadow-[0_4px_24px_rgba(17,17,17,0.04)] hover:shadow-[0_16px_40px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 group"
              >
                {/* Media Side (5 cols) */}
                <div
                  className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-neutral-900 overflow-hidden ${
                    isEven ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-xs font-mono font-semibold">
                    Capacity: {cat.capacity}
                  </div>
                </div>

                {/* Content Side (7 cols) */}
                <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${
                  isEven ? 'lg:order-1' : ''
                }`}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E10613] flex items-center justify-center border border-red-100">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        Division 0{idx + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] group-hover:text-[#E10613] tracking-tight transition-colors">
                      {cat.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
                      {cat.summary}
                    </p>

                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2.5">
                        Key Equipment Models &amp; Specifications
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                        {cat.keyModels.map((model) => (
                          <li key={model.name}>
                            <Link
                              href={model.href}
                              className="flex items-center justify-between p-2.5 rounded-xl bg-[#F5F5F7] hover:bg-red-50 border border-[#E7E7EB] hover:border-red-200 text-neutral-800 hover:text-[#E10613] transition-all group/model font-medium"
                            >
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#E10613] shrink-0" />
                                <span>{model.name}</span>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover/model:text-[#E10613] group-hover/model:translate-x-0.5 transition-all" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#E7E7EB] text-xs text-neutral-600">
                      <strong>Processed Materials:</strong> {cat.materials}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                    <Button href={cat.slug} variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                      Explore Specifications
                    </Button>
                    <Button href="/request-quote/" variant="outline" size="md">
                      Request Quotation
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Consultation CTA Banner */}
        <div className="mt-16 bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
              Engineering Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Need a Custom Turnkey Plant Configuration?
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Our engineering team conducts thermal calculations and layout planning tailored to your exact
              space constraints, fuel availability, and target throughput.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button href="/request-quote/" variant="primary" size="lg">
              Submit Plant Requirements
            </Button>
            <a
              href={`tel:${cleanPhone}`}
              className="px-6 py-3 rounded-full border border-neutral-700 hover:border-white text-xs font-bold text-white transition-colors"
            >
              Call Works: {primaryPhone}
            </a>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
}
