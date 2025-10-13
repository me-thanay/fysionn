"use client";

import React, { useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "NexaTech Platform",
    category: "Web App",
    tags: ["React", "Node.js", "AI"],
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    icon: "🚀",
    description: "AI-powered SaaS platform serving 10k+ users"
  },
  {
    id: 2,
    title: "UrbanFlow",
    category: "E-commerce",
    tags: ["Next.js", "Shopify", "3D"],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    icon: "🛍️",
    description: "Modern fashion e-commerce with AR try-on"
  },
  {
    id: 3,
    title: "MindSync",
    category: "Mobile App",
    tags: ["React Native", "ML", "Health"],
    gradient: "from-orange-500 via-red-500 to-pink-500",
    icon: "🧠",
    description: "Mental wellness app with smart insights"
  },
  {
    id: 4,
    title: "EcoTrace",
    category: "Dashboard",
    tags: ["Vue", "D3.js", "Analytics"],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    icon: "🌿",
    description: "Sustainability tracking for enterprises"
  }
];

export function ProjectShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {projects.map((project, index) => {
          const isHovered = hoveredId === project.id;
          
          return (
            <Link
              key={project.id}
              href="/projects"
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative overflow-hidden rounded-3xl transition-all duration-700 ${
                  isHovered ? "scale-105 -rotate-1" : "scale-100 rotate-0"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                  isHovered 
                    ? "bg-gradient-to-r from-white/20 via-white/40 to-white/20" 
                    : "bg-white/10"
                }`} style={{ padding: "1px" }}>
                  <div className="h-full w-full rounded-3xl bg-black" />
                </div>

                {/* Content */}
                <div className="relative p-10 h-full flex flex-col justify-between min-h-[400px]">
                  {/* Top Section */}
                  <div>
                    <div className={`text-5xl mb-6 transition-all duration-500 ${
                      isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"
                    }`}>
                      {project.icon}
                    </div>
                    
                    <div className="mb-4">
                      <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs text-white/70 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    <h3 className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                      isHovered 
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400" 
                        : "text-white"
                    }`}>
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-base mb-6 group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className={`flex items-center gap-2 text-white transition-all duration-300 ${
                      isHovered ? "translate-x-2" : "translate-x-0"
                    }`}>
                      <span>View Project</span>
                      <span className={`transition-transform duration-300 ${
                        isHovered ? "translate-x-2" : "translate-x-0"
                      }`}>→</span>
                    </div>
                  </div>

                  {/* Glow effect */}
                  {isHovered && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 blur-2xl transition-opacity duration-500`} />
                  )}
                </div>

                {/* Shine effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transition-all duration-700 ${
                  isHovered ? "translate-x-full" : "-translate-x-full"
                }`} 
                style={{ transform: isHovered ? "translateX(100%)" : "translateX(-100%)" }}
                />
              </div>

              {/* Shadow */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl -z-10 transition-opacity duration-500 rounded-3xl`}
              />
            </Link>
          );
        })}
      </div>

      {/* View All Link */}
      <div className="text-center mt-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white hover:from-white/20 hover:to-white/10 hover:border-white/30 transition-all duration-300 group"
        >
          <span className="font-semibold">Explore All Projects</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}

