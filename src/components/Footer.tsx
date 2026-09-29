import { Link } from 'react-router-dom'
import { Grid } from './Grid'
import { nav, site } from '../data/site'

export function Footer() {
  return (
    <footer id="footer">
      <Grid className="relative gap-12 py-12 tablet:gap-8 laptop:pt-18 laptop:pb-12">
        <nav className="col-span-full col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-4">
          <ul className="custom-p flex flex-col flex-wrap items-center justify-center gap-6 gap-y-2 tablet:flex-row">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="group relative inline-flex h-10 items-center rounded-sm text-hyacinth outline-none focus-visible:ring-2 focus-visible:ring-hyacinth-hover"
                >
                  <div className="relative text-hyacinth group-hover:underline group-hover:decoration-1 group-hover:underline-offset-8">
                    {item.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-span-full h-max space-y-8 tablet:col-span-6 tablet:col-start-2 laptop:col-span-12 laptop:col-start-2">
          <div className="space-y-text-block text-center">
            <p className="custom-p relative min-h-[1.5rem]">{site.copyright}</p>
          </div>
        </div>
      </Grid>
    </footer>
  )
}
