import { Reveal } from './Reveal'
import { Spotlight } from './Spotlight'

const TESTIMONIALS = [
  {
    quote: 'The experience was seamless from the first call. Every strategy felt personalized to what I actually wanted from retirement, not a standard model.',
    name: 'David Martinez',
    role: 'Retired Investor',
  },
  {
    quote: 'They manage our assets with a genuinely global perspective — exactly what a startup moving across markets needs from a finance partner.',
    name: 'Lawrence Kim',
    role: 'Tech Startup CEO',
  },
  {
    quote: 'Innovative where it counts, traditional where it matters. That combination is rarer than it should be in this industry.',
    name: 'Sarah Thompson',
    role: 'Entrepreneur',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-14 max-w-xl">
            <div className="mb-6 font-mono text-xs tracking-[0.18em]" style={{ color: 'var(--gold)' }}>
              TESTIMONIALS
            </div>
            <h2 className="text-3xl lg:text-[2.6rem] lg:leading-[1.12]">What clients say.</h2>
          </div>
        </Reveal>

        <div className="grid gap-px sm:grid-cols-3" style={{ background: 'var(--line)' }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <Spotlight
                className="flex h-full flex-col gap-6 p-8 transition-transform duration-300 hover:-translate-y-1 lg:p-10"
                style={{ background: 'var(--bg)' }}
              >
                <div className="font-serif text-4xl leading-none" style={{ color: 'var(--gold)' }}>
                  “
                </div>
                <p className="flex-1 font-serif text-lg leading-relaxed">{t.quote}</p>
                <div className="border-t pt-5" style={{ borderColor: 'var(--line)' }}>
                  <div className="text-sm">{t.name}</div>
                  <div className="mt-0.5 font-mono text-xs tracking-wide" style={{ color: 'var(--ink-dim)' }}>
                    {t.role}
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
