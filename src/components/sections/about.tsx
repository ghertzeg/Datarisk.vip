'use client'

import { useDict } from '@/lib/i18n/use-dict'
import { useSiteStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Ban,
  MessageSquareText,
  ArrowRight,
  BadgeInfo,
  Shield,
  Code2,
  Compass,
  Clock,
  CheckCircle2,
  FileText,
  Eye,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  code: Code2,
  compass: Compass,
}

export function About() {
  const t = useDict()
  const setView = useSiteStore((s) => s.setView)

  return (
    <div className="pt-12 md:pt-20">
      {/* Hero band */}
      <section className="container-cinema pb-12 letterbox">
        <div className="max-w-3xl mb-10">
          <div className="kicker mb-3">08 · ABOUT</div>
          <h1 className="display-sm mb-4">
            <span className="text-gradient-cinema">{t.about.title}</span>
          </h1>
          <p className="doc-lead">{t.about.lead}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">{t.about.body}</p>

            {/* Status */}
            <div className="glass p-5 border-l-4 border-l-brand bg-accent/30">
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
            <div className="glass p-5">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="size-4 text-ok" aria-hidden />
                <h3 className="text-sm font-semibold">Legea nr. 195/2024</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Republica Moldova · intrată în vigoare 2024
              </p>
            </div>

            <div className="glass p-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="size-4 text-brand" aria-hidden />
                <h3 className="text-sm font-semibold">Răspuns rapid</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                1 zi lucrătoare pentru solicitări
              </p>
            </div>

            <div className="glass p-5">
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
      </section>

      {/* Three Departments */}
      <section className="container-cinema py-16 border-t border-border/60">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="kicker mb-3">DEPARTMENTS</div>
          <h2 className="doc-h2 mb-3">{t.about.departmentsTitle}</h2>
          <p className="doc-lead">{t.about.departmentsLead}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {t.about.departments.map((dept, i) => {
            const Icon = iconMap[dept.icon] ?? Shield
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass glass-hover p-6 h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative size-12 rounded-xl bg-gradient-to-br from-brand to-accent2 flex items-center justify-center text-brand-foreground">
                    <Icon className="size-6" aria-hidden />
                    <div className="absolute -inset-1 rounded-xl bg-brand/30 blur-md opacity-50 -z-10" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      0{i + 1}
                    </p>
                    <h3 className="text-base font-semibold leading-tight">{dept.name}</h3>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {dept.desc}
                </p>

                <div className="mt-auto pt-3 border-t border-border/60">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Servicii
                  </p>
                  <ul className="space-y-1.5">
                    {dept.services.map((service, j) => (
                      <li
                        key={j}
                        className="text-xs text-foreground/80 leading-relaxed flex items-start gap-1.5"
                      >
                        <span className="text-brand shrink-0 mt-0.5">→</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Values */}
      <section className="container-cinema py-16 border-t border-border/60">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="kicker mb-3">VALUES</div>
          <h2 className="doc-h2 mb-3">{t.about.valuesTitle}</h2>
          <p className="doc-lead">{t.about.valuesLead}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.about.values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover p-5 h-full"
            >
              <div className="font-mono text-2xl text-brand/60 font-bold mb-2">
                0{i + 1}
              </div>
              <h3 className="text-sm font-semibold mb-2 leading-tight">{value.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-cinema py-16 border-t border-border/60">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="kicker mb-3">PROCESS</div>
          <h2 className="doc-h2 mb-3">{t.about.processTitle}</h2>
          <p className="doc-lead">{t.about.processLead}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
          <div className="grid lg:grid-cols-4 gap-4">
            {t.about.processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass glass-hover p-5 h-full text-center lg:text-left"
              >
                <div className="relative size-12 rounded-full bg-gradient-to-br from-brand to-accent2 flex items-center justify-center text-brand-foreground mb-3 mx-auto lg:mx-0">
                  <CheckCircle2 className="size-5" aria-hidden />
                  <div className="absolute -inset-1 rounded-full bg-brand/30 blur-md opacity-50 -z-10" />
                </div>
                <div className="font-mono text-xs text-brand font-bold mb-1">{step.n}</div>
                <h3 className="text-sm font-semibold mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles (legacy) */}
      <section className="container-cinema py-16 border-t border-border/60">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="kicker mb-3">PRINCIPLES</div>
          <h2 className="doc-h2 mb-3">{t.about.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {t.about.principles.map((p, i) => (
            <div key={i} className="glass p-5">
              <div className="font-mono text-2xl text-brand/60 font-bold mb-2">
                0{i + 1}
              </div>
              <h3 className="text-sm font-semibold mb-2">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-cinema py-16">
        <div className="relative border-animated overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse at top, oklch(0.78 0.16 195 / 0.3), transparent 60%)',
              }}
            />
          </div>
          <div className="p-8 md:p-12 text-center">
            <h2 className="display-sm mb-4 max-w-2xl mx-auto">
              <span className="text-gradient-cinema">
                {t.contact.lead.split('.')[0]}.
              </span>
            </h2>
            <p className="doc-lead mb-8 max-w-xl mx-auto">
              {t.about.status.text}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setView('contact')}
                className="btn-cinema inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                <MessageSquareText className="size-4" aria-hidden />
                {t.cta.contactUs}
                <ArrowRight className="size-4" aria-hidden />
              </button>
              <button
                onClick={() => setView('check')}
                className="glass glass-hover inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                <Eye className="size-4 text-brand" aria-hidden />
                {t.cta.checkSite}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
