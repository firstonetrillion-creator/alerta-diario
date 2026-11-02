import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const ready = process.env.NEXT_PUBLIC_PUBLICATION_READY === 'true' && Boolean(process.env.NEXT_PUBLIC_SITE_URL);
  if (!ready) return { rules: { userAgent: '*', disallow: '/' } };
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml` };
}
