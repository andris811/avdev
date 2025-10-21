# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AVDev is a personal portfolio website for a full-stack developer, built with React and deployed to GitHub Pages. The site showcases projects, skills, and background with a focus on responsive design, animations, and theme support.

**Live site:** https://andris811.github.io/avdev/

## Development Commands

### Start development server
```bash
npm start
```
Runs the app on http://localhost:3000 with hot reload.

### Build for production
```bash
npm run build
```
Creates optimized production build in `build/` directory.

### Run tests
```bash
npm test
```
Launches Jest test runner in interactive watch mode.

### Run a single test file
```bash
npm test -- <filename>
```
Example: `npm test -- App.test.js`

### Deploy to GitHub Pages
```bash
npm run deploy
```
Builds and deploys to gh-pages branch (predeploy hook runs automatically).

## Architecture & Key Patterns

### Component Structure
The app follows a single-page architecture with section-based navigation using `react-scroll`. All sections are rendered in `App.js` in this order:
1. **Navbar** - Fixed navigation with smooth scrolling, theme toggle, and mobile menu
2. **Introduction** - Hero section with animated greeting
3. **About** - Developer background and skills
4. **Projects** - Grid of project cards with carousel
5. **Contact** - Form with validation via Formspree
6. **Footer** - Copyright and additional links

### Theme System
- Dark/light mode implemented using Tailwind's `dark:` variants and class-based toggle
- Theme state stored in localStorage and synced on mount in `Navbar.jsx:23-28`
- Initial theme detection based on system preference in `src/index.js:8-13`
- Root element receives `dark` class toggle via `document.documentElement.classList`

### Project Data Management
- All project information lives in `src/data/projectsData.js` as a single exported array
- Each project object contains: title, description, images (array), liveLink, repoLink, tech (array)
- Images use `process.env.PUBLIC_URL` for correct path resolution in production
- ProjectCard component maps over this data in `Projects.jsx:15`

### Styling Approach
- Tailwind CSS for all styling with custom dark mode variants
- Framer Motion for animations (fade-in, transitions)
- Responsive design using Tailwind breakpoints (`md:`, `lg:`, `xl:`)
- Gradient glow effects using absolute positioning with blur (`Projects.jsx:18-21`, `Contact.jsx:154-157`)

### Form Handling
- Contact form uses `react-hook-form` for validation and state management (`Contact.jsx:8-13`)
- Submission handled by Formspree API endpoint
- Success state toggles confirmation message and resets form

### Navigation Behavior
- `react-scroll` handles smooth scrolling to sections by ID
- Custom offset values adjust scroll position per section (`Navbar.jsx:107`)
- Active section highlighting using `spy` and `activeClass` props
- Mobile menu closes on scroll or outside click (`Navbar.jsx:30-52`)

## Important Implementation Notes

### Image Paths
Always use `${process.env.PUBLIC_URL}/images/...` when adding project images to ensure correct paths in GitHub Pages deployment.

### Dark Mode Classes
When adding new components, always include both light and dark variants:
```jsx
className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
```

### Scroll Offset
The navbar is fixed with height ~80px. Use negative offset for `react-scroll` Link components to account for this (typically `-60` to `-95` depending on section).

### Testing
The default test suite is minimal (`App.test.js`). When writing new tests, use `@testing-library/react` and `@testing-library/jest-dom` which are already configured.

## Tech Stack

**Core:** React 19, JavaScript (ES6+)
**Styling:** Tailwind CSS, Emotion (MUI integration)
**Animation:** Framer Motion, react-type-animation
**Forms:** react-hook-form, Formspree API
**Icons:** FontAwesome, MUI Icons, react-icons
**Navigation:** react-scroll
**Build:** react-scripts (Create React App)
**Deployment:** gh-pages
