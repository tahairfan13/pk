"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1A1A1A] border-b border-white/8">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo — inverted to white */}
        <a href="/" className="shrink-0">
          <Image
            src="/tecaudex-logo-dark.svg"
            alt="Tecaudex"
            width={150}
            height={38}
            priority
          />
        </a>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/odoo-calculator"
            className="border border-white/20 hover:border-[#ED1A3B] text-white/70 hover:text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Odoo Calculator
          </a>
          <a
            href="https://cal.com/tecaudex/discovery-call?duration=30"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ED1A3B] hover:bg-[#c9162f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Book a Free Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white/70"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-white/8 px-4 pb-6 pt-4 flex flex-col gap-3">
          <a
            href="/odoo-calculator"
            onClick={() => setOpen(false)}
            className="border border-white/20 text-white/70 font-medium py-3 px-5 rounded-full text-center text-sm transition-colors"
          >
            Odoo Calculator
          </a>
          <a
            href="https://cal.com/tecaudex/discovery-call?duration=30"
            onClick={() => setOpen(false)}
            className="bg-[#ED1A3B] hover:bg-[#c9162f] text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </header>
  );
}
