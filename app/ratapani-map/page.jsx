import Link from 'next/link';
import { Layers, Landmark, Waves, Lock, MapPin, Ruler, Compass, ArrowRight } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import AtlasMap from '@/components/AtlasMap';
import { Breadcrumbs, KeyTakeaways, Faq, CtaBand, SectionHeading, TableWrap, Sources } from '@/components/ui';
import { PAGES, SITE } from '@/lib/site';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const META = {
  title: 'Ratapani Map: Core & Buffer Zones, Gates and Distances',
  description:
    'Interactive Ratapani Tiger Reserve map: 763.8 km² core, 507.7 km² buffer, Jhiri, Delawadi and Bhimbetka gates, reservoirs, Bhimbetka and distances from Bhopal.',
  path: PAGES.map.path,
  image: 'ratapani-parchment-map',
  keywords: [
    'Ratapani map',
    'Ratapani tiger reserve map',
    'Ratapani zones',
    'Ratapani core zone buffer zone',
    'Ratapani location',
    'where is Ratapani',
    'Ratapani distance from Bhopal',
  ],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Safari' }, { name: 'Ratapani Map & Zones', path: META.path }];

const SECTORS = [
  {
    image: 'jhiri-gate-ratapani-bamboo-trail',
    code: 'Gate 01 · Raisen',
    title: 'Jhiri Safari Zone',
    tag: 'Online booking',
    facts: [['From Bhopal', '34 km'], ['Online quota', '2 vehicles + 1 seat'], ['Vehicle fee', '₹3,000']],
    text: 'The closest safari zone to Bhopal, entered near Obaidullaganj off NH-46. Its forest track opened to tourists in December 2022 and runs through teak and bamboo country.',
    href: `${PAGES.gates.path}#jhiri-gate`,
  },
  {
    image: 'delawadi-gate-ratapani-teak-trail',
    code: 'Gate 02 · Sehore',
    title: 'Delawadi Safari Zone',
    tag: 'Online booking',
    facts: [['From Bhopal', '52 km'], ['Online quota', '1 vehicle'], ['Vehicle fee', '₹2,600']],
    text: 'The western zone of teak valleys and sandstone ridges, with fewer vehicles. Ginnorgarh Fort and old temple remains lie in this part of the reserve.',
    href: `${PAGES.gates.path}#delawadi-gate`,
  },
  {
    image: 'bhimbetka-rock-shelters-unesco',
    code: 'Gate 03 · Raisen',
    title: 'Bhimbetka Safari Zone',
    tag: 'Offline booking',
    facts: [['From Bhopal', '44 km'], ['Booking', 'At the gate'], ['Own vehicle', 'Allowed']],
    text: 'Next to the UNESCO rock shelters on NH-46. Booked only at the gate, and the only zone where visitors may use private vehicles.',
    href: `${PAGES.gates.path}#bhimbetka-gate`,
  },
];

const FAQS = [
  {
    q: 'Where is Ratapani Tiger Reserve located?',
    a: 'Ratapani Tiger Reserve is in Raisen and Sehore districts of Madhya Pradesh, on the southern edge of the Vindhya range just south-east of Bhopal. Its centre is at about 22.918° N, 77.722° E.',
  },
  {
    q: 'What are the core and buffer areas of Ratapani?',
    a: 'Ratapani Tiger Reserve has a core (critical tiger habitat) of 763.812 km² and a buffer zone of 507.653 km², for a total of 1,271.465 km².',
  },
  {
    q: 'How many safari zones does Ratapani have?',
    a: 'Tourists enter Ratapani through three safari gates: Jhiri and Delawadi (online and gate booking, registered vehicles only) and Bhimbetka (offline booking, private vehicles allowed).',
  },
  {
    q: 'Can I switch between safari zones during a safari?',
    a: 'No. A permit is issued for one gate, date and round, so you stay within the route allotted to your gate.',
  },
  {
    q: 'How far is Ratapani from Bhopal?',
    a: 'Jhiri gate is about 34 km, Bhimbetka gate about 44 km and Delawadi gate about 52 km from Bhopal railway station. From Raja Bhoj Airport the distances are about 41, 55 and 64 km.',
  },
];

export default function MapPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ ...META, type: 'WebPage' }),
          {
            '@context': 'https://schema.org',
            '@type': 'Map',
            name: 'Map of Ratapani Tiger Reserve',
            url: `${SITE.url}${META.path}`,
            about: { '@id': `${SITE.url}/#ratapani-tiger-reserve` },
            mapType: 'https://schema.org/VenueMap',
          },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest bg-contour-light pb-16 pt-32 text-sand lg:pb-20">
        <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Breadcrumbs crumbs={CRUMBS} light />
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
              <Compass className="h-4 w-4 text-amber" aria-hidden />
              <span className="font-label text-label-md uppercase text-primary-fixed">Field atlas · MP Forest Department data</span>
            </p>
            <h1 className="text-[2.6rem] leading-[1.05] tracking-tight text-white sm:text-[3.25rem] lg:text-display-lg">Ratapani Map &amp; Zones</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand/85">
              Where Ratapani is, how its 1,271.5 km² divide into core and buffer, where the three safari gates sit, and how far everything is from
              Bhopal.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {[
                ['Core', '763.8 km²'],
                ['Buffer', '507.7 km²'],
                ['Centre', '22.92°N 77.72°E'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-white/10 p-3">
                  <dt className="font-label text-label-sm uppercase text-amber">{k}</dt>
                  <dd className="font-serif text-lg text-white sm:text-xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-6">
            <figure className="rounded-card bg-sand p-2 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-high">
                <Img name="ratapani-parchment-map" priority sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <figcaption className="flex items-center gap-2 px-2 py-2 font-label text-label-sm uppercase text-ink-soft">
                <Ruler className="h-4 w-4 text-tertiary" aria-hidden /> Illustrative map · use the interactive map below for details
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="bg-surface py-16 md:py-20">
        <div className="container-site space-y-24">
          <KeyTakeaways
            eyebrow="Map highlights"
            title="Ratapani geography at a glance"
            items={[
              { icon: Layers, title: '60% core, 40% buffer', text: 'A 763.8 km² core for wildlife, ringed by a 507.7 km² buffer where villages and livelihoods continue.' },
              { icon: Landmark, title: 'Bhimbetka inside the forest', text: 'The UNESCO rock shelters sit within Ratapani, about 45 km south-east of Bhopal on NH-46.' },
              { icon: Waves, title: 'Water backbone', text: 'Ratapani Dam and Barna Reservoir are the major waterbodies; Kolar Dam lies to the west.' },
              { icon: Lock, title: 'Gate-specific permits', text: 'Each safari permit is valid for one gate and route; zones are not interchangeable.' },
            ]}
          />

          <section aria-labelledby="atlas-heading">
            <SectionHeading
              eyebrow="Interactive map"
              title="Explore the Ratapani Tiger Reserve Map"
              intro="Switch layers on and off and tap any zone, gate, reservoir or landmark for details."
              id="atlas-heading"
            />
            <div className="reveal">
              <AtlasMap />
            </div>
          </section>

          <section aria-labelledby="zones-heading">
            <SectionHeading
              eyebrow="Safari zones"
              title="Ratapani Safari Zones & Gate Sectors"
              intro="Tourism takes place through three gates, each leading into its own part of the forest."
              id="zones-heading"
              tone="moss"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {SECTORS.map((s, i) => (
                <article key={s.title} className="reveal flex flex-col overflow-hidden rounded-card bg-white shadow-md" style={{ '--reveal-delay': `${i * 90}ms` }}>
                  <div className="relative h-56 bg-forest">
                    <Img name={s.image} sizes="(min-width: 768px) 33vw, 100vw" />
                    <span className="absolute left-3 top-3 rounded-full bg-amber px-3 py-1 font-label text-label-sm uppercase text-charcoal">{s.code}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h3 className="text-headline-sm text-ink">{s.title}</h3>
                      <span className="shrink-0 rounded-full bg-secondary-soft px-3 py-1 font-label text-label-sm uppercase text-secondary">{s.tag}</span>
                    </div>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                    <dl className="space-y-2 border-t border-forest/10 pt-4">
                      {s.facts.map(([k, v]) => (
                        <div key={k} className="flex justify-between text-sm">
                          <dt className="text-ink-soft">{k}</dt>
                          <dd className="font-semibold text-ink">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <Link href={s.href} className="mt-5 inline-flex items-center gap-1 font-label text-label-md uppercase text-primary">
                      Gate details <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="dist-heading">
            <SectionHeading
              eyebrow="Distances"
              title="Distance to Ratapani Gates from Bhopal & Nearby Hubs"
              intro="Official distances published by the Madhya Pradesh Forest Department."
              id="dist-heading"
            />
            <TableWrap caption="Distance in km from transport hubs to Ratapani safari gates" note="Source: MP Forest Department e-brochure. Road distances in km.">
              <thead>
                <tr>
                  <th scope="col">From</th>
                  <th scope="col">Jhiri gate</th>
                  <th scope="col">Bhimbetka gate</th>
                  <th scope="col">Delawadi gate</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Bhopal railway station</td><td>34</td><td>44</td><td>52</td></tr>
                <tr><td>Raja Bhoj Airport, Bhopal</td><td>41</td><td>55</td><td>64</td></tr>
                <tr><td>Narmadapuram railway station</td><td>75</td><td>33</td><td>53</td></tr>
                <tr><td>Indore airport</td><td>211</td><td>243</td><td>253</td></tr>
                <tr><td>Jabalpur airport</td><td>330</td><td>298</td><td>310</td></tr>
              </tbody>
            </TableWrap>
            <p className="reveal mt-4 flex items-start gap-2 text-sm text-ink-soft">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              For routes, trains and flights, see{' '}
              <Link href={PAGES.reach.path} className="font-semibold text-primary underline">
                how to reach Ratapani
              </Link>
              .
            </p>
          </section>

          <div className="mx-auto max-w-4xl">
            <Faq faqs={FAQS} title="Ratapani Map & Location: FAQs" eyebrow="Navigation" />
          </div>

          <Sources
            items={[
              { label: 'MP Forest Department e-brochure: Ratapani gates and distances', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
              { label: 'Wikipedia: Ratapani Tiger Reserve (area, coordinates)', url: 'https://en.wikipedia.org/wiki/Ratapani_Tiger_Reserve' },
            ]}
          />
        </div>
      </div>

      <CtaBand
        eyebrow="Plan by sector & season"
        title="Know the Map, Now Plan the Safari"
        text="Choose your gate, then your season. Both decide what you will see."
        primary={{ href: PAGES.gates.path, label: 'Explore safari gates' }}
        secondary={{ href: PAGES.bestTime.path, label: 'Best time & timings' }}
      />
    </>
  );
}
