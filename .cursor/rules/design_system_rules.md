# Fysion Design System Rules for Figma Integration

## Project Overview
**Framework:** Next.js 14 (App Router)  
**Language:** TypeScript  
**Styling:** Tailwind CSS v3.4.14  
**UI Philosophy:** Glassmorphism, Dark theme, Modern minimalist

---

## 1. Design Token Definitions

### Colors
Located in: `app/globals.css` and Tailwind configuration

```css
/* Primary Colors */
--background: #000000 (Black)
--foreground: #ffffff (White)

/* Glass Effects */
- bg-black/80, bg-black/60, bg-black/40 (opacity variants)
- bg-white/10, bg-white/20, bg-white/5 (glass surfaces)
- border-white/10, border-white/20 (glass borders)

/* Text Colors */
- text-white (primary)
- text-gray-300 (secondary)
- text-gray-400 (tertiary)
```

### Spacing System
Using Tailwind's default spacing scale:
- `px-4, px-6, px-8` - Horizontal padding
- `py-4, py-6, py-8` - Vertical padding
- `gap-4, gap-6, gap-8` - Grid/Flex gaps
- `space-x-1, space-x-3, space-x-8` - Horizontal spacing

### Typography
```typescript
// Headings
- text-6xl md:text-8xl (Hero titles)
- text-4xl md:text-6xl (Section titles)
- text-2xl (Card titles)
- text-xl md:text-2xl (Large body)
- text-lg md:text-xl (Body text)
- text-sm (Navigation, small text)

// Font Weights
- font-bold (700)
- font-semibold (600)
- font-medium (500)

// Letter Spacing
- tracking-wider (for branding)
- tracking-wide (for headings)
```

### Border Radius
```css
- rounded-full (Pills, buttons)
- rounded-3xl (Navbar, large containers)
- rounded-2xl (Cards, medium containers)
- rounded-xl (Small containers)
```

---

## 2. Component Library

### Location
`components/` directory - all components are separate files per user preference

### Component Architecture
- **Pattern:** Client-side React components (`"use client"`)
- **State Management:** React hooks (useState, useEffect)
- **Styling:** Tailwind CSS utility classes
- **Navigation:** Next.js Link components

### Key Components

#### Navbar (`components/Navbar.tsx`)
```typescript
// Glassmorphism navigation bar
- Fixed positioning (top-6)
- Uses Next.js Link for routing
- Active state tracking with usePathname
- Responsive with mobile menu button
- Glass effect: backdrop-blur-xl + gradient backgrounds
```

#### LoadingPage (`components/LoadingPage.tsx`)
```typescript
// Full-screen loading animation
- FYSION CPU architecture animation
- Persistent light rays background
- Smooth transitions with duration-[2000ms]
- State-based visibility control
```

#### GooeyText (`components/GooeyText.tsx`)
```typescript
// SVG-based text morphing animation
- Uses SVG filters (feColorMatrix)
- Cycles through texts once, stops at "Fysion"
- Configurable morphTime and cooldownTime
- Responsive text sizing
```

#### LightRays (`components/LightRays.tsx`)
```typescript
// WebGL light ray background using OGL library
- Mouse-following rays
- Pulsating animation
- Customizable: color, speed, spread, length
- Performance optimized with Intersection Observer
```

---

## 3. Frameworks & Libraries

### Core Stack
```json
{
  "react": "^18.3.1",
  "next": "^14.2.15",
  "typescript": "^5.6.3"
}
```

### Styling
```json
{
  "tailwindcss": "^3.4.14",
  "postcss": "^8.4.47",
  "autoprefixer": "^10.4.20",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.4"
}
```

### Utilities
```typescript
// lib/utils.ts - cn() utility for class merging
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

### Graphics
```json
{
  "ogl": "^1.0.11" // WebGL rendering for LightRays
}
```

### Build System
- **Bundler:** Next.js built-in (Turbopack/Webpack)
- **TypeScript:** Strict mode enabled
- **Module Resolution:** Bundler mode

---

## 4. Asset Management

### Directory Structure
```
app/
  - favicon.ico (should be placed here)
public/ (standard Next.js public directory)
  - images/
  - videos/
```

### Import Pattern
```typescript
// Images
import Image from 'next/image';
<Image src="/images/logo.png" alt="..." width={} height={} />

// Static assets referenced with /path
<img src="/images/hero.jpg" alt="..." />
```

### Optimization
- Next.js Image component for automatic optimization
- WebP/AVIF format support
- Lazy loading by default

---

## 5. Icon System

### Current Implementation
No dedicated icon library yet. Using inline SVG for mobile menu:

```tsx
<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
```

### Recommended Addition
For Figma integration, consider:
- **Lucide React** or **Heroicons** for consistent icon set
- SVG sprites for custom icons exported from Figma

---

## 6. Styling Approach

### Methodology
**Utility-First with Tailwind CSS**

### Glass Effect Pattern (Core Brand Style)
```tsx
className="bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10"

// Breakdown:
// - Gradient background with transparency
// - backdrop-blur-xl for frosted glass
// - border-white/10 for subtle edge definition
```

### Animation Patterns
```css
/* Custom animations in globals.css */
@keyframes glow-pulse {
  0%, 100% { filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)); }
  50% { filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.5)); }
}

@keyframes text-glow {
  0%, 100% { text-shadow: 0 0 40px rgba(255, 255, 255, 0.8)... }
  50% { text-shadow: 0 0 50px rgba(255, 255, 255, 1)... }
}

/* Applied via */
className="animate-glow-pulse"
className="animate-text-glow"
```

### Transition Pattern
```tsx
// Standard transitions
className="transition-all duration-300"

// Custom durations for complex animations
className="transition-all duration-[2000ms] ease-in-out"
className="transition-opacity duration-[3000ms] ease-out"
```

### Responsive Design
```tsx
// Mobile-first breakpoints
className="text-4xl md:text-5xl lg:text-6xl"
className="hidden md:flex"
className="grid md:grid-cols-3"
```

---

## 7. Project Structure

```
fy/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page (/)
│   ├── globals.css          # Global styles, custom animations
│   ├── about/
│   │   └── page.tsx         # /about route
│   ├── projects/
│   │   └── page.tsx         # /projects route
│   ├── pricing/
│   │   └── page.tsx         # /pricing route
│   └── crew/
│       └── page.tsx         # /crew route
├── components/               # Reusable UI components (separate files)
│   ├── Navbar.tsx
│   ├── LoadingPage.tsx
│   ├── GooeyText.tsx
│   ├── LightRays.tsx
│   └── CpuArchitecture.tsx
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── styles/
│   └── cpu-animation.css    # Specific component styles
├── types/
│   └── ogl.d.ts            # TypeScript declarations
├── public/                  # Static assets
├── .cursor/
│   └── rules/              # Project rules and guidelines
└── [config files]
```

---

## 8. Figma to Code Integration Guidelines

### Component Mapping
When importing from Figma:

1. **Containers → Sections**
   ```tsx
   <section className="min-h-screen flex items-center justify-center px-6">
   ```

2. **Cards → Glass Components**
   ```tsx
   <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
   ```

3. **Buttons → Links/Buttons**
   ```tsx
   // Primary CTA
   <Link className="px-8 py-4 rounded-full bg-white text-black">
   
   // Secondary CTA
   <Link className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
   ```

### Color Extraction
Figma colors should map to:
- Pure white (#FFFFFF) → `text-white`, `bg-white`
- Pure black (#000000) → `bg-black`
- Gray variants → `text-gray-300`, `text-gray-400`
- Opacity → `/10`, `/20`, `/30`, `/40`, `/60`, `/80`

### Spacing Conversion
Figma px values → Tailwind classes:
- 4px → `1` (spacing unit)
- 8px → `2`
- 16px → `4`
- 24px → `6`
- 32px → `8`
- 48px → `12`
- 64px → `16`

### Typography Mapping
Extract font settings from Figma:
- Font family → Use system default or add to `tailwind.config.ts`
- Font size → Match to Tailwind scale (`text-xl`, `text-2xl`, etc.)
- Font weight → `font-bold`, `font-semibold`, `font-medium`
- Line height → `leading-relaxed`, `leading-loose`
- Letter spacing → `tracking-wider`, `tracking-wide`

### Export Guidelines
When exporting from Figma:
1. **Images:** Export as WebP or PNG, place in `public/images/`
2. **Icons:** Export as SVG, consider creating React components
3. **Animations:** Document interaction details, implement with Tailwind transitions
4. **Responsive:** Ensure mobile, tablet, desktop variants are specified

---

## 9. Component Creation Pattern

### File Structure (Per User Preference)
Create **separate files** for each component:

```typescript
// components/NewComponent.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NewComponentProps {
  className?: string;
  // ... other props
}

export function NewComponent({ className, ...props }: NewComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      {/* Component content */}
    </div>
  );
}
```

### Naming Conventions
- Components: PascalCase (`Navbar`, `GooeyText`)
- Files: PascalCase matching component name
- Props interfaces: `ComponentNameProps`
- CSS classes: kebab-case for custom classes

---

## 10. Animation System

### Transition Durations
```typescript
// Quick interactions
duration-300 (300ms) - hovers, small state changes

// Medium animations  
duration-[1500ms] - component entrances
duration-[1800ms] - text animations

// Long transitions
duration-[2000ms] - screen transitions
duration-[3000ms] - background effects
```

### Easing Functions
```typescript
ease-in-out // Standard
ease-out    // Entrances
ease-in     // Exits
```

### Custom Keyframes
Define in `app/globals.css`, apply via Tailwind:
```css
@keyframes custom-animation {
  /* keyframes */
}

.animate-custom-animation {
  animation: custom-animation 2s ease-in-out infinite;
}
```

---

## 11. Best Practices

### Performance
- Use Next.js Image component for images
- Implement lazy loading for heavy components
- Use `backdrop-blur` sparingly (GPU intensive)
- Optimize WebGL components (LightRays uses Intersection Observer)

### Accessibility
- Include `alt` text for images
- Use semantic HTML (`<nav>`, `<section>`, `<main>`)
- Ensure sufficient color contrast (white on black meets WCAG)
- Add ARIA labels where needed

### Code Organization
- One component per file
- Group related utilities in `/lib`
- Keep route-specific code in route folders
- Shared UI logic in `/components`

### Type Safety
- Always define TypeScript interfaces for props
- Use proper Next.js types (`Metadata`, `PageProps`)
- Leverage TypeScript strict mode

---

## 12. Integration Checklist

When integrating Figma designs:

- [ ] Extract design tokens (colors, spacing, typography)
- [ ] Map components to existing component library
- [ ] Create new components in separate files
- [ ] Apply glassmorphism style guide
- [ ] Ensure responsive design (mobile, tablet, desktop)
- [ ] Add proper transitions and animations
- [ ] Test with actual content
- [ ] Verify accessibility
- [ ] Optimize images and assets
- [ ] Run linter checks (`npm run lint`)

---

**Last Updated:** 2025-10-13  
**Maintained by:** Fysion Development Team





