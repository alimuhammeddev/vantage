import type { Metadata } from "next";
import { Suspense } from "react";
import BookingContent from "@/components/booking-content";

export const metadata: Metadata = {
  title: "Book a Viewing",
  description: "Send a sample viewing request for an illustrative VANTAGE MOTORS vehicle.",
};

export default function BookingPage() {
  return (
    <>
      <section className="form-page page-container">
        <div className="form-page-intro">
          <span className="eyebrow"><i /> The next step</span>
          <h1>Experience it<br /><em>in person.</em></h1>
          <p>Tell us which vehicle interests you and when you would like to arrange a viewing.</p>
        </div>
        <Suspense fallback={<div className="loading-state">Loading enquiry form…</div>}><BookingContent /></Suspense>
      </section>
    </>
  );
}
