# Chayangkoon Tachao — Portfolio

A modern, production-ready personal portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Utilities | clsx, tailwind-merge |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata & fonts
│   └── page.tsx            # Home page — composes all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with scroll-spy & mobile menu
│   │   └── Footer.tsx      # Minimal footer
│   └── ui/
│       ├── BackToTop.tsx   # Animated back-to-top button
│       ├── CustomCursor.tsx# Custom cursor with ring follower
│       ├── GlassCard.tsx   # Reusable glassmorphism card
│       ├── ScrollProgress.tsx # Top scroll progress bar
│       └── SectionHeader.tsx  # Animated section headings
│
├── sections/               # Full-page sections (one per route section)
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   └── ContactSection.tsx
│
├── layouts/
│   └── MainLayout.tsx      # Wraps all sections with Navbar + Footer
│
├── data/
│   └── index.ts            # All content data — edit here to update the site
│
├── hooks/
│   ├── useScrollSpy.ts     # Active nav link detection
│   ├── useScrollProgress.ts# Scroll progress percentage
│   ├── useTheme.ts         # Dark/light mode toggle + persistence
│   └── useReveal.ts        # IntersectionObserver reveal helper
│
├── types/
│   └── index.ts            # All TypeScript interfaces
│
├── utils/
│   └── cn.ts               # clsx + tailwind-merge helper
│
└── styles/
    └── globals.css         # CSS custom properties, Tailwind directives
```

## Features

- ✅ Dark / Light mode with localStorage persistence
- ✅ Smooth scroll & scroll-spy active nav
- ✅ Custom animated cursor
- ✅ Scroll progress indicator
- ✅ Framer Motion reveal animations
- ✅ Animated counters (GPA, projects, years)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO metadata via Next.js Metadata API
- ✅ TypeScript strict mode throughout
- ✅ All content centralized in `src/data/index.ts`
- ✅ Deploy-ready for Vercel / Netlify

## Updating Content

All site content lives in **`src/data/index.ts`**. Edit that file to update:

- Personal info (name, role, tagline)
- Education details
- Skills and categories
- Projects (name, description, tech stack, links)
- Experience timeline
- Achievements
- Contact info and social links

## Deployment

### Vercel (recommended)
```bash
npx vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder, or connect your Git repo in Netlify dashboard
```
