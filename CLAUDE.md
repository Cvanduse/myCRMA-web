# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo-based website for MyCRMA (CRM consulting services) built with the Hugoplate theme and TailwindCSS. The site focuses on CRM solutions, consulting, and business transformation services.

## Development Commands

**Local Development:**
```bash
npm run dev              # Start Hugo development server
hugo server              # Alternative development server command
```

**Production Build:**
```bash
npm run build           # Build optimized production site
npm run preview         # Preview production build locally
```

**Code Quality:**
```bash
npm run format          # Format code with Prettier
```

**Theme Management:**
```bash
npm run update-modules  # Update Hugo modules
npm run update-theme    # Update theme components
```

## Architecture & Structure

### Hugo Configuration
- Main config: `hugo.toml` (base URL, title, build settings)
- Modular config in `config/_default/`: languages, menus, params, modules
- Uses Hugo modules system for theme management

### Content Structure
- Content in `content/english/` with sections for blog, pages, authors
- Sections content in `content/english/sections/` (services, FAQ, testimonials, etc.)
- Dynamic content sections are included via partials in the homepage

### Layout System
- Base template: `layouts/_default/baseof.html`
- Homepage: `layouts/index.html` (main landing page with hero, services, testimonials)
- Partials in `layouts/partials/` for reusable components:
  - `services.html`, `faq.html`, `why-choose-us.html`, `stats.html`
  - `project-cta.html`, `contact.html`

### Styling & Assets
- TailwindCSS for styling with custom CSS in `assets/css/`
- Custom animations and component-specific styles
- JavaScript for interactive features in `assets/js/main.js`
- Static assets (images, etc.) in `static/`

### Key Features
- Responsive design with mobile-first approach
- Dark/light theme switching capability
- Logo marquee animation on homepage
- Dynamic hero text animation
- FAQ accordion functionality
- Contact forms and CTAs throughout

## Content Management

The site uses Hugo's content management system with markdown files. Key content sections are:
- Services offerings and descriptions
- FAQ content for common questions
- Statistics and testimonials
- Project CTAs and contact information

All content can be modified through the respective markdown files in the `content/` directory or section-specific files in `content/english/sections/`.