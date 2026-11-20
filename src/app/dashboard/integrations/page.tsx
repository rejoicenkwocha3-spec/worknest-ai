import { Globe, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const integrations = [
  { name: "Microsoft 365", category: "Email and Identity", icon: "M", iconBg: "bg-[#1769FF]/20", iconColor: "text-[#1769FF]", status: "not_connected", desc: "Connect Microsoft 365 to monitor email threats and identity behavior." },
  { name: "Google Workspace", category: "Email and Identity", icon: "G", iconBg: "bg-[#00E5FF]/20", iconColor: "text-[#00E5FF]", status: "not_connected", desc: "Connect Google Workspace for Gmail threat detection and account monitoring." },
  { name: "AWS", category: "Cloud Infrastructure", icon: "A", iconBg: "bg-[#D7FF00]/20", iconColor: "text-[#D7FF00]", status: "not_connected", desc: "Monitor AWS access patterns, identity events and infrastructure anomalies." },
  { name: "Microsoft Azure", category: "Cloud Infrastructure", icon: "Az", iconBg: "bg-[#1769FF]/20", iconColor: "text-[#1769FF]", status: "not_connected", desc: "Connect Azure for identity protection and cloud activity monitoring." },
  { name: "Cloudflare", category: "Network", icon: "CF", iconBg: "bg-[#FF36A6]/20", iconColor: "text-[#FF36A6]", status: "not_connected", desc: "Integrate Cloudflare for DNS and network-level threat visibility." },
  { name: "Okta", category: "Identity Provider", icon: "O", iconBg: "bg-[#D7FF00]/20", iconColor: "text-[#D7FF00]", status: "not_connected", desc: "Connect Okta to monitor SSO events, login behavior and identity risks." },
  { name: "Splunk", category: "SIEM", icon: "S", iconBg: "bg-[#00E5FF]/20", iconColor: "text-[#00E5FF]", status: "not_connected", desc: "Forward security events to Splunk for unified SIEM visibility." },
];

export default function IntegrationsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-sora font-bold text-2xl text-white mb-1">Integrations</h1>
        <p className="text-[#929292] text-sm font-inter">Connect your tools and infrastructure to Shield Pro AI</p>
      </div>

      <div className="rounded-xl border border-[#D7FF00]/20 bg-[#111111] p-4 mb-8">
        <p className="text-[#929292] text-sm font-inter">
          Connect your existing tools to populate Shield Pro AI with live security data. Each integration expands coverage and improves detection accuracy.
          Contact your administrator or use API credentials to configure each connection.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((int) => (
          <div key={int.name} className="rounded-xl border border-[#292929] bg-[#111111] p-5 hover:border-[#D7FF00]/20 transition-colors">
            <div className="flex items-start gap-3 mb-4">
              <div className={`w-10 h-10 ${int.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <span className={`font-sora font-bold text-xs ${int.iconColor}`}>{int.icon}</span>
              </div>
              <div>
                <p className="font-sora font-semibold text-white text-sm">{int.name}</p>
                <p className="text-[#929292] text-xs font-inter">{int.category}</p>
              </div>
            </div>
            <p className="font-inter text-[#929292] text-xs leading-relaxed mb-4">{int.desc}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#929292] text-xs font-inter">
                <Clock size={12} />
                Not Connected
              </div>
              <button className="text-[#D7FF00] text-xs font-inter hover:underline">Configure</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
