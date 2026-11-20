import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$47",
    period: "per month",
    desc: "For independent professionals monitoring a small number of construction projects.",
    checkoutUrl: "https://selar.com/47plan?currency=USD",
    features: [
      "Up to 3 active projects",
      "Site photo and video uploads",
      "Basic progress tracking",
      "Issue tracking",
      "AI construction assistant",
      "2 team members",
      "PDF report export",
      "Email support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$57",
    period: "per month",
    desc: "For growing construction teams managing multiple active sites with full platform access.",
    checkoutUrl: "https://selar.com/57plan?currency=USD",
    features: [
      "Up to 10 active projects",
      "Unlimited media uploads",
      "Advanced progress tracking",
      "Full issue and defect tracking",
      "AI construction assistant",
      "Up to 10 team members",
      "Automated reports",
      "Document management",
      "Portfolio dashboard",
      "Priority email support",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "$97",
    period: "per month",
    desc: "For large construction companies and consultants managing complex project portfolios.",
    checkoutUrl: "https://selar.com/97plan?currency=USD",
    features: [
      "Unlimited active projects",
      "Unlimited media storage",
      "Full progress and milestone tracking",
      "Advanced issue management",
      "AI construction assistant",
      "Unlimited team members",
      "Custom report templates",
      "Full document management",
      "Portfolio analytics",
      "Role-based permissions",
      "Dedicated account support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
];

const faqs = [
  {
    q: "Can I change plans after signing up?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing period.",
  },
  {
    q: "Is there a free trial available?",
    a: "We offer a 14-day free trial on the Professional plan. No credit card is required to start.",
  },
  {
    q: "How is the subscription managed?",
    a: "Subscriptions are processed through Selar. After completing your checkout, you will receive confirmation and access instructions by email.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data remains accessible for 30 days after cancellation. During this period you can export all your project data, media and reports.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Annual billing options with a discount are available. Contact us at support@remotesite.io to discuss annual pricing.",
  },
];

export default function PricingPage() {
  return (
    <div style={{ background: "#F7F8FA", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #101828 0%, #1a2a4a 100%)", padding: "5rem 0 4rem" }}>
        <div className="container-rs" style={{ textAlign: "center" }}>
          <div className="badge" style={{ marginBottom: "1.25rem", display: "inline-flex", background: "rgba(0,57,255,0.2)", borderColor: "rgba(0,57,255,0.4)", color: "#7ba7ff" }}>
            Simple, Transparent Pricing
          </div>
          <h1 style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0 0 1.25rem", fontFamily: "var(--font-manrope)", fontWeight: 900, lineHeight: 1.1 }}>
            Choose the plan that fits your team
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            All plans include the core RemoteSite platform. Scale up as your project portfolio grows.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding">
        <div className="container-rs">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.highlighted ? "#101828" : "#FFFFFF",
                  border: plan.highlighted ? "2px solid #0039FF" : "1px solid #E2E6F0",
                  borderRadius: "1rem",
                  padding: "2rem",
                  boxShadow: plan.highlighted ? "0 20px 60px rgba(0,57,255,0.2)" : "0 1px 3px rgba(0,0,0,0.04)",
                  position: "relative",
                  transform: plan.highlighted ? "scale(1.02)" : "none",
                }}
              >
                {plan.highlighted && (
                  <div style={{
                    position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                    background: "#0039FF", color: "#FFFFFF",
                    fontSize: "0.75rem", fontWeight: 700,
                    padding: "0.3125rem 1rem", borderRadius: "9999px",
                    whiteSpace: "nowrap",
                  }}>
                    Most Popular
                  </div>
                )}

                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{
                    fontSize: "1.125rem", fontWeight: 700, margin: "0 0 0.375rem",
                    color: plan.highlighted ? "#FFFFFF" : "#101828",
                  }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: plan.highlighted ? "rgba(255,255,255,0.6)" : "#6B7280", margin: "0 0 1.25rem" }}>
                    {plan.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.375rem" }}>
                    <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "2.75rem", color: plan.highlighted ? "#FFFFFF" : "#101828" }}>
                      {plan.price}
                    </span>
                    <span style={{ color: plan.highlighted ? "rgba(255,255,255,0.5)" : "#9CA3AF", fontSize: "0.9375rem" }}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                    background: plan.highlighted ? "#0039FF" : "transparent",
                    color: plan.highlighted ? "#FFFFFF" : "#0039FF",
                    fontWeight: 700, fontSize: "0.9375rem",
                    padding: "0.8125rem 1.5rem", borderRadius: "0.5rem",
                    border: plan.highlighted ? "none" : "1.5px solid #0039FF",
                    textDecoration: "none",
                    marginBottom: "1.75rem",
                    transition: "opacity 0.15s",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  {plan.cta} <ArrowRight size={16} />
                </a>

                <div style={{ borderTop: `1px solid ${plan.highlighted ? "rgba(255,255,255,0.1)" : "#E2E6F0"}`, paddingTop: "1.5rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: plan.highlighted ? "rgba(255,255,255,0.4)" : "#9CA3AF", marginBottom: "0.875rem" }}>
                    Included in this plan
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {plan.features.map((f) => (
                      <div key={f} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                        <CheckCircle2 size={16} color={plan.highlighted ? "#7ba7ff" : "#0039FF"} style={{ flexShrink: 0, marginTop: "1px" }} />
                        <span style={{ fontSize: "0.9rem", color: plan.highlighted ? "rgba(255,255,255,0.8)" : "#252B36" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", color: "#6B7280", fontSize: "0.875rem", marginTop: "2rem" }}>
            Payments are processed securely through Selar. Subscription access is activated after payment confirmation.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="container-rs" style={{ maxWidth: "720px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", textAlign: "center", margin: "0 0 2.5rem" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #E2E6F0", paddingBottom: "1.25rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "#101828", marginBottom: "0.5rem" }}>{faq.q}</div>
                <div style={{ fontSize: "0.9375rem", color: "#6B7280", lineHeight: 1.65 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0039FF", padding: "4rem 0" }}>
        <div className="container-rs" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", margin: "0 0 1rem", fontFamily: "var(--font-manrope)" }}>
            Still have questions?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", marginBottom: "2rem" }}>
            Our team is happy to help. Contact us at support@remotesite.io
          </p>
          <Link href="/signup" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#FFFFFF", color: "#0039FF", fontWeight: 700, fontSize: "1rem", padding: "0.9375rem 2rem", borderRadius: "0.5rem", textDecoration: "none" }}>
            Start Free Trial <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
