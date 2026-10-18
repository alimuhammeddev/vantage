"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, formatPrice, vehicles } from "@/lib/vehicles";
import type { FuelType, Transmission, VehicleCategory } from "@/lib/vehicles";
import VehicleCard from "@/components/vehicle-card";

const fuels: FuelType[] = ["Petrol", "Diesel", "Hybrid", "Electric"];
const transmissions: Transmission[] = ["Automatic", "Manual"];

export default function InventoryBrowser() {
  const params = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(params.get("category") ?? "");
  const [make, setMake] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [sort, setSort] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const makes = Array.from(
    new Set(vehicles.map((vehicle) => vehicle.make)),
  ).sort();

  const results = useMemo(() => {
    const filtered = vehicles.filter((vehicle) => {
      const term = query.trim().toLowerCase();
      return (
        (!term ||
          `${vehicle.name} ${vehicle.make} ${vehicle.model}`
            .toLowerCase()
            .includes(term)) &&
        (!category || vehicle.category === category) &&
        (!make || vehicle.make === make) &&
        (!fuel || vehicle.fuel === fuel) &&
        (!transmission || vehicle.transmission === transmission) &&
        (!minPrice || vehicle.price >= Number(minPrice)) &&
        (!maxPrice || vehicle.price <= Number(maxPrice)) &&
        (!minYear || vehicle.year >= Number(minYear)) &&
        (!maxYear || vehicle.year <= Number(maxYear))
      );
    });

    return filtered.sort((a, b) => {
      switch (sort) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "year":
          return b.year - a.year;
        case "mileage":
          return a.mileage - b.mileage;
        default:
          return Number(b.featured) - Number(a.featured);
      }
    });
  }, [
    query,
    category,
    make,
    fuel,
    transmission,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    sort,
  ]);

  const clear = () => {
    setQuery("");
    setCategory("");
    setMake("");
    setFuel("");
    setTransmission("");
    setMinPrice("");
    setMaxPrice("");
    setMinYear("");
    setMaxYear("");
    setSort("featured");
    window.history.replaceState({}, "", "/inventory");
  };

  return (
    <>
      <div className="inventory-toolbar">
        <p>
          <strong>{results.length}</strong>{" "}
          {results.length === 1 ? "vehicle" : "vehicles"}
        </p>
        <div className="inventory-toolbar-controls">
          <button
            className="button button-outline filter-trigger"
            type="button"
            aria-expanded={filterOpen}
            onClick={() => setFilterOpen((open) => !open)}
          >
            {filterOpen ? "Hide filters" : "Filters"}
            <span aria-hidden="true">{filterOpen ? "−" : "+"}</span>
          </button>
          <label className="sort-control">
            <span>Sort by</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="year">Newest Model Year</option>
              <option value="mileage">Lowest Mileage</option>
            </select>
          </label>
        </div>
      </div>
      <div className="inventory-layout">
        <aside
          className={`filter-panel${filterOpen ? " is-open" : ""}`}
          aria-label="Filter vehicles"
        >
          <div className="filter-panel-heading">
            <h2>Refine your search</h2>
            <button type="button" className="text-button" onClick={clear}>
              Clear all
            </button>
          </div>
          <label className="field-label">
            Search
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Make, model or vehicle"
            />
          </label>
          <label className="field-label">
            Category
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">All categories</option>
              {categories.map((value: VehicleCategory) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label className="field-label">
            Make
            <select
              value={make}
              onChange={(event) => setMake(event.target.value)}
            >
              <option value="">All makes</option>
              {makes.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <fieldset className="filter-fieldset">
            <legend>
              Price range <span>USD</span>
            </legend>
            <div className="filter-range">
              <label className="sr-only" htmlFor="min-price">
                Minimum price
              </label>
              <input
                id="min-price"
                type="number"
                min="0"
                step="5000"
                value={minPrice}
                onChange={(event) => setMinPrice(event.target.value)}
                placeholder="Min"
              />
              <span>—</span>
              <label className="sr-only" htmlFor="max-price">
                Maximum price
              </label>
              <input
                id="max-price"
                type="number"
                min="0"
                step="5000"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
                placeholder="Max"
              />
            </div>
            {minPrice || maxPrice ? (
              <span className="filter-hint">
                {minPrice ? formatPrice(Number(minPrice)) : "$0"} –{" "}
                {maxPrice ? formatPrice(Number(maxPrice)) : "No limit"}
              </span>
            ) : null}
          </fieldset>
          <fieldset className="filter-fieldset">
            <legend>Model year</legend>
            <div className="filter-range">
              <label className="sr-only" htmlFor="min-year">
                Earliest year
              </label>
              <input
                id="min-year"
                type="number"
                min="1900"
                max="2035"
                value={minYear}
                onChange={(event) => setMinYear(event.target.value)}
                placeholder="From"
              />
              <span>—</span>
              <label className="sr-only" htmlFor="max-year">
                Latest year
              </label>
              <input
                id="max-year"
                type="number"
                min="1900"
                max="2035"
                value={maxYear}
                onChange={(event) => setMaxYear(event.target.value)}
                placeholder="To"
              />
            </div>
          </fieldset>
          <label className="field-label">
            Fuel type
            <select
              value={fuel}
              onChange={(event) => setFuel(event.target.value)}
            >
              <option value="">All fuel types</option>
              {fuels.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label className="field-label">
            Transmission
            <select
              value={transmission}
              onChange={(event) => setTransmission(event.target.value)}
            >
              <option value="">Any transmission</option>
              {transmissions.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
        </aside>
        <div className="inventory-results" aria-live="polite">
          {results.length ? (
            <div className="vehicle-grid">
              {results.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="eyebrow">No matches found</span>
              <h2>Nothing in this collection just yet.</h2>
              <p>
                Try broadening your search or clearing some of your filters.
              </p>
              <button
                type="button"
                className="button button-dark"
                onClick={clear}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
