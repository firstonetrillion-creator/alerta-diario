import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleGrid } from '@/components/article-grid';
import { getArticles, getAuthors } from '@/lib/articles';

export async function generateStaticParams() {
  return (await getAuthors()).map((author) => ({ slug: author.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = (await getAuthors()).find((item) => item.slug === slug);
  return author ? { title: author.name, description: author.bio } : { title: 'Autor não encontrado' };
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [authors, articles] = await Promise.all([getAuthors(), getArticles()]);
  const author = authors.find((item) => item.slug === slug);
  if (!author) notFound();
  return <>
    <header className="page-title"><span className="eyebrow">AUTORIA</span><h1>{author.name}</h1><p>{author.bio}</p></header>
    <section className="latest-section"><div className="section-heading latest-heading"><div><span className="eyebrow">PUBLICAÇÕES</span><h2>Matérias do autor</h2></div></div><ArticleGrid articles={articles.filter((article) => article.author?.slug === slug)} showFilters={false} /></section>
  </>;
}
