'use client'

import { useSiteStore } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { Button } from '@/components/ui/button'
import { Cookie, Settings, X, Check, Ban } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'

export function CookieBanner() {
  const consent = useSiteStore((s) => s.consent)
  const setConsent = useSiteStore((s) => s.setConsent)
  const setView = useSiteStore((s) => s.setView)
  const t = useDict().cookieBanner
  const [openSettings, setOpenSettings] = useState(false)

  if (consent !== null) {
    return (
      <CookieSettingsDialog
        open={openSettings}
        onOpenChange={setOpenSettings}
      />
    )
  }

  return (
    <>
      <div
        role="dialog"
        aria-label={t.title}
        className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
      >
        <div className="container-doc">
          <div className="panel shadow-xl shadow-black/10 p-5 md:p-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            <div className="flex items-start gap-3 flex-1">
              <div className="rounded-lg bg-brand/15 p-2 text-brand shrink-0">
                <Cookie className="size-5" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm mb-1">{t.title}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {t.text}{' '}
                  <button
                    className="text-brand underline underline-offset-2 hover:text-brand/80"
                    onClick={() => setView('cookies')}
                  >
                    {t.privacy}
                  </button>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 lg:justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setConsent('rejected')}
              >
                <Ban className="size-4 mr-1.5" aria-hidden />
                {t.rejectAll}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setConsent('necessary')}
              >
                {t.necessary}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOpenSettings(true)}
              >
                <Settings className="size-4 mr-1.5" aria-hidden />
                {t.settings}
              </Button>
              <Button size="sm" onClick={() => setConsent('all')}>
                <Check className="size-4 mr-1.5" aria-hidden />
                {t.acceptAll}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CookieSettingsDialog
        open={openSettings}
        onOpenChange={setOpenSettings}
      />
    </>
  )
}

function CookieSettingsDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  const details = useSiteStore((s) => s.consentDetails)
  const setConsent = useSiteStore((s) => s.setConsent)
  const setConsentDetails = useSiteStore((s) => s.setConsentDetails)
  const t = useDict().cookieSettings
  const [analytics, setAnalytics] = useState(details.analytics)
  const [marketing, setMarketing] = useState(details.marketing)

  // Marketing is always locked off — we never use advertising pixels
  const marketingLocked = true

  function save() {
    setConsentDetails({ analytics, marketing: false })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Cookie className="size-5 text-brand" aria-hidden />
            {t.title}
          </DialogTitle>
          <DialogDescription>{t.intro}</DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2">
          <ConsentRow
            title={t.necessary.title}
            desc={t.necessary.desc}
            checked
            locked
          />
          <ConsentRow
            title={t.analytics.title}
            desc={t.analytics.desc}
            checked={analytics}
            onCheckedChange={setAnalytics}
          />
          <ConsentRow
            title={t.marketing.title}
            desc={t.marketing.desc}
            checked={false}
            locked={marketingLocked}
          />
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            className="sm:mr-auto"
            onClick={() => {
              setConsent('rejected')
              onOpenChange(false)
            }}
          >
            {t.rejectAll}
          </Button>
          <div className="flex gap-2 ml-auto">
            <Button
              variant="ghost"
              onClick={() => {
                setConsent('all')
                onOpenChange(false)
              }}
            >
              {t.acceptAll}
            </Button>
            <Button onClick={save}>{t.save}</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function ConsentRow({
  title,
  desc,
  checked,
  locked,
  onCheckedChange,
}: {
  title: string
  desc: string
  checked: boolean
  locked?: boolean
  onCheckedChange?: (v: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-lg border border-border p-3">
      <div className="min-w-0">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
          {desc}
        </p>
      </div>
      <Switch checked={checked} disabled={locked} onCheckedChange={onCheckedChange} />
    </div>
  )
}
