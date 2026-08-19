import type { ReactNode } from 'react'

export function Grid({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`mx-auto grid w-full max-w-[1440px] grid-cols-4 gap-x-6 px-6 tablet:grid-cols-8 laptop:grid-cols-14 laptop:gap-x-12 ${className}`}
    >
      {children}
    </div>
  )
}
