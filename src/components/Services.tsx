import { images } from '../images'
import { IconDevelopment, IconInvestment, IconManagement, IconVenture } from './icons'

const SERVICES = [
  {
    icon: IconInvestment,
    tag: 'Capital',
    title: 'Investment',
    copy: 'Research-led capital deployment across public and private markets, underwritten by both AI-driven screening and decades of relationship-based sourcing.',
  },
  {
    icon: IconManagement,
    tag: 'Stewardship',
    title: 'Management',
    copy: 'Ongoing portfolio stewardship — active risk management, reporting, and rebalancing so clients hold a clear course through changing conditions.',
  },
  {
    icon: IconDevelopment,
    tag: 'Operations',
    title: 'Development',
    copy: 'Operational teams embedded directly into partner companies to build the functions — finance, operations, growth — that turn a plan into a business.',
  },
  {
    icon: IconVenture,
    tag: 'Founders',
    title: 'Venture Capital',
    copy: 'Early-stage backing and incubation for founders we believe in, paired with the staff and structure to move from idea to institution.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <div className="mb-6 font-mono text-xs tracking-[0.18em]" style={{ color: 'var(--gold)' }}>
              OUR SERVICES
            </div>
            <h2 className="text-3xl lg:text-[2.6rem] lg:leading-[1.12]">
              Four disciplines, one course of capital.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
              We work across the full lifecycle of capital — finding it, placing it, growing it,
              and building new ventures with it.
            </p>
            <div className="relative mt-10 hidden aspect-[4/5] overflow-hidden lg:block">
              <img
                src={images.towersUpward}
                alt="Looking up at glass office towers"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-px sm:grid-cols-2" style={{ background: 'var(--line)' }}>
            {SERVICES.map((s) => (
              <div key={s.title} className="p-8 lg:p-10" style={{ background: 'var(--bg)' }}>
                <s.icon className="h-9 w-9" style={{ color: 'var(--gold)' }} />
                <h3 className="mt-6 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                  {s.copy}
                </p>
                <div
                  className="mt-6 font-mono text-[0.68rem] tracking-[0.14em]"
                  style={{ color: 'var(--ink-faint)' }}
                >
                  {s.tag.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
