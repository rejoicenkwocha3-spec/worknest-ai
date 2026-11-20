import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, HardHat, Briefcase, BarChart3, Wrench, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Construction Companies",
    headline: "Manage your entire project portfolio from one platform",
    desc: "Construction companies operating across multiple active projects need a centralised command centre. RemoteSite gives your leadership team real-time visibility into every site, enabling faster decisions and tighter project control.",
    problems: [
      "Difficulty tracking progress across many simultaneous projects",
      "Costly and time-consuming physical site visits",
      "Inconsistent documentation standards across teams",
      "Late identification of construction defects and delays",
    ],
    benefits: [
      "Portfolio dashboard with status overview for all projects",
      "AI-generated progress reports and risk alerts",
      "Standardised visual documentation workflows",
      "Early issue detection through structured defect tracking",
    ],
  },
  {
    icon: BarChart3,
    title: "Property Developers",
    headline: "Know exactly what you are getting for your investment",
    desc: "Property developers need confidence that their contractors are delivering projects on time, on budget and to specification. RemoteSite provides developers with an independent, visual record of construction progress and quality.",
    problems: [
      "Limited visibility into contractor performance",
      "No structured record of construction milestones",
      "Difficulty comparing planned versus actual progress",
      "Challenges generating investor and lender updates",
    ],
    benefits: [
      "Independent progress monitoring separate from contractor reporting",
      "Milestone and schedule tracking with variance analysis",
      "Professional progress reports for investors and lenders",
      "Complete visual history of the construction process",
    ],
  },
  {
    icon: HardHat,
    title: "General Contractors",
    headline: "Coordinate your subcontractors and document everything",
    desc: "General contractors are accountable for overall project delivery. RemoteSite helps GCs coordinate their subcontractor teams, document daily progress and maintain a clear record of the work completed on site.",
    problems: [
      "Managing communication across multiple subcontractor teams",
      "Documenting daily progress for contract and claim purposes",
      "Tracking open issues and ensuring timely resolution",
      "Producing structured progress updates for clients",
    ],
    benefits: [
      "Team management with contractor and subcontractor roles",
      "Daily photo and video documentation workflows",
      "Issue tracking with assignment and resolution management",
      "Client-ready progress reports generated automatically",
    ],
  },
  {
    icon: Briefcase,
    title: "Project Managers",
    headline: "Stay in control of every milestone and deadline",
    desc: "Project managers are responsible for delivering projects on time and within budget. RemoteSite gives PMs the tools to track milestones, identify risks early and maintain complete oversight without being permanently on site.",
    problems: [
      "Difficulty tracking milestones and schedule adherence",
      "Lack of visibility into daily site activity",
      "Time spent chasing progress updates from site teams",
      "No structured system for issue escalation",
    ],
    benefits: [
      "Milestone planning and progress tracking against the schedule",
      "Daily site update notifications and media uploads",
      "AI assistant to surface schedule variance and risks",
      "Structured issue management from creation to resolution",
    ],
  },
  {
    icon: Wrench,
    title: "Civil Engineers",
    headline: "Document technical progress and maintain compliance records",
    desc: "Civil engineers need a structured system for documenting technical progress, maintaining compliance records and communicating findings to project stakeholders. RemoteSite provides the documentation and reporting tools to support this.",
    problems: [
      "Maintaining structured technical documentation across projects",
      "Recording compliance and inspection milestones",
      "Communicating technical findings to non-technical stakeholders",
      "Managing documents and drawings across the project team",
    ],
    benefits: [
      "Structured media documentation linked to project phases",
      "Milestone records for inspections and technical sign-offs",
      "Professional report generation for technical and non-technical audiences",
      "Document management with access control",
    ],
  },
  {
    icon: TrendingUp,
    title: "Real Estate Investors",
    headline: "Protect your investment with verified progress monitoring",
    desc: "Real estate investors need independent confirmation that their capital is being deployed effectively and that construction is proceeding as planned. RemoteSite provides investors with structured, visual evidence of construction progress.",
    problems: [
      "Dependence on developer and contractor self-reporting",
      "Limited visibility into how construction capital is being used",
      "No structured record of progress for due diligence",
      "Difficulty comparing progress across multiple investments",
    ],
    benefits: [
      "Independent monitoring separate from developer reporting",
      "Visual evidence of construction milestone completion",
      "Portfolio-level progress overview across all investments",
      "Professional reports suitable for fund reporting and due diligence",
    ],
  },
  {
    icon: Users,
    title: "Construction Consultants",
    headline: "Deliver better monitoring services for your clients",
    desc: "Construction consultants advising developers, lenders or investors need a professional, scalable monitoring platform. RemoteSite enables consultants to manage multiple client projects with structured reporting and documentation.",
    problems: [
      "Managing multiple client projects without a unified system",
      "Producing consistent, professional monitoring reports",
      "Maintaining client data isolation and confidentiality",
      "Demonstrating value through structured progress evidence",
    ],
    benefits: [
      "Multi-project portfolio management under one account",
      "Professional report templates for client delivery",
      "Role-based access control to maintain client data isolation",
      "AI-assisted analysis to accelerate monitoring workflows",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div style={{ background: "#F7F8FA", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #101828 0%, #1a2a4a 100%)", padding: "5rem 0 4rem" }}>
        <div className="container-rs" style={{ textAlign: "center" }}>
          <div className="badge" style={{ marginBottom: "1.25rem", display: "inline-flex", background: "rgba(0,57,255,0.2)", borderColor: "rgba(0,57,255,0.4)", color: "#7ba7ff" }}>
            Solutions
          </div>
          <h1 style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0 0 1.25rem", fontFamily: "var(--font-manrope)", fontWeight: 900, lineHeight: 1.1 }}>
            Designed for every construction professional
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: "580px", margin: "0 auto", lineHeight: 1.7 }}>
            RemoteSite solves different problems for different roles. See how the platform creates value for your specific use case.
          </p>
        </div>
      </section>

      {/* Solutions list */}
      {solutions.map((sol, i) => {
        const Icon = sol.icon;
        return (
          <section
            key={sol.title}
            id={sol.title.toLowerCase().replace(/\s+/g, "-")}
            style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F7F8FA", padding: "4.5rem 0", borderTop: "1px solid #E2E6F0" }}
          >
            <div className="container-rs">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                    <div style={{ width: 48, height: 48, borderRadius: "12px", background: "#EAF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={24} color="#0039FF" />
                    </div>
                    <span style={{ color: "#0039FF", fontWeight: 600, fontSize: "0.9375rem" }}>{sol.title}</span>
                  </div>
                  <h2 style={{ fontSize: "clamp(1.375rem, 2vw, 1.875rem)", margin: "0 0 1rem", lineHeight: 1.2 }}>
                    {sol.headline}
                  </h2>
                  <p style={{ color: "#6B7280", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                    {sol.desc}
                  </p>
                  <Link href="/signup" className="btn-primary" style={{ fontSize: "0.9375rem" }}>
                    Get Started <ArrowRight size={16} />
                  </Link>
                </div>

                <div>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.875rem" }}>
                      Challenges it solves
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                      {sol.problems.map((p) => (
                        <div key={p} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                            <span style={{ color: "#EF4444", fontSize: "0.75rem", fontWeight: 700 }}>✕</span>
                          </div>
                          <span style={{ fontSize: "0.9375rem", color: "#252B36" }}>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.875rem" }}>
                      How RemoteSite helps
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                      {sol.benefits.map((b) => (
                        <div key={b} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                          <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: "1px" }} />
                          <span style={{ fontSize: "0.9375rem", color: "#252B36" }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section style={{ background: "#0039FF", padding: "4rem 0" }}>
        <div className="container-rs" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", margin: "0 0 1rem", fontFamily: "var(--font-manrope)" }}>
            Whatever your role, RemoteSite works for you
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", marginBottom: "2rem" }}>
            Start your free trial and see the difference for yourself.
          </p>
          <Link href="/signup" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "#FFFFFF", color: "#0039FF",
            fontWeight: 700, fontSize: "1rem",
            padding: "0.9375rem 2rem", borderRadius: "0.5rem",
            textDecoration: "none",
          }}>
            Get Started Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
