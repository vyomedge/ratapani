import Link from 'next/link';
import {
  ArrowRight,
  ArrowDown,
  PawPrint,
  Snowflake,
  Sun,
  CloudRain,
  Landmark,
  Compass,
  CalendarDays,
  MapPin,
  Mail,
} from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import CountUp from '@/components/CountUp';
import WildlifeCarousel from '@/components/WildlifeCarousel';
import { SectionHeading, Faq, RockArtStrip } from '@/components/ui';
import { PAGES, OFFICIAL_BOOKING_URL } from '@/lib/site';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const META = {
  title: 'Ratapani Tiger Reserve & Jungle Safari Guide | Near Bhopal',
  description:
    'Plan your Ratapani jungle safari: online booking, gates, fees, timings, tigers and Bhimbetka. The complete guide to Ratapani Tiger Reserve near Bhopal.',
  path: '/',
  image: 'ratapani-tiger-walking-teak-forest',
  keywords: [
    'Ratapani Tiger Reserve',
    'Ratapani jungle safari',
    'Ratapani Wildlife Sanctuary',
    'Ratapani safari booking',
    'jungle safari near Bhopal',
    'tiger reserve near Bhopal',
    'Bhimbetka',
    'Madhya Pradesh tiger reserve',
  ],
};

export const metadata = { ...pageMetadata(META), title: { absolute: META.title } };

const STATS = [
  { label: 'Reserve area', value: 1271, suffix: '', unit: 'km²', note: '763.8 km² core + 507.7 km² buffer' },
  { label: 'Tigers', value: 56, suffix: '+', unit: 'counted', note: '2022 tiger census; 70+ estimated' },
  { label: 'Bird species', value: 249, suffix: '', unit: 'recorded', note: 'Per MP Forest Department' },
  { label: 'From Bhopal', value: 34, suffix: '', unit: 'km', note: 'To Jhiri safari gate' },
  { label: 'Rock shelters', value: 750, suffix: '+', unit: 'at Bhimbetka', note: 'UNESCO World Heritage Site' },
];

const PILLARS = [
  {
    image: 'vindhya-sandstone-ridges-ratapani',
    tag: 'Deep time',
    title: 'History of Ratapani',
    text: 'Stone Age shelters, Gond forts, princely-era forests and a 1976 sanctuary that became a tiger reserve in 2024.',
    href: PAGES.history.path,
  },
  {
    image: 'bengal-tiger-ratapani-tiger-reserve',
    tag: 'Apex protection',
    title: 'Ratapani Tiger Reserve',
    text: 'Madhya Pradesh’s 8th tiger reserve: 1,271 km² of core and buffer forest, minutes from the state capital.',
    href: PAGES.tigerReserve.path,
  },
  {
    image: 'indian-leopard-ratapani',
    tag: 'Forest & fauna',
    title: 'Wildlife of Ratapani',
    text: 'Tigers, leopards, sloth bears, dholes, deer and 249 bird species: a field guide to Ratapani’s animals.',
    href: PAGES.wildlife.path,
  },
  {
    image: 'bhimbetka-rock-paintings-hunting-scene',
    tag: 'UNESCO heritage',
    title: 'Bhimbetka Rock Shelters',
    text: 'Prehistoric rock paintings of hunters, deer and bison inside the Ratapani forest.',
    href: PAGES.bhimbetka.path,
  },
  {
    image: 'ratapani-safari-gate-jeep',
    tag: 'Safari entry',
    title: 'Safari Gates: Jhiri, Delawadi, Bhimbetka',
    text: 'Compare the three entry gates by distance from Bhopal, booking type and terrain.',
    href: PAGES.gates.path,
  },
  {
    image: 'ginnorgarh-fort-ruins-ratapani',
    tag: 'Hidden landmarks',
    title: 'Ginnorgarh Fort & Old Ruins',
    text: 'A hilltop Gond fort reachable only on foot from Delawadi, famous for its birdlife and legends.',
    href: PAGES.ginnorgarh.path,
  },
];

const ANIMALS = [
  { image: 'bengal-tiger-portrait-ratapani', badge: 'Apex predator', name: 'Bengal Tiger', latin: 'Panthera tigris tigris', text: 'Ratapani’s flagship species. Tigers here also roam the forest edges near Bhopal city.', when: 'Best seen: early morning' },
  { image: 'indian-leopard-cliff-vindhya', badge: 'Solitary hunter', name: 'Indian Leopard', latin: 'Panthera pardus fusca', text: 'Uses the rocky ridges and gorges of the Vindhya hills for cover and denning.', when: 'Best seen: rocky ravines' },
  { image: 'sloth-bear-ratapani', badge: 'Frequently seen', name: 'Sloth Bear', latin: 'Melursus ursinus', text: 'One of Ratapani’s most frequently sighted large mammals, digging for termites and eating mahua flowers.', when: 'Best seen: dawn & dusk' },
  { image: 'sambar-deer-stag-ratapani', badge: 'Largest deer', name: 'Sambar Deer', latin: 'Rusa unicolor', text: 'India’s largest deer and important prey for tigers, often found near water.', when: 'Best seen: waterholes' },
  { image: 'chital-spotted-deer-herd-ratapani', badge: 'Common herbivore', name: 'Chital (Spotted Deer)', latin: 'Axis axis', text: 'Herds graze forest clearings and give sharp alarm calls when a predator moves.', when: 'Commonly spotted' },
  { image: 'indian-peafowl-ratapani', badge: 'National bird', name: 'Indian Peafowl', latin: 'Pavo cristatus', text: 'One of 249 bird species recorded in Ratapani, from vultures to kingfishers.', when: 'Valleys & clearings' },
];

const STEPS = [
  { title: 'Choose your safari gate', text: 'Jhiri and Delawadi gates can be booked online; the Bhimbetka gate is booked offline at the gate.' },
  { title: 'Pick a date & shift', text: 'Safaris run in two rounds a day: morning and evening. Choose a full vehicle or a single seat.' },
  { title: 'Book on the official portal', text: 'Reserve your permit on the MP Forest Department’s MP Online portal and pay the entry, vehicle and guide fees.' },
  { title: 'Arrive with your ID', text: 'Reach the gate early with the original photo ID used for booking. A forest guide joins every vehicle.' },
];

const SEASONS = [
  {
    icon: Snowflake,
    months: 'October to February',
    name: 'Winter',
    text: 'Pleasant days, cold mornings and lush forest after the monsoon. The safari season opens in mid-October. Ideal for families and first-time visitors.',
    temp: 'Approx. 8°C – 30°C',
    tag: 'Most comfortable',
    tone: 'bg-secondary-soft text-secondary',
  },
  {
    icon: Sun,
    months: 'March to mid-June',
    name: 'Summer',
    text: 'Teak trees shed their leaves, visibility opens up and animals gather at the remaining waterholes. The best chance of tiger sightings, but it gets very hot.',
    temp: 'Approx. 18°C – 42°C',
    tag: 'Best for sightings',
    tone: 'bg-tertiary-fixed text-tertiary',
  },
  {
    icon: CloudRain,
    months: 'Mid-June to mid-October',
    name: 'Monsoon',
    text: 'Heavy rain turns the hills green and fills the streams. Regular safari routes generally pause in the monsoon; check the portal for current status.',
    temp: 'Approx. 22°C – 36°C',
    tag: 'Green season',
    tone: 'bg-secondary-soft text-secondary',
  },
];

const FAQS = [
  {
    q: 'Where is Ratapani Tiger Reserve?',
    a: 'Ratapani Tiger Reserve is in the Vindhya hills of Madhya Pradesh, India, spread across Raisen and Sehore districts just south-east of Bhopal. The Jhiri safari gate is about 34 km from Bhopal railway station, and the Bhimbetka rock shelters lie within the Ratapani forest.',
  },
  {
    q: 'How do I book a Ratapani jungle safari?',
    a: 'Book online on the Madhya Pradesh Forest Department portal (forest.mponline.gov.in) for the Jhiri or Delawadi gates. Choose the gate, date, morning or evening round, and a full vehicle or single seat. Bhimbetka gate safaris are booked offline at the gate.',
  },
  {
    q: 'How much does a Ratapani safari cost?',
    a: 'As listed on the official portal, a full vehicle costs about ₹4,230 at Jhiri gate (₹750 entry + ₹3,000 vehicle + ₹480 guide) and about ₹3,830 at Delawadi gate (₹750 + ₹2,600 + ₹480). Single-seat bookings share the vehicle and guide fee. Fees can change, so check the portal before booking.',
  },
  {
    q: 'What is the best time to visit Ratapani?',
    a: 'The Forest Department lists 15 October to 15 June as the best time to visit Ratapani. October to February is the most comfortable, while March to June offers the best tiger sightings as animals gather near water.',
  },
  {
    q: 'How many tigers are there in Ratapani?',
    a: 'The 2022 All India Tiger Estimation recorded 56 tigers in Ratapani, and forest officials estimate more than 70 based on indirect signs such as pugmarks. Some reports put the wider Ratapani landscape at close to 90 tigers.',
  },
  {
    q: 'Can I visit Bhimbetka and do a safari on the same day?',
    a: 'Yes. Bhimbetka is about 45 km from Bhopal on the same highway as the Jhiri gate, so a morning safari followed by a visit to the Bhimbetka rock shelters is an easy day trip from Bhopal.',
  },
];

const JOURNAL = [
  { image: 'forest-staff-pugmark-monitoring', cat: 'Conservation', read: '6 min read', title: 'Inside India’s 57th Tiger Reserve', text: 'Why Ratapani waited 16 years for tiger reserve status, and what its core and buffer zones protect.', href: PAGES.tigerReserve.path },
  { image: 'tiger-pugmark-riverbed-sand', cat: 'Safari guide', read: '5 min read', title: 'How to Book a Ratapani Tiger Safari', text: 'Gates, fees, timings, documents and the mistakes to avoid when booking your permit online.', href: PAGES.bookSafari.path },
  { image: 'bhimbetka-rock-art-closeup', cat: 'Archaeology', read: '7 min read', title: '100,000 Years of Ratapani History', text: 'From Bhimbetka’s painted shelters to Ginnorgarh Fort and the birth of a sanctuary.', href: PAGES.history.path },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ ...META, type: 'WebPage' })} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0">
          <Img name="ratapani-tiger-walking-teak-forest" priority sizes="100vw" className="animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-charcoal/40 to-charcoal/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent" />
        </div>
        <div className="container-site relative z-10 flex min-h-[92svh] flex-col justify-end pb-16 pt-36 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-forest/80 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber" />
              <span className="font-label text-label-md uppercase text-primary-fixed">Tiger Reserve · Madhya Pradesh</span>
            </p>
            <h1 className="text-[2.75rem] leading-[1.04] tracking-tight text-white drop-shadow-md sm:text-[3.5rem] lg:text-display-xl">
              <span className="mb-3 block font-label text-label-lg uppercase tracking-[0.2em] text-amber">
                Ratapani Tiger Reserve &amp; Jungle Safari
              </span>
              Where Tigers Walk Among Ancient Rock Art
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand/90">
              A 1,271 km² teak forest in the Vindhya hills, just 34 km from Bhopal, where Bengal tigers share the land with the
              prehistoric paintings of Bhimbetka. Everything you need to plan a Ratapani safari, in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={PAGES.bookSafari.path} className="btn-amber">
                Plan Your Safari <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href="#discover" className="btn-ghost-light">
                Explore Ratapani
              </a>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-2 font-label text-label-sm uppercase text-sand/60">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Scroll to explore the wilderness
            <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
          </div>
        </div>
      </section>

      {/* 2. STATS */}
      <section aria-label="Ratapani at a glance" className="relative z-10 bg-forest py-10 text-sand shadow-xl">
        <dl className="container-site grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-5">
          {STATS.map((s, i) => (
            <div key={s.label} className={`flex flex-col gap-1 ${i === STATS.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}>
              <dt className="font-label text-label-sm uppercase text-amber">{s.label}</dt>
              <dd className="font-serif text-[2.2rem] font-semibold leading-none text-white">
                <CountUp value={s.value} suffix={s.suffix} />{' '}
                <span className="text-lg font-normal text-white/70">{s.unit}</span>
              </dd>
              <dd className="text-sm text-white/60">{s.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      <RockArtStrip />

      {/* 3. DISCOVER */}
      <section id="discover" className="scroll-mt-20 bg-surface py-20 md:py-24">
        <div className="container-site grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow reveal text-tertiary">What is Ratapani?</span>
            <h2 className="reveal text-[2.25rem] leading-tight tracking-tight text-ink md:text-display-lg">
              A Wilderness Awakens in the Vindhya Range
            </h2>
            <div className="reveal mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                <strong className="text-ink">Ratapani</strong> is a protected teak forest in Madhya Pradesh, declared a wildlife sanctuary
                in 1976 and notified as <strong className="text-ink">Ratapani Tiger Reserve on 2 December 2024</strong>, the state’s eighth
                and India’s 57th tiger reserve.
              </p>
              <p className="text-base">
                Rolling hills, plateaus, gorges and seasonal streams hold tigers, leopards, sloth bears and wild dogs, while the sandstone
                shelters of Bhimbetka preserve paintings left by people who watched the same animals thousands of years ago.
              </p>
            </div>
            <div className="reveal mt-8 rounded-card bg-surface-mid p-6 shadow-sm">
              <p className="mb-3 flex items-center gap-2 font-label text-label-lg uppercase text-ink">
                <PawPrint className="h-5 w-5 text-primary" aria-hidden /> Field dossier
              </p>
              <ul className="space-y-2 text-sm text-ink-soft">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tertiary" />
                  <span><strong className="text-ink">Forest type:</strong> dry and moist deciduous; teak covers about 55% and bamboo about a quarter of the forest.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tertiary" />
                  <span><strong className="text-ink">Waterbodies:</strong> Ratapani Dam and Barna Reservoir, plus pools in seasonal streams.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tertiary" />
                  <span><strong className="text-ink">Districts:</strong> Raisen and Sehore, managed by the Madhya Pradesh Forest Department.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative grid grid-cols-12 gap-4 lg:col-span-7">
            <div className="reveal group relative col-span-8 h-80 overflow-hidden rounded-card bg-forest shadow-lg md:h-[480px]">
              <Img name="ratapani-teak-forest-canopy" sizes="(min-width: 1024px) 38vw, 66vw" className="card-img-zoom" />
            </div>
            <div className="col-span-4 flex flex-col gap-4">
              <div className="reveal group relative h-36 overflow-hidden rounded-card bg-forest shadow-md md:h-56" style={{ '--reveal-delay': '100ms' }}>
                <Img name="sambar-deer-ratapani-reservoir" sizes="(min-width: 1024px) 19vw, 33vw" className="card-img-zoom" />
              </div>
              <div className="reveal group relative h-40 overflow-hidden rounded-card bg-secondary shadow-md md:h-[248px]" style={{ '--reveal-delay': '200ms' }}>
                <Img name="ratapani-dam-reservoir-dusk" sizes="(min-width: 1024px) 19vw, 33vw" className="card-img-zoom" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="font-label text-label-sm uppercase text-white">Ratapani Dam</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-4 flex max-w-xs items-center gap-4 rounded-xl bg-white p-4 shadow-xl sm:left-12">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-soft">
                <Compass className="h-5 w-5 text-secondary" aria-hidden />
              </span>
              <div>
                <p className="font-label text-label-sm uppercase text-outline">Notified 2 Dec 2024</p>
                <p className="font-serif text-xl text-ink">MP’s 8th Tiger Reserve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE GRID */}
      <section className="bg-surface-low py-20 md:py-24">
        <div className="container-site">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="reveal max-w-xl">
              <span className="eyebrow text-primary">Ratapani guides</span>
              <h2 className="text-[2rem] leading-tight tracking-tight text-ink md:text-headline-lg">Key Pillars of the Ratapani Landscape</h2>
            </div>
            <p className="reveal max-w-md text-ink-soft">
              From prehistoric rock art to tiger corridors, every side of Ratapani explained by topic.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Link
                key={p.title}
                href={p.href}
                className="reveal group relative flex h-[400px] flex-col justify-end overflow-hidden rounded-card bg-forest p-6 shadow-md transition-shadow hover:shadow-2xl"
                style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
              >
                <div className="absolute inset-0">
                  <Img name={p.image} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="card-img-zoom" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
                <div className="relative z-10">
                  <span className="mb-1 block font-label text-label-sm uppercase text-amber">{p.tag}</span>
                  <h3 className="mb-2 text-headline-sm text-white md:text-headline-md">{p.title}</h3>
                  <p className="mb-4 text-sm text-white/80">{p.text}</p>
                  <span className="inline-flex items-center gap-1 font-label text-label-md uppercase text-amber transition-colors group-hover:text-white">
                    Explore guide <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WILDLIFE CAROUSEL */}
      <section className="overflow-hidden bg-surface py-20 md:py-24">
        <WildlifeCarousel
          heading={
            <div className="reveal">
              <span className="eyebrow text-tertiary">Ratapani wildlife</span>
              <h2 className="text-[2.25rem] leading-tight tracking-tight text-ink md:text-display-lg">Animals of the Teak Forest</h2>
              <Link href={PAGES.wildlife.path} className="mt-3 inline-flex items-center gap-1 font-label text-label-md uppercase text-primary">
                Full wildlife guide <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          }
        >
          {ANIMALS.map((a) => (
            <article key={a.name} className="group flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-card bg-surface-mid shadow-sm sm:w-[320px]">
              <div className="relative h-64 overflow-hidden bg-forest">
                <Img name={a.image} sizes="320px" className="card-img-zoom" />
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 font-label text-label-sm uppercase text-white backdrop-blur-md">
                  {a.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-headline-sm text-ink">{a.name}</h3>
                  <p className="font-label text-label-sm italic text-outline">{a.latin}</p>
                  <p className="mt-2 text-sm text-ink-soft">{a.text}</p>
                </div>
                <span className="mt-4 block font-label text-label-sm uppercase text-primary">{a.when}</span>
              </div>
            </article>
          ))}
        </WildlifeCarousel>
      </section>

      {/* 6. SAFARI PLANNING */}
      <section id="safari-planning" className="bg-forest py-20 text-sand md:py-24">
        <div className="container-site grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="reveal relative h-[420px] overflow-hidden rounded-card shadow-2xl md:h-[560px] lg:col-span-5">
            <Img name="ratapani-jungle-safari-jeep" sizes="(min-width: 1024px) 40vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            <div className="absolute inset-x-6 bottom-6 rounded-xl bg-forest-deep/85 p-4 backdrop-blur-md">
              <span className="mb-1 block font-label text-label-sm uppercase text-amber">Official forest safaris</span>
              <p className="text-sm text-white/90">Run by the Madhya Pradesh Forest Department, with a trained guide in every vehicle.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow reveal text-amber">Safari planning</span>
            <h2 className="reveal mb-8 text-[2.25rem] leading-tight tracking-tight text-white md:text-display-lg">
              How to Book a Ratapani Jungle Safari
            </h2>
            <ol className="mb-10 space-y-4">
              {STEPS.map((s, i) => (
                <li key={s.title} className="reveal flex items-start gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10" style={{ '--reveal-delay': `${i * 80}ms` }}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber font-label font-bold text-charcoal">{i + 1}</span>
                  <div>
                    <h3 className="mb-1 text-headline-sm text-white">{s.title}</h3>
                    <p className="text-sm text-white/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="reveal flex flex-wrap gap-4">
              <Link href={PAGES.bookSafari.path} className="btn-amber">
                Full booking guide <CalendarDays className="h-4 w-4" aria-hidden />
              </Link>
              <a href={OFFICIAL_BOOKING_URL} target="_blank" rel="noopener" className="btn-ghost-light">
                Official MP Online portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEASONS */}
      <section className="bg-surface-high py-20 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Best time to visit Ratapani"
            title="Seasons of the Ratapani Forest"
            intro="The Forest Department recommends visiting between 15 October and 15 June. Each season changes the colour, light and wildlife behaviour of the teak forest."
            align="center"
            tone="ochre"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SEASONS.map((s, i) => (
              <article key={s.name} className="reveal flex flex-col justify-between rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 90}ms` }}>
                <div>
                  <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${s.tone}`}>
                    <s.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="mb-1 block font-label text-label-sm uppercase text-primary">{s.months}</span>
                  <h3 className="mb-3 text-headline-md text-ink">{s.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
                <div className="flex justify-between gap-2 rounded-xl bg-surface-low p-3 font-label text-label-sm text-ink">
                  <span>{s.temp}</span>
                  <span className="font-bold text-secondary">{s.tag}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link href={PAGES.bestTime.path} className="btn-outline">
              Month-by-month guide &amp; safari timings
            </Link>
          </div>
        </div>
      </section>

      {/* 8. HERITAGE */}
      <section className="relative overflow-hidden bg-forest py-24 text-sand">
        <div className="container-site grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full bg-ochre/30 px-3 py-1 text-tertiary-dim">
              <Landmark className="h-4 w-4" aria-hidden />
              <span className="font-label text-label-sm uppercase">UNESCO World Heritage Site · 2003</span>
            </p>
            <h2 className="reveal mb-6 text-[2.25rem] leading-tight tracking-tight text-white md:text-display-lg">
              Prehistoric Art in the Tiger’s Backyard
            </h2>
            <p className="reveal mb-4 text-lg leading-relaxed text-white/90">
              Inside the Ratapani forest lie the <strong>Bhimbetka rock shelters</strong>: more than 750 sandstone shelters spread over
              about 10 km, some lived in more than 100,000 years ago.
            </p>
            <p className="reveal mb-8 leading-relaxed text-white/70">
              Painted in red, white and green mineral pigments, the walls show hunters with bows, dancers, deer, bison, boar and big
              cats. The earliest paintings date back at least 10,000 years, making Ratapani one of the few places where you can see
              wild tigers and Stone Age art on the same day.
            </p>
            <Link href={PAGES.bhimbetka.path} className="btn-ochre reveal">
              Explore Bhimbetka rock shelters <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="reveal">
            <div className="rounded-card bg-black/40 p-2 shadow-2xl">
              <div className="relative h-80 overflow-hidden rounded-xl md:h-[450px]">
                <Img name="bhimbetka-rock-art-closeup" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-ochre/20 p-4 backdrop-blur-sm">
              <p className="font-serif text-headline-sm text-white">“100,000 years of human presence”</p>
              <p className="mt-1 text-sm text-white/70">Bhimbetka shows continuous human settlement from the Stone Age to the historic period.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MAP TEASER */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container-site grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Where is Ratapani?"
              title="Map of the Ratapani Landscape"
              intro="Ratapani covers parts of Raisen and Sehore districts on the southern edge of the Vindhya range, between Bhopal and the Narmada valley."
            />
            <ul className="reveal space-y-3 rounded-xl bg-surface-mid p-5 shadow-sm">
              {[
                ['bg-forest', 'Core zone: 763.8 km²'],
                ['bg-moss', 'Buffer zone: 507.7 km²'],
                ['bg-amber', 'Safari gates: Jhiri, Delawadi, Bhimbetka'],
                ['bg-ochre', 'Bhimbetka rock shelters (UNESCO)'],
              ].map(([c, t]) => (
                <li key={t} className="flex items-center gap-3 font-label text-label-sm uppercase text-ink">
                  <span className={`h-3.5 w-3.5 rounded-full ${c}`} /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal lg:col-span-7">
            <div className="relative h-[450px] overflow-hidden rounded-card bg-surface-high shadow-lg">
              <Img name="ratapani-parchment-map" sizes="(min-width: 1024px) 58vw, 100vw" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-4 py-2 font-label text-label-sm uppercase text-charcoal backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5" aria-hidden /> 22.918° N, 77.722° E
              </span>
              <div className="absolute inset-x-6 bottom-6 rounded-xl bg-forest-deep/90 p-4 text-white backdrop-blur-md">
                <p className="font-serif text-headline-sm">Three safari gates</p>
                <p className="mb-3 text-sm text-white/70">Jhiri (34 km), Bhimbetka (44 km) and Delawadi (52 km) from Bhopal railway station.</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <Link href={PAGES.map.path} className="inline-flex items-center gap-1 font-label text-label-md uppercase text-amber hover:text-white">
                    Open the map <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link href={PAGES.gates.path} className="inline-flex items-center gap-1 font-label text-label-md uppercase text-amber hover:text-white">
                    Compare the gates <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-surface-low py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <Faq faqs={FAQS} title="Ratapani Safari: Frequently Asked Questions" eyebrow="Quick answers" center />
          <div className="mt-8 text-center">
            <Link href={PAGES.faqs.path} className="btn-outline">
              See all 43 Ratapani FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FIELD JOURNAL */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container-site">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="reveal">
              <span className="eyebrow text-primary">Field journal</span>
              <h2 className="text-[2rem] leading-tight tracking-tight text-ink md:text-headline-lg">Stories from the Teak Forest</h2>
            </div>
            <p className="reveal max-w-sm text-ink-soft">In-depth guides now; research, articles and field notes coming soon.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {JOURNAL.map((j, i) => (
              <Link key={j.title} href={j.href} className="reveal group flex flex-col overflow-hidden rounded-card bg-white shadow-md" style={{ '--reveal-delay': `${i * 90}ms` }}>
                <div className="relative h-56 overflow-hidden bg-forest">
                  <Img name={j.image} sizes="(min-width: 768px) 33vw, 100vw" className="card-img-zoom" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="mb-2 flex gap-2 font-label text-label-sm uppercase text-outline">
                      <span>{j.cat}</span>·<span>{j.read}</span>
                    </p>
                    <h3 className="mb-3 text-headline-sm text-ink group-hover:text-primary">{j.title}</h3>
                    <p className="text-sm text-ink-soft">{j.text}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 font-label text-label-sm uppercase text-primary">
                    Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12. NEWSLETTER (coming soon) */}
      <section className="relative overflow-hidden bg-forest-deep py-24 text-sand">
        <div className="absolute inset-0 opacity-20">
          <Img name="tiger-eye-closeup" sizes="100vw" />
        </div>
        <div className="container-site relative z-10 flex flex-col items-center text-center">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber/20">
            <Mail className="h-6 w-6 text-amber" aria-hidden />
          </span>
          <span className="eyebrow text-amber">The Forest Dispatch</span>
          <h2 className="reveal mb-3 text-[2rem] leading-tight text-white md:text-headline-lg">Stay Connected to the Vindhya Wilderness</h2>
          <p className="reveal mb-8 max-w-xl text-white/80">
            Seasonal wildlife updates, tiger news, research and photography from Ratapani. Our newsletter is launching soon.
          </p>
          <div className="reveal flex w-full max-w-md flex-col gap-2 sm:flex-row" aria-disabled="true">
            <span className="flex-1 rounded-full bg-white/10 px-6 py-3.5 text-left text-sm text-white/50 backdrop-blur-md">Email sign-up opens soon</span>
            <Link href={PAGES.tigerReserve.path} className="btn-amber shrink-0">
              Read the guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
