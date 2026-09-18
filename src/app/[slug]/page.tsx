import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  loadSeoPages,
  getSeoPage,
  type SeoLang,
  type SeoCategory,
} from '@/lib/seo-pages'
import { SeoLanding } from '@/components/sections/seo-landing'

// Static generation for all slugs — тысячи страниц в build time
export const dynamicParams = false

export function generateStaticParams() {
  return loadSeoPages().map((p) => ({ slug: p.slug }))
}

//detect lang from URL (we'll have /ro/, /ru/, /en/ prefixes? No — single slug, default RO)
//For SEO we want separate URLs per language. We'll use ?lang= param OR we'll generate 3 slugs per page.
//Better: use one slug, default language ro, but with hreflang alternates.

export function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ lang?: string }>
}): Promise<Metadata> {
  return Promise.all([params, searchParams]).then(([{ slug }, { lang: langParam }]) => {
    const page = getSeoPage(slug)
    if (!page) return { title: 'Not found' }

    const lang: SeoLang =
      langParam === 'ru' ? 'ru' : langParam === 'en' ? 'en' : 'ro'
    const query = page.query[lang]
    const intent = page.intent[lang]
    const keywords = page.keywords[lang].join(', ')

    const title = `${query} · DATARISK MOLDOVA SRL`
    const description = intent
    const ogLocale =
      lang === 'ru' ? 'ru_MD' : lang === 'en' ? 'en_MD' : 'ro_MD'

    return {
      title,
      description,
      keywords: [keywords, 'Legea 195/2024', 'GDPR Moldova', 'DATARISK'],
      authors: [{ name: 'DATARISK MOLDOVA SRL' }],
      alternates: {
        canonical: `/${slug}`,
        languages: {
          ro: `/${slug}`,
          ru: `/${slug}?lang=ru`,
          en: `/${slug}?lang=en`,
        },
      },
      openGraph: {
        title,
        description,
        siteName: 'DATARISK MOLDOVA SRL',
        type: 'website',
        locale: ogLocale,
      },
      twitter: {
        card: 'summary',
        title,
        description,
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  })
}

export default async function SlugPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ lang?: string }>
}) {
  const { slug } = await params
  const { lang: langParam } = await searchParams

  const page = getSeoPage(slug)
  if (!page) notFound()

  const lang: SeoLang =
    langParam === 'ru' ? 'ru' : langParam === 'en' ? 'en' : 'ro'

  return <SeoLanding page={page} lang={lang} />
}
