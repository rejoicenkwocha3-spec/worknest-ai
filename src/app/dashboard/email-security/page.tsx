import { Mail, AlertTriangle, Shield, Eye } from "lucide-react";

const emails = [
  { id: "EML-201", threat: "Phishing", subject: "Urgent: Verify Your Account Credentials", sender: "security@fake-bank.net", recipient: "finance@example.com", time: "09:14", risk: "Critical", action: "Quarantined" },
  { id: "EML-202", threat: "BEC", subject: "Wire Transfer Request from CEO", sender: "ceo.impersonation@gmail.com", recipient: "accounts@example.com", time: "09:02", risk: "High", action: "Blocked" },
  { id: "EML-203", threat: "Attachment", subject: "Invoice_November_2026.pdf", sender: "billing@unknown-domain.co", recipient: "hr@example.com", time: "08:51", risk: "High", action: "Sandbox" },
  { id: "EML-204", threat: "Spoofing", subject: "IT Security Update Required", sender: "it-team@example-corp.com", recipient: "all@example.com", time: "08:33", risk: "Medium", action: "Flagged" },
  { id: "EML-205", threat: "Phishing", subject: "Your Package Delivery Confirmation", sender: "delivery@parcel-track.info", recipient: "ops@example.com", time: "08:19", risk: "Medium", action: "Quarantined" },
];

export default function EmailSecurityPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-sora font-bold text-2xl text-white mb-1">Email Security</h1>
        <p className="text-[#929292] text-sm font-inter">Monitor and investigate email-based threats across your organization</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Threats Today", value: "47", color: "text-[#FF3155]", border: "border-[#FF3155]/20" },
          { label: "Phishing Blocked", value: "28", color: "text-[#FF36A6]", border: "border-[#FF36A6]/20" },
          { label: "BEC Attempts", value: "6", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
          { label: "Emails Analyzed", value: "2,841", color: "text-[#00E5FF]", border: "border-[#00E5FF]/20" },
        ].map((stat) => (
          <div key={stat.label} className={`rounded-xl border ${stat.border} bg-[#111111] p-5`}>
            <p className="text-[#929292] text-xs font-inter mb-2">{stat.label}</p>
            <p className={`font-sora font-bold text-3xl ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#292929] bg-[#111111]">
        <div className="flex items-center gap-3 p-5 border-b border-[#292929]">
          <Mail size={18} className="text-[#00E5FF]" />
          <h2 className="font-sora font-semibold text-white">Email Threat History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#292929]">
                {["ID", "Threat Type", "Subject", "Sender", "Recipient", "Time", "Risk", "Action"].map((h) => (
                  <th key={h} className="text-left text-[#929292] text-xs font-inter px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {emails.map((e) => (
                <tr key={e.id} className="border-b border-[#292929] last:border-0 hover:bg-[#050505]">
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{e.id}</td>
                  <td className="px-5 py-4 text-[#00E5FF] text-xs font-inter font-medium">{e.threat}</td>
                  <td className="px-5 py-4 text-white text-xs font-inter max-w-[180px] truncate">{e.subject}</td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{e.sender}</td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{e.recipient}</td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{e.time}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-inter ${e.risk === "Critical" ? "text-[#FF3155]" : e.risk === "High" ? "text-[#FF36A6]" : "text-[#D7FF00]"}`}>{e.risk}</span>
                  </td>
                  <td className="px-5 py-4 text-[#929292] text-xs font-inter">{e.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[#929292] text-xs font-inter text-center py-4 border-t border-[#292929]">
          Sample data for development. Connect Microsoft 365 or Google Workspace in Integrations.
        </p>
      </div>
    </div>
  );
}
