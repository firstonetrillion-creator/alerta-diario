# Alerta Diário

Portal de notícias em Next.js, com exportação estática para Cloudflare Pages e CMS Sanity. A versão atual é uma **prévia editorial**: as 15 matérias iniciais são rascunhos com referências oficiais, aguardando conferência e aprovação humana. Ela desativa indexação e anúncios até a configuração de lançamento.

## Rodar localmente

Requer Node.js 22.12 ou superior.

1. Copie `.env.example` para `.env.local`.
2. `npm install`
3. `npm run dev`

Sem configuração do Sanity, o site usa os 15 rascunhos locais. Eles aparecem com aviso de revisão e não entram no sitemap ou RSS. A newsletter é apenas informativa e não coleta e-mails.

## Configurar Sanity

1. Crie um projeto/dataset `production` na sua conta Sanity e coloque o ID em `NEXT_PUBLIC_SANITY_PROJECT_ID`.
2. Copie `.env.example` para `.env.local`, preencha os valores públicos do projeto e rode `npm run studio`.
3. Entre no Studio, confira as editorias e crie o perfil público real do autor/responsável editorial.
4. Gere um token de escrita local, guarde-o como `SANITY_WRITE_TOKEN` em `.env.local` e rode `npm run content:seed`. O script cria as 15 matérias como documentos **drafts**. Nunca coloque esse token em variável `NEXT_PUBLIC_*` ou no GitHub.
5. Em cada draft, atribua o autor, confirme fontes e fatos, confira dados que possam ter mudado, preencha `Última checagem factual`, inclua créditos de imagem se usar uma e só então preencha `Publicar em`.
6. Publique o Studio hospedado com `npm run studio:deploy`, se quiser acessá-lo em um endereço `*.sanity.studio`.

O build público busca apenas matérias com `publishedAt` e exige 15 matérias publicadas quando `NEXT_PUBLIC_PUBLICATION_READY=true`. Datasets do plano gratuito têm limites; monitore as cotas no painel Sanity.

## Publicar em Cloudflare Pages

1. Envie esta pasta para um repositório GitHub e conecte o repositório ao Cloudflare Pages.
2. Selecione o preset **Next.js (Static HTML Export)**, build command `npm run build`, diretório de saída `out` e Node.js 22.12+.
3. Configure as variáveis de ambiente do `.env.example` no Cloudflare. Enquanto faltarem contato/editor, políticas revisadas e 15 matérias aprovadas, mantenha `NEXT_PUBLIC_PUBLICATION_READY=false`.
4. Conecte o domínio no painel Cloudflare e confira HTTPS e DNS antes da abertura pública.
5. Crie um Deploy Hook para a branch de produção. Cadastre a URL como segredo em um webhook do Sanity que dispare apenas quando uma matéria aprovada for publicada, alterada ou removida. Não salve a URL em arquivo público.

O plano gratuito do Cloudflare Pages informa limite de 500 builds por mês. Publicar conteúdo aciona um novo build estático, portanto um dia de edição pode agrupar várias matérias antes de acionar o hook.

## Lançamento e AdSense

- Configure `NEXT_PUBLIC_EDITORIAL_OWNER` como `Alerta Diário` e informe um canal público HTTPS em `NEXT_PUBLIC_EDITORIAL_CONTACT_URL` (por exemplo, um formulário, WhatsApp ou página social). Nenhum endereço de e-mail é exibido pelo site. Conclua as páginas Sobre, Contato, Correções e Privacidade e revise a política conforme os dados e serviços efetivamente usados e a LGPD.
- Só marque `NEXT_PUBLIC_EDITORIAL_POLICY_APPROVED`, `NEXT_PUBLIC_PRIVACY_POLICY_APPROVED` e `NEXT_PUBLIC_CORRECTIONS_POLICY_APPROVED` como `true` depois de revisar essas páginas.
- Só marque `NEXT_PUBLIC_PUBLICATION_READY=true` quando o site, domínio e HTTPS estiverem prontos e existirem 15 matérias aprovadas com fontes, autoria e data de revisão.
- Solicite aprovação do AdSense com o site público e completo. Depois da aprovação, configure o client ID, os dois slots de anúncio e um mecanismo de consentimento adequado. Somente então use `NEXT_PUBLIC_ADSENSE_APPROVED=true` e `NEXT_PUBLIC_ADSENSE_CONSENT_READY=true`.
- O valor de 15 matérias é a meta de lançamento deste projeto, não uma garantia de aprovação do AdSense.

## Estrutura

- `app/`: páginas de notícias, editorias, autores, páginas institucionais, SEO, RSS e sitemap.
- `lib/seed-articles.ts`: 15 rascunhos editoriais iniciais com fontes institucionais.
- `sanity/`: modelos de matérias, autores e editorias.
- `scripts/seed-sanity.ts`: importação dos rascunhos para o dataset como drafts.
- `docs/fluxo-editorial.md`: rotina diária de apuração, revisão humana e publicação manual.
- `docs/guia-rapido-cloudflare-pages.md`: passos para GitHub, Cloudflare Pages, Sanity, domínio e abertura pública.
- O guia de design do portal fica em `../alerta-diario-design-skill/`.
"# alerta-diario"  
