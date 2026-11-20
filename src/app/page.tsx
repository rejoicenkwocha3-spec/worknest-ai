import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BarChart3,
  TrendingUp,
  Brain,
  ShoppingCart,
  Factory,
  Landmark,
  Package,
  Cpu,
  Truck,
  HeartPulse,
  Radio,
  ArrowRight,
  CheckCircle2,
  Layers,
  Target,
  Zap,
  LineChart,
  PieChart,
  Activity,
} from "lucide-react";

const capabilities = [
  { icon: Landmark, label: "Finance and Financial Planning" },
  { icon: TrendingUp, label: "Sales and Revenue Forecasting" },
  { icon: Target, label: "Marketing Performance and Planning" },
  { icon: Truck, label: "Supply Chain Management" },
  { icon: Package, label: "Inventory and Demand Forecasting" },
  { icon: BarChart3, label: "Business Performance Analytics" },
  { icon: Brain, label: "AI Powered Decision Support" },
  { icon: Activity, label: "Scenario Planning and Risk Management" },
];

const solutions = [
  {
    title: "Financial Planning",
    desc: "Monitor budgets, financial performance, revenue and profitability with real time intelligence.",
    icon: Landmark,
  },
  {
    title: "Demand Planning",
    desc: "Understand customer demand patterns and forecast future requirements with accuracy.",
    icon: TrendingUp,
  },
  {
    title: "Sales Planning",
    desc: "Track sales performance, revenue opportunities and targets from a single connected view.",
    icon: Target,
  },
  {
    title: "Supply Chain Planning",
    desc: "Improve operational visibility and coordinate your supply chain with intelligent planning.",
    icon: Truck,
  },
  {
    title: "Inventory Intelligence",
    desc: "Monitor stock levels and identify potential shortages or excess inventory before they become problems.",
    icon: Package,
  },
  {
    title: "AI Decision Intelligence",
    desc: "Use AI powered insights to support strategic decisions at every level of your organisation.",
    icon: Brain,
  },
];

const features = [
  { icon: Brain, title: "AI Business Assistant", desc: "An intelligent assistant that understands your business context and delivers actionable insights on demand." },
  { icon: LineChart, title: "Revenue Forecasting", desc: "Predict revenue outcomes with AI models that learn from your historical performance and market signals." },
  { icon: BarChart3, title: "Intelligent Analytics", desc: "Transform raw business data into clear, visual intelligence that drives better decision making." },
  { icon: Layers, title: "Connected Dashboards", desc: "Customisable dashboards that bring every department's data together in one coherent view." },
  { icon: Activity, title: "Scenario Modelling", desc: "Compare business outcomes before committing. Model risk, opportunity and growth scenarios with confidence." },
  { icon: PieChart, title: "Automated Reporting", desc: "Eliminate manual reporting. Scheduled, automated reports delivered to the right people at the right time." },
];

const industries = [
  { icon: ShoppingCart, label: "Retail and eCommerce" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Landmark, label: "Financial Services" },
  { icon: Package, label: "Consumer Goods" },
  { icon: Cpu, label: "Technology and SaaS" },
  { icon: Truck, label: "Logistics and Distribution" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Radio, label: "Telecommunications" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2D7EFF]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#0ECFCF]/4 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#2ECC71]" />
              <span className="text-[#BDBDBD] text-xs font-inter tracking-wide">AI Powered Business Intelligence Platform</span>
            </div>
            <h1 className="font-manrope font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
              Business Intelligence.<br />
              Smarter Planning.<br />
              <span className="text-gradient-blue">Better Decisions.</span>
            </h1>
            <p className="text-[#BDBDBD] text-lg sm:text-xl font-inter leading-relaxed max-w-2xl mx-auto mb-10">
              PLAN9 AI connects your business data, planning and intelligence into one powerful platform. Make confident decisions, anticipate opportunities and turn business insights into measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/platform"
                className="bg-[#2D7EFF] text-white font-manrope font-semibold text-base px-8 py-4 rounded-lg hover:bg-[#1A6AE8] transition-colors inline-flex items-center justify-center gap-2"
              >
                Explore the Platform
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/signup"
                className="bg-[#1C1C1C] text-white font-manrope font-semibold text-base px-8 py-4 rounded-lg hover:bg-[#2A2A2A] transition-colors border border-[#2A2A2A] inline-flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="mt-20 relative">
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl overflow-hidden card-glow">
              <div className="bg-[#1C1C1C] border-b border-[#2A2A2A] px-6 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F5F]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBE2E]" />
                <div className="w-3 h-3 rounded-full bg-[#2ECC71]" />
                <span className="ml-4 text-[#777777] text-xs font-inter">PLAN9 AI — Business Intelligence Dashboard</span>
              </div>
              <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Revenue YTD", value: "$4.2M", change: "+12.4%", color: "#2ECC71" },
                  { label: "Forecast Accuracy", value: "94.7%", change: "+2.1%", color: "#2D7EFF" },
                  { label: "Cost Efficiency", value: "87.3%", change: "+5.6%", color: "#0ECFCF" },
                  { label: "AI Decisions", value: "1,284", change: "This month", color: "#A78BFA" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-4">
                    <p className="text-[#777777] text-xs font-inter mb-2">{kpi.label}</p>
                    <p className="text-white font-manrope font-bold text-2xl mb-1">{kpi.value}</p>
                    <p className="text-xs font-inter" style={{ color: kpi.color }}>{kpi.change}</p>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-4">
                  <p className="text-[#BDBDBD] text-sm font-manrope font-semibold mb-4">Revenue Forecast vs Actual</p>
                  <div className="flex items-end gap-1 h-24">
                    {[65, 72, 68, 80, 75, 88, 92, 86, 94, 90, 96, 100].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col gap-0.5">
                        <div
                          className="rounded-sm"
                          style={{ height: `${h * 0.9}%`, background: i < 9 ? '#2D7EFF' : '#0ECFCF', opacity: i < 9 ? 0.9 : 0.6 }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-xs text-[#777777]"><span className="w-3 h-1.5 rounded bg-[#2D7EFF] block" />Actual</span>
                    <span className="flex items-center gap-1.5 text-xs text-[#777777]"><span className="w-3 h-1.5 rounded bg-[#0ECFCF] block" />Forecast</span>
                  </div>
                </div>
                <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl p-4">
                  <p className="text-[#BDBDBD] text-sm font-manrope font-semibold mb-4">AI Insights</p>
                  <div className="space-y-3">
                    {[
                      { text: "Q4 demand up 18% in Northeast region", color: "#2ECC71" },
                      { text: "Supply chain delay risk: 3 SKUs flagged", color: "#FFBE2E" },
                      { text: "Marketing ROI exceeds target by 2.3x", color: "#2D7EFF" },
                    ].map((insight) => (
                      <div key={insight.text} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: insight.color }} />
                        <p className="text-[#BDBDBD] text-xs font-inter leading-relaxed">{insight.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business intelligence section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-[#050505] leading-tight mb-6">
                One connected platform for every business decision
              </h2>
              <p className="text-[#555555] font-inter text-lg leading-relaxed mb-8">
                Most businesses operate with fragmented tools, disconnected data and manual reporting processes that slow decision making. PLAN9 AI brings your financial, operational and commercial intelligence together in one platform so your teams can act with confidence.
              </p>
              <div className="space-y-4">
                {[
                  "Replace spreadsheets with real time intelligence",
                  "Connect data from every department in one platform",
                  "Move from reactive reporting to proactive planning",
                  "Forecast with AI instead of guessing with historical data",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#2D7EFF] flex-shrink-0 mt-0.5" />
                    <p className="text-[#333333] font-inter text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/platform"
                  className="bg-[#050505] text-white font-manrope font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-[#1C1C1C] transition-colors inline-flex items-center gap-2"
                >
                  Explore the Platform
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map(({ icon: Icon, label }) => (
                <div key={label} className="bg-[#F8F8F8] border border-[#EBEBEB] rounded-xl p-5">
                  <div className="w-9 h-9 rounded-lg bg-[#EBF3FF] flex items-center justify-center mb-3">
                    <Icon size={18} className="text-[#2D7EFF]" />
                  </div>
                  <p className="text-[#111111] font-manrope font-semibold text-sm leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform overview */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
              The PLAN9 AI connected ecosystem
            </h2>
            <p className="text-[#BDBDBD] font-inter text-lg leading-relaxed">
              A single platform where every business department shares the same data, the same forecasts and the same understanding of performance.
            </p>
          </div>
          <div className="relative bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D7EFF]/5 rounded-full blur-2xl" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                {
                  title: "Data Layer",
                  desc: "Connect your existing systems, spreadsheets and data sources into a unified business intelligence foundation.",
                  items: ["ERP and CRM integration", "Spreadsheet migration", "Real time data sync"],
                  color: "#2D7EFF",
                },
                {
                  title: "Intelligence Layer",
                  desc: "AI models analyse your connected data to surface patterns, forecast outcomes and identify opportunities automatically.",
                  items: ["Predictive forecasting", "Anomaly detection", "Trend identification"],
                  color: "#0ECFCF",
                },
                {
                  title: "Decision Layer",
                  desc: "Translate intelligence into action with dashboards, reports and AI recommendations built for every role in your business.",
                  items: ["Executive dashboards", "Departmental views", "Actionable recommendations"],
                  color: "#2ECC71",
                },
              ].map((layer) => (
                <div key={layer.title} className="relative">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${layer.color}18` }}>
                    <div className="w-4 h-4 rounded" style={{ background: layer.color }} />
                  </div>
                  <h3 className="font-manrope font-bold text-white text-xl mb-3">{layer.title}</h3>
                  <p className="text-[#BDBDBD] font-inter text-sm leading-relaxed mb-5">{layer.desc}</p>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#777777] text-sm font-inter">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: layer.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
              Built for the problems that matter most
            </h2>
            <p className="text-[#BDBDBD] font-inter text-lg leading-relaxed">
              PLAN9 AI addresses the core planning and performance challenges that every growing business faces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#2D7EFF]/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#2D7EFF]/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#2D7EFF]" />
                </div>
                <h3 className="font-manrope font-bold text-white text-lg mb-3">{title}</h3>
                <p className="text-[#BDBDBD] font-inter text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-[#2D7EFF] font-manrope font-semibold text-sm hover:text-[#0ECFCF] transition-colors"
            >
              View all solutions
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-[#050505] leading-tight mb-5">
              Every capability your business needs
            </h2>
            <p className="text-[#555555] font-inter text-lg leading-relaxed">
              A complete set of tools for planning, forecasting, analytics and AI driven business intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#F8F8F8] border border-[#EBEBEB] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3FF] flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#2D7EFF]" />
                </div>
                <h3 className="font-manrope font-bold text-[#111111] text-lg mb-3">{title}</h3>
                <p className="text-[#555555] font-inter text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-[#2D7EFF] font-manrope font-semibold text-sm hover:text-[#1A6AE8] transition-colors"
            >
              See all features
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* AI intelligence section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-6">
                AI that works like a senior analyst for your entire business
              </h2>
              <p className="text-[#BDBDBD] font-inter text-lg leading-relaxed mb-8">
                PLAN9 AI continuously analyses your business data, identifies trends and delivers clear recommendations before problems become crises or opportunities pass you by.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Trend Identification", desc: "Detect performance shifts across departments before they appear in monthly reports.", color: "#2D7EFF" },
                  { title: "Predictive Forecasting", desc: "AI models forecast revenue, demand and risk using real time data, not static assumptions.", color: "#0ECFCF" },
                  { title: "Decision Confidence", desc: "Every recommendation is backed by data, giving your leadership team the confidence to act.", color: "#2ECC71" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-1 h-12 rounded-full flex-shrink-0 mt-1" style={{ background: item.color }} />
                    <div>
                      <p className="font-manrope font-semibold text-white text-base mb-1">{item.title}</p>
                      <p className="text-[#BDBDBD] font-inter text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#2D7EFF]/15 flex items-center justify-center">
                  <Brain size={16} className="text-[#2D7EFF]" />
                </div>
                <div>
                  <p className="text-white font-manrope font-semibold text-sm">AI Intelligence Summary</p>
                  <p className="text-[#777777] font-inter text-xs">Updated in real time</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Revenue Forecast Confidence", value: 94, color: "#2ECC71" },
                  { label: "Demand Forecast Accuracy", value: 91, color: "#2D7EFF" },
                  { label: "Supply Chain Risk Score", value: 23, color: "#FFBE2E", invert: true },
                  { label: "AI Decision Coverage", value: 78, color: "#0ECFCF" },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[#BDBDBD] font-inter text-xs">{metric.label}</span>
                      <span className="font-manrope font-semibold text-sm" style={{ color: metric.color }}>{metric.value}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${metric.value}%`, background: metric.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-[#2A2A2A]">
                <p className="text-[#777777] font-inter text-xs mb-3">Latest AI insights</p>
                <div className="space-y-2">
                  {[
                    "Northeast region demand 18% above forecast",
                    "3 supplier delivery risks detected this week",
                    "Marketing channel ROI up 2.3x quarter on quarter",
                  ].map((insight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Zap size={12} className="text-[#2D7EFF] flex-shrink-0 mt-0.5" />
                      <p className="text-[#BDBDBD] font-inter text-xs leading-relaxed">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
              Built for your industry
            </h2>
            <p className="text-[#BDBDBD] font-inter text-lg leading-relaxed">
              PLAN9 AI supports businesses across a wide range of industries with tailored planning and intelligence capabilities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map(({ icon: Icon, label }) => (
              <div key={label} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 text-center hover:border-[#2D7EFF]/40 transition-colors">
                <Icon size={28} className="text-[#2D7EFF] mx-auto mb-3" />
                <p className="text-[#BDBDBD] font-manrope font-semibold text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D7EFF]/5 to-[#0ECFCF]/5" />
            </div>
            <div className="relative">
              <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
                Your next business decision starts with better intelligence.
              </h2>
              <p className="text-[#BDBDBD] font-inter text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Join businesses that have moved from disconnected data to confident, AI powered decisions. PLAN9 AI is ready to transform how your organisation plans and performs.
              </p>
              <Link
                href="/signup"
                className="bg-[#2D7EFF] text-white font-manrope font-bold text-base px-10 py-4 rounded-lg hover:bg-[#1A6AE8] transition-colors inline-flex items-center gap-2"
              >
                Get Started With PLAN9 AI
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
