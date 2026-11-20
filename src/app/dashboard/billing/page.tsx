import Link from "next/link";
import { CreditCard, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const plans = [
  { id: "starter", name: "Starter", href: "https://selar.com/47plan?currency=USD", color: "text-[#00E5FF]", border: "border-[#292929]" },
  { id: "professional", name: "Professional", href: "https://selar.com/57plan?currency=USD", color: "text-[#D7FF00]", border: "border-[#D7FF00]/30", popular: true },
  { id: "enterprise", name: "Enterprise", href: "https://selar.com/97plan?currency=USD", color: "text-[#FF36A6]", border: "border-[#292929]" },
];

export default function BillingPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-sora font-bold text-2xl text-white mb-1">Billing and Subscription</h1>
        <p className="text-[#929292] text-sm font-inter">Manage your subscription plan and payment history</p>
      </div>

      {/* Current plan */}
      <div className="rounded-xl border border-[#D7FF00]/20 bg-[#111111] p-6 mb-8">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[#929292] text-xs font-inter mb-1">Current Plan</p>
            <p className="font-sora font-bold text-2xl text-white mb-1">Free Trial</p>
            <p className="text-[#929292] text-sm font-inter">Upgrade to unlock full platform capabilities</p>
          </div>
          <div className="flex items-center gap-1.5 bg-[#D7FF00]/10 border border-[#D7FF00]/20 px-3 py-1.5 rounded-lg">
            <div className="w-2 h-2 bg-[#D7FF00] rounded-full" />
            <span className="text-[#D7FF00] text-xs font-inter">Active</span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 bg-[#111111] border border-[#D7FF00]/20 rounded-xl p-4 mb-8">
        <AlertCircle size={16} className="text-[#D7FF00] flex-shrink-0 mt-0.5" />
        <p className="text-[#929292] text-sm font-inter">
          Clicking Subscribe will redirect you to the Selar checkout page to complete your payment. Pricing and plan details are displayed on the checkout page. Access is granted upon verified payment completion.
        </p>
      </div>

      {/* Plan cards */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {plans.map((p) => (
          <div key={p.id} className={`rounded-xl border ${p.border} bg-[#111111] p-6 ${p.popular ? "ring-1 ring-[#D7FF00]/20" : ""} relative`}>
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#D7FF00] text-black text-xs font-sora font-bold px-3 py-0.5 rounded-full">Popular</span>
              </div>
            )}
            <p className={`font-sora font-semibold text-sm uppercase tracking-widest ${p.color} mb-4`}>{p.name}</p>
            <p className="text-[#929292] text-xs font-inter mb-5">See pricing on checkout page</p>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full inline-flex items-center justify-center gap-2 font-sora font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors ${
                p.popular ? "bg-[#D7FF00] text-black hover:bg-[#c8f000]" : "border border-[#292929] text-white hover:border-[#D7FF00]/40"
              }`}
            >
              Subscribe <ArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>

      {/* Payment history placeholder */}
      <div className="rounded-xl border border-[#292929] bg-[#111111] p-6">
        <div className="flex items-center gap-3 mb-5">
          <CreditCard size={18} className="text-[#929292]" />
          <h2 className="font-sora font-semibold text-white">Payment History</h2>
        </div>
        <div className="text-center py-8">
          <p className="text-[#929292] text-sm font-inter">No payments recorded yet.</p>
          <p className="text-[#929292] text-xs font-inter mt-1">Your payment history will appear here after subscribing.</p>
        </div>
      </div>
    </div>
  );
}
