"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, FolderOpen, Camera, TrendingUp,
  Brain, FileText, FileStack, Users, Bell, Settings, CreditCard, LogOut
} from "lucide-react";
import RemoteSiteLogo from "./RemoteSiteLogo";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const navItems = [
  { href: "/dashboard/overview", icon: LayoutDashboard, label: "Overview" },
  { href: "/dashboard/projects", icon: FolderOpen, label: "My Projects" },
  { href: "/dashboard/monitoring", icon: Camera, label: "Site Monitoring" },
  { href: "/dashboard/progress", icon: TrendingUp, label: "Progress Tracking" },
  { href: "/dashboard/ai-insights", icon: Brain, label: "AI Insights" },
  { href: "/dashboard/reports", icon: FileText, label: "Reports" },
  { href: "/dashboard/documents", icon: FileStack, label: "Documents" },
  { href: "/dashboard/team", icon: Users, label: "Team" },
  { href: "/dashboard/notifications", icon: Bell, label: "Notifications" },
];

const bottomItems = [
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
  { href: "/dashboard/billing", icon: CreditCard, label: "Billing" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <aside style={{
      width: "240px",
      minWidth: "240px",
      background: "#101828",
      display: "flex",
      flexDirection: "column",
      padding: "1.25rem 0.75rem",
      borderRight: "1px solid rgba(255,255,255,0.06)",
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none", padding: "0 0.5rem 1.25rem", marginBottom: "0.25rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <RemoteSiteLogo size={30} />
        <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1rem", color: "#FFFFFF" }}>RemoteSite</span>
      </Link>

      {/* Navigation */}
      <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px", marginTop: "0.75rem" }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "0.5625rem 0.75rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: active ? 600 : 400,
                color: active ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                background: active ? "rgba(0,57,255,0.3)" : "transparent",
                transition: "background-color 0.15s, color 0.15s",
              }}
            >
              <Icon size={17} style={{ flexShrink: 0 }} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom nav */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "0.75rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "2px" }}>
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "0.5625rem 0.75rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: active ? 600 : 400,
                color: active ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                background: active ? "rgba(0,57,255,0.3)" : "transparent",
              }}
            >
              <Icon size={17} style={{ flexShrink: 0 }} />
              {item.label}
            </Link>
          );
        })}
        <button
          onClick={handleLogout}
          style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            padding: "0.5625rem 0.75rem", borderRadius: "0.5rem",
            fontSize: "0.875rem", fontWeight: 400,
            color: "rgba(255,255,255,0.4)",
            background: "none", border: "none", cursor: "pointer", width: "100%",
            transition: "color 0.15s",
          }}
        >
          <LogOut size={17} style={{ flexShrink: 0 }} />
          Log out
        </button>
      </div>
    </aside>
  );
}
