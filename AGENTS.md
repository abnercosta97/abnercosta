# Repository Guide

## Project Shape

- This is one React 18 + TypeScript + Vite SPA, not a workspace. The runtime path is `src/main.tsx` -> `src/App.tsx` -> `src/pages/Home/Home.tsx`.
- `Home.tsx` assembles a single scrolling page. Navbar links depend on the Portuguese section IDs `sobre`, `skills`, and `projetos`; change links and IDs together.
- MUI and Emotion are the styling system. Global palette and responsive typography live in `src/Theme.ts`; most component styling currently uses MUI `sx` or `styled`.
- Portfolio content is local data: projects are in `src/service/projects.ts`, skills are in `src/service/skillsData.ts`, and their public images are under `public/`. `useProjects` only simulates loading with a 500 ms timeout; there is no API.
- `AnimatedBackground` is intentionally mounted only at the `md` breakpoint and above.

## Commands

- Install exactly from the committed npm lockfile with `npm ci`.
- Run locally with `npm run dev`; inspect the production output with `npm run build && npm run preview`.
- Before finishing code changes, run `npm run lint`, `npx tsc -b`, then `npm run build`. Vite's build does not perform the repository's TypeScript project check.
- There is no test runner or CI workflow configured. Do not report automated tests as passing unless one is added.
- `npm run deploy` only publishes the existing `dist/` directory to `gh-pages`; always run `npm run build` first. `dist/` is generated and gitignored.

## Deployment And Routing

- Production is hosted below `/abnercosta/`, as set by `base` in `vite.config.ts`. For files in `public/`, build URLs from `import.meta.env.BASE_URL` without adding another leading slash; root-absolute URLs break on GitHub Pages.
- The portfolio currently has no router even though `react-router-dom` is installed. `App.tsx` renders `Home` directly, and navigation is hash-based within the page.
- The planned blog has no content format, CMS, Markdown pipeline, or route structure yet. When implementing it, keep the existing portfolio as the home page and account for the GitHub Pages subpath and direct-page refresh behavior before choosing browser-based routing.

## Refactoring Priorities

- Preserve the Portuguese UI and responsive behavior while improving the portfolio; content currently mixes Portuguese and English, so normalize copy deliberately rather than incidentally.
- Recheck asset URLs when touching project data: existing entries use inconsistent slash placement around `import.meta.env.BASE_URL`.
- Several components create `styled(...)` components inside render functions. Move those definitions to module scope when refactoring affected files to avoid recreating component types on every render.
