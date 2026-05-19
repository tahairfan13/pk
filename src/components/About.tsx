import { Shield, Zap, Eye, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Ownership",
    description:
      "We treat your project as our own business. Proactive communication, accountability from day one, and results-focused execution.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No hidden costs. No surprises. You get direct access to the engineers working on your project and weekly progress updates.",
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

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-block mb-4 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
              About Tecaudex
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1B1B1B] mb-6 leading-tight">
              We&apos;re Not a Body-Shop.
              <br />
              We&apos;re Your Tech Partner.
            </h2>
            <p className="text-[#939393] text-lg leading-relaxed mb-6">
              Tecaudex was built to fill the gap between overpriced international
              studios and low-quality freelance work. We&apos;re a Pakistan-based
              team of engineers, designers, and project managers who care about
              outcomes, not billable hours.
            </p>
            <p className="text-[#939393] leading-relaxed mb-8">
              Whether you&apos;re digitising your operations with Odoo, launching a
              mobile product, or automating workflows with AI, we start by
              understanding your business problem, then build the right
              solution. No buzzwords, no over-engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white rounded-xl p-5 flex-1 border border-[#E5E5E5]">
                <p className="font-heading font-bold text-2xl text-[#ED1A3B]">PKR</p>
                <p className="text-sm text-[#939393] mt-1">
                  Competitive local pricing. Enterprise quality.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 flex-1 border border-[#E5E5E5]">
                <p className="font-heading font-bold text-2xl text-[#ED1A3B]">24h</p>
                <p className="text-sm text-[#939393] mt-1">
                  Response time guaranteed on all active projects
                </p>
              </div>
            </div>
          </div>

          {/* Right: values grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
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
      </div>
    </section>
  );
}
