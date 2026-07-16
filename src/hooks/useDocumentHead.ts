import { useEffect } from 'react'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../lib/seo'

const DEFAULT_OG_IMAGE_DIMENSIONS = { width: 2400, height: 1600 }

type HeadOptions = {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
  imageDimensions?: { width: number; height: number }
  type?: 'website' | 'article'
  /** Structured data (schema.org) for this route; omit to leave none injected. */
  jsonLd?: object
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

function setJsonLd(data: object | undefined) {
  let el = document.head.querySelector<HTMLScriptElement>('script[data-route-jsonld]')
  if (!data) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute('data-route-jsonld', '')
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Keeps the document title/meta in sync with the current route.
 * Note: this only affects clients that execute JS (browsers, Googlebot).
 * Crawlers that read raw HTML (Twitter/Facebook/LinkedIn/Slack link
 * previews) will only ever see the static tags in index.html — true
 * per-article social previews would need prerendering or SSR.
 */
export function useDocumentHead({
  title,
  description,
  path,
  image,
  imageAlt,
  imageDimensions = DEFAULT_OG_IMAGE_DIMENSIONS,
  type = 'website',
  jsonLd,
}: HeadOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    const ogImage = image ?? DEFAULT_OG_IMAGE
    const ogImageAlt = imageAlt ?? title

    document.title = title
    setMeta('name', 'description', description)
    setCanonical(url)

    setMeta('property', 'og:type', type)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', ogImage)
    setMeta('property', 'og:image:width', String(imageDimensions.width))
    setMeta('property', 'og:image:height', String(imageDimensions.height))
    setMeta('property', 'og:image:alt', ogImageAlt)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)
    setMeta('name', 'twitter:image:alt', ogImageAlt)

    setJsonLd(jsonLd)
  }, [title, description, path, image, imageAlt, imageDimensions, type, jsonLd])
}
