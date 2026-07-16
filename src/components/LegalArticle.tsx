import Link from "next/link";
import Logo from "./Logo";
import { ArrowRightIcon } from "./ui/icons";

type Section = { heading: string; body: string };

/** Shared layout + typography for the /privacy and /terms pages. */
export default function LegalArticle({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-line">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Klok — back to home" className="rounded-lg">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-pill px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
          >
            Back to home
            <ArrowRightIcon width={16} height={16} />
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-violet">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>
        <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">{intro}</p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-bold text-ink">{s.heading}</h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-12 rounded-2xl border border-line bg-paper-2/60 p-5 text-sm leading-relaxed text-muted">
          Klok is a fictional product built as a portfolio project. This page
          exists to demonstrate a complete, realistic site structure — it is
          not legal advice and no real service, data collection, or agreement
          exists behind it.
        </p>
      </main>

      <footer className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Klok · A fictional product — portfolio
        project, not a real service.
      </footer>
    </div>
  );
}
