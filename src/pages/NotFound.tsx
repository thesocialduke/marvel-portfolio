import { useEffect } from 'react'
import { ButtonLink } from '../components/Button'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

// Unknown URLs land here. It tells search engines not to index the address, so
// mistyped or removed links don't pile up as thin duplicate pages.
export function NotFound() {
  useDocumentMeta({
    title: 'Page not found | Ndubuisi Marvellous',
    description: 'This page does not exist. Head back to the home page.',
  })

  useEffect(() => {
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const previous = robots?.getAttribute('content') ?? 'index, follow'
    robots?.setAttribute('content', 'noindex, follow')
    return () => robots?.setAttribute('content', previous)
  }, [])

  return (
    <Layout>
      <section className="case-study-serif pt-18 pb-24 tablet:pt-[5rem] laptop:pt-[8.5rem]">
        <Grid>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
            <p className="custom-p custom-p-sm tracking-[0.1em] text-ink/60 uppercase">404</p>
            <h1 className="custom-h1 custom-h1-bold mt-4 text-balance">Page not found</h1>
            <p className="custom-p mt-4 max-w-md text-ink/70">That page doesn’t exist, or it has moved.</p>
            <div className="mt-8 flex">
              <ButtonLink to="/" fullWidth={false}>
                Back to home
              </ButtonLink>
            </div>
          </div>
        </Grid>
      </section>
    </Layout>
  )
}

export default NotFound
