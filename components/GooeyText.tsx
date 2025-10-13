"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let cycleCount = 0;
    let animationId: number;
    let shouldStop = false;

    const setMorph = (fraction: number) => {
      if (text1Ref.current && text2Ref.current) {
        // Smoother easing function
        const easedFraction = fraction < 0.5 
          ? 2 * fraction * fraction 
          : 1 - Math.pow(-2 * fraction + 2, 2) / 2;
        
        const blur = Math.min(6 / easedFraction - 6, 50);
        text2Ref.current.style.filter = `blur(${Math.max(0, blur)}px)`;
        text2Ref.current.style.opacity = `${Math.pow(easedFraction, 0.3) * 100}%`;

        const reverseFraction = 1 - easedFraction;
        const reverseBlur = Math.min(6 / reverseFraction - 6, 50);
        text1Ref.current.style.filter = `blur(${Math.max(0, reverseBlur)}px)`;
        text1Ref.current.style.opacity = `${Math.pow(reverseFraction, 0.3) * 100}%`;
      }
    };

    const doCooldown = () => {
      morph = 0;
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    function animate() {
      if (shouldStop) return;
      
      animationId = requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = Math.min((newTime.getTime() - time.getTime()) / 1000, 0.1); // Cap dt to prevent jumps
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          
          // Check if we've completed one full cycle and are back to "Fysion"
          if (textIndex === 0 && cycleCount > 0) {
            shouldStop = true;
            if (text1Ref.current && text2Ref.current) {
              text1Ref.current.textContent = texts[0]; // "Fysion"
              text2Ref.current.style.opacity = "0%";
              text1Ref.current.style.opacity = "100%";
              text1Ref.current.style.filter = "";
              text2Ref.current.style.filter = "";
            }
            return;
          }
          
          if (textIndex === 0) {
            cycleCount++;
          }
          
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
          }
        }
        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center"
        style={{ filter: "url(#threshold)" }}
      >
      <span
        ref={text1Ref}
        className={cn(
          "absolute inline-block select-none text-center text-3xl md:text-4xl lg:text-5xl",
          "text-foreground will-change-[filter,opacity]",
          textClassName
        )}
        style={{ transform: 'translateZ(0)' }}
      />
      <span
        ref={text2Ref}
        className={cn(
          "absolute inline-block select-none text-center text-3xl md:text-4xl lg:text-5xl",
          "text-foreground will-change-[filter,opacity]",
          textClassName
        )}
        style={{ transform: 'translateZ(0)' }}
      />
      </div>
    </div>
  );
}

