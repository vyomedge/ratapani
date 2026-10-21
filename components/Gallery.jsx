'use client';

import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import Img from './Img';

/** Image grid with an accessible lightbox (native <dialog>). */
export default function Gallery({ items }) {
  const dialog = useRef(null);
  const [active, setActive] = useState(null);
  const open = (i) => {
    setActive(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const a = active !== null ? items[active] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <button
            key={it.title}
            type="button"
            onClick={() => open(i)}
            className="reveal group relative h-80 overflow-hidden rounded-card bg-forest text-left shadow-md"
            style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
            aria-label={`Enlarge: ${it.title}`}
          >
            <Img name={it.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="card-img-zoom" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100">
              <ZoomIn className="h-4 w-4" aria-hidden />
            </span>
            <span className="absolute left-4 top-4 rounded-full bg-ochre px-3 py-1 font-label text-label-sm uppercase text-white">{it.tag}</span>
            <span className="absolute inset-x-5 bottom-5 text-white">
              <span className="block font-serif text-2xl">{it.title}</span>
              <span className="mt-1 block text-sm text-white/80">{it.short}</span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialog.current && close()}
        className="w-[min(100%-2rem,64rem)] overflow-hidden rounded-card bg-forest p-0 text-sand backdrop:bg-black/80"
      >
        {a && (
          <div>
            <div className="relative aspect-[4/3] w-full bg-black sm:aspect-[16/10]">
              <Img name={a.image} sizes="(min-width: 1024px) 64rem, 100vw" />
            </div>
            <div className="flex items-start justify-between gap-4 p-5">
              <div>
                <p className="font-label text-label-sm uppercase text-amber">{a.tag}</p>
                <h3 className="font-serif text-2xl text-white">{a.title}</h3>
                <p className="mt-1 text-sm text-sand/80">{a.long}</p>
              </div>
              <button type="button" onClick={close} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
