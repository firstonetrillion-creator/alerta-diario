# Guia rápido: colocar o Alerta Diário no Cloudflare Pages

O projeto já está configurado para gerar um site Next.js estático na pasta `out`. A prévia fica sem indexação, sem anúncios e sem os rascunhos locais. Para abrir o site ao público, primeiro conclua a revisão editorial e os dados de lançamento.

## 1. Preparar o GitHub

1. Crie um repositório no GitHub, por exemplo `alerta-diario`.
2. Envie **o conteúdo desta pasta** (`portal-noticias`) para a raiz do repositório.
3. Não envie `.env.local`, tokens do Sanity, nem a URL do Deploy Hook. O `.gitignore` já protege arquivos locais comuns; confira antes de enviar.

## 2. Criar o site no Cloudflare Pages

1. No painel Cloudflare, abra **Workers & Pages → Create application → Pages → Connect to Git** e conecte sua conta GitHub.
2. Escolha o repositório `alerta-diario` e a branch de produção `main`.
3. Escolha o preset **Next.js (Static HTML Export)** e confirme estas opções:
   - Comando de build: `npm run build`
   - Pasta de saída: `out`
   - Versão Node: `22.12.0` (variável `NODE_VERSION`)
4. Clique em **Save and Deploy**. O Cloudflare instala os pacotes, roda o build e cria um endereço de prévia `*.pages.dev`.

Use `npm run build` como comando: ele executa primeiro o bloqueio de segurança do projeto e depois gera a exportação estática. A documentação do Cloudflare usa o preset de exportação estática do Next.js e a pasta `out`.

## 3. Configurar o CMS e as variáveis

1. Crie um projeto e um dataset `production` no Sanity. Configure o Studio seguindo a seção Sanity do `README.md` e importe os rascunhos pelo computador local. **Não coloque o token de escrita do Sanity no Cloudflare.**
2. Em **Workers & Pages → seu projeto → Settings → Environment variables**, adicione as variáveis `NEXT_PUBLIC_*` listadas em `.env.example` e `NODE_VERSION=22.12.0`. Ignore `SANITY_WRITE_TOKEN`: ele é somente local e nunca deve ser enviado ao Cloudflare.
3. Mantenha inicialmente `NEXT_PUBLIC_PUBLICATION_READY=false`, as aprovações editoriais em `false` e o AdSense desligado. O endereço `NEXT_PUBLIC_SITE_URL` fica em branco até definir o domínio completo, por exemplo `https://alertadiario.online`.
4. Use `NEXT_PUBLIC_EDITORIAL_OWNER=Alerta Diário`. Para contato, informe um canal HTTPS em `NEXT_PUBLIC_EDITORIAL_CONTACT_URL` (formulário, WhatsApp ou página social); o site não exibe e-mail.

## 4. Conectar publicações do Sanity ao Cloudflare

1. No Pages, abra **Settings → Builds → Add deploy hook** e crie um hook para a branch `main`.
2. No Sanity, abra **Settings → Webhooks**, crie um webhook para o dataset `production` e cole a URL do hook do Cloudflare.
3. Configure o webhook para acionar builds quando uma matéria for publicada, atualizada ou retirada. Restrinja-o ao tipo `article`.
4. Trate a URL do hook como senha: guarde-a somente na configuração protegida do webhook do Sanity.

## 5. Liberar o domínio e abrir o site

1. Defina o domínio completo com final `.online`, registre-o e adicione-o em **Workers & Pages → seu projeto → Custom domains**. Para domínio raiz, como `alertadiario.online`, o Cloudflare pede que a zona e os nameservers sejam configurados na própria Cloudflare.
2. Revise e aprove as 15 matérias no Sanity: autoria, fontes, checagem factual, data e direitos das imagens. Confira também as páginas institucionais e as políticas com informações verdadeiras.
3. Preencha `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_EDITORIAL_CONTACT_URL` e as aprovações editoriais somente depois da revisão. Marque `NEXT_PUBLIC_PUBLICATION_READY=true` por último; o build bloqueia a publicação se faltarem dados obrigatórios ou 15 matérias completas.
4. Confirme HTTPS, navegação, busca, páginas, sitemap, RSS e que rascunhos não aparecem. Só solicite AdSense quando o site estiver público e completo; ligue anúncios apenas após aprovação e configuração de consentimento.

O plano Free do Pages permite até 500 builds por mês, um build simultâneo e até 20 mil arquivos no site. Uma publicação diária cabe no limite de builds; agrupe alterações editoriais para evitar reconstruções extras desnecessárias.

## Documentação oficial

- [Next.js: exportação estática](https://nextjs.org/docs/app/guides/static-exports)
- [Cloudflare: publicar Next.js estático](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Cloudflare: integração com GitHub](https://developers.cloudflare.com/pages/get-started/git-integration/)
- [Cloudflare: variáveis de ambiente e build](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Cloudflare: limites do Pages](https://developers.cloudflare.com/pages/platform/limits/)
- [Cloudflare: Deploy Hooks e Sanity](https://developers.cloudflare.com/pages/configuration/deploy-hooks/)
- [Cloudflare: domínio personalizado](https://developers.cloudflare.com/pages/configuration/custom-domains/)
