"use client";

import { useState } from "react";
import { User, Shield, Bell, Building2 } from "lucide-react";

export default function SettingsPage() {
  const [name, setName] = useState("Alex Johnson");
  const [email] = useState("alex@acme.com");
  const [workspace, setWorkspace] = useState("Acme Corporation");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const tabs = [
    { label: "Profile", icon: User },
    { label: "Workspace", icon: Building2 },
    { label: "Security", icon: Shield },
    { label: "Notifications", icon: Bell },
  ];

  const [tab, setTab] = useState("Profile");

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-space font-bold text-2xl text-white mb-1">Settings</h1>
        <p className="font-inter text-[#A7B2CC] text-sm">Manage your account and workspace preferences.</p>
      </div>

      <div className="flex gap-1 mb-8 bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-1 w-fit">
        {tabs.map((t) => (
          <button
            key={t.label}
            onClick={() => setTab(t.label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-inter transition-colors ${tab === t.label ? "bg-[#087BFF]/20 text-[#00D4FF]" : "text-[#A7B2CC] hover:text-white"}`}
          >
            <t.icon size={14} />
            {t.label}
          </button>
        ))}
      </div>

      {tab === "Profile" && (
        <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-6 max-w-lg">
          <h2 className="font-space font-semibold text-white text-base mb-5">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Full name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60" />
            </div>
            <div>
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Email address</label>
              <input value={email} readOnly className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.14)] rounded-lg px-4 py-3 text-[#A7B2CC] font-inter text-sm outline-none cursor-not-allowed" />
              <p className="font-inter text-[#A7B2CC]/60 text-xs mt-1">Email cannot be changed here. Contact support to update your email address.</p>
            </div>
            <button onClick={handleSave} className={`bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold text-sm px-6 py-3 rounded-lg transition-colors ${saved ? "bg-green-600 hover:bg-green-600" : ""}`}>
              {saved ? "Saved" : "Save Changes"}
            </button>
          </div>
        </div>
      )}

      {tab === "Workspace" && (
        <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-6 max-w-lg">
          <h2 className="font-space font-semibold text-white text-base mb-5">Workspace Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Workspace name</label>
              <input value={workspace} onChange={(e) => setWorkspace(e.target.value)} className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60" />
            </div>
            <button onClick={handleSave} className={`bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold text-sm px-6 py-3 rounded-lg transition-colors ${saved ? "bg-green-600 hover:bg-green-600" : ""}`}>
              {saved ? "Saved" : "Save Changes"}
            </button>
          </div>
        </div>
      )}

      {tab === "Security" && (
        <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-6 max-w-lg">
          <h2 className="font-space font-semibold text-white text-base mb-5">Security Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Current password</label>
              <input type="password" className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60" placeholder="Enter current password" />
            </div>
            <div>
              <label className="block font-inter text-sm text-[#A7B2CC] mb-2">New password</label>
              <input type="password" className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60" placeholder="At least 8 characters" />
            </div>
            <button className="bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold text-sm px-6 py-3 rounded-lg transition-colors">
              Update Password
            </button>
          </div>
        </div>
      )}

      {tab === "Notifications" && (
        <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-6 max-w-lg">
          <h2 className="font-space font-semibold text-white text-base mb-5">Notification Preferences</h2>
          <div className="space-y-4">
            {[
              { label: "AI insight alerts",         desc: "Receive alerts when the AI surfaces important changes" },
              { label: "Report delivery",           desc: "Get notified when scheduled reports are ready" },
              { label: "Team invitations",          desc: "Notifications for team membership changes" },
              { label: "Data source sync errors",   desc: "Alerts when a data source connection fails" },
            ].map((n) => (
              <div key={n.label} className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-space font-semibold text-white text-sm">{n.label}</p>
                  <p className="font-inter text-[#A7B2CC] text-xs mt-0.5">{n.desc}</p>
                </div>
                <div className="w-10 h-5 rounded-full bg-[#087BFF] flex items-center justify-end px-0.5 flex-shrink-0 cursor-pointer">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
