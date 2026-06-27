# Image slots — drop your real assets here

Replace these placeholders with your final brand assets, then update the
references noted below.

| File to add (this folder) | Used for | Where to wire it |
|---|---|---|
| `logo.svg` or `logo.png` | Header/footer logo (Variant A: yellow + green) | Swap the CSS mark in `src/components/Logo.tsx` for `next/image` pointing at `/logo.svg` |
| `logo-red.svg` | Optional red alert/variant B | Use only as an alert accent if needed |
| `og-image.png` (1200×630) | Social share preview (Open Graph / Twitter) | Add `images: ["/og-image.png"]` to `openGraph` and `twitter` in `src/app/layout.tsx` |
| `aegis-dashboard.png` | Real product screenshot | Replace the illustrative mockup block in `src/app/page.tsx` (Featured Product) and on `src/app/solutions/page.tsx` |
| `favicon.ico` | Browser tab icon | Optional — an SVG icon already exists at `src/app/icon.svg` |

Notes:
- `logo-placeholder.svg` is a stand-in only — safe to delete once `logo.svg` is in.
- Keep PNGs optimised (use an SVG logo where possible for crisp scaling).
