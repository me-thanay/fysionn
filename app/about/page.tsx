"use client";

import { Navbar } from "@/components/Navbar";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { InfoCard } from "@/components/InfoCard";
import { TransitionLink } from "@/components/TransitionLink";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
          {/* Animated gradient background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
                  About
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mt-4">
                  Fysion
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" scrub={1.2}>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                We're a creative digital agency that transforms visions into reality through innovative design, cutting-edge development, and strategic marketing.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" scrub={1.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <TransitionLink
                  href="/projects"
                  className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-smooth"
                >
                  View Our Work
                </TransitionLink>
                <TransitionLink
                  href="/pricing"
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/20 transition-smooth"
                >
                  Get Started
                </TransitionLink>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Design Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-5xl mx-auto w-full">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                Design
              </h2>
            </ScrollAnimation>

            <div className="space-y-12">
              <ScrollAnimation animation="fade-up" scrub={1.2}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-purple-400">•</span> Brand Identity
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    At Fysion, design is more than aesthetics—it's the foundation of every meaningful digital experience. 
                    We believe that exceptional design creates emotional connections, tells compelling stories, and transforms 
                    how people interact with brands. Our design philosophy centers on understanding your audience, uncovering 
                    their needs, and crafting visual solutions that resonate on a deeper level.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" scrub={1.3}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-purple-400">•</span> User Experience (UX)
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    Our design process begins with research and discovery. We immerse ourselves in your brand's world, analyzing 
                    market trends, studying user behavior, and identifying opportunities for differentiation. From wireframes to 
                    prototypes, every interaction is crafted with intention and purpose. We create user journeys that are intuitive, 
                    engaging, and designed to convert visitors into loyal customers.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" scrub={1.4}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-purple-400">•</span> User Interface (UI)
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    We specialize in modern, innovative interface design that blends creativity with functionality. Whether it's 
                    crafting a minimalist web interface, designing immersive mobile experiences, or creating eye-catching marketing 
                    materials, we push boundaries while staying true to timeless design principles. Our team leverages the latest 
                    design tools and techniques to deliver work that stands out in today's competitive digital landscape.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" scrub={1.5}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-purple-400">•</span> Visual Systems
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    Every pixel matters. We obsess over typography, color theory, spacing, and visual hierarchy to create designs 
                    that are not just visually stunning but also intuitive and accessible. We build comprehensive design systems 
                    that ensure consistency across all touchpoints. Our goal is to elevate your brand's presence and create lasting 
                    impressions that drive engagement and build loyalty.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Development Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-5xl mx-auto w-full">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
                Development
              </h2>
            </ScrollAnimation>

            <div className="space-y-12">
              <ScrollAnimation animation="fade-up" scrub={1.2}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-blue-400">•</span> Frontend Development
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    Our development team transforms creative visions into powerful digital solutions. We build with precision, 
                    leveraging cutting-edge technologies like React, Next.js, and Vue.js to create stunning, responsive interfaces 
                    that work flawlessly across all devices. From pixel-perfect implementations to smooth animations, our frontend 
                    developers are experts in their craft, committed to writing clean, efficient, and maintainable code.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" scrub={1.3}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-blue-400">•</span> Backend & APIs
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    We specialize in building robust backend systems using Node.js, Python, and cloud-native architectures. 
                    Our approach is framework-agnostic—we choose the right tools for each project based on your specific requirements, 
                    scalability needs, and long-term vision. Whether you need a lightning-fast e-commerce platform, a sophisticated 
                    web application, or custom API integrations, we have the expertise to bring it to life.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" scrub={1.4}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-blue-400">•</span> Performance & Security
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    Performance, security, and optimization are at the core of everything we build. We implement best practices 
                    for SEO, optimize loading times for superior user experiences, and follow security protocols to protect your 
                    data and users. Our development process includes rigorous testing, code reviews, and continuous integration 
                    to ensure the highest quality standards and lightning-fast performance.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" scrub={1.5}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-blue-400">•</span> Scalability & Maintenance
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    Beyond building, we believe in empowering our clients. We create solutions that are easy to maintain and scale 
                    as your business grows. Our code is well-documented, our systems are robust, and we provide the training and 
                    support you need to manage your digital assets confidently. We're not just building software; we're building 
                    foundations for your digital future with ongoing support and updates.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Marketing Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-5xl mx-auto w-full">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-orange-400 to-pink-400">
                Marketing
              </h2>
            </ScrollAnimation>

            <div className="space-y-12">
              <ScrollAnimation animation="fade-up" scrub={1.2}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-pink-400">•</span> SEO & Content Strategy
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    In today's digital landscape, great products need great marketing to reach their full potential. Our SEO and 
                    content strategies are data-driven, creative, and tailored to your unique business goals. We don't believe in 
                    one-size-fits-all approaches; instead, we craft custom strategies that align with your brand voice, target 
                    audience, and market position. We optimize your content for search engines while keeping it engaging for humans.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" scrub={1.3}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-pink-400">•</span> Social Media & Branding
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    Our social media strategies span the full digital spectrum—from organic content creation to paid advertising 
                    campaigns. We start by understanding your market, analyzing your competition, and identifying the channels 
                    where your audience is most active. Then, we develop comprehensive campaigns that build awareness, drive engagement, 
                    and convert prospects into loyal customers through authentic storytelling and strategic positioning.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" scrub={1.4}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-pink-400">•</span> Analytics & Performance
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    We leverage analytics and performance metrics to continuously optimize our campaigns. Every decision is backed by 
                    data, every campaign is tested and refined. We track key performance indicators, analyze user behavior, and adjust 
                    our strategies in real-time to maximize ROI. Our transparent reporting keeps you informed about what's working and 
                    where opportunities lie, ensuring every marketing dollar is well spent.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" scrub={1.5}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-pink-400">•</span> Growth & Conversion
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed pl-7">
                    Beyond traditional digital marketing, we excel at growth hacking and innovative marketing techniques. We create 
                    viral-worthy content, build engaged communities, and develop marketing funnels that turn visitors into advocates. 
                    Our goal is not just to increase your visibility, but to build sustainable growth engines that drive long-term 
                    success for your brand through strategic conversion optimization and retention strategies.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-black border-t border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <span className="text-white text-xl font-bold">F</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-wider">FYSION</span>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Transforming visions into digital reality
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <TransitionLink href="/home" className="text-gray-400 hover:text-white transition-colors">
              Home
            </TransitionLink>
            <TransitionLink href="/projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </TransitionLink>
            <TransitionLink href="/pricing" className="text-gray-400 hover:text-white transition-colors">
              Pricing
            </TransitionLink>
            <TransitionLink href="/crew" className="text-gray-400 hover:text-white transition-colors">
              Crew
            </TransitionLink>
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 Fysion. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

