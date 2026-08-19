import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { VideoGallery } from '../components/VideoGallery'
import { gameloftVideos } from '../data/site'

export function Gameloft() {
  return (
    <Layout overlay>
      <section className="relative w-full bg-hyacinth/5 pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="relative py-18">
          <div className="col-span-full col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h1 className="custom-h1 relative text-balance">Gameloft – Social Ads</h1>
          </div>
        </Grid>
      </section>

      <section>
        <Grid className="items-start space-y-12 py-12 laptop:space-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2 laptop:row-start-1">
            <h3 className="custom-h3 relative text-balance">01 — Project details</h3>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8 laptop:row-start-1">
            <h3 className="custom-h3 relative text-balance">
              Produced short-form video ads for Gameloft’s mobile game launches in partnership with LEGO and
              Disney.
              <br />
              This high-volume production required adapting to strict brand guidelines, tight turnarounds, and a
              wide range of formats for platforms like Facebook, Instagram, and YouTube.
            </h3>
          </div>
        </Grid>
      </section>

      <section>
        <Grid className="items-start space-y-12 py-12 laptop:space-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2 laptop:row-start-1">
            <div className="space-y-text-block text-left">
              <h3 className="custom-h3 relative text-balance">02 — My Role</h3>
              <h3 className="custom-h3 relative text-balance">Freelance Motion Designer</h3>
            </div>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8 laptop:row-start-1">
            <div className="space-y-text-block text-left">
              <h3 className="custom-h3 relative text-balance">
                Edited short-form social videos using existing assets
              </h3>
              <h3 className="custom-h3 relative text-balance">
                Adapted visuals to fit multiple ad specs and platforms
              </h3>
              <h3 className="custom-h3 relative text-balance">
                Delivered high-volume content in a fast-paced environment
              </h3>
              <h3 className="custom-h3 relative text-balance">
                Ensured brand consistency across LEGO and Disney campaigns
              </h3>
            </div>
          </div>
        </Grid>
      </section>

      <VideoGallery
        title="Brand awareness videos"
        videos={gameloftVideos}
        orientation="portrait"
        rounded={18}
        showDescriptions
        muted
      />

      <section>
        <Grid className="pt-12 pb-8 tablet:pt-18 laptop:pt-24 laptop:pb-12">
          <div className="col-span-full col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h3 className="custom-h3 relative text-balance">
              Delivered a <b>high volume</b> of short-form videos for social media ads during multiple game
              launches.
              <br />
              Collaborated with the marketing team to <b>turn around assets quickly</b> while maintaining brand
              consistency for both LEGO and Disney.
            </h3>
          </div>
        </Grid>
      </section>
    </Layout>
  )
}
