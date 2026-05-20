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
    name: "Logo Shoes",
    logoUrl:
      "https://www.logoofficial.com/cdn/shop/files/LOGO_blk.png?v=1715945255",
    industry: "Retail & Fashion",
  },
  {
    name: "Diamond Form",
    logoUrl: "/diamond-logo.jpg",
    industry: "Retail",
  },
  {
    name: "Zafar Group",
    logoUrl: "/zafar-group.jpg",
    industry: "Catering & Events",
  },
  {
    name: "TurkPlast",
    logoUrl: "https://www.turkplast.info/admin/dist/tp-logo-removebg-preview.png",
    industry: "Plastics & Manufacturing",
  },
  {
    name: "Multanust University",
    logoUrl: "https://framerusercontent.com/images/HnDLdDZjdAZMpkFdRte6nEPHg.png",
    industry: "Education",
  },
  {
    name: "Union Bricks",
    logoUrl: "/unionbricks.jpg",
    industry: "Construction",
  },
  {
    name: "Times University",
    logoUrl: "https://www.tum.edu.pk/images/logo.png",
    darkLogoBg: true,
    industry: "Education",
  },
  {
    name: "Ravi Floor Mills",
    logoUrl: null,
    initials: "RF",
    industry: "Food & Agriculture",
  },
  {
    name: "Sakura Group",
    logoUrl: "https://sakuragroup.pk/wp-content/uploads/2024/12/logo.png",
    industry: "Retail & Distribution",
  },
];

const stats = [
  { value: "80+", label: "Projects Delivered" },
  { value: "10+", label: "Countries Served" },
  { value: "15+", label: "Industry Verticals" },
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
            A snapshot of the local Pakistani businesses we&apos;ve built for —
            household names and growing companies across manufacturing, retail,
            real estate, education, and more. These are the clients who trusted
            us to digitise, automate, and scale their operations.
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
