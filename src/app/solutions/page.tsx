import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Building2, Heart, Code2, Globe2, Building, Landmark } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Financial Institutions",
    color: "text-[#D7FF00]",
    bg: "bg-[#D7FF00]/10",
    border: "border-[#D7FF00]/20",
    challenges: "Financial organizations face a high volume of targeted phishing attacks, account fraud attempts, identity-based intrusions and regulatory scrutiny around data handling.",
    solution: "Shield Pro AI monitors email communications for financial fraud patterns, tracks identity access across sensitive systems and provides audit-ready security reporting for compliance teams.",
    benefits: [
      "Financial fraud pattern detection",
      "Executive impersonation protection",
      "Account takeover prevention",
      "Sensitive data access monitoring",
      "Security audit trail reporting",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare Organizations",
    color: "text-[#FF36A6]",
    bg: "bg-[#FF36A6]/10",
    border: "border-[#FF36A6]/20",
    challenges: "Healthcare organizations are high-value targets due to sensitive patient data. They face ransomware, phishing attacks targeting clinical staff and unauthorized access to patient records.",
    solution: "Shield Pro AI protects healthcare communications, monitors staff identity access and detects anomalous behavior that could indicate unauthorized record access or insider risk.",
    benefits: [
      "Clinical staff phishing protection",
      "Patient record access monitoring",
      "Ransomware behavior detection",
      "Privileged access oversight",
      "Incident documentation for review",
    ],
  },
  {
    icon: Code2,
    title: "Technology Companies",
    color: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]/10",
    border: "border-[#00E5FF]/20",
    challenges: "Technology organizations face threats targeting source code, cloud infrastructure, developer credentials and AI development environments. Supply chain attacks and insider threats are growing concerns.",
    solution: "Shield Pro AI monitors developer identity behavior, tracks access to critical repositories and AI tools, and identifies anomalous activity that could signal credential compromise or insider risk.",
    benefits: [
      "Developer credential monitoring",
      "AI tool usage governance",
      "Cloud access anomaly detection",
      "Source code access oversight",
      "Shadow AI discovery",
    ],
  },
  {
    icon: Globe2,
    title: "Enterprise Organizations",
    color: "text-[#1769FF]",
    bg: "bg-[#1769FF]/10",
    border: "border-[#1769FF]/20",
    challenges: "Large enterprises face complex threat landscapes spanning hundreds or thousands of users, multiple business units, diverse systems and global operations. Scale makes manual monitoring impossible.",
    solution: "Shield Pro AI provides enterprise-wide visibility through a centralized security operations dashboard, enabling security teams to monitor, investigate and respond across the entire organization.",
    benefits: [
      "Organization-wide threat visibility",
      "Multi-environment monitoring",
      "Security team workflow management",
      "Executive reporting and analytics",
      "Cross-business-unit incident correlation",
    ],
  },
  {
    icon: Building,
    title: "Small and Mid-Sized Businesses",
    color: "text-[#D7FF00]",
    bg: "bg-[#D7FF00]/10",
    border: "border-[#D7FF00]/20",
    challenges: "Smaller organizations are increasingly targeted precisely because they often lack dedicated security resources. Limited teams are expected to defend against the same sophisticated attacks as large enterprises.",
    solution: "Shield Pro AI is designed to operate efficiently for smaller teams, providing enterprise-grade protection without requiring a dedicated security operations center.",
    benefits: [
      "Minimal setup and configuration",
      "Automated threat alerting",
      "Guided investigation workflows",
      "Affordable security at scale",
      "Single-pane security management",
    ],
  },
  {
    icon: Landmark,
    title: "Government Organizations",
    color: "text-[#FF36A6]",
    bg: "bg-[#FF36A6]/10",
    border: "border-[#FF36A6]/20",
    challenges: "Government organizations are prime targets for state-sponsored attacks, insider threats and sophisticated phishing campaigns. Protecting sensitive information and citizen data is a critical responsibility.",
    solution: "Shield Pro AI provides behavioral analysis, identity monitoring and threat intelligence capabilities suited to the security requirements of government environments.",
    benefits: [
      "Insider threat detection",
      "State-sponsored attack awareness",
      "Sensitive information access monitoring",
      "Privileged user behavior analysis",
      "Security event audit logging",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 grid-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D7FF00]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#D7FF00] font-inter font-medium text-sm uppercase tracking-widest mb-4">Solutions</p>
          <h1 className="font-sora font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
            Security Built for Your Industry
          </h1>
          <p className="font-inter text-[#929292] text-xl leading-relaxed max-w-2xl mx-auto">
            Every industry faces distinct cybersecurity challenges. Shield Pro AI adapts to the specific threat landscape and operational needs of your organization.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {solutions.map((sol) => (
            <div key={sol.title} className={`rounded-2xl border ${sol.border} bg-[#111111] p-8 lg:p-10`}>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className={`w-12 h-12 ${sol.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <sol.icon size={22} className={sol.color} />
                  </div>
                  <h2 className="font-sora font-bold text-2xl text-white mb-4">{sol.title}</h2>
                  <div className="space-y-3">
                    {sol.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <CheckCircle size={14} className={`${sol.color} flex-shrink-0 mt-0.5`} />
                        <span className="font-inter text-[#929292] text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-5">
                  <div>
                    <p className="text-[#929292] text-xs font-inter uppercase tracking-widest mb-2">The Challenge</p>
                    <p className="font-inter text-[#F5F5F0] text-sm leading-relaxed">{sol.challenges}</p>
                  </div>
                  <div>
                    <p className="text-[#929292] text-xs font-inter uppercase tracking-widest mb-2">How Shield Pro AI Helps</p>
                    <p className="font-inter text-[#F5F5F0] text-sm leading-relaxed">{sol.solution}</p>
                  </div>
                  <Link href="/signup" className={`inline-flex items-center gap-2 text-sm font-inter ${sol.color} hover:gap-3 transition-all`}>
                    Get started for {sol.title} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sora font-bold text-4xl text-white mb-6">Not Sure Where to Start?</h2>
          <p className="font-inter text-[#929292] text-lg mb-8">
            Request a demo and our team will help identify the right approach for your organization.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#D7FF00] text-black font-sora font-semibold px-8 py-4 rounded-lg hover:bg-[#c8f000] transition-colors">
            Request a Demo <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
