import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are DataTalk AI, an expert business intelligence analyst.
Your role is to help users understand their business data by answering questions clearly and accurately.

Rules:
- Only answer questions based on data provided in the user's context.
- If no data source is connected, clearly explain the limitation and guide the user to connect one.
- Never invent or fabricate business metrics, revenue figures, or statistics.
- When answering analytical questions, explain your reasoning clearly.
- Keep answers concise, professional and actionable.
- Format numbers clearly (e.g. $284,500 not 284500).
- If a question is ambiguous, ask for clarification.
- Always cite the data source when providing an answer.`;

export async function POST(req: NextRequest) {
  try {
    const { messages, dataContext } = await req.json() as {
      messages: Message[];
      dataContext?: string;
    };

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request: messages array required." }, { status: 400 });
    }

    const openaiKey = process.env.OPENAI_API_KEY;
    const anthropicKey = process.env.ANTHROPIC_API_KEY;

    if (!openaiKey && !anthropicKey) {
      return NextResponse.json({
        role: "assistant",
        content: "The AI provider is not configured. Add OPENAI_API_KEY or ANTHROPIC_API_KEY to your environment variables to enable the AI Analyst.",
        source: "Configuration missing",
      });
    }

    const systemMessages: Message[] = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    if (dataContext) {
      systemMessages.push({
        role: "system",
        content: `Connected data context:\n${dataContext}`,
      });
    } else {
      systemMessages.push({
        role: "system",
        content: "No data source is currently connected to this workspace. When users ask analytical questions, let them know they need to connect a data source first.",
      });
    }

    if (openaiKey) {
      return await callOpenAI(openaiKey, systemMessages, messages);
    } else {
      return await callAnthropic(anthropicKey!, systemMessages, messages);
    }
  } catch (err) {
    console.error("AI chat error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

async function callOpenAI(apiKey: string, systemMessages: Message[], messages: Message[]) {
  const model = process.env.AI_MODEL || "gpt-4o";

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [...systemMessages, ...messages],
      max_tokens: 1000,
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("OpenAI error:", err);
    return NextResponse.json({ error: "AI provider returned an error. Check your API key and quota." }, { status: 502 });
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content ?? "No response received.";

  return NextResponse.json({
    role: "assistant",
    content,
    source: "AI Analyst (OpenAI)",
  });
}

async function callAnthropic(apiKey: string, systemMessages: Message[], messages: Message[]) {
  const model = process.env.AI_MODEL || "claude-haiku-5-5";

  const systemContent = systemMessages.map((m) => m.content).join("\n\n");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      system: systemContent,
      messages: messages.map((m) => ({ role: m.role === "system" ? "user" : m.role, content: m.content })),
      max_tokens: 1000,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Anthropic error:", err);
    return NextResponse.json({ error: "AI provider returned an error. Check your API key and quota." }, { status: 502 });
  }

  const data = await res.json();
  const content = data.content?.[0]?.text ?? "No response received.";

  return NextResponse.json({
    role: "assistant",
    content,
    source: "AI Analyst (Anthropic)",
  });
}
