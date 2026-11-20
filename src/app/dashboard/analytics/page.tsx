export const dynamic = "force-dynamic";

import { BarChart3, TrendingUp, PieChart, Activity } from "lucide-react";

const metrics = [
  { label: "Avg Revenue per Account", value: "$42,800", change: "+8.3%", positive: true },
  { label: "Customer Acquisition Cost", value: "$1,240", change: "-12.1%", positive: true },
  { label: "Sales Cycle Length", value: "24 days", change: "-3 days", positive: true },
  { label: "Win Rate", value: "38.4%", change: "+4.2pp", positive: true },
];

const channelPerf = [
  { channel: "Direct Sales", revenue: "$1.8M", share: 43, color: "#2D7EFF" },
  { channel: "Partner Network", revenue: "$1.1M", share: 26, color: "#0ECFCF" },
  { channel: "Online", revenue: "$780K", share: 19, color: "#2ECC71" },
  { channel: "Enterprise", revenue: "$520K", share: 12, color: "#A78BFA" },
];

export default function AnalyticsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="font-manrope font-extrabold text-2xl text-white mb-1">Analytics</h1>
        <p className="text-[#777777] font-inter text-sm">Business performance intelligence — Demo data shown for illustration</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5">
            <p className="text-[#777777] font-inter text-xs mb-2">{m.label}</p>
            <p className="font-manrope font-bold text-white text-xl mb-1">{m.value}</p>
            <span className={`font-inter text-xs font-semibold ${m.positive ? 'text-[#2ECC71]' : 'text-[#FF6B6B]'}`}>{m.change}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <BarChart3 size={16} className="text-[#2D7EFF]" />
            <p className="text-white font-manrope font-semibold text-sm">Revenue by Channel</p>
          </div>
          <div className="space-y-5">
            {channelPerf.map((c) => (
              <div key={c.channel}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[#BDBDBD] font-inter text-sm">{c.channel}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#777777] font-inter text-xs">{c.revenue}</span>
                    <span className="font-manrope font-semibold text-sm" style={{ color: c.color }}>{c.share}%</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${c.share * 2}%`, background: c.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Activity size={16} className="text-[#0ECFCF]" />
            <p className="text-white font-manrope font-semibold text-sm">Monthly Performance Trend</p>
          </div>
          <div className="flex items-end gap-1.5 h-36">
            {[55, 62, 58, 70, 66, 78, 74, 82, 79, 88, 85, 92].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className="w-full rounded-t-sm"
                  style={{
                    height: `${v}%`,
                    background: i === 11 ? '#0ECFCF' : '#2D7EFF',
                    opacity: 0.85
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m) => (
              <span key={m} className="text-[#444444] font-inter text-xs">{m}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <PieChart size={16} className="text-[#2ECC71]" />
          <p className="text-white font-manrope font-semibold text-sm">AI Analytics Intelligence</p>
        </div>
        <p className="text-[#777777] font-inter text-xs mb-5">Key findings from automated analysis</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Strongest growth driver", value: "Direct sales channel showing 23% YoY growth outperforming all other channels." },
            { title: "Cost efficiency opportunity", value: "CAC reduction of 12% achieved this quarter. Continued optimisation possible in partner channel." },
            { title: "Risk to monitor", value: "Win rate variance between regions suggests training or competitive pricing review needed in West." },
          ].map((finding) => (
            <div key={finding.title} className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg p-4">
              <p className="font-manrope font-semibold text-white text-sm mb-2">{finding.title}</p>
              <p className="text-[#BDBDBD] font-inter text-xs leading-relaxed">{finding.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
