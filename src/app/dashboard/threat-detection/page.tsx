import { AlertTriangle, Filter, Search } from "lucide-react";

const threats = [
  { id: "THR-001", severity: "CRITICAL", type: "Account Takeover", description: "Multiple failed logins followed by successful auth from new location", target: "finance@example.com", detected: "2026-11-20 09:14", status: "Investigating", color: "bg-[#FF3155] text-black" },
  { id: "THR-002", severity: "HIGH", type: "Phishing Email", description: "Suspicious link pointing to credential harvesting page detected in attachment", target: "hr-team mailbox", detected: "2026-11-20 09:08", status: "Blocked", color: "bg-[#FF36A6] text-black" },
  { id: "THR-003", severity: "HIGH", type: "Credential Stuffing", description: "High volume of failed login attempts across multiple accounts detected", target: "admin portal", detected: "2026-11-20 09:01", status: "Mitigating", color: "bg-[#FF36A6] text-black" },
  { id: "THR-004", severity: "MEDIUM", type: "Anomalous Login", description: "Login from unrecognized country outside user baseline", target: "ops@example.com", detected: "2026-11-20 08:53", status: "Reviewed", color: "bg-[#D7FF00] text-black" },
  { id: "THR-005", severity: "MEDIUM", type: "AI Usage Anomaly", description: "AI model access detected outside normal business hours by user", target: "dev@example.com", detected: "2026-11-20 08:45", status: "Monitoring", color: "bg-[#D7FF00] text-black" },
  { id: "THR-006", severity: "LOW", type: "New Device Login", description: "User authenticated from an unrecognized device for the first time", target: "marketing@example.com", detected: "2026-11-20 08:32", status: "Closed", color: "bg-[#1769FF] text-white" },
];

export default function ThreatDetectionPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-sora font-bold text-2xl text-white mb-1">Threat Detection</h1>
          <p className="text-[#929292] text-sm font-inter">Monitor and investigate active threats across your environment</p>
        </div>
        <div className="flex items-center gap-2 bg-[#111111] border border-[#FF3155]/30 rounded-lg px-4 py-2">
          <div className="w-2 h-2 bg-[#FF3155] rounded-full animate-pulse-glow" />
          <span className="text-[#FF3155] text-xs font-inter">3 Critical</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active Threats", value: "14", color: "text-[#FF3155]", border: "border-[#FF3155]/20" },
          { label: "Critical", value: "3", color: "text-[#FF36A6]", border: "border-[#FF36A6]/20" },
          { label: "Under Investigation", value: "6", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
          { label: "Resolved Today", value: "27", color: "text-[#00E5FF]", border: "border-[#00E5FF]/20" },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-xl border ${stat.border} bg-[#111111] p-5`}>
            <p className="text-[#929292] text-xs font-inter mb-2">{stat.label}</p>
            <p className={`font-sora font-bold text-3xl ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Threat table */}
      <div className="rounded-xl border border-[#292929] bg-[#111111]">
        <div className="flex items-center justify-between p-5 border-b border-[#292929]">
          <div className="flex items-center gap-3">
            <AlertTriangle size={18} className="text-[#FF3155]" />
            <h2 className="font-sora font-semibold text-white">Active Threats</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-[#050505] border border-[#292929] rounded-lg px-3 py-2">
              <Search size={14} className="text-[#929292]" />
              <span className="text-[#929292] text-xs font-inter">Search threats...</span>
            </div>
            <button className="flex items-center gap-2 bg-[#050505] border border-[#292929] rounded-lg px-3 py-2">
              <Filter size={14} className="text-[#929292]" />
              <span className="text-[#929292] text-xs font-inter">Filter</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#292929]">
                {["ID", "Severity", "Type", "Description", "Target", "Detected", "Status"].map((h) => (
                  <th key={h} className="text-left text-[#929292] text-xs font-inter px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {threats.map((t) => (
                <tr key={t.id} className="border-b border-[#292929] last:border-0 hover:bg-[#050505] transition-colors">
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{t.id}</td>
                  <td className="px-5 py-4">
                    <span className={`text-[9px] font-sora font-bold px-2 py-0.5 rounded ${t.color}`}>{t.severity}</span>
                  </td>
                  <td className="px-5 py-4 text-white text-xs font-inter font-medium">{t.type}</td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter max-w-xs truncate">{t.description}</td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{t.target}</td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{t.detected}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-inter font-medium ${
                      t.status === "Investigating" ? "text-[#D7FF00]" :
                      t.status === "Blocked" ? "text-[#00E5FF]" :
                      t.status === "Closed" ? "text-[#929292]" : "text-white"
                    }`}>{t.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[#929292] text-xs font-inter text-center py-4 border-t border-[#292929]">
          Sample data for development. Connect live integrations to populate real threat data.
        </p>
      </div>
    </div>
  );
}
