"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Loader2, X, MapPin, Calendar, TrendingUp } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

interface Project {
  id: string;
  name: string;
  description: string | null;
  location: string | null;
  status: string;
  completion_pct: number;
  start_date: string | null;
  end_date: string | null;
  budget: number | null;
  created_at: string;
}

const STATUS_OPTIONS = ["active", "on_track", "at_risk", "delayed", "paused", "completed"];

function ProjectModal({ project, onClose, onSave }: {
  project: Partial<Project> | null;
  onClose: () => void;
  onSave: () => void;
}) {
  const isEdit = !!project?.id;
  const [form, setForm] = useState({
    name: project?.name || "",
    description: project?.description || "",
    location: project?.location || "",
    status: project?.status || "active",
    completion_pct: project?.completion_pct ?? 0,
    start_date: project?.start_date || "",
    end_date: project?.end_date || "",
    budget: project?.budget?.toString() || "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setError("Not authenticated."); setSaving(false); return; }

    const payload = {
      name: form.name,
      description: form.description || null,
      location: form.location || null,
      status: form.status,
      completion_pct: Number(form.completion_pct),
      start_date: form.start_date || null,
      end_date: form.end_date || null,
      budget: form.budget ? Number(form.budget) : null,
      user_id: user.id,
    };

    if (isEdit) {
      const { error: err } = await supabase.from("projects").update(payload).eq("id", project!.id!);
      if (err) { setError(err.message); setSaving(false); return; }
    } else {
      const { error: err } = await supabase.from("projects").insert(payload);
      if (err) { setError(err.message); setSaving(false); return; }
    }

    setSaving(false);
    onSave();
  }

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "1rem" }}>
      <div className="card" style={{ width: "100%", maxWidth: "520px", padding: "2rem", maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ margin: 0, fontSize: "1.25rem" }}>{isEdit ? "Edit Project" : "New Project"}</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#6B7280" }}><X size={20} /></button>
        </div>

        {error && <div style={{ background: "#FEE2E2", border: "1px solid #FECACA", borderRadius: "0.5rem", padding: "0.75rem", marginBottom: "1rem", fontSize: "0.875rem", color: "#991B1B" }}>{error}</div>}

        <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Project name *</label>
            <input className="input-field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Riverside Tower" required />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Description</label>
            <textarea className="input-field" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Project overview..." rows={3} style={{ resize: "vertical" }} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Site location</label>
            <input className="input-field" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. 123 Main St, London" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Start date</label>
              <input type="date" className="input-field" value={form.start_date} onChange={(e) => setForm({ ...form, start_date: e.target.value })} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Target completion</label>
              <input type="date" className="input-field" value={form.end_date} onChange={(e) => setForm({ ...form, end_date: e.target.value })} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Status</label>
              <select className="input-field" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s.replace("_", " ")}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Completion %</label>
              <input type="number" className="input-field" value={form.completion_pct} onChange={(e) => setForm({ ...form, completion_pct: Number(e.target.value) })} min={0} max={100} />
            </div>
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Budget (USD)</label>
            <input type="number" className="input-field" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} placeholder="0" />
          </div>

          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
            <button type="button" onClick={onClose} className="btn-secondary" style={{ flex: 1, justifyContent: "center" }}>Cancel</button>
            <button type="submit" disabled={saving} className="btn-primary" style={{ flex: 1, justifyContent: "center", opacity: saving ? 0.7 : 1 }}>
              {saving ? <Loader2 size={16} className="spin" /> : null}
              {saving ? "Saving..." : isEdit ? "Save changes" : "Create project"}
            </button>
          </div>
        </form>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1s linear infinite}`}</style>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editProject, setEditProject] = useState<Partial<Project> | null>(null);

  async function loadProjects() {
    const supabase = createClient();
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    setProjects(data || []);
    setLoading(false);
  }

  useEffect(() => { loadProjects(); }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this project? This action cannot be undone.")) return;
    const supabase = createClient();
    await supabase.from("projects").delete().eq("id", id);
    loadProjects();
  }

  const statusColors: Record<string, string> = {
    active: "status-on-track",
    on_track: "status-on-track",
    at_risk: "status-at-risk",
    delayed: "status-delayed",
    completed: "status-completed",
    paused: "status-at-risk",
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.75rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101828", margin: "0 0 0.25rem" }}>My Projects</h1>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>{projects.length} project{projects.length !== 1 ? "s" : ""} in your portfolio</p>
        </div>
        <button className="btn-primary" style={{ fontSize: "0.9rem" }} onClick={() => { setEditProject({}); setModalOpen(true); }}>
          <Plus size={16} /> New Project
        </button>
      </div>

      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#9CA3AF" }}><Loader2 size={18} className="spin" /> Loading projects...</div>
      ) : projects.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#EAF0FF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
            <TrendingUp size={28} color="#0039FF" />
          </div>
          <h3 style={{ fontSize: "1.125rem", margin: "0 0 0.5rem" }}>No projects yet</h3>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: "0 0 1.5rem" }}>Create your first construction project to get started.</p>
          <button className="btn-primary" onClick={() => { setEditProject({}); setModalOpen(true); }}>
            <Plus size={16} /> Create Project
          </button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
          {projects.map((p) => (
            <div key={p.id} className="card card-hover" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 0.25rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</h3>
                  {p.location && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#9CA3AF", fontSize: "0.8125rem" }}>
                      <MapPin size={12} /> {p.location}
                    </div>
                  )}
                </div>
                <span className={`status-badge ${statusColors[p.status] || "status-at-risk"}`} style={{ marginLeft: "0.5rem", flexShrink: 0 }}>
                  {p.status.replace("_", " ")}
                </span>
              </div>

              {p.description && (
                <p style={{ fontSize: "0.875rem", color: "#6B7280", margin: 0, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {p.description}
                </p>
              )}

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem", color: "#6B7280", marginBottom: "0.375rem" }}>
                  <span>Completion</span>
                  <span style={{ fontWeight: 600, color: "#101828" }}>{p.completion_pct || 0}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${p.completion_pct || 0}%` }} />
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#9CA3AF" }}>
                {p.start_date && (
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}><Calendar size={12} /> {new Date(p.start_date).toLocaleDateString()}</span>
                )}
                {p.end_date && (
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginLeft: "auto" }}><Calendar size={12} /> Due {new Date(p.end_date).toLocaleDateString()}</span>
                )}
              </div>

              <div style={{ display: "flex", gap: "0.625rem", borderTop: "1px solid #E2E6F0", paddingTop: "0.875rem" }}>
                <Link
                  href={`/dashboard/projects/${p.id}`}
                  className="btn-secondary"
                  style={{ flex: 1, justifyContent: "center", padding: "0.5rem", fontSize: "0.8125rem" }}
                >
                  Open Project
                </Link>
                <button
                  onClick={() => { setEditProject(p); setModalOpen(true); }}
                  style={{ width: 34, height: 34, borderRadius: "0.5rem", background: "#F7F8FA", border: "1px solid #E2E6F0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#6B7280" }}
                >
                  <Pencil size={15} />
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  style={{ width: 34, height: 34, borderRadius: "0.5rem", background: "#FEF2F2", border: "1px solid #FECACA", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444" }}
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <ProjectModal
          project={editProject}
          onClose={() => { setModalOpen(false); setEditProject(null); }}
          onSave={() => { setModalOpen(false); setEditProject(null); loadProjects(); }}
        />
      )}

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1s linear infinite}`}</style>
    </div>
  );
}
