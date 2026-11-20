import { BarChart3, TrendingUp, Shield, AlertTriangle } from "lucide-react";

const weekData = [
  { day: "Mon", threats: 12, resolved: 11 },
  { day: "Tue", threats: 18, resolved: 15 },
  { day: "Wed", threats: 9, resolved: 9 },
  { day: "Thu", threats: 24, resolved: 20 },
  { day: "Fri", threats: 31, resolved: 27 },
  { day: "Sat", threats: 7, resolved: 7 },
  { day: "Sun", threats: 4, resolved: 4 },
];

export default function SecurityAnalyticsPage() {
  const maxVal = Math.max(...weekData.map(d => d.threats));

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-sora font-bold text-2xl text-white mb-1">Security Analytics</h1>
        <p className="text-[#929292] text-sm font-inter">Visual insights into your security posture and threat trends</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Emails Analyzed (7d)", value: "12,847", color: "text-[#00E5FF]", border: "border-[#00E5FF]/20" },
          { label: "Threats Blocked (7d)", value: "1,284", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
          { label: "Avg Response Time", value: "4.2m", color: "text-[#FF36A6]", border: "border-[#FF36A6]/20" },
          { label: "Resolution Rate", value: "94%", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-xl border ${stat.border} bg-[#111111] p-5`}>
            <p className="text-[#929292] text-xs font-inter mb-2">{stat.label}</p>
            <p className={`font-sora font-bold text-3xl ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Threat bar chart */}
      <div className="rounded-xl border border-[#292929] bg-[#111111] p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 size={18} className="text-[#D7FF00]" />
          <h2 className="font-sora font-semibold text-white">Threats Detected vs Resolved: Last 7 Days</h2>
        </div>
        <div className="flex items-end gap-4 h-40">
          {weekData.map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
              <div className="flex items-end gap-1 w-full" style={{ height: "120px" }}>
                <div
                  className="flex-1 bg-[#FF3155]/60 rounded-t"
                  style={{ height: `${(d.threats / maxVal) * 100}%` }}
                />
                <div
                  className="flex-1 bg-[#D7FF00]/60 rounded-t"
                  style={{ height: `${(d.resolved / maxVal) * 100}%` }}
                />
              </div>
              <span className="text-[#929292] text-xs font-inter">{d.day}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#FF3155]/60" />
            <span className="text-[#929292] text-xs font-inter">Threats Detected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#D7FF00]/60" />
            <span className="text-[#929292] text-xs font-inter">Threats Resolved</span>
          </div>
        </div>
      </div>

      {/* Breakdown by module */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-[#292929] bg-[#111111] p-6">
          <h2 className="font-sora font-semibold text-white mb-5">Threats by Module</h2>
          <div className="space-y-4">
            {[
              { label: "Email Security", count: 847, pct: 66, color: "bg-[#00E5FF]" },
              { label: "Identity Security", count: 312, pct: 24, color: "bg-[#D7FF00]" },
              { label: "AI Security", count: 89, pct: 7, color: "bg-[#FF36A6]" },
              { label: "Other", count: 36, pct: 3, color: "bg-[#1769FF]" },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[#929292] text-xs font-inter">{m.label}</span>
                  <span className="text-white text-xs font-inter">{m.count}</span>
                </div>
                <div className="h-1.5 bg-[#292929] rounded-full">
                  <div className={`h-1.5 ${m.color} rounded-full`} style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#292929] bg-[#111111] p-6">
          <h2 className="font-sora font-semibold text-white mb-5">Severity Distribution</h2>
          <div className="space-y-4">
            {[
              { label: "Critical", count: 24, pct: 2, color: "bg-[#FF3155]" },
              { label: "High", count: 189, pct: 15, color: "bg-[#FF36A6]" },
              { label: "Medium", count: 437, pct: 34, color: "bg-[#D7FF00]" },
              { label: "Low", count: 634, pct: 49, color: "bg-[#1769FF]" },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[#929292] text-xs font-inter">{m.label}</span>
                  <span className="text-white text-xs font-inter">{m.count}</span>
                </div>
                <div className="h-1.5 bg-[#292929] rounded-full">
                  <div className={`h-1.5 ${m.color} rounded-full`} style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
