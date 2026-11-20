import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLAN9 AI: One Platform. Smarter Decisions. Better Business Outcomes.",
  description: "PLAN9 AI connects your business data, planning and intelligence into one powerful platform. Make confident decisions, anticipate opportunities and turn business insights into measurable outcomes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
