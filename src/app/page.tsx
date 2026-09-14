'use client'

import { useSiteStore } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { CookieBanner } from '@/components/site/cookie-banner'
import { Hero } from '@/components/sections/hero'
import { Trust } from '@/components/sections/trust'
import { Services } from '@/components/sections/services'
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
                <Trust />
                <HomeServicesPreview />
                <HomeMethodologyPreview />
                <HomeCtaBand />
              </>
            )}
            {view === 'services' && <Services />}
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
    <section className="container-doc py-16 md:py-24 border-t border-border">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div className="max-w-2xl">
          <div className="kicker mb-3">02</div>
          <h2 className="doc-h2 mb-3">{t.services.title}</h2>
          <p className="doc-lead">{t.services.lead}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.services.items.slice(0, 6).map((item) => (
          <button
            key={item.slug}
            onClick={() => useSiteStore.getState().openService(item.slug)}
            className="panel p-5 text-left hover:border-brand/40 hover:shadow-md transition-all group"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-brand transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              {item.short}
            </p>
            <p className="text-xs text-brand font-medium">
              → {t.cta.readMore}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={() => useSiteStore.getState().setView('services')}
          className="text-sm text-brand hover:underline"
        >
          {t.nav.services} →
        </button>
      </div>
    </section>
  )
}

function HomeMethodologyPreview() {
  const setView = useSiteStore((s) => s.setView)
  const t = useDict()

  return (
    <section className="container-doc py-16 md:py-24 border-t border-border">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div className="kicker mb-3">03</div>
          <h2 className="doc-h2 mb-4">{t.methodology.title}</h2>
          <p className="doc-lead mb-6">{t.methodology.lead}</p>

          <div className="space-y-3 mb-6">
            {t.methodology.levels.map((lvl) => (
              <div key={lvl.n} className="flex items-start gap-3">
                <span className="font-mono text-xs text-brand/70 font-bold mt-0.5">
                  {lvl.n}
                </span>
                <div>
                  <p className="text-sm font-semibold">{lvl.title}</p>
                  <p className="text-xs text-muted-foreground">{lvl.audience}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setView('methodology')}
            className="text-sm text-brand hover:underline"
          >
            {t.nav.methodology} →
          </button>
        </div>

        <div className="panel-accent p-6 md:p-8 border-l-4 border-l-brand">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
            {t.methodology.example.title}
          </p>
          <blockquote className="text-sm md:text-base leading-relaxed font-mono">
            {t.methodology.example.text}
          </blockquote>
        </div>
      </div>
    </section>
  )
}

function HomeCtaBand() {
  const setView = useSiteStore((s) => s.setView)
  const t = useDict()

  return (
    <section className="container-doc py-16 md:py-24">
      <div className="panel p-8 md:p-12 bg-gradient-to-br from-accent/60 to-accent/10 border-brand/30 text-center">
        <h2 className="doc-h2 mb-3 max-w-2xl mx-auto">{t.hero.titleA}</h2>
        <p className="doc-lead mb-8 max-w-xl mx-auto">{t.hero.lead}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setView('check')}
            className="inline-flex items-center justify-center rounded-md bg-brand text-brand-foreground px-6 py-3 text-sm font-semibold hover:bg-brand/90 transition-colors"
          >
            {t.cta.checkSite}
          </button>
          <button
            onClick={() => setView('contact')}
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
          >
            {t.cta.contactUs}
          </button>
        </div>
      </div>
    </section>
  )
}
