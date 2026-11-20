export const dynamic = "force-dynamic";
export default function Page() {
  const titles: Record<string, { title: string; desc: string; color: string }> = {
    "supply-chain": { title: "Supply Chain Planning", desc: "Operational visibility and supply chain performance", color: "#F59E0B" },
    inventory: { title: "Inventory Intelligence", desc: "Stock position monitoring and replenishment planning", color: "#A78BFA" },
    forecasting: { title: "Forecasting", desc: "AI driven business forecasting and predictive analytics", color: "#2D7EFF" },
    scenarios: { title: "Scenario Planning", desc: "Business scenario modelling and what-if analysis", color: "#0ECFCF" },
  };
  const page = "supply-chain";
  const info = titles[page] || { title: "Dashboard", desc: "", color: "#2D7EFF" };
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="font-manrope font-extrabold text-2xl text-white mb-1">{info.title}</h1>
        <p className="text-[#777777] font-inter text-sm">{info.desc} — Demo data shown for illustration</p>
      </div>
      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-10 text-center">
        <div className="w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center" style={{ background: info.color + '18' }}>
          <div className="w-6 h-6 rounded" style={{ background: info.color }} />
        </div>
        <h2 className="font-manrope font-bold text-white text-xl mb-3">{info.title}</h2>
        <p className="text-[#BDBDBD] font-inter text-sm max-w-sm mx-auto leading-relaxed">
          This module connects to your business data once PLAN9 AI is configured for your organisation. Contact the PLAN9 AI team to set up this module.
        </p>
      </div>
    </div>
  );
}
