import { renderOg } from '@/lib/og';

export const alt = 'Bhimbetka Rock Shelters';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default function Image() {
  return renderOg({ title: 'Bhimbetka Rock Shelters', eyebrow: 'UNESCO World Heritage Site', image: 'bhimbetka-boar-rock-painting' });
}
