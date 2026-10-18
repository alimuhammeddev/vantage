"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`site-header${pathname === "/" ? " home-header" : " interior-header"}${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}
    >
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Vantage Motors home">
          <span>VANTAGE</span>
          <small>MOTORS</small>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              aria-current={isActive(link.href) ? "page" : undefined}
              className={isActive(link.href) ? "active" : ""}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-gold header-cta" href="/book-a-viewing">
          Book a Viewing <span aria-hidden="true">↗</span>
        </Link>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className={`menu-toggle${open ? " is-open" : ""}`}
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>
      <div
        className={`mobile-navigation${open ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link
              aria-current={isActive(link.href) ? "page" : undefined}
              className={isActive(link.href) ? "active" : ""}
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <span>0{index + 1}</span>
              {link.label}
            </Link>
          ))}
          <Link
            className="button button-gold mobile-book"
            href="/book-a-viewing"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            Book a Viewing <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <p>Driven by distinction.</p>
      </div>
    </header>
  );
}
