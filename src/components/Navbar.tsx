"use client";
import { useState } from "react";
import Link from "next/link";
import ShieldProLogo from "./ShieldProLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Why Shield Pro", href: "/#why-shield-pro" },
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <ShieldProLogo size="sm" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[#929292] hover:text-white text-sm font-inter transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-[#929292] hover:text-white text-sm font-inter transition-colors px-4 py-2">
              Login
            </Link>
            <Link href="/contact" className="text-[#929292] hover:text-white text-sm font-inter border border-[#292929] hover:border-[#D7FF00]/40 px-4 py-2 rounded-lg transition-colors">
              Request a Demo
            </Link>
            <Link
              href="/signup"
              className="bg-[#D7FF00] text-black font-sora font-semibold text-sm px-5 py-2 rounded-lg hover:bg-[#c8f000] transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-[#929292] hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#050505] border-t border-[#292929] px-4 py-6 space-y-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="block text-[#929292] hover:text-white font-inter py-2 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#292929] flex flex-col gap-3">
            <Link href="/login" className="text-[#929292] hover:text-white font-inter py-2 transition-colors" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link href="/contact" className="border border-[#292929] text-white font-inter px-4 py-3 rounded-lg text-center" onClick={() => setOpen(false)}>
              Request a Demo
            </Link>
            <Link href="/signup" className="bg-[#D7FF00] text-black font-sora font-semibold px-4 py-3 rounded-lg text-center" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
