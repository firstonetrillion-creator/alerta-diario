import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Contato' };

export default function ContactPage() {
  const contactUrl = process.env.NEXT_PUBLIC_EDITORIAL_CONTACT_URL;
  return <article className="text-page">
    <span className="eyebrow">FALE COM A REDAÇÃO</span><h1>Contato</h1>
    <p>Use os canais abaixo para enviar uma pauta, pedir uma correção ou tratar de privacidade.</p>
    {contactUrl ? <div className="contact-card"><p><strong>Canal oficial da redação</strong></p><p>Use o canal abaixo para enviar uma pauta, solicitar correção ou tratar de privacidade. Inclua o link da matéria e uma descrição objetiva do pedido.</p><p><a href={contactUrl} target="_blank" rel="noreferrer">Acessar canal de contato ↗</a></p></div> : <div className="contact-card"><strong>Canal de contato em configuração</strong><p>Um canal público será informado antes da abertura do site. Nenhum endereço de e-mail será exibido.</p></div>}
  </article>;
}
