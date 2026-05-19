import type { Metadata } from "next";
import OdooCalculator from "@/components/calculator/OdooCalculator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Odoo ERP Cost Calculator | Tecaudex Pakistan",
  description:
    "Calculate the cost of Odoo ERP implementation for your Pakistani business. Get an instant breakdown of subscription, hosting, and setup fees.",
};

export default function OdooCalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F5F5F5] pt-20">
        <OdooCalculator />
      </main>
      <Footer />
    </>
  );
}
