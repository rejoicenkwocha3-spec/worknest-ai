import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, AlertCircle } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    checkoutUrl: "https://selar.com/47plan?currency=USD",
    color: "text-[#00E5FF]",
    border: "border-[#292929]",
    buttonBg: "border border-[#292929] text-white hover:border-[#00E5FF]/40",
    popular: false,
    description: "Essential security monitoring for growing teams.",
    features: [
      "Email Security monitoring",
      "Suspicious login detection",
      "Up to 25 monitored users",
      "Security alerts and notifications",
      "Basic security dashboard",
      "Email support",
    ],
    note: "Plan details to be confirmed with provider.",
  },
  {
    id: "professional",
    name: "Professional",
    checkoutUrl: "https://selar.com/57plan?currency=USD",
    color: "text-[#D7FF00]",
    border: "border-[#D7FF00]/40",
    buttonBg: "bg-[#D7FF00] text-black hover:bg-[#c8f000]",
    popular: true,
    description: "Full platform coverage for professional security teams.",
    features: [
      "Everything in Starter",
      "Identity Security module",
      "AI Security monitoring",
      "Threat Intelligence",
      "Up to 100 monitored users",
      "Incident management",
      "Automated response workflows",
      "Security analytics dashboard",
      "Priority support",
    ],
    note: "Plan details to be confirmed with provider.",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    checkoutUrl: "https://selar.com/97plan?currency=USD",
    color: "text-[#FF36A6]",
    border: "border-[#292929]",
    buttonBg: "border border-[#292929] text-white hover:border-[#FF36A6]/40",
    popular: false,
    description: "Complete enterprise cybersecurity operations.",
    features: [
      "Everything in Professional",
      "Unlimited monitored users",
      "Advanced AI behavioral analysis",
      "Custom integration support",
      "Security reporting suite",
      "Team management and roles",
      "Dedicated onboarding",
      "Enterprise SLA",
      "API access",
    ],
    note: "Plan details to be confirmed with provider.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 grid-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D7FF00]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#D7FF00] font-inter font-medium text-sm uppercase tracking-widest mb-4">Pricing</p>
          <h1 className="font-sora font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
            Enterprise Security at Every Scale
          </h1>
          <p className="font-inter text-[#929292] text-xl leading-relaxed max-w-2xl mx-auto">
            Three plans designed to meet the security needs of growing teams, mid-market companies and large enterprises.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-start gap-3 bg-[#111111] border border-[#D7FF00]/20 rounded-xl p-4">
          <AlertCircle size={18} className="text-[#D7FF00] flex-shrink-0 mt-0.5" />
          <p className="text-[#929292] text-sm font-inter">
            Pricing details including plan names, billing intervals and exact features are sourced from the Selar checkout pages. Please verify current pricing on the checkout page before subscribing. Plan information marked with an asterisk is pending confirmation.
          </p>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl border ${plan.border} bg-[#111111] p-8 relative ${plan.popular ? "ring-1 ring-[#D7FF00]/30" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#D7FF00] text-black text-xs font-sora font-bold px-4 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <div className="mb-6">
                  <p className={`font-sora font-semibold text-sm uppercase tracking-widest mb-2 ${plan.color}`}>{plan.name}</p>
                  <div className="mb-3">
                    <span className="text-[#929292] text-sm font-inter">See checkout for pricing*</span>
                  </div>
                  <p className="font-inter text-[#929292] text-sm leading-relaxed">{plan.description}</p>
                </div>

                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full font-sora font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 mb-8 ${plan.buttonBg}`}
                >
                  Subscribe <ArrowRight size={16} />
                </a>

                <div className="space-y-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle size={15} className={`${plan.color} flex-shrink-0 mt-0.5`} />
                      <span className="font-inter text-[#F5F5F0] text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[#929292] text-xs font-inter border-t border-[#292929] pt-4">
                  *{plan.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sora font-bold text-3xl text-white mb-4">Need a Custom Arrangement?</h2>
          <p className="font-inter text-[#929292] text-lg mb-8">
            For organizations with specific requirements, volume needs or enterprise security programs, contact us directly.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 border border-[#292929] text-white font-sora font-semibold px-8 py-4 rounded-lg hover:border-[#D7FF00]/40 transition-colors">
            Contact Sales <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
