# TODO: Update project URLs to use slugs (kebab-case)

**Goal:** Introduce human-friendly slugs for project URLs while preserving backward compatibility with existing numeric IDs.

- [x] Add `slug?: string` to `src/data/projects.ts` and populate slugs for a few projects (started: `project-1`, `project-2`, `project-3`).
- [ ] Add `slug` values for all projects (kebab-case, lowercase).
- [ ] Update `getStaticPaths()` in `src/pages/projects/[projectId].astro` and `src/pages/work/[category]/[projectId].astro` to use `project.slug ?? project.id` and include legacy `project.id` paths for compatibility.
- [ ] Update link builders in `src/components/ProjectGrid.astro` and `src/components/HighlightsCarousel.astro` to use `project.slug ?? project.id`.
- [ ] Add redirects (301) for legacy and non-canonical URLs:
  - `/projects/project-#` → `/projects/{slug}`
  - `/work/{category}/project-#` → `/work/{category}/{slug}`
- [ ] Smoke-test routes, breadcrumbs, and images; add minimal tests.
- [ ] (Optional) Plan and schedule asset folder rename from `public/projects/project-#` → `public/projects/{slug}` in a later task.

**Acceptance criteria:**
- Old URLs redirect to canonical slug URLs (301).
- Internal links use slugs where present.
- No broken images or missing assets.
- A linked Issue or GitHub Project card tracks remaining work.

**Notes:**
- Initial code changes were applied to add `slug` support for three projects and update routes/components to use slug fallback + redirects. Run the dev server and verify pages for `project-1`, `project-2`, `project-3` (both legacy and slug URLs) to confirm.
- Added behavior: categories with exactly one project now perform a server-side redirect (301) from `/work/{category}` to `/work/{category}/{project-slug-or-id}`. Category tiles on `/work` will link directly to the project page when there is only a single project to avoid an extra redirect round-trip.

**Manual test checklist (quick verification):**
- [ ] Visit `/work/blueprint` → should 301 to `/work/blueprint/{slug}`.
- [ ] Click the Blueprint tile on `/work` → should land on the project page directly (no flicker or intermediate redirect when tile href is updated).
- [ ] Visit a multi-project category (e.g., `/work/making`) → should render the category listing.
- [ ] Confirm project pages still use canonical URLs and meta tags as expected.
