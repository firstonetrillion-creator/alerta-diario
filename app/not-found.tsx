import Link from 'next/link';
export default function NotFound() {
  return <section className="article-not-found"><span className="eyebrow">404 · PÁGINA NÃO ENCONTRADA</span><h1>Não encontramos esta página.</h1><p>O endereço pode ter mudado ou a matéria ainda não foi publicada.</p><Link href="/">Voltar ao início ↗</Link></section>;
}
