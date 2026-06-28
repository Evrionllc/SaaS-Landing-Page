# Credits & Licenses

This is a **fictional product** built as a portfolio piece. Every brand, person,
testimonial, customer, and statistic on the page is invented. Klok is not a real
service and is not affiliated with any real company.

## Third-party assets

| Asset | Source | License | Usage |
| --- | --- | --- | --- |
| **Inter** (font) | Google Fonts (Rasmus Andersson) | SIL Open Font License 1.1 | Body & UI text, self-hosted at build time via `next/font` |
| **Plus Jakarta Sans** (font) | Google Fonts (Tokotype) | SIL Open Font License 1.1 | Headings / display, self-hosted at build time via `next/font` |
| **Next.js** | Vercel | MIT | Framework |
| **React** | Meta | MIT | UI library |
| **Tailwind CSS** | Tailwind Labs | MIT | Styling |

## Self-made assets (no third-party license)

- **Logo** — original "Klok" wordmark + clock glyph, hand-built as inline SVG.
- **Icons** — the entire icon set is hand-drawn inline SVG (`src/components/ui/icons.tsx`). No third-party icon packs are used.
- **Product mockup** — the hero dashboard is built entirely in HTML/CSS (`src/components/HeroMock.tsx`). No screenshots or stock images.
- **Illustrations / decoration** — gradients, dot grids, and avatar swatches are pure CSS.
- **Copy** — all marketing copy was written for this project.

## Copyright hygiene notes

- No real company names or logos are shown as customers. The "customer" and
  testimonial brands (Møller Studio, Fernweh, Pilo Labs, Northbound, Atelier
  Goro, Verso) are fictional.
- Testimonial people and quotes are invented; avatars are CSS gradients, not
  photos of real people.
- The name "Klok" was chosen as a generic, coined wordmark for this demo. If you
  fork this for real use, verify trademark availability yourself.
- No paid or proprietary fonts, icons, or images are used.

_Fonts are bundled at build time by `next/font`, so the deployed site makes no
runtime request to Google Fonts (good for performance and privacy)._
