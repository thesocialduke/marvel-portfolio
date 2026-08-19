import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { VideoGallery } from '../components/VideoGallery'
import { zolaLandscape, zolaPortrait } from '../data/site'

export function Zola() {
  return (
    <Layout overlay>
      <section className="relative w-full bg-hyacinth/5 pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="relative py-18">
          <div className="col-span-full col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <div className="space-y-text-block text-left">
              <h1 className="custom-h1 relative text-balance">Zola (Growth – Paid Social)</h1>
            </div>
          </div>
        </Grid>
      </section>

      <section>
        <Grid className="py-12">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-5">
            <div className="space-y-text-block text-center">
              <h2 className="custom-h2">Social and TV Campaigns</h2>
              <p className="custom-p">
                Developed and produced paid social campaigns for Meta to build Zola’s brand presence and
                engagement.
                <br />
                Collaborated with the growth team to define creative direction, testing frameworks, and early
                content strategy during the brand’s initial paid-social expansion.
              </p>
            </div>
          </div>
        </Grid>
      </section>

      <VideoGallery
        title="Video production - Brand awareness campaign"
        videos={zolaPortrait}
        orientation="portrait"
        rounded={18}
        showDescriptions
      />
      <VideoGallery title="TV ads" videos={zolaLandscape} orientation="landscape" rounded={20} />
    </Layout>
  )
}
