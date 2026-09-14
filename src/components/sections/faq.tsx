'use client'

import { useDict } from '@/lib/i18n/use-dict'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'

export function Faq() {
  const t = useDict()

  return (
    <section className="container-doc py-12 md:py-20">
      <div className="max-w-3xl mb-10">
        <div className="kicker mb-3">10</div>
        <h1 className="doc-h2 mb-4">{t.faq.title}</h1>
        <p className="doc-lead">{t.faq.lead}</p>
      </div>

      <div className="max-w-3xl">
        <div className="panel">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className={i === t.faq.items.length - 1 ? 'border-b-0' : ''}
              >
                <AccordionTrigger className="px-5 py-4 text-left hover:bg-muted/30 text-base font-medium">
                  <span className="flex items-start gap-3">
                    <span className="font-mono text-xs text-brand mt-1 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{item.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed pl-12">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 panel p-5 flex items-start gap-3 bg-accent/30">
          <HelpCircle className="size-5 text-brand shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="text-sm font-semibold mb-1">
              {t.faq.lead.split('.')[0]}?
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.faq.lead}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
