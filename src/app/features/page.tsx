import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Brain, Eye, Mail, Shield, User, Cpu, BarChart3, Zap,
  FileText, Settings, Users, AlertTriangle, ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Behavioral Analysis",
    color: "text-[#D7FF00]",
    bg: "bg-[#D7FF00]/10",
    border: "border-[#D7FF00]/20",
    desc: "Shield Pro AI continuously learns the normal behavior patterns of your users, devices and systems. By establishing behavioral baselines, the platform can identify when activity deviates from expected patterns, even when no known threat signature exists.",
  },
  {
    icon: Eye,
    title: "Real-Time Threat Monitoring",
    color: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]/10",
    border: "border-[#00E5FF]/20",
    desc: "Monitor threats as they emerge across your organization. The Shield Pro AI security operations dashboard presents live threat activity, severity classification, detection timestamps and investigation status in one unified view.",
  },
  {
    icon: Mail,
    title: "Phishing Detection",
    color: "text-[#FF3155]",
    bg: "bg-[#FF3155]/10",
    border: "border-[#FF3155]/20",
    desc: "Detect phishing attempts, spear phishing campaigns and fraudulent communications using contextual analysis. Shield Pro AI evaluates message content, sender behavior and communication patterns to identify threats that bypass traditional filters.",
  },
  {
    icon: Shield,
    title: "Suspicious Login Detection",
    color: "text-[#1769FF]",
    bg: "bg-[#1769FF]/10",
    border: "border-[#1769FF]/20",
    desc: "Identify risky authentication events including logins from unusual locations, impossible travel patterns, unfamiliar devices and credential stuffing attempts. Each event is contextualized against the user's established authentication behavior.",
  },
  {
    icon: User,
    title: "Account Takeover Monitoring",
    color: "text-[#FF36A6]",
    bg: "bg-[#FF36A6]/10",
    border: "border-[#FF36A6]/20",
    desc: "Detect the behavioral indicators of account compromise including permission escalation, unusual data access, forwarding rule changes and anomalous communication patterns. Shield Pro AI monitors the full chain of account behavior, not just individual events.",
  },
  {
    icon: AlertTriangle,
    title: "Threat Intelligence",
    color: "text-[#D7FF00]",
    bg: "bg-[#D7FF00]/10",
    border: "border-[#D7FF00]/20",
    desc: "Every detected threat is enriched with contextual intelligence including attack classification, risk scoring and investigation context. Security teams can understand the nature of a threat quickly and take informed action.",
  },
  {
    icon: FileText,
    title: "Security Incident Investigation",
    color: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]/10",
    border: "border-[#00E5FF]/20",
    desc: "Create, assign and track security incidents from detection through resolution. Shield Pro AI provides structured investigation workflows, timeline reconstruction and AI-assisted analysis to help teams investigate faster.",
  },
  {
    icon: Zap,
    title: "Automated Security Workflows",
    color: "text-[#D7FF00]",
    bg: "bg-[#D7FF00]/10",
    border: "border-[#D7FF00]/20",
    desc: "Configure automated response playbooks that trigger when specific threat conditions are met. Reduce manual triage effort and ensure consistent, repeatable response procedures across your security team.",
  },
  {
    icon: BarChart3,
    title: "Security Analytics",
    color: "text-[#1769FF]",
    bg: "bg-[#1769FF]/10",
    border: "border-[#1769FF]/20",
    desc: "Understand your security posture through visual dashboards showing threat trends, activity baselines, detection volumes and resolution rates. Analytics help security leaders make data-driven decisions and report on security outcomes.",
  },
  {
    icon: Eye,
    title: "Centralized Security Management",
    color: "text-[#FF36A6]",
    bg: "bg-[#FF36A6]/10",
    border: "border-[#FF36A6]/20",
    desc: "Manage all security modules, alerts, incidents and configurations from a single platform. Shield Pro AI eliminates the fragmentation of managing multiple point solutions by providing one centralized security operations environment.",
  },
  {
    icon: Users,
    title: "Team Access Controls",
    color: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]/10",
    border: "border-[#00E5FF]/20",
    desc: "Define roles, assign permissions and control what each team member can see and action within the platform. Role-based access ensures that sensitive security data is accessible only to authorized personnel.",
  },
  {
    icon: FileText,
    title: "Security Reporting",
    color: "text-[#D7FF00]",
    bg: "bg-[#D7FF00]/10",
    border: "border-[#D7FF00]/20",
    desc: "Generate structured security reports covering threat summaries, incident histories, detection volumes and security posture trends. Reports can be downloaded and shared with leadership, board members or external stakeholders.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 grid-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF36A6]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#FF36A6] font-inter font-medium text-sm uppercase tracking-widest mb-4">Features</p>
          <h1 className="font-sora font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
            Every Capability Your<br />Security Team Needs
          </h1>
          <p className="font-inter text-[#929292] text-xl leading-relaxed max-w-2xl mx-auto">
            Shield Pro AI is built with the features modern security teams depend on, designed to work together as an integrated intelligence platform.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className={`rounded-2xl p-7 border ${f.border} bg-[#111111] hover:bg-[#111111]/80 transition-colors`}>
                <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <f.icon size={22} className={f.color} />
                </div>
                <h3 className="font-sora font-semibold text-white text-lg mb-3">{f.title}</h3>
                <p className="font-inter text-[#929292] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sora font-bold text-4xl text-white mb-6">See Every Feature in Action</h2>
          <p className="font-inter text-[#929292] text-lg mb-8">
            Request a demo and explore how Shield Pro AI works inside a live security environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-[#D7FF00] text-black font-sora font-semibold px-8 py-4 rounded-lg hover:bg-[#c8f000] transition-colors inline-flex items-center justify-center gap-2">
              Start for Free <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="border border-[#292929] text-white font-sora font-semibold px-8 py-4 rounded-lg hover:border-[#D7FF00]/40 transition-colors text-center">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
