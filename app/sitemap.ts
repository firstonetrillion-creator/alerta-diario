import type { MetadataRoute } from 'next';
import { getArticles, getAuthors } from '@/lib/articles';
import { categories } from '@/lib/categories';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ready = process.env.NEXT_PUBLIC_PUBLICATION_READY === 'true' && Boolean(process.env.NEXT_PUBLIC_SITE_URL);
  if (!ready) return [];
  const base = process.env.NEXT_PUBLIC_SITE_URL!;
  const [allArticles, authors] = await Promise.all([getArticles(), getAuthors()]);
  const articles = allArticles.filter((article) => article.status === 'published');
  return [
    ...['', '/noticias/', '/sobre/', '/contato/', '/correcoes/', '/privacidade/'].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...categories.map((item) => ({ url: `${base}/editoria/${item.slug}/`, lastModified: new Date() })),
    ...authors.map((author) => ({ url: `${base}/autores/${author.slug}/`, lastModified: new Date() })),
    ...articles.map((article) => ({ url: `${base}/noticias/${article.slug}/`, lastModified: article.reviewedAt ? new Date(article.reviewedAt) : article.publishedAt ? new Date(article.publishedAt) : new Date() })),
  ];
}
