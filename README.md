# Ahmed Hany Portfolio

A personal portfolio website for Ahmed Hany — Flutter Developer & Full-Stack Developer.

Built with React + Vite + TypeScript, featuring dark/light mode, smooth animations, and full responsiveness.

---

## Features

- **Dark/Light theme** with system preference detection and localStorage persistence
- **Responsive design** — works on mobile, tablet, and desktop
- **Smooth animations** powered by Framer Motion (scroll-triggered, entrance animations)
- **Sticky navbar** with active section tracking and mobile hamburger menu
- **Sections**: Hero, About, Skills, Projects, Experience, Education, Contact
- **Accessible** — semantic HTML, ARIA labels, focus-visible states, reduced-motion support
- **SEO-ready** — meta tags, Open Graph, Twitter Card, proper heading hierarchy

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 8 |
| Animations | Framer Motion |
| Icons | React Icons |
| Styling | CSS Modules + CSS Custom Properties |
| Deployment | GitHub Pages / Vercel / Netlify |

---

## Project Structure

```
ahmed-hany-portfolio/
├── public/
│   ├── favicon.svg
│   └── Ahmed-Hany-CV.pdf        ← Place your CV here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.module.css
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── portfolio.ts          ← All content lives here
│   ├── hooks/
│   │   └── useInView.ts
│   ├── sections/
│   │   ├── Hero.tsx / Hero.module.css
│   │   ├── About.tsx / About.module.css
│   │   ├── Skills.tsx / Skills.module.css
│   │   ├── Projects.tsx / Projects.module.css
│   │   ├── Experience.tsx / Experience.module.css
│   │   ├── Education.tsx / Education.module.css
│   │   └── Contact.tsx / Contact.module.css
│   ├── App.tsx
│   ├── App.css
│   ├── index.css                 ← Design tokens & global styles
│   └── main.tsx
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
git clone https://github.com/ahmedhany-17/ahmed_hany_portfolio.git
cd ahmed_hany_portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is placed in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Adding Your CV

1. Export your CV as a PDF.
2. Rename it to `Ahmed-Hany-CV.pdf`.
3. Place the file inside the `public/` folder.
4. The "Download CV" button will automatically link to it.

---

## Deployment

### Option 1 — GitHub Pages with GitHub Actions (Automatic)

This repository includes a GitHub Actions workflow (`.github/workflows/static.yml`) that automatically builds and deploys on every push to `main`:
1. In your GitHub repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` — GitHub Actions will automatically build and publish your site.
4. Your site will be live at: `https://ahmedhany-17.github.io/ahmed_hany_portfolio/`

### Option 2 — Manual Deploy via gh-pages

If you prefer deploying via the `gh-pages` branch:
1. Run:
   ```bash
   npm run deploy
   ```
2. Go to your GitHub repo → **Settings → Pages** → set source to **Deploy from a branch** and select `gh-pages` branch.
3. Your site will be live at: `https://ahmedhany-17.github.io/ahmed_hany_portfolio/`

### Option 2 — Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com](https://vercel.com).
3. Set Framework Preset to **Vite**.
4. Change `base` in `vite.config.ts` to `'/'` for root deployment.
5. Deploy.

### Option 3 — Netlify

1. Push this repo to GitHub.
2. Import at [netlify.com](https://netlify.com), build command `npm run build`, publish directory `dist`.
3. Change `base` in `vite.config.ts` to `'/'` for root deployment.

---

## Customization

All portfolio content is stored in one file:

```
src/data/portfolio.ts
```

Update your personal info, projects, skills, and experience there. The UI updates automatically.

---

## Author

**Ahmed Hany**
- GitHub: [@ahmedhany-17](https://github.com/ahmedhany-17)
- LinkedIn: [ahmed-hany-dev](https://linkedin.com/in/ahmed-hany-dev)
- Email: ahmedhanyelsayede@gmail.com

---

## License

This project is open source and available under the [MIT License](LICENSE).
