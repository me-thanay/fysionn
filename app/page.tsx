"use client";

import { LoadingPage } from "@/components/LoadingPage";
import { Navbar } from "@/components/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingPage />
      
      {showContent && (
        <>
          <Navbar />
          
          <main className="relative z-20">
            {/* Your content sections will go here */}
          </main>
        </>
      )}
    </>
  );
}
