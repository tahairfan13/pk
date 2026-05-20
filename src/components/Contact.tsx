"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import CountryCodeSelect from "@/components/CountryCodeSelect";
import { notifyLead } from "@/lib/notify";

const API = "https://crm.tecaudex.com/api/pk/websiteleads";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+92");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, phone: `${countryCode} ${form.phone}` }),
      });
      if (!res.ok) throw new Error("server_error");
      notifyLead({
        Source: "Contact Form",
        Name: form.name,
        Email: form.email,
        Phone: `${countryCode} ${form.phone}`,
        Service: form.service,
        Message: form.message,
      });
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again or reach us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-4 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1B1B1B] mb-4">
            Let&apos;s Start the Conversation
          </h2>
          <p className="text-[#939393] text-lg leading-relaxed">
            Tell us about your project. We&apos;ll get back to you within 24 hours
            with an honest assessment and a clear next step.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-[#282828] rounded-2xl p-8 text-white flex-1">
              <h3 className="font-heading font-bold text-xl mb-6">
                Contact Information
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#ED1A3B]/20 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#ED1A3B]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">Email</p>
                    <a
                      href="mailto:hello@tecaudex.com"
                      className="text-white hover:text-[#ED1A3B] transition-colors text-sm"
                    >
                      hello@tecaudex.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#ED1A3B]/20 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#ED1A3B]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">Phone / WhatsApp</p>
                    <a
                      href="tel:+923004018239"
                      className="text-white hover:text-[#ED1A3B] transition-colors text-sm"
                    >
                      +92 300 401 8239
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#ED1A3B]/20 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#ED1A3B]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">Office</p>
                    <p className="text-white text-sm">Lahore, Pakistan</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
              <p className="font-heading font-semibold text-[#1B1B1B] mb-1">
                Prefer a call?
              </p>
              <p className="text-[#939393] text-sm mb-4">
                Book a free 30-minute discovery call. No obligation.
              </p>
              <a
                href="https://cal.com/tecaudex/discovery-call?duration=30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ED1A3B] hover:bg-[#c9162f] text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm w-full justify-center"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-[#E5E5E5]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1B1B1B] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2.5 text-sm text-[#1B1B1B] placeholder:text-[#D7D7D7] focus:outline-none focus:border-[#ED1A3B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1B1B1B] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2.5 text-sm text-[#1B1B1B] placeholder:text-[#D7D7D7] focus:outline-none focus:border-[#ED1A3B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1B1B1B] mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <div className="flex gap-2">
                      <CountryCodeSelect value={countryCode} onChange={setCountryCode} />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="300 0000000"
                        className="flex-1 border border-[#E5E5E5] rounded-lg px-4 py-2.5 text-sm text-[#1B1B1B] placeholder:text-[#D7D7D7] focus:outline-none focus:border-[#ED1A3B] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1B1B1B] mb-1.5">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2.5 text-sm text-[#1B1B1B] focus:outline-none focus:border-[#ED1A3B] transition-colors bg-white"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="odoo">Odoo ERP Implementation</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="ai">AI Development</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1B1B1B] mb-1.5">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your business challenge or what you'd like to build..."
                    className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2.5 text-sm text-[#1B1B1B] placeholder:text-[#D7D7D7] focus:outline-none focus:border-[#ED1A3B] transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 -mt-1">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-[#ED1A3B] hover:bg-[#c9162f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm mt-1"
                >
                  {loading ? "Sending…" : "Send Message"}
                  {!loading && <Send size={15} />}
                </button>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}
