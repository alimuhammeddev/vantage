"use client";

import { useSearchParams } from "next/navigation";
import EnquiryForm from "@/components/enquiry-form";
import { findVehicle } from "@/lib/vehicles";

export default function ContactContent() {
  const params = useSearchParams();
  const vehicle = findVehicle(params.get("vehicle") ?? "");
  return (
    <div className="form-card">
      <div className="form-card-heading">
        <span className="eyebrow">Send an enquiry</span>
        <span className="form-step">01 / 01</span>
      </div>
      {vehicle && (
        <p className="context-note">
          Regarding:{" "}
          <strong>
            {vehicle.year} {vehicle.name}
          </strong>
        </p>
      )}
      <EnquiryForm kind="contact" />
    </div>
  );
}
