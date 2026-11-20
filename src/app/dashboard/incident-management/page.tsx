"use client";
import { useState } from "react";
import { FileText, Plus, AlertTriangle } from "lucide-react";

const incidents = [
  { id: "INC-001", title: "Executive Account Compromise", severity: "Critical", status: "Investigating", assignee: "Security Team", created: "2026-11-20 09:00", updated: "09:14" },
  { id: "INC-002", title: "Phishing Campaign Targeting Finance", severity: "High", status: "Contained", assignee: "Jane Smith", created: "2026-11-20 08:30", updated: "09:02" },
  { id: "INC-003", title: "Shadow AI Usage Discovery", severity: "Medium", status: "Open", assignee: "Unassigned", created: "2026-11-20 07:45", updated: "08:45" },
  { id: "INC-004", title: "Credential Stuffing Campaign", severity: "High", status: "Resolved", assignee: "Mark Jones", created: "2026-11-19 16:00", updated: "11-20 08:00" },
  { id: "INC-005", title: "Anomalous VPN Access", severity: "Medium", status: "Closed", assignee: "Lisa Chen", created: "2026-11-19 14:00", updated: "11-19 17:00" },
];

export default function IncidentManagementPage() {
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newSev, setNewSev] = useState("Medium");

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-sora font-bold text-2xl text-white mb-1">Incident Management</h1>
          <p className="text-[#929292] text-sm font-inter">Create, investigate and track security incidents to resolution</p>
        </div>
        <button
          onClick={() => setShowNew(true)}
          className="flex items-center gap-2 bg-[#D7FF00] text-black font-sora font-semibold px-4 py-2.5 rounded-lg hover:bg-[#c8f000] transition-colors text-sm"
        >
          <Plus size={16} /> New Incident
        </button>
      </div>

      {showNew && (
        <div className="rounded-xl border border-[#D7FF00]/30 bg-[#111111] p-6 mb-6">
          <h2 className="font-sora font-semibold text-white mb-4">Create New Incident</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-[#929292] text-xs font-inter block mb-2">Title</label>
              <input
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-2.5 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50"
                placeholder="Incident title..."
              />
            </div>
            <div>
              <label className="text-[#929292] text-xs font-inter block mb-2">Severity</label>
              <select
                value={newSev}
                onChange={e => setNewSev(e.target.value)}
                className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-2.5 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50"
              >
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => { setShowNew(false); setNewTitle(""); }}
              className="flex items-center gap-2 bg-[#D7FF00] text-black font-sora font-semibold px-4 py-2 rounded-lg text-sm"
            >
              Create Incident
            </button>
            <button onClick={() => setShowNew(false)} className="text-[#929292] text-sm font-inter hover:text-white">
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Open", value: "7", color: "text-[#FF3155]", border: "border-[#FF3155]/20" },
          { label: "Investigating", value: "4", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
          { label: "Contained", value: "2", color: "text-[#00E5FF]", border: "border-[#00E5FF]/20" },
          { label: "Resolved", value: "31", color: "text-[#929292]", border: "border-[#292929]" },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-xl border ${stat.border} bg-[#111111] p-5`}>
            <p className="text-[#929292] text-xs font-inter mb-2">{stat.label}</p>
            <p className={`font-sora font-bold text-3xl ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#292929] bg-[#111111]">
        <div className="flex items-center gap-3 p-5 border-b border-[#292929]">
          <FileText size={18} className="text-[#D7FF00]" />
          <h2 className="font-sora font-semibold text-white">Incidents</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#292929]">
                {["ID", "Title", "Severity", "Status", "Assignee", "Created", "Updated"].map((h) => (
                  <th key={h} className="text-left text-[#929292] text-xs font-inter px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {incidents.map((inc) => (
                <tr key={inc.id} className="border-b border-[#292929] last:border-0 hover:bg-[#050505] cursor-pointer">
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{inc.id}</td>
                  <td className="px-5 py-4 text-white text-xs font-inter font-medium">{inc.title}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-inter ${inc.severity === "Critical" ? "text-[#FF3155]" : inc.severity === "High" ? "text-[#FF36A6]" : "text-[#D7FF00]"}`}>{inc.severity}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-inter ${inc.status === "Resolved" || inc.status === "Closed" ? "text-[#929292]" : inc.status === "Investigating" ? "text-[#D7FF00]" : "text-[#00E5FF]"}`}>{inc.status}</span>
                  </td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{inc.assignee}</td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{inc.created}</td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{inc.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
