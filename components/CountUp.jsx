'use client';

import { useEffect, useRef } from 'react';

/**
 * Animates a number from 0 when it scrolls into view. The real value is in the
 * server HTML (good for SEO and no-JS users). The animation writes straight to
 * the DOM (no React re-renders) and waits for the browser to be idle, so it
 * never competes with page loading.
 */
export default function CountUp({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null);
  const fmt = (n) => n.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    let io;
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200));
    const handle = idle(() => {
      io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / 1400);
            el.textContent = fmt(value * (1 - Math.pow(1 - p, 3)));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        },
        { threshold: 0.4 }
      );
      io.observe(el);
    });
    return () => {
      io?.disconnect();
      cancelAnimationFrame(raf);
      (window.cancelIdleCallback || clearTimeout)(handle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {fmt(value)}
    </span>
  );
}
