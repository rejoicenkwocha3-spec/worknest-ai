export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import {
  TrendingUp,
  TrendingDown,
  Brain,
  AlertTriangle,
  Zap,
  BarChart3,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";

const kpis = [
  { label: "Revenue YTD", value: "$4.2M", change: "+12.4%", positive: true, sub: "vs $3.7M last year" },
  { label: "Gross Margin", value: "68.3%", change: "+2.1pp", positive: true, sub: "vs 66.2% plan" },
  { label: "Operating Costs", value: "$1.4M", change: "+4.8%", positive: false, sub: "vs $1.3M budget" },
  { label: "Net Profit", value: "$890K", change: "+18.2%", positive: true, sub: "vs $753K last year" },
];

const salesPerf = [
  { region: "Northeast", attainment: 108, revenue: "$1.1M" },
  { region: "Southeast", attainment: 94, revenue: "$890K" },
  { region: "Midwest", attainment: 102, revenue: "$740K" },
  { region: "West", attainment: 87, revenue: "$610K" },
];

const aiInsights = [
  { icon: TrendingUp, text: "Northeast demand up 18% above forecast. Consider increasing Q4 inventory allocation.", color: "#2ECC71", type: "Opportunity" },
  { icon: AlertTriangle, text: "Three supplier delivery risks detected. Potential 5 day lead time extension on SKUs 1042, 1087, 2341.", color: "#FFBE2E", type: "Risk" },
  { icon: TrendingUp, text: "Marketing channel ROI exceeded target by 2.3x. Email and content channels driving strongest conversion.", color: "#2D7EFF", type: "Performance" },
  { icon: TrendingDown, text: "West region sales attainment tracking at 87%. Recommend pipeline review this week.", color: "#FF6B6B", type: "Alert" },
  { icon: Zap, text: "Inventory turnover rate improved 14% quarter on quarter. AI demand matching performing above baseline.", color: "#0ECFCF", type: "AI Update" },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userName = user?.user_metadata?.full_name?.split(" ")[0] || "there";

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-manrope font-extrabold text-2xl text-white mb-1">
            {greeting}, {userName}
          </h1>
          <p className="text-[#777777] font-inter text-sm">
            Business overview for November 2026 — Demo data shown for illustration
          </p>
        </div>
        <div className="flex items-center gap-2 text-[#777777] font-inter text-xs">
          <RefreshCw size={12} />
          <span>Updated just now</span>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5">
            <p className="text-[#777777] font-inter text-xs mb-2">{kpi.label}</p>
            <p className="font-manrope font-bold text-white text-2xl mb-1">{kpi.value}</p>
            <div className="flex items-center gap-1.5">
              {kpi.positive
                ? <TrendingUp size={12} className="text-[#2ECC71]" />
                : <TrendingDown size={12} className="text-[#FF6B6B]" />
              }
              <span className={`font-inter text-xs font-semibold ${kpi.positive ? 'text-[#2ECC71]' : 'text-[#FF6B6B]'}`}>{kpi.change}</span>
              <span className="text-[#555555] font-inter text-xs">{kpi.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue chart */}
        <div className="lg:col-span-2 bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-white font-manrope font-semibold text-sm">Revenue Performance</p>
              <p className="text-[#777777] font-inter text-xs mt-0.5">Monthly actual vs forecast</p>
            </div>
            <div className="flex gap-3">
              <span className="flex items-center gap-1.5 text-xs text-[#777777] font-inter"><span className="w-3 h-1.5 rounded bg-[#2D7EFF] block" />Actual</span>
              <span className="flex items-center gap-1.5 text-xs text-[#777777] font-inter"><span className="w-3 h-1.5 rounded bg-[#0ECFCF] block opacity-60" />Forecast</span>
            </div>
          </div>
          <div className="flex items-end gap-2 h-32">
            {[
              { a: 72, f: 70 }, { a: 68, f: 72 }, { a: 80, f: 75 }, { a: 76, f: 78 },
              { a: 88, f: 82 }, { a: 85, f: 88 }, { a: 92, f: 90 }, { a: 90, f: 92 },
              { a: 96, f: 94 }, { a: 94, f: 96 }, { a: null, f: 98 }, { a: null, f: 100 },
            ].map((m, i) => (
              <div key={i} className="flex-1 flex items-end gap-0.5">
                {m.a !== null && (
                  <div className="flex-1 rounded-t-sm bg-[#2D7EFF] opacity-90" style={{ height: `${m.a}%` }} />
                )}
                <div className="flex-1 rounded-t-sm bg-[#0ECFCF] opacity-50" style={{ height: `${m.f}%` }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m) => (
              <span key={m} className="text-[#444444] font-inter text-xs">{m}</span>
            ))}
          </div>
        </div>

        {/* Sales by region */}
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
          <p className="text-white font-manrope font-semibold text-sm mb-1">Sales Attainment</p>
          <p className="text-[#777777] font-inter text-xs mb-5">By region, vs target</p>
          <div className="space-y-5">
            {salesPerf.map((s) => {
              const color = s.attainment >= 100 ? '#2ECC71' : s.attainment >= 90 ? '#2D7EFF' : '#FFBE2E';
              return (
                <div key={s.region}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[#BDBDBD] font-inter text-sm">{s.region}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#777777] font-inter text-xs">{s.revenue}</span>
                      <span className="font-manrope font-semibold text-sm" style={{ color }}>{s.attainment}%</span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(s.attainment, 100)}%`, background: color }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-5 pt-4 border-t border-[#2A2A2A]">
            <div className="flex justify-between">
              <span className="text-[#777777] font-inter text-xs">Overall attainment</span>
              <span className="text-white font-manrope font-semibold text-sm">98.2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI insights */}
      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-[#2D7EFF]/15 flex items-center justify-center">
            <Brain size={16} className="text-[#2D7EFF]" />
          </div>
          <div>
            <p className="text-white font-manrope font-semibold text-sm">AI Intelligence Summary</p>
            <p className="text-[#777777] font-inter text-xs">5 insights identified this week</p>
          </div>
          <div className="ml-auto bg-[#2D7EFF]/10 border border-[#2D7EFF]/20 rounded-full px-3 py-1">
            <span className="text-[#2D7EFF] font-inter text-xs font-semibold">Demo data</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiInsights.map((insight, i) => {
            const Icon = insight.icon;
            return (
              <div key={i} className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={14} style={{ color: insight.color }} />
                  <span className="font-inter text-xs font-semibold" style={{ color: insight.color }}>{insight.type}</span>
                </div>
                <p className="text-[#BDBDBD] font-inter text-xs leading-relaxed">{insight.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Financial Planning", href: "/dashboard/financial", icon: BarChart3, color: "#2D7EFF" },
          { label: "AI Insights", href: "/dashboard/ai-insights", icon: Brain, color: "#0ECFCF" },
          { label: "Sales Planning", href: "/dashboard/sales", icon: TrendingUp, color: "#2ECC71" },
          { label: "Reports", href: "/dashboard/reports", icon: Zap, color: "#A78BFA" },
        ].map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 hover:border-[#2D7EFF]/40 transition-colors group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${link.color}18` }}>
                  <Icon size={16} style={{ color: link.color }} />
                </div>
                <span className="font-manrope font-semibold text-[#BDBDBD] text-sm group-hover:text-white transition-colors">{link.label}</span>
              </div>
              <ArrowUpRight size={14} className="text-[#444444] group-hover:text-[#2D7EFF] transition-colors" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
