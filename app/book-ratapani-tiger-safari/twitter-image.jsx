import { renderOg } from '@/lib/og';

export const alt = 'Ratapani Tiger Safari Booking';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Ratapani Tiger Safari Booking', eyebrow: 'Price · timings · online steps', image: 'ratapani-tiger-safari-jeep-tiger-crossing' });
}
