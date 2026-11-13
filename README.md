# Angela D. Koska — Personal Portfolio

## Purpose and audience
One website for my personal portfolio and web development assignments. It helps prospective employers see my developing IT skills, leadership experience, and coursework. Each milestone extends these same three pages.

## Milestone 1: Site plan and HTML skeleton
- `index.html`: Home, introduction, portrait placeholder, skills, certification placeholder, and featured project.
- `projects.html`: Current portfolio project and clearly marked planned coursework updates.
- `about.html`: Personal background, education, experience, and placeholders for résumé and contact information.
- `wireframe.png`: Desktop and mobile layout plans for all three pages, with palette and font notes.

All three pages have shared navigation, working relative links, logical h1–h3 headings, and semantic HTML. The Milestone 1 foundation is retained in Git history. Milestone 2 now adds shared CSS. Portrait, certification, and resumé download remain placeholders until approved assets are available; repository links and a practice contact form are included.

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

## Milestone 2: Styled and responsive
Implemented in `styles.css`, linked from all three pages:
- The chosen palette, Handlee headings, and Open Sans body text.
- Type selectors (`body`, `section`), class selectors (`.page-layout`, `.button`), and an ID selector (`#main-content`).
- An 8px-based spacing system, rounded cards, and visible keyboard focus.
- Flexbox navigation and Grid page/project layouts.
- Media queries at 768px and 1100px; mobile is the default layout.
- The portrait and certification remain placeholders until approved images are added.

### Milestone 2 review
Angela confirmed the site is live and reported that the pages looked good after the requested screen-size checks. Automated visual verification was unavailable in the editing environment.

Live site: https://angelakoska.github.io/my-portfolio/

## Milestone 3: Accessible and designed

### Accessibility changes and existing features
- Added visible labels explicitly associated with every contact input so their purpose is available to assistive technology.
- Grouped contact fields inside a fieldset with a descriptive legend.
- Added visible required-field wording and native required attributes rather than relying on color or an unexplained symbol.
- Connected specific error messages and the message-length hint to their fields using aria-describedby.
- Added aria-invalid on failing fields and dashed error borders, so errors are not communicated by color alone.
- Focus moves to the first invalid field after a validation attempt, and a live status region reports the result.
- Added clear focus outlines and contrasting borders for form controls and the button.
- Made the main landmark programmatically focusable so the existing skip link has an explicit focus destination.
- Retained one h1 per page, ordered section headings, descriptive navigation, and aria-current on the current page.

These are implementation changes and code checks, not claims of WAVE findings or a completed WAVE audit.

### Intentional Gestalt principles
1. **Proximity:** I keep each project title, description, skills, and link together inside its card, with more space between separate projects; each form label also stays close to its input and error message.
2. **Similarity:** My pages repeat the same navigation, plum buttons, heading fonts, rounded cards, and spacing so related elements are recognizable across the site.
3. **Common region:** Card boundaries group related content, and the contact section and fieldset organize the form as one task.

### Contact form behavior
The contact form is a clearly labeled practice form. It validates entries locally, does not transmit or store personal information, and never claims that a message was sent. The button is labeled “Check my message.” A delivery service and recipient must be configured separately to receive messages. Without JavaScript, the fieldset stays disabled and an explanatory message is shown; the GitHub link remains available.

### Contrast checks
The table below uses local WCAG relative-luminance calculations for all text/background pairs in the current stylesheet. All exceed 4.5:1, including the error text. Muted input borders also exceed 3:1 against white. Lavender, peach, and mint accents are decorative, not the sole way to identify a control or communicate an error.

| Foreground | Background | Calculated ratio | AA normal text |
|---|---|---|---|
| `#292735` | `#FFFFFF` | 14.62:1 | Pass |
| `#292735` | `#FAF9FC` | 13.94:1 | Pass |
| `#292735` | `#EDF3FB` | 13.10:1 | Pass |
| `#292735` | `#BCD2EE` | 9.47:1 | Pass |
| `#292735` | `#FFF0E7` | 13.14:1 | Pass |
| `#292735` | `#F4F0FB` | 13.03:1 | Pass |
| `#292735` | `#EAFBF6` | 13.67:1 | Pass |
| `#832161` | `#FFFFFF` | 8.92:1 | Pass |
| `#832161` | `#FAF9FC` | 8.50:1 | Pass |
| `#832161` | `#EDF3FB` | 7.99:1 | Pass |
| `#832161` | `#BCD2EE` | 5.77:1 | Pass |
| `#832161` | `#FFF0E7` | 8.01:1 | Pass |
| `#832161` | `#F4F0FB` | 7.94:1 | Pass |
| `#832161` | `#EAFBF6` | 8.33:1 | Pass |
| `#595467` | `#FFFFFF` | 7.27:1 | Pass |
| `#595467` | `#FAF9FC` | 6.93:1 | Pass |
| `#FFFFFF` | `#832161` | 8.92:1 | Pass |
| `#FFFFFF` | `#67204F` | 11.07:1 | Pass |
| `#A11832` | `#FFFFFF` | 7.80:1 | Pass |

Required external verification: confirm these pairs with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/); its API could not be reached by the editing tool. Local calculations are not recorded as a WebAIM test.

### Verification completed
- Static HTML checks: balanced elements, unique IDs, valid ARIA references, and labels for each input.
- JavaScript syntax check passed.
- Validation logic tests with a mock DOM passed for empty and whitespace-only entries, invalid email, corrected values, valid entries, maximum length, selection of the first invalid field, and preventing form submission. These are not browser or screen-reader tests.

### Required final checks — still pending
- [ ] Run WAVE on Home and fix every error.
- [ ] Run WAVE on Projects & Work and fix every error.
- [ ] Run WAVE on About & Contact and fix every error.
- [ ] Record WAVE results and any resulting fixes here, one sentence per fix.
- [ ] Verify the text/background pairs in WebAIM Contrast Checker.
- [ ] Check the form with keyboard navigation, blank submission, invalid email, corrections, and valid entries.
- [ ] Recheck the updated About & Contact page at 320px, 768px, and 1200px.

Milestone 3 is not ready for final submission until the pending checks are completed. Obtain the full Milestone 4 directions before planning its JavaScript requirements.
