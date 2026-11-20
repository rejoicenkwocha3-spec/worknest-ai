import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    sub: "For individuals and small teams beginning their data intelligence journey.",
    href: "https://selar.com/47plan?currency=USD",
    features: [
      "Conversational analytics",
      "2 data source connections",
      "Standard dashboards",
      "Basic AI insights",
      "5 saved reports",
      "7-day conversation history",
      "Email support",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Professional",
    sub: "For growing businesses that need more advanced analytics and AI capabilities.",
    href: "https://selar.com/57plan?currency=USD",
    features: [
      "Everything in Starter",
      "10 data source connections",
      "Advanced AI insights",
      "Custom dashboards",
      "Unlimited saved reports",
      "30-day conversation history",
      "Team collaboration (up to 5 members)",
      "Priority email support",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Business",
    sub: "For established teams that need a comprehensive business intelligence solution.",
    href: "https://selar.com/97plan?currency=USD",
    features: [
      "Everything in Professional",
      "Unlimited data source connections",
      "Full AI insights suite",
      "Advanced dashboard management",
      "Unlimited conversation history",
      "Team collaboration (up to 20 members)",
      "Role-based access control",
      "API access",
      "Dedicated support",
    ],
    highlight: false,
    badge: null,
  },
];

const faqs = [
  { q: "How does the checkout process work?", a: "Clicking any plan button will take you directly to the Selar checkout page for that plan. Selar handles secure payment processing and will confirm your purchase by email." },
  { q: "What data sources can I connect?", a: "DataTalk AI supports PostgreSQL, MySQL, Supabase, Google Sheets, CSV and Excel files. Additional integrations are added regularly." },
  { q: "Is my data secure?", a: "Yes. DataTalk AI uses read-only connections to your data sources. Your credentials are stored securely server-side and are never exposed to the browser or other users." },
  { q: "Can I change plans later?", a: "Yes. You can upgrade or change your plan at any time through your account billing settings." },
  { q: "Do you offer refunds?", a: "Refund requests are handled through Selar according to their standard purchase policies. Contact support@datatalk.ai for assistance." },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#070A27]">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00D4FF] font-inter font-medium text-sm uppercase tracking-widest mb-4">Pricing</p>
          <h1 className="font-space font-bold text-5xl text-white mb-6">Simple plans for every stage of growth.</h1>
          <p className="font-inter text-[#A7B2CC] text-xl leading-relaxed">
            Choose the plan that fits your team. Every plan includes the core DataTalk AI conversational analytics platform.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-[#087BFF]/20 border-2 border-[#00D4FF]/60"
                  : "bg-[#0B1035] border border-[rgba(0,212,255,0.14)]"
              }`}
            >
              {plan.badge && (
                <div className="text-xs font-mono text-[#00D4FF] mb-3 uppercase tracking-wider">{plan.badge}</div>
              )}
              <h2 className="font-space font-bold text-white text-2xl mb-2">{plan.name}</h2>
              <p className="font-inter text-[#A7B2CC] text-sm leading-relaxed mb-6">{plan.sub}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={15} className="text-[#00D4FF] flex-shrink-0" />
                    <span className="font-inter text-[#A7B2CC] text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`block text-center font-space font-semibold py-3.5 rounded-lg transition-colors text-base ${
                  plan.highlight
                    ? "bg-[#00D4FF] text-[#070A27] hover:bg-[#8DEBFF]"
                    : "bg-[#101A42] border border-[rgba(0,212,255,0.22)] text-white hover:border-[#00D4FF]/50"
                }`}
              >
                Get {plan.name}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-2xl p-8 text-center mb-16">
          <h3 className="font-space font-semibold text-white text-xl mb-2">Need a custom enterprise solution?</h3>
          <p className="font-inter text-[#A7B2CC] text-sm mb-6">For larger organizations with specific requirements, contact us to discuss a custom arrangement.</p>
          <a href="mailto:sales@datatalk.ai" className="inline-flex items-center gap-2 text-[#00D4FF] font-space font-semibold text-sm hover:gap-3 transition-all">
            Contact sales <ArrowRight size={16} />
          </a>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="font-space font-bold text-2xl text-white mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl p-6">
                <h3 className="font-space font-semibold text-white text-sm mb-2">{faq.q}</h3>
                <p className="font-inter text-[#A7B2CC] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
