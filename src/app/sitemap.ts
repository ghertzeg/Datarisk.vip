import type { MetadataRoute } from 'next'
import { loadSeoPages } from '@/lib/seo-pages'

const BASE_URL = 'https://datarisk.vip'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = loadSeoPages()

  // Main site pages (visible navigation)
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  // Programmatically generated SEO landing pages
  const seoPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Language variants
  const langVariants: MetadataRoute.Sitemap = pages.flatMap((page) => [
    {
      url: `${BASE_URL}/${page.slug}?lang=ru`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/${page.slug}?lang=en`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ])

  return [...mainPages, ...seoPages, ...langVariants]
}
