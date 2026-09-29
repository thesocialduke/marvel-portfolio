import { useRef, useState } from 'react'

export function VideoPlayer({
  src,
  poster,
  orientation,
  rounded,
  muted: startMuted = false,
}: {
  src: string
  poster: string
  orientation: 'portrait' | 'landscape'
  rounded: number
  muted?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(startMuted)
  const [progress, setProgress] = useState(0)

  const aspect = orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-[16/9]'

  function togglePlay() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="group relative overflow-hidden" style={{ borderRadius: rounded }}>
      <div className="relative cursor-pointer overflow-hidden" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          muted={muted}
          className={`h-full w-full bg-graphite object-contain ${aspect}`}
          onTimeUpdate={(e) => {
            const el = e.currentTarget
            if (el.duration) setProgress(el.currentTime / el.duration)
          }}
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button
            type="button"
            aria-label="Play video"
            onClick={(e) => {
              e.stopPropagation()
              togglePlay()
            }}
            className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2"
          >
            <svg viewBox="0 0 64 64" className="size-16">
              <rect width="64" height="64" rx="32" fill="#000" fillOpacity="0.36" />
              <path d="M26 20v24l20-12z" fill="#fff" />
            </svg>
          </button>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#000a] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
        <div
          className="absolute bottom-6 left-1/2 flex w-full -translate-x-1/2 items-center gap-6 px-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          {playing && (
            <button
              type="button"
              aria-label="Pause video"
              onClick={togglePlay}
              className="shrink-0 rounded-full bg-black/15 p-[2px] backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" className="size-6 fill-white">
                <path d="M8 5h3v14H8zM13 5h3v14h-3z" />
              </svg>
            </button>
          )}
          <input
            type="range"
            min={0}
            max={1}
            step={0.001}
            value={progress}
            className="scrubber w-full"
            onChange={(e) => {
              const video = videoRef.current
              const next = Number(e.target.value)
              setProgress(next)
              if (video?.duration) video.currentTime = next * video.duration
            }}
          />
          <button
            type="button"
            aria-label={muted ? 'Unmute' : 'Mute'}
            className="rounded-full bg-black/15 p-[2px] backdrop-blur-sm"
            onClick={() => {
              setMuted((v) => !v)
              if (videoRef.current) videoRef.current.muted = !muted
            }}
          >
            <svg viewBox="0 0 24 24" className="size-6 fill-white">
              {muted ? (
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
              ) : (
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
