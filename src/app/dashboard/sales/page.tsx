export const dynamic = "force-dynamic";
import { Target, TrendingUp } from "lucide-react";
const reps = [
  { name: "Alex Thompson", region: "Northeast", quota: "$420K", attained: "$452K", pct: 108 },
  { name: "Maria Chen", region: "Southeast", quota: "$390K", attained: "$367K", pct: 94 },
  { name: "James Wilson", region: "Midwest", quota: "$360K", attained: "$367K", pct: 102 },
  { name: "Sarah Davis", region: "West", quota: "$380K", attained: "$331K", pct: 87 },
];
export default function SalesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#2ECC71]/10 flex items-center justify-center"><Target size={18} className="text-[#2ECC71]" /></div>
        <div>
          <h1 className="font-manrope font-extrabold text-2xl text-white mb-1">Sales Planning</h1>
          <p className="text-[#777777] font-inter text-sm">Sales performance and revenue tracking — Demo data shown for illustration</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue QTD", value: "$1.52M", change: "+8.4%" },
          { label: "Overall Attainment", value: "98.2%", change: "+3.1pp" },
          { label: "Active Pipeline", value: "$3.8M", change: "+12.7%" },
          { label: "Deals Closed", value: "84", change: "+9 vs Q3" },
        ].map((k) => (
          <div key={k.label} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5">
            <p className="text-[#777777] font-inter text-xs mb-2">{k.label}</p>
            <p className="font-manrope font-bold text-white text-xl mb-1">{k.value}</p>
            <span className="text-[#2ECC71] font-inter text-xs font-semibold">{k.change}</span>
          </div>
        ))}
      </div>
      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden">
        <div className="p-5 border-b border-[#2A2A2A] flex items-center gap-2">
          <TrendingUp size={15} className="text-[#2ECC71]" />
          <p className="text-white font-manrope font-semibold text-sm">Sales Team Performance</p>
        </div>
        <div className="divide-y divide-[#2A2A2A]">
          {reps.map((rep) => {
            const color = rep.pct >= 100 ? '#2ECC71' : rep.pct >= 90 ? '#2D7EFF' : '#FFBE2E';
            return (
              <div key={rep.name} className="px-5 py-4 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2D7EFF]/15 flex items-center justify-center text-[#2D7EFF] font-manrope font-bold text-sm">{rep.name[0]}</div>
                <div className="flex-1">
                  <p className="text-white font-inter text-sm">{rep.name}</p>
                  <p className="text-[#777777] font-inter text-xs">{rep.region}</p>
                </div>
                <div className="text-right">
                  <p className="font-manrope font-semibold text-white text-sm">{rep.attained}</p>
                  <p className="text-[#777777] font-inter text-xs">of {rep.quota}</p>
                </div>
                <div className="w-20">
                  <div className="flex justify-end mb-1"><span className="font-manrope font-bold text-sm" style={{ color }}>{rep.pct}%</span></div>
                  <div className="w-full h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden"><div className="h-full rounded-full" style={{ width: `${Math.min(rep.pct, 100)}%`, background: color }} /></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
