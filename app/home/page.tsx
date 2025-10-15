"use client";

import { Navbar } from "@/components/Navbar";
import LightRays from "@/components/LightRays";
import { GooeyText } from "@/components/GooeyText";
import { BrandedText } from "@/components/BrandedText";
import RadialOrbitalTimeline, { defaultProcessData } from "@/components/RadialOrbitalTimeline";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { TransitionLink } from "@/components/TransitionLink";
import { useState, useEffect, useMemo } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Fade in content smoothly
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const texts = useMemo(() => [
    "Fysion",
    "Digital Marketing that Works",
    "Websites that Wow",
    "Designs that Speak",
    "Maintenance that Matters"
  ], []);

  return (
    <>
      <Navbar />
      
      <main className={`relative z-20 transition-opacity duration-1000 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}>
        {/* Hero Section with GooeyText */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          {/* Light Rays - Only in Hero Section */}
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 transition-opacity duration-1000 ${
              showContent ? "opacity-70" : "opacity-0"
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
            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10"></div>
          </div>
          
          {/* GooeyText above light rays */}
          <div className="relative z-20 max-w-4xl mx-auto text-center">
            <GooeyText
              texts={texts}
              morphTime={1}
              cooldownTime={0.8}
              textClassName="text-white font-bold tracking-wider animate-text-glow"
            />
          </div>
        </section>

        {/* About Section - Clean Black Background */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 scroll-mt-20 bg-black">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - About Description */}
              <ScrollAnimation animation="fade-right" scrub={1}>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    About
                  </h2>
                  <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
                    <p className="hover:text-white transition-colors duration-300">
                      Fysion is a creative digital agency dedicated to transforming 
                      visions into reality through innovative design, cutting-edge 
                      development, and strategic marketing.
                    </p>
                    <p className="hover:text-white transition-colors duration-300">
                      We specialize in crafting digital experiences that not only 
                      look stunning but also drive measurable results for our clients.
                    </p>
                    <p className="hover:text-white transition-colors duration-300">
                      From web design and development to comprehensive digital marketing 
                      strategies, we bring together creativity, technology, and data-driven 
                      insights to help businesses thrive in the digital landscape.
                    </p>
                    <p className="hover:text-white transition-colors duration-300">
                      Our team is passionate about pushing boundaries and creating 
                      solutions that make a lasting impact.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Right - Branded Text Component */}
              <ScrollAnimation animation="fade-left" scrub={1}>
                <div className="relative">
                  <div className="p-12 rounded-3xl bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-white/5 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] smooth-transform">
                    <BrandedText />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services Section - Minimal with Redirect */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-black">
          <div className="max-w-7xl mx-auto w-full">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
                Our Services
              </h2>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <TransitionLink href="/about" className="group block">
                  <div className="p-10 rounded-3xl bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] h-full smooth-transform">
                    <div className="text-4xl mb-6">🎨</div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      Design
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      Creative solutions that capture attention and inspire action.
                    </p>
                    <div className="mt-6 text-white/50 group-hover:text-white transition-colors flex items-center gap-2">
                      Learn More <span>→</span>
                    </div>
                  </div>
                </TransitionLink>
              </ScrollAnimation>

              {/* Service 2 */}
              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <TransitionLink href="/about" className="group block">
                  <div className="p-10 rounded-3xl bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] h-full smooth-transform">
                    <div className="text-4xl mb-6">💻</div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      Development
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      Robust code that brings your digital vision to life.
                    </p>
                    <div className="mt-6 text-white/50 group-hover:text-white transition-colors flex items-center gap-2">
                      Learn More <span>→</span>
                    </div>
                  </div>
                </TransitionLink>
              </ScrollAnimation>

              {/* Service 3 */}
              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <TransitionLink href="/about" className="group block">
                  <div className="p-10 rounded-3xl bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] h-full smooth-transform">
                    <div className="text-4xl mb-6">📈</div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      Marketing
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      Strategic campaigns that drive growth and engagement.
                    </p>
                    <div className="mt-6 text-white/50 group-hover:text-white transition-colors flex items-center gap-2">
                      Learn More <span>→</span>
                    </div>
                  </div>
                </TransitionLink>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* How We Work Section - Radial Orbital Timeline */}
        <section className="relative min-h-screen h-screen flex flex-col items-center justify-start bg-black pt-12">
          <ScrollAnimation animation="fade-up" scrub={1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white z-20 relative">
              Our Process
            </h2>
          </ScrollAnimation>
          <div className="w-full flex-1 relative">
            <RadialOrbitalTimeline timelineData={defaultProcessData} />
          </div>
        </section>

        {/* Projects Section - Interactive Showcase */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-black">
          <div className="max-w-7xl mx-auto w-full">
            <ScrollAnimation animation="fade-down" scrub={1}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
                Featured Work
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="scale" scrub={1.5}>
              <ProjectShowcase />
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA Section - Redesigned */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-black overflow-hidden">
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="max-w-5xl mx-auto w-full text-center relative z-10">
            {/* Main heading with gradient */}
            <ScrollAnimation animation="fade-up" scrub={1}>
              <div className="mb-8">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
                    Let's Build
                  </span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                    Something Amazing
                  </span>
                </h2>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" scrub={1.2}>
              <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
                Your vision deserves exceptional execution. Let's turn your ideas into digital experiences that captivate and convert.
              </p>
            </ScrollAnimation>
            
            {/* CTA Buttons */}
            <ScrollAnimation animation="scale" scrub={1.5}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <TransitionLink
                  href="/pricing"
                  className="group relative px-10 py-5 rounded-full bg-white text-black font-bold text-base overflow-hidden transition-smooth hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-bold">
                    Let's Go →
                  </span>
                </TransitionLink>
                
                <TransitionLink
                  href="/about"
                  className="group px-10 py-5 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-base hover:border-white/40 hover:from-white/30 hover:to-white/20 transition-smooth relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Get in Touch</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </TransitionLink>
              </div>
            </ScrollAnimation>

            {/* Contact info with cards */}
            <ScrollAnimation animation="fade-up" scrub={1.8}>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="mailto:hello@fysion.com" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-smooth hover-lift">
                  <div className="text-2xl mb-3">✉️</div>
                  <p className="text-xs text-gray-500 mb-1">Email Us</p>
                  <p className="text-sm text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    hello@fysion.com
                  </p>
                </a>

                <TransitionLink href="/pricing" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-smooth hover-lift block">
                  <div className="text-2xl mb-3">💰</div>
                  <p className="text-xs text-gray-500 mb-1">View Plans</p>
                  <p className="text-sm text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    Pricing & Packages
                  </p>
                </TransitionLink>

                <TransitionLink href="/about" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-smooth hover-lift block">
                  <div className="text-2xl mb-3">📅</div>
                  <p className="text-xs text-gray-500 mb-1">Book a Call</p>
                  <p className="text-sm text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    Free Consultation
                  </p>
                </TransitionLink>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-black border-t border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <span className="text-white text-lg font-bold">F</span>
                </div>
                <span className="text-white text-xl font-bold tracking-wider">FYSION</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming visions into digital reality through design, code, and strategy.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><TransitionLink href="/home" className="text-gray-400 hover:text-white transition-colors">Home</TransitionLink></li>
                <li><TransitionLink href="/about" className="text-gray-400 hover:text-white transition-colors">About</TransitionLink></li>
                <li><TransitionLink href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</TransitionLink></li>
                <li><TransitionLink href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</TransitionLink></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><TransitionLink href="/about" className="text-gray-400 hover:text-white transition-colors">Web Design</TransitionLink></li>
                <li><TransitionLink href="/about" className="text-gray-400 hover:text-white transition-colors">Development</TransitionLink></li>
                <li><TransitionLink href="/about" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</TransitionLink></li>
                <li><TransitionLink href="/about" className="text-gray-400 hover:text-white transition-colors">Branding</TransitionLink></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <div className="flex gap-4 mb-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300">
                  <span className="text-xl">📷</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300">
                  <span className="text-xl">💼</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300">
                  <span className="text-xl">⚡</span>
                </a>
              </div>
              <a href="mailto:hello@fysion.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                hello@fysion.com
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Fysion. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

