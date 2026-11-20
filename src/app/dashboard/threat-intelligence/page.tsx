import { Shield, AlertTriangle } from "lucide-react";

const intel = [
  { id: "INT-001", threat: "Business Email Compromise Campaign", classification: "Social Engineering", severity: "Critical", source: "Email Gateway", context: "Multi-stage BEC campaign targeting finance teams using compromised executive accounts.", vectors: ["Email", "Identity"] },
  { id: "INT-002", threat: "Credential Harvesting Site", classification: "Phishing Infrastructure", severity: "High", source: "URL Analysis", context: "Fake login portal mimicking corporate SSO portal identified in link.", vectors: ["Email", "Web"] },
  { id: "INT-003", threat: "Brute Force Campaign", classification: "Authentication Attack", severity: "High", source: "Login Monitor", context: "Automated login attempts across multiple accounts from rotating IP addresses.", vectors: ["Identity"] },
  { id: "INT-004", threat: "AI Data Exfiltration Risk", classification: "Data Loss", severity: "Medium", source: "AI Monitor", context: "Sensitive data being submitted to external AI tools without authorization.", vectors: ["AI", "Data"] },
];

export default function ThreatIntelligencePage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-sora font-bold text-2xl text-white mb-1">Threat Intelligence</h1>
        <p className="text-[#929292] text-sm font-inter">Contextual threat information and investigation intelligence</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active Campaigns", value: "4", color: "text-[#FF3155]", border: "border-[#FF3155]/20" },
          { label: "New Indicators", value: "18", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
          { label: "Threat Vectors", value: "7", color: "text-[#00E5FF]", border: "border-[#00E5FF]/20" },
          { label: "Intel Reports", value: "32", color: "text-[#1769FF]", border: "border-[#1769FF]/20" },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-xl border ${stat.border} bg-[#111111] p-5`}>
            <p className="text-[#929292] text-xs font-inter mb-2">{stat.label}</p>
            <p className={`font-sora font-bold text-3xl ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {intel.map((item) => (
          <div key={item.id} className="rounded-xl border border-[#292929] bg-[#111111] p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1769FF]/10 rounded-lg flex items-center justify-center">
                  <Shield size={15} className="text-[#1769FF]" />
                </div>
                <div>
                  <p className="text-white font-sora font-semibold text-sm">{item.threat}</p>
                  <p className="text-[#929292] text-xs font-inter">{item.id} · {item.source}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {item.vectors.map((v) => (
                  <span key={v} className="text-xs font-inter bg-[#111111] border border-[#292929] text-[#929292] px-2 py-0.5 rounded">{v}</span>
                ))}
                <span className={`text-xs font-inter font-medium ${item.severity === "Critical" ? "text-[#FF3155]" : item.severity === "High" ? "text-[#FF36A6]" : "text-[#D7FF00]"}`}>{item.severity}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[#929292] text-xs font-inter mb-1">Classification</p>
                <p className="text-white text-sm font-inter">{item.classification}</p>
              </div>
              <div>
                <p className="text-[#929292] text-xs font-inter mb-1">Context</p>
                <p className="text-[#F5F5F0] text-sm font-inter leading-relaxed">{item.context}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
