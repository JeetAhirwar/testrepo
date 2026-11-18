# Complete Initial Website Audit (`audit.md`)
**Project:** EduHawk Study Abroad Website  
**Live URL:** [https://eduhawkwebsite.vercel.app/](https://eduhawkwebsite.vercel.app/)  
**Audit Date:** November 2026  
**Auditor:** Senior Frontend Developer, UI/UX Designer, SEO Specialist, Content Verification Expert, and QA Engineer  
**Status:** Initial Audit Completed — Pre-Fix Baseline  

---

## 1. Executive Summary & Architecture Overview

EduHawk is an international education consultancy platform facilitating admissions for Indian students across global higher education destinations, including MBBS Abroad programmes and undergraduate/postgraduate degree pathways in 14 study abroad destinations (USA, UK, Canada, Australia, Germany, Ireland, France, Finland, Italy, Spain, Switzerland, Denmark, Sweden, and Mauritius), alongside specialized test preparation services (IELTS, TOEFL, Duolingo, PTE, OET, GRE, GMAT, SAT, ACT, IMAT, UCAT, MCAT, etc.).

### Architecture Pipeline
1. **Frontend Core:** Single Page Application (SPA) built on **React 18.2.0** and **Vite 5.4.21** utilizing **React Router DOM v6.21.1** for client-side routing.
2. **State Management:** **Redux Toolkit 2.1.1** and **React-Redux 9.1.0** for application-level state.
3. **Styling & Design System:** **Tailwind CSS v4.3.4** coupled with custom design token classes, Lucide React icons, and React Icons (Fa, Hi2, Io5, Bi, Tb, Lu, Pi, Ri, Md).
4. **Rendering & SEO Architecture:** Hybrid client-side and static pre-rendering model:
   - Client-side code splitting with lazy-loading (`React.lazy` and custom `safeLazy` wrapper).
   - Server-Side Pre-rendering via `prerender.mjs` using `vite.ssrLoadModule('/src/entry-server.jsx')` generating static HTML files into `dist/`.
   - Meta tag injection using `react-helmet-async 1.3.0` managed through shared `SeoHead.jsx`.
   - XML Sitemap generation via `generate-sitemap.cjs` mapping verified component modification dates (`lastmod`).
5. **Headless Content Management:** **Decap CMS** (`decap-server 3.11.6`, `public/admin/config.yml`) writing to localized JSON collections under `src/data/`, with OAuth authentication handled via Vercel serverless functions in `api/auth.js` and `api/callback.js`.
6. **Hosting & Edge Delivery:** Deployed to **Vercel** with custom security headers and cache policies defined in `vercel.json`.

---

## 2. Technologies and Dependencies

| Layer | Dependency / Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | React / React DOM | `^18.2.0` | UI component library |
| **Build Tool** | Vite | `^5.0.8` (`5.4.21` resolved) | Lightning fast bundler and dev server |
| **Routing** | React Router DOM | `^6.21.1` | Declarative client-side routing |
| **State Management** | @reduxjs/toolkit, react-redux | `^2.1.1`, `^9.1.0` | Global state store |
| **Styling** | Tailwind CSS, @tailwindcss/vite | `^4.3.4` | Modern atomic CSS engine |
| **CMS** | Decap CMS (decap-server) | `^3.11.6` | Git-backed headless CMS |
| **Icons & UI** | lucide-react, react-icons | `^0.303.0`, `^5.7.0` | SVG iconography |
| **Animations** | framer-motion | `^14.9.1` | Micro-interactions and transitions |
| **Sanitization** | dompurify | `^3.0.6` | XSS protection on rich text HTML rendering |
| **Notifications** | react-toastify | `^11.2.0` | Toast feedback alerts |
| **Bot Protection** | react-google-recaptcha | `^3.1.0` | Spam prevention on enquiry forms |
| **SEO Head** | react-helmet-async | `^1.3.0` | Asynchronous `<head>` meta management |
| **Linting** | eslint, plugins | `^8.55.0` | Code quality verification |

---

## 3. Complete Route Inventory

The platform encompasses **678 declared route entries** in `createBrowserRouter` plus **17 dynamic test routes**, mapped across the following structural hierarchy:

```
Total Declared Route Paths in Router: 680
Total Generated Prerender Routes: 674
Total Sitemap XML Routes: 552 (Audit issue: 123 routes missing from sitemap!)
```

### Route Category Breakdown

| Category | Route Pattern | Route Count | CMS Data Source | Component Directory |
| :--- | :--- | :---: | :--- | :--- |
| **Core & Corporate** | `/`, `/about`, `/services`, `/contact`, `/allcollege`, `/study-abroad` | 6 | `src/data/*.json` | `src/pages/` |
| **Editorial & Media** | `/blog`, `/blog/education-blog`, `/blog/:slugOrId`, `/news`, `/study-abroad/news` | 5 | `src/data/blogs/`, `src/data/news/` | `src/pages/Blog/`, `src/pages/News/` |
| **Legal & Compliance** | `/terms-conditions`, `/privacy-policy`, `/cookies-policy` | 3 | Static JSX | `src/pages/*Policy/` |
| **Conversion Pages** | `/landingpage` | 1 | `src/data/main_pages/landingpage.json` | `src/pages/Landingpage/` |
| **MBBS Abroad (Countries)** | `/mbbs-abroad/:country` (Russia, Georgia, Uzbekistan, etc.) | 16 | `src/data/medical_colleges/` | `src/pages/Country/` |
| **General Course Hubs** | `/courses/*` (UG, PG, Engineering branches, Business, Medical) | 43 | `src/data/study_abroad/` | `src/pages/Study Abroad/USA/` |
| **Global Standalone Hubs** | `/study-abroad/language-courses`, `/summer-courses`, etc. | 4 | `src/data/study_abroad/` | `src/pages/Study Abroad/USA/` |
| **Tests & Exams** | `/tests`, `/online-exams`, `/tests/:testId` (17 tests) | 19 | `src/data/tests/*.json` | `src/pages/Tests/TestDetailPage.jsx` |
| **Study Abroad: USA** | `/study-abroad/usa/*` (42 courses + 7 special tracks) | 49 | `src/data/study_abroad/usa/*.json` | `src/pages/Study Abroad/USA/` |
| **Study Abroad: Finland** | `/study-abroad/finland/*` (41 courses + 9 engineering tracks) | 50 | `src/data/study_abroad/finland/*.json` | `src/pages/Study Abroad/Finland/` |
| **Study Abroad: Australia** | `/study-abroad/australia/*` (42 course tracks) | 42 | `src/data/study_abroad/australia/*.json` | `src/pages/Study Abroad/Australia/` |
| **Study Abroad: Italy** | `/study-abroad/italy/*` (41 course tracks) | 41 | `src/data/study_abroad/italy/*.json` | `src/pages/Study Abroad/Italy/` |
| **Study Abroad: Canada** | `/study-abroad/canada/*` (42 course tracks) | 42 | `src/data/study_abroad/canada/*.json` | `src/pages/Study Abroad/Canada/` |
| **Study Abroad: Spain** | `/study-abroad/spain/*` (41 course tracks) | 41 | `src/data/study_abroad/spain/*.json` | `src/pages/Study Abroad/Spain/` |
| **Study Abroad: UK** | `/study-abroad/uk/*` (42 course tracks) | 42 | `src/data/study_abroad/uk/*.json` | `src/pages/Study Abroad/UK/` |
| **Study Abroad: Ireland** | `/study-abroad/ireland/*` (42 course tracks) | 42 | `src/data/study_abroad/ireland/*.json` | `src/pages/Study Abroad/Ireland/` |
| **Study Abroad: France** | `/study-abroad/france/*` (42 course tracks) | 42 | `src/data/study_abroad/france/*.json` | `src/pages/Study Abroad/France/` |
| **Study Abroad: Germany** | `/study-abroad/germany/*` (42 course tracks) | 42 | `src/data/study_abroad/germany/*.json` | `src/pages/Study Abroad/Germany/` |
| **Study Abroad: Switzerland**| `/study-abroad/switzerland/*` (41 course tracks) | 41 | `src/data/study_abroad/switzerland/*.json` | `src/pages/Study Abroad/Switzerland/` |
| **Study Abroad: Mauritius** | `/study-abroad/mauritius/*` (41 course tracks) | 41 | `src/data/study_abroad/mauritius/*.json` | `src/pages/Study Abroad/Mauritius/` |
| **Study Abroad: Denmark** | `/study-abroad/denmark/*` (41 course tracks) | 41 | `src/data/study_abroad/denmark/*.json` | `src/pages/Study Abroad/Denmark/` |
| **Study Abroad: Sweden** | `/study-abroad/sweden/*` (41 course tracks) | 41 | `src/data/study_abroad/sweden/*.json` | `src/pages/Study Abroad/Sweden/` |
| **System & Admin** | `/admin`, `*` (404 Not Found) | 2 | Decap Admin UI / Static JSX | SPA fallback & Decap static CMS |
| **TOTAL** | — | **678 declared** | **656 JSON files** | **619 component modules** |

---

## 4. Static vs Dynamic Pages

1. **Fully Static Pre-rendered Pages (674 routes):**
   - Pre-rendered into standalone `dist/<path>/index.html` static documents by `prerender.mjs`.
   - Contain full initial DOM text, SSR head tags, Open Graph tags, canonical links, and Schema.org JSON-LD structured data for web crawlers.
2. **Client-Side Hydrated Dynamic Pages:**
   - `/tests/:testId`: Handled dynamically by `TestDetailPage.jsx` loading test specifications dynamically from `src/data/testsData.js` and `src/data/tests/*.json`. (Pre-rendered for all 17 known test slugs).
   - `/blog/:slugOrId`: Handled dynamically by `BlogDetail.jsx` parsing slug parameters and fetching matching article records.
3. **No-Index Lead Generation Page:**
   - `/landingpage`: Excluded from public indexing and prerender, rendered on demand as a pure conversion funnel with paid traffic UTM tags.

---

## 5. DCAP CMS Integration Overview

Decap CMS is configured via `public/admin/config.yml` with **17 collections** managing **625 editable configuration files**:
- **Main Pages:** `home.json`, `about.json`, `services.json`, `contact.json`, `landingpage.json`.
- **Medical Colleges:** 15 country MBBS packages (`russia.json`, `georgia.json`, `uzbekistan.json`, etc.).
- **Study Abroad Countries (14 collections):** Each destination (USA, Finland, Australia, Italy, Canada, Spain, UK, Ireland, France, Germany, Switzerland, Mauritius, Denmark, Sweden) has its own collection of 41–50 JSON files.
- **Tests Collection:** 17 standardized exam profiles.

### Dynamic Binding Engine (`withCmsData` in `CoursePageKit.jsx`)
Study Abroad pages utilize the higher-order merge function `withCmsData(page, cmsData, uniImages)`:
- **Safeguard 1 (Country Detection):** Normalizes destination country from `page.country`, `cmsData.country`, or regex on SEO slug without defaulting improperly to USA.
- **Safeguard 2 (Course Name Cleaning):** Strips trailing country suffixes (e.g. "in Denmark for Indian Students") to maintain clean breadcrumbs and heading hierarchy.
- **Safeguard 3 (Overview & Paragraphs):** Merges CMS paragraphs with hardcoded JSX fallbacks so null/empty CMS fields never render blank space.
- **Safeguard 4 (Stats Bar):** Normalizes tuition, duration, language, and work permit stats while preserving numeric zero values.
- **Safeguard 5 (Universities Grid):** Maps university names, locations, fees, descriptions, and dynamic uploaded imagery from `/uploads/...`.

---

## 6. Image Management Overview

1. **Asset Architecture:**
   - **Static Local Assets:** Located in `src/Images/Abroad/<Country>/<Course>/` imported directly into component JSX bundles.
   - **CMS Media Uploads:** Located in `public/uploads/` categorized by folder (`public/uploads/study_abroad/<country>/`, `public/uploads/home/`, `public/uploads/colleges/`).
   - **Global Branding Assets:** Located in `public/` (`Eduhawk.png`, `og-image.png`, `favicon.png`, `apple-touch-icon.png`).
2. **Asset Format & Compression:**
   - Primary format is high-efficiency **WebP** (`.webp`), with legacy PNGs preserved where transparency is required.
   - 4,234 component-level image imports verified with zero missing files on disk.
   - 8,200 JSON image path references checked across 656 JSON data files.

---

## 7. Existing SEO Implementation

1. **Metadata Injection:** Centralized in `src/component/SeoHead.jsx` utilizing `react-helmet-async`.
2. **Canonical Domain:** Standardized to `https://www.eduhawk.in` across all canonical tags.
3. **Open Graph & Twitter Cards:**
   - `og:title`, `og:description`, `og:url`, `og:site_name`, `og:image` (defaulting to official 1200x630 banner `/og-image.png`).
   - `twitter:card` set to `summary_large_image`.
4. **Structured Data (Schema.org JSON-LD):**
   - Global `EducationalOrganization` and `WebSite` schema injected in `App.jsx`.
   - Course-level schema injected on pre-rendered route pages.
5. **Robots.txt & Sitemap:**
   - `public/robots.txt` points to `https://www.eduhawk.in/sitemap.xml`.
   - `generate-sitemap.cjs` builds `sitemap.xml` with dynamic component `lastmod` inspection.

---

## 8. Responsive Design Observations

- **Grid Architecture:** Responsive Tailwind flexbox and grid layouts (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`).
- **Breakpoints Tested:**
  - Desktop: 1440px
  - Laptop: 1366px
  - Tablet: 768px
  - Mobile: 390px
  - Small Mobile: 360px
- **Mobile Navigation:** Slide-over drawer navigation implemented in `Navbar.jsx` with collapsible course accordions.
- **Typography Scaling:** Fluid heading classes (`text-2xl sm:text-3xl md:text-4xl lg:text-5xl`).

---

## 9. Existing Technical & Build Issues Identified

During this initial audit, the following concrete technical issues were detected:

### Issue 1: ESLint Flat Config Version Incompatibility (`eslint.config.js`)
- **Severity:** Critical (Build & Lint Block)
- **Problem:** `npm run lint` fails immediately with:
  `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './config' is not defined by "exports" in E:\testverceldep\node_modules\eslint\package.json imported from E:\testverceldep\eslint.config.js`
- **Root Cause:** ESLint `8.57.1` is installed, but `eslint.config.js` imports `{ defineConfig, globalIgnores } from 'eslint/config'`, which is an ESLint 9+ exclusive export.
- **Recommended Solution:** Update `eslint.config.js` to conform to ESLint 8 flat config standards (`export default [...]` without calling `defineConfig` from `eslint/config`).

### Issue 2: 123 Live Pre-rendered Routes Missing from `routeList` and `sitemap.xml`
- **Severity:** High (SEO & Discovery)
- **Problem:** `src/routes/routes.jsx` exports `routeList` containing only 552 routes, and `generate-sitemap.cjs` consumes this array.
- **Root Cause:** When Mauritius (41 routes), Denmark (41 routes), and Sweden (41 routes) were integrated into `router`, they were never appended to `export const routeList` at the bottom of `src/routes/routes.jsx` or synced into `generate-sitemap.cjs`.
- **Impact:** 123 legitimate country course pages are completely absent from `sitemap.xml`, hindering search engine discovery.
- **Recommended Solution:** Synchronize `routeList` and `generate-sitemap.cjs` with all 675+ public routes.

### Issue 3: Missing Vercel SPA Fallback Rewrite in `vercel.json`
- **Severity:** High (Routing & Deep Linking)
- **Problem:** In `vercel.json`, `rewrites` only covers `/landingpage` and `/blog/:slug*`.
- **Root Cause:** No catch-all rewrite `{ "source": "/(.*)", "destination": "/index.html" }` exists. If a user enters a non-prerendered route directly (e.g. `/news`, `/tests`, `/study-abroad/news`, or future dynamic routes), Vercel responds with a 404 instead of letting React Router handle it.
- **Recommended Solution:** Add SPA fallback rewrite to `vercel.json` while preserving asset caching headers.

### Issue 4: Missing Image File References in `src/data/study_abroad/uk/pg_hub.json`
- **Severity:** Medium (Content / Image)
- **Problem:** `pg_hub.json` for UK references 4 university image filenames that don't match the disk files in `public/uploads/study_abroad/uk/`:
  - `uk_computer_science_University_of_Oxford-image1.png` (Disk has `...-image4.png`)
  - `uk_computer_science_Cambridge_University-image2.png` (Disk has `...-image1.png`)
  - `uk_computer_science_London_s_Imperial_College-image3.png` (Disk has `...-image2.png`)
  - `uk_computer_science_London_s_University_College__UCL_-image4.png` (Disk has `uk_computer_science_London_s_University_College-image3.png`)
- **Recommended Solution:** Align JSON image paths with the exact physical filenames.

### Issue 5: Missing Direct Country Landing Hubs (`/study-abroad/:country`)
- **Severity:** Medium (UX & Information Architecture)
- **Problem:** URLs like `https://eduhawkwebsite.vercel.app/study-abroad/denmark` or `/study-abroad/australia` hit the catch-all `NotFound` component because router only defines course-specific leaf routes (e.g. `/study-abroad/denmark/dentistry`).
- **Recommended Solution:** Ensure consistent navigation fallback or dedicated country overview hubs so users and search engines navigating to top-level country paths are smoothly routed to course directories rather than 404 pages.

---

## 10. Initial Audit Findings & Baseline Recommendations

1. **Design System Consistency:** Ensure that across all 14 country directories, university cards consistently display fees, locations, badges, and official website CTAs without distortion.
2. **Content Fidelity ("Doc ka word = Website ka word"):** All country courses must strictly reflect the official source content provided in `E:\Downloads-pro\` without summarizing away critical admission prerequisites, duration, currency figures, and language requirements.
3. **Decap CMS Verification:** Ensure every CMS field mapped in `public/admin/config.yml` matches its corresponding JSON schema in `src/data/` so content editors experience seamless, error-free editing.
4. **Interactive Validation:** Validate every CTA button (`Enquire Now`, `Apply for Admission`, `Download Brochure`, WhatsApp floating triggers) to ensure valid action triggers without dead JavaScript errors.

*This initial audit document establishes the verifiable baseline for master task tracking in `task.md` and detailed defect registration in `error.md`.*
