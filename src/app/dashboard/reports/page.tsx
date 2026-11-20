import { FileText, Download, Calendar } from "lucide-react";

const reports = [
  { id: "RPT-001", title: "Weekly Security Summary", period: "Nov 13-20, 2026", type: "Summary", generated: "2026-11-20 08:00", status: "Ready" },
  { id: "RPT-002", title: "Email Threat Report", period: "November 2026", type: "Module Report", generated: "2026-11-20 06:00", status: "Ready" },
  { id: "RPT-003", title: "Identity Risk Report", period: "November 2026", type: "Module Report", generated: "2026-11-20 06:00", status: "Ready" },
  { id: "RPT-004", title: "Incident Summary Report", period: "Q4 2026", type: "Incident Report", generated: "2026-11-15 00:00", status: "Ready" },
  { id: "RPT-005", title: "Security Posture Assessment", period: "October 2026", type: "Assessment", generated: "2026-11-01 09:00", status: "Ready" },
];

export default function ReportsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-sora font-bold text-2xl text-white mb-1">Security Reports</h1>
          <p className="text-[#929292] text-sm font-inter">Download and share security summaries and threat reports</p>
        </div>
        <button className="flex items-center gap-2 bg-[#D7FF00] text-black font-sora font-semibold px-4 py-2.5 rounded-lg hover:bg-[#c8f000] transition-colors text-sm">
          <FileText size={16} /> Generate Report
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Reports Generated", value: "32", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
          { label: "This Month", value: "8", color: "text-[#00E5FF]", border: "border-[#00E5FF]/20" },
          { label: "Downloaded", value: "19", color: "text-[#FF36A6]", border: "border-[#FF36A6]/20" },
          { label: "Scheduled", value: "4", color: "text-[#1769FF]", border: "border-[#1769FF]/20" },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-xl border ${stat.border} bg-[#111111] p-5`}>
            <p className="text-[#929292] text-xs font-inter mb-2">{stat.label}</p>
            <p className={`font-sora font-bold text-3xl ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {reports.map((r) => (
          <div key={r.id} className="flex items-center gap-4 rounded-xl border border-[#292929] bg-[#111111] p-5 hover:border-[#D7FF00]/20 transition-colors">
            <div className="w-10 h-10 bg-[#D7FF00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText size={18} className="text-[#D7FF00]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-sora font-semibold text-white text-sm mb-1">{r.title}</p>
              <div className="flex items-center gap-4">
                <span className="text-[#929292] text-xs font-inter">{r.type}</span>
                <span className="text-[#929292] text-xs font-inter flex items-center gap-1">
                  <Calendar size={11} /> {r.period}
                </span>
                <span className="text-[#929292] text-xs font-inter">Generated: {r.generated}</span>
              </div>
            </div>
            <button className="flex items-center gap-2 border border-[#292929] hover:border-[#D7FF00]/40 text-[#929292] hover:text-white px-3 py-2 rounded-lg text-xs font-inter transition-colors">
              <Download size={14} /> Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
