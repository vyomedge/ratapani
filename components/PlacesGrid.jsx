'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import Img from './Img';

const CATS = [
  ['all', 'All places'],
  ['wildlife', 'Wildlife & forest'],
  ['heritage', 'Heritage'],
  ['lakes', 'Lakes & dams'],
  ['spiritual', 'Temples'],
];

/** Filterable grid of places. Every card stays in the HTML; filtering only hides cards. */
export default function PlacesGrid({ places }) {
  const [cat, setCat] = useState('all');
  return (
    <>
      <div role="group" aria-label="Filter places" className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-1">
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
            {k === 'all' ? ` (${places.length})` : ''}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {places.map((p) => (
          <article
            key={p.name}
            id={p.id}
            hidden={cat !== 'all' && !p.cats.includes(cat)}
            className="group flex scroll-mt-28 flex-col overflow-hidden rounded-card bg-white shadow-md"
          >
            <div className="relative h-56 overflow-hidden bg-forest">
              <Img name={p.image} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="card-img-zoom" />
              <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 font-label text-label-sm uppercase text-white backdrop-blur-md">
                {p.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="mb-1 flex items-center gap-1.5 font-label text-label-sm uppercase text-outline">
                <MapPin className="h-3.5 w-3.5 text-tertiary" aria-hidden /> {p.where}
              </p>
              <h3 className="mb-2 text-headline-sm text-ink">{p.name}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              <p className="border-t border-forest/10 pt-3 text-xs text-ink">
                <strong className="font-label text-label-sm uppercase text-primary">Highlights · </strong>
                {p.highlights}
              </p>
              {p.href && (
                <Link href={p.href} className="mt-4 inline-flex items-center gap-1 font-label text-label-md uppercase text-primary">
                  Full guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
