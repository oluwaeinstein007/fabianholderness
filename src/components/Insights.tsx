import { useState, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../images'
import { articles } from '../articles'
import { IconArrowRight } from './icons'
import { Reveal } from './Reveal'

export function Insights() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const hovered = articles.find((a) => a.slug === hoveredSlug)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    setPos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section id="insights" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full">
              <img
                src={images.dataDashboard}
                alt="Market research and analytics dashboard"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mb-6 font-mono text-xs tracking-[0.18em]" style={{ color: 'var(--gold)' }}>
              INSIGHTS
            </div>
            <h2 className="text-3xl lg:text-[2.6rem] lg:leading-[1.12]">
              Latest from the data studio.
            </h2>

            <div className="mt-10 border-t" style={{ borderColor: 'var(--line)' }} onMouseMove={handleMouseMove}>
              {articles.map((p) => (
                <Link
                  key={p.slug}
                  to={`/insights/${p.slug}`}
                  onMouseEnter={() => setHoveredSlug(p.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  className="group grid grid-cols-[80px_1fr] items-baseline gap-6 border-b py-6 transition-[padding-left] duration-300 hover:pl-2 sm:grid-cols-[80px_1fr_auto_20px]"
                  style={{ borderColor: 'var(--line)' }}
                >
                  <span className="font-mono text-xs" style={{ color: 'var(--ink-dim)' }}>
                    {p.date.replace(/ \d{4}$/, '')}
                  </span>
                  <span className="text-lg leading-snug transition-colors duration-300 group-hover:text-[var(--gold)]">
                    {p.title}
                  </span>
                  <span
                    className="col-span-2 font-mono text-[0.68rem] tracking-[0.1em] sm:col-span-1"
                    style={{ color: 'var(--gold)' }}
                  >
                    {p.category.toUpperCase()}
                  </span>
                  <IconArrowRight
                    className="hidden h-4 w-4 -translate-x-1 self-center opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
                    style={{ color: 'var(--gold)' }}
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div
        className="pointer-events-none fixed z-40 hidden aspect-[4/3] w-56 overflow-hidden shadow-2xl lg:block"
        style={{
          left: Math.min(pos.x + 28, typeof window !== 'undefined' ? window.innerWidth - 248 : pos.x),
          top: pos.y - 96,
          opacity: hovered ? 1 : 0,
          transform: `scale(${hovered ? 1 : 0.9})`,
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.45)',
        }}
      >
        {hovered && (
          <img src={images[hovered.image]} alt="" className="h-full w-full object-cover" />
        )}
      </div>
    </section>
  )
}
