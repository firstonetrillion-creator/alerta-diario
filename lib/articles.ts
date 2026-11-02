import { categories } from './categories';
import { seedArticles } from './seed-articles';
import { sanity, sanityReady } from './sanity';
import type { Article } from './types';

const publishedQuery = `*[_type == "article" && defined(publishedAt) && publishedAt <= now()] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  "categorySlug": category->slug.current,
  "categoryTitle": category->title,
  location,
  readingTime,
  body,
  keyPoints,
  sources[]{label, url},
  "author": author->{name, "slug": slug.current, bio},
  publishedAt,
  reviewedAt,
  "coverImage": {"url": coverImage.asset->url, "alt": coverImage.alt, "rights": imageRights}
}`;

function normalizeArticle(raw: Record<string, unknown>): Article {
  const categorySlug = String(raw.categorySlug ?? 'brasil-mundo');
  const category = categories.find((item) => item.slug === categorySlug) ?? {
    title: String(raw.categoryTitle ?? 'Brasil & Mundo'), slug: categorySlug,
    description: '', accent: 'green',
  };
  const bodyRaw = Array.isArray(raw.body) ? raw.body : [];
  const body = bodyRaw.flatMap((block) => {
    if (!block || typeof block !== 'object') return [];
    const children = (block as { children?: unknown[] }).children ?? [];
    const text = children.map((child) => child && typeof child === 'object' && 'text' in child ? String(child.text) : '').join('').trim();
    return text ? [text] : [];
  });
  const image = raw.coverImage && typeof raw.coverImage === 'object' ? raw.coverImage as Record<string, unknown> : undefined;
  return {
    title: String(raw.title ?? ''), slug: String(raw.slug ?? ''), excerpt: String(raw.excerpt ?? ''), category,
    location: String(raw.location ?? ''), readingTime: Number(raw.readingTime ?? 1), body,
    keyPoints: Array.isArray(raw.keyPoints) ? raw.keyPoints.map(String) : [],
    sources: Array.isArray(raw.sources) ? raw.sources as Article['sources'] : [],
    author: raw.author as Article['author'], publishedAt: typeof raw.publishedAt === 'string' ? raw.publishedAt : undefined,
    reviewedAt: typeof raw.reviewedAt === 'string' ? raw.reviewedAt : undefined,
    status: 'published',
    coverImage: image?.url ? { url: String(image.url), alt: String(image.alt ?? ''), rights: String(image.rights ?? '') } : undefined,
  };
}

export async function getArticles(): Promise<Article[]> {
  // Draft seed content is useful in local development, but must never be
  // emitted into a public production export before the owner enables launch.
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_PUBLICATION_READY !== 'true') {
    return [];
  }
  if (!sanityReady) return seedArticles;
  const documents = await sanity.fetch<Record<string, unknown>[]>(publishedQuery, {}, { cache: 'force-cache' });
  const published = documents.map(normalizeArticle);
  if (process.env.NEXT_PUBLIC_PUBLICATION_READY === 'true') {
    if (published.length < 15) {
      throw new Error(`Publicação bloqueada: ${published.length} matérias aprovadas encontradas; são necessárias 15 para este lançamento.`);
    }
    const incomplete = published.filter((article) => !article.author || !article.reviewedAt || article.sources.length === 0);
    if (incomplete.length > 0) {
      throw new Error(`Publicação bloqueada: ${incomplete.length} matérias precisam de autoria, revisão factual e fontes antes do build.`);
    }
  }
  return published;
}

export async function getArticle(slug: string) {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug);
}

export async function getAuthors() {
  const articles = await getArticles();
  return articles.flatMap((article) => article.author ? [article.author] : [])
    .filter((author, index, all) => all.findIndex((item) => item.slug === author.slug) === index);
}

export function getCategory(slug: string) {
  return categories.find((item) => item.slug === slug);
}
