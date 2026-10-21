'use client';

import { useMemo, useState } from 'react';
import { Search, X, Plus, SearchX } from 'lucide-react';

/**
 * Searchable, filterable FAQ list. Every question and answer is in the HTML
 * (for Google and AI engines); search and filters only hide non-matches.
 */
export default function FaqExplorer({ groups, quick = [] }) {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('all');
  const [openAll, setOpenAll] = useState(false);
  const total = groups.reduce((n, g) => n + g.faqs.length, 0);
  const q = query.trim().toLowerCase();

  const match = (f) => !q || `${f.q} ${f.a} ${f.tags || ''}`.toLowerCase().includes(q);
  const visibleCount = useMemo(
    () => groups.filter((g) => cat === 'all' || g.id === cat).reduce((n, g) => n + g.faqs.filter(match).length, 0),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [groups, cat, q]
  );

  return (
    <div>
      <div className="relative mb-4">
        <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-outline" aria-hidden />
        <label htmlFor="faq-search" className="sr-only">
          Search questions
        </label>
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions, e.g. permit, Delawadi, Bhimbetka, best month…"
          autoComplete="off"
          className="w-full rounded-full border border-forest/15 bg-white py-4 pl-14 pr-12 text-ink shadow-sm placeholder:text-outline focus:border-amber focus:outline-none"
        />
        {query && (
          <button type="button" onClick={() => setQuery('')} aria-label="Clear search" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-outline hover:text-ink">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      {quick.length > 0 && (
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="font-label text-label-sm uppercase text-outline">Quick search:</span>
          {quick.map(([label, term]) => (
            <button key={label} type="button" onClick={() => setQuery(term)} className="rounded-full bg-surface-mid px-3 py-1.5 text-sm text-ink hover:bg-amber/30">
              {label}
            </button>
          ))}
        </div>
      )}

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div role="group" aria-label="Filter by category" className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {[{ id: 'all', title: `All (${total})` }, ...groups].map((g) => (
            <button
              key={g.id}
              type="button"
              aria-pressed={cat === g.id}
              onClick={() => setCat(g.id)}
              className={`shrink-0 rounded-full px-4 py-2 font-label text-label-md uppercase transition-colors ${
                cat === g.id ? 'bg-forest text-sand' : 'bg-surface-mid text-ink hover:bg-surface-high'
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => setOpenAll((v) => !v)} className="font-label text-label-md uppercase text-primary underline underline-offset-4">
          {openAll ? 'Collapse all' : 'Expand all answers'}
        </button>
      </div>

      {visibleCount === 0 && (
        <div className="rounded-card bg-white p-10 text-center shadow-sm">
          <SearchX className="mx-auto mb-3 h-8 w-8 text-outline" aria-hidden />
          <p className="font-serif text-2xl text-ink">No matching questions</p>
          <p className="mt-1 text-sm text-ink-soft">Try “gypsy”, “Delawadi”, “Bhopal”, “winter” or “tiger”.</p>
          <button type="button" onClick={() => { setQuery(''); setCat('all'); }} className="btn-outline mt-5 !min-h-[44px]">
            Reset filters
          </button>
        </div>
      )}

      <div className="space-y-12">
        {groups.map((g, gi) => {
          const items = g.faqs.filter(match);
          const hidden = (cat !== 'all' && cat !== g.id) || items.length === 0;
          return (
            <section key={g.id} id={g.id} hidden={hidden} aria-labelledby={`${g.id}-h`} className="scroll-mt-28">
              <div className="mb-4 flex items-end justify-between gap-3 border-b border-forest/10 pb-3">
                <div>
                  <p className="font-label text-label-sm uppercase text-tertiary">
                    {String(gi + 1).padStart(2, '0')} / {g.kicker}
                  </p>
                  <h2 id={`${g.id}-h`} className="text-headline-sm text-ink md:text-headline-md">
                    {g.title}
                  </h2>
                </div>
                <span className="font-label text-label-sm uppercase text-outline">{g.faqs.length} questions</span>
              </div>
              <div className="space-y-3">
                {g.faqs.map((f) => (
                  <details
                    key={`${f.q}-${openAll}`}
                    open={openAll || undefined}
                    hidden={!match(f)}
                    className="faq overflow-hidden rounded-xl bg-white shadow-sm"
                  >
                    <summary className="flex items-center justify-between gap-4 p-5">
                      <h3 className="font-serif text-lg leading-snug text-ink sm:text-xl">{f.q}</h3>
                      <Plus className="faq-icon h-5 w-5 shrink-0 text-primary transition-transform duration-300" aria-hidden />
                    </summary>
                    <div className="px-5 pb-5 leading-relaxed text-ink-soft">{f.a}</div>
                  </details>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
