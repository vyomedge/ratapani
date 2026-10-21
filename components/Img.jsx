import Image from 'next/image';
import images from '@/data/images.json';

/**
 * Optimised image from data/images.json. Always fills its parent, so the parent
 * must have a size (e.g. h-80 relative). Alt text comes from the manifest so it
 * stays consistent and descriptive everywhere.
 */
export default function Img({ name, sizes = '100vw', priority = false, className = '', alt, position }) {
  const meta = images[name];
  if (!meta) throw new Error(`Unknown image "${name}" – add it to data/images.json`);
  return (
    <Image
      src={`/images/${name}.webp`}
      alt={alt ?? meta.alt}
      fill
      sizes={sizes}
      priority={priority}
      fetchPriority={priority ? 'high' : undefined}
      quality={priority ? 78 : 82}
      className={`object-cover ${priority ? "" : "img-settle "}${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
