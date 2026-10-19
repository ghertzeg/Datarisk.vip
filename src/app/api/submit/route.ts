import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/**
 * API route: POST /api/submit
 *
 * Принимает данные формы с сайта и отправляет их на email через Brevo SMTP.
 * Данные формы НЕ сохраняются в БД — только пересылаются на email оператора.
 *
 * Brevo SMTP settings:
 *   Host: smtp-relay.brevo.com
 *   Port: 587 (STARTTLS)
 *   User: hello@datarisk.md (или любой верифицированный email)
 *   Pass: BREVO_API_KEY (SMTP-ключ формата xsmtpsib-...)
 *
 * Безопасность:
 * - Проверка обязательных полей и consent
 * - Проверка email-формата
 * - Honeypot (anti-spam)
 * - HTML-санитизация
 */

// Простая валидация email
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254
}

// Sanitize — экранируем HTML, чтобы предотвратить инъекции в письмо
function sanitize(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\n/g, '<br/>')
}

interface FormPayload {
  formType: 'check' | 'contact'
  name?: string
  email?: string
  phone?: string
  consent?: boolean
  site?: string
  org?: string
  taskType?: string
  description?: string
  website?: string // honeypot
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY
  const toEmail = process.env.BREVO_TO_EMAIL || 'hello@datarisk.md'
  const fromEmail = process.env.BREVO_FROM_EMAIL || 'hello@datarisk.md'
  const fromName = process.env.BREVO_FROM_NAME || 'DATARISK MOLDOVA'

  if (!apiKey) {
    console.error('BREVO_API_KEY не настроен в environment variables')
    return NextResponse.json(
      { ok: false, error: 'server_not_configured' },
      { status: 500 }
    )
  }

  let body: FormPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: 'invalid_json' },
      { status: 400 }
    )
  }

  // Honeypot: если заполнено — это бот, тихо отклоняем
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true, spam: true }, { status: 200 })
  }

  // Проверка consent
  if (!body.consent) {
    return NextResponse.json(
      { ok: false, error: 'consent_required' },
      { status: 400 }
    )
  }

  // Проверка email
  if (!body.email || !isValidEmail(body.email)) {
    return NextResponse.json(
      { ok: false, error: 'invalid_email' },
      { status: 400 }
    )
  }

  // Проверка обязательных полей по типу формы
  if (body.formType === 'check') {
    if (!body.site || body.site.length < 3) {
      return NextResponse.json(
        { ok: false, error: 'site_required' },
        { status: 400 }
      )
    }
  } else if (body.formType === 'contact') {
    if (!body.name || body.name.length < 2) {
      return NextResponse.json(
        { ok: false, error: 'name_required' },
        { status: 400 }
      )
    }
    if (!body.taskType) {
      return NextResponse.json(
        { ok: false, error: 'task_type_required' },
        { status: 400 }
      )
    }
  } else {
    return NextResponse.json(
      { ok: false, error: 'invalid_form_type' },
      { status: 400 }
    )
  }

  // Формируем содержимое письма
  const isCheckForm = body.formType === 'check'
  const subject = isCheckForm
    ? `[VERIFICARE] Solicitare verificare site — ${body.site}`
    : `[CONTACT] ${body.taskType} — ${body.name}`

  const fields: Array<[string, string]> = isCheckForm
    ? [
        ['Tip solicitare', 'Verificare gratuită site'],
        ['Site de verificat', body.site || '—'],
        ['Nume', body.name || '—'],
        ['E-mail', body.email || '—'],
        ['Telefon', body.phone || '—'],
      ]
    : [
        ['Tip solicitare', body.taskType || '—'],
        ['Nume', body.name || '—'],
        ['Organizație', body.org || '—'],
        ['E-mail', body.email || '—'],
        ['Telefon', body.phone || '—'],
        ['Descriere', body.description || '—'],
      ]

  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; background:#0f1115; color:#e8ecf3; padding:24px;">
        <div style="max-width:600px; margin:0 auto; background:#161a21; border:1px solid #2a3140; border-radius:12px; padding:24px;">
          <h2 style="color:#4f8cff; margin-top:0; font-size:18px;">${sanitize(subject)}</h2>
          <table style="width:100%; border-collapse:collapse; font-size:14px;">
            ${fields
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding:8px 12px; border-bottom:1px solid #2a3140; color:#94a1b5; width:35%; vertical-align:top;">${sanitize(label)}</td>
                <td style="padding:8px 12px; border-bottom:1px solid #2a3140; color:#e8ecf3; vertical-align:top;">${sanitize(value)}</td>
              </tr>`
              )
              .join('')}
          </table>
          <p style="font-size:11px; color:#94a1b5; margin-top:24px; padding-top:16px; border-top:1px solid #2a3140;">
            Trimis automat de pe <a href="https://datarisk.vip" style="color:#4f8cff;">datarisk.vip</a><br/>
            DATARISK MOLDOVA SRL · IDNO 1026023020925<br/>
            ${new Date().toISOString()}
          </p>
        </div>
      </body>
    </html>
  `

  // Создаём SMTP transporter для Brevo
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, // true для 465, false для 587/STARTTLS
    auth: {
      user: fromEmail, // верифицированный sender email
      pass: apiKey, // SMTP-ключ (xsmtpsib-...)
    },
  })

  try {
    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: `"DATARISK MOLDOVA" <${toEmail}>`,
      replyTo: `"${body.name || body.email}" <${body.email}>`,
      subject,
      html: htmlContent,
      headers: {
        'X-Mailer': 'DATARISK MOLDOVA (Next.js + nodemailer)',
      },
    })

    return NextResponse.json({ ok: true, messageId: info.messageId })
  } catch (error) {
    console.error('Failed to send email via Brevo SMTP:', error)
    return NextResponse.json(
      { ok: false, error: 'email_send_failed' },
      { status: 502 }
    )
  }
}

// GET — для проверки, что endpoint живой
export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: '/api/submit',
    methods: ['POST'],
  })
}
