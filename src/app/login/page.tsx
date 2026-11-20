"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ShieldProLogo from "@/components/ShieldProLogo";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createSupabaseBrowserClient();
    const { error: err } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    if (err) {
      setError(err.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  const handleForgotPassword = async () => {
    if (!form.email) { setError("Enter your email above first."); return; }
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.resetPasswordForEmail(form.email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
    });
    setError("Password reset link sent. Check your email.");
  };

  return (
    <div className="min-h-screen bg-[#050505] grid-bg flex items-center justify-center px-4 py-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D7FF00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
            <ShieldProLogo size="md" />
          </Link>
          <h1 className="font-sora font-bold text-3xl text-white mb-2">Welcome back</h1>
          <p className="font-inter text-[#929292] text-sm">Sign in to your security operations center</p>
        </div>

        <div className="bg-[#111111] border border-[#292929] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[#929292] text-xs font-inter mb-2">Email Address</label>
              <input
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50 placeholder-[#929292]/40"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-[#929292] text-xs font-inter mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 pr-12 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50 placeholder-[#929292]/40"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(s => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#929292] hover:text-white"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <p className={`text-sm font-inter ${error.includes("sent") ? "text-[#D7FF00]" : "text-[#FF3155]"}`}>{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D7FF00] text-black font-sora font-semibold px-6 py-3 rounded-lg hover:bg-[#c8f000] transition-colors disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {loading ? "Signing in..." : <>Sign In <ArrowRight size={16} /></>}
            </button>
          </form>

          <div className="mt-5 text-center">
            <button onClick={handleForgotPassword} className="text-[#929292] hover:text-[#D7FF00] text-sm font-inter transition-colors">
              Forgot your password?
            </button>
          </div>
        </div>

        <p className="text-center mt-6 text-[#929292] text-sm font-inter">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#D7FF00] hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}
