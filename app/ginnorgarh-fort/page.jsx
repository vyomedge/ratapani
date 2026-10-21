import Link from 'next/link';
import { Castle, Crown, MapPin, Footprints, Mountain, Droplets, DoorOpen, Landmark, Clock, Users, Sun, AlertTriangle, ShieldCheck } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import { PageHero, KeyTakeaways, Faq, RelatedCards, CtaBand, Toc, Sources, SectionHeading, FurtherReading, TableWrap } from '@/components/ui';
import { PAGES, FURTHER_READING, absoluteUrl } from '@/lib/site';
import { pageMetadata, webPageSchema, placeId } from '@/lib/seo';

const META = {
  title: 'Ginnorgarh Fort: History, Trek & How to Visit (Ratapani)',
  description:
    'Ginnorgarh Fort, the ruined Gond hill fort inside Ratapani Tiger Reserve: Rani Kamlapati and Dost Mohammad Khan, what to see, the trek from Delawadi and visiting tips.',
  path: PAGES.ginnorgarh.path,
  image: 'ginnorgarh-fort-ruins-forest',
  keywords: [
    'Ginnorgarh Fort',
    'Ginnourgarh Fort',
    'Ginnorgarh fort history',
    'Ginnorgarh fort Ratapani',
    'Rani Kamlapati fort',
    'Ginnorgarh fort trek',
    'how to reach Ginnorgarh fort',
  ],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Explore' }, { name: 'Ginnorgarh Fort', path: META.path }];

const TOC = [
  { id: 'key-takeaways', label: 'Key takeaways' },
  { id: 'history', label: 'History of the fort' },
  { id: 'kamlapati', label: 'Rani Kamlapati & Bhopal' },
  { id: 'see', label: 'What to see' },
  { id: 'visit', label: 'How to visit' },
  { id: 'faqs', label: 'Ginnorgarh FAQs' },
];

const HISTORY = [
  ['Around the 11th century', 'Paramara beginnings', 'Carved architectural fragments reused in later walls suggest the hilltop was already occupied late in the Paramara period, the dynasty of Raja Bhoj of Malwa.'],
  ['Later medieval period', 'Gond stronghold', 'Ginnorgarh rose to prominence under Gond rulers who controlled the forested hills south of today’s Bhopal. The Gond chief Nizam Shah is believed to have built its palace.'],
  ['Early 18th century', 'Nizam Shah and Rani Kamlapati', 'Nizam Shah was poisoned by his nephew, the chief of Chainpur Bari. His widow, Rani Kamlapati, took refuge in the fort with her son Nawal Shah and sought the protection of the Afghan soldier Dost Mohammad Khan.'],
  ['1723 – 1726', 'Bhopal State takes over', 'After Rani Kamlapati’s death in 1723, Dost Mohammad Khan, founder of Bhopal State, took the fort by stealth. A Persian inscription dated 1725–26 on one of the gatehouses records Bhopal’s rule.'],
  ['1908 – today', 'Ruins in the forest', 'By the early 20th century the buildings were already described as falling into ruin. Today Ginnorgarh is a protected monument of the Madhya Pradesh Department of Archaeology, standing inside Ratapani Tiger Reserve.'],
];

const FAQS = [
  {
    q: 'Where is Ginnorgarh Fort?',
    a: 'Ginnorgarh Fort stands on a rocky hilltop of about 700 m inside Ratapani Tiger Reserve in Raisen district, Madhya Pradesh, roughly 60 km from Bhopal. It is approached on foot from the Delawadi side of the reserve.',
  },
  {
    q: 'Who built Ginnorgarh Fort?',
    a: 'The fort first became prominent under Gond rulers; the Gond chief Nizam Shah is believed to have built its palace. Fragments suggest the site was occupied earlier, in the late Paramara period.',
  },
  {
    q: 'What is the connection between Ginnorgarh Fort and Rani Kamlapati?',
    a: 'Rani Kamlapati, widow of Nizam Shah, took refuge at Ginnorgarh with her son and sought help from Dost Mohammad Khan. After her death in 1723 he took the fort, and the events helped establish Bhopal State. Bhopal’s Rani Kamlapati railway station is named after her.',
  },
  {
    q: 'Can tourists visit Ginnorgarh Fort?',
    a: 'Yes, but the fort lies inside a tiger reserve, so visits need Forest Department permission and are best done with a local guide. Access rules can change; check at the Delawadi forest office before you go.',
  },
  {
    q: 'How long is the Ginnorgarh Fort trek?',
    a: 'Visitors usually describe an uphill walk of about 2 km from the end of the forest road, taking 45 minutes to an hour each way. Carry water; there are no facilities at the fort.',
  },
  {
    q: 'What is the best time to visit Ginnorgarh Fort?',
    a: 'October to March, on a morning visit, is the most comfortable. Summer middays are very hot, and in the monsoon the trails become slippery and access may be restricted.',
  },
];

export default function GinnorgarhPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ ...META, type: 'Article' }),
          {
            '@context': 'https://schema.org',
            '@type': ['TouristAttraction', 'LandmarksOrHistoricalBuildings'],
            name: 'Ginnorgarh Fort',
            alternateName: ['Ginnourgarh Fort', 'Ginnaurgarh'],
            description:
              'Ruined Gond hill fort on a ~700 m summit inside Ratapani Tiger Reserve, associated with Nizam Shah, Rani Kamlapati and Dost Mohammad Khan, founder of Bhopal State.',
            url: absoluteUrl(META.path),
            image: absoluteUrl(`/images/${META.image}.webp`),
            containedInPlace: { '@id': placeId },
            address: { '@type': 'PostalAddress', addressRegion: 'Madhya Pradesh', addressLocality: 'Raisen district', addressCountry: 'IN' },
          },
        ]}
      />
      <PageHero
        image={META.image}
        eyebrow="Gond hill fort · Inside Ratapani Tiger Reserve"
        title="Ginnorgarh Fort"
        intro="The forgotten Gond citadel of Ratapani: a ruined palace on a forest hilltop where Rani Kamlapati’s story set in motion the birth of Bhopal State, now surrounded by tiger country."
        crumbs={CRUMBS}
        badges={[
          { icon: Mountain, text: '≈ 700 m hilltop' },
          { icon: MapPin, text: '≈ 60 km from Bhopal' },
          { icon: Footprints, text: 'Reached on foot' },
        ]}
      />

      <div className="bg-surface py-14 lg:py-20">
        <div className="container-site grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:self-stretch">
            <Toc items={TOC} title="Fort guide" note="Ginnorgarh is one of very few historic forts in India that stand inside a notified tiger reserve." cta={{ href: PAGES.gates.path, label: 'Delawadi gate details' }} />
          </div>

          <div className="flex flex-col gap-20 lg:col-span-8">
            <div id="key-takeaways" className="scroll-mt-28">
              <KeyTakeaways
                title="Ginnorgarh Fort at a glance"
                items={[
                  { icon: MapPin, title: 'Location', text: 'Hilltop of about 700 m inside Ratapani Tiger Reserve, Raisen district, approached from Delawadi.' },
                  { icon: Crown, title: 'Rulers', text: 'Paramara traces, then Gond rule under Nizam Shah and Rani Kamlapati; taken by Dost Mohammad Khan after 1723.' },
                  { icon: Castle, title: 'What survives', text: 'Palace ruins, gatehouses (one with a 1725–26 Persian inscription), cisterns and two natural water bodies.' },
                  { icon: Footprints, title: 'Access', text: 'An uphill walk of about 2 km; visit with Forest Department permission and a local guide.' },
                ]}
              />
            </div>

            <section id="history" className="scroll-mt-28" aria-labelledby="history-title">
              <SectionHeading eyebrow="Timeline" tone="ochre" title="History of Ginnorgarh Fort" id="history-title" />
              <ol className="relative space-y-10 pl-8 sm:pl-12">
                <span className="absolute bottom-3 left-3 top-3 w-0.5 bg-surface-highest sm:left-4" aria-hidden />
                {HISTORY.map(([date, title, text]) => (
                  <li key={title} className="reveal relative">
                    <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-surface shadow-sm sm:-left-12" aria-hidden>
                      <span className="h-3.5 w-3.5 rounded-full bg-tertiary" />
                    </span>
                    <span className="rounded-full bg-tertiary-fixed/60 px-3 py-1 font-label text-label-md uppercase text-tertiary">{date}</span>
                    <h3 className="mb-2 mt-3 text-headline-sm text-ink">{title}</h3>
                    <p className="leading-relaxed text-ink-soft">{text}</p>
                  </li>
                ))}
              </ol>
              <figure className="reveal mt-10 overflow-hidden rounded-card bg-surface-low shadow-sm">
                <div className="relative h-72 bg-forest sm:h-96">
                  <Img name="ginnorgarh-fort-jungle-walls" sizes="(min-width: 1024px) 60vw, 100vw" />
                </div>
                <figcaption className="flex items-center gap-2 p-3 font-label text-label-sm text-ink-soft">
                  <Castle className="h-4 w-4 shrink-0 text-tertiary" aria-hidden /> Stone walls of a hill fort swallowed by forest, as at Ginnorgarh.
                </figcaption>
              </figure>
            </section>

            <section id="kamlapati" className="reveal relative scroll-mt-28 overflow-hidden rounded-[1.75rem] bg-secondary p-8 text-white shadow-md sm:p-12" aria-labelledby="kamlapati-title">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary-fixed/20 px-3 py-1 font-label text-label-sm uppercase text-secondary-fixed">
                <Crown className="h-4 w-4" aria-hidden /> Story &amp; legend
              </p>
              <h2 id="kamlapati-title" className="mb-4 text-[2rem] leading-tight md:text-headline-lg">
                Rani Kamlapati, Dost Mohammad Khan &amp; the Birth of Bhopal
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-white/85">
                <p>
                  When the Gond chief Nizam Shah was poisoned by his nephew, his widow <strong>Rani Kamlapati</strong> retreated to Ginnorgarh with
                  her young son Nawal Shah. She turned for help to <strong>Dost Mohammad Khan</strong>, an Afghan soldier of fortune then rising in
                  the region.
                </p>
                <p className="text-base text-white/80">
                  Popular accounts say Kamlapati tied a rakhi on him and that he avenged Nizam Shah’s death; in return he received land that included
                  the village of Bhopal. After her death in 1723, Dost Mohammad took Ginnorgarh and went on to found Bhopal State, whose capital grew
                  into today’s state capital of Madhya Pradesh. In 2021 Bhopal’s Habibganj station was renamed Rani Kamlapati in her memory.
                </p>
              </div>
            </section>

            <section id="see" className="scroll-mt-28" aria-labelledby="see-title">
              <SectionHeading eyebrow="Architecture" title="What to See at Ginnorgarh Fort" id="see-title" tone="moss" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  [Landmark, 'The palace', 'The ruined palace is considered a fine example of regional palace architecture, stylistically close to the Kharbuja Mahal at Dhar fort.'],
                  [DoorOpen, 'Gatehouses', 'Fortified gateways guard the approach; one carries a Persian inscription of 1725–26 recording Bhopal’s rule.'],
                  [Droplets, 'Water systems', 'Cisterns and two natural water bodies show how the hilltop held water for its garrison.'],
                  [Mountain, 'Forest views', 'The summit looks out over the teak canopy of Ratapani; the area is also known for its birdlife.'],
                ].map(([Icon, t, d], i) => (
                  <div key={t} className="reveal flex gap-4 rounded-card bg-white p-5 shadow-sm" style={{ '--reveal-delay': `${i * 70}ms` }}>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="mb-1 text-xl text-ink">{t}</h3>
                      <p className="text-sm leading-relaxed text-ink-soft">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="visit" className="scroll-mt-28" aria-labelledby="visit-title">
              <SectionHeading
                eyebrow="Plan your visit"
                title="How to Visit Ginnorgarh Fort"
                intro="Ginnorgarh is inside a tiger reserve, so treat it as a guided forest trek rather than a casual monument visit."
                id="visit-title"
              />
              <TableWrap caption="Ginnorgarh Fort visitor information" note="Access conditions can change. Confirm permission, timing and any fees at the Delawadi forest office before you go.">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Starting point</td><td>Delawadi side of Ratapani Tiger Reserve (Delawadi gate ≈ 52 km from Bhopal railway station)</td></tr>
                  <tr><td>Distance from Bhopal</td><td>About 60 km to the fort area</td></tr>
                  <tr><td>Trek</td><td>Uphill walk of about 2 km; 45–60 minutes each way</td></tr>
                  <tr><td>Permission</td><td>Forest Department permission required; go with a local guide</td></tr>
                  <tr><td>Facilities</td><td>None at the fort: carry water and snacks, bring back all litter</td></tr>
                  <tr><td>Best time</td><td>October to March, mornings</td></tr>
                </tbody>
              </TableWrap>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  [Clock, 'Start early', 'Reach Delawadi in the morning so you finish the climb before the midday heat.'],
                  [Users, 'Go in a group', 'Walk with a guide and stay together; this is leopard, sloth bear and tiger habitat.'],
                  [Sun, 'Dress for the trail', 'Sturdy shoes, a hat and at least two litres of water per person.'],
                ].map(([Icon, t, d]) => (
                  <div key={t} className="reveal rounded-xl bg-surface-low p-5">
                    <Icon className="mb-2 h-6 w-6 text-amber" aria-hidden />
                    <h3 className="font-sans text-base font-bold text-ink">{t}</h3>
                    <p className="text-sm text-ink-soft">{d}</p>
                  </div>
                ))}
              </div>
              <p className="reveal mt-6 flex items-start gap-2 rounded-xl border border-tertiary/30 bg-tertiary-fixed/30 p-4 text-sm text-ink">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-tertiary" aria-hidden />
                Do not attempt the walk alone or after dark, and avoid it in heavy rain. Follow your guide and Forest Department instructions at all times.
              </p>
            </section>

            <section aria-labelledby="nearby-title">
              <SectionHeading eyebrow="Nearby" title="Combine Ginnorgarh with Other Ratapani Sights" id="nearby-title" tone="ochre" />
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  ['Delawadi safari zone', 'Tiger safari in the western teak valleys', PAGES.gates.path + '#delawadi-gate'],
                  ['Bhimbetka rock shelters', 'UNESCO prehistoric rock art', PAGES.bhimbetka.path],
                  ['Ratapani Dam', 'The reservoir that gives the forest its name', PAGES.places.path + '#ratapani-dam'],
                  ['History of Ratapani', 'From the Stone Age to the 2024 tiger reserve', PAGES.history.path],
                ].map(([t, d, href]) => (
                  <li key={t}>
                    <Link href={href} className="reveal flex items-center justify-between gap-3 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-lift">
                      <span>
                        <span className="block font-serif text-lg text-ink">{t}</span>
                        <span className="text-sm text-ink-soft">{d}</span>
                      </span>
                      <ShieldCheck className="h-5 w-5 shrink-0 text-secondary" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <FurtherReading
              title="Read the full traveller’s guide"
              links={[
                {
                  href: FURTHER_READING.ginnorgarh,
                  label: 'Ginnorgarh Fort: the forgotten Gond citadel of Ratapani',
                  text: 'Detailed guide with the WWII prisoner-of-war camp story, trekking notes and a weekend itinerary.',
                },
              ]}
            />

            <Faq faqs={FAQS} title="Ginnorgarh Fort: FAQs" eyebrow="Frequently asked" />

            <RelatedCards
              cards={[
                { href: PAGES.history.path, image: 'princely-era-forest-camp-central-india', tag: 'History', title: 'History of Ratapani', text: '100,000 years of people and wildlife in one landscape.' },
                { href: PAGES.bhimbetka.path, image: 'bhimbetka-rock-shelters-unesco', tag: 'UNESCO', title: 'Bhimbetka Rock Shelters', text: 'Prehistoric paintings inside the Ratapani forest.' },
                { href: PAGES.places.path, image: 'bhimbetka-sandstone-towers-sunset', tag: 'Plan your visit', title: 'Places to Visit in Ratapani', text: 'Forts, lakes, temples and itineraries.' },
              ]}
            />

            <Sources
              items={[
                { label: 'Wikipedia: Ginnorgarh', url: 'https://en.wikipedia.org/wiki/Ginnorgarh' },
                { label: 'MP Tourism: Ginnourgarh Fort and Ratapani', url: 'https://mptourism.com/ratapani-tiger-reserve-wilderness-near-bhopal.html' },
                { label: 'Gaon Connection: The Gond warrior queens, a hill fort and its baoris', url: 'https://www.gaonconnection.com/english/gond-warriors-ginnorgarh-fort-bhopal-madhya-pradesh-rani-kamlapati-nawaab-dost-mohammad-history-madhya-pradesh-51515/articleshow/124934864.html' },
              ]}
            />
          </div>
        </div>
      </div>

      <CtaBand
        eyebrow="Fort & forest"
        title="Pair a Fort Trek with a Delawadi Tiger Safari"
        text="Ginnorgarh lies on the Delawadi side of Ratapani. Book a morning safari and explore the fort’s story on the same trip."
        primary={{ href: PAGES.bookSafari.path, label: 'Book a safari' }}
        secondary={{ href: PAGES.reach.path, label: 'How to reach' }}
      />
    </>
  );
}

