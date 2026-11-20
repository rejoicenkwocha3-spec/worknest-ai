export const dynamic = "force-dynamic";

import { Landmark, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

const budgetLines = [
  { name: "Total Revenue", budget: "$4.8M", actual: "$4.2M", variance: "-12.5%", status: "behind" },
  { name: "Cost of Goods Sold", budget: "$1.4M", actual: "$1.3M", variance: "+7.1%", status: "ahead" },
  { name: "Gross Profit", budget: "$3.4M", actual: "$2.9M", variance: "-14.7%", status: "behind" },
  { name: "Operating Expenses", budget: "$1.6M", actual: "$1.4M", variance: "+12.5%", status: "ahead" },
  { name: "EBITDA", budget: "$1.8M", actual: "$1.5M", variance: "-16.7%", status: "behind" },
];

const kpis = [
  { label: "Gross Margin", value: "68.3%", target: "70.8%", positive: false },
  { label: "EBITDA Margin", value: "35.7%", target: "37.5%", positive: false },
  { label: "Revenue Growth YoY", value: "12.4%", target: "10.0%", positive: true },
  { label: "Cost Growth YoY", value: "4.8%", target: "6.0%", positive: true },
];

export default function FinancialPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#2D7EFF]/10 flex items-center justify-center">
          <Landmark size={18} className="text-[#2D7EFF]" />
        </div>
        <div>
          <h1 className="font-manrope font-extrabold text-2xl text-white mb-1">Financial Planning</h1>
          <p className="text-[#777777] font-inter text-sm">Budget vs actual performance — Demo data shown for illustration</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5">
            <p className="text-[#777777] font-inter text-xs mb-2">{k.label}</p>
            <p className="font-manrope font-bold text-white text-xl mb-1">{k.value}</p>
            <div className="flex items-center gap-1.5">
              {k.positive ? <TrendingUp size={12} className="text-[#2ECC71]" /> : <TrendingDown size={12} className="text-[#FF6B6B]" />}
              <span className="text-[#777777] font-inter text-xs">Target: {k.target}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden">
        <div className="p-5 border-b border-[#2A2A2A]">
          <p className="text-white font-manrope font-semibold text-sm">P&L Summary: Budget vs Actual YTD</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2A2A2A]">
                <th className="text-left text-[#777777] font-inter text-xs uppercase tracking-wider px-5 py-3">Line Item</th>
                <th className="text-right text-[#777777] font-inter text-xs uppercase tracking-wider px-5 py-3">Budget</th>
                <th className="text-right text-[#777777] font-inter text-xs uppercase tracking-wider px-5 py-3">Actual</th>
                <th className="text-right text-[#777777] font-inter text-xs uppercase tracking-wider px-5 py-3">Variance</th>
                <th className="text-right text-[#777777] font-inter text-xs uppercase tracking-wider px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {budgetLines.map((line) => (
                <tr key={line.name} className="border-b border-[#2A2A2A] last:border-0">
                  <td className="px-5 py-3.5 text-[#BDBDBD] font-inter text-sm">{line.name}</td>
                  <td className="px-5 py-3.5 text-right text-[#777777] font-inter text-sm">{line.budget}</td>
                  <td className="px-5 py-3.5 text-right text-white font-manrope font-semibold text-sm">{line.actual}</td>
                  <td className={`px-5 py-3.5 text-right font-manrope font-semibold text-sm ${line.status === 'ahead' ? 'text-[#2ECC71]' : 'text-[#FF6B6B]'}`}>{line.variance}</td>
                  <td className="px-5 py-3.5 text-right">
                    <span className={`inline-flex items-center gap-1 text-xs font-inter px-2 py-1 rounded-full ${line.status === 'ahead' ? 'bg-[#2ECC71]/10 text-[#2ECC71]' : 'bg-[#FF6B6B]/10 text-[#FF6B6B]'}`}>
                      {line.status === 'ahead' ? 'Favourable' : 'Unfavourable'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle size={15} className="text-[#2D7EFF]" />
          <p className="text-white font-manrope font-semibold text-sm">AI Financial Intelligence</p>
        </div>
        <p className="text-[#BDBDBD] font-inter text-sm leading-relaxed">
          Revenue is tracking 12.5% below full year budget but gross margin improvement and cost management mean EBITDA shortfall is contained at 16.7%. AI models project year end revenue of $5.1M if Q4 demand forecasts are accurate, which would recover approximately 60% of the current shortfall versus budget.
        </p>
      </div>
    </div>
  );
}
