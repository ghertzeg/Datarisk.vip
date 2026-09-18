'use client'

import { useSiteStore } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { CookieBanner } from '@/components/site/cookie-banner'
import { Hero } from '@/components/sections/hero'
import { Trust } from '@/components/sections/trust'
import { Services } from '@/components/sections/services'
import { Studio } from '@/components/sections/studio'
import { Methodology } from '@/components/sections/methodology'
import { Check } from '@/components/sections/check'
import { Cases } from '@/components/sections/cases'
import { Blog } from '@/components/sections/blog'
import { Templates } from '@/components/sections/templates'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Faq } from '@/components/sections/faq'
import { Legal } from '@/components/sections/legal'
import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, ArrowRight, Shield, Code2 } from 'lucide-react'

export default function Home() {
  const view = useSiteStore((s) => s.view)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pb-32 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {view === 'home' && (
              <>
                <Hero />
                <HomeServicesPreview />
                <HomeStudioPreview />
                <HomeCtaBand />
              </>
            )}
            {view === 'services' && <Services />}
            {view === 'studio' && <Studio />}
            {view === 'methodology' && <Methodology />}
            {view === 'check' && <Check />}
            {view === 'cases' && <Cases />}
            {view === 'blog' && <Blog />}
            {view === 'templates' && <Templates />}
            {view === 'about' && <About />}
            {view === 'contact' && <Contact />}
            {view === 'faq' && <Faq />}
            {view === 'privacy' && <Legal kind="privacy" />}
            {view === 'cookies' && <Legal kind="cookies" />}
            {view === 'terms' && <Legal kind="terms" />}
            {view === 'dpa' && <Legal kind="dpa" />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}

function HomeServicesPreview() {
  const t = useDict()

  return (
    <section className="container-cinema py-16 md:py-24 border-t border-border/60">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div className="max-w-2xl">
          <div className="kicker mb-3">02 · GDPR</div>
          <h2 className="doc-h2 mb-3">{t.services.title}</h2>
          <p className="doc-lead">{t.services.lead}</p>
        </div>
        <button
          onClick={() => useSiteStore.getState().setView('services')}
          className="text-sm text-brand hover:underline inline-flex items-center gap-1"
        >
          {t.nav.services}
          <ArrowRight className="size-3.5" aria-hidden />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.services.items.slice(0, 6).map((item) => (
          <button
            key={item.slug}
            onClick={() => useSiteStore.getState().openService(item.slug)}
            className="glass glass-hover p-5 text-left group h-full"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="size-9 rounded-lg bg-brand/15 p-2 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                <Shield className="size-5" aria-hidden />
              </div>
              <ArrowRight
                className="size-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all"
                aria-hidden
              />
            </div>
            <h3 className="text-base font-semibold mb-2 group-hover:text-brand transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {item.short}
            </p>
          </button>
        ))}
      </div>
    </section>
  )
}

function HomeStudioPreview() {
  const t = useDict()
  const setView = useSiteStore((s) => s.setView)

  return (
    <section className="container-cinema py-16 md:py-24 border-t border-border/60">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div className="kicker mb-3">03 · STUDIO</div>
          <h2 className="display-sm mb-4">
            <span className="text-gradient-cinema">{t.studio.title}</span>
          </h2>
          <p className="doc-lead mb-6">{t.studio.lead}</p>

          <div className="space-y-3 mb-6">
            <PreviewRow
              icon={<Code2 className="size-4" aria-hidden />}
              title={t.studio.webTitle}
              desc={t.studio.webLead}
            />
            <PreviewRow
              icon={<Sparkles className="size-4" aria-hidden />}
              title={t.studio.appsTitle}
              desc={t.studio.appsLead}
            />
          </div>

          <button
            onClick={() => setView('studio')}
            className="btn-cinema inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
          >
            <Sparkles className="size-4" aria-hidden />
            {t.cta.startProject}
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {t.studio.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover p-5 text-center"
            >
              <div className="text-2xl font-bold text-gradient-cinema mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PreviewRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="flex items-start gap-3 glass p-3 rounded-lg">
      <div className="size-8 rounded-md bg-brand/15 p-2 text-brand shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold mb-0.5">{title}</p>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  )
}

function HomeCtaBand() {
  const setView = useSiteStore((s) => s.setView)
  const t = useDict()

  return (
    <section className="container-cinema py-16 md:py-24">
      <div className="relative border-animated overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(ellipse at top, oklch(0.78 0.16 195 / 0.3), transparent 60%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(ellipse at bottom right, oklch(0.72 0.22 330 / 0.3), transparent 60%)',
            }}
          />
        </div>
        <div className="p-10 md:p-16 text-center">
          <h2 className="display-sm mb-4 max-w-2xl mx-auto">
            <span className="text-gradient-cinema">{t.hero.titleA}</span>{' '}
            <span className="text-glow-brand">{t.hero.titleB}</span>
          </h2>
          <p className="doc-lead mb-8 max-w-xl mx-auto">{t.hero.lead}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setView('studio')}
              className="btn-cinema inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
            >
              <Sparkles className="size-4" aria-hidden />
              {t.cta.startProject}
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
  )
}
