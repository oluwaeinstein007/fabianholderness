import { Link, Navigate, useParams } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { imageAlt, imageDimensions, images } from '../images'
import { getArticle } from '../articles'
import { IconArrowRight } from '../components/icons'
import { useDocumentHead } from '../hooks/useDocumentHead'
import { SITE_NAME, SITE_URL, toISODate } from '../lib/seo'

export function ArticlePage() {
  const { slug } = useParams()
  const article = slug ? getArticle(slug) : undefined

  useDocumentHead({
    title: article ? `${article.title} | Fabian Holderness` : 'Fabian Holderness',
    description: article?.excerpt ?? '',
    path: article ? `/insights/${article.slug}` : '/',
    image: article ? `${SITE_URL}${images[article.image]}` : undefined,
    imageAlt: article ? imageAlt[article.image] : undefined,
    imageDimensions: article ? imageDimensions[article.image] : undefined,
    type: 'article',
    jsonLd: article
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: article.title,
              description: article.excerpt,
              image: `${SITE_URL}${images[article.image]}`,
              datePublished: toISODate(article.date),
              author: { '@type': 'Organization', name: SITE_NAME },
              publisher: {
                '@type': 'Organization',
                name: SITE_NAME,
                logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
              },
              mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/insights/${article.slug}` },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/#insights` },
                { '@type': 'ListItem', position: 3, name: article.title, item: `${SITE_URL}/insights/${article.slug}` },
              ],
            },
          ],
        }
      : undefined,
  })

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
                alt={imageAlt[article.image]}
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
