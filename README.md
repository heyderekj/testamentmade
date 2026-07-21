# testamentmade.com

Static holding page for **[testamentmade.com](https://testamentmade.com)** — [Testament Made LLC](https://testamentmade.com) apps with links suitable for App Store developer-site requirements.

Built with [Astro](https://astro.build) (static output) and deployed on [Netlify](https://www.netlify.com/).

## App icons

Icons are committed under `public/icons/` (not loaded from GitHub at runtime).

| App     | Source |
|---------|--------|
| Dinky   | [heyderekj/dinky](https://github.com/heyderekj/dinky) — `AppIcon.icon/Assets/AppIcon 2.png` on `main` |
| Binky   | [heyderekj/binky](https://github.com/heyderekj/binky) — same path on `main` |
| Harvous | [harvous.com](https://github.com/heyderekj/harvous.com) — `public/images/harvous-2-icon.png` |
| ReviseMy | [heyderekj/revisemy](https://github.com/heyderekj/revisemy) — `public/images/app-icon.png` |

To refresh icons: download the latest files from those paths, replace `public/icons/{dinky,binky,harvous,revisemy}.png`, then commit.

## Content

App names, links, and blurbs live in [`src/data/apps.ts`](src/data/apps.ts).
