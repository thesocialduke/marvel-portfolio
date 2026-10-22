import { useRef, useState } from 'react'
import { ImageViewer } from './ImageViewer'

export type StripImage = { src: string; alt: string; width: number; height: number; label: string }

// One compact row of screenshots that all share the same height (widths follow each
// image's proportions). Scrolls sideways on phones. Click an image to see it full size;
// a small badge on each one says so.
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
              className="group relative block h-56 w-auto cursor-zoom-in overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-red-600 tablet:h-auto tablet:w-full"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="block h-full w-auto tablet:h-auto tablet:w-full"
              />
              {/* Visible cue that the screenshot opens larger (phones have no zoom cursor).
                  Same badge as the community map on the Bitget page. */}
              <span
                aria-hidden="true"
                className="absolute right-2 bottom-2 inline-flex items-center gap-1 bg-ink px-1.5 py-1 font-modernist text-[10px] leading-none font-semibold tracking-[0.1em] whitespace-nowrap uppercase transition-colors duration-200 group-hover:bg-red-600 group-focus-visible:bg-red-600 tablet:right-3 tablet:bottom-3 text-page group-hover:text-light group-focus-visible:text-light"
              >
                <svg className="size-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
                </svg>
                <span className="tablet:hidden">Tap to enlarge</span>
                <span className="hidden tablet:inline">View full size</span>
              </span>
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
