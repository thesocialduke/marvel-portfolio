// Runs after `vite build`. The site is a single-page app, so every URL would otherwise
// be served the home page's <head>. Crawlers that don't run JavaScript (Bing, and the
// link previews on WhatsApp, LinkedIn, X and Slack) would then show the home page's
// title and image for every page. This writes a copy of index.html for each route with
// that page's own title, description, canonical URL and share image in the <head>.
// It also renders each page's body with React (src/entry-server.tsx, built by
// `vite build --ssr`) into <div id="root">, so the text and headings are in the raw HTML
// for crawlers and AI assistants that don't run JavaScript. The browser then hydrates it.
// Output is dist/<route>.html (served at /<route> because vercel.json has cleanUrls).
//
// KEEP IN SYNC: the title/description below must match the useDocumentMeta() call in
// each page file under src/pages.
import { readFileSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const { render } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)

const ROOT = '<div id="root"></div>'
async function withBody(html, route) {
  if (!html.includes(ROOT)) throw new Error('prerender: <div id="root"></div> not found in dist/index.html')
  const body = await render(route)
  if (!body.includes('<h1')) throw new Error(`prerender: no <h1> rendered for ${route}`)
  return html.replace(ROOT, `<div id="root">${body}</div>`)
}

const SITE_URL = 'https://ndubuisimarvellous.com'

const routes = [
  {
    path: '/services',
    title: 'Social Media & Community Manager Services | Ndubuisi Marvellous',
    description:
      'Hire a Web3 and fintech social media and community manager: strategy, community building, content creation, creator/KOL partnerships and events.',
  },
  {
    path: '/contact',
    title: 'Contact | Ndubuisi Marvellous',
    description:
      'Get in touch with Ndubuisi Marvellous, a Web3 and fintech social media and community manager open to full-time and contract roles. Book a call or send an email.',
  },
  {
    path: '/bitget',
    title: 'Bitget Africa Community Growth Case Study | Ndubuisi Marvellous',
    description:
      'How I led social media and community for Bitget across Africa, driving 40M+ organic views and making Bitget Wallet Nigeria’s #1 downloaded crypto app.',
    image: '/case-studies/og-bitget.jpg',
    type: 'article',
  },
  {
    path: '/base-southern-africa',
    title: 'Base Southern Africa Creator Network Case Study | Ndubuisi Marvellous',
    description:
      'How I coached Base’s Southern Africa ambassador network into a consistent source of sharper, on-brand video content, including AI-directed campaign films.',
    image: '/case-studies/og-base.jpg',
    type: 'article',
  },
  {
    path: '/binance-street-interviews',
    title: 'Binance Africa Street Interviews Case Study | Ndubuisi Marvellous',
    description:
      'Short-form street-interview content for Binance Africa that explained crypto simply, built for Instagram and TikTok.',
    image: '/case-studies/og-binance.jpg',
    type: 'article',
  },
]

const escape = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function setMeta(html, attr, key, content) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`, 's')
  if (re.test(html)) return html.replace(re, `$1${escape(content)}$2`)
  return html.replace('</head>', `    <meta ${attr}="${key}" content="${escape(content)}" />\n  </head>`)
}

const template = readFileSync('dist/index.html', 'utf8')

writeFileSync('dist/index.html', await withBody(template, '/'))
console.log('prerendered body for /')

for (const route of routes) {
  const url = `${SITE_URL}${route.path}`
  const image = `${SITE_URL}${route.image ?? '/og-banner.jpg'}`
  let html = template

  html = html.replace(/<title>.*?<\/title>/s, `<title>${escape(route.title)}</title>`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  html = setMeta(html, 'name', 'description', route.description)
  html = setMeta(html, 'property', 'og:title', route.title)
  html = setMeta(html, 'property', 'og:description', route.description)
  html = setMeta(html, 'property', 'og:url', url)
  html = setMeta(html, 'property', 'og:image', image)
  html = setMeta(html, 'property', 'og:image:alt', route.title)
  html = setMeta(html, 'property', 'og:type', route.type ?? 'website')
  html = setMeta(html, 'name', 'twitter:title', route.title)
  html = setMeta(html, 'name', 'twitter:description', route.description)
  html = setMeta(html, 'name', 'twitter:image', image)
  html = setMeta(html, 'name', 'twitter:image:alt', route.title)
  html = setMeta(html, 'name', 'twitter:card', 'summary_large_image')

  html = await withBody(html, route.path)

  // vercel.json sets cleanUrls, so /services is served from dist/services.html
  writeFileSync(`dist${route.path}.html`, html)
  console.log(`prerendered head for ${route.path}`)
}

// 404.html: Vercel serves this (with a 404 status) for any address that isn't a page,
// so a mistyped link shows the designed "Page not found" screen, not a bare error.
// It is kept out of search results (noindex), has no canonical, and carries no
// structured data.
{
  let html = template
  html = html.replace(/<title>.*?<\/title>/s, '<title>Page not found | Ndubuisi Marvellous</title>')
  html = html.replace(/\s*<link rel="canonical"[^>]*>/, '')
  html = html.replace(/\s*<meta\s+property="og:url"[^>]*>/, '')
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, '')
  html = html.replace('content="index, follow"', 'content="noindex, follow"')
  const text = 'This page does not exist. Head back to the home page.'
  html = setMeta(html, 'name', 'description', text)
  html = setMeta(html, 'property', 'og:title', 'Page not found | Ndubuisi Marvellous')
  html = setMeta(html, 'property', 'og:description', text)
  html = setMeta(html, 'name', 'twitter:title', 'Page not found | Ndubuisi Marvellous')
  html = setMeta(html, 'name', 'twitter:description', text)
  writeFileSync('dist/404.html', await withBody(html, '/404'))
  console.log('prerendered 404.html')
}
