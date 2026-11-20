import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Landmark,
  TrendingUp,
  Target,
  Truck,
  Package,
  BarChart3,
  Activity,
  Brain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    id: "financial-planning",
    icon: Landmark,
    title: "Financial Planning",
    tagline: "Complete visibility over your financial performance",
    desc: "PLAN9 AI gives finance teams a connected, real time view of budgets, revenue, costs and profitability. Replace manual spreadsheet consolidation with an intelligent planning environment that updates automatically and identifies financial risks before they escalate.",
    benefits: [
      "Consolidated budget vs actual reporting across the entire organisation",
      "Real time revenue and margin tracking by product, region or channel",
      "Automated variance analysis with AI generated explanations",
      "Rolling forecast models that update as new data arrives",
      "Profitability analysis at the transaction and portfolio level",
    ],
    color: "#2D7EFF",
  },
  {
    id: "demand-planning",
    icon: TrendingUp,
    title: "Demand Planning",
    tagline: "Understand customer demand before it happens",
    desc: "Accurate demand forecasting is the foundation of a well run business. PLAN9 AI analyses historical sales data, seasonal patterns, market signals and external factors to generate demand forecasts that your supply chain and commercial teams can trust and act on.",
    benefits: [
      "AI driven demand forecasting across product categories and regions",
      "Seasonal adjustment and trend decomposition",
      "New product introduction planning and baseline modelling",
      "Demand signal integration from sales, marketing and market data",
      "Forecast accuracy tracking and continuous model improvement",
    ],
    color: "#0ECFCF",
  },
  {
    id: "sales-planning",
    icon: Target,
    title: "Sales Planning",
    tagline: "Track performance and drive revenue growth",
    desc: "PLAN9 AI gives sales leaders a comprehensive view of pipeline health, territory performance and revenue attainment. AI models surface at risk accounts, identify growth opportunities and forecast revenue with accuracy that improves as more data flows through the platform.",
    benefits: [
      "Pipeline health monitoring and win rate analysis",
      "Territory and quota management with performance tracking",
      "AI powered revenue forecast by product, region and account",
      "Sales velocity and conversion trend analysis",
      "CRM data integration and enrichment",
    ],
    color: "#2ECC71",
  },
  {
    id: "supply-chain-planning",
    icon: Truck,
    title: "Supply Chain Planning",
    tagline: "Operational visibility from supplier to customer",
    desc: "Supply chain complexity can slow down even the most capable organisations. PLAN9 AI provides end to end operational visibility, identifies bottlenecks and delivery risks and helps your procurement and logistics teams stay ahead of disruption.",
    benefits: [
      "Supplier performance monitoring and risk scoring",
      "Lead time analysis and delivery reliability tracking",
      "Procurement planning aligned to demand forecasts",
      "Logistics and fulfilment performance analytics",
      "Cost to serve analysis across the supply chain",
    ],
    color: "#F59E0B",
  },
  {
    id: "inventory-intelligence",
    icon: Package,
    title: "Inventory Intelligence",
    tagline: "The right stock in the right place at the right time",
    desc: "Excess inventory ties up capital. Stockouts lose sales and damage customer relationships. PLAN9 AI monitors your inventory position in real time, forecasts replenishment needs and flags anomalies before they become expensive operational problems.",
    benefits: [
      "Real time inventory position monitoring by location and SKU",
      "Automated replenishment recommendations based on demand forecasts",
      "Slow moving and excess inventory identification",
      "Safety stock optimisation models",
      "Stock turn and days on hand reporting",
    ],
    color: "#A78BFA",
  },
  {
    id: "business-performance",
    icon: BarChart3,
    title: "Business Performance",
    tagline: "One view of how your whole organisation is performing",
    desc: "PLAN9 AI consolidates KPIs from every department into a unified performance view. Executives and department heads can see the full picture and understand how individual performance connects to overall business outcomes.",
    benefits: [
      "Unified KPI dashboard across all departments and regions",
      "Customisable performance scorecards by role and function",
      "Trend analysis and momentum tracking for all key metrics",
      "Comparative performance against plan, prior period and benchmarks",
      "Automated weekly and monthly performance reporting",
    ],
    color: "#2D7EFF",
  },
  {
    id: "scenario-planning",
    icon: Activity,
    title: "Scenario Planning",
    tagline: "Make better decisions by understanding possible futures",
    desc: "Every major business decision carries uncertainty. PLAN9 AI lets your planning teams model multiple scenarios: best case, base case and downside, so leadership can enter every decision with a clear understanding of outcomes and risk.",
    benefits: [
      "Multi scenario modelling with side by side comparison",
      "Driver based scenario construction from business variables",
      "Risk quantification and probability weighted outcomes",
      "Scenario version control and collaboration",
      "Impact modelling for strategic initiatives",
    ],
    color: "#0ECFCF",
  },
  {
    id: "ai-decision-intelligence",
    icon: Brain,
    title: "AI Decision Intelligence",
    tagline: "AI powered recommendations for every critical decision",
    desc: "PLAN9 AI does not just surface data. It analyses your entire business context and delivers clear, prioritised recommendations that help your leadership team make faster, better informed decisions at every level of the organisation.",
    benefits: [
      "Prioritised action recommendations ranked by business impact",
      "Strategic opportunity identification across your business",
      "Risk alerts with contextual explanation and suggested responses",
      "Decision confidence scoring based on data quality and model accuracy",
      "Natural language summaries of complex business situations",
    ],
    color: "#2ECC71",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-4 py-1.5 mb-8">
            <BarChart3 size={12} className="text-[#2D7EFF]" />
            <span className="text-[#BDBDBD] text-xs font-inter">PLAN9 AI Solutions</span>
          </div>
          <h1 className="font-manrope font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
            Solutions built around the way your business actually works
          </h1>
          <p className="text-[#BDBDBD] font-inter text-xl leading-relaxed max-w-3xl mx-auto">
            Eight connected business planning solutions. Each designed to solve a critical operational challenge. All powered by the same AI intelligence layer.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            const isEven = i % 2 === 0;
            return (
              <div key={sol.id} className={`bg-[#111111] border border-[#2A2A2A] rounded-2xl overflow-hidden`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                  <div className={`p-8 md:p-10 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${sol.color}18` }}>
                        <Icon size={20} style={{ color: sol.color }} />
                      </div>
                      <span className="font-inter text-sm font-medium" style={{ color: sol.color }}>Solution</span>
                    </div>
                    <h2 className="font-manrope font-extrabold text-3xl text-white mb-2">{sol.title}</h2>
                    <p className="font-manrope font-semibold text-[#BDBDBD] text-base mb-4">{sol.tagline}</p>
                    <p className="text-[#BDBDBD] font-inter text-sm leading-relaxed mb-6">{sol.desc}</p>
                    <Link
                      href="/signup"
                      className="inline-flex items-center gap-2 font-manrope font-semibold text-sm transition-colors"
                      style={{ color: sol.color }}
                    >
                      Explore this solution
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                  <div className={`bg-[#0D0D0D] p-8 md:p-10 ${!isEven ? 'lg:order-1' : ''}`}>
                    <p className="text-[#777777] font-inter text-xs uppercase tracking-widest mb-5">Key capabilities</p>
                    <ul className="space-y-4">
                      {sol.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: sol.color }} />
                          <p className="text-[#BDBDBD] font-inter text-sm leading-relaxed">{benefit}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0D0D0D] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
            Start with the solution your business needs most
          </h2>
          <p className="text-[#BDBDBD] font-inter text-lg mb-10">
            All eight solutions are included in PLAN9 AI. Connect your first data source and begin planning smarter today.
          </p>
          <Link
            href="/signup"
            className="bg-[#2D7EFF] text-white font-manrope font-semibold text-base px-8 py-4 rounded-lg hover:bg-[#1A6AE8] transition-colors inline-flex items-center gap-2"
          >
            Get Started With PLAN9 AI
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
