"use client";

import { Navbar } from "@/components/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      
      <main className="relative z-20 min-h-screen pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Projects
          </h1>
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
            <p>
              Discover our portfolio of successful projects that have helped 
              businesses transform their digital presence and achieve their goals.
            </p>
            {/* Project cards will go here */}
          </div>
        </div>
      </main>
    </>
  );
}






