import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MessageSquare, BarChart3, Database, FileText, Lightbulb,
  ArrowRight, CheckCircle, TrendingUp, Users, ShoppingCart, DollarSign,
} from "lucide-react";

const capabilities = [
  { icon: MessageSquare, title: "Conversational Analytics", desc: "Ask questions about your business data in plain language and receive clear, accurate answers backed by your actual numbers." },
  { icon: BarChart3,     title: "Intelligent Dashboards",  desc: "Visualize the metrics that matter most. Create and arrange performance dashboards without writing a single line of code." },
  { icon: FileText,      title: "Automated Reporting",     desc: "Generate structured business reports automatically. Schedule summaries and share them with your team on a recurring basis." },
  { icon: Database,      title: "Data Integration",        desc: "Connect your existing data sources and bring everything together in one secure, organized workspace." },
  { icon: Lightbulb,     title: "AI-Powered Insights",     desc: "Let the AI surface trends, anomalies and opportunities you might otherwise miss across your connected business data." },
  { icon: TrendingUp,    title: "Business Intelligence",   desc: "Move beyond raw numbers. Understand what is driving performance, what needs attention and where your biggest opportunities are." },
];

const steps = [
  { n: "01", title: "Connect your data",           desc: "Link your databases, spreadsheets or business applications in minutes." },
  { n: "02", title: "Ask questions naturally",      desc: "Type your questions in plain language. No SQL, no formulas, no technical knowledge required." },
  { n: "03", title: "Discover insights",            desc: "Receive accurate answers, charts and summaries drawn from your actual business data." },
  { n: "04", title: "Make better decisions",        desc: "Act with confidence, knowing your decisions are grounded in real, current information." },
];

const aiQuestions = [
  { q: "What were our total sales this month?",                  a: "Total sales for November 2026 reached $284,500. This is a 12.4% increase compared to October, driven primarily by strong performance in the Enterprise segment." },
  { q: "Which products performed best last quarter?",            a: "DataTalk Pro led all products at $142,300 in Q3 revenue, followed by DataTalk Starter at $89,100. The two together accounted for 81% of quarterly revenue." },
];

const useCases = [
  { icon: TrendingUp,    title: "Sales Analytics",       desc: "Understand revenue trends, pipeline health and team performance without waiting for a weekly report." },
  { icon: Users,         title: "Marketing Analytics",   desc: "Measure campaign performance, track acquisition costs and understand which channels drive the most growth." },
  { icon: DollarSign,    title: "Financial Intelligence", desc: "Monitor revenue, expenses and margins with clarity. Spot financial changes early and understand their causes." },
  { icon: BarChart3,     title: "Operations Analytics",  desc: "Track operational metrics, identify bottlenecks and monitor the efficiency of your core business processes." },
  { icon: ShoppingCart,  title: "Customer Analytics",    desc: "Understand customer behavior, retention patterns and lifetime value across your entire customer base." },
  { icon: FileText,      title: "Executive Reporting",   desc: "Give leadership immediate access to the business intelligence they need, presented clearly and without noise." },
];

const pricingPlans = [
  {
    name: "Starter",
    sub: "For individuals and small teams beginning their data intelligence journey.",
    href: "https://selar.com/47plan?currency=USD",
    features: ["Conversational analytics", "2 data source connections", "Standard dashboards", "Basic AI insights", "5 saved reports", "Email support"],
    highlight: false,
  },
  {
    name: "Professional",
    sub: "For growing businesses that need more advanced analytics and AI capabilities.",
    href: "https://selar.com/57plan?currency=USD",
    features: ["Everything in Starter", "10 data source connections", "Advanced AI insights", "Custom dashboards", "Unlimited reports", "Team collaboration", "Priority support"],
    highlight: true,
  },
  {
    name: "Business",
    sub: "For established teams that need a comprehensive business intelligence solution.",
    href: "https://selar.com/97plan?currency=USD",
    features: ["Everything in Professional", "Unlimited data sources", "Role-based access control", "API access", "Dedicated workspace", "Custom integrations", "Dedicated support"],
    highlight: false,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#070A27]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#101A42] border border-[rgba(0,212,255,0.22)] text-[#00D4FF] text-sm font-inter px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#00D4FF] rounded-full"></span>
              AI-Powered Business Intelligence
            </div>
            <h1 className="font-space font-bold text-5xl lg:text-7xl text-white leading-tight mb-6">
              Your Data Has Answers.<br />
              <span className="text-gradient">Start Asking.</span>
            </h1>
            <p className="font-inter text-[#A7B2CC] text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Connect your business data, ask questions in plain language and uncover the insights that move your business forward. DataTalk AI turns complex information into clear, actionable intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
                Start for Free <ArrowRight size={18} />
              </Link>
              <Link href="/platform" className="bg-[#101A42] border border-[rgba(0,212,255,0.22)] text-white font-space font-semibold px-8 py-4 rounded-lg hover:border-[#00D4FF]/50 transition-colors text-center">
                Explore the Platform
              </Link>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="mt-20 rounded-2xl border border-[rgba(0,212,255,0.22)] overflow-hidden glow-cyan">
            <div className="bg-[#0B1035] px-5 py-3 flex items-center gap-2 border-b border-[rgba(0,212,255,0.14)]">
              <div className="w-3 h-3 rounded-full bg-red-400/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/70"></div>
              <span className="ml-3 text-[#A7B2CC] text-xs font-inter">DataTalk AI: Business Intelligence</span>
            </div>
            <div className="flex h-[380px] lg:h-[460px] bg-[#070A27]">
              {/* Sidebar */}
              <div className="w-52 bg-[#0B1035] border-r border-[rgba(0,212,255,0.14)] p-4 hidden sm:block">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 bg-[#087BFF] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold font-mono">D</span>
                  </div>
                  <span className="font-space font-semibold text-white text-sm">Acme Corp</span>
                </div>
                {["Overview", "AI Analyst", "Data Sources", "Dashboards", "Reports", "Saved Insights", "Settings"].map((item, i) => (
                  <div key={item} className={`px-3 py-2 rounded-lg text-xs font-inter mb-0.5 cursor-default ${i === 1 ? "bg-[#087BFF]/20 text-[#00D4FF]" : "text-[#A7B2CC] hover:bg-[#101A42]"}`}>
                    {item}
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="flex-1 p-5 overflow-hidden">
                <div className="mb-5">
                  <p className="text-[#A7B2CC] text-xs font-inter mb-1">AI Analyst</p>
                  <h3 className="font-space font-semibold text-white">Ask your data anything</h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="bg-[#101A42] border border-[rgba(0,212,255,0.14)] rounded-xl p-3.5">
                    <p className="text-xs font-inter text-[#A7B2CC]">What were total sales this month?</p>
                  </div>
                  <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-xl p-3.5">
                    <p className="text-xs font-inter text-[#00D4FF] mb-2">Total sales for November 2026: <span className="font-mono font-semibold text-white">$284,500</span></p>
                    <div className="flex gap-1 items-end h-10">
                      {[40, 55, 35, 70, 60, 85, 90].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `rgba(0,212,255,${0.3 + h/200})` }}></div>
                      ))}
                    </div>
                    <p className="text-[10px] font-inter text-[#A7B2CC] mt-1.5">12.4% increase vs. October. Source: Sales DB</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-[#101A42] border border-[rgba(0,212,255,0.22)] rounded-xl px-4 py-3">
                  <input readOnly className="flex-1 bg-transparent text-[#A7B2CC] text-xs font-inter outline-none" placeholder="Ask anything about your business data..." />
                  <div className="w-6 h-6 rounded-lg bg-[#087BFF] flex items-center justify-center">
                    <ArrowRight size={12} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Metrics panel */}
              <div className="w-56 border-l border-[rgba(0,212,255,0.14)] bg-[#0B1035] p-4 hidden lg:block">
                <p className="text-[#A7B2CC] text-xs font-inter mb-4">Business Overview</p>
                {[
                  { label: "Total Revenue",    val: "$284.5K", change: "+12.4%", up: true },
                  { label: "Active Customers", val: "1,842",   change: "+8.1%",  up: true },
                  { label: "Avg. Order Value", val: "$154",    change: "-2.3%",  up: false },
                  { label: "Conv. Rate",       val: "3.4%",    change: "+0.5%",  up: true },
                ].map((m) => (
                  <div key={m.label} className="bg-[#101A42] border border-[rgba(0,212,255,0.14)] rounded-xl p-3 mb-2">
                    <p className="text-[#A7B2CC] text-[10px] font-inter mb-1">{m.label}</p>
                    <p className="font-space font-semibold text-white text-sm">{m.val}</p>
                    <p className={`text-[10px] font-inter mt-0.5 ${m.up ? "text-green-400" : "text-red-400"}`}>{m.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 border-y border-[rgba(0,212,255,0.1)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#A7B2CC] font-inter text-lg">Built for teams that make data-driven decisions.</p>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#00D4FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">The Challenge</p>
              <h2 className="font-space font-bold text-4xl text-white mb-6">Business data should not be difficult to understand.</h2>
              <div className="space-y-4">
                {[
                  "Data scattered across different systems and departments",
                  "Slow reporting processes that delay critical decisions",
                  "Dependence on technical teams for simple business questions",
                  "Complex analytics that require specialist knowledge",
                  "Missed trends and opportunities buried in raw numbers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border border-red-400/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    </div>
                    <span className="font-inter text-[#A7B2CC] text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#00D4FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">The Solution</p>
              <h2 className="font-space font-bold text-4xl text-white mb-6">DataTalk AI brings your data to life.</h2>
              <div className="space-y-4">
                {[
                  "One platform that connects all your business data sources",
                  "Ask questions in plain language and get instant answers",
                  "AI surfaces trends, anomalies and opportunities automatically",
                  "Automated reports delivered to your team on schedule",
                  "Decisions grounded in accurate, real-time business data",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#00D4FF] flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[#A7B2CC] text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24 bg-[#0B1035] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#00D4FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">Platform</p>
            <h2 className="font-space font-bold text-4xl text-white mb-6">Everything your team needs to understand your business.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="card-bg rounded-2xl p-6 hover:border-[rgba(0,212,255,0.4)] transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#087BFF]/20 border border-[#087BFF]/30 flex items-center justify-center mb-4">
                  <cap.icon size={20} className="text-[#00D4FF]" />
                </div>
                <h3 className="font-space font-semibold text-white text-base mb-2">{cap.title}</h3>
                <p className="font-inter text-[#A7B2CC] text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#00D4FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">How It Works</p>
            <h2 className="font-space font-bold text-4xl text-white mb-4">From raw data to real intelligence in four steps.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="card-bg rounded-2xl p-6">
                <p className="font-mono text-[#087BFF] text-2xl font-bold mb-4">{s.n}</p>
                <h3 className="font-space font-semibold text-white text-base mb-2">{s.title}</h3>
                <p className="font-inter text-[#A7B2CC] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 bg-[#0B1035] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#00D4FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">AI Analyst</p>
              <h2 className="font-space font-bold text-4xl text-white mb-6">Ask your business anything, in plain language.</h2>
              <p className="font-inter text-[#A7B2CC] text-lg leading-relaxed mb-8">
                DataTalk AI understands your questions, queries your connected data and returns accurate answers with charts, tables and clear explanations.
              </p>
              <Link href="/platform" className="inline-flex items-center gap-2 text-[#00D4FF] font-space font-semibold hover:gap-3 transition-all">
                See the full platform <ArrowRight size={18} />
              </Link>
            </div>

            <div className="card-bg rounded-2xl p-6 space-y-4">
              {aiQuestions.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="bg-[#070A27] border border-[rgba(0,212,255,0.14)] rounded-xl p-3.5 ml-6">
                    <p className="text-xs font-inter text-[#A7B2CC]">{item.q}</p>
                  </div>
                  <div className="bg-[#087BFF]/10 border border-[#087BFF]/30 rounded-xl p-3.5 mr-6">
                    <p className="text-xs font-inter text-white leading-relaxed">{item.a}</p>
                    <p className="text-[10px] font-mono text-[#00D4FF] mt-2">Source: Sales Database</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 bg-[#070A27] border border-[rgba(0,212,255,0.22)] rounded-xl px-4 py-3">
                <span className="flex-1 text-[#A7B2CC] text-xs font-inter">Ask a question...</span>
                <div className="w-6 h-6 rounded-lg bg-[#087BFF] flex items-center justify-center">
                  <ArrowRight size={12} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#00D4FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">Use Cases</p>
            <h2 className="font-space font-bold text-4xl text-white mb-4">Intelligence for every part of your business.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="card-bg rounded-2xl p-6 hover:border-[rgba(0,212,255,0.4)] transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#087BFF]/20 border border-[#087BFF]/30 flex items-center justify-center mb-4">
                  <uc.icon size={20} className="text-[#00D4FF]" />
                </div>
                <h3 className="font-space font-semibold text-white text-base mb-2">{uc.title}</h3>
                <p className="font-inter text-[#A7B2CC] text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-[#0B1035] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#00D4FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">Pricing</p>
            <h2 className="font-space font-bold text-4xl text-white mb-4">Simple plans for every stage of growth.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-7 flex flex-col ${plan.highlight ? "bg-[#087BFF]/20 border-2 border-[#00D4FF]/60 glow-cyan" : "card-bg"}`}>
                {plan.highlight && (
                  <div className="text-xs font-mono text-[#00D4FF] mb-3 uppercase tracking-wider">Most Popular</div>
                )}
                <h3 className="font-space font-bold text-white text-xl mb-2">{plan.name}</h3>
                <p className="font-inter text-[#A7B2CC] text-sm mb-6 leading-relaxed">{plan.sub}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle size={15} className="text-[#00D4FF] flex-shrink-0" />
                      <span className="font-inter text-[#A7B2CC] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={`block text-center font-space font-semibold py-3 rounded-lg transition-colors ${plan.highlight ? "bg-[#00D4FF] text-[#070A27] hover:bg-[#8DEBFF]" : "bg-[#101A42] border border-[rgba(0,212,255,0.22)] text-white hover:border-[#00D4FF]/50"}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-[#A7B2CC] hover:text-white font-inter text-sm transition-colors">
              View full pricing details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-6">
            Stop guessing. <span className="text-gradient">Start knowing.</span>
          </h2>
          <p className="font-inter text-[#A7B2CC] text-lg mb-10 leading-relaxed">
            Your business already has the data. DataTalk AI helps you discover what it means.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="/platform" className="card-bg border border-[rgba(0,212,255,0.22)] text-white font-space font-semibold px-8 py-4 rounded-lg hover:border-[#00D4FF]/50 transition-colors text-center">
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
