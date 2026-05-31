# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Phase 1: Foundation

## Current Goal

- Feature 04 (TBD per feature specs)

## Completed

- Feature 01: Design System — shadcn/ui configured (components.json, Tailwind v4, dark-only theme), 7 UI primitives installed (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), lucide-react installed, lib/utils.ts with cn() helper created, globals.css with full design token system. TypeScript clean (tsc --noEmit passes).
- Feature 02: Editor Chrome — `EditorNavbar` (fixed top bar, sidebar toggle with PanelLeftOpen/PanelLeftClose, left/center/right layout), `ProjectSidebar` (floating overlay, slide-in from left, Projects header + close button, My Projects/Shared tabs with empty states, New Project button), and `EditorDialog` (reusable wrapper over shadcn Dialog with rounded-3xl, bg-elevated, project token styling; supports title, description, footer). TypeScript clean.
- Feature 04: Project Dialogs & Editor Home — editor home (heading + description + New Project button), `useProjectDialogs` hook (dialog/form/loading state), Create/Rename/Delete dialogs via `EditorDialog`, sidebar project list with hover-reveal rename/delete actions (owned only; shared projects show no actions), mobile backdrop scrim in `EditorShell`, `ProjectDialogContext` to bridge editor page → shell. TypeScript clean.
- Feature 03: Auth — `@clerk/ui` installed; `ClerkProvider` with `dark` theme and CSS variable overrides wraps root layout; `middleware.ts` uses `clerkMiddleware` + `createRouteMatcher` to protect all routes except sign-in/sign-up paths derived from env vars; sign-in (`/sign-in/[[...sign-in]]`) and sign-up (`/sign-up/[[...sign-up]]`) pages with two-panel layout (left: logo/tagline/features, hidden on mobile; right: Clerk form); root `/` redirects authenticated users to `/editor` and unauthenticated to `/sign-in`; `UserButton` added to editor navbar right section. Build passes clean. Sidebar, navbar, and dialog fixed for Tailwind v4 JIT miss on `bg-elevated`, `bg-subtle`, `w-72`, `w-48`, `inset-y-0` — replaced with inline styles using `:root` CSS variables (see Architecture Decisions).

## In Progress

- None.

## Next Up

- Feature 05 (TBD per feature specs)

## Open Questions

- None yet.

## Architecture Decisions

- Dark-only theme: all CSS custom properties set directly on :root with no light/dark toggle.
- shadcn/ui CSS vars (--background, --foreground, etc.) are mapped to the project's design token values in globals.css.
- @theme inline in globals.css exposes both shadcn tokens and project-specific tokens as Tailwind utilities.
- components.json has tailwind.config set to empty string (correct for Tailwind v4 — no tailwind.config.js).
- Do not modify generated components/ui/* files.
- Next.js 16.2.6 deprecates `middleware.ts` convention in favor of `proxy.ts`. Using `proxy.ts` is now the standard for Clerk + Next.js 16. Restored `proxy.ts` from git; `middleware.ts` removed.
- Clerk appearance uses `theme: dark` from `@clerk/ui/themes` with CSS variable overrides — no hardcoded colors.
- Tailwind v4 JIT does not compile certain `@theme inline` token utilities (`bg-elevated`, `bg-subtle`, `w-72`, `w-48`, `inset-y-0`). Fix: use inline `style={{ backgroundColor: "var(--bg-elevated)" }}` etc. For hover states use arbitrary values: `hover:bg-[var(--bg-subtle)]`. The `:root` CSS variables are defined and work correctly — only the Tailwind utility generation is broken.

## Session Notes

- Stack: Next.js 16.2.6, React 19, Tailwind CSS v4, TypeScript strict mode.
- Path alias @/* maps to project root (tsconfig.json).
- All shadcn components live in components/ui/. Shared utilities in lib/.
