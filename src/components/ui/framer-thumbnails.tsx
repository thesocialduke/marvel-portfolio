import { animate, motion, useMotionValue } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export type ThumbnailItem = {
  id: number
  url: string
  title: string
}

// Placeholder set built from real photos already in the project — swap
// these out once the final curated images are supplied.
export const items: ThumbnailItem[] = [
  { id: 1, url: '/case-studies/bitget.jpg', title: 'Bitget Africa' },
  { id: 2, url: '/case-studies/base.jpg', title: 'Base Southern Africa' },
  { id: 3, url: '/case-studies/binance.jpg', title: 'Binance Street Interviews' },
  { id: 4, url: '/events/ethiopia-blockchain-week.jpg', title: 'Ethiopia Blockchain Week' },
  { id: 5, url: '/events/padel-event-capetown.jpg', title: 'VIP Padel Event' },
  { id: 6, url: '/events/kol-community-meetup.jpg', title: 'KOL Community Meetup' },
]

const FULL_WIDTH_PX = 120
const COLLAPSED_WIDTH_PX = 35
const GAP_PX = 2
const MARGIN_PX = 2

export function FramerCarouselThumbnails({ images = items }: { images?: ThumbnailItem[] }) {
  const [index, setIndex] = useState<number>(0)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const x = useMotionValue(0)

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1
      const targetX = -index * containerWidth

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      })
    }
  }, [index, x, isDragging])

  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col gap-3">
        {/* Main Carousel */}
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_e, info) => {
              setIsDragging(false)
              const containerWidth = containerRef.current?.offsetWidth || 1
              const offset = info.offset.x
              const velocity = info.velocity.x

              let newIndex = index

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1
              }
              // Otherwise use offset threshold (30% of container width)
              else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1
              }

              // Clamp index
              newIndex = Math.max(0, Math.min(images.length - 1, newIndex))
              setIndex(newIndex)
            }}
            style={{ x }}
          >
            {images.map((item) => (
              <div key={item.id} className="h-[400px] w-full shrink-0">
                <img
                  src={item.url}
                  alt={item.title}
                  className="pointer-events-none size-full select-none object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Previous Button */}
          <motion.button
            type="button"
            aria-label="Previous image"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute top-1/2 left-4 z-10 flex size-10 -translate-y-1/2 items-center justify-center shadow-lg transition-transform ${
              index === 0 ? 'cursor-not-allowed opacity-40' : 'bg-white opacity-70 hover:scale-110 hover:opacity-100'
            }`}
          >
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            type="button"
            aria-label="Next image"
            disabled={index === images.length - 1}
            onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
            className={`absolute top-1/2 right-4 z-10 flex size-10 -translate-y-1/2 items-center justify-center shadow-lg transition-transform ${
              index === images.length - 1
                ? 'cursor-not-allowed opacity-40'
                : 'bg-white opacity-70 hover:scale-110 hover:opacity-100'
            }`}
          >
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        <Thumbnails images={images} index={index} setIndex={setIndex} />
      </div>
    </div>
  )
}

function Thumbnails({
  images,
  index,
  setIndex,
}: {
  images: ThumbnailItem[]
  index: number
  setIndex: (index: number) => void
}) {
  const thumbnailsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX
      }

      scrollPosition += MARGIN_PX

      const containerWidth = thumbnailsRef.current.offsetWidth
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2
      scrollPosition -= centerOffset

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      })
    }
  }, [index])

  return (
    <div ref={thumbnailsRef} className="scrollbar-hide overflow-x-auto">
      <div className="flex h-20 gap-1 pb-2" style={{ width: 'fit-content' }}>
        {images.map((item, i) => (
          <motion.button
            type="button"
            key={item.id}
            aria-label={item.title}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative h-full shrink-0 overflow-hidden"
          >
            <img src={item.url} alt={item.title} className="pointer-events-none size-full object-cover select-none" />
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default FramerCarouselThumbnails
