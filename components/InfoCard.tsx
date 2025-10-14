"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  gradient?: string;
  delay?: number;
  className?: string;
}

export function InfoCard({
  icon,
  title,
  description,
  gradient = "from-white/5 via-white/[0.02] to-transparent",
  delay = 0,
  className,
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "group relative p-8 rounded-3xl backdrop-blur-sm border border-white/10",
        "hover:border-white/30 transition-all duration-500 hover:scale-[1.02]",
        "bg-gradient-to-br smooth-transform",
        gradient,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon */}
      <div className="relative mb-6 text-6xl group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>

      {/* Content */}
      <div className="relative space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
    </div>
  );
}

