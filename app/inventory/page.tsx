import type { Metadata } from "next";
import { Suspense } from "react";
import InventoryBrowser from "@/components/inventory-browser";

export const metadata: Metadata = {
  title: "The Collection",
  description: "Explore the illustrative VANTAGE MOTORS collection of luxury, performance, and executive vehicles.",
};

export default function InventoryPage() {
  return (
    <>
      <section className="page-heading page-container">
        <span className="eyebrow"><i /> The collection</span>
        <h1>Find your next <em>vehicle.</em></h1>
        <p>A considered collection of performance, luxury, and everyday excellence.</p>
      </section>
      <section className="inventory-section page-container">
        <Suspense fallback={<div className="loading-state">Preparing the collection…</div>}>
          <InventoryBrowser />
        </Suspense>
      </section>
    </>
  );
}
