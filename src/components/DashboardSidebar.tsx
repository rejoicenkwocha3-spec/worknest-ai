"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard, MessageSquare, Database, BarChart3,
  FileText, Bookmark, History, Users, Settings, CreditCard,
} from "lucide-react";

const nav = [
  { label: "Overview",       href: "/dashboard",                  icon: LayoutDashboard },
  { label: "AI Analyst",     href: "/dashboard/ai-analyst",       icon: MessageSquare },
  { label: "Data Sources",   href: "/dashboard/data-sources",     icon: Database },
  { label: "Dashboards",     href: "/dashboard/dashboards",       icon: BarChart3 },
  { label: "Reports",        href: "/dashboard/reports",          icon: FileText },
  { label: "Saved Insights", href: "/dashboard/saved-insights",   icon: Bookmark },
  { label: "Conversations",  href: "/dashboard/conversations",    icon: History },
  { label: "Team",           href: "/dashboard/team",             icon: Users },
  { label: "Settings",       href: "/dashboard/settings",         icon: Settings },
  { label: "Billing",        href: "/dashboard/billing",          icon: CreditCard },
];

export default function DashboardSidebar() {
  const path = usePathname();

  return (
    <aside className="w-56 bg-[#0B1035] border-r border-[rgba(0,212,255,0.14)] flex flex-col min-h-screen">
      <div className="p-5 border-b border-[rgba(0,212,255,0.14)]">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="DataTalk AI" width={30} height={30} className="rounded-md" />
          <span className="font-space font-bold text-white text-sm">DataTalk AI</span>
        </Link>
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {nav.map((item) => {
          const active = path === item.href || (item.href !== "/dashboard" && path.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-inter transition-colors ${
                active
                  ? "bg-[#087BFF]/20 text-[#00D4FF]"
                  : "text-[#A7B2CC] hover:bg-[#101A42] hover:text-white"
              }`}
            >
              <item.icon size={16} className="flex-shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[rgba(0,212,255,0.14)]">
        <div className="bg-[#101A42] rounded-xl p-3">
          <p className="text-[#A7B2CC] text-xs font-inter mb-1">Demo Workspace</p>
          <p className="text-white text-xs font-space font-medium">Acme Corporation</p>
        </div>
      </div>
    </aside>
  );
}
