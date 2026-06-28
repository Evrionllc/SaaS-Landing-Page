"use client";

import { useEffect, useState } from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Logo from "./Logo";
import { MenuIcon, CloseIcon } from "./ui/icons";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a hairline + blur once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between sm:h-20">
          <a
            href="#top"
            className="rounded-lg"
            aria-label="Klok — back to top"
          >
            <Logo />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-pill px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-white hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#"
              className="rounded-pill px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
            >
              Log in
            </a>
            <Button href="#pricing">Start free trial</Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl text-ink ring-1 ring-line transition-colors hover:bg-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="space-y-1 border-t border-line bg-paper px-5 pb-6 pt-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-white"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            <Button href="#" variant="ghost" size="lg" onClick={() => setOpen(false)}>
              Log in
            </Button>
            <Button href="#pricing" size="lg" onClick={() => setOpen(false)}>
              Start free trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
