"use client";

import { useState } from "react";
import { Database, Plus, CheckCircle, Clock, AlertCircle, X } from "lucide-react";

const sourceTypes = [
  { id: "postgresql", label: "PostgreSQL",    desc: "Connect a PostgreSQL database" },
  { id: "mysql",      label: "MySQL",         desc: "Connect a MySQL database" },
  { id: "supabase",   label: "Supabase",      desc: "Connect your Supabase project" },
  { id: "csv",        label: "CSV Upload",    desc: "Upload a CSV file" },
  { id: "excel",      label: "Excel Upload",  desc: "Upload an Excel file" },
  { id: "sheets",     label: "Google Sheets", desc: "Connect a Google Sheet" },
];

type Source = { id: string; name: string; type: string; status: "connected" | "error"; lastSync: string };

export default function DataSourcesPage() {
  const [sources] = useState<Source[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [connName, setConnName] = useState("");
  const [notice, setNotice] = useState("");

  function handleAdd() {
    setNotice("To connect a data source, configure your Supabase backend. Database credentials are handled server-side and are never exposed to the browser.");
    setShowModal(false);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-space font-bold text-2xl text-white mb-1">Data Sources</h1>
          <p className="font-inter text-[#A7B2CC] text-sm">Connect your business data to start asking questions.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          <Plus size={16} /> Add Source
        </button>
      </div>

      {notice && (
        <div className="bg-[#087BFF]/10 border border-[#087BFF]/30 rounded-xl p-4 mb-6">
          <p className="text-[#8DEBFF] text-sm font-inter">{notice}</p>
        </div>
      )}

      {sources.length === 0 ? (
        <div className="bg-[#0B1035] border border-dashed border-[rgba(0,212,255,0.3)] rounded-2xl p-16 text-center">
          <Database size={48} className="text-[#087BFF]/40 mx-auto mb-4" />
          <h2 className="font-space font-semibold text-white text-lg mb-2">No data sources connected</h2>
          <p className="font-inter text-[#A7B2CC] text-sm mb-6 max-w-sm mx-auto">
            Connect a database, upload a file or link a Google Sheet to start asking questions about your business data.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            <Plus size={16} /> Add Your First Source
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {sources.map((s) => (
            <div key={s.id} className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl px-5 py-4 flex items-center gap-4">
              <Database size={18} className="text-[#00D4FF]" />
              <div className="flex-1">
                <p className="font-space font-semibold text-white text-sm">{s.name}</p>
                <p className="font-inter text-[#A7B2CC] text-xs">{s.type}</p>
              </div>
              <div className="flex items-center gap-1.5">
                {s.status === "connected" ? (
                  <><CheckCircle size={14} className="text-green-400" /><span className="text-green-400 text-xs font-inter">Connected</span></>
                ) : (
                  <><AlertCircle size={14} className="text-red-400" /><span className="text-red-400 text-xs font-inter">Error</span></>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-[#A7B2CC]">
                <Clock size={12} />
                <span className="text-xs font-mono">{s.lastSync}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-2xl p-7 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-space font-bold text-white text-lg">Add Data Source</h2>
              <button onClick={() => setShowModal(false)} className="text-[#A7B2CC] hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="mb-5">
              <label className="block font-inter text-sm text-[#A7B2CC] mb-3">Source type</label>
              <div className="grid grid-cols-2 gap-2">
                {sourceTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedType(t.id)}
                    className={`p-3 rounded-lg border text-left transition-colors ${selectedType === t.id ? "border-[#00D4FF]/60 bg-[#087BFF]/10" : "border-[rgba(0,212,255,0.14)] hover:border-[rgba(0,212,255,0.3)]"}`}
                  >
                    <p className="font-space font-semibold text-white text-xs">{t.label}</p>
                    <p className="font-inter text-[#A7B2CC] text-[10px] mt-0.5">{t.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {selectedType && (
              <div className="mb-5">
                <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Connection name</label>
                <input
                  type="text"
                  value={connName}
                  onChange={(e) => setConnName(e.target.value)}
                  placeholder="e.g. Production Database"
                  className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60 transition-colors"
                />
              </div>
            )}

            <div className="flex gap-3">
              <button onClick={() => setShowModal(false)} className="flex-1 bg-[#101A42] border border-[rgba(0,212,255,0.14)] text-white font-space font-semibold text-sm py-3 rounded-lg hover:border-[rgba(0,212,255,0.3)]">
                Cancel
              </button>
              <button
                onClick={handleAdd}
                disabled={!selectedType}
                className="flex-1 bg-[#087BFF] hover:bg-[#0668d6] disabled:opacity-40 text-white font-space font-semibold text-sm py-3 rounded-lg transition-colors"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
