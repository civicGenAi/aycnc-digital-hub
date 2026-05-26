
# AYCNC Website Build Plan

Your prompt was written for **Vite + React Router DOM + Tailwind v3**. This Lovable project is **TanStack Start (file-based routing) + Tailwind v4 (CSS-first theme, oklch tokens)**. I'll keep 100% of your design intent, content, and section specs — but adapt the plumbing so it actually builds and ships on this stack.

## Stack adaptations (non-negotiable for this project)

- **Routing**: TanStack Router file routes under `src/routes/` instead of `<BrowserRouter>/<Routes>`. Files: `index.tsx`, `about.tsx`, `programme.tsx`, `apply.tsx`, `partners.tsx`, `impact.tsx`, `news.tsx`, `contact.tsx`. 404 handled by root `notFoundComponent` (TanStack convention). Each route gets its own `head()` meta.
- **Tailwind v4**: theme tokens go in `src/styles.css` via `@theme inline` + `:root`, using `oklch()`. Your hex palette (navy `#1B3A6B`, forest `#2A7A4B`, gold `#F5A623`, cream `#FBF7EF`, ink `#4A5568`) converted to oklch tokens — same visual result. Custom utilities (`gradient-text-gold`, `svg-deco`, `noise`, `bg-hero-mesh`, `bg-dark-mesh`) and keyframes (`shimmer`, `floatY`, `pulse2`, `marquee`) added in `styles.css` via `@theme` + `@layer utilities`.
- **Fonts**: Fraunces / DM Sans / Space Mono loaded via `<link>` in `__root.tsx` head (TanStack pattern), not `@import` in CSS.
- **Dependencies to install**: `framer-motion`, `react-hook-form`, `zod`, `@hookform/resolvers`, `react-intersection-observer`, `react-countup`, `clsx`, `tailwind-merge`. (`lucide-react` is already present, `react-router-dom` is NOT used.)
- **Links/Nav**: TanStack `<Link to="/...">` instead of RR-DOM. `useLocation` from `@tanstack/react-router` for active states.
- **No `src/pages/` directory** (TanStack uses `src/routes/`). I'll keep your component split: `src/components/layout/`, `src/components/home/`, `src/components/ui/`, `src/constants/`.

## Content & design fidelity (preserved verbatim)

- All copy: every headline, eyebrow, body paragraph, module description, KPI, partner tier, news item, 404 copy — pasted exactly from your prompt.
- Writing rule enforced: zero em dashes / `---` separators; middle dot (·) and "to" for ranges, audited across all pages.
- All 8 pages + 404 with every specified section, in your specified build order.
- HeroSlideshow: 5 slides, 6s autoplay, 1s crossfade, Ken Burns scale, AnimatePresence text stagger, indicator dots, progress bar, stats bar — all per spec. Unsplash image URLs used as given.
- SVG decorations per page theme (circles/dots, rings, arcs/spirals, particles, network, charts, typographic, envelope/pin), all `.svg-deco` z-0 max opacity 0.18.
- Glassmorphism cards, diagonal clip-path splits, bento grid for modules, multi-step form with Zod validation, 55 AU member states list, CountdownTimer, marquee footer, mobile sticky Apply bar, governance hierarchy diagram, KPI dashboard with count-ups.
- Mobile-first at 390px: single-column collapses, 44px touch targets, opaque hero overlay, sticky gold Apply bar after hero (except `/apply`).

## Build order (matches yours, adapted to TanStack file names)

1. `styles.css` (theme + utilities + keyframes), font links in `__root.tsx`, install deps
2. `src/constants/` — `heroSlides.ts`, `programmeData.ts`, `auMemberStates.ts`
3. `src/components/ui/` — SectionEyebrow, SectionTitle, AnimatedSection, StatCard, PillBadge, CountdownTimer, GoldRule
4. `Navbar.tsx`, `Footer.tsx`
5. `HeroSlideshow.tsx` (carefully)
6. Route files in order: `index` → `about` → `programme` → `contact` → `partners` → `impact` → `news` → `apply`
7. `__root.tsx` notFoundComponent = full 404 page per spec
8. Verify build, all 9 routes, mobile width, font loading, no em-dashes

## Out of scope / clarifications

- **No backend**: Apply form does client-side validation + shows success screen. No Lovable Cloud / DB / email sending unless you ask. (Your prompt doesn't specify a submission endpoint.)
- **Images**: Using the Unsplash URLs you provided for hero. No AI-generated imagery unless you want me to swap them.
- **Languages**: EN/FR/AR shown as footer labels only (no i18n implementation) — matches your spec.
- **Analytics / SEO JSON-LD**: not in your spec, skipping.

This is a ~25–35 file build. I'll execute it straight through once you approve. Confirm or tell me to tweak (e.g., "swap Unsplash for generated images", "wire Apply form to Lovable Cloud", "skip a page").
