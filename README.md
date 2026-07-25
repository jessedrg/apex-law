# apexdot.io — landing page

Next.js 15 (App Router, TypeScript). Single-page marketing site for Apexdot legal search.

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
```

## Deploy

Push to a Git repo and import it on Vercel — no configuration needed. `npm run build` also
produces a standard Node build for any host that runs `npm start`.

## Where to edit

- `app/page.tsx` — all copy, the mandate list, and the practice-area list (top of the file).
- `app/globals.css` — colors, type scale, keyframes for the hero animation.
- Photos are hot-linked from Unsplash via `next/image` (allow-listed in `next.config.mjs`).
  Swap in your own by dropping files in `public/` and pointing `src` at `/your-file.jpg`.

## Before going live

- Replace `hello@apexdot.io`, the phone number, and the LinkedIn URL.
- Replace the sample mandates with real (non-confidential) ones.
- Add real `/privacy` and `/terms` routes — the footer links are placeholders.
