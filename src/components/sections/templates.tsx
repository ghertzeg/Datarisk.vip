'use client'

import { useState } from 'react'
import { useDict } from '@/lib/i18n/use-dict'
import { useSiteStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FileText, Mail, ArrowRight, CheckCircle2, Lock } from 'lucide-react'

export function Templates() {
  const t = useDict()
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="container-doc py-12 md:py-20">
      <div className="max-w-3xl mb-10">
        <div className="kicker mb-3">07</div>
        <h1 className="doc-h2 mb-4">{t.templates.title}</h1>
        <p className="doc-lead">{t.templates.lead}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Templates list */}
        <div className="lg:col-span-2 space-y-3">
          {t.templates.items.map((item) => (
            <div
              key={item.slug}
              className="panel p-4 md:p-5 flex items-start gap-4 hover:border-brand/40 transition-colors"
            >
              <div className="rounded-lg bg-brand/15 p-2.5 text-brand shrink-0">
                <FileText className="size-5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <span className="badge-doc badge-mut shrink-0">{item.format}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gate */}
        <aside className="lg:sticky lg:top-24 self-start">
          {submitted ? (
            <div className="panel p-6 text-center bg-ok/5 border-ok/30">
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-ok/15 text-ok mb-3">
                <CheckCircle2 className="size-6" aria-hidden />
              </div>
              <h3 className="font-semibold mb-2">{t.templates.gate}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {t.templates.gateDesc}
              </p>
              <p className="text-xs text-muted-foreground font-mono">{email}</p>
            </div>
          ) : (
            <div className="panel p-6">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="size-4 text-brand" aria-hidden />
                <h3 className="text-sm font-semibold">{t.templates.gate}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {t.templates.gateDesc}
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Label htmlFor="tpl-email" className="mb-1.5 block text-xs">
                    E-mail
                  </Label>
                  <Input
                    id="tpl-email"
                    type="email"
                    required
                    placeholder={t.check.form.emailPh}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button type="submit" size="sm" className="w-full">
                  <Mail className="size-4 mr-1.5" aria-hidden />
                  {t.templates.gate}
                  <ArrowRight className="size-4 ml-1.5" aria-hidden />
                </Button>
              </form>
              <p className="text-[10px] text-muted-foreground mt-3 leading-relaxed">
                {t.check.form.consent}{' '}
                <button
                  className="text-brand underline underline-offset-2"
                  onClick={() => useSiteStore.getState().setView('privacy')}
                >
                  {t.check.form.privacy}
                </button>
              </p>
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}
