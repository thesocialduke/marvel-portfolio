import { useState } from 'react'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { VideoPlayer } from '../components/VideoPlayer'
import { betterSleep } from '../data/site'

export function BetterSleep() {
  const [zoom, setZoom] = useState(false)

  return (
    <Layout overlay>
      <section className="relative w-full bg-hyacinth/5 pt-18 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid className="relative py-18">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-4">
            <h1 className="custom-h1 relative text-center text-balance">
              BetterSleep – Growth Creative Strategy & Production
            </h1>
          </div>
        </Grid>
      </section>

      <section>
        <Grid className="items-center space-y-12 py-12 laptop:space-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2">
            <h2 className="custom-h2">Creative Strategy & Production</h2>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8">
            <p className="custom-p">
              As part of BetterSleep’s UA team, I lead creative strategy and production for global paid social
              campaigns — bridging creative vision, high-stakes execution, and data-informed iteration. I own the
              full creative lifecycle: from concept and briefing through production, delivery, and performance
              analysis — even managing weeks with 400+ creatives flowing through the pipeline.
            </p>
          </div>
        </Grid>
      </section>

      <section>
        <Grid className="items-start space-y-12 py-12 laptop:space-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-2">
            <div className="space-y-text-block text-left">
              <h2 className="custom-h2">Sensory Campaigns</h2>
              <p className="custom-p">
                I developed and produced sensory-driven campaigns (Rain, Green Noise, Weather Sounds) designed to
                evoke calm and emotional connection. One of these became BetterSleep’s top performer, earning the{' '}
                <b>highest spend and reach among all UA campaigns</b>.
              </p>
            </div>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-3 laptop:col-start-10">
            <VideoPlayer
              src={betterSleep.rain.src}
              poster={betterSleep.rain.poster}
              orientation="portrait"
              rounded={18}
            />
          </div>
        </Grid>
      </section>

      <section>
        <Grid className="items-center space-y-12 py-12 laptop:space-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-3 laptop:col-start-3">
            <VideoPlayer
              src={betterSleep.lea.src}
              poster={betterSleep.lea.poster}
              orientation="portrait"
              rounded={18}
            />
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8">
            <div className="space-y-text-block text-left">
              <h2 className="custom-h2">Partnership Campaigns</h2>
              <p className="custom-p">
                Produced video content for key partnerships with <b>Lea Salonga</b>, <b>Cynthia Erivo</b>, and{' '}
                <b>BetterHelp</b>. These campaigns spanned emotional storytelling, branded promos, and
                premium-user experiences — each crafted to align with both brand voice and campaign goals.
              </p>
            </div>
          </div>
        </Grid>
      </section>

      <section>
        <Grid className="items-center space-y-12 py-12 laptop:space-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-5 laptop:col-start-2">
            <div className="space-y-text-block text-left">
              <h2 className="custom-h2">Cross-Functional Collaboration</h2>
              <p className="custom-p">
                Beyond ads, I collaborate on <b>ASO</b> visuals, <b>Custom Product Pages</b> (CPPs),{' '}
                <b>landing pages</b>, and <b>CRM design</b> — ensuring every creative touchpoint communicates
                consistently and supports performance goals across the user journey.
              </p>
            </div>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8">
            <button type="button" className="block w-full cursor-zoom-in" onClick={() => setZoom(true)}>
              <img src={betterSleep.phone} alt="" className="w-full object-cover" />
            </button>
          </div>
        </Grid>
      </section>

      <section>
        <Grid>
          <div className="col-span-full pt-8 pb-4 tablet:col-span-6 tablet:col-start-2 tablet:pt-12 laptop:col-span-8 laptop:col-start-2 laptop:pt-18">
            <h2 className="custom-h2">Core Strengths</h2>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <div className="-mx-6 grid grid-cols-1 gap-x-6 gap-y-12 p-6 tablet:grid-cols-2 laptop:grid-cols-4">
              {betterSleep.strengths.map((item) => (
                <div key={item} className="py-6">
                  <h3 className="custom-h3 text-left">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </section>

      {zoom ? (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setZoom(false)}
        >
          <img src={betterSleep.phone} alt="" className="max-h-full max-w-full object-contain" />
        </button>
      ) : null}
    </Layout>
  )
}
