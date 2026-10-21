import { renderOg } from '@/lib/og';

export const alt = 'Ratapani FAQs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Ratapani FAQs', eyebrow: '43 answers for your safari', image: 'bhimbetka-zoo-rock' });
}
