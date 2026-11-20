"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, TrendingUp, AlertTriangle, CheckCircle2, Layers, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface Project {
  id: string;
  name: string;
  status: string;
  completion_pct: number;
  start_date: string | null;
  end_date: string | null;
}

const progressData = [
  { month: "Jul", planned: 20, actual: 18 },
  { month: "Aug", planned: 35, actual: 30 },
  { month: "Sep", planned: 48, actual: 45 },
  { month: "Oct", planned: 60, actual: 55 },
  { month: "Nov", planned: 72, actual: 68 },
];

export default function OverviewPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ full_name?: string; email?: string } | null>(null);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (authUser) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name")
          .eq("id", authUser.id)
          .single();
        setUser({ full_name: profile?.full_name, email: authUser.email });
      }

      const { data } = await supabase
        .from("projects")
        .select("id, name, status, completion_pct, start_date, end_date")
        .order("created_at", { ascending: false })
        .limit(10);

      setProjects(data || []);
      setLoading(false);
    }
    load();
  }, []);

  const total = projects.length;
  const active = projects.filter((p) => p.status === "active").length;
  const onTrack = projects.filter((p) => p.status === "on_track" || (p.status === "active" && p.completion_pct >= 50)).length;
  const atRisk = projects.filter((p) => p.status === "at_risk" || p.status === "delayed").length;
  const avgPct = total > 0 ? Math.round(projects.reduce((sum, p) => sum + (p.completion_pct || 0), 0) / total) : 0;

  const firstName = user?.full_name?.split(" ")[0] || "there";

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.75rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101828", margin: "0 0 0.25rem" }}>
            Good morning, {firstName}
          </h1>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>
            Here is a summary of your construction portfolio.
          </p>
        </div>
        <Link href="/dashboard/projects" className="btn-primary" style={{ fontSize: "0.9rem" }}>
          <Plus size={16} /> New Project
        </Link>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "1.75rem" }}>
        {[
          { label: "Total Projects", value: total, icon: Layers, color: "#0039FF", bg: "#EAF0FF" },
          { label: "Active Sites", value: active, icon: TrendingUp, color: "#0039FF", bg: "#EAF0FF" },
          { label: "On Track", value: onTrack, icon: CheckCircle2, color: "#10B981", bg: "#D1FAE5" },
          { label: "At Risk", value: atRisk, icon: AlertTriangle, color: "#F59E0B", bg: "#FEF3C7" },
          { label: "Avg. Completion", value: `${avgPct}%`, icon: TrendingUp, color: "#0039FF", bg: "#EAF0FF" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="stat-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "#6B7280", marginBottom: "0.5rem", fontWeight: 500 }}>{s.label}</div>
                  <div style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "2rem", color: "#101828", lineHeight: 1 }}>{loading ? "..." : s.value}</div>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: "8px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={18} color={s.color} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart + Project list */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
        {/* Chart */}
        <div className="card">
          <div style={{ marginBottom: "1.25rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 0.25rem" }}>Portfolio Progress</h3>
            <p style={{ fontSize: "0.8125rem", color: "#9CA3AF", margin: 0 }}>Planned vs actual across all projects</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={progressData} margin={{ top: 0, right: 0, bottom: 0, left: -30 }}>
              <defs>
                <linearGradient id="planned" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0039FF" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#0039FF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="actual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <Tooltip contentStyle={{ fontSize: "0.8125rem", border: "1px solid #E2E6F0", borderRadius: "0.5rem" }} />
              <Area type="monotone" dataKey="planned" name="Planned" stroke="#0039FF" strokeWidth={2} fill="url(#planned)" />
              <Area type="monotone" dataKey="actual" name="Actual" stroke="#10B981" strokeWidth={2} fill="url(#actual)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recent projects */}
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0 }}>Recent Projects</h3>
            <Link href="/dashboard/projects" style={{ fontSize: "0.8125rem", color: "#0039FF", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem" }}>
              View all <ArrowRight size={13} />
            </Link>
          </div>

          {loading ? (
            <div style={{ color: "#9CA3AF", fontSize: "0.9rem" }}>Loading projects...</div>
          ) : projects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <p style={{ color: "#9CA3AF", fontSize: "0.9rem", marginBottom: "1rem" }}>No projects yet.</p>
              <Link href="/dashboard/projects" className="btn-primary" style={{ fontSize: "0.875rem" }}>
                <Plus size={15} /> Create your first project
              </Link>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {projects.slice(0, 5).map((p) => (
                <div key={p.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#101828", marginBottom: "0.25rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {p.name}
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${p.completion_pct || 0}%` }} />
                    </div>
                  </div>
                  <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#6B7280", whiteSpace: "nowrap" }}>
                    {p.completion_pct || 0}%
                  </div>
                  <StatusBadge status={p.status} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; className: string }> = {
    active: { label: "Active", className: "status-on-track" },
    on_track: { label: "On Track", className: "status-on-track" },
    at_risk: { label: "At Risk", className: "status-at-risk" },
    delayed: { label: "Delayed", className: "status-delayed" },
    completed: { label: "Done", className: "status-completed" },
    paused: { label: "Paused", className: "status-at-risk" },
  };
  const s = map[status] || { label: status, className: "status-at-risk" };
  return <span className={`status-badge ${s.className}`}>{s.label}</span>;
}
