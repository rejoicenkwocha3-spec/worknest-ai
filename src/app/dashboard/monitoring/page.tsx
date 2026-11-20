"use client";

import { useEffect, useState, useRef } from "react";
import { Upload, Loader2, Camera, X, Image as ImageIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface SiteMedia {
  id: string;
  project_id: string;
  url: string;
  description: string | null;
  media_type: string;
  uploaded_at: string;
  projects?: { name: string };
}

interface Project { id: string; name: string; }

export default function MonitoringPage() {
  const [media, setMedia] = useState<SiteMedia[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [description, setDescription] = useState("");
  const [filterProject, setFilterProject] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function loadData() {
    const supabase = createClient();
    const [{ data: mediaData }, { data: projectData }] = await Promise.all([
      supabase.from("site_media").select("*, projects(name)").order("uploaded_at", { ascending: false }),
      supabase.from("projects").select("id, name").order("name"),
    ]);
    setMedia(mediaData || []);
    setProjects(projectData || []);
    setLoading(false);
  }

  useEffect(() => { loadData(); }, []);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    if (!selectedProject) { alert("Please select a project first."); return; }

    setUploading(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setUploading(false); return; }

    for (const file of Array.from(files)) {
      const ext = file.name.split(".").pop();
      const path = `${user.id}/${selectedProject}/${Date.now()}.${ext}`;
      const { data: upload, error: uploadError } = await supabase.storage
        .from("site-media")
        .upload(path, file, { upsert: false });

      if (uploadError) { console.error(uploadError); continue; }

      const { data: { publicUrl } } = supabase.storage.from("site-media").getPublicUrl(upload.path);

      await supabase.from("site_media").insert({
        project_id: selectedProject,
        url: publicUrl,
        description: description || null,
        media_type: file.type.startsWith("video") ? "video" : "photo",
        user_id: user.id,
      });
    }

    setUploading(false);
    setDescription("");
    if (fileRef.current) fileRef.current.value = "";
    loadData();
  }

  const filtered = filterProject ? media.filter((m) => m.project_id === filterProject) : media;

  return (
    <div>
      <div style={{ marginBottom: "1.75rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101828", margin: "0 0 0.25rem" }}>Site Monitoring</h1>
        <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>Upload and manage construction site photos and videos.</p>
      </div>

      {/* Upload section */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 1.25rem" }}>Upload Site Media</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "1rem", alignItems: "end" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Project</label>
            <select className="input-field" value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
              <option value="">Select a project</option>
              {projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Description (optional)</label>
            <input className="input-field" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="e.g. Foundation pour completed" />
          </div>
          <div>
            <input ref={fileRef} type="file" accept="image/*,video/*" multiple onChange={handleUpload} style={{ display: "none" }} id="media-upload" />
            <label
              htmlFor="media-upload"
              className="btn-primary"
              style={{ display: "inline-flex", cursor: uploading ? "not-allowed" : "pointer", opacity: uploading ? 0.7 : 1, padding: "0.6875rem 1.25rem" }}
            >
              {uploading ? <Loader2 size={16} className="spin" /> : <Upload size={16} />}
              {uploading ? "Uploading..." : "Upload Files"}
            </label>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ color: "#6B7280", fontSize: "0.9rem", margin: 0 }}>{filtered.length} files uploaded</p>
        <select className="input-field" value={filterProject} onChange={(e) => setFilterProject(e.target.value)} style={{ width: "auto", maxWidth: "240px" }}>
          <option value="">All projects</option>
          {projects.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </div>

      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#9CA3AF" }}><Loader2 size={18} className="spin" /> Loading media...</div>
      ) : filtered.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <Camera size={40} color="#D1D5DB" style={{ margin: "0 auto 1rem" }} />
          <h3 style={{ fontSize: "1.125rem", margin: "0 0 0.5rem" }}>No media uploads yet</h3>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>Upload site photos and videos to build your construction documentation.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
          {filtered.map((m) => (
            <div key={m.id} className="card" style={{ padding: "0", overflow: "hidden" }}>
              <div style={{ aspectRatio: "16/10", background: "#EAF0FF", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                {m.media_type === "photo" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.url} alt={m.description || "Site photo"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", color: "#6B7280" }}>
                    <Camera size={28} />
                    <span style={{ fontSize: "0.75rem" }}>Video</span>
                  </div>
                )}
              </div>
              <div style={{ padding: "0.875rem" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#0039FF", marginBottom: "0.25rem" }}>
                  {m.projects?.name || "Unknown project"}
                </div>
                {m.description && <div style={{ fontSize: "0.8125rem", color: "#252B36", marginBottom: "0.25rem" }}>{m.description}</div>}
                <div style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                  {new Date(m.uploaded_at).toLocaleDateString()}
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
