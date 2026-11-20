import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Eye, Brain, TrendingUp, Camera, Shield, FileText,
  Users, Bell, BarChart3, Layers, ArrowRight, CheckCircle2
} from "lucide-react";

const capabilities = [
  {
    icon: Eye,
    title: "Centralised Construction Monitoring",
    desc: "Connect all your construction sites into one unified dashboard. View project status, site activity and progress updates across your entire portfolio without leaving your desk.",
    points: [
      "Portfolio-level overview of all active projects",
      "Real-time status updates from every site",
      "Customisable dashboard widgets and filters",
      "Mobile-optimised for on-the-go access",
    ],
  },
  {
    icon: Brain,
    title: "AI-Powered Project Intelligence",
    desc: "RemoteSite's AI assistant analyses your project data and surfaces the insights that matter. Ask questions in plain language and receive structured, accurate answers drawn from your actual construction data.",
    points: [
      "Natural language queries about any project",
      "Automatic progress analysis and comparisons",
      "Risk identification and early warning alerts",
      "Milestone tracking and schedule variance detection",
    ],
  },
  {
    icon: Camera,
    title: "Visual Site Documentation",
    desc: "Build a complete visual record of every construction project. Photos and videos are automatically organised by project, date and location, creating a searchable archive of your site history.",
    points: [
      "Bulk photo and video upload from any device",
      "Automatic date and project tagging",
      "Side-by-side comparison of different time periods",
      "Searchable media library with custom filters",
    ],
  },
  {
    icon: TrendingUp,
    title: "Construction Progress Tracking",
    desc: "Define milestones, record completion percentages and compare planned progress against actuals. Visual timelines and progress charts give every stakeholder an instant understanding of where each project stands.",
    points: [
      "Milestone definition and deadline management",
      "Planned versus actual progress comparisons",
      "Visual progress charts and percentage indicators",
      "Historical progress timeline for every project",
    ],
  },
  {
    icon: Shield,
    title: "Issue and Defect Management",
    desc: "Log construction issues directly within the platform, assign them to team members, set priorities and track resolution from open to closed. Every issue has a full audit trail.",
    points: [
      "Structured issue creation with supporting photos",
      "Priority levels: critical, high, medium and low",
      "Assignment and due date management",
      "Full audit trail and resolution history",
    ],
  },
  {
    icon: FileText,
    title: "Automated Reporting",
    desc: "Generate professional project reports at any time. Reports consolidate progress data, media, issues and milestones into a formatted document ready to share with clients, investors and stakeholders.",
    points: [
      "One-click report generation for any project",
      "PDF export for sharing and archiving",
      "Custom report sections and date ranges",
      "Full report history and version storage",
    ],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Bring your entire project team into RemoteSite. Assign roles, control data access, monitor team activity and keep everyone working from the same information.",
    points: [
      "Role-based permissions: Owner, Admin, Manager, Engineer, Contractor, Viewer",
      "Project-level team assignment",
      "Team activity logs and audit trails",
      "In-platform notification system",
    ],
  },
  {
    icon: BarChart3,
    title: "Construction Analytics",
    desc: "Understand performance trends across your project portfolio. Track key metrics including schedule adherence, issue resolution rates and media upload frequency to identify patterns and improve project outcomes.",
    points: [
      "Portfolio-level performance dashboards",
      "Schedule adherence and delay analysis",
      "Issue trend and resolution reporting",
      "Project comparison across the portfolio",
    ],
  },
];

export default function PlatformPage() {
  return (
    <div style={{ background: "#F7F8FA", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #101828 0%, #1a2a4a 100%)", padding: "5rem 0 4rem" }}>
        <div className="container-rs" style={{ textAlign: "center" }}>
          <div className="badge" style={{ marginBottom: "1.25rem", display: "inline-flex", background: "rgba(0,57,255,0.2)", borderColor: "rgba(0,57,255,0.4)", color: "#7ba7ff" }}>
            <Layers size={13} />
            The RemoteSite Platform
          </div>
          <h1 style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0 0 1.25rem", fontFamily: "var(--font-manrope)", fontWeight: 900, lineHeight: 1.1 }}>
            One platform. Every construction project. Complete visibility.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            RemoteSite combines monitoring, intelligence, documentation and collaboration into a single connected environment designed for construction professionals.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 1.75rem" }}>
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(255,255,255,0.1)", color: "#FFFFFF",
              fontWeight: 600, fontSize: "1rem", padding: "0.875rem 1.75rem",
              borderRadius: "0.5rem", border: "1.5px solid rgba(255,255,255,0.25)",
              textDecoration: "none",
            }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Platform overview */}
      <section className="section-padding">
        <div className="container-rs">
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", margin: "0 0 1rem" }}>
              Platform capabilities
            </h2>
            <p style={{ color: "#6B7280", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto" }}>
              Everything your construction team needs to monitor, document and report on projects remotely.
            </p>
          </div>
        </div>
      </section>

      {/* Capability sections */}
      {capabilities.map((cap, i) => {
        const Icon = cap.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={cap.title}
            style={{ background: isEven ? "#FFFFFF" : "#F7F8FA", padding: "4rem 0", borderTop: "1px solid #E2E6F0" }}
          >
            <div className="container-rs">
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
                alignItems: "center",
              }}>
                <div style={{ order: isEven ? 0 : 1 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "12px",
                    background: "#EAF0FF",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}>
                    <Icon size={26} color="#0039FF" />
                  </div>
                  <h2 style={{ fontSize: "clamp(1.375rem, 2vw, 1.875rem)", margin: "0 0 1rem", lineHeight: 1.2 }}>
                    {cap.title}
                  </h2>
                  <p style={{ color: "#6B7280", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {cap.desc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {cap.points.map((p) => (
                      <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                        <CheckCircle2 size={18} color="#0039FF" style={{ flexShrink: 0, marginTop: "1px" }} />
                        <span style={{ fontSize: "0.9375rem", color: "#252B36" }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual panel */}
                <div style={{ order: isEven ? 1 : 0 }}>
                  <div style={{
                    background: "linear-gradient(135deg, #EAF0FF 0%, #F7F8FA 100%)",
                    borderRadius: "1rem",
                    border: "1px solid #E2E6F0",
                    padding: "2rem",
                    minHeight: "280px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    justifyContent: "center",
                  }}>
                    <div style={{
                      background: "#FFFFFF",
                      borderRadius: "0.75rem",
                      padding: "1.25rem",
                      border: "1px solid #E2E6F0",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      display: "flex", alignItems: "center", gap: "1rem",
                    }}>
                      <div style={{ width: 44, height: 44, borderRadius: "10px", background: "#EAF0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={22} color="#0039FF" />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: "#101828", fontSize: "0.9375rem" }}>{cap.title}</div>
                        <div style={{ color: "#6B7280", fontSize: "0.8125rem", marginTop: "0.125rem" }}>Active and monitoring</div>
                      </div>
                      <div style={{ marginLeft: "auto", width: 10, height: 10, borderRadius: "50%", background: "#10B981", flexShrink: 0 }} />
                    </div>
                    {cap.points.slice(0, 2).map((p) => (
                      <div key={p} style={{
                        background: "#FFFFFF", borderRadius: "0.5rem", padding: "0.875rem",
                        border: "1px solid #E2E6F0", display: "flex", gap: "0.625rem", alignItems: "flex-start",
                      }}>
                        <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: "1px" }} />
                        <span style={{ fontSize: "0.875rem", color: "#252B36" }}>{p}</span>
                      </div>
                    ))}
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
            Ready to transform your construction visibility?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", marginBottom: "2rem" }}>
            Start your free trial today. No credit card required.
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
