import Link from "next/link";
import { CreditCard, ArrowRight, CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$47/mo",
    url: "https://selar.com/47plan?currency=USD",
    features: ["Up to 3 projects", "2 team members", "AI assistant", "PDF reports"],
  },
  {
    name: "Professional",
    price: "$57/mo",
    url: "https://selar.com/57plan?currency=USD",
    features: ["Up to 10 projects", "10 team members", "Advanced AI", "Automated reports"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$97/mo",
    url: "https://selar.com/97plan?currency=USD",
    features: ["Unlimited projects", "Unlimited team", "Custom reports", "Priority support"],
  },
];

export default function BillingPage() {
  return (
    <div>
      <div style={{ marginBottom: "1.75rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101828", margin: "0 0 0.25rem" }}>Billing</h1>
        <p style={{ color: "#6B7280", fontSize: "0.9375rem", margin: 0 }}>Manage your subscription and billing preferences.</p>
      </div>

      {/* Current plan info */}
      <div className="card" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ width: 44, height: 44, borderRadius: "10px", background: "#EAF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CreditCard size={22} color="#0039FF" />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "1rem", color: "#101828" }}>Subscription status</div>
          <div style={{ fontSize: "0.875rem", color: "#6B7280" }}>Payments are processed securely through Selar. Select a plan below to subscribe.</div>
        </div>
      </div>

      {/* Plans */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="card"
            style={{
              border: plan.popular ? "2px solid #0039FF" : "1px solid #E2E6F0",
              position: "relative",
            }}
          >
            {plan.popular && (
              <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#0039FF", color: "#FFFFFF", fontSize: "0.6875rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "9999px", whiteSpace: "nowrap" }}>
                Most Popular
              </div>
            )}
            <h3 style={{ fontSize: "1.125rem", fontWeight: 700, margin: "0 0 0.25rem" }}>{plan.name}</h3>
            <div style={{ fontFamily: "var(--font-manrope)", fontWeight: 900, fontSize: "2rem", color: "#0039FF", margin: "0.5rem 0 1rem" }}>{plan.price}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {plan.features.map((f) => (
                <div key={f} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <CheckCircle2 size={15} color="#10B981" />
                  <span style={{ fontSize: "0.875rem", color: "#252B36" }}>{f}</span>
                </div>
              ))}
            </div>
            <a
              href={plan.url}
              target="_blank"
              rel="noopener noreferrer"
              className={plan.popular ? "btn-primary" : "btn-secondary"}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", width: "100%", boxSizing: "border-box" }}
            >
              Subscribe <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <p style={{ fontSize: "0.875rem", color: "#9CA3AF" }}>
          Need help with billing? Contact us at{" "}
          <a href="mailto:support@remotesite.io" style={{ color: "#0039FF" }}>support@remotesite.io</a>
        </p>
      </div>
    </div>
  );
}
