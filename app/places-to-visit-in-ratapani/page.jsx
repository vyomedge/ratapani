import { Landmark, Waves, Castle, Route, Compass, MapPin, CalendarDays, Lightbulb, Footprints } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import PlacesGrid from '@/components/PlacesGrid';
import Tabs from '@/components/Tabs';
import { PageHero, KeyTakeaways, Faq, CtaBand, SectionHeading, Sources, FurtherReading } from '@/components/ui';
import { PAGES, SITE, FURTHER_READING, absoluteUrl } from '@/lib/site';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const META = {
  title: 'Places to Visit in Ratapani: 12 Sights, Forts & Lakes',
  description:
    'Best places to visit in and around Ratapani: Bhimbetka rock shelters, Ginnorgarh Fort, Ratapani & Kolar dams, Bhojpur temple, Saru Maru caves, safari zones and 1–2 day itineraries.',
  path: PAGES.places.path,
  image: 'bhimbetka-sandstone-towers-sunset',
  keywords: [
    'places to visit in Ratapani',
    'Ratapani tourist places',
    'places near Ratapani',
    'things to do in Ratapani',
    'Ratapani itinerary',
    'places to visit near Bhopal',
    'Bhimbetka and Ratapani',
  ],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Plan Your Visit' }, { name: 'Places to Visit in Ratapani', path: META.path }];

const PLACES = [
  {
    id: 'bhimbetka',
    name: 'Bhimbetka Rock Shelters',
    cats: ['heritage'],
    image: 'bhimbetka-rock-paintings-red-ochre',
    tag: 'UNESCO World Heritage',
    where: '≈ 45 km from Bhopal · inside Ratapani',
    text: 'More than 750 sandstone rock shelters spread over about 10 km, around 400 with prehistoric paintings of hunters, dancers and animals. Some shelters were lived in over 100,000 years ago.',
    highlights: 'Auditorium Cave · Zoo Rock · painted shelters',
    href: PAGES.bhimbetka.path,
  },
  {
    id: 'safari-zones',
    name: 'Jhiri, Delawadi & Bhimbetka Safari Zones',
    cats: ['wildlife'],
    image: 'delawadi-gate-ratapani-teak-trail',
    tag: 'Tiger safari',
    where: '34–52 km from Bhopal',
    text: 'The three tourist gates of Ratapani Tiger Reserve. Morning and evening safaris through teak and bamboo forest for tigers, leopards, sloth bears, deer and 249 bird species.',
    highlights: 'Tigers · leopards · sloth bears · birding',
    href: PAGES.gates.path,
  },
  {
    id: 'ginnorgarh',
    name: 'Ginnorgarh Fort',
    cats: ['heritage'],
    image: 'ginnorgarh-fort-ruins-forest',
    tag: 'Gond hill fort',
    where: '≈ 60 km from Bhopal · trek from Delawadi',
    text: 'Ruined Gond fort on a ~700 m hilltop inside the reserve, linked with Rani Kamlapati and Dost Mohammad Khan, founder of Bhopal State. Reached only on foot.',
    highlights: 'Palace ruins · gatehouses · cisterns · views',
    href: PAGES.ginnorgarh.path,
  },
  {
    id: 'ratapani-dam',
    name: 'Ratapani Dam',
    cats: ['lakes', 'wildlife'],
    image: 'ratapani-dam-reservoir-dusk',
    tag: 'Forest reservoir',
    where: 'Inside the Ratapani landscape',
    text: 'The reservoir that gives the forest its name. One of the two major waterbodies of Ratapani and a lifeline for wildlife in the dry months.',
    highlights: 'Forest views · birdlife · summer water point',
  },
  {
    id: 'barna',
    name: 'Barna Reservoir',
    cats: ['lakes'],
    image: 'ratapani-wildlife-sanctuary-aerial',
    tag: 'Large reservoir',
    where: 'Eastern edge of Ratapani, Raisen district',
    text: 'A large dam on the Barna river, a tributary of the Narmada, with wide waters framed by forested hills on the eastern side of the reserve.',
    highlights: 'Sunsets · waterbirds · scenic drives',
  },
  {
    id: 'kolar',
    name: 'Kolar Dam',
    cats: ['lakes'],
    image: 'kolar-reservoir-forest-hills',
    tag: 'Reservoir & viewpoint',
    where: 'West of Ratapani, Sehore district',
    text: 'The reservoir that supplies much of Bhopal’s water, set among forested Vindhya hills. A popular drive and sunset spot on the western side of the landscape.',
    highlights: 'Sunset views · picnic spots · birding',
  },
  {
    id: 'bhojpur',
    name: 'Bhojpur Shiva Temple (Bhojeshwar)',
    cats: ['spiritual', 'heritage'],
    image: 'bhojpur-ratapani-illustrated-map',
    tag: '11th-century temple',
    where: '≈ 28 km from Bhopal · north of Ratapani',
    text: 'An unfinished 11th-century temple built by the Paramara king Raja Bhoj, famous for one of India’s largest stone Shiva lingams above the Betwa river.',
    highlights: 'Giant lingam · Paramara architecture · Betwa',
  },
  {
    id: 'saru-maru',
    name: 'Saru Maru Caves',
    cats: ['heritage'],
    image: 'bhimbetka-rock-shelter-interior',
    tag: 'Ashokan heritage',
    where: 'Near Pangoraria village, Sehore district',
    text: 'An ancient Buddhist monastic site with rock-cut caves, Buddhist symbols and two inscriptions linked to Emperor Ashoka, including a Minor Rock Edict.',
    highlights: 'Ashokan edict · monastic caves · stupas',
  },
  {
    id: 'kathotiya',
    name: 'Kathotiya Rock Shelters',
    cats: ['heritage'],
    image: 'bhimbetka-rock-art-closeup',
    tag: 'Prehistoric rock art',
    where: 'Sehore district, west of Bhopal',
    text: 'Over 100 rock shelters on two hills with paintings in red, white and green, a quieter alternative to Bhimbetka for rock-art lovers.',
    highlights: 'Rock paintings · hill walks · fewer crowds',
  },
  {
    id: 'salkanpur',
    name: 'Salkanpur Vijayasan Devi Temple',
    cats: ['spiritual'],
    image: 'vindhya-sandstone-ridges-ratapani',
    tag: 'Hilltop shrine',
    where: 'Near Rehti, Sehore district',
    text: 'A revered hilltop temple of Goddess Vijayasan on a Vindhya peak, reached by a long flight of steps or by road, with wide views over the forest.',
    highlights: 'Hilltop darshan · Navratri fair · views',
  },
  {
    id: 'keri-mahadeo',
    name: 'Keri Mahadeo',
    cats: ['spiritual', 'wildlife'],
    image: 'ratapani-monsoon-green-hills',
    tag: 'Forest shrine',
    where: 'Within the Ratapani landscape',
    text: 'A Shiva shrine in the forested hills of Ratapani, listed by the Forest Department among the sanctuary’s nearby sights, at its best after the monsoon.',
    highlights: 'Forest setting · monsoon greenery',
  },
  {
    id: 'upper-lake',
    name: 'Bhopal Upper Lake (Bhojtal)',
    cats: ['lakes'],
    image: 'ratapani-winter-mist-forest',
    tag: 'Ramsar wetland',
    where: 'Bhopal city · gateway to Ratapani',
    text: 'An 11th-century lake attributed to Raja Bhoj and part of the Bhoj Wetland Ramsar site. A relaxed evening stop before or after your Ratapani trip.',
    highlights: 'Lakeside walks · boating · Van Vihar nearby',
  },
];

const FAQS = [
  {
    q: 'What are the best places to visit in Ratapani?',
    a: 'The top places are the Bhimbetka rock shelters (UNESCO), a tiger safari through the Jhiri, Delawadi or Bhimbetka gates, Ginnorgarh Fort, Ratapani Dam and Barna Reservoir. Nearby, Bhojpur temple, Saru Maru caves and Salkanpur temple make good additions.',
  },
  {
    q: 'Can I visit Bhimbetka and do a Ratapani safari on the same day?',
    a: 'Yes. Bhimbetka and the Jhiri gate are on the same NH-46 corridor south of Bhopal. Do a morning safari, then visit Bhimbetka before or after lunch.',
  },
  {
    q: 'Can I visit Ginnorgarh Fort on my own?',
    a: 'Ginnorgarh lies inside the tiger reserve and is reached on foot from the Delawadi side. Visits need Forest Department permission, and going with a local guide is strongly recommended for safety.',
  },
  {
    q: 'How many days are enough for Ratapani?',
    a: 'One day covers a safari and Bhimbetka. Two days let you add a second safari, Ginnorgarh Fort and Bhojpur temple at a relaxed pace.',
  },
  {
    q: 'What are the timings for Bhimbetka rock shelters?',
    a: 'Bhimbetka is managed by the Archaeological Survey of India and is open every day from about sunrise to sunset (roughly 7 am to 6 pm), all year round. A small entry fee is charged at the gate.',
  },
];

function Timeline({ items }) {
  return (
    <ol className="relative space-y-6 pl-8">
      <span className="absolute bottom-2 left-3 top-2 w-0.5 bg-surface-highest" aria-hidden />
      {items.map(([time, title, text]) => (
        <li key={title} className="relative">
          <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-surface shadow-sm" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-amber" />
          </span>
          <p className="font-label text-label-sm uppercase text-tertiary">{time}</p>
          <h3 className="mt-1 text-xl text-ink">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text}</p>
        </li>
      ))}
    </ol>
  );
}

export default function PlacesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ ...META, type: 'Article' }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Places to visit in and around Ratapani',
            itemListElement: PLACES.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'TouristAttraction',
                name: p.name,
                description: p.text,
                url: p.href ? absoluteUrl(p.href) : `${SITE.url}${META.path}#${p.id}`,
              },
            })),
          },
        ]}
      />
      <PageHero
        image={META.image}
        eyebrow="Vindhyan circuit · Heritage, lakes & wildlife"
        title="Places to Visit in Ratapani"
        intro="Sacred rocks, hidden waters and ancient forts: a curated guide to the sights in and around Ratapani Tiger Reserve, from the UNESCO Bhimbetka shelters to Gond hill forts, reservoirs and temples."
        crumbs={CRUMBS}
        badges={[
          { icon: Landmark, text: 'UNESCO Bhimbetka' },
          { icon: Compass, text: '12 key places' },
          { icon: MapPin, text: '≈ 30–70 km from Bhopal' },
          { icon: CalendarDays, text: 'Best Oct – Mar' },
        ]}
      />

      <div className="bg-surface py-16 md:py-20">
        <div className="container-site space-y-24">
          <KeyTakeaways
            eyebrow="Field briefing"
            title="What makes the Ratapani circuit special"
            items={[
              { icon: Landmark, title: 'Prehistory inside the forest', text: 'Bhimbetka’s painted shelters lie within Ratapani itself, a rare mix of tigers and World Heritage.' },
              { icon: Waves, title: 'Reservoirs and wetlands', text: 'Ratapani Dam, Barna and nearby Kolar Dam bring water, birds and sunset views.' },
              { icon: Castle, title: 'Forts in the jungle', text: 'Ginnorgarh’s Gond ruins stand on a hilltop inside the tiger reserve.' },
              { icon: Route, title: 'Easy from Bhopal', text: 'Most places are a 1–2 hour drive from Bhopal along NH-46 and nearby roads.' },
            ]}
          />

          <section aria-labelledby="places-title">
            <SectionHeading
              eyebrow="Destinations"
              title="12 Best Places to Visit in and Around Ratapani"
              intro="Filter by what you love: wildlife, heritage, lakes or temples."
              id="places-title"
            />
            <PlacesGrid places={PLACES} />
          </section>

          <section aria-labelledby="itinerary-title">
            <SectionHeading
              eyebrow="Itineraries"
              tone="ochre"
              title="Ratapani Itinerary: 1-Day and 2-Day Plans"
              intro="Balanced routes that pair early-morning safaris with heritage stops in the middle of the day."
              id="itinerary-title"
            />
            <div className="reveal rounded-card bg-white p-6 shadow-md md:p-8">
              <Tabs label="itinerary" tabs={[{ label: '1-day highlights', sub: 'Safari + Bhimbetka' }, { label: '2-day explorer', sub: 'Wildlife, forts & temples' }]}>
                <Timeline
                  items={[
                    ['Early morning · Jhiri gate', 'Morning tiger safari', 'Report at the gate before sunrise for the morning round through teak and bamboo forest.'],
                    ['Late morning', 'Breakfast in Obaidullaganj', 'Refuel at the town on NH-46, a short drive from both Jhiri and Bhimbetka.'],
                    ['Midday', 'Bhimbetka rock shelters', 'Spend 1.5–2 hours in the shaded shelters seeing the Auditorium Cave and the painted Zoo Rock.'],
                    ['Afternoon', 'Bhojpur temple', 'Head north to the 11th-century Bhojeshwar temple and its giant Shiva lingam.'],
                    ['Evening', 'Upper Lake, Bhopal', 'End the day by the lake in Bhopal.'],
                  ]}
                />
                <Timeline
                  items={[
                    ['Day 1 · morning', 'Safari at Jhiri or Delawadi', 'Start with a morning round in the core forest.'],
                    ['Day 1 · midday', 'Bhimbetka in depth', 'Explore more shelters at a slower pace with a guide.'],
                    ['Day 1 · evening', 'Second safari round', 'Book the evening round, ideally at the other gate, to see more of the forest.'],
                    ['Day 2 · morning', 'Ginnorgarh Fort trek', 'With permission and a guide, walk up from the Delawadi side to the Gond fort ruins.'],
                    ['Day 2 · afternoon', 'Bhojpur & return', 'Stop at Bhojpur temple on the way back to Bhopal.'],
                  ]}
                />
              </Tabs>
            </div>
          </section>

          <section aria-label="Visitor tips" className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              [Lightbulb, 'Pairing Bhimbetka with a safari', 'Wildlife is most active in the early morning, so book the morning round and visit Bhimbetka around midday, when the shelters give natural shade.'],
              [Footprints, 'Monsoon & trekking safety', 'Sandstone gets very slippery when wet. Wear shoes with good grip, stay on paths and avoid streams after heavy rain.'],
            ].map(([Icon, t, d]) => (
              <div key={t} className="reveal rounded-card bg-surface-low p-6">
                <Icon className="mb-3 h-7 w-7 text-amber" aria-hidden />
                <h3 className="mb-2 text-xl text-ink">{t}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{d}</p>
              </div>
            ))}
          </section>

          <FurtherReading
            title="In-depth travel guides"
            links={[
              { href: FURTHER_READING.bhimbetka, label: 'Bhimbetka: the complete rock art guide (2026)', text: 'Detailed visitor guide with history, paintings and practical tips.' },
              { href: FURTHER_READING.ginnorgarh, label: 'Ginnorgarh Fort: the forgotten Gond citadel of Ratapani', text: 'Trekking, history and Rani Kamlapati’s story in detail.' },
              { href: FURTHER_READING.tigerReserve, label: 'Ratapani Tiger Reserve: wildlife meets history', text: 'A traveller’s overview of Ratapani beyond the tiger.' },
            ]}
          />

          <div className="mx-auto max-w-4xl">
            <Faq faqs={FAQS} title="Places to Visit in Ratapani: FAQs" eyebrow="Clear answers" />
          </div>

          <Sources
            items={[
              { label: 'MP Tourism: Ratapani Tiger Reserve and nearby places', url: 'https://mptourism.com/ratapani-tiger-reserve-wilderness-near-bhopal.html' },
              { label: 'MP Forest Department e-brochure: Ratapani', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
              { label: 'UNESCO: Rock Shelters of Bhimbetka', url: 'https://whc.unesco.org/en/list/925/' },
            ]}
          />
        </div>
      </div>

      <CtaBand
        eyebrow="Plan the circuit"
        title="Ready to Explore the Ancient Vindhyan Heartland?"
        text="Check the safari gates and the best season, then build your own Ratapani circuit."
        primary={{ href: PAGES.gates.path, label: 'Safari gates' }}
        secondary={{ href: PAGES.bestTime.path, label: 'Best time to visit' }}
      />
    </>
  );
}
