'use client';

import { useState } from 'react';
import { Eye, Shield, Leaf, DoorOpen, Landmark, Waves, Route, Building2 } from 'lucide-react';

const LAYERS = [
  ['core', 'Core zone', Shield],
  ['buffer', 'Buffer zone', Leaf],
  ['gates', 'Safari gates', DoorOpen],
  ['heritage', 'Heritage', Landmark],
  ['water', 'Reservoirs', Waves],
  ['roads', 'Highways', Route],
  ['towns', 'Towns', Building2],
];

const INFO = {
  overview: {
    cat: 'Overview',
    title: 'Ratapani Tiger Reserve',
    desc: 'A 1,271.5 km² tiger reserve in Raisen and Sehore districts on the southern edge of the Vindhya range, notified on 2 December 2024. Tap any feature on the map for details.',
    specs: [['Core', '763.8 km²'], ['Buffer', '507.7 km²'], ['Centre', '22.918° N, 77.722° E']],
  },
  core: {
    cat: 'Zone',
    title: 'Core zone (critical tiger habitat)',
    desc: 'The heart of the reserve, built on the 1976 wildlife sanctuary. Managed for wildlife first; tourists enter only in registered vehicles on fixed routes.',
    specs: [['Area', '763.8 km²'], ['Share', '≈ 60%'], ['Access', 'Permits only']],
  },
  buffer: {
    cat: 'Zone',
    title: 'Buffer zone',
    desc: 'A ring of forest and villages around the core where livelihoods continue and young tigers disperse. Eco-development work focuses on reducing conflict.',
    specs: [['Area', '507.7 km²'], ['Share', '≈ 40%'], ['Villages', '≈ 100 around the reserve']],
  },
  jhiri: {
    cat: 'Safari gate 1',
    title: 'Jhiri Gate',
    desc: 'Closest gate to Bhopal, near Obaidullaganj off NH-46 in Raisen district. Online and gate booking.',
    specs: [['From Bhopal rly stn', '34 km'], ['From Bhopal airport', '41 km'], ['Vehicle fee', '₹3,000']],
  },
  delawadi: {
    cat: 'Safari gate 2',
    title: 'Delawadi Gate',
    desc: 'Western gate in Sehore district, base for the walk to Ginnorgarh Fort. Online and gate booking.',
    specs: [['From Bhopal rly stn', '52 km'], ['From Bhopal airport', '64 km'], ['Vehicle fee', '₹2,600']],
  },
  bhimbetka: {
    cat: 'Safari gate 3',
    title: 'Bhimbetka Gate',
    desc: 'Beside the Bhimbetka rock shelters on NH-46. Offline booking only; private vehicles allowed.',
    specs: [['From Bhopal rly stn', '44 km'], ['From Bhopal airport', '55 km'], ['Booking', 'At the gate']],
  },
  heritage: {
    cat: 'Heritage',
    title: 'Bhimbetka Rock Shelters',
    desc: 'UNESCO World Heritage Site (2003): 750+ rock shelters with prehistoric paintings, inside the Ratapani forest.',
    specs: [['From Bhopal', '≈ 45 km'], ['From Obaidullaganj', '≈ 9 km'], ['Managed by', 'ASI']],
  },
  ginnorgarh: {
    cat: 'Heritage',
    title: 'Ginnorgarh Fort',
    desc: 'Ruined Gond hill fort on a ~700 m summit inside the reserve, reached on foot from the Delawadi side.',
    specs: [['From Bhopal', '≈ 60 km'], ['Access', 'Trek with permission'], ['Era', 'Gond, 18th c.']],
  },
  water: {
    cat: 'Water',
    title: 'Reservoirs',
    desc: 'Ratapani Dam and Barna Reservoir are the two major waterbodies of the landscape; Kolar Dam lies to the west, towards Bhopal.',
    specs: [['Inside', 'Ratapani Dam'], ['East', 'Barna Reservoir'], ['West', 'Kolar Dam']],
  },
  bhopal: {
    cat: 'Town',
    title: 'Bhopal',
    desc: 'State capital and gateway city, with Raja Bhoj Airport and the Bhopal and Rani Kamlapati railway stations.',
    specs: [['To Jhiri gate', '34 km'], ['To Bhimbetka', '≈ 45 km'], ['Highway', 'NH-46']],
  },
};

export default function AtlasMap() {
  const [on, setOn] = useState(Object.fromEntries(LAYERS.map(([k]) => [k, true])));
  const [sel, setSel] = useState('overview');
  const info = INFO[sel];
  const toggle = (k) => setOn((s) => ({ ...s, [k]: !s[k] }));
  const all = () => setOn(Object.fromEntries(LAYERS.map(([k]) => [k, true])));
  const pick = (k) => (e) => {
    e.stopPropagation();
    setSel(k);
  };
  const t = { fontFamily: 'var(--font-label)' };

  return (
    <div className="overflow-hidden rounded-card bg-forest text-sand shadow-2xl">
      <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-sand/10 p-4" role="group" aria-label="Map layers">
        <button type="button" onClick={all} className="flex shrink-0 items-center gap-1.5 rounded-full bg-amber px-4 py-2 font-label text-label-md uppercase text-charcoal">
          <Eye className="h-4 w-4" aria-hidden /> All layers
        </button>
        {LAYERS.map(([k, label, Icon]) => (
          <button
            key={k}
            type="button"
            aria-pressed={on[k]}
            onClick={() => toggle(k)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 font-label text-label-md uppercase transition-colors ${
              on[k] ? 'bg-white/15 text-white' : 'bg-transparent text-sand/40 line-through'
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden /> {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="relative lg:col-span-8" onClick={() => setSel('overview')}>
          <svg viewBox="0 0 600 450" className="h-auto w-full" role="img" aria-labelledby="atlas-title">
            <title id="atlas-title">Schematic map of Ratapani Tiger Reserve showing core and buffer zones, safari gates, Bhimbetka, reservoirs, NH-46 and Bhopal</title>
            <rect width="600" height="450" fill="#1F3A2E" />
            <g fill="none" stroke="#F2EADB" strokeOpacity="0.06" strokeWidth="1.2">
              <path d="M0 90c120 30 200-40 320 0s180 50 280 10" />
              <path d="M0 170c110 40 220-30 330 10s160 40 270 0" />
              <path d="M0 250c140 30 210-40 330 10s170 50 270 0" />
              <path d="M0 330c120 40 230-30 340 10s160 40 260 0" />
              <path d="M0 410c130 30 220-40 330 10s170 50 270 0" />
            </g>
            {on.buffer && (
              <path onClick={pick('buffer')} className="cursor-pointer" d="M120 140C190 105 300 110 400 130C500 150 545 220 520 300C495 380 390 405 280 395C170 385 95 350 85 270C78 210 90 160 120 140Z" fill="#5A7344" fillOpacity={sel === 'buffer' ? 0.7 : 0.45} />
            )}
            {on.core && (
              <path onClick={pick('core')} className="cursor-pointer" d="M175 175C240 150 330 150 410 170C465 185 470 245 450 300C430 350 350 355 270 345C200 337 160 300 160 245C160 210 162 185 175 175Z" fill="#14261E" stroke="#E08A1E" strokeDasharray="6 4" strokeWidth={sel === 'core' ? 3 : 2} />
            )}
            {on.core && <text x="300" y="275" textAnchor="middle" fill="#F2EADB" fillOpacity="0.35" fontSize="12" letterSpacing="3" style={t}>CORE ZONE</text>}
            {on.buffer && <text x="470" y="370" textAnchor="middle" fill="#F2EADB" fillOpacity="0.4" fontSize="11" letterSpacing="3" style={t}>BUFFER</text>}
            {on.water && (
              <g onClick={pick('water')} className="cursor-pointer">
                <path d="M60 205c18-12 40-8 48 8s-6 34-26 34-36-26-22-42Z" fill="#3D7B80" />
                <text x="50" y="270" fill="#C8E7D5" fontSize="10" style={t}>KOLAR DAM</text>
                <path d="M262 300c14-10 34-6 38 8s-10 24-26 22-24-20-12-30Z" fill="#3D7B80" />
                <text x="250" y="342" fill="#C8E7D5" fontSize="10" style={t}>RATAPANI DAM</text>
                <path d="M488 236c16-10 36-4 40 10s-10 26-28 24-26-22-12-34Z" fill="#3D7B80" />
                <text x="478" y="285" fill="#C8E7D5" fontSize="10" style={t}>BARNA</text>
              </g>
            )}
            {on.roads && (
              <g>
                <path d="M120 50L300 160L330 246L420 440" fill="none" stroke="#E9E2D3" strokeOpacity="0.55" strokeDasharray="5 3" strokeWidth="2.5" />
                <text x="390" y="430" fill="#E9E2D3" fillOpacity="0.75" fontSize="10" style={t}>NH-46 → NARMADAPURAM</text>
              </g>
            )}
            {on.towns && (
              <g>
                <g onClick={pick('bhopal')} className="cursor-pointer">
                  <circle cx="120" cy="50" r="7" fill="#F2EADB" />
                  <text x="134" y="46" fill="#F2EADB" fontSize="13" fontWeight="600" style={t}>BHOPAL</text>
                </g>
                <circle cx="300" cy="160" r="4" fill="#E9E2D3" />
                <text x="212" y="152" fill="#E9E2D3" fillOpacity="0.8" fontSize="10" style={t}>Obaidullaganj</text>
              </g>
            )}
            {on.heritage && (
              <g>
                <g onClick={pick('heritage')} className="cursor-pointer">
                  <circle cx="350" cy="262" r={sel === 'heritage' ? 8 : 6} fill="#A8432A" stroke="#FFB4A2" strokeWidth="1.5" />
                  <text x="361" y="266" fill="#FFB4A2" fontSize="10" style={t}>★ BHIMBETKA</text>
                </g>
                <g onClick={pick('ginnorgarh')} className="cursor-pointer">
                  <path d="M207 356l8-12 8 12z" fill="#A8432A" stroke="#FFB4A2" strokeWidth="1.2" transform={sel === 'ginnorgarh' ? 'translate(215 350) scale(1.3) translate(-215 -350)' : undefined} />
                  <text x="140" y="374" fill="#FFB4A2" fontSize="10" style={t}>GINNORGARH FORT</text>
                </g>
              </g>
            )}
            {on.gates &&
              [
                ['jhiri', 1, 352, 176],
                ['delawadi', 2, 178, 300],
                ['bhimbetka', 3, 316, 232],
              ].map(([k, n, x, y]) => (
                <g key={k} onClick={pick(k)} className="cursor-pointer">
                  <circle cx={x} cy={y} r={sel === k ? 20 : 15} fill="#E08A1E" fillOpacity="0.25" />
                  <circle cx={x} cy={y} r="11" fill="#E08A1E" stroke="#141815" strokeWidth="2" />
                  <text x={x} y={y + 4} textAnchor="middle" fill="#141815" fontSize="12" fontWeight="700" style={t}>
                    {n}
                  </text>
                </g>
              ))}
            <g transform="translate(560 40)">
              <circle r="16" fill="#14261E" stroke="#F2EADB" strokeOpacity="0.3" />
              <path d="M0 -10L5 6L0 3L-5 6Z" fill="#E08A1E" />
              <text y="-20" textAnchor="middle" fill="#F2EADB" fontSize="10" style={t}>N</text>
            </g>
          </svg>
          <p className="absolute bottom-3 left-4 font-label text-[0.6rem] uppercase tracking-widest text-sand/50">Schematic map · not to scale</p>
        </div>

        <div className="flex flex-col justify-between gap-6 border-t border-sand/10 p-6 lg:col-span-4 lg:border-l lg:border-t-0" aria-live="polite">
          <div>
            <span className="font-label text-label-sm uppercase text-amber">{info.cat}</span>
            <h3 className="mt-1 text-headline-sm text-white">{info.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-sand/75">{info.desc}</p>
          </div>
          <dl className="space-y-2">
            {info.specs.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 border-b border-sand/10 pb-2 text-sm">
                <dt className="text-sand/60">{k}</dt>
                <dd className="text-right font-semibold text-white">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-sand/50">Tap zones, gates, reservoirs or landmarks on the map. Tap empty space to reset.</p>
        </div>
      </div>
    </div>
  );
}
