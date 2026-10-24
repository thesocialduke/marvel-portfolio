import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

export function TestimonialsSection({
  quote,
  name,
  role,
  avatarSrc,
  avatarAlt,
  avatarFallback,
}: {
  quote: ReactNode
  name: string
  role: string
  avatarSrc?: string
  avatarAlt?: string
  avatarFallback: string
}) {
  return (
    <figure className="mx-auto flex w-full flex-col items-start md:max-w-none md:items-center md:grid md:grid-cols-[auto_1fr] md:gap-x-10">
      <div className="relative flex items-center justify-center md:h-full">
        {/* The framing lines only on wider screens; on phones they cut through the quote. */}
        {/* Vertical lines */}
        <MaskLine className="left-0 hidden md:block" orientation="vertical" />
        <MaskLine className="right-0 hidden md:block" orientation="vertical" />
        {/*  Horizontal lines */}
        <MaskLine className="top-0 hidden md:block md:w-xl" orientation="horizontal" />
        <MaskLine className="bottom-0 hidden md:block md:w-xl" orientation="horizontal" />

        <Avatar className="mask-[radial-gradient(circle,black_60%,transparent)] size-16 rounded-none *:rounded-none md:size-32">
          {avatarSrc && <AvatarImage alt={avatarAlt} src={avatarSrc} />}
          {/* Delay so the initial doesn't flash while a slow connection loads the photo */}
          <AvatarFallback delayMs={4000}>{avatarFallback}</AvatarFallback>
        </Avatar>
      </div>
      <figcaption className="flex flex-col justify-center space-y-4 pt-5 text-left md:p-6">
        <blockquote className="whitespace-pre-line font-poppins text-muted-foreground text-base leading-relaxed text-pretty md:text-lg md:leading-snug">
          “{quote}”
        </blockquote>

        <div>
          <cite className="font-modernist text-foreground text-sm font-bold tracking-wide uppercase not-italic">{name}</cite>
          <div className="text-muted-foreground text-[10px]">{role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function MaskLine({
  className,
  orientation,
  ...props
}: ComponentProps<'div'> & { orientation?: 'horizontal' | 'vertical' }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'bg-foreground/20 absolute',
        orientation === 'vertical' && 'mask-t-from-80% mask-b-from-80% -inset-y-1/2 w-px',
        orientation === 'horizontal' && 'mask-l-from-80% mask-r-from-80% -inset-x-1/2 h-px',
        className,
      )}
      {...props}
    />
  )
}

export default TestimonialsSection
