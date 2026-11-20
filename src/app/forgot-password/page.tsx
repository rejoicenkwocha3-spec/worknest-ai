"use client";

import { useState } from "react";
import Link from "next/link";
import DataTalkLogo from "@/components/DataTalkLogo";
import { Loader2, ArrowRight } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (err) { setError(err.message); setLoading(false); return; }
      setSent(true);
    } catch {
      setError("Authentication is not configured. Please add Supabase credentials.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#070A27] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <DataTalkLogo size={36} />
            <span className="font-space font-bold text-white text-xl">DataTalk AI</span>
          </Link>
          <h1 className="font-space font-bold text-2xl text-white mb-2">Reset your password</h1>
          <p className="font-inter text-[#A7B2CC] text-sm">Enter your email and we will send you a reset link.</p>
        </div>

        <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-2xl p-8">
          {sent ? (
            <div className="text-center">
              <div className="w-14 h-14 bg-[#00D4FF]/20 border border-[#00D4FF]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight size={24} className="text-[#00D4FF]" />
              </div>
              <p className="font-inter text-white text-sm mb-4">Reset link sent to <strong>{email}</strong>.</p>
              <Link href="/login" className="text-[#00D4FF] font-inter text-sm hover:text-[#8DEBFF]">Back to sign in</Link>
            </div>
          ) : (
            <>
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 mb-5">
                  <p className="text-red-400 text-sm font-inter">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Email address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60"
                    placeholder="you@company.com"
                  />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-[#087BFF] hover:bg-[#0668d6] disabled:opacity-60 text-white font-space font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  {loading ? <Loader2 size={18} className="animate-spin" /> : null}
                  Send Reset Link
                </button>
              </form>
              <p className="text-center font-inter text-sm text-[#A7B2CC] mt-6">
                <Link href="/login" className="text-[#00D4FF] hover:text-[#8DEBFF]">Back to sign in</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
