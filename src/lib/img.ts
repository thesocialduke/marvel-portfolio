import { thumbs } from '../data/thumbs'

// For images shown small (thumbnails, strips, grids): offers the browser the 480px copy made
// by scripts/make-thumbs.py alongside the original, so a phone picks the small file and a
// wide or high-density screen still gets the full one. `sizes` is how wide the image shows.
// Images without a copy (not in the list) are left as they are.
export function thumbProps(src: string, sizes: string) {
  const clean = src.split('?')[0]
  if (!thumbs.has(clean)) return { src }
  const small = clean.replace(/\.(webp|jpe?g|png)$/i, '-480.webp')
  return { src, srcSet: `${small} 480w, ${src} 1600w`, sizes }
}

// The small copy on its own, for places that take a single image, such as a video's poster
// frame (shown small in the page, and replaced by the video once it plays).
export function smallSrc(src: string) {
  const clean = src.split('?')[0]
  return thumbs.has(clean) ? clean.replace(/\.(webp|jpe?g|png)$/i, '-480.webp') : src
}
