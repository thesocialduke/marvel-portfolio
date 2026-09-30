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
    <figure className="mx-auto flex w-full max-w-lg flex-col items-center justify-center md:max-w-none md:grid md:grid-cols-[auto_1fr] md:gap-x-10">
      <div className="relative flex items-center justify-center md:h-full">
        {/* Vertical lines */}
        <MaskLine className="left-0" orientation="vertical" />
        <MaskLine className="right-0" orientation="vertical" />
        {/*  Horizontal lines */}
        <MaskLine className="top-0 md:w-xl" orientation="horizontal" />
        <MaskLine className="bottom-0 md:w-xl" orientation="horizontal" />

        <Avatar className="mask-[radial-gradient(circle,black_60%,transparent)] size-24 rounded-none *:rounded-none md:size-32">
          {avatarSrc && <AvatarImage alt={avatarAlt} src={avatarSrc} />}
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </div>
      <figcaption className="flex flex-col justify-center space-y-4 p-8 text-center md:p-6 md:text-left">
        <blockquote className="font-modernist text-muted-foreground text-lg leading-tight tracking-tight">
          &quot;{quote}&quot;
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
