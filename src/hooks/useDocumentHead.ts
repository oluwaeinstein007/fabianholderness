import { useEffect } from 'react'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../lib/seo'

type HeadOptions = {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Keeps the document title/meta in sync with the current route.
 * Note: this only affects clients that execute JS (browsers, Googlebot).
 * Crawlers that read raw HTML (Twitter/Facebook/LinkedIn/Slack link
 * previews) will only ever see the static tags in index.html — true
 * per-article social previews would need prerendering or SSR.
 */
export function useDocumentHead({ title, description, path, image, type = 'website' }: HeadOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    const ogImage = image ?? DEFAULT_OG_IMAGE

    document.title = title
    setMeta('name', 'description', description)
    setCanonical(url)

    setMeta('property', 'og:type', type)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', ogImage)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)
  }, [title, description, path, image, type])
}
