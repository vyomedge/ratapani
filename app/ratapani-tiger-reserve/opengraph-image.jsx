import { renderOg } from '@/lib/og';

export const alt = 'Ratapani Tiger Reserve';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Ratapani Tiger Reserve', eyebrow: 'MP’s 8th tiger reserve · 1,271 km²', image: 'ratapani-tiger-reserve-tiger' });
}
