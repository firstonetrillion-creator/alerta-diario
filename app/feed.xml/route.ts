import { getArticles } from '@/lib/articles';

export const dynamic = 'force-static';

function escapeXml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.invalid';
  const ready = process.env.NEXT_PUBLIC_PUBLICATION_READY === 'true';
  const articles = ready ? (await getArticles()).filter((article) => article.status === 'published') : [];
  const items = articles.map((article) => `<item><title>${escapeXml(article.title)}</title><link>${base}/noticias/${article.slug}/</link><guid>${base}/noticias/${article.slug}/</guid><description>${escapeXml(article.excerpt)}</description>${article.publishedAt ? `<pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>` : ''}</item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Alerta Diário</title><link>${base}</link><description>Notícias, contexto e serviço de Inhumas, Goiás, Centro-Oeste, Brasil e mundo.</description><language>pt-br</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
