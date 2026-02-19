# Ruthwik Arepelly Portfolio

Professional portfolio built with Astro and Tailwind CSS.

## 🚀 Deployment

The site is configured for GitHub Pages and deploys automatically via GitHub Actions on every push to `main`.

## 🔧 Personalization Instructions

### 1. Profile Photo
To add your own profile photo:
- Upload your image to `public/profile.jpg`.
- The site is configured locally to look for `/profile-placeholder.jpg` by default (which is currently a copy of the logo).
- You can either rename your file to `profile-placeholder.jpg` or update the `logo` path in `src/config.ts` to `/profile.jpg`.

### 2. Updating Content
All central content is managed in:
- `src/config.ts`: Use this to update your bio, social links, project list, and **Skill Categories**.
- The home page's **Selected Writing** section is dynamically fetched from your Medium RSS feed.

### 3. Medium Integration
The Medium integration is located in `src/pages/index.astro`. It uses `rss2json` (client-side fetch during build) to retrieve your latest 4 posts with their original featured images and publication dates.

## 🛠 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
