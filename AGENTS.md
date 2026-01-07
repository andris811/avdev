# AGENTS.md

## Build/Lint/Test Commands
- `npm start` - Start development server on localhost:3000
- `npm run build` - Create production build in build/ directory
- `npm test` - Run Jest tests in watch mode
- `npm test -- <filename>` - Run single test file (e.g., `npm test -- App.test.js`)
- `npm run deploy` - Build and deploy to GitHub Pages

## Code Style Guidelines

### Imports
- React imports first, then third-party libraries, then local imports
- Use named imports for React hooks: `import React, { useState, useEffect } from "react"`

### Components
- Functional components with arrow functions
- PascalCase naming convention
- Props destructuring in function parameters
- Use hooks for state and side effects

### Styling
- Tailwind CSS with responsive breakpoints (`md:`, `lg:`, `xl:`)
- Always include dark mode variants: `className="bg-white dark:bg-gray-900"`
- Use `process.env.PUBLIC_URL` for image paths in production

### JavaScript
- ES6+ features (arrow functions, destructuring, template literals)
- Single quotes for strings, backticks for template literals
- No semicolons at statement ends
- localStorage for theme persistence
- useEffect for scroll detection and theme synchronization

### Data Management
- Project data in `src/data/projectsData.js` as exported array
- Each project: `{title, description, images[], liveLink, repoLink, tech[]}`

### Navigation
- react-scroll for smooth scrolling with negative offsets (-60 to -95px)
- Fixed navbar height ~80px affects scroll positioning