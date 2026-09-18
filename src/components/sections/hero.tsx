'use client'

import { useSiteStore } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { motion } from 'framer-motion'
import { Shield, ArrowRight, Sparkles, Code2, Smartphone } from 'lucide-react'

export function Hero() {
  const setView = useSiteStore((s) => s.setView)
  const t = useDict()

  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32 letterbox">
      <div className="container-cinema relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-brand">
            <span className="size-1.5 rounded-full bg-ok animate-pulse-glow" />
            {t.hero.badge}
          </div>
        </motion.div>

        {/* Headline */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display mb-2"
          >
            <span className="text-gradient-cinema">{t.hero.titleA}</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="display"
          >
            <span className="text-glow-brand">{t.hero.titleB}</span>
          </motion.h1>
        </div>

        {/* Lead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-center max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
        >
          {t.hero.lead}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <button
            onClick={() => setView('studio')}
            className="btn-cinema group inline-flex items-center gap-2 px-7 py-3.5 text-sm"
          >
            <Sparkles className="size-4" aria-hidden />
            {t.hero.primaryCta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </button>
          <button
            onClick={() => setView('check')}
            className="glass glass-hover inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
          >
            <Shield className="size-4 text-brand" aria-hidden />
            {t.hero.secondaryCta}
          </button>
        </motion.div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex justify-center"
        >
          <div className="glass inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full max-w-xl">
            <div className="size-2 rounded-full bg-ok animate-pulse-glow shrink-0" />
            <p className="text-xs text-muted-foreground leading-snug">
              {t.hero.trustNote}
            </p>
          </div>
        </motion.div>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid sm:grid-cols-3 gap-4 mt-20"
        >
          <Pillar
            icon={<Shield className="size-5" aria-hidden />}
            label="GDPR · Law 195/2024"
            value={t.nav.services}
            desc={t.trust.title}
            onClick={() => setView('services')}
          />
          <Pillar
            icon={<Code2 className="size-5" aria-hidden />}
            label="Web · Cinematic"
            value={t.nav.studio}
            desc={t.studio.webTitle}
            onClick={() => setView('studio')}
          />
          <Pillar
            icon={<Smartphone className="size-5" aria-hidden />}
            label="iOS · Android"
            value={t.nav.studio}
            desc={t.studio.appsTitle}
            onClick={() => setView('studio')}
          />
        </motion.div>
      </div>
    </section>
  )
}

function Pillar({
  icon,
  label,
  value,
  desc,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  value: string
  desc: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="glass glass-hover group p-6 text-left"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="size-10 rounded-lg bg-brand/15 p-2.5 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
          {icon}
        </div>
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
          {value}
        </span>
      </div>
      <p className="font-semibold text-base mb-1 group-hover:text-brand transition-colors">
        {desc}
      </p>
      <p className="text-xs text-muted-foreground font-mono">{label}</p>
    </button>
  )
}
