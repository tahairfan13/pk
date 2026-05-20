import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Thank You | Tecaudex",
  description: "We've received your message and will be in touch within 24 hours.",
};

const nextSteps = [
  {
    step: "01",
    title: "We review your request",
    desc: "A senior team member reads through your project details — not a bot, not a junior rep.",
  },
  {
    step: "02",
    title: "You hear from us in 24h",
    desc: "We reach out with an honest assessment and a clear recommendation on how to move forward.",
  },
  {
    step: "03",
    title: "We scope it together",
    desc: "A free discovery call where we align on goals, timeline, and budget — no pressure, no hard sell.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F5F5F5] min-h-screen">

        {/* Hero */}
        <section className="py-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Checkmark */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-[#ED1A3B]/10 animate-ping" style={{ animationDuration: "2.5s" }} />
              <div className="relative w-24 h-24 rounded-full bg-white border-2 border-[#ED1A3B]/30 shadow-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </div>

            <span className="inline-block mb-4 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
              Message Received
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-[#1B1B1B] mb-5 leading-tight">
              You&apos;re in good hands.
            </h1>
            <p className="text-[#939393] text-lg leading-relaxed max-w-lg mx-auto mb-10">
              Thank you for reaching out to Tecaudex. A senior team member will
              personally get back to you within{" "}
              <span className="text-[#1B1B1B] font-semibold">24 hours</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://cal.com/tecaudex/discovery-call?duration=30"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ED1A3B] hover:bg-[#c9162f] text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                Can&apos;t wait? Book a free call now
              </a>
              <Link
                href="/"
                className="border border-[#1B1B1B]/15 hover:border-[#ED1A3B] text-[#1B1B1B] hover:text-[#ED1A3B] font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* What happens next */}
        <section className="py-16 px-4 border-t border-[#E5E5E5]">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-[#939393] text-xs font-semibold uppercase tracking-widest mb-10">
              What happens next
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {nextSteps.map((s) => (
                <div key={s.step} className="bg-white border border-[#E5E5E5] rounded-2xl p-6 shadow-sm">
                  <span className="font-heading font-bold text-[#ED1A3B] text-3xl leading-none block mb-4">
                    {s.step}
                  </span>
                  <h3 className="font-heading font-bold text-[#1B1B1B] text-sm mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#939393] text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="py-12 px-4 border-t border-[#E5E5E5]">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 text-center">
            {[
              { value: "80+", label: "Projects delivered" },
              { value: "10+", label: "Countries served" },
              { value: "24h", label: "Response guarantee" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading font-bold text-2xl text-[#1B1B1B]">{s.value}</p>
                <p className="text-[#939393] text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Logo */}
        <section className="py-10 px-4 border-t border-[#E5E5E5] text-center">
          <Image
            src="/tecaudex-logo.svg"
            alt="Tecaudex"
            width={120}
            height={30}
            className="mx-auto opacity-30"
          />
        </section>

      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
