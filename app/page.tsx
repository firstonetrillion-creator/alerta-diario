import Link from 'next/link';
import { getArticles } from '@/lib/articles';
import { categories } from '@/lib/categories';
import { ArticleGrid } from '@/components/article-grid';
import { AdSlot } from '@/components/ad-slot';

export default async function HomePage() {
  const articles = await getArticles();
  const lead = articles[0];
  const sidebar = articles.slice(1, 4);
  return <>
    <div className="date-row"><span>INFORMAÇÃO PARA ENTENDER O DIA</span><span>Inhumas · Goiás · Centro-Oeste</span></div>
    {lead ? <section className="lead-grid" aria-label="Destaques">
      <article className="lead-story">
        <div className="lead-art art-green" aria-hidden="true"><span className="art-label">ALERTA DIÁRIO</span><span className="art-sun"/><span className="art-lines"/><span className="art-caption">{lead.category.title.toUpperCase()}</span></div>
        <div className="story-meta"><span className="category">{lead.category.title}</span><span>{lead.readingTime} min de leitura</span></div>
        {lead.status === 'review' && <span className="lead-status">Rascunho para revisão humana</span>}
        <h1><Link href={`/noticias/${lead.slug}/`}>{lead.title}</Link></h1>
        <p className="dek">{lead.excerpt}</p>
        <Link className="text-link" href={`/noticias/${lead.slug}/`}>Ler matéria <span>↗</span></Link>
      </article>
      <aside className="right-rail">
        <div className="section-heading"><h2>Em destaque</h2><span className="live-dot" aria-hidden="true"/></div>
        {sidebar.map((article, index) => <article className="brief" key={article.slug}><span className="brief-number">{String(index + 1).padStart(2, '0')}</span><div><span className="category">{article.category.title}</span><h3><Link href={`/noticias/${article.slug}/`}>{article.title}</Link></h3><small>{article.status === 'published' ? article.location : 'Rascunho · revisão pendente'}</small></div></article>)}
        <AdSlot placement="rail" />
      </aside>
    </section> : <section className="section-banner"><span className="eyebrow">PORTAL EM PREPARAÇÃO</span><h1>Notícia pede apuração.<br />Leitura pede contexto.</h1><p>As matérias aprovadas aparecerão aqui depois de publicadas no painel editorial.</p></section>}
    <AdSlot placement="home" />
    <section className="latest-section">
      <div className="section-heading latest-heading"><div><span className="eyebrow">LEITURA ESSENCIAL</span><h2>Matérias do Alerta Diário</h2></div><Link className="text-link" href="/noticias/">Todas as matérias <span>→</span></Link></div>
      <ArticleGrid articles={articles} />
    </section>
    <section className="section-grid" aria-label="Editorias">
      {categories.map((item) => <Link className="section-tile" href={`/editoria/${item.slug}/`} key={item.slug}><span className="eyebrow">EDITORIA</span><h2>{item.title}</h2><p>{item.description}</p><span className="tile-arrow">↗</span></Link>)}
    </section>
    <section className="context-band"><div><span className="eyebrow">NOSSO MÉTODO</span><h2>Apuração, fonte<br />e contexto.</h2></div><p>O Alerta Diário usa ferramentas de IA para apoiar pesquisa e organização. Uma pessoa precisa conferir as fontes, verificar os fatos e aprovar cada matéria antes de publicar. Conheça os critérios, a política de correções e os canais de contato.</p><Link href="/sobre/" className="text-link">Sobre a redação <span>↗</span></Link></section>
    <section className="newsletter newsletter-disabled"><div><span className="eyebrow">RESUMO DA SEMANA</span><h2>O que importa, sem ruído.</h2><p>Newsletter em preparação. Nenhum e-mail é coletado nesta prévia.</p></div><span className="coming-soon">Em breve</span></section>
  </>;
}
