# Инструкция: публикация сайта DATARISK MOLDOVA на домене Namecheap

Эта инструкция описывает 3 рабочих варианта публикации. Выберите один в зависимости от ваших требований к бюджету, региону хостинга и уровню контроля.

---

## Что у вас есть сейчас

- **Сайт:** Next.js 16 приложение (полнофункциональное, с программным SEO)
- **Исходный код:** в директории `/home/z/my-project/`
- **База данных:** SQLite-файл (`db/custom.db`) — не содержит персональных данных, в production можно не использовать
- **Домен:** куплен на Namecheap (предполагаем `datarisk.md` или похожий)

---

## Вариант 1 — Vercel (рекомендуемый, бесплатно)

**Почему рекомендуется:** Vercel — создатели Next.js. Автоматический HTTPS, edge CDN, деплой из GitHub за 2 минуты. Бесплатный план покрывает потребности небольшого сайта. EU-регион доступен.

### Шаг 1. Загрузите код в GitHub

```bash
# Локально, в директории проекта
git init
git add .
git commit -m "Initial commit: DATARISK MOLDOVA cinematic studio"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/datarisk-md.git
git push -u origin main
```

Если ещё нет аккаунта GitHub — создайте на https://github.com/signup.

### Шаг 2. Подключите Vercel

1. Зайдите на https://vercel.com/signup и зарегистрируйтесь через GitHub.
2. Нажмите **«Add New...» → «Project»**.
3. Импортируйте репозиторий `datarisk-md`.
4. Framework Preset: **Next.js** (определится автоматически).
5. **ВАЖНО — выберите регион:**
   - Откройте раздел **«Settings» → «Functions»**
   - Region: **`eu1` (Frankfurt)** или **`cdg1` (Paris)** — это ЕС.
6. Нажмите **«Deploy»**. Через 1–2 минуты сайт будет доступен по адресу вида `datarisk-md.vercel.app`.

### Шаг 3. Подключите домен Namecheap к Vercel

1. В дашборде Vercel откройте ваш проект → вкладка **«Settings» → «Domains»**.
2. Введите ваш домен (например, `datarisk.md`) и нажмите **«Add»**.
3. Vercel покажет конфигурацию DNS. Запишите 2 значения:
   - **A record:** `76.76.21.21` (или другой IP, который покажет Vercel)
   - **CNAME record:** `cname.vercel-dns.com` (для `www`)

### Шаг 4. Настройте DNS в Namecheap

1. Войдите в Namecheap → **Domain List** → найдите ваш домен → нажмите **«Manage»**.
2. Перейдите на вкладку **«Advanced DNS»**.
3. Удалите все существующие записи (если они есть по умолчанию — обычно `parking page`).
4. Добавьте новые записи:

   | Type | Host | Value | TTL |
   |------|------|-------|-----|
   | **A Record** | `@` | `76.76.21.21` | Automatic |
   | **CNAME Record** | `www` | `cname.vercel-dns.com` | Automatic |
   | **URL Redirect Record** | `www` | `https://datarisk.md` | Unmasked (опционально, для редиректа www → non-www) |

5. Нажмите **«Save All Changes»** (зелёная галочка справа вверху).
6. Перейдите на вкладку **«Domain»** → убедитесь, что **«Nameservers»** установлены в **«Namecheap Basic DNS»** (по умолчанию так и есть).

### Шаг 5. Подождите обновления DNS

- DNS-изменения в Namecheap вступают в силу за **30 минут — 24 часа** (обычно 1–2 часа).
- Проверить статус: https://www.whatsmydns.net/ — введите ваш домен, посмотрите, как обновляется A-запись по миру.
- Vercel автоматически выдаст **SSL-сертификат** через Let's Encrypt в течение 5–10 минут после того, как DNS начнёт указывать на Vercel.

### Шаг 6. Проверьте

- Откройте `https://ВАШ_ДОМЕН` — должна загрузиться главная страница.
- Проверьте посадочную SEO-страницу: `https://ВАШ_ДОМЕН/gdpr-audit-site-md`
- Проверьте sitemap: `https://ВАШ_ДОМЕН/sitemap.xml` (должен содержать 73 URL)
- Проверьте robots.txt: `https://ВАШ_ДОМЕН/robots.txt`

### Преимущества Vercel:
- ✅ Бесплатно (Hobby-план)
- ✅ Auto-renew SSL
- ✅ Автоматический деплой при `git push`
- ✅ EU-регион (Frankfurt / Paris)
- ✅ Edge CDN — быстрая загрузка по всему миру

### Недостатки:
- ⚠️ Серверы Vercel — это не Молдова (но ЕС подходит под Закон 195/2024)
- ⚠️ На бесплатном плане — лимит 100 GB bandwidth/мес

---

## Вариант 2 — VPS (Moldova или EU) + Docker

**Почему выбирают:** Полный контроль, сервер физически в Молдове (если купите MD-хостинг) или в ЕС. Дешевле при росте трафика.

### Шаг 1. Закажите VPS

**Варианты в Молдове:**
- **Alexhost** (https://alexhost.com) — KVM VPS от €5/мес, дата-центр в Кишинёве
- **Starnet** (https://starnet.md) — MD-хостинг
- **Moldtelecom** —Enterprise-решения

**Варианты в ЕС (часто дешевле):**
- **Hetzner** (https://hetzner.com) — CX22 от €4/мес, Germany/FI
- **Contabo** — от €4/мес, Германия

Минимальные требования: **2 vCPU, 4 GB RAM, 40 GB SSD, Ubuntu 22.04+**.

### Шаг 2. Подготовьте VPS

Подключитесь по SSH:
```bash
ssh root@ВАШ_VPS_IP
```

Установите Docker и Docker Compose:
```bash
apt update && apt upgrade -y
curl -fsSL https://get.docker.com | sh
apt install docker-compose-plugin -y
```

### Шаг 3. Загрузите код на VPS

**Вариант A — через Git:**
```bash
cd /var/www
git clone https://github.com/ВАШ_ЛОГИН/datarisk-md.git
cd datarisk-md
```

**Вариант B — через SCP (если код ещё не в Git):**
```bash
# С вашего компьютера:
scp -r /home/z/my-project/* root@ВАШ_VPS_IP:/var/www/datarisk-md/
```

### Шаг 4. Создайте Dockerfile

В корне проекта создайте файл `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base
WORKDIR /app

# Установите bun
RUN npm install -g bun

# Копируйте package.json и lockfile
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Копируйте остальное
COPY . .

# Build
RUN bun run build

# Production image
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static
COPY --from=base /app/public ./public
COPY --from=base /app/data ./data
COPY --from=base /app/prisma ./prisma

EXPOSE 3000
CMD ["node", "server.js"]
```

В `next.config.ts` убедитесь, что `output: "standalone"` уже стоит (он стоит по умолчанию в нашем проекте).

### Шаг 5. Создайте docker-compose.yml

```yaml
version: '3.8'
services:
  web:
    build: .
    restart: always
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=file:/app/db/custom.db
    volumes:
      - ./db:/app/db  # персистентная БД
```

### Шаг 6. Запустите

```bash
docker compose up -d --build
```

Сайт будет доступен на `http://ВАШ_VPS_IP:3000`.

### Шаг 7. Настройте Nginx + Let's Encrypt (reverse proxy)

```bash
apt install nginx certbot python3-certbot-nginx -y
```

Создайте `/etc/nginx/sites-available/datarisk.md`:
```nginx
server {
    listen 80;
    server_name datarisk.md www.datarisk.md;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
    }
}
```

Активируйте:
```bash
ln -s /etc/nginx/sites-available/datarisk.md /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

### Шаг 8. Настройте DNS в Namecheap

1. В Namecheap → Domain List → Manage → **Advanced DNS**.
2. Добавьте запись:

   | Type | Host | Value | TTL |
   |------|------|-------|-----|
   | **A Record** | `@` | `ВАШ_VPS_IP` | Automatic |
   | **A Record** | `www` | `ВАШ_VPS_IP` | Automatic |

3. Сохраните.

### Шаг 9. SSL-сертификат

После обновления DNS (10–30 минут):
```bash
certbot --nginx -d datarisk.md -d www.datarisk.md
```
Certbot автоматически настроит HTTPS и будет обновлять сертификат.

### Шаг 10. Автоматический перезапуск при падении

Docker уже настроен с `restart: always` — это достаточно. Для обновления сайта после `git push`:
```bash
cd /var/www/datarisk-md
git pull
docker compose up -d --build
```

### Преимущества VPS:
- ✅ Полный контроль
- ✅ Сервер в Молдове (соответствие 195/2024 по месту обработки)
- ✅ Без лимитов bandwidth
- ✅ Дешевле при росте трафика

### Недостатки:
- ⚠️ Нужно администрировать сервер самому
- ⚠️ Настройка занимает 1–2 часа
- ⚠️ Резервные копии — ваша ответственность

---

## Вариант 3 — Cloudflare Pages + Namecheap (бесплатно, edge)

**Почему выбирают:** Cloudflare имеет edge-узлы по всему миру, включая Молдову. Бесплатный план без лимитов bandwidth.

### Шаг 1. Загрузите код в GitHub (как в варианте 1, шаг 1)

### Шаг 2. Подключите Cloudflare Pages

1. Зарегистрируйтесь на https://dash.cloudflare.com/sign-up.
2. **Workers & Pages → Create application → Pages → Connect to Git.**
3. Выберите репозиторий `datarisk-md`.
4. Настройте build:
   - **Framework preset:** Next.js
   - **Build command:** `bun run build`
   - **Build output directory:** `.next` (или оставьте Auto)
5. В **«Environment variables»** добавьте:
   - `NODE_VERSION` = `20`
   - `NEXT_TELEMETRY_DISABLED` = `1`
6. **Save and Deploy.** Через 2–3 минуты сайт доступен по адресу `datarisk-md.pages.dev`.

### Шаг 3. Подключите домен Namecheap

**Вариант A — через Cloudflare DNS (рекомендуется):**

1. В Cloudflare: **Add a Site** → введите ваш домен → выберите **Free plan**.
2. Cloudflare даст вам 2 nameservers: `XXX.NS.CLOUDFLARE.COM`.
3. В Namecheap: Domain List → Manage → **Nameservers** → **Custom DNS** → введите эти 2 nameservers → **Save**.
4. Подождите 24 часа для полного распространения.
5. В Cloudflare: **DNS** → добавьте запись `CNAME` для `@` → указывает на `datarisk-md.pages.dev` (с **Proxied** статусом — оранжевое облако).
6. В Cloudflare: **SSL/TLS** → режим **Full** или **Full (strict)**.
7. В Cloudflare: **Pages** → ваш проект → **Custom domains** → **Set up a domain** → введите `datarisk.md`.

**Вариант B — через CNAME в Namecheap DNS:**

1. Namecheap → Advanced DNS → добавьте:
   - **CNAME Record** | `@` | `datarisk-md.pages.dev` | Automatic
   - **CNAME Record** | `www` | `datarisk-md.pages.dev` | Automatic
2. Cloudflare не используется как DNS, только как Pages-хостинг.

### Преимущества Cloudflare:
- ✅ Без лимитов bandwidth
- ✅ Edge-узлы по всему миру (быстро в Молдове)
- ✅ Бесплатный SSL и DDoS-защита
- ✅ Автоматический деплой из Git

### Недостатки:
- ⚠️ Next.js на Cloudflare Pages имеет ограничения (нужно включить Edge Runtime для некоторых API)
- ⚠️ Сложнее с server-side базой данных (нужно использовать Cloudflare D1 или внешнюю БД)

---

## Что выбрать?

| Критерий | Vercel | VPS | Cloudflare Pages |
|---|---|---|---|
| Сложность настройки | ⭐ (легко) | ⭐⭐⭐ (сложно) | ⭐⭐ (средне) |
| Цена | Бесплатно / $20 про | €4–10/мес | Бесплатно |
| Сервер в Молдове | ❌ | ✅ (если MD-хостинг) | ❌ |
| Сервер в ЕС | ✅ (Frankfurt) | ✅ (на выбор) | ✅ |
| Полный контроль | ❌ | ✅ | ⚠️ (частично) |
| Auto-SSL | ✅ | Через Certbot | ✅ |
| Авто-деплой из Git | ✅ | ⚠️ (нужно настроить) | ✅ |
| Лимит bandwidth | 100 GB/мес (free) | Без лимита | Без лимита |

**Рекомендация:** Начните с **Vercel** (Вариант 1). Это бесплатно, быстро, EU-регион. Если трафик вырастет сверх 100 GB или появится потребность в сервере именно в Молдове — мигрируйте на VPS (Вариант 2).

---

## После публикации — чек-лист

После того как домен работает, обязательно выполните:

### 1. Проверьте HTTPS
- Откройте `https://ВАШ_ДОМЕН` — должен быть зелёный замок в браузере.
- Проверьте редирект `http://` → `https://` (должен происходить автоматически).

### 2. Зарегистрируйте сайт в Google Search Console
- https://search.google.com/search-console
- Добавьте property типа **Domain** → введите ваш домен.
- Подтвердите владение через **TXT-запись в DNS Namecheap**:
  - Namecheap → Advanced DNS → **Add New Record** → **TXT Record** | `@` | `google-site-verification=ВАШ_КОД` | Automatic.
- Загрузите sitemap: в Search Console → **Sitemaps** → введите `https://ВАШ_ДОМЕН/sitemap.xml` → Submit.

### 3. Зарегистрируйте в Bing Webmaster Tools
- https://www.bing.com/webmasters
- Аналогично Google — добавьте сайт, подтвердите, отправьте sitemap.

### 4. Проверьте robots.txt
- `https://ВАШ_ДОМЕН/robots.txt` — должен содержать `Sitemap: https://ВАШ_ДОМЕН/sitemap.xml`.

### 5. Проверьте посадочные SEO-страницы
Откройте 3-4 разных URL из sitemap, например:
- `https://ВАШ_ДОМЕН/gdpr-audit-site-md`
- `https://ВАШ_ДОМЕН/web-ecommerce-md`
- `https://ВАШ_ДОМЕН/mobile-app-ios-android-md`

У каждой должен быть уникальный `<title>` и `<meta description>`.

### 6. Откройте сайт в режиме инкогнито
- Зайдите на главную — баннер cookie должен появиться.
- Примите / отклоните — проверьте, что нет ошибок в консоли браузера (F12 → Console).

### 7. Протестируйте формы
- Откройте «Verificare» → заполните форму → отправьте.
- Должно появиться сообщение об успехе (данные никуда не отправляются, но UI должен корректно переключаться).

### 8. Включите мониторинг
- **Vercel Analytics** (если на Vercel) — бесплатно для тех, кто хочет видеть посещаемость.
- Или **Plausible** / **Umami** — self-hosted аналитика без cookie (нужно будет встроить 1 строчку кода).

---

## Если что-то не работает

### Сайт не открывается по домену

1. Проверьте DNS: https://www.whatsmydns.net/ — введите домен, посмотрите, какой IP получают пользователи по миру.
2. Если IP не тот, что вы указали — DNS ещё не обновился (подождите 1–24 часа).
3. Если DNS обновился, но сайт не открывается:
   - **Vercel:** проверьте в дашборде, что домен добавлен и валиден (зелёная галочка).
   - **VPS:** проверьте `docker compose ps` (контейнер должен быть `Up`), `curl http://localhost:3000` (должен вернуть HTML).
   - **Cloudflare:** проверьте SSL/TLS mode — должен быть `Full` или `Full (strict)`.

### SSL-сертификат не выдаётся

- **Vercel:** подождите 10 минут после обновления DNS, Vercel сам получит сертификат.
- **VPS:** убедитесь, что `certbot --nginx -d вашдомен` отработал без ошибок. Если ошибка — DNS ещё не обновился, подождите и повторите.
- **Cloudflare:** убедитесь, что SSL mode = `Full`, а не `Flexible`.

### Формы не отправляются

Это **нормально** — на текущей версии сайта формы не отправляются никуда (см. техническую карту обработки данных). Если хотите включить реальную отправку — нужно:
1. Создать API-route (`/api/submit-contact`)
2. Подключить email-провайдера (SendGrid, AWS SES, или локальный SMTP)
3. Опционально — записывать в БД (Prisma + PostgreSQL)

---

## Контакты для поддержки

- **Namecheap Support:** https://www.namecheap.com/help-live/ (чат 24/7)
- **Vercel Support:** https://vercel.com/help (для платных планов)
- **Cloudflare Community:** https://community.cloudflare.com/

---

**Версия документа:** 1.0 · 18 сентября 2026
**Для:** DATARISK MOLDOVA SRL
**Стек:** Next.js 16 + TypeScript + Tailwind CSS 4 + Prisma + Zustand
