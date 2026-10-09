import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import App from './App'

// Used only by scripts/prerender.mjs at build time: renders a route to an HTML string
// so the page text is in the raw HTML for crawlers that don't run JavaScript.
export async function render(url: string): Promise<string> {
  const { prelude } = await prerender(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
  return new Response(prelude).text()
}
