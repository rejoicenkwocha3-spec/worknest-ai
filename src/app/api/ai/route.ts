import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { message } = await req.json();
    if (!message) return NextResponse.json({ error: "No message provided" }, { status: 400 });

    // Fetch user's project data to inform the AI
    const [{ data: projects }, { data: milestones }, { data: issues }] = await Promise.all([
      supabase.from("projects").select("name, status, completion_pct, start_date, end_date, description").eq("user_id", user.id),
      supabase.from("milestones").select("title, status, planned_date, actual_date, completion_pct, projects(name)").order("planned_date", { ascending: true }),
      supabase.from("issues").select("title, priority, status, projects(name)").order("created_at", { ascending: false }).limit(20),
    ]);

    const projectSummary = (projects || []).map((p) =>
      `- ${p.name}: ${p.status}, ${p.completion_pct}% complete${p.end_date ? `, due ${p.end_date}` : ""}`
    ).join("\n");

    const milestoneSummary = (milestones || []).slice(0, 10).map((m) => {
      const proj = (m.projects as unknown as { name: string } | null)?.name || "Unknown";
      return `- ${m.title} (${proj}): ${m.status}, ${m.completion_pct}%${m.planned_date ? `, planned ${m.planned_date}` : ""}`;
    }).join("\n");

    const issueSummary = (issues || []).slice(0, 10).map((i) => {
      const proj = (i.projects as unknown as { name: string } | null)?.name || "Unknown";
      return `- ${i.title} (${proj}): ${i.priority} priority, ${i.status}`;
    }).join("\n");

    const systemPrompt = `You are an AI construction project assistant for RemoteSite. You help construction professionals understand their project data.

You have access to the following data for this user:

PROJECTS (${(projects || []).length} total):
${projectSummary || "No projects found."}

RECENT MILESTONES:
${milestoneSummary || "No milestones found."}

RECENT ISSUES:
${issueSummary || "No issues found."}

Rules:
- Answer only based on the data provided above.
- Never fabricate project names, numbers or statistics.
- If the data is insufficient to answer, say so clearly.
- Keep responses concise, structured and professional.
- Use bullet points for lists.
- Today's date is ${new Date().toLocaleDateString()}.`;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        reply: "AI assistant is not configured yet. Please add your ANTHROPIC_API_KEY environment variable to enable AI functionality.",
      });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-5-5",
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{ role: "user", content: message }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Anthropic API error:", errorText);
      return NextResponse.json({ reply: "The AI assistant encountered an error. Please try again." });
    }

    const result = await response.json();
    const reply = result.content?.[0]?.text || "No response generated.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI route error:", error);
    return NextResponse.json({ reply: "An unexpected error occurred. Please try again." });
  }
}
