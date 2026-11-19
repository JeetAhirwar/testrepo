# Master Issue Register & Defect Log (`error.md`)

**Project:** EduHawk Study Abroad Website  
**Live URL:** https://eduhawkwebsite.vercel.app/  
**Maintained By:** Senior Frontend Developer, UI/UX Designer & QA Lead  
**Audit & Remediation Date:** November 2026  
**Overall Status:** All Identified Critical, High, and Medium Issues FIXED & VERIFIED  

---

## Issue Summary Matrix

| Issue ID | Page / Area | Category | Severity | Status | Verification Result |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **TECH-001** | Global Build / Linting Environment | Technical | Critical | **Verified** | `eslint.config.js` refactored; zero module crashes |
| **SEO-001** | XML Sitemap & Route Discovery | SEO | High | **Verified** | 123 routes added; `sitemap.xml` now holds 674 URLs |
| **TECH-002** | Vercel Deployment & SPA Routing | Technical | High | **Verified** | Catch-all rewrite added to `vercel.json` |
| **IMG-001** | UK Postgraduate Hub (`/study-abroad/uk/pg/engineering`) | Image / CMS | Medium | **Verified** | 4 image references aligned with disk files in `pg_hub.json` |
| **NAV-001** | Country Hub Routes (`/study-abroad/:country`) | UI/UX / Routing | Medium | **Verified** | 14 country base routes added in `routes.jsx` |
| **CONTENT-001**| MBBS in Armenia (`/mbbs-abroad/armenia`) | SEO / Technical | Low | **Verified** | Canonical normalized; 301 permanent redirect preserved |
| **CODE-001** | USA Course Pages & `CoursePageKit.jsx` | Technical / QA | Medium | **Verified** | Undeclared props removed; 0 ESLint errors project-wide |
| **IMG-002** | Sweden & UK Study Abroad Course Pages (53 pages) | Image / CMS | High | **Verified** | Campus images bound across 39 Sweden & 14 UK pages; global fallback safety net added |

---

## Detailed Issue Records

### Issue ID: TECH-001
- **Page Name:** Global Build / Linting Environment
- **Live URL:** https://eduhawkwebsite.vercel.app/
- **Issue Category:** Technical
- **Severity:** Critical
- **Problem Description:** Running `npm run lint` crashed immediately with:
  `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './config' is not defined by "exports" in eslint/package.json`.
- **Expected Behavior:** `npm run lint` should parse all project JSX/JS files and report clean code quality diagnostics without fatal module resolution errors.
- **Actual Behavior:** The script failed on startup due to an invalid export import in `eslint.config.js`.
- **Root Cause:** `eslint.config.js` imported `{ defineConfig, globalIgnores } from 'eslint/config'` (ESLint 9+ exclusive export), whereas package dependencies lock ESLint at `^8.55.0` (`8.57.1` installed).
- **Recommended Fix:** Refactor `eslint.config.js` to export a standard ESLint 8 flat config array `export default [...]` without importing the unexported `./config` subpath.
- **Status:** **Verified** (Tested with `npm run lint`; runs cleanly).

---

### Issue ID: SEO-001
- **Page Name:** XML Sitemap (`sitemap.xml`)
- **Live URL:** https://eduhawkwebsite.vercel.app/sitemap.xml
- **Issue Category:** SEO
- **Severity:** High
- **Problem Description:** 123 live pre-rendered Study Abroad course pages across Mauritius, Denmark, and Sweden were completely absent from `sitemap.xml`.
- **Expected Behavior:** Every publicly indexable page on the site (all 674 active URLs) must be indexed in `sitemap.xml` with verified component `lastmod` timestamps.
- **Actual Behavior:** Only 552 routes were exported by `routeList` in `src/routes/routes.jsx` and subsequently generated into `sitemap.xml`.
- **Root Cause:** When Mauritius (41 routes), Denmark (41 routes), and Sweden (41 routes) were integrated into the router, they were omitted from the exported `routeList` constant at the bottom of `src/routes/routes.jsx` and from `generate-sitemap.cjs`.
- **Recommended Fix:** Append all 123 Mauritius, Denmark, and Sweden routes to `routeList` in `src/routes/routes.jsx` and synchronize `generate-sitemap.cjs`.
- **Status:** **Verified** (`node generate-sitemap.cjs` generated `public/sitemap.xml` with exactly 674 verified URLs).

---

### Issue ID: TECH-002
- **Page Name:** Vercel Hosting & Deep Linking Configuration
- **Live URL:** https://eduhawkwebsite.vercel.app/
- **Issue Category:** Technical
- **Severity:** High
- **Problem Description:** Directly accessing any non-prerendered client-side route or dynamic URL returned a Vercel 404 error page.
- **Expected Behavior:** Any URL requested that does not match a physical static asset should rewrite to `/index.html` allowing React Router DOM to hydrate and render the appropriate page.
- **Actual Behavior:** `vercel.json` rewrites only explicitly matched `/landingpage` and `/blog/:slug*`, lacking a general SPA fallback rewrite.
- **Root Cause:** Missing catch-all fallback rewrite in `vercel.json`.
- **Recommended Fix:** Add `{ "source": "/(.*)", "destination": "/index.html" }` to the `rewrites` array in `vercel.json`.
- **Status:** **Verified** (Updated `vercel.json` with fallback rewrite rule).

---

### Issue ID: IMG-001
- **Page Name:** UK Study Abroad PG Hub
- **Live URL:** https://eduhawkwebsite.vercel.app/study-abroad/uk/pg/engineering
- **Issue Category:** Image / CMS
- **Severity:** Medium
- **Problem Description:** Four university image paths in `src/data/study_abroad/uk/pg_hub.json` referenced filenames with incorrect numeric suffixes that did not exist in `public/uploads/study_abroad/uk/`, producing broken image icons.
- **Expected Behavior:** All university cards on the UK PG hub must display valid, sharp campus images.
- **Actual Behavior:** JSON referenced:
  1. `uk_computer_science_University_of_Oxford-image1.png` (Disk has `...-image4.png`)
  2. `uk_computer_science_Cambridge_University-image2.png` (Disk has `...-image1.png`)
  3. `uk_computer_science_London_s_Imperial_College-image3.png` (Disk has `...-image2.png`)
  4. `uk_computer_science_London_s_University_College__UCL_-image4.png` (Disk has `uk_computer_science_London_s_University_College-image3.png`)
- **Root Cause:** Initial CMS seed data suffix mismatches.
- **Recommended Fix:** Update the four image references in `src/data/study_abroad/uk/pg_hub.json` across both top-level and section-level university lists.
- **Status:** **Verified** (Verified with automated asset scanner; 0 missing images remain).

---

### Issue ID: NAV-001
- **Page Name:** Top-Level Country Hubs (e.g. Study in Denmark, Study in Australia)
- **Live URL:** https://eduhawkwebsite.vercel.app/study-abroad/denmark
- **Issue Category:** UI/UX / Routing
- **Severity:** Medium
- **Problem Description:** When a user navigated to `/study-abroad/denmark`, `/study-abroad/australia`, or other country base slugs, a 404 "Page Not Found" screen appeared because router only registered course-level leaves.
- **Expected Behavior:** Top-level country paths should gracefully direct the user to that country's primary engineering / undergraduate course directory (e.g. `/study-abroad/denmark/ug/engineering`).
- **Actual Behavior:** 404 screen was presented.
- **Root Cause:** No route entry for base country paths in `src/routes/routes.jsx`.
- **Recommended Fix:** Implement clean redirection routes for all 14 study abroad destinations in `src/routes/routes.jsx`.
- **Status:** **Verified** (Added clean redirects for Denmark, Sweden, Mauritius, Switzerland, Germany, France, Ireland, UK, Spain, Canada, Italy, Australia, Finland, and USA in `src/routes/routes.jsx`).

---

### Issue ID: CONTENT-001
- **Page Name:** MBBS in Armenia
- **Live URL:** https://eduhawkwebsite.vercel.app/mbbs-abroad/armenia
- **Issue Category:** SEO / Technical
- **Severity:** Low
- **Problem Description:** Component file name `Armernia.jsx` and legacy route alias `/mbbs-abroad/armernia` contained a spelling typo ("Armernia").
- **Expected Behavior:** Route and component names should follow clean, professional English spelling standards.
- **Actual Behavior:** Legacy route existed alongside 301 redirect in `vercel.json`.
- **Root Cause:** Historical typo in component naming.
- **Recommended Fix:** Ensure clean canonical metadata on `/mbbs-abroad/armenia` and maintain 301 redirect from the legacy URL.
- **Status:** **Verified** (Canonical URL verified as `/mbbs-abroad/armenia`; 301 permanent redirect active in `vercel.json`).

---

### Issue ID: CODE-001
- **Page Name:** USA Course Pages, `CoursePageKit.jsx`, and `computer-science.jsx`
- **Live URL:** https://eduhawkwebsite.vercel.app/study-abroad/usa/architecture
- **Issue Category:** Technical / QA
- **Severity:** Medium
- **Problem Description:** 14 USA course pages passed undeclared `heroBgImg`, `ctaBgImg`, `imgDims` props, causing ESLint `no-undef` errors; `CoursePageKit.jsx` had unnecessary regex escapes; and `computer-science.jsx` had unsafe optional chaining syntax.
- **Expected Behavior:** Zero lint errors across all 600+ components.
- **Actual Behavior:** 34 syntax and reference errors flagged by linter.
- **Root Cause:** Unused prop checks and unescaped character class hyphens.
- **Recommended Fix:** Clean undeclared prop references, normalize regex patterns, and use safe array validation for FAQs.
- **Status:** **Verified** (Verified with `npx eslint src/ --quiet`; exit code 0, 0 errors).

---

### Issue ID: IMG-002
- **Page Name:** Sweden & UK Study Abroad Course Pages (53 pages, e.g., `/study-abroad/sweden/biotechnology`, `/study-abroad/sweden/architecture`, `/study-abroad/uk/architecture`)
- **Live URL:** https://eduhawkwebsite.vercel.app/study-abroad/sweden/biotechnology
- **Issue Category:** Image / CMS
- **Severity:** High
- **Problem Description:** On 39 Sweden pages and 14 UK pages, university cards in the "Top Universities" / "Best Universities" section were displaying without campus photography, either showing blank solid gradient fallback cards (`<SolidUniversityCard />`) or failing to resolve images.
- **Expected Behavior:** Every university card in the university grid should feature an authentic, high-resolution campus photo (e.g. Karolinska Institutet, KTH, Lund, Chalmers, Uppsala, Oxford, Cambridge, Imperial College, etc.).
- **Actual Behavior:** In Sweden pages, `"img_var": "null"` was scaffolded into local JSON and JSX data and CMS university bindings were omitted from `dynamicPage`. In UK pages, static definition blocks lacked explicit image attributes.
- **Root Cause:** 
  1. Scaffolding artifact where `"img_var": "null"` was output instead of photo references.
  2. `AbroadCoursePage` checked only `s.unis` and did not recognize `s.unis_data`.
  3. `UniversityGrid` rendered a solid card whenever `imgSrc` was missing or `"null"` without attempting keyword-based campus image resolution.
- **Recommended Fix:** 
  1. Add `resolveCampusFallback` inside `CoursePageKit.jsx` mapped to authentic campus photos.
  2. Support both `s.unis` and `s.unis_data` in `AbroadCoursePage`.
  3. Update all 39 Sweden pages to bind `cmsData.universities` and `cmsData.sections` with explicit image paths.
  4. Update all 14 UK pages with explicit campus images.
- **Status:** **Verified** (Audit across all Study Abroad pages confirmed 0 missing image issues; verified on local dev server and committed to `audit-remediation`).
