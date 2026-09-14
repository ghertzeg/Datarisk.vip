'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Lang = 'ro' | 'ru' | 'en'

export type ViewKey =
  | 'home'
  | 'services'
  | 'methodology'
  | 'check'
  | 'cases'
  | 'blog'
  | 'templates'
  | 'about'
  | 'contact'
  | 'faq'
  | 'privacy'
  | 'cookies'
  | 'terms'
  | 'dpa'

type Consent = 'all' | 'necessary' | 'rejected' | null

type SiteState = {
  lang: Lang
  view: ViewKey
  serviceSlug: string | null
  consent: Consent
  consentDetails: {
    necessary: boolean
    analytics: boolean
    marketing: boolean
  }
  setLang: (l: Lang) => void
  setView: (v: ViewKey) => void
  openService: (slug: string) => void
  setConsent: (c: Consent) => void
  setConsentDetails: (d: { analytics: boolean; marketing: boolean }) => void
}

export const useSiteStore = create<SiteState>()(
  persist(
    (set) => ({
      lang: 'ro',
      view: 'home',
      serviceSlug: null,
      consent: null,
      consentDetails: {
        necessary: true,
        analytics: false,
        marketing: false,
      },
      setLang: (lang) => set({ lang }),
      setView: (view) => {
        set({ view })
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      },
      openService: (slug) => {
        set({ view: 'services', serviceSlug: slug })
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      },
      setConsent: (consent) =>
        set((state) => ({
          consent,
          consentDetails: {
            necessary: true,
            analytics: consent === 'all',
            marketing: consent === 'all',
          },
        })),
      setConsentDetails: (d) =>
        set((state) => ({
          consent: d.analytics || d.marketing ? 'all' : 'necessary',
          consentDetails: {
            necessary: true,
            analytics: d.analytics,
            marketing: d.marketing,
          },
        })),
    }),
    {
      name: 'datarisk-md',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        lang: s.lang,
        consent: s.consent,
        consentDetails: s.consentDetails,
      }),
    }
  )
)
