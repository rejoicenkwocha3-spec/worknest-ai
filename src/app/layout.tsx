import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataTalk AI: Business Intelligence Platform",
  description: "Connect your business data, ask questions in plain language and uncover the insights that move your business forward.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
