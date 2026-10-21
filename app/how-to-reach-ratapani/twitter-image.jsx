import { renderOg } from '@/lib/og';

export const alt = 'How to Reach Ratapani';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'How to Reach Ratapani', eyebrow: 'From Bhopal by road, rail & air', image: 'ratapani-forest-highway-road-trip' });
}
