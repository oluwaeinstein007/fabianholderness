import { Link, Navigate, useParams } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { images } from '../images'
import { getArticle } from '../articles'
import { IconArrowRight } from '../components/icons'

export function ArticlePage() {
  const { slug } = useParams()
  const article = slug ? getArticle(slug) : undefined

  if (!article) return <Navigate to="/" replace />

  return (
    <>
      <Nav />
      <main>
        <article className="pt-36 pb-24 lg:pb-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Link
              to="/#insights"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em]"
              style={{ color: 'var(--gold)' }}
            >
              <IconArrowRight className="h-3.5 w-3.5 rotate-180" />
              BACK TO INSIGHTS
            </Link>

            <div
              className="mt-8 flex items-center gap-4 font-mono text-xs tracking-wide"
              style={{ color: 'var(--ink-dim)' }}
            >
              <span>{article.date}</span>
              <span style={{ color: 'var(--gold)' }}>{article.category.toUpperCase()}</span>
            </div>

            <h1 className="mt-5 text-3xl leading-[1.15] lg:text-[2.75rem]">{article.title}</h1>

            <p className="mt-6 text-lg leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
              {article.excerpt}
            </p>

            <div className="relative mt-10 aspect-[16/9] overflow-hidden">
              <img
                src={images[article.image]}
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            <div className="mt-12 flex flex-col gap-6">
              {article.body.map((para, i) => (
                <p key={i} className="font-serif text-lg leading-[1.75]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
