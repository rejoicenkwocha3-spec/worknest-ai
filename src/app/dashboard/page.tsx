import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { AlertTriangle, Shield, Eye, CheckCircle, Mail, User, Cpu, TrendingUp } from "lucide-react";

const sampleThreats = [
  { type: "CRITICAL", label: "Account takeover attempt detected", target: "finance@example.com", time: "2m ago", color: "bg-[#FF3155] text-black" },
  { type: "HIGH", label: "Phishing link in email attachment", target: "hr-team mailbox", time: "8m ago", color: "bg-[#FF36A6] text-black" },
  { type: "HIGH", label: "Credential stuffing detected", target: "admin portal", time: "15m ago", color: "bg-[#FF36A6] text-black" },
  { type: "MEDIUM", label: "Unusual login from new geography", target: "ops@example.com", time: "23m ago", color: "bg-[#D7FF00] text-black" },
  { type: "MEDIUM", label: "AI model access outside normal hours", target: "dev@example.com", time: "31m ago", color: "bg-[#D7FF00] text-black" },
  { type: "INFO", label: "New device login for user", target: "marketing@example.com", time: "44m ago", color: "bg-[#1769FF] text-white" },
];

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: { getAll() { return cookieStore.getAll(); }, setAll() {} },
    }
  );
  const { data: { user } } = await supabase.auth.getUser();
  const name = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Security Analyst";

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[#929292] text-sm font-inter mb-1">Welcome back</p>
          <h1 className="font-sora font-bold text-2xl text-white">{name}</h1>
        </div>
        <div className="flex items-center gap-2 bg-[#111111] border border-[#292929] rounded-lg px-4 py-2">
          <div className="w-2 h-2 bg-[#D7FF00] rounded-full animate-pulse-glow" />
          <span className="text-[#D7FF00] text-xs font-inter">System Active</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Monitored Assets", value: "248", icon: Shield, color: "text-[#D7FF00]", border: "border-[#D7FF00]/20", bg: "bg-[#D7FF00]/10" },
          { label: "Active Threats", value: "14", icon: AlertTriangle, color: "text-[#FF3155]", border: "border-[#FF3155]/20", bg: "bg-[#FF3155]/10" },
          { label: "Critical Alerts", value: "3", icon: Eye, color: "text-[#FF36A6]", border: "border-[#FF36A6]/20", bg: "bg-[#FF36A6]/10" },
          { label: "Resolved Today", value: "27", icon: CheckCircle, color: "text-[#00E5FF]", border: "border-[#00E5FF]/20", bg: "bg-[#00E5FF]/10" },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-xl border ${stat.border} bg-[#111111] p-5`}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[#929292] text-xs font-inter">{stat.label}</p>
              <div className={`w-8 h-8 ${stat.bg} rounded-lg flex items-center justify-center`}>
                <stat.icon size={15} className={stat.color} />
              </div>
            </div>
            <p className={`font-sora font-bold text-3xl ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Live threat feed */}
        <div className="lg:col-span-2 rounded-xl border border-[#292929] bg-[#111111] p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-sora font-semibold text-white text-base">Live Threat Activity</h2>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-[#D7FF00] rounded-full animate-pulse-glow" />
              <span className="text-[#D7FF00] text-xs font-inter">Live</span>
            </div>
          </div>
          <div className="space-y-2">
            {sampleThreats.map((t, i) => (
              <div key={i} className="flex items-center gap-3 py-2.5 px-4 rounded-lg bg-[#050505] border border-[#292929]">
                <span className={`text-[9px] font-sora font-bold px-2 py-0.5 rounded ${t.color}`}>{t.type}</span>
                <span className="text-white text-xs font-inter flex-1 truncate">{t.label}</span>
                <span className="text-[#929292] text-xs font-inter hidden sm:block truncate max-w-[120px]">{t.target}</span>
                <span className="text-[#929292] text-xs font-inter ml-2 flex-shrink-0">{t.time}</span>
              </div>
            ))}
          </div>
          <p className="text-[#929292] text-xs font-inter mt-4 text-center">
            Sample data for development. Connect live integrations in Settings.
          </p>
        </div>

        {/* Module status */}
        <div className="rounded-xl border border-[#292929] bg-[#111111] p-6">
          <h2 className="font-sora font-semibold text-white text-base mb-5">Module Status</h2>
          <div className="space-y-4">
            {[
              { label: "Email Security", icon: Mail, color: "text-[#00E5FF]", bg: "bg-[#00E5FF]/10", status: "Active", alerts: 8 },
              { label: "Identity Security", icon: User, color: "text-[#D7FF00]", bg: "bg-[#D7FF00]/10", status: "Active", alerts: 4 },
              { label: "AI Security", icon: Cpu, color: "text-[#FF36A6]", bg: "bg-[#FF36A6]/10", status: "Active", alerts: 2 },
              { label: "Threat Intel", icon: Shield, color: "text-[#1769FF]", bg: "bg-[#1769FF]/10", status: "Active", alerts: 0 },
            ].map((mod) => (
              <div key={mod.label} className="flex items-center gap-3 py-2">
                <div className={`w-8 h-8 ${mod.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <mod.icon size={14} className={mod.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-inter font-medium">{mod.label}</p>
                  <p className="text-[#929292] text-xs font-inter">{mod.alerts} alerts</p>
                </div>
                <span className="text-[#D7FF00] text-xs font-inter">{mod.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security overview */}
      <div className="rounded-xl border border-[#292929] bg-[#111111] p-6">
        <div className="flex items-center gap-3 mb-5">
          <TrendingUp size={18} className="text-[#D7FF00]" />
          <h2 className="font-sora font-semibold text-white text-base">Security Overview: Last 7 Days</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Emails Analyzed", val: "12,847", color: "text-[#00E5FF]" },
            { label: "Threats Blocked", val: "1,284", color: "text-[#D7FF00]" },
            { label: "Logins Monitored", val: "3,421", color: "text-[#FF36A6]" },
            { label: "Incidents Resolved", val: "147", color: "text-[#D7FF00]" },
          ].map((row) => (
            <div key={row.label} className="rounded-lg bg-[#050505] border border-[#292929] p-4">
              <p className="text-[#929292] text-xs font-inter mb-2">{row.label}</p>
              <p className={`font-sora font-bold text-xl ${row.color}`}>{row.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
