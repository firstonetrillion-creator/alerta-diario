import Link from 'next/link';

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top">
      <Link className="brand footer-brand" href="/"><span className="brand-mark">A<span>•</span></span><span>ALERTA<span className="brand-light">DIÁRIO</span></span></Link>
      <p>Informação, contexto e serviço.<br />Cobertura de Inhumas, Goiás e além.</p>
      <nav className="footer-links" aria-label="Informações do portal">
        <Link href="/sobre/">Sobre e método</Link><Link href="/contato/">Contato</Link><Link href="/correcoes/">Correções</Link><Link href="/privacidade/">Privacidade</Link><a href="/feed.xml">RSS</a>
      </nav>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Alerta Diário</span><span>Publicidade identificada · Jornalismo com responsabilidade</span></div>
  </footer>;
}
