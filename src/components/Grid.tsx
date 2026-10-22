import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

// Page grid. Phones: 4 columns. Tablets: 8 tracks where the first and last are zero-width,
// so content placed on columns 2-7 (the site-wide pattern) uses the full width with the same
// 24px side margin as phones. Laptops: 14 columns with the content on 2-13.
export function Grid({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn('mx-auto grid w-full max-w-[1440px] grid-cols-4 gap-x-6 px-6 tablet:grid-cols-[0_repeat(6,minmax(0,1fr))_0] tablet:px-0 laptop:grid-cols-14 laptop:gap-x-12 laptop:px-6', className)}
    >
      {children}
    </div>
  )
}
