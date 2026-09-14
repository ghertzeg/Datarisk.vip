'use client'

import { useSiteStore } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { Button } from '@/components/ui/button'
import { Shield, ArrowRight, FileCheck2, Eye, Lock } from 'lucide-react'

export function Hero() {
  const setView = useSiteStore((s) => s.setView)
  const t = useDict()

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--brand) 1px, transparent 1px), linear-gradient(90deg, var(--brand) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at top, black 40%, transparent 75%)',
        }}
      />

      <div className="container-doc relative py-16 md:py-24 lg:py-28">
        <div className="max-w-4xl">
          <div className="kicker mb-5">{t.hero.badge}</div>

          <h1 className="doc-h1 mb-6">
            <span className="block">{t.hero.titleA}</span>
            <span className="block text-brand">{t.hero.titleB}</span>
          </h1>

          <p className="doc-lead mb-8 max-w-2xl">{t.hero.lead}</p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Button size="lg" onClick={() => setView('check')}>
              {t.hero.primaryCta}
              <ArrowRight className="size-4 ml-1.5" aria-hidden />
            </Button>
            <Button size="lg" variant="outline" onClick={() => setView('services')}>
              {t.hero.secondaryCta}
            </Button>
          </div>

          {/* Trust note */}
          <div className="panel p-4 md:p-5 max-w-2xl flex items-start gap-3 bg-accent/30">
            <div className="rounded-lg bg-ok/15 p-2 text-ok shrink-0">
              <Shield className="size-4" aria-hidden />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {t.hero.trustNote}
            </p>
          </div>
        </div>

        {/* Quick value props */}
        <div className="grid sm:grid-cols-3 gap-3 mt-12 md:mt-16">
          <ValueProp
            icon={<Eye className="size-5" aria-hidden />}
            title={t.services.items[0].title}
            desc={t.services.items[0].short}
            onClick={() => setView('services')}
          />
          <ValueProp
            icon={<FileCheck2 className="size-5" aria-hidden />}
            title={t.services.items[2].title}
            desc={t.services.items[2].short}
            onClick={() => setView('services')}
          />
          <ValueProp
            icon={<Lock className="size-5" aria-hidden />}
            title={t.services.items[3].title}
            desc={t.services.items[3].short}
            onClick={() => setView('services')}
          />
        </div>
      </div>
    </section>
  )
}

function ValueProp({
  icon,
  title,
  desc,
  onClick,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="panel p-5 text-left hover:border-brand/40 hover:bg-accent/40 transition-colors group"
    >
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-brand/15 p-2 text-brand shrink-0 group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold mb-1">{title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </div>
    </button>
  )
}
