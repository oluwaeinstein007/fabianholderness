import { imageAlt, images } from '../images'
import { Reveal } from './Reveal'

const POINTS = [
  {
    title: 'Adaptability',
    copy: 'Markets shift; mandates don’t. We revise strategy continuously against new data while holding firm to each client’s underlying objectives and risk tolerance.',
  },
  {
    title: 'New Strategy',
    copy: 'AI screening surfaces opportunity at a scale no analyst desk can match; our people still make every final call, weighing what the model can’t see.',
  },
  {
    title: 'Client Service',
    copy: 'Every client works directly with a senior advisor who knows their portfolio and their goals — not a rotating desk or an automated dashboard.',
  },
  {
    title: 'Data Studio',
    copy: 'Our in-house data studio tracks global market trends and macro signals continuously, giving every recommendation a documented, testable basis.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-32" style={{ background: 'var(--bg-sunken)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="group relative aspect-[4/5] overflow-hidden">
              <img
                src={images.officeInterior}
                alt={imageAlt.officeInterior}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 border"
                style={{ borderColor: 'color-mix(in srgb, var(--gold) 40%, transparent)' }}
              />
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="mb-6 font-mono text-xs tracking-[0.18em]" style={{ color: 'var(--gold)' }}>
              OUR APPROACH
            </div>
            <h2 className="text-3xl lg:text-[2.6rem] lg:leading-[1.12]">
              Four principles behind every engagement.
            </h2>

            <dl className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {POINTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 100} y={16}>
                  <div
                    className="border-l-2 py-0.5 pl-5 transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--gold)_7%,transparent)]"
                    style={{ borderColor: 'var(--gold)' }}
                  >
                    <dt className="text-lg">{p.title}</dt>
                    <dd className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                      {p.copy}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
