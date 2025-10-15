"use client";

import { Navbar } from "@/components/Navbar";

export default function Pricing() {
  return (
    <>
      <Navbar />
      
      <main className="relative z-20 min-h-screen pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Pricing
          </h1>
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
            <p>
              Transparent pricing tailored to your needs. We offer flexible 
              packages designed to fit businesses of all sizes.
            </p>
            {/* Pricing cards will go here */}
          </div>
        </div>
      </main>
    </>
  );
}





