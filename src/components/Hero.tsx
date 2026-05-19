"use client";

import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "80+", label: "Projects" },
  { value: "10+", label: "Countries" },
];

export default function Hero() {
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

      {/* Very faint red glow — far corner, barely visible */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ED1A3B] opacity-[0.05] blur-[140px] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-16 md:pt-36 md:pb-20">

        {/* Decorative large number */}
        <span className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 font-heading font-bold text-[160px] md:text-[220px] leading-none text-white/[0.03] select-none pointer-events-none">
          01
        </span>

        {/* Editorial headline */}
        <div className="max-w-4xl">
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

          {/* Description — Tecaudex voice */}
          <p className="text-white/40 text-sm md:text-base max-w-md leading-relaxed border-l-2 border-[#ED1A3B]/40 pl-4">
            Tell us about your project. We understand your business problem first, then build the right solution. No body-shop. No guesswork.
          </p>
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="relative border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          {/* Stats inline */}
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

          {/* CTA — text link only */}
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
