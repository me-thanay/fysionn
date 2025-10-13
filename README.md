# FYSION

A Next.js project with an animated CPU architecture loading screen.

## Features

- 5-second animated loading screen with CPU architecture visualization
- Smooth transition to welcome screen
- Built with Next.js 14, React 18, and Tailwind CSS

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `components/` - React components
  - `CpuArchitecture.tsx` - CPU architecture SVG animation component
  - `LoadingPage.tsx` - Main loading page with transition logic
- `app/` - Next.js app directory
  - `page.tsx` - Home page
  - `layout.tsx` - Root layout
  - `globals.css` - Global styles
- `styles/` - Additional stylesheets
  - `cpu-animation.css` - CPU animation keyframes
- `lib/` - Utility functions
  - `utils.ts` - Helper utilities (cn function)

## Customization

You can customize the loading experience by modifying:
- Loading duration: Change the timeout in `LoadingPage.tsx` (default: 5000ms)
- CPU text: Modify the `text` prop in `LoadingPage.tsx`
- Hello text: Update the `<h1>` content in `LoadingPage.tsx`
- Animations: Adjust the CSS in `styles/cpu-animation.css`

"# fysion" 
