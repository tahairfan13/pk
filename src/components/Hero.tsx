"use client";

import { ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";
import CountryCodeSelect from "@/components/CountryCodeSelect";

const API = "https://crm.tecaudex.com/api/pk/websiteleads";

const stats = [
  { value: "80+", label: "Projects" },
  { value: "10+", label: "Countries" },
];

export default function Hero() {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [countryCode, setCountryCode] = useState("+92");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: `${countryCode} ${form.phone}`, message: form.service }),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col bg-[#1A1A1A] overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Faint red glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ED1A3B] opacity-[0.05] blur-[140px] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 w-full pt-16 pb-16 md:pt-20 md:pb-20">

        {/* Decorative large number */}
        <span className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 font-heading font-bold text-[160px] md:text-[220px] leading-none text-white/[0.03] select-none pointer-events-none">
          01
        </span>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: headline */}
          <div>
            <h1 className="font-heading leading-none mb-10">
              <span className="block font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white/90 mb-2">
                Your Technology
              </span>
              <span className="block font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white">
                Partner for{" "}
                <span className="text-[#ED1A3B]">ERP,</span>
              </span>
              <span className="block font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white">
                Mobile &{" "}
                <span className="italic font-light text-white/60">AI Growth.</span>
              </span>
            </h1>

            <p className="text-white/40 text-sm md:text-base max-w-md leading-relaxed border-l-2 border-[#ED1A3B]/40 pl-4">
              Tell us about your project. We understand your business problem first, then build the right solution. No body-shop. No guesswork.
            </p>
          </div>

          {/* Right: quick lead form */}
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#ED1A3B]/10 flex items-center justify-center">
                  <Send size={20} className="text-[#ED1A3B]" />
                </div>
                <p className="font-heading font-bold text-white text-lg">We&apos;ll be in touch!</p>
                <p className="text-white/40 text-sm">Expect a reply within 24 hours.</p>
              </div>
            ) : (
              <>
                <p className="font-heading font-bold text-white text-lg mb-1">Get a Free Quote</p>
                <p className="text-white/40 text-xs mb-6">No commitment. Just a conversation.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#ED1A3B]/50 transition-colors"
                  />
                  <div className="flex gap-2">
                    <CountryCodeSelect value={countryCode} onChange={setCountryCode} dark />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone / WhatsApp"
                      className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#ED1A3B]/50 transition-colors"
                    />
                  </div>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ED1A3B]/50 transition-colors"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" disabled>Service needed</option>
                    <option value="odoo">Odoo ERP Implementation</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="ai">AI Development</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#ED1A3B] hover:bg-[#c9162f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-full transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending…" : "Submit"}
                    {!loading && <ArrowUpRight size={15} />}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="relative border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6 md:gap-10">
            {stats.map((s, i) => (
              <div key={i} className="flex items-baseline gap-1.5">
                <span className="font-heading font-bold text-white text-base md:text-lg">
                  {s.value}
                </span>
                <span className="text-white/30 text-xs uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Start a conversation
            <ArrowUpRight
              size={14}
              className="text-[#ED1A3B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
