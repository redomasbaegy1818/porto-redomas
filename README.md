# Redomas Baegy Hardianathan — Portfolio

Personal developer portfolio showcasing web development projects, public information systems, and front-end engineering.

Built with Next.js, TypeScript, Tailwind CSS, GSAP, and Lenis.

---

## Tech Stack

- **Framework:** Next.js (App Router, Static Site Generation)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Animation & Motion:** GSAP (ScrollTrigger) & Lenis Smooth Scroll
- **Deployment:** Vercel

---

## Project Structure

```text
├── public/
│   ├── cv.pdf               # Resume / CV
│   └── images/              # Project previews & portrait
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout & font configuration
│   │   ├── page.tsx         # Homepage
│   │   └── proyek/[slug]/   # Case study detail pages
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, SmoothScroll
│   │   ├── sections/        # Hero, Projects, About, Skills, Experience, Contact
│   │   └── ui/              # Custom cursor, marquee, magnetic buttons
│   ├── data/                # Content data (projects, skills, experience, site config)
│   └── hooks/               # Custom hooks
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run local development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## Deploy to Vercel

The project is optimized for deployment on Vercel:

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. The framework preset (Next.js) will be automatically detected.
4. Click **Deploy**.

---

## License

Created by [Redomas Baegy Hardianathan](https://github.com/redomasbaegy1818).
