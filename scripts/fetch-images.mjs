/**
 * Downloads every Stitch design image listed in data/images.json at FULL
 * resolution, converts it to a high-quality WebP file and saves it in
 * public/images.
 *
 *   npm run images            -> download all images (overwrites existing)
 *   node scripts/fetch-images.mjs --if-missing
 *                             -> only download images that are not saved yet
 *                                (runs automatically before every build)
 *
 * Google's image links return a small 512px preview unless a size is asked
 * for, so each link is tried with "=s0" (original size) first.
 * Images marked "local": true are already in the repo and are never touched.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await fs.readFile(path.join(root, 'data/images.json'), 'utf8'));
const outDir = path.join(root, 'public/images');
const onlyMissing = process.argv.includes('--if-missing');
const MAX_WIDTH = 2400;

await fs.mkdir(outDir, { recursive: true });
const exists = async (p) => fs.access(p).then(() => true).catch(() => false);

async function download(url) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const meta = await sharp(buf).metadata();
  return { buf, width: meta.width || 0 };
}

/** Try every link and size variant; keep the largest image found. */
async function bestImage(urls) {
  let best = null;
  let lastErr;
  for (const base of urls) {
    for (const variant of [`${base}=s0`, `${base}=w${MAX_WIDTH}`, base]) {
      try {
        const img = await download(variant);
        if (!best || img.width > best.width) best = img;
        if (img.width >= 1000) return best;
      } catch (err) {
        lastErr = err;
      }
    }
  }
  if (!best) throw lastErr || new Error('no image');
  return best;
}

let saved = 0;
let skipped = 0;
const failed = [];
const small = [];

for (const [name, item] of Object.entries(manifest)) {
  if (item.local || !item.urls?.length) continue;
  const file = path.join(outDir, `${name}.webp`);
  if (onlyMissing && (await exists(file))) {
    skipped++;
    continue;
  }
  try {
    const { buf, width } = await bestImage(item.urls);
    await sharp(buf)
      .resize({ width: Math.min(MAX_WIDTH, item.width || MAX_WIDTH), withoutEnlargement: true })
      .webp({ quality: 86, effort: 6, smartSubsample: true })
      .toFile(file);
    saved++;
    if (width < 1000) small.push(`${name} (${width}px)`);
    console.log(`  ✓ ${name}.webp  (${width}px source)`);
  } catch (err) {
    failed.push(`${name} (${err.message})`);
  }
}

console.log(`\nImages saved: ${saved}, already present: ${skipped}, failed: ${failed.length}`);
if (small.length) console.warn('Low-resolution sources (replace with your own files if they look soft):\n  - ' + small.join('\n  - '));
if (failed.length) {
  console.warn('These images could not be downloaded:\n  - ' + failed.join('\n  - '));
  console.warn('The site still builds; those images will show the forest-green fallback colour.');
}
