"use client";

import React from "react";

export function BrandedText() {
  return (
    <div className="space-y-12">
      {/* FYSION Section */}
      <div className="group">
        <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          FYSION
        </h3>
        <div className="flex items-center gap-3 text-gray-400 text-base md:text-lg">
          <span className="group-hover:text-white transition-colors">Design</span>
          <span className="text-white/30">·</span>
          <span className="group-hover:text-white transition-colors">Code</span>
          <span className="text-white/30">·</span>
          <span className="group-hover:text-white transition-colors">Market</span>
        </div>
      </div>

      {/* POWERED BY Section */}
      <div className="group">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
          Powered By
        </p>
        <div className="flex items-center gap-3 text-gray-300 text-base md:text-lg">
          <span className="group-hover:text-white transition-colors">Creativity</span>
          <span className="text-white/30">·</span>
          <span className="group-hover:text-white transition-colors">Strategy</span>
          <span className="text-white/30">·</span>
          <span className="group-hover:text-white transition-colors">Tech</span>
        </div>
      </div>

      {/* FOCUSED ON Section */}
      <div className="group">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
          Focused On
        </p>
        <p className="text-xl md:text-2xl text-white font-medium group-hover:tracking-wide transition-all">
          Building Digital Experiences
        </p>
      </div>
    </div>
  );
}

