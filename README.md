# TB. Manon Jaya Putra

Minimal SvelteKit project.

## Development

```bash
pnpm install
pnpm dev
```

## Checks

```bash
pnpm check
pnpm build
```

## Cloudflare Pages

This project is configured for Cloudflare Pages with `@sveltejs/adapter-cloudflare`.

Cloudflare Pages settings:

```text
Framework preset: SvelteKit
Build command: pnpm build
Build output directory: .svelte-kit/cloudflare
Node.js version: 22
```

Local Cloudflare preview:

```bash
pnpm preview:cloudflare
```

Manual deployment with Wrangler:

```bash
pnpm deploy
```
