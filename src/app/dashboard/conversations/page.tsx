import { History, MessageSquare } from "lucide-react";
import Link from "next/link";

const conversations = [
  { title: "November sales analysis",          messages: 6, last: "2 hours ago" },
  { title: "Top product performance review",   messages: 4, last: "5 hours ago" },
  { title: "Customer churn investigation",     messages: 8, last: "Yesterday" },
  { title: "Marketing ROI breakdown",          messages: 3, last: "Nov 18" },
  { title: "Revenue comparison Q3 vs Q2",      messages: 5, last: "Nov 16" },
];

export default function ConversationsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-space font-bold text-2xl text-white mb-1">Conversations</h1>
        <p className="font-inter text-[#A7B2CC] text-sm">Your AI analyst conversation history. Conversations are saved automatically.</p>
      </div>

      {conversations.length === 0 ? (
        <div className="bg-[#0B1035] border border-dashed border-[rgba(0,212,255,0.3)] rounded-2xl p-16 text-center">
          <History size={48} className="text-[#087BFF]/40 mx-auto mb-4" />
          <h2 className="font-space font-semibold text-white text-lg mb-2">No conversations yet</h2>
          <p className="font-inter text-[#A7B2CC] text-sm mb-6">Start asking questions in the AI Analyst and your conversations will appear here.</p>
          <Link href="/dashboard/ai-analyst" className="inline-flex items-center gap-2 bg-[#087BFF] hover:bg-[#0668d6] text-white font-space font-semibold text-sm px-6 py-3 rounded-lg transition-colors">
            Start a conversation
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {conversations.map((c, i) => (
            <Link key={i} href="/dashboard/ai-analyst" className="block bg-[#0B1035] border border-[rgba(0,212,255,0.14)] rounded-xl px-5 py-4 hover:border-[rgba(0,212,255,0.3)] transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#087BFF]/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={15} className="text-[#00D4FF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-space font-semibold text-white text-sm">{c.title}</p>
                  <p className="font-inter text-[#A7B2CC] text-xs">{c.messages} messages</p>
                </div>
                <span className="text-[#A7B2CC]/60 text-xs font-mono flex-shrink-0">{c.last}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
