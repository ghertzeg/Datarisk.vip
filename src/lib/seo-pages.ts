import fs from 'node:fs'
import path from 'node:path'

export type SeoCategory = 'gdpr' | 'web' | 'apps'
export type SeoLang = 'ro' | 'ru' | 'en'

export interface SeoPage {
  slug: string
  category: SeoCategory
  query: Record<SeoLang, string>
  intent: Record<SeoLang, string>
  keywords: Record<SeoLang, string[]>
}

let cachedPages: SeoPage[] | null = null

function parseCsvLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  result.push(current.trim())
  return result
}

export function loadSeoPages(): SeoPage[] {
  if (cachedPages) return cachedPages

  const csvPath = path.join(process.cwd(), 'data', 'seo-pages.csv')
  const csvContent = fs.readFileSync(csvPath, 'utf-8')
  const lines = csvContent.split('\n').filter((l) => l.trim().length > 0)

  // Skip header
  const dataLines = lines.slice(1)

  cachedPages = dataLines.map((line) => {
    const cols = parseCsvLine(line)
    return {
      slug: cols[0],
      category: cols[1] as SeoCategory,
      query: {
        ro: cols[2],
        ru: cols[3],
        en: cols[4],
      },
      intent: {
        ro: cols[5],
        ru: cols[6],
        en: cols[7],
      },
      keywords: {
        ro: cols[8].split(',').map((s) => s.trim()).filter(Boolean),
        ru: cols[9].split(',').map((s) => s.trim()).filter(Boolean),
        en: cols[10].split(',').map((s) => s.trim()).filter(Boolean),
      },
    }
  })

  return cachedPages
}

export function getSeoPage(slug: string): SeoPage | null {
  return loadSeoPages().find((p) => p.slug === slug) ?? null
}

export function getAllSeoSlugs(): string[] {
  return loadSeoPages().map((p) => p.slug)
}

export function getCategoryColor(category: SeoCategory): string {
  switch (category) {
    case 'gdpr':
      return 'var(--brand)'
    case 'web':
      return 'var(--brand)'
    case 'apps':
      return 'var(--accent2)'
    default:
      return 'var(--brand)'
  }
}

export function getCategoryLabel(category: SeoCategory, lang: SeoLang): string {
  const labels: Record<SeoCategory, Record<SeoLang, string>> = {
    gdpr: { ro: 'GDPR', ru: 'GDPR', en: 'GDPR' },
    web: { ro: 'Web', ru: 'Web', en: 'Web' },
    apps: { ro: 'Mobile', ru: 'Mobile', en: 'Mobile' },
  }
  return labels[category][lang]
}
