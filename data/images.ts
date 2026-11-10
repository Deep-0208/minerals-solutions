// Master Visual Equipment & Facility Image Registry
// Generated automatically by Gate 3 Asset Optimization Pipeline
// Source: 89 Authentic Photographs (38 Client Raw + 51 IndiaMART High-Res)

export interface ImageVariant {
  size: 'lg' | 'md' | 'thumb' | 'transparent-md' | 'dark-md';
  width: number;
  height: number;
  path: string;
  bytes: number;
}

export interface ImageRegistryEntry {
  slug: string;
  originalFile: string;
  source: 'raw' | 'indiamart' | 'brand-master';
  category: 'rotary-dryers' | 'thermal-combustion' | 'mineral-processing' | 'fertilizer-pellet' | 'conveyor-systems' | 'mechanical-spares' | 'facility' | 'brand' | 'brochures';
  altText: string;
  aspectRatio: number;
  originalDimensions: { width: number; height: number };
  originalBytes: number;
  variants: ImageVariant[];
}

export const imageRegistry: ImageRegistryEntry[] = [
  {
    "slug": "double-pass-rotary-dryer-primary",
    "originalFile": "Double pass dryer.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Minerals Solutions double pass concentric rotary dryer showing outer shell and heavy blue drive frame at Dahegam workshop",
    "aspectRatio": 1.329,
    "originalDimensions": {
      "width": 1600,
      "height": 1204
    },
    "originalBytes": 148936,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 903,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-primary-lg.webp",
        "bytes": 72794
      },
      {
        "size": "md",
        "width": 600,
        "height": 452,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-primary-md.webp",
        "bytes": 23566
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-primary-thumb.webp",
        "bytes": 2338
      }
    ]
  },
  {
    "slug": "double-pass-rotary-dryer-assembly",
    "originalFile": "Double pass dryer (2).jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Side angle of double pass concentric rotary drum assembly positioned on trunnion roller support bases",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1040,
      "height": 780
    },
    "originalBytes": 99989,
    "variants": [
      {
        "size": "lg",
        "width": 1040,
        "height": 780,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-assembly-lg.webp",
        "bytes": 80064
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-assembly-md.webp",
        "bytes": 35946
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-assembly-thumb.webp",
        "bytes": 3834
      }
    ]
  },
  {
    "slug": "rotary-drum-dryer",
    "originalFile": "Rotary dryer.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Continuous industrial rotary drying drum with support riding rings and drive sprocket",
    "aspectRatio": 0.439,
    "originalDimensions": {
      "width": 562,
      "height": 1280
    },
    "originalBytes": 110777,
    "variants": [
      {
        "size": "lg",
        "width": 562,
        "height": 1280,
        "path": "/images/products/rotary-dryers/rotary-drum-dryer-lg.webp",
        "bytes": 96240
      },
      {
        "size": "md",
        "width": 562,
        "height": 1280,
        "path": "/images/products/rotary-dryers/rotary-drum-dryer-md.webp",
        "bytes": 90708
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 342,
        "path": "/images/products/rotary-dryers/rotary-drum-dryer-thumb.webp",
        "bytes": 8504
      }
    ]
  },
  {
    "slug": "roto-louvre-dryer",
    "originalFile": "Roto Louvre Dryer.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Heavy-duty roto louvre industrial dryer for gentle convective drying and cooling of chemical and mineral crystals",
    "aspectRatio": 0.752,
    "originalDimensions": {
      "width": 1204,
      "height": 1600
    },
    "originalBytes": 172594,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 1595,
        "path": "/images/products/rotary-dryers/roto-louvre-dryer-lg.webp",
        "bytes": 117312
      },
      {
        "size": "md",
        "width": 600,
        "height": 797,
        "path": "/images/products/rotary-dryers/roto-louvre-dryer-md.webp",
        "bytes": 46642
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 199,
        "path": "/images/products/rotary-dryers/roto-louvre-dryer-thumb.webp",
        "bytes": 5776
      }
    ]
  },
  {
    "slug": "boric-powder-dryer",
    "originalFile": "Boric powder dryer.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Chemical powder rotary dryer configured for boric acid and borax salt dehydration",
    "aspectRatio": 0.75,
    "originalDimensions": {
      "width": 960,
      "height": 1280
    },
    "originalBytes": 191249,
    "variants": [
      {
        "size": "lg",
        "width": 960,
        "height": 1280,
        "path": "/images/products/rotary-dryers/boric-powder-dryer-lg.webp",
        "bytes": 173108
      },
      {
        "size": "md",
        "width": 600,
        "height": 800,
        "path": "/images/products/rotary-dryers/boric-powder-dryer-md.webp",
        "bytes": 81900
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 200,
        "path": "/images/products/rotary-dryers/boric-powder-dryer-thumb.webp",
        "bytes": 6496
      }
    ]
  },
  {
    "slug": "borax-dryer-heat-exchanger-bag-filter",
    "originalFile": "Borex powder dryer with heat exchanger and bag filter.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Indirect borax powder rotary dryer system with external shell-and-tube heat exchanger and pulse-jet bag filter",
    "aspectRatio": 1.329,
    "originalDimensions": {
      "width": 1280,
      "height": 963
    },
    "originalBytes": 207356,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 903,
        "path": "/images/products/rotary-dryers/borax-dryer-heat-exchanger-bag-filter-lg.webp",
        "bytes": 165158
      },
      {
        "size": "md",
        "width": 600,
        "height": 451,
        "path": "/images/products/rotary-dryers/borax-dryer-heat-exchanger-bag-filter-md.webp",
        "bytes": 54350
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/borax-dryer-heat-exchanger-bag-filter-thumb.webp",
        "bytes": 3868
      }
    ]
  },
  {
    "slug": "silica-sand-rotary-dryer",
    "originalFile": "Silica sand dryer.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Industrial silica sand rotary dryer with feed inlet hood and heavy structural steel support base",
    "aspectRatio": 1.329,
    "originalDimensions": {
      "width": 1280,
      "height": 963
    },
    "originalBytes": 178419,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 903,
        "path": "/images/products/rotary-dryers/silica-sand-rotary-dryer-lg.webp",
        "bytes": 130126
      },
      {
        "size": "md",
        "width": 600,
        "height": 451,
        "path": "/images/products/rotary-dryers/silica-sand-rotary-dryer-md.webp",
        "bytes": 46554
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/silica-sand-rotary-dryer-thumb.webp",
        "bytes": 4406
      }
    ]
  },
  {
    "slug": "chromite-sand-dryer-vibrating-screen",
    "originalFile": "Chromite sand dryer with vibrating screen.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Heavy foundry chromite sand rotary drying drum integrated with multi-deck vibrating screen for sizing",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1280,
      "height": 562
    },
    "originalBytes": 97602,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 527,
        "path": "/images/products/rotary-dryers/chromite-sand-dryer-vibrating-screen-lg.webp",
        "bytes": 72776
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/rotary-dryers/chromite-sand-dryer-vibrating-screen-md.webp",
        "bytes": 25476
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/rotary-dryers/chromite-sand-dryer-vibrating-screen-thumb.webp",
        "bytes": 2570
      }
    ]
  },
  {
    "slug": "rotary-dryer-with-feed-conveyor",
    "originalFile": "Dryer with conveyor.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Continuous rotary sand drying plant with inclined feed troughing belt conveyor charging wet aggregate",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1280,
      "height": 960
    },
    "originalBytes": 209028,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 900,
        "path": "/images/products/rotary-dryers/rotary-dryer-with-feed-conveyor-lg.webp",
        "bytes": 180446
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/rotary-dryers/rotary-dryer-with-feed-conveyor-md.webp",
        "bytes": 54082
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/rotary-dryer-with-feed-conveyor-thumb.webp",
        "bytes": 4138
      }
    ]
  },
  {
    "slug": "sand-dryer-coal-fired-hag",
    "originalFile": "Sand dryer with coal fired Hot air Generator.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Rotary sand drying plant connected to a heavy refractory-lined coal-fired hot air generator and cyclone dust collector",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1280,
      "height": 562
    },
    "originalBytes": 101806,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 527,
        "path": "/images/products/rotary-dryers/sand-dryer-coal-fired-hag-lg.webp",
        "bytes": 79842
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/rotary-dryers/sand-dryer-coal-fired-hag-md.webp",
        "bytes": 24104
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/rotary-dryers/sand-dryer-coal-fired-hag-thumb.webp",
        "bytes": 2150
      }
    ]
  },
  {
    "slug": "sand-dryer-manual-fired-hag",
    "originalFile": "Sand dryer with manual fired hot air generator.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Solid-fuel manual fired hot air furnace coupled to industrial rotary sand drying drum",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1280,
      "height": 562
    },
    "originalBytes": 126468,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 527,
        "path": "/images/products/rotary-dryers/sand-dryer-manual-fired-hag-lg.webp",
        "bytes": 114690
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/rotary-dryers/sand-dryer-manual-fired-hag-md.webp",
        "bytes": 29016
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/rotary-dryers/sand-dryer-manual-fired-hag-thumb.webp",
        "bytes": 1992
      }
    ]
  },
  {
    "slug": "sand-dryer-gas-burner",
    "originalFile": "Sand Dryer with Gas Burner.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "High-efficiency industrial rotary sand dryer equipped with automated natural gas (PNG/LPG) combustion burner",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1280,
      "height": 562
    },
    "originalBytes": 84691,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 527,
        "path": "/images/products/rotary-dryers/sand-dryer-gas-burner-lg.webp",
        "bytes": 59784
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/rotary-dryers/sand-dryer-gas-burner-md.webp",
        "bytes": 21126
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/rotary-dryers/sand-dryer-gas-burner-thumb.webp",
        "bytes": 2370
      }
    ]
  },
  {
    "slug": "saw-dust-biomass-dryer",
    "originalFile": "Saw dust dryer.jpeg",
    "source": "raw",
    "category": "rotary-dryers",
    "altText": "Biomass sawdust rotary drum flash dryer with high-velocity pneumatic draft for pellet plant feed conditioning",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1280,
      "height": 960
    },
    "originalBytes": 121354,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 900,
        "path": "/images/products/rotary-dryers/saw-dust-biomass-dryer-lg.webp",
        "bytes": 74036
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/rotary-dryers/saw-dust-biomass-dryer-md.webp",
        "bytes": 27504
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/saw-dust-biomass-dryer-thumb.webp",
        "bytes": 2662
      }
    ]
  },
  {
    "slug": "pulverized-coal-burner",
    "originalFile": "Coal Burner.jpeg",
    "source": "raw",
    "category": "thermal-combustion",
    "altText": "Industrial pulverized coal burner with primary air blower for rotary kiln and drying furnace firing",
    "aspectRatio": 0.752,
    "originalDimensions": {
      "width": 1204,
      "height": 1600
    },
    "originalBytes": 206475,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 1595,
        "path": "/images/products/thermal-combustion/pulverized-coal-burner-lg.webp",
        "bytes": 148810
      },
      {
        "size": "md",
        "width": 600,
        "height": 797,
        "path": "/images/products/thermal-combustion/pulverized-coal-burner-md.webp",
        "bytes": 62016
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 199,
        "path": "/images/products/thermal-combustion/pulverized-coal-burner-thumb.webp",
        "bytes": 6268
      }
    ]
  },
  {
    "slug": "pulse-jet-bag-filter-unit",
    "originalFile": "Bag filter unit.jpeg",
    "source": "raw",
    "category": "thermal-combustion",
    "altText": "High-capacity pulse-jet fabric bag filter dust collector housing with exhaust ducting and rotary airlock valve",
    "aspectRatio": 0.439,
    "originalDimensions": {
      "width": 702,
      "height": 1600
    },
    "originalBytes": 112597,
    "variants": [
      {
        "size": "lg",
        "width": 702,
        "height": 1600,
        "path": "/images/products/thermal-combustion/pulse-jet-bag-filter-unit-lg.webp",
        "bytes": 85848
      },
      {
        "size": "md",
        "width": 600,
        "height": 1368,
        "path": "/images/products/thermal-combustion/pulse-jet-bag-filter-unit-md.webp",
        "bytes": 62368
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 342,
        "path": "/images/products/thermal-combustion/pulse-jet-bag-filter-unit-thumb.webp",
        "bytes": 4724
      }
    ]
  },
  {
    "slug": "river-sand-washing-plant",
    "originalFile": "River sand washing plant.jpeg",
    "source": "raw",
    "category": "mineral-processing",
    "altText": "Turnkey wet river sand and M-sand washing plant with dewatering screen and hydrocyclone slurry unit",
    "aspectRatio": 2.279,
    "originalDimensions": {
      "width": 1600,
      "height": 702
    },
    "originalBytes": 166972,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 527,
        "path": "/images/products/mineral-processing/river-sand-washing-plant-lg.webp",
        "bytes": 111194
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/mineral-processing/river-sand-washing-plant-md.webp",
        "bytes": 32732
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/mineral-processing/river-sand-washing-plant-thumb.webp",
        "bytes": 2314
      }
    ]
  },
  {
    "slug": "quartz-stone-washer",
    "originalFile": "Quartz stone washer.jpeg",
    "source": "raw",
    "category": "mineral-processing",
    "altText": "Heavy twin-shaft quartz stone log washer with manganese paddles for intensive clay and loam scrubbing",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1280,
      "height": 960
    },
    "originalBytes": 106834,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 900,
        "path": "/images/products/mineral-processing/quartz-stone-washer-lg.webp",
        "bytes": 72458
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/mineral-processing/quartz-stone-washer-md.webp",
        "bytes": 23778
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/mineral-processing/quartz-stone-washer-thumb.webp",
        "bytes": 2328
      }
    ]
  },
  {
    "slug": "rotary-trommel-screen",
    "originalFile": "Rotary screen.jpeg",
    "source": "raw",
    "category": "mineral-processing",
    "altText": "Industrial rotary trommel screen with perforated steel cylinder for gravel, sand, and mineral ore classification",
    "aspectRatio": 2.279,
    "originalDimensions": {
      "width": 1600,
      "height": 702
    },
    "originalBytes": 134605,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 527,
        "path": "/images/products/mineral-processing/rotary-trommel-screen-lg.webp",
        "bytes": 66904
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/mineral-processing/rotary-trommel-screen-md.webp",
        "bytes": 24504
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/mineral-processing/rotary-trommel-screen-thumb.webp",
        "bytes": 2280
      }
    ]
  },
  {
    "slug": "circular-vibrating-screen",
    "originalFile": "Vibrating screen.jpeg",
    "source": "raw",
    "category": "mineral-processing",
    "altText": "Multi-deck circular vibrating screen separator on heavy coiled springs for quarry stone and foundry sand grading",
    "aspectRatio": 2.279,
    "originalDimensions": {
      "width": 1600,
      "height": 702
    },
    "originalBytes": 108657,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 527,
        "path": "/images/products/mineral-processing/circular-vibrating-screen-lg.webp",
        "bytes": 56916
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/mineral-processing/circular-vibrating-screen-md.webp",
        "bytes": 23940
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/mineral-processing/circular-vibrating-screen-thumb.webp",
        "bytes": 2734
      }
    ]
  },
  {
    "slug": "jaw-mineral-crusher",
    "originalFile": "Crusher.jpeg",
    "source": "raw",
    "category": "mineral-processing",
    "altText": "Primary single-toggle mineral jaw crusher with cast steel frame and manganese crushing jaw dies",
    "aspectRatio": 1.329,
    "originalDimensions": {
      "width": 1600,
      "height": 1204
    },
    "originalBytes": 235621,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 903,
        "path": "/images/products/mineral-processing/jaw-mineral-crusher-lg.webp",
        "bytes": 123038
      },
      {
        "size": "md",
        "width": 600,
        "height": 452,
        "path": "/images/products/mineral-processing/jaw-mineral-crusher-md.webp",
        "bytes": 38938
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/mineral-processing/jaw-mineral-crusher-thumb.webp",
        "bytes": 3620
      }
    ]
  },
  {
    "slug": "fertilizer-granulation-plant-primary",
    "originalFile": "Fertilizer granulation plant.jpeg",
    "source": "raw",
    "category": "fertilizer-pellet",
    "altText": "Complete turnkey NPK and organic fertilizer granulation plant showing multiple inclined disc granulators and overhead belt feeds",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1280,
      "height": 960
    },
    "originalBytes": 234088,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 900,
        "path": "/images/products/fertilizer-pellet/fertilizer-granulation-plant-primary-lg.webp",
        "bytes": 195176
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/fertilizer-pellet/fertilizer-granulation-plant-primary-md.webp",
        "bytes": 63234
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/fertilizer-pellet/fertilizer-granulation-plant-primary-thumb.webp",
        "bytes": 4858
      }
    ]
  },
  {
    "slug": "fertilizer-pan-granulator-unit",
    "originalFile": "Fertilizer pan granulator.jpeg",
    "source": "raw",
    "category": "fertilizer-pellet",
    "altText": "Inclined fertilizer pan pelletizer with adjustable angle base and rotating scraper for organic compost granulation",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1040,
      "height": 780
    },
    "originalBytes": 123300,
    "variants": [
      {
        "size": "lg",
        "width": 1040,
        "height": 780,
        "path": "/images/products/fertilizer-pellet/fertilizer-pan-granulator-unit-lg.webp",
        "bytes": 100232
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/fertilizer-pellet/fertilizer-pan-granulator-unit-md.webp",
        "bytes": 42484
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/fertilizer-pellet/fertilizer-pan-granulator-unit-thumb.webp",
        "bytes": 4068
      }
    ]
  },
  {
    "slug": "disc-granulator-workshop",
    "originalFile": "Disc Granulator.jpeg",
    "source": "raw",
    "category": "fertilizer-pellet",
    "altText": "Fabricated steel disc granulator on structural pedestal frame inside Zak GIDC workshop",
    "aspectRatio": 0.439,
    "originalDimensions": {
      "width": 702,
      "height": 1600
    },
    "originalBytes": 121604,
    "variants": [
      {
        "size": "lg",
        "width": 702,
        "height": 1600,
        "path": "/images/products/fertilizer-pellet/disc-granulator-workshop-lg.webp",
        "bytes": 100500
      },
      {
        "size": "md",
        "width": 600,
        "height": 1368,
        "path": "/images/products/fertilizer-pellet/disc-granulator-workshop-md.webp",
        "bytes": 72180
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 342,
        "path": "/images/products/fertilizer-pellet/disc-granulator-workshop-thumb.webp",
        "bytes": 6068
      }
    ]
  },
  {
    "slug": "biomass-pellet-mill",
    "originalFile": "Pellet Mill.jpeg",
    "source": "raw",
    "category": "fertilizer-pellet",
    "altText": "Heavy-duty biomass pellet mill press with force feeder and robust cast housing for agro-waste pelletizing",
    "aspectRatio": 0.752,
    "originalDimensions": {
      "width": 1204,
      "height": 1600
    },
    "originalBytes": 151509,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 1595,
        "path": "/images/products/fertilizer-pellet/biomass-pellet-mill-lg.webp",
        "bytes": 97316
      },
      {
        "size": "md",
        "width": 600,
        "height": 797,
        "path": "/images/products/fertilizer-pellet/biomass-pellet-mill-md.webp",
        "bytes": 40314
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 199,
        "path": "/images/products/fertilizer-pellet/biomass-pellet-mill-thumb.webp",
        "bytes": 5222
      }
    ]
  },
  {
    "slug": "pellet-mill-die",
    "originalFile": "Pellet mill Die.jpeg",
    "source": "raw",
    "category": "fertilizer-pellet",
    "altText": "Precision gun-drilled alloy steel ring die for biomass wood and animal feed pellet machines",
    "aspectRatio": 2.279,
    "originalDimensions": {
      "width": 1600,
      "height": 702
    },
    "originalBytes": 112597,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 527,
        "path": "/images/products/fertilizer-pellet/pellet-mill-die-lg.webp",
        "bytes": 57664
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/fertilizer-pellet/pellet-mill-die-md.webp",
        "bytes": 23038
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/fertilizer-pellet/pellet-mill-die-thumb.webp",
        "bytes": 2134
      }
    ]
  },
  {
    "slug": "pellet-mill-roller-assembly",
    "originalFile": "Pellet mill Roller assembly.jpeg",
    "source": "raw",
    "category": "fertilizer-pellet",
    "altText": "Carburized alloy steel pellet mill roller shell assembly with heavy spherical roller bearings",
    "aspectRatio": 0.752,
    "originalDimensions": {
      "width": 1204,
      "height": 1600
    },
    "originalBytes": 187496,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 1595,
        "path": "/images/products/fertilizer-pellet/pellet-mill-roller-assembly-lg.webp",
        "bytes": 133380
      },
      {
        "size": "md",
        "width": 600,
        "height": 797,
        "path": "/images/products/fertilizer-pellet/pellet-mill-roller-assembly-md.webp",
        "bytes": 52330
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 199,
        "path": "/images/products/fertilizer-pellet/pellet-mill-roller-assembly-thumb.webp",
        "bytes": 5192
      }
    ]
  },
  {
    "slug": "conveyor-belt-system-truss",
    "originalFile": "Conveyor Belt System.jpeg",
    "source": "raw",
    "category": "conveyor-systems",
    "altText": "Heavy structural truss-frame troughed belt conveyor system engineered for bulk aggregate and mineral handling",
    "aspectRatio": 1.517,
    "originalDimensions": {
      "width": 1423,
      "height": 938
    },
    "originalBytes": 381023,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 791,
        "path": "/images/products/conveyor-systems/conveyor-belt-system-truss-lg.webp",
        "bytes": 174504
      },
      {
        "size": "md",
        "width": 600,
        "height": 396,
        "path": "/images/products/conveyor-systems/conveyor-belt-system-truss-md.webp",
        "bytes": 51786
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 99,
        "path": "/images/products/conveyor-systems/conveyor-belt-system-truss-thumb.webp",
        "bytes": 3842
      }
    ]
  },
  {
    "slug": "rubber-conveyor-belting-roll",
    "originalFile": "Conveyor belt.jpeg",
    "source": "raw",
    "category": "conveyor-systems",
    "altText": "Rolls of heavy-duty Grade M24 multi-ply rubber conveyor belting for quarry and crushing plant duty",
    "aspectRatio": 0.439,
    "originalDimensions": {
      "width": 702,
      "height": 1600
    },
    "originalBytes": 110316,
    "variants": [
      {
        "size": "lg",
        "width": 702,
        "height": 1600,
        "path": "/images/products/conveyor-systems/rubber-conveyor-belting-roll-lg.webp",
        "bytes": 88182
      },
      {
        "size": "md",
        "width": 600,
        "height": 1368,
        "path": "/images/products/conveyor-systems/rubber-conveyor-belting-roll-md.webp",
        "bytes": 62836
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 342,
        "path": "/images/products/conveyor-systems/rubber-conveyor-belting-roll-thumb.webp",
        "bytes": 4570
      }
    ]
  },
  {
    "slug": "conveyor-head-tail-pulleys",
    "originalFile": "Conveyor Head and Tail pulley.jpeg",
    "source": "raw",
    "category": "conveyor-systems",
    "altText": "Machined steel conveyor head drive pulley and self-cleaning tail drum pulley with heavy drive shafts",
    "aspectRatio": 2.279,
    "originalDimensions": {
      "width": 1600,
      "height": 702
    },
    "originalBytes": 204178,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 527,
        "path": "/images/products/conveyor-systems/conveyor-head-tail-pulleys-lg.webp",
        "bytes": 139548
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/conveyor-systems/conveyor-head-tail-pulleys-md.webp",
        "bytes": 37430
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/conveyor-systems/conveyor-head-tail-pulleys-thumb.webp",
        "bytes": 2008
      }
    ]
  },
  {
    "slug": "head-pulley-rubber-lagging",
    "originalFile": "Head pulley with lagging.jpeg",
    "source": "raw",
    "category": "conveyor-systems",
    "altText": "Hot vulcanized diamond-grooved rubber lagged conveyor head drum pulley for anti-slip belt drive",
    "aspectRatio": 2.279,
    "originalDimensions": {
      "width": 1600,
      "height": 702
    },
    "originalBytes": 174772,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 527,
        "path": "/images/products/conveyor-systems/head-pulley-rubber-lagging-lg.webp",
        "bytes": 112188
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/conveyor-systems/head-pulley-rubber-lagging-md.webp",
        "bytes": 28864
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/conveyor-systems/head-pulley-rubber-lagging-thumb.webp",
        "bytes": 1778
      }
    ]
  },
  {
    "slug": "conveyor-troughing-idler-roller",
    "originalFile": "Conveyor idler roller.jpeg",
    "source": "raw",
    "category": "conveyor-systems",
    "altText": "Heavy-duty steel conveyor troughing idler roller with labyrinth seals and precision bearings",
    "aspectRatio": 0.438,
    "originalDimensions": {
      "width": 503,
      "height": 1148
    },
    "originalBytes": 156919,
    "variants": [
      {
        "size": "lg",
        "width": 503,
        "height": 1148,
        "path": "/images/products/conveyor-systems/conveyor-troughing-idler-roller-lg.webp",
        "bytes": 82252
      },
      {
        "size": "md",
        "width": 503,
        "height": 1148,
        "path": "/images/products/conveyor-systems/conveyor-troughing-idler-roller-md.webp",
        "bytes": 76128
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 342,
        "path": "/images/products/conveyor-systems/conveyor-troughing-idler-roller-thumb.webp",
        "bytes": 8476
      }
    ]
  },
  {
    "slug": "dryer-trunnion-support-roller",
    "originalFile": "Trunnion roller.jpeg",
    "source": "raw",
    "category": "mechanical-spares",
    "altText": "Forged alloy steel trunnion support roller assembly with split plummer block bearing housing for rotary dryers",
    "aspectRatio": 1.335,
    "originalDimensions": {
      "width": 937,
      "height": 702
    },
    "originalBytes": 157002,
    "variants": [
      {
        "size": "lg",
        "width": 937,
        "height": 702,
        "path": "/images/products/mechanical-spares/dryer-trunnion-support-roller-lg.webp",
        "bytes": 83292
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/mechanical-spares/dryer-trunnion-support-roller-md.webp",
        "bytes": 39592
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 112,
        "path": "/images/products/mechanical-spares/dryer-trunnion-support-roller-thumb.webp",
        "bytes": 3568
      }
    ]
  },
  {
    "slug": "dryer-riding-ring-tyre",
    "originalFile": "Dryer ring.jpeg",
    "source": "raw",
    "category": "mechanical-spares",
    "altText": "Heavy forged steel riding ring tyre for continuous rotary dryer drum circumference support",
    "aspectRatio": 0.439,
    "originalDimensions": {
      "width": 702,
      "height": 1600
    },
    "originalBytes": 124305,
    "variants": [
      {
        "size": "lg",
        "width": 702,
        "height": 1600,
        "path": "/images/products/mechanical-spares/dryer-riding-ring-tyre-lg.webp",
        "bytes": 97282
      },
      {
        "size": "md",
        "width": 600,
        "height": 1368,
        "path": "/images/products/mechanical-spares/dryer-riding-ring-tyre-md.webp",
        "bytes": 76036
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 342,
        "path": "/images/products/mechanical-spares/dryer-riding-ring-tyre-thumb.webp",
        "bytes": 8592
      }
    ]
  },
  {
    "slug": "dryer-segment-sprocket",
    "originalFile": "Dryer Segment sprocket.jpeg",
    "source": "raw",
    "category": "mechanical-spares",
    "altText": "Segmented drive sprocket wheel for heavy industrial rotary drum chain transmission drive",
    "aspectRatio": 0.439,
    "originalDimensions": {
      "width": 702,
      "height": 1600
    },
    "originalBytes": 149969,
    "variants": [
      {
        "size": "lg",
        "width": 702,
        "height": 1600,
        "path": "/images/products/mechanical-spares/dryer-segment-sprocket-lg.webp",
        "bytes": 128618
      },
      {
        "size": "md",
        "width": 600,
        "height": 1368,
        "path": "/images/products/mechanical-spares/dryer-segment-sprocket-md.webp",
        "bytes": 99786
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 342,
        "path": "/images/products/mechanical-spares/dryer-segment-sprocket-thumb.webp",
        "bytes": 10460
      }
    ]
  },
  {
    "slug": "dryer-lifter-flights-radial",
    "originalFile": "Dryer flights.jpeg",
    "source": "raw",
    "category": "mechanical-spares",
    "altText": "Fabricated radial lifter flights for inside rotary dryer drum to create uniform cascading curtain of material",
    "aspectRatio": 0.439,
    "originalDimensions": {
      "width": 702,
      "height": 1600
    },
    "originalBytes": 133990,
    "variants": [
      {
        "size": "lg",
        "width": 702,
        "height": 1600,
        "path": "/images/products/mechanical-spares/dryer-lifter-flights-radial-lg.webp",
        "bytes": 116164
      },
      {
        "size": "md",
        "width": 600,
        "height": 1368,
        "path": "/images/products/mechanical-spares/dryer-lifter-flights-radial-md.webp",
        "bytes": 87164
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 342,
        "path": "/images/products/mechanical-spares/dryer-lifter-flights-radial-thumb.webp",
        "bytes": 7600
      }
    ]
  },
  {
    "slug": "dryer-lifter-flights-spiral",
    "originalFile": "Dryer flights (2).jpeg",
    "source": "raw",
    "category": "mechanical-spares",
    "altText": "Heavy internal spiral entry flights designed to propel wet feed forward into the drying zone",
    "aspectRatio": 0.439,
    "originalDimensions": {
      "width": 702,
      "height": 1600
    },
    "originalBytes": 180794,
    "variants": [
      {
        "size": "lg",
        "width": 702,
        "height": 1600,
        "path": "/images/products/mechanical-spares/dryer-lifter-flights-spiral-lg.webp",
        "bytes": 172818
      },
      {
        "size": "md",
        "width": 600,
        "height": 1368,
        "path": "/images/products/mechanical-spares/dryer-lifter-flights-spiral-md.webp",
        "bytes": 126602
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 342,
        "path": "/images/products/mechanical-spares/dryer-lifter-flights-spiral-thumb.webp",
        "bytes": 7650
      }
    ]
  },
  {
    "slug": "brochure-page-1",
    "originalFile": "brochure page 1.jpeg",
    "source": "raw",
    "category": "brochures",
    "altText": "Minerals Solutions official equipment catalog overview brochure page 1 showing machinery portfolio",
    "aspectRatio": 0.749,
    "originalDimensions": {
      "width": 1917,
      "height": 2560
    },
    "originalBytes": 1152878,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 1603,
        "path": "/images/brochures/brochure-page-1-lg.webp",
        "bytes": 290206
      },
      {
        "size": "md",
        "width": 600,
        "height": 801,
        "path": "/images/brochures/brochure-page-1-md.webp",
        "bytes": 98362
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 200,
        "path": "/images/brochures/brochure-page-1-thumb.webp",
        "bytes": 8386
      }
    ]
  },
  {
    "slug": "brochure-page-2",
    "originalFile": "brochure page 2.jpeg",
    "source": "raw",
    "category": "brochures",
    "altText": "Minerals Solutions official equipment catalog overview brochure page 2 showing plant installations",
    "aspectRatio": 0.748,
    "originalDimensions": {
      "width": 1915,
      "height": 2560
    },
    "originalBytes": 1141239,
    "variants": [
      {
        "size": "lg",
        "width": 1200,
        "height": 1604,
        "path": "/images/brochures/brochure-page-2-lg.webp",
        "bytes": 283008
      },
      {
        "size": "md",
        "width": 600,
        "height": 802,
        "path": "/images/brochures/brochure-page-2-md.webp",
        "bytes": 93192
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 201,
        "path": "/images/brochures/brochure-page-2-thumb.webp",
        "bytes": 8018
      }
    ]
  },
  {
    "slug": "factory-signboard",
    "originalFile": "factory-signboard.png",
    "source": "indiamart",
    "category": "facility",
    "altText": "Official Minerals Solutions factory signboard at 10 Shyam Estate, Zak GIDC, Dahegam, Gujarat",
    "aspectRatio": 0.563,
    "originalDimensions": {
      "width": 563,
      "height": 1000
    },
    "originalBytes": 747676,
    "variants": [
      {
        "size": "lg",
        "width": 563,
        "height": 1000,
        "path": "/images/facility/factory-signboard-lg.webp",
        "bytes": 63124
      },
      {
        "size": "md",
        "width": 563,
        "height": 1000,
        "path": "/images/facility/factory-signboard-md.webp",
        "bytes": 58212
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 266,
        "path": "/images/facility/factory-signboard-thumb.webp",
        "bytes": 6386
      }
    ]
  },
  {
    "slug": "factory-office",
    "originalFile": "factory-office.jpeg",
    "source": "indiamart",
    "category": "facility",
    "altText": "Minerals Solutions administrative and engineering design office at Zak GIDC facility",
    "aspectRatio": 0.563,
    "originalDimensions": {
      "width": 563,
      "height": 1000
    },
    "originalBytes": 65258,
    "variants": [
      {
        "size": "lg",
        "width": 563,
        "height": 1000,
        "path": "/images/facility/factory-office-lg.webp",
        "bytes": 44734
      },
      {
        "size": "md",
        "width": 563,
        "height": 1000,
        "path": "/images/facility/factory-office-md.webp",
        "bytes": 41710
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 266,
        "path": "/images/facility/factory-office-thumb.webp",
        "bytes": 4604
      }
    ]
  },
  {
    "slug": "manufacturing-unit",
    "originalFile": "manufacturing-unit.jpeg",
    "source": "indiamart",
    "category": "facility",
    "altText": "Heavy fabrication workshop floor showing rotary drum rolling, turning lathes, and structural welding bays",
    "aspectRatio": 1.779,
    "originalDimensions": {
      "width": 1000,
      "height": 562
    },
    "originalBytes": 81229,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 562,
        "path": "/images/facility/manufacturing-unit-lg.webp",
        "bytes": 53996
      },
      {
        "size": "md",
        "width": 600,
        "height": 337,
        "path": "/images/facility/manufacturing-unit-md.webp",
        "bytes": 26240
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 84,
        "path": "/images/facility/manufacturing-unit-thumb.webp",
        "bytes": 2756
      }
    ]
  },
  {
    "slug": "working-team",
    "originalFile": "working-team.jpeg",
    "source": "indiamart",
    "category": "facility",
    "altText": "Mechanical fabrication and plant engineering working team at Minerals Solutions Dahegam facility",
    "aspectRatio": 1.776,
    "originalDimensions": {
      "width": 1000,
      "height": 563
    },
    "originalBytes": 78501,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 563,
        "path": "/images/facility/working-team-lg.webp",
        "bytes": 56666
      },
      {
        "size": "md",
        "width": 600,
        "height": 338,
        "path": "/images/facility/working-team-md.webp",
        "bytes": 24384
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 84,
        "path": "/images/facility/working-team-thumb.webp",
        "bytes": 2620
      }
    ]
  },
  {
    "slug": "minerals-solutions-logo",
    "originalFile": "Sharp MS Monogram Logo on White.png",
    "source": "brand-master",
    "category": "brand",
    "altText": "Minerals Solutions official sharp MS Monogram emblem and brand mark",
    "aspectRatio": 1.0,
    "originalDimensions": {
      "width": 1318,
      "height": 1193
    },
    "originalBytes": 593400,
    "variants": [
      {
        "size": "lg",
        "width": 512,
        "height": 512,
        "path": "/images/brand/logo-lg.webp",
        "bytes": 16486
      },
      {
        "size": "md",
        "width": 256,
        "height": 256,
        "path": "/images/brand/logo-md.webp",
        "bytes": 7782
      },
      {
        "size": "thumb",
        "width": 128,
        "height": 128,
        "path": "/images/brand/logo-thumb.webp",
        "bytes": 3686
      },
      {
        "size": "transparent-md",
        "width": 256,
        "height": 256,
        "path": "/images/brand/logo-transparent-md.webp",
        "bytes": 21606
      },
      {
        "size": "dark-md",
        "width": 256,
        "height": 256,
        "path": "/images/brand/logo-dark-md.webp",
        "bytes": 24371
      }
    ]
  },
  {
    "slug": "double-pass-rotary-dryer-variant-3",
    "originalFile": "double-pass-rotary-dryer.jpg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Double pass rotary drum dryer painted blue with trunnion rollers and thrust roller assembly",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1000,
      "height": 750
    },
    "originalBytes": 117264,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 750,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-variant-3-lg.webp",
        "bytes": 100918
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-variant-3-md.webp",
        "bytes": 36810
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-variant-3-thumb.webp",
        "bytes": 3372
      }
    ]
  },
  {
    "slug": "double-pass-rotary-dryer-variant-2",
    "originalFile": "double-pass-dryer.jpeg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Concentric double pass rotary dryer with discharge hood and base skid frame",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1000,
      "height": 750
    },
    "originalBytes": 92060,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 750,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-variant-2-lg.webp",
        "bytes": 79740
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-variant-2-md.webp",
        "bytes": 32810
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-variant-2-thumb.webp",
        "bytes": 3696
      }
    ]
  },
  {
    "slug": "double-pass-rotary-dryer-variant-1",
    "originalFile": "double-pass-dryer-1.jpeg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Double pass rotary drying unit front view showing intake feed mechanism and roller base",
    "aspectRatio": 1.328,
    "originalDimensions": {
      "width": 1000,
      "height": 753
    },
    "originalBytes": 66528,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 753,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-variant-1-lg.webp",
        "bytes": 54304
      },
      {
        "size": "md",
        "width": 600,
        "height": 452,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-variant-1-md.webp",
        "bytes": 21410
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/double-pass-rotary-dryer-variant-1-thumb.webp",
        "bytes": 2386
      }
    ]
  },
  {
    "slug": "rotary-dryer-variant",
    "originalFile": "rotary-dryer.jpg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Continuous rotary drying drum with heavy carbon steel shell and support riding rings",
    "aspectRatio": 0.577,
    "originalDimensions": {
      "width": 577,
      "height": 1000
    },
    "originalBytes": 91898,
    "variants": [
      {
        "size": "lg",
        "width": 577,
        "height": 1000,
        "path": "/images/products/rotary-dryers/rotary-dryer-variant-lg.webp",
        "bytes": 79840
      },
      {
        "size": "md",
        "width": 577,
        "height": 1000,
        "path": "/images/products/rotary-dryers/rotary-dryer-variant-md.webp",
        "bytes": 74524
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 260,
        "path": "/images/products/rotary-dryers/rotary-dryer-variant-thumb.webp",
        "bytes": 7182
      }
    ]
  },
  {
    "slug": "rotary-sand-dryer-variant",
    "originalFile": "rotary-sand-dryer.jpg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Continuous industrial sand drying plant with burner chamber and exhaust cyclone",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1000,
      "height": 439
    },
    "originalBytes": 100148,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 439,
        "path": "/images/products/rotary-dryers/rotary-sand-dryer-variant-lg.webp",
        "bytes": 87242
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/rotary-dryers/rotary-sand-dryer-variant-md.webp",
        "bytes": 25740
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/rotary-dryers/rotary-sand-dryer-variant-thumb.webp",
        "bytes": 1950
      }
    ]
  },
  {
    "slug": "silica-sand-dryer-variant",
    "originalFile": "silica-sand-dryer.jpeg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "High-temperature silica sand rotary dryer drum for foundry and glass manufacturing use",
    "aspectRatio": 1.33,
    "originalDimensions": {
      "width": 1000,
      "height": 752
    },
    "originalBytes": 154680,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 752,
        "path": "/images/products/rotary-dryers/silica-sand-dryer-variant-lg.webp",
        "bytes": 134492
      },
      {
        "size": "md",
        "width": 600,
        "height": 451,
        "path": "/images/products/rotary-dryers/silica-sand-dryer-variant-md.webp",
        "bytes": 55912
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/silica-sand-dryer-variant-thumb.webp",
        "bytes": 5400
      }
    ]
  },
  {
    "slug": "saw-dust-dryer-variant",
    "originalFile": "saw-dust-dryer.jpg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Biomass sawdust flash drying drum with air ducting and blower assembly",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1000,
      "height": 750
    },
    "originalBytes": 71362,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 750,
        "path": "/images/products/rotary-dryers/saw-dust-dryer-variant-lg.webp",
        "bytes": 58310
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/rotary-dryers/saw-dust-dryer-variant-md.webp",
        "bytes": 24508
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/saw-dust-dryer-variant-thumb.webp",
        "bytes": 2548
      }
    ]
  },
  {
    "slug": "biomass-dryer-1500kg-hr",
    "originalFile": "1500-kg-hr-biomass-dryer.jpeg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "High-throughput 1500 kg per hour industrial biomass drying plant with cyclone collector",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1000,
      "height": 750
    },
    "originalBytes": 70742,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 750,
        "path": "/images/products/rotary-dryers/biomass-dryer-1500kg-hr-lg.webp",
        "bytes": 60906
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/rotary-dryers/biomass-dryer-1500kg-hr-md.webp",
        "bytes": 24600
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/biomass-dryer-1500kg-hr-thumb.webp",
        "bytes": 2532
      }
    ]
  },
  {
    "slug": "coir-pith-dryer-500kg-hr",
    "originalFile": "500kg-hr-coir-pith-dryer.jpeg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "500 kg per hour coir pith and agricultural waste rotary dryer with heat exchanger",
    "aspectRatio": 0.439,
    "originalDimensions": {
      "width": 439,
      "height": 1000
    },
    "originalBytes": 82420,
    "variants": [
      {
        "size": "lg",
        "width": 439,
        "height": 1000,
        "path": "/images/products/rotary-dryers/coir-pith-dryer-500kg-hr-lg.webp",
        "bytes": 71510
      },
      {
        "size": "md",
        "width": 439,
        "height": 1000,
        "path": "/images/products/rotary-dryers/coir-pith-dryer-500kg-hr-md.webp",
        "bytes": 67744
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 342,
        "path": "/images/products/rotary-dryers/coir-pith-dryer-500kg-hr-thumb.webp",
        "bytes": 8046
      }
    ]
  },
  {
    "slug": "coconut-coir-dryer",
    "originalFile": "coconut-coir-dryer.jpeg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Specialized coconut coir rotary dryer with gentle pneumatic tumbling flights",
    "aspectRatio": 1.776,
    "originalDimensions": {
      "width": 1000,
      "height": 563
    },
    "originalBytes": 85730,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 563,
        "path": "/images/products/rotary-dryers/coconut-coir-dryer-lg.webp",
        "bytes": 68634
      },
      {
        "size": "md",
        "width": 600,
        "height": 338,
        "path": "/images/products/rotary-dryers/coconut-coir-dryer-md.webp",
        "bytes": 21380
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 84,
        "path": "/images/products/rotary-dryers/coconut-coir-dryer-thumb.webp",
        "bytes": 2038
      }
    ]
  },
  {
    "slug": "rotary-cocopeat-dryer",
    "originalFile": "rotary-cocopeat-dryer.jpg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Continuous rotary cocopeat drying system for export-grade horticultural peat blocks",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1000,
      "height": 750
    },
    "originalBytes": 95238,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 750,
        "path": "/images/products/rotary-dryers/rotary-cocopeat-dryer-lg.webp",
        "bytes": 79984
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/rotary-dryers/rotary-cocopeat-dryer-md.webp",
        "bytes": 27560
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/rotary-cocopeat-dryer-thumb.webp",
        "bytes": 2316
      }
    ]
  },
  {
    "slug": "continuous-type-rotary-dryer",
    "originalFile": "continuous-type-rotary-dryer.jpeg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Industrial continuous type rotary drying cylinder with heavy reduction gearbox drive",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1000,
      "height": 439
    },
    "originalBytes": 100808,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 439,
        "path": "/images/products/rotary-dryers/continuous-type-rotary-dryer-lg.webp",
        "bytes": 87572
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/rotary-dryers/continuous-type-rotary-dryer-md.webp",
        "bytes": 25848
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/rotary-dryers/continuous-type-rotary-dryer-thumb.webp",
        "bytes": 1944
      }
    ]
  },
  {
    "slug": "limestone-dryer",
    "originalFile": "limestone-dryer.jpg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Heavy-duty limestone and calcium carbonate rotary dryer with abrasion-resistant internal lifters",
    "aspectRatio": 1.776,
    "originalDimensions": {
      "width": 1000,
      "height": 563
    },
    "originalBytes": 81352,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 563,
        "path": "/images/products/rotary-dryers/limestone-dryer-lg.webp",
        "bytes": 70632
      },
      {
        "size": "md",
        "width": 600,
        "height": 338,
        "path": "/images/products/rotary-dryers/limestone-dryer-md.webp",
        "bytes": 27064
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 84,
        "path": "/images/products/rotary-dryers/limestone-dryer-thumb.webp",
        "bytes": 2502
      }
    ]
  },
  {
    "slug": "sand-dryer-coal-fired-hag-variant",
    "originalFile": "sand-dryer-with-coal-fired-hot-air-generator.jpeg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Industrial sand drying system connected to brick-lined coal-fired hot air generator furnace",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1000,
      "height": 439
    },
    "originalBytes": 70412,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 439,
        "path": "/images/products/rotary-dryers/sand-dryer-coal-fired-hag-variant-lg.webp",
        "bytes": 62254
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/rotary-dryers/sand-dryer-coal-fired-hag-variant-md.webp",
        "bytes": 22070
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/rotary-dryers/sand-dryer-coal-fired-hag-variant-thumb.webp",
        "bytes": 2130
      }
    ]
  },
  {
    "slug": "sand-dryer-gas-burner-variant",
    "originalFile": "sand-dryer-with-gas-burner.jpeg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Gas burner fired rotary sand drying plant with automated flame safety control",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1000,
      "height": 439
    },
    "originalBytes": 55552,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 439,
        "path": "/images/products/rotary-dryers/sand-dryer-gas-burner-variant-lg.webp",
        "bytes": 47562
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/rotary-dryers/sand-dryer-gas-burner-variant-md.webp",
        "bytes": 19190
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/rotary-dryers/sand-dryer-gas-burner-variant-thumb.webp",
        "bytes": 2322
      }
    ]
  },
  {
    "slug": "coal-fired-rotary-dryer-system",
    "originalFile": "coal-fired-heating-rotary-dryer-system.jpeg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Solid fuel coal-fired heating chamber integrated with continuous rotary drying drum",
    "aspectRatio": 0.753,
    "originalDimensions": {
      "width": 753,
      "height": 1000
    },
    "originalBytes": 105364,
    "variants": [
      {
        "size": "lg",
        "width": 753,
        "height": 1000,
        "path": "/images/products/rotary-dryers/coal-fired-rotary-dryer-system-lg.webp",
        "bytes": 89688
      },
      {
        "size": "md",
        "width": 600,
        "height": 797,
        "path": "/images/products/rotary-dryers/coal-fired-rotary-dryer-system-md.webp",
        "bytes": 53570
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 199,
        "path": "/images/products/rotary-dryers/coal-fired-rotary-dryer-system-thumb.webp",
        "bytes": 6124
      }
    ]
  },
  {
    "slug": "borax-dryer-heat-exchanger-variant",
    "originalFile": "borax-powder-dryer-with-heat-exchanger-bag-filter.jpg",
    "source": "indiamart",
    "category": "rotary-dryers",
    "altText": "Chemical powder borax dryer featuring heat exchanger unit and high-efficiency bag filter",
    "aspectRatio": 1.33,
    "originalDimensions": {
      "width": 1000,
      "height": 752
    },
    "originalBytes": 150534,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 752,
        "path": "/images/products/rotary-dryers/borax-dryer-heat-exchanger-variant-lg.webp",
        "bytes": 132130
      },
      {
        "size": "md",
        "width": 600,
        "height": 451,
        "path": "/images/products/rotary-dryers/borax-dryer-heat-exchanger-variant-md.webp",
        "bytes": 48346
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/rotary-dryers/borax-dryer-heat-exchanger-variant-thumb.webp",
        "bytes": 3868
      }
    ]
  },
  {
    "slug": "direct-hot-air-generator",
    "originalFile": "direct-hot-air-generator.jpg",
    "source": "indiamart",
    "category": "thermal-combustion",
    "altText": "Direct industrial hot air generator with combustion blower and refractory furnace",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1000,
      "height": 750
    },
    "originalBytes": 109094,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 750,
        "path": "/images/products/thermal-combustion/direct-hot-air-generator-lg.webp",
        "bytes": 92616
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/thermal-combustion/direct-hot-air-generator-md.webp",
        "bytes": 36354
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/thermal-combustion/direct-hot-air-generator-thumb.webp",
        "bytes": 3488
      }
    ]
  },
  {
    "slug": "solid-fuel-fired-hot-air-generator",
    "originalFile": "solid-fuel-fired-hot-air-generator.jpg",
    "source": "indiamart",
    "category": "thermal-combustion",
    "altText": "Solid-fuel fired hot air generator designed for biomass, wood, and coal combustion",
    "aspectRatio": 1.776,
    "originalDimensions": {
      "width": 1000,
      "height": 563
    },
    "originalBytes": 85826,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 563,
        "path": "/images/products/thermal-combustion/solid-fuel-fired-hot-air-generator-lg.webp",
        "bytes": 73836
      },
      {
        "size": "md",
        "width": 600,
        "height": 338,
        "path": "/images/products/thermal-combustion/solid-fuel-fired-hot-air-generator-md.webp",
        "bytes": 26302
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 84,
        "path": "/images/products/thermal-combustion/solid-fuel-fired-hot-air-generator-thumb.webp",
        "bytes": 2368
      }
    ]
  },
  {
    "slug": "biomass-coal-fired-hot-air-generator",
    "originalFile": "biomass-and-coal-fired-industrial-hot-air-generator.jpg",
    "source": "indiamart",
    "category": "thermal-combustion",
    "altText": "Biomass and coal dual-fuel industrial hot air generator with heavy steel air jacket",
    "aspectRatio": 1.776,
    "originalDimensions": {
      "width": 1000,
      "height": 563
    },
    "originalBytes": 99568,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 563,
        "path": "/images/products/thermal-combustion/biomass-coal-fired-hot-air-generator-lg.webp",
        "bytes": 86426
      },
      {
        "size": "md",
        "width": 600,
        "height": 338,
        "path": "/images/products/thermal-combustion/biomass-coal-fired-hot-air-generator-md.webp",
        "bytes": 33538
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 84,
        "path": "/images/products/thermal-combustion/biomass-coal-fired-hot-air-generator-thumb.webp",
        "bytes": 3278
      }
    ]
  },
  {
    "slug": "bag-filter-systems-variant",
    "originalFile": "bag-filter-systems.jpeg",
    "source": "indiamart",
    "category": "thermal-combustion",
    "altText": "Industrial pulse-jet bag filter dust collection system with vertical filter bag cages",
    "aspectRatio": 0.55,
    "originalDimensions": {
      "width": 550,
      "height": 1000
    },
    "originalBytes": 52844,
    "variants": [
      {
        "size": "lg",
        "width": 550,
        "height": 1000,
        "path": "/images/products/thermal-combustion/bag-filter-systems-variant-lg.webp",
        "bytes": 44414
      },
      {
        "size": "md",
        "width": 550,
        "height": 1000,
        "path": "/images/products/thermal-combustion/bag-filter-systems-variant-md.webp",
        "bytes": 41150
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 273,
        "path": "/images/products/thermal-combustion/bag-filter-systems-variant-thumb.webp",
        "bytes": 3730
      }
    ]
  },
  {
    "slug": "river-sand-washing-plant-variant",
    "originalFile": "river-sand-washing-plant.jpg",
    "source": "indiamart",
    "category": "mineral-processing",
    "altText": "River sand washing plant with hydrocyclone separator and dewatering screen",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1000,
      "height": 439
    },
    "originalBytes": 99442,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 439,
        "path": "/images/products/mineral-processing/river-sand-washing-plant-variant-lg.webp",
        "bytes": 87726
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/mineral-processing/river-sand-washing-plant-variant-md.webp",
        "bytes": 29934
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/mineral-processing/river-sand-washing-plant-variant-thumb.webp",
        "bytes": 2358
      }
    ]
  },
  {
    "slug": "quartz-stone-washer-variant",
    "originalFile": "quartz-stone-sand-washers.jpeg",
    "source": "indiamart",
    "category": "mineral-processing",
    "altText": "Log washer unit for intensive quartz stone lump and silica sand scrubbing",
    "aspectRatio": 1.887,
    "originalDimensions": {
      "width": 1000,
      "height": 530
    },
    "originalBytes": 32116,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 530,
        "path": "/images/products/mineral-processing/quartz-stone-washer-variant-lg.webp",
        "bytes": 27822
      },
      {
        "size": "md",
        "width": 600,
        "height": 318,
        "path": "/images/products/mineral-processing/quartz-stone-washer-variant-md.webp",
        "bytes": 11372
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 80,
        "path": "/images/products/mineral-processing/quartz-stone-washer-variant-thumb.webp",
        "bytes": 1540
      }
    ]
  },
  {
    "slug": "rotary-screen-variant",
    "originalFile": "rotary-screen.jpeg",
    "source": "indiamart",
    "category": "mineral-processing",
    "altText": "Rotary trommel screen machine with heavy drive sprocket for mineral aggregate separation",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1000,
      "height": 439
    },
    "originalBytes": 80636,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 439,
        "path": "/images/products/mineral-processing/rotary-screen-variant-lg.webp",
        "bytes": 70716
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/mineral-processing/rotary-screen-variant-md.webp",
        "bytes": 29436
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/mineral-processing/rotary-screen-variant-thumb.webp",
        "bytes": 2848
      }
    ]
  },
  {
    "slug": "crusher-machine-variant",
    "originalFile": "crusher-machine.jpeg",
    "source": "indiamart",
    "category": "mineral-processing",
    "altText": "Heavy primary jaw crusher machine for hard rock, quartz, and mineral ore crushing",
    "aspectRatio": 1.119,
    "originalDimensions": {
      "width": 1000,
      "height": 894
    },
    "originalBytes": 120678,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 894,
        "path": "/images/products/mineral-processing/crusher-machine-variant-lg.webp",
        "bytes": 105304
      },
      {
        "size": "md",
        "width": 600,
        "height": 536,
        "path": "/images/products/mineral-processing/crusher-machine-variant-md.webp",
        "bytes": 38810
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 134,
        "path": "/images/products/mineral-processing/crusher-machine-variant-thumb.webp",
        "bytes": 4120
      }
    ]
  },
  {
    "slug": "fertilizer-granulation-plant-variant",
    "originalFile": "fertilizer-granulation-plant.jpg",
    "source": "indiamart",
    "category": "fertilizer-pellet",
    "altText": "NPK compound and organic fertilizer granulation line with pan granulator and belt conveyors",
    "aspectRatio": 1.422,
    "originalDimensions": {
      "width": 1000,
      "height": 703
    },
    "originalBytes": 135272,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 703,
        "path": "/images/products/fertilizer-pellet/fertilizer-granulation-plant-variant-lg.webp",
        "bytes": 119022
      },
      {
        "size": "md",
        "width": 600,
        "height": 422,
        "path": "/images/products/fertilizer-pellet/fertilizer-granulation-plant-variant-md.webp",
        "bytes": 52670
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 105,
        "path": "/images/products/fertilizer-pellet/fertilizer-granulation-plant-variant-thumb.webp",
        "bytes": 5554
      }
    ]
  },
  {
    "slug": "pan-disc-fertilizer-granulator-variant",
    "originalFile": "pan-disc-fertilizer-granulation-machine.jpeg",
    "source": "indiamart",
    "category": "fertilizer-pellet",
    "altText": "Disc pan fertilizer granulation machine with 2.2 meter diameter and angle adjustment",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1000,
      "height": 750
    },
    "originalBytes": 114750,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 750,
        "path": "/images/products/fertilizer-pellet/pan-disc-fertilizer-granulator-variant-lg.webp",
        "bytes": 96648
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/fertilizer-pellet/pan-disc-fertilizer-granulator-variant-md.webp",
        "bytes": 38970
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/fertilizer-pellet/pan-disc-fertilizer-granulator-variant-thumb.webp",
        "bytes": 4010
      }
    ]
  },
  {
    "slug": "stainless-steel-disc-granulator",
    "originalFile": "stainless-steel-disc-granulator.jpeg",
    "source": "indiamart",
    "category": "fertilizer-pellet",
    "altText": "Corrosion-resistant stainless steel lined disc granulator for chemical fertilizer mixtures",
    "aspectRatio": 0.735,
    "originalDimensions": {
      "width": 735,
      "height": 1000
    },
    "originalBytes": 90636,
    "variants": [
      {
        "size": "lg",
        "width": 735,
        "height": 1000,
        "path": "/images/products/fertilizer-pellet/stainless-steel-disc-granulator-lg.webp",
        "bytes": 76476
      },
      {
        "size": "md",
        "width": 600,
        "height": 816,
        "path": "/images/products/fertilizer-pellet/stainless-steel-disc-granulator-md.webp",
        "bytes": 42296
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 204,
        "path": "/images/products/fertilizer-pellet/stainless-steel-disc-granulator-thumb.webp",
        "bytes": 5052
      }
    ]
  },
  {
    "slug": "agro-waste-pellet-machine-variant",
    "originalFile": "agro-waste-pellet-making-machine.jpeg",
    "source": "indiamart",
    "category": "fertilizer-pellet",
    "altText": "Agro waste biomass pellet making press for sawdust, crop residues, and bio-fuel pellets",
    "aspectRatio": 0.753,
    "originalDimensions": {
      "width": 753,
      "height": 1000
    },
    "originalBytes": 70034,
    "variants": [
      {
        "size": "lg",
        "width": 753,
        "height": 1000,
        "path": "/images/products/fertilizer-pellet/agro-waste-pellet-machine-variant-lg.webp",
        "bytes": 59088
      },
      {
        "size": "md",
        "width": 600,
        "height": 797,
        "path": "/images/products/fertilizer-pellet/agro-waste-pellet-machine-variant-md.webp",
        "bytes": 36366
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 199,
        "path": "/images/products/fertilizer-pellet/agro-waste-pellet-machine-variant-thumb.webp",
        "bytes": 5094
      }
    ]
  },
  {
    "slug": "pellet-mill-die-variant",
    "originalFile": "pellet-mill-die.jpeg",
    "source": "indiamart",
    "category": "fertilizer-pellet",
    "altText": "Alloy steel ring die showing precision mirror-drilled extrusion compression holes",
    "aspectRatio": 1.508,
    "originalDimensions": {
      "width": 1000,
      "height": 663
    },
    "originalBytes": 71350,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 663,
        "path": "/images/products/fertilizer-pellet/pellet-mill-die-variant-lg.webp",
        "bytes": 61636
      },
      {
        "size": "md",
        "width": 600,
        "height": 398,
        "path": "/images/products/fertilizer-pellet/pellet-mill-die-variant-md.webp",
        "bytes": 27036
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 99,
        "path": "/images/products/fertilizer-pellet/pellet-mill-die-variant-thumb.webp",
        "bytes": 3730
      }
    ]
  },
  {
    "slug": "belt-conveyor-system-variant-1",
    "originalFile": "belt-conveyor-system.jpeg",
    "source": "indiamart",
    "category": "conveyor-systems",
    "altText": "Industrial troughed belt conveyor system on channel steel supports for bulk material transfer",
    "aspectRatio": 1.942,
    "originalDimensions": {
      "width": 1000,
      "height": 515
    },
    "originalBytes": 130002,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 515,
        "path": "/images/products/conveyor-systems/belt-conveyor-system-variant-1-lg.webp",
        "bytes": 115148
      },
      {
        "size": "md",
        "width": 600,
        "height": 309,
        "path": "/images/products/conveyor-systems/belt-conveyor-system-variant-1-md.webp",
        "bytes": 37998
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 77,
        "path": "/images/products/conveyor-systems/belt-conveyor-system-variant-1-thumb.webp",
        "bytes": 2996
      }
    ]
  },
  {
    "slug": "belt-conveyor-system-variant-2",
    "originalFile": "belt-conveyor.jpeg",
    "source": "indiamart",
    "category": "conveyor-systems",
    "altText": "Bulk material belt conveyor with walkway truss and drive motor assembly",
    "aspectRatio": 1.456,
    "originalDimensions": {
      "width": 1000,
      "height": 687
    },
    "originalBytes": 151676,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 687,
        "path": "/images/products/conveyor-systems/belt-conveyor-system-variant-2-lg.webp",
        "bytes": 134374
      },
      {
        "size": "md",
        "width": 600,
        "height": 412,
        "path": "/images/products/conveyor-systems/belt-conveyor-system-variant-2-md.webp",
        "bytes": 46712
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 103,
        "path": "/images/products/conveyor-systems/belt-conveyor-system-variant-2-thumb.webp",
        "bytes": 4038
      }
    ]
  },
  {
    "slug": "belt-conveyor-mineral-ore-beneficiation",
    "originalFile": "belt-conveyor-system-for-mineral-ore-beneficiation-plant.jpeg",
    "source": "indiamart",
    "category": "conveyor-systems",
    "altText": "Heavy-duty belt conveyor system engineered for mining ore and mineral beneficiation plants",
    "aspectRatio": 1.504,
    "originalDimensions": {
      "width": 1000,
      "height": 665
    },
    "originalBytes": 156260,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 665,
        "path": "/images/products/conveyor-systems/belt-conveyor-mineral-ore-beneficiation-lg.webp",
        "bytes": 137120
      },
      {
        "size": "md",
        "width": 600,
        "height": 399,
        "path": "/images/products/conveyor-systems/belt-conveyor-mineral-ore-beneficiation-md.webp",
        "bytes": 46376
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 100,
        "path": "/images/products/conveyor-systems/belt-conveyor-mineral-ore-beneficiation-thumb.webp",
        "bytes": 3830
      }
    ]
  },
  {
    "slug": "rubber-conveyor-belt-stone-crusher",
    "originalFile": "rubber-conveyor-belt-for-stone-crusher.jpeg",
    "source": "indiamart",
    "category": "conveyor-systems",
    "altText": "Heavy-duty Grade M24 rubber conveyor belting designed for stone crusher aggregate feeds",
    "aspectRatio": 0.574,
    "originalDimensions": {
      "width": 574,
      "height": 1000
    },
    "originalBytes": 76264,
    "variants": [
      {
        "size": "lg",
        "width": 574,
        "height": 1000,
        "path": "/images/products/conveyor-systems/rubber-conveyor-belt-stone-crusher-lg.webp",
        "bytes": 66244
      },
      {
        "size": "md",
        "width": 574,
        "height": 1000,
        "path": "/images/products/conveyor-systems/rubber-conveyor-belt-stone-crusher-md.webp",
        "bytes": 62004
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 261,
        "path": "/images/products/conveyor-systems/rubber-conveyor-belt-stone-crusher-thumb.webp",
        "bytes": 3916
      }
    ]
  },
  {
    "slug": "nylon-stone-crusher-conveyor-belt",
    "originalFile": "nylon-stone-crusher-rubber-conveyor-belt.png",
    "source": "indiamart",
    "category": "conveyor-systems",
    "altText": "3-ply nylon reinforced rubber conveyor belt compliant with IS 1891 Part 1 standards",
    "aspectRatio": 1,
    "originalDimensions": {
      "width": 1000,
      "height": 1000
    },
    "originalBytes": 70890,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 1000,
        "path": "/images/products/conveyor-systems/nylon-stone-crusher-conveyor-belt-lg.webp",
        "bytes": 57178
      },
      {
        "size": "md",
        "width": 600,
        "height": 600,
        "path": "/images/products/conveyor-systems/nylon-stone-crusher-conveyor-belt-md.webp",
        "bytes": 19272
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 150,
        "path": "/images/products/conveyor-systems/nylon-stone-crusher-conveyor-belt-thumb.webp",
        "bytes": 1884
      }
    ]
  },
  {
    "slug": "conveyor-head-tail-pulley-variant",
    "originalFile": "conveyor-head-pulley-tail-pulley.jpeg",
    "source": "indiamart",
    "category": "conveyor-systems",
    "altText": "Crowned steel conveyor head drive drum pulley and matching self-cleaning tail pulley",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1000,
      "height": 439
    },
    "originalBytes": 124010,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 439,
        "path": "/images/products/conveyor-systems/conveyor-head-tail-pulley-variant-lg.webp",
        "bytes": 108958
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/conveyor-systems/conveyor-head-tail-pulley-variant-md.webp",
        "bytes": 32980
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/conveyor-systems/conveyor-head-tail-pulley-variant-thumb.webp",
        "bytes": 2092
      }
    ]
  },
  {
    "slug": "conveyor-tail-drum-pulley",
    "originalFile": "conveyor-tail-drum-pulley.jpg",
    "source": "indiamart",
    "category": "conveyor-systems",
    "altText": "Self-cleaning wing-type conveyor tail drum pulley with internal heavy bearing arrangement",
    "aspectRatio": 0.874,
    "originalDimensions": {
      "width": 874,
      "height": 1000
    },
    "originalBytes": 122458,
    "variants": [
      {
        "size": "lg",
        "width": 874,
        "height": 1000,
        "path": "/images/products/conveyor-systems/conveyor-tail-drum-pulley-lg.webp",
        "bytes": 104270
      },
      {
        "size": "md",
        "width": 600,
        "height": 686,
        "path": "/images/products/conveyor-systems/conveyor-tail-drum-pulley-md.webp",
        "bytes": 53654
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 172,
        "path": "/images/products/conveyor-systems/conveyor-tail-drum-pulley-thumb.webp",
        "bytes": 6086
      }
    ]
  },
  {
    "slug": "legging-head-drum-pulley-variant",
    "originalFile": "legging-head-drum-pulley.jpeg",
    "source": "indiamart",
    "category": "conveyor-systems",
    "altText": "Diamond-pattern vulcanized rubber lagged conveyor head drum pulley for belt grip",
    "aspectRatio": 2.278,
    "originalDimensions": {
      "width": 1000,
      "height": 439
    },
    "originalBytes": 100428,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 439,
        "path": "/images/products/conveyor-systems/legging-head-drum-pulley-variant-lg.webp",
        "bytes": 86554
      },
      {
        "size": "md",
        "width": 600,
        "height": 263,
        "path": "/images/products/conveyor-systems/legging-head-drum-pulley-variant-md.webp",
        "bytes": 25282
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 66,
        "path": "/images/products/conveyor-systems/legging-head-drum-pulley-variant-thumb.webp",
        "bytes": 1868
      }
    ]
  },
  {
    "slug": "conveyor-idler-roller-variant-1",
    "originalFile": "conveyor-idler-roller.jpeg",
    "source": "indiamart",
    "category": "conveyor-systems",
    "altText": "Troughing idler roller set on structural steel bracket with precision bearings",
    "aspectRatio": 0.875,
    "originalDimensions": {
      "width": 875,
      "height": 1000
    },
    "originalBytes": 136612,
    "variants": [
      {
        "size": "lg",
        "width": 875,
        "height": 1000,
        "path": "/images/products/conveyor-systems/conveyor-idler-roller-variant-1-lg.webp",
        "bytes": 118682
      },
      {
        "size": "md",
        "width": 600,
        "height": 686,
        "path": "/images/products/conveyor-systems/conveyor-idler-roller-variant-1-md.webp",
        "bytes": 49550
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 171,
        "path": "/images/products/conveyor-systems/conveyor-idler-roller-variant-1-thumb.webp",
        "bytes": 4520
      }
    ]
  },
  {
    "slug": "conveyor-idler-roller-variant-2",
    "originalFile": "conveyor-idler-roller.png",
    "source": "indiamart",
    "category": "conveyor-systems",
    "altText": "Precision conveyor return and troughing idler roller showing shaft end machining",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1000,
      "height": 750
    },
    "originalBytes": 50964,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 750,
        "path": "/images/products/conveyor-systems/conveyor-idler-roller-variant-2-lg.webp",
        "bytes": 43860
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/conveyor-systems/conveyor-idler-roller-variant-2-md.webp",
        "bytes": 12830
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/conveyor-systems/conveyor-idler-roller-variant-2-thumb.webp",
        "bytes": 1292
      }
    ]
  },
  {
    "slug": "mild-steel-conveyor-idler-roller",
    "originalFile": "mild-steel-conveyor-idler-roller.jpeg",
    "source": "indiamart",
    "category": "conveyor-systems",
    "altText": "Mild steel tube conveyor idler roller with multi-labyrinth dust and water seals",
    "aspectRatio": 0.875,
    "originalDimensions": {
      "width": 702,
      "height": 802
    },
    "originalBytes": 108948,
    "variants": [
      {
        "size": "lg",
        "width": 702,
        "height": 802,
        "path": "/images/products/conveyor-systems/mild-steel-conveyor-idler-roller-lg.webp",
        "bytes": 95574
      },
      {
        "size": "md",
        "width": 600,
        "height": 685,
        "path": "/images/products/conveyor-systems/mild-steel-conveyor-idler-roller-md.webp",
        "bytes": 53092
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 171,
        "path": "/images/products/conveyor-systems/mild-steel-conveyor-idler-roller-thumb.webp",
        "bytes": 4588
      }
    ]
  },
  {
    "slug": "dryer-support-roller-variant-1",
    "originalFile": "dryer-support-roller.jpeg",
    "source": "indiamart",
    "category": "mechanical-spares",
    "altText": "Induction hardened forged steel trunnion support roller on heavy base for rotary dryers",
    "aspectRatio": 1.328,
    "originalDimensions": {
      "width": 1000,
      "height": 753
    },
    "originalBytes": 68972,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 753,
        "path": "/images/products/mechanical-spares/dryer-support-roller-variant-1-lg.webp",
        "bytes": 55108
      },
      {
        "size": "md",
        "width": 600,
        "height": 452,
        "path": "/images/products/mechanical-spares/dryer-support-roller-variant-1-md.webp",
        "bytes": 22154
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/mechanical-spares/dryer-support-roller-variant-1-thumb.webp",
        "bytes": 2620
      }
    ]
  },
  {
    "slug": "dryer-support-roller-variant-2",
    "originalFile": "support-roller-for-rotary-kiln.jpg",
    "source": "indiamart",
    "category": "mechanical-spares",
    "altText": "Heavy-duty rotary kiln and dryer support roller assembly with spherical roller bearings",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1000,
      "height": 750
    },
    "originalBytes": 179298,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 750,
        "path": "/images/products/mechanical-spares/dryer-support-roller-variant-2-lg.webp",
        "bytes": 157036
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/mechanical-spares/dryer-support-roller-variant-2-md.webp",
        "bytes": 45420
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/mechanical-spares/dryer-support-roller-variant-2-thumb.webp",
        "bytes": 2822
      }
    ]
  },
  {
    "slug": "industrial-thrust-roller",
    "originalFile": "industrial-grade-thrust-roller.jpg",
    "source": "indiamart",
    "category": "mechanical-spares",
    "altText": "Vertical mechanical thrust roller assembly to restrain axial travel of rotary dryer drums",
    "aspectRatio": 0.75,
    "originalDimensions": {
      "width": 750,
      "height": 1000
    },
    "originalBytes": 73058,
    "variants": [
      {
        "size": "lg",
        "width": 750,
        "height": 1000,
        "path": "/images/products/mechanical-spares/industrial-thrust-roller-lg.webp",
        "bytes": 60542
      },
      {
        "size": "md",
        "width": 600,
        "height": 800,
        "path": "/images/products/mechanical-spares/industrial-thrust-roller-md.webp",
        "bytes": 34594
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 200,
        "path": "/images/products/mechanical-spares/industrial-thrust-roller-thumb.webp",
        "bytes": 3764
      }
    ]
  },
  {
    "slug": "dryer-girth-gear-variant-1",
    "originalFile": "girth-gear-for-rotary-dryer.jpg",
    "source": "indiamart",
    "category": "mechanical-spares",
    "altText": "Precision machined split girth gear ring for heavy industrial rotary drum rotation drive",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1000,
      "height": 750
    },
    "originalBytes": 166336,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 750,
        "path": "/images/products/mechanical-spares/dryer-girth-gear-variant-1-lg.webp",
        "bytes": 147224
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/mechanical-spares/dryer-girth-gear-variant-1-md.webp",
        "bytes": 53288
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/mechanical-spares/dryer-girth-gear-variant-1-thumb.webp",
        "bytes": 4428
      }
    ]
  },
  {
    "slug": "dryer-girth-gear-variant-2",
    "originalFile": "girth-gear-for-rotary-dryer-1.jpg",
    "source": "indiamart",
    "category": "mechanical-spares",
    "altText": "Cast steel drive girth gear wheel mounted on rotary dryer drum shell",
    "aspectRatio": 1.333,
    "originalDimensions": {
      "width": 1000,
      "height": 750
    },
    "originalBytes": 185826,
    "variants": [
      {
        "size": "lg",
        "width": 1000,
        "height": 750,
        "path": "/images/products/mechanical-spares/dryer-girth-gear-variant-2-lg.webp",
        "bytes": 162564
      },
      {
        "size": "md",
        "width": 600,
        "height": 450,
        "path": "/images/products/mechanical-spares/dryer-girth-gear-variant-2-md.webp",
        "bytes": 58590
      },
      {
        "size": "thumb",
        "width": 150,
        "height": 113,
        "path": "/images/products/mechanical-spares/dryer-girth-gear-variant-2-thumb.webp",
        "bytes": 4546
      }
    ]
  }
];

export function getImageBySlug(slug: string): ImageRegistryEntry | undefined {
  return imageRegistry.find((img) => img.slug === slug);
}

export function getImagesByCategory(category: ImageRegistryEntry['category']): ImageRegistryEntry[] {
  return imageRegistry.filter((img) => img.category === category);
}

export function getPrimaryImage(slug: string, size: 'lg' | 'md' | 'thumb' = 'lg'): ImageVariant | undefined {
  const entry = getImageBySlug(slug);
  if (!entry) return undefined;
  return entry.variants.find((v) => v.size === size) || entry.variants[0];
}
