# Souha Jomaa — Portfolio (React + Tailwind)

A dark, violet-to-sky-blue cybersecurity-style landing page, built with React, Vite, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Deploy to GitHub Pages

### Option A — your main profile site (souhajomaa.github.io)

1. Create a GitHub repo named exactly `souhajomaa.github.io`.
2. Push this project's files to the `main` branch.
3. In the repo, go to **Settings → Pages**, and under "Build and deployment" choose **GitHub Actions** as the source.
4. The included workflow at `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`.
5. After the first run finishes (check the **Actions** tab), your site is live at `https://souhajomaa.github.io`.

`vite.config.js` is already set with `base: '/'`, which is correct for this case — no change needed.

### Option B — a project page (username.github.io/repo-name)

1. Create any repo, e.g. `my-portfolio`, and push this project to it.
2. In `vite.config.js`, change `base: '/'` to `base: '/my-portfolio/'` (match your repo name).
3. Same **Settings → Pages → GitHub Actions** step as above.
4. Your site will be live at `https://souhajomaa.github.io/my-portfolio/`.

## Project structure

```
index.html
src/
  main.jsx        entry point
  App.jsx          page sections (Nav, Hero, Pillars, Experience, Contact, Footer)
  index.css        Tailwind + custom gradient/glow utilities
tailwind.config.js  violet/sky color tokens
.github/workflows/deploy.yml   auto-deploy on push to main
```

## Customize

- Colors live in `tailwind.config.js` under `theme.extend.colors` (`violet`, `sky`, `ink`, `panel`, `line`).
- Content (experience, skill pillars, links) lives at the top of `src/App.jsx` in the `pillars` and `experience` arrays — edit the text there, no need to touch the JSX layout.
