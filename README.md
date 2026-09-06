# helenhsong.github.io

Personal site, built with React, TypeScript, and Vite.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Outputs to `dist/`.

## Deploy

Pushing to `main` builds and publishes `dist/` via the GitHub Actions workflow in
[.github/workflows/deploy.yml](.github/workflows/deploy.yml). In the repo's
**Settings → Pages**, set the source to **GitHub Actions**.
