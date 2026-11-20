"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShieldProLogo from "./ShieldProLogo";
import {
  LayoutDashboard, AlertTriangle, Mail, User, Cpu, Shield,
  BarChart3, FileText, Zap, Globe, Users, Settings, CreditCard, LogOut
} from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Threat Detection", href: "/dashboard/threat-detection", icon: AlertTriangle },
  { label: "Email Security", href: "/dashboard/email-security", icon: Mail },
  { label: "Identity Security", href: "/dashboard/identity-security", icon: User },
  { label: "AI Security", href: "/dashboard/ai-security", icon: Cpu },
  { label: "Threat Intelligence", href: "/dashboard/threat-intelligence", icon: Shield },
  { label: "Security Analytics", href: "/dashboard/security-analytics", icon: BarChart3 },
  { label: "Incidents", href: "/dashboard/incident-management", icon: FileText },
  { label: "Auto Response", href: "/dashboard/automated-response", icon: Zap },
  { label: "Reports", href: "/dashboard/reports", icon: FileText },
  { label: "Integrations", href: "/dashboard/integrations", icon: Globe },
  { label: "Team", href: "/dashboard/team", icon: Users },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Billing", href: "/dashboard/billing", icon: CreditCard },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <aside className="w-64 bg-[#050505] border-r border-[#292929] flex flex-col min-h-screen">
      <div className="p-5 border-b border-[#292929]">
        <ShieldProLogo size="sm" />
      </div>

      <nav className="flex-1 p-3 overflow-y-auto">
        <div className="space-y-0.5">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-inter transition-colors ${
                  active
                    ? "bg-[#D7FF00]/10 text-[#D7FF00] border border-[#D7FF00]/20"
                    : "text-[#929292] hover:text-white hover:bg-[#111111]"
                }`}
              >
                <item.icon size={16} className={active ? "text-[#D7FF00]" : ""} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="p-3 border-t border-[#292929]">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-inter text-[#929292] hover:text-[#FF3155] hover:bg-[#FF3155]/10 transition-colors"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
