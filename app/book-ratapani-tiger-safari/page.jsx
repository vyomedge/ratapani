import Link from 'next/link';
import {
  ShieldCheck,
  Ticket,
  Gauge,
  IdCard,
  UserCheck,
  Globe,
  MapPinned,
  Clock,
  Users,
  Download,
  Snowflake,
  Sun,
  CloudRain,
  Lightbulb,
  VolumeX,
  Footprints,
  Ruler,
  Trash2,
  Shirt,
  Binoculars,
  Droplet,
  FileText,
  ExternalLink,
  AlarmClock,
} from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import { PageHero, KeyTakeaways, Faq, SectionHeading, TableWrap, Sources } from '@/components/ui';
import { PAGES, OFFICIAL_BOOKING_URL } from '@/lib/site';
import { pageMetadata, webPageSchema, howToSchema } from '@/lib/seo';

const META = {
  title: 'Ratapani Safari Booking 2026: Online Steps, Fees & Timings',
  description:
    'How to book a Ratapani tiger safari online: official portal steps, Jhiri & Delawadi fees (₹3,830–₹4,230 per vehicle), timings, documents and tips.',
  path: PAGES.bookSafari.path,
  image: 'ratapani-tiger-safari-jeep-tiger-crossing',
  keywords: [
    'Ratapani safari booking',
    'Ratapani tiger safari booking',
    'Ratapani jungle safari online booking',
    'Ratapani safari price',
    'Ratapani safari fees',
    'Ratapani safari timings',
    'Ratapani jungle safari cost',
    'forest.mponline.gov.in Ratapani',
  ],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Safari' }, { name: 'Book Ratapani Tiger Safari', path: META.path }];

const STEPS = [
  { icon: Globe, title: 'Open the official portal', text: 'Go to forest.mponline.gov.in, the Madhya Pradesh Forest Department’s booking site, and choose Ratapani Tiger Reserve. Avoid unofficial look-alike sites.', tag: 'MP Online' },
  { icon: MapPinned, title: 'Select gate and zone', text: 'Pick Jhiri or Delawadi gate. (The Bhimbetka gate cannot be booked online; book it at the gate on the day.)', tag: 'Gate choice' },
  { icon: Clock, title: 'Choose date, round and seat type', text: 'Select your date, the morning or evening round, and whether you want a full vehicle or a single seat in a shared vehicle.', tag: 'Date & shift' },
  { icon: Users, title: 'Enter visitor details', text: 'Add each visitor’s name, age, gender and photo ID details exactly as on the ID you will carry to the gate.', tag: 'ID details' },
  { icon: Download, title: 'Pay and download the permit', text: 'Pay online, then download the e-permit. Save a copy offline and carry a printout, as mobile signal is weak near the gates.', tag: 'E-permit' },
];

const FAQS = [
  {
    q: 'How can I book a Ratapani safari online?',
    a: 'Visit forest.mponline.gov.in, select Ratapani Tiger Reserve, choose Jhiri or Delawadi gate, pick your date, morning or evening round and full vehicle or single seat, fill in visitor and ID details, then pay online and download your permit.',
  },
  {
    q: 'What is the Ratapani jungle safari price?',
    a: 'According to the official portal, a full vehicle costs ₹4,230 at Jhiri gate (₹750 entry + ₹3,000 vehicle + ₹480 guide) and ₹3,830 at Delawadi gate (₹750 + ₹2,600 + ₹480). A single seat costs ₹125 entry for an adult (₹65 for a child) plus a share of the vehicle and guide fee. Fees may change.',
  },
  {
    q: 'Can I book a Ratapani safari at the gate?',
    a: 'Yes. Vehicles that are not booked online or through the DFO quota can be booked at the tourism gate, and the Bhimbetka gate works only offline. Online booking is safer for weekends and holidays because quotas are small.',
  },
  {
    q: 'What are the Ratapani safari timings?',
    a: 'Ratapani runs two safari rounds a day, one in the morning and one in the evening. Morning rounds start around sunrise and evening rounds end around sunset; the exact reporting time is printed on your permit and changes with the season.',
  },
  {
    q: 'Can I take my own car into Ratapani?',
    a: 'Not at Jhiri or Delawadi gates, where only vehicles registered with the sanctuary may enter. At the Bhimbetka gate, visitors may use private vehicles on the permitted route.',
  },
  {
    q: 'What documents do I need for a Ratapani safari?',
    a: 'Carry the original photo ID you entered while booking (such as Aadhaar, passport, voter ID or driving licence) and your e-permit, printed or saved offline.',
  },
  {
    q: 'How many tigers can I expect to see?',
    a: 'Sightings are never guaranteed. Ratapani has 56 tigers counted in 2022 across a large forest, so many safaris see leopards, sloth bears, deer and birds instead. Summer mornings give the best odds.',
  },
];

export default function BookSafariPage() {
  const steps = STEPS.map((s) => ({ title: s.title, text: s.text }));
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ ...META, type: 'Article' }),
          howToSchema({
            name: 'How to book a Ratapani tiger safari online',
            description: 'Book a Ratapani Tiger Reserve jungle safari through the official Madhya Pradesh Forest Department portal.',
            steps,
            path: META.path,
          }),
        ]}
      />
      <PageHero
        image={META.image}
        eyebrow="Permit guide · Official MP Forest portal"
        title="Book Ratapani Tiger Safari"
        intro="A clear, step-by-step guide to booking a Ratapani jungle safari: the official online portal, gate quotas, full-vehicle and single-seat fees, timings, documents and tips to make your permit count."
        crumbs={CRUMBS}
        badges={[
          { icon: ShieldCheck, text: 'forest.mponline.gov.in' },
          { icon: Clock, text: 'Morning & evening rounds' },
          { icon: Ticket, text: 'Full vehicle or single seat' },
        ]}
      />

      <div className="bg-surface py-16 md:py-20">
        <div className="container-site space-y-24">
          <KeyTakeaways
            eyebrow="Executive summary"
            title="Ratapani safari booking at a glance"
            items={[
              { icon: Ticket, title: 'Book on the official portal', text: 'Jhiri and Delawadi safaris are booked on forest.mponline.gov.in or at the gate; Bhimbetka gate is offline only.' },
              { icon: Gauge, title: 'Very small quotas', text: 'Each round has only a handful of online vehicles per gate, so weekends and holidays fill quickly.' },
              { icon: IdCard, title: 'Original photo ID required', text: 'Carry the same ID you entered while booking. Names must match exactly.' },
              { icon: UserCheck, title: 'Guide in every vehicle', text: 'A forest guide accompanies each safari; the guide fee is part of your permit cost.' },
            ]}
          />

          {/* Steps */}
          <section aria-labelledby="steps-title">
            <SectionHeading
              eyebrow="Step-by-step"
              title="How to Book a Ratapani Safari Online in 5 Steps"
              intro="Follow these steps on the Madhya Pradesh Forest Department’s official booking portal."
              id="steps-title"
            />
            <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((s, i) => (
                <li key={s.title} className="reveal relative flex flex-col rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 80}ms` }}>
                  <span className="absolute right-5 top-4 font-serif text-5xl font-semibold text-surface-highest">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-primary">
                    <s.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mb-2 text-xl text-ink">{s.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                  <span className="mt-4 font-label text-label-sm uppercase text-tertiary">{s.tag}</span>
                </li>
              ))}
            </ol>
            <div className="reveal mt-8 flex flex-wrap items-center gap-4">
              <a href={OFFICIAL_BOOKING_URL} target="_blank" rel="noopener" className="btn-amber">
                Open the official booking portal <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
              <p className="text-sm text-ink-soft">Ratapani Jungle Safari is an information guide and does not sell permits.</p>
            </div>
          </section>

          {/* Safari types */}
          <section aria-labelledby="types-title">
            <SectionHeading
              eyebrow="Safari types"
              title="Ratapani Safari Options"
              intro="Choose how you want to ride: a whole vehicle for your group, a single seat in a shared vehicle, or the Bhimbetka gate route."
              id="types-title"
              tone="moss"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  image: 'maruti-gypsy-safari-vehicle-ratapani',
                  tag: 'Jhiri & Delawadi',
                  title: 'Full Vehicle Safari',
                  meta: 'Exclusive',
                  text: 'Book an entire registered safari vehicle for your family or group. The vehicle and guide fee is the same however many seats you fill.',
                  points: ['Book online or at the gate', 'Forest guide included', 'Best for photographers and families'],
                },
                {
                  image: 'shared-safari-vehicle-forest',
                  tag: 'Jhiri (online) & gate',
                  title: 'Single Seat Safari',
                  meta: 'Shared',
                  text: 'Travelling solo or as a couple? Book a single seat and share the vehicle and guide fee with other visitors.',
                  points: ['₹125 adult / ₹65 child entry', 'Plus your share of vehicle & guide fee', 'Limited single-seat quota'],
                },
                {
                  image: 'safari-vehicle-ratapani-reservoir',
                  tag: 'Bhimbetka gate',
                  title: 'Bhimbetka Gate Safari',
                  meta: 'Offline',
                  text: 'Booked only at the gate. Visitors may use their own vehicles on the permitted route, which pairs well with a visit to the rock shelters.',
                  points: ['No online booking', 'Private vehicles allowed', 'Combine with Bhimbetka caves'],
                },
              ].map((t, i) => (
                <article key={t.title} className="reveal flex flex-col overflow-hidden rounded-card bg-white shadow-md" style={{ '--reveal-delay': `${i * 90}ms` }}>
                  <div className="relative h-56 bg-forest">
                    <Img name={t.image} sizes="(min-width: 768px) 33vw, 100vw" />
                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 font-label text-label-sm uppercase text-white backdrop-blur-md">{t.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h3 className="text-headline-sm text-ink">{t.title}</h3>
                      <span className="rounded-full bg-secondary-soft px-3 py-1 font-label text-label-sm uppercase text-secondary">{t.meta}</span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-ink-soft">{t.text}</p>
                    <ul className="mt-auto space-y-2 border-t border-forest/10 pt-4">
                      {t.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-ink">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Fees */}
          <section aria-labelledby="fees-title">
            <SectionHeading
              eyebrow="Safari fees"
              title="Ratapani Safari Price: Fee Breakdown"
              intro="Official fees listed on the MP Forest Department portal for the Jhiri and Delawadi gates, per safari round."
              id="fees-title"
            />
            <TableWrap
              caption="Ratapani safari fees by gate"
              note="Figures in Indian rupees as listed on forest.mponline.gov.in. “n” = number of seats sharing the vehicle. Fees are set by the Forest Department and may change; online payment charges may apply. Bhimbetka gate fees are paid at the gate."
            >
              <thead>
                <tr>
                  <th scope="col">Fee item</th>
                  <th scope="col">Jhiri gate</th>
                  <th scope="col">Delawadi gate</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Entry fee (full vehicle)</td><td>₹750</td><td>₹750</td></tr>
                <tr><td>Vehicle fee</td><td>₹3,000</td><td>₹2,600</td></tr>
                <tr><td>Guide fee</td><td>₹480</td><td>₹480</td></tr>
                <tr><td className="!text-primary">Total per full vehicle</td><td className="font-bold !text-primary">₹4,230</td><td className="font-bold !text-primary">₹3,830</td></tr>
                <tr><td>Single seat entry (adult / child)</td><td>₹125 / ₹65</td><td>₹125 / ₹65</td></tr>
                <tr><td>Single seat share of vehicle + guide</td><td>(₹3,000 + ₹480) ÷ n</td><td>(₹2,600 + ₹480) ÷ n</td></tr>
              </tbody>
            </TableWrap>
            <div className="reveal mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                ['Group of 6 at Jhiri', '≈ ₹705', 'per person (₹4,230 ÷ 6)'],
                ['Group of 4 at Delawadi', '≈ ₹958', 'per person (₹3,830 ÷ 4)'],
                ['Couple at Delawadi', '≈ ₹1,915', 'per person (₹3,830 ÷ 2)'],
              ].map(([k, v, s]) => (
                <div key={k} className="rounded-xl bg-surface-low p-5">
                  <p className="font-label text-label-sm uppercase text-outline">{k}</p>
                  <p className="font-serif text-3xl font-semibold text-ink">{v}</p>
                  <p className="text-sm text-ink-soft">{s}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Timings */}
          <section aria-labelledby="timings-title">
            <SectionHeading
              eyebrow="Safari timings"
              title="Ratapani Safari Timings by Season"
              intro="Two rounds run each day, morning and evening, following sunrise and sunset. Use these indicative windows to plan; the exact reporting time is printed on your permit."
              id="timings-title"
              tone="moss"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { icon: Snowflake, season: 'Winter', months: 'Mid-October to February', am: 'From about 6:30 am', pm: 'Until about sunset (~5:30 pm)', note: 'Coldest early mornings in open vehicles; carry warm layers.' },
                { icon: Sun, season: 'Summer', months: 'March to mid-June', am: 'From about 5:30–6:00 am', pm: 'Until about sunset (~6:30 pm)', note: 'Best season for sightings near water; mornings are cooler.' },
                { icon: CloudRain, season: 'Monsoon', months: 'Mid-June to mid-October', am: 'Check portal', pm: 'Check portal', note: 'The listed safari season is 15 Oct–15 Jun; routes may close for the rains.' },
              ].map((t, i) => (
                <article key={t.season} className="reveal rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 90}ms` }}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-soft text-secondary">
                      <t.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl text-ink">{t.season}</h3>
                      <p className="font-label text-label-sm uppercase text-outline">{t.months}</p>
                    </div>
                  </div>
                  <dl className="space-y-3">
                    <div className="flex justify-between gap-3 rounded-lg bg-surface-low p-3 text-sm">
                      <dt className="font-label text-label-sm uppercase text-primary">Morning round</dt>
                      <dd className="text-right text-ink">{t.am}</dd>
                    </div>
                    <div className="flex justify-between gap-3 rounded-lg bg-surface-low p-3 text-sm">
                      <dt className="font-label text-label-sm uppercase text-primary">Evening round</dt>
                      <dd className="text-right text-ink">{t.pm}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 flex gap-2 text-sm text-ink-soft">
                    <AlarmClock className="mt-0.5 h-4 w-4 shrink-0 text-tertiary" aria-hidden /> {t.note}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <p className="reveal -mt-16 text-sm text-ink-soft">
            Month-by-month weather and sighting guide:{' '}
            <Link href={PAGES.bestTime.path} className="font-semibold text-primary underline">
              best time to visit Ratapani
            </Link>
            .
          </p>

          {/* Checklists */}
          <section aria-label="Documents and packing checklist" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              {
                eyebrow: 'Documents',
                title: 'Ratapani Safari Documents Checklist',
                text: 'Gate staff check permits and IDs before the barrier opens. Missing paperwork can mean no entry.',
                items: [
                  [IdCard, 'Original photo ID', 'The same ID type and number you entered while booking (Aadhaar, passport, voter ID or driving licence).'],
                  [FileText, 'E-permit', 'A printout plus an offline copy on your phone; signal is weak near the gates.'],
                  [Users, 'Matching names', 'Every visitor’s name must match their ID. Permits are not transferable.'],
                ],
              },
              {
                eyebrow: 'What to carry',
                title: 'What to Wear and Carry on Safari',
                text: 'Open safari vehicles are cold at dawn in winter and hot by noon in summer. Dress in layers.',
                items: [
                  [Shirt, 'Muted clothes', 'Khaki, olive, brown or grey. Avoid white, neon and loud colours.'],
                  [Binoculars, 'Binoculars & camera', '8x42 or 10x42 binoculars help with birds; a bean bag steadies long lenses.'],
                  [Droplet, 'Reusable water bottle', 'Plastic is discouraged inside the forest; carry a steel bottle, hat and sunscreen.'],
                ],
              },
            ].map((c) => (
              <div key={c.title} className="reveal rounded-card bg-surface-low p-6 md:p-8">
                <span className="eyebrow text-primary">{c.eyebrow}</span>
                <h2 className="mb-2 text-headline-sm text-ink md:text-headline-md">{c.title}</h2>
                <p className="mb-6 text-ink-soft">{c.text}</p>
                <ul className="space-y-4">
                  {c.items.map(([Icon, t, d]) => (
                    <li key={t} className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span>
                        <strong className="block text-ink">{t}</strong>
                        <span className="text-sm text-ink-soft">{d}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Tips */}
          <section aria-labelledby="tips-title" className="reveal rounded-card border-2 border-amber bg-amber/5 p-6 md:p-10">
            <p className="mb-2 flex items-center gap-2 font-label text-label-md uppercase text-primary">
              <Lightbulb className="h-5 w-5" aria-hidden /> Insider tips
            </p>
            <h2 id="tips-title" className="mb-6 text-headline-sm text-ink md:text-headline-md">
              Book Early for Weekends and Holidays
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                ['Quotas are tiny', 'Online quotas are only a few vehicles per round at each gate, so book as early as the portal allows for weekends, long weekends and summer holidays.'],
                ['Check every name', 'Permits cannot be transferred or edited. A spelling mismatch with an ID can cost you entry.'],
                ['Do two rounds', 'Book a morning and an evening round, or two days, to improve your chances of a tiger sighting.'],
              ].map(([t, d]) => (
                <div key={t}>
                  <h3 className="mb-1 font-sans text-base font-bold text-ink">{t}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Etiquette */}
          <section aria-labelledby="etiquette-title">
            <SectionHeading eyebrow="Safari etiquette" title="Safari Etiquette in Ratapani" intro="Ratapani is a wild forest, not a zoo. These habits protect animals and make better sightings for everyone." id="etiquette-title" tone="ochre" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [VolumeX, 'Silence at sightings', 'When your guide hears an alarm call, go quiet. Whispering keeps animals on their natural path.'],
                [Footprints, 'Stay in the vehicle', 'Never step down or lean out near animals. Tigers ignore vehicles but react to people on foot.'],
                [Ruler, 'Give space', 'Do not crowd, chase or block an animal’s path. Let it cross on its own terms.'],
                [Trash2, 'Leave no trace', 'No littering and no feeding wildlife, not even monkeys.'],
              ].map(([Icon, t, d], i) => (
                <article key={t} className="reveal rounded-card bg-white p-6 shadow-md" style={{ '--reveal-delay': `${i * 80}ms` }}>
                  <Icon className="mb-4 h-7 w-7 text-tertiary" aria-hidden />
                  <h3 className="mb-2 text-xl text-ink">{t}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{d}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="mx-auto max-w-4xl">
            <Faq faqs={FAQS} title="Ratapani Safari Booking: FAQs" eyebrow="Practical answers" />
          </div>

          <Sources
            items={[
              { label: 'MP Forest Department booking portal (MP Online)', url: OFFICIAL_BOOKING_URL },
              { label: 'MP Forest Department e-brochure: Ratapani fees, gates and quotas', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
              { label: 'MP Tourism: Ratapani Tiger Reserve', url: 'https://mptourism.com/ratapani-tiger-reserve-wilderness-near-bhopal.html' },
            ]}
          />
        </div>
      </div>

      <section className="relative overflow-hidden bg-forest py-20 text-sand">
        <div className="absolute inset-0 opacity-25">
          <Img name="ratapani-safari-gate-entrance" sizes="100vw" />
        </div>
        <div className="container-site relative z-10 text-center">
          <span className="eyebrow text-amber">Next chapter</span>
          <h2 className="reveal mx-auto max-w-3xl text-[2rem] leading-tight text-white md:text-display-lg">Know Your Gates Before You Book</h2>
          <p className="reveal mx-auto mt-4 max-w-2xl text-lg text-sand/80">
            Jhiri, Delawadi or Bhimbetka? Compare distance from Bhopal, booking type, terrain and who each gate suits best.
          </p>
          <Link href={PAGES.gates.path} className="btn-amber reveal mt-8">
            Explore Ratapani safari gates
          </Link>
        </div>
      </section>
    </>
  );
}
