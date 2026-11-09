import type { EquipmentSpecification } from '../types/specification';

export const specifications: Record<string, EquipmentSpecification> = {
  doublePassDryer: {
    modelName: 'Double Pass Rotary Drum Dryer',
    category: 'Thermal Drying Systems',
    indicativePrice: '₹ 25,00,000 / Piece',
    capacity: '500 kg to 5,000 kg/hr',
    operatingTemp: 'Up to 300°C',
    bodyMaterial: 'Heavy Mild Steel (IS 2062) / Optional SS304 Contact Parts',
    powerRequirement: '15 HP to 45 HP Geared Motor Drive',
    dimensions: 'Concentric nested cylinder layout (up to 40% smaller footprint than single pass)',
    keySpecs: [
      { label: 'Inlet Air Temperature', value: '300°C', highlight: true },
      { label: 'Heating Source', value: 'Biomass / Coal / Gas Fired Hot Air Generator' },
      { label: 'Material Feed Form', value: 'Granules, Slurry, Wet Sand, Filter Cake' },
      { label: 'Discharge System', value: 'Air-lock Rotary Valve / Screw Conveyor' },
      { label: 'Cyclone Dust Separator', value: 'High Efficiency Single / Twin Cyclone' },
      { label: 'Air Flow Direction', value: 'Co-Current Continuous Thermal Draft' },
    ],
    primaryApplications: [
      'Silica sand and foundry sand drying',
      'Organic fertilizer granule moisture reduction',
      'Mineral aggregates and industrial clays',
      'Chemical crystal and salt dehydration',
    ],
    visualAssetSlug: 'double-pass-rotary-dryer',
  },

  sandDryer: {
    modelName: 'Industrial Rotary Sand Dryer',
    category: 'Thermal Drying Systems',
    indicativePrice: '₹ 20,50,000 / Piece',
    capacity: '300 kg/hr to 15 TPH',
    operatingTemp: 'Up to 250°C',
    bodyMaterial: 'Abrasion Resistant Heavy Carbon Steel',
    powerRequirement: '3 HP to 30 HP Drive',
    keySpecs: [
      { label: 'Moisture Removal Performance', value: '16% initial moisture down to <1% residual', highlight: true },
      { label: 'Flight Metallurgy', value: 'Spiral entry lifters with radial flight curtains' },
      { label: 'Drive Mechanism', value: 'Machined girth gear and forged pinion drive' },
      { label: 'Support Trunnions', value: 'Twin forged alloy steel rollers with spherical bearings' },
      { label: 'Combustion Chamber', value: 'Refractory-lined coal/gas combustion furnace' },
    ],
    primaryApplications: [
      'Foundry casting sand preparation',
      'Resin coated sand (RCS) pre-heating',
      'Glass-grade silica sand purification lines',
      'Dry-mix mortar and construction aggregate plant',
    ],
    visualAssetSlug: 'sand-dryer-with-coal-fired-hot-air-generator',
  },

  panDiscGranulator: {
    modelName: 'Industrial Pan Disc Fertilizer Granulator',
    category: 'Granulation & Pellet Machinery',
    indicativePrice: '₹ 3,75,000 / Piece',
    capacity: '100 kg/hr to 2 TPH',
    powerRequirement: '5 HP High-Torque Geared Drive',
    bodyMaterial: 'Fabricated Mild Steel / SS304 Lined Disc Pan',
    keySpecs: [
      { label: 'Disc Diameter', value: '2,200 mm (2.2 Meter)', highlight: true },
      { label: 'Tilt Angle Adjustment', value: '35° to 55° stepless worm-gear control', highlight: true },
      { label: 'Pan Rim Height', value: '300 mm to 450 mm flanged construction' },
      { label: 'Scraper System', value: 'Spring-loaded adjustable tungsten-carbide scrapers' },
      { label: 'Drive Base', value: 'Reinforced channel iron pedestal frame' },
    ],
    primaryApplications: [
      'NPK compound fertilizer granulation',
      'Organic manure and cow-dung compost pelletizing',
      'Bentonite clay and carbon black balls',
      'Mineral ore fines and catalyst pelletization',
    ],
    visualAssetSlug: 'pan-disc-fertilizer-granulation-machine',
  },

  beltConveyorSystem: {
    modelName: 'Industrial Troughed Belt Conveyor System',
    category: 'Conveyor Systems & Material Handling',
    indicativePrice: '₹ 1,50,000 / Unit',
    capacity: '50 kg/m linear rating (Up to 150 TPH bulk aggregate)',
    dimensions: '30 Meter standard span (Customized from 5m to 120m)',
    keySpecs: [
      { label: 'Conveyor Belt Specification', value: 'Nylon / EP M24 3-Ply Grade (IS 1891 Part 1)', highlight: true },
      { label: 'Head Pulley Treatment', value: 'Hot vulcanized diamond-grooved rubber lagging', highlight: true },
      { label: 'Idler Roller Construction', value: 'Heavy MS tube with labyrinth-sealed ball bearings' },
      { label: 'Frame Structure', value: 'ISMC channel or heavy fabricated lattice truss' },
      { label: 'Troughing Angle', value: '20°, 30°, or 35° three-roller sets' },
    ],
    primaryApplications: [
      'Crushed stone and mineral aggregate transfer',
      'Rotary dryer loading and dry product discharge',
      'Sand washing plant slurry and sand conveying',
      'Fertilizer and agro-waste feed distribution',
    ],
    visualAssetSlug: 'belt-conveyor-system',
  },

  quartzStoneWasher: {
    modelName: 'Quartz Stone & Mineral Log Washer',
    category: 'Mineral Processing Equipment',
    capacity: '10 TPH to 50 TPH',
    bodyMaterial: 'Extra-Heavy Reinforced Plate Steel Tank',
    keySpecs: [
      { label: 'Scrubbing Action', value: 'Contra-rotating twin log shafts with manganese steel paddles', highlight: true },
      { label: 'De-sliming Efficiency', value: 'Removes 98%+ adherent plastic clays and surface coatings' },
      { label: 'Feed Size Acceptance', value: 'Up to 75 mm coarse mineral feed' },
      { label: 'Drive System', value: 'Heavy reduction gearbox with oil-bath lubrication' },
    ],
    primaryApplications: [
      'High-purity optical and solar glass silica sand processing',
      'Quartz stone lump washing before crushing',
      'River gravel and pebble beneficiation',
    ],
    visualAssetSlug: 'quartz-stone-sand-washers',
  },

  trunnionSupportRoller: {
    modelName: 'Forged Steel Trunnion Support Roller Assembly',
    category: 'Kiln & Dryer Mechanical Spares',
    bodyMaterial: 'EN-8 / EN-9 / 42CrMo4 Forged Alloy Steel',
    keySpecs: [
      { label: 'Surface Hardness', value: 'Induction hardened to 280-320 BHN', highlight: true },
      { label: 'Shaft Finish', value: 'Precision ground finish with ultrasonic flaw testing' },
      { label: 'Bearing Housing', value: 'Cast steel split plummer block with spherical roller bearings' },
      { label: 'Lubrication', value: 'Continuous oil-bath / heavy grease packing' },
    ],
    primaryApplications: [
      'Rotary drum dryer trunnion replacement',
      'Rotary calciner and kiln tyre support',
      'Fertilizer coating and cooling drum running gear',
    ],
    visualAssetSlug: 'dryer-support-roller',
  },
};
