"use client";

import { useState } from "react";
import { BarChart3, Plus, X } from "lucide-react";

type Dashboard = { id: string; name: string; widgets: number; created: string };

export default function DashboardsPage() {
  const [dashboards, setDashboards] = useState<Dashboard[]>([
    { id: "1", name: "Business Overview", widgets: 4, created: "Nov 15, 2026" },
    { id: "2", name: "Sales Performance", widgets: 6, created: "Nov 10, 2026" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");

  function createDashboard() {
    if (!newName.trim()) return;
    setDashboards((prev) => [
      ...prev,
      { id: Date.now().toString(), name: newName.trim(), widgets: 0, created: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) },
    ]);
    setNewName("");
    setShowModal(false);
  }

  function deleteDashboard(id: string) {
    setDashboards((prev) => prev.filter((d) => d.id !== id));
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-space font-bold text-2xl text-white mb-1">Dashboards</h1>
          <p className="font-inter text-[#A7B2CC] text-sm">Create and manage your business intelligence dashboards.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          <Plus size={16} /> New Dashboard
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {dashboards.map((d) => (
          <div key={d.id} className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-6 hover:border-[rgba(0,212,255,0.4)] transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#087BFF]/20 border border-[#087BFF]/30 flex items-center justify-center">
                <BarChart3 size={18} className="text-[#00D4FF]" />
              </div>
              <button
                onClick={() => deleteDashboard(d.id)}
                className="opacity-0 group-hover:opacity-100 text-[#A7B2CC] hover:text-red-400 transition-all"
                title="Delete dashboard"
              >
                <X size={15} />
              </button>
            </div>
            <h3 className="font-space font-semibold text-white text-sm mb-1">{d.name}</h3>
            <p className="font-inter text-[#A7B2CC] text-xs">{d.widgets} widgets</p>
            <p className="font-mono text-[#A7B2CC]/50 text-[10px] mt-3">Created {d.created}</p>
          </div>
        ))}

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#0B1035] border border-dashed border-[rgba(0,212,255,0.3)] rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:border-[#00D4FF]/50 transition-colors"
        >
          <Plus size={24} className="text-[#087BFF]/60" />
          <span className="font-inter text-[#A7B2CC] text-sm">New Dashboard</span>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-2xl p-7 w-full max-w-sm">
            <h2 className="font-space font-bold text-white text-lg mb-5">New Dashboard</h2>
            <div className="mb-5">
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Dashboard name</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && createDashboard()}
                autoFocus
                className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60 transition-colors"
                placeholder="e.g. Sales Performance"
              />
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowModal(false)} className="flex-1 bg-[#101A42] border border-[rgba(0,212,255,0.14)] text-white font-space font-semibold text-sm py-3 rounded-lg">Cancel</button>
              <button onClick={createDashboard} disabled={!newName.trim()} className="flex-1 bg-[#087BFF] hover:bg-[#0668d6] disabled:opacity-40 text-white font-space font-semibold text-sm py-3 rounded-lg transition-colors">Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
