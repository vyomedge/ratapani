import { renderOg } from '@/lib/og';

export const alt = 'History of Ratapani';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'History of Ratapani', eyebrow: 'Bhimbetka to tiger reserve', image: 'vindhya-hills-misty-sunrise-ratapani' });
}
