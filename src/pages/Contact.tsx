import { useState, type FormEvent, type ReactNode } from 'react'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { site } from '../data/site'

const fieldChrome =
  'inline-flex h-full w-full flex-col rounded-xl bg-ink/10 text-ink ring-inset transition-colors group-focus-within:ring-2 group-focus-within:ring-ink/80 hover:ring-2 hover:ring-ink/80'

const control =
  'size-full min-w-0 flex-1 resize-none appearance-none overflow-hidden rounded-none bg-transparent px-4 py-3 focus:outline-none placeholder:text-ink/60'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'someone'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <Layout>
      <section>
        <Grid className="pt-18 pb-8 tablet:pt-[5rem] laptop:pt-[8.5rem] laptop:pb-12">
          <div className="col-span-full col-start-1 tablet:col-span-6 tablet:col-start-2 laptop:col-span-8 laptop:col-start-2">
            <h1 className="custom-h2 relative text-balance">Let’s work together, I’m just a message away.</h1>
          </div>
        </Grid>
      </section>

      <section>
        <Grid className="items-start space-y-12 py-12 laptop:space-y-0">
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-5 laptop:col-start-2 laptop:row-start-1">
            <h3 className="custom-h3 relative text-balance">
              I can provide further case studies upon request. In case you’re reaching out because of a project,
              please provide some information on your goals and we’ll move the conversation on from there.
            </h3>
          </div>
          <div className="col-span-full tablet:col-span-6 tablet:col-start-2 laptop:col-span-6 laptop:col-start-8 laptop:row-start-1">
            <form noValidate className="space-y-8" onSubmit={onSubmit}>
              <div className="space-y-8">
                <Field label="Name*" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your Name"
                    aria-invalid={false}
                    className={control}
                    style={{ fontFamily: 'var(--font-poppins)' }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Field>
                <Field label="Email*" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@email.com"
                    aria-invalid={false}
                    className={control}
                    style={{ fontFamily: 'var(--font-poppins)' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Field>
                <Field label="Message*" htmlFor="message" tall>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Start typing your message here…"
                    aria-invalid={false}
                    className={control}
                    style={{ fontFamily: 'var(--font-poppins)' }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Field>
              </div>
              <button
                type="submit"
                className="custom-button-label flex min-h-[3.5rem] min-w-[6rem] w-full items-center justify-center gap-3 rounded-full px-8 py-2 text-[1rem] uppercase ring-1 ring-inset ring-hyacinth transition-colors outline-none hover:bg-hyacinth hover:text-page focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-page focus-visible:ring-hyacinth-hover tablet:w-auto"
              >
                Send Mail
              </button>
            </form>
          </div>
        </Grid>
      </section>
    </Layout>
  )
}

function Field({
  label,
  htmlFor,
  children,
  tall,
}: {
  label: string
  htmlFor: string
  children: ReactNode
  tall?: boolean
}) {
  return (
    <div className="group space-y-2 rounded-xl">
      <label htmlFor={htmlFor} className="flex flex-col tracking-[0.02em]">
        <div className="custom-p pb-2 text-ink">{label}</div>
        <span className="group inline-block rounded-xl">
          <span className={fieldChrome}>
            <span className="relative inline-flex h-full w-full">
              <span className={`flex-1 ${tall ? 'h-72' : 'h-12'}`}>{children}</span>
            </span>
          </span>
        </span>
      </label>
    </div>
  )
}
