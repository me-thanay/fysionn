import type { Metadata } from "next";
import "../styles/cpu-animation.css";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}

