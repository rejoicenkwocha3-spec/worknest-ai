"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Loader2, MessageSquare, Lightbulb, Bookmark } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string; source?: string };

const suggested = [
  "What were our total sales this month?",
  "Which products performed best last quarter?",
  "Why did our revenue increase in November?",
  "Compare this month with last month",
  "Which customer segment generates the most revenue?",
  "Show me the top 5 customers by revenue",
];

export default function AIAnalystPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello. I am your DataTalk AI analyst. Ask me anything about your connected business data and I will give you an accurate answer.\n\nThis workspace is in demo mode. Connect a data source under Data Sources to get answers based on your actual business data.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [savedMsg, setSavedMsg] = useState<number | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(text?: string) {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    setInput("");

    const newMessages: Message[] = [...messages, { role: "user", content: q }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();

      if (data.error) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.error }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.content, source: data.source }]);
      }
    } catch {
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "Unable to reach the AI service. Check your internet connection and try again.",
      }]);
    }

    setLoading(false);
  }

  function saveInsight(index: number) {
    setSavedMsg(index);
    setTimeout(() => setSavedMsg(null), 1500);
  }

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 0px)" }}>
      {/* Header */}
      <div className="flex-shrink-0 px-6 py-4 border-b border-[rgba(0,212,255,0.14)] flex items-center gap-3">
        <MessageSquare size={18} className="text-[#00D4FF]" />
        <h1 className="font-space font-semibold text-white text-base">AI Analyst</h1>
        <span className="ml-auto font-mono text-[#A7B2CC] text-xs bg-[#101A42] px-2.5 py-1 rounded-full">
          {messages.length > 1 ? `${Math.floor(messages.length / 2)} exchanges` : "Demo mode"}
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-5">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-2xl rounded-2xl px-5 py-4 group relative ${msg.role === "user" ? "bg-[#087BFF]/20 border border-[#087BFF]/30 ml-10" : "bg-[#0B1035] border border-[rgba(0,212,255,0.14)] mr-6"}`}>
              <p className="font-inter text-sm text-white leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              {msg.source && (
                <p className="font-mono text-[#A7B2CC]/60 text-[10px] mt-2">Source: {msg.source}</p>
              )}
              {msg.role === "assistant" && i > 0 && (
                <button
                  onClick={() => saveInsight(i)}
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#A7B2CC] hover:text-[#00D4FF]"
                  title="Save insight"
                >
                  {savedMsg === i ? <Bookmark size={13} className="text-[#00D4FF] fill-[#00D4FF]" /> : <Bookmark size={13} />}
                </button>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-2xl px-5 py-4">
              <div className="flex items-center gap-2">
                <Loader2 size={14} className="text-[#00D4FF] animate-spin" />
                <span className="text-[#A7B2CC] text-xs font-inter">Analysing your data...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggested questions */}
      {messages.length <= 1 && (
        <div className="flex-shrink-0 px-4 md:px-8 pb-4">
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
      <div className="flex-shrink-0 px-4 md:px-8 pb-6 pt-2">
        <div className="flex items-center gap-3 bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-xl px-4 py-3 focus-within:border-[#00D4FF]/40 transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            className="flex-1 bg-transparent text-white font-inter text-sm outline-none placeholder-[#A7B2CC]/50"
            placeholder="Ask anything about your business data..."
            disabled={loading}
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="w-8 h-8 rounded-lg bg-[#087BFF] hover:bg-[#0668d6] disabled:opacity-40 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <ArrowRight size={14} className="text-white" />
          </button>
        </div>
        <p className="text-[#A7B2CC]/40 text-[10px] font-inter mt-2 text-center">
          DataTalk AI only answers from your connected data. Connect a data source for accurate business answers.
        </p>
      </div>
    </div>
  );
}
