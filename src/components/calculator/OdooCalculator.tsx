"use client";

import { useState, useMemo } from "react";
import { Check, ChevronDown, ChevronUp, Minus, Plus, ArrowUpRight, Server, Globe, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  USD_TO_PKR,
  businessTypes,
  goals,
  serverTiers,
  odooPlans,
  packages,
  getUniqueModules,
  determinePlan,
  determinePackage,
  formatPKR,
} from "./data";

export default function OdooCalculator() {
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [numUsers, setNumUsers] = useState(5);
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [hosting, setHosting] = useState<"online" | "odoo_sh" | "on_premise">("on_premise");
  const [serverTier, setServerTier] = useState("basic");
  const [workers, setWorkers] = useState(1);
  const [stagingEnvs, setStagingEnvs] = useState(1);
  const [includesOpen, setIncludesOpen] = useState(true);

  const effectiveBilling = hosting === "on_premise" ? "yearly" : billing;

  function toggleBusiness(id: string) {
    if (selectedBusiness === id) {
      setSelectedBusiness(null);
      setSelectedGoals([]);
    } else {
      setSelectedBusiness(id);
      const biz = businessTypes.find((b) => b.id === id);
      setSelectedGoals(biz ? [...biz.goals] : []);
    }
  }

  function toggleGoal(id: string) {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  }

  const modules = useMemo(() => getUniqueModules(selectedGoals), [selectedGoals]);
  const plan = useMemo(() => determinePlan(modules, hosting), [modules, hosting]);
  const pkg = useMemo(() => determinePackage(modules), [modules]);

  const odooMonthly = numUsers * odooPlans[plan][effectiveBilling];
  const odooAnnual = numUsers * odooPlans[plan].yearly * 12;
  const monthlySaving = (numUsers * odooPlans[plan].monthly * 12) - odooAnnual;

  const odooShMonthly = (workers * 72) + (stagingEnvs * 18);
  const odooShAnnual = odooShMonthly * 12;

  const serverTierData = serverTiers.find((t) => t.id === serverTier) ?? serverTiers[0];
  const serverAnnualUsd = hosting === "on_premise" ? serverTierData.annualUsd : 0;

  const year2Usd = odooAnnual + (hosting === "odoo_sh" ? odooShAnnual : 0) + serverAnnualUsd;
  const year2Pkr = year2Usd * USD_TO_PKR;
  const year1Pkr = year2Pkr + (pkg.pricePkr > 0 ? pkg.pricePkr : 0);

  const hasSelections = selectedGoals.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

      {/* Page header */}
      <div className="mb-10 max-w-2xl">
        <span className="inline-block mb-3 text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest">
          Odoo ERP
        </span>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-[#1B1B1B] mb-3">
          Cost Calculator
        </h1>
        <p className="text-[#939393] text-base leading-relaxed">
          Get an instant breakdown of your Odoo implementation cost — subscription, hosting, and setup fee included.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">

        {/* ── Left: Steps ── */}
        <div className="lg:col-span-7 flex flex-col gap-8">

          {/* Step 1 */}
          <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 md:p-8">
            <p className="text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest mb-1">Step 1</p>
            <h2 className="font-heading font-bold text-lg text-[#1B1B1B] mb-6">
              What type of business are you?
            </h2>

            {selectedBusiness && (
              <div className="mb-5 bg-[#ED1A3B]/5 border border-[#ED1A3B]/20 rounded-xl px-4 py-3 text-sm text-[#ED1A3B]">
                We&apos;ve pre-selected the most common features for{" "}
                <strong>{businessTypes.find((b) => b.id === selectedBusiness)?.label}</strong>. Tick or untick anything to match your needs exactly.
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {businessTypes.map((biz) => (
                <button
                  key={biz.id}
                  onClick={() => toggleBusiness(biz.id)}
                  className={cn(
                    "flex flex-col items-center gap-2 p-3 rounded-xl border text-center transition-all",
                    selectedBusiness === biz.id
                      ? "border-[#ED1A3B] bg-[#ED1A3B]/5 text-[#1B1B1B]"
                      : "border-[#E5E5E5] hover:border-[#ED1A3B]/40 text-[#1B1B1B]"
                  )}
                >
                  <span className="text-2xl">{biz.emoji}</span>
                  <span className="text-xs font-medium leading-tight">{biz.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 md:p-8">
            <p className="text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest mb-1">Step 2</p>
            <h2 className="font-heading font-bold text-lg text-[#1B1B1B] mb-6">
              What do you want to automate?
            </h2>

            <div className="grid sm:grid-cols-2 gap-3">
              {goals.map((goal) => {
                const active = selectedGoals.includes(goal.id);
                return (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={cn(
                      "relative flex items-start gap-3 p-4 rounded-xl border text-left transition-all",
                      active
                        ? "border-[#ED1A3B] bg-[#ED1A3B]/5"
                        : "border-[#E5E5E5] hover:border-[#ED1A3B]/30"
                    )}
                  >
                    {/* Checkbox */}
                    <div
                      className={cn(
                        "absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all",
                        active ? "bg-[#ED1A3B] border-[#ED1A3B]" : "border-[#D7D7D7]"
                      )}
                    >
                      {active && <Check size={10} className="text-white" strokeWidth={3} />}
                    </div>

                    <div className="pr-6">
                      <p className="font-semibold text-sm text-[#1B1B1B] mb-0.5">{goal.label}</p>
                      <p className="text-xs text-[#939393] leading-snug">{goal.desc}</p>
                      <p className="text-[10px] text-[#C0C0C0] mt-2">
                        Modules: {goal.modules.join(", ")}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 md:p-8">
            <p className="text-[#ED1A3B] text-xs font-semibold uppercase tracking-widest mb-1">Step 3</p>
            <h2 className="font-heading font-bold text-lg text-[#1B1B1B] mb-6">
              Team size & hosting
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {/* Users */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#939393] mb-3">
                  Number of Users
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setNumUsers((n) => Math.max(1, n - 1))}
                    className="w-9 h-9 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#ED1A3B] transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <input
                    type="number"
                    min={1}
                    max={500}
                    value={numUsers}
                    onChange={(e) => setNumUsers(Math.min(500, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="w-16 text-center font-heading font-bold text-lg border border-[#E5E5E5] rounded-lg py-2 focus:outline-none focus:border-[#ED1A3B]"
                  />
                  <button
                    onClick={() => setNumUsers((n) => Math.min(500, n + 1))}
                    className="w-9 h-9 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:border-[#ED1A3B] transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                  <span className="text-sm text-[#939393]">users</span>
                </div>
              </div>

              {/* Billing */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#939393] mb-3">
                  Billing
                </p>
                {hosting === "on_premise" ? (
                  <div>
                    <span className="inline-block bg-[#F5F5F5] border border-[#E5E5E5] text-[#939393] text-xs font-semibold px-3 py-1.5 rounded-full">
                      Yearly only &minus;9%
                    </span>
                    <p className="text-[10px] text-[#939393] mt-1.5">On-Premise licenses are annual</p>
                  </div>
                ) : (
                  <div className="flex bg-[#F5F5F5] rounded-full p-1 w-fit gap-1">
                    {(["monthly", "yearly"] as const).map((b) => (
                      <button
                        key={b}
                        onClick={() => setBilling(b)}
                        className={cn(
                          "px-4 py-1.5 rounded-full text-xs font-semibold transition-all",
                          billing === b
                            ? "bg-white text-[#1B1B1B] shadow-sm"
                            : "text-[#939393]"
                        )}
                      >
                        {b === "monthly" ? "Monthly" : "Yearly −9%"}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Hosting */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#939393] mb-3">
                  Hosting
                </p>
                <div className="flex flex-col gap-2">
                  {(
                    [
                      { id: "online", label: "Odoo Online", Icon: Globe },
                      { id: "odoo_sh", label: "Odoo.sh", Icon: Cloud },
                      { id: "on_premise", label: "On-Premise", Icon: Server },
                    ] as const
                  ).map(({ id, label, Icon }) => (
                    <button
                      key={id}
                      onClick={() => setHosting(id)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all",
                        hosting === id
                          ? "border-[#ED1A3B] bg-[#ED1A3B]/5 text-[#1B1B1B]"
                          : "border-[#E5E5E5] text-[#939393] hover:border-[#ED1A3B]/30"
                      )}
                    >
                      <Icon size={14} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Server tier (on-premise) */}
            {hosting === "on_premise" && (
              <div className="border-t border-[#E5E5E5] pt-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#939393]">
                    Server Size (AWS / Cloud Estimate)
                  </p>
                  <p className="text-[10px] text-[#939393]">Billed yearly</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {serverTiers.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setServerTier(tier.id)}
                      className={cn(
                        "flex flex-col items-start p-4 rounded-xl border text-left transition-all",
                        serverTier === tier.id
                          ? "border-[#ED1A3B] bg-[#ED1A3B]/5"
                          : "border-[#E5E5E5] hover:border-[#ED1A3B]/30"
                      )}
                    >
                      <p className="font-heading font-bold text-sm text-[#1B1B1B] mb-1">{tier.name}</p>
                      <p className="text-[10px] text-[#939393] leading-tight mb-2">{tier.specs}</p>
                      <p className="text-xs font-semibold text-[#1B1B1B]">
                        PKR {formatPKR(tier.annualPkr)}<span className="font-normal text-[#939393]">/yr</span>
                      </p>
                      <p className="text-[10px] text-[#939393] mt-0.5">{tier.userRange}</p>
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-[#939393] mt-3">
                  Estimates based on AWS EC2 {serverTierData.awsEquivalent}. Actual cost may vary by region and provider.
                </p>
              </div>
            )}

            {/* Odoo.sh config */}
            {hosting === "odoo_sh" && (
              <div className="border-t border-[#E5E5E5] pt-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#939393] mb-4">
                  Odoo.sh Configuration
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  {[
                    { label: "Workers ($72/mo)", val: workers, set: setWorkers, min: 1, max: 8 },
                    { label: "Staging Envs ($18/mo)", val: stagingEnvs, set: setStagingEnvs, min: 0, max: 5 },
                  ].map(({ label, val, set, min, max }) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="text-sm text-[#939393] w-36">{label}</span>
                      <button onClick={() => set((n) => Math.max(min, n - 1))} className="w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center">
                        <Minus size={12} />
                      </button>
                      <span className="font-bold text-base w-6 text-center">{val}</span>
                      <button onClick={() => set((n) => Math.min(max, n + 1))} className="w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center">
                        <Plus size={12} />
                      </button>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#939393] mt-3">
                  Hosting: PKR {formatPKR(odooShMonthly * USD_TO_PKR * 12)}/yr
                </p>
              </div>
            )}
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 md:p-8">
            <h3 className="font-heading font-bold text-base text-[#1B1B1B] mb-5">
              Frequently Asked Questions
            </h3>
            <div className="flex flex-col gap-5">
              {[
                {
                  q: "What does Tecaudex's setup fee cover?",
                  a: "The one-time implementation fee covers full module configuration, workflow customisation, data migration assistance, user training, and 2 weeks of post-go-live support. There are no hidden charges.",
                },
                {
                  q: "Do I pay the Odoo subscription to Tecaudex?",
                  a: "No. Odoo subscriptions are paid directly to Odoo. Tecaudex charges only the separate implementation fee shown in the Year 1 total.",
                },
                {
                  q: "Can I start with fewer modules and add more later?",
                  a: "Yes. Odoo is modular by design. You can go live with your core modules first and activate additional ones as your business grows.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-[#F5F5F5] pb-5 last:border-0 last:pb-0">
                  <p className="font-semibold text-sm text-[#1B1B1B] mb-1.5">{q}</p>
                  <p className="text-sm text-[#939393] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Results panel ── */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          {!hasSelections ? (
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-10 text-center">
              <p className="text-4xl mb-4">👆</p>
              <p className="font-heading font-bold text-[#1B1B1B] mb-2">Select your business type above</p>
              <p className="text-sm text-[#939393] leading-relaxed">
                We&apos;ll instantly recommend the right Odoo setup and show you the full cost breakdown.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden">

              {/* Header */}
              <div className="bg-[#1A1A1A] px-6 py-6">
                <p className="text-[#ED1A3B] text-[10px] font-bold uppercase tracking-widest mb-3">
                  Recommended Package
                </p>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-heading font-bold text-2xl text-white leading-tight">
                      {pkg.name}
                    </p>
                    <p className="text-white/50 text-xs mt-1">{pkg.tagline}</p>
                  </div>
                  {pkg.pricePkr > 0 ? (
                    <div className="text-right shrink-0">
                      <p className="font-heading font-bold text-xl text-white">
                        PKR {formatPKR(pkg.pricePkr)}
                      </p>
                      <p className="text-white/40 text-[10px] mt-0.5">one-time setup</p>
                    </div>
                  ) : (
                    <span className="bg-[#ED1A3B]/20 text-[#ED1A3B] text-xs font-semibold px-3 py-1 rounded-full">
                      Custom quote
                    </span>
                  )}
                </div>
              </div>

              {/* What's included */}
              <div className="border-b border-[#F0F0F0]">
                <button
                  onClick={() => setIncludesOpen((o) => !o)}
                  className="flex items-center justify-between w-full px-6 py-4 text-sm font-semibold text-[#1B1B1B] hover:bg-[#FAFAFA] transition-colors"
                >
                  What&apos;s included
                  {includesOpen ? <ChevronUp size={14} className="text-[#939393]" /> : <ChevronDown size={14} className="text-[#939393]" />}
                </button>
                {includesOpen && (
                  <div className="px-6 pb-5">
                    <ul className="flex flex-col gap-2.5">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-[#1B1B1B]">
                          <Check size={13} className="text-[#ED1A3B] shrink-0" strokeWidth={2.5} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modules */}
              {modules.length > 0 && (
                <div className="px-6 py-4 border-b border-[#F0F0F0]">
                  <p className="text-[10px] text-[#939393] font-semibold uppercase tracking-widest mb-2.5">
                    Odoo Modules ({modules.length})
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {modules.map((m) => (
                      <span key={m} className="text-[10px] bg-[#F5F5F5] text-[#939393] px-2.5 py-1 rounded-md font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Cost breakdown */}
              <div className="px-6 py-5 flex flex-col gap-4 border-b border-[#F0F0F0]">
                <p className="text-[10px] text-[#939393] font-semibold uppercase tracking-widest">
                  Cost Breakdown
                </p>

                {/* Subscription */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-[#1B1B1B]">Odoo Subscription</p>
                    <span className="text-[10px] font-semibold bg-[#F5F5F5] text-[#939393] px-2 py-0.5 rounded-md uppercase tracking-wide">
                      {odooPlans[plan].label}
                    </span>
                  </div>
                  {plan === "one_app" ? (
                    <p className="text-sm text-green-600 font-medium">Free for 1 app, unlimited users</p>
                  ) : (
                    <div className="flex flex-col gap-1 mt-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#939393]">
                          {numUsers} users × PKR {formatPKR(odooPlans[plan][effectiveBilling] * USD_TO_PKR)}/mo
                        </span>
                        <span className="text-[#1B1B1B]">PKR {formatPKR(odooMonthly * USD_TO_PKR)}/mo</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#939393]">Annual total</span>
                        <span className="font-semibold text-[#1B1B1B]">PKR {formatPKR(odooAnnual * USD_TO_PKR)}/yr</span>
                      </div>
                      {effectiveBilling === "yearly" && monthlySaving > 0 && (
                        <p className="text-[11px] text-green-600 font-medium mt-0.5">
                          Saves PKR {formatPKR(monthlySaving * USD_TO_PKR)}/yr vs monthly
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Hosting */}
                {hosting === "on_premise" && (
                  <div className="pt-3 border-t border-[#F0F0F0]">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-semibold text-[#1B1B1B]">Server</p>
                      <span className="text-sm font-semibold text-[#1B1B1B]">
                        PKR {formatPKR(serverTierData.annualPkr)}/yr
                      </span>
                    </div>
                    <p className="text-xs text-[#939393]">
                      {serverTierData.name} · {serverTierData.specs} · {serverTierData.userRange}
                    </p>
                  </div>
                )}

                {hosting === "odoo_sh" && (
                  <div className="pt-3 border-t border-[#F0F0F0]">
                    <div className="flex justify-between text-sm">
                      <p className="font-semibold text-[#1B1B1B]">Odoo.sh Hosting</p>
                      <span className="font-semibold text-[#1B1B1B]">
                        PKR {formatPKR(odooShAnnual * USD_TO_PKR)}/yr
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Totals */}
              <div className="px-6 py-5">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm text-[#939393]">Year 2+ recurring</p>
                  <p className="text-sm font-semibold text-[#1B1B1B]">
                    PKR {formatPKR(year2Pkr)}/yr
                  </p>
                </div>

                <div className="bg-[#1A1A1A] rounded-xl p-4 flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-[#ED1A3B] font-bold uppercase tracking-widest mb-0.5">
                      Year 1 Total
                    </p>
                    <p className="text-[10px] text-white/40">Setup fee + first year costs</p>
                  </div>
                  <p className="font-heading font-bold text-2xl text-white">
                    {pkg.pricePkr === -1 ? "Custom" : `PKR ${formatPKR(year1Pkr)}`}
                  </p>
                </div>

                <a
                  href="https://cal.com/tecaudex/discovery-call?duration=30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#ED1A3B] hover:bg-[#c9162f] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm w-full"
                >
                  Book a Discovery Call
                  <ArrowUpRight size={15} />
                </a>

                <p className="text-[10px] text-[#939393] text-center leading-relaxed mt-4">
                  Odoo subscription is paid directly to Odoo in USD. Tecaudex charges a separate one-time setup fee.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile bottom bar */}
      {hasSelections && (
        <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-[#E5E5E5] px-4 py-3 flex items-center justify-between gap-4 z-40">
          <div>
            <p className="text-xs text-[#939393]">{pkg.name} Package</p>
            <p className="font-heading font-bold text-[#1B1B1B] text-sm">
              {pkg.pricePkr === -1 ? "Custom quote" : `PKR ${formatPKR(year1Pkr)} / Year 1`}
            </p>
          </div>
          <a
            href="https://cal.com/tecaudex/discovery-call?duration=30"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ED1A3B] hover:bg-[#c9162f] text-white font-semibold px-5 py-2.5 rounded-full text-sm whitespace-nowrap transition-colors"
          >
            Schedule a Call
          </a>
        </div>
      )}
    </div>
  );
}
