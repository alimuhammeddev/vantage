import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found page-container">
      <span className="eyebrow">
        <i /> Out of frame
      </span>
      <strong className="not-found-code">404</strong>
      <h1>
        This road doesn’t
        <br />
        <em>lead anywhere.</em>
      </h1>
      <p>
        The page or vehicle you’re looking for may have moved, or may not exist
        in this concept collection.
      </p>
      <div className="not-found-actions">
        <Link className="button button-gold" href="/">
          Return home <span aria-hidden="true">↗</span>
        </Link>
        <Link className="text-link" href="/inventory">
          Browse the collection <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
