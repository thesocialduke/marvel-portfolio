import type { RefObject } from 'react'
import { Dialog } from 'radix-ui'

export type ViewerImage = { src: string; alt: string; width: number; label: string }

// On-page image viewer shared by the screenshot strip and other tappable images.
// Radix Dialog handles Escape, focus trapping, scroll lock and giving focus back;
// a click on the dark backdrop or the X also closes it. The image is shown at a
// comfortable size (never full-bleed, never larger than the file itself).
export function ImageViewer({
  image,
  onClose,
  returnFocusTo,
  maxWidth = 880,
  scrollOnPhone = false,
}: {
  image: ViewerImage | null
  onClose: () => void
  /** The button that opened the viewer, so keyboard focus goes back to it on close. */
  returnFocusTo: RefObject<HTMLElement | null>
  /** Largest width in px the image is shown at. */
  maxWidth?: number
  /** For wide, detailed images: on phones show it larger and let it scroll sideways
   *  (and pinch-zoom) instead of shrinking it to the screen width. */
  scrollOnPhone?: boolean
}) {
  return (
    <Dialog.Root open={image !== null} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85" />
        <Dialog.Content
          aria-describedby={undefined}
          onCloseAutoFocus={(e) => {
            e.preventDefault()
            returnFocusTo.current?.focus()
          }}
          className="fixed inset-0 z-50 grid place-items-center p-4 outline-none"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <Dialog.Title className="sr-only">{image?.label}</Dialog.Title>
          <Dialog.Close asChild>
            <button type="button" aria-label="Close image" className="absolute top-4 right-4 cursor-pointer p-1" style={{ color: '#fff' }}>
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </Dialog.Close>
          {image && scrollOnPhone && (
            <div className="flex max-w-full flex-col items-center gap-3">
              <div className="max-h-[78dvh] w-[92vw] overflow-auto overscroll-contain tablet:w-auto tablet:overflow-visible">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-auto w-[1100px] max-w-none tablet:w-auto tablet:max-w-[min(92vw,var(--viewer-max))] tablet:max-h-[85dvh]"
                  style={{ '--viewer-max': `${Math.min(maxWidth, image.width)}px` } as React.CSSProperties}
                />
              </div>
              <p className="custom-p custom-p-sm tracking-wide uppercase tablet:hidden" style={{ color: 'rgb(255 255 255 / 0.75)' }}>
                Drag to explore · pinch to zoom
              </p>
            </div>
          )}
          {image && !scrollOnPhone && (
            <img
              src={image.src}
              alt={image.alt}
              className="h-auto w-auto object-contain"
              style={{ maxWidth: `min(92vw, ${maxWidth}px, ${image.width}px)`, maxHeight: '85dvh' }}
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
