"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  LayoutDashboard,
  TrendingUp,
  Landmark,
  Target,
  Truck,
  Package,
  BarChart3,
  Activity,
  Brain,
  Settings,
  LogOut,
  Menu,
  X,
  FileText,
} from "lucide-react";
import Plan9Logo from "./Plan9Logo";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  exact?: boolean;
};

type NavSection = {
  label: string | null;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    label: null,
    items: [
      { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
    ],
  },
  {
    label: "BUSINESS PLANNING",
    items: [
      { href: "/dashboard/financial", label: "Financial Planning", icon: Landmark },
      { href: "/dashboard/sales", label: "Sales Planning", icon: Target },
      { href: "/dashboard/demand", label: "Demand Planning", icon: TrendingUp },
      { href: "/dashboard/supply-chain", label: "Supply Chain", icon: Truck },
      { href: "/dashboard/inventory", label: "Inventory", icon: Package },
    ],
  },
  {
    label: "INTELLIGENCE",
    items: [
      { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
      { href: "/dashboard/forecasting", label: "Forecasting", icon: Activity },
      { href: "/dashboard/ai-insights", label: "AI Insights", icon: Brain },
      { href: "/dashboard/scenarios", label: "Scenarios", icon: Activity },
    ],
  },
  {
    label: "REPORTING",
    items: [
      { href: "/dashboard/reports", label: "Reports", icon: FileText },
    ],
  },
  {
    label: "ACCOUNT",
    items: [
      { href: "/dashboard/settings", label: "Settings", icon: Settings },
    ],
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#0D0D0D] border-r border-[#2A2A2A]">
      <div className="p-5 border-b border-[#2A2A2A]">
        <Link href="/" className="flex items-center gap-2.5">
          <Plan9Logo size={30} />
          <span className="font-manrope font-bold text-white text-base tracking-tight">PLAN9 AI</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        {navSections.map((section, si) => (
          <div key={si}>
            {section.label && (
              <p className="text-[#444444] font-inter text-xs tracking-widest uppercase px-3 mb-2">{section.label}</p>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href, item.exact);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-inter transition-colors ${
                      active
                        ? 'bg-[#2D7EFF]/10 text-[#2D7EFF]'
                        : 'text-[#777777] hover:text-white hover:bg-[#1C1C1C]'
                    }`}
                  >
                    <Icon size={16} className={active ? 'text-[#2D7EFF]' : ''} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="p-3 border-t border-[#2A2A2A]">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-[#777777] hover:text-white hover:bg-[#1C1C1C] font-inter text-sm transition-colors"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-60 lg:flex-col lg:fixed lg:inset-y-0 z-30">
        <SidebarContent />
      </div>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-[#0D0D0D] border-b border-[#2A2A2A] h-14 flex items-center px-4 justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Plan9Logo size={28} />
          <span className="font-manrope font-bold text-white text-base">PLAN9 AI</span>
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-1">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-20 pt-14">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="relative w-60 h-full">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}
