"use client";

import { useEffect, useState, useRef } from "react";
import { Upload, Loader2, FileStack, Download, Trash2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Document {
  id: string;
  project_id: string | null;
  name: string;
  url: string;
  file_type: string | null;
  size_bytes: number | null;
  uploaded_at: string;
  projects?: { name: string };
}

interface Project { id: string; name: string; }

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [filterProject, setFilterProject] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function loadData() {
    const supabase = createClient();
    const [{ data: docs }, { data: pr }] = await Promise.all([
      supabase.from("documents").select("*, projects(name)").order("uploaded_at", { ascending: false }),
      supabase.from("projects").select("id, name").order("name"),
    ]);
    setDocuments(docs || []);
    setProjects(pr || []);
    setLoading(false);
  }

  useEffect(() => { loadData(); }, []);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setUploading(false); return; }

    for (const file of Array.from(files)) {
      const path = `${user.id}/documents/${Date.now()}-${file.name}`;
      const { data: upload, error } = await supabase.storage.from("documents").upload(path, file, { upsert: false });
      if (error) { console.error(error); continue; }
      const { data: { publicUrl } } = supabase.storage.from("documents").getPublicUrl(upload.path);
      await supabase.from("documents").insert({
        project_id: selectedProject || null,
        name: file.name,
        url: publicUrl,
        file_type: file.type,
        size_bytes: file.size,
        user_id: user.id,
      });
    }

    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
    loadData();
  }

  async function handleDelete(doc: Document) {
    if (!confirm(`Delete "${doc.name}"?`)) return;
    const supabase = createClient();
    await supabase.from("documents").delete().eq("id", doc.id);
    loadData();
  }

  function formatSize(bytes: number | null) {
    if (!bytes) return "Unknown size";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  const filtered = filterProject ? documents.filter((d) => d.project_id === filterProject) : documents;

  return (
    <div>
      <div style={{ marginBottom: "1.75rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101828", margin: "0 0 0.25rem" }}>Documents</h1>
        <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>Manage project documents, drawings and contracts.</p>
      </div>

      {/* Upload */}
      <div className="card" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "200px" }}>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Link to project (optional)</label>
          <select className="input-field" value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
            <option value="">No specific project</option>
            {projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <input ref={fileRef} type="file" multiple onChange={handleUpload} style={{ display: "none" }} id="doc-upload" />
          <label htmlFor="doc-upload" className="btn-primary" style={{ display: "inline-flex", cursor: uploading ? "not-allowed" : "pointer", opacity: uploading ? 0.7 : 1, padding: "0.6875rem 1.25rem" }}>
            {uploading ? <Loader2 size={16} className="spin" /> : <Upload size={16} />}
            {uploading ? "Uploading..." : "Upload Documents"}
          </label>
        </div>
      </div>

      {/* Filter + list */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ color: "#6B7280", fontSize: "0.9rem", margin: 0 }}>{filtered.length} document{filtered.length !== 1 ? "s" : ""}</p>
        <select className="input-field" value={filterProject} onChange={(e) => setFilterProject(e.target.value)} style={{ width: "auto", maxWidth: "240px" }}>
          <option value="">All projects</option>
          {projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </div>

      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#9CA3AF" }}><Loader2 size={18} className="spin" /> Loading documents...</div>
      ) : filtered.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <FileStack size={40} color="#D1D5DB" style={{ margin: "0 auto 1rem" }} />
          <h3 style={{ fontSize: "1.125rem", margin: "0 0 0.5rem" }}>No documents yet</h3>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>Upload project drawings, contracts and specifications.</p>
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          {filtered.map((doc, i) => (
            <div key={doc.id} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.875rem 1.25rem", borderBottom: i < filtered.length - 1 ? "1px solid #E2E6F0" : "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: "8px", background: "#EAF0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FileStack size={18} color="#0039FF" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#101828", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{doc.name}</div>
                <div style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>
                  {doc.projects?.name || "No project"} · {formatSize(doc.size_bytes)} · {new Date(doc.uploaded_at).toLocaleDateString()}
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <a href={doc.url} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: "0.4375rem 0.75rem", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <Download size={14} /> Download
                </a>
                <button onClick={() => handleDelete(doc)} style={{ width: 32, height: 32, borderRadius: "0.5rem", background: "#FEF2F2", border: "1px solid #FECACA", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444" }}>
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1s linear infinite}`}</style>
    </div>
  );
}
