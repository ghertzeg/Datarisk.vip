'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import type { SeoPage, SeoLang } from '@/lib/seo-pages'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { CookieBanner } from '@/components/site/cookie-banner'
import {
  Shield,
  Code2,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  FileText,
  Eye,
  Lock,
  AlertCircle,
  Star,
  Phone as PhoneIcon,
} from 'lucide-react'

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  gdpr: Shield,
  web: Code2,
  apps: Smartphone,
}

const categoryGradients: Record<string, string> = {
  gdpr: 'from-brand to-accent2',
  web: 'from-brand to-accent2',
  apps: 'from-accent2 to-brand',
}

// Локализованные строки — НЕ зависят от переводов сайта, чтобы
// посадочные страницы работали автономно
const L = {
  ro: {
    badge: 'Serviciu · Moldova',
    whatWeDo: 'Ce facem',
    whatYouGet: 'Ce primești',
    duration: 'Durată',
    pricing: 'Preț',
    from: 'de la',
    cta: 'Solicită o propunere',
    secondaryCta: 'Verifică site-ul gratuit',
    trustTitle: 'De ce noi',
    trustLead:
      'Suntem o agenție de consultanță executivă cu trei departamente: Juridic, IT și Project Management. Lucrăm cu organizații din Republica Moldova.',
    guarantees: [
      'Fără să speriem cu sancțiuni',
      'Fără promisiuni pe care nu le putem onora',
      'Fără limbaj de specialitate inutil',
    ],
    deliverablesTitle: 'Ce livrăm',
    deliverables: [
      'Raport cu dovezi capturate (capturi de ecran, liste de cereri, fragmente de cod)',
      'Plan de remediere cu priorități și termene realiste',
      'Consultanță pentru implementarea remedierilor',
    ],
    processTitle: 'Cum lucrăm',
    steps: [
      { n: '01', title: 'Discuție inițială', desc: 'Definim domeniul și obiectivele.' },
      { n: '02', title: 'Analiză', desc: 'Colectăm dovezi, identificăm abateri.' },
      { n: '03', title: 'Raport', desc: 'Livram concluzii pe trei niveluri: director, jurist, IT.' },
      { n: '04', title: 'Remediere', desc: 'Plan cu pași verificabili și consultanță.' },
    ],
    faqTitle: 'Întrebări frecvente',
    faqs: [
      {
        q: 'Cât costă?',
        a: 'Costul depinde de complexitatea proiectului. Prețurile pornesc de la 150€. După o discuție scurtă veți primi o ofertă fermă, fără surprize.',
      },
      {
        q: 'Cât durează?',
        a: 'Auditele tipice durează între 5–7 zile pentru site-uri și 2–4 săptămâni pentru organizații.',
      },
      {
        q: 'Suntem o agenție de certificare?',
        a: 'Nu. Suntem o agenție de consultanță executivă. Concluziile noastre au caracter profesional, dar nu sunt certificate emise de o autoritate.',
      },
    ],
    contactCta: 'Vrei să aplicăm acest serviciu la situația ta?',
    contactText:
      'Discutăm despre obiective, constrângeri și buget. Răspundem în 1 zi lucrătoare.',
    contactButton: 'Solicită o propunere',
    phone: '+373 7896 2932',
    email: 'hello@datarisk.md',
    legalNote: 'Legea nr. 195/2024 · Republica Moldova',
    keywordsTitle: 'Cuvinte-cheie',
  },
  ru: {
    badge: 'Услуга · Молдова',
    whatWeDo: 'Что мы делаем',
    whatYouGet: 'Что вы получаете',
    duration: 'Срок',
    pricing: 'Цена',
    from: 'от',
    cta: 'Запросить предложение',
    secondaryCta: 'Проверить сайт бесплатно',
    trustTitle: 'Почему мы',
    trustLead:
      'Мы — исполнительное консалтинговое агентство с тремя отделами: Юридический, IT и Project Management. Работаем с организациями Республики Молдовы.',
    guarantees: [
      'Без запугивания санкциями',
      'Без обещаний, которые нельзя выполнить',
      'Без излишнего жаргона',
    ],
    deliverablesTitle: 'Что сдаём',
    deliverables: [
      'Отчёт с зафиксированными доказательствами (скриншоты, списки запросов, фрагменты кода)',
      'План исправления с приоритетами и реалистичными сроками',
      'Консультации по внедрению исправлений',
    ],
    processTitle: 'Как работаем',
    steps: [
      { n: '01', title: 'Первичная беседа', desc: 'Определяем рамки и цели.' },
      { n: '02', title: 'Анализ', desc: 'Собираем доказательства, выявляем отклонения.' },
      { n: '03', title: 'Отчёт', desc: 'Выводы на трёх уровнях: директор, юрист, IT.' },
      { n: '04', title: 'Исправление', desc: 'План с проверяемыми шагами и консультации.' },
    ],
    faqTitle: 'Частые вопросы',
    faqs: [
      {
        q: 'Сколько стоит?',
        a: 'Стоимость зависит от сложности проекта. Цены начинаются от 150€. После короткой беседы вы получите твёрдую смету без сюрпризов.',
      },
      {
        q: 'Сколько длится?',
        a: 'Типовые аудиты занимают от 5–7 дней для сайтов и 2–4 недели для организаций.',
      },
      {
        q: 'Вы сертифицирующая компания?',
        a: 'Нет. Мы — исполнительное консалтинговое агентство. Наши выводы носят профессиональный характер, но не являются сертификатами надзорного органа.',
      },
    ],
    contactCta: 'Хотите применить эту услугу к вашей ситуации?',
    contactText:
      'Обсудим цели, ограничения и бюджет. Ответим в течение 1 рабочего дня.',
    contactButton: 'Запросить предложение',
    phone: '+373 7896 2932',
    email: 'hello@datarisk.md',
    legalNote: 'Закон № 195/2024 · Республика Молдова',
    keywordsTitle: 'Ключевые слова',
  },
  en: {
    badge: 'Service · Moldova',
    whatWeDo: 'What we do',
    whatYouGet: 'What you get',
    duration: 'Duration',
    pricing: 'Price',
    from: 'from',
    cta: 'Request a proposal',
    secondaryCta: 'Check a site for free',
    trustTitle: 'Why us',
    trustLead:
      'We are an executive consulting agency with three departments: Legal, IT and Project Management. We work with organisations in the Republic of Moldova.',
    guarantees: [
      'No fear-mongering about penalties',
      'No promises we cannot deliver',
      'No unnecessary jargon',
    ],
    deliverablesTitle: 'What we deliver',
    deliverables: [
      'Report with captured evidence (screenshots, request lists, code snippets)',
      'Remediation plan with priorities and realistic deadlines',
      'Advisory on implementing the remediations',
    ],
    processTitle: 'How we work',
    steps: [
      { n: '01', title: 'Initial conversation', desc: 'We define scope and objectives.' },
      { n: '02', title: 'Analysis', desc: 'We collect evidence, identify gaps.' },
      { n: '03', title: 'Report', desc: 'Conclusions on three levels: executive, lawyer, IT.' },
      { n: '04', title: 'Remediation', desc: 'Plan with verifiable steps and advisory.' },
    ],
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'How much does it cost?',
        a: 'The cost depends on the complexity of the project. Prices start from 150€. After a short conversation you will receive a firm quote with no surprises.',
      },
      {
        q: 'How long does it take?',
        a: 'Typical audits take 5–7 days for websites and 2–4 weeks for organisations.',
      },
      {
        q: 'Are you a certification body?',
        a: 'No. We are an executive consulting agency. Our conclusions are professional in nature but are not certificates issued by a supervisory authority.',
      },
    ],
    contactCta: 'Want to apply this service to your situation?',
    contactText:
      'We discuss goals, constraints and budget. We reply within 1 business day.',
    contactButton: 'Request a proposal',
    phone: '+373 7896 2932',
    email: 'hello@datarisk.md',
    legalNote: 'Law No. 195/2024 · Republic of Moldova',
    keywordsTitle: 'Keywords',
  },
}

export function SeoLanding({
  page,
  lang,
}: {
  page: SeoPage
  lang: SeoLang
}) {
  const router = useRouter()
  const t = L[lang]
  const CategoryIcon = categoryIcons[page.category] ?? Shield
  const gradient = categoryGradients[page.category] ?? 'from-brand to-accent2'

  const query = page.query[lang]
  const intent = page.intent[lang]
  const keywords = page.keywords[lang]

  // Переход на главную страницу (SPA state view = 'contact' or 'check')
  function goTo(view: 'contact' | 'check' | 'home') {
    // Устанавливаем состояние и переходим на главную
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'datarisk-md',
        JSON.stringify({
          state: {
            lang,
            view,
            serviceSlug: null,
            consent: null,
            consentDetails: { necessary: true, analytics: false, marketing: false },
          },
          version: 0,
        })
      )
      router.push('/')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pb-32 md:pb-0 relative z-10">
      {/* Hero band */}
      <section className="container-cinema relative mb-16 letterbox py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-brand">
            <span className="size-1.5 rounded-full bg-ok animate-pulse-glow" />
            {t.badge}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display-sm text-center max-w-4xl mx-auto mb-5"
        >
          <span className="text-gradient-cinema">{query}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-8"
        >
          {intent}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <button
            onClick={() => goTo('contact')}
            className="btn-cinema group inline-flex items-center gap-2 px-7 py-3.5 text-sm"
          >
            <Sparkles className="size-4" aria-hidden />
            {t.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </button>
          <button
            onClick={() => goTo('check')}
            className="glass glass-hover inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
          >
            <Eye className="size-4 text-brand" aria-hidden />
            {t.secondaryCta}
          </button>
        </motion.div>

        {/* Price hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center mt-6"
        >
          <div className="glass inline-flex items-center gap-3 px-4 py-2 rounded-full">
            <Clock className="size-3.5 text-brand" aria-hidden />
            <span className="text-xs text-muted-foreground">
              {t.pricing}: <span className="text-brand font-semibold">{t.from} 150€</span>
            </span>
            <span className="size-1 rounded-full bg-muted-foreground/30" />
            <span className="text-xs text-muted-foreground">
              {t.duration}: <span className="text-foreground font-semibold">5–7 zile</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* What we do */}
      <section className="container-cinema py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className={`size-10 rounded-lg bg-gradient-to-br ${gradient} p-2.5 text-brand-foreground shadow-lg shadow-brand/30`}>
                <CategoryIcon className="size-5" aria-hidden />
              </div>
              <span className="kicker">{t.whatWeDo}</span>
            </div>
            <h2 className="doc-h2 mb-4">{query}</h2>
            <p className="doc-lead mb-6">{intent}</p>

            <div className="space-y-3">
              {t.guarantees.map((g, i) => (
                <div key={i} className="flex items-start gap-3 glass p-4 rounded-lg">
                  <CheckCircle2 className="size-5 text-ok shrink-0 mt-0.5" aria-hidden />
                  <p className="text-sm leading-relaxed">{g}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Side facts */}
          <aside className="space-y-4">
            <div className="glass p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="size-4 text-brand" aria-hidden />
                <h3 className="text-sm font-semibold">{t.deliverablesTitle}</h3>
              </div>
              <ul className="space-y-2">
                {t.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                    <span className="text-brand shrink-0 mt-0.5">→</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-5 border-l-4 border-l-brand">
              <AlertCircle className="size-4 text-brand mb-2" aria-hidden />
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t.trustLead}
              </p>
            </div>

            <div className="glass p-5">
              <div className="flex items-center gap-2 mb-3">
                <Star className="size-4 text-warn" aria-hidden />
                <h3 className="text-sm font-semibold">{t.keywordsTitle}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {keywords.map((k, i) => (
                  <span key={i} className="badge-doc badge-mut font-mono text-[10px]">
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section className="container-cinema py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="kicker mb-3">PROCESS</div>
          <h2 className="doc-h2 mb-3">{t.processTitle}</h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
          <div className="grid lg:grid-cols-4 gap-4">
            {t.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="glass glass-hover p-5 h-full text-center lg:text-left">
                  <div className="relative size-12 rounded-full bg-gradient-to-br from-brand to-accent2 flex items-center justify-center text-brand-foreground mb-3 mx-auto lg:mx-0">
                    <Lock className="size-5" aria-hidden />
                    <div className="absolute -inset-1 rounded-full bg-brand/30 blur-md opacity-50 -z-10" />
                  </div>
                  <div className="font-mono text-xs text-brand font-bold mb-1">{step.n}</div>
                  <h3 className="text-sm font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-cinema py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="kicker mb-3">FAQ</div>
            <h2 className="doc-h2 mb-3">{t.faqTitle}</h2>
          </div>

          <div className="space-y-3">
            {t.faqs.map((faq, i) => (
              <details key={i} className="glass p-5 rounded-lg group">
                <summary className="cursor-pointer flex items-start justify-between gap-3 list-none">
                  <span className="text-sm font-semibold">{faq.q}</span>
                  <ArrowRight className="size-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0 mt-0.5" aria-hidden />
                </summary>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              <span className="text-gradient-cinema">{t.contactCta}</span>
            </h2>
            <p className="doc-lead mb-8 max-w-xl mx-auto">{t.contactText}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => goTo('contact')}
                className="btn-cinema inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                <Sparkles className="size-4" aria-hidden />
                {t.contactButton}
                <ArrowRight className="size-4" aria-hidden />
              </button>
              <a
                href={`tel:${t.phone.replace(/\s/g, '')}`}
                className="glass glass-hover inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
              >
                <PhoneIcon className="size-4 text-brand" aria-hidden />
                {t.phone}
              </a>
            </div>
            <p className="text-[10px] text-muted-foreground/60 mt-6 font-mono">
              {t.legalNote} · DATARISK MOLDOVA SRL · IDNO 1026023020925
            </p>
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
