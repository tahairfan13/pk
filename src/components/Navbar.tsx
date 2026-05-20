"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-[#E5E5E5]",
        scrolled && "shadow-sm"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="https://www.tecaudex.com/32x32px.png"
            alt="Tecaudex"
            width={32}
            height={32}
            className="rounded"
            unoptimized
          />
          <span className="font-heading font-bold text-xl text-[#1B1B1B]">
            Tecaudex
          </span>
        </a>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/odoo-calculator"
            className="border border-[#E5E5E5] hover:border-[#ED1A3B] hover:text-[#ED1A3B] text-[#1B1B1B] text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
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
          className="md:hidden p-2 text-[#1B1B1B]"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E5E5E5] px-4 pb-6 pt-4 flex flex-col gap-3">
          <a
            href="/odoo-calculator"
            onClick={() => setOpen(false)}
            className="border border-[#E5E5E5] text-[#1B1B1B] font-medium py-3 px-5 rounded-full text-center text-sm transition-colors"
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
