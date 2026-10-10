import { useRef, useState } from 'react'
import { Dialog } from 'radix-ui'

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

      <Dialog.Root open={open !== null} onOpenChange={(isOpen) => !isOpen && setOpen(null)}>
        <Dialog.Portal>
          {/* Radix Dialog handles Escape, focus trapping, scroll lock and giving focus back. */}
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85" />
          <Dialog.Content
            aria-describedby={undefined}
            onCloseAutoFocus={(e) => {
              e.preventDefault()
              openerRef.current?.focus()
            }}
            className="fixed inset-0 z-50 grid place-items-center p-4 outline-none"
            onClick={(e) => e.target === e.currentTarget && setOpen(null)}
          >
            <Dialog.Title className="sr-only">{open?.label}</Dialog.Title>
            <Dialog.Close asChild>
              <button type="button" aria-label="Close image" className="absolute top-4 right-4 cursor-pointer p-1" style={{ color: '#fff' }}>
                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </button>
            </Dialog.Close>
            {open && <img src={open.src} alt={open.alt} className="max-h-full max-w-full object-contain" />}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default ImageStrip
