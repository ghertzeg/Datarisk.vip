'use client'

import { useDict } from '@/lib/i18n/use-dict'
import { AlertCircle, AlertTriangle, CheckCircle2 } from 'lucide-react'

const severityConfig = {
  bad: {
    icon: AlertCircle,
    badgeClass: 'badge-bad',
    borderClass: 'border-l-bad',
    bgClass: 'bg-bad/5',
  },
  warn: {
    icon: AlertTriangle,
    badgeClass: 'badge-warn',
    borderClass: 'border-l-warn',
    bgClass: 'bg-warn/5',
  },
  ok: {
    icon: CheckCircle2,
    badgeClass: 'badge-ok',
    borderClass: 'border-l-ok',
    bgClass: 'bg-ok/5',
  },
} as const

export function Cases() {
  const t = useDict()

  return (
    <section className="container-doc py-12 md:py-20">
      <div className="max-w-3xl mb-12">
        <div className="kicker mb-3">05</div>
        <h1 className="doc-h2 mb-4">{t.cases.title}</h1>
        <p className="doc-lead">{t.cases.lead}</p>
      </div>

      <div className="space-y-5">
        {t.cases.items.map((item) => {
          const cfg = severityConfig[item.severity]
          const Icon = cfg.icon
          return (
            <article
              key={item.id}
              className={`panel p-5 md:p-6 border-l-4 ${cfg.borderClass} ${cfg.bgClass}`}
            >
              <div className="grid md:grid-cols-[auto_1fr] gap-4 md:gap-6">
                <div className="md:w-48 shrink-0">
                  <span className={`badge-doc ${cfg.badgeClass} mb-2`}>
                        <Icon className="size-3" aria-hidden />
                        {item.severityLabel}
                  </span>
                  <p className="font-mono text-xs text-muted-foreground">{item.id}</p>
                  <h3 className="text-base font-semibold mt-2 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  <CaseBlock label="Context" text={item.context} />
                  <CaseBlock label="Finding" text={item.finding} muted />
                  <CaseBlock label="Fix" text={item.fix} />
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-10 panel p-5 bg-accent/40 border-l-4 border-l-brand text-sm text-muted-foreground leading-relaxed">
        {t.trust.disclaimer}
      </div>
    </section>
  )
}

function CaseBlock({
  label,
  text,
  muted,
}: {
  label: string
  text: string
  muted?: boolean
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
        {label}
      </p>
      <p className={`text-sm leading-relaxed ${muted ? 'text-muted-foreground' : ''}`}>
        {text}
      </p>
    </div>
  )
}
