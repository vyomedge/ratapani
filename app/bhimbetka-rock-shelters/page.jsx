import Link from 'next/link';
import {
  Landmark,
  MapPin,
  Clock,
  Palette,
  Trees,
  TrainFront,
  Users,
  ShieldCheck,
  Ban,
  CameraOff,
  Footprints,
  Hourglass,
  Home,
  Search,
  Navigation,
  Ticket,
  Target,
  Music,
  PawPrint,
  Sun,
  UserRound,
  Leaf,
  ArrowRight,
} from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import Gallery from '@/components/Gallery';
import { PageHero, Faq, RelatedCards, CtaBand, Sources, SectionHeading, FurtherReading, TableWrap } from '@/components/ui';
import { PAGES, FURTHER_READING, absoluteUrl } from '@/lib/site';
import { pageMetadata, webPageSchema, placeId } from '@/lib/seo';

const META = {
  title: 'Bhimbetka Rock Shelters (Bhimbetika Caves): Timings & Guide',
  description:
    'Bhimbetka rock shelters (Bhimbetika caves), UNESCO site 45 km from Bhopal: 750+ shelters, prehistoric paintings, timings, entry fee and how to reach.',
  path: PAGES.bhimbetka.path,
  image: 'bhimbetka-boar-rock-painting',
  keywords: ['Bhimbetka rock shelters', 'Bhimbetka caves', 'Bhimbetika', 'Bhimbetka paintings', 'Bhimbetka timings', 'Bhimbetka entry fee'],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Explore' }, { name: 'Bhimbetka Rock Shelters', path: META.path }];

const GALLERY = [
  { image: 'bhimbetka-zoo-rock', tag: 'Mesolithic', title: 'Zoo Rock', short: 'A rock face crowded with painted animals.', long: 'One of Bhimbetka’s most famous panels, covered with overlapping figures of animals such as elephants, swamp deer, bison and deer, painted over different periods.' },
  { image: 'bhimbetka-dancing-figures', tag: 'Mesolithic', title: 'Dancing Figures', short: 'Lines of dancers in red ochre.', long: 'Groups of people dancing hand in hand appear across many shelters, showing that music and ritual were part of life thousands of years ago.' },
  { image: 'bhimbetka-horse-elephant-procession', tag: 'Early historic', title: 'Riders & Processions', short: 'Horsemen and elephants of later periods.', long: 'Later paintings show riders on horses and elephants, warriors with weapons and processions, recording the arrival of the historic era.' },
  { image: 'bhimbetka-balancing-rock', tag: 'Geology', title: 'Rock Towers', short: 'Sandstone shaped by wind and water.', long: 'The shelters are carved from the ancient sandstone of the Vindhya range, shaped by wind and rain into towers, arches and overhangs above the Ratapani forest.' },
  { image: 'bhimbetka-boar-rock-painting', tag: 'Mesolithic', title: 'Boar Rock', short: 'A giant boar charging tiny hunters.', long: 'One of Bhimbetka’s best-known images: an enormous boar-like animal towering over small human figures, a powerful scene of people and wild beasts.' },
  { image: 'bhimbetka-auditorium-rock', tag: 'Palaeolithic', title: 'Auditorium Cave', short: 'The largest shelter, like a cathedral.', long: 'The largest shelter at Bhimbetka, ringed by quartzite towers. A boulder at its entrance, known as Chief’s Rock, bears cupule markings that some researchers consider among the oldest rock art in the world.' },
];

const PERIODS = [
  ['I', 'Upper Palaeolithic', 'Linear figures of large animals such as bison, tigers and rhinoceros.'],
  ['II', 'Mesolithic', 'The richest phase: small human figures hunting, dancing and gathering, with many animals.'],
  ['III', 'Chalcolithic', 'Scenes suggesting contact with farming communities of the Malwa plains.'],
  ['IV – V', 'Early historic', 'Riders, warriors and religious symbols in red, white and yellow.'],
  ['VI – VII', 'Medieval', 'Geometric, more schematic designs.'],
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
    q: 'What are the Bhimbetka timings and entry fee?',
    a: 'Bhimbetka is managed by the Archaeological Survey of India and is open every day from about sunrise to sunset (roughly 7 am to 6 pm). The entry fee is nominal for Indian visitors and higher for foreign nationals, with separate vehicle charges; check current rates at the ticket counter.',
  },
  {
    q: 'How long does a visit to Bhimbetka take?',
    a: 'Plan 1.5 to 3 hours to walk the visitor trail and see the main painted shelters, such as Zoo Rock and the Auditorium Cave, at a relaxed pace.',
  },
  {
    q: 'Can I combine Bhimbetka with a Ratapani safari on the same day?',
    a: 'Yes. Bhimbetka is beside Ratapani’s Bhimbetka safari gate and on the same NH-46 corridor as Jhiri gate. Do a morning safari, then visit the shelters around midday.',
  },
  {
    q: 'Is flash photography allowed at Bhimbetka?',
    a: 'Photography without flash is generally allowed. Do not use flash and never touch the paintings, as light and skin oils damage ancient pigments.',
  },
  {
    q: 'Who discovered Bhimbetka?',
    a: 'Archaeologist V. S. Wakankar recognised Bhimbetka’s prehistoric importance in 1957 after noticing the rock formations from a train. It had been mentioned earlier, in 1888, by W. Kincaid as a Buddhist site.',
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
        eyebrow="UNESCO World Heritage Site · Criteria (iii) & (v)"
        title="Bhimbetka Rock Shelters (Bhimbetika Caves)"
        intro="Inside the teak forests of Ratapani lies one of the world’s longest records of human life: more than 750 sandstone shelters where people lived for over 100,000 years and painted hunters, dancers and animals on the rock."
        crumbs={CRUMBS}
        badges={[
          { icon: MapPin, text: '≈ 45 km from Bhopal' },
          { icon: Landmark, text: 'UNESCO 2003' },
          { icon: Clock, text: 'Open daily' },
        ]}
      />

      {/* Stats */}
      <section aria-label="Bhimbetka in numbers" className="relative z-10 -mt-10">
        <div className="container-site">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card bg-ochre/20 shadow-lift md:grid-cols-4">
            {[
              ['Shelters', '750+', 'across seven hills'],
              ['Habitation', '100,000+', 'years of human presence'],
              ['UNESCO', '2003', 'World Heritage Site'],
              ['Painted', '≈ 400', 'shelters with paintings'],
            ].map(([k, v, s]) => (
              <div key={k} className="bg-[#E8DFC7] p-5">
                <dt className="font-label text-label-sm uppercase text-tertiary">{k}</dt>
                <dd className="mt-1 font-serif text-3xl font-semibold text-ink">{v}</dd>
                <dd className="text-xs text-ink-soft">{s}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="bg-surface py-16 md:py-20">
        <div className="container-site space-y-24">
          {/* Tenets */}
          <section aria-labelledby="tenets-title">
            <SectionHeading eyebrow="Prehistoric dossier" title="Why Bhimbetka Rock Shelters Matter" id="tenets-title" tone="ochre" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [Palette, 'A cradle of human creativity', 'Paintings span the Palaeolithic, Mesolithic, Chalcolithic, early historic and medieval periods, mostly in red and white natural pigments.', 'Thousands of years of art'],
                [Trees, 'Inside the Ratapani forest', 'The shelters sit within Ratapani Wildlife Sanctuary, now a tiger reserve, so prehistoric art and living wildlife share one landscape.', 'Living landscape'],
                [TrainFront, 'A rediscovery from a train', 'In 1957 archaeologist V. S. Wakankar noticed the rock formations from a train window and set out to explore them.', 'Rediscovered 1957'],
                [Users, 'A living tradition', 'UNESCO notes that traditions in nearby villages echo themes seen in the paintings, linking past and present.', 'Cultural continuity'],
              ].map(([Icon, t, d, tag], i) => (
                <article key={t} className="reveal card-lift flex flex-col rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 80}ms` }}>
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-fixed text-tertiary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mb-2 text-xl text-ink">{t}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">{d}</p>
                  <span className="mt-4 font-label text-label-sm uppercase text-primary">{tag}</span>
                </article>
              ))}
            </div>
          </section>

          {/* UNESCO */}
          <section aria-labelledby="unesco-title" className="reveal grid grid-cols-1 gap-8 overflow-hidden rounded-[1.75rem] bg-forest bg-contour-light p-8 text-sand md:p-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-ochre/30 px-3 py-1 font-label text-label-sm uppercase text-tertiary-dim">
                <ShieldCheck className="h-4 w-4" aria-hidden /> World Heritage list · Ref. 925
              </p>
              <h2 id="unesco-title" className="mb-4 text-[2rem] leading-tight text-white md:text-headline-lg">
                Bhimbetka UNESCO World Heritage Site: Criteria (iii) &amp; (v)
              </h2>
              <p className="mb-6 leading-relaxed text-sand/80">
                The Rock Shelters of Bhimbetka were inscribed in 2003 for their long, continuous record of human life and the close interaction
                between people and the landscape.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/10 p-5">
                  <p className="font-label text-label-sm uppercase text-amber">Criterion (iii)</p>
                  <p className="mt-1 text-sm text-sand/85">Testimony to a cultural tradition, shown through rock art spanning many thousands of years.</p>
                </div>
                <div className="rounded-xl bg-white/10 p-5">
                  <p className="font-label text-label-sm uppercase text-amber">Criterion (v)</p>
                  <p className="mt-1 text-sm text-sand/85">A link between hunter-gatherer life and the landscape, echoed in the traditions of surrounding villages.</p>
                </div>
              </div>
            </div>
            <div className="rounded-card bg-forest-deep/80 p-6 lg:col-span-5">
              <p className="mb-4 font-label text-label-md uppercase text-amber">Visitor conservation rules</p>
              <ul className="space-y-4">
                {[
                  [Ban, 'Never touch the paintings', 'Oils from skin permanently damage ancient pigments.'],
                  [CameraOff, 'No flash photography', 'Strong light speeds up pigment fading.'],
                  [Footprints, 'Stay on the marked path', 'Keep to the visitor trail and railings.'],
                ].map(([Icon, t, d]) => (
                  <li key={t} className="flex gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-tertiary-dim" aria-hidden />
                    <span>
                      <strong className="block text-white">{t}</strong>
                      <span className="text-sm text-sand/70">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* At a glance */}
          <section aria-labelledby="glance-title">
            <SectionHeading eyebrow="Field metrics" title="Bhimbetka Caves at a Glance" id="glance-title" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                [Hourglass, 'Age', '100,000+ years', 'Human presence from the Stone Age (Acheulean) to around the 2nd century BCE; painting into the medieval era.'],
                [Home, 'Shelters', '750+ across 7 hills', 'Spread over about 10 km; the Bhimbetka group has 243 shelters and nearby Lakha Juar 178.'],
                [Search, 'Rediscovered by', 'V. S. Wakankar, 1957', 'The archaeologist who first recognised the site’s prehistoric significance.'],
                [Navigation, 'Distance', '≈ 45 km from Bhopal', 'South-east on NH-46, about 9 km beyond Obaidullaganj.'],
                [Clock, 'Timings', 'About 7 am – 6 pm', 'Open every day, all year, including the monsoon.'],
                [Ticket, 'Entry', 'Nominal ASI fee', 'Lower for Indian citizens, higher for foreigners; vehicle charges extra. Check at the counter.'],
              ].map(([Icon, k, v, d], i) => (
                <div key={k} className="reveal flex gap-4 rounded-card bg-white p-5 shadow-sm" style={{ '--reveal-delay': `${(i % 3) * 70}ms` }}>
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-label text-label-sm uppercase text-outline">{k}</p>
                    <p className="font-serif text-xl text-ink">{v}</p>
                    <p className="mt-1 text-sm text-ink-soft">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Discovery */}
          <section aria-labelledby="discovery-title" className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Discovery" tone="ochre" title="History of Bhimbetka: Discovery to World Heritage" id="discovery-title" />
              <div className="prose-rp reveal text-lg">
                <p>
                  In 1957 the archaeologist <strong>Vishnu Shridhar Wakankar</strong> was travelling by train through the Vindhya hills south of Bhopal
                  when he noticed unusual rock formations rising above the forest. He returned to explore them and found shelter after shelter
                  painted with animals, hunters and dancers.
                </p>
                <p>
                  The site had been noted once before, in 1888, when the British official W. Kincaid described it as a Buddhist site based on local
                  accounts. Wakankar’s work showed its true age. Excavations in the 1970s revealed stone tools and deposits reaching back more than
                  100,000 years, and in 2003 UNESCO added the Rock Shelters of Bhimbetka to the World Heritage List.
                </p>
              </div>
            </div>
            <div className="reveal rounded-card bg-surface-low p-6 lg:col-span-5">
              <p className="mb-4 font-label text-label-sm uppercase text-outline">Coordinates ≈ 22°56′N, 77°37′E</p>
              <ol className="space-y-4">
              {[
                ['1888', 'First written mention by W. Kincaid'],
                ['1957', 'V. S. Wakankar recognises its prehistoric importance'],
                ['1970s', 'Systematic excavations reveal the full scale'],
                ['2003', 'Inscribed as a UNESCO World Heritage Site'],
              ].map(([y, t]) => (
                <li key={y} className="flex gap-4 border-b border-forest/10 pb-3 last:border-0">
                  <span className="font-serif text-2xl font-semibold text-tertiary">{y}</span>
                  <span className="text-ink-soft">{t}</span>
                </li>
              ))}
            </ol>
            </div>
          </section>

          {/* Gallery */}
          <section aria-labelledby="gallery-title">
            <SectionHeading
              eyebrow="Prehistoric masterpieces"
              title="Bhimbetka Rock Paintings Gallery"
              intro="Tap any image to enlarge it and read more about what it shows."
              id="gallery-title"
            />
            <Gallery items={GALLERY} />
          </section>

          {/* What paintings show */}
          <section aria-labelledby="paint-title">
            <SectionHeading
              eyebrow="Iconography"
              title="What the Bhimbetka Paintings Show"
              intro="The paintings record everyday life, belief and the animals people lived alongside."
              id="paint-title"
              tone="moss"
            />
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                [Target, 'The hunt', 'Hunters with bows and arrows, barbed spears and sticks chase or trap animals, sometimes in groups.', 'Weapons · tactics'],
                [Music, 'Dance & music', 'Lines and circles of dancers, with drums and other instruments, suggest celebration and ritual.', 'Ritual · community'],
                [PawPrint, 'An ancient zoo', 'Bison, deer, antelope, boar, rhinoceros, elephants, big cats, sloth bears and birds appear across the shelters.', 'Animals · environment'],
                [UserRound, 'Daily life', 'Mothers and children, food gathering, burials and later riders, warriors and battles.', 'People · society'],
              ].map(([Icon, t, d, tag], i) => (
                <div key={t} className="reveal flex gap-4 rounded-card bg-white p-5 shadow-sm" style={{ '--reveal-delay': `${i * 70}ms` }}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tertiary-fixed text-tertiary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="mb-1 text-xl text-ink">{t}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{d}</p>
                    <p className="mt-2 font-label text-label-sm uppercase text-outline">{tag}</p>
                  </div>
                </div>
              ))}
            </div>
            <TableWrap caption="Periods of Bhimbetka rock paintings" note="Periods as described by archaeologists studying Bhimbetka; exact dates for each phase are debated.">
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

          {/* Living wilderness */}
          <section aria-labelledby="living-title" className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Where prehistory meets the tiger"
                title="Bhimbetka and Ratapani Tiger Reserve"
                intro="The ravines and waterholes that sustained Stone Age people still sustain tigers, leopards, sloth bears and hundreds of bird species today."
                id="living-title"
              />
              <p className="mb-4 font-label text-label-md uppercase text-primary">A one-day heritage + wildlife plan</p>
              <ol className="space-y-3">
                {[
                  ['Early morning', 'Tiger safari', 'Morning round from Jhiri or the Bhimbetka gate'],
                  ['Late morning – early afternoon', 'Bhimbetka walk', 'Shaded shelters, softer light on the rock'],
                  ['Afternoon', 'Bhojpur or Ratapani Dam', 'Temple visit or reservoir views'],
                ].map(([t, a, d]) => (
                  <li key={a} className="reveal flex gap-4 rounded-xl bg-white p-4 shadow-sm">
                    <span className="w-28 shrink-0 font-label text-label-sm uppercase text-tertiary">{t}</span>
                    <span>
                      <strong className="block text-ink">{a}</strong>
                      <span className="text-sm text-ink-soft">{d}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <Link href={PAGES.gates.path + '#bhimbetka-gate'} className="btn-amber mt-6">
                Bhimbetka safari gate <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="reveal reveal-scale relative h-[460px] overflow-hidden rounded-card bg-forest shadow-2xl">
              <Img name="bhimbetka-balancing-rock" sizes="(min-width: 1024px) 50vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute inset-x-5 bottom-5 flex items-center gap-2 text-sm text-white">
                <ShieldCheck className="h-4 w-4 text-amber" aria-hidden /> The Bhimbetka safari gate sits beside the rock shelters.
              </p>
            </div>
          </section>

          {/* Tips */}
          <section aria-labelledby="tips-title">
            <SectionHeading eyebrow="Naturalist guidance" title="Bhimbetka Visiting Tips" id="tips-title" tone="ochre" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [Sun, 'Choose your light', 'Mornings are cooler and quieter; around midday the overhangs are evenly lit and shaded.'],
                [Footprints, 'Wear good shoes', 'The trail has uneven rock steps and some climbs. Carry water.'],
                [Users, 'Hire a guide', 'Local guides at the entrance help you find and understand the paintings.'],
                [Leaf, 'Leave no trace', 'Avoid single-use plastic, keep noise low and carry all litter back.'],
              ].map(([Icon, t, d], i) => (
                <article key={t} className="reveal card-lift rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 80}ms` }}>
                  <Icon className="mb-4 h-7 w-7 text-primary" aria-hidden />
                  <h3 className="mb-2 text-xl text-ink">{t}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{d}</p>
                </article>
              ))}
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

          <div className="mx-auto max-w-4xl">
            <Faq faqs={FAQS} title="Bhimbetka Rock Shelters: FAQs" eyebrow="Inquiries & answers" />
          </div>

          <RelatedCards
            cards={[
              { href: PAGES.history.path, image: 'vindhya-hills-misty-sunrise-ratapani', tag: 'History', title: 'History of Ratapani', text: 'Bhimbetka’s place in 100,000 years of Ratapani’s story.' },
              { href: PAGES.ginnorgarh.path, image: 'ginnorgarh-fort-ruins-forest', tag: 'Heritage', title: 'Ginnorgarh Fort', text: 'The Gond hill fort hidden inside the tiger reserve.' },
              { href: PAGES.wildlife.path, image: 'indian-leopard-teak-branch-ratapani', tag: 'Wildlife', title: 'Ratapani Wildlife', text: 'The animals that share Bhimbetka’s hills today.' },
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

      <CtaBand
        eyebrow="Extend your journey"
        title="Combine Bhimbetka with a Ratapani Tiger Safari"
        text="Plan a safari through Ratapani’s gates and explore more sights across the Vindhyan landscape."
        primary={{ href: PAGES.gates.path, label: 'Safari gates & routes' }}
        secondary={{ href: PAGES.places.path, label: 'Places to visit' }}
      />
    </>
  );
}
