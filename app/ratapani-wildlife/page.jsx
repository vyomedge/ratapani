import { PawPrint, Bird, ShieldCheck, Trees, Users, Footprints, Sun, Binoculars, Ear, Waves, Info } from 'lucide-react';
import Img from '@/components/Img';
import JsonLd from '@/components/JsonLd';
import SpeciesGrid from '@/components/SpeciesGrid';
import { PageHero, KeyTakeaways, Faq, CtaBand, SectionHeading, Sources, RelatedCards } from '@/components/ui';
import { PAGES } from '@/lib/site';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const META = {
  title: 'Ratapani Wildlife: Animals & Birds of Ratapani Tiger Reserve',
  description:
    'Ratapani wildlife guide: Bengal tiger, leopard, sloth bear, dhole, sambar, chital, nilgai and 249 bird species, with IUCN status and spotting tips.',
  path: PAGES.wildlife.path,
  image: 'indian-leopard-teak-branch-ratapani',
  keywords: ['Ratapani wildlife', 'animals in Ratapani', 'Ratapani birds', 'Ratapani leopard', 'Ratapani sloth bear'],
};
export const metadata = pageMetadata(META);

const CRUMBS = [{ name: 'Home', path: '/' }, { name: 'Explore' }, { name: 'Ratapani Wildlife', path: META.path }];

const SPECIES = [
  { image: 'bengal-tiger-dry-grass-ratapani', cat: 'carnivore', status: 'Endangered', role: 'Apex predator', name: 'Bengal Tiger', latin: 'Panthera tigris tigris', chance: 'Moderate', habitat: 'Teak valleys, ravines and areas near water', when: 'Early mornings; summer waterholes', note: '56 tigers were recorded in the 2022 census. Some range to the edge of Bhopal city, earning them the name “city tigers”.' },
  { image: 'indian-leopard-sandstone-boulders', cat: 'carnivore', status: 'Vulnerable', role: 'Rock specialist', name: 'Indian Leopard', latin: 'Panthera pardus fusca', chance: 'Moderate', habitat: 'Rocky ridges, gorges and boulder country', when: 'Dawn and late evening', note: 'Shares the forest with tigers by keeping to cliffs, rock shelters and tree branches.' },
  { image: 'sloth-bear-termite-mound', cat: 'carnivore', status: 'Vulnerable', role: 'Frequently seen', name: 'Sloth Bear', latin: 'Melursus ursinus', chance: 'Good', habitat: 'Bamboo slopes, mahua groves, termite mounds', when: 'Early morning and dusk', note: 'One of the most frequently seen large mammals in Ratapani, especially in spring when mahua flowers fall.' },
  { image: 'dhole-pack-riverbed', cat: 'carnivore', status: 'Endangered', role: 'Pack hunter', name: 'Dhole (Asiatic Wild Dog)', latin: 'Cuon alpinus', chance: 'Rare', habitat: 'Undisturbed forest and riverbeds', when: 'Morning hunts', note: 'Hunts in coordinated packs and keeps in touch with high-pitched whistles.' },
  { image: 'striped-hyena-rocky-outcrop', cat: 'carnivore', status: 'Near Threatened', role: 'Night scavenger', name: 'Striped Hyena', latin: 'Hyaena hyaena', chance: 'Rare', habitat: 'Rocky scrub and forest edges', when: 'Mostly at night', note: 'A shy scavenger whose powerful jaws crush bones, recycling the leftovers of predator kills.' },
  { image: 'golden-jackal-grassland', cat: 'carnivore', status: 'Least Concern', role: 'Adaptable forager', name: 'Golden Jackal', latin: 'Canis aureus', chance: 'Good', habitat: 'Open patches, forest edges and roads', when: 'Dawn and dusk', note: 'Often heard calling at dusk and sometimes seen trotting along safari tracks.' },
  { image: 'sambar-stag-forest-stream', cat: 'herbivore', status: 'Vulnerable', role: 'Largest deer', name: 'Sambar', latin: 'Rusa unicolor', chance: 'High', habitat: 'Wooded slopes, valleys and water', when: 'Mornings and evenings near water', note: 'India’s largest deer and a key prey species; its loud alarm “bell” often signals a predator.' },
  { image: 'chital-herd-forest-clearing', cat: 'herbivore', status: 'Least Concern', role: 'Herd grazer', name: 'Chital (Spotted Deer)', latin: 'Axis axis', chance: 'High', habitat: 'Forest clearings and edges', when: 'Throughout the day', note: 'The most commonly seen deer; herds often feed below langurs, which drop fruit and leaves.' },
  { image: 'nilgai-blue-bull-hillside', cat: 'herbivore', status: 'Least Concern', role: 'Largest antelope', name: 'Nilgai (Blue Bull)', latin: 'Boselaphus tragocamelus', chance: 'High', habitat: 'Open woodland, scrub and buffer areas', when: 'Early morning and late afternoon', note: 'Asia’s largest antelope, common on the drier, more open fringes of the reserve.' },
  { image: 'four-horned-antelope-chousingha', cat: 'herbivore', status: 'Vulnerable', role: 'Shy & rare', name: 'Four-horned Antelope', latin: 'Tetracerus quadricornis', chance: 'Rare', habitat: 'Hilly terrain with grass and cover', when: 'First light', note: 'The only wild mammal with four horns, found only in India and Nepal.' },
  { image: 'indian-wild-boar', cat: 'herbivore', status: 'Least Concern', role: 'Forest digger', name: 'Indian Wild Boar', latin: 'Sus scrofa cristatus', chance: 'Good', habitat: 'Moist valleys, streams and bamboo', when: 'Late afternoon into evening', note: 'Rooting boar turn over the soil, helping seeds spread through the forest.' },
  { image: 'gray-langur-teak-tree', cat: 'primate', status: 'Least Concern', role: 'Forest sentinel', name: 'Gray Langur', latin: 'Semnopithecus entellus', chance: 'High', habitat: 'Tree canopy and rocky outcrops', when: 'All day', note: 'Its sharp alarm bark from the treetops is one of the best clues that a tiger or leopard is on the move.' },
];

const BIRDS = [
  ['indian-peafowl-boulder', 'National bird', 'Indian Peafowl', 'Pavo cristatus', 'Common in forest clearings; its loud calls echo at dawn.'],
  ['crested-serpent-eagle', 'Raptor', 'Crested Serpent Eagle', 'Spilornis cheela', 'Soars over the canopy hunting snakes and lizards.'],
  ['white-rumped-vulture-cliff', 'Critically Endangered', 'White-rumped Vulture', 'Gyps bengalensis', 'Recorded in Ratapani; vultures nest on tall trees and cliffs.'],
  ['asian-paradise-flycatcher', 'State bird of MP', 'Indian Paradise Flycatcher', 'Terpsiphone paradisi', 'The male’s long white tail ribbons are a highlight of shady streams.'],
  ['stork-billed-kingfisher', 'Waterside hunter', 'Stork-billed Kingfisher', 'Pelargopsis capensis', 'One of several kingfishers found along forest streams and reservoirs.'],
  ['brown-fish-owl', 'Nocturnal', 'Brown Fish Owl', 'Ketupa zeylonensis', 'Roosts in shady gorges near pools and hunts fish at night.'],
];

const FAQS = [
  {
    q: 'Which animals can be seen in Ratapani?',
    a: 'Ratapani has more than 35 mammal species, including Bengal tiger, leopard, sloth bear, dhole, striped hyena, golden jackal, sambar, chital, nilgai, four-horned antelope, wild boar and gray langur, plus 249 bird species, 33 reptiles and 104 butterflies.',
  },
  {
    q: 'Can you see tigers in Ratapani?',
    a: 'Yes, but sightings are not guaranteed. 56 tigers were recorded in the 2022 census across a large forest. Your best chance is on early-morning rounds from March to June, when animals gather near water.',
  },
  {
    q: 'Are leopards common in Ratapani?',
    a: 'Leopards live throughout Ratapani, favouring rocky ridges, gorges and boulder country where tigers are less dominant. They are seen most often at dawn and dusk.',
  },
  {
    q: 'Can you see sloth bears on a daytime safari?',
    a: 'Yes. Sloth bears are among the most frequently seen large mammals in Ratapani, especially in the early morning and in spring when they feed on fallen mahua flowers and termite mounds.',
  },
  {
    q: 'How many bird species are found in Ratapani?',
    a: 'The Madhya Pradesh Forest Department records 249 bird species in Ratapani, including the Indian peafowl, crested serpent eagle, Indian paradise flycatcher, kingfishers and the critically endangered white-rumped vulture.',
  },
  {
    q: 'Are walking safaris allowed in Ratapani?',
    a: 'No. Safaris inside the reserve are done in vehicles on set routes with a forest guide; visitors must not get down in the forest except at designated points.',
  },
];

export default function WildlifePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ ...META, type: 'Article' })} />
      <PageHero
        image={META.image}
        eyebrow="Biodiversity dossier · Central Indian ecosystem"
        title="Ratapani Wildlife: Animals & Birds of Ratapani Tiger Reserve"
        intro="Tigers in the teak valleys, leopards on the sandstone ridges, sloth bears in the bamboo and 249 kinds of birds: a field guide to the animals of Ratapani and how to spot them."
        crumbs={CRUMBS}
        badges={[
          { icon: PawPrint, text: '35+ mammal species' },
          { icon: Bird, text: '249 bird species' },
          { icon: ShieldCheck, text: 'Tiger reserve since 2024' },
        ]}
      />

      {/* Stats */}
      <section aria-label="Wildlife in numbers" className="relative z-10 -mt-10">
        <div className="container-site">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card bg-ochre/20 shadow-lift md:grid-cols-5">
            {[
              ['Tigers', '56', '2022 tiger census'],
              ['Mammals', '35+', 'species recorded'],
              ['Birds', '249', 'species recorded'],
              ['Butterflies', '104', 'species recorded'],
              ['Reptiles', '33', '+ 10 amphibians'],
            ].map(([k, v, s], i) => (
              <div key={k} className={`bg-[#E8DFC7] p-5 ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
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
          <KeyTakeaways
            eyebrow="Wildlife dossier"
            title="Ratapani wildlife at a glance"
            items={[
              { icon: Users, title: 'Two big cats, one forest', text: 'Tigers hold the valleys and water; leopards keep to rocky ridges, cliffs and trees.' },
              { icon: PawPrint, title: 'Sloth bears and wild dogs', text: 'Bamboo slopes and mahua groves suit sloth bears; dholes roam the quieter forest.' },
              { icon: Trees, title: 'The prey base', text: 'Sambar, chital, nilgai and wild boar feed the predators; improving prey density is a conservation priority.' },
              { icon: Waves, title: 'Water draws wildlife', text: 'Ratapani Dam, Barna Reservoir and stream pools concentrate animals and birds in the dry season.' },
            ]}
          />

          <section aria-labelledby="species-title">
            <SectionHeading
              eyebrow="Species field guide"
              title="Animals in Ratapani: 12-Species Guide"
              intro="Conservation status is from the IUCN Red List. Sighting chance is general guidance for a typical safari, not a guarantee."
              id="species-title"
            />
            <SpeciesGrid species={SPECIES} />
          </section>

          <section aria-labelledby="birds-title">
            <SectionHeading
              eyebrow="Birds of the Vindhyas"
              tone="ochre"
              title="Birds of Ratapani: 249 Recorded Species"
              intro="From raptors over the teak canopy to kingfishers on the reservoirs, Ratapani is excellent for birding, especially in winter."
              id="birds-title"
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BIRDS.map(([img, tag, name, latin, text], i) => (
                <article key={name} className="reveal group relative h-80 overflow-hidden rounded-card bg-forest shadow-md" style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}>
                  <Img name={img} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="card-img-zoom" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 font-label text-label-sm uppercase text-white backdrop-blur-md">{tag}</span>
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <h3 className="text-headline-sm">{name}</h3>
                    <p className="font-label text-label-sm italic text-amber">{latin}</p>
                    <p className="mt-2 text-sm text-white/85">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="tips-title" className="reveal overflow-hidden rounded-[1.75rem] bg-forest bg-contour-light p-8 text-sand md:p-12">
            <span className="eyebrow text-amber">Field craft</span>
            <h2 id="tips-title" className="mb-8 text-[2rem] leading-tight text-white md:text-headline-lg">
              How to Spot Wildlife in Ratapani
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                [Ear, 'Listen for alarm calls', 'A langur’s sharp bark from the trees or a chital’s shrill whistle often means a tiger or leopard is moving nearby. Ask your driver to stop and wait.'],
                [Footprints, 'Read the tracks', 'Fresh pugmarks, scrapes and scat on the morning tracks show which way a big cat walked overnight. Forest guides read these signs expertly.'],
                [Sun, 'Watch the water in summer', 'From April to June, wildlife gathers at the remaining pools and dams. Waiting quietly near water is often more rewarding than driving.'],
                [Binoculars, 'Look up and along the ridges', 'Leopards rest on rocky ledges and horizontal branches. Scan cliffs and trees, not just the track ahead.'],
              ].map(([Icon, t, d]) => (
                <div key={t} className="flex gap-4 rounded-xl bg-white/5 p-5">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-amber" aria-hidden />
                  <div>
                    <h3 className="mb-1 text-xl text-white">{t}</h3>
                    <p className="text-sm leading-relaxed text-sand/75">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="checklist-title" className="reveal grid grid-cols-1 items-center gap-8 rounded-card bg-surface-low p-6 md:grid-cols-12 md:p-10">
            <div className="md:col-span-7">
              <span className="eyebrow text-primary">Checklist</span>
              <h2 id="checklist-title" className="mb-3 text-headline-sm text-ink md:text-headline-md">
                Ratapani Wildlife Checklist at a Glance
              </h2>
              <p className="mb-4 text-ink-soft">
                Species counts recorded by the Madhya Pradesh Forest Department. Carry a notebook or app and tick off what you see on each safari.
              </p>
              <p className="flex items-start gap-2 text-sm text-ink-soft">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> A downloadable field checklist is coming soon.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-3 md:col-span-5">
              {[
                ['Mammals', '35+'],
                ['Birds', '249'],
                ['Reptiles', '33'],
                ['Butterflies', '104'],
                ['Amphibians', '10'],
                ['Fish', '14'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <dd className="font-serif text-3xl font-semibold text-primary">{v}</dd>
                  <dt className="font-label text-label-sm uppercase text-outline">{k}</dt>
                </div>
              ))}
            </dl>
          </section>

          <div className="mx-auto max-w-4xl">
            <Faq faqs={FAQS} title="Ratapani Wildlife: FAQs" eyebrow="Wildlife questions" />
          </div>

          <RelatedCards
            cards={[
              { href: PAGES.bestTime.path, image: 'ratapani-summer-tiger-waterhole', tag: 'Seasons', title: 'Best Time to Visit Ratapani', text: 'When animals are easiest to see, month by month.' },
              { href: PAGES.tigerReserve.path, image: 'ratapani-tiger-reserve-tiger', tag: 'Tiger reserve', title: 'Ratapani Tiger Reserve', text: 'Tiger numbers, core and buffer, corridors.' },
              { href: PAGES.bookSafari.path, image: 'ratapani-tiger-safari-jeep-tiger-crossing', tag: 'Safari', title: 'Book Ratapani Tiger Safari', text: 'Booking steps, fees and timings.' },
            ]}
          />

          <Sources
            items={[
              { label: 'MP Forest Department e-brochure: Ratapani species counts', url: 'https://forest.mponline.gov.in/eBrochure/eBrochureDetailsV2.aspx?parkid=RTR' },
              { label: 'Wikipedia: Ratapani Tiger Reserve (fauna)', url: 'https://en.wikipedia.org/wiki/Ratapani_Tiger_Reserve' },
              { label: 'IUCN Red List of Threatened Species', url: 'https://www.iucnredlist.org/' },
            ]}
          />
        </div>
      </div>

      <CtaBand
        eyebrow="Into the field"
        title="See Ratapani Wildlife on a Tiger Safari"
        text="Pick your gate and season, then book a morning round for the best chance of sightings."
        primary={{ href: PAGES.gates.path, label: 'Explore safari gates' }}
        secondary={{ href: PAGES.bestTime.path, label: 'Seasonal sighting calendar' }}
      />
    </>
  );
}
