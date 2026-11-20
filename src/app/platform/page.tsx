import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Database,
  Brain,
  BarChart3,
  Activity,
  LineChart,
  Shield,
  Layers,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  Target,
} from "lucide-react";

const capabilities = [
  {
    icon: Database,
    title: "Connected Business Data",
    desc: "PLAN9 AI integrates with your existing systems, pulling financial, operational and commercial data into a single unified layer. No more manual exports or disconnected spreadsheets.",
    items: ["ERP and CRM connectivity", "Spreadsheet migration tools", "Automated data synchronisation", "Historical data import"],
  },
  {
    icon: Brain,
    title: "AI Powered Analytics",
    desc: "Proprietary AI models analyse your business data continuously, identifying trends, anomalies and opportunities that would take weeks to find manually.",
    items: ["Natural language insights", "Automated anomaly detection", "Pattern recognition across departments", "Contextual performance analysis"],
  },
  {
    icon: Activity,
    title: "Real Time Performance Monitoring",
    desc: "Every business metric tracked in real time, with configurable alerts that notify the right people when performance deviates from plan.",
    items: ["Live KPI dashboards", "Configurable alert thresholds", "Department level monitoring", "Mobile performance views"],
  },
  {
    icon: TrendingUp,
    title: "Intelligent Forecasting",
    desc: "AI driven forecasts for revenue, demand, costs and risk. PLAN9 AI learns from your business patterns and improves forecast accuracy over time.",
    items: ["Revenue and demand forecasting", "Cost and margin prediction", "Risk adjusted projections", "Driver based planning models"],
  },
  {
    icon: Layers,
    title: "Business Planning Dashboards",
    desc: "Purpose built planning environments for every department: finance, sales, supply chain and operations, all working from the same data foundation.",
    items: ["Role based dashboard views", "Cross department visibility", "Custom planning templates", "Collaborative planning workflows"],
  },
  {
    icon: BarChart3,
    title: "Scenario Analysis",
    desc: "Model multiple business scenarios before making decisions. Compare optimistic, base and conservative outcomes across any combination of variables.",
    items: ["What if scenario modelling", "Side by side comparison", "Risk and opportunity quantification", "Scenario version control"],
  },
  {
    icon: Target,
    title: "Performance Tracking",
    desc: "Track actual performance against plan at every level of the organisation. Understand variance, identify root causes and course correct with confidence.",
    items: ["Budget versus actual reporting", "Goal and target tracking", "Variance analysis tools", "Performance trend views"],
  },
  {
    icon: Shield,
    title: "Decision Support",
    desc: "AI generated recommendations that give your leadership team the context and confidence to make faster, better informed strategic decisions.",
    items: ["Prioritised action recommendations", "Decision impact modelling", "Strategic planning support", "Executive briefing summaries"],
  },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-4 py-1.5 mb-8">
            <Layers size={12} className="text-[#2D7EFF]" />
            <span className="text-[#BDBDBD] text-xs font-inter">The PLAN9 AI Platform</span>
          </div>
          <h1 className="font-manrope font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
            One platform. Every dimension of your business.
          </h1>
          <p className="text-[#BDBDBD] font-inter text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            PLAN9 AI brings business intelligence, planning, forecasting and execution together. Your data, your decisions and your performance in one connected platform designed for the complexity of real business.
          </p>
          <Link
            href="/signup"
            className="bg-[#2D7EFF] text-white font-manrope font-semibold text-base px-8 py-4 rounded-lg hover:bg-[#1A6AE8] transition-colors inline-flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Architecture overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", label: "Connect", desc: "Link your existing data sources", color: "#2D7EFF", icon: Database },
                { step: "02", label: "Analyse", desc: "AI processes and interprets your data", color: "#0ECFCF", icon: Brain },
                { step: "03", label: "Forecast", desc: "Predict outcomes with AI models", color: "#2ECC71", icon: TrendingUp },
                { step: "04", label: "Decide", desc: "Act on clear recommendations", color: "#A78BFA", icon: Zap },
              ].map(({ step, label, desc, color, icon: Icon }, i) => (
                <div key={step} className="relative text-center">
                  {i < 3 && (
                    <div className="hidden md:block absolute top-5 right-0 w-full h-px bg-[#2A2A2A] translate-x-1/2" />
                  )}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10" style={{ background: `${color}18`, border: `1px solid ${color}40` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <p className="text-[#777777] font-inter text-xs mb-1">{step}</p>
                  <p className="font-manrope font-bold text-white text-base mb-1">{label}</p>
                  <p className="text-[#BDBDBD] font-inter text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform capabilities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
              Platform capabilities
            </h2>
            <p className="text-[#BDBDBD] font-inter text-lg leading-relaxed">
              Everything your business needs to plan intelligently, forecast accurately and perform consistently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map(({ icon: Icon, title, desc, items }) => (
              <div key={title} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-7 hover:border-[#2D7EFF]/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#2D7EFF]/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#2D7EFF]" />
                </div>
                <h3 className="font-manrope font-bold text-white text-xl mb-3">{title}</h3>
                <p className="text-[#BDBDBD] font-inter text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#777777] font-inter text-sm">
                      <CheckCircle2 size={14} className="text-[#2D7EFF] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-[#050505] leading-tight mb-6">
                Designed for speed, built for scale
              </h2>
              <p className="text-[#555555] font-inter text-lg leading-relaxed mb-8">
                PLAN9 AI was architected to handle the complexity of large organisations without compromising the simplicity that your teams need to work efficiently day to day.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Enterprise Ready", desc: "Role based access, audit trails and enterprise grade security built from the ground up." },
                  { title: "Fast to Deploy", desc: "Connect your first data source and see insights within hours, not months." },
                  { title: "Continuously Learning", desc: "AI models improve with every data point, making PLAN9 AI more accurate over time." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <RefreshCw size={18} className="text-[#2D7EFF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-manrope font-semibold text-[#111111] text-base mb-1">{item.title}</p>
                      <p className="text-[#555555] font-inter text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="mb-4">
                <p className="text-white font-manrope font-semibold text-sm mb-1">Business Performance Overview</p>
                <p className="text-[#777777] font-inter text-xs">Real time platform view</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: "Revenue vs Plan", value: "+8.4%", good: true },
                  { label: "Cost vs Budget", value: "+1.2%", good: false },
                  { label: "Forecast Accuracy", value: "96.1%", good: true },
                  { label: "AI Coverage", value: "100%", good: true },
                ].map((m) => (
                  <div key={m.label} className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg p-3">
                    <p className="text-[#777777] font-inter text-xs mb-1">{m.label}</p>
                    <p className={`font-manrope font-bold text-lg ${m.good ? 'text-[#2ECC71]' : 'text-[#FFBE2E]'}`}>{m.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg p-4">
                <p className="text-[#BDBDBD] font-manrope font-semibold text-xs mb-3">30 Day Revenue Trend</p>
                <div className="flex items-end gap-0.5 h-16">
                  {[40, 55, 48, 62, 58, 70, 65, 72, 68, 80, 75, 82, 78, 88, 85, 90, 87, 94, 91, 96, 93, 98, 95, 100, 97, 100, 98, 100, 99, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i > 20 ? '#0ECFCF' : '#2D7EFF', opacity: 0.8 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
            Ready to see PLAN9 AI in action?
          </h2>
          <p className="text-[#BDBDBD] font-inter text-lg mb-10">
            Start connecting your business data and experience intelligent planning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-[#2D7EFF] text-white font-manrope font-semibold text-base px-8 py-4 rounded-lg hover:bg-[#1A6AE8] transition-colors inline-flex items-center gap-2 justify-center">
              Get Started
              <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="bg-[#1C1C1C] text-white font-manrope font-semibold text-base px-8 py-4 rounded-lg hover:bg-[#2A2A2A] transition-colors border border-[#2A2A2A] inline-flex items-center justify-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
