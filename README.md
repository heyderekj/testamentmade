# testamentmade.com

Static holding page for **[testamentmade.com](https://testamentmade.com)** — [Testament Made LLC](https://testamentmade.com) apps with links suitable for App Store developer-site requirements.

Built with [Astro](https://astro.build) (static output) and deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## App icons

Icons are committed under `public/icons/` (not loaded from GitHub at runtime).

| App     | Source |
|---------|--------|
| Dinky   | [heyderekj/dinky](https://github.com/heyderekj/dinky) — `AppIcon.icon/Assets/AppIcon 2.png` on `main` |
| Binky   | [heyderekj/binky](https://github.com/heyderekj/binky) — same path on `main` |
| Harvous | [harvous.com](https://github.com/heyderekj/harvous.com) — `public/images/harvous-2-icon.png` |
| ReviseMy | [heyderekj/revisemy](https://github.com/heyderekj/revisemy) — `public/images/app-icon.png` |
| Koati   | The woven-tile K mark, resized to 512px (`koati-2.png`) |
| Here’s My Church | Cropped from [heresmychurch](https://github.com/heyderekj/heresmychurch) `public/og-image.png` (the repo has no large icon yet) |

To refresh icons: download the latest files from those paths, replace `public/icons/{dinky,binky,harvous,revisemy,koati-2,heresmychurch}.png`, then commit.

> `public/_headers` caches icons and the favicon for a year (`immutable`). If you change one, give the file a new name (`koati-2.png` → `koati-3.png`) and update where it's referenced, or browsers and Cloudflare will keep serving the old copy.

## Content

App names, links, and blurbs live in [`src/data/apps.ts`](src/data/apps.ts).
