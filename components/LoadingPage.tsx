"use client";

import React from "react";
import { CpuArchitecture } from "./CpuArchitecture";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Loading Animation */}
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        <div className="w-full max-w-2xl px-8 animate-glow-pulse">
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
    </div>
  );
};

export { LoadingPage };
