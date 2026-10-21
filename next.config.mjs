/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 160, 256, 384],
    minimumCacheTTL: 31536000,
    qualities: [75, 78, 82],
  },
  async redirects() {
    const r = (source, destination) => ({ source, destination, permanent: true });
    return [
      r('/bhimbetika', '/bhimbetka-rock-shelters'),
      r('/bhimbetka', '/bhimbetka-rock-shelters'),
      r('/bhimbetka-caves', '/bhimbetka-rock-shelters'),
      r('/ginnourgarh-fort', '/ginnorgarh-fort'),
      r('/ginnorgarh', '/ginnorgarh-fort'),
      r('/ratapani-tiger-safari', '/book-ratapani-tiger-safari'),
      r('/ratapani-safari-booking', '/book-ratapani-tiger-safari'),
      r('/ratapani-safari', '/book-ratapani-tiger-safari'),
      r('/ratapani-gates', '/ratapani-safari-gates'),
      r('/ratapani-sanctuary', '/ratapani-wildlife-sanctuary'),
      r('/history', '/history-of-ratapani'),
      r('/faq', '/ratapani-faqs'),
      r('/faqs', '/ratapani-faqs'),
      r('/map', '/ratapani-map'),
      r('/how-to-reach', '/how-to-reach-ratapani'),
      r('/best-time-to-visit', '/best-time-to-visit-ratapani'),
    ];
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
