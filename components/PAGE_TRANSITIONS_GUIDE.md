# 🎬 Sexy Page Transition System

## Overview
Your app now has **premium two-layer curtain transitions** that create a polished, cinema-quality page change effect. This works seamlessly with your Lenis smooth scroll.

## How It Works

### The Magic Sequence

1. **User clicks a TransitionLink** → Click intercepted
2. **Lenis scroll stops** → Prevents scroll during transition
3. **Two-layer curtain closes** → White layer slides down, then black layer follows
4. **Navigation happens** → Router pushes to new route
5. **Curtain reveals** → Black layer slides up, then white layer follows
6. **Lenis resumes** → Smooth scrolling restored

### The Components

#### 1. `TransitionLink` Component
Replaces standard `<a>` or Next.js `<Link>` tags for internal navigation.

```tsx
import { TransitionLink } from "@/components/TransitionLink";

// Basic usage
<TransitionLink href="/about">About Us</TransitionLink>

// With styling
<TransitionLink 
  href="/pricing" 
  className="btn-primary hover:scale-105"
>
  View Pricing
</TransitionLink>

// As a wrapper
<TransitionLink href="/projects" className="group block">
  <div className="project-card">
    {/* Card content */}
  </div>
</TransitionLink>
```

#### 2. `app/template.tsx`
Automatically handles the "reveal" animation when a new page loads. This runs on every route change.

- **Two layers**: White (inner, z-index 10000) and Black (outer, z-index 9999)
- **GSAP Timeline**: Precisely timed reveal animation
- **Auto-cleanup**: Hides overlays after transition completes

## Where It's Already Implemented

✅ **Navbar** - All navigation links  
✅ **Home Page** - Service cards, CTA buttons, footer links  
✅ **All Internal Links** - Ready to go!

## Usage Guide

### Replace All Internal Links

**❌ OLD WAY:**
```tsx
<a href="/about">About</a>
// or
<Link href="/about">About</Link>
```

**✅ NEW WAY:**
```tsx
<TransitionLink href="/about">About</TransitionLink>
```

### Keep External Links as `<a>` Tags

```tsx
{/* External links - NO transition */}
<a href="https://twitter.com" target="_blank" rel="noopener">
  Twitter
</a>

{/* Email links - NO transition */}
<a href="mailto:hello@fysion.com">Email Us</a>
```

### Button Wrappers

When wrapping complex elements:

```tsx
<TransitionLink href="/projects" className="group">
  <div className="project-card hover:scale-105 transition-all">
    <img src="project.jpg" alt="Project" />
    <h3>Amazing Project</h3>
    <p>Click to view details</p>
  </div>
</TransitionLink>
```

## Customization

### Change Transition Speed

Edit `components/TransitionLink.tsx`:

```tsx
// Faster curtain close
timeline
  .to(innerLayer, {
    yPercent: 0,
    duration: 0.4,  // Was 0.6
    ease: "power3.inOut",
  })
```

Edit `app/template.tsx`:

```tsx
// Faster curtain reveal
timeline
  .to(innerLayer, {
    yPercent: 100,
    duration: 0.3,  // Was 0.5
    ease: "power3.inOut",
  })
```

### Change Overlay Colors

Edit `app/template.tsx`:

```tsx
// Change from white/black to custom colors
<div
  id="transition-outer-layer"
  className="fixed inset-0 z-[9999] bg-purple-900"  // Was bg-black
/>
<div
  id="transition-inner-layer"
  className="fixed inset-0 z-[10000] bg-cyan-400"  // Was bg-white
/>
```

### Change Animation Direction

Instead of sliding vertically, slide horizontally:

```tsx
// In TransitionLink.tsx
.set([outerLayer, innerLayer], {
  xPercent: -100,  // Changed from yPercent
})
.to(innerLayer, {
  xPercent: 0,     // Changed from yPercent
  duration: 0.6,
  ease: "power3.inOut",
})
```

### Add Sound Effects

```tsx
// In TransitionLink.tsx - add before timeline
const swooshSound = new Audio('/sounds/swoosh.mp3');
swooshSound.play();

const timeline = gsap.timeline({ ... });
```

## Technical Details

### Why This Feels So Smooth

1. **GPU-Accelerated** - Uses `transform: translateY()` (not top/bottom)
2. **Fixed Positioning** - No layout recalculation during animation
3. **Overlapping Timelines** - Inner/outer layers animate together with `-=` offset
4. **Lenis Integration** - Scroll stops/starts at perfect moments
5. **GSAP Easing** - `power3.inOut` creates that premium feel

### Performance

- **60fps** animations via GSAP
- **No layout thrashing** - only transforms
- **Pointer-events: none** - overlays don't block clicks
- **Display: none** when inactive - no GPU memory when not animating

### Z-Index Stack

```
10000 - White inner layer (highest)
9999  - Black outer layer
50    - Navbar
20    - Page content
```

## Debugging

### Enable Transition Markers

In `TransitionLink.tsx`, add console logs:

```tsx
const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  console.log("🎬 Transition starting to:", href);
  
  // ... existing code ...
  
  const timeline = gsap.timeline({
    onComplete: () => {
      console.log("✅ Curtain closed, navigating...");
      router.push(href);
    },
  });
};
```

### Check Overlay Elements

Open DevTools and inspect:
- `#transition-outer-layer` should exist
- `#transition-inner-layer` should exist
- Both should have `display: none` when inactive

### Fallback Behavior

If overlays don't exist, TransitionLink falls back to instant navigation:

```tsx
if (!outerLayer || !innerLayer) {
  // Fallback - just navigate
  router.push(href);
  return;
}
```

## Examples from Your Site

### Navbar Navigation
```tsx
<TransitionLink href="/about" className="nav-link">
  About
</TransitionLink>
```

### Service Cards
```tsx
<TransitionLink href="/about" className="group block">
  <div className="service-card">
    <h3>Web Design</h3>
    <p>Learn more →</p>
  </div>
</TransitionLink>
```

### CTA Buttons
```tsx
<TransitionLink 
  href="/pricing"
  className="btn-primary px-10 py-5 rounded-full"
>
  Start Your Project
</TransitionLink>
```

## Best Practices

✅ **DO:**
- Use TransitionLink for all internal routes
- Keep external links as regular `<a>` tags
- Test on mobile (touch events work!)
- Adjust timings to match your brand feel

❌ **DON'T:**
- Use for anchor links (`#section`)
- Use for external URLs
- Nest TransitionLinks inside each other
- Remove the `e.preventDefault()` call

---

## Result

Every click now triggers that **sexy curtain wipe** that makes your site feel like a premium app. The two-layer design creates depth, and the precise GSAP timing makes it feel snappy yet smooth. Combined with Lenis scroll, your entire navigation experience is now world-class! 🚀

