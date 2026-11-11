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
  HelpCircle,
  Scale,
  Maximize2,
  Zap,
  RotateCw,
  Sparkles,
  Cog,
  Wrench,
  Boxes,
  Waves,
  FlaskConical,
  Filter,
  Wind,
  ShieldAlert,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { company } from '@/data/company';
import { defaultOgImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Stainless Steel Chemical Powder Dryer | Minerals Solutions',
  },
  description: 'Order sanitary stainless chemical powder dryers (SS304/SS316) with heat exchangers & bag filters. Fabricated in Zak GIDC for contamination-free drying.',
  alternates: {
    canonical: 'https://mineralssolution.in/products/industrial-rotary-dryers/chemical-powder-dryer/',
  },
  openGraph: {
    title: 'Stainless Steel Chemical Powder Dryer | Minerals Solutions',
    description:
      'Indirect stainless steel chemical powder dryers (SS304/SS316) with heat exchangers & bag filters. Fabricated in Zak GIDC for contamination-free drying.',
    url: `${company.siteUrl}/products/industrial-rotary-dryers/chemical-powder-dryer/`,
    siteName: 'Minerals Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stainless Steel Chemical Powder Dryer | Minerals Solutions',
    description:
      'Indirect stainless steel chemical powder dryers (SS304/SS316) with heat exchangers & bag filters. Fabricated in Zak GIDC for contamination-free drying.',
    images: [defaultTwitterImage],
  },
};

export default function ChemicalPowderDryerPage() {
  const primaryPhone = company.telephones[0] || '+91 63524 53050';
  const cleanPhone = primaryPhone.replace(/\s+/g, '');
  const rfqLink = '/request-quote/?product=chemical-powder-dryer';
  const whatsappUrl = `https://wa.me/916352453050?text=${encodeURIComponent(
    'Hello Minerals Solutions, I would like to request an engineering quotation and drawing for a Stainless Steel Chemical Powder Dryer with Heat Exchanger & Bag Filter.'
  )}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Industrial Rotary Dryers', href: '/products/industrial-rotary-dryers/' },
    { label: 'Chemical Powder Dryer', href: '/products/industrial-rotary-dryers/chemical-powder-dryer/' },
  ];

  const models = [
    {
      model: 'MS-CPD-500',
      capacity: '300 – 500 kg/hr',
      drumDia: '900 mm',
      length: '6.0 m',
      airflow: '1,500 m³/hr',
      filterBags: '12 Bags',
      motorPower: '5 HP (3.7 kW)',
      tempRange: '80°C – 140°C',
    },
    {
      model: 'MS-CPD-1500',
      capacity: '1,000 – 1,500 kg/hr',
      drumDia: '1,200 mm',
      length: '8.0 m',
      airflow: '2,200 m³/hr',
      filterBags: '18 Bags',
      motorPower: '10 HP (7.5 kW)',
      tempRange: '90°C – 160°C',
    },
    {
      model: 'MS-CPD-3000',
      capacity: '2,500 – 3,500 kg/hr (3 TPH)',
      drumDia: '1,500 mm',
      length: '10.5 m',
      airflow: '3,000 m³/hr',
      filterBags: '24 Bags',
      motorPower: '20 HP (15 kW)',
      tempRange: '100°C – 180°C',
    },
    {
      model: 'MS-CPD-5000',
      capacity: '4,500 – 5,500 kg/hr (5 TPH)',
      drumDia: '1,800 mm',
      length: '12.0 m',
      airflow: '5,500 m³/hr',
      filterBags: '36 Bags',
      motorPower: '30 HP (22 kW)',
      tempRange: '100°C – 180°C',
    },
    {
      model: 'MS-CPD-10000',
      capacity: '8,000 – 10,000 kg/hr (10 TPH)',
      drumDia: '2,200 mm',
      length: '15.0 m',
      airflow: '9,000 m³/hr',
      filterBags: '48 Bags',
      motorPower: '50 HP (37 kW)',
      tempRange: '100°C – 200°C',
    },
  ];

  const metallurgyOptions = [
    {
      grade: 'AISI 304 / 304L Stainless Steel',
      badge: 'Standard Chemical Grade',
      chemistry: '18% Cr / 8% Ni / Low Carbon',
      surface: '2B Mill Finish or 180-Grit Satin Polish',
      applications: 'Borax decahydrate, boric acid powder, sodium carbonate, sulfate crystals, agro-chemicals, and animal feed mineral supplements.',
      corrosionProof: 'Excellent atmospheric resistance, organic acid tolerance, and zero discoloration of snow-white crystalline compounds.',
    },
    {
      grade: 'AISI 316 / 316L Stainless Steel',
      badge: 'Acid & Halide Resistant',
      chemistry: '16% Cr / 10% Ni / 2.5% Molybdenum',
      surface: '240-Grit Mirror Finish (Ra < 0.4 µm)',
      applications: 'Chloride salts, ammonium sulfate, citric acid, fine pharmaceutical intermediates, and bleaching clays where pitting corrosion must be strictly prevented.',
      corrosionProof: 'Molybdenum alloying imparts extreme resistance to chloride pitting, crevice cracking, and dilute inorganic acid vapors.',
    },
    {
      grade: 'Hastelloy C-276 / Duplex 2205 (Custom)',
      badge: 'Severe Corrosive Service',
      chemistry: 'Nickel-Chromium-Molybdenum Alloy',
      surface: 'Electro-polished Sanitary Finish',
      applications: 'Aggressive inorganic salts, wet chlorine-bearing precipitates, and severe acidic slurries operating continuously above 150°C.',
      corrosionProof: 'Unsurpassed immunity to stress corrosion cracking, oxidizing acid media, and localized pitting.',
    },
  ];

  const recoveryModules = [
    {
      title: 'Indirect Shell-and-Tube Heat Exchanger',
      badge: 'Clean Air Isolation',
      desc: 'Seamless stainless steel heat exchanger bundles ensure hot combustion flue gases (from coal, gas, or biomass) transfer thermal energy exclusively via convective tube walls. Process drying air remains 100% sterile, particulate-free, and sulfur-free.',
      specs: 'Max clean air temp: 180°C | Tube metallurgy: SS304 / Seamless Carbon Steel with SS contact plate.',
    },
    {
      title: 'High-Efficiency Drop Box Cyclone Separator',
      badge: 'Primary Recovery (90%–94%)',
      desc: 'Tangential cyclonic drop chamber constructed from heavy-gauge stainless steel. Captures coarse powder particles and crystalline grains directly from the drum exhaust before the air stream enters the baghouse, minimizing bag blinding.',
      specs: 'Rotary airlock discharge valve | Removable inspection port with sanitary silicone gasket seals.',
    },
    {
      title: 'Pulse-Jet Reverse Air Baghouse Filter',
      badge: 'Final Polishing (99.8% Capture)',
      desc: 'Fully enclosed stainless steel casing housing 24 to 48 antistatic polyester/PTFE membrane filter bags. Timed sequential high-pressure compressed air pulses dislodge fine powder caking back into the recovery hopper, keeping emission below 10 mg/Nm³.',
      specs: 'Differential pressure gauge | Venturi nozzles | 3,000 to 9,000 m³/hr heavy ID centrifugal exhaust blower.',
    },
  ];

  const chemicalApplications = [
    {
      name: 'Borax & Boric Acid Crystals',
      temp: '95°C – 120°C controlled drying',
      desc: 'Dehydration of borax decahydrate and boric chemical cake without thermal crystal degradation or loss of structural water molecules.',
    },
    {
      name: 'Sodium Sulfate & Chloride Salts',
      temp: '110°C – 150°C high-throughput',
      desc: 'Rapid free-moisture stripping for detergent fillers, industrial brine recovery, and synthetic chemical salt processing in Dahej & Kutch.',
    },
    {
      name: 'Pharma Intermediates & Fine API Salts',
      temp: '80°C – 130°C sanitary cleanroom',
      desc: 'Sanitary Ra < 0.4 µm mirror-polished contact surfaces preventing batch cross-contamination and satisfying strict FDA cGMP requirements.',
    },
    {
      name: 'Precipitated Calcium Carbonate & Clays',
      temp: '120°C – 170°C de-agglomeration',
      desc: 'Drying ultrafine chemical powders with integrated internal cage flights that break up damp lumps into free-flowing micronized dust.',
    },
    {
      name: 'Agro-Chemical Fungicides & Pesticides',
      temp: '90°C – 140°C non-spark design',
      desc: 'Explosion-vented indirect systems handling organic active ingredients, bio-stimulant salts, and water-dispersible pesticide granules.',
    },
    {
      name: 'Titanium Dioxide & White Pigments',
      temp: '110°C – 160°C zero soot guarantee',
      desc: 'Ensuring zero soot discoloration, soot speck contamination, or flue gas acidification of high-value optical white pigment powders.',
    },
  ];

  const faqs = [
    {
      question: 'How does an indirect heat exchanger eliminate flue-gas contamination?',
      answer:
        'In direct rotary dryers, material contacts raw combustion gases containing fly ash, unburnt carbon soot, and sulfur dioxide. In Minerals Solutions indirect chemical dryers, combustion gases pass through the inner tubes of an external heat exchanger and vent to an isolated stack. Clean ambient air is drawn across the outside of these tubes, heated to 120°C–180°C, and introduced into the rotating drum. The chemical powder touches only pure, sterile heated air, preserving 100% chemical purity and snow-white color.',
    },
    {
      question: 'What is the filtration efficiency of the integrated pulse-jet baghouse collector?',
      answer:
        'Our integrated 24 to 48 bag pulse-jet collector achieves over 99.8% powder recovery on particles down to 2 microns, keeping particulate stack emission well below 10 mg/Nm³ in compliance with Gujarat Pollution Control Board (GPCB) norms. Automatic electronic timers trigger solenoid valves, pulsing 5 to 6 bar compressed air through Venturi nozzles to continuously clean the filter bags during active production.',
    },
    {
      question: 'Can the entire drum be manufactured from SS316 for acidic chloride applications?',
      answer:
        'Yes. We offer complete solid SS316 / SS316L fabrication where the entire rotating shell, internal lifting flights, discharge hood, and ducting are formed from certified 316-grade stainless steel. For cost optimization on non-corrosive outer surfaces, we also engineer carbon steel drums with thick SS304/SS316 internal contact liners.',
    },
    {
      question: 'What surface finish standards are maintained for pharmaceutical intermediates?',
      answer:
        'For pharmaceutical chemical intermediates and cosmetic-grade powders, our Zak GIDC workshops grind and polish all internal welds flush, finishing contact plates to 240-grit mirror finish (Ra < 0.4 µm). This eliminates microscopic crevices where wet powders could stagnate, ferment, or cause microbial cross-contamination between product batches.',
    },
    {
      question: 'What is the indicative pricing and manufacturing lead time for MS-CPD systems?',
      answer:
        'Our standard 1 to 3 TPH stainless steel chemical powder dryer with external heat exchanger, cyclone, and pulse-jet baghouse starts at approximately ₹ 21,50,000 for SS304 contact parts. Full turnkey lines with SS316 metallurgy and automated natural gas burners range from ₹ 32,00,000 to ₹ 52,00,000 with a typical fabrication lead time of 6 to 8 weeks.',
    },
  ];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${company.siteUrl}/products/industrial-rotary-dryers/chemical-powder-dryer/#product`,
    name: 'Stainless Steel Chemical Powder & Borax Dryer',
    model: 'MS-CPD-3000 Series',
    description:
      'Indirect stainless steel chemical powder and borax rotary dryers (SS304/SS316) with shell-and-tube heat exchangers & pulse-jet baghouse filters. Fabricated in Zak GIDC, Dahegam for 100% contamination-free drying.',
    image: `${company.siteUrl}/images/products/rotary-dryers/borax-dryer-heat-exchanger-bag-filter-lg.webp`,
    brand: {
      '@type': 'Brand',
      name: 'Minerals Solutions',
    },
    manufacturer: {
      '@id': `${company.siteUrl}/#organization`,
    },
    category: 'Thermal Drying Systems',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '2150000',
      highPrice: '5200000',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@id': `${company.siteUrl}/#organization`,
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Heating Method',
        value: 'Indirect Clean Air Convection via Shell-and-Tube Heat Exchanger',
      },
      {
        '@type': 'PropertyValue',
        name: 'Contact Metallurgy',
        value: 'AISI 304, AISI 316, or AISI 316L Stainless Steel',
      },
      {
        '@type': 'PropertyValue',
        name: 'Dust Collection System',
        value: 'Pulse-Jet Reverse Air Baghouse Filter (99.8% Recovery, <10 mg/Nm³)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Operating Temperature',
        value: '80°C to 180°C Precision Thermocouple Regulated',
      },
      {
        '@type': 'PropertyValue',
        name: 'Throughput Capacity',
        value: '300 kg/hr to 10 TPH',
      },
      {
        '@type': 'PropertyValue',
        name: 'Manufacturing Works',
        value: '10, Shyam Estate, Zak GIDC, Dahegam, Gandhinagar - 382330, Gujarat',
      },
    ],
  };

  const breadcrumbSchema = {
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
        name: 'Industrial Rotary Dryers',
        item: `${company.siteUrl}/products/industrial-rotary-dryers/`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Chemical Powder Dryer',
        item: `${company.siteUrl}/products/industrial-rotary-dryers/chemical-powder-dryer/`,
      },
    ],
  };

  const faqSchema = {
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
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main className="bg-white text-slate-900 min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-slate-200 bg-slate-50/80">
          <Container>
            <Breadcrumbs items={breadcrumbs} />
          </Container>
        </div>

        {/* Hero Section */}
        <section className="relative pt-8 pb-14 lg:pt-12 lg:pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-slate-100/60 via-white to-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Headers, Badges & CTAs */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold tracking-wide uppercase mb-4">
                  <FlaskConical className="w-3.5 h-3.5 text-[#DA020D]" />
                  Indirect Thermal System & Zero Flue-Gas Contamination
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15] mb-5">
                  Stainless Steel <span className="text-[#DA020D]">Chemical Powder</span> & Mineral Salt Dryers
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
                  Sanitary industrial rotary drying systems engineered with <strong>AISI 304 / 316 stainless steel</strong> contact barrels, external shell-and-tube heat exchangers, and 99.8% recovery pulse-jet baghouse filters. Designed for contamination-free moisture removal in borax, chemical salts, pharmaceutical intermediates, and fine pigments across Ankleshwar, Dahej, and Vatva corridors.
                </p>

                {/* Pricing & Commercial Badge */}
                <div className="p-4 rounded-xl bg-slate-900 text-white mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Indicative Starting Price (SS304 Contact Parts)
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-0.5">
                      ₹ 21,50,000 <span className="text-xs font-normal text-slate-300">/ Piece</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-300 border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-4">
                    <div>Includes Heat Exchanger & Cyclone Drop Box</div>
                    <div className="text-emerald-400 font-semibold mt-0.5">Complete SS316 Turnkey Plants Available</div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-xl bg-slate-100/80 border border-slate-200 mb-8">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#DA020D] tracking-tight">
                      100%
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Flue-Gas Isolated
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      99.8%
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Powder Recovery
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      SS316
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Acid Metallurgy
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      &lt;10 mg
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase mt-0.5">
                      Stack Emission/Nm³
                    </div>
                  </div>
                </div>

                {/* Conversion CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    href={rfqLink}
                    size="lg"
                    variant="primary"
                    className="shadow-md shadow-red-600/10 font-bold"
                    icon={<FileText className="w-4 h-4" />}
                  >
                    Request Chemical Sizing Quote
                  </Button>

                  <Button
                    href={whatsappUrl}
                    external
                    size="lg"
                    variant="outline"
                    className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold"
                    icon={<Phone className="w-4 h-4 text-emerald-600" />}
                  >
                    WhatsApp Chemical Desk
                  </Button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    240-Grit Ra &lt; 0.4 µm Polish
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Pulse-Jet Baghouse Included
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    GPCB Pollution Compliant
                  </span>
                </div>
              </div>

              {/* Right Column: Real Equipment Photograph */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                  <div className="relative aspect-[4/3] w-full bg-slate-900">
                    <Image
                      src="/images/products/rotary-dryers/borax-dryer-heat-exchanger-bag-filter-lg.webp"
                      alt="Stainless Steel Chemical Powder Dryer with Shell-and-Tube Heat Exchanger and Pulse-Jet Bag Filter manufactured at Minerals Solutions Zak GIDC Dahegam facility" width={800} height={600}
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 550px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs uppercase tracking-wider font-bold text-amber-400 mb-1">
                        Verified Chemical Plant Deployment
                      </div>
                      <div className="text-sm font-semibold text-slate-100">
                        Borax & Chemical Powder Dryer with Integrated Baghouse
                      </div>
                    </div>
                  </div>

                  {/* Micro Specs Card Strip */}
                  <div className="p-4 bg-slate-900 text-slate-200 text-xs divide-y divide-slate-800">
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Design Flowrate</span>
                      <span className="font-semibold text-white">3,000 m³/hr Clean Airflow</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Baghouse Elements</span>
                      <span className="font-semibold text-white">24 Pulse-Jet Antistatic Bags</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Operating Temperature</span>
                      <span className="font-semibold text-amber-400">Up to 120°C – 180°C Modulated</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Manufacturing Works</span>
                      <span className="font-semibold text-white">10, Shyam Estate, Dahegam, Gujarat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Top-30% Citability Definition Block (Targeted for AI Overviews & Answer Engines) */}
        <section className="py-8 bg-slate-50 border-b border-slate-200">
          <Container>
            <div className="p-6 rounded-xl bg-white border-l-4 border-l-[#DA020D] border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-[#DA020D] shrink-0 mt-0.5" />
                <div className="text-slate-800 text-sm sm:text-base leading-relaxed">
                  <strong className="text-slate-950 font-semibold">What is a stainless steel chemical powder dryer? </strong>
                  A stainless steel chemical powder rotary dryer is an indirect continuous thermal processing unit engineered for sanitary, contamination-free moisture extraction from active pharmaceutical ingredients, fine specialty chemicals, catalysts, and food-grade mineral powders. Fabricated at Zak GIDC, Dahegam utilizing polished AISI SS 304 or SS 316 contact surfaces (mirror finish Ra below 0.4 µm), the drum isolates sensitive materials from combustion byproducts by transferring heat through an external thermal jacket, steam tube bundle, or indirect flue heat exchanger. Operating under continuous negative pressure with Teflon or mechanical face seals, it prevents fugitive dust emissions while processing 200 kg/hr to 8 TPH. Evaporation proceeds gently at controlled product temperatures between 60°C and 180°C, lowering powder moisture from 25% down to under 0.1% with complete recovery of volatile vapors via an integrated reverse-pulse stainless baghouse filtration system.
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Indirect Thermal Convection Section */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Sanitary Process Integrity
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Indirect Thermal Convection: Zero Flue-Gas Contamination
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                How our isolated heat exchanger loop solves the primary failure point of traditional rotary kilns: soot particles, acid gases, and discoloration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                      01
                    </span>
                    <h3 className="text-lg font-bold text-slate-950">
                      Primary Combustion Loop (Isolated Flue Gases)
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Combustion of coal, natural gas, or agro-waste occurs in an independent refractory furnace. The raw flue gas at 600°C–800°C passes through the interior of seamless heat exchanger tubes, exchanging thermal energy through metal conduction, before discharging directly to an isolated chimney stack without touching the product.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">
                      02
                    </span>
                    <h3 className="text-lg font-bold text-slate-950">
                      Secondary Process Loop (Sterile Heated Ambient Air)
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Fresh ambient air is drawn through pre-filtration screens across the external tube surface of the heat exchanger, rising to 120°C–180°C. This 100% clean, odorless hot air enters the stainless steel drum, absorbing moisture vapor from the tumbling chemical crystals without creating acid chlorides or carbon speckles.
                  </p>
                </div>
              </div>

              {/* Technical Callout Card */}
              <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 relative">
                <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2">
                  Chemical Purity Assurance Standards
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Why Direct-Fired Dryers Fail Chemical QA Testing
                </h4>
                <ul className="space-y-3 text-xs text-slate-300 mb-6">
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Soot & Ash Specks:</strong> Direct coal/wood flue gases deposit black ash into white chemical powders, causing immediate batch rejection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Sulfur Contamination:</strong> SO2 in flue gases reacts with basic moisture films, creating unwanted sulfate impurities and lowering pH.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Minerals Solutions Guarantee:</strong> 100% isolated secondary clean air preserves pure white color and conforms to pharmaceutical pharmacopeia standards.</span>
                  </li>
                </ul>
                <Button
                  href={rfqLink}
                  size="md"
                  variant="primary"
                  className="font-bold text-white shadow-md shadow-red-600/10"
                >
                  Consult Chemical Project Engineer
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Metallurgy & Surface Finish Options */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Sanitary Stainless Steels
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Metallurgy & Surface Finish Options (SS304, SS316, Hastelloy)
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Selecting the exact alloy grade and surface polish to match chemical pH, chloride content, and abrasive wear parameters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {metallurgyOptions.map((opt) => (
                <div
                  key={opt.grade}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DA020D] bg-red-50 border border-red-200 px-2.5 py-1 rounded-full inline-block mb-3">
                      {opt.badge}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 mb-3">{opt.grade}</h3>

                    <div className="space-y-2 text-xs mb-4">
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500 font-medium">Chemical Composition:</span>
                        <span className="text-slate-900 font-semibold text-right">{opt.chemistry}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500 font-medium">Surface Polish:</span>
                        <span className="text-slate-900 font-semibold text-right">{opt.surface}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {opt.applications}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 text-xs text-emerald-800 font-medium bg-emerald-50/50 p-2.5 rounded-lg">
                    {opt.corrosionProof}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Technical Specifications & Airflow Parameters (MS-CPD Series) */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Scale className="w-4 h-4" />
                Engineering Specification Matrix
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Technical Specifications & Airflow Parameters (MS-CPD Series)
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Standard equipment configurations featuring integrated shell-and-tube heat exchangers and pulse-jet dust collectors.
              </p>
            </div>

            {/* Responsive Engineering Specification Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-sm">
              <table className="w-full text-left text-sm text-slate-800 border-collapse">
                <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Model Series</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Dry Powder Capacity</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Drum Diameter</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Total Length</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Clean Airflow</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Baghouse Elements</th>
                    <th className="py-4 px-4 sm:px-6 border-b border-slate-800">Geared Motor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-normal">
                  {models.map((item, idx) => (
                    <tr
                      key={item.model}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/70 hover:bg-slate-100/70'}
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-950 font-mono text-xs">
                        {item.model}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#DA020D]">
                        {item.capacity}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">{item.drumDia}</td>
                      <td className="py-3.5 px-4 sm:px-6">{item.length}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-slate-700">{item.airflow}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-700 font-semibold">{item.filterBags}</td>
                      <td className="py-3.5 px-4 sm:px-6">{item.motorPower}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <p>
                * Ingest dust loading: 10 g/Nm³ | Clean stack emission: &lt;10 mg/Nm³ | Shell rotation: 2 to 6 RPM with variable frequency drive (VFD).
              </p>
              <Link
                href={rfqLink}
                className="font-bold text-[#DA020D] hover:underline inline-flex items-center gap-1"
              >
                Request custom airflow calculation <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Container>
        </section>

        {/* Integrated Heat Exchanger & Pulse-Jet Dust Collector */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/60">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Filter className="w-4 h-4" />
                Air Pollution Control & Product Recovery
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Integrated Heat Exchanger & Pulse-Jet Dust Collector
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Recovering 99.8% of valuable fine chemical powders with high-efficiency particulate recovery circuits compliant with industrial safety standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recoveryModules.map((mod) => (
                <div
                  key={mod.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full inline-block mb-3">
                      {mod.badge}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 mb-2">{mod.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{mod.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-mono">
                    {mod.specs}
                  </div>
                </div>
              ))}
            </div>

            {/* Pollution Control Proof Callout */}
            <div className="mt-8 p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
              <Wind className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>GPCB & Environmental Compliance:</strong> Every Minerals Solutions pulse-jet collector includes an acrylic needle-felt or PTFE-coated bag arrangement with differential pressure manometer ports, ensuring guaranteed compliance with the 10 mg/Nm³ emission limits mandated in GIDC chemical zones.
              </div>
            </div>
          </Container>
        </section>

        {/* Chemical Applications Grid */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <Boxes className="w-4 h-4" />
                Target Chemical Sectors
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Chemical Applications (Borax, Sulphates, Industrial Salts, Fine Clays)
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Customized flight cascading geometry handling fine powders, crystalline hydrates, and hygroscopic chemical salts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {chemicalApplications.map((app) => (
                <div
                  key={app.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DA020D] flex items-center justify-center font-bold text-sm mb-3">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-1">{app.name}</h3>
                  <div className="text-xs font-semibold text-[#DA020D] mb-2">{app.temp}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{app.desc}</p>
                </div>
              ))}
            </div>

            {/* Regional Corridor Callout */}
            <div className="mt-8 p-5 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm flex items-start gap-3 border border-slate-200">
              <Factory className="w-5 h-5 text-[#DA020D] shrink-0 mt-0.5" />
              <div>
                <strong>Direct Chemical Zone Support:</strong> Engineered at Zak GIDC, Dahegam, with rapid dispatch and commissioning across Gujarat chemical estates: Ankleshwar, Panoli, Dahej PCPIR, Vatva, Naroda, Nandesari, and Vapi.
              </div>
            </div>
          </Container>
        </section>

        {/* Internal Linking Triangle: Parent Hub, 2 Sibling Spokes, 1 Cross-Pillar Machine */}
        <section className="py-14 lg:py-20 border-b border-slate-200 bg-slate-50/70">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5 font-mono">
                  <Layers className="w-4 h-4" />
                  Engineered Plant Integration & Sibling Equipment
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Turnkey Plant Integration & Complementary Systems
                </h2>
                <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
                  Connect this unit into a continuous, high-efficiency manufacturing line with matched upstream and downstream equipment.
                </p>
              </div>
              <Link
                href="/products/industrial-rotary-dryers/"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#DA020D] transition-colors shrink-0"
              >
                Explore Full Rotary Dryers & Thermal Systems Hub <ChevronRight className="w-4 h-4 text-[#DA020D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sibling Spoke 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider mb-2">
                    Sibling Dryer Line
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Triple Pass Rotary Drum Dryer Line
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Compact high-efficiency concentric drum for mineral powders and granular crystals.
                  </p>
                </div>
                <Link
                  href="/products/industrial-rotary-dryers/triple-pass-dryer/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  View Machine Specifications <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Sibling Spoke 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-2">
                    Sibling Dryer Line
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Industrial Rotary Sand Dryer Unit
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Direct-fired heavy rotary drum for continuous drying of high-tonnage mineral aggregates.
                  </p>
                </div>
                <Link
                  href="/products/industrial-rotary-dryers/sand-dryer/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  View Machine Specifications <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Cross-Pillar Machine */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider mb-2">
                    Complementary Material Handling
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Industrial Screw Conveyor Systems
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Dust-tight enclosed powder transfer auger for contamination-free dried powder conveyance.
                  </p>
                </div>
                <Link
                  href="/products/industrial-conveyors-spares/screw-conveyors/"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  Explore Complementary Machine <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-14 lg:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#DA020D] mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                Chemical Engineering Q&A
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Frequently Asked Questions on Sanitary Chemical Drying
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Technical inquiries answered by our chemical process machinery design division.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-6 sm:py-8">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 flex items-start gap-3">
                    <span className="text-[#DA020D] font-mono text-base font-extrabold shrink-0 mt-0.5">
                      Q{idx + 1}.
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* RFQ Call-To-Action */}
        <section className="py-14 lg:py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#DA020D_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
                <FlaskConical className="w-3.5 h-3.5 text-[#DA020D]" />
                Direct Manufacturer Procurement ,  Zak GIDC Dahegam Works
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
                Request a Custom Chemical Dryer Drawing & Quotation
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                Submit your feed powder MSDS, inlet moisture %, target dry moisture, and corrosive properties. Our senior engineering team provides detailed equipment drawings, heat exchanger sizing, and competitive ex-factory pricing.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={rfqLink}
                  size="lg"
                  variant="primary"
                  className="px-8 font-bold shadow-lg shadow-red-900/30"
                  icon={<FileText className="w-4 h-4" />}
                >
                  Request Chemical Sizing Quote
                </Button>

                <Button
                  href={`tel:${cleanPhone}`}
                  external
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-100 hover:bg-slate-900 font-semibold px-8"
                  icon={<Phone className="w-4 h-4 text-emerald-400" />}
                >
                  Call Engineering Desk: {primaryPhone}
                </Button>
              </div>

              <div className="mt-8 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
                <span>📍 Works: 10, Shyam Estate, Zak GIDC, Dahegam, Gandhinagar</span>
                <span>📋 GSTIN: {company.gstin}</span>
                <span>⏱️ Factory Trial Inspection Welcomed</span>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

