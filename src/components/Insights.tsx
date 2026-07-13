import { Link } from 'react-router-dom'
import { images } from '../images'
import { articles } from '../articles'

export function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
            <img
              src={images.dataDashboard}
              alt="Market research and analytics dashboard"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <div className="mb-6 font-mono text-xs tracking-[0.18em]" style={{ color: 'var(--gold)' }}>
              INSIGHTS
            </div>
            <h2 className="text-3xl lg:text-[2.6rem] lg:leading-[1.12]">
              Latest from the data studio.
            </h2>

            <div className="mt-10 border-t" style={{ borderColor: 'var(--line)' }}>
              {articles.map((p) => (
                <Link
                  key={p.slug}
                  to={`/insights/${p.slug}`}
                  className="grid grid-cols-[80px_1fr] items-baseline gap-6 border-b py-6 transition-opacity hover:opacity-70 sm:grid-cols-[80px_1fr_auto]"
                  style={{ borderColor: 'var(--line)' }}
                >
                  <span className="font-mono text-xs" style={{ color: 'var(--ink-dim)' }}>
                    {p.date.replace(/ \d{4}$/, '')}
                  </span>
                  <span className="text-lg leading-snug">{p.title}</span>
                  <span
                    className="col-span-2 font-mono text-[0.68rem] tracking-[0.1em] sm:col-span-1"
                    style={{ color: 'var(--gold)' }}
                  >
                    {p.category.toUpperCase()}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
