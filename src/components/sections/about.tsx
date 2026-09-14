'use client'

import { useDict } from '@/lib/i18n/use-dict'
import { useSiteStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Ban, MessageSquareText, ArrowRight, BadgeInfo } from 'lucide-react'

export function About() {
  const t = useDict()
  const setView = useSiteStore((s) => s.setView)

  return (
    <section className="container-doc py-12 md:py-20">
      <div className="max-w-3xl mb-10">
        <div className="kicker mb-3">08</div>
        <h1 className="doc-h2 mb-4">{t.about.title}</h1>
        <p className="doc-lead">{t.about.lead}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-base leading-relaxed text-foreground/90">{t.about.body}</p>

          {/* Status */}
          <div className="panel p-5 border-l-4 border-l-brand bg-accent/30">
            <div className="flex items-center gap-2 mb-2">
              <BadgeInfo className="size-4 text-brand" aria-hidden />
              <h3 className="text-sm font-semibold">{t.about.status.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.about.status.text}
            </p>
          </div>
        </div>

        {/* Side facts */}
        <aside className="space-y-4">
          <div className="panel p-5">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="size-4 text-ok" aria-hidden />
              <h3 className="text-sm font-semibold">Legea nr. 195/2024</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Republica Moldova · intrată în vigoare 2024
            </p>
          </div>

          <div className="panel p-5">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquareText className="size-4 text-brand" aria-hidden />
              <h3 className="text-sm font-semibold">Răspuns rapid</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              1 zi lucrătoare pentru solicitări
            </p>
          </div>

          <div className="panel p-5">
            <div className="flex items-center gap-2 mb-2">
              <Ban className="size-4 text-bad" aria-hidden />
              <h3 className="text-sm font-semibold">Ce nu promitem</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Zero sancțiuni · certificate · listă de clienți cu logo
            </p>
          </div>
        </aside>
      </div>

      {/* Principles */}
      <div>
        <h2 className="doc-h3 mb-5">{t.about.title} — {t.about.lead.split(',')[0]}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {t.about.principles.map((p, i) => (
            <div key={i} className="panel p-5">
              <div className="font-mono text-2xl text-brand/60 font-bold mb-2">
                0{i + 1}
              </div>
              <h3 className="text-sm font-semibold mb-2">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Button onClick={() => setView('contact')}>
          {t.cta.contactUs}
          <ArrowRight className="size-4 ml-1.5" aria-hidden />
        </Button>
        <Button variant="outline" onClick={() => setView('check')}>
          {t.cta.checkSite}
        </Button>
      </div>
    </section>
  )
}
