"use client";

import { useEffect, useState } from "react";
import { Users, Mail, Loader2, X, Plus } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface TeamMember {
  id: string;
  email: string;
  full_name: string | null;
  role: string;
  invited_at: string;
  status: string;
}

const ROLES = ["admin", "project_manager", "engineer", "contractor", "viewer"];

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("viewer");
  const [inviting, setInviting] = useState(false);
  const [inviteError, setInviteError] = useState("");

  async function loadMembers() {
    const supabase = createClient();
    const { data } = await supabase.from("team_members").select("*").order("invited_at", { ascending: false });
    setMembers(data || []);
    setLoading(false);
  }

  useEffect(() => { loadMembers(); }, []);

  async function handleInvite(e: React.FormEvent) {
    e.preventDefault();
    setInviting(true);
    setInviteError("");

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase.from("team_members").insert({
      email: inviteEmail,
      role: inviteRole,
      status: "invited",
      invited_by: user?.id,
    });

    if (error) { setInviteError(error.message); setInviting(false); return; }

    setInviting(false);
    setInviteOpen(false);
    setInviteEmail("");
    setInviteRole("viewer");
    loadMembers();
  }

  async function handleRemove(id: string) {
    if (!confirm("Remove this team member?")) return;
    const supabase = createClient();
    await supabase.from("team_members").delete().eq("id", id);
    loadMembers();
  }

  const roleLabel = (r: string) => r.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const initials = (name: string | null, email: string) => {
    if (name) return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    return email.slice(0, 2).toUpperCase();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.75rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101828", margin: "0 0 0.25rem" }}>Team</h1>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>{members.length} team member{members.length !== 1 ? "s" : ""}</p>
        </div>
        <button className="btn-primary" onClick={() => setInviteOpen(true)} style={{ fontSize: "0.9rem" }}>
          <Mail size={16} /> Invite Team Member
        </button>
      </div>

      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#9CA3AF" }}><Loader2 size={18} className="spin" /> Loading team...</div>
      ) : members.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <Users size={40} color="#D1D5DB" style={{ margin: "0 auto 1rem" }} />
          <h3 style={{ fontSize: "1.125rem", margin: "0 0 0.5rem" }}>No team members yet</h3>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: "0 0 1.5rem" }}>Invite contractors, engineers and project managers to collaborate.</p>
          <button className="btn-primary" onClick={() => setInviteOpen(true)}><Mail size={16} /> Invite team member</button>
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          {members.map((m, i) => (
            <div key={m.id} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.5rem", borderBottom: i < members.length - 1 ? "1px solid #E2E6F0" : "none" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#0039FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0 }}>
                {initials(m.full_name, m.email)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#101828" }}>{m.full_name || m.email}</div>
                {m.full_name && <div style={{ fontSize: "0.8125rem", color: "#9CA3AF" }}>{m.email}</div>}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#6B7280", background: "#F3F4F6", padding: "0.25rem 0.625rem", borderRadius: "9999px" }}>
                  {roleLabel(m.role)}
                </span>
                <span className={`status-badge ${m.status === "active" ? "status-on-track" : "status-at-risk"}`}>
                  {m.status}
                </span>
                <button onClick={() => handleRemove(m.id)} style={{ width: 30, height: 30, borderRadius: "0.375rem", background: "#FEF2F2", border: "1px solid #FECACA", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444" }}>
                  <X size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Invite modal */}
      {inviteOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "1rem" }}>
          <div className="card" style={{ width: "100%", maxWidth: "420px", padding: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h2 style={{ margin: 0, fontSize: "1.25rem" }}>Invite Team Member</h2>
              <button onClick={() => setInviteOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}><X size={20} /></button>
            </div>
            {inviteError && <div style={{ background: "#FEE2E2", border: "1px solid #FECACA", borderRadius: "0.5rem", padding: "0.75rem", marginBottom: "1rem", fontSize: "0.875rem", color: "#991B1B" }}>{inviteError}</div>}
            <form onSubmit={handleInvite} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Email address *</label>
                <input type="email" className="input-field" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} placeholder="colleague@company.com" required />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Role</label>
                <select className="input-field" value={inviteRole} onChange={(e) => setInviteRole(e.target.value)}>
                  {ROLES.map((r) => <option key={r} value={r}>{roleLabel(r)}</option>)}
                </select>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                <button type="button" onClick={() => setInviteOpen(false)} className="btn-secondary" style={{ flex: 1, justifyContent: "center" }}>Cancel</button>
                <button type="submit" disabled={inviting} className="btn-primary" style={{ flex: 1, justifyContent: "center", opacity: inviting ? 0.7 : 1 }}>
                  {inviting ? <Loader2 size={16} className="spin" /> : <Plus size={16} />}
                  {inviting ? "Sending..." : "Send Invite"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1s linear infinite}`}</style>
    </div>
  );
}
