"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DataTalkLogo from "@/components/DataTalkLogo";
import { CheckCircle, ArrowRight, Database, MessageSquare, BarChart3 } from "lucide-react";

type Step = 1 | 2 | 3;

const sourceTypes = [
  { id: "postgresql", label: "PostgreSQL" },
  { id: "mysql",      label: "MySQL" },
  { id: "supabase",   label: "Supabase" },
  { id: "csv",        label: "CSV Upload" },
  { id: "sheets",     label: "Google Sheets" },
  { id: "skip",       label: "Skip for now" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [workspace, setWorkspace] = useState("");
  const [sourceType, setSourceType] = useState("");
  const [firstQuestion, setFirstQuestion] = useState("");

  const steps = [
    { n: 1, label: "Name your workspace",   icon: BarChart3 },
    { n: 2, label: "Connect data",          icon: Database },
    { n: 3, label: "Ask your first question", icon: MessageSquare },
  ];

  function next() {
    if (step < 3) setStep((s) => (s + 1) as Step);
    else finish();
  }

  function finish() {
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#070A27] flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-10">
        <DataTalkLogo size={32} />
        <span className="font-space font-bold text-white text-lg">DataTalk AI</span>
      </div>

      {/* Step indicators */}
      <div className="flex items-center gap-3 mb-10">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-center gap-3">
            <div className={`flex items-center gap-2 ${step >= s.n ? "text-[#00D4FF]" : "text-[#A7B2CC]/40"}`}>
              <div className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-mono ${step > s.n ? "bg-[#00D4FF] border-[#00D4FF] text-[#070A27]" : step === s.n ? "border-[#00D4FF] text-[#00D4FF]" : "border-[#A7B2CC]/30 text-[#A7B2CC]/40"}`}>
                {step > s.n ? <CheckCircle size={14} /> : s.n}
              </div>
              <span className="hidden sm:block font-inter text-xs">{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-8 h-px ${step > s.n ? "bg-[#00D4FF]/50" : "bg-[#A7B2CC]/20"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="w-full max-w-md bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-2xl p-8">

        {step === 1 && (
          <div>
            <h1 className="font-space font-bold text-2xl text-white mb-2">Name your workspace</h1>
            <p className="font-inter text-[#A7B2CC] text-sm mb-7">This is usually your company or team name.</p>
            <div className="mb-6">
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Workspace name</label>
              <input
                type="text"
                autoFocus
                value={workspace}
                onChange={(e) => setWorkspace(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && workspace.trim() && next()}
                className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60 transition-colors"
                placeholder="e.g. Acme Corporation"
              />
            </div>
            <button
              onClick={next}
              disabled={!workspace.trim()}
              className="w-full bg-[#087BFF] hover:bg-[#0668d6] disabled:opacity-40 text-white font-space font-semibold py-3.5 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Continue <ArrowRight size={16} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="font-space font-bold text-2xl text-white mb-2">Connect your data</h1>
            <p className="font-inter text-[#A7B2CC] text-sm mb-7">Choose a data source to start asking questions. You can add more later.</p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {sourceTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSourceType(t.id)}
                  className={`p-3.5 rounded-xl border text-left transition-colors ${sourceType === t.id ? "border-[#00D4FF]/60 bg-[#087BFF]/10" : "border-[rgba(0,212,255,0.14)] hover:border-[rgba(0,212,255,0.3)]"} ${t.id === "skip" ? "col-span-2 text-center" : ""}`}
                >
                  <span className="font-space font-semibold text-white text-sm">{t.label}</span>
                </button>
              ))}
            </div>
            {sourceType && sourceType !== "skip" && (
              <div className="bg-[#101A42] border border-[rgba(0,212,255,0.14)] rounded-xl p-4 mb-5">
                <p className="font-inter text-[#A7B2CC] text-xs leading-relaxed">
                  Connection credentials are entered securely in the Data Sources section of your dashboard. All connections use read-only access and credentials are never stored in plain text.
                </p>
              </div>
            )}
            <button
              onClick={next}
              disabled={!sourceType}
              className="w-full bg-[#087BFF] hover:bg-[#0668d6] disabled:opacity-40 text-white font-space font-semibold py-3.5 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              {sourceType === "skip" ? "Skip this step" : "Continue"} <ArrowRight size={16} />
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1 className="font-space font-bold text-2xl text-white mb-2">What do you want to know first?</h1>
            <p className="font-inter text-[#A7B2CC] text-sm mb-7">Type the first business question you want DataTalk AI to answer.</p>
            <div className="mb-5">
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Your first question</label>
              <input
                type="text"
                autoFocus
                value={firstQuestion}
                onChange={(e) => setFirstQuestion(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && finish()}
                className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60 transition-colors"
                placeholder="e.g. What were my total sales last month?"
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "What were total sales this month?",
                "Which products sell best?",
                "How many active customers do I have?",
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => setFirstQuestion(q)}
                  className="bg-[#101A42] border border-[rgba(0,212,255,0.14)] hover:border-[rgba(0,212,255,0.3)] text-[#A7B2CC] hover:text-white text-xs font-inter px-3 py-1.5 rounded-lg transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
            <button
              onClick={finish}
              className="w-full bg-[#00D4FF] hover:bg-[#8DEBFF] text-[#070A27] font-space font-semibold py-3.5 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Go to your dashboard <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      <button onClick={finish} className="mt-6 font-inter text-[#A7B2CC]/60 text-xs hover:text-[#A7B2CC] transition-colors">
        Skip setup and go to dashboard
      </button>
    </div>
  );
}
