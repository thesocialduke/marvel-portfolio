import type { ReactNode } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

export function TestimonialsSection({
  icon,
  quote,
  name,
  role,
  avatarSrc,
  avatarAlt,
  avatarFallback,
}: {
  icon?: ReactNode
  quote: ReactNode
  name: string
  role: string
  avatarSrc?: string
  avatarAlt?: string
  avatarFallback: string
}) {
  return (
    <figure className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center">
      <div className="mb-8 flex items-center">{icon}</div>

      <blockquote className="font-modernist text-center text-xl leading-tight font-normal tracking-tight sm:text-2xl md:text-3xl">
        &quot;{quote}&quot;
      </blockquote>

      <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mx-auto my-5 h-px w-full max-w-sm bg-border" />

      <figcaption className="flex flex-col items-center gap-5">
        <div className="space-y-0.5 text-center">
          <cite className="font-modernist text-foreground text-xl font-medium not-italic">{name}</cite>
          <div className="text-muted-foreground text-sm">{role}</div>
        </div>

        <Avatar className="size-12 rounded-none border object-cover">
          {avatarSrc && <AvatarImage alt={avatarAlt} src={avatarSrc} />}
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </figcaption>
    </figure>
  )
}

export default TestimonialsSection
