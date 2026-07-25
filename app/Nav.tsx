"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#firms", label: "For firms" },
  { href: "/apply", label: "For lawyers" },
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
      <a className="logo" href="#top" onClick={() => setOpen(false)} aria-label="Apexdot home">
        <img src="/logomark.png" alt="Apexdot" width={30} height={30} />
      </a>

      {/* Desktop */}
      <div className="nav">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <a className="pill" href="/apply">
          Apply <span>&rarr;</span>
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
        <a className="btn btn-primary m-cta" href="/apply" onClick={() => setOpen(false)}>
          Apply
        </a>
      </div>
    </nav>
  );
}
