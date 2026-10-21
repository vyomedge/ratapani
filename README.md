# Ratapani Jungle Safari

The complete, SEO-optimised guide to **Ratapani Tiger Reserve** near Bhopal, built with **Next.js (React)**. It is the "R + N" of MERN; MongoDB + Express (the admin panel and blog) can be added later without rebuilding the site.

## Pages (14)

| Page | URL |
|---|---|
| Home | `/` |
| History of Ratapani | `/history-of-ratapani` |
| Ratapani Wildlife Sanctuary | `/ratapani-wildlife-sanctuary` |
| Ratapani Tiger Reserve | `/ratapani-tiger-reserve` |
| Ratapani Wildlife | `/ratapani-wildlife` |
| Bhimbetka Rock Shelters | `/bhimbetka-rock-shelters` |
| Ginnorgarh Fort | `/ginnorgarh-fort` |
| Book Ratapani Tiger Safari | `/book-ratapani-tiger-safari` |
| Ratapani Safari Gates | `/ratapani-safari-gates` |
| Best Time & Safari Timings | `/best-time-to-visit-ratapani` |
| Ratapani Map & Zones | `/ratapani-map` |
| Places to Visit in Ratapani | `/places-to-visit-in-ratapani` |
| How to Reach Ratapani | `/how-to-reach-ratapani` |
| Ratapani FAQs | `/ratapani-faqs` |

New pages: add the page in `app/<slug>/page.jsx`, register it in `lib/site.js` (`PAGES`, `live: true`) and it appears in the menu, footer and sitemap automatically.

---

## Step-by-step for beginners

### 1. Install the tools (one time)
1. Install **Node.js 20 or newer** (LTS) from https://nodejs.org
2. Install **Git** from https://git-scm.com
3. You already have **VS Code**.

### 2. Get the code on your computer
Open VS Code → `Terminal` → `New Terminal`, then run:

```bash
git clone https://github.com/vyomedge/ratapani.git
cd ratapani
npm install
```

### 3. Download the design images (important, do this once)
The Stitch images are hosted on Google. This command downloads all of them, converts them to fast WebP files and saves them in `public/images`:

```bash
npm run images
```

Then save them into GitHub permanently:

```bash
git add public/images
git commit -m "Add website images"
git push
```

### 4. Preview the website
```bash
npm run dev
```
Open http://localhost:3000 in your browser. Press `Ctrl + C` in the terminal to stop.

### 5. Put it live on Vercel
1. Go to https://vercel.com, log in with GitHub.
2. Click **Add New → Project**, choose the `ratapani` repository, click **Deploy**. (No settings need changing.)
3. After deploy: **Project → Settings → Domains → Add** your domain (e.g. `ratapanijunglesafari.com`) and follow the DNS instructions shown there at your domain provider.
4. In **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` = `https://www.yourdomain.com` (your exact final domain), then **Redeploy**.

Every time you `git push`, Vercel updates the live site automatically.

### 6. After going live (SEO setup)
1. **Google Search Console** (https://search.google.com/search-console): add your domain, verify, then submit `https://www.yourdomain.com/sitemap.xml`.
2. **Bing Webmaster Tools** (https://www.bing.com/webmasters): import from Google Search Console. Bing also powers ChatGPT search.
3. Optional: paste verification codes in `app/layout.jsx` (see the `verification` comment).

---

## Where to edit things

| What | File |
|---|---|
| Domain, site name, "last updated" date | `lib/site.js` |
| Menu pages | `lib/site.js` (`PAGES`, `NAV`) |
| Page text | `app/<page-name>/page.jsx` |
| Image list, file names and alt text | `data/images.json` |
| Colours and fonts | `tailwind.config.js`, `app/layout.jsx` |
| Logo | `public/logo-emblem.svg` |

To replace an image with your own photo, save it as `public/images/<same-name>.webp` (keep the name).

## SEO / AEO / GEO built in
- Unique keyword-targeted title, meta description and canonical URL on every page; Open Graph and Twitter cards
- Structured data (JSON-LD): Organization, WebSite, TouristAttraction/Park with geo-coordinates, Article, BreadcrumbList, FAQPage, HowTo
- "Key takeaways" answer boxes and FAQ sections written as direct answers (for Google AI Overviews, ChatGPT, Perplexity)
- `sitemap.xml`, `robots.txt` (open to Google and AI crawlers), `llms.txt` summary for AI engines
- Sources list and "last updated" date on every page (trust signals)
- Self-hosted fonts, optimised AVIF/WebP images, static pages, no layout shift: Lighthouse 88–100 performance, 100 accessibility / best practices / SEO in testing

### Added in the SEO + motion pass

- **Social share images**: every page has its own 1200×630 JPEG (`opengraph-image.jsx` / `twitter-image.jsx`), built from the page photo.
- **Image sitemap**: `/sitemap.xml` lists every photo used on each page, so Google Images can index them.
- **Extra schema**: TouristDestination (home), ItemList of gates, Speakable, ImageObject.
- **301 redirects** for common misspellings (`/bhimbetika`, `/ginnourgarh-fort`, `/ratapani-tiger-safari`, `/ratapani-gates` …) in `next.config.mjs`.
- **HSTS** security header.
- **Search Console / Bing verification**: in Vercel → Settings → Environment Variables add
  `NEXT_PUBLIC_GOOGLE_VERIFICATION` and `NEXT_PUBLIC_BING_VERIFICATION` (only the code, not the whole tag), then redeploy.
- **IndexNow** (instant indexing on Bing, Yandex and others): after each deploy run `npm run indexnow`.
- **Animations** (all switched off for visitors who prefer reduced motion): hero entrance, scroll progress bar, reveal on scroll, image settle, card lift, button shine, eyebrow underline, walking pugmarks.
