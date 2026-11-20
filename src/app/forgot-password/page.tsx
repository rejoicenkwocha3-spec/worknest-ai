"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2 } from "lucide-react";
import RemoteSiteLogo from "@/components/RemoteSiteLogo";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (resetError) {
      setError(resetError.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <div style={{ minHeight: "100vh", background: "#F7F8FA", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
              <RemoteSiteLogo size={40} />
              <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.25rem", color: "#101828" }}>RemoteSite</span>
            </Link>
          </div>
          <div className="card" style={{ padding: "2.5rem", textAlign: "center" }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#D1FAE5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
              <CheckCircle2 size={30} color="#10B981" />
            </div>
            <h2 style={{ fontSize: "1.375rem", fontWeight: 800, margin: "0 0 0.75rem", color: "#101828" }}>Reset link sent</h2>
            <p style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.65 }}>
              We&apos;ve sent a password reset link to <strong style={{ color: "#101828" }}>{email}</strong>. Check your inbox.
            </p>
            <Link href="/login" className="btn-primary" style={{ display: "inline-flex", marginTop: "1.5rem", justifyContent: "center" }}>
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F7F8FA", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
            <RemoteSiteLogo size={40} />
            <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.25rem", color: "#101828" }}>RemoteSite</span>
          </Link>
        </div>
        <div className="card" style={{ padding: "2.5rem" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 0.5rem", color: "#101828", textAlign: "center" }}>Reset your password</h1>
          <p style={{ textAlign: "center", color: "#6B7280", fontSize: "0.9375rem", margin: "0 0 2rem" }}>
            Enter your email and we&apos;ll send you a reset link
          </p>
          {error && (
            <div style={{ background: "#FEE2E2", border: "1px solid #FECACA", borderRadius: "0.5rem", padding: "0.75rem 1rem", marginBottom: "1.25rem", fontSize: "0.9rem", color: "#991B1B" }}>
              {error}
            </div>
          )}
          <form onSubmit={handleReset} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#101828", marginBottom: "0.375rem" }}>Email address</label>
              <input type="email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />
            </div>
            <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "0.8125rem", opacity: loading ? 0.7 : 1 }}>
              {loading ? <Loader2 size={18} className="spin" /> : null}
              {loading ? "Sending..." : "Send reset link"}
            </button>
          </form>
          <p style={{ textAlign: "center", fontSize: "0.9rem", color: "#6B7280", margin: "1.5rem 0 0" }}>
            <Link href="/login" style={{ color: "#0039FF", fontWeight: 600, textDecoration: "none" }}>Back to login</Link>
          </p>
        </div>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}.spin{animation:spin 1s linear infinite}`}</style>
      </div>
    </div>
  );
}
