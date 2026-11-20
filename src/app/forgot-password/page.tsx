"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Plan9Logo from "@/components/Plan9Logo";

export default function ForgotPasswordPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
    });

    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full">
        <div className="mb-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-8">
            <Plan9Logo size={32} />
            <span className="font-manrope font-bold text-white text-lg">PLAN9 AI</span>
          </Link>
          {sent ? (
            <>
              <div className="w-14 h-14 rounded-full bg-[#2ECC71]/15 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={28} className="text-[#2ECC71]" />
              </div>
              <h1 className="font-manrope font-extrabold text-3xl text-white mb-3">Check your inbox</h1>
              <p className="text-[#BDBDBD] font-inter text-sm leading-relaxed">
                If an account exists for <span className="text-white font-semibold">{email}</span>, a password reset link has been sent. Please check your email.
              </p>
              <Link href="/login" className="mt-8 inline-flex items-center gap-2 text-[#2D7EFF] font-manrope font-semibold text-sm hover:text-[#0ECFCF] transition-colors">
                <ArrowLeft size={15} />
                Back to login
              </Link>
            </>
          ) : (
            <>
              <h1 className="font-manrope font-extrabold text-3xl text-white mb-2">Reset your password</h1>
              <p className="text-[#BDBDBD] font-inter text-sm">Enter your email address and we will send you a reset link.</p>
            </>
          )}
        </div>

        {!sent && (
          <form onSubmit={handleReset} className="space-y-5">
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
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2D7EFF] text-white font-manrope font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-[#1A6AE8] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : (
                <>
                  Send Reset Link
                  <ArrowRight size={16} />
                </>
              )}
            </button>
            <div className="text-center">
              <Link href="/login" className="inline-flex items-center gap-2 text-[#777777] font-inter text-sm hover:text-white transition-colors">
                <ArrowLeft size={14} />
                Back to login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
