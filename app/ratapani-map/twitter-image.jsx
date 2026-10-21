import { renderOg } from '@/lib/og';

export const alt = 'Ratapani Map';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Ratapani Map', eyebrow: 'Zones · gates · location', image: 'ratapani-parchment-map' });
}
