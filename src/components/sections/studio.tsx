'use client'

import { useSiteStore } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { motion } from 'framer-motion'
import {
  Code2,
  Smartphone,
  Sparkles,
  Globe,
  Zap,
  Shield,
  Database,
  Cloud,
  ArrowRight,
  Figma,
  Layers,
  Lock,
  FileCheck,
  Eye,
  Trash2,
} from 'lucide-react'

const webIcons = [Sparkles, Layers, Zap, Database]
const appIcons = [Smartphone, Cloud, Zap, ArrowRight]
const stepIcons = [Figma, Layers, Code2, Shield, ArrowRight]
const capabilityIcons = [Code2, Smartphone, Database, Cloud]
const ndaIcons = [Lock, Eye, Shield, Trash2]

export function Studio() {
  const t = useDict()
  const setView = useSiteStore((s) => s.setView)

  return (
    <div className="relative">
      {/* HERO BAND */}
      <section className="relative pt-20 md:pt-28 pb-12 letterbox">
        <div className="container-cinema">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-brand">
              <span className="size-1.5 rounded-full bg-accent2 animate-pulse-glow" />
              {t.studio.badge}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-sm text-center max-w-4xl mx-auto mb-5"
          >
            <span className="text-gradient-cinema">{t.studio.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {t.studio.lead}
          </motion.p>
        </div>
      </section>

      {/* STATS */}
      <section className="container-cinema py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.studio.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="glass glass-hover p-6 text-center h-full">
                <div className="text-2xl md:text-3xl font-bold text-gradient-cinema mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WEB DEVELOPMENT */}
      <section className="container-cinema py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-lg bg-brand/15 p-2.5 text-brand">
                <Code2 className="size-5" aria-hidden />
              </div>
              <span className="kicker">WEB</span>
            </div>
            <h2 className="display-sm mb-4">{t.studio.webTitle}</h2>
            <p className="doc-lead mb-6">{t.studio.webLead}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.studio.webFeatures.map((feature, i) => {
              const Icon = webIcons[i] ?? Sparkles
              return (
                <div key={i} className="glass glass-hover p-5 h-full">
                  <div className="size-9 rounded-lg bg-brand/15 p-2 text-brand mb-3">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-sm font-semibold mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="container-cinema py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-lg bg-accent2/15 p-2.5 text-accent2">
                <Smartphone className="size-5" aria-hidden />
              </div>
              <span
                className="kicker"
                style={{ color: 'var(--accent2)', textShadow: '0 0 20px var(--accent2-glow)' }}
              >
                APPS
              </span>
            </div>
            <h2 className="display-sm mb-4">{t.studio.appsTitle}</h2>
            <p className="doc-lead mb-6">{t.studio.appsLead}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 lg:order-1">
            {t.studio.appsFeatures.map((feature, i) => {
              const Icon = appIcons[i] ?? Smartphone
              return (
                <div key={i} className="glass glass-hover p-5 h-full">
                  <div className="size-9 rounded-lg bg-accent2/15 p-2 text-accent2 mb-3">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-sm font-semibold mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="container-cinema py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="kicker mb-3">PROCESS</div>
          <h2 className="doc-h2 mb-3">{t.studio.processTitle}</h2>
          <p className="doc-lead">{t.studio.processLead}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

          <div className="grid lg:grid-cols-5 gap-4">
            {t.studio.steps.map((step, i) => {
              const Icon = stepIcons[i] ?? Layers
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="glass glass-hover p-5 h-full text-center lg:text-left">
                    <div className="flex lg:flex-col items-center lg:items-start gap-3 lg:gap-0">
                      <div className="relative size-12 rounded-full bg-gradient-to-br from-brand to-accent2 flex items-center justify-center text-brand-foreground mb-0 lg:mb-3 shrink-0">
                        <Icon className="size-5" aria-hidden />
                        <div className="absolute -inset-1 rounded-full bg-brand/30 blur-md opacity-50 -z-10" />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-brand font-bold mb-0.5">
                          {step.n}
                        </div>
                        <h3 className="text-sm font-semibold mb-1.5">{step.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES (вместо tech stack) */}
      <section className="container-cinema py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="kicker mb-3">CAPABILITIES</div>
          <h2 className="doc-h2 mb-3">{t.studio.stackTitle}</h2>
          <p className="doc-lead">{t.studio.stackLead}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.studio.capabilities.map((cap, i) => {
            const Icon = capabilityIcons[i] ?? Code2
            return (
              <div key={i} className="glass glass-hover p-5 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="size-8 rounded-lg bg-brand/15 p-1.5 text-brand">
                    <Icon className="size-4" aria-hidden />
                  </div>
                  <h3 className="text-sm font-semibold">{cap.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* NDA / CONFIDENTIALITY (вместо Showcase) */}
      <section className="container-cinema py-16">
        <div className="relative border-animated overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse at top, oklch(0.72 0.22 330 / 0.3), transparent 60%)',
              }}
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div
                className="kicker mb-3"
                style={{ color: 'var(--accent2)', textShadow: '0 0 20px var(--accent2-glow)' }}
              >
                CONFIDENTIALITY
              </div>
              <h2 className="display-sm mb-4">
                <span className="text-gradient-cinema">{t.studio.ndaTitle}</span>
              </h2>
              <p className="doc-lead">{t.studio.ndaLead}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.studio.ndaItems.map((item, i) => {
                const Icon = ndaIcons[i] ?? Lock
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="glass glass-hover p-5 h-full"
                  >
                    <div className="size-9 rounded-lg bg-accent2/15 p-2 text-accent2 mb-3">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="text-sm font-semibold mb-1.5">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
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
          <div className="p-10 md:p-16 text-center">
            <h2 className="display-sm mb-4 max-w-2xl mx-auto">
              <span className="text-gradient-cinema">{t.studio.ctaTitle}</span>
            </h2>
            <p className="doc-lead mb-8 max-w-xl mx-auto">{t.studio.ctaText}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setView('contact')}
                className="btn-cinema inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                <Sparkles className="size-4" aria-hidden />
                {t.studio.ctaButton}
                <ArrowRight className="size-4" aria-hidden />
              </button>
              <button
                onClick={() => setView('check')}
                className="glass glass-hover inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                <Shield className="size-4 text-brand" aria-hidden />
                {t.cta.checkSite}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
