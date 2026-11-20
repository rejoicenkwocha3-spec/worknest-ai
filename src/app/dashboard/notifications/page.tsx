"use client";

import { useEffect, useState } from "react";
import { Bell, Loader2, CheckCheck } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Notification {
  id: string;
  title: string;
  body: string | null;
  type: string;
  read: boolean;
  created_at: string;
  projects?: { name: string };
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadNotifications() {
    const supabase = createClient();
    const { data } = await supabase.from("notifications").select("*, projects(name)").order("created_at", { ascending: false }).limit(50);
    setNotifications(data || []);
    setLoading(false);
  }

  useEffect(() => { loadNotifications(); }, []);

  async function markAllRead() {
    const supabase = createClient();
    await supabase.from("notifications").update({ read: true }).eq("read", false);
    loadNotifications();
  }

  async function markRead(id: string) {
    const supabase = createClient();
    await supabase.from("notifications").update({ read: true }).eq("id", id);
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
  }

  const unread = notifications.filter((n) => !n.read).length;

  const typeColor: Record<string, string> = {
    info: "#0039FF",
    warning: "#F59E0B",
    success: "#10B981",
    error: "#EF4444",
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.75rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101828", margin: "0 0 0.25rem" }}>Notifications</h1>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>{unread > 0 ? `${unread} unread` : "All caught up"}</p>
        </div>
        {unread > 0 && (
          <button onClick={markAllRead} className="btn-secondary" style={{ fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <CheckCheck size={16} /> Mark all read
          </button>
        )}
      </div>

      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#9CA3AF" }}><Loader2 size={18} className="spin" /> Loading notifications...</div>
      ) : notifications.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <Bell size={40} color="#D1D5DB" style={{ margin: "0 auto 1rem" }} />
          <h3 style={{ fontSize: "1.125rem", margin: "0 0 0.5rem" }}>No notifications</h3>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>You&apos;ll receive notifications about project updates, milestones and issues here.</p>
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          {notifications.map((n, i) => (
            <div
              key={n.id}
              onClick={() => { if (!n.read) markRead(n.id); }}
              style={{
                display: "flex", alignItems: "flex-start", gap: "1rem",
                padding: "1rem 1.5rem",
                borderBottom: i < notifications.length - 1 ? "1px solid #E2E6F0" : "none",
                background: n.read ? "transparent" : "#F5F8FF",
                cursor: n.read ? "default" : "pointer",
              }}
            >
              <div style={{
                width: 10, height: 10, borderRadius: "50%", marginTop: "5px",
                background: n.read ? "#E2E6F0" : (typeColor[n.type] || "#0039FF"),
                flexShrink: 0,
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: n.read ? 500 : 700, fontSize: "0.9375rem", color: "#101828" }}>{n.title}</div>
                {n.body && <div style={{ fontSize: "0.875rem", color: "#6B7280", marginTop: "0.25rem", lineHeight: 1.5 }}>{n.body}</div>}
                <div style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "0.375rem" }}>
                  {new Date(n.created_at).toLocaleString()}
                  {n.projects?.name && ` · ${n.projects.name}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1s linear infinite}`}</style>
    </div>
  );
}
