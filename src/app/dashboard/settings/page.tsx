export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import { User, Bell, Shield, CreditCard } from "lucide-react";

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="font-manrope font-extrabold text-2xl text-white mb-1">Account Settings</h1>
        <p className="text-[#777777] font-inter text-sm">Manage your PLAN9 AI account and preferences</p>
      </div>

      {/* Profile */}
      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-lg bg-[#2D7EFF]/15 flex items-center justify-center">
            <User size={16} className="text-[#2D7EFF]" />
          </div>
          <h2 className="font-manrope font-semibold text-white text-base">Profile</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-[#777777] font-inter text-xs mb-1.5">Full name</label>
            <input
              type="text"
              defaultValue={user?.user_metadata?.full_name || ""}
              readOnly
              className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white font-inter text-sm px-4 py-2.5 rounded-lg focus:outline-none cursor-not-allowed opacity-70"
            />
          </div>
          <div>
            <label className="block text-[#777777] font-inter text-xs mb-1.5">Email address</label>
            <input
              type="email"
              defaultValue={user?.email || ""}
              readOnly
              className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-white font-inter text-sm px-4 py-2.5 rounded-lg focus:outline-none cursor-not-allowed opacity-70"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-lg bg-[#0ECFCF]/15 flex items-center justify-center">
            <Bell size={16} className="text-[#0ECFCF]" />
          </div>
          <h2 className="font-manrope font-semibold text-white text-base">Notification Preferences</h2>
        </div>
        <div className="space-y-4">
          {[
            { label: "AI insight alerts", desc: "Receive notifications when PLAN9 AI identifies important business signals" },
            { label: "Weekly performance summary", desc: "A weekly digest of your key business metrics and AI insights" },
            { label: "Risk and anomaly alerts", desc: "Immediate alerts when AI detects unusual patterns or risk signals" },
          ].map((pref) => (
            <div key={pref.label} className="flex items-start justify-between gap-4 py-3 border-b border-[#2A2A2A] last:border-0">
              <div>
                <p className="text-white font-inter text-sm mb-0.5">{pref.label}</p>
                <p className="text-[#777777] font-inter text-xs">{pref.desc}</p>
              </div>
              <div className="w-10 h-5 bg-[#2D7EFF] rounded-full flex-shrink-0 relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-lg bg-[#2ECC71]/15 flex items-center justify-center">
            <Shield size={16} className="text-[#2ECC71]" />
          </div>
          <h2 className="font-manrope font-semibold text-white text-base">Security</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b border-[#2A2A2A]">
            <div>
              <p className="text-white font-inter text-sm">Password</p>
              <p className="text-[#777777] font-inter text-xs">Last changed: Unknown</p>
            </div>
            <a href="/forgot-password" className="text-[#2D7EFF] font-inter text-sm hover:text-[#0ECFCF] transition-colors">
              Change password
            </a>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-white font-inter text-sm">Account ID</p>
              <p className="text-[#555555] font-inter text-xs font-mono">{user?.id?.slice(0, 8)}...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Plan */}
      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-lg bg-[#A78BFA]/15 flex items-center justify-center">
            <CreditCard size={16} className="text-[#A78BFA]" />
          </div>
          <h2 className="font-manrope font-semibold text-white text-base">Plan and Billing</h2>
        </div>
        <p className="text-[#BDBDBD] font-inter text-sm mb-4">
          Manage your PLAN9 AI subscription through Selar. Visit the pricing page to review plan options.
        </p>
        <a
          href="/pricing"
          className="inline-flex items-center gap-2 bg-[#1C1C1C] border border-[#2A2A2A] text-white font-manrope font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#2A2A2A] transition-colors"
        >
          View Pricing Plans
        </a>
      </div>
    </div>
  );
}
