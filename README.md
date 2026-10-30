# Bottons & Cia — site para GitHub Pages

Site estático convertido do canvas "Bottons & Cia | Novo site" (página inicial, produtos, empresa, dúvidas, contato e privacidade). Não há build nem dependências: basta enviar os arquivos.

## Estrutura

```
index.html                  página inicial
paginas/
  empresa.html
  produtos.html             catálogo com filtros
  duvidas.html
  contato.html              formulário de orçamento
  privacidade.html
produtos/                   uma página por produto (10)
assets/
  site.js                   filtros de produtos e controle do formulário
  img/                      imagens (webp/png)
  fonts/                    fontes Bottons Display / Bottons Text (woff2)
.nojekyll
```

Não entraram neste pacote, de propósito: `mapa-301` (uso interno, marcado "não publicar") e `pin-resinado-oryzo` (cópia de teste).

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `bottons-e-cia`).
2. Envie todo o conteúdo desta pasta para a raiz do repositório (inclusive `.nojekyll`).
3. Em **Settings → Pages**: *Source* = *Deploy from a branch*, branch `main`, pasta `/ (root)`.
4. O site ficará em `https://SEU-USUARIO.github.io/bottons-e-cia/`.

Para usar `botonsecia.com.br`: em **Settings → Pages → Custom domain**, informe o domínio e configure o DNS no provedor (CNAME apontando para `SEU-USUARIO.github.io`).

## Antes de publicar (pendências do próprio canvas)

- **Pedidos mínimos:** o canvas indica botton americano 150; pin resinado, porta-crachá e mouse pad 100; pin em relevo e chaveiros 300; pin de acrílico 500; adesivo sob consulta; campanha e segurança "a partir de 100, conforme o modelo". Confirme com a Bottons: o site atual mostra segurança do trabalho e campanha linha padrão a partir de 1 unidade.
- **Nomes e depoimentos de clientes** (Shopee, Airbnb, LATAM, Lenovo, Incalfer Máquinas, Great Place to Work): estão ocultos. Só ligue a opção `marcasAutorizadas` no canvas com autorização por escrito. A foto principal mostra pins da GPTW: sem autorização, troque a foto.
- **Política de privacidade** ainda tem campos em aberto em `paginas/privacidade.html`: razão social, CNPJ, nome do encarregado, ferramentas de análise e anúncios, prazo de guarda dos orçamentos e data de publicação. Recomendo revisão jurídica.
- **Formulário de orçamento:** o GitHub Pages não processa envios. Em `paginas/contato.html` e na página inicial, troque `SEU_ID_AQUI` no `action` por um endpoint (ex.: Formspree). Enquanto isso, o formulário mostra um aviso e não envia.
- **Redirecionamentos 301 (mapa do canvas):** o GitHub Pages não cria redirecionamentos 301. Os endereços antigos (ex.: `/botton-americano`) precisarão de outra solução, como manter o domínio antigo em outro serviço ou criar páginas de redirecionamento. Para o SEO, esse ponto é importante.
- **Domínio:** o canonical de cada página aponta para `botonsecia.com.br`. Isso só fica correto depois que o domínio estiver apontado para o GitHub Pages.

## Observações técnicas

- O conteúdo foi renderizado a partir do canvas e salvo como HTML estático. Os filtros da página de produtos e da inicial funcionam via `assets/site.js`.
- Se editar o texto ou o layout, faça a mudança no canvas e gere de novo, ou edite os arquivos HTML diretamente.
