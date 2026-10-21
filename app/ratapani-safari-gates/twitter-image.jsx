import { renderOg } from '@/lib/og';

export const alt = 'Ratapani Safari Gates';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Ratapani Safari Gates', eyebrow: 'Jhiri · Delawadi · Bhimbetka', image: 'ratapani-safari-gate-entrance' });
}
