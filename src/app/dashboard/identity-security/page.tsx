import { User, AlertTriangle, Shield, Lock } from "lucide-react";

const events = [
  { id: "IDN-101", user: "john.doe@example.com", event: "Impossible Travel", detail: "Login from London then Seoul within 90 minutes", risk: "Critical", time: "09:14", status: "Investigating" },
  { id: "IDN-102", user: "sarah.smith@example.com", event: "New Device Login", detail: "Authentication from unrecognized MacBook Pro", risk: "Medium", time: "09:02", status: "Reviewed" },
  { id: "IDN-103", user: "admin@example.com", event: "Privilege Escalation", detail: "Admin role assigned outside normal approval workflow", risk: "High", time: "08:49", status: "Flagged" },
  { id: "IDN-104", user: "contractor.1@example.com", event: "Off-hours Access", detail: "Access to sensitive system at 02:34 AM local time", risk: "High", time: "02:34", status: "Monitoring" },
  { id: "IDN-105", user: "mark.jones@example.com", event: "Failed MFA", detail: "Five consecutive MFA failures on account", risk: "Medium", time: "08:21", status: "Alerted" },
  { id: "IDN-106", user: "lisa.chen@example.com", event: "Credential Sharing", detail: "Same session token used from two different IPs", risk: "High", time: "08:05", status: "Investigating" },
];

export default function IdentitySecurityPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-sora font-bold text-2xl text-white mb-1">Identity Security</h1>
        <p className="text-[#929292] text-sm font-inter">Monitor user identity behavior and detect authentication anomalies</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Risky Users", value: "12", color: "text-[#FF3155]", border: "border-[#FF3155]/20" },
          { label: "Suspicious Logins", value: "47", color: "text-[#FF36A6]", border: "border-[#FF36A6]/20" },
          { label: "New Devices", value: "8", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
          { label: "Accounts Monitored", value: "184", color: "text-[#00E5FF]", border: "border-[#00E5FF]/20" },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-xl border ${stat.border} bg-[#111111] p-5`}>
            <p className="text-[#929292] text-xs font-inter mb-2">{stat.label}</p>
            <p className={`font-sora font-bold text-3xl ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#292929] bg-[#111111]">
        <div className="flex items-center gap-3 p-5 border-b border-[#292929]">
          <User size={18} className="text-[#D7FF00]" />
          <h2 className="font-sora font-semibold text-white">Identity Events</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#292929]">
                {["ID", "User", "Event Type", "Detail", "Risk", "Time", "Status"].map((h) => (
                  <th key={h} className="text-left text-[#929292] text-xs font-inter px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((e) => (
                <tr key={e.id} className="border-b border-[#292929] last:border-0 hover:bg-[#050505]">
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{e.id}</td>
                  <td className="px-5 py-4 text-white text-xs font-inter">{e.user}</td>
                  <td className="px-5 py-4 text-[#D7FF00] text-xs font-inter font-medium">{e.event}</td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter max-w-[200px] truncate">{e.detail}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-inter ${e.risk === "Critical" ? "text-[#FF3155]" : e.risk === "High" ? "text-[#FF36A6]" : "text-[#D7FF00]"}`}>{e.risk}</span>
                  </td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{e.time}</td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{e.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[#929292] text-xs font-inter text-center py-4 border-t border-[#292929]">
          Sample data for development. Connect your identity provider in Integrations.
        </p>
      </div>
    </div>
  );
}
