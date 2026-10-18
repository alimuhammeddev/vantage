# VANTAGE MOTORS

A fictional luxury automotive dealership concept built with Next.js App Router, React, TypeScript, and Tailwind CSS. All vehicle listings, features, mileage, and USD prices are illustrative sample content—not live inventory or offers for sale.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The project also includes `pnpm lint` and `pnpm build` scripts.

## Routes

- `/` — Brand homepage
- `/inventory` — Searchable and filterable sample collection
- `/inventory/[slug]` — Vehicle details, image gallery, and related listings
- `/about` — Concept background
- `/services` — Demonstration service descriptions
- `/book-a-viewing` — Viewing request preview
- `/contact` — Contact enquiry preview
- `/faq` — Demonstration FAQs
- `/privacy` — Sample privacy notice

Inventory data lives in `lib/vehicles.ts`. The shared header, footer, cards, gallery, forms, and inventory browser are in `components/`.

## Production integration

There is no dealership backend. Booking and contact forms validate input and show a local demonstration confirmation; they do not send or save enquiries or create appointments. Production use requires a real inventory source, secure form/booking endpoints, verified dealership details, and an appropriate privacy notice. Vehicle photos are requested from Unsplash; a production deployment should confirm image licensing and availability and consider hosting optimized assets.
