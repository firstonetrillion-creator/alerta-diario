import Link from 'next/link';
import type { Article } from '@/lib/types';

export function ArticleCard({ article }: { article: Article }) {
  return <article className="news-card">
    <div className={`card-art art-${article.category.accent}`} aria-hidden="true"><span>{article.category.title.toUpperCase()}</span></div>
    <div className="story-meta"><span className="category">{article.category.title}</span><span>{article.readingTime} min de leitura</span></div>
    <h3><Link href={`/noticias/${article.slug}/`}>{article.title}</Link></h3>
    <p>{article.excerpt}</p>
    <div className="card-meta">{article.status === 'published' ? <span>{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('pt-BR') : ''}</span> : <span className="draft-label">Rascunho para revisão</span>}</div>
    <Link href={`/noticias/${article.slug}/`} className="card-link">{article.status === 'published' ? 'Ler matéria' : 'Revisar rascunho'} <span>→</span></Link>
  </article>;
}
