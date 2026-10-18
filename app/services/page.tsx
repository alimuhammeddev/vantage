import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the considered vehicle discovery and enquiry experience at VANTAGE MOTORS.",
};

const services = [
  { id: "01", title: "Vehicle discovery", copy: "Explore vehicle options based on your preferences, intended use, and budget.", href: "/inventory", cta: "Explore the collection", icon: "⌕" },
  { id: "02", title: "Viewing arrangements", copy: "Submit a viewing request for a vehicle that interests you.", href: "/book-a-viewing", cta: "Request a viewing", icon: "◷" },
  { id: "03", title: "Vehicle enquiries", copy: "Ask questions about vehicle specifications, features, and listing information.", href: "/contact", cta: "Make an enquiry", icon: "↗" },
  { id: "04", title: "Purchase guidance", copy: "Use clear vehicle information and a straightforward enquiry process to help evaluate your options.", href: "/faq", cta: "Read our FAQs", icon: "✳" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-heading page-container">
        <span className="eyebrow"><i /> How we can help</span>
        <h1>More than finding<br /><em>a car.</em></h1>
        <p>Explore a considered approach to discovering and choosing your next vehicle.</p>
      </section>
      <section className="services-list page-container">
        {services.map((service) => (
          <article className="service-row" key={service.id}>
            <span className="service-id">{service.id}</span>
            <span className="service-icon" aria-hidden="true">{service.icon}</span>
            <div className="service-copy"><h2>{service.title}</h2><p>{service.copy}</p></div>
            <Link className="text-link" href={service.href}>{service.cta} <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </section>
    </>
  );
}
