import { Grid } from './Grid'

// Listing campaigns: logo, headline number (where there is one), and the X posts.
type Listing = {
  logo: string
  ticker: string
  stat?: string
  statLabel?: string
  posts: { url: string; views?: string }[]
}

const listings: Listing[] = [
  {
    logo: '/case-studies/bitget/logo-dogs.png',
    ticker: '$DOGS',
    stat: '2M+',
    statLabel: 'impressions',
    posts: [
      { url: 'https://x.com/BitgetAfrica/status/1825194958535471560', views: '1M' },
      { url: 'https://x.com/BitgetAfrica/status/1854147976123281547', views: '260K' },
      { url: 'https://x.com/BitgetAfrica/status/1826662113152303280', views: '33K' },
      { url: 'https://x.com/BitgetAfrica/status/182766950106574857', views: '41K' },
    ],
  },
  {
    logo: '/case-studies/bitget/logo-paws.jpg',
    ticker: '$PAWS',
    stat: '473K',
    statLabel: 'views across 3 posts',
    posts: [
      { url: 'https://x.com/BitgetAfrica/status/1901519115379937544', views: '196K' },
      { url: 'https://x.com/BitgetAfrica/status/1899372955068399828', views: '115K' },
      { url: 'https://x.com/BitgetAfrica/status/1900511913190072748', views: '162K' },
    ],
  },
  {
    logo: '/case-studies/bitget/logo-pi.png',
    ticker: '$PI',
    stat: '1M+',
    statLabel: 'impressions',
    posts: [{ url: 'https://x.com/BitgetAfrica/status/1891127323723784623', views: '685K' }],
  },
]

// Parked: not used on the Bitget page for now. To bring it back, import it in
// BitgetCaseStudy.tsx and render <BitgetCampaigns /> where the section should go
// (it was between Core Programs and Events, numbered "03. Campaigns").
export function BitgetCampaigns() {
  return (
  <section className="case-study-serif py-12 tablet:py-14 laptop:py-24">
    <Grid className="items-end gap-y-6 pb-10 laptop:gap-y-0">
      <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
        <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">03. Campaigns</p>
        <h2 className="custom-h2 custom-h2-bold custom-h2-lg mt-4 text-balance">Listings built to spread</h2>
      </div>
      <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-4 laptop:col-start-10">
        <p className="custom-p text-ink/60">
          Each campaign had one job: awareness and follower growth around a moment people already cared about.
        </p>
      </div>
    </Grid>
    <Grid>
      <div className="col-span-full grid grid-cols-3 gap-4 tablet:col-span-6 tablet:col-start-2 tablet:gap-8 laptop:col-span-12 laptop:col-start-2">
        {listings.map((l) => (
          <div key={l.ticker} className="flex flex-col items-start gap-4">
            <img
              src={l.logo}
              alt={`${l.ticker} logo`}
              className="size-16 rounded-full object-cover tablet:size-24 laptop:size-28"
            />
            <div>
              <h3 className="custom-h4 custom-h4-bold">{l.ticker}</h3>
              {l.stat && (
                <p className="custom-p custom-p-sm mt-1 text-ink/60">
                  <span className="font-bold text-ink">{l.stat}</span> {l.statLabel}
                </p>
              )}
            </div>
            <ul className="flex flex-col gap-2 border-t border-ink/15 pt-3">
              {l.posts.map(({ url, views }, i) => (
                <li key={i}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="custom-p custom-p-sm underline underline-offset-4 outline-none transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-ink/60"
                  >
                    X post {i + 1} ↗
                  </a>
                  {views && <span className="custom-p custom-p-sm ml-2 text-ink/50">{views} views</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Grid>
  </section>
  )
}

export default BitgetCampaigns
