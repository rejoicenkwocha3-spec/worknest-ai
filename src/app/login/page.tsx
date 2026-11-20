"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import Plan9Logo from "@/components/Plan9Logo";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0D0D0D] border-r border-[#2A2A2A] flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2D7EFF]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#0ECFCF]/4 rounded-full blur-3xl" />
        </div>
        <div className="relative">
          <Link href="/" className="flex items-center gap-2.5">
            <Plan9Logo size={36} />
            <span className="font-manrope font-bold text-white text-xl tracking-tight">PLAN9 AI</span>
          </Link>
        </div>
        <div className="relative">
          <h2 className="font-manrope font-extrabold text-4xl text-white leading-tight mb-4">
            Business intelligence that works as hard as you do.
          </h2>
          <p className="text-[#BDBDBD] font-inter text-base leading-relaxed mb-10">
            Connect your data, understand your performance and make confident decisions from one powerful platform.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Forecast Accuracy", value: "96%" },
              { label: "Time Saved Weekly", value: "12hrs" },
              { label: "Faster Decisions", value: "3x" },
              { label: "Data Sources Connected", value: "100+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-4">
                <p className="font-manrope font-extrabold text-2xl text-[#2D7EFF] mb-1">{stat.value}</p>
                <p className="text-[#777777] font-inter text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <p className="text-[#777777] font-inter text-xs">© 2026 PLAN9 AI</p>
        </div>
      </div>

      {/* Right login form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-md w-full mx-auto">
          <div className="lg:hidden mb-10">
            <Link href="/" className="flex items-center gap-2.5">
              <Plan9Logo size={32} />
              <span className="font-manrope font-bold text-white text-lg">PLAN9 AI</span>
            </Link>
          </div>
          <div className="mb-10">
            <h1 className="font-manrope font-extrabold text-3xl text-white mb-2">Welcome back</h1>
            <p className="text-[#BDBDBD] font-inter text-sm">Sign in to your PLAN9 AI dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 font-inter text-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <label className="block text-[#BDBDBD] font-inter text-sm mb-2">Email address</label>
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
              <div className="flex justify-between mb-2">
                <label className="text-[#BDBDBD] font-inter text-sm">Password</label>
                <Link href="/forgot-password" className="text-[#2D7EFF] font-inter text-sm hover:text-[#0ECFCF] transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Your password"
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
              {loading ? "Signing in..." : (
                <>
                  Sign In
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-[#777777] font-inter text-sm">
            New to PLAN9 AI?{" "}
            <Link href="/signup" className="text-[#2D7EFF] hover:text-[#0ECFCF] transition-colors font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
