import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Eye, Brain, TrendingUp, Camera, Shield, FileText,
  Users, Bell, BarChart3, FolderOpen, FileStack, Layers,
  ArrowRight, CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Remote Site Monitoring",
    desc: "Monitor every construction project from your laptop, tablet or phone. RemoteSite gives you a complete, real-time view of all active sites without requiring a physical presence.",
    details: [
      "Portfolio-level overview dashboard for all active projects",
      "Per-project status panels with progress indicators",
      "Date and time-stamped activity feeds for each site",
      "Mobile-first design for access from any device",
      "Custom dashboard views and project filters",
    ],
  },
  {
    icon: Brain,
    title: "AI Construction Assistant",
    desc: "Ask questions about your construction projects in plain language. The AI assistant reads your actual project data and delivers structured, accurate answers without fabricating information.",
    details: [
      "Natural language project queries: ask anything about your sites",
      "Progress summaries and schedule variance analysis",
      "Issue and risk briefings with prioritised recommendations",
      "Automated weekly and monthly project summaries",
      "Secure server-side processing: your data stays protected",
    ],
  },
  {
    icon: TrendingUp,
    title: "Construction Progress Tracking",
    desc: "Track construction milestones, record completion percentages and compare planned progress against actuals with visual timelines and percentage-based progress indicators.",
    details: [
      "Milestone creation with target dates and completion criteria",
      "Percentage completion recording for phases and milestones",
      "Planned versus actual progress comparison charts",
      "Schedule variance detection and delay alerts",
      "Historical progress timeline for every project",
    ],
  },
  {
    icon: Camera,
    title: "Visual Site Documentation",
    desc: "Build a comprehensive photographic and video record of every construction project. Media is automatically organised by project, date and site location, creating a complete searchable archive.",
    details: [
      "Photo and video upload from any device",
      "Automatic organisation by project, date and location",
      "Side-by-side comparison of site photos across time periods",
      "Searchable media library with metadata and custom tags",
      "High-resolution image storage with secure access control",
    ],
  },
  {
    icon: Camera,
    title: "Photo and Video Management",
    desc: "Manage your construction media library with professional tools designed for the volume and complexity of construction documentation. Every file is linked to a project, a date and a location.",
    details: [
      "Bulk upload of photos and videos from site",
      "Project-based media organisation and folder structure",
      "Metadata including date, uploader and site location",
      "Role-based access to control who can view or upload media",
      "Download and export media for use in reports",
    ],
  },
  {
    icon: Shield,
    title: "Issue and Defect Tracking",
    desc: "Create, assign and track construction issues from identification to resolution. Every issue has a full audit trail including supporting photos, assignment history and resolution notes.",
    details: [
      "Structured issue creation with title, description and priority",
      "Four priority levels: critical, high, medium and low",
      "Statuses: open, in progress, resolved and closed",
      "Assignment to team members with due dates",
      "Supporting photo attachments for every issue",
    ],
  },
  {
    icon: BarChart3,
    title: "Project Dashboards",
    desc: "Each project has its own dedicated dashboard bringing together progress data, media, issues, milestones and team activity in one organised, visual workspace.",
    details: [
      "Per-project dashboard with all key metrics at a glance",
      "Progress charts and milestone status indicators",
      "Recent media uploads and site activity feed",
      "Open issue count and priority breakdown",
      "Team member activity and contribution tracking",
    ],
  },
  {
    icon: FileText,
    title: "Automated Reports",
    desc: "Generate professional project reports at any time. Each report consolidates progress data, media, issues and milestones into a formatted document ready for clients, investors and stakeholders.",
    details: [
      "One-click report generation for any project or date range",
      "Sections: overview, progress, milestones, issues and photos",
      "AI-generated recommendations and risk commentary",
      "PDF export for sharing, filing and archiving",
      "Full report history with version management",
    ],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Build your project team inside RemoteSite. Assign roles, control data access and ensure the right people have visibility into the right projects.",
    details: [
      "Role-based access: Owner, Admin, Manager, Engineer, Contractor, Viewer",
      "Project-level team assignment and permission control",
      "Team member invitation via email",
      "Activity logs showing who updated what and when",
      "Notification preferences per team member and project",
    ],
  },
  {
    icon: Layers,
    title: "Project Portfolio Management",
    desc: "Manage your entire construction portfolio from a single dashboard. Filter by status, date and project type to get the information you need instantly.",
    details: [
      "Portfolio overview with all active, completed and paused projects",
      "Filter by project status, start date and project type",
      "Overall portfolio statistics: completion rate, issues and milestones",
      "Project comparison side-by-side",
      "AI-generated portfolio summary reports",
    ],
  },
  {
    icon: FolderOpen,
    title: "Document Management",
    desc: "Store and organise project documents alongside your site media. Keep drawings, contracts, specifications and permits linked to the relevant project and accessible to the right team members.",
    details: [
      "Document upload and storage for any file type",
      "Project-linked document organisation",
      "Version tracking for updated documents",
      "Role-based access control for sensitive documents",
      "Document search and filter by project, type and date",
    ],
  },
  {
    icon: Bell,
    title: "Notifications and Alerts",
    desc: "Stay informed about project updates without constantly checking the platform. RemoteSite sends notifications about the events that matter: milestone completions, new issues and site updates.",
    details: [
      "In-platform notification centre",
      "Email notifications for critical project events",
      "Notifications for: new site uploads, issue creation, milestone completion",
      "Per-project and per-role notification preferences",
      "Notification history and read status tracking",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div style={{ background: "#F7F8FA", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #101828 0%, #1a2a4a 100%)", padding: "5rem 0 4rem" }}>
        <div className="container-rs" style={{ textAlign: "center" }}>
          <div className="badge" style={{ marginBottom: "1.25rem", display: "inline-flex", background: "rgba(0,57,255,0.2)", borderColor: "rgba(0,57,255,0.4)", color: "#7ba7ff" }}>
            <FileStack size={13} />
            Product Features
          </div>
          <h1 style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0 0 1.25rem", fontFamily: "var(--font-manrope)", fontWeight: 900, lineHeight: 1.1 }}>
            Every feature your construction team needs
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: "580px", margin: "0 auto", lineHeight: 1.7 }}>
            From remote monitoring to AI-generated reports, RemoteSite covers every aspect of construction project management.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="section-padding">
        <div className="container-rs">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="card card-hover" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "10px", background: "#EAF0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={22} color="#0039FF" />
                    </div>
                    <h3 style={{ fontSize: "1.0625rem", margin: 0, color: "#101828", fontWeight: 700 }}>{f.title}</h3>
                  </div>
                  <p style={{ fontSize: "0.9375rem", color: "#6B7280", margin: 0, lineHeight: 1.65 }}>{f.desc}</p>
                  <div style={{ borderTop: "1px solid #E2E6F0", paddingTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {f.details.map((d) => (
                      <div key={d} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <CheckCircle2 size={15} color="#0039FF" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "0.875rem", color: "#252B36" }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0039FF", padding: "4rem 0" }}>
        <div className="container-rs" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", margin: "0 0 1rem", fontFamily: "var(--font-manrope)" }}>
            See all features in action
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", marginBottom: "2rem" }}>
            Start your free trial and explore every capability.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/signup" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#FFFFFF", color: "#0039FF", fontWeight: 700, fontSize: "1rem", padding: "0.9375rem 2rem", borderRadius: "0.5rem", textDecoration: "none" }}>
              Get Started Free <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.12)", color: "#FFFFFF", fontWeight: 600, fontSize: "1rem", padding: "0.9375rem 2rem", borderRadius: "0.5rem", border: "1.5px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
