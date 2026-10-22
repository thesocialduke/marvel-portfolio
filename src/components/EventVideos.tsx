import { useRef, useState } from 'react'
import { Dialog } from 'radix-ui'

export type EventVideo = {
  /** YouTube video id */
  id: string
  /** Short name shown under the thumbnail */
  name: string
  place: string
  /** Full title as published on YouTube */
  youtubeTitle: string
  thumb: string
  /** m:ss */
  length: string
}

// A row of event highlight videos. Only the local thumbnails load with the page; the
// YouTube player loads when someone presses play, inside an on-page dialog (Radix:
// Escape, backdrop click or the X close it, focus goes back to the thumbnail).
// Sideways scroll on phones, a grid of three on laptops.
export function EventVideos({
  videos,
  twoUp = false,
  limit,
}: {
  videos: EventVideo[]
  twoUp?: boolean
  /** Show only this many until "Show all" is pressed. */
  limit?: number
}) {
  const [playing, setPlaying] = useState<EventVideo | null>(null)
  const [expanded, setExpanded] = useState(false)
  const shown = limit && !expanded ? videos.slice(0, limit) : videos
  const openerRef = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <ul className={`-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 tablet:mx-0 tablet:grid tablet:grid-cols-2 tablet:gap-6 tablet:overflow-visible tablet:px-0 tablet:pb-0 ${twoUp ? '' : 'laptop:grid-cols-3'}`}>
        {shown.map((video) => (
          <li key={video.id} className="w-[78vw] shrink-0 snap-start tablet:w-auto">
            <button
              type="button"
              onClick={(e) => {
                openerRef.current = e.currentTarget
                setPlaying(video)
              }}
              aria-label={`Play ${video.name}, ${video.place}`}
              className="group relative block aspect-video w-full cursor-pointer overflow-hidden bg-graphite outline-none after:pointer-events-none after:absolute after:inset-0 after:outline after:outline-1 after:-outline-offset-1 after:outline-ink/10 after:content-[''] focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            >
              <img
                src={video.thumb}
                alt=""
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center bg-red-600 transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none"
              >
                <span className="ml-1 border-y-[8px] border-l-[13px] border-y-transparent border-l-white" />
              </span>
              <span
                aria-hidden="true"
                className="absolute right-2 bottom-2 bg-black/75 px-1.5 py-0.5 font-modernist text-[11px] leading-none font-semibold tabular-nums"
                style={{ color: '#fff' }}
              >
                {video.length}
              </span>
            </button>
            <p className="custom-h4 custom-h4-bold mt-3 text-balance">{video.name}</p>
            <p className="custom-p custom-p-sm mt-1 text-ink/60">{video.place}</p>
          </li>
        ))}
      </ul>
      {limit && videos.length > limit && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="custom-p custom-p-sm mt-5 cursor-pointer underline underline-offset-4 outline-none transition-opacity duration-150 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-red-600"
        >
          {expanded ? 'Show fewer' : `Show all ${videos.length}`}
        </button>
      )}

      <Dialog.Root open={playing !== null} onOpenChange={(open) => !open && setPlaying(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90" />
          <Dialog.Content
            aria-describedby={undefined}
            onCloseAutoFocus={(e) => {
              e.preventDefault()
              openerRef.current?.focus()
            }}
            onClick={(e) => e.target === e.currentTarget && setPlaying(null)}
            className="fixed inset-0 z-50 grid place-items-center p-4 outline-none"
          >
            <Dialog.Title className="sr-only">{playing?.youtubeTitle}</Dialog.Title>
            <Dialog.Close asChild>
              <button type="button" aria-label="Close video" className="absolute top-4 right-4 cursor-pointer p-1" style={{ color: '#fff' }}>
                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              </button>
            </Dialog.Close>
            {playing && (
              <div className="aspect-video w-[min(92vw,960px,calc(85dvh*16/9))] bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${playing.id}?autoplay=1&rel=0&playsinline=1`}
                  title={playing.youtubeTitle}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="size-full"
                />
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default EventVideos
