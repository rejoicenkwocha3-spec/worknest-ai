export const dynamic = "force-dynamic";
import { TrendingUp } from "lucide-react";
const categories = [
  { name: "Electronics", forecast: "12,400 units", actual: "13,200 units", accuracy: 94, trend: "up" },
  { name: "Apparel", forecast: "8,800 units", actual: "8,600 units", accuracy: 97, trend: "stable" },
  { name: "Home Goods", forecast: "6,200 units", actual: "5,900 units", accuracy: 95, trend: "down" },
  { name: "Sports", forecast: "4,500 units", actual: "4,900 units", accuracy: 92, trend: "up" },
];
export default function DemandPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#0ECFCF]/10 flex items-center justify-center"><TrendingUp size={18} className="text-[#0ECFCF]" /></div>
        <div>
          <h1 className="font-manrope font-extrabold text-2xl text-white mb-1">Demand Planning</h1>
          <p className="text-[#777777] font-inter text-sm">Demand forecasting and accuracy tracking — Demo data shown for illustration</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Overall Forecast Accuracy", value: "94.5%", change: "+2.1pp" },
          { label: "Total Forecast Volume", value: "31,900", change: "+6.8%" },
          { label: "Categories Tracked", value: "24", change: "Active" },
          { label: "AI Model Confidence", value: "91.3%", change: "High" },
        ].map((k) => (
          <div key={k.label} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5">
            <p className="text-[#777777] font-inter text-xs mb-2">{k.label}</p>
            <p className="font-manrope font-bold text-white text-xl mb-1">{k.value}</p>
            <span className="text-[#0ECFCF] font-inter text-xs font-semibold">{k.change}</span>
          </div>
        ))}
      </div>
      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden">
        <div className="p-5 border-b border-[#2A2A2A]"><p className="text-white font-manrope font-semibold text-sm">Demand Forecast vs Actual by Category</p></div>
        <div className="divide-y divide-[#2A2A2A]">
          {categories.map((cat) => (
            <div key={cat.name} className="px-5 py-4 flex items-center gap-4 flex-wrap">
              <div className="flex-1 min-w-32"><p className="text-white font-inter text-sm">{cat.name}</p></div>
              <div className="text-[#777777] font-inter text-sm min-w-28">Forecast: {cat.forecast}</div>
              <div className="text-white font-inter text-sm min-w-28">Actual: {cat.actual}</div>
              <div className="flex items-center gap-2 min-w-32">
                <div className="w-20 h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden"><div className="h-full rounded-full bg-[#0ECFCF]" style={{ width: `${cat.accuracy}%` }} /></div>
                <span className="font-manrope font-semibold text-sm text-[#0ECFCF]">{cat.accuracy}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
