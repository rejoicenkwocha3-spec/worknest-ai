import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, User, Cpu, Shield, BarChart3, Zap, ArrowRight, CheckCircle } from "lucide-react";

const modules = [
  {
    id: "email-security",
    icon: Mail,
    title: "Email Security",
    color: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]/10",
    border: "border-[#00E5FF]/20",
    headline: "Protect business communications from advanced email threats.",
    desc: "Identify phishing, impersonation, fraudulent requests and suspicious attachments before they reach your users. Shield Pro AI analyzes the content, context and behavioral patterns of every incoming message.",
    features: [
      "Phishing and spear-phishing detection",
      "Business email compromise identification",
      "Impersonation and spoofing alerts",
      "Suspicious attachment analysis",
      "Fraudulent payment request detection",
      "Email threat history and investigation",
    ],
  },
  {
    id: "identity-security",
    icon: User,
    title: "Identity Security",
    color: "text-[#D7FF00]",
    bg: "bg-[#D7FF00]/10",
    border: "border-[#D7FF00]/20",
    headline: "Identify compromised accounts and suspicious identity behavior.",
    desc: "Shield Pro AI monitors identity behavior across your organization, detecting unusual access patterns, risky authentication events and potential account compromise before damage is done.",
    features: [
      "Suspicious login detection",
      "Unusual access pattern identification",
      "Account takeover monitoring",
      "Risky authentication event alerting",
      "Identity risk scoring",
      "Lateral movement detection",
    ],
  },
  {
    id: "ai-security",
    icon: Cpu,
    title: "AI Security",
    color: "text-[#FF36A6]",
    bg: "bg-[#FF36A6]/10",
    border: "border-[#FF36A6]/20",
    headline: "Monitor AI environments and maintain governance over AI activity.",
    desc: "As organizations adopt AI tools and models, new security risks emerge. Shield Pro AI helps you inventory your AI applications, monitor access and usage, and identify governance risks before they escalate.",
    features: [
      "AI application inventory and cataloging",
      "AI activity monitoring and alerting",
      "Unauthorized AI usage detection",
      "Data exposure risk identification",
      "AI governance insight reporting",
      "Shadow AI discovery",
    ],
  },
  {
    id: "threat-intelligence",
    icon: Shield,
    title: "Threat Intelligence",
    color: "text-[#1769FF]",
    bg: "bg-[#1769FF]/10",
    border: "border-[#1769FF]/20",
    headline: "Contextual threat intelligence to support rapid investigation.",
    desc: "Shield Pro AI provides contextual information about detected threats, classifies risk levels and surfaces investigation intelligence so your security team can act quickly and confidently.",
    features: [
      "Threat context and classification",
      "Risk level scoring",
      "Investigation timeline reconstruction",
      "Threat actor behavior analysis",
      "Attack vector identification",
      "Threat correlation across incidents",
    ],
  },
  {
    id: "security-analytics",
    icon: BarChart3,
    title: "Security Analytics",
    color: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]/10",
    border: "border-[#00E5FF]/20",
    headline: "Visual security insights across your entire environment.",
    desc: "Understand your security posture through visual dashboards, activity trend charts and automated reporting. Shield Pro AI surfaces the insights your team needs to make informed security decisions.",
    features: [
      "Security posture dashboards",
      "Threat trend visualization",
      "Activity baseline charts",
      "Team performance metrics",
      "Automated security summaries",
      "Exportable security reports",
    ],
  },
  {
    id: "automated-response",
    icon: Zap,
    title: "Automated Response",
    color: "text-[#D7FF00]",
    bg: "bg-[#D7FF00]/10",
    border: "border-[#D7FF00]/20",
    headline: "Accelerate investigation and response with configurable automation.",
    desc: "Shield Pro AI helps security teams investigate and respond to incidents faster through configurable automation workflows. Reduce manual effort and ensure consistent response procedures.",
    features: [
      "Configurable response playbooks",
      "Automated alert triage",
      "Incident escalation workflows",
      "Notification routing",
      "Response action logging",
      "Post-incident audit trails",
    ],
  },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 grid-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#00E5FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">Platform</p>
          <h1 className="font-sora font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
            An Intelligent Defense System<br />for the Modern Enterprise.
          </h1>
          <p className="font-inter text-[#929292] text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Shield Pro AI unifies email security, identity protection, AI governance, threat intelligence and automated response in a single platform built for enterprise security operations.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-[#D7FF00] text-black font-sora font-semibold px-8 py-4 rounded-lg hover:bg-[#c8f000] transition-colors">
            Start for Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Platform modules */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {modules.map((mod, i) => (
            <div
              key={mod.id}
              id={mod.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className={`w-12 h-12 ${mod.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <mod.icon size={22} className={mod.color} />
                </div>
                <p className={`text-sm font-inter font-medium uppercase tracking-widest ${mod.color} mb-3`}>{mod.title}</p>
                <h2 className="font-sora font-bold text-3xl text-white mb-4">{mod.headline}</h2>
                <p className="font-inter text-[#929292] text-base leading-relaxed mb-6">{mod.desc}</p>
                <div className="space-y-3">
                  {mod.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle size={16} className={`${mod.color} flex-shrink-0 mt-0.5`} />
                      <span className="font-inter text-[#F5F5F0] text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`rounded-2xl border ${mod.border} bg-[#111111] p-6 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 ${mod.bg} rounded-lg flex items-center justify-center`}>
                    <mod.icon size={16} className={mod.color} />
                  </div>
                  <span className="font-sora font-semibold text-white text-sm">{mod.title} Module</span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full animate-pulse-glow ${mod.color.replace("text-", "bg-")}`} />
                    <span className={`text-xs font-inter ${mod.color}`}>Active</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {mod.features.slice(0, 4).map((f, j) => (
                    <div key={j} className={`flex items-center justify-between py-2.5 px-4 rounded-lg border ${mod.border} bg-[#050505]`}>
                      <span className="text-[#929292] text-xs font-inter">{f}</span>
                      <span className={`text-xs font-inter ${mod.color} font-medium`}>Enabled</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sora font-bold text-4xl text-white mb-6">Start Protecting Your Organization Today</h2>
          <p className="font-inter text-[#929292] text-lg mb-8">Join security teams worldwide who trust Shield Pro AI to protect their environments.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-[#D7FF00] text-black font-sora font-semibold px-8 py-4 rounded-lg hover:bg-[#c8f000] transition-colors inline-flex items-center justify-center gap-2">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="border border-[#292929] text-white font-sora font-semibold px-8 py-4 rounded-lg hover:border-[#D7FF00]/40 transition-colors text-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
