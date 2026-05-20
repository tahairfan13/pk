const serviceLinks = [
  { label: "Odoo ERP Implementation", href: "#services" },
  { label: "Mobile App Development", href: "#services" },
  { label: "AI Development", href: "#services" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#282828] text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-heading font-bold text-lg block mb-4">Tecaudex</span>
            <p className="text-[#939393] text-sm leading-relaxed max-w-xs">
              Pakistan&apos;s technology partner for Odoo ERP implementation, mobile
              app development, and AI solutions. Outcome-focused. Transparent.
              Reliable.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider text-white/60">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[#939393] hover:text-[#ED1A3B] text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider text-white/60">
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[#939393] hover:text-[#ED1A3B] text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#939393] text-sm">
          <p>&copy; {new Date().getFullYear()} Tecaudex. All rights reserved.</p>
          <p>Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
