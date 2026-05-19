export const USD_TO_PKR = 278;

export const businessTypes = [
  { id: "retail", label: "Retail / Shop", emoji: "🛍️", goals: ["sales_crm", "invoicing", "inventory", "pos", "accounting"] },
  { id: "manufacturing", label: "Manufacturing", emoji: "🏭", goals: ["manufacturing", "inventory", "purchasing", "accounting", "hr", "payroll"] },
  { id: "trading", label: "Trading / Distribution", emoji: "📦", goals: ["inventory", "purchasing", "sales_crm", "invoicing", "accounting"] },
  { id: "restaurant", label: "Restaurant / F&B", emoji: "🍽️", goals: ["pos", "inventory", "purchasing", "accounting", "hr"] },
  { id: "services", label: "Services / Agency", emoji: "💼", goals: ["sales_crm", "invoicing", "projects", "hr", "payroll"] },
  { id: "healthcare", label: "Healthcare / Clinic", emoji: "🏥", goals: ["invoicing", "accounting", "hr", "helpdesk"] },
  { id: "real_estate", label: "Real Estate", emoji: "🏢", goals: ["sales_crm", "invoicing", "accounting", "projects"] },
  { id: "education", label: "Education", emoji: "🎓", goals: ["invoicing", "accounting", "hr", "payroll"] },
  { id: "ecommerce", label: "eCommerce", emoji: "🛒", goals: ["ecommerce", "inventory", "invoicing", "helpdesk", "marketing"] },
  { id: "other", label: "Other Business", emoji: "🏗️", goals: ["sales_crm", "invoicing", "accounting"] },
] as const;

export const goals = [
  { id: "sales_crm", label: "Manage customers & sales pipeline", desc: "Track leads, follow up deals, and manage customer relationships", modules: ["crm", "sales"] },
  { id: "invoicing", label: "Send quotes & collect payments", desc: "Create professional quotations, confirm orders, and get paid on time", modules: ["sales", "invoicing"] },
  { id: "accounting", label: "Accounting & financial reports", desc: "Full books, bank reconciliation, tax returns, and P&L reports", modules: ["accounting"] },
  { id: "inventory", label: "Track stock & inventory", desc: "Real-time stock levels, multiple warehouses, automatic reordering", modules: ["inventory"] },
  { id: "purchasing", label: "Manage purchases & suppliers", desc: "Raise purchase orders, compare vendors, and receive goods", modules: ["purchase"] },
  { id: "pos", label: "Counter sales & payments (POS)", desc: "POS terminal for your retail shop, pharmacy, or restaurant", modules: ["pos"] },
  { id: "ecommerce", label: "Sell online (website & e-store)", desc: "Launch a website and full online store with integrated payments", modules: ["website", "ecommerce"] },
  { id: "hr", label: "Manage employees & HR", desc: "Employee records, leave requests, attendance, and org chart", modules: ["employees", "time_off"] },
  { id: "payroll", label: "Run payroll & salaries", desc: "Automated payslips, salary structures, and tax deductions", modules: ["payroll", "employees"] },
  { id: "manufacturing", label: "Manufacturing & production", desc: "Bills of materials, work orders, and quality control on the floor", modules: ["manufacturing", "quality", "inventory"] },
  { id: "projects", label: "Manage projects & track work hours", desc: "Plan tasks, set milestones, and track billable time", modules: ["project", "timesheets"] },
  { id: "helpdesk", label: "Customer support & helpdesk", desc: "Handle support tickets, set SLAs, and improve response times", modules: ["helpdesk"] },
  { id: "marketing", label: "Email & SMS marketing campaigns", desc: "Send targeted campaigns and automate follow-ups", modules: ["email_marketing", "marketing_automation"] },
  { id: "maintenance", label: "Equipment & asset maintenance", desc: "Schedule preventive maintenance and track breakdowns", modules: ["maintenance"] },
  { id: "field_service", label: "Field teams & on-site jobs", desc: "Schedule field visits, track technicians, and close jobs on mobile", modules: ["field_service", "planning"] },
];

export const serverTiers = [
  { id: "basic", name: "Basic", specs: "2 vCPU · 2 GB RAM · 20 GB SSD", awsEquivalent: "t3.small + S3", annualUsd: 228, annualPkr: 63384, userRange: "Up to 10 users" },
  { id: "standard", name: "Standard", specs: "2 vCPU · 8 GB RAM · 50 GB SSD", awsEquivalent: "t3.large + S3", annualUsd: 804, annualPkr: 223512, userRange: "10–30 users" },
  { id: "professional", name: "Professional", specs: "4 vCPU · 16 GB RAM · 100 GB SSD", awsEquivalent: "m5.xlarge + S3", annualUsd: 1836, annualPkr: 510408, userRange: "30–100 users" },
  { id: "enterprise", name: "Enterprise", specs: "8 vCPU · 32 GB RAM · 200 GB SSD", awsEquivalent: "m5.2xlarge + S3", annualUsd: 3708, annualPkr: 1030824, userRange: "100+ users" },
];

export const odooPlans = {
  one_app: { monthly: 0, yearly: 0, label: "One App Free", desc: "1 app, unlimited users on Odoo Online" },
  standard: { monthly: 7.95, yearly: 7.25, label: "Standard", desc: "All apps (except custom), ideal for most businesses" },
  custom: { monthly: 13.60, yearly: 10.90, label: "Custom", desc: "All apps including Studio, custom modules, and external API" },
};

export const packages = [
  {
    id: "starter",
    name: "Starter",
    pricePkr: 210000,
    maxModules: 3,
    highlight: false,
    tagline: "Perfect for small businesses getting started with Odoo",
    includes: [
      "Up to 3 Odoo modules",
      "Standard configuration",
      "Basic data migration",
      "1 training session",
      "2 weeks post-go-live support",
    ],
  },
  {
    id: "business",
    name: "Business",
    pricePkr: 485000,
    maxModules: 7,
    highlight: true,
    tagline: "Most popular — covers all core business operations",
    includes: [
      "Up to 7 Odoo modules",
      "Custom workflows & automation",
      "Full data migration",
      "3 training sessions",
      "4 weeks post-go-live support",
      "Dedicated project manager",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    pricePkr: 880000,
    maxModules: 12,
    highlight: false,
    tagline: "Full-scale implementation for growing enterprises",
    includes: [
      "Up to 12 Odoo modules",
      "Advanced customisations",
      "Complex data migration",
      "Unlimited training sessions",
      "8 weeks post-go-live support",
      "Dedicated project manager",
      "Custom reports & dashboards",
    ],
  },
  {
    id: "enterprise_pkg",
    name: "Enterprise",
    pricePkr: -1,
    maxModules: Infinity,
    highlight: false,
    tagline: "Fully custom scope for large or complex organisations",
    includes: [
      "Unlimited modules",
      "Bespoke development",
      "Enterprise data migration",
      "On-site training",
      "6-month support SLA",
      "Dedicated team",
    ],
  },
];

export function getUniqueModules(selectedGoalIds: string[]): string[] {
  const modules = new Set<string>();
  for (const gid of selectedGoalIds) {
    const goal = goals.find((g) => g.id === gid);
    if (goal) goal.modules.forEach((m) => modules.add(m));
  }
  return Array.from(modules);
}

export function determinePlan(
  modules: string[],
  hosting: string
): "one_app" | "standard" | "custom" {
  if (hosting === "odoo_sh" || hosting === "on_premise") return "custom";
  if (modules.length <= 1) return "one_app";
  return "standard";
}

export function determinePackage(modules: string[]) {
  const count = modules.length;
  if (count <= 3) return packages[0];
  if (count <= 7) return packages[1];
  if (count <= 12) return packages[2];
  return packages[3];
}

export function formatPKR(n: number): string {
  return new Intl.NumberFormat("en-PK", {
    maximumFractionDigits: 0,
  }).format(n);
}
