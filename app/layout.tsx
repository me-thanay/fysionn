import type { Metadata } from "next";
import "../styles/cpu-animation.css";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "FYSION",
  description: "Welcome to FYSION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

