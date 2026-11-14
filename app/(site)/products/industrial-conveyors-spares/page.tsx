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
  Factory,
  Scale,
  HelpCircle,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TechnicalSpecTable } from '@/components/ui/TechnicalSpecTable';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Industrial Belt Conveyors & Spares | Minerals Solutions',
  },
  description:
    'Engineer heavy trough belt conveyors, pulleys, idlers, forged EN-8 trunnion rollers, and girth gears with precision metallurgy at Zak GIDC, Dahegam works.',
  alternates: {
    canonical: `${company.siteUrl}/products/industrial-conveyors-spares/`,
  },
  openGraph: {
    title: 'Industrial Belt Conveyors & Spares | Minerals Solutions',
    description:
      'Heavy bulk material handling conveyors and precision mechanical spares: forged trunnion rollers, diamond lagged pulleys, idlers, and girth gears from Zak GIDC.',
    url: `${company.siteUrl}/products/industrial-conveyors-spares/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Conveyors & Heavy Spares | Minerals Solutions Gujarat',
    description:
      'Bulk material handling systems and forged alloy steel replacement spares manufactured in Dahegam.',
    images: [defaultTwitterImage],
  },
};

export default function ConveyorsSparesPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');

  const conveyorProducts = [
    {
      name: 'Heavy Troughed Belt Conveyors',
      href: '/products/industrial-conveyors-spares/belt-conveyors/',
      badge: '400 mm to 1600 mm Widths',
      desc: 'Robust channel-iron and fabricated lattice truss conveyors with 20°, 30°, or 35° troughing idlers and M24 rubber belts engineered for harsh mineral transport.',
      specs: 'IS 11592 compliant, 15 to 300 TPH throughput',
    },
    {
      name: 'Forged Steel Dryer Support Rollers & Girth Gears',
      href: '/products/industrial-conveyors-spares/forged-trunnion-rollers/',
      badge: 'EN-8 / EN-9 / 42CrMo4 Forgings',
      desc: 'Precision forged steel trunnion rollers induction hardened to 280-320 BHN, split girth gears, pinions, and cast steel pillow block housings for rotary dryers.',
      specs: '250 mm to 1200 mm OD, up to 60T load per pair',
    },
    {
      name: 'Industrial Bucket Elevators',
      href: '/products/industrial-conveyors-spares/bucket-elevators/',
      badge: 'Centrifugal & Continuous Lifts',
      desc: 'Heavy vertical bucket elevator systems featuring high-tensile rubber belts or forged steel chains, dust-tight casings, and high-wear pressed steel buckets.',
      specs: 'Lifts up to 45m height, 5 to 100 TPH bulk lift',
    },
    {
      name: 'Industrial Screw Conveyors & Feeders',
      href: '/products/industrial-conveyors-spares/screw-conveyors/',
      badge: 'Dust-Tight Powder Transport',
      desc: 'Continuous U-trough and enclosed tubular screw conveyors with sectional continuous flighting, hardened center shafts, and variable-pitch metering screws.',
      specs: '100 mm to 600 mm dia, carbon & SS304/SS316',
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

  const comparisonRows = [
    {
      parameter: 'Manufacturing Metallurgy',
      forgedSteel: 'Forged Alloy Steel (EN-8 / EN-9 / 42CrMo4)',
      castSteel: 'Cast Carbon Steel (Grade 280-520W / ZG35CrMo)',
    },
    {
      parameter: 'Internal Defect & Porosity Risk',
      forgedSteel: 'Zero voids; dense, continuous forged grain flow structure',
      castSteel: 'Prone to internal shrinkage cavities and subsurface blowholes',
    },
    {
      parameter: 'Tensile & Yield Strength',
      forgedSteel: 'High tensile strength (850 to 1,000 MPa)',
      castSteel: 'Moderate tensile strength (600 to 750 MPa)',
    },
    {
      parameter: 'Surface Hardness & Induction Depth',
      forgedSteel: '280 - 320 BHN uniform deep induction hardened case',
      castSteel: 'Variable hardness; prone to surface spalling under shock',
    },
    {
      parameter: 'Dynamic Load Rating per Roller',
      forgedSteel: 'Up to 120 Tons dynamic loading capacity',
      castSteel: 'Up to 60 Tons dynamic loading capacity',
    },
    {
      parameter: 'Engineering Application',
      forgedSteel: 'Heavy industrial rotary dryers, kilns, and ball mills',
      castSteel: 'Light conveyor return drums and non-critical pulleys',
    },
  ];

  const faqs = [
    {
      question: 'Why should rotary dryer support rollers be made from forged steel instead of cast steel?',
      answer:
        'Rotary dryers place severe 24/7 dynamic point-loading on support trunnions. Cast steel rollers often contain hidden subsurface casting porosity that spalls or cracks under thermal fatigue. Forged EN-8/EN-9 rollers offer unbroken grain flow and zero internal porosity, preventing sudden trunnion failure and protecting expensive riding rings.',
    },
    {
      question: 'What are the benefits of diamond rubber lagging on conveyor drive pulleys?',
      answer:
        'Hot-vulcanized diamond grooved rubber lagging increases the friction coefficient between the conveyor belt and drive pulley from 0.20 to over 0.38, preventing belt slippage under wet quarry conditions and channeling water and slurry away from the belt contact zone.',
    },
    {
      question: 'How do your idler rollers resist dust and water ingress in abrasive mineral plants?',
      answer:
        'All Minerals Solutions conveyor idlers incorporate a multi-stage labyrinth seal combined with a protective outer stone shield and deep-groove precision bearings pre-greased for life, ensuring smooth rotation without jamming under fine silica and mineral dust.',
    },
    {
      question: 'Can you fabricate custom replacement trunnions, girth gears, or pulleys to match existing plant drawings?',
      answer:
        'Yes. Our heavy machine shop in Zak GIDC manufactures custom split girth gears, drive pinions, shaft-mounted pulleys, and trunnion assemblies built precisely to sample, worn component dimensions, or engineering drawings.',
    },
  ];

  const conveyorSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${company.siteUrl}/products/industrial-conveyors-spares/#product`,
      name: 'Industrial Troughed Belt Conveyor Systems & Heavy Mechanical Spares',
      description:
        'Heavy industrial belt conveyors, diamond lagged pulleys, precision idlers, forged EN-8/EN-9 trunnion rollers, and girth gears engineered for severe mineral duty.',
      image: `${company.siteUrl}/images/products/conveyor-systems/conveyor-belt-system-truss-lg.webp`,
      brand: {
        '@type': 'Brand',
        name: 'Minerals Solutions',
      },
      manufacturer: {
        '@id': `${company.siteUrl}/#organization`,
      },
      category: 'Conveyor Systems & Material Handling',
      material: 'Forged Alloy Steel (EN-8/EN-9/EN-24) & Heavy Structural Steel IS 2062',
      width: {
        '@type': 'QuantitativeValue',
        value: '400 to 1600',
        unitCode: 'MMT',
      },
      depth: {
        '@type': 'QuantitativeValue',
        value: '250 to 1200',
        unitCode: 'MMT',
      },
      weightCapacity: {
        '@type': 'QuantitativeValue',
        value: '15 to 300',
        unitCode: 'TNE',
      },
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Belt Widths Supported',
          value: '400 mm to 1600 mm',
        },
        {
          '@type': 'PropertyValue',
          name: 'Trunnion Metallurgy',
          value: 'Forged Alloy Steel EN-8 / EN-9 / 42CrMo4 (280-320 BHN)',
        },
        {
          '@type': 'PropertyValue',
          name: 'Design Code',
          value: 'IS 11592 / IS 1891',
        },
        {
          '@type': 'PropertyValue',
          name: 'Non-Destructive Testing',
          value: '100% Ultrasonic Flaw Detection (ASTM A388 Level II)',
        },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '75000',
        highPrice: '2800000',
        offerCount: '15',
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
          name: 'Industrial Conveyors & Spares',
          item: `${company.siteUrl}/products/industrial-conveyors-spares/`,
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
      <JsonLd data={conveyorSchema} />
      <div className="bg-[#F5F5F7] min-h-screen py-10 lg:py-16">
        <Container>
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#E10613]">Home</Link>
            <span>/</span>
            <Link href="/products/" className="hover:text-[#E10613]">Products</Link>
            <span>/</span>
            <span className="text-[#111111] font-semibold">Conveyors &amp; Spares</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E10613] text-xs font-bold uppercase tracking-wider border border-red-100 mb-3">
                <Boxes className="w-3.5 h-3.5" />
                <span>Bulk Transit &amp; Spares • Zak GIDC Works</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
                Industrial Conveyor Systems &amp; Heavy Spares
              </h1>
              <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
                Manufacturer of heavy-duty trough belt conveyors, diamond rubber lagged pulleys, idlers,
                and precision-machined mechanical spares. Engineered at our Zak GIDC works for high-wear quarry,
                mining, and thermal plant applications.
              </p>

              {/* AI Citability Definition Passage */}
              <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-[#E10613] text-xs sm:text-sm text-slate-700 leading-relaxed shadow-xs">
                Industrial bulk conveyors and mechanical spares provide continuous, high-reliability material transfer across cement, mining, sand processing, and fertilizer plants. Fabricated in Zak GIDC, Dahegam, Gujarat by Minerals Solutions in accordance with IS 11592 standards, our material handling range encompasses heavy troughed belt conveyors (500 mm to 1,200 mm belt widths, 20 to 500 TPH), vertical centrifugal bucket elevators, enclosed tubular screw conveyors, and aftermarket replacement spares. We specialize in forged EN-8, EN-9, and 42CrMo4 alloy steel trunnion support rollers, forged tyre rings, custom spur and helical girth gears, diamond-lagged drive pulleys, and CEMA-rated labyrinth-sealed idler rolls. Every forged tyre and roller undergoes ultrasonic flaw detection and induction hardening up to 320 BHN to eliminate pitting and premature fatigue under heavy rotary kiln and drum dryer loads, guaranteeing extended operational lifespans and reduced maintenance downtime for processing facilities across India.
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button href="/request-quote/?product=industrial-conveyors-spares&type=custom-drawing" variant="primary" size="md">
                  Request Custom Roller &amp; Conveyor RFQ
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
                  <span className="text-neutral-500">Forged Roller Steel</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#111111] block">IS 11592</span>
                  <span className="text-neutral-500">Design Standard</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E7E7EB] bg-neutral-900 shadow-xl">
                <Image
                  src="/images/products/conveyor-systems/conveyor-belt-system-truss-lg.webp"
                  alt="Industrial belt conveyor system lattice truss structure fabricated at Minerals Solutions workshop in Zak GIDC"
                  width={1200}
                  height={800}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm p-3 rounded-xl text-white text-xs">
                  <span className="font-bold block">Heavy Lattice Truss Conveyor Assembly</span>
                  <span className="text-neutral-400 text-[11px]">Manufactured at Zak GIDC, Dahegam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plant Integration Notice */}
          <div className="mb-12 p-6 rounded-3xl bg-white border border-[#E7E7EB] shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            <h2 className="text-xl font-bold text-[#111111] mb-2">
              Continuous Bulk Transfer for Mineral &amp; Thermal Circuits
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              Our conveyor systems are integral to moving wet sand discharged from{' '}
              <Link href="/products/sand-washing-plants/" className="font-semibold text-[#E10613] hover:underline">
                sand washing plants
              </Link>{' '}
              directly into continuous{' '}
              <Link href="/products/industrial-rotary-dryers/" className="font-semibold text-[#E10613] hover:underline">
                rotary sand dryers
              </Link>
              , or transferring compost into{' '}
              <Link href="/products/fertilizer-granulation-plants/" className="font-semibold text-[#E10613] hover:underline">
                fertilizer granulation pans
              </Link>
              . Furthermore, our heavy machining shop supplies forged replacement trunnion support rollers and split
              girth gears for rotary dryers across Gujarat.
            </p>
          </div>

          {/* Product Offerings Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-6">
              Conveyor Equipment &amp; Mechanical Replacement Spares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {conveyorProducts.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl border border-[#E7E7EB] p-6 sm:p-7 shadow-[0_4px_24px_rgba(17,17,17,0.04)] hover:shadow-[0_12px_32px_rgba(17,17,17,0.08)] hover:border-red-200 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-red-50 text-[#E10613] text-xs font-mono font-bold uppercase tracking-wider border border-red-100">
                        {p.badge}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E10613] flex items-center justify-center border border-red-100">
                        <Boxes className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#E10613] transition-colors">
                      <Link href={p.href} className="hover:underline">
                        {p.name}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-mono font-semibold">{p.specs}</span>
                    <Link href={p.href} className="font-bold text-[#E10613] hover:underline inline-flex items-center gap-1">
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Comparison Module: Forged vs Cast Rollers */}
          <div className="mb-16 bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-[#E10613]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10613]">
                Metallurgy Selection Matrix
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-3">
              Forged Alloy Steel (EN-8/EN-9) vs. Cast Steel Dryer Trunnion Rollers
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed max-w-3xl mb-8">
              Trunnion support rollers bear the entire dynamic weight of rotating dryer shells (often exceeding 40 to 80 tons).
              Selecting the appropriate metallurgy directly impacts plant uptime and tyre life:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#E7E7EB] bg-[#F5F5F7]">
                    <th className="p-3.5 font-bold text-[#111111] rounded-l-xl">Engineering Parameter</th>
                    <th className="p-3.5 font-bold text-[#E10613]">Forged Alloy Steel EN-8/EN-9 (Minerals Solutions)</th>
                    <th className="p-3.5 font-bold text-[#111111] rounded-r-xl">High-Grade Cast Steel (Industry Standard)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="p-3.5 font-semibold text-[#111111]">{row.parameter}</td>
                      <td className="p-3.5 text-neutral-800 bg-red-50/20 font-medium">{row.forgedSteel}</td>
                      <td className="p-3.5 text-neutral-600">{row.castSteel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 leading-relaxed">
              <strong className="text-[#111111] block mb-1">Chief Metallurgist Recommendation:</strong>
              Cast steel support rollers frequently suffer from subsurface micro-shrinkage. Under continuous dynamic rolling contact,
              these voids lead to surface spalling, flat spots, and severe vibration. Minerals Solutions mandates forged EN-8 or EN-9
              alloy steel with 100% ultrasonic defect scanning for all dryer trunnion assemblies.
            </div>
          </div>

          {/* Conveyor Specifications Table */}
          <div className="mb-12">
            <TechnicalSpecTable
              title="Industrial Troughed Belt Conveyor Specifications"
              subtitle="Engineering parameters for channel and lattice frame belt conveyor installations."
              modelCode="MS-BC-SERIES"
              specs={conveyorSpecs}
              caption="Conveyor length, motor drive ratings, and belt troughing angles (20°/30°/35°) are calculated based on bulk density and transfer throughput."
            />
          </div>

          {/* Trunnion Support Roller Specifications Table */}
          <div className="mb-16">
            <TechnicalSpecTable
              title="Forged Steel Trunnion Support Roller Assembly Specifications"
              subtitle="Precision mechanical spares for rotary dryers, rotary calciners, and kilns."
              modelCode="MS-TR-SERIES"
              specs={trunnionSpecs}
              caption="Assemblies include forged roller tyre, ground shaft journal, spherical roller bearings, and heavy split plummer block housings."
            />
          </div>

          {/* Technical FAQ Section */}
          <div className="mb-16 bg-white rounded-3xl border border-[#E7E7EB] p-6 sm:p-10 shadow-[0_4px_24px_rgba(17,17,17,0.04)]">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-[#E10613]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E10613]">
                Mechanical Spares &amp; Conveyors FAQs
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-8">
              Frequently Asked Questions (Conveyors &amp; Spares)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#F5F5F7] border border-[#E7E7EB] space-y-2"
                >
                  <h3 className="text-sm font-bold text-[#111111] leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E10613] font-bold">
                Conveyor &amp; Spares Fabrication
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Need Replacement Spares or Custom Conveyors?
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Connect with our mechanical engineering workshop in Zak GIDC, Dahegam. We supply replacement
                support rollers, pulleys, girth gears, and complete conveyor structures with rapid turnaround.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button href="/request-quote/?product=industrial-conveyors-spares&type=custom-drawing" variant="primary" size="lg">
                Submit Drawing / RFQ for Custom Rollers &amp; Conveyors
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
