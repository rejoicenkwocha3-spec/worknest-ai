"use client";

import { useState } from "react";
import { Users, Plus, Mail, X } from "lucide-react";

const members = [
  { name: "Alex Johnson",  email: "alex@acme.com",    role: "Owner",  joined: "Oct 2026" },
  { name: "Sarah Chen",    email: "sarah@acme.com",   role: "Admin",  joined: "Oct 2026" },
  { name: "Marcus Webb",   email: "marcus@acme.com",  role: "Member", joined: "Nov 2026" },
];

const roles = ["Admin", "Member", "Viewer"];

export default function TeamPage() {
  const [showInvite, setShowInvite] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("Member");
  const [notice, setNotice] = useState("");

  function handleInvite() {
    if (!inviteEmail.trim()) return;
    setNotice(`Invitation to ${inviteEmail} will be sent once email is configured in your Supabase project settings.`);
    setInviteEmail("");
    setShowInvite(false);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-space font-bold text-2xl text-white mb-1">Team</h1>
          <p className="font-inter text-[#A7B2CC] text-sm">Manage workspace members and their access levels.</p>
        </div>
        <button
          onClick={() => setShowInvite(true)}
          className="inline-flex items-center gap-2 bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          <Plus size={16} /> Invite Member
        </button>
      </div>

      {notice && (
        <div className="bg-[#087BFF]/10 border border-[#087BFF]/30 rounded-xl p-4 mb-6">
          <p className="text-[#8DEBFF] text-sm font-inter">{notice}</p>
        </div>
      )}

      <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-[rgba(0,212,255,0.14)] grid grid-cols-3 gap-4">
          <span className="font-inter text-[#A7B2CC] text-xs uppercase tracking-wider">Member</span>
          <span className="font-inter text-[#A7B2CC] text-xs uppercase tracking-wider hidden sm:block">Role</span>
          <span className="font-inter text-[#A7B2CC] text-xs uppercase tracking-wider hidden md:block">Joined</span>
        </div>
        {members.map((m, i) => (
          <div key={i} className="px-5 py-4 border-b border-[rgba(0,212,255,0.08)] last:border-0 grid grid-cols-3 gap-4 items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#087BFF]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[#00D4FF] font-space font-semibold text-xs">{m.name[0]}</span>
              </div>
              <div>
                <p className="font-space font-semibold text-white text-sm">{m.name}</p>
                <p className="font-inter text-[#A7B2CC] text-xs">{m.email}</p>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${m.role === "Owner" ? "bg-[#00D4FF]/10 text-[#00D4FF]" : m.role === "Admin" ? "bg-[#087BFF]/20 text-[#8DEBFF]" : "bg-[#101A42] text-[#A7B2CC]"}`}>
                {m.role}
              </span>
            </div>
            <span className="font-mono text-[#A7B2CC]/60 text-xs hidden md:block">{m.joined}</span>
          </div>
        ))}
      </div>

      {showInvite && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-2xl p-7 w-full max-w-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-space font-bold text-white text-lg">Invite Team Member</h2>
              <button onClick={() => setShowInvite(false)} className="text-[#A7B2CC] hover:text-white"><X size={18} /></button>
            </div>
            <div className="space-y-4 mb-5">
              <div>
                <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Email address</label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A7B2CC]" />
                  <input
                    type="email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="colleague@company.com"
                    className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg pl-9 pr-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60"
                  />
                </div>
              </div>
              <div>
                <label className="block font-inter text-sm text-[#A7B2CC] mb-2">Role</label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="w-full bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-lg px-4 py-3 text-white font-inter text-sm outline-none focus:border-[#00D4FF]/60"
                >
                  {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowInvite(false)} className="flex-1 bg-[#101A42] border border-[rgba(0,212,255,0.14)] text-white font-space font-semibold text-sm py-3 rounded-lg">Cancel</button>
              <button onClick={handleInvite} disabled={!inviteEmail.trim()} className="flex-1 bg-[#087BFF] hover:bg-[#0668d6] disabled:opacity-40 text-white font-space font-semibold text-sm py-3 rounded-lg transition-colors">Send Invite</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
