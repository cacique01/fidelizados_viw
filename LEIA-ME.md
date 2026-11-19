# Fidelizados — versão de demonstração (somente visualização)

Site 100% estático: sem login, sem Firebase, sem Cloudflare Worker, sem banco e sem chamadas externas (exceto fontes do Google).
Todos os dados são fictícios e ficam em `js/demo-data.js` (perfil, ranking, clientes e movimentações).

- `index.html`: área do cliente (Início, Conteúdo, Produtos, Guias, Ranking)
- `admin.html`: painel administrativo de demonstração (o formulário não salva nada)
- `guias/`: PDFs de exemplo gerados para a demo (não são os guias reais)

## Testar localmente
    Basta dar dois cliques em index.html (funciona direto no navegador).

## Publicar
Arraste esta pasta no Netlify (deploy manual) ou use `npx wrangler pages deploy .` no Cloudflare Pages.
Para trocar nomes, pontos ou textos, edite `js/demo-data.js`.
