# Portfólio Abner Costa

SPA React + TypeScript + Vite publicada no GitHub Pages em `/abnercosta/`. O portfólio usa MUI/Emotion, dados locais para projetos e um blog com artigos Markdown em `content/blog/`.

## Desenvolvimento

```bash
npm ci
npm run dev
```

Validação completa:

```bash
npm run lint
npx tsc -b
npm run build
```

O build valida o frontmatter dos artigos e gera páginas estáticas em `dist/blog/`. O preview de produção pode ser iniciado com `npm run preview`.

## Conteúdo

- Projetos: `src/service/projects.ts`
- Skills: `src/service/skillsData.ts`
- Artigos: `content/blog/*.md`
- Assets públicos: `public/`

Artigos publicados precisam de `title`, `slug`, `summary`, `publishedAt`, `tags` e `draft` no frontmatter. Slugs duplicados ou inválidos interrompem o build.

## Publicação

`npm run deploy` executa lint, TypeScript e build antes de publicar `dist/` via `gh-pages`. Todos os recursos públicos devem respeitar a base `/abnercosta/`; não use caminhos absolutos iniciados por `/` para assets.
