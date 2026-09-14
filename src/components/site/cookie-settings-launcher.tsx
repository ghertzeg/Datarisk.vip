'use client'

import { useState } from 'react'
import { useSiteStore } from '@/lib/store'
import { useDict } from '@/lib/i18n/use-dict'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { Cookie, Settings } from 'lucide-react'

export function CookieSettingsLauncher() {
  const [open, setOpen] = useState(false)
  const consent = useSiteStore((s) => s.consent)
  const details = useSiteStore((s) => s.consentDetails)
  const setConsent = useSiteStore((s) => s.setConsent)
  const setConsentDetails = useSiteStore((s) => s.setConsentDetails)
  const t = useDict().cookieSettings
  const footerCookieLabel = useDict().footer.cookieSettings
  const [analytics, setAnalytics] = useState(details.analytics)

  function openDialog() {
    setAnalytics(details.analytics)
    setOpen(true)
  }

  function save() {
    setConsentDetails({ analytics, marketing: false })
    setOpen(false)
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={openDialog}
        className="w-full sm:w-auto"
      >
        <Settings className="size-4 mr-1.5" aria-hidden />
        {footerCookieLabel}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="size-5 text-brand" aria-hidden />
              {t.title}
            </DialogTitle>
            <DialogDescription>{t.intro}</DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-2">
            <div className="flex items-start justify-between gap-3 rounded-lg border border-border p-3">
              <div>
                <p className="text-sm font-semibold">{t.necessary.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                  {t.necessary.desc}
                </p>
              </div>
              <Switch checked disabled />
            </div>
            <div className="flex items-start justify-between gap-3 rounded-lg border border-border p-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold">{t.analytics.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                  {t.analytics.desc}
                </p>
              </div>
              <Switch checked={analytics} onCheckedChange={setAnalytics} />
            </div>
            <div className="flex items-start justify-between gap-3 rounded-lg border border-border p-3">
              <div>
                <p className="text-sm font-semibold">{t.marketing.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                  {t.marketing.desc}
                </p>
              </div>
              <Switch checked={false} disabled />
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              className="sm:mr-auto"
              onClick={() => {
                setConsent('rejected')
                setOpen(false)
              }}
            >
              {t.rejectAll}
            </Button>
            <div className="flex gap-2 ml-auto">
              <Button
                variant="ghost"
                onClick={() => {
                  setConsent('all')
                  setOpen(false)
                }}
              >
                {t.acceptAll}
              </Button>
              <Button onClick={save}>{t.save}</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
