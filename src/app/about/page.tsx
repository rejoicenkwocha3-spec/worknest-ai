import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Brain, Target, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-manrope font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
            Built for businesses that demand better intelligence
          </h1>
          <p className="text-[#BDBDBD] font-inter text-xl leading-relaxed">
            PLAN9 AI was created to solve a problem every growing business faces: too much data, not enough intelligence, and decisions that have to be made faster than the information allows.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-manrope font-extrabold text-4xl text-[#050505] mb-6">Our mission</h2>
          <p className="text-[#333333] font-inter text-lg leading-relaxed mb-6">
            Most businesses are making critical decisions based on data that is days or weeks old, consolidated manually in spreadsheets, and interpreted without the benefit of AI analysis. The result is that leadership teams spend more time assembling information than acting on it.
          </p>
          <p className="text-[#333333] font-inter text-lg leading-relaxed mb-6">
            PLAN9 AI was built to change that. Our mission is to give every business access to the kind of intelligent, connected planning capability that was previously available only to large enterprises with dedicated business intelligence teams and expensive enterprise software contracts.
          </p>
          <p className="text-[#333333] font-inter text-lg leading-relaxed">
            One platform. Every dimension of your business. AI powered intelligence that works continuously, so your team can focus on decisions rather than data preparation.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#050505] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Intelligence First", desc: "Every feature in PLAN9 AI is designed around delivering intelligence, not just displaying data.", color: "#2D7EFF" },
              { icon: Target, title: "Outcome Focused", desc: "We measure our success by the quality of decisions our customers make, not the features they use.", color: "#0ECFCF" },
              { icon: Shield, title: "Enterprise Grade", desc: "Built to the security, reliability and performance standards that serious businesses require.", color: "#2ECC71" },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-7">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: `${color}18` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="font-manrope font-bold text-white text-xl mb-3">{title}</h3>
                <p className="text-[#BDBDBD] font-inter text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D0D0D] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope font-extrabold text-4xl text-white mb-5">
            Ready to experience PLAN9 AI?
          </h2>
          <p className="text-[#BDBDBD] font-inter text-lg mb-10">
            Join businesses that are already making smarter decisions with PLAN9 AI.
          </p>
          <Link href="/signup" className="bg-[#2D7EFF] text-white font-manrope font-semibold text-base px-8 py-4 rounded-lg hover:bg-[#1A6AE8] transition-colors inline-flex items-center gap-2">
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
