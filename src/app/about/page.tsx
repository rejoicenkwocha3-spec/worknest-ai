import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Eye, Zap } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Protection First",
    color: "text-[#D7FF00]",
    bg: "bg-[#D7FF00]/10",
    desc: "Every decision we make at Shield Pro AI starts with one question: does this make our customers more secure? Protection is not a feature. It is the entire purpose of this platform.",
  },
  {
    icon: Eye,
    title: "Transparency in Intelligence",
    color: "text-[#00E5FF]",
    bg: "bg-[#00E5FF]/10",
    desc: "We believe security intelligence should be clear, explainable and actionable. We distinguish between AI-generated recommendations and verified detections so your team always knows what it is acting on.",
  },
  {
    icon: Zap,
    title: "Speed Through Automation",
    color: "text-[#FF36A6]",
    bg: "bg-[#FF36A6]/10",
    desc: "Modern threats move fast. Shield Pro AI is built to match that speed through machine-speed detection, automated triage and intelligent workflows that eliminate the gaps between detection and response.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 grid-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D7FF00]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#D7FF00] font-inter font-medium text-sm uppercase tracking-widest mb-4">About</p>
          <h1 className="font-sora font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
            Intelligence That Protects.<br />Security That Evolves.
          </h1>
          <p className="font-inter text-[#929292] text-xl leading-relaxed max-w-2xl mx-auto">
            Shield Pro AI was built on the belief that organizations deserve security that keeps pace with the threats they face, powered by intelligence that actually understands their environment.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#D7FF00] font-inter font-medium text-sm uppercase tracking-widest mb-4">Our Mission</p>
              <h2 className="font-sora font-bold text-4xl text-white mb-6">
                Stop Threats Before They Become Breaches
              </h2>
              <p className="font-inter text-[#929292] text-lg leading-relaxed mb-6">
                Shield Pro AI is an AI-powered enterprise cybersecurity platform that helps organizations identify, prevent, investigate and respond to modern cyber threats. We use artificial intelligence, behavioral analysis and automated threat detection to give security teams the capabilities they need.
              </p>
              <p className="font-inter text-[#929292] text-lg leading-relaxed mb-6">
                We built Shield Pro AI because the security landscape has changed. Modern attacks are automated, sophisticated and targeted. Traditional tools built on static signatures and manual processes cannot keep up. Organizations need security that adapts, learns and responds at the same speed as the threats they face.
              </p>
              <p className="font-inter text-[#929292] text-lg leading-relaxed">
                Our platform covers the attack surfaces that matter most: email communications, identity and authentication, AI environments and broader digital infrastructure. By bringing these together in one platform with unified intelligence, we give security teams the visibility and context they need to act decisively.
              </p>
            </div>
            <div className="rounded-2xl border border-[#292929] bg-[#111111] p-8 space-y-6">
              <div>
                <p className="text-[#D7FF00] text-xs font-inter uppercase tracking-widest mb-2">Vision</p>
                <p className="font-sora font-semibold text-white text-lg leading-snug">
                  A world where every organization has access to enterprise-grade security intelligence, regardless of the size of their security team.
                </p>
              </div>
              <div className="border-t border-[#292929] pt-6">
                <p className="text-[#00E5FF] text-xs font-inter uppercase tracking-widest mb-2">Mission</p>
                <p className="font-sora font-semibold text-white text-lg leading-snug">
                  To build intelligent cybersecurity infrastructure that detects abnormal behavior, prevents breaches and empowers security teams to respond at machine speed.
                </p>
              </div>
              <div className="border-t border-[#292929] pt-6">
                <p className="text-[#FF36A6] text-xs font-inter uppercase tracking-widest mb-2">Tagline</p>
                <p className="font-sora font-semibold text-white text-lg leading-snug">
                  Intelligence That Protects. Security That Evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#D7FF00] font-inter font-medium text-sm uppercase tracking-widest mb-4">Our Values</p>
            <h2 className="font-sora font-bold text-4xl text-white">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[#292929] bg-[#050505] p-7">
                <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <v.icon size={22} className={v.color} />
                </div>
                <h3 className="font-sora font-semibold text-white text-lg mb-3">{v.title}</h3>
                <p className="font-inter text-[#929292] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sora font-bold text-4xl text-white mb-6">Join Organizations That Trust Shield Pro AI</h2>
          <p className="font-inter text-[#929292] text-lg mb-8">
            Start protecting your organization today or contact our team to learn how Shield Pro AI can be configured for your environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-[#D7FF00] text-black font-sora font-semibold px-8 py-4 rounded-lg hover:bg-[#c8f000] transition-colors inline-flex items-center justify-center gap-2">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="border border-[#292929] text-white font-sora font-semibold px-8 py-4 rounded-lg hover:border-[#D7FF00]/40 transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
