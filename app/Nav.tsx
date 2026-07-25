"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#firms", label: "For firms" },
  { href: "#candidates", label: "For lawyers" },
  { href: "#practice", label: "Practices" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="wrap">
      <a className="logo" href="#top" onClick={() => setOpen(false)}>
        <span>apexdot</span>
        <i />
        <em>io</em>
      </a>

      {/* Desktop */}
      <div className="nav">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <a className="pill" href="#contact">
          Start a search <span>&rarr;</span>
        </a>
      </div>

      {/* Mobile trigger */}
      <button
        type="button"
        className={`burger ${open ? "is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      {/* Mobile overlay + panel */}
      <div
        className={`m-scrim ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        className={`m-menu ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="m-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
        <a className="btn btn-primary m-cta" href="#contact" onClick={() => setOpen(false)}>
          Start a search
        </a>
      </div>
    </nav>
  );
}
