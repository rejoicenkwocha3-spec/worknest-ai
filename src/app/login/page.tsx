"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const hasSupabase = !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!hasSupabase) {
      setError("Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment variables.");
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      const { error: err } = await supabase.auth.signInWithPassword({ email, password });
      if (err) { setError(err.message); setLoading(false); return; }
      router.push(redirectTo);
      router.refresh();
    } catch {
      setError("Sign in failed. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#070A27] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <Image src="/logo.jpg" alt="DataTalk AI" width={40} height={40} className="rounded-lg" />
            <span className="font-space font-bold text-white text-xl">DataTalk AI</span>
          </Link>
          <h1 className="font-space font-bold text-2xl text-white mb-2">Welcome back</h1>
          <p className="font-inter text-[#A7B2CC] text-sm">Sign in to your workspace</p>
        </div>

        <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-2xl p-8">
          {!hasSupabase && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-3 mb-5">
              <p className="text-yellow-400 text-sm font-inter">
                Authentication is not configured. Add Supabase credentials to your environment to enable sign in.
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
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Email address</label>
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
                  placeholder="Your password"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A7B2CC] hover:text-white">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-[#00D4FF] font-inter text-xs hover:text-[#8DEBFF]">Forgot password?</Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#087BFF] hover:bg-[#0668d6] disabled:opacity-60 text-white font-space font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : null}
              Sign In
            </button>
          </form>

          <p className="text-center font-inter text-sm text-[#A7B2CC] mt-6">
            No account yet?{" "}
            <Link href="/signup" className="text-[#00D4FF] hover:text-[#8DEBFF]">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
