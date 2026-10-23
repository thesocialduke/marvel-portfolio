import type { ReactNode } from 'react'
import { Grid } from './Grid'

// Case-study section layout, shared by all three case studies. On laptops the heading sits in
// a narrow column on the left (and stays in view while you scroll the section); the text,
// images and videos sit on the right. Phones and tablets stack them.
export function SplitSection({
  title,
  aside,
  dark = false,
  children,
}: {
  title: ReactNode
  aside?: ReactNode
  dark?: boolean
  children: ReactNode
}) {
  return (
    <Grid className="gap-y-6 laptop:gap-y-0">
      <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:sticky laptop:top-28 laptop:col-span-4 laptop:col-start-2 laptop:self-start laptop:pr-6">
        {/* Smaller and a step lighter than page headings: these sit beside the content as
            labels for each chapter, so they guide the eye without shouting over it. */}
        <h2
          className="custom-h2 custom-h2-bold text-balance"
          style={{
            fontSize: 'calc(var(--h2-size) * 0.78)',
            fontWeight: 600,
            lineHeight: 1.2,
            ...(dark ? { color: 'var(--color-light)' } : {}),
          }}
        >
          {title}
        </h2>
        {aside}
      </div>
      <div className="col-span-full min-w-0 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-6 [&>p]:max-w-[68ch] [&>div>p.custom-p]:max-w-[68ch]">{children}</div>
    </Grid>
  )
}

export default SplitSection
