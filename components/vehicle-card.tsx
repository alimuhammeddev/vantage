import Link from "next/link";
import type { Vehicle } from "@/lib/vehicles";
import { formatMileage, formatPrice } from "@/lib/vehicles";
import VehiclePhoto from "@/components/vehicle-photo";

export default function VehicleCard({
  vehicle,
  compact = false,
}: {
  vehicle: Vehicle;
  compact?: boolean;
}) {
  const image = vehicle.images[0];

  return (
    <article
      className={`vehicle-card${compact ? " vehicle-card-compact" : ""}`}
    >
      <Link
        aria-label={`View ${vehicle.name}, ${vehicle.year}`}
        className="vehicle-card-image"
        href={`/inventory/${vehicle.slug}`}
      >
        <VehiclePhoto
          src={image.src}
          alt={image.alt}
          sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 33vw"
        />
        <span className="vehicle-card-year">{vehicle.year}</span>
        <span className="image-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
      <div className="vehicle-card-copy">
        <div className="vehicle-card-heading">
          <span className="eyebrow">{vehicle.make}</span>
          <span className="vehicle-category">{vehicle.category}</span>
        </div>
        <h3>
          <Link href={`/inventory/${vehicle.slug}`}>{vehicle.model}</Link>
        </h3>
        <div className="vehicle-card-meta">
          <span>{formatMileage(vehicle.mileage)}</span>
          <span>{vehicle.fuel}</span>
          <span>{vehicle.transmission}</span>
        </div>
        <div className="vehicle-card-price">
          <strong>{formatPrice(vehicle.price)}</strong>
        </div>
      </div>
    </article>
  );
}
