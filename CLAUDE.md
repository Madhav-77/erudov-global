# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Production build (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # ESLint
npm run typecheck    # Type-check without emitting (tsc --noEmit)
```

There are no tests configured in this project.

## Architecture

**Erudov Global** is a React + TypeScript SPA (Vite, Tailwind CSS) for international student career counseling — 10 destination regions, cost-of-living calculators, and a WhatsApp contact channel.

### Navigation

There is no React Router. Navigation is handled via browser `CustomEvent`s:

- Components dispatch `new CustomEvent('navigate', { detail: { page, regionId } })` on `window`
- `App.tsx` listens for these events and switches between `'home'` and `'region'` views
- Adding a new page means adding a branch in `App.tsx` and dispatching the event from wherever the link lives

### Data

All region/university/visa/cost data lives in `src/constants/regions.ts` as TypeScript constants (no API). The `Region` interface there is the canonical shape for all region data passed to components.

Forex rates in `src/components/Calculators.tsx` are also hardcoded.

`@supabase/supabase-js` is installed as a dependency but is not yet wired up anywhere.

### Key files

| File | Role |
|------|------|
| `src/App.tsx` | Top-level router; owns `currentPage` + `selectedRegion` state |
| `src/constants/regions.ts` | All static data; `Region` type definition |
| `src/pages/RegionDetail.tsx` | Tabbed detail view for a single region |
| `src/components/Header.tsx` | Nav bar; region selector dropdown; triggers navigation events |
| `src/components/Calculators.tsx` | Living-cost and forex calculators (local state, hardcoded rates) |

### TypeScript config

Strict mode is on with `noUnusedLocals` and `noUnusedParameters` — the linter will reject unused imports and variables.
