import Link from 'next/link';
import { ArrowRight, PawPrint, ChevronRight, Plus, CalendarCheck } from 'lucide-react';
import Img from './Img';
import JsonLd from './JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/seo';
import { SITE } from '@/lib/site';

const fmtDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

/* ---------------- Section heading (eyebrow + H2 + intro) ---------------- */
export function SectionHeading({ eyebrow, title, intro, tone = 'primary', align = 'left', dark = false, as: H = 'h2', id }) {
  const toneClass = dark ? 'text-amber' : tone === 'ochre' ? 'text-tertiary' : tone === 'moss' ? 'text-secondary' : 'text-primary';
  return (
    <div className={`reveal mb-10 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}`}>
      {eyebrow && <span className={`eyebrow ${toneClass}`}>{eyebrow}</span>}
      <H id={id} className={`text-[2rem] leading-tight tracking-tight md:text-headline-lg ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </H>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-sand/80' : 'text-ink-soft'}`}>{intro}</p>}
    </div>
  );
}

/* ---------------- Inner page hero with breadcrumb ---------------- */
export function PageHero({ image, eyebrow, title, intro, crumbs, badges = [], position, minH = 'min-h-[780px] sm:min-h-[680px] lg:min-h-[700px]' }) {
  return (
    <section className={`relative flex ${minH} flex-col justify-end overflow-hidden bg-forest`}>
      <div className="absolute inset-0">
        <Img name={image} priority sizes="100vw" className="animate-kenburns" position={position} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-transparent" />
      </div>
      <div className="container-site relative z-10 pb-14 pt-36 lg:pb-20">
        <Breadcrumbs crumbs={crumbs} light />
        {eyebrow && (
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-forest/80 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber" />
            <span className="font-label text-label-md uppercase text-primary-fixed">{eyebrow}</span>
          </p>
        )}
        <h1 className="max-w-4xl text-[2.6rem] leading-[1.05] tracking-tight text-white sm:text-[3.25rem] lg:text-display-xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand/90">{intro}</p>}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 font-label text-label-sm uppercase text-sand/80">
          {badges.map((b) => (
            <span key={b.text} className="flex items-center gap-2">
              {b.icon && <b.icon className="h-4 w-4 text-amber" aria-hidden />}
              {b.text}
            </span>
          ))}
          <span className="flex items-center gap-2">
            <CalendarCheck className="h-4 w-4 text-amber" aria-hidden />
            Updated <time dateTime={SITE.lastReviewed}>{fmtDate(SITE.lastReviewed)}</time>
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Breadcrumbs (visual + BreadcrumbList schema) ---------------- */
export function Breadcrumbs({ crumbs, light = false }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-5">
        <ol className={`flex flex-wrap items-center gap-1.5 font-label text-label-md uppercase ${light ? 'text-sand/75' : 'text-ink-soft'}`}>
          {crumbs.map((c, i) => (
            <li key={c.name} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden />}
              {c.path && i < crumbs.length - 1 ? (
                <Link href={c.path} className="hover:text-amber">
                  {c.name}
                </Link>
              ) : (
                <span aria-current={i === crumbs.length - 1 ? 'page' : undefined} className={light ? 'text-primary-fixed' : 'text-primary'}>
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}

/* ---------------- Key Takeaways (AEO summary box) ---------------- */
export function KeyTakeaways({ title = 'Key takeaways', items, eyebrow = 'Quick answer' }) {
  return (
    <section aria-labelledby="key-takeaways" className="reveal relative overflow-hidden rounded-card bg-surface-low p-6 shadow-sm sm:p-8">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-ochre" />
      <PawPrint className="pointer-events-none absolute -bottom-8 -right-6 h-44 w-44 text-ochre opacity-[0.06]" aria-hidden />
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
          <PawPrint className="h-4 w-4" aria-hidden />
        </span>
        <span className="font-label text-label-sm uppercase text-primary">{eyebrow}</span>
      </div>
      <h2 id="key-takeaways" className="mb-6 text-headline-sm text-ink md:text-headline-md">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((it) => (
          <div key={it.title} className="flex items-start gap-3 rounded-xl bg-surface p-4">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary">
              {it.icon ? <it.icon className="h-4 w-4" aria-hidden /> : <PawPrint className="h-4 w-4" aria-hidden />}
            </span>
            <div>
              <h3 className="mb-1 font-sans text-base font-bold text-ink">{it.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{it.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FAQ accordion (no JS, FAQPage schema) ---------------- */
export function Faq({ faqs, title = 'Frequently asked questions', eyebrow = 'Field advisory', intro, id = 'faqs', center = false }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} align={center ? 'center' : 'left'} id={`${id}-title`} />
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details key={f.q} className="faq reveal overflow-hidden rounded-xl bg-white shadow-sm" open={i === 0}>
            <summary className="flex items-center justify-between gap-4 p-5">
              <h3 className="font-serif text-lg leading-snug text-ink sm:text-xl">{f.q}</h3>
              <Plus className="faq-icon h-5 w-5 shrink-0 text-primary transition-transform duration-300" aria-hidden />
            </summary>
            <div className="px-5 pb-5 leading-relaxed text-ink-soft">{f.html ?? f.a}</div>
          </details>
        ))}
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}

/* ---------------- Rock-art marquee divider ---------------- */
export function RockArtStrip({ words }) {
  const list = words ?? ['Bengal tigers', 'Teak forests', 'Bhimbetka rock art', 'Vindhya hills', 'Sloth bears', 'Ratapani Dam', 'Leopards', '249 bird species'];
  const row = [...list, ...list];
  return (
    <div className="overflow-hidden bg-surface-high py-3" aria-hidden>
      <div className="flex w-max animate-marquee items-center gap-10 font-label text-label-sm uppercase text-tertiary">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{w}</span>
            <RockFigure />
          </span>
        ))}
      </div>
    </div>
  );
}

function RockFigure() {
  // Tiny Bhimbetka-style stick animal
  return (
    <svg width="34" height="16" viewBox="0 0 34 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 7h20M24 7l5-4M29 3l2 2M6 7l-2 7M10 7l1 7M19 7l-1 7M23 7l2 7M4 7 1 4" />
    </svg>
  );
}

/* ---------------- Related pages cards ---------------- */
export function RelatedCards({ title = 'Explore related chapters', eyebrow = 'Continue exploring', cards }) {
  return (
    <section aria-labelledby="related-title">
      <SectionHeading eyebrow={eyebrow} title={title} id="related-title" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <Link
            key={c.href}
            href={c.href}
            className="reveal group flex flex-col overflow-hidden rounded-card bg-white shadow-sm transition-shadow hover:shadow-lift"
            style={{ '--reveal-delay': `${i * 90}ms` }}
          >
            <div className="relative h-52 overflow-hidden bg-forest">
              <Img name={c.image} sizes="(min-width: 768px) 33vw, 100vw" className="card-img-zoom" />
              <span className="absolute left-3 top-3 rounded-full bg-charcoal/60 px-3 py-1 font-label text-label-sm uppercase text-white backdrop-blur-md">
                {c.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="mb-2 text-headline-sm text-ink group-hover:text-primary">{c.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{c.text}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 font-label text-label-md uppercase text-primary">
                Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Dark call-to-action band ---------------- */
export function CtaBand({ eyebrow, title, text, primary, secondary }) {
  return (
    <section className="relative overflow-hidden bg-forest bg-contour-light py-20 text-sand">
      <div className="container-site relative z-10 flex flex-col items-center text-center">
        {eyebrow && <span className="eyebrow text-amber">{eyebrow}</span>}
        <h2 className="reveal max-w-3xl text-[2rem] leading-tight text-white md:text-display-lg">{title}</h2>
        {text && <p className="reveal mt-5 max-w-2xl text-lg text-sand/80">{text}</p>}
        <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
          {primary && (
            <Link href={primary.href} className="btn-amber">
              {primary.label} <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
          {secondary && (
            <Link href={secondary.href} className="btn-ghost-light">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sticky table of contents ---------------- */
export function Toc({ items, title = 'On this page', note, cta }) {
  return (
    <aside className="sticky top-28 hidden self-start lg:block">
      <div className="rounded-card bg-surface-low p-6 shadow-sm">
        <p className="border-b border-surface-highest pb-4 font-label text-label-sm uppercase text-outline">{title}</p>
        <nav aria-label="Table of contents" className="mt-4 flex flex-col gap-1">
          {items.map((it, i) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-ink-soft transition-colors hover:bg-surface hover:text-primary"
            >
              <span className="font-label text-label-md">
                {String(i + 1).padStart(2, '0')}. {it.label}
              </span>
              <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
            </a>
          ))}
        </nav>
        {note && <div className="mt-6 rounded-xl bg-secondary p-4 text-sm leading-snug text-white/90">{note}</div>}
        {cta && (
          <Link href={cta.href} className="btn-amber mt-4 w-full !text-label-md">
            {cta.label}
          </Link>
        )}
      </div>
    </aside>
  );
}

/* ---------------- Simple responsive table wrapper ---------------- */
export function TableWrap({ children, caption, note }) {
  return (
    <div className="reveal">
      <div className="overflow-x-auto rounded-card bg-white shadow-sm">
        <table className="data-table">
          {caption && <caption className="sr-only">{caption}</caption>}
          {children}
        </table>
      </div>
      {note && <p className="mt-3 text-sm text-ink-soft">{note}</p>}
    </div>
  );
}

/* ---------------- Sources list (E-E-A-T / GEO trust signal) ---------------- */
export function Sources({ items }) {
  return (
    <section aria-labelledby="sources-title" className="rounded-card border border-forest/10 bg-surface-low p-6">
      <h2 id="sources-title" className="mb-3 font-label text-label-md uppercase text-outline">
        Sources &amp; references
      </h2>
      <ul className="space-y-1.5 text-sm text-ink-soft">
        {items.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener nofollow" className="underline decoration-amber/50 underline-offset-4 hover:text-primary">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-outline">
        Safari fees, quotas and timings are set by the Madhya Pradesh Forest Department and can change. Always confirm on the official
        booking portal before you travel.
      </p>
    </section>
  );
}

/* ---------------- Further reading (external, dofollow) ---------------- */
export function FurtherReading({ title = 'Further reading', links }) {
  return (
    <aside aria-label={title} className="reveal rounded-card border-l-4 border-amber bg-amber/5 p-6">
      <p className="mb-3 font-label text-label-md uppercase text-primary">{title}</p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} target="_blank" rel="noopener" className="group inline-flex items-start gap-2 font-serif text-xl leading-snug text-ink hover:text-primary">
              <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-amber transition-transform group-hover:translate-x-1" aria-hidden />
              <span className="underline decoration-amber/50 underline-offset-4">{l.label}</span>
            </a>
            {l.text && <p className="ml-6 mt-1 text-sm text-ink-soft">{l.text}</p>}
          </li>
        ))}
      </ul>
    </aside>
  );
}
