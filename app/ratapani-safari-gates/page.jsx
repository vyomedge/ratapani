import { DoorOpen, Navigation, Lock, MapPin, Ticket, Car, Landmark, Compass, Camera, Users, Lightbulb, ExternalLink, AlertTriangle } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import GateMap from '@/components/GateMap';
import { PageHero, KeyTakeaways, Faq, CtaBand, SectionHeading, TableWrap, Sources } from '@/components/ui';
import { PAGES, OFFICIAL_BOOKING_URL } from '@/lib/site';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const META = {
  title: 'Ratapani Safari Gates: Jhiri, Delawadi & Bhimbetka Compared',
  description:
    'Ratapani safari gates compared: Jhiri (34 km from Bhopal), Bhimbetka (44 km) and Delawadi (52 km). Booking type, quotas, fees and which gate to pick.',
  path: PAGES.gates.path,
  image: 'ratapani-safari-gate-entrance',
  keywords: [
    'Ratapani safari gates',
    'Ratapani safari zones',
    'Jhiri gate Ratapani',
    'Delawadi gate Ratapani',
    'Bhimbetka gate Ratapani safari',
    'Ratapani entry gate',
    'which gate is best for Ratapani safari',
  ],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Safari' }, { name: 'Ratapani Safari Gates', path: META.path }];

const GATES = [
  {
    id: 'jhiri-gate',
    image: 'jhiri-gate-ratapani-bamboo-trail',
    zone: 'Raisen district · Online booking',
    code: 'Gate 01',
    title: 'Jhiri Gate',
    hindi: 'झिरी गेट',
    summary:
      'The closest Ratapani gate to Bhopal, near Obaidullaganj just off the Bhopal–Narmadapuram highway (NH-46). Jhiri has the largest online vehicle quota and a long forest track that first opened to tourists in December 2022; the tiger reserve’s inaugural safari was flagged off here in December 2024.',
    specs: [
      [MapPin, 'From Bhopal', '34 km from railway station · 41 km from airport'],
      [Navigation, 'Nearest town', 'Obaidullaganj (Raisen district)'],
      [Ticket, 'Online quota per round', '2 full vehicles + 1 single seat (+ DFO & gate quota)'],
      [Car, 'Vehicles', 'Registered safari vehicles only'],
    ],
    fee: 'Full vehicle ₹4,230 (₹750 entry + ₹3,000 vehicle + ₹480 guide)',
    note: 'Best for quick trips from Bhopal and first-time visitors',
  },
  {
    id: 'delawadi-gate',
    image: 'delawadi-gate-ratapani-teak-trail',
    zone: 'Sehore district · Online booking',
    code: 'Gate 02',
    title: 'Delawadi Gate',
    hindi: 'देलावाड़ी गेट',
    summary:
      'The western entry in Sehore district, about 52 km from Bhopal railway station. Delawadi leads into teak valleys and sandstone ridges, with fewer vehicles and the lowest vehicle fee. It is also the starting point for the walk up to the ruins of Ginnorgarh Fort and old temples nearby.',
    specs: [
      [MapPin, 'From Bhopal', '52 km from railway station · 64 km from airport'],
      [Navigation, 'Location', 'Sehore district, western side of the reserve'],
      [Ticket, 'Online quota per round', '1 full vehicle (+ DFO & gate quota)'],
      [Car, 'Vehicles', 'Registered safari vehicles only'],
    ],
    fee: 'Full vehicle ₹3,830 (₹750 entry + ₹2,600 vehicle + ₹480 guide)',
    note: 'Best for quieter drives and Ginnorgarh Fort',
  },
  {
    id: 'bhimbetka-gate',
    image: 'bhimbetka-rock-shelters-unesco',
    zone: 'Raisen district · Offline booking',
    code: 'Gate 03',
    title: 'Bhimbetka Gate',
    hindi: 'भीमबेटका गेट',
    summary:
      'Beside the UNESCO World Heritage Bhimbetka rock shelters on NH-46. Safaris here are booked only at the gate, and visitors are allowed to use their own private vehicles on the permitted route, making it the easiest way to combine wildlife and prehistoric art in one visit.',
    specs: [
      [MapPin, 'From Bhopal', '44 km from railway station · 55 km from airport'],
      [Navigation, 'Nearest town', 'Obaidullaganj (≈ 9 km)'],
      [Ticket, 'Booking', 'Offline, at the gate only'],
      [Car, 'Vehicles', 'Private vehicles permitted'],
    ],
    fee: 'Fees paid at the gate (not listed online)',
    note: 'Best for families, self-drivers and heritage lovers',
  },
];

const FAQS = [
  {
    q: 'How many safari gates does Ratapani have?',
    a: 'Ratapani Tiger Reserve has three tourist safari gates: Jhiri, Delawadi and Bhimbetka. Jhiri and Delawadi can be booked online on forest.mponline.gov.in or at the gate; Bhimbetka is booked offline at the gate.',
  },
  {
    q: 'Which Ratapani gate is closest to Bhopal?',
    a: 'Jhiri gate is the closest, about 34 km from Bhopal railway station and 41 km from Raja Bhoj Airport. Bhimbetka gate is about 44 km and Delawadi gate about 52 km from Bhopal railway station.',
  },
  {
    q: 'Which gate is best for a Ratapani safari?',
    a: 'Jhiri suits first-timers and short trips from Bhopal, Delawadi suits travellers who want quieter teak valleys and Ginnorgarh Fort, and Bhimbetka suits families and self-drivers who want to combine a safari with the rock shelters. No gate guarantees a tiger sighting.',
  },
  {
    q: 'Can I drive my own car at Ratapani safari gates?',
    a: 'Only at the Bhimbetka gate, where private vehicles are allowed on the permitted route. At Jhiri and Delawadi only vehicles registered with the sanctuary may enter.',
  },
  {
    q: 'Can I change my safari gate after booking?',
    a: 'Plan as if you cannot. Each permit is issued for a specific gate, date and round, and permits are not transferable, so check your gate carefully before you pay.',
  },
  {
    q: 'Which Ratapani gate is nearest to Bhimbetka?',
    a: 'The Bhimbetka gate is next to the Bhimbetka rock shelters. Jhiri gate is also on the same NH-46 corridor near Obaidullaganj, so a Jhiri safari and a Bhimbetka visit fit easily in one day.',
  },
];

export default function GatesPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ ...META, type: 'Article' })} />
      <PageHero
        image={META.image}
        eyebrow="Sanctuary access · Entry gates"
        title="Ratapani Safari Gates"
        intro="Jhiri, Delawadi and Bhimbetka: a field guide to Ratapani’s three entry points, comparing distance from Bhopal, online vs offline booking, vehicle quotas, fees and terrain."
        crumbs={CRUMBS}
        badges={[
          { icon: DoorOpen, text: '3 tourist gates' },
          { icon: Navigation, text: '34–52 km from Bhopal' },
          { icon: Lock, text: 'Small vehicle quotas' },
        ]}
      />

      <div className="bg-surface py-16 md:py-20">
        <div className="container-site space-y-24">
          <KeyTakeaways
            eyebrow="Gate dossier"
            title="Ratapani gates in 30 seconds"
            items={[
              { icon: MapPin, title: 'Jhiri: closest to Bhopal', text: '34 km from Bhopal railway station; the largest online quota; ₹4,230 per full vehicle.' },
              { icon: Compass, title: 'Delawadi: the quiet west', text: '52 km from Bhopal; lowest vehicle fee (₹3,830 per full vehicle); walk to Ginnorgarh Fort.' },
              { icon: Landmark, title: 'Bhimbetka: heritage gate', text: '44 km on NH-46, next to the UNESCO rock shelters; offline booking and private vehicles allowed.' },
              { icon: AlertTriangle, title: 'Permits are gate-specific', text: 'Each permit is for one gate, date and round. Book the right gate; permits are not transferable.' },
            ]}
          />

          <section aria-labelledby="map-title">
            <SectionHeading
              eyebrow="Gate map"
              title="Map of Ratapani Safari Gates"
              intro="Where the three gates sit in relation to Bhopal, NH-46 and the main reservoirs. Tap a gate to see its details."
              id="map-title"
            />
            <div className="reveal">
              <GateMap />
            </div>
          </section>

          <section aria-labelledby="gates-title">
            <SectionHeading
              eyebrow="Gate profiles"
              title="The Three Ratapani Safari Gates"
              intro="Each gate has its own access road, booking rules and character. Read the profiles before you book."
              id="gates-title"
              tone="moss"
            />
            <div className="space-y-10">
              {GATES.map((g, i) => (
                <article key={g.id} id={g.id} className="reveal grid scroll-mt-28 grid-cols-1 overflow-hidden rounded-card bg-white shadow-lg lg:grid-cols-12">
                  <div className={`relative min-h-[300px] bg-forest lg:col-span-5 ${i % 2 ? 'lg:order-2' : ''}`}>
                    <Img name={g.image} sizes="(min-width: 1024px) 42vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-amber px-3 py-1 font-label text-label-sm uppercase text-charcoal">{g.code}</span>
                    <span className="absolute bottom-4 left-4 font-label text-label-sm uppercase text-white">{g.zone}</span>
                  </div>
                  <div className="p-6 md:p-8 lg:col-span-7">
                    <h3 className="text-headline-sm text-ink md:text-headline-md">
                      {g.title} <span lang="hi" className="text-xl text-outline">({g.hindi})</span>
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">{g.summary}</p>
                    <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {g.specs.map(([Icon, k, v]) => (
                        <li key={k} className="flex gap-3">
                          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                          <span>
                            <span className="block font-label text-label-sm uppercase text-outline">{k}</span>
                            <span className="block text-sm font-semibold text-ink">{v}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 rounded-xl bg-surface-low p-3 text-sm text-ink">
                      <strong className="font-label text-label-sm uppercase text-primary">Fee · </strong>
                      {g.fee}
                    </p>
                    <p className="mt-3 font-label text-label-sm uppercase text-secondary">★ {g.note}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${g.title} Ratapani Tiger Reserve`)}`}
                      target="_blank"
                      rel="noopener"
                      className="btn-outline mt-6 !min-h-[44px] !text-label-md"
                    >
                      Get directions <ExternalLink className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="matrix-title">
            <SectionHeading eyebrow="Side by side" title="Ratapani Gate Comparison Table" id="matrix-title" />
            <TableWrap caption="Comparison of Jhiri, Delawadi and Bhimbetka safari gates" note="Distances and quotas as listed by the MP Forest Department. Quotas are per round (morning or evening).">
              <thead>
                <tr>
                  <th scope="col">Gate</th>
                  <th scope="col">District</th>
                  <th scope="col">From Bhopal (rly stn / airport)</th>
                  <th scope="col">Booking</th>
                  <th scope="col">Online quota / round</th>
                  <th scope="col">Full vehicle cost</th>
                  <th scope="col">Private vehicle</th>
                  <th scope="col">Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Jhiri</td><td>Raisen</td><td>34 km / 41 km</td><td>Online + gate</td><td>2 vehicles + 1 seat</td><td>₹4,230</td><td>No</td><td>First-timers, short trips</td></tr>
                <tr><td>Delawadi</td><td>Sehore</td><td>52 km / 64 km</td><td>Online + gate</td><td>1 vehicle</td><td>₹3,830</td><td>No</td><td>Quiet drives, Ginnorgarh</td></tr>
                <tr><td>Bhimbetka</td><td>Raisen</td><td>44 km / 55 km</td><td>Gate only</td><td>Not online</td><td>Paid at gate</td><td>Yes</td><td>Families, heritage, self-drive</td></tr>
              </tbody>
            </TableWrap>
          </section>

          <section aria-labelledby="choose-title">
            <SectionHeading
              eyebrow="Tailored advice"
              title="Which Ratapani Gate Should You Choose?"
              intro="Match the gate to the kind of trip you want."
              id="choose-title"
              tone="ochre"
              align="center"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                [Compass, 'The first-time visitor', 'Book Jhiri gate', 'It is the shortest drive from Bhopal, has the most online slots and sits on the same highway as Bhimbetka.', 'Do a morning Jhiri safari, then visit the Bhimbetka rock shelters before lunch.'],
                [Camera, 'The photographer', 'Book Delawadi (or both)', 'Delawadi’s teak valleys and sandstone ridges give clean backgrounds and fewer vehicles around a sighting.', 'Book a morning and an evening round on different gates to see more of the forest.'],
                [Users, 'Families & self-drivers', 'Use Bhimbetka gate', 'Book at the gate, drive your own vehicle and pair the safari with a short walk through the painted shelters.', 'Arrive early on weekends; offline quotas go on a first-come basis.'],
              ].map(([Icon, who, rec, why, tip], i) => (
                <article key={who} className="reveal flex flex-col rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 90}ms` }}>
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-headline-sm text-ink">{who}</h3>
                  <p className="mt-3 font-label text-label-sm uppercase text-outline">Recommendation</p>
                  <p className="font-serif text-xl text-primary">{rec}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{why}</p>
                  <p className="mt-4 flex gap-2 rounded-xl bg-surface-low p-3 text-sm text-ink">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden /> {tip}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <div className="mx-auto max-w-4xl">
            <Faq faqs={FAQS} title="Ratapani Safari Gates: FAQs" eyebrow="Gate rules" />
          </div>

          <Sources
            items={[
              { label: 'MP Forest Department e-brochure: Ratapani gates, quotas and distances', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
              { label: 'MP Tourism: Ratapani Tiger Reserve', url: 'https://mptourism.com/ratapani-tiger-reserve-wilderness-near-bhopal.html' },
              { label: 'The Hitavada: Ratapani Jungle Safari starts (Nov 2022)', url: 'https://thehitavada.com/Encyc/2022/11/30/Ratapani-Jungle-Safari-starts-on-Dec-6-tourists-can-enjoy-from-December-7.html' },
              { label: 'MP Forest Department booking portal', url: OFFICIAL_BOOKING_URL },
            ]}
          />
        </div>
      </div>

      <CtaBand
        eyebrow="Reserve your entry"
        title="Ready to Book Your Ratapani Safari?"
        text="You know your gate. Now follow our step-by-step guide to book the permit on the official MP Forest portal."
        primary={{ href: PAGES.bookSafari.path, label: 'Book Ratapani tiger safari' }}
        secondary={{ href: PAGES.tigerReserve.path, label: 'About the tiger reserve' }}
      />
    </>
  );
}
