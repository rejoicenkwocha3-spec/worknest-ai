import { Bookmark } from "lucide-react";
import Link from "next/link";

const insights = [
  { text: "Revenue is 12.4% above last month, driven primarily by a 23% increase in Enterprise plan upgrades.", saved: "Nov 20, 2026", source: "Sales DB" },
  { text: "Customer churn rate dropped to 1.8% this month. The retention campaign from October appears to be effective.", saved: "Nov 18, 2026", source: "CRM" },
  { text: "The Professional plan has the highest upgrade rate at 34% from Starter in Q3 2026.", saved: "Nov 10, 2026", source: "Billing DB" },
];

export default function SavedInsightsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-space font-bold text-2xl text-white mb-1">Saved Insights</h1>
        <p className="font-inter text-[#A7B2CC] text-sm">Important findings saved from your AI analyst conversations.</p>
      </div>

      {insights.length === 0 ? (
        <div className="bg-[#0B1035] border border-dashed border-[rgba(0,212,255,0.3)] rounded-2xl p-16 text-center">
          <Bookmark size={48} className="text-[#087BFF]/40 mx-auto mb-4" />
          <h2 className="font-space font-semibold text-white text-lg mb-2">No saved insights yet</h2>
          <p className="font-inter text-[#A7B2CC] text-sm mb-6">When you find an important insight in the AI Analyst, save it here for quick reference.</p>
          <Link href="/dashboard/ai-analyst" className="inline-flex items-center gap-2 bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold text-sm px-6 py-3 rounded-lg transition-colors">
            Go to AI Analyst
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {insights.map((ins, i) => (
            <div key={i} className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-5 hover:border-[rgba(0,212,255,0.3)] transition-colors">
              <div className="flex items-start gap-3">
                <Bookmark size={15} className="text-[#00D4FF] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-inter text-white text-sm leading-relaxed mb-2">{ins.text}</p>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[#A7B2CC]/60 text-[10px]">Saved {ins.saved}</span>
                    <span className="font-mono text-[#A7B2CC]/60 text-[10px]">Source: {ins.source}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
