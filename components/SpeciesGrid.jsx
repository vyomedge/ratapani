'use client';

import { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import Img from './Img';

const CATS = [
  ['all', 'All species'],
  ['carnivore', 'Carnivores'],
  ['herbivore', 'Herbivores'],
  ['primate', 'Primates'],
];

const STATUS_STYLE = {
  'Endangered': 'bg-ochre text-white',
  'Vulnerable': 'bg-amber text-charcoal',
  'Near Threatened': 'bg-secondary-soft text-secondary',
  'Least Concern': 'bg-white/90 text-ink',
};

const CHANCE = { High: 85, Good: 65, Moderate: 45, Rare: 20 };

/** Filterable species cards. All cards stay in the HTML; filtering only hides them. */
export default function SpeciesGrid({ species }) {
  const [cat, setCat] = useState('all');
  return (
    <>
      <div role="group" aria-label="Filter species" className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-1">
        {CATS.map(([k, label]) => (
          <button
            key={k}
            type="button"
            aria-pressed={cat === k}
            onClick={() => setCat(k)}
            className={`shrink-0 rounded-full px-5 py-2.5 font-label text-label-md uppercase transition-colors ${
              cat === k ? 'bg-forest text-sand' : 'bg-surface-mid text-ink hover:bg-surface-high'
            }`}
          >
            {label}
            {k === 'all' ? ` (${species.length})` : ''}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {species.map((s) => (
          <article key={s.name} hidden={cat !== 'all' && s.cat !== cat} className="group flex flex-col overflow-hidden rounded-card bg-white shadow-md">
            <div className="relative h-60 overflow-hidden bg-forest">
              <Img name={s.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="card-img-zoom" />
              <span className={`absolute left-3 top-3 rounded-full px-3 py-1 font-label text-label-sm uppercase ${STATUS_STYLE[s.status]}`}>
                {s.status} (IUCN)
              </span>
              <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 font-label text-label-sm uppercase text-white backdrop-blur-md">
                {s.role}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-headline-sm text-ink">{s.name}</h3>
              <p className="mb-4 font-label text-label-sm italic text-outline">{s.latin}</p>
              <div className="mb-4">
                <div className="mb-1 flex justify-between font-label text-label-sm uppercase">
                  <span className="text-ink-soft">Chance of sighting</span>
                  <span className="text-primary">{s.chance}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-surface-high" aria-hidden>
                  <div className="h-full rounded-full bg-gradient-to-r from-moss to-amber" style={{ width: `${CHANCE[s.chance]}%` }} />
                </div>
              </div>
              <p className="mb-2 flex gap-2 text-sm text-ink">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tertiary" aria-hidden /> {s.habitat}
              </p>
              <p className="mb-4 flex gap-2 text-sm text-ink">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-tertiary" aria-hidden /> {s.when}
              </p>
              <p className="mt-auto border-t border-forest/10 pt-3 text-sm leading-relaxed text-ink-soft">{s.note}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
