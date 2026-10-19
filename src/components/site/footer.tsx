'use client'

import { useSiteStore, type ViewKey } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { Button } from '@/components/ui/button'
import { Shield, Phone, MapPin, Clock, Settings } from 'lucide-react'
import { CookieSettingsLauncher } from './cookie-settings-launcher'

export function Footer() {
  const setView = useSiteStore((s) => s.setView)
  const t = useDict()

  const navItems: { key: ViewKey; label: string }[] = [
    { key: 'home', label: t.nav.home },
    { key: 'services', label: t.nav.services },
    { key: 'studio', label: t.nav.studio },
    { key: 'methodology', label: t.nav.methodology },
    { key: 'check', label: t.nav.check },
    { key: 'blog', label: t.nav.blog },
    { key: 'about', label: t.nav.about },
    { key: 'faq', label: t.nav.faq },
    { key: 'contact', label: t.nav.contact },
  ]

  const legalItems: { key: ViewKey; label: string }[] = [
    { key: 'privacy', label: t.legal.privacy.title },
    { key: 'cookies', label: t.legal.cookies.title },
    { key: 'terms', label: t.legal.terms.title },
    { key: 'dpa', label: t.legal.dpa.title },
  ]

  return (
    <footer className="mt-auto border-t border-border bg-card/40">
      <div className="container-cinema py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="relative">
                <div className="size-9 rounded-lg bg-gradient-to-br from-brand to-accent2 flex items-center justify-center shadow-lg shadow-brand/30">
                  <Shield className="size-5 text-brand-foreground" aria-hidden />
                </div>
                <div className="absolute -inset-1 rounded-lg bg-brand/30 blur-md opacity-50 -z-10" />
              </div>
              <div>
                <div className="font-bold text-sm">
                  {t.brand.name}<span className="text-brand">.</span>
                </div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-[0.18em] mt-0.5">
                  {t.brand.country}
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mb-4">
              {t.footer.about}
            </p>
            <div>
              <CookieSettingsLauncher />
            </div>
          </div>

          {/* Nav col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => setView(item.key)}
                    className="text-sm text-foreground/80 hover:text-brand text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-2">
              {legalItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => setView(item.key)}
                    className="text-sm text-foreground/80 hover:text-brand text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 text-muted-foreground shrink-0" aria-hidden />
                <a href="tel:+37378962932" className="text-foreground/80 hover:text-brand">
                  +373 7896 2932
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="size-4 mt-0.5 text-muted-foreground shrink-0" aria-hidden />
                <span className="text-foreground/80">{t.contact.info.hours}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 text-muted-foreground shrink-0" aria-hidden />
                <span className="text-foreground/80">{t.contact.info.address}</span>
              </li>
            </ul>
            <div className="hairline mt-4 pt-3">
              <p className="text-[10px] font-mono text-muted-foreground leading-relaxed">
                DATARISK MOLDOVA SRL<br />
                IDNO: 1026023020925<br />
                IBAN: MD47AG000000022597426741<br />
                BC MAIB SA · SWIFT: AGRNMD2X
              </p>
            </div>
          </div>
        </div>

        <div className="hairline mt-10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} DATARISK MOLDOVA SRL. {t.footer.rights}
          </p>
          <p className="font-mono">
            {t.footer.versionLine} · Legea nr. 195/2024 · IDNO 1026023020925
          </p>
        </div>
      </div>
    </footer>
  )
}
