# Kahlil Calavas

A personal portfolio: black, white, Lato, one real portrait, and a collection of worlds made with Future Lens.

## Development

Node 22.13+ is required. Run `npm ci`, then `npm run dev`. `npm run build` creates a static site in `dist/client` for Netlify. No runtime backend, analytics, account access, or environment secrets are required.

The site uses React, Vinext, and the existing Shadcn/Embla carousel. Navigation works with keyboard, touch, and the previous/next controls. It does not automatically advance.

## Content

`app/page.tsx` contains the biography and current projects. `app/tours.ts` contains the portfolio collection and original tour links. Edit the collection as new tours are published. The initial collection was checked against the live FutureLens.cloud site on September 24, 2026.

The biography draws on Kahlil’s latest available résumé (Google Docs, modified September 3, 2026), his LinkedIn profile and recent public posts, and his public Facebook tour announcement. Employment start dates differ across sources, so the site deliberately avoids asserting those dates. No contact lists, analytics, or full résumé are included.

Public source profiles:
- https://www.linkedin.com/in/kahlil-c-8839b5192/
- https://www.facebook.com/kahlil.calavas
- https://futurelens.cloud/
- https://github.com/pdxor

The portrait is Kahlil’s actual LinkedIn profile image, downloaded for reliable local hosting. The Netlify site is intended for `https://kahlilcalavas.netlify.app`.

The Future Lens and Future Lab sections use the official project pages. The October 3, 2026 Earth Tech gathering at Forest City Farms (3–11 PM Eastern) and event link were verified at https://thefuturist.network/futurelab on September 24, 2026. The recap uses the same public Future Lab / Accelerator film featured on The Futurist Network homepage and Future Lab page; its poster is hosted locally. The Future Lens illustration is an actual world-viewer capture from its public homepage.

## Boxboi 360° stories

The homepage’s `#boxboi-360` section presents nine 30-second films, with trip-hop music and sound effects and no narration. `app/boxboi-stories.tsx` embeds the public spherical playlist from [Cinemagraph Creator](https://equirectangular-cinemagraph-creator.netlify.app/360/). The original MP4s, posters, story descriptions, and player code live in the [creator repository](https://github.com/pdxor/equirectangular-cinemagraph-creator/tree/main/site/360), so there is one collection to maintain.

The iframe loads lazily and never starts video until the visitor presses play or chooses a story. It supports drag/touch/keyboard look-around, seeking, sound, fullscreen, next-story playback, optional collection looping, share links, and original 360° MP4 downloads. Resize messages are accepted only from the known player origin and the actual iframe window. No API keys or accounts are needed. The creator’s Content Security Policy explicitly allows this portfolio to embed the player.

## Personal timeline

The “View Kahlil’s timeline” callout opens a native modal dialog. `app/timeline-moments.ts` holds 13 selected moments from 2024–2026, their source links, image descriptions, credits, and themes. The story follows MIT Reality Hack, the incubator and accelerator, AWE, a UN STI Forum side event, EcoTerra visualization, modular architectural systems, EcoDome, a fundraising digital twin, the Boxboi official pilot, and Future Lab. Dates mark source publication unless an archive, catalog, or event date is explicitly labeled. The garden entry uses the fundraiser publication date, not a claimed twin creation date.

The overlay supports theme filters, year navigation, previous/next buttons, arrow keys, a photo index, and direct links such as `#timeline/ecodome-design` or `#timeline/boxboi-green-timeline`. Browser Back, Escape, and Close dismiss the overlay. Native dialog behavior keeps keyboard focus inside; closing restores focus and motion respects reduced-motion preferences. Images are locally hosted WebP assets. Original sources retain their Facebook or Drive access requirements. The matching ten-page PDF is downloadable from `/timeline/Kahlil-Calavas-Future-Lens-Timeline.pdf`.

`app/personal-timeline.tsx` contains interaction behavior; the adjacent CSS module scopes the mineral, teal, and Manrope treatment to this feature. Manrope is distributed under the included SIL Open Font License. No embeds, autoplay, or tracking services are added by the timeline.

## Technology logos

The technology carousel before the contact footer uses `app/technologies.json` and locally hosted assets in `public/technologies`. Its collection comes from the skills and experience in the September 3, 2026 résumé, plus the direct web/3D stack in Future Lens and this portfolio. Unity's AR Foundation and XR Interaction Toolkit, Snap's Spectacles/Lens Studio, and other product families are grouped under their platform marks. The list represents tools used across Kahlil's work, not certifications or endorsements.

`docs/technology-logo-sources.json` records the source of each logo. Marks come from Simple Icons, SVGL, and the respective products' websites or published assets; older Simple Icons marks are retained for tools named in the résumé. Logos keep their original geometry and are presented in monochrome with CSS. Simple Icons' CC0 license and SVGL's MIT license are included beside the assets; brand trademarks remain with their owners. No third-party image requests are needed to view the slider. Swipe, drag, keyboard arrows, or the previous/next buttons move through the collection without automatic scrolling.
