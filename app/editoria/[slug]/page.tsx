import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleGrid } from '@/components/article-grid';
import { getArticles, getCategory } from '@/lib/articles';
import { categories } from '@/lib/categories';

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return category ? { title: category.title, description: category.description } : { title: 'Editoria não encontrada' };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const articles = (await getArticles()).filter((article) => article.category.slug === slug);
  return <>
    <header className="section-banner"><span className="eyebrow">EDITORIA</span><h1>{category.title}</h1><p>{category.description}</p></header>
    <section className="latest-section"><ArticleGrid articles={articles} showFilters={false} /></section>
  </>;
}
