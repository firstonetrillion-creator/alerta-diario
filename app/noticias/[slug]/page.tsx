import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AdSlot } from '@/components/ad-slot';
import { getArticle, getArticles } from '@/lib/articles';
import { PortableBody } from '@/components/portable-body';

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.length
    ? articles.map((article) => ({ slug: article.slug }))
    : [{ slug: '__prelaunch__' }];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: 'Matéria não encontrada' };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/noticias/${article.slug}/` },
    openGraph: { type: 'article', title: article.title, description: article.excerpt, publishedTime: article.publishedAt, authors: article.author ? [article.author.name] : undefined, images: article.coverImage?.url ? [article.coverImage.url] : undefined },
    robots: article.status === 'published' && process.env.NEXT_PUBLIC_PUBLICATION_READY === 'true' ? undefined : { index: false, follow: false },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();
  const published = article.status === 'published';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.invalid';
  const jsonLd = published ? {
    '@context': 'https://schema.org', '@type': 'NewsArticle', headline: article.title, description: article.excerpt,
    datePublished: article.publishedAt, dateModified: article.reviewedAt || article.publishedAt,
    mainEntityOfPage: `${baseUrl}/noticias/${article.slug}/`, author: article.author ? { '@type': 'Person', name: article.author.name, url: `${baseUrl}/autores/${article.author.slug}/` } : undefined,
    image: article.coverImage?.url ? [article.coverImage.url] : undefined,
  } : null;
  return <article className="article-layout">
    {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />}
    <div className="article-kicker"><Link className="category" href={`/editoria/${article.category.slug}/`}>{article.category.title}</Link><span>{article.location}</span></div>
    {!published && <span className="lead-status">Rascunho — não publicar sem revisão humana</span>}
    <h1>{article.title}</h1><p className="article-dek">{article.excerpt}</p>
    <div className="article-details"><span>{article.author?.name ?? 'Autoria a definir antes da publicação'}</span>{article.publishedAt && <time dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString('pt-BR')}</time>}<span>{article.readingTime} min de leitura</span></div>
    {article.coverImage && <figure className="article-cover"><Image src={article.coverImage.url} alt={article.coverImage.alt} width={1200} height={800} unoptimized /><figcaption>{article.coverImage.rights}</figcaption></figure>}
    <div className="article-disclosure">Este texto foi preparado com apoio de IA e está aguardando revisão humana. As fontes abaixo precisam ser conferidas antes da publicação.</div>
    <section className="article-summary"><h2>Em resumo</h2><ul>{article.keyPoints.map((point) => <li key={point}>{point}</li>)}</ul></section>
    <PortableBody paragraphs={article.body} />
    <AdSlot placement="article" />
    <section className="article-sources"><h2>Fontes e documentos</h2><p>Referências consultadas para este rascunho. Confira se cada link sustenta os trechos relacionados e acrescente entrevistas ou documentos originais usados na versão final.</p><ul>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></section>
    <p className="article-disclosure">Encontrou um erro? <Link href="/correcoes/">Veja como pedir correção.</Link></p>
  </article>;
}
