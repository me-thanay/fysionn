"use client";

import { useRouter } from "next/navigation";
import { ReactNode, MouseEvent } from "react";
import { gsap } from "gsap";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function TransitionLink({ href, children, className }: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Get the overlay elements
    const outerLayer = document.getElementById("transition-outer-layer");
    const innerLayer = document.getElementById("transition-inner-layer");

    if (!outerLayer || !innerLayer) {
      // Fallback if overlays don't exist
      router.push(href);
      return;
    }

    // Stop Lenis scroll during transition
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.stop();
    }

    // Create GSAP timeline for the "curtain close" animation
    const timeline = gsap.timeline({
      onComplete: () => {
        // Navigate after the curtain closes
        router.push(href);
      },
    });

    // Animate both layers covering the screen
    timeline
      .set([outerLayer, innerLayer], {
        display: "block",
        yPercent: -100,
      })
      .to(innerLayer, {
        yPercent: 0,
        duration: 0.6,
        ease: "power3.inOut",
      })
      .to(
        outerLayer,
        {
          yPercent: 0,
          duration: 0.5,
          ease: "power3.inOut",
        },
        "-=0.4" // Overlap timing for smooth effect
      );
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

