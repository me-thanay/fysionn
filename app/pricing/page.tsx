"use client";

import { Navbar } from "@/components/Navbar";
import { PricingWithChart } from "@/components/ui/pricing-with-chart";

export default function Pricing() {
  return (
    <>
      <Navbar />
      
      <main className="relative z-20 min-h-screen pt-32 px-6">
        <PricingWithChart />
      </main>
    </>
  );
}
