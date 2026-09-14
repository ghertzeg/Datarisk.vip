'use client'

import { useDict } from '@/lib/i18n/use-dict'
import { AlertTriangle, FileText, Quote } from 'lucide-react'

export function Trust() {
  const t = useDict()

  return (
    <section className="container-doc py-16 md:py-24">
      <div className="max-w-3xl mb-12">
        <div className="kicker mb-3">01</div>
        <h2 className="doc-h2 mb-4">{t.trust.title}</h2>
        <p className="doc-lead">{t.trust.lead}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Disclaimer */}
        <div className="panel p-6 lg:col-span-2 border-l-4 border-l-brand">
          <h3 className="doc-h3 mb-3">{t.about.status.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t.trust.disclaimer}
          </p>

          <div className="hairline mt-6 pt-5">
            <div className="flex items-center gap-2 mb-3">
              <Quote className="size-4 text-brand" aria-hidden />
              <h4 className="text-sm font-semibold">{t.trust.promiseTitle}</h4>
            </div>
            <blockquote className="text-sm leading-relaxed text-muted-foreground italic border-l-2 border-brand/40 pl-4">
              {t.trust.promise}
            </blockquote>
          </div>
        </div>

        {/* What we don't check */}
        <div className="panel p-6 bg-warn/5">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="size-5 text-warn" aria-hidden />
            <h3 className="doc-h3">{t.trust.notCheck.title}</h3>
          </div>
          <ul className="space-y-3">
            {t.trust.notCheck.items.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                <span className="text-warn shrink-0 mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
