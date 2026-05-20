import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Thank You | Tecaudex",
  description: "We've received your message and will be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-24">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-[#ED1A3B]/10 flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ED1A3B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#1B1B1B] mb-4">
            Message Received!
          </h1>
          <p className="text-[#939393] text-lg leading-relaxed mb-10">
            Thank you for reaching out. One of our team members will review your
            project details and get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://cal.com/tecaudex/discovery-call?duration=30"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ED1A3B] hover:bg-[#c9162f] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Book a Free Call Instead
            </a>
            <Link
              href="/"
              className="border border-[#1B1B1B]/20 hover:border-[#ED1A3B] text-[#1B1B1B] hover:text-[#ED1A3B] font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
