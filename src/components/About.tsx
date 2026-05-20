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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  );
}
