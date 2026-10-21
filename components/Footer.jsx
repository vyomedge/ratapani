import Link from 'next/link';
import Logo from './Logo';
import { NAV, SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest bg-contour-light text-sand">
      <div className="container-site py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <Logo light size="lg" />
            <p className="max-w-md leading-relaxed text-sand/80">
              An independent guide to Ratapani Tiger Reserve and Wildlife Sanctuary near Bhopal, Madhya Pradesh: teak forests,
              tigers, safari gates and the UNESCO Bhimbetka rock shelters, all in one place.
            </p>
            <div className="max-w-md rounded-2xl bg-forest-deep/70 p-4">
              <p className="font-label text-label-md uppercase text-amber">The Forest Dispatch · launching soon</p>
              <p className="mt-1 text-sm text-sand/70">
                Ratapani stories, wildlife updates, research and articles are on the way. Bookmark this site to follow along.
              </p>
            </div>
          </div>

          {NAV.map((group) => (
            <div key={group.label}>
              <p className="mb-4 font-label text-label-lg uppercase text-amber">{group.label}</p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="text-sand/75 transition-colors hover:text-sand">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-sand/10 pt-6 text-sm text-sand/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Dedicated to the wilderness of the Vindhya range.
          </p>
          <p>Safari permits are issued only by the Madhya Pradesh Forest Department.</p>
        </div>
      </div>
    </footer>
  );
}
