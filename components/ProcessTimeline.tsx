"use client";

import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: "💡",
    title: "Discover",
    description: "We dive deep into understanding your vision, goals, and challenges",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: "🎯",
    title: "Strategy",
    description: "Crafting a roadmap tailored to achieve your objectives",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: "✨",
    title: "Design",
    description: "Creating stunning visuals that captivate and engage",
    gradient: "from-pink-500/20 to-orange-500/20"
  },
  {
    icon: "⚙️",
    title: "Develop",
    description: "Building robust solutions with cutting-edge technology",
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    icon: "🚀",
    title: "Launch",
    description: "Deploying your project and celebrating success together",
    gradient: "from-yellow-500/20 to-green-500/20"
  }
];

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate through steps
          let currentStep = 0;
          const interval = setInterval(() => {
            setActiveStep(currentStep);
            currentStep++;
            if (currentStep >= steps.length) {
              clearInterval(interval);
            }
          }, 400);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {/* Animated connecting line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/10 via-white/30 to-white/10 hidden lg:block">
        <div 
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white via-white/80 to-transparent transition-all duration-1000"
          style={{ 
            height: `${(activeStep + 1) * (100 / steps.length)}%`,
          }}
        />
      </div>

      <div className="space-y-16 lg:space-y-24">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const isActive = activeStep >= index;

          return (
            <div
              key={index}
              className={`relative flex items-center ${
                isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex-col gap-8 lg:gap-16`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"} text-center`}>
                <div
                  className={`relative p-8 rounded-3xl bg-gradient-to-br ${step.gradient} backdrop-blur-sm border border-white/20 transition-all duration-700 ${
                    isActive
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 text-base">{step.description}</p>
                  
                  {/* Pulse effect */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-3xl bg-white/5 animate-ping" 
                         style={{ animationDuration: "2s", animationIterationCount: 1 }} 
                    />
                  )}
                </div>
              </div>

              {/* Center Node */}
              <div className="relative z-10 hidden lg:block">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? "bg-white text-black shadow-2xl shadow-white/50 scale-110"
                      : "bg-white/10 text-white/40 scale-90"
                  }`}
                >
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                
                {/* Ripple effect */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" 
                       style={{ animationDuration: "1.5s" }}
                  />
                )}
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden lg:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

