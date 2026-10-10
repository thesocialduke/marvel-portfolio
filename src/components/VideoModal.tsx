import { useState } from 'react'
import { Dialog } from 'radix-ui'
import { cn } from '../lib/utils'

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
// itself stays fast. Built on Radix Dialog, which traps focus, locks page scroll,
// closes on Escape or a click on the dark backdrop, and gives focus back to the
// button that opened it. The parent mounts it only while a video is open.
export function VideoModal({ title, sources, onClose }: { title: string; sources: EmbedSource; onClose: () => void }) {
  const available = (['tiktok', 'instagram'] as const).filter((p) => sources[p])
  const [platform, setPlatform] = useState<Platform>(available[0])
  // Whatever had focus when this opened (the play button), so it can get focus back on close.
  const [opener] = useState(() => document.activeElement as HTMLElement | null)

  const url = sources[platform]!

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4">
          <Dialog.Content
            aria-describedby={undefined}
            onCloseAutoFocus={(e) => {
              e.preventDefault()
              opener?.focus()
            }}
            className="relative flex max-h-full flex-col items-center gap-3 outline-none"
          >
            <Dialog.Title className="sr-only">{title}</Dialog.Title>
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex gap-2">
                {available.length > 1 &&
                  available.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPlatform(p)}
                      className={cn(
                        'custom-p custom-p-sm cursor-pointer px-3 py-1.5 tracking-wide uppercase',
                        p === platform ? 'bg-red-600' : 'bg-white/15',
                      )}
                      style={{ color: '#fff' }}
                    >
                      {p === 'tiktok' ? 'TikTok' : 'Instagram'}
                    </button>
                  ))}
              </div>
              <Dialog.Close asChild>
                <button type="button" aria-label="Close video" className="cursor-pointer p-1" style={{ color: '#fff' }}>
                  <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                    <path d="M5 5l14 14M19 5L5 19" />
                  </svg>
                </button>
              </Dialog.Close>
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
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default VideoModal
