import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$47",
    period: "USD",
    tagline: "Intelligent planning for growing businesses",
    highlight: false,
    cta: "Get Started",
    href: "https://selar.com/47plan?currency=USD",
    color: "#2D7EFF",
    features: [
      "PLAN9 AI business intelligence platform",
      "Connected business data foundation",
      "AI powered analytics and insights",
      "Revenue and demand forecasting",
      "Business performance dashboards",
      "Automated reporting tools",
      "Scenario planning capabilities",
      "Standard user management",
    ],
  },
  {
    name: "Professional",
    price: "$57",
    period: "USD",
    tagline: "Advanced intelligence for scaling organisations",
    highlight: true,
    cta: "Get Professional",
    href: "https://selar.com/57plan?currency=USD",
    color: "#2D7EFF",
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Advanced AI decision intelligence",
      "Multi department collaboration tools",
      "Customisable dashboard environments",
      "Scenario modelling and comparison",
      "Predictive insights and early warnings",
      "Financial performance monitoring",
      "Priority platform support",
    ],
  },
  {
    name: "Enterprise",
    price: "$97",
    period: "USD",
    tagline: "Full platform power for complex enterprises",
    highlight: false,
    cta: "Get Enterprise",
    href: "https://selar.com/97plan?currency=USD",
    color: "#0ECFCF",
    features: [
      "Everything in Professional",
      "Full AI business assistant access",
      "Enterprise grade security controls",
      "Role based access and audit trails",
      "Advanced scenario planning tools",
      "Custom reporting templates",
      "API access and integrations",
      "Dedicated onboarding support",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full px-4 py-1.5 mb-8">
            <Zap size={12} className="text-[#2D7EFF]" />
            <span className="text-[#BDBDBD] text-xs font-inter">Simple, transparent pricing</span>
          </div>
          <h1 className="font-manrope font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
            Pricing built for business outcomes
          </h1>
          <p className="text-[#BDBDBD] font-inter text-xl leading-relaxed max-w-2xl mx-auto">
            Three plans designed around the intelligence and planning needs of different types of organisations. No hidden fees. No feature restrictions.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl overflow-hidden ${
                  plan.highlight
                    ? 'border-2 border-[#2D7EFF] bg-[#0D1A30]'
                    : 'border border-[#2A2A2A] bg-[#111111]'
                }`}
              >
                {plan.highlight && (
                  <div className="bg-[#2D7EFF] text-white text-xs font-manrope font-bold tracking-wide text-center py-2 flex items-center justify-center gap-1.5">
                    <Star size={12} fill="white" />
                    {plan.badge}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-manrope font-bold text-white text-xl mb-1">{plan.name}</h3>
                  <p className="text-[#BDBDBD] font-inter text-sm mb-6">{plan.tagline}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="font-manrope font-extrabold text-5xl text-white">{plan.price}</span>
                    <span className="text-[#777777] font-inter text-sm">{plan.period}</span>
                  </div>
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-manrope font-semibold text-sm transition-colors mb-8 ${
                      plan.highlight
                        ? 'bg-[#2D7EFF] text-white hover:bg-[#1A6AE8]'
                        : 'bg-[#1C1C1C] text-white hover:bg-[#2A2A2A] border border-[#2A2A2A]'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={15} />
                  </a>
                  <div className="border-t border-[#2A2A2A] pt-6">
                    <p className="text-[#777777] font-inter text-xs uppercase tracking-widest mb-4">What is included</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2
                            size={16}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: plan.highlight ? '#2D7EFF' : '#777777' }}
                          />
                          <span className="text-[#BDBDBD] font-inter text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 text-center">
            <p className="text-[#777777] font-inter text-sm leading-relaxed">
              All plans are processed securely through Selar. Plan features and inclusions are subject to the details confirmed on the checkout page. Exact usage terms, limits and subscription conditions are defined at the point of purchase.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-manrope font-extrabold text-4xl text-[#050505] text-center mb-12">Common questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What does the payment process look like?",
                a: "Each pricing plan is processed through Selar, a secure digital commerce platform. Clicking the plan CTA will take you to the Selar checkout where you can complete your purchase safely.",
              },
              {
                q: "Can I move between plans?",
                a: "Upgrade and plan management options are available through your account settings. Contact the PLAN9 AI team for assistance with plan changes.",
              },
              {
                q: "Is my business data secure?",
                a: "PLAN9 AI is built with enterprise grade security at every layer. Your business data is encrypted at rest and in transit, with role based access controls and full audit trail capabilities.",
              },
              {
                q: "How quickly can I get started?",
                a: "Most customers are connected and seeing initial insights within hours of completing their purchase. The platform is designed for fast onboarding with minimal technical complexity.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-[#EBEBEB] pb-6">
                <h3 className="font-manrope font-semibold text-[#111111] text-base mb-2">{item.q}</h3>
                <p className="text-[#555555] font-inter text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
