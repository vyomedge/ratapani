import Link from 'next/link';
import { ArrowRight, Compass, Clock, IdCard, Ban, Landmark, ShieldCheck } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import FaqExplorer from '@/components/FaqExplorer';
import Img from '@/components/Img';
import { Breadcrumbs, Sources } from '@/components/ui';
import { PAGES } from '@/lib/site';
import { pageMetadata, webPageSchema, faqSchema } from '@/lib/seo';

const META = {
  title: 'Ratapani FAQs: 43 Answers on Safari, Timings, Travel & Rules',
  description:
    'Everything you need to know about Ratapani Tiger Reserve: safari booking, fees, gates, timings, best season, wildlife, how to reach from Bhopal, Bhimbetka and park rules.',
  path: PAGES.faqs.path,
  image: 'bhimbetka-sandstone-towers-sunset',
  keywords: ['Ratapani FAQ', 'Ratapani questions', 'Ratapani safari FAQ', 'Ratapani tiger reserve FAQ', 'Ratapani travel guide'],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Plan Your Visit' }, { name: 'Ratapani FAQs', path: META.path }];

const GROUPS = [
  {
    id: 'general',
    kicker: 'Overview',
    title: 'General & Sanctuary',
    faqs: [
      { q: 'Where is Ratapani Tiger Reserve located?', a: 'Ratapani is in Raisen and Sehore districts of Madhya Pradesh, on the southern edge of the Vindhya range just south-east of Bhopal. Its safari gates are 34–52 km from Bhopal railway station.', tags: 'location bhopal raisen sehore' },
      { q: 'Is Ratapani an official tiger reserve?', a: 'Yes. Ratapani, a wildlife sanctuary since 1976, was notified as a tiger reserve on 2 December 2024. It is Madhya Pradesh’s 8th and India’s 57th tiger reserve.', tags: 'ntca notification status' },
      { q: 'What is the area of Ratapani Tiger Reserve?', a: 'The reserve covers 1,271.465 km²: a 763.812 km² core (critical tiger habitat) and a 507.653 km² buffer zone. The original wildlife sanctuary is about 825 km².', tags: 'area size core buffer' },
      { q: 'How is Ratapani different from Kanha or Bandhavgarh?', a: 'Ratapani is much closer to a city (Bhopal), far less crowded, and unique for having the UNESCO-listed Bhimbetka rock shelters inside its forest. As a newer safari destination, tiger sightings are less predictable than in the older, more famous reserves.', tags: 'kanha bandhavgarh compare' },
      { q: 'Can I visit Ratapani and Bhimbetka on the same day?', a: 'Yes. Bhimbetka is about 45 km from Bhopal on NH-46, beside the Bhimbetka safari gate and on the same corridor as Jhiri gate. A morning safari followed by Bhimbetka is a popular day trip.', tags: 'bhimbetka same day combo' },
      { q: 'Which mountain range is Ratapani in?', a: 'Ratapani lies in the Vindhya range, with sandstone hills, plateaus, gorges and valleys cut by seasonal streams that drain towards the Narmada.', tags: 'vindhya geology hills' },
      { q: 'What kind of forest is Ratapani?', a: 'Dry and moist deciduous forest. Teak covers about 55% of the area and bamboo about a quarter, mixed with species like mahua, tendu, salai and palash (flame of the forest).', tags: 'flora teak bamboo' },
    ],
  },
  {
    id: 'safari',
    kicker: 'Expeditions',
    title: 'Safari & Booking',
    faqs: [
      { q: 'How do I book a Ratapani safari?', a: 'Book online on the MP Forest Department portal, forest.mponline.gov.in, for Jhiri or Delawadi gate. Choose the date, morning or evening round and a full vehicle or single seat, add visitor ID details and pay online.', tags: 'permit booking online mponline' },
      { q: 'How much does a Ratapani safari cost?', a: 'Per the official portal, a full vehicle costs ₹4,230 at Jhiri (₹750 entry + ₹3,000 vehicle + ₹480 guide) and ₹3,830 at Delawadi (₹750 + ₹2,600 + ₹480). A single seat is ₹125 (adult) or ₹65 (child) plus a share of the vehicle and guide fee.', tags: 'price fee cost' },
      { q: 'How many safari gates does Ratapani have?', a: 'Three: Jhiri and Delawadi (online and gate booking, registered vehicles only) and Bhimbetka (offline booking at the gate, private vehicles allowed).', tags: 'gates zones jhiri delawadi' },
      { q: 'Can I book a safari at the gate?', a: 'Yes. Vehicles not booked online or through the DFO quota can be booked at the tourism gate, and the Bhimbetka gate is offline only. Online booking is safer for weekends and holidays.', tags: 'spot offline walk-in' },
      { q: 'How far in advance should I book?', a: 'Book as early as the official portal allows, especially for weekends, December holidays and April–May, because online quotas are only a few vehicles per round.', tags: 'advance window quota' },
      { q: 'Is a guide compulsory on safari?', a: 'Yes. A forest guide accompanies every safari vehicle, and the guide fee is part of the permit cost.', tags: 'guide naturalist' },
      { q: 'What ID do I need for the safari?', a: 'Carry the original photo ID entered during booking, such as Aadhaar, passport, voter ID or driving licence. Foreign nationals should carry their passport.', tags: 'identity id documents' },
      { q: 'Can I take my own car on safari?', a: 'Only at the Bhimbetka gate. At Jhiri and Delawadi only vehicles registered with the sanctuary may enter the forest.', tags: 'private vehicle car' },
    ],
  },
  {
    id: 'timings',
    kicker: 'Calendar',
    title: 'Timings & Seasons',
    faqs: [
      { q: 'When is Ratapani open for safaris?', a: 'The Forest Department lists 15 October to 15 June as the best time to visit. Regular safari routes generally pause during the monsoon; check the official portal for current dates.', tags: 'season open closed monsoon' },
      { q: 'What are the Ratapani safari timings?', a: 'There are two rounds a day: a morning round starting around sunrise and an evening round ending around sunset. Exact reporting and entry times change with the season and are printed on your permit.', tags: 'timing morning evening' },
      { q: 'Which month is best for tiger sightings?', a: 'April and May, followed by March and early June. The forest is leafless and animals gather near the remaining water.', tags: 'best month tiger april may summer' },
      { q: 'Which months are best for weather and birding?', a: 'November to February: pleasant days, misty mornings, green forest and winter migrant birds at the reservoirs.', tags: 'winter birding november december' },
      { q: 'Is Ratapani open in the monsoon?', a: 'Regular safaris generally pause from mid-June to mid-October. The Bhimbetka rock shelters stay open all year.', tags: 'monsoon july august september' },
      { q: 'Are safaris held every day of the week?', a: 'Weekly closures vary between Madhya Pradesh reserves (some close one afternoon a week). Check the official booking portal for Ratapani’s current calendar before planning.', tags: 'weekly closed day wednesday' },
      { q: 'How early should I reach the gate?', a: 'Arrive at least 30 minutes before your reporting time to allow for ID checks and guide allotment.', tags: 'reporting time arrive early' },
    ],
  },
  {
    id: 'wildlife',
    kicker: 'Fauna',
    title: 'Wildlife & Sightings',
    faqs: [
      { q: 'How many tigers are there in Ratapani?', a: 'The 2022 All India Tiger Estimation recorded 56 tigers. Officials estimate over 70 from indirect evidence, and some reports put the wider landscape at close to 90.', tags: 'tiger population count' },
      { q: 'What other predators live in Ratapani?', a: 'Leopards, sloth bears, dholes (wild dogs), striped hyenas, golden jackals and foxes.', tags: 'leopard sloth bear dhole carnivores' },
      { q: 'Where are leopards most likely to be seen?', a: 'Leopards favour rocky ridges, gorges and boulder country. Scan cliffs and tree branches, especially at dawn and dusk.', tags: 'leopard sighting' },
      { q: 'Are sloth bears seen on daytime safaris?', a: 'Yes. Sloth bears are among the most frequently seen large mammals in Ratapani, especially early in the morning and in spring when mahua flowers fall.', tags: 'sloth bear daytime' },
      { q: 'How many bird species are recorded in Ratapani?', a: '249 bird species, according to the MP Forest Department, including the crested serpent eagle, Indian paradise flycatcher, kingfishers and the white-rumped vulture.', tags: 'birds birding' },
      { q: 'What prey animals live in Ratapani?', a: 'Sambar, chital (spotted deer), nilgai, four-horned antelope and wild boar, along with langur and rhesus macaque.', tags: 'herbivore prey deer' },
      { q: 'Is a tiger sighting guaranteed?', a: 'No. Ratapani is a large, wild forest. Many safaris see leopards, sloth bears, deer and birds instead; two or more rounds improve your chances.', tags: 'guarantee tiger' },
    ],
  },
  {
    id: 'travel',
    kicker: 'Access',
    title: 'Travel & Stay',
    faqs: [
      { q: 'What is the nearest airport to Ratapani?', a: 'Raja Bhoj Airport, Bhopal: about 41 km from Jhiri gate, 55 km from Bhimbetka gate and 64 km from Delawadi gate.', tags: 'airport flight bhopal' },
      { q: 'What is the nearest railway station?', a: 'Bhopal’s stations (Bhopal Junction and Rani Kamlapati), about 34 km from Jhiri gate. Narmadapuram station is about 33 km from Bhimbetka gate.', tags: 'railway train station' },
      { q: 'How far is Ratapani from Bhopal?', a: 'Jhiri gate is about 34 km, Bhimbetka gate 44 km and Delawadi gate 52 km from Bhopal railway station, roughly a 1–1.5 hour drive.', tags: 'distance bhopal' },
      { q: 'Can I take an app cab from Bhopal?', a: 'App cabs can drop you at the gate, but return cabs are scarce. Book a round-trip taxi or keep your driver waiting.', tags: 'uber ola taxi' },
      { q: 'Where can I stay near Ratapani?', a: 'There is no accommodation run by the park management. Private hotels and resorts are located near the Jhiri and Delawadi gates, and many visitors stay in Bhopal and drive in for the morning round.', tags: 'stay hotel resort accommodation' },
      { q: 'Is there mobile network inside the reserve?', a: 'Signal is available along NH-46 but weak or absent near the gates and inside the forest. Download offline maps and your permit beforehand.', tags: 'mobile network signal' },
      { q: 'What should I wear on safari?', a: 'Muted colours like khaki, olive and brown. Layers and a warm jacket in winter; light cotton, a hat and sunscreen in summer.', tags: 'clothing dress' },
    ],
  },
  {
    id: 'rules',
    kicker: 'Protocol',
    title: 'Rules & Conservation',
    faqs: [
      { q: 'Can I get out of the safari vehicle?', a: 'No, except at designated points as directed by your guide.', tags: 'step out vehicle' },
      { q: 'Is photography allowed? Are there camera fees?', a: 'Personal photography is allowed. Commercial filming needs prior permission from the Forest Department; check the portal for any current camera charges.', tags: 'camera photography fee' },
      { q: 'Can I fly a drone in Ratapani?', a: 'No. Flying drones in a protected area without official permission is not allowed.', tags: 'drone' },
      { q: 'Is plastic allowed inside the reserve?', a: 'Avoid single-use plastic. Carry a reusable bottle and bring all litter back with you.', tags: 'plastic bottle litter' },
      { q: 'Are smoking and alcohol allowed?', a: 'No. Smoking, fires and alcohol are not allowed in the forest; dry teak forest catches fire easily.', tags: 'smoking alcohol fire' },
      { q: 'Can I feed animals or play music?', a: 'No. Feeding wildlife, honking and playing music are prohibited. Stay quiet so you, and others, see more.', tags: 'feeding music noise' },
      { q: 'Can I change my gate or date after booking?', a: 'Plan as if you cannot. Permits are issued for a specific gate, date and round and are not transferable.', tags: 'change transfer gate' },
    ],
  },
];

const ALL = GROUPS.flatMap((g) => g.faqs);

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={[webPageSchema({ ...META, type: 'WebPage' }), faqSchema(ALL)]} />

      <section className="relative overflow-hidden bg-forest bg-contour-light pb-16 pt-32 text-sand">
        <div className="container-site max-w-4xl text-center">
          <div className="flex justify-center">
            <Breadcrumbs crumbs={CRUMBS} light />
          </div>
          <p className="mb-4 font-label text-label-md uppercase text-amber">Field compendium · {ALL.length} questions answered</p>
          <h1 className="text-[2.5rem] leading-[1.05] tracking-tight text-white sm:text-[3.25rem] lg:text-display-lg">
            Everything You Need to Know About Ratapani
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sand/85">
            Clear answers on safari permits, gates, timings, wildlife, Bhimbetka and travel from Bhopal, checked against official sources.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-label text-label-sm uppercase text-sand/70">
            <span>Core 763.8 km² · Buffer 507.7 km²</span>
            <span>Notified 2 Dec 2024</span>
          </div>
        </div>
      </section>

      <div className="bg-surface py-14 md:py-20">
        <div className="container-site grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FaqExplorer
              groups={GROUPS}
              quick={[
                ['Safari booking', 'book'],
                ['Delawadi vs Jhiri', 'Delawadi'],
                ['Bhimbetka', 'Bhimbetka'],
                ['Best month', 'month'],
                ['Fees', '₹'],
                ['Bhopal distance', 'Bhopal'],
              ]}
            />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:col-span-4">
            <div className="rounded-card bg-surface-low p-6 shadow-sm">
              <p className="mb-1 flex items-center gap-2 font-label text-label-md uppercase text-primary">
                <Compass className="h-4 w-4" aria-hidden /> Expedition navigator
              </p>
              <p className="mb-4 text-sm text-ink-soft">Detailed guides for planning your visit:</p>
              <ul className="space-y-1">
                {[PAGES.bookSafari, PAGES.gates, PAGES.bestTime, PAGES.reach, PAGES.map, PAGES.bhimbetka].map((p) => (
                  <li key={p.path}>
                    <Link href={p.path} className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-ink hover:bg-surface hover:text-primary">
                      {p.title}
                      <ArrowRight className="h-4 w-4 opacity-50 transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card bg-forest p-6 text-sand">
              <p className="mb-4 flex items-center gap-2 font-label text-label-md uppercase text-amber">
                <ShieldCheck className="h-4 w-4" aria-hidden /> Field advisories
              </p>
              <ul className="space-y-4 text-sm">
                {[
                  [Clock, 'Arrive 30 minutes early', 'ID checks and guide allotment take time.'],
                  [IdCard, 'Carry original photo ID', 'It must match the details on your permit.'],
                  [Ban, 'No plastic, no noise', 'Leave no trace and keep quiet at sightings.'],
                ].map(([Icon, t, d]) => (
                  <li key={t} className="flex gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-amber" aria-hidden />
                    <span>
                      <strong className="block text-white">{t}</strong>
                      <span className="text-sand/70">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid grid-cols-2 gap-3">
              {[
                ['Tigers', '56', '2022 census'],
                ['Birds', '249', 'species'],
                ['Core area', '763.8', 'km²'],
                ['Gates', '3', 'Jhiri · Delawadi · Bhimbetka'],
              ].map(([k, v, s]) => (
                <div key={k} className="rounded-xl bg-white p-4 shadow-sm">
                  <dt className="font-label text-label-sm uppercase text-outline">{k}</dt>
                  <dd className="font-serif text-2xl font-semibold text-primary">{v}</dd>
                  <dd className="text-xs text-ink-soft">{s}</dd>
                </div>
              ))}
            </dl>
            <Link href={PAGES.bookSafari.path} className="btn-amber w-full">
              How to book a permit
            </Link>
          </aside>
        </div>

        <div className="container-site mt-16">
          <Sources
            items={[
              { label: 'MP Forest Department e-brochure: Ratapani', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
              { label: 'Mongabay India: India’s latest tiger reserve (2025)', url: 'https://india.mongabay.com/2025/01/teething-troubles-or-conservation-challenges-at-indias-latest-tiger-reserve/' },
              { label: 'UNESCO: Rock Shelters of Bhimbetka', url: 'https://whc.unesco.org/en/list/925/' },
            ]}
          />
        </div>
      </div>

      <section className="relative overflow-hidden bg-forest-deep py-20 text-sand">
        <div className="absolute inset-0 opacity-30">
          <Img name="bhimbetka-zoo-rock" sizes="100vw" />
        </div>
        <div className="container-site relative z-10 text-center">
          <span className="eyebrow inline-flex items-center gap-2 text-amber">
            <Landmark className="h-4 w-4" aria-hidden /> UNESCO heritage & tiger country
          </span>
          <h2 className="mx-auto max-w-3xl text-[2rem] leading-tight text-white md:text-display-lg">Where Ancient Artists Met the Tigers of the Vindhyas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sand/80">
            The painters of Bhimbetka drew the same kinds of animals that still walk Ratapani’s forests today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={PAGES.bhimbetka.path} className="btn-amber">
              Explore the rock art
            </Link>
            <Link href={PAGES.bookSafari.path} className="btn-ghost-light">
              Plan a safari
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

