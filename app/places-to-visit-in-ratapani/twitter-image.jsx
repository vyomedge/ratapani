import { renderOg } from '@/lib/og';

export const alt = 'Places to Visit in Ratapani';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Places to Visit in Ratapani', eyebrow: '12 best tourist places', image: 'bhimbetka-sandstone-towers-sunset' });
}
