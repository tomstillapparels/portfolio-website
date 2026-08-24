# Plan: TOMSTILL — Fast Client-Side React SPA

## Goal

Rebuild the uploaded `street_wholesale_industrial_grade_quality.html` as a polished React single-page application that loads once and never reloads — all navigation happens client-side (Gmail/Facebook model). The brand name is **TOMSTILL** (replacing the original "STREET_WHOLESALE" used throughout the uploaded HTML).

## How "no reload after first load" works here

The project runs on TanStack Start with TanStack Router. After the **first** HTML load, every route change is rendered client-side via the in-memory router — no full page reload, no server round-trip for navigation. That is exactly the Gmail/Facebook behavior you described. All product/content data is static and bundled into the client, so there is nothing to fetch per page.

You asked for "everything on the client side." The app will ship **zero server functions / no backend** — it is a pure front-end SPA. The only server involvement is serving the initial HTML shell; everything after that is client-side React.

## Design system (src/styles.css)

Port the uploaded brutalist industrial aesthetic into semantic tokens:

- **Font:** Archivo Narrow (loaded via `<link>` in `__root.tsx` head)
- **Palette (oklch):** warm cream background `#fff9ee`, deep ink primary `#3e3b32`, earth surface tones, `#28251d` brutalist borders, `#5c614d` secondary
- **Brutalist utilities:** `brutalist-border` (2px solid ink), `brutalist-button` (ink fill, press-translate), `active-nav` underline
- Sharp corners (`rounded-none`), 2px borders, uppercase tracking-tighter headlines

## Routes (each a separate file for clean client-side navigation + SEO)

- `/` — Showcase: hero (Industrial Grade Quality), New Arrivals product grid, Bulk Logistics stats band
- `/categories` — Inventory with sidebar filters + product grid (4 items)
- `/brand-story` — Heritage + Global Logistics sections
- `/inquiry` — Bulk inquiry form with success state (client-side only, no backend)

Shared `Header` (sticky, nav + search + Bulk Order CTA) and `Footer` live in `__root.tsx` around `<Outlet />`.

## Images

Replace the temporary `googleusercontent.com` URLs (they expire) with generated assets:

- 1 hero editorial image
- 3 "New Arrivals" product images
- 4 category product images
- 1 factory/brand-story image
  Saved to `src/assets/` and imported as ES6 modules.

## Head metadata

Each route gets its own `head()` with title, description, og:title, og:description. Root holds font preconnect/links + sitewide defaults.

## What I will NOT add

- No backend, no database, no auth (you asked for client-side only)
- No dark mode toggle
- No server functions

## Build order

1. Design tokens + brutalist utilities in `src/styles.css`, fonts in `__root.tsx`
2. Generate all images in parallel
3. Shared Header + Footer components
4. Four route pages porting the uploaded HTML's content/structure
5. Head metadata per route
6. Verify in preview (navigation, no reloads, responsive)
