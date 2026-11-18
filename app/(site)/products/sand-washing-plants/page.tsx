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
  Scale,
  HelpCircle,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TechnicalSpecTable } from '@/components/ui/TechnicalSpecTable';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Sand Washing Plants & Hydrocyclones | Minerals Solutions',
  },
  description:
    'Industrial bucket wheel sand washing plants, hydrocyclones, and log washers (30 to 200 TPH). Recover fine sand to 75 microns at Zak GIDC, Dahegam works.',
  alternates: {
    canonical: `${company.siteUrl}/products/sand-washing-plants/`,
  },
  openGraph: {
    title: 'Sand Washing Plants & Hydrocyclones | Minerals Solutions',
    description:
      'Turnkey aggregate, silica sand, and M-sand washing plants from 30 to 200 TPH fabricated at Zak GIDC, Dahegam, Gujarat.',
    url: `${company.siteUrl}/products/sand-washing-plants/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sand Washing Plants & Hydrocyclones | Minerals Solutions Gujarat',
    description:
      'Bucket wheel sand washers and hydrocyclone desliming circuits engineered for maximum fine sand recovery down to 75 microns.',
    images: [defaultTwitterImage],
  },
};

export default function SandWashingPlantsPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const equipmentList = [
    {
      name: 'Silica Sand Washing Plant',
      href: '/products/sand-washing-plants/silica-sand-washing-plant/',
      badge: 'Integrated Washing Circuit',
      image: '/images/products/mineral-processing/river-sand-washing-plant-md.webp',
      alt: 'Complete turnkey silica sand washing plant with multi-deck screen and hydrocyclone circuit',
      desc: 'Complete turnkey aggregate and sand washing systems combining multi-deck wet vibrating screens, feed hoppers, slurry pumps, and dewatering units.',
      capacity: '30 - 200 TPH',
    },
    {
      name: 'Quartz Stone & Mineral Log Washer',
      href: '/products/sand-washing-plants/mineral-log-washer/',
      badge: 'High-Attrition Beneficiation',
      image: '/images/products/mineral-processing/quartz-stone-washer-md.webp',
      alt: 'Heavy-duty quartz stone washer and industrial mineral log scrubber',
      desc: 'Heavy industrial scrubbers, log washers, spiral screw classifiers, and trommel washing screens designed to liberate tough adhering clay and silts from ores and quartz.',
      capacity: '20 - 150 TPH',
    },
    {
      name: 'Bucket Wheel Sand Washer',
      href: '/products/sand-washing-plants/bucket-wheel-sand-washer/',
      badge: 'Down to 75 Micron Recovery',
      image: '/images/products/mineral-processing/river-sand-washing-plant-variant-md.webp',
      alt: 'Heavy bucket wheel sand washer scooper at aggregate quarry site',
      desc: 'High-recovery bucket wheel scooper paired with polyurethane-lined hydrocyclones and high-frequency dewatering screens, minimizing fine sand loss to settling ponds.',
      capacity: '30 - 200 TPH',
    },
    {
      name: 'Hydrocyclone Sand Separator',
      href: '/products/sand-washing-plants/hydrocyclone-sand-separator/',
      badge: 'Fine Slurry Dewatering',
      image: '/images/products/mineral-processing/circular-vibrating-screen-md.webp',
      alt: 'High-frequency fine slurry hydrocyclone sand separator and dewatering screen',
      desc: 'High-pressure polyurethane hydrocyclones paired with high-frequency dewatering screens to recover marketable 75-150µm fine sand from overflow slurry.',
      capacity: '30 - 220 m³/hr',
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

  const comparisonRows = [
    {
      parameter: 'Fine Sand Recovery (<150 microns)',
      standaloneWheel: 'Low; high loss of fines (down to 150-75µm) into settling pond',
      hydrocycloneOnly: 'High recovery but high slurry pump wear on coarse rocks',
      integratedSystem: 'Optimal 95%+ recovery; wheel scoops bulk sand, cyclone recovers fines',
    },
    {
      parameter: 'Discharge Moisture Content',
      standaloneWheel: '20% to 25% (requires 48-hour drain pad stockpiling)',
      hydrocycloneOnly: '12% to 15% via dewatering screen',
      integratedSystem: '12% to 14% drip-free (ready for immediate dry screening or loading)',
    },
    {
      parameter: 'Clay & Silt Rejection (<63 microns)',
      standaloneWheel: 'Limited to soluble light clays',
      hydrocycloneOnly: 'Exceptional centrifugal G-force desliming',
      integratedSystem: 'Thorough clay scouring and high-efficiency silt elimination',
    },
    {
      parameter: 'Fresh Water Make-up Demand',
      standaloneWheel: 'High fresh water demand without water recovery',
      hydrocycloneOnly: 'Compatible with thickener & filter press recycling',
      integratedSystem: 'Closed-loop circuit recycles up to 85% of process water',
    },
    {
      parameter: 'Recommended Applications',
      standaloneWheel: 'Coarse concrete aggregate washing',
      hydrocycloneOnly: 'Fine dredging slurry and tailings reclamation',
      integratedSystem: 'IS 383 Zone II/III M-Sand, Plaster Sand, and Foundry Silica Sand',
    },
  ];

  const faqs = [
    {
      question: 'How does the hydrocyclone prevent marketable fine sand from being lost in slurry ponds?',
      answer:
        'Conventional bucket wheel washers lose valuable 75 to 150 micron sand particles through the overflow weir. Our closed-loop system pumps the overflow slurry to an overhead polyurethane hydrocyclone where centrifugal G-force separates fine sand from silt, returning the clean fines onto the dewatering screen.',
    },
    {
      question: 'Can this washing circuit produce plaster and concrete sand matching IS 383 specifications?',
      answer:
        'Yes. By adjusting the hydrocyclone apex nozzle diameter and dewatering screen aperture sizes, the plant precisely controls silt content (under 3% by volume) and fine modulus to produce sand conforming to IS 383 Zone I, II, or III standards.',
    },
    {
      question: 'Can the washed sand be transferred directly into an industrial rotary dryer?',
      answer:
        'Yes. Because our high-frequency dewatering screen reduces sand moisture down to 12-14%, it can be transferred directly via trough belt conveyor into an industrial rotary sand dryer, dramatically cutting fuel consumption in downstream thermal drying.',
      answerNode: (
        <>
          Yes. Because our high-frequency dewatering screen reduces sand moisture down to 12-14%, it can
          be transferred directly via{' '}
          <Link href="/products/industrial-conveyors-spares/belt-conveyors/" className="font-semibold text-[#E10613] hover:underline">
            trough belt conveyor
          </Link>{' '}
          into an{' '}
          <Link href="/products/industrial-rotary-dryers/sand-dryer/" className="font-semibold text-[#E10613] hover:underline">
            industrial rotary sand dryer
          </Link>
          , dramatically cutting fuel consumption in downstream thermal drying.
        </>
      ),
    },
    {
      question: 'What is the required water supply for a 50 TPH sand washing plant?',
      answer:
        'A 50 TPH plant typically circulates 120 to 180 m³/hr of wash water. By integrating settling ponds or a compact lamella thickener, over 80% of this water is continuously recycled, requiring only 15-20% fresh make-up water.',
    },
  ];

  const sandSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${company.siteUrl}/products/sand-washing-plants/#product`,
      name: 'Sand Washing & Mineral Recovery Plants',
      description:
        'Turnkey bucket wheel sand washing plants, hydrocyclone deslimers, and dewatering screens designed for M-sand, silica sand, and river gravel beneficiation.',
      image: `${company.siteUrl}/images/products/mineral-processing/river-sand-washing-plant-lg.webp`,
      brand: {
        '@type': 'Brand',
        name: 'Minerals Solutions',
      },
      manufacturer: {
        '@id': `${company.siteUrl}/#organization`,
      },
      category: 'Mineral Processing Equipment',
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Feed Processing Capacity',
          value: '30 TPH to 200 TPH',
        },
        {
          '@type': 'PropertyValue',
          name: 'Fine Sand Cut-off Point',
          value: 'Down to 75 microns (200 mesh)',
        },
        {
          '@type': 'PropertyValue',
          name: 'Discharge Moisture Rating',
          value: '12% to 15%',
        },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '350000',
        highPrice: '4500000',
        offerCount: '8',
        priceValidUntil: '2027-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        seller: {
          '@id': `${company.siteUrl}/#organization`,
        },
      },
    },
    {
      '@context': 'https://schema.org',
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
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Sand Washing Plants',
          item: `${company.siteUrl}/products/sand-washing-plants/`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={sandSchema} />
      <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
        <Container size="hero">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#E10613]">Home</Link>
            <span>/</span>
            <Link href="/products/" className="hover:text-[#E10613]">Products</Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">Sand Washing Plants</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
                <Waves className="w-3.5 h-3.5" />
                <span>Mineral Recovery &amp; Desliming • Zak GIDC Works</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
                Sand Washing &amp; Mineral Recovery Plants
              </h1>
              <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
                Engineered bucket wheel sand washers, hydrocyclone deslimers, and spiral classifiers designed
                to wash crushed stone, silica sand, and river aggregate. Eliminate clay and silt while recovering
                marketable fine sand down to 75 microns.
              </p>

              {/* AI Citability Definition Passage */}
              <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-[#E10613] text-xs sm:text-sm text-slate-700 leading-relaxed shadow-xs">
                A sand washing plant is an industrial mineral beneficiation circuit engineered to scrub, deslime, classify, and dewater natural river sand, silica sand, and manufactured sand (M-sand) to meet rigorous IS 383 Zone II construction specifications. Fabricated at Zak GIDC, Dahegam, Gujarat by Minerals Solutions, these modular plants integrate heavy bucket wheel sand washers, high-pressure polyurethane-lined hydrocyclone desliming clusters, slurry pumps, and high-frequency dewatering screens with capacities from 30 to 200 TPH. The wet beneficiation circuit effectively strips plastic clay lumps, silt, and ultra-fine contaminants down to 75 microns (200 mesh) while delivering a dewatered sand cake with only 12% to 15% residual moisture ready for immediate loading. Closed-loop water clarification circuits recycle 80% to 85% of process slurry back into the wash basin, providing sustainable, high-tonnage aggregate classification for commercial quarry operators, glass manufacturers, and ready-mix concrete batching facilities across India.
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button href="/request-quote/" variant="primary" size="md">
                  Request Plant Sizing Quote
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
                  <span className="text-neutral-500">Fines Recovery Cut</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#111111] block">12 - 15%</span>
                  <span className="text-neutral-500">Discharge Moisture</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-3xl overflow-hidden border border-[#E7E7EB] bg-white shadow-xl group">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11] 2xl:aspect-[4/3] w-full min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] xl:min-h-[440px] 2xl:min-h-[480px] overflow-hidden bg-neutral-100">
                  <Image
                    src="/images/products/mineral-processing/river-sand-washing-plant-lg.webp"
                    alt="Minerals Solutions bucket wheel sand washing plant at aggregate processing site in Gujarat"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 650px"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-slate-950 text-white border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="min-w-0 flex-1">
                    <span className="font-bold text-sm block truncate">Bucket Wheel &amp; Hydrocyclone Plant</span>
                    <span className="text-neutral-400 text-xs">Manufactured at Zak GIDC, Dahegam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Considerations Section */}
          <div className="bg-white rounded-3xl border border-[#E7E7EB] p-8 sm:p-10 mb-12 shadow-[0_4px_24px_rgba(17,17,17,0.04)] space-y-6">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl font-bold text-[#111111] tracking-tight">
                Design Considerations for Aggregate &amp; Silica Washing
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed">
                Raw mineral feeds contain varying percentages of plastic clays, organic impurities, and micro-silts.
                Selecting the proper washing circuit ensures IS 383 sand compliance without wasting usable fines.
                Washed sand can subsequently be transferred via{' '}
                <Link href="/products/industrial-conveyors-spares/belt-conveyors/" className="font-semibold text-[#E10613] hover:underline">
                  heavy belt conveyors
                </Link>{' '}
                to an{' '}
                <Link href="/products/industrial-rotary-dryers/" className="font-semibold text-[#E10613] hover:underline">
                  industrial rotary dryer
                </Link>{' '}
                for thermal processing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] hover:border-red-200 transition-all space-y-1">
                <span className="text-xs font-bold text-[#111111] block">1. Silt &amp; Clay Fraction</span>
                <p className="text-xs text-neutral-600">
                  High-clay ores require{' '}
                  <Link href="/products/sand-washing-plants/mineral-log-washer/" className="font-semibold text-[#E10613] hover:underline">
                    intensive attrition log washers
                  </Link>{' '}
                  before screening; sandy feeds need{' '}
                  <Link href="/products/sand-washing-plants/bucket-wheel-sand-washer/" className="font-semibold text-[#E10613] hover:underline">
                    bucket wheel desliming
                  </Link>
                  .
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] hover:border-red-200 transition-all space-y-1">
                <span className="text-xs font-bold text-[#111111] block">2. Fines Recovery Target</span>
                <p className="text-xs text-neutral-600">
                  <Link href="/products/sand-washing-plants/hydrocyclone-sand-separator/" className="font-semibold text-[#E10613] hover:underline">
                    Polyurethane hydrocyclone circuits
                  </Link>{' '}
                  capture 75-150 micron sand that standard wheel washers discharge into waste pits.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] hover:border-red-200 transition-all space-y-1">
                <span className="text-xs font-bold text-[#111111] block">3. Water Conservation</span>
                <p className="text-xs text-neutral-600">Closed-loop water recirculation systems reduce fresh water consumption by up to 85% on arid plant sites.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-[#E7E7EB] text-xs text-neutral-700 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#E10613] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#111111]">Engineering Note:</strong> Silt content and water recovery depend on quarry feed variability.
                Our engineering team in{' '}
                <Link href="/manufacturing/" className="font-semibold text-[#E10613] hover:underline">
                  Zak GIDC
                </Link>{' '}
                conducts sieve analysis on your raw sample before determining screen aperture sizes.
              </span>
            </div>
          </div>

          {/* Available Equipment Grid */}
          <div className="mb-16" id="machinery">
            <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-6">
              Available Sand Washing &amp; Separation Equipment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipmentList.map((item) => (
                <div
                  key={item.name}
                  className="relative bg-white rounded-2xl border border-[#E7E7EB] overflow-hidden shadow-[0_4px_24px_rgba(17,17,17,0.04)] hover:shadow-[0_16px_36px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all flex flex-col justify-between group"
                >
                  {/* Product Image Header with Link */}
                  <div className="relative block aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-900 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-red-50 text-[#E10613] border border-red-100">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono font-semibold text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                          {item.capacity}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#E10613] transition-colors leading-snug">
                        <Link href={item.href} className="hover:underline after:absolute after:inset-0">
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                      <span className="text-neutral-600">
                        <strong className="text-[#111111]">Throughput:</strong> {item.capacity}
                      </span>
                      <span aria-hidden="true" className="font-bold text-[#E10613] hover:text-[#b0050f] inline-flex items-center gap-1 shrink-0 group/link">
                        <span>View Specifications</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Comparison Module: Wheel vs Hydrocyclone vs Integrated */}
          <div className="mb-16 bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-[#E10613]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10613]">
                Technology Selection Matrix
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-3">
              Bucket Wheel Washer vs. Hydrocyclone System vs. Integrated Plant
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed max-w-3xl mb-8">
              Compare dewatering performance, fine sand recovery rates down to 75 microns, and water usage trade-offs
              when designing an aggregate or silica sand washing facility:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#E7E7EB] bg-[#F5F5F7]">
                    <th className="p-3.5 font-bold text-[#111111] rounded-l-xl">Performance Metric</th>
                    <th className="p-3.5 font-bold text-[#E10613]">Integrated System (Minerals Solutions)</th>
                    <th className="p-3.5 font-bold text-[#111111]">Bucket Wheel Only</th>
                    <th className="p-3.5 font-bold text-[#111111] rounded-r-xl">Hydrocyclone Only</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="p-3.5 font-semibold text-[#111111]">{row.parameter}</td>
                      <td className="p-3.5 text-neutral-800 bg-red-50/20 font-medium">{row.integratedSystem}</td>
                      <td className="p-3.5 text-neutral-600">{row.standaloneWheel}</td>
                      <td className="p-3.5 text-neutral-600">{row.hydrocycloneOnly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 leading-relaxed">
              <strong className="text-[#111111] block mb-1">Process Specialist Recommendation:</strong>
              Operating a standalone bucket wheel results in 15% to 25% of valuable fine sand (Zone II/III fraction) washing into
              settling ponds. Combining a primary bucket wheel with a secondary polyurethane hydrocyclone and high-frequency
              dewatering screen recovers this lost material while delivering drip-free sand ready for immediate dispatch or
              rotary drying.
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="mb-16">
            <TechnicalSpecTable
              title="Integrated Sand Washing & Dewatering Plant Specifications"
              subtitle="Engineering parameters for integrated bucket wheel and hydrocyclone washing lines."
              modelCode="MS-SWP-200"
              specs={sandWasherSpecs}
              caption="Processing capacities represent dry solids throughput based on 1.6 t/m³ bulk density. Actual throughput varies with feed gradation and clay percentage."
            />
          </div>

          {/* Technical FAQ Section */}
          <div className="mb-16 bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-[#E10613]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10613]">
                Technical Knowledge Base
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-8">
              Frequently Asked Questions (Sand Washing &amp; Beneficiation)
            </h2>

            <div className="max-w-4xl">
              <FaqAccordion
                items={faqs}
                allowMultiple={false}
                defaultOpenIndex={null}
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
                Aggregate Washing Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Plan Your Mineral Recovery Plant
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Connect with our mineral processing engineers at Zak GIDC. We provide flow sheet design,
                water balance calculations, and equipment fabrication tailored to your quarry feed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button href="/request-quote/" variant="primary" size="lg">
                Request Plant Proposal
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
