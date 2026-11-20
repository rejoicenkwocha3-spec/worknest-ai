import Link from "next/link";
import { TrendingUp, TrendingDown, Users, ShoppingCart, ArrowRight, Lightbulb, MessageSquare } from "lucide-react";

const metrics = [
  { label: "Total Revenue",    val: "$284,500",  change: "+12.4%", up: true,  icon: TrendingUp },
  { label: "Total Orders",     val: "1,842",     change: "+8.1%",  up: true,  icon: ShoppingCart },
  { label: "Active Customers", val: "934",       change: "+5.3%",  up: true,  icon: Users },
  { label: "Conversion Rate",  val: "3.4%",      change: "-0.2%",  up: false, icon: TrendingDown },
];

const recentInsights = [
  { text: "Revenue is 12.4% above last month, driven by a 23% increase in Enterprise plan upgrades.", time: "2 hours ago" },
  { text: "Customer churn rate dropped to 1.8% this month, the lowest recorded in 6 months.", time: "5 hours ago" },
  { text: "Three accounts have not logged in for 30 days and may be at risk of churning.", time: "Yesterday" },
];

const recentConversations = [
  { q: "What were our total sales this month?",           time: "1h ago" },
  { q: "Which products performed best last quarter?",     time: "3h ago" },
  { q: "Compare revenue across the last three months",    time: "Yesterday" },
];

export default function DashboardOverviewPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-[#087BFF]/20 border border-[#087BFF]/30 text-[#00D4FF] text-xs font-mono px-3 py-1.5 rounded-full mb-3">
          Demo Workspace: Showing sample data
        </div>
        <h1 className="font-space font-bold text-2xl text-white">Good morning.</h1>
        <p className="font-inter text-[#A7B2CC] text-sm mt-1">Here is a summary of your business performance.</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((m) => (
          <div key={m.label} className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[#A7B2CC] text-xs font-inter">{m.label}</p>
              <m.icon size={16} className={m.up ? "text-green-400" : "text-red-400"} />
            </div>
            <p className="font-space font-bold text-white text-xl mb-1">{m.val}</p>
            <p className={`text-xs font-inter ${m.up ? "text-green-400" : "text-red-400"}`}>{m.change} vs last month</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart placeholder */}
        <div className="lg:col-span-2 bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-space font-semibold text-white text-sm">Revenue: Last 7 Months</h2>
            <span className="text-[#A7B2CC] text-xs font-mono">Demo data</span>
          </div>
          <div className="flex items-end gap-2 h-32">
            {[62, 48, 71, 55, 83, 90, 100].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm transition-all" style={{ height: `${h}%`, background: `rgba(0,212,255,${0.2 + h / 200})`, borderTop: "1px solid rgba(0,212,255,0.4)" }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map((m) => (
              <span key={m} className="text-[#A7B2CC] text-[10px] font-mono flex-1 text-center">{m}</span>
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb size={16} className="text-[#00D4FF]" />
            <h2 className="font-space font-semibold text-white text-sm">AI Insights</h2>
          </div>
          <div className="space-y-3">
            {recentInsights.map((insight, i) => (
              <div key={i} className="bg-[#101A42] rounded-lg p-3">
                <p className="text-[#A7B2CC] text-xs font-inter leading-relaxed mb-1.5">{insight.text}</p>
                <p className="text-[#A7B2CC]/50 text-[10px] font-mono">{insight.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent conversations */}
      <div className="mt-6 bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MessageSquare size={16} className="text-[#00D4FF]" />
            <h2 className="font-space font-semibold text-white text-sm">Recent Conversations</h2>
          </div>
          <Link href="/dashboard/ai-analyst" className="text-[#00D4FF] text-xs font-inter hover:text-[#8DEBFF] inline-flex items-center gap-1">
            Ask a question <ArrowRight size={12} />
          </Link>
        </div>
        <div className="space-y-2">
          {recentConversations.map((c, i) => (
            <div key={i} className="flex items-center justify-between bg-[#101A42] rounded-lg px-4 py-3">
              <p className="text-[#A7B2CC] text-sm font-inter truncate">{c.q}</p>
              <span className="text-[#A7B2CC]/50 text-xs font-mono ml-4 flex-shrink-0">{c.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
