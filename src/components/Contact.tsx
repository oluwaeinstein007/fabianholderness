import { images } from '../images'
import { ContactForm } from './ContactForm'
import { Magnetic } from './Magnetic'
import { Reveal } from './Reveal'

const FACTS = [
  { label: 'Office', value: 'Los Angeles, California' },
  { label: 'Phone', value: '+1 (310) 626-7350' },
  { label: 'Email', value: 'info@fabianholderness.com' },
  { label: 'Hours', value: 'Mon – Fri, 08:00 – 16:00' },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <img
        src={images.teamAtWork}
        alt="Office at dusk, teams reviewing work"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: 'var(--overlay)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
          <Reveal>
            <div className="mb-6 font-mono text-xs tracking-[0.18em]" style={{ color: 'var(--gold)' }}>
              GET IN TOUCH
            </div>
            <h2 className="text-3xl text-white lg:text-[2.6rem] lg:leading-[1.12]">
              Ready to plot your next move?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75">
              Blending research-based data from global market trends with disciplined advisory
              relationships — to invest in businesses, manage portfolios, and explore new
              opportunities.
            </p>

            <div className="mt-9">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-5">
            <dl
              className="flex flex-col gap-5 border p-8 backdrop-blur-sm lg:p-10"
              style={{ borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(10,15,26,0.35)' }}
            >
              {FACTS.map((f) => (
                <div
                  key={f.label}
                  className="flex items-baseline justify-between gap-4 border-b pb-4 font-mono text-sm last:border-b-0 last:pb-0"
                  style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                >
                  <dt className="text-white/60">{f.label}</dt>
                  <dd className="text-right text-white">{f.value}</dd>
                </div>
              ))}
            </dl>
            <Magnetic strength={8} className="w-full">
              <a
                href="tel:+13106267350"
                className="flex items-center justify-center border border-white/40 px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:border-white"
              >
                Call +1 (310) 626-7350
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
