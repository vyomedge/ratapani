import Link from 'next/link';
import { Plane, TrainFront, Car, MapPin, Fuel, WifiOff, CarTaxiFront, Bus, CheckCircle2, ArrowRight, Navigation, Signpost } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import Tabs from '@/components/Tabs';
import { PageHero, KeyTakeaways, Faq, CtaBand, SectionHeading, TableWrap, Sources } from '@/components/ui';
import { PAGES } from '@/lib/site';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const META = {
  title: 'How to Reach Ratapani: By Air, Train & Road from Bhopal',
  description:
    'How to reach Ratapani Tiger Reserve: nearest airport (Bhopal, 41 km), railway stations, NH-46 road route, gate-wise distances, taxis and a Bhopal–Bhimbetka–Bhojpur road trip.',
  path: PAGES.reach.path,
  image: 'ratapani-forest-highway-road-trip',
  keywords: [
    'how to reach Ratapani',
    'Ratapani distance from Bhopal',
    'nearest airport to Ratapani',
    'nearest railway station to Ratapani',
    'Bhopal to Ratapani',
    'Bhopal to Bhimbetka distance',
    'Ratapani by road',
  ],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Plan Your Visit' }, { name: 'How to Reach Ratapani', path: META.path }];

const MODES = [
  {
    icon: Plane,
    tag: 'By air',
    title: 'Raja Bhoj Airport, Bhopal',
    meta: ['41 km to Jhiri gate', '≈ 1 hr drive'],
    text: 'Bhopal’s Raja Bhoj Airport is the nearest airport, with direct flights from major Indian cities. From the airport it is about 41 km to Jhiri gate, 55 km to Bhimbetka gate and 64 km to Delawadi gate.',
    points: ['Pre-paid and app taxis at the terminal', 'Indore and Jabalpur airports are 200–330 km away'],
    tip: 'Morning arrivals can make an evening safari the same day.',
  },
  {
    icon: TrainFront,
    tag: 'By train',
    title: 'Bhopal & Rani Kamlapati stations',
    meta: ['34 km to Jhiri gate', 'Main line stations'],
    text: 'Bhopal Junction and Rani Kamlapati (on the city’s south side) are on India’s main north–south rail line. Narmadapuram station is closest to the Bhimbetka gate (33 km). Smaller stations such as Obaidullaganj lie near Jhiri and Bhimbetka.',
    points: ['Rani Kamlapati is handy for the NH-46 exit', 'Narmadapuram suits travellers from the south'],
    tip: 'Rani Kamlapati station saves time crossing the city.',
  },
  {
    icon: Car,
    tag: 'By road',
    title: 'NH-46 Bhopal–Narmadapuram highway',
    meta: ['≈ 35 km to Obaidullaganj', 'Good highway'],
    text: 'NH-46 runs south from Bhopal past Mandideep to Obaidullaganj, the gateway town for Jhiri gate and Bhimbetka, and on towards Narmadapuram. Delawadi gate lies on the western side of the reserve in Sehore district.',
    points: ['Cars and SUVs reach all gate offices', 'Drive slowly near forest edges at dawn and dusk'],
    tip: 'Fill fuel and download offline maps before leaving the highway.',
  },
];

const ROUTES = [
  {
    label: '1. Jhiri gate',
    sub: '34 km · Raisen',
    title: 'Bhopal to Jhiri gate',
    dist: '≈ 34 km from Bhopal railway station',
    steps: ['Leave Bhopal south on NH-46 towards Mandideep and Obaidullaganj.', 'Near Obaidullaganj follow the signs for the Jhiri safari gate.', 'Report at the gate office with your permit and photo ID.'],
    note: 'Closest gate to Bhopal and to Obaidullaganj town.',
  },
  {
    label: '2. Bhimbetka gate',
    sub: '44 km · Raisen',
    title: 'Bhopal to Bhimbetka gate',
    dist: '≈ 44 km from Bhopal railway station',
    steps: ['Take NH-46 south from Bhopal through Obaidullaganj.', 'About 9 km beyond Obaidullaganj, turn off at the signposted Bhimbetka road.', 'The rock shelters and the Bhimbetka safari gate are on this approach.'],
    note: 'Offline booking at the gate; private vehicles allowed on the permitted route.',
  },
  {
    label: '3. Delawadi gate',
    sub: '52 km · Sehore',
    title: 'Bhopal to Delawadi gate',
    dist: '≈ 52 km from Bhopal railway station · 53 km from Narmadapuram',
    steps: ['Delawadi is on the western side of the reserve in Sehore district.', 'Navigate to “Delawadi Gate, Ratapani” on Google Maps for the current best route.', 'Allow extra time: the last stretch runs through forest and villages.'],
    note: 'Base for the walk to Ginnorgarh Fort.',
  },
];

const FAQS = [
  {
    q: 'What is the nearest airport to Ratapani?',
    a: 'Raja Bhoj Airport in Bhopal is the nearest airport. It is about 41 km from Jhiri gate, 55 km from Bhimbetka gate and 64 km from Delawadi gate.',
  },
  {
    q: 'What is the nearest railway station to Ratapani?',
    a: 'Bhopal’s railway stations (Bhopal Junction and Rani Kamlapati) are the main railheads, about 34 km from Jhiri gate. Narmadapuram station is closest to Bhimbetka gate at about 33 km.',
  },
  {
    q: 'How far is Ratapani from Bhopal?',
    a: 'Ratapani’s gates are about 34 km (Jhiri), 44 km (Bhimbetka) and 52 km (Delawadi) from Bhopal railway station, roughly a 1 to 1.5 hour drive.',
  },
  {
    q: 'How far is Bhimbetka from Bhopal?',
    a: 'Bhimbetka is about 45 km south-east of Bhopal on NH-46, around 9 km beyond Obaidullaganj. The drive takes about an hour.',
  },
  {
    q: 'Can I use Uber or Ola to reach Ratapani?',
    a: 'App cabs can drop you at the gates from Bhopal, but return cabs are hard to find in the forest area. Book a round-trip taxi or keep your driver waiting.',
  },
  {
    q: 'Can I drive my own car to Ratapani?',
    a: 'Yes, you can drive to all gate offices. Inside the forest, private vehicles are allowed only on the Bhimbetka gate route; at Jhiri and Delawadi you switch to a registered safari vehicle.',
  },
];

export default function ReachPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ ...META, type: 'Article' })} />
      <PageHero
        image={META.image}
        eyebrow="Getting there · Air, rail & road"
        title="How to Reach Ratapani"
        intro="Ratapani is one of India’s most accessible tiger reserves, just 34–52 km from Bhopal. Here is how to get there by air, train and road, with gate-by-gate directions and local travel tips."
        crumbs={CRUMBS}
        badges={[
          { icon: Plane, text: 'Bhopal airport 41 km' },
          { icon: TrainFront, text: 'Bhopal stations 34 km' },
          { icon: Car, text: 'NH-46' },
        ]}
      />

      <div className="bg-surface py-16 md:py-20">
        <div className="container-site space-y-24">
          <KeyTakeaways
            eyebrow="Transit dossier"
            title="Reaching Ratapani in brief"
            items={[
              { icon: MapPin, title: 'Bhopal is the gateway', text: 'All three safari gates are 34–52 km from Bhopal railway station.' },
              { icon: Navigation, title: 'NH-46 is the main road', text: 'The Bhopal–Narmadapuram highway passes Obaidullaganj, Jhiri and Bhimbetka.' },
              { icon: Signpost, title: 'Go to your permit’s gate', text: 'Jhiri and Bhimbetka are off NH-46; Delawadi is on the western side in Sehore district.' },
              { icon: WifiOff, title: 'Plan for weak signal', text: 'Download offline maps and fill fuel before heading into the forest.' },
            ]}
          />

          <section aria-labelledby="modes-title">
            <SectionHeading eyebrow="Travel options" title="Reaching Ratapani by Air, Train and Road" id="modes-title" />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {MODES.map((m, i) => (
                <article key={m.title} className="reveal flex flex-col rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 90}ms` }}>
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-primary">
                    <m.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="font-label text-label-sm uppercase text-tertiary">{m.tag}</span>
                  <h3 className="mb-2 mt-1 text-headline-sm text-ink">{m.title}</h3>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {m.meta.map((x) => (
                      <span key={x} className="rounded-full bg-surface-low px-3 py-1 font-label text-label-sm uppercase text-ink">{x}</span>
                    ))}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-ink-soft">{m.text}</p>
                  <ul className="mb-4 space-y-2">
                    {m.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-ink">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden /> {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto rounded-xl bg-amber/10 p-3 text-sm text-ink">
                    <strong className="font-label text-label-sm uppercase text-primary">Tip · </strong>
                    {m.tip}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="routes-title" className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Gate directions"
                title="Directions from Bhopal to Each Safari Gate"
                intro="Your permit names the gate you must report to. Choose it below for directions."
                id="routes-title"
                tone="moss"
              />
              <div className="reveal rounded-card bg-white p-6 shadow-md">
                <Tabs label="routes" tabs={ROUTES.map((r) => ({ label: r.label, sub: r.sub }))}>
                  {ROUTES.map((r) => (
                    <div key={r.title}>
                      <h3 className="text-headline-sm text-ink">{r.title}</h3>
                      <p className="mb-4 font-label text-label-sm uppercase text-outline">{r.dist}</p>
                      <ol className="space-y-3">
                        {r.steps.map((s, i) => (
                          <li key={s} className="flex gap-3">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest font-label text-label-md text-sand">
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="text-ink-soft">{s}</span>
                          </li>
                        ))}
                      </ol>
                      <p className="mt-5 rounded-xl bg-surface-low p-3 text-sm text-ink">{r.note}</p>
                    </div>
                  ))}
                </Tabs>
              </div>
            </div>
            <aside className="reveal lg:col-span-5">
              <div className="overflow-hidden rounded-card bg-forest text-sand shadow-lg">
                <div className="relative aspect-[4/3] bg-surface-high">
                  <Img name="ratapani-vintage-field-map" sizes="(min-width: 1024px) 40vw, 100vw" />
                </div>
                <div className="p-6">
                  <p className="font-label text-label-sm uppercase text-amber">Field cartography</p>
                  <h3 className="mt-1 text-headline-sm text-white">See it on the map</h3>
                  <p className="mt-2 text-sm text-sand/75">Zones, gates, reservoirs and Bhimbetka on one interactive map.</p>
                  <Link href={PAGES.map.path} className="btn-amber mt-5 !min-h-[44px] !text-label-md">
                    Open Ratapani map <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </aside>
          </section>

          <section aria-labelledby="matrix-title">
            <SectionHeading
              eyebrow="Distance matrix"
              title="Distance to Ratapani from Major Cities"
              intro="Approximate road distances and travel times to Ratapani’s nearest gate."
              id="matrix-title"
            />
            <TableWrap
              caption="Approximate distance and travel time to Ratapani from major cities"
              note="Distances from Bhopal, Narmadapuram, Indore and Jabalpur are from the MP Forest Department; others are approximate road distances. Travel times vary with traffic."
            >
              <thead>
                <tr>
                  <th scope="col">From</th>
                  <th scope="col">Distance</th>
                  <th scope="col">Approx. time</th>
                  <th scope="col">Best way</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Bhopal</td><td>34–52 km</td><td>1–1.5 hrs</td><td>Taxi or self-drive on NH-46</td></tr>
                <tr><td>Narmadapuram</td><td>33–75 km</td><td>1–1.5 hrs</td><td>NH-46 north</td></tr>
                <tr><td>Indore</td><td>≈ 210–255 km</td><td>4–5 hrs</td><td>Road via Bhopal, or train to Bhopal</td></tr>
                <tr><td>Jabalpur</td><td>≈ 300–330 km</td><td>5.5–6.5 hrs</td><td>Train to Bhopal or Narmadapuram</td></tr>
                <tr><td>Nagpur</td><td>≈ 320–350 km</td><td>6–7 hrs</td><td>NH-46 via Betul and Narmadapuram</td></tr>
                <tr><td>Delhi</td><td>≈ 780 km to Bhopal</td><td>≈ 1.5 hr flight / 7–8 hr train</td><td>Fly or take a train to Bhopal</td></tr>
                <tr><td>Mumbai</td><td>≈ 780 km to Bhopal</td><td>≈ 1.5 hr flight / overnight train</td><td>Fly to Bhopal</td></tr>
              </tbody>
            </TableWrap>
          </section>

          <section aria-labelledby="local-title">
            <SectionHeading eyebrow="On the ground" title="Local Transport Tips" id="local-title" tone="ochre" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [CarTaxiFront, 'Book a round-trip taxi', 'App cabs can drop you at the gate, but return cabs are scarce. A round-trip taxi from Bhopal is the easiest option.'],
                [Bus, 'Buses & local autos', 'Buses on the Bhopal–Narmadapuram route stop at Obaidullaganj; local autos and jeeps can take you on from there.'],
                [Fuel, 'Fuel up early', 'Fill your tank on NH-46 before turning off towards the forest; pumps are scarce near the gates.'],
                [WifiOff, 'Offline maps', 'Mobile signal drops near the gates. Download offline maps of Bhopal, Raisen and Sehore districts.'],
              ].map(([Icon, t, d], i) => (
                <article key={t} className="reveal rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 80}ms` }}>
                  <Icon className="mb-4 h-7 w-7 text-primary" aria-hidden />
                  <h3 className="mb-2 text-xl text-ink">{t}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{d}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="circuit-title" className="reveal overflow-hidden rounded-[1.75rem] bg-forest bg-contour-light p-8 text-sand md:p-12">
            <span className="eyebrow text-amber">Road-trip idea</span>
            <h2 id="circuit-title" className="mb-4 max-w-3xl text-[2rem] leading-tight text-white md:text-headline-lg">
              The Vindhyan Heritage Loop: Bhopal · Bhimbetka · Ratapani · Bhojpur
            </h2>
            <p className="mb-8 max-w-3xl text-sand/80">
              One day, prehistoric art, a tiger safari and an 11th-century temple, all within roughly 150 km of driving from Bhopal.
            </p>
            <ol className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                ['Early morning', 'Bhopal → Jhiri', 'Drive NH-46 south for the morning safari round.'],
                ['Late morning', 'Bhimbetka', 'Continue to the rock shelters, about 9 km past Obaidullaganj.'],
                ['Afternoon', 'Bhojpur temple', 'Head north to Raja Bhoj’s Bhojeshwar temple on the Betwa.'],
                ['Evening', 'Back to Bhopal', 'Return to the city, about 28 km from Bhojpur.'],
              ].map(([time, place, d]) => (
                <li key={place} className="rounded-xl bg-white/10 p-5">
                  <p className="font-label text-label-sm uppercase text-amber">{time}</p>
                  <p className="font-serif text-xl text-white">{place}</p>
                  <p className="mt-1 text-sm text-sand/70">{d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={PAGES.bhimbetka.path} className="btn-amber">
                Bhimbetka guide <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={PAGES.places.path} className="btn-ghost-light">
                More places to visit
              </Link>
            </div>
          </section>

          <div className="mx-auto max-w-4xl">
            <Faq faqs={FAQS} title="How to Reach Ratapani: FAQs" eyebrow="Travel questions" />
          </div>

          <Sources
            items={[
              { label: 'MP Forest Department e-brochure: Ratapani distances and access', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
              { label: 'MP Tourism: Ratapani Tiger Reserve', url: 'https://mptourism.com/ratapani-tiger-reserve-wilderness-near-bhopal.html' },
              { label: 'Wikipedia: Bhimbetka rock shelters (location)', url: 'https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters' },
            ]}
          />
        </div>
      </div>

      <CtaBand
        eyebrow="Next step"
        title="Ready to Book Your Safari Permit?"
        text="You know the way. Now choose a gate and book your permit on the official portal."
        primary={{ href: PAGES.bookSafari.path, label: 'Book Ratapani safari' }}
        secondary={{ href: PAGES.gates.path, label: 'Compare gates' }}
      />
    </>
  );
}
