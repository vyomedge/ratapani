import { renderOg } from '@/lib/og';

export const alt = 'Ratapani Wildlife Sanctuary';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Ratapani Wildlife Sanctuary', eyebrow: 'Declared 1976 · 825 km²', image: 'ratapani-wildlife-sanctuary-aerial' });
}
