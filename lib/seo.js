import { SITE, absoluteUrl } from './site';
import images from '@/data/images.json';

/**
 * Builds the Next.js metadata object for a page: title, description,
 * canonical URL, Open Graph, Twitter card and keywords.
 */
export function pageMetadata({ title, description, path, keywords = [], image }) {
  const url = absoluteUrl(path);
  const ogImage = image ? `/images/${image}.webp` : undefined;
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url, languages: { 'en-IN': url } },
    openGraph: {
      type: 'website',
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description,
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, alt: images[image]?.alt || title }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

/* ---------- schema.org builders (JSON-LD) ---------- */

export const orgId = `${SITE.url}/#organization`;
export const siteId = `${SITE.url}/#website`;
export const placeId = `${SITE.url}/#ratapani-tiger-reserve`;

export function siteSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': orgId,
      name: SITE.name,
      url: SITE.url,
      logo: absoluteUrl('/logo.png'),
      description: SITE.description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': siteId,
      name: SITE.name,
      url: SITE.url,
      inLanguage: SITE.language,
      publisher: { '@id': orgId },
    },
  ];
}

/** The reserve itself, as a place. Referenced by every page's "about". */
export function reserveSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Park'],
    '@id': placeId,
    name: 'Ratapani Tiger Reserve',
    alternateName: ['Ratapani Wildlife Sanctuary', 'Ratapani Sanctuary'],
    description:
      'Ratapani Tiger Reserve is a 1,271 sq km protected forest in Raisen and Sehore districts of Madhya Pradesh, India, notified as the state’s eighth tiger reserve on 2 December 2024. It was declared a wildlife sanctuary in 1976 and surrounds the Bhimbetka rock shelters, a UNESCO World Heritage Site.',
    url: SITE.url,
    image: absoluteUrl('/images/ratapani-tiger-walking-teak-forest.webp'),
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Obaidullaganj, Raisen',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'IN',
    },
    containedInPlace: { '@type': 'State', name: 'Madhya Pradesh' },
    touristType: ['Wildlife enthusiasts', 'Nature photographers', 'Families', 'Heritage travellers'],
    isAccessibleForFree: false,
    publicAccess: true,
  };
}

export function webPageSchema({ title, description, path, type = 'WebPage', image }) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    headline: title,
    description,
    inLanguage: SITE.language,
    isPartOf: { '@id': siteId },
    about: { '@id': placeId },
    publisher: { '@id': orgId },
    dateModified: SITE.lastReviewed,
    ...(image && { primaryImageOfPage: absoluteUrl(`/images/${image}.webp`) }),
    ...(type === 'Article' && {
      datePublished: SITE.published,
      author: { '@id': orgId },
      image: image ? absoluteUrl(`/images/${image}.webp`) : undefined,
      mainEntityOfPage: absoluteUrl(path),
    }),
  };
}

export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.path && { item: absoluteUrl(c.path) }),
    })),
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function howToSchema({ name, description, steps, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url: absoluteUrl(path),
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  };
}
