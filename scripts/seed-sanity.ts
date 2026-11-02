import { createClient } from '@sanity/client';
import { categories } from '../lib/categories';
import { seedArticles } from '../lib/seed-articles';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error('Configure NEXT_PUBLIC_SANITY_PROJECT_ID e SANITY_WRITE_TOKEN no ambiente local antes de importar os rascunhos. Nunca publique o token no GitHub.');
}

const client = createClient({ projectId, dataset, apiVersion: '2026-10-31', token, useCdn: false });
const categoryIds = new Map(categories.map((item) => [item.slug, `category-${item.slug}`]));

for (const item of categories) {
  await client.createOrReplace({
    _id: categoryIds.get(item.slug)!, _type: 'category', title: item.title,
    slug: { _type: 'slug', current: item.slug }, description: item.description,
  });
}

for (const item of seedArticles) {
  await client.createOrReplace({
    _id: `drafts.article-${item.slug}`,
    _type: 'article', title: item.title, slug: { _type: 'slug', current: item.slug }, excerpt: item.excerpt,
    category: { _type: 'reference', _ref: categoryIds.get(item.category.slug) }, location: item.location,
    readingTime: item.readingTime,
    body: item.body.map((text, index) => ({
      _type: 'block', _key: `paragraph-${index + 1}`, style: 'normal', markDefs: [],
      children: [{ _type: 'span', _key: `span-${index + 1}`, text, marks: [] }],
    })),
    keyPoints: item.keyPoints,
    sources: item.sources.map((source, index) => ({ _type: 'object', _key: `source-${index + 1}`, ...source })),
    aiAssistance: true,
  });
  console.log(`Rascunho importado: ${item.title}`);
}

console.log(`Importação concluída: ${seedArticles.length} matérias em rascunho. Complete autor, revisão factual, créditos de imagem e data antes de publicar.`);
