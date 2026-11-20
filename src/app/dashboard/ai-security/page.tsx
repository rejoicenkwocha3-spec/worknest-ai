import { Cpu, AlertTriangle, Eye } from "lucide-react";

const aiApps = [
  { name: "ChatGPT Enterprise", category: "LLM", users: 42, lastActivity: "09:11", risk: "Low", status: "Monitored" },
  { name: "GitHub Copilot", category: "Code AI", users: 18, lastActivity: "09:08", risk: "Low", status: "Monitored" },
  { name: "Midjourney", category: "Image AI", users: 7, lastActivity: "08:52", risk: "Medium", status: "Flagged" },
  { name: "Unrecognized API", category: "Shadow AI", users: 1, lastActivity: "02:31", risk: "High", status: "Investigating" },
  { name: "Claude API", category: "LLM", users: 12, lastActivity: "08:30", risk: "Low", status: "Monitored" },
  { name: "Custom ML Model", category: "Internal AI", users: 3, lastActivity: "07:44", risk: "Medium", status: "Review" },
];

const anomalies = [
  { event: "Unauthorized AI API call detected", app: "Unknown endpoint", risk: "High", time: "02:31" },
  { event: "Large data export via AI tool", app: "Midjourney", risk: "Medium", time: "08:52" },
  { event: "AI usage outside approved hours", app: "Custom ML Model", risk: "Medium", time: "07:44" },
];

export default function AISecurityPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-sora font-bold text-2xl text-white mb-1">AI Security</h1>
        <p className="text-[#929292] text-sm font-inter">Monitor AI application usage, governance risks and shadow AI activity</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "AI Apps Detected", value: "6", color: "text-[#FF36A6]", border: "border-[#FF36A6]/20" },
          { label: "Shadow AI Found", value: "1", color: "text-[#FF3155]", border: "border-[#FF3155]/20" },
          { label: "Active AI Users", value: "83", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
          { label: "Anomalies Today", value: "3", color: "text-[#00E5FF]", border: "border-[#00E5FF]/20" },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-xl border ${stat.border} bg-[#111111] p-5`}>
            <p className="text-[#929292] text-xs font-inter mb-2">{stat.label}</p>
            <p className={`font-sora font-bold text-3xl ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-[#292929] bg-[#111111]">
          <div className="flex items-center gap-3 p-5 border-b border-[#292929]">
            <Cpu size={18} className="text-[#FF36A6]" />
            <h2 className="font-sora font-semibold text-white">AI Application Inventory</h2>
          </div>
          <div className="p-5 space-y-3">
            {aiApps.map((app) => (
              <div key={app.name} className="flex items-center gap-3 py-2.5 px-4 rounded-lg bg-[#050505] border border-[#292929]">
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-inter font-medium">{app.name}</p>
                  <p className="text-[#929292] text-xs font-inter">{app.category} · {app.users} users</p>
                </div>
                <span className={`text-xs font-inter ${app.risk === "High" ? "text-[#FF3155]" : app.risk === "Medium" ? "text-[#D7FF00]" : "text-[#00E5FF]"}`}>{app.risk}</span>
                <span className="text-[#929292] text-xs font-inter">{app.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#292929] bg-[#111111]">
          <div className="flex items-center gap-3 p-5 border-b border-[#292929]">
            <AlertTriangle size={18} className="text-[#D7FF00]" />
            <h2 className="font-sora font-semibold text-white">AI Anomalies</h2>
          </div>
          <div className="p-5 space-y-3">
            {anomalies.map((a, i) => (
              <div key={i} className="rounded-lg bg-[#050505] border border-[#292929] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-inter font-medium ${a.risk === "High" ? "text-[#FF3155]" : "text-[#D7FF00]"}`}>{a.risk} Risk</span>
                  <span className="text-[#929292] text-xs font-inter">{a.time}</span>
                </div>
                <p className="text-white text-sm font-inter mb-1">{a.event}</p>
                <p className="text-[#929292] text-xs font-inter">App: {a.app}</p>
              </div>
            ))}
          </div>
          <p className="text-[#929292] text-xs font-inter text-center py-4 border-t border-[#292929]">
            Sample data for development.
          </p>
        </div>
      </div>
    </div>
  );
}
