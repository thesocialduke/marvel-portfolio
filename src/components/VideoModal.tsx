import { useEffect, useState } from 'react'

export type EmbedSource = { tiktok?: string; instagram?: string }

type Platform = 'tiktok' | 'instagram'

function embedUrl(platform: Platform, url: string): string {
  if (platform === 'tiktok') {
    const id = url.match(/video\/(\d+)/)?.[1]
    return `https://www.tiktok.com/embed/v2/${id}`
  }
  // Instagram embeds live at <post url>/embed
  return `${url.replace(/\/?(\?.*)?$/, '')}/embed`
}

// Lightbox that loads a TikTok or Instagram embed only once opened, so the page
// itself stays fast. Closes on the X, the dark backdrop, or Escape.
export function VideoModal({ title, sources, onClose }: { title: string; sources: EmbedSource; onClose: () => void }) {
  const available = (['tiktok', 'instagram'] as const).filter((p) => sources[p])
  const [platform, setPlatform] = useState<Platform>(available[0])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  const url = sources[platform]!

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div className="relative flex max-h-full flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex gap-2">
            {available.length > 1 &&
              available.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlatform(p)}
                  className={`custom-p custom-p-sm cursor-pointer px-3 py-1.5 tracking-wide uppercase ${
                    p === platform ? 'bg-red-600' : 'bg-white/15'
                  }`}
                  style={{ color: '#fff' }}
                >
                  {p === 'tiktok' ? 'TikTok' : 'Instagram'}
                </button>
              ))}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="cursor-pointer p-1"
            style={{ color: '#fff' }}
          >
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>
        <iframe
          key={`${platform}-${url}`}
          src={embedUrl(platform, url)}
          title={`${title} on ${platform === 'tiktok' ? 'TikTok' : 'Instagram'}`}
          allow="encrypted-media; fullscreen; autoplay"
          allowFullScreen
          className="w-[min(340px,92vw)] bg-white"
          style={{ height: 'min(700px, calc(100svh - 7rem))' }}
        />
      </div>
    </div>
  )
}

export default VideoModal
