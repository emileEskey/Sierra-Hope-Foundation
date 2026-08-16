# Sierra Hope Foundation — Website

A 5-page informational website built with React (Vite) and React Router for
**Sierra Hope Foundation**, a fictional NGO / community-based organisation
working on health, education, and livelihoods programs across Sierra Leone.

Built for the UNIMTECH School of Technology React project brief.

## Pages

| Page | Route | Sections |
|---|---|---|
| Home | `/` | Hero, Mission & impact stats, Programs preview, Gallery teaser, CTA |
| About Us | `/about` | Hero, Our story, Vision & mission, Values, CTA |
| Programs | `/programs` | Hero, Program list, Our approach, CTA |
| Gallery | `/gallery` | Hero, Filterable image grid, Impact stats, CTA |
| Contact Us | `/contact` | Hero, Contact form & info, Map, CTA |

## Tech

- **Vite** — build tool
- **React 19**
- **react-router-dom** — page routing (`BrowserRouter`, `Routes`, `Route`)
- Plain CSS with a shared design-token file (`src/index.css`) — no framework

## Folder structure

```
src/
├── components/     # Header, Footer, PageHero, CTABand, StatStrip,
│                   # FeatureCard, GaraDivider (shared across pages)
├── pages/          # Home, About, Programs, Gallery, Contact
├── App.jsx         # Route table
├── main.jsx        # App entry + BrowserRouter
└── index.css       # Design tokens, base styles, utility classes
```

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- Images are placeholder photography served from `picsum.photos` — swap the
  `src` URLs in `src/pages/*.jsx` for real photography before going live.
- The contact form and map (OpenStreetMap embed) are front-end only; wire the
  form up to an email service or backend endpoint before production use.
