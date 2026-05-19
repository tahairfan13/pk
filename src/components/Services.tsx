import {
  BarChart3,
  Smartphone,
  Brain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Odoo ERP Implementation",
    subtitle: "Enterprise Resource Planning",
    description:
      "End-to-end Odoo ERP implementation tailored for Pakistani businesses. Manufacturing, trading, services, retail. We handle setup, customisation, data migration, and staff training.",
    features: [
      "Odoo 19 Community & Enterprise editions",
      "Manufacturing, Inventory & Supply Chain",
      "Accounting, HR & Payroll (Pakistan-compliant)",
      "CRM, Sales & E-commerce modules",
      "Custom module development",
      "Post-go-live support & maintenance",
    ],
    cta: "Explore ERP Solutions",
    accent: "#ED1A3B",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "iOS & Android",
    description:
      "Native and cross-platform mobile applications built with performance and user experience at the forefront. From consumer apps to enterprise-grade field solutions, we deliver on time.",
    features: [
      "React Native & Flutter development",
      "iOS & Android native apps",
      "UI/UX design included",
      "API integration & backend",
      "App Store & Play Store deployment",
      "Ongoing maintenance & updates",
    ],
    cta: "Explore Mobile Dev",
    accent: "#ED1A3B",
  },
  {
    icon: Brain,
    title: "AI Development",
    subtitle: "Artificial Intelligence & ML",
    description:
      "Custom AI and machine learning solutions that automate operations, surface insights, and create real competitive advantage. Pragmatic AI, not buzzwords.",
    features: [
      "LLM-powered business automation",
      "Computer vision & OCR solutions",
      "Predictive analytics & forecasting",
      "Chatbots & conversational AI",
      "Data pipelines & ETL",
      "AI integration into existing systems",
    ],
    cta: "Explore AI Solutions",
    accent: "#ED1A3B",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-4 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1B1B1B] mb-4">
            Three Services, One Focused Team
          </h2>
          <p className="text-[#939393] text-lg leading-relaxed">
            We don&apos;t try to do everything. We do three things exceptionally
            well: ERP, Mobile, and AI. Your business gets genuine depth,
            not a generalist&apos;s guess.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group flex flex-col border border-[#E5E5E5] rounded-2xl p-8 hover:shadow-lg hover:border-[#ED1A3B]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#ED1A3B]/10 flex items-center justify-center mb-5">
                <s.icon size={22} className="text-[#ED1A3B]" />
              </div>

              <p className="text-[#939393] text-xs font-semibold uppercase tracking-wider mb-1">
                {s.subtitle}
              </p>
              <h3 className="font-heading font-bold text-xl text-[#1B1B1B] mb-3">
                {s.title}
              </h3>
              <p className="text-[#939393] text-sm leading-relaxed mb-6">
                {s.description}
              </p>

              {/* Features list */}
              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#1B1B1B]">
                    <CheckCircle2
                      size={15}
                      className="text-[#ED1A3B] mt-0.5 shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 text-[#ED1A3B] font-semibold text-sm group-hover:gap-3 transition-all"
              >
                {s.cta}
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
