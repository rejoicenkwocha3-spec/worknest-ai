export const dynamic = "force-dynamic";

import { FileText, Download, Clock, BarChart3 } from "lucide-react";

const reports = [
  { name: "Monthly Business Performance Summary", type: "Performance", frequency: "Monthly", lastRun: "Nov 1, 2026", status: "Ready" },
  { name: "Financial Planning: Budget vs Actual", type: "Financial", frequency: "Weekly", lastRun: "Nov 15, 2026", status: "Ready" },
  { name: "Sales Performance and Pipeline Report", type: "Sales", frequency: "Weekly", lastRun: "Nov 15, 2026", status: "Ready" },
  { name: "Demand Forecast Accuracy Report", type: "Demand", frequency: "Monthly", lastRun: "Nov 1, 2026", status: "Ready" },
  { name: "Supply Chain Risk Assessment", type: "Operations", frequency: "Weekly", lastRun: "Nov 15, 2026", status: "Ready" },
  { name: "AI Intelligence Monthly Digest", type: "AI Insights", frequency: "Monthly", lastRun: "Nov 1, 2026", status: "Ready" },
  { name: "Executive Leadership Briefing", type: "Executive", frequency: "Monthly", lastRun: "Nov 1, 2026", status: "Ready" },
  { name: "Inventory Position and Health Report", type: "Operations", frequency: "Weekly", lastRun: "Nov 15, 2026", status: "Ready" },
];

const typeColors: Record<string, string> = {
  Performance: "#2D7EFF",
  Financial: "#2ECC71",
  Sales: "#0ECFCF",
  Demand: "#F59E0B",
  Operations: "#A78BFA",
  "AI Insights": "#FF6B6B",
  Executive: "#FFBE2E",
};

export default function ReportsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#2D7EFF]/10 flex items-center justify-center">
          <FileText size={18} className="text-[#2D7EFF]" />
        </div>
        <div>
          <h1 className="font-manrope font-extrabold text-2xl text-white mb-1">Reports</h1>
          <p className="text-[#777777] font-inter text-sm">Automated business reports — Demo reports shown for illustration</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Reports available", value: "8", icon: FileText, color: "#2D7EFF" },
          { label: "Auto-generated this month", value: "24", icon: BarChart3, color: "#0ECFCF" },
          { label: "Next scheduled run", value: "Monday", icon: Clock, color: "#2ECC71" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5">
              <Icon size={16} className="mb-3" style={{ color: s.color }} />
              <p className="font-manrope font-bold text-white text-2xl mb-1">{s.value}</p>
              <p className="text-[#777777] font-inter text-xs">{s.label}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden">
        <div className="p-5 border-b border-[#2A2A2A]">
          <p className="text-white font-manrope font-semibold text-sm">Available Reports</p>
        </div>
        <div className="divide-y divide-[#2A2A2A]">
          {reports.map((report) => {
            const color = typeColors[report.type] || "#2D7EFF";
            return (
              <div key={report.name} className="flex items-center gap-4 px-5 py-4 hover:bg-[#1C1C1C] transition-colors">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                  <FileText size={14} style={{ color }} />
                </div>
                <div className="flex-1">
                  <p className="text-white font-inter text-sm mb-0.5">{report.name}</p>
                  <div className="flex items-center gap-3">
                    <span className="font-inter text-xs px-1.5 py-0.5 rounded" style={{ background: `${color}18`, color }}>{report.type}</span>
                    <span className="text-[#555555] font-inter text-xs">{report.frequency}</span>
                    <span className="text-[#555555] font-inter text-xs">Last: {report.lastRun}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-[#2ECC71]/10 text-[#2ECC71] font-inter text-xs px-2 py-1 rounded-full">{report.status}</span>
                  <button className="text-[#777777] hover:text-[#2D7EFF] transition-colors p-1.5 rounded hover:bg-[#2D7EFF]/10">
                    <Download size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
