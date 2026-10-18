import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How VANTAGE MOTORS collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-heading page-container">
        <span className="eyebrow"><i /> The small print</span>
        <h1>Privacy, with<br /><em>clarity.</em></h1>
        <p>How VANTAGE MOTORS collects, uses and protects your personal information.</p>
      </section>
      <article className="privacy-content page-container">
        <p className="privacy-date">LAST UPDATED OCTOBER 2026</p>
        <section><h2>Who we are</h2><p>VANTAGE MOTORS is a luxury and performance vehicle dealership based in Vintage City. This policy explains how we handle personal information collected through this website.</p></section>
        <section><h2>Information you submit</h2><p>When you send an enquiry or request a viewing, we collect the details you provide, such as your name, email address, phone number, preferred date and time, vehicle of interest, and any message you include. We use this information only to respond to your enquiry, arrange viewings, and provide information about our vehicles and services.</p></section>
        <section><h2>How we keep and share your information</h2><p>We keep your details only for as long as needed to deal with your enquiry and meet our legal obligations. We do not sell your personal information. We share it only with service providers who help us operate our business, and where required by law.</p></section>
        <section><h2>Your rights</h2><p>You may ask us to access, correct or delete the personal information we hold about you, or to stop contacting you. To make a request, contact us using the details below.</p></section>
        <section><h2>Cookies and external services</h2><p>This website does not use analytics or advertising trackers. Vehicle images are loaded from Unsplash, whose service may process standard connection data, such as your IP address, when those images are requested.</p></section>
        <section><h2>Contact</h2><p>For any privacy question, call us on +234 12 5678 3332 or email vantage@example.com. We are open 24 hours.</p></section>
      </article>
    </>
  );
}
