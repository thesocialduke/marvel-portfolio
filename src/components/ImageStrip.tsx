import { useEffect, useState } from 'react'

export type StripImage = { src: string; alt: string; width: number; height: number; label: string }

// One compact row of screenshots that all share the same height (widths follow each
// image's proportions). Scrolls sideways on phones. Click an image to see it full size.
export function ImageStrip({ images }: { images: StripImage[] }) {
  const [open, setOpen] = useState<StripImage | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open])

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
              onClick={() => setOpen(image)}
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

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.label}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close image"
            className="absolute top-4 right-4 cursor-pointer p-1"
            style={{ color: '#fff' }}
          >
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
          <img
            src={open.src}
            alt={open.alt}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default ImageStrip
