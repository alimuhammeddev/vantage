import type { Metadata } from "next";
import Link from "next/link";
import VehiclePhoto from "@/components/vehicle-photo";

export const metadata: Metadata = {
  title: "About Vantage",
  description: "Discover the considered philosophy behind the VANTAGE MOTORS fictional dealership concept.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-heading page-container">
        <span className="eyebrow"><i /> Our perspective</span>
        <h1>A different perspective<br />on <em>driving.</em></h1>
        <p>VANTAGE MOTORS was imagined around a simple principle: finding the right vehicle should feel considered, personal, and rewarding.</p>
      </section>
      <section className="about-hero-image image-frame">
        <VehiclePhoto src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=85" alt="A distinctive sports car viewed in the evening light" sizes="100vw" />
        <span className="image-index">VANTAGE MOTORS · A CONCEPT</span>
      </section>
      <section className="editorial-sections page-container">
        <article className="editorial-row">
          <span className="editorial-count">01 / PHILOSOPHY</span>
          <div><h2>More than a way<br />to <em>get somewhere.</em></h2><p>We believe a vehicle reflects personal taste, practical needs, and the experiences we value. Our approach is centered on helping people discover vehicles that align with their individual priorities.</p></div>
        </article>
        <article className="editorial-row">
          <span className="editorial-count">02 / APPROACH</span>
          <div><h2>Clarity makes<br />all the <em>difference.</em></h2><p>From vehicle specifications to arranging a viewing, every step of the experience should be straightforward and thoughtfully presented.</p></div>
        </article>
        <article className="editorial-row">
          <span className="editorial-count">03 / PERSPECTIVE</span>
          <div><h2>Character in<br />every <em>detail.</em></h2><p>From refined executive sedans to expressive performance cars, we celebrate automotive design, engineering, and the details that make every vehicle distinct.</p></div>
        </article>
      </section>
      <section className="page-cta section-pad"><span className="eyebrow eyebrow-light"><i /> Find your perspective</span><h2>Discover what<br /><em>moves you.</em></h2><Link href="/inventory" className="button button-gold">Explore the collection <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
