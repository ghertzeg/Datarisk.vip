import { NextRequest, NextResponse } from 'next/server'

/**
 * API route: POST /api/submit
 *
 * Принимает данные формы с сайта и отправляет их на email через Brevo REST API v3.
 * Данные формы НЕ сохраняются в БД — только пересылаются на email оператора.
 *
 * Brevo REST API v3:
 *   Endpoint: https://api.brevo.com/v3/smtp/email
 *   Header: api-key: BREVO_API_KEY
 *   Ключ может быть SMTP (xsmtpsib-...) или v3 (xkeysib-...)
 *
 * Безопасность:
 * - Проверка обязательных полей и consent
 * - Проверка email-формата
 * - Honeypot (anti-spam)
 * - HTML-санитизация
 * - Детальные ошибки для диагностики
 */

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

// Простая валидация email
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254
}

// Sanitize — экранируем HTML
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

  // 1. Проверяем, что BREVO_API_KEY задан
  if (!apiKey) {
    console.error('[submit] BREVO_API_KEY is not set in environment variables')
    return NextResponse.json(
      {
        ok: false,
        error: 'server_not_configured',
        message:
          'BREVO_API_KEY env var is missing. Add it in Vercel → Settings → Environment Variables.',
      },
      { status: 500 }
    )
  }

  // 2. Парсим тело запроса
  let body: FormPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: 'invalid_json' },
      { status: 400 }
    )
  }

  // 3. Honeypot: если заполнено — это бот
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true, spam: true }, { status: 200 })
  }

  // 4. Проверка consent
  if (!body.consent) {
    return NextResponse.json(
      { ok: false, error: 'consent_required' },
      { status: 400 }
    )
  }

  // 5. Проверка email
  if (!body.email || !isValidEmail(body.email)) {
    return NextResponse.json(
      { ok: false, error: 'invalid_email' },
      { status: 400 }
    )
  }

  // 6. Проверка обязательных полей по типу формы
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

  // 7. Формируем содержимое письма
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

  // 8. Отправляем через Brevo REST API v3
  try {
    const brevoResponse = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: fromName, email: fromEmail },
        to: [{ email: toEmail, name: 'DATARISK MOLDOVA' }],
        replyTo: { email: body.email, name: body.name || body.email },
        subject,
        htmlContent,
        tags: [body.formType],
      }),
    })

    if (!brevoResponse.ok) {
      let errorBody: unknown = null
      try {
        errorBody = await brevoResponse.json()
      } catch {
        errorBody = await brevoResponse.text()
      }
      console.error('[submit] Brevo API error:', {
        status: brevoResponse.status,
        statusText: brevoResponse.statusText,
        body: errorBody,
        fromEmail,
        toEmail,
      })
      // Возвращаем клиенту понятную ошибку
      let clientError = 'email_send_failed'
      let clientMessage = 'Failed to send email via Brevo'
      if (brevoResponse.status === 401) {
        clientError = 'brevo_unauthorized'
        clientMessage =
          'BREVO_API_KEY is invalid or expired. Generate a new key in Brevo → SMTP & API → API Keys.'
      } else if (brevoResponse.status === 400) {
        clientError = 'brevo_bad_request'
        clientMessage =
          'Brevo rejected the request. Check that sender email is verified in Brevo → Senders & IP.'
      } else if (brevoResponse.status === 429) {
        clientError = 'brevo_rate_limit'
        clientMessage = 'Rate limit exceeded. Wait a moment and try again.'
      }
      return NextResponse.json(
        { ok: false, error: clientError, message: clientMessage, brevoStatus: brevoResponse.status },
        { status: 502 }
      )
    }

    const result = (await brevoResponse.json()) as { messageId?: string }
    return NextResponse.json({ ok: true, messageId: result.messageId })
  } catch (error) {
    console.error('[submit] Network error:', error)
    return NextResponse.json(
      { ok: false, error: 'network_error', message: String(error) },
      { status: 502 }
    )
  }
}

// GET — для проверки, что endpoint живой
export async function GET() {
  const hasKey = !!process.env.BREVO_API_KEY
  return NextResponse.json({
    ok: true,
    endpoint: '/api/submit',
    methods: ['POST'],
    configured: hasKey,
    fromEmail: process.env.BREVO_FROM_EMAIL || '(default hello@datarisk.md)',
    toEmail: process.env.BREVO_TO_EMAIL || '(default hello@datarisk.md)',
  })
}
