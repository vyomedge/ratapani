'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/** Horizontal scroll track with prev/next buttons. Cards are server-rendered children. */
export default function WildlifeCarousel({ children, heading }) {
  const track = useRef(null);
  const scroll = (dir) => track.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  return (
    <>
      <div className="container-site mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        {heading}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous animals"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-mid text-ink shadow-sm transition-colors hover:bg-amber hover:text-charcoal"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next animals"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-mid text-ink shadow-sm transition-colors hover:bg-amber hover:text-charcoal"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div
        ref={track}
        className="no-scrollbar container-site flex snap-x snap-mandatory scroll-px-5 sm:scroll-px-6 lg:scroll-px-8 gap-4 overflow-x-auto pb-4"
        tabIndex={0}
        aria-label="Wildlife of Ratapani"
      >
        {children}
      </div>
    </>
  );
}
