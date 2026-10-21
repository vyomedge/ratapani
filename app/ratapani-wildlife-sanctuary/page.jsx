import { Waves, Route, Trees, History, Mountain, Droplets, Landmark, Check, Ban, Info, TreeDeciduous, Sprout, Flower2, Eye, Sparkles } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import { PageHero, KeyTakeaways, Faq, RelatedCards, CtaBand, SectionHeading, TableWrap, Sources } from '@/components/ui';
import { PAGES } from '@/lib/site';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const META = {
  title: 'Ratapani Wildlife Sanctuary: Area, Forest, Wildlife & Rules',
  description:
    'Ratapani Wildlife Sanctuary (est. 1976) near Bhopal: 825 km² of teak and bamboo forest, reservoirs, flora, wildlife, rules and sanctuary vs tiger reserve.',
  path: PAGES.sanctuary.path,
  image: 'ratapani-wildlife-sanctuary-aerial',
  keywords: [
    'Ratapani Wildlife Sanctuary',
    'Ratapani sanctuary area',
    'Ratapani sanctuary Bhopal',
    'Ratapani forest',
    'Ratapani wildlife sanctuary established',
    'Ratapani sanctuary Raisen',
  ],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Explore' }, { name: 'Ratapani Wildlife Sanctuary', path: META.path }];

const FACTS = [
  ['Established', '1976', 'Wildlife sanctuary'],
  ['Sanctuary area', '≈ 825 km²', 'Now core of the tiger reserve'],
  ['Districts', 'Raisen & Sehore', 'Madhya Pradesh'],
  ['Forest type', 'Teak & bamboo', 'Dry & moist deciduous'],
  ['From Bhopal', '34 km', 'To Jhiri gate'],
];

const FOREST_TYPES = [
  {
    icon: TreeDeciduous,
    code: 'Dominant',
    title: 'Teak Forest',
    latin: 'Tectona grandis',
    text: 'Teak is the main tree of Ratapani and covers about 55% of the forest. Teak sheds its broad leaves in the dry season, turning the hills gold and opening up long sightlines for safaris.',
    share: 55,
    label: '≈ 55% of the area',
  },
  {
    icon: Trees,
    code: 'Mixed',
    title: 'Mixed Dry Deciduous Forest',
    latin: 'Mahua, tendu, salai, dhaora',
    text: 'The rest of the forest is a mix of dry deciduous species such as mahua (Madhuca longifolia), tendu (Diospyros melanoxylon) and salai (Boswellia serrata), important for wildlife and for local communities.',
    share: 45,
    label: '≈ 45% of the area',
  },
  {
    icon: Sprout,
    code: 'Understorey',
    title: 'Bamboo & Saja Patches',
    latin: 'Dendrocalamus strictus',
    text: 'Bamboo grows through the other forest types and covers about a quarter of the forest, with evergreen saja patches along moist valleys. These thickets give tigers and leopards shade and cover.',
    share: 25,
    label: '≈ 25% (overlapping)',
  },
];

const FLORA = [
  { image: 'palash-flame-of-the-forest', season: 'Spring bloom', latin: 'Butea monosperma', title: 'Flame of the Forest (Palash)', text: 'From February to April palash trees burst into bright orange flowers across the bare hills, feeding sunbirds, mynas and langurs.', badge: 'Nectar for birds', icon: Flower2 },
  { image: 'indian-ghost-tree-kullu', season: 'Rocky slopes', latin: 'Sterculia urens', title: 'Indian Ghost Tree (Kullu)', text: 'Kullu grows on rocky slopes and cliffs. Its pale, peeling bark glows white in the dry season, and it yields karaya gum.', badge: 'Cliff-dweller', icon: Eye },
  { image: 'mahua-tree-teak-woodland', season: 'Cultural keystone', latin: 'Madhuca longifolia', title: 'Mahua & Teak', text: 'Mahua flowers fall at dawn in spring and are eaten by sloth bears, deer and people alike. Mahua is central to Gond food and culture.', badge: 'Food for bears & people', icon: Sparkles },
];

const DOS = [
  ['Book through the official portal', 'Use forest.mponline.gov.in or the gate counter; only registered vehicles enter at Jhiri and Delawadi.'],
  ['Stay inside the vehicle', 'Get down only at designated points, and follow your forest guide’s instructions at all times.'],
  ['Keep quiet and listen', 'Alarm calls of chital, sambar and langur often reveal a moving tiger or leopard.'],
  ['Respect shift timings', 'Enter and exit within your permitted round; timings follow sunrise and sunset.'],
  ['Wear muted colours', 'Khaki, olive and brown blend into the forest; carry water in a reusable bottle.'],
];
const DONTS = [
  ['No plastic or litter', 'Carry all waste back with you. Plastic is not allowed inside the forest.'],
  ['No feeding or teasing animals', 'Feeding changes natural behaviour and is an offence under the Wildlife (Protection) Act.'],
  ['No honking, music or loud talk', 'Noise disturbs wildlife and other visitors.'],
  ['No smoking or fires', 'Dry teak forest catches fire easily in summer.'],
  ['Don’t remove anything', 'Plants, seeds, antlers, stones and artefacts must stay where they are.'],
];

const FAQS = [
  {
    q: 'What is the area of Ratapani Wildlife Sanctuary?',
    a: 'Ratapani Wildlife Sanctuary covers about 825 km² (the MP Forest Department lists 825.90 km²) in Raisen and Sehore districts. Since December 2024 it forms the heart of Ratapani Tiger Reserve, which totals 1,271.5 km² including a 507.7 km² buffer.',
  },
  {
    q: 'When was Ratapani declared a wildlife sanctuary?',
    a: 'Ratapani was declared a wildlife sanctuary in 1976 under the Wildlife (Protection) Act, 1972.',
  },
  {
    q: 'Which animals live in Ratapani Wildlife Sanctuary?',
    a: 'Ratapani has more than 35 mammal species including tiger, leopard, sloth bear, dhole (wild dog), striped hyena, golden jackal, chital, sambar, nilgai, four-horned antelope and wild boar, plus 249 bird species, 33 reptiles, 10 amphibians and 104 butterflies recorded by the Forest Department.',
  },
  {
    q: 'Is Ratapani Sanctuary open all year?',
    a: 'The Forest Department lists 15 October to 15 June as the best time to visit. Safari routes generally pause during the monsoon, so check the official booking portal for current dates before planning a visit between July and mid-October.',
  },
  {
    q: 'Is Ratapani a sanctuary or a tiger reserve?',
    a: 'Both. Ratapani has been a wildlife sanctuary since 1976 and was notified as a tiger reserve on 2 December 2024. The tiger reserve adds a buffer zone around the sanctuary and brings Project Tiger funding and a tiger conservation plan.',
  },
];

export default function SanctuaryPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ ...META, type: 'Article' })} />
      <PageHero
        image={META.image}
        eyebrow="Vindhyan forest · Madhya Pradesh Forest Department"
        title="Ratapani Wildlife Sanctuary"
        intro="About 825 km² of teak and bamboo forest in the Vindhya hills, protected since 1976. Reservoirs, gorges and plateaus here shelter tigers, leopards, sloth bears and 249 kinds of birds, right on Bhopal’s doorstep."
        crumbs={CRUMBS}
        badges={[
          { icon: Mountain, text: 'Hills, plateaus & valleys' },
          { icon: Droplets, text: 'Ratapani Dam & Barna Reservoir' },
          { icon: Landmark, text: 'Surrounds UNESCO Bhimbetka' },
        ]}
      />

      {/* Quick facts */}
      <section aria-label="Quick facts" className="relative z-10 -mt-10">
        <div className="container-site">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card bg-ochre/20 shadow-lift md:grid-cols-5">
            {FACTS.map(([k, v, s], i) => (
              <div key={k} className={`bg-[#E8DFC7] p-5 ${i === FACTS.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}>
                <dt className="font-label text-label-sm uppercase text-tertiary">{k}</dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-ink">{v}</dd>
                <dd className="text-xs text-ink-soft">{s}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="bg-surface py-16 md:py-20">
        <div className="container-site space-y-24">
          <KeyTakeaways
            eyebrow="Conservation dossier"
            title="Ratapani Wildlife Sanctuary in 4 points"
            items={[
              { icon: Waves, title: 'Water through the dry season', text: 'Ratapani Dam, Barna Reservoir and pools in seasonal streams hold water through summer and draw wildlife to their banks.' },
              { icon: Route, title: 'A tiger landscape near a capital', text: 'Tigers from Ratapani range up to the edge of Bhopal, making it one of the few tiger forests beside a state capital.' },
              { icon: Trees, title: 'Teak-dominated canopy', text: 'Teak covers about 55% of the forest, with bamboo in about a quarter and mixed deciduous trees elsewhere.' },
              { icon: History, title: 'Prehistoric heart', text: 'The UNESCO-listed Bhimbetka rock shelters lie within the sanctuary, so wildlife and heritage meet in one trip.' },
            ]}
          />

          {/* Overview */}
          <section aria-labelledby="overview-title" className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Overview" title="Central India’s Forest on Bhopal’s Doorstep" id="overview-title" />
              <blockquote className="reveal border-l-4 border-ochre pl-5 font-serif text-2xl italic leading-snug text-ink">
                Few capitals anywhere have wild tigers living within an hour’s drive. Bhopal has Ratapani.
              </blockquote>
            </div>
            <div className="prose-rp reveal text-lg lg:col-span-7">
              <p>
                <strong>Ratapani Wildlife Sanctuary</strong> was declared in 1976 under the Wildlife (Protection) Act, 1972. It spreads
                across about 825 km² of Raisen and Sehore districts on the southern edge of the Vindhya range, with the Jhiri gate only
                about 34 km from Bhopal railway station.
              </p>
              <p>
                The terrain is undulating: hills, plateaus, valleys and plains cut by seasonal streams. Some pools along these streams
                hold water even in summer, and together with Ratapani Dam and Barna Reservoir they keep the forest alive through the dry
                months.
              </p>
              <p>
                In December 2024 the sanctuary became the heart of the new <a href={PAGES.tigerReserve.path}>Ratapani Tiger Reserve</a>,
                which adds a buffer zone around it. Visitors explore it through three safari gates (Jhiri, Delawadi and Bhimbetka)
                described in our <a href={PAGES.gates.path}>Ratapani safari gates guide</a>.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ['Mammals', '35+'],
                  ['Birds', '249'],
                  ['Butterflies', '104'],
                  ['Reptiles', '33'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-surface-low p-4 text-center">
                    <dd className="font-serif text-3xl font-semibold text-primary">{v}</dd>
                    <dt className="font-label text-label-sm uppercase text-outline">{k} species</dt>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Geography */}
          <section aria-labelledby="geo-title">
            <SectionHeading
              eyebrow="Topography & water"
              title="Terrain of Hills, Gorges & Reservoirs"
              intro="Sandstone ridges of the Vindhya range break into gorges, plateaus and valleys, with streams that drain south towards the Narmada."
              id="geo-title"
              tone="moss"
            />
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="reveal">
                <div className="relative h-80 overflow-hidden rounded-card bg-forest shadow-lg md:h-[420px]">
                  <Img name="ratapani-sandstone-river-gorge" sizes="(min-width: 1024px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="font-label text-label-sm uppercase text-amber">Vindhyan river country</p>
                    <p className="font-serif text-2xl">Gorges, cliffs & teak valleys</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ['Major waterbodies', '2', 'Ratapani Dam, Barna'],
                    ['Teak cover', '55%', 'Of forest area'],
                    ['Bamboo', '¼', 'Of forest area'],
                  ].map(([k, v, s]) => (
                    <div key={k} className="rounded-xl bg-surface-low p-4">
                      <p className="font-label text-label-sm uppercase text-outline">{k}</p>
                      <p className="font-serif text-2xl font-semibold text-ink">{v}</p>
                      <p className="text-xs text-ink-soft">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal space-y-8">
                {[
                  [Droplets, 'Ratapani Dam & Barna Reservoir', 'The two major waterbodies of the landscape. In the hot months of April and May, herds of chital and sambar gather along their banks, and so do the predators that hunt them. The sanctuary also borders the Kolar reservoir country to the west.'],
                  [Mountain, 'Vindhyan sandstone and rock shelters', 'Ratapani sits on the ancient sandstone of the Vindhya range. Wind and water have carved ravines, cliffs and natural rock shelters, the same formations that sheltered Stone Age people at Bhimbetka and now shelter leopards and sloth bears.'],
                  [Waves, 'Seasonal streams and summer pools', 'Most streams run only after the monsoon, but some pools along them hold water into summer. These “water points” are where many of the best summer sightings happen.'],
                ].map(([Icon, t, d]) => (
                  <div key={t}>
                    <h3 className="mb-2 flex items-center gap-2 text-headline-sm text-ink">
                      <Icon className="h-6 w-6 text-secondary" aria-hidden /> {t}
                    </h3>
                    <p className="leading-relaxed text-ink-soft">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Forest types */}
          <section aria-labelledby="forest-title">
            <SectionHeading
              eyebrow="Forest types"
              title="Three Forest Ecosystems of Ratapani"
              intro="Ratapani’s forests are dry and moist deciduous, structured by teak, mixed species and bamboo."
              id="forest-title"
              align="center"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {FOREST_TYPES.map((f, i) => (
                <article key={f.title} className="reveal flex flex-col rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 90}ms` }}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-soft text-secondary">
                      <f.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="font-label text-label-sm uppercase text-outline">{f.code}</span>
                  </div>
                  <h3 className="text-headline-sm text-ink">{f.title}</h3>
                  <p className="mb-3 font-label text-label-sm italic text-outline">{f.latin}</p>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-ink-soft">{f.text}</p>
                  <div>
                    <div className="mb-1 flex justify-between font-label text-label-sm uppercase text-ink">
                      <span>Canopy share</span>
                      <span>{f.label}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-surface-high">
                      <div className="h-full rounded-full bg-moss" style={{ width: `${f.share}%` }} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Flora */}
          <section aria-labelledby="flora-title">
            <SectionHeading
              eyebrow="Flora highlights"
              tone="ochre"
              title="Botanical Icons of the Vindhyan Forest"
              intro="Three trees that define the look, seasons and food web of Ratapani."
              id="flora-title"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {FLORA.map((f, i) => (
                <article key={f.title} className="reveal group overflow-hidden rounded-card bg-white shadow-md" style={{ '--reveal-delay': `${i * 90}ms` }}>
                  <div className="relative h-64 overflow-hidden bg-forest">
                    <Img name={f.image} sizes="(min-width: 768px) 33vw, 100vw" className="card-img-zoom" />
                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 font-label text-label-sm uppercase text-white backdrop-blur-md">{f.season}</span>
                  </div>
                  <div className="p-6">
                    <p className="font-label text-label-sm italic text-outline">{f.latin}</p>
                    <h3 className="mb-2 text-headline-sm text-ink">{f.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-ink-soft">{f.text}</p>
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary-soft px-3 py-1 font-label text-label-sm text-secondary">
                      <f.icon className="h-4 w-4" aria-hidden /> {f.badge}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Comparison */}
          <section aria-labelledby="compare-title">
            <SectionHeading
              eyebrow="Sanctuary vs tiger reserve"
              title="Ratapani Wildlife Sanctuary vs Ratapani Tiger Reserve"
              intro="Ratapani is both. Here is what changed when the 1976 sanctuary became a tiger reserve in 2024."
              id="compare-title"
            />
            <TableWrap caption="Comparison of Ratapani Wildlife Sanctuary and Ratapani Tiger Reserve">
              <thead>
                <tr>
                  <th scope="col">Attribute</th>
                  <th scope="col">Wildlife Sanctuary</th>
                  <th scope="col">Tiger Reserve</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Year</td><td>1976</td><td>Notified 2 December 2024</td></tr>
                <tr><td>Legal basis</td><td>Wildlife (Protection) Act, 1972 (Section 18)</td><td>Section 38V of the same Act, on NTCA approval</td></tr>
                <tr><td>Area</td><td>≈ 825 km²</td><td>1,271.5 km² (763.8 km² core + 507.7 km² buffer)</td></tr>
                <tr><td>Zoning</td><td>Single sanctuary boundary</td><td>Core (critical tiger habitat) plus a multiple-use buffer</td></tr>
                <tr><td>Planning</td><td>Sanctuary management plan</td><td>Mandatory Tiger Conservation Plan</td></tr>
                <tr><td>Funding</td><td>Mainly state budget</td><td>State budget plus central Project Tiger funds</td></tr>
                <tr><td>Rank</td><td>One of MP’s wildlife sanctuaries</td><td>MP’s 8th and India’s 57th tiger reserve</td></tr>
              </tbody>
            </TableWrap>
            <p className="reveal mt-4 flex items-start gap-2 text-sm text-ink-soft">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              In everyday use, “Ratapani Sanctuary”, “Ratapani Wildlife Sanctuary” and “Ratapani Tiger Reserve” all refer to the same forest.
            </p>
          </section>

          {/* Rules */}
          <section aria-labelledby="rules-title">
            <SectionHeading
              eyebrow="Responsible tourism"
              title="Ratapani Sanctuary Rules: Do’s and Don’ts"
              intro="Visitors are guests in a wild home. These rules protect wildlife and keep you safe."
              id="rules-title"
              tone="moss"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                ['Do’s', 'Good practice', DOS, Check, 'bg-secondary-soft text-secondary', 'border-secondary'],
                ['Don’ts', 'Strictly not allowed', DONTS, Ban, 'bg-tertiary-fixed text-tertiary', 'border-tertiary'],
              ].map(([t, s, list, Icon, chip, border]) => (
                <div key={t} className={`reveal rounded-card border-t-4 bg-white p-6 shadow-md ${border}`}>
                  <h3 className="text-headline-sm text-ink">{t}</h3>
                  <p className="mb-5 font-label text-label-sm uppercase text-outline">{s}</p>
                  <ul className="space-y-4">
                    {list.map(([a, b]) => (
                      <li key={a} className="flex gap-3">
                        <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${chip}`}>
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span>
                          <strong className="block text-ink">{a}</strong>
                          <span className="text-sm text-ink-soft">{b}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="mx-auto max-w-4xl">
            <Faq faqs={FAQS} title="Ratapani Wildlife Sanctuary: FAQs" eyebrow="Field inquiries" />
          </div>

          <RelatedCards
            cards={[
              { href: PAGES.history.path, image: 'ginnorgarh-fort-jungle-walls', tag: 'History', title: 'History of Ratapani', text: 'Gond forts, Bhopal State forests and the road from 1976 sanctuary to tiger reserve.' },
              { href: PAGES.gates.path, image: 'safari-gypsy-teak-forest-road', tag: 'Safari entry', title: 'Ratapani Safari Gates', text: 'Jhiri, Delawadi and Bhimbetka gates: distance, booking and terrain.' },
              { href: `${PAGES.history.path}#prehistory`, image: 'bhimbetka-rock-shelters-unesco', tag: 'UNESCO heritage', title: 'Bhimbetka Rock Shelters', text: 'The prehistoric painted shelters inside the Ratapani forest.' },
            ]}
          />

          <Sources
            items={[
              { label: 'MP Forest Department e-brochure: Ratapani Wildlife Sanctuary', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
              { label: 'Wikipedia: Ratapani Tiger Reserve', url: 'https://en.wikipedia.org/wiki/Ratapani_Tiger_Reserve' },
              { label: 'MP Tourism: Ratapani Tiger Reserve', url: 'https://mptourism.com/ratapani-tiger-reserve-wilderness-near-bhopal.html' },
            ]}
          />
        </div>
      </div>

      <CtaBand
        eyebrow="Begin your sanctuary drive"
        title="Reserve Your Ratapani Safari for the Coming Season"
        text="Vehicle quotas at each gate are small. Learn how to book your permit online and which gate suits you."
        primary={{ href: PAGES.bookSafari.path, label: 'How to book a safari' }}
        secondary={{ href: PAGES.gates.path, label: 'Compare safari gates' }}
      />
    </>
  );
}
