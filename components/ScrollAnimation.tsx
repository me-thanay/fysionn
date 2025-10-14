"use client";

import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "custom";
  scrub?: boolean | number;
  start?: string;
  end?: string;
  markers?: boolean;
  className?: string;
  customAnimation?: Record<string, any>;
}

export function ScrollAnimation({
  children,
  animation = "fade-up",
  scrub = true,
  start = "top 80%",
  end = "top 20%",
  markers = false,
  className,
  customAnimation,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Integrate with Lenis
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
    }

    // Set initial state based on animation type
    let fromVars: Record<string, any> = {};
    let toVars: Record<string, any> = {};

    if (customAnimation) {
      toVars = customAnimation;
    } else {
      switch (animation) {
        case "fade-up":
          fromVars = { opacity: 0, y: 60 };
          toVars = { opacity: 1, y: 0 };
          break;
        case "fade-down":
          fromVars = { opacity: 0, y: -60 };
          toVars = { opacity: 1, y: 0 };
          break;
        case "fade-left":
          fromVars = { opacity: 0, x: 60 };
          toVars = { opacity: 1, x: 0 };
          break;
        case "fade-right":
          fromVars = { opacity: 0, x: -60 };
          toVars = { opacity: 1, x: 0 };
          break;
        case "scale":
          fromVars = { opacity: 0, scale: 0.8 };
          toVars = { opacity: 1, scale: 1 };
          break;
        default:
          fromVars = { opacity: 0 };
          toVars = { opacity: 1 };
      }
    }

    // Set initial state
    gsap.set(element, fromVars);

    // Create scroll-triggered animation
    const tween = gsap.to(element, {
      ...toVars,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        scrub: scrub,
        markers: markers,
        invalidateOnRefresh: true,
      },
    });

    // Cleanup
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, scrub, start, end, markers, customAnimation]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

