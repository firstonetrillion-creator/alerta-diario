import type { Metadata, Viewport } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PreviewNotice } from '@/components/preview-notice';
import './site.css';
import './site-extra.css';
import '../styles.css';

const ready = process.env.NEXT_PUBLIC_PUBLICATION_READY === 'true';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.invalid';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: ready ? 'Alerta Diário — notícia com contexto' : 'Alerta Diário — prévia editorial', template: '%s | Alerta Diário' },
  description: 'Notícias, contexto e serviço de Inhumas, Goiás, Centro-Oeste, Brasil e mundo.',
  applicationName: 'Alerta Diário',
  alternates: { types: { 'application/rss+xml': '/feed.xml' } },
  robots: ready ? { index: true, follow: true } : { index: false, follow: false, noarchive: true },
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'Alerta Diário', title: 'Alerta Diário — notícia com contexto', description: 'Notícias, contexto e serviço de Inhumas, Goiás, Centro-Oeste, Brasil e mundo.' },
};

export const viewport: Viewport = { themeColor: '#10231e', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><PreviewNotice /><SiteHeader /><main id="conteudo" className="page-shell">{children}</main><SiteFooter /></body></html>;
}
