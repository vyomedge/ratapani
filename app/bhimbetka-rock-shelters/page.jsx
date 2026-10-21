import Link from 'next/link';
import { Landmark, MapPin, Clock, Palette, Footprints, Mountain, Users, Music, PawPrint, Swords, Camera, Ban, Sun, Award, ArrowRight } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import { PageHero, KeyTakeaways, Faq, RelatedCards, CtaBand, Toc, Sources, SectionHeading, FurtherReading, TableWrap } from '@/components/ui';
import { PAGES, FURTHER_READING, absoluteUrl } from '@/lib/site';
import { pageMetadata, webPageSchema, placeId } from '@/lib/seo';

const META = {
  title: 'Bhimbetka Rock Shelters: History, Paintings, Timings & Guide',
  description:
    'Bhimbetka rock shelters, UNESCO site inside Ratapani near Bhopal: 750+ shelters, 10,000+ year-old paintings, Auditorium Cave, Zoo Rock, timings, entry and how to reach.',
  path: PAGES.bhimbetka.path,
  image: 'bhimbetka-rock-paintings-red-ochre',
  keywords: [
    'Bhimbetka rock shelters',
    'Bhimbetka caves',
    'Bhimbetka paintings',
    'Bhimbetka UNESCO',
    'Bhimbetka timings',
    'Bhimbetka entry fee',
    'Bhimbetka distance from Bhopal',
    'Bhimbetika',
  ],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Explore' }, { name: 'Bhimbetka Rock Shelters', path: META.path }];

const TOC = [
  { id: 'key-takeaways', label: 'Key takeaways' },
  { id: 'about', label: 'What is Bhimbetka?' },
  { id: 'history', label: 'History & discovery' },
  { id: 'paintings', label: 'The paintings' },
  { id: 'highlights', label: 'What to see' },
  { id: 'visit', label: 'Timings & visiting' },
  { id: 'faqs', label: 'Bhimbetka FAQs' },
];

const PERIODS = [
  ['I', 'Upper Palaeolithic', 'Linear, often green, figures of large animals such as bison, tigers and rhinoceros.'],
  ['II', 'Mesolithic', 'The richest phase: small stylised humans hunting, dancing and gathering, with many animals.'],
  ['III', 'Chalcolithic', 'Scenes suggesting contact with farming communities of the Malwa plains.'],
  ['IV – V', 'Early historic', 'Riders, warriors and religious symbols in red, white and yellow.'],
  ['VI – VII', 'Medieval', 'Geometric, more schematic designs, showing artistic decline.'],
];

const FAQS = [
  {
    q: 'Where are the Bhimbetka rock shelters?',
    a: 'Bhimbetka is in Raisen district, Madhya Pradesh, about 45 km south-east of Bhopal and 9 km from Obaidullaganj on NH-46. The shelters lie within the Ratapani Wildlife Sanctuary, on the southern edge of the Vindhya range.',
  },
  {
    q: 'How old are the Bhimbetka paintings?',
    a: 'The earliest Bhimbetka paintings are dated to at least 10,000 years ago (Mesolithic), and some researchers suggest older dates. The shelters were inhabited far earlier, more than 100,000 years ago, and painting continued into the medieval period.',
  },
  {
    q: 'When did Bhimbetka become a UNESCO World Heritage Site?',
    a: 'The Rock Shelters of Bhimbetka were inscribed as a UNESCO World Heritage Site in 2003.',
  },
  {
    q: 'What are the Bhimbetka timings and entry fee?',
    a: 'Bhimbetka is managed by the Archaeological Survey of India and is open every day from about sunrise to sunset (roughly 7 am to 6 pm). Entry fees are modest for Indian visitors and higher for foreign nationals, with separate charges for vehicles; check the current rates at the ticket counter.',
  },
  {
    q: 'Who discovered Bhimbetka?',
    a: 'The archaeologist V. S. Wakankar recognised the prehistoric importance of Bhimbetka in 1957. The site had been mentioned earlier, in 1888, as a Buddhist site by W. Kincaid.',
  },
  {
    q: 'How much time do you need at Bhimbetka?',
    a: 'Plan 1.5 to 3 hours to walk the visitor trail and see the main painted shelters at a relaxed pace.',
  },
  {
    q: 'What does the name Bhimbetka mean?',
    a: 'Bhimbetka is linked to Bhima of the Mahabharata and “baithaka”, a seat or sitting place. Local tradition says Bhima rested here during the Pandavas’ exile.',
  },
];

export default function BhimbetkaPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ ...META, type: 'Article' }),
          {
            '@context': 'https://schema.org',
            '@type': ['TouristAttraction', 'LandmarksOrHistoricalBuildings'],
            name: 'Rock Shelters of Bhimbetka',
            alternateName: ['Bhimbetka Caves', 'Bhimbetka Rock Shelters', 'Bhimbetika'],
            description:
              'UNESCO World Heritage Site (2003) of more than 750 prehistoric rock shelters with paintings, in Raisen district, Madhya Pradesh, within the Ratapani forest.',
            url: absoluteUrl(META.path),
            image: absoluteUrl(`/images/${META.image}.webp`),
            geo: { '@type': 'GeoCoordinates', latitude: 22.9386, longitude: 77.6125 },
            address: { '@type': 'PostalAddress', addressLocality: 'Raisen district', addressRegion: 'Madhya Pradesh', addressCountry: 'IN' },
            containedInPlace: { '@id': placeId },
            sameAs: ['https://whc.unesco.org/en/list/925/', 'https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters'],
            publicAccess: true,
            isAccessibleForFree: false,
          },
        ]}
      />
      <PageHero
        image={META.image}
        eyebrow="UNESCO World Heritage Site · 2003"
        title="Bhimbetka Rock Shelters"
        intro="India’s most famous prehistoric rock art, inside the Ratapani forest: more than 750 sandstone shelters where people lived for over 100,000 years and painted hunters, dancers and animals on the walls."
        crumbs={CRUMBS}
        badges={[
          { icon: MapPin, text: '≈ 45 km from Bhopal' },
          { icon: Landmark, text: '750+ shelters' },
          { icon: Clock, text: 'Open daily' },
        ]}
      />

      {/* Quick facts */}
      <section aria-label="Quick facts" className="relative z-10 -mt-10">
        <div className="container-site">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card bg-ochre/20 shadow-lift md:grid-cols-5">
            {[
              ['UNESCO listed', '2003', 'World Heritage Site'],
              ['Rock shelters', '750+', '≈ 400 with paintings'],
              ['Oldest paintings', '10,000+ yrs', 'Mesolithic onwards'],
              ['From Bhopal', '≈ 45 km', '9 km from Obaidullaganj'],
              ['Managed by', 'ASI', 'Open sunrise–sunset'],
            ].map(([k, v, s], i) => (
              <div key={k} className={`bg-[#E8DFC7] p-5 ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                <dt className="font-label text-label-sm uppercase text-tertiary">{k}</dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-ink">{v}</dd>
                <dd className="text-xs text-ink-soft">{s}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="bg-surface py-14 lg:py-20">
        <div className="container-site grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:self-stretch">
            <Toc
              items={TOC}
              title="Bhimbetka guide"
              note="Bhimbetka sits inside Ratapani Tiger Reserve, so you can see Stone Age art and wild tigers on the same day."
              cta={{ href: PAGES.gates.path + '#bhimbetka-gate', label: 'Bhimbetka safari gate' }}
            />
          </div>

          <div className="flex flex-col gap-20 lg:col-span-8">
            <div id="key-takeaways" className="scroll-mt-28">
              <KeyTakeaways
                title="Bhimbetka in 30 seconds"
                items={[
                  { icon: Award, title: 'UNESCO World Heritage', text: 'Inscribed in 2003 as the Rock Shelters of Bhimbetka, one of India’s oldest records of human life.' },
                  { icon: Mountain, title: 'Seven hills, 750+ shelters', text: 'Spread over about 10 km of the Vindhya hills; the Bhimbetka group alone has 243 shelters.' },
                  { icon: Palette, title: 'Paintings 10,000+ years old', text: 'Hunters, dancers and animals in red, white, yellow and green, from the Mesolithic to the medieval era.' },
                  { icon: MapPin, title: 'Inside Ratapani', text: '45 km from Bhopal on NH-46, right next to the Bhimbetka safari gate of the tiger reserve.' },
                ]}
              />
            </div>

            <section id="about" className="scroll-mt-28 grid grid-cols-1 gap-8 md:grid-cols-2" aria-labelledby="about-title">
              <div>
                <SectionHeading eyebrow="Overview" title="What Is Bhimbetka?" id="about-title" />
                <div className="prose-rp reveal">
                  <p>
                    The <strong>Bhimbetka rock shelters</strong> are a group of natural sandstone overhangs on the southern edge of the Vindhya range in
                    Raisen district, Madhya Pradesh. Across seven hills (Vinayaka, Bhonrawali, Bhimbetka, Lakha Juar east and west, Jhondra and Muni
                    Babaki Pahari) archaeologists have identified more than 750 shelters, around 400 of them painted.
                  </p>
                  <p>
                    Together they form one of the longest records of human life anywhere: continuous settlement from the Stone Age to around the 2nd
                    century BCE, and paintings that span thousands of years. The site lies within the{' '}
                    <Link href={PAGES.sanctuary.path}>Ratapani Wildlife Sanctuary</Link>, now part of{' '}
                    <Link href={PAGES.tigerReserve.path}>Ratapani Tiger Reserve</Link>.
                  </p>
                  <p>
                    The name links to <em>Bhima</em> of the Mahabharata and <em>baithaka</em>, a seat: local tradition says Bhima rested here
                    during the Pandavas’ exile.
                  </p>
                </div>
              </div>
              <figure className="reveal overflow-hidden rounded-card bg-surface-low shadow-sm">
                <div className="relative h-80 bg-forest md:h-full md:min-h-[420px]">
                  <Img name="bhimbetka-rock-shelters-unesco" sizes="(min-width: 768px) 35vw, 100vw" />
                </div>
              </figure>
            </section>

            <section id="history" className="scroll-mt-28" aria-labelledby="hist-title">
              <SectionHeading eyebrow="Deep time" tone="ochre" title="History & Discovery of Bhimbetka" id="hist-title" />
              <ol className="relative space-y-8 pl-8 sm:pl-12">
                <span className="absolute bottom-3 left-3 top-3 w-0.5 bg-surface-highest sm:left-4" aria-hidden />
                {[
                  ['100,000+ years ago', 'First inhabitants', 'Stone tools of the Acheulean period show that early humans used the shelters more than 100,000 years ago.'],
                  ['10,000+ years ago', 'The painters', 'Mesolithic hunter-gatherers painted the richest scenes: hunts, dances, animals and daily life.'],
                  ['to 2nd century BCE', 'Continuous settlement', 'The Archaeological Survey of India records human settlement continuing into the historic period.'],
                  ['1888', 'First mention', 'W. Kincaid, a British official, mentioned Bhimbetka in a scholarly paper, describing it as a Buddhist site.'],
                  ['1957', 'Rediscovery', 'Archaeologist V. S. Wakankar recognised the shelters’ prehistoric significance; excavations followed in the 1970s.'],
                  ['2003', 'World Heritage', 'UNESCO inscribed the Rock Shelters of Bhimbetka on the World Heritage List.'],
                ].map(([date, title, text]) => (
                  <li key={title} className="reveal relative">
                    <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-surface shadow-sm sm:-left-12" aria-hidden>
                      <span className="h-3.5 w-3.5 rounded-full bg-ochre" />
                    </span>
                    <span className="rounded-full bg-tertiary-fixed/60 px-3 py-1 font-label text-label-md uppercase text-tertiary">{date}</span>
                    <h3 className="mb-1 mt-3 text-xl text-ink">{title}</h3>
                    <p className="leading-relaxed text-ink-soft">{text}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="paintings" className="scroll-mt-28" aria-labelledby="paint-title">
              <SectionHeading
                eyebrow="Rock art"
                title="Bhimbetka Paintings: What They Show"
                intro="Painted with natural pigments, often in red and white, many survive because they sit deep in niches and on inner walls."
                id="paint-title"
                tone="moss"
              />
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  [PawPrint, 'Animals', 'Bison, deer, antelope, boar, rhinoceros, elephants, tigers and other big cats, sloth bears and birds.'],
                  [Swords, 'Hunting', 'Hunters with bows and arrows, barbed spears and sticks, often chasing or trapping large animals.'],
                  [Music, 'Dance & music', 'Groups dancing in lines and circles, with drums and other instruments.'],
                  [Users, 'Daily life', 'Mothers and children, food gathering, burials and, later, riders, warriors and battles.'],
                ].map(([Icon, t, d], i) => (
                  <div key={t} className="reveal flex gap-4 rounded-card bg-white p-5 shadow-sm" style={{ '--reveal-delay': `${i * 70}ms` }}>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tertiary-fixed text-tertiary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="mb-1 text-xl text-ink">{t}</h3>
                      <p className="text-sm leading-relaxed text-ink-soft">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="reveal relative h-56 overflow-hidden rounded-card bg-forest sm:h-72">
                  <Img name="bhimbetka-rock-art-closeup" sizes="(min-width: 1024px) 30vw, 50vw" />
                </div>
                <div className="reveal relative h-56 overflow-hidden rounded-card bg-forest sm:h-72" style={{ '--reveal-delay': '100ms' }}>
                  <Img name="bhimbetka-rock-paintings-red-ochre" sizes="(min-width: 1024px) 30vw, 50vw" />
                </div>
              </div>
              <TableWrap caption="Periods of Bhimbetka rock paintings" note="Periods as described by archaeologists studying Bhimbetka; dates for each phase are debated.">
                <thead>
                  <tr>
                    <th scope="col">Period</th>
                    <th scope="col">Era</th>
                    <th scope="col">Typical subjects &amp; style</th>
                  </tr>
                </thead>
                <tbody>
                  {PERIODS.map(([p, e, s]) => (
                    <tr key={p}>
                      <td>{p}</td>
                      <td>{e}</td>
                      <td>{s}</td>
                    </tr>
                  ))}
                </tbody>
              </TableWrap>
            </section>

            <section id="highlights" className="scroll-mt-28" aria-labelledby="hl-title">
              <SectionHeading eyebrow="Must-see" title="Highlights of Bhimbetka" id="hl-title" />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  ['bhimbetka-rock-shelter-interior', 'Auditorium Cave', 'The largest shelter, a cathedral-like space ringed by quartzite towers, with a great boulder (“Chief’s Rock”) at its entrance marked with ancient cupules.'],
                  ['bhimbetka-rock-paintings-hunting-scene', 'Zoo Rock', 'A rock face crowded with painted animals, including elephants, swamp deer, bison and deer, from several periods.'],
                  ['bhimbetka-sandstone-towers-sunset', 'Rock formations', 'Wind- and water-carved sandstone towers and overhangs that make the walk as striking as the art.'],
                ].map(([img, t, d], i) => (
                  <article key={t} className="reveal overflow-hidden rounded-card bg-white shadow-md" style={{ '--reveal-delay': `${i * 90}ms` }}>
                    <div className="relative h-52 bg-forest">
                      <Img name={img} sizes="(min-width: 768px) 33vw, 100vw" />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-headline-sm text-ink">{t}</h3>
                      <p className="text-sm leading-relaxed text-ink-soft">{d}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="visit" className="scroll-mt-28" aria-labelledby="visit-title">
              <SectionHeading eyebrow="Plan your visit" title="Bhimbetka Timings, Entry & Visitor Tips" id="visit-title" tone="ochre" />
              <TableWrap caption="Bhimbetka visitor information" note="Fees and timings are set by the Archaeological Survey of India and can change; confirm at the ticket counter.">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Timings</td><td>Open every day, about sunrise to sunset (≈ 7 am – 6 pm)</td></tr>
                  <tr><td>Entry</td><td>Modest fee for Indian visitors; higher for foreign nationals; vehicle charges extra</td></tr>
                  <tr><td>Time needed</td><td>1.5 – 3 hours</td></tr>
                  <tr><td>Best season</td><td>October to March; early mornings in summer</td></tr>
                  <tr><td>Open in monsoon?</td><td>Yes, open all year</td></tr>
                  <tr><td>Location</td><td>≈ 45 km from Bhopal; 9 km from Obaidullaganj, off NH-46</td></tr>
                </tbody>
              </TableWrap>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  [Sun, 'Go early', 'Mornings are cooler and quieter, and the light is softer on the rock.'],
                  [Ban, 'Never touch', 'Skin oils damage pigments that have survived thousands of years.'],
                  [Camera, 'No flash', 'Photograph without flash; use a higher ISO in the shaded shelters.'],
                  [Footprints, 'Good shoes', 'The trail has uneven rock steps; carry water.'],
                ].map(([Icon, t, d]) => (
                  <div key={t} className="reveal rounded-xl bg-surface-low p-5">
                    <Icon className="mb-2 h-6 w-6 text-primary" aria-hidden />
                    <h3 className="font-sans text-base font-bold text-ink">{t}</h3>
                    <p className="text-sm text-ink-soft">{d}</p>
                  </div>
                ))}
              </div>
              <div className="reveal mt-8 flex flex-col gap-4 rounded-card bg-forest p-6 text-sand md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-label text-label-sm uppercase text-amber">Wildlife + heritage</p>
                  <p className="font-serif text-2xl text-white">Add a tiger safari to your Bhimbetka trip</p>
                  <p className="text-sm text-sand/70">The Bhimbetka gate is beside the shelters, and Jhiri gate is on the same highway.</p>
                </div>
                <Link href={PAGES.gates.path} className="btn-amber shrink-0">
                  Safari gates <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </section>

            <FurtherReading
              title="Read the complete guide"
              links={[
                {
                  href: FURTHER_READING.bhimbetka,
                  label: 'Bhimbetka: India’s ancient rock art wonder, the complete guide (2026)',
                  text: 'In-depth visitor guide with painting periods, key attractions, nearby places and travel tips.',
                },
              ]}
            />

            <Faq faqs={FAQS} title="Bhimbetka Rock Shelters: FAQs" eyebrow="Frequently asked" />

            <RelatedCards
              cards={[
                { href: PAGES.history.path, image: 'vindhya-hills-misty-sunrise-ratapani', tag: 'History', title: 'History of Ratapani', text: 'Bhimbetka’s place in 100,000 years of Ratapani’s story.' },
                { href: PAGES.ginnorgarh.path, image: 'ginnorgarh-fort-ruins-forest', tag: 'Heritage', title: 'Ginnorgarh Fort', text: 'The Gond hill fort hidden inside the tiger reserve.' },
                { href: PAGES.reach.path, image: 'ratapani-forest-highway-road-trip', tag: 'Travel', title: 'How to Reach Ratapani', text: 'Air, rail and road routes from Bhopal.' },
              ]}
            />

            <Sources
              items={[
                { label: 'UNESCO World Heritage Centre: Rock Shelters of Bhimbetka', url: 'https://whc.unesco.org/en/list/925/' },
                { label: 'Wikipedia: Bhimbetka rock shelters', url: 'https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters' },
                { label: 'MP Tourism: Ratapani and Bhimbetka', url: 'https://mptourism.com/ratapani-tiger-reserve-wilderness-near-bhopal.html' },
              ]}
            />
          </div>
        </div>
      </div>

      <CtaBand
        eyebrow="Stone Age to tiger country"
        title="See Bhimbetka and Ratapani’s Tigers in One Day"
        text="Plan a morning safari and a midday walk among the painted shelters."
        primary={{ href: PAGES.bookSafari.path, label: 'Book a safari' }}
        secondary={{ href: PAGES.places.path, label: 'More places to visit' }}
      />
    </>
  );
}

