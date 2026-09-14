'use client'

import { useDict } from '@/lib/i18n/use-dict'
import { useSiteStore, type ViewKey } from '@/lib/store'
import { FileText, ArrowLeft } from 'lucide-react'

export function Legal({ kind }: { kind: 'privacy' | 'cookies' | 'terms' | 'dpa' }) {
  const t = useDict()
  const setView = useSiteStore((s) => s.setView)
  const page = t.legal[kind]

  return (
    <section className="container-doc py-12 md:py-20">
      <button
        onClick={() => setView('home' as ViewKey)}
        className="text-sm text-muted-foreground hover:text-brand mb-6 inline-flex items-center gap-1.5"
      >
        <ArrowLeft className="size-3.5" aria-hidden />
        {t.nav.home}
      </button>

      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg bg-brand/15 p-2 text-brand">
            <FileText className="size-5" aria-hidden />
          </div>
          <span className="kicker">{t.footer.legalTitle}</span>
        </div>

        <h1 className="doc-h2 mb-2">{page.title}</h1>
        <p className="text-xs text-muted-foreground mb-8 font-mono">
          {t.blog.updated}: {page.updated}
        </p>

        <p className="text-base text-foreground/90 leading-relaxed mb-8">
          {page.intro}
        </p>

        <div className="space-y-8">
          {page.sections.map((section, i) => (
            <article key={i}>
              <h2 className="text-lg font-semibold mb-3">{section.h}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {section.p}
              </p>
            </article>
          ))}
        </div>

        <div className="hairline mt-12 pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>DATARISK MOLDOVA · {page.updated}</span>
          <span className="font-mono">Legea nr. 195/2024</span>
        </div>
      </div>
    </section>
  )
}
