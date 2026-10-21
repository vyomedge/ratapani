import { Mountain, PawPrint, ShieldCheck, Hourglass, Landmark, Layers, Building2, Camera, Smartphone, ScanSearch, TrainFront, Home, Wheat, Fence, Check, Star, MapPin } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import { PageHero, KeyTakeaways, Faq, CtaBand, SectionHeading, TableWrap, Sources, RelatedCards, FurtherReading } from '@/components/ui';
import { PAGES, FURTHER_READING } from '@/lib/site';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const META = {
  title: 'Ratapani Tiger Reserve: Area, Tigers, Core & Buffer Zone',
  description:
    'Ratapani Tiger Reserve, MP’s 8th tiger reserve: 1,271 km² area, 763.8 km² core and 507.7 km² buffer, tiger count, corridors and notification date.',
  path: PAGES.tigerReserve.path,
  image: 'ratapani-tiger-reserve-tiger',
  keywords: ['Ratapani Tiger Reserve', 'Ratapani tiger reserve area', 'Ratapani tigers', 'Ratapani core zone', 'Ratapani buffer zone'],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Explore' }, { name: 'Ratapani Tiger Reserve', path: META.path }];

const GLANCE = [
  ['Notified', '2 Dec 2024', 'By the Government of MP'],
  ['Core area', '763.8 km²', 'Critical tiger habitat'],
  ['Buffer area', '507.7 km²', 'Multiple-use zone'],
  ['Total area', '1,271.5 km²', 'Core + buffer'],
  ['Tigers', '56', '2022 tiger census'],
  ['Managed by', 'MP Forest Dept', 'With NTCA oversight'],
];

const COMPARE = [
  { name: 'Ratapani', districts: 'Raisen, Sehore', core: '763.8', dist: '≈ 35–55 km', known: 'Closest tiger reserve to Bhopal; Bhimbetka rock art inside', star: true },
  { name: 'Satpura', districts: 'Narmadapuram', core: '1,339.3', dist: '≈ 140 km', known: 'Walking and boat safaris, leopards, sloth bears, Pachmarhi hills' },
  { name: 'Panna', districts: 'Panna, Chhatarpur', core: '576.1', dist: '≈ 380 km', known: 'Celebrated tiger reintroduction; Ken river gorges' },
  { name: 'Pench', districts: 'Seoni, Chhindwara', core: '411.3', dist: '≈ 360 km', known: 'Teak forests of The Jungle Book country' },
  { name: 'Kanha', districts: 'Mandla, Balaghat', core: '917.4', dist: '≈ 460 km', known: 'Sal forests, meadows and hard-ground barasingha' },
  { name: 'Bandhavgarh', districts: 'Umaria', core: '716.9', dist: '≈ 500 km', known: 'High tiger density and a hilltop fort' },
];

const FAQS = [
  {
    q: 'When did Ratapani become a tiger reserve?',
    a: 'The Madhya Pradesh government notified Ratapani Tiger Reserve on 2 December 2024. The NTCA had given in-principle approval in 2008, so the process took more than 16 years.',
  },
  {
    q: 'What is the area of Ratapani Tiger Reserve?',
    a: 'Ratapani Tiger Reserve covers 1,271.465 km²: a core (critical tiger habitat) of 763.812 km² and a buffer zone of 507.653 km², in Raisen and Sehore districts of Madhya Pradesh.',
  },
  {
    q: 'How many tigers are in Ratapani Tiger Reserve?',
    a: 'The 2022 All India Tiger Estimation recorded 56 tigers in Ratapani. Forest officials estimate more than 70 using indirect evidence such as pugmarks, and some reports put the wider Ratapani landscape at close to 90.',
  },
  {
    q: 'Which number tiger reserve is Ratapani?',
    a: 'Ratapani is Madhya Pradesh’s 8th tiger reserve and India’s 57th.',
  },
  {
    q: 'Is Ratapani Tiger Reserve good for tiger sightings?',
    a: 'Ratapani is a newer safari destination, so sightings are less predictable than in Kanha or Bandhavgarh. Your chances are best from March to June, when animals gather near water, and on early-morning rounds.',
  },
  {
    q: 'Which is the nearest tiger reserve to Bhopal?',
    a: 'Ratapani Tiger Reserve is the nearest. Its Jhiri gate is about 34 km from Bhopal railway station, and tigers from Ratapani regularly use forests on the edge of the city.',
  },
];

export default function TigerReservePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ ...META, type: 'Article' })} />
      <PageHero
        image={META.image}
        eyebrow="Madhya Pradesh’s 8th tiger reserve · India’s 57th"
        title="Ratapani Tiger Reserve"
        intro="A 1,271 km² tiger landscape of teak forest and sandstone hills on the edge of Bhopal, notified on 2 December 2024, where tigers walk the same hills as the painted shelters of Bhimbetka."
        crumbs={CRUMBS}
        badges={[
          { icon: Mountain, text: 'Vindhya hills' },
          { icon: PawPrint, text: '56 tigers (2022 census)' },
          { icon: ShieldCheck, text: 'NTCA tiger reserve' },
        ]}
      />

      {/* At a glance */}
      <section aria-labelledby="glance-title" className="relative z-10 -mt-10">
        <div className="container-site">
          <div className="rounded-card bg-[#E8DFC7] p-6 shadow-lift md:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
              <div>
                <span className="eyebrow text-tertiary">Reserve dossier</span>
                <h2 id="glance-title" className="text-headline-sm text-ink md:text-headline-md">Ratapani Tiger Reserve at a Glance</h2>
              </div>
              <span className="flex items-center gap-2 font-label text-label-sm uppercase text-ink-soft">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden /> Notification of 2 December 2024
              </span>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-ochre/20 md:grid-cols-3 lg:grid-cols-6">
              {GLANCE.map(([k, v, s]) => (
                <div key={k} className="bg-[#E8DFC7] p-4">
                  <dt className="font-label text-label-sm uppercase text-tertiary">{k}</dt>
                  <dd className="mt-1 font-serif text-2xl font-semibold text-ink">{v}</dd>
                  <dd className="text-xs text-ink-soft">{s}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="bg-surface py-16 md:py-20">
        <div className="container-site space-y-24">
          <KeyTakeaways
            eyebrow="Executive brief"
            title="Ratapani Tiger Reserve: key facts"
            items={[
              { icon: Building2, title: 'A tiger reserve beside a capital', text: 'Ratapani borders Bhopal; some of its tigers are known as “city tigers” because they range up to the city edge.' },
              { icon: Hourglass, title: 'A 16-year journey', text: 'NTCA approval came in 2008; the state notified the reserve on 2 December 2024.' },
              { icon: Landmark, title: 'Tigers and world heritage', text: 'The reserve surrounds the UNESCO-listed Bhimbetka rock shelters, a rare mix of wildlife and prehistory.' },
              { icon: Layers, title: 'Core and buffer zoning', text: 'A 763.8 km² core is kept for wildlife, with a 507.7 km² buffer for people, livelihoods and tourism.' },
            ]}
          />

          {/* Why */}
          <section aria-labelledby="why-title" className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="From sanctuary to tiger reserve" title="Why Ratapani Became a Tiger Reserve" id="why-title" />
              <div className="prose-rp reveal text-lg">
                <p>
                  Ratapani had been a <a href={PAGES.sanctuary.path}>wildlife sanctuary</a> since 1976, but its tigers did not stay inside
                  its lines. Over the years tigers became resident across the Ratapani forests and began using the green belts around
                  Bhopal, including the Kerwa and Kolar areas, giving the capital its famous “city tigers”.
                </p>
                <p>
                  Recognising this, the National Tiger Conservation Authority (NTCA) gave in-principle approval for a tiger reserve in
                  2008. Questions about villages, boundaries and the railway line through the forest kept the proposal pending until
                  the Madhya Pradesh government finally notified Ratapani Tiger Reserve on <strong>2 December 2024</strong>.
                </p>
                <p>
                  Tiger reserve status brings a legally defined core and buffer, a mandatory Tiger Conservation Plan, central Project
                  Tiger funding and closer monitoring, all aimed at securing the tigers that live on Bhopal’s doorstep.
                </p>
              </div>
              <div className="reveal mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-surface-low p-5">
                  <PawPrint className="mb-2 h-6 w-6 text-primary" aria-hidden />
                  <p className="font-serif text-3xl font-semibold text-ink">70+</p>
                  <p className="text-sm text-ink-soft">tigers estimated by officials from pugmarks and other signs</p>
                </div>
                <div className="rounded-xl bg-surface-low p-5">
                  <Hourglass className="mb-2 h-6 w-6 text-tertiary" aria-hidden />
                  <p className="font-serif text-3xl font-semibold text-ink">16 yrs</p>
                  <p className="text-sm text-ink-soft">from NTCA approval (2008) to notification (2024)</p>
                </div>
              </div>
            </div>
            <figure className="reveal relative lg:col-span-5">
              <div className="relative h-[460px] overflow-hidden rounded-card bg-forest shadow-2xl">
                <Img name="tigress-sandstone-ratapani" sizes="(min-width: 1024px) 40vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-5 bottom-5 text-white">
                  <span className="font-label text-label-sm uppercase text-amber">Apex predator</span>
                  <p className="font-serif text-xl">Tigers use the rocky ravines and teak valleys of the Vindhya hills.</p>
                </figcaption>
              </div>
              <div className="absolute -right-2 -top-4 rounded-xl bg-white p-4 shadow-xl sm:-right-4">
                <p className="font-label text-label-sm uppercase text-outline">NTCA tiger reserve</p>
                <p className="font-serif text-lg text-ink">India’s 57th</p>
              </div>
            </figure>
          </section>

          {/* Core vs buffer */}
          <section aria-labelledby="zones-title">
            <SectionHeading
              eyebrow="Zoning explained"
              title="Core vs Buffer Zone of Ratapani Tiger Reserve"
              intro="Every Indian tiger reserve has two parts: an inviolate core for wildlife and a buffer where people and wildlife share the land."
              id="zones-title"
            />
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="reveal flex flex-col items-center rounded-card bg-forest p-8 text-sand lg:col-span-5">
                <svg viewBox="0 0 400 400" className="h-auto w-full max-w-[340px]" role="img" aria-labelledby="zone-svg-title">
                  <title id="zone-svg-title">Ratapani core zone 763.8 square km surrounded by buffer zone 507.7 square km</title>
                  <circle cx="200" cy="200" r="180" fill="#5A7344" opacity="0.35" />
                  <circle cx="200" cy="200" r="180" fill="none" stroke="#E08A1E" strokeDasharray="6 6" strokeWidth="2" />
                  <circle cx="200" cy="200" r="139" fill="#14261E" />
                  <circle cx="200" cy="200" r="139" fill="none" stroke="#F2EADB" strokeOpacity="0.3" strokeWidth="2" />
                  <text x="200" y="188" textAnchor="middle" fill="#FFB86F" fontSize="14" fontFamily="var(--font-label)" letterSpacing="3">CORE ZONE</text>
                  <text x="200" y="224" textAnchor="middle" fill="#F2EADB" fontSize="30" fontFamily="var(--font-serif)">763.8 km²</text>
                  <text x="200" y="40" textAnchor="middle" fill="#F2EADB" fontSize="13" fontFamily="var(--font-label)" letterSpacing="2">BUFFER · 507.7 KM²</text>
                </svg>
                <p className="mt-4 font-label text-label-md uppercase text-amber">60% core · 40% buffer</p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-7">
                {[
                  {
                    tag: 'Core · critical tiger habitat',
                    title: 'Core zone (763.8 km²)',
                    text: 'The heart of the reserve, kept free of commercial use and managed for wildlife first. Tourism here is limited to registered vehicles on fixed routes.',
                    items: ['Only registered safari vehicles on set routes', 'A forest guide in every vehicle', 'Strict daily vehicle quotas per gate'],
                    tone: 'border-forest',
                  },
                  {
                    tag: 'Buffer · co-existence zone',
                    title: 'Buffer zone (507.7 km²)',
                    text: 'A ring around the core where villages, farming and forest livelihoods continue, with an eye on reducing human–wildlife conflict.',
                    items: ['Villages and forest livelihoods continue', 'Eco-development work with local communities', 'Space for dispersing young tigers'],
                    tone: 'border-moss',
                  },
                ].map((z) => (
                  <article key={z.title} className={`reveal rounded-card border-t-4 bg-white p-6 shadow-md ${z.tone}`}>
                    <span className="font-label text-label-sm uppercase text-tertiary">{z.tag}</span>
                    <h3 className="mb-2 mt-1 text-headline-sm text-ink">{z.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-ink-soft">{z.text}</p>
                    <ul className="space-y-2">
                      {z.items.map((it) => (
                        <li key={it} className="flex gap-2 text-sm text-ink">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden /> {it}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Tiger numbers */}
          <section aria-labelledby="numbers-title" className="rounded-[1.75rem] bg-surface-low p-6 md:p-10">
            <SectionHeading
              eyebrow="Tiger population"
              title="How Many Tigers Are in Ratapani?"
              intro="Three figures are commonly quoted. They measure different things, so here is what each one means."
              id="numbers-title"
              tone="ochre"
            />
            <div className="space-y-6">
              {[
                ['56', 'Tigers recorded in Ratapani in the 2022 All India Tiger Estimation (camera-trap based)', 62],
                ['70+', 'Forest Department estimate including indirect evidence such as pugmarks', 78],
                ['≈ 90', 'Reported for the wider Ratapani landscape, including forests around Bhopal', 100],
              ].map(([v, t, w], i) => (
                <div key={v} className="reveal" style={{ '--reveal-delay': `${i * 100}ms` }}>
                  <div className="mb-2 flex items-baseline gap-3">
                    <span className="font-serif text-4xl font-semibold text-ink">{v}</span>
                    <span className="text-sm text-ink-soft">{t}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-surface-highest">
                    <div className="h-full rounded-full bg-gradient-to-r from-ochre to-amber" style={{ width: `${w}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                [Camera, 'Camera traps', 'Paired cameras on trails identify individual tigers by their unique stripe patterns.'],
                [Smartphone, 'M-STrIPES patrolling', 'NTCA’s patrol app helps forest staff log tiger signs, patrol routes and threats.'],
                [ScanSearch, 'All India Tiger Estimation', 'India counts its tigers every four years; the latest published cycle is 2022.'],
              ].map(([Icon, t, d]) => (
                <div key={t} className="reveal flex gap-3 rounded-xl bg-white p-4">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden />
                  <div>
                    <h3 className="font-sans text-base font-bold text-ink">{t}</h3>
                    <p className="text-sm text-ink-soft">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Corridors */}
          <section aria-labelledby="corridor-title" className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Connectivity"
                title="Ratapani Tiger Reserve Wildlife Corridors"
                intro="Tigers need room to move. Ratapani sits at a crossroads of forests in central Madhya Pradesh."
                id="corridor-title"
                tone="moss"
              />
              <ol className="space-y-4">
                {[
                  ['Satpura–Narmada link', 'South', 'Forests across the Narmada valley connect Ratapani towards Satpura Tiger Reserve.'],
                  ['Bhopal’s green belt', 'North-west', 'Kerwa, Kolar and Samardha forests on Bhopal’s edge are used by Ratapani’s “city tigers”.'],
                  ['Singhori & Raisen forests', 'North-east', 'Neighbouring forests, including Singhori Wildlife Sanctuary, extend the habitat across Raisen.'],
                ].map(([t, dir, d], i) => (
                  <li key={t} className="reveal rounded-xl bg-white p-5 shadow-sm">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <h3 className="font-sans text-lg font-bold text-ink">
                        {i + 1}. {t}
                      </h3>
                      <span className="rounded-full bg-secondary-soft px-3 py-1 font-label text-label-sm uppercase text-secondary">{dir}</span>
                    </div>
                    <p className="text-sm text-ink-soft">{d}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="reveal reveal-scale relative min-h-[420px] overflow-hidden rounded-card bg-forest shadow-lg">
              <Img name="ratapani-vintage-field-map" sizes="(min-width: 1024px) 50vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl bg-forest-deep/90 p-4 text-white backdrop-blur-md">
                <p className="flex items-center gap-2 font-label text-label-sm uppercase text-amber">
                  <MapPin className="h-4 w-4" aria-hidden /> 22.918° N, 77.722° E
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Ratapani lies between Bhopal to the north-west and the Narmada valley to the south.
                </p>
              </div>
            </div>
          </section>

          {/* Conservation & challenges */}
          <section aria-labelledby="challenges-title">
            <SectionHeading
              eyebrow="On the ground"
              title="Ratapani Tiger Reserve Conservation Challenges"
              intro="A new tiger reserve beside a growing city faces real challenges. These are the issues managers are working on."
              id="challenges-title"
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [TrainFront, 'Railway line', 'The busy Delhi–Mumbai rail line crosses the forest. Media reports count at least 7 tigers and 17 leopards killed on the tracks since 2015; mitigation structures are planned.'],
                [Home, 'Villages inside', 'About 10 villages lie inside Ratapani. Voluntary relocation is being discussed to free up space for grasslands.'],
                [Wheat, 'Prey base', 'Herbivore density is lower than in older reserves, so grassland and water development is a priority.'],
                [Fence, 'Bhopal boundary', 'A tall fence and patrol road along the boundary near Bhopal aim to reduce tiger movement into the city.'],
              ].map(([Icon, t, d], i) => (
                <article key={t} className="reveal card-lift rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 80}ms` }}>
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mb-2 text-headline-sm text-ink">{t}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{d}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Compare */}
          <section aria-labelledby="mp-title">
            <SectionHeading
              eyebrow="Tiger State of India"
              title="Ratapani vs Kanha, Bandhavgarh & Other MP Tiger Reserves"
              intro="Madhya Pradesh has more tigers than any other state. Here is how Ratapani compares with its best-known reserves."
              id="mp-title"
            />
            <TableWrap
              caption="Comparison of Ratapani with other tiger reserves in Madhya Pradesh"
              note="Core areas are official figures in km²; distances are approximate road distances from Bhopal to the main gates."
            >
              <thead>
                <tr>
                  <th scope="col">Tiger reserve</th>
                  <th scope="col">Districts</th>
                  <th scope="col">Core area (km²)</th>
                  <th scope="col">From Bhopal</th>
                  <th scope="col">Known for</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r) => (
                  <tr key={r.name}>
                    <td className={r.star ? '!bg-primary-fixed/50' : ''}>
                      <span className="flex items-center gap-1">
                        {r.star && <Star className="h-4 w-4 fill-amber text-amber" aria-hidden />} {r.name}
                      </span>
                    </td>
                    <td className={r.star ? '!bg-primary-fixed/50' : ''}>{r.districts}</td>
                    <td className={r.star ? '!bg-primary-fixed/50' : ''}>{r.core}</td>
                    <td className={r.star ? '!bg-primary-fixed/50' : ''}>{r.dist}</td>
                    <td className={r.star ? '!bg-primary-fixed/50' : ''}>{r.known}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrap>
          </section>

          <FurtherReading
            title="Further reading"
            links={[
              { href: FURTHER_READING.tigerReserve, label: 'Ratapani Tiger Reserve: an unexplored destination where wildlife meets history', text: 'A traveller’s guide to Ratapani’s safaris, Ginnorgarh, Saru Maru and Bhimbetka.' },
              { href: FURTHER_READING.ginnorgarh, label: 'Ginnorgarh Fort: the forgotten Gond citadel inside the reserve' },
            ]}
          />

          <div className="mx-auto max-w-4xl">
            <Faq faqs={FAQS} title="Ratapani Tiger Reserve: FAQs" eyebrow="Field inquiry guide" />
          </div>

          <RelatedCards
            cards={[
              { href: PAGES.bookSafari.path, image: 'ratapani-tiger-safari-jeep-tiger-crossing', tag: 'Safari booking', title: 'Book Ratapani Tiger Safari', text: 'Online booking steps, fees, timings and what to carry.' },
              { href: PAGES.gates.path, image: 'jhiri-gate-ratapani-bamboo-trail', tag: 'Safari gates', title: 'Jhiri, Delawadi & Bhimbetka Gates', text: 'Which Ratapani safari gate is right for you.' },
              { href: PAGES.history.path, image: 'tiger-on-sandstone-rock', tag: 'History', title: 'History of Ratapani', text: 'From Stone Age shelters to India’s 57th tiger reserve.' },
            ]}
          />

          <Sources
            items={[
              { label: 'Mongabay India: Teething troubles at India’s latest tiger reserve (Jan 2025)', url: 'https://india.mongabay.com/2025/01/teething-troubles-or-conservation-challenges-at-indias-latest-tiger-reserve/' },
              { label: 'ETV Bharat: MP gets 8th tiger reserve (Dec 2024)', url: 'https://www.etvbharat.com/en/!state/ratapani-tiger-reserve-madhya-pradesh-bhopal-jungle-safari-enn24120302019' },
              { label: 'Wikipedia: Ratapani Tiger Reserve', url: 'https://en.wikipedia.org/wiki/Ratapani_Tiger_Reserve' },
              { label: 'MP Tourism: Ratapani Tiger Reserve', url: 'https://mptourism.com/ratapani-tiger-reserve-wilderness-near-bhopal.html' },
            ]}
          />
        </div>
      </div>

      <CtaBand
        eyebrow="Daily vehicle quotas apply"
        title="Book a Ratapani Tiger Safari"
        text="Morning and evening permits for Jhiri and Delawadi are limited. Book through the official MP Forest portal, and use our guide to get it right the first time."
        primary={{ href: PAGES.bookSafari.path, label: 'Book your tiger safari' }}
        secondary={{ href: PAGES.gates.path, label: 'View safari gates' }}
      />
    </>
  );
}
