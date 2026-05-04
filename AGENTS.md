# Repository Guidelines

## Project Structure & Module Organization

This is a minimal SvelteKit landing page for TB. Manon Jaya Putra.

- `src/routes/+page.svelte`: main landing page, copy, metadata, JSON-LD, and page styles.
- `src/app.html`: HTML shell, favicon links, manifest link, and Google Tag Manager snippets.
- `static/`: public assets served from the site root, including icons, `robots.txt`, `sitemap.xml`, `llms.txt`, and web manifest.
- `scripts/generate-og-images.js`: generates `static/og/home.png` for Open Graph/Twitter SEO.
- `screenshot/`: local Chrome DevTools screenshots; this folder is ignored by Git.
- Cloudflare Pages configuration lives in `svelte.config.js` and `wrangler.jsonc`.

There is currently no dedicated test directory.

## Build, Test, and Development Commands

Use `pnpm`.

```bash
pnpm dev
```

Runs the SvelteKit dev server on `0.0.0.0:3000`.

```bash
pnpm check
```

Runs `svelte-kit sync` and `svelte-check`.

```bash
pnpm generate:og
```

Regenerates the social preview image in `static/og/`.

```bash
pnpm build
```

Generates the OG image and builds the Cloudflare Pages output.

```bash
pnpm preview:cloudflare
pnpm deploy
```

Preview or deploy the Cloudflare Pages build with Wrangler.

## Coding Style & Naming Conventions

- Use tabs for indentation in Svelte, TypeScript, and JavaScript files, matching the existing code.
- Keep public copy in Indonesian unless there is a clear SEO/configuration reason to use English.
- Use descriptive constants for shared business data, URLs, product groups, and SEO fields.
- Keep styles scoped inside `+page.svelte` unless a shared global stylesheet becomes necessary.
- Before finalizing Svelte changes, run:

```bash
npx @sveltejs/mcp svelte-autofixer ./src/routes/+page.svelte --svelte-version 5
```

## Testing Guidelines

Automated unit or browser tests are not configured yet. For now:

- Run `pnpm check` for every code change.
- Run `pnpm build` after SEO, asset, Cloudflare, or script changes.
- For visual changes, inspect the page in Chrome at desktop size `1440x1000` and save screenshots under `screenshot/`.

## Commit & Pull Request Guidelines

Recent commits use short, imperative messages, for example:

- `Remove hero image block`
- `Update product availability copy`
- `Add SEO metadata and crawler files`

Keep commits focused and describe the user-visible change. Pull requests should include a short summary, validation commands run, screenshots for visual changes, and any deployment or SEO notes.

## Security & Configuration Tips

Do not commit secrets or Cloudflare tokens. Keep public business configuration in source only when it is intended for the website. If the production domain changes, update canonical URLs, sitemap, JSON-LD, Open Graph URLs, and `llms.txt` together.
