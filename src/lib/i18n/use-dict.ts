'use client'

import { useSiteStore } from '@/lib/store'
import { dictionaries } from './translations'

export function useDict() {
  const lang = useSiteStore((s) => s.lang)
  return dictionaries[lang]
}

export function useLang() {
  return useSiteStore((s) => s.lang)
}
