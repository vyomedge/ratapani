/**
 * Downloads every Stitch design image listed in data/images.json,
 * converts it to an optimised WebP file and saves it in public/images.
 *
 *   npm run images            -> download all images (overwrites existing)
 *   node scripts/fetch-images.mjs --if-missing
 *                             -> only download images that are not saved yet
 *                                (runs automatically before every build)
 *
 * After running it once on your computer, commit public/images to GitHub so
 * the images are stored permanently with the website.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await fs.readFile(path.join(root, 'data/images.json'), 'utf8'));
const outDir = path.join(root, 'public/images');
const onlyMissing = process.argv.includes('--if-missing');

await fs.mkdir(outDir, { recursive: true });

const exists = async (p) => fs.access(p).then(() => true).catch(() => false);

let saved = 0;
let skipped = 0;
const failed = [];

for (const [name, item] of Object.entries(manifest)) {
  if (!item.url) continue; // local image, already in the repo
  const file = path.join(outDir, `${name}.webp`);
  if (onlyMissing && (await exists(file))) {
    skipped++;
    continue;
  }
  try {
    const res = await fetch(item.url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await sharp(buf)
      .resize({ width: item.width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(file);
    saved++;
    console.log(`  ✓ ${name}.webp`);
  } catch (err) {
    failed.push(`${name} (${err.message})`);
  }
}

console.log(`\nImages saved: ${saved}, already present: ${skipped}, failed: ${failed.length}`);
if (failed.length) {
  console.warn('These images could not be downloaded:\n  - ' + failed.join('\n  - '));
  console.warn('The site still builds; those images will show the forest-green fallback colour.');
}
