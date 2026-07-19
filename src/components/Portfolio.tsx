import { IconArrowRight } from './icons'
import { Reveal } from './Reveal'
import { Spotlight } from './Spotlight'

const COMPANIES = [
  {
    mark: 'TVA',
    name: 'Travel Avatar',
    sector: 'Online Travel Agency',
    tag: 'TRAVEL',
    copy: 'A full-service OTA platform for flights and hotels, built and operated end-to-end by our development team — booking engine, affiliate network, and back office alike.',
  },
  {
    mark: 'PR',
    name: 'PalRemit',
    sector: 'Fintech · Remittance',
    tag: 'FINTECH',
    copy: 'Cross-border payments and remittance infrastructure, built to move money reliably through the markets our clients and partners operate in.',
  },
  {
    mark: 'AD',
    name: 'Adache',
    sector: 'Early-Stage Venture',
    tag: 'VENTURE',
    copy: 'One of our newer ventures — staffed, structured, and resourced in-house from the earliest stage, the same discipline we bring to every company we back.',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32" style={{ background: 'var(--bg-raised)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <div className="mb-6 font-mono text-xs tracking-[0.18em]" style={{ color: 'var(--gold)' }}>
              OUR COMPANIES
            </div>
            <h2 className="text-3xl lg:text-[2.6rem] lg:leading-[1.12]">Built in-house, backed to scale.</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
              Development and venture capital aren&rsquo;t just services on our list — they&rsquo;re how a
              handful of our own ideas became companies. A sample of what we&rsquo;ve staffed and
              built from the ground up.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--line)' }}>
          {COMPANIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 90}>
              <Spotlight
                className="group relative flex h-full flex-col p-8 transition-colors duration-300 lg:p-10"
                style={{ background: 'var(--bg-raised)' }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center border font-mono text-[0.7rem] tracking-wide transition-colors duration-300 group-hover:border-[var(--gold)]"
                    style={{ borderColor: 'var(--line-strong)', color: 'var(--gold)' }}
                  >
                    {c.mark}
                  </div>
                  <span className="font-mono text-[0.65rem] tracking-[0.14em]" style={{ color: 'var(--ink-faint)' }}>
                    {c.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl">{c.name}</h3>
                <div className="mt-1 font-mono text-xs tracking-wide" style={{ color: 'var(--gold)' }}>
                  {c.sector}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                  {c.copy}
                </p>

                <div
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  style={{ background: 'var(--gold)' }}
                />
              </Spotlight>
            </Reveal>
          ))}

          <Reveal delay={3 * 90}>
            <Spotlight
              className="group relative flex h-full flex-col"
              style={{ background: 'var(--bg-raised)' }}
            >
              <a href="#contact" className="flex h-full flex-col justify-between p-8 lg:p-10">
                <div>
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 group-hover:bg-[var(--gold)]"
                    style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
                  >
                    <IconArrowRight
                      className="h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--navy)]"
                    />
                  </div>
                  <h3 className="mt-6 text-xl">Building the next one</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                    Early-stage founder looking for more than a check? This is where that
                    conversation starts.
                  </p>
                </div>
                <span className="mt-6 font-mono text-[0.68rem] tracking-[0.14em]" style={{ color: 'var(--gold)' }}>
                  GET IN TOUCH
                </span>
              </a>

              <div
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                style={{ background: 'var(--gold)' }}
              />
            </Spotlight>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
