import { useEffect } from 'react'

/**
 * Canonical/base site URL. Change this once if the production domain differs
 * (e.g. a custom domain instead of the default Vercel one) — every canonical,
 * og:url and JSON-LD URL is derived from it.
 */
export const SITE_URL = 'https://testedaistack.vercel.app'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

type SeoProps = {
  title: string
  description: string
  /** Route path beginning with "/", e.g. "/blog". */
  path: string
  type?: 'website' | 'article'
  jsonLd?: Record<string, unknown>
}

/**
 * Head manager for a client-rendered SPA: sets the document title, description,
 * canonical link, Open Graph / Twitter tags and optional JSON-LD per route.
 */
export function Seo({ title, description, path, type = 'website', jsonLd }: SeoProps) {
  useEffect(() => {
    const url = SITE_URL + path
    document.title = title
    upsertMeta('name', 'description', description)
    upsertCanonical(url)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', url)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)

    const scriptId = 'seo-jsonld'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script')
        script.id = scriptId
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) {
      script.remove()
    }
  }, [title, description, path, type, jsonLd])

  return null
}
