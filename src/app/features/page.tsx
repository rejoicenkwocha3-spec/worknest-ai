import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, MessageSquare, BarChart3, Database, FileText, Lightbulb, Shield, Users, Settings, Download, BookmarkCheck, History } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Data Queries",
    desc: "Ask questions about your business data in everyday language. DataTalk AI understands intent, not just keywords, and returns answers drawn from your actual connected data sources.",
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Analytics",
    desc: "The platform continuously monitors your connected data for meaningful patterns, performance changes and emerging trends. Surface what matters without having to search for it.",
  },
  {
    icon: BarChart3,
    title: "Interactive Data Visualization",
    desc: "Answers are presented as clear charts, tables and metric summaries. Visualizations are generated automatically based on the type of question and data involved.",
  },
  {
    icon: FileText,
    title: "Automated Reports",
    desc: "Generate structured business reports that combine data visualizations with AI-written summaries. Schedule recurring reports and share them with your team automatically.",
  },
  {
    icon: Lightbulb,
    title: "Intelligent Business Insights",
    desc: "Move beyond answering individual questions. DataTalk AI proactively identifies business insights and delivers them as actionable observations your team can act on immediately.",
  },
  {
    icon: Database,
    title: "Data Source Integrations",
    desc: "Connect to PostgreSQL, MySQL, Supabase, Google Sheets, CSV and Excel files. DataTalk AI reads from your sources directly using secure, read-only connections.",
  },
  {
    icon: History,
    title: "Saved Conversations",
    desc: "Every conversation with DataTalk AI is automatically saved to your workspace. Return to previous conversations, review earlier answers and continue where you left off.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Management",
    desc: "Create, arrange and share business dashboards. Add charts, metric cards and tables. Build dashboards for different teams and business areas from one workspace.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Invite your team to your DataTalk AI workspace. Share dashboards, reports and saved insights. Collaborate on business intelligence across departments.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    desc: "Control who can see which data, dashboards and reports. Assign workspace roles and enforce access policies that match your organization's structure and security requirements.",
  },
  {
    icon: Shield,
    title: "Data Security",
    desc: "DataTalk AI uses read-only connections, row-level security and encrypted credentials. Your data never leaves your infrastructure. API keys and credentials are stored securely server-side.",
  },
  {
    icon: Download,
    title: "Exportable Reports",
    desc: "Export reports and dashboards to PDF and CSV. Share business intelligence with stakeholders who do not have a DataTalk AI account without compromising data access controls.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#070A27]">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00D4FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">Features</p>
          <h1 className="font-space font-bold text-5xl text-white mb-6">Everything you need to understand your business.</h1>
          <p className="font-inter text-[#A7B2CC] text-xl leading-relaxed">
            DataTalk AI combines conversational intelligence, visualization, reporting and collaboration in a single platform designed for how businesses actually work with data.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-2xl p-6 hover:border-[rgba(0,212,255,0.4)] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#087BFF]/20 border border-[#087BFF]/30 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-[#00D4FF]" />
              </div>
              <h3 className="font-space font-semibold text-white text-base mb-2">{f.title}</h3>
              <p className="font-inter text-[#A7B2CC] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#0B1035] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-space font-bold text-3xl text-white mb-4">See these features in action.</h2>
          <p className="font-inter text-[#A7B2CC] mb-8">Connect your data and experience the full DataTalk AI platform for yourself.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
              Start for Free <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="bg-[#101A42] border border-[rgba(0,212,255,0.22)] text-white font-space font-semibold px-8 py-4 rounded-lg hover:border-[#00D4FF]/50 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
