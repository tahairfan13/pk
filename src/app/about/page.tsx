import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Shield, Zap, Eye, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Tecaudex — Odoo ERP, Mobile & AI Development",
  description:
    "Tecaudex is a software development agency born in Lahore, Pakistan. We specialise in Odoo ERP implementation, mobile app development, and AI solutions for businesses across 10+ countries.",
};

const stats = [
  { value: "80+", label: "Projects Delivered" },
  { value: "10+", label: "Countries Served" },
  { value: "8+", label: "Years Experience" },
  { value: "24h", label: "Response Time" },
];

const values = [
  {
    icon: Shield,
    title: "Ownership",
    description:
      "We treat your project as our own business. Proactive communication, accountability from day one, and results-focused execution — not just delivery.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No hidden costs, no surprises. You get direct access to the engineers working on your project and weekly progress updates throughout.",
  },
  {
    icon: Zap,
    title: "Quality Over Speed",
    description:
      "Rigorous testing and code reviews on every deliverable. We build software that works in production, not just in demos.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Thinking",
    description:
      "Every line of code is written for maintainability and extensibility. We design for where your business is going, not just where it is today.",
  },
];

const erpCapabilities = [
  {
    title: "ERP Implementation",
    desc: "Full-cycle Odoo deployments — from requirements and gap analysis to data migration, module customisation, and go-live support.",
  },
  {
    title: "Module Customisation",
    desc: "Custom modules for manufacturing, trading, retail, healthcare, education, and professional services built on Odoo Community and Enterprise.",
  },
  {
    title: "Odoo Integration",
    desc: "REST/JSON-RPC integrations connecting Odoo with e-commerce stores, payment gateways, logistics APIs, and third-party SaaS tools.",
  },
  {
    title: "Support & Upgrade",
    desc: "Ongoing maintenance, version upgrades, performance tuning, and dedicated post-deployment support packages.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#1A1A1A] pt-20 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block mb-5 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
                About Tecaudex
              </span>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Built in Lahore.
                <br />
                <span className="text-[#ED1A3B]">Trusted Worldwide.</span>
              </h1>
              <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-2xl">
                We are a senior-led software agency specialising in Odoo ERP
                implementation, mobile app development, and AI solutions —
                serving clients across Pakistan, UAE, UK, US, and Australia with
                enterprise-grade software at honest pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#ED1A3B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="py-10 px-6 text-center border-r border-white/20 last:border-r-0 even:border-r-0 md:even:border-r md:last:border-r-0"
                >
                  <p className="font-heading font-bold text-4xl text-white mb-1">
                    {s.value}
                  </p>
                  <p className="text-white/80 text-sm font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block mb-4 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
                  Our Story
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1B1B1B] mb-6 leading-tight">
                  A team that has seen what bad software costs a business
                </h2>
                <div className="flex flex-col gap-4 text-[#939393] text-base leading-relaxed">
                  <p>
                    Tecaudex was founded when our founders kept running into the
                    same problem: businesses across Pakistan and the Gulf were
                    investing in software that looked good in demos but fell apart
                    in production. Poorly configured ERPs, half-built mobile apps,
                    and agency churn that left teams worse off than when they started.
                  </p>
                  <p>
                    We set out to build an agency that operates differently — one
                    where senior engineers own projects end-to-end, pricing is
                    transparent from day one, and clients are treated as partners,
                    not ticket numbers.
                  </p>
                  <p>
                    Today we are a team of engineers, ERP consultants, and product
                    designers based in Lahore with overlap coverage across UAE, UK,
                    and US time zones. Every project is led by a senior engineer who
                    has shipped production systems — not delegated to a junior team
                    after the sales call.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Odoo ERP", detail: "Community & Enterprise" },
                  { label: "Mobile Apps", detail: "Flutter & React Native" },
                  { label: "AI Solutions", detail: "LLMs, automation, ML" },
                  { label: "Web Platforms", detail: "Next.js, Rails, Node" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#F5F5F5] rounded-2xl p-6 border border-[#E5E5E5]"
                  >
                    <p className="font-heading font-bold text-[#1B1B1B] mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#939393] text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ERP Expertise */}
        <section className="py-20 md:py-28 bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="inline-block mb-4 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
                ERP Expertise
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight">
                Pakistan&apos;s go-to team for Odoo ERP implementation
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                From SMEs taking their first step into ERP to enterprises
                migrating off legacy systems, we have delivered Odoo
                implementations across manufacturing, trading, retail, healthcare,
                and professional services.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {erpCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#ED1A3B]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-md bg-[#ED1A3B] mb-4" />
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block mb-4 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
                How We Work
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1B1B1B]">
                The principles behind every project
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-6 border border-[#E5E5E5] hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ED1A3B]/10 flex items-center justify-center mb-4">
                    <v.icon size={18} className="text-[#ED1A3B]" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#1B1B1B] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-[#939393] text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1B1B1B] mb-4">
              Ready to work with us?
            </h2>
            <p className="text-[#939393] text-lg mb-10 max-w-xl mx-auto">
              Tell us about your project and we&apos;ll come back within 24 hours
              with an honest assessment and a clear next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://cal.com/tecaudex/discovery-call?duration=30"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ED1A3B] hover:bg-[#c9162f] text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                Book a Free Discovery Call
              </a>
              <a
                href="/#contact"
                className="border border-[#1B1B1B]/20 hover:border-[#ED1A3B] text-[#1B1B1B] hover:text-[#ED1A3B] font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                Send a Message
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
