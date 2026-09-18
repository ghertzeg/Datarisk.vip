'use client'

import { useSiteStore, type ViewKey } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { langs } from '@/lib/i18n/translations'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Shield, Menu, Languages, Check, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Header() {
  const view = useSiteStore((s) => s.view)
  const setView = useSiteStore((s) => s.setView)
  const lang = useSiteStore((s) => s.lang)
  const setLang = useSiteStore((s) => s.setLang)
  const t = useDict()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems: { key: ViewKey; label: string; tag?: string }[] = [
    { key: 'services', label: t.nav.services },
    { key: 'studio', label: t.nav.studio, tag: 'Web·Apps' },
    { key: 'methodology', label: t.nav.methodology },
    { key: 'check', label: t.nav.check },
    { key: 'blog', label: t.nav.blog },
    { key: 'about', label: t.nav.about },
    { key: 'faq', label: t.nav.faq },
    { key: 'contact', label: t.nav.contact },
  ]

  function go(v: ViewKey) {
    setView(v)
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border/60">
      <div className="container-cinema flex h-16 items-center justify-between gap-3">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label={t.brand.name}
        >
          <div className="relative">
            <div className="size-9 rounded-lg bg-gradient-to-br from-brand to-accent2 flex items-center justify-center shadow-lg shadow-brand/30 group-hover:shadow-brand/50 transition-shadow">
              <Shield className="size-5 text-brand-foreground" aria-hidden />
            </div>
            <div className="absolute -inset-1 rounded-lg bg-brand/30 blur-md opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
          </div>
          <div className="hidden sm:block leading-none">
            <div className="font-bold text-sm tracking-tight">
              {t.brand.name}<span className="text-brand">.</span>
            </div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-[0.18em] mt-0.5">
              {t.brand.country}
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => go(item.key)}
              className={cn(
                'relative px-2.5 py-2 text-[13px] rounded-md transition-colors',
                view === item.key
                  ? 'text-brand font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span className="flex items-center gap-1.5">
                {item.label}
                {item.tag && (
                  <span className="badge-doc badge-brand text-[9px] !py-0 !px-1.5">
                    {item.tag}
                  </span>
                )}
              </span>
              {view === item.key && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand shadow-[0_0_8px_var(--brand)]" />
              )}
            </button>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-1.5">
          {/* Language switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-9" aria-label="Language">
                <Languages className="size-4" aria-hidden />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[140px]">
              {langs.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className="cursor-pointer flex items-center justify-between"
                >
                  <span>{l.native}</span>
                  {lang === l.code && <Check className="size-3.5 text-brand" aria-hidden />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA — visible md+ */}
          <Button
            size="sm"
            className="hidden md:inline-flex btn-cinema"
            onClick={() => go('studio')}
          >
            <Sparkles className="size-4 mr-1.5" aria-hidden />
            {t.cta.startProject}
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden size-9" aria-label="Menu">
                <Menu className="size-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>{t.brand.name}</SheetTitle>
                <SheetDescription>{t.brand.tagline}</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-gradient-to-br from-brand to-accent2 flex items-center justify-center">
                      <Shield className="size-4 text-brand-foreground" aria-hidden />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        {t.brand.name}<span className="text-brand">.</span>
                      </div>
                      <div className="text-[9px] text-muted-foreground uppercase tracking-[0.18em]">
                        {t.brand.country}
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="flex-1 overflow-y-auto p-2">
                  <button
                    onClick={() => go('home')}
                    className={cn(
                      'w-full text-left px-3 py-2.5 rounded-md text-sm hover:bg-muted flex items-center justify-between',
                      view === 'home' ? 'bg-muted text-brand font-medium' : ''
                    )}
                  >
                    {t.nav.home}
                  </button>
                  {navItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => go(item.key)}
                      className={cn(
                        'w-full text-left px-3 py-2.5 rounded-md text-sm hover:bg-muted flex items-center justify-between',
                        view === item.key ? 'bg-muted text-brand font-medium' : ''
                      )}
                    >
                      <span>{item.label}</span>
                      {item.tag && (
                        <span className="badge-doc badge-brand text-[9px] !py-0 !px-1.5">
                          {item.tag}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>
                <div className="p-4 border-t border-border">
                  <Button className="w-full btn-cinema" onClick={() => go('studio')}>
                    <Sparkles className="size-4 mr-1.5" aria-hidden />
                    {t.cta.startProject}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
