export const dynamic = "force-dynamic";

import { Brain, TrendingUp, AlertTriangle, Zap, TrendingDown, CheckCircle2 } from "lucide-react";

const insights = [
  {
    type: "Opportunity",
    icon: TrendingUp,
    color: "#2ECC71",
    title: "Northeast demand surge identified",
    desc: "AI models detect a sustained 18% demand increase in the Northeast region over the past 6 weeks. This pattern is consistent with a structural shift rather than seasonal variation. Recommend reviewing Q4 inventory allocation and sales resource deployment for this region.",
    confidence: 94,
    impact: "High",
    category: "Demand",
  },
  {
    type: "Risk",
    icon: AlertTriangle,
    color: "#FFBE2E",
    title: "Supply chain delay risk on 3 SKUs",
    desc: "Supplier lead time data indicates a potential 5 day extension on delivery of SKUs 1042, 1087 and 2341. If confirmed, this could create stockout risk for high velocity items entering peak season. Recommend proactive supplier communication and safety stock review.",
    confidence: 87,
    impact: "Medium",
    category: "Supply Chain",
  },
  {
    type: "Performance",
    icon: Zap,
    color: "#2D7EFF",
    title: "Marketing ROI exceeding expectations",
    desc: "Email and content marketing channels are generating 2.3x the revenue per spend compared to the same period last year. This outperformance is driven primarily by improved targeting and sequencing. Recommend increasing budget allocation to these channels in Q4.",
    confidence: 91,
    impact: "High",
    category: "Marketing",
  },
  {
    type: "Alert",
    icon: TrendingDown,
    color: "#FF6B6B",
    title: "West region sales attainment tracking below target",
    desc: "West region is at 87% of Q4 target with 6 weeks remaining. Current pipeline coverage suggests a final attainment of 91 to 93%. A pipeline review and potential promotional support in this region would be warranted to close the gap.",
    confidence: 83,
    impact: "Medium",
    category: "Sales",
  },
  {
    type: "Insight",
    icon: Brain,
    color: "#0ECFCF",
    title: "Inventory turnover improvement confirmed",
    desc: "AI demand matching has contributed to a 14% improvement in inventory turnover rate this quarter. Days of inventory on hand are now 22, down from 26 in Q3. The improvement is across all categories with the most significant gains in seasonal lines.",
    confidence: 96,
    impact: "Medium",
    category: "Inventory",
  },
  {
    type: "Forecast",
    icon: CheckCircle2,
    color: "#A78BFA",
    title: "Full year revenue forecast revised upward",
    desc: "Based on Q4 demand signals and pipeline data, the AI revenue forecast for full year has been revised from $5.0M to $5.1M, representing 6.3% growth above the initial forecast. This is underpinned by Northeast outperformance and strong enterprise pipeline conversion probability.",
    confidence: 88,
    impact: "High",
    category: "Finance",
  },
];

export default function AIInsightsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#2D7EFF]/10 flex items-center justify-center">
          <Brain size={18} className="text-[#2D7EFF]" />
        </div>
        <div>
          <h1 className="font-manrope font-extrabold text-2xl text-white mb-1">AI Insights</h1>
          <p className="text-[#777777] font-inter text-sm">AI generated business intelligence — Demo data shown for illustration</p>
        </div>
        <div className="ml-auto bg-[#2D7EFF]/10 border border-[#2D7EFF]/20 rounded-full px-3 py-1 self-start">
          <span className="text-[#2D7EFF] font-inter text-xs font-semibold">6 active insights</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {insights.map((insight, i) => {
          const Icon = insight.icon;
          return (
            <div key={i} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#2A2A2A]/80 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${insight.color}18` }}>
                  <Icon size={18} style={{ color: insight.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <span className="font-inter text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${insight.color}18`, color: insight.color }}>
                      {insight.type}
                    </span>
                    <span className="text-[#555555] font-inter text-xs">{insight.category}</span>
                    <span className={`font-inter text-xs px-2 py-0.5 rounded-full ${
                      insight.impact === 'High' ? 'bg-[#FF6B6B]/10 text-[#FF6B6B]' : 'bg-[#FFBE2E]/10 text-[#FFBE2E]'
                    }`}>{insight.impact} Impact</span>
                  </div>
                  <h3 className="font-manrope font-bold text-white text-base mb-2">{insight.title}</h3>
                  <p className="text-[#BDBDBD] font-inter text-sm leading-relaxed">{insight.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[#777777] font-inter text-xs mb-1">AI confidence</p>
                  <p className="font-manrope font-bold text-lg" style={{ color: insight.color }}>{insight.confidence}%</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
