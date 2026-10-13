import { useRef, useState, type MouseEvent, type RefObject } from 'react'
import { flushSync } from 'react-dom'
import { Dialog } from 'radix-ui'
import { cn } from '../lib/utils'

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
  /** For wide, detailed images: on phones the whole image shows first, and a tap zooms
   *  in 2x on the tapped spot (drag to move around, tap again to zoom back out). */
  scrollOnPhone?: boolean
}) {
  const [zoomed, setZoomed] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  function toggleZoom(e: MouseEvent<HTMLButtonElement>) {
    // Only phones zoom; larger screens already show the image big enough.
    if (!window.matchMedia('(max-width: 639px)').matches) return
    if (zoomed) {
      setZoomed(false)
      return
    }
    const rect = e.currentTarget.getBoundingClientRect()
    // A keyboard press has no pointer position, so zoom into the middle.
    const fx = e.detail === 0 ? 0.5 : (e.clientX - rect.left) / rect.width
    const fy = e.detail === 0 ? 0.5 : (e.clientY - rect.top) / rect.height
    flushSync(() => setZoomed(true))
    const box = boxRef.current
    if (!box) return
    // Keep the tapped spot under the finger.
    box.scrollLeft = fx * box.scrollWidth - box.clientWidth / 2
    box.scrollTop = fy * box.scrollHeight - box.clientHeight / 2
  }

  return (
    <Dialog.Root
      open={image !== null}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setZoomed(false)
          onClose()
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90" />
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
              <div
                ref={boxRef}
                className="max-h-[78dvh] w-[92vw] overflow-auto overscroll-contain tablet:w-auto tablet:overflow-visible"
              >
                <button
                  type="button"
                  onClick={toggleZoom}
                  aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
                  className={cn(
                    'block outline-none focus-visible:ring-2 focus-visible:ring-white tablet:cursor-default',
                    zoomed ? 'w-[184vw] cursor-zoom-out' : 'w-full cursor-zoom-in',
                    'tablet:w-auto',
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block h-auto w-full tablet:w-auto tablet:max-w-[min(92vw,var(--viewer-max))] tablet:max-h-[85dvh]"
                    style={{ '--viewer-max': `${Math.min(maxWidth, image.width)}px` } as React.CSSProperties}
                  />
                </button>
              </div>
              <p className="custom-p custom-p-sm tablet:hidden" style={{ color: 'rgb(255 255 255 / 0.75)' }}>
                {zoomed ? 'Drag to move around, tap to zoom out' : 'Tap the image to zoom in'}
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
