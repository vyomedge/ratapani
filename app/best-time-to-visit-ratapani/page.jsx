import { CalendarDays, Lock, Eye, Thermometer, Snowflake, Sun, CloudRain, Sunrise, ThumbsUp, AlertTriangle, Compass, Camera, Aperture, Droplets, Info, ShieldCheck } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import { PageHero, KeyTakeaways, Faq, CtaBand, SectionHeading, TableWrap, Sources, RelatedCards } from '@/components/ui';
import { PAGES, OFFICIAL_BOOKING_URL } from '@/lib/site';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const META = {
  title: 'Best Time to Visit Ratapani & Ratapani Safari Timings',
  description:
    'Best time to visit Ratapani: month-wise weather and tiger sighting guide, safari season 15 Oct–15 Jun, monsoon closure and safari timings.',
  path: PAGES.bestTime.path,
  image: 'ratapani-teak-forest-sunrise-safari-track',
  keywords: ['best time to visit Ratapani', 'Ratapani safari timings', 'Ratapani safari season', 'Ratapani weather'],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Safari' }, { name: 'Best Time & Safari Timings', path: META.path }];

// Approximate Bhopal-region climate averages (max / min °C)
const MONTHS = [
  ['Jan', 'Deep winter', 'good', '25° / 10°', 'Misty dawns, cold open-vehicle mornings, clear days', 'Busy on holidays'],
  ['Feb', 'Late winter', 'good', '28° / 12°', 'Pleasant days; leaves start to fall', 'Moderate'],
  ['Mar', 'Palash bloom', 'great', '34° / 17°', 'Flame-of-the-forest in flower; forest opens up', 'Moderate'],
  ['Apr', 'Dry heat', 'best', '38° / 22°', 'Animals gather at waterholes; best visibility', 'High'],
  ['May', 'Peak summer', 'best', '41° / 27°', 'Hottest month; very good sighting odds on early rounds', 'High'],
  ['Jun', 'Pre-monsoon', 'great', '37° / 27°', 'Season ends mid-June as the rains arrive', 'Moderate'],
  ['Jul', 'Monsoon', 'closed', '30° / 24°', 'Heavy rain; regular safari routes rest', '—'],
  ['Aug', 'Monsoon', 'closed', '29° / 23°', 'Greenest month; streams and dams full', '—'],
  ['Sep', 'Late monsoon', 'closed', '31° / 23°', 'Rains ease; tracks being restored', '—'],
  ['Oct', 'Re-opening', 'good', '31° / 19°', 'Season opens mid-October; lush, green forest', 'Moderate'],
  ['Nov', 'Early winter', 'good', '28° / 14°', 'Comfortable weather, sparkling waterbodies', 'Moderate'],
  ['Dec', 'Winter', 'good', '25° / 10°', 'Foggy mornings; peak holiday demand', 'Very high'],
];

const RATING = {
  best: ['Best sightings', 'bg-ochre text-white'],
  great: ['Very good', 'bg-amber text-charcoal'],
  good: ['Good', 'bg-moss text-white'],
  closed: ['Safaris paused', 'bg-surface-highest text-ink-soft'],
};

const SEASONS = [
  {
    image: 'ratapani-winter-mist-forest',
    months: 'Mid-October to February',
    tag: 'Comfort & birdlife',
    title: 'Winter: Mist, Mild Days & Migrant Birds',
    text: 'After the monsoon the forest is green and full. Mornings are cold, sometimes below 10°C, and mist hangs over the teak valleys at sunrise. Winter migrant birds arrive at reservoirs around the landscape. Dense foliage means animals can be harder to spot, but the weather is the most comfortable of the year.',
    pros: ['Pleasant days, ideal for families', 'Soft misty light for photography', 'Good birding at reservoirs'],
    cons: ['Thick foliage hides animals', 'Very cold open-vehicle mornings'],
    gates: 'All gates; combine with Bhimbetka at midday',
    temp: 'Approx. 8°C – 30°C',
  },
  {
    image: 'ratapani-summer-tiger-waterhole',
    months: 'March to mid-June',
    tag: 'Best for tigers',
    title: 'Summer: Bare Forest & Busy Waterholes',
    text: 'From March the teak sheds its leaves and the forest turns gold and open. Seasonal streams dry up, so tigers, leopards, sloth bears and deer depend on the remaining pools, dams and water points. This is when sightings are most likely, especially on early-morning rounds.',
    pros: ['Highest chance of tiger sightings', 'Long, clear sightlines', 'Palash bloom in March'],
    cons: ['Temperatures over 40°C in May', 'Dusty tracks; protect cameras'],
    gates: 'Jhiri and Delawadi morning rounds',
    temp: 'Approx. 18°C – 42°C',
  },
  {
    image: 'ratapani-monsoon-green-hills',
    months: 'Mid-June to mid-October',
    tag: 'Green season',
    title: 'Monsoon: The Forest Rests',
    text: 'Heavy rain transforms the hills into a deep green landscape of full streams and misty ridges. The Forest Department lists the safari season as 15 October to 15 June, so regular safari routes generally pause during the rains to protect wildlife and tracks. Bhimbetka and the reservoirs can still be visited.',
    pros: ['Spectacular green landscapes', 'Few visitors', 'Bhimbetka open all year'],
    cons: ['Regular safaris generally closed', 'Slippery, muddy roads'],
    gates: 'Check the official portal for any open routes',
    temp: 'Approx. 22°C – 36°C',
  },
];

const FAQS = [
  {
    q: 'What is the best time to visit Ratapani Tiger Reserve?',
    a: 'The Madhya Pradesh Forest Department lists 15 October to 15 June as the best time to visit Ratapani. October to February is the most comfortable; March to mid-June gives the best chance of seeing tigers because animals gather near water.',
  },
  {
    q: 'Which month is best for tiger sighting in Ratapani?',
    a: 'April and May usually give the best tiger sighting chances, followed by March and early June. The forest is leafless and animals concentrate around the remaining water, especially on early-morning rounds.',
  },
  {
    q: 'Is Ratapani open during the monsoon?',
    a: 'Regular safari routes generally pause during the monsoon, as the official season runs from 15 October to 15 June. The Bhimbetka rock shelters remain open all year. Check the MP Forest Department portal for the current status before planning a visit between mid-June and mid-October.',
  },
  {
    q: 'What are the Ratapani safari timings?',
    a: 'There are two rounds a day: a morning round that starts around sunrise and an evening round that ends around sunset. Exact reporting and entry times change through the year and are printed on your permit.',
  },
  {
    q: 'How cold is a winter morning safari in Ratapani?',
    a: 'In December and January early-morning temperatures can drop to around 8–10°C, and it feels colder in an open vehicle. Wear layers, a warm jacket, a cap and gloves.',
  },
  {
    q: 'Is Ratapani worth visiting in summer?',
    a: 'Yes, if you can handle the heat. Summer (March to mid-June) offers the best wildlife visibility. Choose early-morning rounds, carry water and wear a hat and sunscreen.',
  },
];

export default function BestTimePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ ...META, type: 'Article' })} />
      <PageHero
        image={META.image}
        eyebrow="Seasonal almanac · MP Forest Department season"
        title="Best Time to Visit Ratapani & Safari Timings"
        intro="A month-by-month guide to Ratapani’s seasons: when the forest is greenest, when tigers are easiest to see, when safaris pause for the monsoon, and how morning and evening safari timings work."
        crumbs={CRUMBS}
        badges={[
          { icon: CalendarDays, text: 'Season: 15 Oct – 15 Jun' },
          { icon: Eye, text: 'Peak sightings: Mar – Jun' },
          { icon: Lock, text: 'Monsoon pause' },
          { icon: Thermometer, text: '≈ 8°C to 42°C' },
        ]}
      />

      <div className="bg-surface py-16 md:py-20">
        <div className="container-site space-y-24">
          <KeyTakeaways
            eyebrow="Quick answer"
            title="Best time to visit Ratapani: quick answer"
            items={[
              { icon: Snowflake, title: 'Oct – Feb: most comfortable', text: 'Mild days, misty mornings and green forest. Best for families and first-time visitors.' },
              { icon: Sun, title: 'Mar – mid-Jun: best for tigers', text: 'Leafless forest and drying streams bring wildlife to waterholes. Hot, but the best sighting odds.' },
              { icon: CloudRain, title: 'Mid-Jun – mid-Oct: monsoon', text: 'Regular safaris generally pause. Bhimbetka stays open and the hills are at their greenest.' },
              { icon: Sunrise, title: 'Timings follow the sun', text: 'Morning rounds start near sunrise and evening rounds end near sunset; your permit shows exact times.' },
            ]}
          />

          {/* Heatmap */}
          <section aria-labelledby="calendar-title">
            <SectionHeading
              eyebrow="12-month guide"
              title="Ratapani Weather & Wildlife Month by Month"
              intro="Temperatures are approximate averages for the Bhopal region (max / min). Sighting ratings are general guidance, not a guarantee."
              id="calendar-title"
            />
            <div className="reveal mb-5 flex flex-wrap gap-3 font-label text-label-sm uppercase text-ink">
              {Object.values(RATING).map(([l, c]) => (
                <span key={l} className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${c.split(' ')[0]}`} /> {l}
                </span>
              ))}
            </div>
            <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {MONTHS.map(([m, name, r, temp, note, crowd], i) => (
                <li key={m} className="reveal flex flex-col rounded-xl bg-white p-4 shadow-sm" style={{ '--reveal-delay': `${(i % 6) * 50}ms` }}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-serif text-2xl font-semibold text-ink">{m}</span>
                    <span className={`rounded-full px-2 py-0.5 font-label text-[0.6rem] uppercase ${RATING[r][1]}`}>{RATING[r][0]}</span>
                  </div>
                  <p className="font-label text-label-sm uppercase text-outline">{name}</p>
                  <p className="mt-1 font-semibold text-ink">{temp}</p>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-soft">{note}</p>
                  <p className="mt-3 border-t border-forest/10 pt-2 font-label text-[0.6rem] uppercase text-outline">Demand: {crowd}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Seasons */}
          <section aria-labelledby="seasons-title">
            <SectionHeading
              eyebrow="Season by season"
              tone="ochre"
              title="Ratapani in Winter, Summer & Monsoon"
              intro="How weather, foliage and animal behaviour change across the year."
              id="seasons-title"
            />
            <div className="space-y-10">
              {SEASONS.map((s, i) => (
                <article key={s.title} className="reveal grid grid-cols-1 overflow-hidden rounded-card bg-white shadow-lg lg:grid-cols-12">
                  <div className={`relative min-h-[300px] bg-forest lg:col-span-5 ${i % 2 ? 'lg:order-2' : ''}`}>
                    <Img name={s.image} sizes="(min-width: 1024px) 42vw, 100vw" />
                    <span className="absolute left-4 top-4 rounded-full bg-amber px-3 py-1 font-label text-label-sm uppercase text-charcoal">{s.months}</span>
                  </div>
                  <div className="p-6 md:p-8 lg:col-span-7">
                    <span className="font-label text-label-sm uppercase text-tertiary">{s.tag}</span>
                    <h3 className="mb-3 mt-1 text-headline-sm text-ink md:text-headline-md">{s.title}</h3>
                    <p className="leading-relaxed text-ink-soft">{s.text}</p>
                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="rounded-xl bg-secondary-soft/50 p-4">
                        <p className="mb-2 flex items-center gap-2 font-label text-label-sm uppercase text-secondary">
                          <ThumbsUp className="h-4 w-4" aria-hidden /> Strengths
                        </p>
                        <ul className="space-y-1 text-sm text-ink">
                          {s.pros.map((p) => (
                            <li key={p}>✓ {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl bg-tertiary-fixed/50 p-4">
                        <p className="mb-2 flex items-center gap-2 font-label text-label-sm uppercase text-tertiary">
                          <AlertTriangle className="h-4 w-4" aria-hidden /> Keep in mind
                        </p>
                        <ul className="space-y-1 text-sm text-ink">
                          {s.cons.map((p) => (
                            <li key={p}>! {p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap justify-between gap-2 border-t border-forest/10 pt-4 text-sm">
                      <span className="flex items-center gap-2 text-ink">
                        <Compass className="h-4 w-4 text-primary" aria-hidden /> {s.gates}
                      </span>
                      <span className="font-label text-label-sm uppercase text-outline">{s.temp}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Timings */}
          <section aria-labelledby="timings-title">
            <SectionHeading
              eyebrow="Safari timings"
              title="Ratapani Safari Timings Through the Year"
              intro="Ratapani runs two safari rounds a day. Rounds are tied to daylight, so they shift through the year. Use sunrise and sunset in the Bhopal region as your guide; the exact reporting time is printed on your permit."
              id="timings-title"
              tone="moss"
            />
            <TableWrap
              caption="Indicative Ratapani safari timing guide by season"
              note="Sunrise and sunset are approximate for the Bhopal region. Safari entry and exit times are fixed by the Forest Department and may differ; always follow your permit."
            >
              <thead>
                <tr>
                  <th scope="col">Season</th>
                  <th scope="col">Approx. sunrise</th>
                  <th scope="col">Morning round</th>
                  <th scope="col">Evening round</th>
                  <th scope="col">Approx. sunset</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Mid-Oct – Nov</td><td>≈ 6:20–6:50 am</td><td>Starts around sunrise</td><td>Ends around sunset</td><td>≈ 5:35–5:50 pm</td></tr>
                <tr><td>Dec – Jan</td><td>≈ 6:50–7:05 am</td><td>Starts around sunrise</td><td>Ends around sunset</td><td>≈ 5:35–6:00 pm</td></tr>
                <tr><td>Feb – Mar</td><td>≈ 6:15–7:00 am</td><td>Starts around sunrise</td><td>Ends around sunset</td><td>≈ 6:05–6:35 pm</td></tr>
                <tr><td>Apr – mid-Jun</td><td>≈ 5:30–6:10 am</td><td>Starts around sunrise</td><td>Ends around sunset</td><td>≈ 6:35–7:15 pm</td></tr>
                <tr><td>Mid-Jun – mid-Oct</td><td colSpan={4}>Regular safari season paused for the monsoon; check the official portal for any changes.</td></tr>
              </tbody>
            </TableWrap>
          </section>

          {/* Season callout */}
          <section aria-labelledby="season-title" className="reveal relative overflow-hidden rounded-[1.75rem] bg-forest bg-contour-light p-8 text-sand md:p-12">
            <p className="mb-3 flex items-center gap-2 font-label text-label-md uppercase text-amber">
              <ShieldCheck className="h-5 w-5" aria-hidden /> Official safari season
            </p>
            <h2 id="season-title" className="mb-4 text-[2rem] leading-tight text-white md:text-headline-lg">
              Ratapani Safari Season: 15 October to 15 June
            </h2>
            <p className="max-w-3xl leading-relaxed text-sand/80">
              The Madhya Pradesh Forest Department gives 15 October to 15 June as the best time to visit Ratapani. Online quotas at Jhiri and
              Delawadi are small, so weekends, Diwali and Christmas holidays and the summer months fill first. Book as early as the official
              portal allows.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ['Season', '15 Oct – 15 Jun', 'Forest Department listing'],
                ['Book early for', 'Dec holidays & Apr–May', 'Highest demand'],
                ['Book on', 'forest.mponline.gov.in', 'Official portal'],
              ].map(([k, v, s]) => (
                <div key={k} className="rounded-xl bg-white/10 p-5">
                  <p className="font-label text-label-sm uppercase text-amber">{k}</p>
                  <p className="font-serif text-2xl text-white">{v}</p>
                  <p className="text-sm text-sand/60">{s}</p>
                </div>
              ))}
            </div>
            <a href={OFFICIAL_BOOKING_URL} target="_blank" rel="noopener" className="btn-amber mt-8">
              Check availability on the official portal
            </a>
          </section>

          {/* Photography */}
          <section aria-labelledby="photo-title">
            <SectionHeading eyebrow="Photography" title="Ratapani Wildlife Photography Tips by Season" id="photo-title" tone="ochre" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [Sun, 'Oct – Jan', 'Winter side-light', 'Low winter sun gives soft, warm side-light well into the morning. Backlit mist and teak leaves reward long lenses.', 'Bean bag for the vehicle rail'],
                [Aperture, 'Mar – Jun', 'Summer glare & dust', 'Bright light and fine dust are the challenge. A polariser cuts glare on water; keep a rain cover or bag over the camera.', 'Polariser + lens blower'],
                [Droplets, 'Dec – Feb', 'Condensation', 'Moving gear from a warm room into cold dawn air can fog lenses. Let the camera adjust inside its bag first.', '15-minute acclimatisation'],
                [Camera, 'All year', 'Low light in the gorges', 'Light fades early in deep valleys. Fast lenses and higher ISO help on late-evening sightings.', 'f/2.8–f/4, 1/500 s or faster'],
              ].map(([Icon, when, t, d, rec], i) => (
                <article key={t} className="reveal card-lift flex flex-col rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 80}ms` }}>
                  <div className="mb-4 flex items-center justify-between">
                    <Icon className="h-7 w-7 text-primary" aria-hidden />
                    <span className="font-label text-label-sm uppercase text-outline">{when}</span>
                  </div>
                  <h3 className="mb-2 text-xl text-ink">{t}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">{d}</p>
                  <p className="mt-4 rounded-lg bg-surface-low p-2 text-xs text-ink">
                    <strong className="font-label uppercase text-primary">Tip: </strong>
                    {rec}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <div className="mx-auto max-w-4xl">
            <Faq faqs={FAQS} title="Best Time to Visit Ratapani: FAQs" eyebrow="Seasonal questions" />
          </div>

          <RelatedCards
            cards={[
              { href: PAGES.bookSafari.path, image: 'ratapani-tiger-safari-jeep-tiger-crossing', tag: 'Booking', title: 'Book Ratapani Tiger Safari', text: 'Online booking steps, fees and documents.' },
              { href: PAGES.gates.path, image: 'jhiri-gate-ratapani-bamboo-trail', tag: 'Gates', title: 'Ratapani Safari Gates', text: 'Jhiri, Delawadi and Bhimbetka compared.' },
              { href: PAGES.places.path, image: 'bhimbetka-sandstone-towers-sunset', tag: 'Plan your visit', title: 'Places to Visit in Ratapani', text: 'Bhimbetka, Ginnorgarh, dams and temples.' },
            ]}
          />

          <p className="reveal flex items-start gap-2 text-sm text-ink-soft">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
            Planning around weather? Combine this guide with our <a className="font-semibold text-primary underline" href={PAGES.reach.path}>How to Reach Ratapani</a> page to time your drive from Bhopal.
          </p>

          <Sources
            items={[
              { label: 'MP Forest Department e-brochure: Ratapani (best time, climate)', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
              { label: 'MP Tourism: Ratapani Tiger Reserve', url: 'https://mptourism.com/ratapani-tiger-reserve-wilderness-near-bhopal.html' },
            ]}
          />
        </div>
      </div>

      <CtaBand
        eyebrow="Ready for the field"
        title="Plan Your Ratapani Safari by Season"
        text="Each gate has its own character and booking rules. Compare them before you reserve your permit."
        primary={{ href: PAGES.gates.path, label: 'Compare safari gates' }}
        secondary={{ href: PAGES.bookSafari.path, label: 'How to book' }}
      />
    </>
  );
}
