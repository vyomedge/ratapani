import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { siteSchema, reserveSchema } from '@/lib/seo';

const serif = localFont({
  src: './fonts/newsreader-latin-wght-normal.woff2',
  variable: '--font-serif',
  weight: '200 800',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: 'Times New Roman',
});
const sans = localFont({
  src: './fonts/manrope-latin-wght-normal.woff2',
  variable: '--font-sans',
  weight: '200 800',
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
});
const label = localFont({
  src: './fonts/space-grotesk-latin-wght-normal.woff2',
  variable: '--font-label',
  weight: '300 700',
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Ratapani Jungle Safari | Ratapani Tiger Reserve Guide',
    template: '%s | Ratapani Jungle Safari',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'travel',
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  other: {
    'geo.region': 'IN-MP',
    'geo.placename': 'Ratapani Tiger Reserve, Raisen, Madhya Pradesh',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
  // After verifying the site in Google Search Console / Bing Webmaster Tools,
  // paste the verification codes here:
  // verification: { google: 'xxxx', other: { 'msvalidate.01': 'xxxx' } },
};

export const viewport = {
  themeColor: '#1F3A2E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable} ${label.variable}`}>
      <body>
        <a href="#main" className="sr-only z-[60] rounded-full bg-amber px-5 py-3 font-label text-charcoal focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <JsonLd data={[...siteSchema(), reserveSchema()]} />
      </body>
    </html>
  );
}
