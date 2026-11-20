"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import RemoteSiteLogo from "./RemoteSiteLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.97)",
        borderBottom: "1px solid #E2E6F0",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container-rs" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
          <RemoteSiteLogo size={36} />
          <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.125rem", color: "#101828" }}>
            RemoteSite
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">
          <NavLink href="/platform">Platform</NavLink>
          <NavLink href="/solutions">Solutions</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
        </div>

        {/* Desktop CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="hidden-mobile">
          <Link href="/login" className="btn-ghost" style={{ padding: "0.5rem 1rem", fontSize: "0.9375rem" }}>
            Log in
          </Link>
          <Link href="/signup" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.9375rem" }}>
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#101828", padding: "0.25rem" }}
          className="show-mobile"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#FFFFFF", borderTop: "1px solid #E2E6F0", padding: "1rem 1.5rem 1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <MobileLink href="/platform" onClick={() => setOpen(false)}>Platform</MobileLink>
            <MobileLink href="/solutions" onClick={() => setOpen(false)}>Solutions</MobileLink>
            <MobileLink href="/features" onClick={() => setOpen(false)}>Features</MobileLink>
            <MobileLink href="/pricing" onClick={() => setOpen(false)}>Pricing</MobileLink>
            <div style={{ height: "1px", background: "#E2E6F0", margin: "0.5rem 0" }} />
            <MobileLink href="/login" onClick={() => setOpen(false)}>Log in</MobileLink>
            <Link href="/signup" className="btn-primary" style={{ marginTop: "0.5rem", justifyContent: "center" }} onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        padding: "0.5rem 0.75rem",
        borderRadius: "0.5rem",
        fontSize: "0.9375rem",
        fontWeight: 500,
        color: "#252B36",
        textDecoration: "none",
        transition: "background-color 0.15s, color 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLAnchorElement).style.backgroundColor = "#EAF0FF";
        (e.target as HTMLAnchorElement).style.color = "#0039FF";
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLAnchorElement).style.backgroundColor = "transparent";
        (e.target as HTMLAnchorElement).style.color = "#252B36";
      }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        padding: "0.75rem 0.5rem",
        fontSize: "1rem",
        fontWeight: 500,
        color: "#252B36",
        textDecoration: "none",
        display: "block",
      }}
    >
      {children}
    </Link>
  );
}
