import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const linkingData = {
  'triple-pass-dryer': {
    pillar: 'industrial-rotary-dryers',
    parentHub: '/products/industrial-rotary-dryers/',
    parentLabel: 'Rotary Dryers & Thermal Systems Hub',
    s1: { label: 'Industrial Rotary Sand Dryer', href: '/products/industrial-rotary-dryers/sand-dryer/', tag: 'Sibling Dryer Line', desc: 'Heavy single-pass rotary sand drying drum for high-tonnage river sand and aggregate processing.' },
    s2: { label: 'Stainless Chemical Powder Dryer', href: '/products/industrial-rotary-dryers/chemical-powder-dryer/', tag: 'Sibling Dryer Line', desc: 'Sanitary SS304/SS316 indirect thermal processing drum for active chemical powders and minerals.' },
    cross: { label: 'Silica Sand Washing Plant System', href: '/products/sand-washing-plants/silica-sand-washing-plant/', tag: 'Complementary Wet Circuit', desc: 'Upstream wet scrubbing and desliming circuit delivering washed sand directly to the dryer feed hopper.' }
  },
  'sand-dryer': {
    pillar: 'industrial-rotary-dryers',
    parentHub: '/products/industrial-rotary-dryers/',
    parentLabel: 'Rotary Dryers & Thermal Systems Hub',
    s1: { label: 'Triple Pass Rotary Drum Dryer Line', href: '/products/industrial-rotary-dryers/triple-pass-dryer/', tag: 'Sibling Dryer Line', desc: 'Concentric 3-pass high-efficiency drum providing 40% fuel savings in compact plant spaces.' },
    s2: { label: 'Biomass & Sawdust Rotary Dryer Line', href: '/products/industrial-rotary-dryers/biomass-sawdust-dryer/', tag: 'Sibling Dryer Line', desc: 'Continuous organic material drying cylinder with spark arrestor and explosion protection.' },
    cross: { label: 'Silica Sand Washing Plant System', href: '/products/sand-washing-plants/silica-sand-washing-plant/', tag: 'Complementary Wet Circuit', desc: 'Upstream wet scrubbing and desliming circuit delivering washed sand directly to the dryer feed hopper.' }
  },
  'chemical-powder-dryer': {
    pillar: 'industrial-rotary-dryers',
    parentHub: '/products/industrial-rotary-dryers/',
    parentLabel: 'Rotary Dryers & Thermal Systems Hub',
    s1: { label: 'Triple Pass Rotary Drum Dryer Line', href: '/products/industrial-rotary-dryers/triple-pass-dryer/', tag: 'Sibling Dryer Line', desc: 'Compact high-efficiency concentric drum for mineral powders and granular crystals.' },
    s2: { label: 'Industrial Rotary Sand Dryer Unit', href: '/products/industrial-rotary-dryers/sand-dryer/', tag: 'Sibling Dryer Line', desc: 'Direct-fired heavy rotary drum for continuous drying of high-tonnage mineral aggregates.' },
    cross: { label: 'Industrial Screw Conveyor Systems', href: '/products/industrial-conveyors-spares/screw-conveyors/', tag: 'Complementary Material Handling', desc: 'Dust-tight enclosed powder transfer auger for contamination-free dried powder conveyance.' }
  },
  'biomass-sawdust-dryer': {
    pillar: 'industrial-rotary-dryers',
    parentHub: '/products/industrial-rotary-dryers/',
    parentLabel: 'Rotary Dryers & Thermal Systems Hub',
    s1: { label: 'Triple Pass Rotary Drum Dryer Line', href: '/products/industrial-rotary-dryers/triple-pass-dryer/', tag: 'Sibling Dryer Line', desc: 'Concentric three-cylinder drum saving factory floor length and drying fuel.' },
    s2: { label: 'Industrial Rotary Sand Dryer Unit', href: '/products/industrial-rotary-dryers/sand-dryer/', tag: 'Sibling Dryer Line', desc: 'High-tonnage heavy mineral dryer handling continuous moisture reduction below 0.5%.' },
    cross: { label: 'Industrial Pan Disc Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/', tag: 'Complementary Pelletizing Line', desc: 'Downstream rotary pelletizing disc turning dried sawdust into bio-fertilizer compost pellets.' }
  },
  'silica-sand-washing-plant': {
    pillar: 'sand-washing-plants',
    parentHub: '/products/sand-washing-plants/',
    parentLabel: 'Sand Washing & Mineral Processing Hub',
    s1: { label: 'Bucket Wheel Sand Washer System', href: '/products/sand-washing-plants/bucket-wheel-sand-washer/', tag: 'Sibling Washing Line', desc: 'Low-power solid-liquid classification machine for M-Sand and gravel desilting.' },
    s2: { label: 'Hydrocyclone Fine Sand Recovery Unit', href: '/products/sand-washing-plants/hydrocyclone-sand-separator/', tag: 'Sibling Washing Line', desc: 'Centrifugal fines recovery skid capturing 95%+ of 75-150 micron fine plaster sand.' },
    cross: { label: 'Industrial Rotary Sand Dryer Unit', href: '/products/industrial-rotary-dryers/sand-dryer/', tag: 'Complementary Thermal System', desc: 'Downstream thermal processing drum to convert washed sand into bone-dry foundry and glass sand.' }
  },
  'bucket-wheel-sand-washer': {
    pillar: 'sand-washing-plants',
    parentHub: '/products/sand-washing-plants/',
    parentLabel: 'Sand Washing & Mineral Processing Hub',
    s1: { label: 'Silica Sand Washing Plant System', href: '/products/sand-washing-plants/silica-sand-washing-plant/', tag: 'Sibling Washing Line', desc: 'Turnkey multi-stage silica and foundry sand scrubbing, desliming, and classification line.' },
    s2: { label: 'Hydrocyclone Fine Sand Recovery Unit', href: '/products/sand-washing-plants/hydrocyclone-sand-separator/', tag: 'Sibling Washing Line', desc: 'Centrifugal desliming unit recovering fine sand down to 75 microns from wheel wash effluent.' },
    cross: { label: 'Industrial Rotary Sand Dryer Unit', href: '/products/industrial-rotary-dryers/sand-dryer/', tag: 'Complementary Thermal System', desc: 'Downstream heavy rotary dryer reducing washed aggregate moisture from 14% to under 0.5%.' }
  },
  'hydrocyclone-sand-separator': {
    pillar: 'sand-washing-plants',
    parentHub: '/products/sand-washing-plants/',
    parentLabel: 'Sand Washing & Mineral Processing Hub',
    s1: { label: 'Silica Sand Washing Plant System', href: '/products/sand-washing-plants/silica-sand-washing-plant/', tag: 'Sibling Washing Line', desc: 'Turnkey wet-processing line for high-purity glass, foundry, and construction sand.' },
    s2: { label: 'Bucket Wheel Sand Washer System', href: '/products/sand-washing-plants/bucket-wheel-sand-washer/', tag: 'Sibling Washing Line', desc: 'High-volume sand washing wheel separating clays from washed gravel and M-Sand.' },
    cross: { label: 'Industrial Belt Conveyor Systems', href: '/products/industrial-conveyors-spares/belt-conveyors/', tag: 'Complementary Material Handling', desc: 'Downstream troughed conveyor elevating dewatered fine sand to stockyard piles.' }
  },
  'mineral-log-washer': {
    pillar: 'sand-washing-plants',
    parentHub: '/products/sand-washing-plants/',
    parentLabel: 'Sand Washing & Mineral Processing Hub',
    s1: { label: 'Silica Sand Washing Plant System', href: '/products/sand-washing-plants/silica-sand-washing-plant/', tag: 'Sibling Washing Line', desc: 'Turnkey washing and classification line for glass sand and high-purity quartz rock.' },
    s2: { label: 'Bucket Wheel Sand Washer System', href: '/products/sand-washing-plants/bucket-wheel-sand-washer/', tag: 'Sibling Washing Line', desc: 'High-volume sand washing wheel separating clays from washed gravel and M-Sand.' },
    cross: { label: 'Industrial Rotary Sand Dryer Unit', href: '/products/industrial-rotary-dryers/sand-dryer/', tag: 'Complementary Thermal System', desc: 'Downstream heavy rotary drum dryer removing moisture from washed quartz and mineral rocks.' }
  },
  'disc-granulator': {
    pillar: 'fertilizer-granulation-plants',
    parentHub: '/products/fertilizer-granulation-plants/',
    parentLabel: 'Fertilizer Granulation & Pellet Plants Hub',
    s1: { label: 'Double Roller Compactor Granulator', href: '/products/fertilizer-granulation-plants/double-roller-granulator/', tag: 'Sibling Pellet Line', desc: 'Dry compaction extrusion granulator requiring zero moisture addition or drying fuel.' },
    s2: { label: 'Rotary Drum Granulator Machines', href: '/products/fertilizer-granulation-plants/rotary-drum-granulator/', tag: 'Sibling Pellet Line', desc: 'High-tonnage continuous tumbling agglomeration drum for NPK and DAP fertilizer lines.' },
    cross: { label: 'Triple Pass Rotary Drum Dryer Line', href: '/products/industrial-rotary-dryers/triple-pass-dryer/', tag: 'Complementary Thermal System', desc: 'Downstream thermal rotary dryer reducing wet green compost pellets to hard storage moisture.' }
  },
  'double-roller-granulator': {
    pillar: 'fertilizer-granulation-plants',
    parentHub: '/products/fertilizer-granulation-plants/',
    parentLabel: 'Fertilizer Granulation & Pellet Plants Hub',
    s1: { label: 'Industrial Pan Disc Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/', tag: 'Sibling Pellet Line', desc: 'Adjustable tilt angle agglomeration pan producing round bio-organic fertilizer pellets.' },
    s2: { label: 'Rotary Drum Granulator Machines', href: '/products/fertilizer-granulation-plants/rotary-drum-granulator/', tag: 'Sibling Pellet Line', desc: 'Continuous rotary drum for large-scale industrial compound fertilizer manufacturing.' },
    cross: { label: 'Industrial Bucket Elevator Systems', href: '/products/industrial-conveyors-spares/bucket-elevators/', tag: 'Complementary Material Handling', desc: 'Vertical continuous elevator transporting raw chemical powder to the compactor feed hopper.' }
  },
  'rotary-drum-granulator': {
    pillar: 'fertilizer-granulation-plants',
    parentHub: '/products/fertilizer-granulation-plants/',
    parentLabel: 'Fertilizer Granulation & Pellet Plants Hub',
    s1: { label: 'Industrial Pan Disc Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/', tag: 'Sibling Pellet Line', desc: 'Pan disc granulator with stepless angle control for organic and compost pellet lines.' },
    s2: { label: 'Fertilizer Coating & Cooling Drum', href: '/products/fertilizer-granulation-plants/fertilizer-cooling-coating-drum/', tag: 'Sibling Finishing Line', desc: 'Finishing stage rotary drum reducing pellet temperature and applying anti-caking oil.' },
    cross: { label: 'Triple Pass Rotary Drum Dryer Line', href: '/products/industrial-rotary-dryers/triple-pass-dryer/', tag: 'Complementary Thermal System', desc: 'Downstream thermal rotary drum drying hot compound granules from 15% moisture to below 2%.' }
  },
  'fertilizer-cooling-coating-drum': {
    pillar: 'fertilizer-granulation-plants',
    parentHub: '/products/fertilizer-granulation-plants/',
    parentLabel: 'Fertilizer Granulation & Pellet Plants Hub',
    s1: { label: 'Industrial Pan Disc Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/', tag: 'Sibling Pellet Line', desc: 'Upstream pan agglomeration unit producing uniform spherical fertilizer pellets.' },
    s2: { label: 'Rotary Drum Granulator Machines', href: '/products/fertilizer-granulation-plants/rotary-drum-granulator/', tag: 'Sibling Pellet Line', desc: 'Continuous drum granulator producing high-tonnage compound NPK and DAP fertilizer.' },
    cross: { label: 'Industrial Belt Conveyor Systems', href: '/products/industrial-conveyors-spares/belt-conveyors/', tag: 'Complementary Material Handling', desc: 'Downstream troughed belt conveyor transporting conditioned pellets to automatic bagger lines.' }
  },
  'bucket-elevators': {
    pillar: 'industrial-conveyors-spares',
    parentHub: '/products/industrial-conveyors-spares/',
    parentLabel: 'Industrial Conveyors & Mechanical Spares Hub',
    s1: { label: 'Industrial Screw Conveyor Systems', href: '/products/industrial-conveyors-spares/screw-conveyors/', tag: 'Sibling Conveyor Line', desc: 'Dust-tight horizontal and inclined screw augers for enclosed powder and ash transport.' },
    s2: { label: 'Industrial Belt Conveyor Systems', href: '/products/industrial-conveyors-spares/belt-conveyors/', tag: 'Sibling Conveyor Line', desc: 'High-tonnage troughed belt conveyors for overland mineral and aggregate transport.' },
    cross: { label: 'Industrial Rotary Sand Dryer Unit', href: '/products/industrial-rotary-dryers/sand-dryer/', tag: 'Complementary Thermal System', desc: 'Upstream or downstream thermal drum handling high-capacity mineral moisture reduction.' }
  },
  'screw-conveyors': {
    pillar: 'industrial-conveyors-spares',
    parentHub: '/products/industrial-conveyors-spares/',
    parentLabel: 'Industrial Conveyors & Mechanical Spares Hub',
    s1: { label: 'Industrial Bucket Elevator Systems', href: '/products/industrial-conveyors-spares/bucket-elevators/', tag: 'Sibling Conveyor Line', desc: 'Continuous vertical bucket elevator systems lifting materials up to 45 meters height.' },
    s2: { label: 'Industrial Belt Conveyor Systems', href: '/products/industrial-conveyors-spares/belt-conveyors/', tag: 'Sibling Conveyor Line', desc: 'Three-roll troughed belt conveyors for bulk minerals, sand, and bagged goods.' },
    cross: { label: 'Industrial Pan Disc Granulator', href: '/products/fertilizer-granulation-plants/disc-granulator/', tag: 'Complementary Pelletizing Line', desc: 'Feed preparation pan granulator receiving metered dry powders from the screw conveyor.' }
  },
  'forged-trunnion-rollers': {
    pillar: 'industrial-conveyors-spares',
    parentHub: '/products/industrial-conveyors-spares/',
    parentLabel: 'Industrial Conveyors & Mechanical Spares Hub',
    s1: { label: 'Industrial Bucket Elevator Systems', href: '/products/industrial-conveyors-spares/bucket-elevators/', tag: 'Sibling Conveyor Line', desc: 'Heavy vertical bucket elevators with centrifugal or continuous chain and belt traction.' },
    s2: { label: 'Industrial Screw Conveyor Systems', href: '/products/industrial-conveyors-spares/screw-conveyors/', tag: 'Sibling Conveyor Line', desc: 'Enclosed U-trough and tubular augers for abrasive powder handling and feeding.' },
    cross: { label: 'Triple Pass Rotary Drum Dryer Line', href: '/products/industrial-rotary-dryers/triple-pass-dryer/', tag: 'Complementary Thermal System', desc: 'Thermal rotary drum utilizing precision induction-hardened forged trunnion rollers.' }
  },
  'belt-conveyors': {
    pillar: 'industrial-conveyors-spares',
    parentHub: '/products/industrial-conveyors-spares/',
    parentLabel: 'Industrial Conveyors & Mechanical Spares Hub',
    s1: { label: 'Industrial Bucket Elevator Systems', href: '/products/industrial-conveyors-spares/bucket-elevators/', tag: 'Sibling Conveyor Line', desc: 'Vertical bulk material elevating systems lifting aggregates and pellets up to 45m.' },
    s2: { label: 'Industrial Screw Conveyor Systems', href: '/products/industrial-conveyors-spares/screw-conveyors/', tag: 'Sibling Conveyor Line', desc: 'Dust-tight tubular and U-trough augers transporting powders and slurry cakes.' },
    cross: { label: 'Silica Sand Washing Plant System', href: '/products/sand-washing-plants/silica-sand-washing-plant/', tag: 'Complementary Wet Circuit', desc: 'Upstream wet scrubbing plant using troughed belt conveyors to transfer raw sand and feed.' }
  }
};

function generateLinkingTriangleSection(data) {
  return `{/* Internal Linking Triangle: Parent Hub, 2 Sibling Spokes, 1 Cross-Pillar Machine */}
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
                href="${data.parentHub}"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-[#DA020D] transition-colors shrink-0"
              >
                Explore Full ${data.parentLabel} <ChevronRight className="w-4 h-4 text-[#DA020D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sibling Spoke 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider mb-2">
                    ${data.s1.tag}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    ${data.s1.label}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    ${data.s1.desc}
                  </p>
                </div>
                <Link
                  href="${data.s1.href}"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  View Machine Specifications <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Sibling Spoke 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-2">
                    ${data.s2.tag}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    ${data.s2.label}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    ${data.s2.desc}
                  </p>
                </div>
                <Link
                  href="${data.s2.href}"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  View Machine Specifications <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Cross-Pillar Machine */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#DA020D]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider mb-2">
                    ${data.cross.tag}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    ${data.cross.label}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    ${data.cross.desc}
                  </p>
                </div>
                <Link
                  href="${data.cross.href}"
                  className="font-bold text-[#DA020D] hover:underline text-sm inline-flex items-center gap-1.5 mt-2"
                >
                  Explore Complementary Machine <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>`;
}

const sectionKeywords = [
  '{/* Internal Linking Triangle',
  '{/* Downstream & Upstream Machinery Integration',
  '{/* Downstream & Upstream',
  '{/* Turnkey Plant Integration',
  '{/* Section 6: Plant Layout Integration & Cross-Pillar Synergies',
  '{/* Section 6: Upstream, Sibling & Cross-Pillar Integration',
  '{/* Section 7: Turnkey Plant Integration & Cross-Pillar Connectivity',
  '{/* Section 8: Turnkey Plant Integration & Cross-Pillar Connectivity',
  '{/* Section 8: Turnkey Plant Integration & Cross-Pillar Flow',
  '{/* Section 7: Turnkey Plant Integration & Cross-Pillar Flow',
  '{/* Section 8: Turnkey Fertilizer Plant Flowsheet Integration',
  '{/* Section 5: Turnkey NPK Flowsheet Integration'
];

Object.entries(linkingData).forEach(([spoke, data]) => {
  const filePath = path.join(projectRoot, 'app/(site)/products', data.pillar, spoke, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  let replaced = false;
  for (const kw of sectionKeywords) {
    const idx = content.indexOf(kw);
    if (idx !== -1) {
      // Find closing </section>
      const closeSec = content.indexOf('</section>', idx);
      if (closeSec !== -1) {
        const replacement = generateLinkingTriangleSection(data);
        content = content.substring(0, idx) + replacement + content.substring(closeSec + '</section>'.length);
        replaced = true;
        console.log(`Replaced linking section in ${spoke} (matched ${kw})`);
        break;
      }
    }
  }

  if (!replaced) {
    const faqIdx = content.indexOf('{/* Technical FAQ');
    if (faqIdx !== -1) {
      content = content.substring(0, faqIdx) + generateLinkingTriangleSection(data) + '\n\n        ' + content.substring(faqIdx);
      console.log(`Inserted linking section in ${spoke} before FAQ`);
      replaced = true;
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('All 16 linking triangle sections updated!');
