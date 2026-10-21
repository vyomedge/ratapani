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
  bhimbetka: {
    path: '/bhimbetka-rock-shelters',
    title: 'Bhimbetka Rock Shelters',
    blurb: 'UNESCO prehistoric rock art inside the Ratapani forest.',
    live: true,
  },
  ginnorgarh: {
    path: '/ginnorgarh-fort',
    title: 'Ginnorgarh Fort',
    blurb: 'The forgotten Gond hill fort of Rani Kamlapati.',
    live: true,
  },
  bestTime: {
    path: '/best-time-to-visit-ratapani',
    title: 'Best Time & Safari Timings',
    blurb: 'Month-by-month guide, seasons and shift timings.',
    live: true,
  },
  map: {
    path: '/ratapani-map',
    title: 'Ratapani Map & Zones',
    blurb: 'Core, buffer, gates, reservoirs and distances.',
    live: true,
  },
  places: {
    path: '/places-to-visit-in-ratapani',
    title: 'Places to Visit in Ratapani',
    blurb: 'Bhimbetka, Ginnorgarh, dams, temples and itineraries.',
    live: true,
  },
  reach: {
    path: '/how-to-reach-ratapani',
    title: 'How to Reach Ratapani',
    blurb: 'By air, train and road from Bhopal and beyond.',
    live: true,
  },
  wildlife: {
    path: '/ratapani-wildlife',
    title: 'Ratapani Wildlife',
    blurb: 'Tigers, leopards, sloth bears, deer and 249 birds.',
    live: true,
  },
  faqs: {
    path: '/ratapani-faqs',
    title: 'Ratapani FAQs',
    blurb: '40+ answers on safaris, timings, travel and rules.',
    live: true,
  },
};

export const NAV = [
  { label: 'Explore', items: ['history', 'sanctuary', 'tigerReserve', 'wildlife', 'bhimbetka', 'ginnorgarh'] },
  { label: 'Safari', items: ['bookSafari', 'gates', 'bestTime', 'map'] },
  { label: 'Plan Your Visit', items: ['places', 'reach', 'faqs'] },
]
  .map((group) => ({ ...group, items: group.items.map((k) => PAGES[k]).filter((p) => p.live) }))
  .filter((group) => group.items.length > 0);

export const absoluteUrl = (path = '/') => `${SITE.url}${path === '/' ? '' : path}`;

/** Official booking portal of the Madhya Pradesh Forest Department. */
export const OFFICIAL_BOOKING_URL = 'https://forest.mponline.gov.in/';

/** In-depth external travel guides (dofollow) used as further reading. */
export const FURTHER_READING = {
  tigerReserve: 'https://www.madhubanecoretreat.com/blogs/ratapani-tiger-reserve',
  ginnorgarh: 'https://www.madhubanecoretreat.com/blogs/ginnourgarh-fort-forgotten-gond-citadel-ratapani',
  bhimbetka: 'https://www.madhubanecoretreat.com/blogs/bhimbetika-india-s-ancient-rock-art-wonder-the-complete-guide-2026',
};
