import { NextRequest, NextResponse } from "next/server";

// Selar webhook endpoint for payment verification.
// Configure this URL in your Selar seller dashboard:
//   https://your-domain.com/api/webhooks/selar
//
// Selar sends a POST with order details when a purchase is completed.
// This endpoint records the payment event and activates the subscription.

const PLAN_MAP: Record<string, string> = {
  "47plan": "starter",
  "57plan": "professional",
  "97plan": "business",
};

export async function POST(req: NextRequest) {
  try {
    const webhookSecret = process.env.SELAR_WEBHOOK_SECRET;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    // Verify webhook signature if secret is configured
    if (webhookSecret) {
      const signature = req.headers.get("x-selar-signature") ?? req.headers.get("x-webhook-signature");
      if (!signature || signature !== webhookSecret) {
        console.warn("Selar webhook: invalid signature");
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      }
    }

    const payload = await req.json();
    console.log("Selar webhook received:", JSON.stringify(payload, null, 2));

    // Identify which plan was purchased from the product ID or link
    const productId: string = payload.product_id ?? payload.productId ?? "";
    const planKey = Object.keys(PLAN_MAP).find((k) => productId.includes(k));
    const plan = planKey ? PLAN_MAP[planKey] : null;

    // Customer email from Selar payload
    const customerEmail: string = payload.buyer_email ?? payload.customer_email ?? payload.email ?? "";

    if (!plan || !customerEmail) {
      console.warn("Selar webhook: missing plan or email", { plan, customerEmail, payload });
      // Return 200 so Selar does not retry — log for manual review
      return NextResponse.json({ received: true, warning: "Could not map plan or email" });
    }

    // Store raw event (always, regardless of Supabase config)
    if (serviceKey && supabaseUrl) {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, serviceKey);

      // Record raw payment event
      await supabase.from("payment_events").insert({
        raw_payload: payload,
        source: "selar",
        processed: false,
      });

      // Look up user by email
      const { data: users } = await supabase.auth.admin.listUsers();
      const user = users?.users?.find((u) => u.email === customerEmail);

      if (user) {
        // Find or create workspace for this user
        const { data: workspace } = await supabase
          .from("workspaces")
          .select("id")
          .eq("owner_id", user.id)
          .single();

        if (workspace) {
          // Create subscription record
          await supabase.from("subscriptions").insert({
            workspace_id: workspace.id,
            plan,
            status: "active",
            selar_order_id: payload.order_id ?? payload.id ?? null,
          });

          // Update workspace plan
          await supabase
            .from("workspaces")
            .update({ plan })
            .eq("id", workspace.id);
        }
      } else {
        console.warn("Selar webhook: user not found for email", customerEmail);
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Selar webhook error:", err);
    // Return 200 to prevent retries — log the error for investigation
    return NextResponse.json({ received: true, error: "Processing error — check server logs" });
  }
}
