import { History, Castle, Crown, ShieldCheck, Scroll, Palette, Camera, Gavel, Leaf, Users, MapPin } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import { PageHero, KeyTakeaways, Faq, RelatedCards, CtaBand, Toc, Sources, SectionHeading } from '@/components/ui';
import { PAGES } from '@/lib/site';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const META = {
  title: 'History of Ratapani: Bhimbetka to Tiger Reserve (1976–2024)',
  description:
    'History of Ratapani: Bhimbetka’s Stone Age shelters, Ginnorgarh Fort, the Bhopal State era, the 1976 sanctuary and the 2024 tiger reserve.',
  path: PAGES.history.path,
  image: 'vindhya-hills-misty-sunrise-ratapani',
  keywords: [
    'history of Ratapani',
    'Ratapani wildlife sanctuary history',
    'Ratapani sanctuary established 1976',
    'Ginnorgarh fort history',
    'Bhimbetka history',
    'Ratapani tiger reserve notification',
  ],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Explore' }, { name: 'History of Ratapani', path: META.path }];

const TOC = [
  { id: 'key-takeaways', label: 'Key takeaways' },
  { id: 'timeline', label: 'Ratapani timeline' },
  { id: 'name', label: 'The name “Ratapani”' },
  { id: 'communities', label: 'Forest communities' },
  { id: 'numbers', label: 'Conservation in numbers' },
  { id: 'faqs', label: 'History FAQs' },
];

const TIMELINE = [
  {
    id: 'prehistory',
    date: '100,000+ years ago – 2nd century BCE',
    era: 'Stone Age to early history',
    dot: 'bg-tertiary',
    chip: 'bg-tertiary-fixed/60 text-tertiary',
    title: 'Bhimbetka: the first people of Ratapani',
    text: [
      'The story of Ratapani begins in its sandstone hills. At Bhimbetka, on the southern edge of the Vindhya range and inside today’s Ratapani forest, more than 750 rock shelters spread over about 10 km show continuous human settlement from the Stone Age (Acheulean period) to around the 2nd century BCE. Some shelters were lived in more than 100,000 years ago.',
      'Around 400 shelters carry paintings in red, white, yellow and green made from natural pigments such as haematite and charcoal. They show hunters with bows and barbed spears, dancers, mothers and children, and animals including deer, bison, boar, rhinoceros and big cats. The earliest paintings are dated to at least 10,000 years ago.',
    ],
    image: 'bhimbetka-rock-paintings-red-ochre',
    caption: 'Red ochre rock paintings at Bhimbetka show hunting scenes and the wildlife of the Vindhya hills.',
    captionIcon: Palette,
  },
  {
    id: 'ancient',
    date: '3rd century BCE',
    era: 'Mauryan era',
    dot: 'bg-secondary',
    chip: 'bg-secondary-fixed/60 text-secondary',
    title: 'Saru Maru and the footsteps of Ashoka',
    text: [
      'Near Pangoraria village, on the edge of the Ratapani landscape, the Saru Maru caves were a Buddhist monastic site. They carry carved Buddhist symbols and two inscriptions linked to Emperor Ashoka: a Minor Rock Edict and a record of his visit to the area while he was still a prince and viceroy. Old temple remains near Delawadi also point to the region’s long religious history.',
    ],
  },
  {
    id: 'medieval',
    date: '11th – 18th century CE',
    era: 'Medieval kingdoms',
    dot: 'bg-primary',
    chip: 'bg-primary-fixed/60 text-primary',
    title: 'Raja Bhoj, Gond rulers and Ginnorgarh Fort',
    text: [
      'In the 11th century the Paramara king Raja Bhoj of Malwa built the great Shiva temple at Bhojpur, just north of the Ratapani hills. In later centuries these forests fell within the domains of Gond rulers.',
      'Their most dramatic legacy is Ginnorgarh Fort, built on an isolated hilltop deep in the forest near Delawadi. Local history links it with the Gond king Nizam Shah and Rani Kamlapati, after whom Bhopal’s Rani Kamlapati railway station is named. The fort later passed to Dost Mohammad Khan, founder of Bhopal State. Today Ginnorgarh can only be reached on foot from the Delawadi side and is known for its birdlife.',
    ],
    image: 'ginnorgarh-fort-ruins-forest',
    caption: 'Forest-covered ruins like those around Ginnorgarh are scattered through the Ratapani hills.',
    captionIcon: Castle,
  },
  {
    id: 'princely',
    date: '18th century – 1947',
    era: 'Bhopal State',
    dot: 'bg-tertiary',
    chip: 'bg-tertiary-fixed/60 text-tertiary',
    title: 'Princely forests of Bhopal State',
    text: [
      'Under the Nawabs and Begums of Bhopal, the hill forests south of the capital supplied timber and served as hunting grounds, as was common across princely Central India. Forest records suggest that hunting pressure on herbivores dates back to this era.',
      'In 1888 the British official W. Kincaid made the first written mention of Bhimbetka, describing it as a Buddhist site. During the Second World War a prisoner-of-war camp was set up in this part of Central India; its remains are still visited by curious travellers.',
    ],
    image: 'princely-era-forest-camp-central-india',
    caption: 'Forest camps were part of life in Central India’s princely-era jungles.',
    captionIcon: Camera,
  },
  {
    id: 'rediscovery',
    date: '1957 – 2003',
    era: 'Rediscovery',
    dot: 'bg-secondary',
    chip: 'bg-secondary-fixed/60 text-secondary',
    title: 'Bhimbetka rediscovered and recognised by UNESCO',
    text: [
      'In 1957 archaeologist V. S. Wakankar recognised the prehistoric importance of the Bhimbetka shelters after spotting the rock formations on a train journey. Excavations through the 1970s revealed the full scale of the site, and in 2003 the Rock Shelters of Bhimbetka were inscribed as a UNESCO World Heritage Site.',
    ],
  },
  {
    id: 'sanctuary-1976',
    date: '1976',
    era: 'Legal protection',
    dot: 'bg-primary',
    chip: 'bg-primary-fixed/60 text-primary',
    title: 'Ratapani Wildlife Sanctuary is declared',
    text: [
      'Following India’s Wildlife (Protection) Act of 1972, Ratapani was declared a wildlife sanctuary in 1976. The sanctuary covers about 824 km² of hills, plateaus and valleys in Raisen and Sehore districts, with teak covering roughly 55% of the forest.',
    ],
    badge: { title: 'Wildlife (Protection) Act, 1972', text: 'Ratapani Wildlife Sanctuary · Raisen & Sehore', chipText: '≈ 824 km²' },
  },
  {
    id: 'tiger-reserve-2024',
    date: '2008 – 2024',
    era: 'Tiger reserve',
    dot: 'bg-secondary',
    chip: 'bg-secondary-fixed/60 text-secondary',
    title: 'From sanctuary to India’s 57th tiger reserve',
    text: [
      'The National Tiger Conservation Authority (NTCA) gave in-principle approval to make Ratapani a tiger reserve in 2008. After a wait of more than 16 years, the Madhya Pradesh government notified Ratapani Tiger Reserve on 2 December 2024, with a 763.8 km² core and a 507.7 km² buffer: 1,271.5 km² in total.',
      'Ratapani became Madhya Pradesh’s eighth tiger reserve and India’s 57th. Jungle safaris for visitors had already begun in December 2022 from the Jhiri and Delawadi sides, and today tourists enter through three gates: Jhiri, Delawadi and Bhimbetka.',
    ],
  },
];

const FAQS = [
  {
    q: 'When was Ratapani Wildlife Sanctuary established?',
    a: 'Ratapani was declared a wildlife sanctuary in 1976 under the Wildlife (Protection) Act, 1972. It was later notified as Ratapani Tiger Reserve on 2 December 2024.',
  },
  {
    q: 'When did Ratapani become a tiger reserve?',
    a: 'Ratapani was notified as a tiger reserve on 2 December 2024, about 16 years after the NTCA gave in-principle approval in 2008. It is Madhya Pradesh’s 8th and India’s 57th tiger reserve.',
  },
  {
    q: 'Is Bhimbetka inside Ratapani?',
    a: 'Yes. The Bhimbetka rock shelters lie within the Ratapani Wildlife Sanctuary, about 45 km south-east of Bhopal and 9 km from Obaidullaganj. The main visitor area is managed by the Archaeological Survey of India.',
  },
  {
    q: 'Who built Ginnorgarh Fort?',
    a: 'Ginnorgarh Fort was a Gond stronghold on an isolated hilltop near Delawadi. Local history links it with the Gond king Nizam Shah and Rani Kamlapati; it later came under Dost Mohammad Khan, founder of Bhopal State. It can only be reached on foot from Delawadi.',
  },
  {
    q: 'How old are the Bhimbetka rock paintings?',
    a: 'The earliest Bhimbetka paintings are dated to at least 10,000 years ago, with some researchers proposing older dates. The shelters themselves were inhabited more than 100,000 years ago, and painting continued into the medieval period.',
  },
];

export default function HistoryPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ ...META, type: 'Article' })} />
      <PageHero
        image={META.image}
        eyebrow="Chronicles of the Vindhyas · Stone Age to today"
        title="History of Ratapani"
        intro="From Stone Age hunters painting the walls of Bhimbetka to Gond forts, Bhopal’s princely forests and a tiger reserve notified in 2024: 100,000 years of people and wildlife in one landscape."
        crumbs={CRUMBS}
        badges={[{ icon: MapPin, text: 'Raisen & Sehore, Madhya Pradesh' }]}
      />

      <div className="bg-surface py-14 lg:py-20">
        <div className="container-site grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:self-stretch">
            <Toc
              items={TOC}
              title="Historical index"
              note="Ratapani is one of very few places where a living tiger habitat surrounds a World Heritage site of prehistoric art."
              cta={{ href: PAGES.bookSafari.path, label: 'Plan your safari' }}
            />
          </div>

          <div className="flex flex-col gap-20 lg:col-span-8">
            <div id="key-takeaways" className="scroll-mt-28">
              <KeyTakeaways
                title="Ratapani’s history at a glance"
                items={[
                  { icon: History, title: 'Prehistoric continuity', text: 'Bhimbetka’s 750+ rock shelters show human life from the Stone Age to the 2nd century BCE (UNESCO, 2003).' },
                  { icon: Castle, title: 'Kingdoms and forts', text: 'Raja Bhoj’s Bhojpur, Ashokan inscriptions at Saru Maru and the Gond hill fort of Ginnorgarh.' },
                  { icon: Crown, title: 'Bhopal State era', text: 'The forests south of Bhopal served as princely hunting and timber grounds until 1947.' },
                  { icon: ShieldCheck, title: 'Modern protection', text: 'Wildlife sanctuary in 1976; notified as India’s 57th tiger reserve on 2 December 2024.' },
                ]}
              />
            </div>

            {/* Timeline */}
            <section id="timeline" className="scroll-mt-28" aria-labelledby="timeline-title">
              <SectionHeading eyebrow="Chronological field dossier" tone="ochre" title="Ratapani Timeline: 100,000 Years in Seven Chapters" id="timeline-title" />
              <ol className="relative space-y-14 pl-8 sm:pl-12">
                <span className="absolute bottom-3 left-3 top-3 w-0.5 bg-surface-highest sm:left-4" aria-hidden />
                {TIMELINE.map((m) => (
                  <li key={m.id} id={m.id} className="reveal relative scroll-mt-28">
                    <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-surface shadow-sm sm:-left-12" aria-hidden>
                      <span className={`h-3.5 w-3.5 rounded-full ${m.dot}`} />
                    </span>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-1 font-label text-label-md uppercase ${m.chip}`}>{m.date}</span>
                      <span className="font-label text-label-sm uppercase text-outline">{m.era}</span>
                    </div>
                    <h3 className="mb-3 text-headline-sm text-ink md:text-headline-md">{m.title}</h3>
                    <div className="prose-rp">
                      {m.text.map((t) => (
                        <p key={t.slice(0, 20)}>{t}</p>
                      ))}
                    </div>
                    {m.image && (
                      <figure className="mt-4 overflow-hidden rounded-card bg-surface-low shadow-sm">
                        <div className="relative h-72 bg-forest sm:h-96">
                          <Img name={m.image} sizes="(min-width: 1024px) 60vw, 100vw" />
                        </div>
                        <figcaption className="flex items-center gap-2 p-3 font-label text-label-sm text-ink-soft">
                          <m.captionIcon className="h-4 w-4 shrink-0 text-tertiary" aria-hidden />
                          {m.caption}
                        </figcaption>
                      </figure>
                    )}
                    {m.badge && (
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface-low p-4">
                        <div className="flex items-center gap-3">
                          <Gavel className="h-6 w-6 text-primary" aria-hidden />
                          <div>
                            <p className="font-label text-label-sm uppercase text-primary">{m.badge.title}</p>
                            <p className="text-sm text-ink">{m.badge.text}</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-surface-highest px-3 py-1 font-label text-label-sm uppercase text-ink-soft">{m.badge.chipText}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </section>

            {/* Name */}
            <section id="name" className="reveal relative scroll-mt-28 overflow-hidden rounded-[1.75rem] bg-secondary p-8 text-white shadow-md sm:p-12">
              <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" viewBox="0 0 800 500" preserveAspectRatio="none" aria-hidden>
                {[100, 160, 220, 280].map((r) => (
                  <circle key={r} cx="400" cy="250" r={r} fill="none" stroke="#fff" strokeWidth="2" />
                ))}
              </svg>
              <div className="relative max-w-2xl">
                <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary-fixed/20 px-3 py-1 font-label text-label-sm uppercase text-secondary-fixed">
                  <Scroll className="h-4 w-4" aria-hidden /> Name &amp; place
                </p>
                <h2 className="mb-4 text-[2rem] leading-tight md:text-headline-lg">What Does the Name “Ratapani” Refer To?</h2>
                <p className="mb-4 text-lg leading-relaxed text-white/85">
                  <strong className="text-secondary-fixed">Pani</strong> means water in Hindi, and water defines this forest. The sanctuary
                  shares its name with the <strong>Ratapani Dam</strong> reservoir in the heart of the landscape, one of the two major
                  waterbodies here along with Barna Reservoir.
                </p>
                <p className="leading-relaxed text-white/80">
                  The reservoirs and the pools left in seasonal streams keep wildlife alive through the dry summer. Officially the area
                  is known as Ratapani Wildlife Sanctuary (since 1976) and Ratapani Tiger Reserve (since 2024); locally many people
                  still simply call it “Ratapani jungle”.
                </p>
              </div>
            </section>

            {/* Communities */}
            <section id="communities" className="scroll-mt-28" aria-labelledby="communities-title">
              <SectionHeading
                eyebrow="People of the forest"
                title="Gond and Adivasi Communities of Ratapani"
                id="communities-title"
                intro="Long before boundaries were drawn, Gond and other Adivasi communities lived in and around these forests, collecting mahua flowers, tendu leaves and firewood and reading the jungle’s signs."
              />
              <div className="reveal grid grid-cols-1 items-center gap-6 rounded-[1.75rem] bg-surface-low p-6 sm:p-8 md:grid-cols-12">
                <div className="flex flex-col gap-4 md:col-span-7">
                  <span className="font-label text-label-sm uppercase text-tertiary">Living with the tiger</span>
                  <h3 className="text-headline-sm text-ink md:text-headline-md">Villages inside and around the reserve</h3>
                  <p className="leading-relaxed text-ink-soft">
                    About ten villages lie inside the Ratapani sanctuary and around a hundred surround the reserve. Many families still
                    depend on the forest for daily needs. Under tiger reserve rules the buffer zone supports local livelihoods, while
                    eco-tourism (guides, drivers and safari services) creates new jobs for young people from fringe villages.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      [Leaf, 'Mahua & tendu'],
                      [Users, 'Local safari guides'],
                      [Palette, 'Painted mud homes'],
                    ].map(([Icon, t]) => (
                      <span key={t} className="flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 font-label text-label-sm text-ink">
                        <Icon className="h-4 w-4 text-primary" aria-hidden /> {t}
                      </span>
                    ))}
                  </div>
                </div>
                <figure className="overflow-hidden rounded-card shadow-sm md:col-span-5">
                  <div className="relative h-80 bg-forest">
                    <Img name="adivasi-family-village-ratapani" sizes="(min-width: 768px) 30vw, 100vw" />
                  </div>
                  <figcaption className="bg-surface p-3 font-label text-label-sm leading-tight text-ink-soft">
                    A painted mud house in a forest-edge village of the Vindhya hills.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* Numbers */}
            <section id="numbers" className="scroll-mt-28" aria-labelledby="numbers-title">
              <SectionHeading eyebrow="Ecological resurgence" tone="moss" title="Ratapani’s Conservation Story in Numbers" id="numbers-title" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ['Sanctuary since', '1976', 'Year declared', 'Protected under the Wildlife (Protection) Act, 1972.', 'text-ink'],
                  ['Tiger reserve', '2 Dec 2024', 'Notified', 'MP’s 8th and India’s 57th tiger reserve.', 'text-tertiary'],
                  ['Total area', '1,271.5', 'km² core + buffer', '763.8 km² core and 507.7 km² buffer.', 'text-secondary'],
                  ['Tigers', '56', '2022 census', 'Over 70 estimated from pugmarks and other signs.', 'text-primary'],
                ].map(([label, value, unit, text, color], i) => (
                  <div key={label} className="reveal flex flex-col justify-between rounded-card bg-surface-low p-6 shadow-sm" style={{ '--reveal-delay': `${i * 80}ms` }}>
                    <span className="font-label text-label-sm uppercase text-outline">{label}</span>
                    <div className="my-3">
                      <span className={`block font-serif text-[2.1rem] font-semibold leading-none ${color}`}>{value}</span>
                      <span className="font-label text-label-md uppercase text-primary">{unit}</span>
                    </div>
                    <p className="text-sm text-ink-soft">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <Faq faqs={FAQS} title="History of Ratapani: FAQs" eyebrow="Frequently asked" />

            <RelatedCards
              cards={[
                { href: PAGES.tigerReserve.path, image: 'tiger-on-sandstone-rock', tag: 'Tiger reserve', title: 'Ratapani Tiger Reserve', text: 'Core and buffer zones, tiger numbers, corridors and conservation challenges.' },
                { href: PAGES.sanctuary.path, image: 'paradise-flycatcher-palash', tag: 'Biodiversity', title: 'Ratapani Wildlife Sanctuary', text: 'Teak and bamboo forests, 249 bird species, reservoirs and sanctuary rules.' },
                { href: PAGES.gates.path, image: 'bhimbetka-rock-shelter-interior', tag: 'Plan your visit', title: 'Ratapani Safari Gates', text: 'Jhiri, Delawadi and the Bhimbetka gate, compared side by side.' },
              ]}
            />

            <Sources
              items={[
                { label: 'UNESCO World Heritage Centre: Rock Shelters of Bhimbetka', url: 'https://whc.unesco.org/en/list/925/' },
                { label: 'Mongabay India: Teething troubles at India’s latest tiger reserve (2025)', url: 'https://india.mongabay.com/2025/01/teething-troubles-or-conservation-challenges-at-indias-latest-tiger-reserve/' },
                { label: 'MP Tourism: Ratapani Tiger Reserve', url: 'https://mptourism.com/ratapani-tiger-reserve-wilderness-near-bhopal.html' },
                { label: 'MP Forest Department e-brochure: Ratapani', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
              ]}
            />
          </div>
        </div>
      </div>

      <CtaBand
        eyebrow="Witness 100,000 years in person"
        title="Walk Among Ancient Shelters & Tiger Tracks"
        text="Morning and evening safari permits are issued by the Madhya Pradesh Forest Department. Plan your visit with our step-by-step booking guide."
        primary={{ href: PAGES.bookSafari.path, label: 'Book tiger safari' }}
        secondary={{ href: PAGES.gates.path, label: 'Safari gates' }}
      />
    </>
  );
}

