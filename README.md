# Jus1mple Personal Homepage

Bilingual (ZH/EN), static, animation-light academic personal homepage built with React and Vite.

## Live Site

- [https://jus1mple.github.io/](https://jus1mple.github.io/)

## Tech Stack

- React `18`
- Vite `5`
- Tailwind CSS v4 browser runtime (CDN: `@tailwindcss/browser@4`)
- lucide-react
- clsx + tailwind-merge

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repository is intended for the GitHub user-page pattern (`<username>.github.io`), so Vite `base` is set to `/`.

For deployment, push the source to the default branch of:

- `git@github.com:Jus1mple/Jus1mple.github.io.git`

Then configure GitHub Pages in repo settings (or use GitHub Actions if you prefer automated build and deploy).

## Customize Content

Main profile data is managed in:

- `src/data/homeData.js`

## License

[MIT](./LICENSE)

