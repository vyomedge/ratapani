import Link from 'next/link';

/** Brand lockup: tiger-in-rock-arch emblem + "RATAPANI / JUNGLE SAFARI" wordmark. */
export default function Logo({ light = false, size = 'md' }) {
  const big = size === 'lg';
  return (
    <Link href="/" className="group flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={light ? '/logo-emblem-light.svg' : '/logo-emblem.svg'}
        alt=""
        width={big ? 76 : 60}
        height={big ? 40 : 32}
        className={big ? 'h-10 w-auto' : 'h-8 w-auto'}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif tracking-tight ${big ? 'text-[1.9rem]' : 'text-[1.45rem]'} ${
            light ? 'text-sand' : 'text-forest group-hover:text-primary'
          } transition-colors`}
        >
          RATAPANI
        </span>
        <span className={`mt-1 font-label text-[0.6rem] font-bold tracking-[0.3em] ${light ? 'text-amber' : 'text-outline'}`}>
          JUNGLE SAFARI
        </span>
      </span>
    </Link>
  );
}
