"use client";

import { useSearchParams } from "next/navigation";
import EnquiryForm from "@/components/enquiry-form";
import { findVehicle } from "@/lib/vehicles";

export default function BookingContent() {
  const params = useSearchParams();
  const slug = params.get("vehicle") ?? "";
  const vehicle = findVehicle(slug);
  return (
    <div className="form-card">
      <div className="form-card-heading">
        <span className="eyebrow">Viewing request</span>
        <span className="form-step">01 / 01</span>
      </div>
      {vehicle && (
        <div className="selected-vehicle">
          <span className="eyebrow">Your vehicle of interest</span>
          <strong>
            {vehicle.year} {vehicle.name}
          </strong>
        </div>
      )}
      <EnquiryForm kind="booking" selectedVehicle={vehicle?.slug ?? ""} />
    </div>
  );
}
