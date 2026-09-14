'use client'

import { useState } from 'react'
import { useDict } from '@/lib/i18n/use-dict'
import { useSiteStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { CheckCircle2, Eye, EyeOff, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'

export function Check() {
  const t = useDict()
  const setView = useSiteStore((s) => s.setView)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    site: '',
    name: '',
    email: '',
    phone: '',
    consent: false,
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.consent) {
      toast.error('Vă rugăm să bifati consimțământul.')
      return
    }
    if (!form.site || !form.name || !form.email) {
      toast.error('Completați câmpurile obligatorii.')
      return
    }
    // Here would be the actual API call to a self-hosted handler
    setSubmitted(true)
  }

  return (
    <section className="container-doc py-12 md:py-20">
      <div className="max-w-3xl mb-10">
        <div className="kicker mb-3">04</div>
        <h1 className="doc-h2 mb-4">{t.check.title}</h1>
        <p className="doc-lead">{t.check.lead}</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Form */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="panel p-8 text-center border-ok/30 bg-ok/5">
              <div className="inline-flex items-center justify-center size-14 rounded-full bg-ok/15 text-ok mb-4">
                <CheckCircle2 className="size-7" aria-hidden />
              </div>
              <h2 className="text-xl font-semibold mb-2">
                {t.check.form.success.split('.')[0]}.
              </h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                {t.check.form.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="panel p-6 md:p-8 space-y-5">
              <div>
                <Label htmlFor="site" className="mb-1.5 block">
                  {t.check.form.site} <span className="text-bad">*</span>
                </Label>
                <Input
                  id="site"
                  type="url"
                  required
                  placeholder={t.check.form.sitePh}
                  value={form.site}
                  onChange={(e) => setForm({ ...form, site: e.target.value })}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="mb-1.5 block">
                    {t.check.form.name} <span className="text-bad">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-1.5 block">
                    {t.check.form.email} <span className="text-bad">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder={t.check.form.emailPh}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="mb-1.5 block">
                  {t.check.form.phone}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              {/* Inline notice at point of collection */}
              <div className="rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground leading-relaxed">
                {t.check.form.consent}{' '}
                <button
                  type="button"
                  className="text-brand underline underline-offset-2"
                  onClick={() => setView('privacy')}
                >
                  {t.check.form.privacy}
                </button>
              </div>

              <div className="flex items-start gap-2.5">
                <Checkbox
                  id="consent"
                  checked={form.consent}
                  onCheckedChange={(v) => setForm({ ...form, consent: !!v })}
                  className="mt-0.5"
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                  {t.check.form.consent}
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full">
                {t.check.form.submit}
              </Button>
            </form>
          )}
        </div>

        {/* Side info */}
        <aside className="lg:col-span-2 space-y-4">
          <div className="panel p-5">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="size-4 text-ok" aria-hidden />
              <h3 className="text-sm font-semibold">{t.check.whatWeCheck}</h3>
            </div>
            <ul className="space-y-2">
              {t.check.whatWeCheckItems.map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2 leading-relaxed">
                  <span className="text-ok shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-5 bg-warn/5">
            <div className="flex items-center gap-2 mb-3">
              <EyeOff className="size-4 text-warn" aria-hidden />
              <h3 className="text-sm font-semibold">{t.check.whatWeDont}</h3>
            </div>
            <ul className="space-y-2">
              {t.check.whatWeDontItems.map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2 leading-relaxed">
                  <span className="text-warn shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-5 bg-accent/40 border-l-4 border-l-brand">
            <AlertCircle className="size-4 text-brand mb-2" aria-hidden />
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.about.status.text}
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
