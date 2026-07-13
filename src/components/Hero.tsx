import { images } from '../images'
import { IconArrowRight } from './icons'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden pt-28">
      <img
        src={images.heroSkyline}
        alt="Downtown Los Angeles skyline at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, var(--overlay) 0%, color-mix(in srgb, var(--overlay) 88%, transparent) 45%, var(--overlay) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28">
        <div className="max-w-3xl">
          <div
            className="mb-7 flex items-center gap-3 font-mono text-xs tracking-[0.18em]"
            style={{ color: 'var(--gold)' }}
          >
            <span className="h-px w-6" style={{ background: 'var(--gold)' }} />
            LOS ANGELES · EST. ASSET MANAGEMENT &amp; INVESTMENT
          </div>

          <h1 className="text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            Navigating the future of your finance, with certainty.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Fabian Holderness is an asset management and investment house built on disciplined
            research and long-standing relationships — identifying opportunity, managing capital,
            and developing businesses across industries.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--gold)', color: 'var(--navy)' }}
            >
              Our Services
              <IconArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:border-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
