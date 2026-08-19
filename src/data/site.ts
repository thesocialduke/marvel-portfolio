const S3 = 'https://copyfolio.s3.us-east-1.amazonaws.com/cmd1iz0uw001bjv04e40r9t0e'

export function media(path: string) {
  return `${S3}/${path.split('/').map(encodeURIComponent).join('/')}`
}

export const site = {
  name: 'Ndubuisi Marvellous',
  email: 'marvellousndubuisi98@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thesocialduke',
  copyright: '© Ndubuisi Marvellous, 2026',
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact me', href: '/contact-me' },
] as const

export const logos = ['/logos/binance.svg', '/logos/bitget.svg', '/logos/base.svg', '/logos/kyshi.png']

export const clients = [
  {
    href: '/zola-growth-paid-social',
    title: 'Bitget (Growth, Organic Social, Community)',
    shortName: 'Bitget',
    category: 'Growth & Community',
    description:
      'Owned social and community growth and education for Africa, from campaign strategy to execution across X, Telegram, Blog, Discord & Meta.',
    image: '/case-studies/bitget.jpg',
    bold: false,
  },
  {
    href: '/gameloft-social-ads',
    title: 'Base Southern Africa (Coinbase: Ambassadors Consultant and Creative Lead)',
    shortName: 'Base',
    category: 'Web3 Infrastructure',
    description:
      'Took an untrained creator community and gave it direction, turning inconsistent clips into branded, clear, on-message content & direction.',
    image: '/case-studies/base.jpg',
    bold: true,
  },
  {
    href: '/better-sleep-growth-creative-strategy-and-production',
    title: 'Binance: Viral Street Interviews',
    shortName: 'Binance',
    category: 'Crypto Education',
    description:
      'Bringing crypto education to the street to make crypto feel less abstract and foreign to ordinary people.',
    image: '/case-studies/binance.jpg',
    bold: true,
  },
]

export const stats = [
  { value: '+5', label: 'years experience' },
  { value: '40M+', label: 'Cumulative views' },
  { value: '150K+', label: 'Followers' },
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

// TEMP placeholder photos (via Picsum) for local layout preview only — swap every
// entry for a real event photo (and real event/location) before this goes live.
export const events: EventPhoto[] = [
  { image: 'https://picsum.photos/seed/lagos-1/800/800', event: 'Bitget Community Meetup', location: 'Lagos, Nigeria' },
  { image: 'https://picsum.photos/seed/nairobi-1/800/800', event: 'Binance Street Interviews', location: 'Nairobi, Kenya' },
  { image: 'https://picsum.photos/seed/accra-1/800/800', event: 'Base Ambassador Activation', location: 'Accra, Ghana' },
  { image: 'https://picsum.photos/seed/capetown-1/800/800', event: 'Web3 Founders Mixer', location: 'Cape Town, South Africa' },
  { image: 'https://picsum.photos/seed/johannesburg-1/800/800', event: 'Crypto Onboarding Day', location: 'Johannesburg, South Africa' },
  { image: 'https://picsum.photos/seed/kampala-1/800/800', event: 'Creator Workshop', location: 'Kampala, Uganda' },
  { image: 'https://picsum.photos/seed/abuja-1/800/800', event: 'Community Town Hall', location: 'Abuja, Nigeria' },
  { image: 'https://picsum.photos/seed/kigali-1/800/800', event: 'Blockchain Summit Afterparty', location: 'Kigali, Rwanda' },
]

export const services = [
  {
    title: 'Social media strategy',
    body: 'For brands running paid ads that need stronger creative direction. I help shape the visual and messaging strategy behind your campaigns — from identifying hooks worth testing to making sure each asset fits your funnel and goals.',
  },
  {
    title: 'Ad & Content Production',
    body: "Need scroll-stopping content for Meta, TikTok, or YouTube? I design and edit ad creatives that are made to perform — including UGC-style videos, motion design, and production support across formats. Whether it's a full campaign or a quick edit, I’ve got it.",
  },
  {
    title: 'Creative Performance Support',
    body: 'Already running ads but not seeing results? I can audit your creatives, break down what’s working (and what’s not), and suggest clear next steps. From testing structures to content iterations, I help you use data to make better creative decisions.',
  },
  {
    title: 'Copy & Scripting',
    body: 'Whether you need hooks, headlines, or scripts for UGC or short-form video — I write ad copy that’s built to convert. Fast, clear, and on-brand. I also help refine your messaging to match your audience and platform.',
  },
  {
    title: 'Video editing',
    body: 'From UGC-style ads to polished brand promos, I edit short-form videos optimized for social platforms like Meta, TikTok, and YouTube. Whether it’s cutting fast-paced creatives for campaigns or adapting content across formats, I make sure each piece feels on-brand, scroll-stopping, and built to perform.',
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

export const zolaPortrait: VideoItem[] = [
  {
    title: 'Brand awareness',
    description:
      'Solution-driven video showing how Zola’s wedding website keeps everything organized — from guests to gifts to the big day.',
    src: media('videos/Zola - Questions - Webiste.mp4'),
    poster: media('videos/thumbnails/thumbnail_Zola - Questions - Webiste.webp'),
  },
  {
    title: 'Brand awareness',
    description:
      'Produced emotional storytelling videos highlighting the joy and ease of wedding planning with Zola.',
    src: media('videos/ZolaWeddings.mp4'),
    poster: media('videos/thumbnails/thumbnail_ZolaWeddings.webp'),
  },
  {
    title: 'Feature focused',
    description: 'Trend-inspired video for Meta',
    src: media('videos/Zola - Trend.mp4'),
    poster: media('videos/thumbnails/thumbnail_Zola - Trend.webp'),
  },
  {
    title: 'Brand feature',
    description: 'Swipe-inspired concept to browse through your dream registry.',
    src: media('videos/Screen Recording 2024-04-05 at 10.20.25\u202FAM.mp4'),
    poster: media('videos/thumbnails/thumbnail_Screen Recording 2024-04-05 at 10.20.25\u202FAM.webp'),
  },
]

export const zolaLandscape: VideoItem[] = [
  {
    title: 'TV Ad Fall Campaign 2023 - Explainer',
    src: media(
      'videos/Zola _ The one place to start your wedding planning journey _ Vendors, invites, websites, registry (1).mp4',
    ),
    poster: media(
      'videos/thumbnails/thumbnail_Zola _ The one place to start your wedding planning journey _ Vendors, invites, websites, registry (1).webp',
    ),
  },
  {
    title: 'TV Ad Fall Campaign 2023 - Explainer',
    src: media(
      'videos/Zola _ Easy Wedding Planning All In One Place _ Vendors, Invitations, Websites, Registry.mp4',
    ),
    poster: media(
      'videos/thumbnails/thumbnail_Zola _ Easy Wedding Planning All In One Place _ Vendors, Invitations, Websites, Registry.webp',
    ),
  },
]

export const gameloftVideos: VideoItem[] = [
  {
    title: 'Gameloft: Lego',
    description: 'Paid social edit',
    src: media('videos/LEGO_EXT20_UA006_ChooseYourTeam_Team4_B_1080x1920.mp4'),
    poster: media('videos/thumbnails/thumbnail_LEGO_EXT20_UA006_ChooseYourTeam_Team4_B_1080x1920.webp'),
  },
  {
    title: 'Gameloft: Lego Battle',
    description: 'Paid social edit',
    src: media('videos/GAMELOFT_Snapchat_attacks_Argenta_1080x1920_Zoom copy (1).mp4'),
    poster: media('videos/thumbnails/thumbnail_GAMELOFT_Snapchat_attacks_Argenta_1080x1920_Zoom copy (1).webp'),
  },
  {
    title: 'Gameloft: Disney',
    description: 'Multiple placements',
    src: media('videos/005-DGB_EXT20_UA015_VisitLowkeyBeach_1080x1920 (1).mp4'),
    poster: media('videos/thumbnails/thumbnail_005-DGB_EXT20_UA015_VisitLowkeyBeach_1080x1920 (1).webp'),
  },
  {
    title: 'Gameloft: Lego',
    description: 'Paid social edit',
    src: media('videos/LEGO_EXT20_UA008_WheelOfFortune_HandSpin_Lloyd_1080x1920 (1) (1).mp4'),
    poster: media(
      'videos/thumbnails/thumbnail_LEGO_EXT20_UA008_WheelOfFortune_HandSpin_Lloyd_1080x1920 (1) (1).webp',
    ),
  },
]

export const betterSleep = {
  rain: {
    src: media('videos/UA_Q2_25_June_W3_EG_Rain_SoundTherapy_13s_CO_1080x1920.mp4'),
    poster: media('videos/thumbnails/thumbnail_UA_Q2_25_June_W3_EG_Rain_SoundTherapy_13s_CO_1080x1920.webp'),
  },
  lea: {
    src: media('videos/UA_Q2_25_May_W4_PS_LeaSalonga_Teaser_30s_CO_1080x1920.mp4'),
    poster: media('videos/thumbnails/thumbnail_UA_Q2_25_May_W4_PS_LeaSalonga_Teaser_30s_CO_1080x1920.webp'),
  },
  phone: media('cropped_cmgpgiilw000i04jsatirdftb.jpeg'),
  strengths: [
    'Creative direction & strategy',
    'Production management & process optimization',
    'Paid social creative strategy, analysis and iterations',
    'Cross-functional alignment (ASO, CRM, Web, Product)',
  ],
}

export const avatar = '/avatar.jpg'
