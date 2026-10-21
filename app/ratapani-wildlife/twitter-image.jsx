import { renderOg } from '@/lib/og';

export const alt = 'Ratapani Wildlife: Animals & Birds';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Ratapani Wildlife: Animals & Birds', eyebrow: 'Tigers · leopards · 249 birds', image: 'indian-leopard-teak-branch-ratapani' });
}
