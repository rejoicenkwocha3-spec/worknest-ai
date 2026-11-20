"use client";

import { Bell } from "lucide-react";
import Link from "next/link";

export default function DashboardHeader() {
  return (
    <header style={{
      background: "#FFFFFF",
      borderBottom: "1px solid #E2E6F0",
      padding: "0 2rem",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "0.75rem",
      flexShrink: 0,
    }}>
      <Link
        href="/dashboard/notifications"
        style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "#F7F8FA", border: "1px solid #E2E6F0",
          display: "flex", alignItems: "center", justifyContent: "center",
          textDecoration: "none", color: "#6B7280",
          transition: "background-color 0.15s",
        }}
      >
        <Bell size={16} />
      </Link>
      <Link
        href="/dashboard/settings"
        style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "#0039FF",
          display: "flex", alignItems: "center", justifyContent: "center",
          textDecoration: "none", color: "#FFFFFF",
          fontFamily: "var(--font-manrope)", fontWeight: 800,
          fontSize: "0.875rem",
        }}
      >
        U
      </Link>
    </header>
  );
}
