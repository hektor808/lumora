# Lumora | My Dream City

Premium English project website for Bekir Ozan Demir, an 11th grade Equal Weight student at TED Konya College.

## Project

- Topic: My Dream City
- City name: Lumora
- Tagline: The City Where Nature, Technology, and Human Dreams Live Together
- Teacher: Merve Kılıçoğlu
- School: TED Konya College

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js with React Three Fiber and Drei
- Lucide React icons

## Run Locally

```bash
npm install
npm run dev
```

On this Windows machine, use `npm.cmd` from PowerShell if script execution blocks `npm.ps1`:

```bash
npm.cmd install
npm.cmd run dev
```

## Quality Checks

```bash
npm run lint
npm run build
```

## GitHub Pages Deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Push your code to the `main` branch.
2. In GitHub, go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Wait for the **Deploy to GitHub Pages** workflow to complete.
5. Your site will be published at:
   - `https://<username>.github.io/<repository>/` for project pages
   - `https://<username>.github.io/` for user/organization pages

`vite.config.ts` automatically sets the correct base path during GitHub Actions builds.

The 3D city scene is lazy-loaded so the main page bundle stays responsive while preserving the cinematic hero experience.
