const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We spend time understanding your business, goals, and constraints before writing a single line of code. No assumptions.",
  },
  {
    number: "02",
    title: "Solution Design",
    description:
      "Architecture, UI/UX wireframes, and a detailed project scope. You know exactly what you&apos;re getting before we start.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Sprint-based delivery with weekly demos. You see real progress every week, not a black box that appears at month three.",
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "Automated tests, manual QA, UAT with your team, and a dedicated bug-fix phase before any go-live.",
  },
  {
    number: "05",
    title: "Go-Live",
    description:
      "Smooth production deployment with staff training, data migration, and a go-live support window so nothing breaks at launch.",
  },
  {
    number: "06",
    title: "Support & Growth",
    description:
      "Ongoing maintenance, enhancements, and a dedicated support channel. We stay with you long after launch day.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#282828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-4 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
            How We Work
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Our Proven 6-Step Process
          </h2>
          <p className="text-[#939393] text-lg leading-relaxed">
            Every project follows the same disciplined methodology, one that
            has delivered 80+ successful implementations across four industries.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#ED1A3B]/40 transition-colors group"
            >
              <span className="font-heading font-bold text-5xl text-white/5 absolute top-5 right-6 select-none group-hover:text-[#ED1A3B]/10 transition-colors">
                {step.number}
              </span>
              <p className="text-[#ED1A3B] text-xs font-bold uppercase tracking-widest mb-3">
                Step {step.number}
              </p>
              <h3 className="font-heading font-bold text-lg text-white mb-3">
                {step.title}
              </h3>
              <p
                className="text-[#939393] text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#ED1A3B] hover:bg-[#c9162f] text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
