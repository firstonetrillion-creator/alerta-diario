import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacidade' };

export default function PrivacyPage() {
  const ready = process.env.NEXT_PUBLIC_PUBLICATION_READY === 'true';
  const contactUrl = process.env.NEXT_PUBLIC_EDITORIAL_CONTACT_URL;
  return <article className="text-page">
    <span className="eyebrow">PRIVACIDADE</span><h1>Política de privacidade</h1>
    {!ready && <div className="contact-card"><strong>Rascunho — não é uma política final</strong><p>Preencha esta página com as práticas reais do site e revise-a antes de ativar anúncios, analytics, newsletter ou qualquer coleta de dados.</p></div>}
    <p>O portal deve informar quem é responsável pelo tratamento de dados, quais dados são coletados, para que são usados, por quanto tempo são mantidos, com quem são compartilhados e como as pessoas podem exercer seus direitos.</p>
    <h2>Dados e tecnologias</h2><p>Na versão de prévia, o site não envia o formulário de newsletter e não ativa analytics ou anúncios. Antes de incorporar qualquer serviço, atualize esta política para descrever os dados, cookies e tecnologias de terceiros realmente utilizados, incluindo os recursos de publicidade do Google se o AdSense for ativado.</p>
    <h2>Contato e direitos</h2><p>Para questões de privacidade, use {contactUrl ? <a href={contactUrl} target="_blank" rel="noreferrer">o canal oficial de contato ↗</a> : 'o canal de contato que será informado antes do lançamento'}. Esta política deve ser revisada sempre que novas ferramentas forem adicionadas.</p>
  </article>;
}
