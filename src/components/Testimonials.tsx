"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "CEO, FastTrack Logistics",
    quote:
      "Tecaudex implemented Odoo for our entire logistics operation in under 90 days. Inventory accuracy went from 70% to 98%, and our team actually uses the system. Highly recommend.",
    rating: 5,
  },
  {
    name: "Sara Khan",
    role: "COO, NovaTex Manufacturing",
    quote:
      "We'd tried two other ERP vendors and failed. Tecaudex came in, understood our manufacturing workflow, and built a solution that actually fit our processes. Everything was transparent from day one.",
    rating: 5,
  },
  {
    name: "Bilal Qureshi",
    role: "Founder, UrbanEats",
    quote:
      "Their mobile team built our customer app and delivery driver app in parallel. The quality was excellent and they were easy to work with throughout — direct access to developers, no middlemen.",
    rating: 5,
  },
  {
    name: "Anum Fatima",
    role: "Head of Operations, MediSupply",
    quote:
      "The AI-powered demand forecasting tool Tecaudex built has saved us millions in overstock. They delivered exactly what they promised, on time, and trained our team properly.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-4 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
            Client Stories
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#1B1B1B] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#939393] text-lg">
            From ERP rollouts to mobile launches — real results from real
            Pakistani businesses.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F5F5F5] rounded-3xl p-8 md:p-12 relative">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-[#ED1A3B] text-[#ED1A3B]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-[#1B1B1B] text-lg md:text-xl leading-relaxed mb-8 font-medium">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-[#1B1B1B]">{t.name}</p>
                <p className="text-[#939393] text-sm mt-0.5">{t.role}</p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#ED1A3B] hover:text-[#ED1A3B] transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#ED1A3B] hover:text-[#ED1A3B] transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-[#ED1A3B]" : "bg-[#D7D7D7]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
