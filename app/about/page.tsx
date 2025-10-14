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

        {/* Section 1: Who We Are */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-7xl mx-auto w-full">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Who We Are
              </h2>
              <p className="text-center text-gray-500 mb-20 text-lg max-w-3xl mx-auto">
                A team of passionate creatives and technologists united by one mission
              </p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimation animation="fade-up" start="top 85%" end="top 40%">
                <InfoCard
                  icon="🎨"
                  title="Creative Minds"
                  description="Our designers blend artistry with purpose, crafting visual experiences that captivate and inspire. Every pixel tells your brand's story."
                  gradient="from-purple-500/10 via-purple-500/5 to-transparent"
                />
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" start="top 85%" end="top 40%">
                <InfoCard
                  icon="⚡"
                  title="Tech Innovators"
                  description="Our developers build with cutting-edge technologies, turning complex ideas into seamless digital solutions that perform flawlessly."
                  gradient="from-blue-500/10 via-blue-500/5 to-transparent"
                  delay={100}
                />
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" start="top 85%" end="top 40%">
                <InfoCard
                  icon="🚀"
                  title="Growth Partners"
                  description="Our strategists combine data-driven insights with creative thinking to accelerate your brand's growth and market presence."
                  gradient="from-pink-500/10 via-pink-500/5 to-transparent"
                  delay={200}
                />
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Section 2: What We Do */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-7xl mx-auto w-full">
            <ScrollAnimation animation="fade-down" scrub={1}>
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                What We Do
              </h2>
              <p className="text-center text-gray-500 mb-20 text-lg max-w-3xl mx-auto">
                End-to-end digital solutions that drive real results
              </p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <InfoCard
                  icon="🖌️"
                  title="Brand Design"
                  description="Create memorable brand identities that resonate with your audience and stand out in the market."
                />
              </ScrollAnimation>

              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <InfoCard
                  icon="💻"
                  title="Web Development"
                  description="Build responsive, fast, and scalable websites that deliver exceptional user experiences."
                  delay={100}
                />
              </ScrollAnimation>

              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <InfoCard
                  icon="📱"
                  title="Mobile Apps"
                  description="Develop native and cross-platform mobile applications that users love to interact with."
                  delay={200}
                />
              </ScrollAnimation>

              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <InfoCard
                  icon="📈"
                  title="Digital Marketing"
                  description="Drive growth with data-driven marketing strategies across all digital channels."
                  delay={300}
                />
              </ScrollAnimation>

              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <InfoCard
                  icon="🎯"
                  title="SEO & Analytics"
                  description="Optimize your online presence and track performance with advanced analytics tools."
                  delay={400}
                />
              </ScrollAnimation>

              <ScrollAnimation animation="scale" start="top 85%" end="top 40%">
                <InfoCard
                  icon="🛠️"
                  title="Maintenance & Support"
                  description="Keep your digital assets running smoothly with ongoing support and updates."
                  delay={500}
                />
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-7xl mx-auto w-full">
            <ScrollAnimation animation="fade-up" scrub={1}>
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Why Choose Us
              </h2>
              <p className="text-center text-gray-500 mb-20 text-lg max-w-3xl mx-auto">
                What sets us apart in the digital landscape
              </p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <ScrollAnimation animation="fade-right" start="top 85%" end="top 40%">
                <InfoCard
                  icon="⚡"
                  title="Fast Delivery"
                  description="We move quickly without compromising quality. Your project launches on time, every time, with precision and care."
                  gradient="from-yellow-500/10 via-yellow-500/5 to-transparent"
                />
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" start="top 85%" end="top 40%">
                <InfoCard
                  icon="💎"
                  title="Premium Quality"
                  description="Excellence is our standard. We craft every detail with meticulous attention, delivering work that exceeds expectations."
                  gradient="from-cyan-500/10 via-cyan-500/5 to-transparent"
                  delay={100}
                />
              </ScrollAnimation>

              <ScrollAnimation animation="fade-left" start="top 85%" end="top 40%">
                <InfoCard
                  icon="🤝"
                  title="True Partnership"
                  description="Your success is our success. We're invested in your growth and work as an extension of your team."
                  gradient="from-green-500/10 via-green-500/5 to-transparent"
                  delay={200}
                />
              </ScrollAnimation>
            </div>

            {/* CTA Section */}
            <ScrollAnimation animation="scale" scrub={1.5}>
              <div className="text-center">
                <div className="inline-block p-12 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-500">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Let's turn your vision into reality. Get in touch and let's create something amazing together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <TransitionLink
                      href="/pricing"
                      className="px-10 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-smooth"
                    >
                      View Pricing
                    </TransitionLink>
                    <a
                      href="mailto:hello@fysion.com"
                      className="px-10 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/20 transition-smooth"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
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

