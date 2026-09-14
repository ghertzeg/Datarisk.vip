'use client'

import { useSiteStore } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { Button } from '@/components/ui/button'
import {
  Eye,
  Building2,
  FileText,
  Cookie,
  UserCheck,
  ClipboardCheck,
  GraduationCap,
  Clock,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'

const serviceIcons = [
  Eye, // site-assessment
  Building2, // org-assessment
  FileText, // documents-pack
  Cookie, // cookie-consent
  UserCheck, // dpo-service
  ClipboardCheck, // inspection-prep
  GraduationCap, // training
]

export function Services() {
  const t = useDict()
  const serviceSlug = useSiteStore((s) => s.serviceSlug)
  const openService = useSiteStore((s) => s.openService)
  const setView = useSiteStore((s) => s.setView)
  const setServiceSlug = (slug: string | null) => {
    if (slug === null) {
      useSiteStore.setState({ serviceSlug: null })
    } else {
      openService(slug)
    }
  }

  // Detail view
  if (serviceSlug) {
    const item = t.services.items.find((s) => s.slug === serviceSlug)
    if (!item) {
      setServiceSlug(null)
      return null
    }
    const idx = t.services.items.findIndex((s) => s.slug === serviceSlug)
    const Icon = serviceIcons[idx] ?? Eye

    return (
      <section className="container-doc py-12 md:py-20">
        <button
          onClick={() => setServiceSlug(null)}
          className="text-sm text-muted-foreground hover:text-brand mb-6 inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          {t.services.backToList}
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4 mb-8">
              <div className="rounded-xl bg-brand/15 p-3 text-brand shrink-0">
                <Icon className="size-7" aria-hidden />
              </div>
              <div>
                <h1 className="doc-h2 mb-2">{item.title}</h1>
                <p className="text-muted-foreground leading-relaxed">{item.short}</p>
              </div>
            </div>

            <div className="space-y-7">
              <ServiceBlock
                label={serviceLabels(t).what}
                title={serviceLabels(t).whatTitle}
                text={item.what}
              />
              <ServiceBlock
                label={serviceLabels(t).how}
                title={serviceLabels(t).howTitle}
                text={item.how}
              />
              <ServiceBlock
                label={serviceLabels(t).result}
                title={serviceLabels(t).resultTitle}
                text={item.result}
              />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 self-start space-y-4">
            <div className="panel p-5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Clock className="size-4" aria-hidden />
                <span className="uppercase tracking-wider text-xs font-semibold">
                  {serviceLabels(t).duration}
                </span>
              </div>
              <p className="font-semibold text-lg">{item.duration}</p>
            </div>

            <div className="panel p-5 bg-accent/30">
              <p className="text-sm text-muted-foreground mb-4">
                {serviceLabels(t).ctaText}
              </p>
              <Button className="w-full mb-2" onClick={() => setView('contact')}>
                {serviceLabels(t).ctaPropose}
                <ArrowRight className="size-4 ml-1.5" aria-hidden />
              </Button>
              <Button variant="outline" className="w-full" onClick={() => setView('check')}>
                {t.cta.checkSite}
              </Button>
            </div>
          </aside>
        </div>
      </section>
    )
  }

  // List view
  return (
    <section className="container-doc py-12 md:py-20">
      <div className="max-w-3xl mb-10">
        <div className="kicker mb-3">02</div>
        <h1 className="doc-h2 mb-4">{t.services.title}</h1>
        <p className="doc-lead">{t.services.lead}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.services.items.map((item, i) => {
          const Icon = serviceIcons[i] ?? Eye
          return (
            <button
              key={item.slug}
              onClick={() => openService(item.slug)}
              className="panel p-5 text-left hover:border-brand/40 hover:shadow-md transition-all group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-lg bg-brand/15 p-2.5 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <Icon className="size-5" aria-hidden />
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all" aria-hidden />
              </div>
              <h3 className="text-base font-semibold mb-2 leading-tight">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                {item.short}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-3 border-t border-border">
                <Clock className="size-3" aria-hidden />
                <span>{item.duration}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* CTA below grid */}
      <div className="panel p-6 md:p-8 mt-10 bg-accent/30 text-center max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold mb-2">{serviceLabels(t).notSureTitle}</h3>
        <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
          {serviceLabels(t).notSureText}
        </p>
        <Button onClick={() => setView('check')}>
          {t.cta.checkSite}
          <ArrowRight className="size-4 ml-1.5" aria-hidden />
        </Button>
      </div>
    </section>
  )
}

// Localized labels for the services detail view
function serviceLabels(t: ReturnType<typeof useDict>) {
  const map = {
    ro: {
      what: 'Ce includem',
      whatTitle: 'Ce facem',
      how: 'Cum lucrăm',
      howTitle: 'Metodă',
      result: 'Ce primești',
      resultTitle: 'Rezultat',
      duration: 'Durată',
      ctaText: 'Vrei să aplicăm acest serviciu la situația ta?',
      ctaPropose: 'Solicită o propunere',
      notSureTitle: 'Nu ești sigur ce alegi?',
      notSureText:
        'Începe cu o verificare gratuită a site-ului. Vom recomanda serviciul potrivit pe baza a ceea ce găsim.',
    },
    ru: {
      what: 'Что входит',
      whatTitle: 'Что делаем',
      how: 'Как работаем',
      howTitle: 'Метод',
      result: 'Что получаете',
      resultTitle: 'Результат',
      duration: 'Срок',
      ctaText: 'Хотите применить эту услугу к вашей ситуации?',
      ctaPropose: 'Запросить предложение',
      notSureTitle: 'Не уверены, что выбрать?',
      notSureText:
        'Начните с бесплатной проверки сайта. Подберём услугу по результатам.',
    },
    en: {
      what: 'What we include',
      whatTitle: 'What we do',
      how: 'How we work',
      howTitle: 'Method',
      result: 'What you get',
      resultTitle: 'Outcome',
      duration: 'Duration',
      ctaText: 'Want to apply this service to your situation?',
      ctaPropose: 'Request a proposal',
      notSureTitle: 'Not sure what to choose?',
      notSureText:
        'Start with a free site check. We will recommend the right service based on what we find.',
    },
  } as const
  const lang = useSiteStore.getState().lang
  return map[lang]
}

function ServiceBlock({
  label,
  title,
  text,
}: {
  label: string
  title: string
  text: string
}) {
  return (
    <div>
      <div className="kicker mb-2">{label}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  )
}
