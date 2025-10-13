"use client";

import React, { useState, useEffect } from "react";
import { CpuArchitecture } from "./CpuArchitecture";
import LightRays from "./LightRays";
import { GooeyText } from "./GooeyText";

const LoadingPage = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 4500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`fixed inset-0 ${showLoading ? "z-50" : "z-0"}`}>
      {/* Persistent Light Rays Background */}
      <div className={`absolute inset-0 transition-opacity duration-[3000ms] ease-out delay-[4500ms] ${
        !showLoading ? "opacity-70" : "opacity-0"
      }`}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.9}
          rayLength={2.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.08}
          pulsating={true}
        />
      </div>

      {/* Loading Animation */}
      <div
        className={`absolute inset-0 bg-black flex items-center justify-center transition-all duration-[2000ms] ease-in-out ${
          showLoading 
            ? "opacity-100 scale-100 blur-0 rotate-0" 
            : "opacity-0 scale-90 blur-md -rotate-2 pointer-events-none"
        }`}
      >
        <div className={`w-full max-w-2xl px-8 transition-all duration-[2000ms] ease-out ${
          showLoading ? "scale-100 animate-glow-pulse translate-y-0" : "scale-110 -translate-y-8"
        }`}>
          <CpuArchitecture
            className="w-full h-auto"
            text="FYSION"
            showCpuConnections={true}
            animateText={true}
            animateLines={true}
            animateMarkers={true}
          />
        </div>
      </div>

      {/* Hello Screen - Only shows during loading transition */}
      {!showLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-[2200ms] ease-out opacity-100 scale-100 blur-0 rotate-0"
        >
          <div 
            className="transition-all duration-[1800ms] delay-200 opacity-100 translate-y-0 scale-100"
          >
            <GooeyText
              texts={[
                "Fysion",
                "Digital Marketing that Works",
                "Websites that Wow",
                "Designs that Speak",
                "Maintenance that Matters"
              ]}
              morphTime={1.5}
              cooldownTime={1.5}
              textClassName="text-white font-bold tracking-wider animate-text-glow"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { LoadingPage };
