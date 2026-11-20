"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Loader2, MessageSquare, Lightbulb } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string; source?: string };

const suggested = [
  "What were our total sales this month?",
  "Which products performed best last quarter?",
  "Why did our revenue increase in November?",
  "Compare this month with last month",
  "Which customer segment generates the most revenue?",
];

const demoResponses: Record<string, { content: string; source: string }> = {
  default: {
    content: "To answer questions about your business data, please connect a data source first. Navigate to Data Sources in the sidebar to connect your database, upload a CSV or link a Google Sheet. Once connected, I can provide accurate answers drawn directly from your data.",
    source: "No data source connected",
  },
};

export default function AIAnalystPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello. I am your DataTalk AI analyst. Ask me anything about your connected business data and I will give you an accurate answer.\n\nThis workspace is currently running in demo mode. Connect a data source to get answers based on your actual business data.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(text?: string) {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: q }]);
    setLoading(true);

    await new Promise((r) => setTimeout(r, 900));

    const resp = demoResponses.default;
    setMessages((prev) => [...prev, { role: "assistant", content: resp.content, source: resp.source }]);
    setLoading(false);
  }

  return (
    <div className="flex flex-col h-screen max-h-screen">
      {/* Header */}
      <div className="flex-shrink-0 px-6 py-4 border-b border-[rgba(0,212,255,0.14)] flex items-center gap-3">
        <MessageSquare size={18} className="text-[#00D4FF]" />
        <h1 className="font-space font-semibold text-white text-base">AI Analyst</h1>
        <span className="ml-auto font-mono text-[#A7B2CC] text-xs bg-[#101A42] px-2.5 py-1 rounded-full">Demo mode</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xl rounded-2xl px-5 py-4 ${msg.role === "user" ? "bg-[#087BFF]/20 border border-[#087BFF]/30 ml-10" : "bg-[#0B1035] border border-[rgba(0,212,255,0.14)] mr-10"}`}>
              <p className="font-inter text-sm text-white leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              {msg.source && (
                <p className="font-mono text-[#A7B2CC]/60 text-[10px] mt-2">Source: {msg.source}</p>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-2xl px-5 py-4 mr-10">
              <Loader2 size={16} className="text-[#00D4FF] animate-spin" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggested */}
      {messages.length <= 1 && (
        <div className="flex-shrink-0 px-6 pb-4">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={13} className="text-[#A7B2CC]" />
            <span className="text-[#A7B2CC] text-xs font-inter">Suggested questions</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {suggested.map((s) => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                className="bg-[#101A42] border border-[rgba(0,212,255,0.14)] hover:border-[#00D4FF]/40 text-[#A7B2CC] hover:text-white text-xs font-inter px-3 py-2 rounded-lg transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="flex-shrink-0 px-6 pb-6">
        <div className="flex items-center gap-3 bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-xl px-4 py-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            className="flex-1 bg-transparent text-white font-inter text-sm outline-none placeholder-[#A7B2CC]/50"
            placeholder="Ask anything about your business data..."
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="w-8 h-8 rounded-lg bg-[#087BFF] hover:bg-[#0668d6] disabled:opacity-40 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <ArrowRight size={14} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
