import type { Metadata } from "next";
import FaqAccordion from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about the VANTAGE MOTORS concept website and its illustrative listings.",
};

export default function FaqPage() {
  return (
    <>
      <section className="page-heading page-container">
        <span className="eyebrow"><i /> A little clarity</span>
        <h1>Frequently asked<br /><em>questions.</em></h1>
        <p>Helpful details about our concept collection and how the demonstration works.</p>
      </section>
      <section className="faq-section page-container"><FaqAccordion /></section>
    </>
  );
}
