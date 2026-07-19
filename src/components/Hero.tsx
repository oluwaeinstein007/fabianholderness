import { useEffect, useState } from 'react'
import { imageAlt, images } from '../images'
import { Magnetic } from './Magnetic'
import { IconArrowRight } from './icons'

const TICKER_ITEMS = [
  'ASSET MANAGEMENT',
  'INVESTMENT',
  'VENTURE CAPITAL',
  'PORTFOLIO STEWARDSHIP',
  'BUSINESS DEVELOPMENT',
  'LOS ANGELES',
]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setMounted(true)
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setOffset(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const stagger = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}ms`,
  })

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      <img
        src={images.heroSkyline}
        alt={imageAlt.heroSkyline}
        className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
        style={{
          transform: `translateY(${Math.min(offset * 0.18, 90)}px) scale(${mounted ? 1 : 1.06})`,
          transition: 'transform 1.8s cubic-bezier(.16,1,.3,1)',
        }}
        loading="eager"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, var(--overlay) 0%, color-mix(in srgb, var(--overlay) 88%, transparent) 45%, var(--overlay) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col justify-center pt-24 pb-14 lg:pt-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <div
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 py-1.5 pl-2 pr-4 font-mono text-xs tracking-[0.18em] backdrop-blur-sm"
              style={{ color: 'var(--gold)', background: 'rgba(6,12,22,0.3)', ...stagger(0) }}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ background: 'color-mix(in srgb, var(--gold) 18%, transparent)' }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--gold)' }} />
              </span>
              LOS ANGELES · EST. ASSET MANAGEMENT &amp; INVESTMENT
            </div>

            <h1 className="text-[2.75rem] leading-[1.06] text-white sm:text-6xl lg:text-[4rem]" style={stagger(90)}>
              Navigating the future of your finance,{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, var(--gold), #E8C88A 60%, var(--gold))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                with certainty.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80" style={stagger(180)}>
              Fabian Holderness is an asset management and investment house built on disciplined
              research and long-standing relationships — identifying opportunity, managing capital,
              and developing businesses across industries.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4" style={stagger(270)}>
              <Magnetic>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide shadow-[0_8px_30px_-8px_rgba(142,106,40,0.6)] transition-all duration-300 hover:shadow-[0_12px_36px_-6px_rgba(142,106,40,0.75)]"
                  style={{ background: 'var(--gold)', color: 'var(--navy)' }}
                >
                  Our Services
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  Get in Touch
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      <div
        className="marquee-row relative z-10 w-full overflow-hidden border-t"
        style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(6,12,22,0.35)' }}
      >
        <div className="marquee-track flex w-max items-center gap-10 py-3.5">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 font-mono text-[0.7rem] tracking-[0.18em] text-white/60"
            >
              {item}
              <span style={{ color: 'var(--gold)' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-28 right-6 z-10 hidden flex-col items-center gap-3 lg:right-10 lg:flex">
        <span className="font-mono text-[0.65rem] tracking-[0.2em] text-white/50" style={{ writingMode: 'vertical-rl' }}>
          SCROLL
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-white/20">
          <span className="scroll-cue-dot absolute left-0 top-0 h-3 w-px" style={{ background: 'var(--gold)' }} />
        </span>
      </div>
    </section>
  )
}
