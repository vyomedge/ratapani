import { renderOg } from '@/lib/og';

export const alt = 'Ratapani Tiger Reserve & Jungle Safari';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Ratapani Tiger Reserve & Jungle Safari', eyebrow: 'Tiger reserve · 34 km from Bhopal', image: 'ratapani-tiger-walking-teak-forest' });
}
