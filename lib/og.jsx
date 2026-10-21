import { ImageResponse } from 'next/og';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

export const OG_SIZE = { width: 1200, height: 630 };

const root = process.cwd();
// Static at build time, so skip output tracing of the project folder.
const read = (p) => fs.readFile(path.join(/*turbopackIgnore: true*/ root, p));

/**
 * Branded 1200×630 social-share image (Open Graph / Twitter / WhatsApp):
 * page photo + dark gradient + keyword title + logo. Rendered once at build.
 */
export async function renderOg({ title, eyebrow, image }) {
  const [serif, sans, logo] = await Promise.all([
    read('lib/og-fonts/newsreader-latin-500-normal.woff'),
    read('lib/og-fonts/manrope-latin-700-normal.woff'),
    read('public/logo-emblem-light.svg'),
  ]);

  let bg = null;
  try {
    const jpg = await sharp(await read(`public/images/${image}.webp`))
      .resize(1200, 630, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toBuffer();
    bg = `data:image/jpeg;base64,${jpg.toString('base64')}`;
  } catch {
    bg = null; // image not downloaded yet: plain forest background
  }
  const logoSrc = `data:image/svg+xml;base64,${logo.toString('base64')}`;

  const png = new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#1F3A2E' }}>
        {bg && <img src={bg} width={1200} height={630} style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, objectFit: 'cover' }} />}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: 'flex',
            backgroundImage: 'linear-gradient(90deg, rgba(20,24,21,0.94) 0%, rgba(20,24,21,0.72) 55%, rgba(20,24,21,0.2) 100%)',
          }}
        />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '56px 64px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img src={logoSrc} width={84} height={45} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'Newsreader', fontSize: 34, color: '#F2EADB', lineHeight: 1 }}>RATAPANI</span>
              <span style={{ fontFamily: 'Manrope', fontSize: 14, letterSpacing: 6, color: '#E08A1E', marginTop: 6 }}>JUNGLE SAFARI</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 820 }}>
            {eyebrow && (
              <span style={{ fontFamily: 'Manrope', fontSize: 22, letterSpacing: 4, color: '#E08A1E', textTransform: 'uppercase', marginBottom: 16 }}>
                {eyebrow}
              </span>
            )}
            <span style={{ fontFamily: 'Newsreader', fontSize: title.length > 40 ? 64 : 76, lineHeight: 1.05, color: '#FFFFFF' }}>{title}</span>
          </div>
          <span style={{ fontFamily: 'Manrope', fontSize: 20, color: 'rgba(242,234,219,0.75)' }}>ratapanijunglesafari.com</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Newsreader', data: serif, weight: 500, style: 'normal' },
        { name: 'Manrope', data: sans, weight: 700, style: 'normal' },
      ],
    }
  );
  // PNG photos are ~2 MB; WhatsApp/LinkedIn want small files, so ship a JPEG.
  const jpg = await sharp(Buffer.from(await png.arrayBuffer())).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  return new Response(jpg, { headers: { 'Content-Type': 'image/jpeg' } });
}
