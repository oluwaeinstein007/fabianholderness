import { Monogram } from './Monogram'

export function Founder() {
  return (
    <section id="leadership" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-6 font-mono text-xs tracking-[0.18em]" style={{ color: 'var(--gold)' }}>
          LEADERSHIP
        </div>

        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
          <Monogram initials="OM" size="lg" />

          <div>
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
          </div>
        </div>
      </div>
    </section>
  )
}
