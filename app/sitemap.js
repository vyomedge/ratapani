import { PAGES, SITE, absoluteUrl } from '@/lib/site';

const PRIORITY = { '/': 1, '/ratapani-tiger-reserve': 0.9, '/book-ratapani-tiger-safari': 0.9, '/ratapani-safari-gates': 0.9 };

export default function sitemap() {
  return Object.values(PAGES)
    .filter((p) => p.live)
    .map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: new Date(SITE.lastReviewed),
      changeFrequency: 'monthly',
      priority: PRIORITY[p.path] ?? 0.8,
    }));
}
