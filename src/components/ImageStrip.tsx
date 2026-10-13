import { useRef, useState } from 'react'
import { ImageViewer } from './ImageViewer'

export type StripImage = { src: string; alt: string; width: number; height: number; label: string }

// One compact row of screenshots that all share the same height (widths follow each
// image's proportions). Scrolls sideways on phones. Click an image to see it full size.
export function ImageStrip({ images }: { images: StripImage[] }) {
  const [open, setOpen] = useState<StripImage | null>(null)
  const openerRef = useRef<HTMLElement | null>(null)

  return (
    <>
      <div className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 tablet:mx-0 tablet:gap-4 tablet:overflow-visible tablet:px-0 tablet:pb-0">
        {images.map((image) => (
          <figure
            key={image.src}
            className="shrink-0 tablet:min-w-0 tablet:shrink tablet:[flex:var(--ar)_1_0%]"
            style={{ '--ar': image.width / image.height } as React.CSSProperties}
          >
            <button
              type="button"
              onClick={(e) => {
                openerRef.current = e.currentTarget
                setOpen(image)
              }}
              aria-label={`View ${image.label} full size`}
              className="block h-56 w-auto cursor-zoom-in overflow-hidden outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-red-600 tablet:h-auto tablet:w-full"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="block h-full w-auto tablet:h-auto tablet:w-full"
              />
            </button>
            <figcaption className="custom-p custom-p-sm mt-2 tracking-[0.1em] text-ink/50 uppercase">{image.label}</figcaption>
          </figure>
        ))}
      </div>

      <ImageViewer image={open} onClose={() => setOpen(null)} returnFocusTo={openerRef} />
    </>
  )
}

export default ImageStrip
