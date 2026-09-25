# Kahlil Calavas

A personal portfolio: black, white, Lato, one real portrait, and a collection of worlds made with Future Lens.

## Development

Node 22.13+ is required. Run `npm ci`, then `npm run dev`. `npm run build` creates a static site in `dist/client` for Netlify. No runtime backend, analytics, account access, or environment secrets are required.

The site uses React, Vinext, and the existing Shadcn/Embla carousel. Navigation works with keyboard, touch, and the previous/next controls. It does not automatically advance.

## Content

`app/page.tsx` contains the biography and current projects. `app/tours.ts` contains the portfolio collection and original tour links. Edit the collection as new tours are published. The initial collection was checked against the live FutureLens.cloud site on September 24, 2026.

The biography draws on Kahlil’s latest available résumé (Google Docs, modified September 3, 2026), his LinkedIn profile and recent public posts, and his public Facebook tour announcement. Employment start dates differ across sources, so the site deliberately avoids asserting those dates. No private posts, contact lists, analytics, or full résumé are included.

Public source profiles:
- https://www.linkedin.com/in/kahlil-c-8839b5192/
- https://www.facebook.com/kahlil.calavas
- https://futurelens.cloud/
- https://github.com/pdxor

The portrait is Kahlil’s actual LinkedIn profile image, downloaded for reliable local hosting. The Netlify site is intended for `https://kahlilcalavas.netlify.app`.
