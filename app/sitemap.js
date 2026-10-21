import fs from 'node:fs';
import path from 'node:path';
import { PAGES, SITE, absoluteUrl } from '@/lib/site';
import images from '@/data/images.json';

const PRIORITY = { '/': 1, '/ratapani-tiger-reserve': 0.9, '/book-ratapani-tiger-safari': 0.9, '/ratapani-safari-gates': 0.9, '/how-to-reach-ratapani': 0.9 };

/** Image names used on a page, read from its source so Google Images can index them. */
function pageImages(p) {
  const dir = p.path === '/' ? 'app' : path.join('app', p.path.slice(1));
  try {
    const src = fs.readFileSync(path.join(process.cwd(), dir, 'page.jsx'), 'utf8');
    const names = new Set([...src.matchAll(/['"]([a-z0-9-]+)['"]/g)].map((m) => m[1]).filter((n) => images[n]));
    return [...names].map((n) => absoluteUrl(`/images/${n}.webp`));
  } catch {
    return [];
  }
}

export default function sitemap() {
  return Object.values(PAGES)
    .filter((p) => p.live)
    .map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: new Date(SITE.lastReviewed),
      changeFrequency: p.path === '/' ? 'weekly' : 'monthly',
      priority: PRIORITY[p.path] ?? 0.8,
      images: pageImages(p),
    }));
}
