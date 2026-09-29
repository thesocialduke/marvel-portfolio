import { Grid } from './Grid'
import type { EventPhoto } from '../data/site'

export function EventGallery({ title, photos }: { title: string; photos: EventPhoto[] }) {
  if (photos.length === 0) return null

  return (
    <section className="py-12 tablet:py-14 laptop:py-18">
      <Grid>
        <div className="col-span-full col-start-1 pb-12 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
          <h2 className="custom-h2 text-left">{title}</h2>
        </div>
        <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
          <div className="grid grid-cols-2 gap-4 tablet:grid-cols-3 laptop:grid-cols-4">
            {photos.map((photo, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden">
                <img
                  src={photo.image}
                  alt={`${photo.event}, ${photo.location}`}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-graphite/85 via-graphite/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="custom-h4 text-page">{photo.event}</p>
                  <p className="custom-p text-page/70">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </section>
  )
}
