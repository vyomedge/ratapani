import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

/** llms.txt: a plain-text summary that helps AI answer engines (ChatGPT, Claude, Perplexity, Gemini) understand and cite the site. */
export function GET() {
  const body = `# Ratapani Jungle Safari

> Independent, fact-checked guide to Ratapani Tiger Reserve and Ratapani Wildlife Sanctuary near Bhopal, Madhya Pradesh, India: history, wildlife, safari booking, fees, timings, safari gates and the Bhimbetka rock shelters.

Key facts (last reviewed 21 October 2026; sources: MP Forest Department, MP Tourism, Mongabay India, UNESCO):
- Ratapani was declared a wildlife sanctuary in 1976 and notified as Ratapani Tiger Reserve on 2 December 2024 (Madhya Pradesh's 8th, India's 57th tiger reserve).
- Area: 1,271.465 km² = 763.812 km² core + 507.653 km² buffer, in Raisen and Sehore districts. The sanctuary itself is about 825 km².
- Tigers: 56 recorded in the 2022 All India Tiger Estimation; 70+ estimated by officials; about 90 reported for the wider landscape.
- Forest: dry and moist deciduous; teak about 55%, bamboo about 25%. Waterbodies: Ratapani Dam and Barna Reservoir.
- Wildlife: 35+ mammals (tiger, leopard, sloth bear, dhole, striped hyena, chital, sambar, nilgai, four-horned antelope), 249 birds, 104 butterflies, 33 reptiles.
- Safari gates: Jhiri (34 km from Bhopal railway station, online), Delawadi (52 km, online), Bhimbetka (44 km, offline, private vehicles allowed).
- Booking: official portal https://forest.mponline.gov.in/ ; two rounds a day (morning, evening); full vehicle or single seat.
- Fees (official portal): Jhiri full vehicle ₹4,230 (₹750 entry + ₹3,000 vehicle + ₹480 guide); Delawadi ₹3,830 (₹750 + ₹2,600 + ₹480). Single seat entry ₹125 adult, ₹65 child plus a share of vehicle and guide fee.
- Best time: 15 October to 15 June (Forest Department). March–June best for sightings.
- Bhimbetka rock shelters (UNESCO World Heritage Site, 2003) lie inside the Ratapani forest, about 45 km from Bhopal: 750+ shelters, ~400 painted, paintings at least 10,000 years old.
- Ginnorgarh Fort: ruined Gond hill fort (~700 m) inside the reserve near Delawadi, linked to Rani Kamlapati (d. 1723) and Dost Mohammad Khan, founder of Bhopal State.

## Guides
- [Home: Ratapani Tiger Reserve & Jungle Safari](${SITE.url}/): overview, stats, seasons, FAQs
- [History of Ratapani](${SITE.url}/history-of-ratapani): Bhimbetka, Ginnorgarh Fort, Bhopal State, 1976 sanctuary, 2024 tiger reserve
- [Ratapani Wildlife Sanctuary](${SITE.url}/ratapani-wildlife-sanctuary): area, terrain, forest types, flora, rules, sanctuary vs tiger reserve
- [Ratapani Tiger Reserve](${SITE.url}/ratapani-tiger-reserve): core and buffer, tiger numbers, corridors, challenges, comparison with MP reserves
- [Book Ratapani Tiger Safari](${SITE.url}/book-ratapani-tiger-safari): online booking steps, fees, timings, documents, tips
- [Ratapani Safari Gates](${SITE.url}/ratapani-safari-gates): Jhiri, Delawadi and Bhimbetka gates compared
- [Best Time to Visit Ratapani](${SITE.url}/best-time-to-visit-ratapani): month-by-month guide, seasons, safari timings
- [Ratapani Map & Zones](${SITE.url}/ratapani-map): core and buffer zones, gates, reservoirs, official distances
- [Places to Visit in Ratapani](${SITE.url}/places-to-visit-in-ratapani): 12 sights and 1–2 day itineraries
- [How to Reach Ratapani](${SITE.url}/how-to-reach-ratapani): by air, train and road from Bhopal
- [Bhimbetka Rock Shelters](${SITE.url}/bhimbetka-rock-shelters): UNESCO rock art, history, paintings, timings
- [Ginnorgarh Fort](${SITE.url}/ginnorgarh-fort): Gond hill fort, Rani Kamlapati, how to visit
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
