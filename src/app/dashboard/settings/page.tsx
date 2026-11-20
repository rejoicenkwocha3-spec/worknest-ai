"use client";
import { useState } from "react";
import { Settings, Bell, Shield, User, Building } from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    criticalAlerts: true,
    weeklyReports: true,
    loginAlerts: true,
    newThreats: false,
  });

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-sora font-bold text-2xl text-white mb-1">Settings</h1>
        <p className="text-[#929292] text-sm font-inter">Manage your organization and account settings</p>
      </div>

      <div className="space-y-6">
        {/* Organization */}
        <div className="rounded-xl border border-[#292929] bg-[#111111] p-6">
          <div className="flex items-center gap-3 mb-5">
            <Building size={18} className="text-[#D7FF00]" />
            <h2 className="font-sora font-semibold text-white">Organization</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#929292] text-xs font-inter mb-2">Organization Name</label>
              <input defaultValue="My Organization" className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50" />
            </div>
            <div>
              <label className="block text-[#929292] text-xs font-inter mb-2">Industry</label>
              <select className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50">
                <option>Technology</option>
                <option>Financial Services</option>
                <option>Healthcare</option>
                <option>Government</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <button className="mt-4 bg-[#D7FF00] text-black font-sora font-semibold px-5 py-2.5 rounded-lg hover:bg-[#c8f000] transition-colors text-sm">
            Save Changes
          </button>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-[#292929] bg-[#111111] p-6">
          <div className="flex items-center gap-3 mb-5">
            <Bell size={18} className="text-[#00E5FF]" />
            <h2 className="font-sora font-semibold text-white">Notification Preferences</h2>
          </div>
          <div className="space-y-4">
            {[
              { key: "criticalAlerts", label: "Critical threat alerts", desc: "Immediate notification for critical severity threats" },
              { key: "weeklyReports", label: "Weekly security reports", desc: "Automated weekly security summary delivered by email" },
              { key: "loginAlerts", label: "Suspicious login alerts", desc: "Notifications when unusual login activity is detected" },
              { key: "newThreats", label: "New threat detections", desc: "Notifications for all new threat detections" },
            ].map((n) => (
              <div key={n.key} className="flex items-center justify-between py-3 border-b border-[#292929] last:border-0">
                <div>
                  <p className="font-inter font-medium text-white text-sm">{n.label}</p>
                  <p className="text-[#929292] text-xs font-inter">{n.desc}</p>
                </div>
                <button
                  onClick={() => setNotifications(s => ({ ...s, [n.key]: !s[n.key as keyof typeof s] }))}
                  className={`w-11 h-6 rounded-full transition-colors relative ${notifications[n.key as keyof typeof notifications] ? "bg-[#D7FF00]" : "bg-[#292929]"}`}
                >
                  <div className={`w-4 h-4 bg-black rounded-full absolute top-1 transition-all ${notifications[n.key as keyof typeof notifications] ? "left-6" : "left-1"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="rounded-xl border border-[#292929] bg-[#111111] p-6">
          <div className="flex items-center gap-3 mb-5">
            <Shield size={18} className="text-[#FF36A6]" />
            <h2 className="font-sora font-semibold text-white">Security Settings</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#292929]">
              <div>
                <p className="font-inter font-medium text-white text-sm">Multi-Factor Authentication</p>
                <p className="text-[#929292] text-xs font-inter">Require MFA for all team members</p>
              </div>
              <button className="text-[#D7FF00] text-sm font-inter hover:underline">Configure</button>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-inter font-medium text-white text-sm">Session Timeout</p>
                <p className="text-[#929292] text-xs font-inter">Automatically log out after inactivity</p>
              </div>
              <select className="bg-[#050505] border border-[#292929] rounded-lg px-3 py-1.5 text-white text-xs font-inter">
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>4 hours</option>
                <option>8 hours</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
