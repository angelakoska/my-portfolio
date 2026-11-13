# Angela D. Koska — Personal Portfolio

## Purpose and audience
One website for my personal portfolio and web development assignments. It helps prospective employers see my developing IT skills, leadership experience, and coursework. Each milestone extends these same three pages.

## Milestone 1: Site plan and HTML skeleton
- `index.html`: Home, introduction, portrait placeholder, skills, certification placeholder, and featured project.
- `projects.html`: Current portfolio project and clearly marked planned coursework updates.
- `about.html`: Personal background, education, experience, and placeholders for résumé and contact information.
- `wireframe.png`: Desktop and mobile layout plans for all three pages, with palette and font notes.

All three pages have shared navigation, working relative links, logical h1–h3 headings, and semantic HTML. The Milestone 1 foundation is retained in Git history. Milestone 2 now adds shared CSS. Portrait, certification, résumé, repository, and contact details remain honest placeholders until the approved assets and links are available.

## Wireframe

![Wireframes for Angela D. Koska’s Home, Projects and Work, and About and Contact pages, including mobile layout plans and the chosen color palette.](wireframe.png)

## Visual direction
Light and airy: off-white backgrounds, white cards, generous spacing, rounded corners, and restrained color accents.

| Color | Hex | Planned role |
|---|---|---|
| Powder blue | #BCD2EE | Soft section backgrounds |
| Lavender | #9B7EDE | Decorative details and borders |
| Deep plum | #832161 | Headings, navigation accents, and buttons |
| Peach | #FAA275 | Featured project accents |
| Mint | #76E7CD | Skills and certification highlights |

Planned Google Font pairing: Handlee for headings, Open Sans for body text, with suitable system fallbacks. Fonts are loaded on all three pages. Use dark body text on light backgrounds and verify each actual text/background pairing before applying the palette. Do not assume every palette pairing passes contrast.

## Layout plan
Home: name and tagline; introduction beside portrait; skills and certification; featured project.
Projects: introduction; project cards with descriptions, skills, status, and verified links.
About: personal story and education; relevant experience; résumé; contact area.
Shared navigation and footer appear on every page. Mobile layouts stack content and allow navigation to wrap.

## Open and review
1. Extract the ZIP.
2. Open `index.html` in a browser.
3. Follow navigation to Projects & Work and About & Contact.
4. View `wireframe.png` for the planned styled layout.

## Submit Milestone 1
Upload these files and the wireframe image into the existing portfolio repository, keeping the three HTML files at its root. Commit them as the Milestone 1 foundation. Submit the GitHub repository URL, with the HTML files and wireframe visible. Keep this commit in history before continuing to styling.

## Later milestones — not completed in this starter
- Milestone 2: shared CSS, Google Font pairing, type/class/ID selectors, spacing in multiples of 8px, Flexbox/Grid, at least two media queries, DevTools checks at 320/768/1200px, and GitHub Pages publication.
- Milestone 3: WAVE on all three pages, documented fixes, WCAG AA contrast checks, two named Gestalt principles, and an accessible contact form.
- Milestone 4: JavaScript; obtain the full requirements before implementing.

WAVE auditing and Milestone 3 work remain pending.


## Milestone 2: Styled and responsive
Implemented in `styles.css`, linked from all three pages:
- The chosen palette, Handlee headings, and Open Sans body text.
- Type selectors (`body`, `section`), class selectors (`.page-layout`, `.button`), and an ID selector (`#main-content`).
- An 8px-based spacing system, rounded cards, and visible keyboard focus.
- Flexbox navigation and Grid page/project layouts.
- Media queries at 768px and 1100px; mobile is the default layout.
- The portrait and certification remain placeholders until approved images are added.

### Validation and remaining submission steps
Static checks passed for balanced HTML, unique IDs, heading structure, and local links. Browser launch was blocked in the editing environment; no visual responsive test is claimed.

Before submitting:
1. In Chrome DevTools, check **each of the three pages** at 320px, 768px, and 1200px. Confirm no sideways scrolling, overlap, or clipped text. Check the intended Google Fonts load.
2. Confirm GitHub Pages is enabled from `main` and `/ (root)` under repository Settings > Pages.
3. Open the published site and confirm all three pages load their shared stylesheet.
4. Submit the updated repository URL. Milestone 2 requires the site to be live.
