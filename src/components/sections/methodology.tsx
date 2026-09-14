'use client'

import { useSiteStore } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { Button } from '@/components/ui/button'
import { Briefcase, Scale, Code2, ArrowRight } from 'lucide-react'

const levelIcons = [Briefcase, Scale, Code2]

export function Methodology() {
  const t = useDict()
  const setView = useSiteStore((s) => s.setView)

  return (
    <section className="container-doc py-12 md:py-20">
      <div className="max-w-3xl mb-12">
        <div className="kicker mb-3">03</div>
        <h1 className="doc-h2 mb-4">{t.methodology.title}</h1>
        <p className="doc-lead">{t.methodology.lead}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {t.methodology.levels.map((level, i) => {
          const Icon = levelIcons[i]
          return (
            <div key={level.n} className="panel p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-lg bg-brand/15 p-2.5 text-brand">
                  <Icon className="size-5" aria-hidden />
                </div>
                <span className="font-mono text-2xl text-muted-foreground/60 font-bold">
                  {level.n}
                </span>
              </div>
              <h3 className="text-base font-semibold mb-1 leading-tight">{level.title}</h3>
              <p className="text-xs text-brand font-medium mb-3 uppercase tracking-wider">
                {level.audience}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {level.desc}
              </p>
            </div>
          )
        })}
      </div>

      {/* Example */}
      <div className="panel-accent p-6 md:p-8 border-l-4 border-l-brand">
        <h3 className="doc-h3 mb-4">{t.methodology.example.title}</h3>
        <blockquote className="text-sm md:text-base leading-relaxed text-foreground/90 font-mono">
          {t.methodology.example.text}
        </blockquote>
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Button onClick={() => setView('check')}>
          {t.cta.checkSite}
          <ArrowRight className="size-4 ml-1.5" aria-hidden />
        </Button>
        <Button variant="outline" onClick={() => setView('contact')}>
          {t.cta.contactUs}
        </Button>
      </div>
    </section>
  )
}
