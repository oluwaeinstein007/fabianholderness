import { Monogram } from './Monogram'
import { Reveal } from './Reveal'

export function Founder() {
  return (
    <section id="leadership" className="relative overflow-hidden py-24 lg:py-32">
      <span
        className="pointer-events-none absolute -top-10 left-0 select-none font-serif text-[14rem] leading-none opacity-[0.05] lg:text-[20rem]"
        style={{ color: 'var(--gold)' }}
        aria-hidden="true"
      >
        “
      </span>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-6 font-mono text-xs tracking-[0.18em]" style={{ color: 'var(--gold)' }}>
            LEADERSHIP
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
          <Reveal delay={80}>
            <div className="relative">
              <span
                className="slow-spin pointer-events-none absolute -inset-3 rounded-full border"
                style={{ borderColor: 'color-mix(in srgb, var(--gold) 35%, transparent)', borderStyle: 'dashed' }}
                aria-hidden="true"
              />
              <Monogram initials="OM" size="lg" />
            </div>
          </Reveal>

          <Reveal delay={160}>
            <blockquote className="max-w-2xl text-2xl leading-[1.45] lg:text-[1.75rem]">
              “We built Fabian Holderness on a simple premise: the firms that last are the ones
              that treat innovation and tradition as the same discipline, not a trade-off. Every
              opportunity we back has to earn its place on both counts.”
            </blockquote>
            <div className="mt-7">
              <div className="text-lg">Othniel Mbamalu</div>
              <div className="mt-1 text-sm" style={{ color: 'var(--ink-dim)' }}>
                Founder &amp; Chief Executive Officer — aerospace engineer turned investor
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
