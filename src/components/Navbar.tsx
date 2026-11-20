"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070A27]/90 backdrop-blur-md border-b border-[rgba(0,212,255,0.14)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.jpg" alt="DataTalk AI" width={36} height={36} className="rounded-lg" />
            <span className="font-space font-bold text-white text-lg">DataTalk AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-[#A7B2CC] hover:text-white font-inter text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-[#A7B2CC] hover:text-white font-inter text-sm transition-colors">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-[#A7B2CC] hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0B1035] border-t border-[rgba(0,212,255,0.14)] px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-[#A7B2CC] hover:text-white font-inter text-sm py-1"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[rgba(0,212,255,0.1)] space-y-2">
            <Link href="/login" onClick={() => setOpen(false)} className="block text-[#A7B2CC] font-inter text-sm py-1">Sign In</Link>
            <Link href="/signup" onClick={() => setOpen(false)} className="block bg-[#087BFF] text-white font-space font-semibold text-sm px-5 py-2.5 rounded-lg text-center">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
