"use client";
import { useState } from "react";
import { Users, Plus, Mail, Shield } from "lucide-react";

const members = [
  { name: "Alex Morgan", email: "alex@example.com", role: "admin", status: "Active", joined: "Nov 1, 2026" },
  { name: "Sarah Chen", email: "sarah@example.com", role: "analyst", status: "Active", joined: "Nov 3, 2026" },
  { name: "Mark Johnson", email: "mark@example.com", role: "analyst", status: "Active", joined: "Nov 5, 2026" },
  { name: "Lisa Park", email: "lisa@example.com", role: "viewer", status: "Invited", joined: "Pending" },
];

const roleColors: Record<string, string> = {
  admin: "text-[#D7FF00]",
  analyst: "text-[#00E5FF]",
  viewer: "text-[#929292]",
};

export default function TeamPage() {
  const [showInvite, setShowInvite] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-sora font-bold text-2xl text-white mb-1">Team Management</h1>
          <p className="text-[#929292] text-sm font-inter">Manage team members, roles and access permissions</p>
        </div>
        <button
          onClick={() => setShowInvite(true)}
          className="flex items-center gap-2 bg-[#D7FF00] text-black font-sora font-semibold px-4 py-2.5 rounded-lg hover:bg-[#c8f000] transition-colors text-sm"
        >
          <Plus size={16} /> Invite Member
        </button>
      </div>

      {showInvite && (
        <div className="rounded-xl border border-[#D7FF00]/30 bg-[#111111] p-6 mb-6">
          <h2 className="font-sora font-semibold text-white mb-4">Invite Team Member</h2>
          <div className="flex gap-3">
            <input
              type="email"
              value={inviteEmail}
              onChange={e => setInviteEmail(e.target.value)}
              placeholder="colleague@company.com"
              className="flex-1 bg-[#050505] border border-[#292929] rounded-lg px-4 py-2.5 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50"
            />
            <button onClick={() => setShowInvite(false)} className="bg-[#D7FF00] text-black font-sora font-semibold px-4 py-2 rounded-lg text-sm">Send Invite</button>
            <button onClick={() => setShowInvite(false)} className="text-[#929292] hover:text-white text-sm font-inter px-3">Cancel</button>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-[#292929] bg-[#111111]">
        <div className="flex items-center gap-3 p-5 border-b border-[#292929]">
          <Users size={18} className="text-[#D7FF00]" />
          <h2 className="font-sora font-semibold text-white">Team Members</h2>
          <span className="text-[#929292] text-xs font-inter ml-auto">{members.length} members</span>
        </div>
        <div className="divide-y divide-[#292929]">
          {members.map((m) => (
            <div key={m.email} className="flex items-center gap-4 p-5 hover:bg-[#050505]">
              <div className="w-9 h-9 bg-[#D7FF00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-sora font-bold text-[#D7FF00] text-xs">{m.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-inter font-medium text-white text-sm">{m.name}</p>
                <p className="text-[#929292] text-xs font-inter flex items-center gap-1">
                  <Mail size={11} /> {m.email}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-xs font-inter capitalize font-medium flex items-center gap-1 ${roleColors[m.role]}`}>
                  <Shield size={11} /> {m.role}
                </span>
                <span className={`text-xs font-inter ${m.status === "Active" ? "text-[#D7FF00]" : "text-[#929292]"}`}>{m.status}</span>
                <span className="text-[#929292] text-xs font-inter hidden md:block">Joined {m.joined}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
