import Link from "next/link";
import { ReactNode } from "react";
import Logo from "./Logo";
import { ArrowRightIcon } from "./ui/icons";

/** Minimal chrome shared by the login / signup pages. */
export default function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* ambient background, echoing the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet-soft/60 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-line) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to bottom, black, transparent 70%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 70%)",
          }}
        />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
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
      </header>

      <main className="flex flex-1 items-center justify-center px-5 py-10 sm:px-6">
        {children}
      </main>

      <footer className="pb-8 text-center text-xs text-muted">
        Klok is a fictional product — a portfolio project, not a real service.
      </footer>
    </div>
  );
}
