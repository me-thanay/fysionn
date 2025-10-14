"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const outerLayerRef = useRef<HTMLDivElement>(null);
  const innerLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outerLayer = outerLayerRef.current;
    const innerLayer = innerLayerRef.current;

    if (!outerLayer || !innerLayer) return;

    // Resume Lenis scroll after transition
    const lenis = (window as any).lenis;

    // Create GSAP timeline for the "curtain reveal" animation
    const timeline = gsap.timeline({
      onComplete: () => {
        // Hide overlays after animation completes
        gsap.set([outerLayer, innerLayer], { display: "none" });
        // Resume Lenis smooth scroll
        if (lenis) {
          lenis.start();
        }
      },
    });

    // Animate curtain reveal - inner slides down, then both slide up
    timeline
      .to(innerLayer, {
        yPercent: 100,
        duration: 0.5,
        ease: "power3.inOut",
      })
      .to(
        outerLayer,
        {
          yPercent: 100,
          duration: 0.6,
          ease: "power3.inOut",
        },
        "-=0.3" // Overlap for smooth transition
      );

    return () => {
      timeline.kill();
    };
  }, [children]); // Re-run on route change

  return (
    <>
      {/* Two-layer overlay system */}
      <div
        id="transition-outer-layer"
        ref={outerLayerRef}
        className="fixed inset-0 z-[9999] bg-black pointer-events-none"
        style={{
          display: "none",
          transform: "translateY(-100%)",
        }}
      />
      <div
        id="transition-inner-layer"
        ref={innerLayerRef}
        className="fixed inset-0 z-[10000] bg-white pointer-events-none"
        style={{
          display: "none",
          transform: "translateY(-100%)",
        }}
      />

      {/* Page content */}
      <div className="relative">{children}</div>
    </>
  );
}

