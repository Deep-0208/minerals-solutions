import type { CanonicalRoute } from '../types/route';

const SITE_URL = 'https://mineralssolution.in';

export const routes: CanonicalRoute[] = [
  // 1. Home
  {
    path: '/',
    label: 'Home',
    priority: 1.0,
    changeFreq: 'weekly',
    navGroup: 'home',
    breadcrumbTrail: [{ label: 'Home', href: '/' }],
    seo: {
      title: 'Minerals Solutions | Industrial Rotary Dryers & Plants',
      description: 'Minerals Solutions is a leading Gujarat manufacturer of industrial rotary dryers, sand washing plants, fertilizer granulators, and heavy conveyor systems.',
      keywords: ['rotary dryer manufacturer ahmedabad', 'sand washing plant gujarat', 'fertilizer granulator plant', 'industrial conveyor belt system'],
      canonical: `${SITE_URL}/`,
    },
  },

  // 2. Company & Trust
  {
    path: '/about/',
    label: 'About Us',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'company',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about/' },
    ],
    seo: {
      title: 'About Minerals Solutions | Zak GIDC Dahegam Facility',
      description: 'Discover Minerals Solutions: ISO-compliant heavy fabrication workshop in Zak GIDC, Dahegam, engineering high-efficiency thermal dryers and mineral plants.',
      keywords: ['minerals solutions dahegam', 'rotary dryer factory zak gidc', 'industrial plant fabricator ahmedabad'],
      canonical: `${SITE_URL}/about/`,
    },
  },
  {
    path: '/contact/',
    label: 'Contact Us',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'company',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Contact Us', href: '/contact/' },
    ],
    seo: {
      title: 'Contact Minerals Solutions | Plant Location & Hotlines',
      description: 'Get in touch with Minerals Solutions at Zak GIDC, Dahegam, Gandhinagar. Call +91 6352453050 or email sales@mineralssolution.in for machine quotes.',
      keywords: ['minerals solutions contact', 'rotary dryer manufacturer phone number', 'zak gidc dahegam plant'],
      canonical: `${SITE_URL}/contact/`,
    },
  },
  {
    path: '/request-quote/',
    label: 'Request a Quote',
    priority: 0.9,
    changeFreq: 'monthly',
    navGroup: 'company',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Request Quote', href: '/request-quote/' },
    ],
    seo: {
      title: 'Request a Quote | Minerals Solutions Machinery Pricing',
      description: 'Request a custom engineering quote for rotary dryers, sand washing plants, pan granulators, or conveyor systems directly from our Dahegam workshop.',
      keywords: ['rotary dryer price quote', 'sand washing plant cost estimate', 'fertilizer machine rfq'],
      canonical: `${SITE_URL}/request-quote/`,
    },
  },

  // 3. Products Hub
  {
    path: '/products/',
    label: 'Products',
    priority: 0.9,
    changeFreq: 'weekly',
    navGroup: 'company',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
    ],
    seo: {
      title: 'Industrial Machinery & Equipment | Minerals Solutions',
      description: 'Browse the complete manufacturing roster of Minerals Solutions: rotary drum dryers, sand washing lines, disc granulators, and material handling systems.',
      keywords: ['industrial machinery catalog', 'mineral processing machinery ahmedabad', 'thermal drying systems india'],
      canonical: `${SITE_URL}/products/`,
    },
  },

  // 4. Pillar 1: Rotary Dryers & Industrial Furnaces
  {
    path: '/products/rotary-dryers/',
    label: 'Rotary Dryers',
    priority: 0.95,
    changeFreq: 'weekly',
    navGroup: 'dryers',
    pillarPath: '/products/rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Rotary Dryers', href: '/products/rotary-dryers/' },
    ],
    seo: {
      title: 'Rotary Dryer Manufacturer Ahmedabad | Minerals Solutions',
      description: 'Leading Gujarat manufacturer of high-efficiency industrial rotary drum dryers, concentric double pass dryers, roto louvre dryers, and coal/gas hot air units.',
      keywords: ['rotary dryer manufacturer ahmedabad', 'industrial rotary drum dryer', 'sand drying system gujarat'],
      canonical: `${SITE_URL}/products/rotary-dryers/`,
    },
  },
  {
    path: '/products/rotary-dryers/double-pass-dryer/',
    label: 'Double Pass Rotary Dryer',
    priority: 0.85,
    changeFreq: 'monthly',
    navGroup: 'dryers',
    pillarPath: '/products/rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Rotary Dryers', href: '/products/rotary-dryers/' },
      { label: 'Double Pass Dryer', href: '/products/rotary-dryers/double-pass-dryer/' },
    ],
    seo: {
      title: 'Double Pass Dryer Manufacturer | Compact Rotary Drum',
      description: 'Energy-saving double pass rotary dryers engineered in Ahmedabad. Concentric multi-drum design operating at 300°C for sand, crystals, and slurry drying.',
      keywords: ['double pass dryer manufacturer', 'double pass rotary dryer', 'concentric drum dryer india'],
      canonical: `${SITE_URL}/products/rotary-dryers/double-pass-dryer/`,
    },
  },
  {
    path: '/products/industrial-rotary-dryers/triple-pass-dryer/',
    label: 'Triple Pass Rotary Dryer',
    priority: 0.85,
    changeFreq: 'weekly',
    navGroup: 'dryers',
    pillarPath: '/products/industrial-rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Industrial Rotary Dryers', href: '/products/industrial-rotary-dryers/' },
      { label: 'Triple Pass Dryer', href: '/products/industrial-rotary-dryers/triple-pass-dryer/' },
    ],
    seo: {
      title: 'Triple Pass Rotary Drum Dryer Manufacturer | Minerals Solutions',
      description: 'High-efficiency triple pass rotary drum dryers (500 kg to 15 TPH). Concentric 3-cylinder design saving 40% space. Fabricated in Zak GIDC, Dahegam.',
      keywords: ['triple pass rotary drum dryer', 'triple pass dryer manufacturer ahmedabad', 'concentric rotary sand dryer', 'compact industrial drum dryer gujarat'],
      canonical: `${SITE_URL}/products/industrial-rotary-dryers/triple-pass-dryer/`,
    },
  },
  {
    path: '/products/rotary-dryers/roto-louvre-dryer/',
    label: 'Roto Louvre Dryer',
    priority: 0.85,
    changeFreq: 'monthly',
    navGroup: 'dryers',
    pillarPath: '/products/rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Rotary Dryers', href: '/products/rotary-dryers/' },
      { label: 'Roto Louvre Dryer', href: '/products/rotary-dryers/roto-louvre-dryer/' },
    ],
    seo: {
      title: 'Roto Louvre Dryer Manufacturer India | Gentle Drying',
      description: 'Custom-engineered rotary louvre dryers for gentle, uniform convective drying and cooling of fragile granules, food products, and chemical crystals in Gujarat.',
      keywords: ['roto louvre dryer manufacturer india', 'rotary louvre dryer', 'gentle industrial dryer'],
      canonical: `${SITE_URL}/products/rotary-dryers/roto-louvre-dryer/`,
    },
  },
  {
    path: '/products/industrial-rotary-dryers/chemical-powder-dryer/',
    label: 'Chemical Powder Dryer',
    priority: 0.85,
    changeFreq: 'weekly',
    navGroup: 'dryers',
    pillarPath: '/products/industrial-rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Industrial Rotary Dryers', href: '/products/industrial-rotary-dryers/' },
      { label: 'Chemical Powder Dryer', href: '/products/industrial-rotary-dryers/chemical-powder-dryer/' },
    ],
    seo: {
      title: 'Stainless Steel Chemical Powder Dryer | Minerals Solutions',
      description: 'Indirect stainless steel chemical powder dryers (SS304/SS316) with heat exchangers & bag filters. Fabricated in Zak GIDC for contamination-free drying.',
      keywords: ['chemical powder rotary dryer', 'stainless steel rotary dryer manufacturer', 'borax powder dryer ahmedabad', 'indirect heat chemical dryer gujarat', 'ss316 rotary drum dryer'],
      canonical: `${SITE_URL}/products/industrial-rotary-dryers/chemical-powder-dryer/`,
    },
  },
  {
    path: '/products/industrial-rotary-dryers/sand-dryer/',
    label: 'Rotary Sand Dryer',
    priority: 0.85,
    changeFreq: 'weekly',
    navGroup: 'dryers',
    pillarPath: '/products/industrial-rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Industrial Rotary Dryers', href: '/products/industrial-rotary-dryers/' },
      { label: 'Rotary Sand Dryer', href: '/products/industrial-rotary-dryers/sand-dryer/' },
    ],
    seo: {
      title: 'Industrial Rotary Sand Dryer Manufacturer | Minerals Solutions',
      description: 'Heavy duty industrial rotary sand dryers (300 kg/hr to 15 TPH). Moisture reduction from 16% to <1%. Built in Zak GIDC, Dahegam, Gujarat.',
      keywords: ['rotary sand dryer', 'silica sand rotary dryer', 'industrial sand dryer machine price', 'coal fired sand dryer gujarat', 'foundry sand drying plant ahmedabad'],
      canonical: `${SITE_URL}/products/industrial-rotary-dryers/sand-dryer/`,
    },
  },
  {
    path: '/products/rotary-dryers/chromite-sand-dryer/',
    label: 'Chromite Sand Dryer',
    priority: 0.75,
    changeFreq: 'monthly',
    navGroup: 'dryers',
    pillarPath: '/products/rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Rotary Dryers', href: '/products/rotary-dryers/' },
      { label: 'Chromite Sand Dryer', href: '/products/rotary-dryers/chromite-sand-dryer/' },
    ],
    seo: {
      title: 'Chromite Sand Dryer with Vibrating Screen Separator',
      description: 'Integrated chromite sand drying drum with multi-deck vibrating screen for foundry sand reclamation and precision thermal moisture removal in Gujarat.',
      keywords: ['chromite sand dryer with vibrating screen', 'foundry chromite sand dryer', 'sand reclamation dryer'],
      canonical: `${SITE_URL}/products/rotary-dryers/chromite-sand-dryer/`,
    },
  },
  {
    path: '/products/industrial-rotary-dryers/biomass-sawdust-dryer/',
    label: 'Biomass & Sawdust Dryer',
    priority: 0.85,
    changeFreq: 'weekly',
    navGroup: 'dryers',
    pillarPath: '/products/industrial-rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Industrial Rotary Dryers', href: '/products/industrial-rotary-dryers/' },
      { label: 'Biomass & Sawdust Dryer', href: '/products/industrial-rotary-dryers/biomass-sawdust-dryer/' },
    ],
    seo: {
      title: 'Biomass & Sawdust Rotary Dryer Manufacturer | Minerals Solutions',
      description: 'Industrial biomass and sawdust rotary dryers (500 to 5,000 kg/hr). Anti-clogging flights & spark arrestors. Fabricated in Zak GIDC, Dahegam.',
      keywords: ['biomass sawdust rotary dryer', 'sawdust rotary dryer manufacturer ahmedabad', 'coir pith dryer machine', 'biomass pellet drying system gujarat', 'agro waste dryer 1500 kg hr'],
      canonical: `${SITE_URL}/products/industrial-rotary-dryers/biomass-sawdust-dryer/`,
    },
  },
  {
    path: '/products/rotary-dryers/hot-air-generators/',
    label: 'Hot Air Generators',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'dryers',
    pillarPath: '/products/rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Rotary Dryers', href: '/products/rotary-dryers/' },
      { label: 'Hot Air Generators', href: '/products/rotary-dryers/hot-air-generators/' },
    ],
    seo: {
      title: 'Industrial Hot Air Generator (Coal & Gas) Ahmedabad',
      description: 'Direct and indirect industrial hot air generators fired by coal, petcoke, biomass, or natural gas, engineered for rotary drying systems across Gujarat.',
      keywords: ['hot air generator for rotary dryer', 'coal fired hot air generator', 'solid fuel combustion chamber'],
      canonical: `${SITE_URL}/products/rotary-dryers/hot-air-generators/`,
    },
  },
  {
    path: '/products/rotary-dryers/coal-burner/',
    label: 'Pulverized Coal Burner',
    priority: 0.75,
    changeFreq: 'monthly',
    navGroup: 'dryers',
    pillarPath: '/products/rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Rotary Dryers', href: '/products/rotary-dryers/' },
      { label: 'Coal Burner', href: '/products/rotary-dryers/coal-burner/' },
    ],
    seo: {
      title: 'Pulverized Coal Burner for Rotary Dryers and Kilns',
      description: 'Heavy industrial pulverized coal burners providing complete fuel combustion, uniform flame geometry, and high thermal efficiency for rotary kiln dryers.',
      keywords: ['pulverized coal burner for rotary kiln', 'industrial coal burner', 'rotary dryer combustion burner'],
      canonical: `${SITE_URL}/products/rotary-dryers/coal-burner/`,
    },
  },
  {
    path: '/products/rotary-dryers/trunnion-support-rollers/',
    label: 'Trunnion Support Rollers',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'dryers',
    pillarPath: '/products/rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Rotary Dryers', href: '/products/rotary-dryers/' },
      { label: 'Support Rollers', href: '/products/rotary-dryers/trunnion-support-rollers/' },
    ],
    seo: {
      title: 'Rotary Dryer Trunnion Support Roller Manufacturer',
      description: 'Forged alloy steel trunnion support roller assemblies with spherical roller bearings and induction hardened surfaces for rotary dryers and kilns in India.',
      keywords: ['rotary dryer trunnion roller manufacturer', 'dryer support roller assembly', 'kiln trunnion bearing assembly'],
      canonical: `${SITE_URL}/products/rotary-dryers/trunnion-support-rollers/`,
    },
  },
  {
    path: '/products/rotary-dryers/riding-rings-girth-gears/',
    label: 'Riding Rings & Girth Gears',
    priority: 0.75,
    changeFreq: 'monthly',
    navGroup: 'dryers',
    pillarPath: '/products/rotary-dryers/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Rotary Dryers', href: '/products/rotary-dryers/' },
      { label: 'Riding Rings & Gears', href: '/products/rotary-dryers/riding-rings-girth-gears/' },
    ],
    seo: {
      title: 'Rotary Kiln Tyre Riding Ring & Girth Gear Spares',
      description: 'Precision forged riding rings (tyres), segmented drive girth gears, and thrust rollers for heavy rotary drying drums and industrial rotary kilns.',
      keywords: ['rotary kiln tyre riding ring girth gear', 'dryer girth gear replacement', 'kiln riding tyre manufacturer'],
      canonical: `${SITE_URL}/products/rotary-dryers/riding-rings-girth-gears/`,
    },
  },

  // 5. Pillar 2: Sand Washing & Mineral Processing
  {
    path: '/products/mineral-processing/',
    label: 'Mineral Processing',
    priority: 0.95,
    changeFreq: 'weekly',
    navGroup: 'washing',
    pillarPath: '/products/mineral-processing/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Mineral Processing', href: '/products/mineral-processing/' },
    ],
    seo: {
      title: 'Sand Washing Plant Manufacturer Gujarat | Minerals Solutions',
      description: 'Turnkey sand washing plants, quartz stone scrubbers, rotary trommel screens, and vibrating screens fabricated in Dahegam, Ahmedabad for mineral purity.',
      keywords: ['sand washing plant manufacturer gujarat', 'quartz stone washer machine', 'mineral processing plant ahmedabad'],
      canonical: `${SITE_URL}/products/mineral-processing/`,
    },
  },
  {
    path: '/products/sand-washing-plants/silica-sand-washing-plant/',
    label: 'Silica Sand Washing Plant',
    priority: 0.85,
    changeFreq: 'weekly',
    navGroup: 'washing',
    pillarPath: '/products/sand-washing-plants/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Sand Washing Plants', href: '/products/sand-washing-plants/' },
      { label: 'Silica Sand Washing Plant', href: '/products/sand-washing-plants/silica-sand-washing-plant/' },
    ],
    seo: {
      title: 'Silica Sand Washing Plant Manufacturer | Minerals Solutions',
      description: 'Complete silica sand washing plants (20 to 150 TPH). Log washing, hydrocyclone desliming & dewatering for glass & ceramic sand. Zak GIDC, Dahegam.',
      keywords: ['silica sand washing plant', 'silica washing plant cost', 'silica sand washing machine manufacturer gujarat', 'quartz sand washing equipment morbi'],
      canonical: `${SITE_URL}/products/sand-washing-plants/silica-sand-washing-plant/`,
    },
  },
  {
    path: '/products/mineral-processing/quartz-stone-washer/',
    label: 'Quartz Stone Washer',
    priority: 0.85,
    changeFreq: 'monthly',
    navGroup: 'washing',
    pillarPath: '/products/mineral-processing/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Mineral Processing', href: '/products/mineral-processing/' },
      { label: 'Quartz Washer', href: '/products/mineral-processing/quartz-stone-washer/' },
    ],
    seo: {
      title: 'Quartz Stone Washer & Scrubber Manufacturer Gujarat',
      description: 'Heavy twin-shaft log washers engineered to scrub tenacious clay, loam, and silt from lump quartz stone and silica rock prior to optical grading.',
      keywords: ['quartz stone washer manufacturer gujarat', 'mineral log washer', 'silica rock scrubber machine'],
      canonical: `${SITE_URL}/products/mineral-processing/quartz-stone-washer/`,
    },
  },
  {
    path: '/products/mineral-processing/rotary-trommel-screen/',
    label: 'Rotary Trommel Screen',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'washing',
    pillarPath: '/products/mineral-processing/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Mineral Processing', href: '/products/mineral-processing/' },
      { label: 'Trommel Screen', href: '/products/mineral-processing/rotary-trommel-screen/' },
    ],
    seo: {
      title: 'Rotary Screen Trommel Manufacturer Ahmedabad Gujarat',
      description: 'Heavy perforated drum trommel screens for wet and dry classification of mineral ores, riverbed gravel, compost, and industrial bulk minerals.',
      keywords: ['rotary screen trommel manufacturer ahmedabad', 'trommel screen for sand', 'industrial drum screen'],
      canonical: `${SITE_URL}/products/mineral-processing/rotary-trommel-screen/`,
    },
  },
  {
    path: '/products/mineral-processing/vibrating-screen/',
    label: 'Vibrating Screen',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'washing',
    pillarPath: '/products/mineral-processing/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Mineral Processing', href: '/products/mineral-processing/' },
      { label: 'Vibrating Screen', href: '/products/mineral-processing/vibrating-screen/' },
    ],
    seo: {
      title: 'Industrial Vibrating Screen Machine Manufacturer Gujarat',
      description: 'Multi-deck circular and linear vibrating screens with high screening efficiency for aggregate sizing, crushed stone grading, and foundry sand circuits.',
      keywords: ['vibrating screen manufacturer gujarat', 'circular vibrating screen machine', 'aggregate sizing screen'],
      canonical: `${SITE_URL}/products/mineral-processing/vibrating-screen/`,
    },
  },
  {
    path: '/products/mineral-processing/jaw-crusher/',
    label: 'Mineral Jaw Crusher',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'washing',
    pillarPath: '/products/mineral-processing/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Mineral Processing', href: '/products/mineral-processing/' },
      { label: 'Jaw Crusher', href: '/products/mineral-processing/jaw-crusher/' },
    ],
    seo: {
      title: 'Stone Jaw Crusher Machine Manufacturer Ahmedabad',
      description: 'Primary and secondary mineral jaw crushers built with high-manganese jaw plates for hard quartz rock, granite, river boulders, and mining ores.',
      keywords: ['stone jaw crusher manufacturer ahmedabad', 'mineral jaw crusher', 'primary aggregate rock crusher'],
      canonical: `${SITE_URL}/products/mineral-processing/jaw-crusher/`,
    },
  },

  // 6. Pillar 3: Fertilizer Granulation & Biomass Pellet Machinery
  {
    path: '/products/granulation-pellet-plants/',
    label: 'Granulation & Pellet Plants',
    priority: 0.95,
    changeFreq: 'weekly',
    navGroup: 'fertilizer',
    pillarPath: '/products/granulation-pellet-plants/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Granulation & Pellets', href: '/products/granulation-pellet-plants/' },
    ],
    seo: {
      title: 'Fertilizer Granulation Plant Manufacturer | Minerals Solutions',
      description: 'Turnkey NPK and organic fertilizer granulation plants, pan disc granulators, biomass pellet mills, and precision ring dies engineered in Dahegam, Gujarat.',
      keywords: ['fertilizer granulation plant manufacturer', 'pan disc granulator ahmedabad', 'biomass pellet mill gujarat'],
      canonical: `${SITE_URL}/products/granulation-pellet-plants/`,
    },
  },
  {
    path: '/products/granulation-pellet-plants/disc-granulator/',
    label: 'Pan Disc Granulator',
    priority: 0.85,
    changeFreq: 'monthly',
    navGroup: 'fertilizer',
    pillarPath: '/products/granulation-pellet-plants/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Granulation & Pellets', href: '/products/granulation-pellet-plants/' },
      { label: 'Pan Disc Granulator', href: '/products/granulation-pellet-plants/disc-granulator/' },
    ],
    seo: {
      title: 'Pan Disc Fertilizer Granulator Manufacturer Ahmedabad',
      description: 'Heavy 2.2m disc pan granulators with 35-55 degree adjustable tilt angle for organic compost, NPK mixtures, and chemical powder pelletization.',
      keywords: ['pan disc fertilizer granulator manufacturer ahmedabad', 'fertilizer pan pelletizer', 'disc granulator 5hp'],
      canonical: `${SITE_URL}/products/granulation-pellet-plants/disc-granulator/`,
    },
  },
  {
    path: '/products/granulation-pellet-plants/fertilizer-plant/',
    label: 'Turnkey Fertilizer Plant',
    priority: 0.85,
    changeFreq: 'monthly',
    navGroup: 'fertilizer',
    pillarPath: '/products/granulation-pellet-plants/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Granulation & Pellets', href: '/products/granulation-pellet-plants/' },
      { label: 'Fertilizer Plant', href: '/products/granulation-pellet-plants/fertilizer-plant/' },
    ],
    seo: {
      title: 'NPK & Organic Fertilizer Granulation Plant India',
      description: 'Turnkey fertilizer production lines featuring automated dosing, pan granulation, rotary drying, cooling drums, and bag filter dust collectors.',
      keywords: ['npk organic fertilizer granulation plant india', 'complete fertilizer manufacturing plant', 'bio fertilizer plant setup'],
      canonical: `${SITE_URL}/products/granulation-pellet-plants/fertilizer-plant/`,
    },
  },
  {
    path: '/products/granulation-pellet-plants/biomass-pellet-mill/',
    label: 'Biomass Pellet Mill',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'fertilizer',
    pillarPath: '/products/granulation-pellet-plants/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Granulation & Pellets', href: '/products/granulation-pellet-plants/' },
      { label: 'Biomass Pellet Mill', href: '/products/granulation-pellet-plants/biomass-pellet-mill/' },
    ],
    seo: {
      title: 'Biomass Pellet Making Machine Manufacturer Gujarat',
      description: 'Heavy-duty pelletizing machines for wood waste, groundnut shells, sawdust, and agricultural residues producing high-density biofuel pellets.',
      keywords: ['biomass pellet making machine manufacturer gujarat', 'agro waste pellet mill', 'wood pellet manufacturing plant'],
      canonical: `${SITE_URL}/products/granulation-pellet-plants/biomass-pellet-mill/`,
    },
  },
  {
    path: '/products/granulation-pellet-plants/pellet-mill-die/',
    label: 'Pellet Mill Dies',
    priority: 0.75,
    changeFreq: 'monthly',
    navGroup: 'fertilizer',
    pillarPath: '/products/granulation-pellet-plants/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Granulation & Pellets', href: '/products/granulation-pellet-plants/' },
      { label: 'Pellet Mill Dies', href: '/products/granulation-pellet-plants/pellet-mill-die/' },
    ],
    seo: {
      title: 'Pellet Mill Die Manufacturer India | Ring & Flat Dies',
      description: 'Vacuum-hardened alloy steel ring dies and flat dies with gun-drilled precision mirror-finish holes for long-lasting biomass pellet production.',
      keywords: ['pellet mill die manufacturer india', 'ring die for pellet machine', 'replacement pellet mill tooling'],
      canonical: `${SITE_URL}/products/granulation-pellet-plants/pellet-mill-die/`,
    },
  },
  {
    path: '/products/granulation-pellet-plants/pellet-mill-roller-assembly/',
    label: 'Pellet Mill Roller Assembly',
    priority: 0.75,
    changeFreq: 'monthly',
    navGroup: 'fertilizer',
    pillarPath: '/products/granulation-pellet-plants/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Granulation & Pellets', href: '/products/granulation-pellet-plants/' },
      { label: 'Roller Assembly', href: '/products/granulation-pellet-plants/pellet-mill-roller-assembly/' },
    ],
    seo: {
      title: 'Pellet Mill Roller Shell & Complete Roller Assembly',
      description: 'Dimpled and corrugated roller shells with high-temperature bearings for smooth pellet compression and reduced wear on ring dies.',
      keywords: ['pellet mill roller shell assembly', 'roller shell for pellet press', 'biomass pellet machine spares'],
      canonical: `${SITE_URL}/products/granulation-pellet-plants/pellet-mill-roller-assembly/`,
    },
  },

  // 7. Pillar 4: Industrial Conveyor Systems & Material Handling
  {
    path: '/products/conveyor-systems/',
    label: 'Conveyor Systems',
    priority: 0.95,
    changeFreq: 'weekly',
    navGroup: 'conveyors',
    pillarPath: '/products/conveyor-systems/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Conveyor Systems', href: '/products/conveyor-systems/' },
    ],
    seo: {
      title: 'Industrial Conveyor Belt System Manufacturer Ahmedabad',
      description: 'Custom heavy-duty belt conveyor systems, troughing idler rollers, diamond rubber-lagged head pulleys, and M24 rubber belting fabricated in Dahegam.',
      keywords: ['industrial conveyor belt system manufacturer', 'belt conveyor ahmedabad', 'material handling systems gujarat'],
      canonical: `${SITE_URL}/products/conveyor-systems/`,
    },
  },
  {
    path: '/products/conveyor-systems/belt-conveyors/',
    label: 'Belt Conveyors',
    priority: 0.85,
    changeFreq: 'monthly',
    navGroup: 'conveyors',
    pillarPath: '/products/conveyor-systems/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Conveyor Systems', href: '/products/conveyor-systems/' },
      { label: 'Belt Conveyors', href: '/products/conveyor-systems/belt-conveyors/' },
    ],
    seo: {
      title: 'Industrial Belt Conveyor Manufacturer Ahmedabad Gujarat',
      description: 'Heavy troughed belt conveyors for bulk minerals, sand, grain, and gravel. Standard 30m configurations and custom long-distance plant conveyors.',
      keywords: ['industrial belt conveyor manufacturer ahmedabad', 'troughed belt conveyor system', 'bulk material conveyor'],
      canonical: `${SITE_URL}/products/conveyor-systems/belt-conveyors/`,
    },
  },
  {
    path: '/products/conveyor-systems/mining-conveyors/',
    label: 'Mining Conveyors',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'conveyors',
    pillarPath: '/products/conveyor-systems/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Conveyor Systems', href: '/products/conveyor-systems/' },
      { label: 'Mining Conveyors', href: '/products/conveyor-systems/mining-conveyors/' },
    ],
    seo: {
      title: 'Mineral & Ore Beneficiation Conveyor Systems Gujarat',
      description: 'Heavy-duty channel and lattice frame mining conveyors designed to withstand aggressive abrasion, impact, and high-tonnage continuous ore transfer.',
      keywords: ['mineral ore belt conveyor system gujarat', 'mining aggregate conveyor', 'quarry conveyor manufacturer'],
      canonical: `${SITE_URL}/products/conveyor-systems/mining-conveyors/`,
    },
  },
  {
    path: '/products/conveyor-systems/pulleys/',
    label: 'Conveyor Pulleys',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'conveyors',
    pillarPath: '/products/conveyor-systems/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Conveyor Systems', href: '/products/conveyor-systems/' },
      { label: 'Conveyor Pulleys', href: '/products/conveyor-systems/pulleys/' },
    ],
    seo: {
      title: 'Conveyor Head and Tail Pulley Manufacturer India',
      description: 'Crowned steel conveyor head drive drums, self-cleaning wing tail pulleys, and snub pulleys with heavy keyed shafts for belt tension management.',
      keywords: ['conveyor head and tail pulley manufacturer', 'conveyor drive drum pulley', 'tail pulley with internal bearings'],
      canonical: `${SITE_URL}/products/conveyor-systems/pulleys/`,
    },
  },
  {
    path: '/products/conveyor-systems/rubber-lagged-pulleys/',
    label: 'Rubber Lagged Pulleys',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'conveyors',
    pillarPath: '/products/conveyor-systems/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Conveyor Systems', href: '/products/conveyor-systems/' },
      { label: 'Rubber Lagged Pulleys', href: '/products/conveyor-systems/rubber-lagged-pulleys/' },
    ],
    seo: {
      title: 'Diamond Rubber Lagged Conveyor Pulley Manufacturer',
      description: 'Hot vulcanized diamond-grooved rubber lagged conveyor pulleys preventing belt slippage and shedding water and slurry in harsh quarry environments.',
      keywords: ['rubber lagged conveyor pulley manufacturer india', 'diamond groove lagging pulley', 'head drum rubber lagging'],
      canonical: `${SITE_URL}/products/conveyor-systems/rubber-lagged-pulleys/`,
    },
  },
  {
    path: '/products/conveyor-systems/idler-rollers/',
    label: 'Idler Rollers',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'conveyors',
    pillarPath: '/products/conveyor-systems/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Conveyor Systems', href: '/products/conveyor-systems/' },
      { label: 'Idler Rollers', href: '/products/conveyor-systems/idler-rollers/' },
    ],
    seo: {
      title: 'Conveyor Idler Roller Manufacturer Ahmedabad Gujarat',
      description: 'Precision troughing idler rollers, impact rollers, and return rollers featuring multi-labyrinth grease seals and seamless steel tubing.',
      keywords: ['conveyor idler roller manufacturer ahmedabad', 'troughing idler roller', 'belt conveyor return roller'],
      canonical: `${SITE_URL}/products/conveyor-systems/idler-rollers/`,
    },
  },
  {
    path: '/products/conveyor-systems/conveyor-belting/',
    label: 'Conveyor Belting',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'conveyors',
    pillarPath: '/products/conveyor-systems/',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Conveyor Systems', href: '/products/conveyor-systems/' },
      { label: 'Conveyor Belting', href: '/products/conveyor-systems/conveyor-belting/' },
    ],
    seo: {
      title: 'M24 Rubber Conveyor Belt Manufacturer Gujarat (IS 1891)',
      description: 'Nylon / EP 3-ply heavy-duty rubber conveyor belting in Grade M24 for stone crushers, mineral processing plants, and abrasive bulk handling.',
      keywords: ['m24 rubber conveyor belt manufacturer gujarat', 'stone crusher conveyor belt', 'is 1891 conveyor belting'],
      canonical: `${SITE_URL}/products/conveyor-systems/conveyor-belting/`,
    },
  },

  // 8. Minerals Hub (Direct Material Sales)
  {
    path: '/minerals/industrial-sands/',
    label: 'Industrial Sands & Slag',
    priority: 0.8,
    changeFreq: 'monthly',
    navGroup: 'minerals',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Industrial Sands', href: '/minerals/industrial-sands/' },
    ],
    seo: {
      title: 'Resin Coated Sand, Washed Silica & Copper Slag Gujarat',
      description: 'High-purity foundry resin coated sand (RCS), washed & graded silica sand, quartz sand, and copper slag abrasive blasting media from Dahegam.',
      keywords: ['resin coated sand manufacturer gujarat', 'washed graded silica sand ahmedabad', 'copper slag quartz sand supplier'],
      canonical: `${SITE_URL}/minerals/industrial-sands/`,
    },
  },

  // 9. Legal & Compliance
  {
    path: '/privacy-policy/',
    label: 'Privacy Policy',
    priority: 0.3,
    changeFreq: 'yearly',
    navGroup: 'legal',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
    ],
    seo: {
      title: 'Privacy Policy | Minerals Solutions',
      description: 'Read the privacy policy and data governance practices for visitor inquiries and RFQs submitted to Minerals Solutions.',
      keywords: ['privacy policy minerals solutions'],
      canonical: `${SITE_URL}/privacy-policy/`,
    },
  },
  {
    path: '/terms/',
    label: 'Terms of Supply',
    priority: 0.3,
    changeFreq: 'yearly',
    navGroup: 'legal',
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Terms of Supply', href: '/terms/' },
    ],
    seo: {
      title: 'Terms of Supply & Equipment Warranty | Minerals Solutions',
      description: 'Standard terms of machinery fabrication, dispatch, erection supervision, and warranty coverage for Minerals Solutions equipment.',
      keywords: ['terms of supply minerals solutions', 'machinery warranty terms'],
      canonical: `${SITE_URL}/terms/`,
    },
  },
];

export function findRoute(path: string): CanonicalRoute | undefined {
  return routes.find((r) => r.path === path);
}

export function getPillarRoutes(): CanonicalRoute[] {
  return routes.filter((r) => r.path === r.pillarPath);
}

export function getSpokeRoutes(pillarPath: string): CanonicalRoute[] {
  return routes.filter((r) => r.pillarPath === pillarPath && r.path !== pillarPath);
}

