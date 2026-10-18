"use client";

import { useState } from "react";

const questions = [
  [
    "How can I enquire about a vehicle?",
    "Choose a vehicle from the collection and use its enquiry link, or send us a message through the contact page. You can also call us on +234 12 5678 3332 or email vantage@example.com.",
  ],
  [
    "Can I arrange a viewing?",
    "Yes. Submit a request using the booking form with your preferred date and time, and our team will get in touch to confirm your viewing.",
  ],
  [
    "Are the vehicle prices final?",
    "Prices shown are our current listing prices. Availability and final terms are confirmed by our team when you enquire, so please contact us before making travel plans.",
  ],
  [
    "Can I request additional vehicle information?",
    "Of course. Send an enquiry about any vehicle and we will share further details, including specifications, condition and available photographs.",
  ],
  [
    "Is the online inventory up to date?",
    "Our collection is updated regularly, but vehicles can sell quickly. Contact us to confirm that a specific vehicle is still available.",
  ],
  [
    "How do I contact the dealership?",
    "Use the contact form, call +234 12 5678 3332, or email vantage@example.com. We are open 24 hours.",
  ],
];

export default function FaqAccordion() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {questions.map(([question, answer], index) => (
        <section
          className={`faq-item${active === index ? " is-open" : ""}`}
          key={question}
        >
          <h2>
            <button
              aria-controls={`faq-answer-${index}`}
              aria-expanded={active === index}
              id={`faq-question-${index}`}
              onClick={() => setActive(active === index ? null : index)}
              type="button"
            >
              <span className="faq-index">0{index + 1}</span>
              <span>{question}</span>
              <span className="faq-icon" aria-hidden="true">
                {active === index ? "−" : "+"}
              </span>
            </button>
          </h2>
          {active === index && (
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className="faq-answer"
            >
              <p>{answer}</p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
