import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Camera, BarChart3, Brain, Shield, Users, Bell,
  ArrowRight, CheckCircle2, Building2, HardHat, Briefcase,
  TrendingUp, FileText, Eye, Zap, MapPin, Clock
} from "lucide-react";

const stats = [
  { value: "2,400+", label: "Active Construction Sites" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "45min", label: "Avg. Time Saved Per Day" },
  { value: "140+", label: "Countries Supported" },
];

const howItWorks = [
  {
    step: "01",
    title: "Connect Your Sites",
    desc: "Add your construction projects, invite your team and link your existing documentation in minutes.",
  },
  {
    step: "02",
    title: "Upload Site Media",
    desc: "Capture and upload photos and videos from any device. RemoteSite organises everything by project, date and location.",
  },
  {
    step: "03",
    title: "Track and Analyse",
    desc: "Monitor progress against your plan, identify issues early and let AI surface the insights that matter most.",
  },
  {
    step: "04",
    title: "Report and Collaborate",
    desc: "Generate professional reports, share updates with stakeholders and keep your entire team aligned.",
  },
];

const features = [
  {
    icon: Eye,
    title: "Remote Site Visibility",
    desc: "Monitor every construction project from a single, unified dashboard. Know what is happening on site without being there.",
  },
  {
    icon: Brain,
    title: "AI Construction Intelligence",
    desc: "Ask questions about your projects in plain language. Get instant answers, progress summaries and risk alerts.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    desc: "Compare planned milestones against actual progress with visual timelines and percentage completion indicators.",
  },
  {
    icon: Camera,
    title: "Visual Documentation",
    desc: "Build a complete visual history of every site with organised photo and video uploads linked to dates and locations.",
  },
  {
    icon: Shield,
    title: "Issue and Defect Tracking",
    desc: "Log construction issues, assign them to team members, set priorities and track resolution status in real time.",
  },
  {
    icon: FileText,
    title: "Automated Reports",
    desc: "Generate professional project reports with a single click. Export to PDF and share with clients and stakeholders.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Invite contractors, engineers and project managers. Assign roles, control access and keep everyone informed.",
  },
  {
    icon: Bell,
    title: "Notifications and Alerts",
    desc: "Receive instant notifications about site updates, milestone completions and issues that require your attention.",
  },
];

const solutions = [
  { icon: Building2, label: "Construction Companies" },
  { icon: HardHat, label: "General Contractors" },
  { icon: Briefcase, label: "Project Managers" },
  { icon: BarChart3, label: "Property Developers" },
  { icon: MapPin, label: "Civil Engineers" },
  { icon: Clock, label: "Real Estate Investors" },
];

export default function HomePage() {
  return (
    <div style={{ background: "#F7F8FA", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #101828 0%, #1a2a4a 60%, #101828 100%)",
          padding: "5rem 0 6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,57,255,0.12) 1px, transparent 0)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} />

        <div className="container-rs" style={{ position: "relative", textAlign: "center" }}>
          <div className="badge" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
            <Zap size={13} />
            AI-Powered Construction Intelligence
          </div>

          <h1 style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 900,
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            color: "#FFFFFF",
            maxWidth: "900px",
            margin: "0 auto 1.5rem",
          }}>
            See Every Site. Understand Every Detail. Manage Everything Remotely.
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.1875rem)",
            color: "rgba(255,255,255,0.72)",
            maxWidth: "640px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}>
            RemoteSite gives construction teams complete visibility into their projects with AI-powered site monitoring, progress tracking and intelligent reporting.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="/platform" className="btn-secondary" style={{ fontSize: "1rem", padding: "0.875rem 2rem", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.25)", backgroundColor: "rgba(255,255,255,0.08)" }}>
              Explore Platform
            </Link>
          </div>

          {/* Dashboard preview mockup */}
          <div style={{
            marginTop: "4rem",
            background: "#FFFFFF",
            borderRadius: "1rem",
            border: "1px solid #E2E6F0",
            boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
            overflow: "hidden",
            maxWidth: "900px",
            margin: "4rem auto 0",
          }}>
            {/* Browser chrome */}
            <div style={{ background: "#F7F8FA", borderBottom: "1px solid #E2E6F0", padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ display: "flex", gap: "0.375rem" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
              </div>
              <div style={{ flex: 1, background: "#E2E6F0", borderRadius: "0.25rem", height: "24px", maxWidth: "280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>app.remotesite.io/dashboard</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", minHeight: "380px" }}>
              {/* Sidebar */}
              <div style={{ background: "#101828", padding: "1.25rem 0.75rem", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0 0.5rem 1rem", marginBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "6px", background: "#0039FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: "0.6875rem", fontWeight: 800 }}>RS</span>
                  </div>
                  <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.8125rem" }}>RemoteSite</span>
                </div>
                {["Overview", "My Projects", "Site Monitoring", "AI Insights", "Reports", "Team"].map((item, i) => (
                  <div key={item} style={{
                    padding: "0.5rem 0.75rem",
                    borderRadius: "0.375rem",
                    color: i === 0 ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                    background: i === 0 ? "rgba(0,57,255,0.3)" : "transparent",
                    fontSize: "0.8125rem",
                    marginBottom: "0.125rem",
                    fontWeight: i === 0 ? 600 : 400,
                  }}>
                    {item}
                  </div>
                ))}
              </div>

              {/* Main area */}
              <div style={{ background: "#F7F8FA", padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "1rem", color: "#101828", fontFamily: "var(--font-manrope)" }}>Project Overview</div>
                    <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>November 2026</div>
                  </div>
                  <div style={{ background: "#0039FF", color: "#fff", fontSize: "0.6875rem", padding: "0.25rem 0.625rem", borderRadius: "0.375rem", fontWeight: 600 }}>+ New Project</div>
                </div>

                {/* Stats row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.625rem", marginBottom: "1rem" }}>
                  {[
                    { label: "Total Projects", val: "12" },
                    { label: "Active Sites", val: "8" },
                    { label: "On Track", val: "6" },
                    { label: "At Risk", val: "2" },
                  ].map((s) => (
                    <div key={s.label} style={{ background: "#FFFFFF", borderRadius: "0.5rem", padding: "0.625rem 0.75rem", border: "1px solid #E2E6F0" }}>
                      <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#101828", fontFamily: "var(--font-manrope)" }}>{s.val}</div>
                      <div style={{ fontSize: "0.625rem", color: "#6B7280" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Project list preview */}
                <div style={{ background: "#FFFFFF", borderRadius: "0.5rem", border: "1px solid #E2E6F0", overflow: "hidden" }}>
                  {[
                    { name: "Riverside Tower", pct: 72, status: "On Track" },
                    { name: "Harbour View Residences", pct: 45, status: "At Risk" },
                    { name: "Central Business Hub", pct: 91, status: "On Track" },
                  ].map((p) => (
                    <div key={p.name} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.625rem 0.875rem", borderBottom: "1px solid #F3F4F6" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#101828" }}>{p.name}</div>
                        <div style={{ background: "#E2E6F0", borderRadius: "9999px", height: "4px", marginTop: "0.25rem", overflow: "hidden" }}>
                          <div style={{ width: `${p.pct}%`, height: "100%", background: "#0039FF", borderRadius: "9999px" }} />
                        </div>
                      </div>
                      <div style={{ fontSize: "0.625rem", fontWeight: 600, color: p.status === "On Track" ? "#065F46" : "#92400E", background: p.status === "On Track" ? "#D1FAE5" : "#FEF3C7", padding: "0.125rem 0.375rem", borderRadius: "9999px" }}>
                        {p.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#FFFFFF", padding: "3rem 0", borderBottom: "1px solid #E2E6F0" }}>
        <div className="container-rs">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "2rem", color: "#0039FF" }}>{s.value}</div>
                <div style={{ fontSize: "0.875rem", color: "#6B7280", marginTop: "0.25rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="container-rs">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>How RemoteSite Works</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", margin: "0 0 1rem" }}>
              From site upload to AI insight<br />in four steps
            </h2>
            <p style={{ color: "#6B7280", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto" }}>
              RemoteSite turns raw site data into structured, actionable project intelligence.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {howItWorks.map((s) => (
              <div key={s.step} className="card card-hover">
                <div style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "2.5rem", color: "#EAF0FF", lineHeight: 1 }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: "1.0625rem", margin: "0.75rem 0 0.5rem", color: "#101828" }}>{s.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="container-rs">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>Platform Capabilities</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", margin: "0 0 1rem" }}>
              Everything you need to manage<br />construction projects remotely
            </h2>
            <p style={{ color: "#6B7280", fontSize: "1.0625rem", maxWidth: "520px", margin: "0 auto" }}>
              RemoteSite combines monitoring, intelligence and collaboration in one unified platform.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="card card-hover" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "10px",
                    background: "#EAF0FF",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={22} color="#0039FF" />
                  </div>
                  <h3 style={{ fontSize: "1rem", margin: 0, color: "#101828" }}>{f.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#6B7280", margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/features" className="btn-secondary">
              See all features <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #101828 0%, #1a2a4a 100%)" }}>
        <div className="container-rs">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="badge" style={{ marginBottom: "1.25rem", display: "inline-flex", background: "rgba(0,57,255,0.2)", borderColor: "rgba(0,57,255,0.4)", color: "#7ba7ff" }}>
                <Brain size={13} />
                AI Construction Assistant
              </div>
              <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", margin: "0 0 1.25rem", lineHeight: 1.2 }}>
                Ask questions about your projects. Get instant answers.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                The RemoteSite AI assistant understands your actual project data. Ask it which sites are behind schedule, what issues were reported this week or what needs attention right now.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Which projects are falling behind schedule?",
                  "Summarise the latest site updates across all projects.",
                  "Generate a weekly construction report for Riverside Tower.",
                  "What issues need immediate attention?",
                ].map((q) => (
                  <div key={q} style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    background: "rgba(255,255,255,0.06)", borderRadius: "0.5rem",
                    padding: "0.75rem 1rem", border: "1px solid rgba(255,255,255,0.1)",
                  }}>
                    <CheckCircle2 size={16} color="#0039FF" style={{ flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9375rem" }}>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat preview */}
            <div style={{
              background: "rgba(255,255,255,0.05)", borderRadius: "1rem",
              border: "1px solid rgba(255,255,255,0.1)", padding: "1.25rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <Brain size={18} color="#0039FF" />
                <span style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "0.9375rem" }}>AI Assistant</span>
                <div style={{ marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
              </div>
              {[
                { role: "user", text: "Which projects are behind schedule?" },
                { role: "ai", text: "Based on your current data, 2 of your 8 active projects are behind schedule:\n\n• Harbour View Residences: 12 days behind, 45% complete vs 58% planned\n• Westfield Extension: 7 days behind, 23% complete vs 31% planned\n\nWould you like me to generate a detailed report for either project?" },
              ].map((m, i) => (
                <div key={i} style={{ marginBottom: "0.875rem", display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                  <div style={{
                    background: m.role === "user" ? "#0039FF" : "rgba(255,255,255,0.08)",
                    borderRadius: m.role === "user" ? "1rem 1rem 0 1rem" : "1rem 1rem 1rem 0",
                    padding: "0.75rem 1rem",
                    maxWidth: "88%",
                    color: "#FFFFFF",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                <input disabled placeholder="Ask about your projects..." style={{
                  flex: 1, padding: "0.625rem 0.875rem", borderRadius: "0.5rem",
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", cursor: "not-allowed",
                }} />
                <div style={{ background: "#0039FF", borderRadius: "0.5rem", width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ArrowRight size={16} color="white" />
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .ai-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="container-rs">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>Solutions</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", margin: "0 0 1rem" }}>
              Built for every construction professional
            </h2>
            <p style={{ color: "#6B7280", fontSize: "1.0625rem", maxWidth: "480px", margin: "0 auto" }}>
              From developers to investors, RemoteSite gives your team the visibility they need.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} style={{
                  display: "flex", alignItems: "center", gap: "0.625rem",
                  background: "#FFFFFF", border: "1px solid #E2E6F0",
                  borderRadius: "0.625rem", padding: "0.75rem 1.25rem",
                  fontSize: "0.9375rem", fontWeight: 500, color: "#252B36",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}>
                  <Icon size={18} color="#0039FF" />
                  {s.label}
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/solutions" className="btn-ghost" style={{ color: "#0039FF" }}>
              View all solutions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0039FF", padding: "5rem 0" }}>
        <div className="container-rs" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.75rem, 3vw, 2.75rem)", margin: "0 0 1.25rem", fontFamily: "var(--font-manrope)", fontWeight: 800 }}>
            Ready to see your sites from anywhere?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
            Join thousands of construction professionals who use RemoteSite to monitor projects, track progress and generate reports remotely.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#FFFFFF", color: "#0039FF",
              fontWeight: 700, fontSize: "1rem",
              padding: "0.9375rem 2rem", borderRadius: "0.5rem",
              textDecoration: "none", transition: "opacity 0.15s",
            }}>
              Get Started Free <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(255,255,255,0.12)", color: "#FFFFFF",
              fontWeight: 600, fontSize: "1rem",
              padding: "0.9375rem 2rem", borderRadius: "0.5rem",
              border: "1.5px solid rgba(255,255,255,0.3)",
              textDecoration: "none",
            }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
