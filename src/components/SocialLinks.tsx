import { site } from '../data/site'
import { cn } from '../lib/utils'

// Official brand marks (single-colour, from the brands' own glyphs), drawn in currentColor so
// they follow the surrounding text colour in light, dark and on the black footer.
const icons = {
  LinkedIn: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  ),
  Instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
  ),
  Telegram: (
    <path d="M11.94 0A12 12 0 1 0 24 12 12 12 0 0 0 11.94 0Zm5.89 8.18-1.97 9.28c-.15.66-.54.82-1.09.51l-3-2.21-1.45 1.4c-.16.16-.3.29-.6.29l.21-3.05 5.56-5.02c.24-.21-.05-.33-.38-.12L8.24 13.58l-2.96-.92c-.64-.2-.66-.64.14-.95l11.57-4.46c.54-.2 1.01.13.84.93Z" />
  ),
} as const

export type SocialName = keyof typeof icons

const links: { name: SocialName; href: string }[] = [
  { name: 'LinkedIn', href: site.linkedin },
  { name: 'Instagram', href: site.instagram },
  { name: 'Telegram', href: site.telegram },
]

// Icon links to the social profiles. Each keeps a 40px tap area and an accessible name
// ("LinkedIn (opens in a new tab)"), since the visible logo has no text.
export function SocialLinks({
  only,
  className,
  linkClassName,
  size = 'size-5',
}: {
  only?: SocialName[]
  className?: string
  linkClassName?: string
  size?: string
}) {
  return (
    <ul className={cn('-mx-2.5 flex items-center', className)}>
      {links
        .filter((l) => !only || only.includes(l.name))
        .map((l) => (
          <li key={l.name}>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${l.name} (opens in a new tab)`}
              title={l.name}
              className={cn(
                'inline-flex size-10 items-center justify-center outline-none transition-[color,opacity] duration-150 hover:opacity-70 focus-visible:ring-2 focus-visible:ring-red-600',
                linkClassName,
              )}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={size}>
                {icons[l.name]}
              </svg>
            </a>
          </li>
        ))}
    </ul>
  )
}

export default SocialLinks
