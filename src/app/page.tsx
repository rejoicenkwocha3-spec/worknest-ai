import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield, Eye, Zap, Brain, AlertTriangle, Lock,
  ArrowRight, CheckCircle, Mail, User, Cpu,
  BarChart3, Settings, Globe, ChevronDown
} from "lucide-react";

const problemCards = [
  {
    icon: Zap,
    title: "Machine Speed",
    desc: "Modern cyberattacks happen faster than traditional security teams can respond.",
    color: "text-[#FF3155]",
    bg: "bg-[#FF3155]/10",
    border: "border-[#FF3155]/20",
  },
  {
    icon: Globe,
    title: "Unprecedented Scale",
    desc: "Attackers can target multiple systems, identities and organizations simultaneously.",
    color: "text-[#FF36A6]",
    bg: "bg-[#FF36A6]/10",
    border: "border-[#FF36A6]/20",
  },
  {
    icon: Brain,
    title: "Evolving Techniques",
    desc: "Traditional security tools struggle to recognize new and sophisticated attack patterns.",
    color: "text-[#1769FF]",
    bg: "bg-[#1769FF]/10",
    border: "border-[#1769FF]/20",
  },
];

const platformCards = [
  {
    icon: Mail,
    title: "Email Security",
    desc: "Identify phishing, business email compromise, suspicious attachments and fraudulent communications.",
    color: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]/10",
    border: "border-[#00E5FF]/20",
    href: "/platform#email-security",
  },
  {
    icon: User,
    title: "Identity Security",
    desc: "Monitor identity behavior, detect unusual access and identify potential account compromise.",
    color: "text-[#D7FF00]",
    bg: "bg-[#D7FF00]/10",
    border: "border-[#D7FF00]/20",
    href: "/platform#identity-security",
  },
  {
    icon: Cpu,
    title: "AI Security",
    desc: "Monitor AI-related risks, identify suspicious AI activity and help organizations maintain control over their AI environments.",
    color: "text-[#FF36A6]",
    bg: "bg-[#FF36A6]/10",
    border: "border-[#FF36A6]/20",
    href: "/platform#ai-security",
  },
];

const steps = [
  {
    num: "01",
    title: "Learn",
    desc: "Understand normal user, device and system behavior across your organization.",
    color: "text-[#D7FF00]",
  },
  {
    num: "02",
    title: "Detect",
    desc: "Identify suspicious activity and abnormal behavior using contextual intelligence.",
    color: "text-[#00E5FF]",
  },
  {
    num: "03",
    title: "Respond",
    desc: "Investigate threats, generate alerts and trigger authorized security responses.",
    color: "text-[#FF36A6]",
  },
];

const features = [
  "AI-powered behavioral analysis across all surfaces",
  "Real-time threat monitoring and alerting",
  "Phishing and BEC detection",
  "Suspicious login and account takeover monitoring",
  "Automated security investigation workflows",
  "Centralized security operations dashboard",
];

const faqs = [
  {
    q: "What is Shield Pro AI?",
    a: "Shield Pro AI is an enterprise cybersecurity platform that uses artificial intelligence to detect abnormal behavior, identify emerging threats and protect your organization's email, identity and AI environments.",
  },
  {
    q: "How does the AI behavioral analysis work?",
    a: "Shield Pro AI learns the normal patterns of your users, devices and systems. When activity deviates from established baselines, the platform flags it for investigation and generates contextual alerts.",
  },
  {
    q: "Is Shield Pro AI suitable for small and mid-sized businesses?",
    a: "Yes. Shield Pro AI is designed to scale across organizations of all sizes, from growing teams to large enterprises. The platform adapts to your environment and grows with your security needs.",
  },
  {
    q: "What integrations does Shield Pro AI support?",
    a: "Shield Pro AI is designed to integrate with Microsoft 365, Google Workspace, AWS, Azure and leading identity providers. Additional integrations are configurable through the platform settings.",
  },
  {
    q: "How is subscription and billing managed?",
    a: "Subscriptions are managed through Selar checkout. After completing payment, your account is upgraded and you receive access to the features included in your plan.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden grid-bg">
        {/* Glow elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D7FF00]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 border border-[#292929] bg-[#111111] text-[#929292] text-xs font-inter px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#D7FF00] rounded-full animate-pulse-glow" />
              AI-Powered Enterprise Cybersecurity
            </div>
            <h1 className="font-sora font-bold text-5xl lg:text-7xl text-white leading-tight mb-6">
              Stop Cyber Threats<br />
              <span className="text-[#D7FF00]">Before They Strike.</span>
            </h1>
            <p className="font-inter text-[#929292] text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Shield Pro AI delivers intelligent cybersecurity through advanced behavioral analysis, automated threat detection and real-time protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/platform"
                className="bg-[#D7FF00] text-black font-sora font-semibold px-8 py-4 rounded-lg hover:bg-[#c8f000] transition-colors inline-flex items-center justify-center gap-2"
              >
                Explore the Platform <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="border border-[#292929] text-white font-sora font-semibold px-8 py-4 rounded-lg hover:border-[#D7FF00]/40 transition-colors text-center"
              >
                Request a Demo
              </Link>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="rounded-2xl border border-[#292929] overflow-hidden shadow-2xl bg-[#111111]">
            <div className="bg-[#000000] px-5 py-3 flex items-center gap-2 border-b border-[#292929]">
              <div className="w-3 h-3 rounded-full bg-[#FF3155]/60" />
              <div className="w-3 h-3 rounded-full bg-[#D7FF00]/60" />
              <div className="w-3 h-3 rounded-full bg-[#00E5FF]/60" />
              <span className="ml-3 text-[#929292] text-xs font-inter">Shield Pro AI: Security Operations Center</span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 bg-[#D7FF00] rounded-full animate-pulse-glow" />
                <span className="text-[#D7FF00] text-xs font-inter">Live</span>
              </div>
            </div>
            <div className="flex h-[380px] lg:h-[460px]">
              {/* Sidebar */}
              <div className="w-56 bg-[#050505] border-r border-[#292929] p-4 hidden sm:block">
                <div className="space-y-1">
                  {[
                    { label: "Overview", active: false, color: "" },
                    { label: "Threat Detection", active: true, color: "text-[#FF3155]" },
                    { label: "Email Security", active: false, color: "" },
                    { label: "Identity Security", active: false, color: "" },
                    { label: "AI Security", active: false, color: "" },
                    { label: "Intelligence", active: false, color: "" },
                    { label: "Analytics", active: false, color: "" },
                    { label: "Incidents", active: false, color: "" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`px-3 py-2 rounded-lg text-xs font-inter cursor-default ${
                        item.active
                          ? "bg-[#D7FF00]/10 text-[#D7FF00] font-medium border border-[#D7FF00]/20"
                          : "text-[#929292] hover:text-white hover:bg-[#111111]"
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-5 overflow-hidden">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Active Threats", value: "14", color: "text-[#FF3155]", border: "border-[#FF3155]/20" },
                    { label: "Critical Alerts", value: "3", color: "text-[#FF36A6]", border: "border-[#FF36A6]/20" },
                    { label: "Monitored Assets", value: "248", color: "text-[#D7FF00]", border: "border-[#D7FF00]/20" },
                    { label: "Resolved Today", value: "27", color: "text-[#00E5FF]", border: "border-[#00E5FF]/20" },
                  ].map((stat) => (
                    <div key={stat.label} className={`bg-[#111111] rounded-xl p-4 border ${stat.border}`}>
                      <p className="text-[#929292] text-xs font-inter mb-1">{stat.label}</p>
                      <p className={`font-sora font-bold text-2xl ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Threat feed */}
                <div className="space-y-2">
                  <p className="text-[#929292] text-xs font-inter mb-3">Live Threat Activity</p>
                  {[
                    { type: "CRITICAL", label: "Account takeover attempt detected", user: "finance@example.com", time: "0m ago", color: "bg-[#FF3155]" },
                    { type: "HIGH", label: "Phishing link in email attachment", user: "hr-team mailbox", time: "4m ago", color: "bg-[#FF36A6]" },
                    { type: "MEDIUM", label: "Unusual login from new geography", user: "ops@example.com", time: "11m ago", color: "bg-[#D7FF00] text-black" },
                    { type: "INFO", label: "AI model access outside normal hours", user: "dev@example.com", time: "19m ago", color: "bg-[#1769FF]" },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#050505] border border-[#292929] rounded-lg px-4 py-2.5 flex items-center gap-3">
                      <span className={`text-[9px] font-sora font-bold px-2 py-0.5 rounded ${item.color} text-black`}>{item.type}</span>
                      <span className="text-white text-xs font-inter flex-1 truncate">{item.label}</span>
                      <span className="text-[#929292] text-xs font-inter hidden lg:block">{item.user}</span>
                      <span className="text-[#929292] text-xs font-inter ml-2">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-16 border-y border-[#292929] bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#929292] text-sm font-inter mb-8 uppercase tracking-widest">Trusted by security teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-40">
            {["Acme Corp", "NovaTech", "Meridian Group", "Orbis Financial", "Vanta Systems", "CoreBridge"].map((name) => (
              <span key={name} className="text-white font-sora font-semibold text-sm tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section id="why-shield-pro" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#D7FF00] font-inter font-medium text-sm uppercase tracking-widest mb-4">The Problem</p>
            <h2 className="font-sora font-bold text-4xl lg:text-5xl text-white mb-6">
              Cyber Threats Are Evolving.<br />Your Security Should Too.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {problemCards.map((card) => (
              <div key={card.title} className={`rounded-2xl p-6 border ${card.border} bg-[#111111]`}>
                <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <card.icon size={22} className={card.color} />
                </div>
                <h3 className="font-sora font-semibold text-white text-lg mb-3">{card.title}</h3>
                <p className="font-inter text-[#929292] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#00E5FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">Platform</p>
            <h2 className="font-sora font-bold text-4xl lg:text-5xl text-white mb-6">
              One Intelligent Platform.<br />Complete Cybersecurity Visibility.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {platformCards.map((card) => (
              <Link key={card.title} href={card.href} className={`rounded-2xl p-7 border ${card.border} bg-[#050505] hover:bg-[#111111] transition-colors group`}>
                <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <card.icon size={22} className={card.color} />
                </div>
                <h3 className="font-sora font-semibold text-white text-xl mb-3">{card.title}</h3>
                <p className="font-inter text-[#929292] text-sm leading-relaxed mb-5">{card.desc}</p>
                <div className={`inline-flex items-center gap-2 text-sm font-inter ${card.color} group-hover:gap-3 transition-all`}>
                  Learn more <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#D7FF00] font-inter font-medium text-sm uppercase tracking-widest mb-4">How It Works</p>
            <h2 className="font-sora font-bold text-4xl text-white mb-6">
              Intelligence at Every Stage
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#292929] to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className={`font-sora font-bold text-5xl ${step.color} mb-4 opacity-30`}>{step.num}</div>
                  <h3 className={`font-sora font-semibold text-2xl ${step.color} mb-3`}>{step.title}</h3>
                  <p className="font-inter text-[#929292] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform capabilities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#D7FF00] font-inter font-medium text-sm uppercase tracking-widest mb-4">Capabilities</p>
              <h2 className="font-sora font-bold text-4xl text-white mb-6">
                Built for the Demands of Modern Security Operations
              </h2>
              <p className="font-inter text-[#929292] text-lg leading-relaxed mb-8">
                Shield Pro AI gives your security team the visibility, context and automation needed to stay ahead of evolving threats.
              </p>
              <div className="space-y-4">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#D7FF00] flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[#F5F5F0] text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/features" className="inline-flex items-center gap-2 text-[#D7FF00] font-sora font-semibold hover:gap-3 transition-all">
                  View all features <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-[#292929] p-6 bg-[#050505] space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#D7FF00]/10 rounded-lg flex items-center justify-center">
                  <Shield size={16} className="text-[#D7FF00]" />
                </div>
                <div>
                  <p className="text-white font-sora font-semibold text-sm">AI Security Intelligence</p>
                  <p className="text-[#929292] text-xs font-inter">Analyzing activity across 248 assets</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-[#D7FF00] rounded-full animate-pulse-glow" />
                  <span className="text-[#D7FF00] text-xs font-inter">Active</span>
                </div>
              </div>
              {[
                { label: "Email Threats Blocked", val: "1,284", color: "text-[#00E5FF]" },
                { label: "Phishing Attempts", val: "362", color: "text-[#FF3155]" },
                { label: "Suspicious Logins", val: "47", color: "text-[#FF36A6]" },
                { label: "AI Anomalies", val: "12", color: "text-[#D7FF00]" },
                { label: "Incidents Resolved", val: "891", color: "text-[#D7FF00]" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between py-2 border-b border-[#292929] last:border-0">
                  <span className="text-[#929292] text-sm font-inter">{row.label}</span>
                  <span className={`font-sora font-bold text-sm ${row.color}`}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#D7FF00] font-inter font-medium text-sm uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="font-sora font-bold text-4xl text-white mb-6">
            Enterprise Security at Every Scale
          </h2>
          <p className="font-inter text-[#929292] text-lg mb-10 max-w-2xl mx-auto">
            Three plans designed to meet the needs of growing teams, mid-market companies and large enterprises.
          </p>
          <Link href="/pricing" className="inline-flex items-center gap-2 bg-[#D7FF00] text-black font-sora font-semibold px-8 py-4 rounded-lg hover:bg-[#c8f000] transition-colors">
            View Plans <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D7FF00] font-inter font-medium text-sm uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-sora font-bold text-4xl text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl p-6 border border-[#292929] bg-[#050505]">
                <h3 className="font-sora font-semibold text-white text-base mb-3">{faq.q}</h3>
                <p className="font-inter text-[#929292] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D7FF00]/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-sora font-bold text-4xl lg:text-5xl text-white mb-6">
            Ready to Protect Your Organization?
          </h2>
          <p className="font-inter text-[#929292] text-lg mb-10">
            Start detecting threats, monitoring your environment and securing your team with Shield Pro AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-[#D7FF00] text-black font-sora font-semibold px-8 py-4 rounded-lg hover:bg-[#c8f000] transition-colors inline-flex items-center justify-center gap-2">
              Get Started <ArrowRight size={18} />
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
