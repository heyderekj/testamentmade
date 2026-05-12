# testamentmade.com

Static holding page for **[testamentmade.com](https://testamentmade.com)** — [Testament Made LLC](https://testamentmade.com) apps with links suitable for App Store developer-site requirements.

Built with [Astro](https://astro.build) (static output) and deployed on [Netlify](https://www.netlify.com/).

## Develop

```bash
git clone https://github.com/heyderekj/testamentmade.git
cd testamentmade
npm install
npm run dev
```

- **Build:** `npm run build` (output in `dist/`)
- **Preview:** `npm run preview`

## Netlify

1. New site from Git → connect **heyderekj/testamentmade**
2. Build: `npm run build`, publish directory: `dist`
3. `netlify.toml` sets **Node 20** to match common project defaults
4. Add custom domain **testamentmade.com** and enable HTTPS

## App icons

Icons are committed under `public/icons/` (not loaded from GitHub at runtime).

| App    | Source |
|--------|--------|
| Dinky  | [heyderekj/dinky](https://github.com/heyderekj/dinky) — `AppIcon.icon/Assets/AppIcon 2.png` on `main` |
| Binky  | [heyderekj/binky](https://github.com/heyderekj/binky) — same path on `main` |
| Harvous | [heyderekj/harvous](https://github.com/heyderekj/harvous) — **`native-prototype`** branch, `native/Harvous/Assets.xcassets/AppIcon.appiconset/Icon-iOS-Default-1024x1024@1x.png` |

> There is no `native` branch on the Harvous remote; the native app assets live under the `native/` directory on **`native-prototype`**. If that branch is renamed or merged, update the copy step and this table.

To refresh icons: download the latest files from those paths, replace `public/icons/{dinky,binky,harvous}.png`, then commit.

## Content

App names, links, and blurbs live in [`src/data/apps.ts`](src/data/apps.ts).
