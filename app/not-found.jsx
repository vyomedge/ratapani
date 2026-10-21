import Link from 'next/link';
import { PAGES } from '@/lib/site';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="bg-contour flex min-h-[80vh] items-center bg-sand pt-20">
      <div className="container-site text-center">
        <p className="eyebrow text-tertiary">404 · Off the trail</p>
        <h1 className="text-[2.5rem] text-ink md:text-display-lg">These tracks lead nowhere</h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-ink-soft">
          The page you were following has gone cold. Pick up the trail from one of our Ratapani guides.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-amber">
            Back to home
          </Link>
          <Link href={PAGES.bookSafari.path} className="btn-outline">
            Book a safari
          </Link>
        </div>
      </div>
    </section>
  );
}
