'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { NAV, PAGES } from '@/lib/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-ochre/15 bg-sand/95 shadow-[0_1px_8px_rgba(0,0,0,0.05)] backdrop-blur-md'
          : 'bg-gradient-to-b from-charcoal/55 to-transparent'
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between gap-4">
        <Logo light={!solid} />

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1 py-3 font-label text-label-lg uppercase transition-colors ${
                  solid ? 'text-ink-soft hover:text-ink' : 'text-sand/90 hover:text-white'
                }`}
                aria-haspopup="true"
              >
                {group.label}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" aria-hidden />
              </button>
              <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white p-4 shadow-menu">
                  {group.items.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`group/card rounded-xl p-3 transition-colors hover:bg-surface-low ${
                        pathname === item.path ? 'bg-surface-low' : ''
                      }`}
                    >
                      <span className="block font-serif text-xl text-ink group-hover/card:text-primary">{item.title}</span>
                      <span className="mt-1 block text-sm text-ink-soft">{item.blurb}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={PAGES.bookSafari.path} className="btn-amber hidden !min-h-[44px] !px-6 !py-2.5 !text-label-md sm:inline-flex">
            Plan Your Safari
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
              solid ? 'bg-forest text-sand' : 'bg-white/15 text-white backdrop-blur-md'
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-forest bg-contour-light px-5 pb-10 pt-6 transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-8">
          <Link href="/" className="font-serif text-3xl text-sand">
            Home
          </Link>
          {NAV.map((group) => (
            <div key={group.label}>
              <p className="mb-3 font-label text-label-md uppercase text-amber">{group.label}</p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="flex items-center justify-between border-b border-sand/10 pb-3 font-serif text-2xl text-sand">
                      {item.title}
                      <ArrowRight className="h-5 w-5 text-amber" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link href={PAGES.bookSafari.path} className="btn-amber w-full">
            Plan Your Safari
          </Link>
        </nav>
      </div>
    </header>
  );
}
