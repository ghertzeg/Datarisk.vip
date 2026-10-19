'use client'

import { useState } from 'react'
import { useDict } from '@/lib/i18n/use-dict'
import { useSiteStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CheckCircle2, Mail, Phone, Clock, MapPin, Shield } from 'lucide-react'

export function Contact() {
  const t = useDict()
  const setView = useSiteStore((s) => s.setView)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState('') // anti-spam
  const [form, setForm] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    taskType: '',
    description: '',
    consent: false,
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.consent) {
      toast.error('Vă rugăm să bifati consimțământul.')
      return
    }
    if (!form.name || !form.email || !form.taskType) {
      toast.error('Completați câmpurile obligatorii.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          name: form.name,
          org: form.org,
          email: form.email,
          phone: form.phone,
          taskType: form.taskType,
          description: form.description,
          consent: form.consent,
          website: honeypot, // honeypot
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'server_error')
      }
      setSubmitted(true)
    } catch (err) {
      toast.error('Eroare la trimitere. Încercați din nou sau scrieți-ne pe e-mail.')
      console.error('Submit error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="container-doc py-12 md:py-20">
      <div className="max-w-3xl mb-10">
        <div className="kicker mb-3">09</div>
        <h1 className="doc-h2 mb-4">{t.contact.title}</h1>
        <p className="doc-lead">{t.contact.lead}</p>
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
                {t.contact.form.success.split('.')[0]}.
              </h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                {t.contact.form.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="panel p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="c-name" className="mb-1.5 block">
                    {t.contact.form.name} <span className="text-bad">*</span>
                  </Label>
                  <Input
                    id="c-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="c-org" className="mb-1.5 block">
                    {t.contact.form.org}
                  </Label>
                  <Input
                    id="c-org"
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="c-email" className="mb-1.5 block">
                    {t.contact.form.email} <span className="text-bad">*</span>
                  </Label>
                  <Input
                    id="c-email"
                    type="email"
                    required
                    placeholder={t.contact.form.emailPh}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="c-phone" className="mb-1.5 block">
                    {t.contact.form.phone}
                  </Label>
                  <Input
                    id="c-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="c-task" className="mb-1.5 block">
                  {t.contact.form.taskType} <span className="text-bad">*</span>
                </Label>
                <Select
                  value={form.taskType}
                  onValueChange={(v) => setForm({ ...form, taskType: v })}
                >
                  <SelectTrigger id="c-task">
                    <SelectValue placeholder={t.contact.form.taskType} />
                  </SelectTrigger>
                  <SelectContent>
                    {t.contact.form.taskTypes.map((tt) => (
                      <SelectItem key={tt} value={tt}>
                        {tt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="c-desc" className="mb-1.5 block">
                  {t.contact.form.description}
                </Label>
                <Textarea
                  id="c-desc"
                  rows={4}
                  placeholder={t.contact.form.descriptionPh}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>

              <div className="flex items-start gap-2.5">
                <Checkbox
                  id="c-consent"
                  checked={form.consent}
                  onCheckedChange={(v) => setForm({ ...form, consent: !!v })}
                  className="mt-0.5"
                />
                <Label htmlFor="c-consent" className="text-sm leading-relaxed cursor-pointer">
                  {t.contact.form.consent}{' '}
                  <button
                    type="button"
                    className="text-brand underline underline-offset-2"
                    onClick={() => setView('privacy')}
                  >
                    {t.contact.form.privacy}
                  </button>
                </Label>
              </div>

              {/* Honeypot — скрытое поле для защиты от ботов. Люди его не видят. */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: 1,
                  height: 1,
                  opacity: 0,
                }}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={submitting}
              >
                {submitting ? 'Se trimite...' : t.contact.form.submit}
              </Button>
            </form>
          )}
        </div>

        {/* Info */}
        <aside className="lg:col-span-2 space-y-4">
          <div className="panel p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-4 text-sm">
              <InfoRow icon={<Phone className="size-4" />} label={t.contact.info.phoneLabel}>
                <a href="tel:+37378962932" className="hover:text-brand">
                  {t.contact.info.phone}
                </a>
              </InfoRow>
              <InfoRow icon={<Mail className="size-4" />} label={t.contact.info.emailLabel}>
                <a href="mailto:hello@datarisk.md" className="hover:text-brand">
                  hello@datarisk.md
                </a>
              </InfoRow>
              <InfoRow icon={<Mail className="size-4" />} label={t.contact.info.dpoLabel}>
                <a href="mailto:dpo@datarisk.md" className="hover:text-brand">
                  dpo@datarisk.md
                </a>
              </InfoRow>
              <InfoRow icon={<Clock className="size-4" />} label={t.contact.info.hoursLabel}>
                {t.contact.info.hours}
              </InfoRow>
              <InfoRow icon={<MapPin className="size-4" />} label={t.contact.info.addressLabel}>
                {t.contact.info.address}
              </InfoRow>
            </ul>

            <div className="hairline mt-5 pt-4">
              <p className="text-[10px] font-mono text-muted-foreground leading-relaxed">
                DATARISK MOLDOVA SRL<br />
                IDNO: 1026023020925<br />
                IBAN: MD47AG000000022597426741<br />
                BC MAIB SA · SWIFT: AGRNMD2X
              </p>
            </div>
          </div>

          <div className="panel p-5 border-l-4 border-l-brand bg-accent/30">
            <Shield className="size-4 text-brand mb-2" aria-hidden />
            <p className="text-xs font-semibold mb-1">
              {t.contact.info.responseLabel}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.contact.info.response}
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="text-muted-foreground shrink-0 mt-0.5">{icon}</div>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
          {label}
        </p>
        <div className="text-sm">{children}</div>
      </div>
    </li>
  )
}
