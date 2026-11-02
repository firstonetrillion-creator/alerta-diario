import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Sobre e método editorial' };

export default function AboutPage() {
  const owner = process.env.NEXT_PUBLIC_EDITORIAL_OWNER;
  const ready = process.env.NEXT_PUBLIC_PUBLICATION_READY === 'true';
  return <article className="text-page">
    <span className="eyebrow">SOBRE O PROJETO</span><h1>Notícia pede apuração. Leitura pede contexto.</h1>
    <p>O Alerta Diário é {ready ? 'um portal editorial independente' : 'um projeto editorial em fase de preparação'}, com cobertura local de Inhumas, Goiás e Centro-Oeste, além de temas nacionais e internacionais. {owner ? `Projeto e marca editorial: ${owner}.` : 'Projeto e marca editorial: Alerta Diário.'}</p>
    <h2>Como produzimos</h2><p>Ferramentas de inteligência artificial podem apoiar a pesquisa inicial, a organização de informações e a preparação de rascunhos. Uma pessoa deve conferir documentos, dados, datas, nomes e fontes, acrescentar contexto e aprovar cada matéria. Nenhum texto gerado automaticamente deve ser publicado sem revisão humana.</p>
    <h2>Fontes, autoria e correções</h2><p>As matérias deverão identificar autoria, data de publicação e atualização, e apontar documentos e fontes relevantes. Se houver erro, o Alerta Diário deverá corrigir o texto e indicar o que mudou. Consulte a <a href="/correcoes/">política de correções</a>.</p>
    {!ready && <div className="contact-card"><strong>Informações pendentes antes do lançamento</strong><p>Identificação editorial e legal a revisar, canal público para contato e atendimento de questões de privacidade. O site não exibirá endereço de e-mail.</p></div>}
  </article>;
}
