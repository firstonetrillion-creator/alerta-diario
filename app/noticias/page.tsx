import type { Metadata } from 'next';
import { getArticles } from '@/lib/articles';
import { ArticleGrid } from '@/components/article-grid';

export const metadata: Metadata = { title: 'Últimas notícias', description: 'Matérias, reportagens e guias do Alerta Diário.' };

export default async function NewsPage() {
  const articles = await getArticles();
  return <>
    <header className="page-title"><span className="eyebrow">ARQUIVO EDITORIAL</span><h1>Últimas matérias</h1><p>Reportagens e explicações do Alerta Diário, organizadas por editoria.</p></header>
    <section className="latest-section"><ArticleGrid articles={articles} /></section>
  </>;
}
