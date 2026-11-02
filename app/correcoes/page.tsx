import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Correções e atualizações' };

export default function CorrectionsPage() {
  const contactUrl = process.env.NEXT_PUBLIC_EDITORIAL_CONTACT_URL;
  return <article className="text-page">
    <span className="eyebrow">TRANSPARÊNCIA EDITORIAL</span><h1>Correções e atualizações</h1>
    <p>O Alerta Diário deve corrigir informações incorretas com clareza, atualizar a data da matéria e registrar, quando pertinente, o que foi alterado. Atualizações que mudem substancialmente o entendimento da notícia devem ser explicadas no próprio texto.</p>
    <h2>Como solicitar uma correção</h2><p>Envie o endereço da matéria, indique o trecho e apresente documentos ou fontes que ajudem a verificar a informação. A redação deve analisar o pedido, confirmar os fatos e responder pelo canal informado.</p>
    {contactUrl ? <p>Envie a solicitação pelo <a href={contactUrl} target="_blank" rel="noreferrer">canal oficial de contato ↗</a>.</p> : <div className="contact-card"><strong>Canal de contato em configuração</strong><p>O endereço do canal será informado antes da abertura pública. Não exibiremos e-mail.</p></div>}
  </article>;
}
