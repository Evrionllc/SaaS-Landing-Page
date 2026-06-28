# Klok — Time tracking for freelance designers

A fully responsive, production-quality landing page for a **fictional** SaaS
product, built as a portfolio piece. It demonstrates design systems thinking,
front-end fundamentals, accessibility, and modern tooling.

> **Klok is not a real product.** Every brand, person, quote, and statistic is
> invented. See [`CREDITS.md`](./CREDITS.md) for licensing and copyright notes.

**Live demo:** _add your deployed URL here_
**Repo:** _add your repository URL here_

![Klok landing page](docs/preview.png) <!-- optional: drop a screenshot here -->

---

## The case study

### Who it's for & the problem

Klok targets a deliberately narrow audience: **freelance designers and small
studios who bill by the hour**. The pain is specific — tracking time is
tedious, easy to forget mid-flow, and turning scattered hours into an invoice at
month-end is a chore. The whole page is organised around one promise: *track
billable hours without breaking your flow, then bill them in a click.*

A narrow audience makes every decision sharper — the copy ("⌥K to start a
timer", "know your real rate"), the mockup (a designer's project list), and the
pricing tiers (Solo → Studio → Collective) all speak to that one person.

### Design decisions

- **One reserved accent.** A single violet (`#7C5CFC`) is used *only* for CTAs
  and emphasis, against a warm off-white (`#FAFAF7`) and near-black ink. Visitors
  always know where the primary action is.
- **Designer-grade restraint.** Because the audience is designers, the page
  itself has to look designed: generous whitespace, a consistent 4/8px spacing
  rhythm, soft layered shadows, and a tight type scale pairing **Plus Jakarta
  Sans** (display) with **Inter** (body).
- **A believable, zero-weight hero.** The product mockup is built entirely in
  HTML/CSS rather than a screenshot — it stays razor-sharp on any display, adds
  no image payload, and sidesteps all licensing questions.
- **Clear hierarchy.** Each section follows headline → benefit → proof → action,
  and the primary CTA repeats down the page in the same accent.

### Tech stack & why

| Choice | Why |
| --- | --- |
| **Next.js (App Router)** | Production-standard React framework; the page prerenders to static HTML for fast loads and good SEO. |
| **TypeScript** | Type-safe components and data (features, plans, FAQs are typed data structures). |
| **Tailwind CSS v4** | The design system lives as CSS tokens in `@theme`, so colors/spacing/radii/shadows have one source of truth and the markup stays consistent. |
| **`next/font`** | Self-hosts Google Fonts at build time — no runtime third-party request. |
| **No UI/icon libraries** | Logo, icons, and mockup are hand-built SVG/CSS to keep the bundle tiny and the licensing clean. |

The result is a **fully static** site (`○ (Static) prerendered`) with ~106 kB
first-load JS — deployable to essentially any host.

### "Functional" front-end

- Sticky nav that gains a hairline + blur on scroll.
- Accessible **mobile menu** (`aria-expanded`/`aria-controls`, Escape to close,
  body-scroll lock).
- **Pricing toggle** that switches every tier between monthly and annual pricing.
- **FAQ accordion** built on native `<details>`/`<summary>` — keyboard-accessible
  and works with zero JavaScript.
- **Scroll-reveal** animations via `IntersectionObserver`, as pure progressive
  enhancement (content is fully visible without JS and respects
  `prefers-reduced-motion`).
- Smooth in-page anchor scrolling with sticky-nav offset.

CTAs are demo links (`#`) — this is a marketing page, not a real signup flow.
A real signup would need a backend or a form service; that's intentionally out
of scope and not faked.

### Accessibility

- Semantic landmarks (`header`/`main`/`footer`/`nav`), logical heading order.
- "Skip to content" link, visible keyboard focus styles throughout.
- `aria-*` on the menu and pricing switch; decorative SVG marked `aria-hidden`.
- Contrast-conscious palette; layout verified with a real 390px mobile viewport
  (no horizontal overflow — `scrollWidth === innerWidth`).

### Challenges & solutions

- **A Tailwind grid overflow trap.** Responsive grids that declare columns only
  at breakpoints (`lg:grid-cols-…`) fall back to a single *implicit* `auto`
  track on mobile, which sizes to `max-content` and can blow out the page width.
  Fixed by giving every grid an explicit `grid-cols-1` base (Tailwind's
  `minmax(0,1fr)`), which shrinks correctly.
- **Trusting the right measurement.** Headless Chrome clamps `--window-size`
  below ~500px, which produced misleading "clipped" screenshots. Verified the
  real layout with proper device emulation over the DevTools Protocol —
  `scrollWidth` came back at exactly 390px, confirming the layout was sound.

---

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

Requires Node 18.18+ (built and tested on Node 24).

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, skip-link, <html class="js">
│   ├── page.tsx          # composes the sections
│   └── globals.css       # design tokens (@theme) + base styles + animations
└── components/
    ├── Navbar.tsx        # sticky nav + accessible mobile menu  (client)
    ├── Hero.tsx          # headline, CTAs, social proof
    ├── HeroMock.tsx      # HTML/CSS product dashboard
    ├── SocialProof.tsx   # fictional customer wordmarks
    ├── Features.tsx      # 6 outcome-framed feature cards
    ├── HowItWorks.tsx    # 3-step flow
    ├── Pricing.tsx       # tiers + monthly/annual toggle      (client)
    ├── Testimonials.tsx  # 3 fictional quotes
    ├── FAQ.tsx           # native <details> accordion
    ├── FinalCTA.tsx      # closing CTA band
    ├── Footer.tsx        # links + self-made social icons
    ├── ScrollReveal.tsx  # IntersectionObserver enhancer       (client)
    ├── Logo.tsx          # wordmark
    └── ui/               # Container, Button, SectionHeading, icons
```

## Deploy

The app is fully static and host-agnostic.

- **Vercel (zero-config):** import the repo at vercel.com — it detects Next.js
  and deploys on every push, with a free `*.vercel.app` URL.
- **Other hosts (Netlify, Cloudflare Pages, etc.):** use their Next.js adapter,
  or add `output: "export"` to `next.config.ts` to emit a fully static `out/`
  folder you can drop on any static host or CDN.

After deploying, **test the live URL on a real phone and desktop**, then add the
URL to the top of this file.

> Provider free tiers and setup steps change over time — check current docs
> before relying on any specific one.

---

Built as a portfolio project. Fictional product; see `CREDITS.md`.
