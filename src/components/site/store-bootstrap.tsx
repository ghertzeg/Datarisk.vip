'use client'

import { useEffect } from 'react'
import { useSiteStore } from '@/lib/store'
import { useTheme } from 'next-themes'

/**
 * Гидратация store из localStorage + синхронизация lang атрибута <html>
 */
export function SiteStoreBootstrap() {
  const lang = useSiteStore((s) => s.lang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Простейшая «аналитика без cookie» — счётчик просмотра на клиенте,
  // не передаёт идентификаторы, не использует cookie.
  // Включается только если пользователь дал согласие на аналитику.
  const consent = useSiteStore((s) => s.consent)
  const analyticsEnabled = useSiteStore(
    (s) => s.consentDetails.analytics
  )
  const { theme } = useTheme()

  useEffect(() => {
    if (consent === null) return
    if (!analyticsEnabled) return
    try {
      const key = 'datarisk-md:pageview'
      const cur = Number(sessionStorage.getItem(key) ?? '0')
      sessionStorage.setItem(key, String(cur + 1))
    } catch {
      // ignore
    }
  }, [consent, analyticsEnabled, theme])

  return null
}
