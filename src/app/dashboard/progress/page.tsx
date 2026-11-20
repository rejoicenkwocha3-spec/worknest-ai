"use client";

import { useEffect, useState } from "react";
import { Plus, Loader2, TrendingUp, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Milestone {
  id: string;
  project_id: string;
  title: string;
  description: string | null;
  planned_date: string | null;
  actual_date: string | null;
  completion_pct: number;
  status: string;
  projects?: { name: string };
}

interface Project { id: string; name: string; }

function MilestoneModal({ milestone, projects, onClose, onSave }: {
  milestone: Partial<Milestone> | null;
  projects: Project[];
  onClose: () => void;
  onSave: () => void;
}) {
  const isEdit = !!milestone?.id;
  const [form, setForm] = useState({
    project_id: milestone?.project_id || "",
    title: milestone?.title || "",
    description: milestone?.description || "",
    planned_date: milestone?.planned_date || "",
    actual_date: milestone?.actual_date || "",
    completion_pct: milestone?.completion_pct ?? 0,
    status: milestone?.status || "pending",
  });
  const [saving, setSaving] = useState(false);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const supabase = createClient();
    const payload = { ...form, description: form.description || null, planned_date: form.planned_date || null, actual_date: form.actual_date || null, completion_pct: Number(form.completion_pct) };
    if (isEdit) {
      await supabase.from("milestones").update(payload).eq("id", milestone!.id!);
    } else {
      await supabase.from("milestones").insert(payload);
    }
    setSaving(false);
    onSave();
  }

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "1rem" }}>
      <div className="card" style={{ width: "100%", maxWidth: "480px", padding: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ margin: 0, fontSize: "1.25rem" }}>{isEdit ? "Edit Milestone" : "New Milestone"}</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer" }}><X size={20} /></button>
        </div>
        <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Project *</label>
            <select className="input-field" value={form.project_id} onChange={(e) => setForm({ ...form, project_id: e.target.value })} required>
              <option value="">Select a project</option>
              {projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Milestone title *</label>
            <input className="input-field" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Foundation complete" required />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Description</label>
            <textarea className="input-field" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2} style={{ resize: "vertical" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Planned date</label>
              <input type="date" className="input-field" value={form.planned_date} onChange={(e) => setForm({ ...form, planned_date: e.target.value })} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Actual date</label>
              <input type="date" className="input-field" value={form.actual_date} onChange={(e) => setForm({ ...form, actual_date: e.target.value })} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Status</label>
              <select className="input-field" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                {["pending", "in_progress", "completed", "delayed"].map((s) => <option key={s} value={s}>{s.replace("_", " ")}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Completion %</label>
              <input type="number" className="input-field" value={form.completion_pct} onChange={(e) => setForm({ ...form, completion_pct: Number(e.target.value) })} min={0} max={100} />
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
            <button type="button" onClick={onClose} className="btn-secondary" style={{ flex: 1, justifyContent: "center" }}>Cancel</button>
            <button type="submit" disabled={saving} className="btn-primary" style={{ flex: 1, justifyContent: "center", opacity: saving ? 0.7 : 1 }}>
              {saving ? <Loader2 size={16} className="spin" /> : null}
              {saving ? "Saving..." : isEdit ? "Save" : "Add milestone"}
            </button>
          </div>
        </form>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1s linear infinite}`}</style>
      </div>
    </div>
  );
}

export default function ProgressPage() {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMilestone, setEditMilestone] = useState<Partial<Milestone> | null>(null);
  const [filterProject, setFilterProject] = useState("");

  async function loadData() {
    const supabase = createClient();
    const [{ data: ms }, { data: pr }] = await Promise.all([
      supabase.from("milestones").select("*, projects(name)").order("planned_date", { ascending: true }),
      supabase.from("projects").select("id, name").order("name"),
    ]);
    setMilestones(ms || []);
    setProjects(pr || []);
    setLoading(false);
  }

  useEffect(() => { loadData(); }, []);

  const filtered = filterProject ? milestones.filter((m) => m.project_id === filterProject) : milestones;

  const statusClass: Record<string, string> = {
    pending: "status-at-risk",
    in_progress: "status-at-risk",
    completed: "status-completed",
    delayed: "status-delayed",
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.75rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101828", margin: "0 0 0.25rem" }}>Progress Tracking</h1>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>Track milestones and compare planned vs actual progress.</p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <select className="input-field" value={filterProject} onChange={(e) => setFilterProject(e.target.value)} style={{ width: "auto" }}>
            <option value="">All projects</option>
            {projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <button className="btn-primary" style={{ fontSize: "0.9rem" }} onClick={() => { setEditMilestone({}); setModalOpen(true); }}>
            <Plus size={16} /> Add Milestone
          </button>
        </div>
      </div>

      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#9CA3AF" }}><Loader2 size={18} className="spin" /> Loading milestones...</div>
      ) : filtered.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <TrendingUp size={40} color="#D1D5DB" style={{ margin: "0 auto 1rem" }} />
          <h3 style={{ fontSize: "1.125rem", margin: "0 0 0.5rem" }}>No milestones yet</h3>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: "0 0 1.5rem" }}>Add milestones to track your construction progress.</p>
          <button className="btn-primary" onClick={() => { setEditMilestone({}); setModalOpen(true); }}><Plus size={16} /> Add Milestone</button>
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#F7F8FA", borderBottom: "1px solid #E2E6F0" }}>
                {["Milestone", "Project", "Planned Date", "Actual Date", "Progress", "Status", ""].map((h) => (
                  <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((m) => (
                <tr key={m.id} style={{ borderBottom: "1px solid #E2E6F0" }}>
                  <td style={{ padding: "0.875rem 1rem" }}>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#101828" }}>{m.title}</div>
                    {m.description && <div style={{ fontSize: "0.8rem", color: "#9CA3AF", marginTop: "0.125rem" }}>{m.description}</div>}
                  </td>
                  <td style={{ padding: "0.875rem 1rem", fontSize: "0.875rem", color: "#6B7280" }}>{m.projects?.name || "—"}</td>
                  <td style={{ padding: "0.875rem 1rem", fontSize: "0.875rem", color: "#6B7280" }}>{m.planned_date ? new Date(m.planned_date).toLocaleDateString() : "—"}</td>
                  <td style={{ padding: "0.875rem 1rem", fontSize: "0.875rem", color: "#6B7280" }}>{m.actual_date ? new Date(m.actual_date).toLocaleDateString() : "—"}</td>
                  <td style={{ padding: "0.875rem 1rem", minWidth: "120px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <div className="progress-bar" style={{ flex: 1 }}>
                        <div className="progress-fill" style={{ width: `${m.completion_pct || 0}%` }} />
                      </div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", whiteSpace: "nowrap" }}>{m.completion_pct || 0}%</span>
                    </div>
                  </td>
                  <td style={{ padding: "0.875rem 1rem" }}>
                    <span className={`status-badge ${statusClass[m.status] || "status-at-risk"}`}>{m.status.replace("_", " ")}</span>
                  </td>
                  <td style={{ padding: "0.875rem 1rem" }}>
                    <button onClick={() => { setEditMilestone(m); setModalOpen(true); }} style={{ fontSize: "0.8125rem", color: "#0039FF", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && (
        <MilestoneModal
          milestone={editMilestone}
          projects={projects}
          onClose={() => { setModalOpen(false); setEditMilestone(null); }}
          onSave={() => { setModalOpen(false); setEditMilestone(null); loadData(); }}
        />
      )}

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1s linear infinite}`}</style>
    </div>
  );
}
