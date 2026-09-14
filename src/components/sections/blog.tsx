'use client'

import { useState } from 'react'
import { useDict } from '@/lib/i18n/use-dict'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Tag, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function Blog() {
  const t = useDict()
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  const openArticle = t.blog.articles.find((a) => a.slug === openSlug)

  return (
    <section className="container-doc py-12 md:py-20">
      <div className="max-w-3xl mb-10">
        <div className="kicker mb-3">06</div>
        <h1 className="doc-h2 mb-4">{t.blog.title}</h1>
        <p className="doc-lead">{t.blog.lead}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {t.blog.articles.map((article) => (
          <article
            key={article.slug}
            className="panel p-5 flex flex-col hover:border-brand/40 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
              <span className="badge-doc badge-brand">
                <Tag className="size-3" aria-hidden />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="size-3" aria-hidden />
                {article.date}
              </span>
            </div>

            <h3 className="text-base font-semibold mb-2 leading-tight">
              {article.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
              {article.excerpt}
            </p>

            <Button
              variant="ghost"
              size="sm"
              className="self-start text-brand hover:text-brand hover:bg-brand/10 -ml-2"
              onClick={() => setOpenSlug(article.slug)}
            >
              {t.blog.readMore}
              <ArrowRight className="size-4 ml-1.5" aria-hidden />
            </Button>
          </article>
        ))}
      </div>

      {/* Article dialog */}
      <Dialog open={!!openSlug} onOpenChange={(o) => !o && setOpenSlug(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
          {openArticle && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="badge-doc badge-brand">
                    <Tag className="size-3" aria-hidden />
                    {openArticle.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="size-3" aria-hidden />
                    {openArticle.date}
                  </span>
                </div>
                <DialogTitle className="text-xl md:text-2xl leading-tight pr-6">
                  {openArticle.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 pt-2">
                <p className="text-sm font-medium text-foreground/90 leading-relaxed">
                  {openArticle.excerpt}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {openArticle.body}
                </p>
                <div className="hairline pt-4 mt-6 text-xs text-muted-foreground">
                  {t.blog.updated}: {openArticle.date} · DATARISK MOLDOVA · Legea nr. 195/2024
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
