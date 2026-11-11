import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const defs = {
  'triple-pass-dryer': {
    pillar: 'industrial-rotary-dryers',
    q: 'What is a triple pass rotary drum dryer?',
    text: 'A triple pass rotary drum dryer is an advanced continuous industrial thermal processing system constructed from three nested concentric rotating cylinders engineered to maximize heat transfer efficiency in compact factory layouts. Manufactured in Zak GIDC, Dahegam from certified IS 2062 Grade B carbon steel (with optional SS 304 or SS 316 inner contact passes), wet granular minerals or crystalline powders travel through an inner co-current cylinder, reverse 180 degrees into a middle counter-cascading annular cylinder, and discharge through an outer low-temperature cylinder. This nested geometry triples thermal retention time while occupying approximately 40% to 50% less linear bay length than equivalent single-pass drums. Operating with evaporative capacities from 500 kg/hr to 15 TPH, thermal efficiency ranges from 80% to 88%, dropping mineral feed moisture from 16% down to below 0.5% at exit shell skin temperatures under 50°C for optimal fuel economy.',
  },
  'sand-dryer': {
    pillar: 'industrial-rotary-dryers',
    q: 'What is an industrial rotary sand dryer?',
    text: 'An industrial rotary sand dryer is a heavy-duty continuous thermal drum engineered to remove surface and capillary moisture from natural river sand, manufactured sand (M-Sand), silica sand, and foundry aggregates. Built at Minerals Solutions in Zak GIDC, Dahegam, the unit features an IS 2062 Grade B structural carbon steel cylindrical shell (12mm to 20mm plate thickness) inclined at 3 to 5 degrees and rotated at 3 to 8 RPM on forged alloy steel trunnion rollers induction-hardened to 280-320 BHN. Internal radial lifting and curtain cascading flighting showers the wet sand bed continuously through high-temperature burner flue gases (600°C to 800°C inlet). Designed for throughputs from 300 kg/hr to 15 TPH, it achieves high thermal heat transfer, reducing raw aggregate moisture from 12%-18% down to bone-dry levels under 0.5% with specific coal consumption as low as 18 to 24 kg per ton of dried aggregate.',
  },
  'chemical-powder-dryer': {
    pillar: 'industrial-rotary-dryers',
    q: 'What is a stainless steel chemical powder dryer?',
    text: 'A stainless steel chemical powder rotary dryer is an indirect continuous thermal processing unit engineered for sanitary, contamination-free moisture extraction from active pharmaceutical ingredients, fine specialty chemicals, catalysts, and food-grade mineral powders. Fabricated at Zak GIDC, Dahegam utilizing polished AISI SS 304 or SS 316 contact surfaces (mirror finish Ra < 0.4 µm), the drum isolates sensitive materials from combustion byproducts by transferring heat through an external thermal jacket, steam tube bundle, or indirect flue heat exchanger. Operating under continuous negative pressure with Teflon or mechanical face seals, it prevents fugitive dust emissions while processing 200 kg/hr to 8 TPH. Evaporation proceeds gently at controlled product temperatures between 60°C and 180°C, lowering powder moisture from 25% down to under 0.1% with complete recovery of volatile vapors via an integrated reverse-pulse stainless baghouse filtration system.',
  },
  'biomass-sawdust-dryer': {
    pillar: 'industrial-rotary-dryers',
    q: 'What is an industrial biomass and sawdust rotary dryer?',
    text: 'An industrial biomass and sawdust rotary dryer is a continuous convective thermal drying drum specifically engineered to dehydrate wet wood shavings, sawdust, sugarcane bagasse, agricultural stalks, and rice husk prior to briquetting and pelletizing. Fabricated in Zak GIDC, Dahegam from heavy-gauge IS 2062 carbon steel, the cylinder is fitted with anti-clogging multi-zone lifting flights that maintain continuous dispersion of low-bulk-density organic particulates without bridging or balling. Operating at throughput capacities from 500 kg/hr to 5,000 kg/hr, hot flue gases (250°C to 400°C inlet) evaporate high green moisture from 45%-55% down to an optimal 10%-12% required for ring-die pellet mills. Integrated safety engineering includes heavy-duty spark arrestor cyclones, explosion relief rupture discs compliant with NFPA guidelines, and automated deluge water quenching nozzles to eliminate biomass smolder hazards during continuous high-tonnage factory production.',
  },
  'silica-sand-washing-plant': {
    pillar: 'sand-washing-plants',
    q: 'What is a turnkey silica sand washing plant?',
    text: 'A silica sand washing plant is a turnkey mineral wet-processing circuit engineered to eliminate clay slimes, refractory silt, and surface iron staining from raw silica rock and glass sand deposits. Fabricated at Minerals Solutions works in Zak GIDC, Dahegam, the modular plant integrates an attrition scrubbing cell, twin-shaft log washer, high-pressure hydrocyclone desliming tower, and high-frequency polyurethane dewatering screen. Processing feed rates from 20 to 150 TPH, the circuit scrubs away stubborn plastic clay coatings, separates detrimental -75 micron fines, and recovers 95%+ of saleable 100 to 600 micron silica sand. Discharging clean industrial aggregate at 12% to 14% residual moisture with silt contents below 0.5%, the plant reliably delivers high-purity SiO2 grades (>99.2%) conforming to strict IS 488 standards for container glass, solar photovoltaics, and automotive foundry casting operations.',
  },
  'bucket-wheel-sand-washer': {
    pillar: 'sand-washing-plants',
    q: 'What is an industrial bucket wheel sand washer?',
    text: 'An industrial bucket wheel sand washing machine is a heavy mechanical solid-liquid classifier engineered to scrub, desilt, and dewater natural river gravel and manufactured sand (M-Sand). Fabricated in Zak GIDC, Dahegam, material enters an integrated water sedimentation basin where slowly rotating dredging wheels (1.2 to 2.5 RPM) equipped with perforated polyurethane screen buckets dredge settled aggregate from the bottom. Free wash water and suspended clays drain by gravity through calibrated perimeter perforations as the bucket ascends above the slurry line, while fine silt and excess clay colloids overflow an adjustable peripheral weir. Built for capacities from 30 to 180 TPH, washed sand discharges at 12% to 15% moisture, meeting Indian Standard IS 383 Zone II grading requirements with low operating power consumption of only ~0.25 kWh per ton of washed sand aggregate.',
  },
  'hydrocyclone-sand-separator': {
    pillar: 'sand-washing-plants',
    q: 'What is a hydrocyclone fine sand recovery unit?',
    text: 'A hydrocyclone fine sand recovery unit is a specialized centrifugal slurry separation machine engineered to capture and dewater saleable 75 to 150 micron (100–200 mesh) fine sand from quarry wash-plant effluent streams. Fabricated at Minerals Solutions in Zak GIDC, Dahegam, the compact skid comprises a heavy-duty slurry pump, high-shear vortex hydrocyclone lined with 95% high-alumina ceramic or 25mm cast polyurethane, and a high-frequency linear vibrating dewatering screen. Processing slurry flows from 60 to 120 m³/hr with 20% to 30% solids, incoming pulp enters tangentially at 0.15 to 0.25 MPa. Centrifugal forces exceeding 500 Gs separate dense fine silica downward into an underflow spigot while water and ultra-fine silt (<40 microns) exit through the overflow vortex finder, recovering over 95% of saleable plaster sand at 12% to 14% stackable moisture for commercial sale.',
  },
  'mineral-log-washer': {
    pillar: 'sand-washing-plants',
    q: 'What is a heavy duty mineral log washer?',
    text: 'A heavy duty mineral log washer is an intensive high-torque attrition scrubber engineered to break down and wash away stubborn plastic clays, soft mudstone, and conglomerate binders from coarse quartz, manganese ore, silica rock, and limestone. Manufactured at Zak GIDC, Dahegam, the machine features twin counter-rotating steel shafts (up to 7.5m length) housed in a welded IS 2062 steel trough inclined at 6 to 10 degrees. Staggered high-chromium alloy steel (600+ BHN) or Hardox 500 paddle blades continuously intermesh at 25 to 35 RPM, subjecting wet mineral rock up to 75mm to severe rock-on-rock attrition and hydraulic shear. Processing capacities range from 30 to 150 TPH with water consumption of 1.5 to 2.5 m³ per ton, discharging pristine de-slimed gravel while suspended clay colloids overflow a rear adjustable weir for continuous plant operation.',
  },
  'disc-granulator': {
    pillar: 'fertilizer-granulation-plants',
    q: 'What is an industrial pan disc fertilizer granulator?',
    text: 'An industrial pan disc fertilizer granulator is a continuous rotary agglomeration machine engineered to transform fine powdered compost, vermicompost, NPK compounds, bentonite clay, and dolomite into uniform, dense spherical pellets. Manufactured in Zak GIDC, Dahegam, the machine consists of a heavy circular pan (1,800mm to 3,600mm diameter) lined with polypropylene or stainless steel to prevent sticking, mounted on a rigid structural base with stepless tilt adjustment from 40 to 55 degrees. Powered by high-torque IE3 motors (7.5 to 30 kW), the inclined disc rotates at 12 to 24 RPM while atomized liquid binder sprays over tumbling powder. Centrifugal classification automatically stratifies growing granules, discharging 93%+ on-size spherical pellets (2.0mm to 4.5mm) over the outer rim at continuous production capacities from 1 to 8 TPH for high-efficiency commercial packaging and bulk agricultural distribution.',
  },
  'double-roller-granulator': {
    pillar: 'fertilizer-granulation-plants',
    q: 'What is a double roller compaction granulator?',
    text: 'A double roller compaction fertilizer granulator is a heavy mechanical dry extrusion machine engineered to agglomerate chemical fertilizer salts, ammonium sulphate, potassium chloride, and mineral powders into dense granules at room temperature without boiler steam or drying fuel. Built in Zak GIDC, Dahegam, the unit features two synchronized counter-rotating rollers forged from 9Cr2Mo / 38CrMoAl alloy steel, induction-hardened to 55-58 HRC. Driven by a cycloidal pinwheel reducer and pressurized by a dual-cylinder hydraulic accumulator (10 to 25 MPa), raw powder entering the nip area is subjected to immense mechanical linear force (30 to 60 kN/cm), compacting it into dense sheets that are crushed and classified into 2.5mm to 5.0mm angular pellets. Operating at 1 to 5 TPH throughput, energy consumption is only 12 to 18 kWh per ton of finished high-density granules.',
  },
  'rotary-drum-granulator': {
    pillar: 'fertilizer-granulation-plants',
    q: 'What is an industrial rotary drum fertilizer granulator?',
    text: 'An industrial rotary drum fertilizer granulator is a continuous tumbling agglomeration cylinder engineered for large-scale production of compound NPK fertilizers, DAP, and fortified bio-organic granules. Fabricated in Zak GIDC, Dahegam, the machine comprises a heavy-duty IS 2062 carbon steel cylindrical shell (up to 2,500mm diameter and 12m length) lined with acid-resistant natural rubber or ultra-high molecular weight polyethylene (UHMWPE) to prevent internal scaling. Supported on twin cast alloy steel tyres and induction-hardened trunnion rollers, the drum rotates at 10 to 18 RPM inclined at 2 to 2.5 degrees. An internal submerged stainless spray pipe injects pressurized steam and liquid binder into the tumbling bed, promoting capillary coalescence at 60°C to 80°C. Delivering throughputs from 3 to 20 TPH, it achieves high pelletization sphericity and yield exceeding 90% (2.0mm to 4.75mm) for bulk agricultural fertilizer distribution lines.',
  },
  'fertilizer-cooling-coating-drum': {
    pillar: 'fertilizer-granulation-plants',
    q: 'What is a fertilizer cooling and anti-caking coating drum?',
    text: 'A fertilizer cooling and anti-caking coating drum is a critical continuous rotary post-processing machine deployed in chemical compound (NPK, DAP) and organic bio-fertilizer manufacturing lines. Fabricated at Minerals Solutions works in Zak GIDC, Dahegam, freshly granulated pellets exiting thermal dryers at 70°C to 85°C enter the counter-current cooling zone where high-volume ambient air passes through cascading internal flights, reducing pellet core temperature below 40°C to eliminate condensation inside bags. The cooled pellets then transfer directly into an enclosed oil-spray coating barrel where high-pressure atomizing nozzles meter liquid paraffin, micronized amine, or neem oil (0.15% to 0.35% by weight), followed by micronized talc dusting. Processing capacities range from 2 to 15 TPH, completely preventing granule caking, bag hardening, and hygroscopic moisture absorption during long-term commercial warehouse storage.',
  },
  'bucket-elevators': {
    pillar: 'industrial-conveyors-spares',
    q: 'What is an industrial bucket elevator?',
    text: 'An industrial bucket elevator is a heavy-duty vertical bulk material handling system engineered to elevate free-flowing or sluggish powders, minerals, and granular solids through vertical heights up to 45 meters. Fabricated in Zak GIDC, Dahegam in strict compliance with IS 7198 standards, the system features a self-supporting dust-tight carbon steel casing (3mm to 6mm plate), high-tensile multi-ply rubber belt or alloy steel traction chain, and pressed steel or ductile cast iron buckets. Operating in either centrifugal discharge mode (1.2 to 2.5 m/s) for dry aggregates or continuous gravity discharge mode (0.5 to 1.0 m/s) for fragile pellets, throughputs range from 5 to 150 TPH. Standard safety equipment includes an integrated backstop sprag clutch, zero-speed shaft monitor, and explosion relief vent panels for combustible materials in demanding heavy industrial plant environments.',
  },
  'screw-conveyors': {
    pillar: 'industrial-conveyors-spares',
    q: 'What is an industrial screw conveyor?',
    text: 'An industrial screw conveyor (also known as an auger conveyor or spiral feeder) is a positive-displacement bulk material handling machine that transports powders, slurries, and granular solids along horizontal or inclined paths up to 30 degrees. Fabricated in Zak GIDC, Dahegam in heavy U-trough or tubular pipe configurations, the conveyor incorporates continuous helical flighting (100mm to 600mm diameter) welded to a heavy-gauge central torque shaft. Driven by high-efficiency IE3 geared motors with spherical roller hanger bearings, the unit handles abrasive materials like silica sand, fly ash, cement, and hot fertilizer salts at 3 to 50 TPH. Completely sealed dust-tight bolted covers with silicone gaskets and gland-packing shaft seals eliminate fugitive dust emissions and external product contamination in rigorous continuous manufacturing plant operations.',
  },
  'forged-trunnion-rollers': {
    pillar: 'industrial-conveyors-spares',
    q: 'What is a rotary dryer support roller assembly?',
    text: 'A rotary dryer support roller assembly (also termed a trunnion roller, carrying roller, or kiln cradle wheel) is a heavy-duty mechanical running gear component engineered to support the dynamic rotating mass of rotary dryers, coolers, calciners, and kilns. Precision machined in Zak GIDC, Dahegam from solid forged alloy steel billets (EN-8, EN-9, or 42CrMo4/EN-19), the roller tyre undergoes rigorous induction hardening to 280-320 BHN and 100% ultrasonic flaw inspection per ASTM A388 standards. Mounted on high-strength forged steel shafts supported by heavy-duty self-aligning spherical roller bearings in cast steel pillow blocks, roller assemblies withstand dynamic radial loads up to 60 tonnes per wheelset. Precision dual-axis spherical alignment prevents uneven shell riding, tyre scalloping, and drive girth gear vibration under high thermal continuous operating conditions.',
  },
  'belt-conveyors': {
    pillar: 'industrial-conveyors-spares',
    q: 'What is an industrial troughed belt conveyor system?',
    text: 'An industrial troughed belt conveyor system is a continuous bulk material handling installation designed in strict accordance with Bureau of Indian Standards (IS 11592) to convey crushed stone, silica sand, minerals, ores, and fertilizer pellets across horizontal and inclined paths up to 18 degrees. Fabricated in Zak GIDC, Dahegam from heavy structural IS 2062 channel stringers or welded lattice truss sections, the conveyor incorporates multi-ply nylon-nylon (NN) or polyester-polyamide (EP) rubber belting with Grade M24 wear covers. Heavy-duty three-roll troughing idlers (20°, 35°, or 45° angle) fitted with triple labyrinth dust seals and sealed-for-life deep-groove ball bearings ensure ultra-low rolling friction. Handling throughputs from 20 to 500 TPH at belt speeds between 0.8 and 2.5 m/s, systems feature diamond-groove rubber lagged drive drums for reliable slip-free power transmission.',
  },
};

function generateDefinitionSection(q, text) {
  return `{/* Top-30% Citability Definition Block (Targeted for AI Overviews & Answer Engines) */}
        <section className="py-8 bg-slate-50 border-b border-slate-200">
          <Container>
            <div className="p-6 rounded-xl bg-white border-l-4 border-l-[#DA020D] border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-[#DA020D] shrink-0 mt-0.5" />
                <div className="text-slate-800 text-sm sm:text-base leading-relaxed">
                  <strong className="text-slate-950 font-semibold">${q} </strong>
                  ${text}
                </div>
              </div>
            </div>
          </Container>
        </section>`;
}

const defMarkers = [
  '{/* AI Citability Definition',
  '{/* Top-30% Citability Definition Block',
  '{/* Technical Engineering Definition',
  '{/* Section 2: Technical Definition',
  '{/* Technical Definition',
  '{/* Process Summary'
];

Object.entries(defs).forEach(([spoke, data]) => {
  const filePath = path.join(projectRoot, 'app/(site)/products', data.pillar, spoke, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  let replaced = false;
  for (const m of defMarkers) {
    const idx = content.indexOf(m);
    if (idx !== -1) {
      const closeSec = content.indexOf('</section>', idx);
      if (closeSec !== -1) {
        const replacement = generateDefinitionSection(data.q, data.text);
        content = content.substring(0, idx) + replacement + content.substring(closeSec + '</section>'.length);
        replaced = true;
        console.log(`Replaced definition block in ${spoke} (via marker ${m})`);
        break;
      }
    }
  }

  if (!replaced) {
    // If not found via comment, search for Info icon definition box or insert after hero header/section
    const headerEnd = content.indexOf('</header>');
    if (headerEnd !== -1) {
      content = content.substring(0, headerEnd + '</header>'.length) + '\n\n        ' + generateDefinitionSection(data.q, data.text) + content.substring(headerEnd + '</header>'.length);
      console.log(`Inserted definition block after </header> in ${spoke}`);
      replaced = true;
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('All 16 definition blocks calibrated!');
