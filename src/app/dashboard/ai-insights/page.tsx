"use client";

import { useState, useRef, useEffect } from "react";
import { Brain, Send, Loader2, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "What is the current status of my projects?",
  "Which projects are falling behind schedule?",
  "What issues were reported this week?",
  "Summarise the latest site updates.",
  "Which milestones are approaching?",
  "Generate a weekly construction report.",
  "What problems need immediate attention?",
];

export default function AIInsightsPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I am the RemoteSite AI assistant. I can answer questions about your construction projects, analyse progress, identify risks and generate reports based on your actual project data.\n\nWhat would you like to know?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(text?: string) {
    const question = text || input.trim();
    if (!question || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || "I could not generate a response. Please try again." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "An error occurred while processing your request. Please check your connection and try again." }]);
    }

    setLoading(false);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 60px - 3.5rem)" }}>
      <div style={{ marginBottom: "1.25rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101828", margin: "0 0 0.25rem" }}>AI Insights</h1>
        <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>Ask questions about your construction projects in plain language.</p>
      </div>

      <div style={{ display: "flex", gap: "1.5rem", flex: 1, minHeight: 0 }}>
        {/* Chat */}
        <div className="card" style={{ flex: 1, display: "flex", flexDirection: "column", padding: "1.25rem", minHeight: 0 }}>
          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1rem" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                {m.role === "assistant" && (
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#EAF0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginRight: "0.75rem", marginTop: "0.125rem" }}>
                    <Brain size={16} color="#0039FF" />
                  </div>
                )}
                <div style={{
                  background: m.role === "user" ? "#0039FF" : "#F7F8FA",
                  borderRadius: m.role === "user" ? "1rem 1rem 0.25rem 1rem" : "0.25rem 1rem 1rem 1rem",
                  padding: "0.875rem 1rem",
                  maxWidth: "75%",
                  color: m.role === "user" ? "#FFFFFF" : "#252B36",
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  border: m.role === "assistant" ? "1px solid #E2E6F0" : "none",
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#EAF0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Brain size={16} color="#0039FF" />
                </div>
                <div style={{ background: "#F7F8FA", border: "1px solid #E2E6F0", borderRadius: "0.25rem 1rem 1rem 1rem", padding: "0.875rem 1rem", display: "flex", gap: "0.375rem" }}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#0039FF", animation: `bounce 1.2s ${i * 0.2}s infinite` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ display: "flex", gap: "0.75rem", borderTop: "1px solid #E2E6F0", paddingTop: "1rem" }}>
            <input
              className="input-field"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
              placeholder="Ask about your construction projects..."
              disabled={loading}
              style={{ flex: 1 }}
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || loading}
              className="btn-primary"
              style={{ padding: "0.6875rem 1rem", opacity: !input.trim() || loading ? 0.5 : 1 }}
            >
              {loading ? <Loader2 size={18} className="spin" /> : <Send size={18} />}
            </button>
          </div>
        </div>

        {/* Suggestions panel */}
        <div style={{ width: "240px", flexShrink: 0 }}>
          <div className="card" style={{ padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Sparkles size={16} color="#0039FF" />
              <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#101828" }}>Suggested questions</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSend(s)}
                  disabled={loading}
                  style={{
                    background: "none", border: "1px solid #E2E6F0",
                    borderRadius: "0.5rem", padding: "0.625rem 0.75rem",
                    textAlign: "left", cursor: "pointer",
                    fontSize: "0.8125rem", color: "#252B36",
                    lineHeight: 1.4, transition: "border-color 0.15s, background-color 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#0039FF"; (e.currentTarget as HTMLButtonElement).style.background = "#EAF0FF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#E2E6F0"; (e.currentTarget as HTMLButtonElement).style.background = "none"; }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1s linear infinite}
        @keyframes bounce{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}
      `}</style>
    </div>
  );
}
