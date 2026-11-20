"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DataTalkLogo from "@/components/DataTalkLogo";
import { Eye, EyeOff, Loader2, CheckCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const hasSupabase = !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }

    if (!hasSupabase) {
      setError("Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment variables.");
      return;
    }

    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error: err } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/onboarding`,
        },
      });

      if (err) { setError(err.message); setLoading(false); return; }

      // If email confirmation is disabled in Supabase, session is created immediately
      if (data.session) {
        router.push("/onboarding");
        return;
      }

      setSuccess(true);
    } catch {
      setError("Sign up failed. Please try again.");
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#070A27] flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="w-16 h-16 bg-[#00D4FF]/20 border border-[#00D4FF]/40 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={30} className="text-[#00D4FF]" />
          </div>
          <h1 className="font-space font-bold text-2xl text-white mb-3">Check your inbox</h1>
          <p className="font-inter text-[#A7B2CC] text-sm leading-relaxed mb-6">
            We sent a confirmation link to <strong className="text-white">{email}</strong>. Click it to activate your account and complete setup.
          </p>
          <Link href="/login" className="inline-flex items-center justify-center gap-2 bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold px-8 py-3.5 rounded-lg transition-colors">
            Back to sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070A27] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <DataTalkLogo size={36} />
            <span className="font-space font-bold text-white text-xl">DataTalk AI</span>
          </Link>
          <h1 className="font-space font-bold text-2xl text-white mb-2">Create your account</h1>
          <p className="font-inter text-[#A7B2CC] text-sm">Start turning your data into decisions.</p>
        </div>

        <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-2xl p-8">
          {!hasSupabase && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-3 mb-5">
              <p className="text-yellow-400 text-sm font-inter">
                Authentication is not configured. Add Supabase credentials to your environment to enable sign up.
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 mb-5">
              <p className="text-red-400 text-sm font-inter">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Full name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60 transition-colors placeholder-[#A7B2CC]/40"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Work email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60 transition-colors placeholder-[#A7B2CC]/40"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 pr-10 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60 transition-colors placeholder-[#A7B2CC]/40"
                  placeholder="At least 8 characters"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A7B2CC] hover:text-white">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#087BFF] hover:bg-[#0668d6] disabled:opacity-60 text-white font-space font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : null}
              Create Account
            </button>
          </form>

          <p className="text-center font-inter text-xs text-[#A7B2CC] mt-4 leading-relaxed">
            By creating an account you agree to our{" "}
            <Link href="/terms" className="text-[#00D4FF] hover:text-[#8DEBFF]">Terms of Service</Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#00D4FF] hover:text-[#8DEBFF]">Privacy Policy</Link>.
          </p>

          <p className="text-center font-inter text-sm text-[#A7B2CC] mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-[#00D4FF] hover:text-[#8DEBFF]">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
