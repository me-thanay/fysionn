"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TransitionLink } from "./TransitionLink";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "Crew", href: "/crew" }
];

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 max-w-[95%] mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
        <div className="relative px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <TransitionLink href="/home" className="flex items-center space-x-3 transition-opacity hover:opacity-80">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <span className="text-white text-lg font-bold">F</span>
            </div>
            <span className="text-white text-xl font-bold tracking-wider">
              FYSION
            </span>
          </TransitionLink>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <TransitionLink
                key={link.name}
                href={link.href}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative",
                  activeSection === link.href
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </TransitionLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

