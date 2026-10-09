const S3 = 'https://copyfolio.s3.us-east-1.amazonaws.com/cmd1iz0uw001bjv04e40r9t0e'

export function media(path: string) {
  return `${S3}/${path.split('/').map(encodeURIComponent).join('/')}`
}

export const site = {
  name: 'Ndubuisi Marvellous',
  email: 'hello@ndubuisimarvellous.com',
  linkedin: 'https://www.linkedin.com/in/thesocialduke',
  instagram: 'https://instagram.com/thesocialduke',
  telegram: 'https://t.me/thesocialduke',
  bookingUrl: 'https://calendar.app.google/kLHEDtD3JrEdKgGd8',
  // Google Doc CV, exported as a PDF so the browser downloads it instead of opening the doc.
  cvUrl: 'https://docs.google.com/document/d/1YDAPFGXULjpA4gMhmeLX8b_hYRI4HoypwUWCsAebXDw/export?format=pdf',
  // Same Google Doc in Google's clean read-only viewer, for people who'd rather read it than download it.
  cvViewUrl: 'https://docs.google.com/document/d/1YDAPFGXULjpA4gMhmeLX8b_hYRI4HoypwUWCsAebXDw/preview',
  // Same appointment schedule as bookingUrl, in Google's embeddable (?gv=true) form.
  bookingEmbedUrl:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZDplLCYiSzk5bsr2frJL1Re4bY4cemRyhpugy5Ou5h8fN8OeBIbTbiFcGqjLWpv1EjNndHv1p?gv=true',
  copyright: '© Ndubuisi Marvellous, 2026',
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Services', href: '/services' },
  { label: 'Contact me', href: '/contact' },
] as const

export const logos = [
  { src: '/logos/binance.svg', name: 'Binance' },
  { src: '/logos/bitget.svg', name: 'Bitget' },
  { src: '/logos/base.svg', name: 'Base' },
  { src: '/logos/kyshi.png', name: 'Kyshi' },
  { src: '/logos/hyperbridge.svg', name: 'Hyperbridge' },
]

export const clients = [
  {
    href: '/bitget',
    title: 'Bitget (Growth, Organic Social, Community)',
    shortName: 'Bitget',
    category: 'Growth & Community',
    description:
      'Owned social and community growth and education for Africa, from campaign strategy to execution across X, Telegram, Blog, Discord & Meta.',
    image: '/case-studies/bitget.jpg',
  },
  {
    href: '/base-southern-africa',
    title: 'Base Southern Africa (Coinbase: Ambassadors Consultant and Creative Lead)',
    shortName: 'Base',
    category: 'Web3 Infrastructure',
    description:
      'Took an untrained creator community and gave it direction, turning inconsistent clips into branded, clear, on-message content & direction.',
    image: '/case-studies/base.jpg',
  },
  {
    href: '/binance-street-interviews',
    title: 'Binance: Viral Street Interviews',
    shortName: 'Binance',
    category: 'Crypto Education',
    description:
      'Bringing crypto education to the street to make crypto feel less abstract and foreign to ordinary people.',
    image: '/case-studies/binance.jpg',
  },
]

export const stats = [
  { value: '5+', label: 'years experience' },
  { value: '40M+', label: 'Cumulative views' },
  { value: '150K+', label: 'New followers gained' },
  { value: '20K', label: 'Users from ambassador program' },
]

export type VideoItem = {
  src: string
  poster: string
  title?: string
  description?: string
}

export type EventPhoto = {
  image: string
  event: string
  location: string
}

export const events: EventPhoto[] = [
  { image: '/events/ethiopia-blockchain-week.jpg', event: 'Ethiopia Blockchain Week', location: 'Addis Ababa, Ethiopia, 2025' },
  { image: '/events/university-of-nairobi.jpg', event: 'University of Nairobi', location: 'Nairobi, Kenya, 2025' },
  { image: '/events/crypto-experience-month-warri.jpg', event: 'El Clasico Watch Party', location: 'Lagos, Nigeria, 2024' },
  { image: '/events/padel-event-capetown.jpg', event: 'VIP Padel Event', location: 'Cape Town, South Africa, 2025' },
  { image: '/events/pizza-day-johannesburg.jpg', event: 'Bitcoin Pizza Day', location: 'Johannesburg, South Africa, 2025' },
  { image: '/events/p2p-merchant-meetup-nairobi.jpg', event: 'P2P Merchant Meetup', location: 'Nairobi, Kenya, 2025' },
  { image: '/events/p2p-merchant-meetup-kenya.jpg', event: 'P2P Merchant Meetup', location: 'Kenya, 2026' },
  { image: '/events/bitget-pizza-day-lagos.jpg', event: 'Bitget Pizza Day', location: 'Lagos, Nigeria, 2025' },
  { image: '/events/kol-community-meetup.jpg', event: 'KOL Community Meetup', location: '2024' },
]

export const services = [
  {
    title: 'Social Media Strategy & Growth',
    body: 'For brands that want to grow a real audience on social media. I plan and run your presence across X, Telegram, Instagram, TikTok, Discord and Meta, with localized campaigns that speak to each audience and move the numbers that matter.',
    shortBody: 'Localized campaigns across X, Telegram, Instagram, TikTok, Discord and Meta',
  },
  {
    title: 'B2B/B2C Community Building & Management',
    body: 'A community needs someone showing up every day. I handle your channel growth, programs, and operations, keep conversations active, and host AMAs, Spaces, and lives that turn followers into advocates.',
    shortBody: 'Channel growth, community programs, AMAs, Spaces and lives',
  },
  {
    title: 'Content Creation',
    body: 'Need content that feels native to each platform? I create short & long form videos, from UGC-style ads to polished brand promos, educational pieces and brand stories that make complex products easy to understand and fun to watch.',
    shortBody: 'UGC-style ads, brand promos and educational videos, short and long form',
  },
  {
    title: 'B2B/B2C Creator, KOL & Ambassador Partnerships',
    body: 'I find the right creators for your brand, train them, and manage them from brief to delivery. The result is consistent, on-message content from voices your audience already trusts.',
    shortBody: 'Creator sourcing, training and management from brief to delivery',
  },
  {
    title: 'Event Planning & Experiential Marketing',
    body: 'From meetups to activations, I plan and run events that bring your brand offline. Each one is built to connect with your community in person, create moments people want to share, and gather feedback.',
    shortBody: 'Meetups, activations and in-person community events',
  },
]

export const faqs = [
  {
    q: 'Do you work with brands outside crypto/Web3?',
    a: "My deepest experience is in Fintech and Web3, but the same strategy, social growth, and content approach applies to any fast-moving consumer brand. I'm also especially excited about the AI space right now and would love to bring that same energy to an AI-focused brand. Happy to discuss fit for other industries.",
  },
  {
    q: 'What does working together look like?',
    a: 'A short discovery call to understand your goals, followed by a strategy and content plan, then execution across your social channels. I share regular updates so you always know what’s live and what’s performing.',
  },
  {
    q: 'Do you handle both strategy and execution, or just one?',
    a: 'Both. I plan the campaigns and I create the content, from scripting and shooting short-form video to managing community channels day to day.',
  },
  {
    q: 'Are you available for full-time roles, contract work, or both?',
    a: 'Open to full-time roles and select contract or freelance projects.',
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes. My work spans East, West, and Southern Africa, so remote-first collaboration is built into how I operate.',
  },
  {
    q: 'What tools/platforms do you work across?',
    a: 'X, Telegram/Discord, Instagram, and TikTok for distribution, plus ElevenLabs, HeyGen, Gemini, Canva/Figma, Premiere Pro/CapCut, and Notion for production and workflow, and more.',
  },
]

export const avatar = '/avatar.jpg'

export type CaseStudyStat = { value: string; label: string }
export type BeforeAfter = { before: string; after: string }
export type Testimonial = { quote: string; name: string; role: string; avatar?: string }
export type GalleryPhoto = { image: string; caption?: string }
export type ProofSection = { title: string; photos: GalleryPhoto[] }

export type CaseStudyData = {
  href: string
  eyebrow: string
  title: string
  summary: string
  roleTitle: string
  roleBullets: string[]
  beforeAfter?: BeforeAfter[]
  beforeImages?: GalleryPhoto[]
  afterImages?: GalleryPhoto[]
  proofSections?: ProofSection[]
  videos?: VideoItem[]
  results?: CaseStudyStat[]
  keyMoment?: string
  testimonial?: Testimonial
  gallery?: GalleryPhoto[]
  closing: string[]
}

export const bitgetCaseStudy: CaseStudyData = {
  href: '/bitget',
  eyebrow: 'Case study',
  title: 'Bitget: Top #3 Crypto Exchange Globally',
  summary:
    'I led Social Media and Community for Bitget across Africa, driving strategy and growth in one of the world’s most fast-moving markets, from viral campaigns and live community programming to offline activations and full-cycle content production.',
  roleTitle: 'Head of Social Media, Content and Community',
  roleBullets: [
    'Ran viral listing campaigns for $DOGS, $PI, and $PAWS, each built for awareness and follower growth',
    'Built and led #BitQuest, a 7-day gamified educational campaign that simplified key crypto concepts',
    'Hosted AMAs, Twitter Spaces, and YouTube Lives with BDs and KOLs across the region',
    'Led the fastest-growing regional Telegram community at Bitget Africa',
    'Took Bitget’s content to the street: handled the full UGC process from scripting to editing, growing one channel from 0 to 10K followers',
    'Planned and executed offline activations across East, West & South Africa',
  ],
  proofSections: [
    {
      title: 'Campaigns',
      photos: [
        { image: '/case-studies/bitget/campaign-dogs.jpg', caption: '$DOGS listing: over 2M+ impressions' },
        { image: '/case-studies/bitget/campaign-pi.jpg', caption: '$PI listing: over 1M+ impressions' },
        { image: '/case-studies/bitget/campaign-bitquest.jpg', caption: '#BitQuest: 11.9M+ total reach' },
        { image: '/case-studies/bitget/campaign-stocks-vs-crypto.jpg', caption: 'Stocks vs Crypto Showdown challenge' },
      ],
    },
    {
      title: 'The OKX exit',
      photos: [
        { image: '/case-studies/bitget/okx-news.jpg', caption: 'OKX ends Nigerian operations' },
        { image: '/case-studies/bitget/okx-top-app.jpg', caption: 'Bitget Wallet becomes Nigeria’s #1 downloaded app' },
      ],
    },
    {
      title: 'Educational sessions',
      photos: [
        { image: '/case-studies/bitget/education-youtube-live.jpg', caption: 'Hosting a YouTube Live session' },
        { image: '/case-studies/bitget/education-twitter-space.jpg', caption: 'Hosting a Twitter Space' },
      ],
    },
  ],
  results: [
    { value: '40M+', label: 'Total impressions' },
    { value: '1M+', label: 'Views on education programs' },
    { value: '150K+', label: 'New followers gained' },
    { value: '20K', label: 'Users from ambassador program' },
    { value: '3,500', label: 'Followers gained in one day' },
    { value: '84.35%', label: 'CSAT across offline events' },
  ],
  keyMoment:
    'When OKX exited the market, campaigns I ran were instrumental in driving Bitget Wallet to become the top-downloaded crypto app in Nigeria, making “Bitget” a trending topic.',
  testimonial: {
    quote:
      'Marvellous has his own instinct for the sense of humor, and for running social and community campaigns. Leading our Africa social media runs pretty well and is very engaging. He’s fully embedded in the AF market.',
    name: 'Aka Leung',
    role: 'Regional Director (MENA, Africa, OC, JP), Bitget',
  },
  gallery: [
    { image: '/events/ethiopia-blockchain-week.jpg', caption: 'Ethiopia Blockchain Week, Addis Ababa, 2025' },
    { image: '/events/university-of-nairobi.jpg', caption: 'University of Nairobi, Nairobi, 2025' },
    { image: '/events/crypto-experience-month-warri.jpg', caption: 'El Clasico Watch Party, Lagos, 2024' },
    { image: '/events/padel-event-capetown.jpg', caption: 'VIP Padel Event, Cape Town, 2025' },
    { image: '/events/pizza-day-johannesburg.jpg', caption: 'Bitcoin Pizza Day, Johannesburg, 2025' },
    { image: '/events/p2p-merchant-meetup-nairobi.jpg', caption: 'P2P Merchant Meetup, Nairobi, 2025' },
    { image: '/events/p2p-merchant-meetup-kenya.jpg', caption: 'P2P Merchant Meetup, Kenya, 2026' },
    { image: '/events/bitget-pizza-day-lagos.jpg', caption: 'Bitget Pizza Day, Lagos, 2025' },
    { image: '/events/kol-community-meetup.jpg', caption: 'KOL Community Meetup, 2024' },
  ],
  closing: [
    'Planned and executed localized offline activations across East, West & South Africa, onboarding 100+ new users per event on average.',
    'Made “Bitget” a trending topic in Nigeria during one of the market’s biggest moments.',
  ],
}

export const baseCaseStudy: CaseStudyData = {
  href: '/base-southern-africa',
  eyebrow: 'Case study',
  title: 'Coinbase (Base): Base Southern Africa',
  summary:
    'Base had an active network of ambassadors and creators producing consistently, but content quality and depth varied: inconsistent camera, lighting and framing, content that leaned too promotional, limited variety in formats, and no clear creative direction.',
  roleTitle: 'Ambassadors Consultant & Creative Lead',
  roleBullets: [
    '**Coaching**: improved production quality across the ambassador network',
    '**Creative direction**: developed hooks, scripts, and content concepts',
    'Introduced new formats, including street interviews, to diversify content',
    'Created regional social and promotional content for the Base App',
    'Directed and produced **AI-generated video concepts** for regional campaigns',
  ],
  beforeAfter: [
    { before: 'Low-quality production', after: 'Stronger visual' },
    { before: 'Surface-level content', after: 'Better hooks & storytelling' },
    { before: 'Repetitive formats', after: 'More diverse, localized content' },
    { before: 'No direction', after: 'Clear direction with personalized scripts' },
  ],
  beforeImages: [
    { image: '/case-studies/base/before-1.jpg' },
    { image: '/case-studies/base/before-2.jpg' },
  ],
  afterImages: [
    { image: '/case-studies/base/after-liseli.jpg', caption: '“Getting started on Base,” by Liseli Akayombokwa' },
    { image: '/case-studies/base/after-tebogo.jpg', caption: '“Base on the street,” by Tebogo Nong' },
    { image: '/case-studies/base/after-nobantu.jpg', caption: '“Base Batches,” by Nobantu Gumbi' },
  ],
  videos: [
    {
      title: 'Base.Dev: “In this place, nothing moves”',
      description: 'AI-generated narrative on the barriers people face without access or connections.',
      src: '/videos/base/base-dev-update.mp4',
      poster: '/videos/thumbnails/base-dev-update.jpg',
    },
    {
      title: 'Base Batches: Student Track',
      description: 'AI-generated narrative built around curiosity and access to opportunity.',
      src: '/videos/base/base-batches.mp4',
      poster: '/videos/thumbnails/base-batches.jpg',
    },
    {
      title: '“Trading is better together” (Referral campaign)',
      description: 'AI-generated concept promoting the Base referral program.',
      src: '/videos/base/trading-together-referral.mp4',
      poster: '/videos/thumbnails/trading-together-referral.jpg',
    },
  ],
  gallery: [{ image: '/case-studies/base.jpg', caption: 'Base Southern Africa activation' }],
  closing: [
    'Turned an inconsistent creator network into a source of sharper, localized, on-brand content.',
    'Directed AI-generated concepts for Base.Dev’s dashboard update and the Base Batches Program.',
  ],
}

export const binanceCaseStudy: CaseStudyData = {
  href: '/binance-street-interviews',
  eyebrow: 'Case study',
  title: 'Binance Africa: Viral Street Interviews',
  summary:
    'Bringing crypto education to the street to make crypto feel less abstract and foreign to ordinary people, through short, punchy street-interview content built to travel.',
  roleTitle: 'Content Creator',
  roleBullets: [
    'Concept, shoot, and produce street-interview style short-form video',
    'Turn crypto concepts into shareable hooks: “Gold or Bitcoin?”, “BTC vs Gold”, “Heard about Crypto?”',
    'Distribute natively across Instagram and TikTok',
  ],
  results: [
    { value: '40.3K', label: '“Gold or Bitcoin?”' },
    { value: '17.6K', label: '“Give a Bitcoin to someone!”' },
    { value: '15.4K', label: '“Heard about Crypto?”' },
    { value: '11.8K', label: '“Learn Crypto for FREE”' },
    { value: '10.5K', label: '“BTC vs Gold”' },
  ],
  gallery: [{ image: '/case-studies/binance-street-interviews.jpg', caption: 'Viral street interview series' }],
  closing: ['Made crypto feel like a conversation you’d overhear on your own street, not a pitch aimed at you.'],
}

// Reviews shown in the carousel at the bottom of the home page.
// To add one, append an object here: { quote, name, role, avatar? } (avatar is a path under /public).
export const homeTestimonials: Testimonial[] = [
  { ...bitgetCaseStudy.testimonial!, avatar: '/testimonials/aka-leung.jpg?v=2' },
  {
    quote:
      'Marvellous\u2019s ability to craft compelling content that resonates with our target audience consistently led to increased engagement and brand visibility. Not only did he excel in content creation, but also displayed a keen understanding of analytics, leveraging data insights to refine our social media strategies.',
    name: 'Olumide Olatunji',
    role: 'Growth Marketer, Busha',
    avatar: '/testimonials/olumide-olatunji.jpg?v=2',
  },
]
