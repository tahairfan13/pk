const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

const serviceLinks = [
  { label: "Odoo ERP Implementation", href: "#services" },
  { label: "Mobile App Development", href: "#services" },
  { label: "AI Development", href: "#services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#282828] text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/tecaudex-logo.svg" alt="Tecaudex" width={130} height={33} className="mb-4 brightness-0 invert" />
            <p className="text-[#939393] text-sm leading-relaxed mb-6">
              Born in Lahore, trusted across 10+ countries. We build ERP systems,
              mobile apps, and AI solutions with a senior team that treats your
              business like our own — honest pricing, no body-shop, outcomes you
              can measure.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ED1A3B] flex items-center justify-center transition-colors"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div>
            <p className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider text-white/60">
              Offices
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white text-xs font-semibold mb-1">🇵🇰 Pakistan</p>
                <p className="text-[#939393] text-sm leading-relaxed">
                  2nd Floor, 7-B OPF,<br />
                  Main Boulevard, Lahore,<br />
                  Pakistan — 54770
                </p>
              </div>
              <div>
                <p className="text-white text-xs font-semibold mb-1">🇺🇸 United States</p>
                <p className="text-[#939393] text-sm leading-relaxed">
                  131 Continental Dr, Suite 305,<br />
                  Newark, Delaware — 19713
                </p>
              </div>
            </div>
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
        </div>
      </div>
    </footer>
  );
}
