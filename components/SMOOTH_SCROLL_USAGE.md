# Smooth Scrolling Implementation Guide

## Overview
Your app now has butter-smooth scrolling powered by **Lenis** and **GSAP ScrollTrigger**. This creates a premium, native-feeling scroll experience with GPU-accelerated animations.

## What's Been Added

### 1. **SmoothScrollProvider** 
Wraps your entire app in `app/layout.tsx` to provide:
- Smooth, eased scroll with custom duration (1.2s)
- requestAnimationFrame-based updates (60fps)
- Touch and wheel input smoothing
- Automatic integration with GSAP ScrollTrigger

### 2. **ScrollAnimation Component**
Animate any element as users scroll with pre-built animations or custom ones.

### 3. **GPU-Optimized CSS Utilities**
Added to `globals.css` for maximum performance:
- `.gpu-accelerated` - Forces hardware acceleration
- `.smooth-transform` - Optimizes transform animations
- `.transition-smooth` - Smooth transitions with GPU optimization
- `.hover-lift` / `.hover-scale` - Hardware-accelerated hover effects
- Container containment utilities

## How to Use

### Basic Scroll Animation

```tsx
import { ScrollAnimation } from "@/components/ScrollAnimation";

export default function MyPage() {
  return (
    <div>
      <ScrollAnimation animation="fade-up">
        <h1>This fades up as you scroll</h1>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-left">
        <p>This fades from the left</p>
      </ScrollAnimation>

      <ScrollAnimation animation="scale" scrub={1.5}>
        <div>This scales in (slower scrub)</div>
      </ScrollAnimation>
    </div>
  );
}
```

### Available Animation Types
- `fade-up` - Fades in from below (default)
- `fade-down` - Fades in from above
- `fade-left` - Fades in from right
- `fade-right` - Fades in from left
- `scale` - Scales up from 80%
- `custom` - Use your own GSAP animation

### Custom GSAP Animation

```tsx
<ScrollAnimation
  customAnimation={{
    opacity: 1,
    y: 0,
    rotate: 360,
    scale: 1,
  }}
  start="top 90%"
  end="top 30%"
>
  <div>Custom animation</div>
</ScrollAnimation>
```

### Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | `string` | `"fade-up"` | Pre-built animation type |
| `scrub` | `boolean \| number` | `true` | Smooth scrubbing (true = follow scroll) |
| `start` | `string` | `"top 80%"` | When animation starts |
| `end` | `string` | `"top 20%"` | When animation completes |
| `markers` | `boolean` | `false` | Show ScrollTrigger markers (debug) |
| `customAnimation` | `gsap.TweenVars` | `undefined` | Custom GSAP animation |

## GPU-Optimized Classes

Use these Tailwind-compatible classes for smooth performance:

```tsx
// Basic GPU acceleration
<div className="gpu-accelerated">
  Fast animations here
</div>

// Smooth transitions
<button className="transition-smooth hover:scale-105">
  Click me
</button>

// Hover effects
<div className="hover-lift">
  Lifts on hover
</div>

<div className="hover-scale">
  Scales on hover
</div>

// Performance containment
<section className="contain-layout">
  Isolated layout calculations
</section>
```

## Best Practices

### ✅ DO
1. **Use transform/opacity** - They're GPU-accelerated
   ```tsx
   className="transition-smooth hover:translate-y-[-4px]"
   ```

2. **Add `scrub` for scroll-tied motion** - Creates that "connected" feel
   ```tsx
   <ScrollAnimation scrub={true}>
   ```

3. **Group animations** - Wrap sections for coordinated effects
   ```tsx
   <ScrollAnimation animation="fade-up">
     <section>
       <h1>Title</h1>
       <p>Content</p>
     </section>
   </ScrollAnimation>
   ```

### ❌ DON'T
1. **Avoid animating layout properties** - No width/height/padding/margin
2. **Don't overuse will-change** - Already handled by utilities
3. **Don't nest too many ScrollAnimations** - Can impact performance

## Examples in Your App

### Hero Section
```tsx
<ScrollAnimation animation="fade-up" scrub={1}>
  <h1 className="text-6xl font-bold">Welcome to Fysion</h1>
</ScrollAnimation>
```

### Project Cards
```tsx
<div className="grid grid-cols-3 gap-4">
  {projects.map((project, i) => (
    <ScrollAnimation
      key={i}
      animation="scale"
      start="top 85%"
      end="top 40%"
    >
      <div className="transition-smooth hover-scale">
        {project.content}
      </div>
    </ScrollAnimation>
  ))}
</div>
```

### Parallax Effect
```tsx
<ScrollAnimation
  customAnimation={{
    y: -100, // Moves up as you scroll down
    opacity: 1,
  }}
  scrub={2} // Slower = more parallax
>
  <div className="gpu-accelerated">
    Background element
  </div>
</ScrollAnimation>
```

## Performance Tips

1. **Lenis handles scroll smoothing** - No need for CSS `scroll-behavior`
2. **ScrollTrigger auto-updates** - Synced with Lenis scroll
3. **GPU acceleration** - All animations use `transform: translateZ(0)`
4. **60fps target** - Runs on requestAnimationFrame
5. **Mobile optimized** - Touch smoothing disabled by default for native feel

## Debugging

Enable markers to see trigger points:
```tsx
<ScrollAnimation markers={true} animation="fade-up">
  <div>Watch the scroll triggers</div>
</ScrollAnimation>
```

---

**Result:** Your app now has that premium, Apple-like scroll feel with perfectly timed, jank-free animations! 🚀

