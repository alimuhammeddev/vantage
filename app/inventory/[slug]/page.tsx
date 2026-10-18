import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import VehicleCard from "@/components/vehicle-card";
import VehicleGallery from "@/components/vehicle-gallery";
import { findVehicle, formatMileage, formatPrice, vehicles } from "@/lib/vehicles";

type Props = { params: Promise<{ slug: string }> };

export const instant = false;

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = findVehicle(slug);
  return vehicle
    ? { title: vehicle.name, description: vehicle.description, robots: { index: false, follow: false } }
    : { title: "Vehicle not found" };
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = findVehicle(slug);
  if (!vehicle) notFound();

  const similar = vehicles
    .filter((item) => item.slug !== vehicle.slug && (item.category === vehicle.category || item.make === vehicle.make))
    .slice(0, 3);
  const bookingHref = `/book-a-viewing?vehicle=${encodeURIComponent(vehicle.slug)}`;
  const contactHref = `/contact?vehicle=${encodeURIComponent(vehicle.slug)}`;

  return (
    <>
      <div className="breadcrumb page-container">
        <Link href="/">Home</Link><span>/</span><Link href="/inventory">Collection</Link><span>/</span><span>{vehicle.name}</span>
      </div>
      <section className="vehicle-detail page-container">
        <VehicleGallery images={vehicle.images} name={vehicle.name} />
        <div className="vehicle-detail-info">
          <span className="eyebrow"><i /> {vehicle.year} · {vehicle.category}</span>
          <h1>{vehicle.name}</h1>
          <p className="detail-subtitle">{vehicle.make} {vehicle.model}</p>
          <div className="detail-price"><strong>{formatPrice(vehicle.price)}</strong></div>
          <div className="detail-spec-grid">
            <div><span>Mileage</span><strong>{formatMileage(vehicle.mileage)}</strong></div>
            <div><span>Fuel</span><strong>{vehicle.fuel}</strong></div>
            <div><span>Transmission</span><strong>{vehicle.transmission}</strong></div>
            <div><span>Exterior</span><strong>{vehicle.exterior}</strong></div>
          </div>
          <Link className="button button-gold detail-primary" href={bookingHref}>Enquire about this vehicle <span aria-hidden="true">↗</span></Link>
          <Link className="detail-contact" href={contactHref}>Contact us about this vehicle <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="vehicle-overview section-pad">
        <div className="page-container overview-layout">
          <div><span className="eyebrow"><i /> The overview</span><h2>Designed to make<br /><em>every journey count.</em></h2></div>
          <div className="overview-copy">
            <p>{vehicle.description}</p>
            <h3>Specifications</h3>
            <dl className="spec-list">
              <div><dt>Model year</dt><dd>{vehicle.year}</dd></div>
              <div><dt>Powertrain</dt><dd>{vehicle.powertrain}</dd></div>
              <div><dt>Interior</dt><dd>{vehicle.interior}</dd></div>
              <div><dt>Category</dt><dd>{vehicle.category}</dd></div>
            </dl>
            <h3>Selected features</h3>
            <ul className="feature-list">{vehicle.features.map((feature) => <li key={feature}><span aria-hidden="true">＋</span>{feature}</li>)}</ul>
          </div>
        </div>
      </section>
      {similar.length > 0 && (
        <section className="similar-section section-pad page-container">
          <div className="section-heading section-heading-row"><div><span className="eyebrow"><i /> Continue exploring</span><h2>More to <em>discover.</em></h2></div><Link className="text-link" href="/inventory">View collection <span aria-hidden="true">↗</span></Link></div>
          <div className="vehicle-grid">{similar.map((item) => <VehicleCard key={item.id} vehicle={item} />)}</div>
        </section>
      )}
    </>
  );
}
