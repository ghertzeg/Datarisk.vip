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
import { Shield, Menu, Sun, Moon, Languages, Check } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Header() {
  const view = useSiteStore((s) => s.view)
  const setView = useSiteStore((s) => s.setView)
  const lang = useSiteStore((s) => s.lang)
  const setLang = useSiteStore((s) => s.setLang)
  const t = useDict()
  const { setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems: { key: ViewKey; label: string }[] = [
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

  function go(v: ViewKey) {
    setView(v)
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="container-doc flex h-16 items-center justify-between gap-3">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label={t.brand.name}
        >
          <div className="size-9 rounded-lg bg-brand text-brand-foreground flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Shield className="size-5" aria-hidden />
          </div>
          <div className="hidden sm:block leading-none">
            <div className="font-bold text-sm tracking-tight">{t.brand.name}</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mt-0.5">
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
                'px-2.5 py-2 text-[13px] rounded-md transition-colors hover:bg-muted',
                view === item.key
                  ? 'text-brand font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
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

          {/* Theme toggle — CSS-driven, no hydration flash */}
          <Button
            variant="ghost"
            size="icon"
            className="size-9 relative"
            aria-label="Toggle theme"
            onClick={() => setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark')}
          >
            <Sun className="size-4 absolute inset-0 m-auto dark:hidden" aria-hidden />
            <Moon className="size-4 absolute inset-0 m-auto hidden dark:block" aria-hidden />
          </Button>

          {/* CTA — visible md+ */}
          <Button
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => go('check')}
          >
            {t.cta.checkSite}
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden size-9" aria-label="Menu">
                <Menu className="size-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>{t.brand.name}</SheetTitle>
                <SheetDescription>{t.brand.tagline}</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-lg bg-brand text-brand-foreground flex items-center justify-center">
                      <Shield className="size-4" aria-hidden />
                    </div>
                    <div className="font-semibold text-sm">{t.brand.name}</div>
                  </div>
                </div>
                <nav className="flex-1 overflow-y-auto p-2">
                  <button
                    onClick={() => go('home')}
                    className={cn(
                      'w-full text-left px-3 py-2.5 rounded-md text-sm hover:bg-muted',
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
                        'w-full text-left px-3 py-2.5 rounded-md text-sm hover:bg-muted',
                        view === item.key ? 'bg-muted text-brand font-medium' : ''
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="p-4 border-t border-border">
                  <Button className="w-full" onClick={() => go('check')}>
                    {t.cta.checkSite}
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
