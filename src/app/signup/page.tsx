"use client";
import { useState } from "react";
import Link from "next/link";
import ShieldProLogo from "@/components/ShieldProLogo";
import { Eye, EyeOff, ArrowRight, CheckCircle } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) { setError("Passwords do not match."); return; }
    if (form.password.length < 8) { setError("Password must be at least 8 characters."); return; }
    setLoading(true);
    setError("");
    const supabase = createSupabaseBrowserClient();
    const { error: err } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { full_name: form.name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (err) {
      setError(err.message);
      setLoading(false);
    } else {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#050505] grid-bg flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-[#D7FF00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={28} className="text-[#D7FF00]" />
          </div>
          <h2 className="font-sora font-bold text-2xl text-white mb-3">Check your email</h2>
          <p className="font-inter text-[#929292] text-sm">
            We sent a verification link to <span className="text-white">{form.email}</span>. Click the link to activate your account and access the platform.
          </p>
          <Link href="/login" className="mt-8 inline-block text-[#D7FF00] font-inter text-sm hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] grid-bg flex items-center justify-center px-4 py-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D7FF00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
            <ShieldProLogo size="md" />
          </Link>
          <h1 className="font-sora font-bold text-3xl text-white mb-2">Create your account</h1>
          <p className="font-inter text-[#929292] text-sm">Start protecting your organization with Shield Pro AI</p>
        </div>

        <div className="bg-[#111111] border border-[#292929] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[#929292] text-xs font-inter mb-2">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50 placeholder-[#929292]/40"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label className="block text-[#929292] text-xs font-inter mb-2">Work Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50 placeholder-[#929292]/40"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="block text-[#929292] text-xs font-inter mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 pr-12 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50 placeholder-[#929292]/40"
                  placeholder="Min. 8 characters"
                />
                <button type="button" onClick={() => setShowPass(s => !s)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#929292] hover:text-white">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-[#929292] text-xs font-inter mb-2">Confirm Password</label>
              <input
                type={showPass ? "text" : "password"}
                required
                value={form.confirm}
                onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
                className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50 placeholder-[#929292]/40"
                placeholder="Repeat password"
              />
            </div>

            {error && <p className="text-[#FF3155] text-sm font-inter">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D7FF00] text-black font-sora font-semibold px-6 py-3 rounded-lg hover:bg-[#c8f000] transition-colors disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {loading ? "Creating account..." : <>Create Account <ArrowRight size={16} /></>}
            </button>
          </form>
          <p className="mt-5 text-center text-[#929292] text-xs font-inter">
            By creating an account you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>

        <p className="text-center mt-6 text-[#929292] text-sm font-inter">
          Already have an account?{" "}
          <Link href="/login" className="text-[#D7FF00] hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
