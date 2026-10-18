import Link from "next/link";

const footerLinks = [
  { href: "/inventory", label: "The collection" },
  { href: "/services", label: "Our services" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Contact" },
  { href: "/book-a-viewing", label: "Book a viewing" },
  { href: "/faq", label: "FAQs" },
  { href: "/privacy", label: "Privacy policy" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="wordmark" href="/">
            <span>VANTAGE</span>
            <small>MOTORS</small>
          </Link>
          <p>Driven by distinction.</p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">Explore</span>
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-note">
          <span className="eyebrow">A considered collection</span>
          <p>
            VANTAGE MOTORS is a fictional dealership concept. Vehicle details,
            prices and enquiries on this website are for demonstration only.
          </p>
          <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
            Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 VANTAGE MOTORS</span>
        <span>Luxury &amp; Performance Vehicles</span>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}
