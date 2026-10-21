import { renderOg } from '@/lib/og';

export const alt = 'Ginnorgarh Fort, Ratapani';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Ginnorgarh Fort, Ratapani', eyebrow: 'Gond hill fort · history & trek', image: 'ginnorgarh-fort-ruins-forest' });
}
