"use client";

import { Navbar } from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      
      <main className="relative z-20 min-h-screen pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            About
          </h1>
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
            <p>
              We are a creative digital agency focused on delivering exceptional 
              digital experiences. Our expertise spans across digital marketing, 
              web design, and ongoing maintenance to ensure your digital presence 
              stands out.
            </p>
            <p>
              At Fysion, we believe in the power of design and technology to 
              transform businesses and create meaningful connections with audiences.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

