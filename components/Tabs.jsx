'use client';

import { Children, useState } from 'react';

/**
 * Accessible tabs. All panels are rendered in the HTML (good for SEO); only
 * the active one is visible.
 */
export default function Tabs({ tabs, children, dark = false, label = 'Tabs' }) {
  const [active, setActive] = useState(0);
  const panels = Children.toArray(children);
  return (
    <div>
      <div role="tablist" aria-label={label} className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            type="button"
            role="tab"
            id={`tab-${label}-${i}`}
            aria-selected={active === i}
            aria-controls={`panel-${label}-${i}`}
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-full px-5 py-3 text-left transition-colors ${
              active === i
                ? 'bg-amber text-charcoal'
                : dark
                  ? 'bg-white/10 text-sand hover:bg-white/20'
                  : 'bg-surface-mid text-ink hover:bg-surface-high'
            }`}
          >
            <span className="block font-label text-label-md uppercase">{t.label}</span>
            {t.sub && <span className={`block text-xs ${active === i ? 'text-charcoal/75' : 'opacity-70'}`}>{t.sub}</span>}
          </button>
        ))}
      </div>
      {panels.map((p, i) => (
        <div key={i} role="tabpanel" id={`panel-${label}-${i}`} aria-labelledby={`tab-${label}-${i}`} hidden={active !== i}>
          {p}
        </div>
      ))}
    </div>
  );
}
