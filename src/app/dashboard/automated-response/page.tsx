"use client";
import { useState } from "react";
import { Zap, Play, Pause, Plus, CheckCircle } from "lucide-react";

const workflows = [
  { id: "WF-01", name: "Critical Threat Alert", trigger: "Threat severity = Critical", action: "Alert security team + create incident", active: true, runs: 24 },
  { id: "WF-02", name: "Phishing Quarantine", trigger: "Email classified as phishing", action: "Quarantine email + notify recipient", active: true, runs: 847 },
  { id: "WF-03", name: "Suspicious Login Alert", trigger: "Login risk score > 85", action: "Alert user + require re-authentication", active: true, runs: 312 },
  { id: "WF-04", name: "Account Lockout Response", trigger: "5+ failed logins in 10 minutes", action: "Temporarily lock account + notify admin", active: false, runs: 18 },
  { id: "WF-05", name: "Shadow AI Discovery", trigger: "Unrecognized AI tool detected", action: "Flag for review + notify IT Security", active: true, runs: 7 },
];

export default function AutomatedResponsePage() {
  const [activeStates, setActiveStates] = useState(
    Object.fromEntries(workflows.map(w => [w.id, w.active]))
  );

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-sora font-bold text-2xl text-white mb-1">Automated Response</h1>
          <p className="text-[#929292] text-sm font-inter">Configure automated workflows triggered by security events</p>
        </div>
        <button className="flex items-center gap-2 bg-[#D7FF00] text-black font-sora font-semibold px-4 py-2.5 rounded-lg hover:bg-[#c8f000] transition-colors text-sm">
          <Plus size={16} /> New Workflow
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active Workflows", value: "4", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
          { label: "Total Runs (7d)", value: "1,208", color: "text-[#00E5FF]", border: "border-[#00E5FF]/20" },
          { label: "Actions Taken", value: "987", color: "text-[#FF36A6]", border: "border-[#FF36A6]/20" },
          { label: "Time Saved", value: "~14h", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-xl border ${stat.border} bg-[#111111] p-5`}>
            <p className="text-[#929292] text-xs font-inter mb-2">{stat.label}</p>
            <p className={`font-sora font-bold text-3xl ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {workflows.map((wf) => (
          <div key={wf.id} className={`rounded-xl border ${activeStates[wf.id] ? "border-[#D7FF00]/20" : "border-[#292929]"} bg-[#111111] p-6`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 ${activeStates[wf.id] ? "bg-[#D7FF00]/10" : "bg-[#292929]"} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Zap size={18} className={activeStates[wf.id] ? "text-[#D7FF00]" : "text-[#929292]"} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-sora font-semibold text-white text-sm">{wf.name}</p>
                    <span className="text-[#929292] text-xs font-inter">{wf.id}</span>
                    {activeStates[wf.id] && (
                      <span className="flex items-center gap-1 text-[#D7FF00] text-xs font-inter">
                        <CheckCircle size={12} /> Active
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-[#929292] text-xs font-inter">Trigger</p>
                      <p className="text-[#F5F5F0] text-xs font-inter">{wf.trigger}</p>
                    </div>
                    <div>
                      <p className="text-[#929292] text-xs font-inter">Action</p>
                      <p className="text-[#F5F5F0] text-xs font-inter">{wf.action}</p>
                    </div>
                    <div>
                      <p className="text-[#929292] text-xs font-inter">Total runs</p>
                      <p className="text-[#F5F5F0] text-xs font-inter">{wf.runs}</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveStates(s => ({ ...s, [wf.id]: !s[wf.id] }))}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-inter transition-colors ${
                  activeStates[wf.id]
                    ? "border-[#FF3155]/30 text-[#FF3155] hover:bg-[#FF3155]/10"
                    : "border-[#D7FF00]/30 text-[#D7FF00] hover:bg-[#D7FF00]/10"
                }`}
              >
                {activeStates[wf.id] ? <><Pause size={12} /> Pause</> : <><Play size={12} /> Enable</>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
