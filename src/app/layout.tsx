import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tecaudex | Odoo ERP, Mobile & AI Development in Pakistan",
  description:
    "Pakistan's trusted technology partner for Odoo ERP implementation, mobile app development, and AI/ML solutions. Serving businesses across Pakistan with enterprise-grade software.",
  keywords:
    "Odoo ERP Pakistan, mobile app development Pakistan, AI development Pakistan, ERP implementation Lahore, software company Pakistan",
  openGraph: {
    title: "Tecaudex | Odoo ERP, Mobile & AI Development in Pakistan",
    description:
      "Pakistan's trusted technology partner for Odoo ERP, mobile apps, and AI solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
