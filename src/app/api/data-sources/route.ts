import { NextRequest, NextResponse } from "next/server";

// GET: list data sources for the current workspace
export async function GET() {
  // Server-side implementation requires Supabase service role key.
  // Returns empty array in demo mode.
  return NextResponse.json({ sources: [] });
}

// POST: register a new data source connection
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name } = body;

    if (!type || !name) {
      return NextResponse.json({ error: "type and name are required." }, { status: 400 });
    }

    // Credential handling:
    // Database credentials (host, port, user, password) must NEVER be stored
    // in plain text or passed to the browser. In production, use Supabase Vault
    // or an encrypted secrets store. The connection config is referenced by a
    // secure ID (config_ref) that maps to the encrypted secret server-side.
    //
    // This endpoint validates the structure and returns a pending connection ID.
    // Full implementation requires SUPABASE_SERVICE_ROLE_KEY.

    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    if (!serviceKey || !supabaseUrl) {
      return NextResponse.json({
        message: "Data source registered in demo mode. Add SUPABASE_SERVICE_ROLE_KEY to persist connections.",
        source: { id: `demo-${Date.now()}`, name, type, status: "demo" },
      });
    }

    // With service role key: insert into data_sources table
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, serviceKey);

    const { data, error } = await supabase
      .from("data_sources")
      .insert({ name, type, status: "connecting" })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ source: data });
  } catch (err) {
    console.error("Data source creation error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
