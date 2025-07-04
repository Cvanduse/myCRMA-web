# MyCRMA Brand Guide

A concise reference for colors, typography, and logo use—perfect for your web designer to implement the new MyCRMA look.

---

## 1. Logo Usage

### Horizontal Logo

- **Formats:** SVG (preferred), PNG @1× (300×80 px) & @2× (600×160 px)
- **Clear Space:** Minimum padding around logo = 20% of its height
- **Background:** Transparent for flexibility over any brand-neutral

---

## 2. Color Palette

Define as CSS variables in your stylesheet:

```css
:root {
  --cream-beige:   #F0E5CF;
  --off-white:     #F7F6F2;
  --light-gray:    #EAEAEA;
  --mid-gray:      #C8C6C6;
  --charcoal:      #2C2E33;
  --slate-blue:    #4B6587;
  --warm-amber:    #FFB84D;
  --success-teal:  #4DB8A6;
  --error-coral:   #E06666;
}
```

| Role                      | Variable         | Hex     | Usage                               |
| ------------------------- | ---------------- | ------- | ----------------------------------- |
| Global Background         | `--off-white`    | #F7F6F2 | Default page canvas                 |
| Alternate Section BG      | `--light-gray`   | #EAEAEA | Stripe every other section, panels  |
| Spotlight / Call-out BG   | `--cream-beige`  | #F0E5CF | Hero, testimonials, call-out blocks |
| Dividers & Borders        | `--mid-gray`     | #C8C6C6 | Rules, card outlines, form fields   |
| Primary Body Text & Icons | `--charcoal`     | #2C2E33 | Paragraphs, labels, icon strokes    |
| Headings & Primary Accent | `--slate-blue`   | #4B6587 | H1–H3, nav links, icons             |
| CTAs & Highlights         | `--warm-amber`   | #FFB84D | Buttons, badges, key call-outs      |
| Success Messages          | `--success-teal` | #4DB8A6 | Forms, notifications                |
| Error / Warning Messages  | `--error-coral`  | #E06666 | Form errors, alerts                 |

---

## 3. Typography

### Primary Typeface: **Inter** (Variable)

- **Source:** Google Fonts
- **Weights:** 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold)

| Element          | Font Weight    | Size     | Line Height | Letter Spacing |
| ---------------- | -------------- | -------- | ----------- | -------------- |
| H1               | Bold (700)     | 48 px    | 1.2 em      | 0.5 px         |
| H2               | Bold (700)     | 36 px    | 1.2 em      | 0.5 px         |
| H3               | Bold (700)     | 24 px    | 1.2 em      | 0.5 px         |
| H4               | SemiBold (600) | 20 px    | 1.3 em      | 0.3 px         |
| Body Text        | Regular (400)  | 16 px    | 1.6 em      | 0 px           |
| Small / Caption  | Light (300)    | 14 px    | 1.4 em      | 0 px           |
| Button / CTA     | Bold (700)     | 16 px    | 1.2 em      | 0.5 px         |
| Quote / Pull-Out | SemiBold (600) | 24–30 px | 1.3 em      | 0.3 px         |

---

## 4. UI Component Color Assignments

| Component           | Color                                                           |
| ------------------- | --------------------------------------------------------------- |
| Nav background      | `var(--off-white)`                                              |
| Nav links/text      | `var(--slate-blue)`                                             |
| Nav CTA button      | `var(--warm-amber)` on `var(--off-white)`                       |
| Hero section BG     | `var(--cream-beige)`                                            |
| Hero headlines/text | `var(--slate-blue)` / `var(--charcoal)`                         |
| Primary CTA button  | `var(--warm-amber)`; text `var(--off-white)`                    |
| Secondary buttons   | border: 1px solid `var(--slate-blue)`; text `var(--slate-blue)` |
| Section dividers    | `var(--mid-gray)`                                               |
| Card backgrounds    | alternate `var(--off-white)` / `var(--light-gray)`              |
| Footer background   | `var(--slate-blue)`                                             |
| Footer links/text   | `var(--off-white)`                                              |

---

## 5. Spacing & Layout

- **Base unit:** 8 px (use multiples: 8, 16, 24, 32, 64)
- **Logo clear space:** 20% of logo height
- **Grid:** 12-column responsive grid

---

## 6. Accessibility

- **Contrast:** Ensure text/BG combos meet WCAG AA (4.5:1 for body, 3:1 for large text)
- **Focus states:** Outline links/buttons in `var(--warm-amber)` or `var(--slate-blue)`

---

\*Use this guide to update your stylesheets, page layouts, and component library—ensuring a cohesive, on-brand experience across the MyCRMA website.

---

## 7. Additional Recommendations

### Brand Voice & Tone

- Maintain a **professional**, **collaborative**, and **empathetic** voice in all communications.
- Use **active, clear language**: e.g., “We guide you to success” instead of passive constructions.
- Keep sentences **concise** (max \~20 words) and avoid unnecessary jargon unless client-facing.

### Iconography & Imagery

- Use **line icons** with a consistent **2 px** stroke in `var(--slate-blue)`; reserve `var(--warm-amber)` for key highlights.
- Apply a **10% amber tint** (`rgba(255,184,77,0.1)`) over hero imagery to tie photos into the palette.
- Favor **abstract or contextual tech photography** over literal stock images to reinforce a modern, advisory feel.

### Interaction & Motion

- Implement **micro-interactions** (hover, focus) with **150 ms ease-in-out** transitions using amber and slate-blue.
- For focus states, use a **2 px amber outline** (`var(--warm-amber)`) on buttons and links for accessibility.
- Keep animations subtle—limit to **fade**, **scale** (max 5%), or **slide** (max 4 px) effects.

### Code Snippet Example

```css
.btn-primary {
  background: var(--warm-amber);
  color: var(--off-white);
  transition: background 150ms ease-in-out;
}
.btn-primary:hover {
  background: rgba(255, 184, 77, 0.9);
}
```

*With these additions—covering voice, imagery, and micro-interactions—you’ll ensure the MyCRMA brand feels cohesive, engaging, and accessible across all touchpoints.*

---

## 8. Do’s & Don’ts

- **Do** maintain clear space around the logo; **Don’t** place the logo on complex or low-contrast backgrounds.
- **Do** reference only the approved color variables and tonal scales; **Don’t** introduce off-palette colors or untested gradients.
- **Do** use the specified typography hierarchy; **Don’t** stretch, condense, or rotate typefaces.
- **Do** follow the icon stroke and highlight rules; **Don’t** recolor or restroke icons outside the brand guide.

## 9. Templates & Asset Library

- **Component Library:** Provide a Figma (or Sketch) file containing styled components—buttons, form fields, cards, navigation bars—using the defined tokens.
- **Templates:** Include standardized mockups for business cards, letterhead, PowerPoint slides, and email signatures, pre-populated with logo and palette.
- **Asset Repository:** Host all master files (SVG, EPS, AI, PDF) in a version-controlled directory (e.g., Git, shared drive) labeled with clear version numbers and dates.

## 10. Governance & Maintenance

- **Version Control:** Store brand files in a central repository with semantic versioning (e.g., v1.0, v1.1) to track updates.
- **Change Management:** Establish a quarterly review process—include stakeholders from design, marketing, and product—to assess brand consistency and approve any revisions.
- **Brand Champion:** Assign a Brand Guardian (e.g., Marketing Lead) responsible for enforcing guidelines and onboarding new team members.

---

*These governance practices and asset frameworks will ensure your MyCRMA brand remains consistent, scalable, and future-proof as your organization grows.*\*

