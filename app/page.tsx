"use client";

import { LoadingPage } from "@/components/LoadingPage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /home after 3.5 seconds
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return <LoadingPage />;
}
