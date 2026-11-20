"use client";

import { useEffect, useState } from "react";
import { Loader2, Save } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function SettingsPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setEmail(user.email || "");
      const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", user.id).single();
      setFullName(profile?.full_name || "");
      setLoading(false);
    }
    load();
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error: err } = await supabase.from("profiles").upsert({ id: user.id, full_name: fullName });
    if (err) { setError(err.message); setSaving(false); return; }

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#9CA3AF" }}>
        <Loader2 size={18} className="spin" /> Loading settings...
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1s linear infinite}`}</style>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: "1.75rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101828", margin: "0 0 0.25rem" }}>Settings</h1>
        <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>Manage your account and profile settings.</p>
      </div>

      <div style={{ maxWidth: "520px" }}>
        <div className="card">
          <h2 style={{ fontSize: "1.125rem", fontWeight: 700, margin: "0 0 1.5rem" }}>Profile</h2>

          {error && <div style={{ background: "#FEE2E2", border: "1px solid #FECACA", borderRadius: "0.5rem", padding: "0.75rem", marginBottom: "1rem", fontSize: "0.875rem", color: "#991B1B" }}>{error}</div>}
          {saved && <div style={{ background: "#D1FAE5", border: "1px solid #A7F3D0", borderRadius: "0.5rem", padding: "0.75rem", marginBottom: "1rem", fontSize: "0.875rem", color: "#065F46" }}>Settings saved successfully.</div>}

          <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Full name</label>
              <input className="input-field" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your full name" />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>Email address</label>
              <input className="input-field" value={email} disabled style={{ opacity: 0.6, cursor: "not-allowed" }} />
              <p style={{ fontSize: "0.8rem", color: "#9CA3AF", margin: "0.375rem 0 0" }}>Email cannot be changed from this screen.</p>
            </div>
            <button type="submit" disabled={saving} className="btn-primary" style={{ alignSelf: "flex-start", opacity: saving ? 0.7 : 1 }}>
              {saving ? <Loader2 size={16} className="spin" /> : <Save size={16} />}
              {saving ? "Saving..." : "Save changes"}
            </button>
          </form>
        </div>
      </div>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1s linear infinite}`}</style>
    </div>
  );
}
