"use client";
import { useState } from "react";
import Link from "next/link";
import ShieldProLogo from "@/components/ShieldProLogo";
import { ArrowRight, CheckCircle } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createSupabaseBrowserClient();
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
    });
    if (err) { setError(err.message); setLoading(false); }
    else setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-[#050505] grid-bg flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-[#D7FF00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={28} className="text-[#D7FF00]" />
          </div>
          <h2 className="font-sora font-bold text-2xl text-white mb-3">Check your email</h2>
          <p className="font-inter text-[#929292] text-sm mb-6">
            We sent a password reset link to <span className="text-white">{email}</span>.
          </p>
          <Link href="/login" className="text-[#D7FF00] font-inter text-sm hover:underline">Back to login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] grid-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6"><ShieldProLogo size="md" /></Link>
          <h1 className="font-sora font-bold text-3xl text-white mb-2">Reset your password</h1>
          <p className="font-inter text-[#929292] text-sm">Enter your email and we will send you a reset link</p>
        </div>
        <div className="bg-[#111111] border border-[#292929] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[#929292] text-xs font-inter mb-2">Email Address</label>
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50"
                placeholder="you@company.com"
              />
            </div>
            {error && <p className="text-[#FF3155] text-sm font-inter">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full bg-[#D7FF00] text-black font-sora font-semibold px-6 py-3 rounded-lg hover:bg-[#c8f000] transition-colors disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : <>Send Reset Link <ArrowRight size={16} /></>}
            </button>
          </form>
        </div>
        <p className="text-center mt-6 text-[#929292] text-sm font-inter">
          <Link href="/login" className="text-[#D7FF00] hover:underline">Back to login</Link>
        </p>
      </div>
    </div>
  );
}
