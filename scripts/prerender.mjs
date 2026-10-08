// Runs after `vite build`. The site is a single-page app, so every URL would otherwise
// be served the home page's <head>. Crawlers that don't run JavaScript (Bing, and the
// link previews on WhatsApp, LinkedIn, X and Slack) would then show the home page's
// title and image for every page. This writes a copy of index.html for each route with
// that page's own title, description, canonical URL and share image in the <head>.
// Output is dist/<route>.html (served at /<route> because vercel.json has cleanUrls).
//
// KEEP IN SYNC: the title/description below must match the useDocumentMeta() call in
// each page file under src/pages.
import { readFileSync, writeFileSync } from 'node:fs'

const SITE_URL = 'https://thesocialduke.vercel.app'

const routes = [
  {
    path: '/services',
    title: 'Social Media Manager & Community Manager Services | Ndubuisi Marvellous',
    description:
      'Hire a Web3 and fintech social media manager and community manager: strategy, community building, content creation, creator/KOL partnerships, and event planning.',
  },
  {
    path: '/contact',
    title: 'Contact | Ndubuisi Marvellous',
    description: 'Get in touch with Ndubuisi Marvellous for social media strategy, growth, and community work.',
  },
  {
    path: '/bitget',
    title: 'Bitget Africa Community Growth Case Study | Ndubuisi Marvellous',
    description:
      'How I led social media and community for Bitget across Africa, helping make Bitget Wallet Nigeria’s #1 downloaded crypto app.',
    image: '/case-studies/bitget.jpg',
    type: 'article',
  },
  {
    path: '/base-southern-africa',
    title: 'Base Southern Africa Creator Network Case Study | Ndubuisi Marvellous',
    description:
      'How I coached Base’s Southern Africa ambassador network into a consistent source of sharper, on-brand video content, including AI-directed campaign films.',
    image: '/case-studies/base.jpg',
    type: 'article',
  },
  {
    path: '/binance-street-interviews',
    title: 'Binance Africa Street Interviews Case Study | Ndubuisi Marvellous',
    description:
      'Short-form street-interview content for Binance Africa that explained crypto simply, built for Instagram and TikTok.',
    image: '/case-studies/binance.jpg',
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

for (const route of routes) {
  const url = `${SITE_URL}${route.path}`
  const image = `${SITE_URL}${route.image ?? '/avatar.jpg'}`
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
  html = setMeta(html, 'name', 'twitter:card', route.image ? 'summary_large_image' : 'summary')

  // vercel.json sets cleanUrls, so /services is served from dist/services.html
  writeFileSync(`dist${route.path}.html`, html)
  console.log(`prerendered head for ${route.path}`)
}
