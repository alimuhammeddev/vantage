import type { Metadata } from "next";
import { Suspense } from "react";
import ContactContent from "@/components/contact-content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a sample enquiry to the fictional VANTAGE MOTORS dealership concept.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-heading page-container">
        <span className="eyebrow"><i /> We’re listening</span>
        <h1>Let’s start a<br /><em>conversation.</em></h1>
        <p>Have a question about a vehicle or need help exploring your options? Send us an enquiry.</p>
      </section>
      <section className="contact-layout page-container">
        <div className="contact-details">
          <span className="eyebrow">Get in touch</span>
          <h2>A good conversation<br />starts with <em>a question.</em></h2>
          <p>Have a question about a vehicle or want to arrange a visit? Reach us using the details below, or send an enquiry through the form.</p>
          <div className="contact-placeholder">
            <span className="eyebrow">Business details</span>
            <div><span>Address</span><strong>Vintage City</strong></div>
            <div><span>Phone</span><strong><a href="tel:+2341256783332">+234 12 5678 3332</a></strong></div>
            <div><span>Email</span><strong><a href="mailto:vantage@example.com">vantage@example.com</a></strong></div>
            <div><span>Opening hours</span><strong>Open 24 hours</strong></div>
          </div>
          <Link className="text-link" href="/book-a-viewing">Prefer to arrange a viewing? <span aria-hidden="true">↗</span></Link>
        </div>
        <Suspense fallback={<div className="loading-state">Loading enquiry form…</div>}><ContactContent /></Suspense>
      </section>
    </>
  );
}
