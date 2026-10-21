'use client';

import { useState } from 'react';
import { Navigation } from 'lucide-react';

export const GATES_DATA = {
  jhiri: {
    n: 1,
    name: 'Jhiri Gate',
    tag: 'Online + gate booking',
    desc: 'The closest gate to Bhopal, near Obaidullaganj off the Bhopal–Narmadapuram highway (NH-46) in Raisen district. It has the largest online quota.',
    specs: [
      ['From Bhopal railway station', '34 km'],
      ['Online full vehicles / round', '2 (+1 single seat)'],
      ['Vehicle fee', '₹3,000'],
    ],
    x: 352,
    y: 176,
  },
  delawadi: {
    n: 2,
    name: 'Delawadi Gate',
    tag: 'Online + gate booking',
    desc: 'The western gate in Sehore district, about 52 km from Bhopal railway station. Gateway to quieter teak valleys and the walk to Ginnorgarh Fort.',
    specs: [
      ['From Bhopal railway station', '52 km'],
      ['Online full vehicles / round', '1'],
      ['Vehicle fee', '₹2,600'],
    ],
    x: 178,
    y: 300,
  },
  bhimbetka: {
    n: 3,
    name: 'Bhimbetka Gate',
    tag: 'Offline only · private vehicles',
    desc: 'Beside the UNESCO Bhimbetka rock shelters on NH-46. Booked only at the gate, and visitors may drive their own vehicles on the permitted route.',
    specs: [
      ['From Bhopal railway station', '44 km'],
      ['Booking', 'At the gate'],
      ['Private vehicle', 'Allowed'],
    ],
    x: 316,
    y: 232,
  },
};

const OVERVIEW = {
  name: 'Three safari gates',
  tag: 'Overview',
  desc: 'Ratapani has three tourist entry gates. Jhiri and Delawadi are booked online or at the gate in registered vehicles; Bhimbetka is booked offline. Select a gate to see its details.',
  specs: [
    ['Reserve area', '1,271.5 km²'],
    ['Gates', 'Jhiri, Delawadi, Bhimbetka'],
    ['Rounds per day', 'Morning & evening'],
  ],
};

export default function GateMap() {
  const [active, setActive] = useState('all');
  const info = active === 'all' ? OVERVIEW : GATES_DATA[active];

  return (
    <div className="overflow-hidden rounded-card bg-forest text-sand shadow-2xl">
      <div className="flex flex-wrap gap-2 border-b border-sand/10 p-4" role="tablist" aria-label="Select a safari gate">
        {[['all', 'All gates'], ...Object.entries(GATES_DATA).map(([k, g]) => [k, `${g.n}. ${g.name.replace(' Gate', '')}`])].map(([k, label]) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={active === k}
            onClick={() => setActive(k)}
            className={`rounded-full px-4 py-2 font-label text-label-md uppercase transition-colors ${
              active === k ? 'bg-amber text-charcoal' : 'bg-white/10 text-sand hover:bg-white/20'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="relative lg:col-span-8">
          <svg viewBox="0 0 600 450" className="h-auto w-full" role="img" aria-labelledby="gatemap-title">
            <title id="gatemap-title">Schematic map of Ratapani showing Bhopal, NH-46 and the Jhiri, Delawadi and Bhimbetka safari gates</title>
            <rect width="600" height="450" fill="#1F3A2E" />
            {/* contour lines */}
            <g fill="none" stroke="#F2EADB" strokeOpacity="0.06" strokeWidth="1.2">
              <path d="M0 90c120 30 200-40 320 0s180 50 280 10" />
              <path d="M0 170c110 40 220-30 330 10s160 40 270 0" />
              <path d="M0 250c140 30 210-40 330 10s170 50 270 0" />
              <path d="M0 330c120 40 230-30 340 10s160 40 260 0" />
              <path d="M0 410c130 30 220-40 330 10s170 50 270 0" />
            </g>
            {/* reserve outline */}
            <path d="M120 140C190 105 300 110 400 130C500 150 545 220 520 300C495 380 390 405 280 395C170 385 95 350 85 270C78 210 90 160 120 140Z" fill="#254335" fillOpacity="0.9" />
            <path d="M175 175C240 150 330 150 410 170C465 185 470 245 450 300C430 350 350 355 270 345C200 337 160 300 160 245C160 210 162 185 175 175Z" fill="#14261E" stroke="#E08A1E" strokeDasharray="6 4" strokeWidth="2" />
            <text x="300" y="275" textAnchor="middle" fill="#F2EADB" fillOpacity="0.35" fontSize="12" letterSpacing="3" fontFamily="var(--font-label)">CORE ZONE</text>
            <text x="470" y="370" textAnchor="middle" fill="#F2EADB" fillOpacity="0.35" fontSize="11" letterSpacing="3" fontFamily="var(--font-label)">BUFFER</text>
            {/* waterbodies */}
            <path d="M60 205c18-12 40-8 48 8s-6 34-26 34-36-26-22-42Z" fill="#3D7B80" opacity="0.85" />
            <text x="50" y="270" fill="#C8E7D5" fontSize="10" fontFamily="var(--font-label)">KOLAR DAM</text>
            <path d="M262 300c14-10 34-6 38 8s-10 24-26 22-24-20-12-30Z" fill="#3D7B80" opacity="0.85" />
            <text x="250" y="342" fill="#C8E7D5" fontSize="10" fontFamily="var(--font-label)">RATAPANI DAM</text>
            <path d="M488 236c16-10 36-4 40 10s-10 26-28 24-26-22-12-34Z" fill="#3D7B80" opacity="0.85" />
            <text x="478" y="285" fill="#C8E7D5" fontSize="10" fontFamily="var(--font-label)">BARNA</text>
            {/* roads */}
            <path d="M120 50L300 160L330 246L420 440" fill="none" stroke="#E9E2D3" strokeOpacity="0.5" strokeDasharray="5 3" strokeWidth="2.5" />
            <text x="390" y="430" fill="#E9E2D3" fillOpacity="0.7" fontSize="10" fontFamily="var(--font-label)">NH-46 → NARMADAPURAM</text>
            {/* towns */}
            <circle cx="120" cy="50" r="7" fill="#F2EADB" />
            <text x="134" y="46" fill="#F2EADB" fontSize="13" fontWeight="600" fontFamily="var(--font-label)">BHOPAL</text>
            <circle cx="300" cy="160" r="4" fill="#E9E2D3" />
            <text x="212" y="152" fill="#E9E2D3" fillOpacity="0.8" fontSize="10" fontFamily="var(--font-label)">Obaidullaganj</text>
            <circle cx="350" cy="262" r="5" fill="#A8432A" />
            <text x="361" y="266" fill="#FFB4A2" fontSize="10" fontFamily="var(--font-label)">★ BHIMBETKA (UNESCO)</text>
            {/* gate pins */}
            {Object.entries(GATES_DATA).map(([k, g]) => {
              const on = active === k || active === 'all';
              return (
                <g key={k} onClick={() => setActive(k)} className="cursor-pointer" opacity={on ? 1 : 0.45}>
                  <circle cx={g.x} cy={g.y} r={active === k ? 20 : 15} fill="#E08A1E" fillOpacity="0.25" />
                  <circle cx={g.x} cy={g.y} r="11" fill="#E08A1E" stroke="#141815" strokeWidth="2" />
                  <text x={g.x} y={g.y + 4} textAnchor="middle" fill="#141815" fontSize="12" fontWeight="700" fontFamily="var(--font-label)">
                    {g.n}
                  </text>
                </g>
              );
            })}
            <g transform="translate(560 40)">
              <circle r="16" fill="#14261E" stroke="#F2EADB" strokeOpacity="0.3" />
              <path d="M0 -10L5 6L0 3L-5 6Z" fill="#E08A1E" />
              <text y="-20" textAnchor="middle" fill="#F2EADB" fontSize="10" fontFamily="var(--font-label)">N</text>
            </g>
          </svg>
          <p className="absolute bottom-3 left-4 font-label text-[0.6rem] uppercase tracking-widest text-sand/50">Schematic map · not to scale</p>
        </div>

        <div className="flex flex-col justify-between gap-6 border-t border-sand/10 p-6 lg:col-span-4 lg:border-l lg:border-t-0" aria-live="polite">
          <div>
            <span className="font-label text-label-sm uppercase text-amber">{info.tag}</span>
            <h3 className="mt-1 text-headline-sm text-white">{info.name}</h3>
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
          <div className="flex flex-wrap gap-3 font-label text-label-sm uppercase text-sand/70">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-[#14261E] ring-1 ring-amber" /> Core</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-[#254335]" /> Buffer</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-[#3D7B80]" /> Water</span>
            <span className="flex items-center gap-1.5"><Navigation className="h-3 w-3 text-amber" aria-hidden /> Gate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
