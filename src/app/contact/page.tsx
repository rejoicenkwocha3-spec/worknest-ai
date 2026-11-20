"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Building, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", type: "general", message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 grid-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D7FF00]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#D7FF00] font-inter font-medium text-sm uppercase tracking-widest mb-4">Contact</p>
          <h1 className="font-sora font-bold text-5xl text-white leading-tight mb-6">
            Get in Touch with Shield Pro AI
          </h1>
          <p className="font-inter text-[#929292] text-xl leading-relaxed max-w-2xl mx-auto">
            Request a demo, ask about enterprise plans or tell us about your security environment.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-sora font-bold text-3xl text-white mb-6">How Can We Help?</h2>
              <p className="font-inter text-[#929292] text-base leading-relaxed mb-8">
                Whether you are evaluating Shield Pro AI, planning an enterprise deployment or have a specific security question, our team is here to help.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-[#292929] bg-[#111111]">
                  <div className="w-10 h-10 bg-[#D7FF00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#D7FF00]" />
                  </div>
                  <div>
                    <p className="font-sora font-semibold text-white text-sm mb-1">General Enquiries</p>
                    <p className="font-inter text-[#929292] text-sm">hello@shieldproai.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-[#292929] bg-[#111111]">
                  <div className="w-10 h-10 bg-[#00E5FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building size={18} className="text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="font-sora font-semibold text-white text-sm mb-1">Enterprise Sales</p>
                    <p className="font-inter text-[#929292] text-sm">enterprise@shieldproai.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-[#292929] bg-[#111111] p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#D7FF00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-[#D7FF00]" />
                  </div>
                  <h3 className="font-sora font-bold text-white text-xl mb-3">Message Received</h3>
                  <p className="font-inter text-[#929292] text-sm">
                    Thank you for reaching out. Our team will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#929292] text-xs font-inter mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50 placeholder-[#929292]/50"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-[#929292] text-xs font-inter mb-2">Work Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50 placeholder-[#929292]/50"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#929292] text-xs font-inter mb-2">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50 placeholder-[#929292]/50"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#929292] text-xs font-inter mb-2">Enquiry Type</label>
                    <select
                      value={form.type}
                      onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                      className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50"
                    >
                      <option value="general">General Enquiry</option>
                      <option value="demo">Request a Demo</option>
                      <option value="enterprise">Enterprise Plan</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#929292] text-xs font-inter mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-[#050505] border border-[#292929] rounded-lg px-4 py-3 text-white text-sm font-inter focus:outline-none focus:border-[#D7FF00]/50 placeholder-[#929292]/50 resize-none"
                      placeholder="Tell us about your security environment and what you are looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D7FF00] text-black font-sora font-semibold px-6 py-3 rounded-lg hover:bg-[#c8f000] transition-colors disabled:opacity-60 inline-flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending..." : <>Send Message <ArrowRight size={16} /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
