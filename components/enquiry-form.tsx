"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { vehicles } from "@/lib/vehicles";

type FormKind = "booking" | "contact";

export default function EnquiryForm({
  kind,
  selectedVehicle = "",
}: {
  kind: FormKind;
  selectedVehicle?: string;
}) {
  const isBooking = kind === "booking";
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    const pad = (value: number) => String(value).padStart(2, "0");
    setToday(
      `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`,
    );
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!name) nextErrors.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Please enter a valid email address.";
    if (
      (isBooking && !phone) ||
      (phone && !/^[+\d().\-\s]{7,20}$/.test(phone))
    ) {
      nextErrors.phone =
        isBooking && !phone
          ? "Please enter your phone number."
          : "Please enter a valid phone number.";
    }

    if (isBooking) {
      const date = String(data.get("date") ?? "");
      if (!date) nextErrors.date = "Please choose a preferred date.";
      else if (today && date < today)
        nextErrors.date = "Please choose today or a future date.";
    } else {
      if (!String(data.get("subject") ?? "").trim())
        nextErrors.subject = "Please enter a subject.";
      if (!String(data.get("message") ?? "").trim())
        nextErrors.message = "Please enter a message.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      document.getElementById("form-errors")?.focus();
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      form.reset();
    }, 500);
  }

  if (submitted) {
    return (
      <div className="form-confirmation" role="status">
        <span className="confirmation-mark" aria-hidden="true">
          ✓
        </span>
        <span className="eyebrow">
          {isBooking ? "Viewing request received" : "Message received"}
        </span>
        <h2>
          {isBooking ? "Your request is ready." : "Your message is ready."}
        </h2>
        <p>
          Thank you for getting in touch. A member of our team will review your
          details and respond as soon as possible to confirm the next steps.
        </p>
        <button
          className="text-button"
          type="button"
          onClick={() => setSubmitted(false)}
        >
          Send another enquiry <span aria-hidden="true">↗</span>
        </button>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      {Object.keys(errors).length > 0 && (
        <div
          className="form-errors"
          id="form-errors"
          role="alert"
          tabIndex={-1}
        >
          <strong>Please check the following:</strong>
          <ul>
            {Object.values(errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="form-grid">
        <label className="field-label">
          Full name
          <input
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "error-name" : undefined}
          />
          {errors.name && (
            <span className="field-error" id="error-name">
              {errors.name}
            </span>
          )}
        </label>
        <label className="field-label">
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
          />
          {errors.email && (
            <span className="field-error" id="error-email">
              {errors.email}
            </span>
          )}
        </label>
        <label className="field-label">
          Phone number
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required={isBooking}
            placeholder="+1 (555) 000-0000"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "error-phone" : undefined}
          />
          {errors.phone && (
            <span className="field-error" id="error-phone">
              {errors.phone}
            </span>
          )}
        </label>
        {isBooking ? (
          <>
            <label className="field-label">
              Vehicle of interest
              <select name="vehicle" defaultValue={selectedVehicle}>
                <option value="">I’m still exploring</option>
                {vehicles.map((vehicle) => (
                  <option value={vehicle.slug} key={vehicle.id}>
                    {vehicle.year} {vehicle.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label">
              Preferred date
              <input
                name="date"
                type="date"
                min={today || undefined}
                required
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? "error-date" : undefined}
              />
              {errors.date && (
                <span className="field-error" id="error-date">
                  {errors.date}
                </span>
              )}
            </label>
            <label className="field-label">
              Preferred time
              <select name="time" defaultValue="">
                <option value="" disabled>
                  Select a time
                </option>
                <option>Morning · 9 am–12 pm</option>
                <option>Afternoon · 12 pm–4 pm</option>
                <option>Late afternoon · 4 pm–6 pm</option>
              </select>
            </label>
            <label className="field-label">
              Preferred contact method
              <select name="contactMethod" defaultValue="Email">
                <option>Email</option>
                <option>Phone</option>
              </select>
            </label>
          </>
        ) : (
          <label className="field-label">
            Subject
            <input
              name="subject"
              required
              placeholder="How can we help?"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "error-subject" : undefined}
            />
            {errors.subject && (
              <span className="field-error" id="error-subject">
                {errors.subject}
              </span>
            )}
          </label>
        )}
        <label className="field-label field-full">
          {isBooking ? "Anything else we should know?" : "Your message"}
          <textarea
            name="message"
            rows={5}
            required={!isBooking}
            placeholder={
              isBooking
                ? "Share any preferences or questions…"
                : "Write your message…"
            }
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "error-message" : undefined}
          />
          {errors.message && (
            <span className="field-error" id="error-message">
              {errors.message}
            </span>
          )}
        </label>
      </div>
      <button
        className="button button-gold form-submit"
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Preparing your request…"
          : isBooking
            ? "Send viewing request"
            : "Send message"}
        {!loading && <span aria-hidden="true">↗</span>}
      </button>
    </form>
  );
}
