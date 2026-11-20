import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Brain,
  BarChart3,
  Layers,
  FileText,
  TrendingUp,
  Landmark,
  Zap,
  Activity,
  PieChart,
  Target,
  Users,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Business Assistant",
    value: "An intelligent assistant that understands the full context of your business, answers complex questions in plain language and delivers prioritised recommendations without requiring manual analysis.",
    details: [
      "Natural language query interface for business data",
      "Contextual recommendations based on your business patterns",
      "Proactive alerts when attention is needed",
      "Executive summary generation on demand",
    ],
    color: "#2D7EFF",
  },
  {
    icon: BarChart3,
    title: "Intelligent Analytics",
    value: "Transform your raw business data into clear, structured intelligence. PLAN9 AI automatically identifies what matters, surfaces emerging trends and translates complex data relationships into understandable insights.",
    details: [
      "Automated trend detection across all business data",
      "Comparative analysis across time periods and dimensions",
      "Anomaly identification with root cause suggestions",
      "Cross department correlation analysis",
    ],
    color: "#0ECFCF",
  },
  {
    icon: Layers,
    title: "Customisable Dashboards",
    value: "Every role in your organisation has different information needs. PLAN9 AI provides fully customisable dashboards that give each user the view that matters most to their responsibilities.",
    details: [
      "Role and function based dashboard templates",
      "Drag and drop layout customisation",
      "Shared and private dashboard configurations",
      "Mobile optimised dashboard views",
    ],
    color: "#2ECC71",
  },
  {
    icon: FileText,
    title: "Automated Reporting",
    value: "Eliminate the time spent producing manual reports. PLAN9 AI generates, schedules and distributes professional performance reports automatically, so your teams can focus on responding to insights rather than producing them.",
    details: [
      "Scheduled report generation and distribution",
      "Custom report templates by function and audience",
      "Automated narrative generation with key highlights",
      "Export to PDF and standard business formats",
    ],
    color: "#F59E0B",
  },
  {
    icon: TrendingUp,
    title: "Revenue Forecasting",
    value: "AI driven revenue forecasting that learns from your historical performance, pipeline data and market signals. Forecasts update automatically as new information arrives, giving you the most current view of expected revenue at all times.",
    details: [
      "Driver based revenue model construction",
      "Pipeline weighted and statistical forecast methods",
      "Multi horizon forecasting: weekly, monthly, quarterly",
      "Forecast accuracy tracking and model performance reporting",
    ],
    color: "#2D7EFF",
  },
  {
    icon: Landmark,
    title: "Financial Performance Monitoring",
    value: "A consolidated, real time view of financial performance across the organisation. Budget versus actual, revenue tracking, cost management and profitability all accessible in a single connected environment.",
    details: [
      "Budget versus actual reporting across all cost centres",
      "Real time P and L visibility at company and department level",
      "Margin analysis by product, channel and region",
      "Cash flow monitoring and working capital tracking",
    ],
    color: "#0ECFCF",
  },
  {
    icon: Zap,
    title: "Predictive Insights",
    value: "PLAN9 AI does not wait for problems to appear in reports. Predictive models continuously scan your business data for early warning signals, surfacing issues and opportunities before they become visible in standard reporting cycles.",
    details: [
      "Early warning system for financial and operational KPIs",
      "Demand signal detection from multiple data inputs",
      "Churn and revenue risk identification",
      "Growth opportunity scoring and prioritisation",
    ],
    color: "#2ECC71",
  },
  {
    icon: Activity,
    title: "Scenario Modelling",
    value: "Model multiple possible business futures before making decisions. Define scenarios based on any combination of business variables, compare outcomes side by side and understand the risk profile of each option.",
    details: [
      "Unlimited scenario creation and version management",
      "What if analysis across financial and operational variables",
      "Probability weighted scenario outcomes",
      "Scenario impact on KPIs and financial performance",
    ],
    color: "#A78BFA",
  },
  {
    icon: PieChart,
    title: "Data Visualisation",
    value: "Professional business charts and visualisations that communicate performance clearly. PLAN9 AI automatically selects the most appropriate chart type for every data set and maintains a consistent visual standard across the platform.",
    details: [
      "Automatic chart type selection based on data characteristics",
      "Interactive drill down across all visualisations",
      "Geographic performance mapping",
      "Time series, distribution and correlation views",
    ],
    color: "#2D7EFF",
  },
  {
    icon: Target,
    title: "Business KPI Tracking",
    value: "Define, monitor and track every KPI that matters to your organisation. Connect targets to actual performance and understand at a glance whether the business is on track, behind plan or ahead of expectations.",
    details: [
      "Company wide and departmental KPI configuration",
      "Target setting at company, team and individual level",
      "Traffic light and progress indicator views",
      "Historical KPI performance trending",
    ],
    color: "#0ECFCF",
  },
  {
    icon: Users,
    title: "Multi Department Collaboration",
    value: "PLAN9 AI is a shared intelligence layer for your entire organisation. Finance, sales, supply chain and operations teams work from the same data foundation, reducing miscommunication and improving cross functional alignment.",
    details: [
      "Shared planning workspaces by function and project",
      "Comment and annotation tools on any data view",
      "Task and action assignment from insights",
      "Cross department scenario review workflows",
    ],
    color: "#2ECC71",
  },
  {
    icon: Shield,
    title: "Secure User Management",
    value: "Enterprise grade security with granular access controls. Every user sees exactly the data their role requires, with comprehensive audit trails and compliance controls built into the platform architecture.",
    details: [
      "Role based access control at data and feature level",
      "Single sign on and enterprise identity provider support",
      "Full audit trail of all data access and changes",
      "Data residency and compliance configuration",
    ],
    color: "#F59E0B",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-4 py-1.5 mb-8">
            <Zap size={12} className="text-[#2D7EFF]" />
            <span className="text-[#BDBDBD] text-xs font-inter">Platform Features</span>
          </div>
          <h1 className="font-manrope font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
            Every feature your business intelligence platform needs
          </h1>
          <p className="text-[#BDBDBD] font-inter text-xl leading-relaxed max-w-3xl mx-auto">
            Twelve core capabilities built for the demands of modern business planning. Each one designed to deliver measurable value from day one.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, title, value, details, color }) => (
            <div key={title} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-7 hover:border-[#2D7EFF]/30 transition-colors">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <h3 className="font-manrope font-bold text-white text-xl mb-1">{title}</h3>
                </div>
              </div>
              <p className="text-[#BDBDBD] font-inter text-sm leading-relaxed mb-5">{value}</p>
              <ul className="space-y-2.5">
                {details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color }} />
                    <p className="text-[#777777] font-inter text-sm leading-relaxed">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Summary stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "12", label: "Core Features" },
              { value: "8", label: "Business Solutions" },
              { value: "1", label: "Connected Platform" },
              { value: "AI", label: "Powered Intelligence" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-manrope font-extrabold text-5xl text-[#2D7EFF] mb-2">{stat.value}</p>
                <p className="font-inter text-sm text-[#555555]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050505] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
            All twelve features. One platform. Included from day one.
          </h2>
          <p className="text-[#BDBDBD] font-inter text-lg mb-10">
            There are no feature paywalls in PLAN9 AI. Every capability is available from your first day on the platform.
          </p>
          <Link
            href="/pricing"
            className="bg-[#2D7EFF] text-white font-manrope font-semibold text-base px-8 py-4 rounded-lg hover:bg-[#1A6AE8] transition-colors inline-flex items-center gap-2"
          >
            See Pricing
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
