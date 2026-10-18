import Link from "next/link";
import VehiclePhoto from "@/components/vehicle-photo";
import VehicleCard from "@/components/vehicle-card";
import { vehicles } from "@/lib/vehicles";

const categories = [
  {
    title: "Performance",
    text: "Engineered for those who appreciate every curve.",
    category: "Performance",
    image: "photo-1503376780353-7e6692767b70",
    alt: "Performance coupe on an open road",
  },
  {
    title: "Luxury Sedans",
    text: "Comfort, presence, and precision in every detail.",
    category: "Luxury Sedan",
    image: "photo-1563720223185-11003d516935",
    alt: "Luxury sedan in a modern setting",
  },
  {
    title: "Premium SUVs",
    text: "Versatility with an unmistakable sense of occasion.",
    category: "Premium SUV",
    image: "photo-1519641471654-76ce0107ad1b",
    alt: "Premium SUV in a mountain landscape",
  },
  {
    title: "Executive Vehicles",
    text: "Refined travel for every important journey.",
    category: "Executive",
    image: "photo-1502877338535-766e1452684a",
    alt: "Executive vehicle detail",
  },
];

export default function Home() {
  const featured = vehicles.filter((vehicle) => vehicle.featured);
  return (
    <>
      <section className="home-hero">
        <VehiclePhoto
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=90"
          alt="Sculptural silver sports car on an open road"
          className="hero-image"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content page-container">
          <span className="eyebrow eyebrow-light">
            <i /> The Vantage Collection
          </span>
          <h1>
            Driven by
            <br />
            <em>distinction.</em>
          </h1>
          <p>
            Discover exceptional vehicles chosen for their design, performance,
            and unmistakable character.
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/inventory">
              Explore our collection <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-ghost" href="/book-a-viewing">
              Book a viewing <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="hero-caption">
          <span>01 / 04</span>
          <span>Precision in every detail</span>
          <span>Scroll to discover ↓</span>
        </div>
      </section>

      <section className="intro-section section-pad page-container">
        <div className="intro-copy">
          <span className="eyebrow">
            <i /> The Vantage Standard
          </span>
          <h2>
            More than a vehicle.
            <br />
            <em>A statement of intent.</em>
          </h2>
          <p>
            At VANTAGE MOTORS, we believe choosing a vehicle should feel as
            exceptional as driving one. Our collection brings together
            distinctive design, considered performance, and refined comfort,
            with a personal approach to discovering your next car.
          </p>
          <Link className="text-link" href="/about">
            Discover Vantage <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="intro-image image-frame">
          <VehiclePhoto
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85"
            alt="Close-up of sculpted automotive bodywork"
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <span className="image-index">EST. IN DETAIL · 01</span>
        </div>
      </section>

      <section className="featured-section section-pad">
        <div className="page-container">
          <div className="section-heading section-heading-row">
            <div>
              <span className="eyebrow">
                <i /> Curated for you
              </span>
              <h2>
                Exceptional <em>by nature.</em>
              </h2>
            </div>
            <div className="section-heading-aside">
              <p>Explore a selection of vehicles that stand apart.</p>
              <Link className="text-link" href="/inventory">
                View all vehicles <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="vehicle-grid featured-grid">
            {featured.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="category-section section-pad page-container">
        <div className="section-heading">
          <span className="eyebrow">
            <i /> Choose your perspective
          </span>
          <h2>
            Find your kind <em>of drive.</em>
          </h2>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              className="category-card"
              href={`/inventory?category=${encodeURIComponent(category.category)}`}
              key={category.title}
            >
              <div className="category-image">
                <VehiclePhoto
                  src={`https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=1200&q=85`}
                  alt={category.alt}
                  sizes="(max-width: 650px) 100vw, 50vw"
                />
                <span className="category-number">0{index + 1}</span>
              </div>
              <div className="category-copy">
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                </div>
                <span className="category-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="page-container values-layout">
          <div className="values-title">
            <span className="eyebrow eyebrow-light">
              <i /> The Vantage approach
            </span>
            <h2>
              Confidence in
              <br />
              <em>every detail.</em>
            </h2>
            <p>A thoughtful way to discover what moves you.</p>
          </div>
          <div className="value-list">
            <article>
              <span>01</span>
              <div>
                <h3>Carefully selected</h3>
                <p>
                  Every vehicle in our concept collection is presented with
                  clear information and attention to detail.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>A personal approach</h3>
                <p>
                  Explore your options with a viewing experience designed around
                  your needs.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Clarity in every detail</h3>
                <p>
                  Clear vehicle information and a straightforward enquiry
                  process help you make an informed decision.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="editorial-banner">
        <VehiclePhoto
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=85"
          alt="A refined car waiting beneath architectural lighting"
          sizes="100vw"
        />
        <div className="editorial-shade" />
        <div className="editorial-content page-container">
          <span className="eyebrow eyebrow-light">
            <i /> A new perspective
          </span>
          <h2>
            Your next chapter
            <br />
            <em>starts here.</em>
          </h2>
          <p>
            Discover a vehicle that reflects the way you move through the world.
          </p>
          <Link className="button button-gold" href="/inventory">
            Find your vehicle <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="viewing-callout section-pad page-container">
        <div>
          <span className="eyebrow">
            <i /> The experience
          </span>
          <h2>
            Some details are best
            <br />
            <em>appreciated up close.</em>
          </h2>
        </div>
        <div className="viewing-callout-aside">
          <p>
            Arrange a viewing and explore the vehicle that has caught your
            attention.
          </p>
          <Link className="button button-dark" href="/book-a-viewing">
            Experience it in person <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
