# AI Coding Agent Instructions

These rules capture the key conventions and workflows for this React + Vite + TypeScript codebase so an AI agent can be immediately productive.

## Overview
- Stack: `React 19`, `TypeScript`, `Vite 6`, `react-router-dom` (HashRouter), `framer-motion`, `lucide-react`, `@emailjs/browser`.
- App structure: top-level `App.tsx` wraps pages with `components/Layout`. Routing uses `HashRouter` under `Routes` for `Home`, `Portfolio`, `Services`, `Contact`.
- UI patterns: utility class names are used inline; custom gold/black theme variables injected via a `<style>` block in `components/Layout.tsx`.
- Aliases: `@` maps to the project root per `vite.config.ts` and `tsconfig.json` (`"@/*": "./*"`).

## Dev & Build
- Commands (see `package.json`):
  - `npm run dev` -> start Vite dev server on `http://localhost:3000` (configured in `vite.config.ts`).
  - `npm run build` -> production build.
  - `npm run preview` -> preview built assets.
- Env handling: `vite.loadEnv` exposes env vars; `define` maps `process.env.API_KEY` and `process.env.GEMINI_API_KEY` to `env.GEMINI_API_KEY`. For dev, use `.env.local` with `GEMINI_API_KEY=...` if needed.

## Routing & Layout
- Router: `HashRouter` is used in `App.tsx`. Keep new routes compatible with hash-based navigation (no server-side routing needed).
- `Layout.tsx` provides header, mobile menu, footer, scroll-to-top button, and theme styles. Place page content inside `<Layout>{children}</Layout>`.
- Navigation items are defined as an array in `Layout.tsx`. When adding pages, update both `App.tsx` routes and `navLinks` in `Layout.tsx`.

## Components & Pages
- Pages live in `pages/` and are imported into `App.tsx` routes.
- Shared components live in `components/` (e.g., `Button`, `FloatingChatBot`, `Layout`). Prefer reusing existing patterns and props.
- `NewsletterPopup` inside `App.tsx` uses `EmailJS` and sessionStorage to show after 8s; maintain this UX if modifying.
- `FloatingChatBot` is always rendered at app root; follow its existing API when editing.

## EmailJS Integration
- Initialization: `emailjs.init('zSbkkYshdQuHBTiW3')` in `App.tsx`.
- Sending: `emailjs.send('service_7n2xmhb', 'template_ey44ho9', {...})` in `NewsletterPopup`.
- If refactoring, centralize EmailJS keys in env and use Vite `define` like other keys; do not log secrets.

## Styling Conventions
- Inline class names with a gold/black theme; see variables in `Layout.tsx` (`--color-gold`, etc.).
- Keep header/logo sizing logic (`scale-[3.5]`) to preserve brand visuals.
- Prefer small, composable components; avoid global CSS unless updating theme variables.

## TypeScript & Module Resolution
- `tsconfig.json` sets `jsx: react-jsx` and `moduleResolution: bundler`.
- Use the `@` alias for root-relative imports where helpful.
- Skip emitting; this is a purely frontend build (`noEmit: true`).

## Example Patterns
- Add a page: create `pages/About.tsx`, register `<Route path="/about" element={<About/>} />` in `App.tsx`, and add to `navLinks` in `Layout.tsx`.
- Use env key: add `MY_KEY=...` to `.env.local`, read via `import.meta.env.MY_KEY` or map through `define` in `vite.config.ts` if using `process.env.MY_KEY`.

## Safety & Secrets
- Keep `.env.local` out of VCS; never hardcode new secrets. Consider migrating existing EmailJS keys to env.
- The remote repo is private; follow `README.md` notes about revoking PATs and security hygiene.

## When Uncertain
- Source of truth files: `App.tsx`, `components/Layout.tsx`, `vite.config.ts`, `tsconfig.json`, `package.json`.
- Ask before changing routing type (HashRouter is intentional for static hosting).
