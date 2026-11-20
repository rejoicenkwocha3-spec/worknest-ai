"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";
import Plan9Logo from "@/components/Plan9Logo";

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-[#2ECC71]/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-[#2ECC71]" />
          </div>
          <h2 className="font-manrope font-extrabold text-3xl text-white mb-3">Check your inbox</h2>
          <p className="text-[#BDBDBD] font-inter text-base leading-relaxed mb-6">
            A confirmation email has been sent to <span className="text-white font-semibold">{email}</span>. Click the link to verify your account and access PLAN9 AI.
          </p>
          <Link href="/login" className="text-[#2D7EFF] font-manrope font-semibold text-sm hover:text-[#0ECFCF] transition-colors">
            Return to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0D0D0D] border-r border-[#2A2A2A] flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#0ECFCF]/4 rounded-full blur-3xl" />
        </div>
        <div className="relative">
          <Link href="/" className="flex items-center gap-2.5">
            <Plan9Logo size={36} />
            <span className="font-manrope font-bold text-white text-xl tracking-tight">PLAN9 AI</span>
          </Link>
        </div>
        <div className="relative">
          <h2 className="font-manrope font-extrabold text-4xl text-white leading-tight mb-4">
            Start making smarter business decisions today.
          </h2>
          <p className="text-[#BDBDBD] font-inter text-base leading-relaxed mb-10">
            Join businesses that have moved from disconnected data to confident, AI powered planning with PLAN9 AI.
          </p>
          <ul className="space-y-4">
            {[
              "AI powered business intelligence platform",
              "Financial, sales and operational planning in one place",
              "Intelligent forecasting and scenario modelling",
              "Real time performance monitoring and reporting",
            ].map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-[#2ECC71] flex-shrink-0" />
                <span className="text-[#BDBDBD] font-inter text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <p className="text-[#777777] font-inter text-xs">© 2026 PLAN9 AI</p>
        </div>
      </div>

      {/* Right signup form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-md w-full mx-auto">
          <div className="lg:hidden mb-10">
            <Link href="/" className="flex items-center gap-2.5">
              <Plan9Logo size={32} />
              <span className="font-manrope font-bold text-white text-lg">PLAN9 AI</span>
            </Link>
          </div>
          <div className="mb-10">
            <h1 className="font-manrope font-extrabold text-3xl text-white mb-2">Create your account</h1>
            <p className="text-[#BDBDBD] font-inter text-sm">Get started with PLAN9 AI in minutes</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 font-inter text-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <label className="block text-[#BDBDBD] font-inter text-sm mb-2">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
                className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white font-inter text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#2D7EFF] placeholder:text-[#555555] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#BDBDBD] font-inter text-sm mb-2">Work email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
                className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white font-inter text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#2D7EFF] placeholder:text-[#555555] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#BDBDBD] font-inter text-sm mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Minimum 8 characters"
                  className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white font-inter text-sm px-4 py-3 pr-12 rounded-lg focus:outline-none focus:border-[#2D7EFF] placeholder:text-[#555555] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#777777] hover:text-white transition-colors"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2D7EFF] text-white font-manrope font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-[#1A6AE8] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {loading ? "Creating account..." : (
                <>
                  Create Account
                  <ArrowRight size={16} />
                </>
              )}
            </button>
            <p className="text-[#777777] font-inter text-xs text-center leading-relaxed">
              By creating an account you agree to the PLAN9 AI terms of service and privacy policy.
            </p>
          </form>

          <p className="mt-8 text-center text-[#777777] font-inter text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-[#2D7EFF] hover:text-[#0ECFCF] transition-colors font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
