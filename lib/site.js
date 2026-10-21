/**
 * Central site settings. Change the domain here once and every canonical URL,
 * sitemap entry, Open Graph tag and schema.org block updates automatically.
 */
export const SITE = {
  name: 'Ratapani Jungle Safari',
  shortName: 'Ratapani Safari',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ratapanijunglesafari.com').replace(/\/$/, ''),
  locale: 'en_IN',
  language: 'en-IN',
  tagline: 'The complete guide to Ratapani Tiger Reserve',
  description:
    'Ratapani Jungle Safari is an independent guide to Ratapani Tiger Reserve near Bhopal, Madhya Pradesh: safari booking, gates, timings, fees, wildlife, history and Bhimbetka.',
  // Update when content is reviewed. Shown on pages and used in schema dateModified.
  lastReviewed: '2026-10-21',
  published: '2026-10-21',
  geo: { lat: 22.918, lng: 77.722 },
};

/**
 * Every page of the site. `live: false` pages are planned but not built yet;
 * they are hidden from navigation and the sitemap until switched to true.
 */
export const PAGES = {
  home: { path: '/', title: 'Home', live: true },
  history: {
    path: '/history-of-ratapani',
    title: 'History of Ratapani',
    blurb: 'From Stone Age shelters to India’s 57th tiger reserve.',
    live: true,
  },
  sanctuary: {
    path: '/ratapani-wildlife-sanctuary',
    title: 'Ratapani Wildlife Sanctuary',
    blurb: 'Teak forests, reservoirs and the landscape protected since 1976.',
    live: true,
  },
  tigerReserve: {
    path: '/ratapani-tiger-reserve',
    title: 'Ratapani Tiger Reserve',
    blurb: 'Core and buffer zones, tiger numbers and conservation.',
    live: true,
  },
  bookSafari: {
    path: '/book-ratapani-tiger-safari',
    title: 'Book Ratapani Tiger Safari',
    blurb: 'Step-by-step online booking, fees and timings.',
    live: true,
  },
  gates: {
    path: '/ratapani-safari-gates',
    title: 'Ratapani Safari Gates',
    blurb: 'Jhiri, Delawadi and Bhimbetka gates compared.',
    live: true,
  },
  // Planned pages (set live: true once the page is built)
  wildlife: { path: '/ratapani-wildlife', title: 'Ratapani Wildlife', live: false },
  bhimbetka: { path: '/bhimbetka-rock-shelters', title: 'Bhimbetka Rock Shelters', live: false },
  bestTime: { path: '/best-time-to-visit-ratapani', title: 'Best Time & Safari Timings', live: false },
  map: { path: '/ratapani-map', title: 'Ratapani Map & Zones', live: false },
  places: { path: '/places-to-visit-in-ratapani', title: 'Places to Visit in Ratapani', live: false },
  reach: { path: '/how-to-reach-ratapani', title: 'How to Reach Ratapani', live: false },
  faqs: { path: '/ratapani-faqs', title: 'Ratapani FAQs', live: false },
};

export const NAV = [
  { label: 'Explore', items: ['history', 'sanctuary', 'tigerReserve', 'wildlife', 'bhimbetka'] },
  { label: 'Safari', items: ['bookSafari', 'gates', 'bestTime', 'map'] },
  { label: 'Plan Your Visit', items: ['places', 'reach', 'faqs'] },
]
  .map((group) => ({ ...group, items: group.items.map((k) => PAGES[k]).filter((p) => p.live) }))
  .filter((group) => group.items.length > 0);

export const absoluteUrl = (path = '/') => `${SITE.url}${path === '/' ? '' : path}`;

/** Official booking portal of the Madhya Pradesh Forest Department. */
export const OFFICIAL_BOOKING_URL = 'https://forest.mponline.gov.in/';
