'use client'

import { useSiteStore, type ViewKey } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { Button } from '@/components/ui/button'
import { Shield, Mail, Phone, MapPin, Clock, Settings } from 'lucide-react'
import { useState } from 'react'
import { CookieSettingsLauncher } from './cookie-settings-launcher'

export function Footer() {
  const setView = useSiteStore((s) => s.setView)
  const t = useDict()

  const navItems: { key: ViewKey; label: string }[] = [
    { key: 'home', label: t.nav.home },
    { key: 'services', label: t.nav.services },
    { key: 'methodology', label: t.nav.methodology },
    { key: 'check', label: t.nav.check },
    { key: 'cases', label: t.nav.cases },
    { key: 'blog', label: t.nav.blog },
    { key: 'templates', label: t.nav.templates },
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
      <div className="container-doc py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="size-9 rounded-lg bg-brand text-brand-foreground flex items-center justify-center">
                <Shield className="size-5" aria-hidden />
              </div>
              <div>
                <div className="font-bold text-sm">{t.brand.name}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mt-0.5">
                  {t.brand.country}
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              {t.footer.about}
            </p>
            <div className="mt-4">
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
                <Mail className="size-4 mt-0.5 text-muted-foreground shrink-0" aria-hidden />
                <a href="mailto:hello@datarisk.md" className="text-foreground/80 hover:text-brand">
                  hello@datarisk.md
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 text-muted-foreground shrink-0" aria-hidden />
                <a href="mailto:dpo@datarisk.md" className="text-foreground/80 hover:text-brand">
                  {t.contact.info.dpoLabel}: dpo@datarisk.md
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
          </div>
        </div>

        <div className="hairline mt-10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {t.brand.name}. {t.footer.rights}
          </p>
          <p className="font-mono">
            {t.footer.versionLine} · Legea nr. 195/2024
          </p>
        </div>
      </div>
    </footer>
  )
}
