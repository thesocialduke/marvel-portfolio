import type { VideoItem } from '../data/site'
import { Grid } from './Grid'
import { VideoPlayer } from './VideoPlayer'

export function VideoGallery({
  title,
  videos,
  orientation,
  rounded,
  showDescriptions = false,
  muted,
}: {
  title?: string
  videos: VideoItem[]
  orientation: 'portrait' | 'landscape'
  rounded: number
  showDescriptions?: boolean
  muted?: boolean
}) {
  const cell =
    orientation === 'portrait'
      ? 'col-span-full tablet:col-span-3 tablet:odd:col-start-2 laptop:first:!col-start-2 laptop:odd:col-start-auto laptop:[&:nth-child(4n+1)]:!col-start-2'
      : 'col-span-full tablet:col-span-6 tablet:col-start-2 laptop:!col-start-auto laptop:first:!col-start-2 laptop:[&:nth-child(2n+1)]:!col-start-2'

  return (
    <section className="case-study-serif space-y-6 py-12 tablet:py-14 laptop:py-18">
      {title ? (
        <Grid>
          <div className="col-span-full col-start-1 py-2 tablet:col-span-6 tablet:col-start-2 tablet:py-4 laptop:col-span-8 laptop:col-start-2 laptop:py-6">
            <h2 className="custom-h2 relative text-balance">{title}</h2>
          </div>
        </Grid>
      ) : null}
      <Grid className="gap-y-6">
        {videos.map((video) => (
          <div key={video.src} className={`${cell} ${orientation === 'portrait' ? 'aspect-[9/16]' : ''}`}>
            <div className="space-y-6">
              <VideoPlayer
                src={video.src}
                poster={video.poster}
                orientation={orientation}
                rounded={rounded}
                muted={muted}
              />
              {video.title ? (
                <div className="space-y-2">
                  <div className="space-y-text-block text-left">
                    <h4 className="custom-h4">{video.title}</h4>
                    {showDescriptions && video.description ? (
                      <p className="custom-p relative min-h-[1.5rem]">{video.description}</p>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </Grid>
    </section>
  )
}
