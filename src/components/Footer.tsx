import Link from "next/link";
import Container from "./ui/Container";
import Logo from "./Logo";

/**
 * Every footer link goes somewhere real: section anchors, the auth pages,
 * the legal pages, or a mailto. No dead "#" links.
 */
const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Start free trial", href: "/signup" },
      { label: "Log in", href: "/login" },
      { label: "Contact us", href: "mailto:hello@klok.example.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

// Inline, self-made social glyphs — no third-party icon assets.
function Social({ label, href, d }: { label: string; href: string; d: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-ink/20 hover:text-ink"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d={d} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <Container>
        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div className="col-span-2 max-w-xs md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Time tracking built for freelance designers. Track, tag, and bill
              without breaking your flow.
            </p>
            <div className="mt-5 flex gap-2">
              <Social
                label="Klok on X (opens in a new tab)"
                href="https://x.com"
                d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5-6.6L5.4 22H2.3l7.8-8.9L2 2h6.9l4.5 6zM17.7 20h1.7L7.5 4H5.7z"
              />
              <Social
                label="Klok on Instagram (opens in a new tab)"
                href="https://instagram.com"
                d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 3.2-1.6 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9C2.4 3.9 3.9 2.4 7.1 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 3.1A6.7 6.7 0 1012 18.7 6.7 6.7 0 0012 5.3zm0 11a4.3 4.3 0 110-8.6 4.3 4.3 0 010 8.6zm6.9-11.3a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0z"
              />
              <Social
                label="Klok on LinkedIn (opens in a new tab)"
                href="https://linkedin.com"
                d="M6.9 8.8v11.4H3.1V8.8h3.8zM5 3.2a2.2 2.2 0 110 4.4 2.2 2.2 0 010-4.4zM20.9 20.2h-3.8v-5.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9.2V8.8H13v1.6h.1c.5-1 1.8-2 3.6-2 3.9 0 4.6 2.5 4.6 5.8v6z"
              />
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Klok. A fictional product — portfolio
            project, not a real service.
          </p>
          <p className="text-xs text-muted">
            Made with care · Klok is not affiliated with any real company.
          </p>
        </div>
      </Container>
    </footer>
  );
}
