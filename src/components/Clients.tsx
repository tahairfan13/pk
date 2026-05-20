import Image from "next/image";

const clients = [
  {
    name: "Five Star Foam",
    logoUrl:
      "https://fivestarfoam.com.pk/wp-content/uploads/2025/03/cropped-logo.png",
    industry: "Manufacturing",
  },
  {
    name: "Etihad Town",
    logoUrl: "https://etihadtown.com.pk/wp-content/uploads/2024/01/logo.png",
    industry: "Real Estate",
  },
  {
    name: "Riphah University",
    logoUrl: "https://jrcrs.riphah.edu.pk/wp-content/uploads/2017/05/RIU-logo.png",
    industry: "Education",
  },
  {
    name: "Logo Shoes",
    logoUrl:
      "https://www.logoofficial.com/cdn/shop/files/LOGO_blk.png?v=1715945255",
    industry: "Retail & Fashion",
  },
  {
    name: "Times University",
    logoUrl: "https://www.tum.edu.pk/images/logo.png",
    darkLogoBg: true,
    industry: "Education",
  },
  {
    name: "Zafar Group",
    logoUrl: "/zafar-group.jpg",
    industry: "Catering & Events",
  },
  {
    name: "Ravi Floor Mills",
    logoUrl: null,
    initials: "RF",
    industry: "Food & Agriculture",
  },
  {
    name: "TurkPlast",
    logoUrl: "https://www.turkplast.info/admin/dist/tp-logo-removebg-preview.png",
    industry: "Plastics & Manufacturing",
  },
];

const pillars = [
  {
    value: "Built in Pakistan",
    label: "Enterprise quality at local rates — no agency markup, no middlemen.",
  },
  {
    value: "24h Response",
    label: "Every active project gets a guaranteed reply within one business day.",
  },
  {
    value: "Fixed-Price Contracts",
    label: "Scope locked before we start. No surprise invoices. Ever.",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block mb-4 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
            Our Clients
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1B1B1B] mb-4">
            Trusted by Pakistan&apos;s Leading Brands
          </h2>
          <p className="text-[#939393] text-lg leading-relaxed">
            A selection of prominent names from our portfolio — spanning manufacturing,
            retail, education, real estate, and more.
          </p>
        </div>

        {/* Client cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col items-center text-center border border-[#E5E5E5] rounded-2xl p-7 hover:border-[#ED1A3B]/30 hover:shadow-md transition-all duration-300"
            >
              {/* Logo */}
              <div className="w-full h-20 flex items-center justify-center mb-5">
                {c.logoUrl ? (
                  <div className={"darkLogoBg" in c && c.darkLogoBg ? "bg-[#1B1B1B] rounded-xl px-4 py-2 flex items-center justify-center" : ""}>
                    <Image
                      src={c.logoUrl}
                      alt={c.name}
                      width={140}
                      height={60}
                      className="max-h-14 w-auto object-contain mx-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-[#ED1A3B] flex items-center justify-center">
                    <span className="font-heading font-bold text-white text-base tracking-tight">
                      {"initials" in c ? c.initials : ""}
                    </span>
                  </div>
                )}
              </div>

              {/* Name + meta */}
              <p className="font-heading font-bold text-[#1B1B1B] text-sm mb-1">
                {c.name}
              </p>
              <p className="text-[#939393] text-xs">{c.industry}</p>
            </div>
          ))}
        </div>

        {/* Value pillars strip */}
        <div className="bg-[#1A1A1A] rounded-2xl px-8 py-8 grid sm:grid-cols-3 gap-px">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 px-6 py-2 sm:border-r border-white/10 last:border-0"
            >
              <p className="font-heading font-bold text-lg text-[#ED1A3B]">{p.value}</p>
              <p className="text-[#B8B8B8] text-sm leading-relaxed">{p.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
