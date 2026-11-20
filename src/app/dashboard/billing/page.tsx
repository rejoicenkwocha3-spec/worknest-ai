import { CreditCard, CheckCircle, ArrowRight } from "lucide-react";

const plans = [
  { name: "Starter",      href: "https://selar.com/47plan?currency=USD" },
  { name: "Professional", href: "https://selar.com/57plan?currency=USD" },
  { name: "Business",     href: "https://selar.com/97plan?currency=USD" },
];

export default function BillingPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-space font-bold text-2xl text-white mb-1">Billing</h1>
        <p className="font-inter text-[#A7B2CC] text-sm">Manage your subscription and billing information.</p>
      </div>

      <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-6 mb-6 max-w-xl">
        <div className="flex items-center gap-3 mb-4">
          <CreditCard size={18} className="text-[#00D4FF]" />
          <h2 className="font-space font-semibold text-white text-base">Current Plan</h2>
        </div>
        <div className="bg-[#101A42] rounded-xl p-4 mb-4">
          <p className="font-mono text-[#A7B2CC] text-xs mb-1">Active plan</p>
          <p className="font-space font-bold text-white text-lg">Free Trial</p>
          <p className="font-inter text-[#A7B2CC] text-sm mt-1">Your workspace is in trial mode. Upgrade to access the full platform.</p>
        </div>
        <p className="font-inter text-[#A7B2CC] text-sm">
          Billing is handled securely through Selar. Choose a plan below to subscribe.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mb-8">
        {plans.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className="block bg-[#0B1035] border border-[rgba(0,212,255,0.22)] rounded-xl p-5 hover:border-[#00D4FF]/50 transition-colors group"
          >
            <p className="font-space font-semibold text-white text-sm mb-2">{p.name}</p>
            <p className="font-inter text-[#A7B2CC] text-xs mb-3">View plan details and subscribe.</p>
            <span className="inline-flex items-center gap-1 text-[#00D4FF] text-xs font-inter group-hover:gap-2 transition-all">
              Subscribe <ArrowRight size={12} />
            </span>
          </a>
        ))}
      </div>

      <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-6 max-w-xl">
        <h2 className="font-space font-semibold text-white text-base mb-4">Billing Information</h2>
        <div className="space-y-3">
          {[
            { label: "Payment processor", val: "Selar" },
            { label: "Billing support",   val: "support@datatalk.ai" },
            { label: "Invoices",          val: "Available after subscription" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2 border-b border-[rgba(0,212,255,0.08)] last:border-0">
              <span className="font-inter text-[#A7B2CC] text-sm">{row.label}</span>
              <span className="font-mono text-white text-xs">{row.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
