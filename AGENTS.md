# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router (routes, layouts, metadata).
- `app/components/`: Reusable UI (PascalCase), e.g., `StructuredData.tsx`.
- `app/api/contact/route.ts`: Email handler using Resend.
- `public/`: Static assets (SVGs, icons).
- `app/globals.css`: Global styles with Tailwind (via PostCSS).
- Config: `eslint.config.mjs`, `next.config.ts`, `tsconfig.json`.
- Env: `.env.local` for `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO`.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server at `http://localhost:3000` (Turbopack).
- `npm run build`: Create a production build (Turbopack).
- `npm start`: Run the built app in production mode.
- `npm run lint`: Lint the codebase using Next + TypeScript ESLint config.

## Coding Style & Naming Conventions
- Language: TypeScript (strict). Prefer 2‑space indent, semicolons, and ES modules.
- Components: PascalCase filenames in `app/components/` (e.g., `HeroSection.tsx`).
- Routes: Use Next.js App Router conventions (`page.tsx`, `layout.tsx`, `route.ts`).
- Imports: Use `@/*` path alias for root‑relative imports where appropriate.
- Styling: Tailwind CSS utility classes; co-locate styles in components when possible.
- Linting: Keep `eslint.config.mjs` rules passing before pushing.

## Testing Guidelines
- Current repo has no tests. Prefer:
  - E2E: Playwright in `tests/` (`*.spec.ts`).
  - Unit/UI: React Testing Library with Vitest/Jest (`*.test.tsx`).
- Add a `test` script (e.g., `playwright test`) when introducing tests. Ensure `lint` and `build` pass in CI.

## Commit & Pull Request Guidelines
- Commits: Follow Conventional Commits: `feat:`, `fix:`, `refactor:`, `docs:` (seen in history). Examples: `feat: add contact form validation`, `docs: update README`.
- PRs: Include a clear summary, linked issues, and screenshots for UI changes. Note any env or migration steps. Keep PRs focused and small. All checks (`lint`, `build`) must pass.

## Security & Configuration Tips
- Never commit secrets. Use `.env.local` for `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO`.
- Validate and sanitize inputs in API routes; avoid logging sensitive data.
- For deploys (e.g., Vercel), set required env vars in the platform dashboard.

