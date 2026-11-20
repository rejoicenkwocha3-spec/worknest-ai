"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RemoteSiteLogo from "@/components/RemoteSiteLogo";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Supabase sets the session from the URL hash on load
    const supabase = createClient();
    supabase.auth.getSession();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirm) { setError("Passwords do not match."); return; }
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }
    setLoading(true);
    const supabase = createClient();
    const { error: err } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (err) { setError(err.message); return; }
    setSuccess(true);
    setTimeout(() => router.push("/dashboard/overview"), 2000);
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F7F8FA", padding: "1.5rem" }}>
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
            <RemoteSiteLogo size={36} />
            <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.25rem", color: "#101828" }}>RemoteSite</span>
          </Link>
        </div>

        <div className="card">
          <h1 style={{ fontSize: "1.375rem", fontWeight: 800, color: "#101828", marginBottom: "0.375rem", textAlign: "center" }}>Set new password</h1>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", textAlign: "center", marginBottom: "1.75rem" }}>Enter your new password below.</p>

          {success ? (
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
              <div style={{ width: 48, height: 48, background: "#D1FAE5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <p style={{ fontWeight: 600, color: "#101828", marginBottom: "0.5rem" }}>Password updated</p>
              <p style={{ color: "#6B7280", fontSize: "0.9rem" }}>Redirecting to your dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {error && (
                <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "0.5rem", padding: "0.75rem 1rem", color: "#DC2626", fontSize: "0.875rem" }}>
                  {error}
                </div>
              )}
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>New password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={8} className="input-field" placeholder="At least 8 characters" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.4rem" }}>Confirm password</label>
                <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} required className="input-field" placeholder="Repeat your password" />
              </div>
              <button type="submit" disabled={loading} className="btn-primary" style={{ marginTop: "0.25rem", justifyContent: "center" }}>
                {loading ? "Updating..." : "Update password"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
