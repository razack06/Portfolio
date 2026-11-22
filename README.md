# Abdul Razack P R — Portfolio

Personal developer portfolio for a Java Backend Developer. Built with **React + Vite + Tailwind CSS v4** and **Framer Motion**. Warm cream light design with serif headings (DM Serif Display), Plus Jakarta Sans body text, handwritten notes (Caveat) and pastel cards.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev       # http://localhost:5173 with hot reload
npm run build     # production build in dist/ (prerendered HTML)
npm run preview   # serve the production build at http://localhost:4173
```

## Edit content

**All text lives in [`src/data/profile.js`](src/data/profile.js).** You don't need to touch any component.

| What | Where in `profile.js` |
| --- | --- |
| Name, hero headline, tagline, badges, handwritten notes, summary | `profile` |
| Email, phone, LinkedIn, GitHub | `contact` |
| About section stat list | `aboutStats` |
| "Skills & Services" cards | `services` |
| Projects (card label + colour, summary, tags, Problem → Built → Result, diagram, links) | `projects` |
| Experience cards (testimonial style) | `journey` |
| Full job bullets (opened by "View details" on the job card) | `experience` |
| Section labels and titles, CTA banner text, footer tagline | `headings` |
| Navbar / footer links | `nav` |
| SEO title, description, site URL | `site` |

- Search the file for `TODO` to find every placeholder.
- An empty string (`''`) hides the related element. A project's **GitHub** / **Live demo** buttons appear once you set `links.github` / `links.demo`. Setting `contact.github` adds a GitHub icon and a "View All Projects" link.
- **Card colours:** `tone` is one of `peach`, `blue`, `mint`, `lavender`.
- **Photos:** `public/photo.webp` is the transparent cut-out in the hero (640×800). `public/photo-bw.webp` is the square black-and-white photo in About. Replace the files to change them.
- **Resume:** replace `public/Abdul_Razack_Java_Backend_Developer.docx`. If you change the file name, update `profile.resumeFile`.
- **Architecture diagrams:** each project's `diagram` lists `stages` (columns on desktop, rows on mobile) holding `nodes`, plus `edges` between node or stage ids. Use `{ from, to, bi: true }` for a two-way link. The layout is automatic. The card thumbnail shows the same data flow as pills.
- The SEO and Open Graph tags in `index.html` are generated from `site` / `profile` at build time. `public/og-image.png` is the link-preview image (1200×630).

## Deploy

### Option A: GitHub Pages (already configured)

1. Push this repo to GitHub.
2. Open the repo's **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Push to `main`. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes the site automatically.
4. The site appears at `https://<username>.github.io/<repo>/`. The workflow sets the correct base path for you. A repo named `<username>.github.io` is served from the root.
5. Put the final URL in `site.url` inside `profile.js` so canonical and Open Graph links are absolute, then push again.

### Option B: Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Vercel detects Vite automatically: build command `npm run build`, output directory `dist`. No extra config is needed.
3. Deploy, then put the Vercel URL in `site.url` and push.

## Project structure

```
index.html                    HTML shell (SEO tags + photo preload injected from profile.js)
vite.config.js                Vite + React + Tailwind + SEO injector
scripts/prerender.js          writes the rendered page into dist/index.html after the build
public/                       resume, photos, favicon, og-image, robots.txt
src/
  data/profile.js             ← all content
  Root.jsx, main.jsx          app + providers; main.jsx hydrates the prerendered HTML
  entry-server.jsx            build-time render entry
  index.css                   colours, fonts, pill buttons, pastel tones, animations
  hooks/useActiveSection.js   navbar highlight
  components/
    layout/                   Navbar (+ Logo), Footer
    sections/                 Hero, About, Services, Projects, Journey (experience), Cta (contact)
    projects/                 ProjectCard, ProjectThumb, ProjectModal, ArchitectureDiagram, diagramLayout
    ui/                       Section, Dialog, Reveal, Socials, Decor (squiggle, sparks, arrows, notes, plants), Chip, Icon
legacy/                       previous static HTML version of the site (safe to delete)
```

## Accessibility and performance notes

- Semantic landmarks, skip link, visible focus rings, and keyboard support. Dialogs trap focus, close on Esc, and return focus to the button that opened them.
- Animations (floating badges, squiggle draw-in, scroll reveals, card lifts) respect `prefers-reduced-motion`.
- Decorations are `aria-hidden`. Diagrams include a text description for screen readers.
- `npm run build` **prerenders** the page: the HTML ships with all content already in it (fast first paint on phones, fully readable by crawlers), and React hydrates it on load.
- Avoid `filter: blur` on large elements and animated `background-position`. Both made phones measurably slower during development.
