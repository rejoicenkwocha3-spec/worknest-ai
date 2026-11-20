import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MessageSquare, BarChart3, Database, FileText, Lightbulb, Shield, ArrowRight, CheckCircle } from "lucide-react";

const sections = [
  {
    icon: MessageSquare,
    title: "Conversational Analytics",
    sub: "Ask your data questions, receive accurate answers.",
    desc: "DataTalk AI understands natural language. Instead of writing queries or formulas, you type your business question and receive a clear answer drawn from your actual connected data. The AI explains its reasoning, cites its sources and handles follow-up questions naturally.",
    points: ["Natural language question processing", "Accurate answers from your connected data", "Source attribution for every response", "Follow-up questions and conversation context"],
  },
  {
    icon: Database,
    title: "Data Connections",
    sub: "Bring all your data sources into one workspace.",
    desc: "Connect your existing databases, spreadsheets and business applications without moving or duplicating your data. DataTalk AI reads from your sources directly, keeping information current and your existing workflows intact.",
    points: ["PostgreSQL and MySQL databases", "CSV and Excel file uploads", "Google Sheets integration", "Supabase native support"],
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Insights",
    sub: "Surface what matters without searching for it.",
    desc: "DataTalk AI monitors your connected data and surfaces meaningful observations automatically. Trends, anomalies, performance changes and emerging patterns are presented clearly so your team can act before problems grow or opportunities pass.",
    points: ["Automatic trend identification", "Anomaly detection and alerts", "Performance change explanations", "Opportunity and risk surfacing"],
  },
  {
    icon: BarChart3,
    title: "Interactive Dashboards",
    sub: "Visualize your most important metrics.",
    desc: "Create dashboards that show the numbers your team needs to see every day. Add charts, tables and metric cards. Arrange them freely. Share with colleagues. DataTalk AI can generate dashboard content directly from a question.",
    points: ["Drag-and-drop widget arrangement", "Charts, tables and metric cards", "Shareable dashboard links", "AI-generated dashboard content"],
  },
  {
    icon: FileText,
    title: "Automated Reporting",
    sub: "Generate and distribute reports automatically.",
    desc: "Schedule reports to run on a recurring basis and distribute them to your team. DataTalk AI generates clear written summaries alongside the data, so recipients understand what they are looking at without needing additional context.",
    points: ["Scheduled report generation", "AI-written report summaries", "Team distribution and sharing", "Export to PDF and CSV"],
  },
  {
    icon: Shield,
    title: "Governed Analytics",
    sub: "Accurate, trusted, secure business intelligence.",
    desc: "Every answer DataTalk AI produces is grounded in your actual data. The platform uses read-only connections, row-level security and workspace permissions to ensure the right people see the right information and nothing more.",
    points: ["Read-only data source connections", "Row-level security enforcement", "Workspace-based access control", "Full audit trail and activity logs"],
  },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-[#070A27]">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00D4FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">The Platform</p>
          <h1 className="font-space font-bold text-5xl text-white mb-6">One platform. Every insight.</h1>
          <p className="font-inter text-[#A7B2CC] text-xl leading-relaxed">
            DataTalk AI brings conversational analytics, intelligent dashboards, automated reporting and AI-powered insights together in a single, organized business intelligence workspace.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
        {sections.map((s, i) => (
          <div key={s.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
            <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
              <div className="w-12 h-12 rounded-xl bg-[#087BFF]/20 border border-[#087BFF]/30 flex items-center justify-center mb-5">
                <s.icon size={22} className="text-[#00D4FF]" />
              </div>
              <p className="text-[#00D4FF] font-inter text-sm font-medium mb-2">{s.sub}</p>
              <h2 className="font-space font-bold text-3xl text-white mb-4">{s.title}</h2>
              <p className="font-inter text-[#A7B2CC] text-base leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <CheckCircle size={16} className="text-[#00D4FF] flex-shrink-0" />
                    <span className="font-inter text-[#A7B2CC] text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-2xl p-6 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              <div className="w-full h-48 bg-[#070A27] rounded-xl border border-[rgba(0,212,255,0.14)] flex items-center justify-center">
                <div className="text-center">
                  <s.icon size={40} className="text-[#087BFF]/50 mx-auto mb-3" />
                  <p className="text-[#A7B2CC] text-sm font-inter">{s.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="py-20 bg-[#0B1035] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-space font-bold text-3xl text-white mb-4">Ready to explore the platform?</h2>
          <p className="font-inter text-[#A7B2CC] mb-8">Connect your first data source and ask your first question in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
              Start for Free <ArrowRight size={18} />
            </Link>
            <Link href="/features" className="bg-[#101A42] border border-[rgba(0,212,255,0.22)] text-white font-space font-semibold px-8 py-4 rounded-lg hover:border-[#00D4FF]/50 transition-colors">
              View All Features
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
