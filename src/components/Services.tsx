import { imageAlt, images } from '../images'
import { IconArrowRight, IconDevelopment, IconInvestment, IconManagement, IconVenture } from './icons'
import { Reveal } from './Reveal'
import { Spotlight } from './Spotlight'

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
          <Reveal>
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
            <div className="group relative mt-10 hidden aspect-[4/5] overflow-hidden lg:block">
              <img
                src={images.towersUpward}
                alt={imageAlt.towersUpward}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(0deg, rgba(11,37,69,0.35), transparent 55%)' }}
              />
              <div
                className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100"
                style={{ background: 'var(--gold)' }}
              />
            </div>
          </Reveal>

          <div className="grid gap-px sm:grid-cols-2" style={{ background: 'var(--line)' }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <Spotlight
                  className="group relative flex h-full flex-col p-8 transition-colors duration-300 lg:p-10"
                  style={{ background: 'var(--bg)' }}
                >
                  <div className="flex items-start justify-between">
                    <s.icon
                      className="h-9 w-9 transition-transform duration-300 group-hover:-translate-y-1"
                      style={{ color: 'var(--gold)' }}
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none select-none font-mono text-4xl font-medium leading-none opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.16] lg:text-5xl"
                      style={{ color: 'var(--ink)' }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                    {s.copy}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div
                      className="font-mono text-[0.68rem] tracking-[0.14em]"
                      style={{ color: 'var(--ink-faint)' }}
                    >
                      {s.tag.toUpperCase()}
                    </div>
                    <IconArrowRight
                      className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      style={{ color: 'var(--gold)' }}
                    />
                  </div>

                  <div
                    className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                    style={{ background: 'var(--gold)' }}
                  />
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
