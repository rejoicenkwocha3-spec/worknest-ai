import { FileText, Download } from "lucide-react";

const reports = [
  { name: "November Business Summary",    date: "Nov 20, 2026", status: "Ready",      type: "Monthly" },
  { name: "Q3 Sales Performance Report",  date: "Oct 1, 2026",  status: "Ready",      type: "Quarterly" },
  { name: "October Marketing Analytics",  date: "Nov 1, 2026",  status: "Ready",      type: "Monthly" },
  { name: "Customer Retention Analysis",  date: "Nov 15, 2026", status: "Processing", type: "Custom" },
];

export default function ReportsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-space font-bold text-2xl text-white mb-1">Reports</h1>
        <p className="font-inter text-[#A7B2CC] text-sm">Generate, view and export business intelligence reports.</p>
      </div>

      <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-4 mb-5">
        <p className="font-inter text-[#A7B2CC] text-sm">
          Connect a data source to generate real reports. Reports below are sample records for the demo workspace.
        </p>
      </div>

      <div className="space-y-3">
        {reports.map((r, i) => (
          <div key={i} className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl px-5 py-4 flex items-center gap-4">
            <div className="w-9 h-9 rounded-lg bg-[#087BFF]/20 flex items-center justify-center flex-shrink-0">
              <FileText size={16} className="text-[#00D4FF]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-space font-semibold text-white text-sm">{r.name}</p>
              <p className="font-inter text-[#A7B2CC] text-xs">{r.type} report</p>
            </div>
            <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${r.status === "Ready" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>
              {r.status}
            </span>
            <span className="text-[#A7B2CC]/60 text-xs font-mono hidden sm:block">{r.date}</span>
            {r.status === "Ready" && (
              <button className="text-[#A7B2CC] hover:text-[#00D4FF] transition-colors" title="Export">
                <Download size={16} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
