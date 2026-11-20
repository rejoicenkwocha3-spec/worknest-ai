import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, BarChart3, ShoppingCart, Settings, Briefcase } from "lucide-react";

const solutions = [
  {
    icon: Briefcase,
    title: "For Business Owners",
    desc: "Understand exactly how your business is performing at any moment. Ask questions about revenue, customers and operations without waiting for a report from your team.",
    cases: ["Track overall business performance in one place", "Understand what is driving revenue growth or decline", "Monitor customer and operational health simultaneously", "Make faster decisions with accurate, current information"],
    cta: "Get started",
  },
  {
    icon: TrendingUp,
    title: "For Executives",
    desc: "Access the business intelligence you need to lead effectively. DataTalk AI provides clean, accurate summaries of organizational performance without requiring you to dig through raw data.",
    cases: ["Executive dashboards with the metrics that matter", "Automated briefing reports delivered on schedule", "Cross-departmental performance comparison", "Trend identification and early warning signals"],
    cta: "Get started",
  },
  {
    icon: ShoppingCart,
    title: "For Sales Teams",
    desc: "Understand your revenue, pipeline and customer behavior without waiting for a weekly sales report. Ask DataTalk AI about deal progress, forecasts and team performance in real time.",
    cases: ["Revenue performance by product, region and rep", "Pipeline analysis and forecast accuracy", "Customer acquisition and retention trends", "Top performer identification and benchmarking"],
    cta: "Get started",
  },
  {
    icon: BarChart3,
    title: "For Marketing Teams",
    desc: "Analyze campaign results, customer acquisition costs and channel performance clearly. Understand what is working, what is not and where to direct your next investment.",
    cases: ["Campaign performance analysis across channels", "Customer acquisition cost and lifetime value", "Attribution modeling and channel comparison", "Audience segmentation and behavioral insights"],
    cta: "Get started",
  },
  {
    icon: DollarSign,
    title: "For Finance Teams",
    desc: "Monitor financial performance, understand cost structures and track business metrics with accuracy. DataTalk AI provides clear answers to financial questions without manual spreadsheet work.",
    cases: ["Revenue and margin trend analysis", "Cost center performance monitoring", "Budget versus actual comparisons", "Cash flow and financial forecasting support"],
    cta: "Get started",
  },
  {
    icon: Settings,
    title: "For Operations Teams",
    desc: "Track operational performance, identify inefficiencies and monitor the health of your core business processes. DataTalk AI surfaces operational issues before they become serious problems.",
    cases: ["Process efficiency monitoring", "Operational bottleneck identification", "Resource utilization analysis", "Service level performance tracking"],
    cta: "Get started",
  },
  {
    icon: Users,
    title: "For Data Analysts",
    desc: "Accelerate your analytical work. Use DataTalk AI to explore data quickly, generate initial insights and handle repetitive analytical requests from colleagues so you can focus on deeper work.",
    cases: ["Natural language data exploration", "Automated answers to repetitive business questions", "Faster initial analysis and hypothesis testing", "Collaborative insight sharing with business teams"],
    cta: "Get started",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#070A27]">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00D4FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">Solutions</p>
          <h1 className="font-space font-bold text-5xl text-white mb-6">Built for every team in your business.</h1>
          <p className="font-inter text-[#A7B2CC] text-xl leading-relaxed">
            DataTalk AI adapts to how each part of your organization works with data. From the executive suite to the operations floor, every team gets the intelligence they need.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-6">
        {solutions.map((s) => (
          <div key={s.title} className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-2xl p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#087BFF]/20 border border-[#087BFF]/30 flex items-center justify-center mb-4">
                  <s.icon size={22} className="text-[#00D4FF]" />
                </div>
                <h2 className="font-space font-bold text-2xl text-white mb-3">{s.title}</h2>
                <p className="font-inter text-[#A7B2CC] text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="lg:col-span-2">
                <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                  {s.cases.map((c) => (
                    <li key={c} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-[#00D4FF] flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-[#A7B2CC] text-sm">{c}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/signup" className="inline-flex items-center gap-2 text-[#00D4FF] font-space font-semibold text-sm hover:gap-3 transition-all">
                  {s.cta} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="py-20 bg-[#0B1035] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-space font-bold text-3xl text-white mb-4">Not sure where to start?</h2>
          <p className="font-inter text-[#A7B2CC] mb-8">Connect your first data source and ask DataTalk AI your most important business question.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold px-8 py-4 rounded-lg transition-colors">
            Start for Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
