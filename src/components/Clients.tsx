import Image from "next/image";

const clients = [
  {
    name: "Five Star Foam",
    logoUrl:
      "https://fivestarfoam.com.pk/wp-content/uploads/2025/03/cropped-logo.png",
    industry: "Manufacturing",
    service: "Odoo ERP",
  },
  {
    name: "Al-Khair Group",
    logoUrl: "https://alkhairenterprises.pk/assets/img/al-logo.png",
    industry: "Enterprises",
    service: "AI Development",
  },
  {
    name: "Logo Shoes",
    logoUrl:
      "https://www.logoofficial.com/cdn/shop/files/LOGO_blk.png?v=1715945255",
    industry: "Retail & Fashion",
    service: "Mobile App",
  },
  {
    name: "Go Petroleum",
    logoUrl: null,
    industry: "Oil & Gas",
    service: "Odoo ERP",
  },
];

const stats = [
  { value: "4", label: "Industry Verticals" },
  { value: "PKR B+", label: "Client Revenue Managed" },
  { value: "100%", label: "On-Time Delivery" },
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
            From manufacturing and retail to oil &amp; gas, we&apos;ve delivered
            ERP, mobile, and AI solutions for businesses that demand reliability.
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
                  <Image
                    src={c.logoUrl}
                    alt={c.name}
                    width={140}
                    height={60}
                    className="max-h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    unoptimized
                  />
                ) : (
                  /* Fallback text logo for Go Petroleum */
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-[#ED1A3B] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <span className="font-heading font-bold text-xl text-[#1B1B1B] tracking-tight">
                        GO
                      </span>
                    </div>
                    <span className="text-[#939393] text-xs font-semibold uppercase tracking-widest">
                      Petroleum
                    </span>
                  </div>
                )}
              </div>

              {/* Name + meta */}
              <p className="font-heading font-bold text-[#1B1B1B] text-sm mb-1">
                {c.name}
              </p>
              <p className="text-[#939393] text-xs mb-3">{c.industry}</p>

              {/* Service tag */}
              <span className="inline-block bg-[#ED1A3B]/8 text-[#ED1A3B] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#ED1A3B]/20">
                {c.service}
              </span>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="bg-[#1A1A1A] rounded-2xl px-8 py-8 grid sm:grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <p className="font-heading font-bold text-3xl text-white">{s.value}</p>
              <p className="text-[#B8B8B8] text-sm">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
