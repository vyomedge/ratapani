import { renderOg } from '@/lib/og';

export const alt = 'Best Time to Visit Ratapani';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Best Time to Visit Ratapani', eyebrow: 'Safari season & timings', image: 'ratapani-teak-forest-sunrise-safari-track' });
}
