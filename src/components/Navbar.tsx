"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Plan9Logo from "./Plan9Logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-sm border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Plan9Logo size={34} />
            <span className="font-manrope font-bold text-white text-xl tracking-tight">PLAN9 AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/platform" className="text-[#BDBDBD] hover:text-white font-inter text-sm transition-colors">Platform</Link>
            <Link href="/solutions" className="text-[#BDBDBD] hover:text-white font-inter text-sm transition-colors">Solutions</Link>
            <Link href="/features" className="text-[#BDBDBD] hover:text-white font-inter text-sm transition-colors">Features</Link>
            <Link href="/pricing" className="text-[#BDBDBD] hover:text-white font-inter text-sm transition-colors">Pricing</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-[#BDBDBD] hover:text-white font-inter text-sm transition-colors">Login</Link>
            <Link
              href="/signup"
              className="bg-[#2D7EFF] text-white font-manrope font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#1A6AE8] transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-[#2A2A2A] px-4 py-6 space-y-4">
          <Link href="/platform" className="block text-[#BDBDBD] hover:text-white font-inter text-sm py-2" onClick={() => setMobileOpen(false)}>Platform</Link>
          <Link href="/solutions" className="block text-[#BDBDBD] hover:text-white font-inter text-sm py-2" onClick={() => setMobileOpen(false)}>Solutions</Link>
          <Link href="/features" className="block text-[#BDBDBD] hover:text-white font-inter text-sm py-2" onClick={() => setMobileOpen(false)}>Features</Link>
          <Link href="/pricing" className="block text-[#BDBDBD] hover:text-white font-inter text-sm py-2" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <div className="pt-4 border-t border-[#2A2A2A] flex flex-col gap-3">
            <Link href="/login" className="block text-[#BDBDBD] hover:text-white font-inter text-sm py-2" onClick={() => setMobileOpen(false)}>Login</Link>
            <Link
              href="/signup"
              className="block bg-[#2D7EFF] text-white font-manrope font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#1A6AE8] transition-colors text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
