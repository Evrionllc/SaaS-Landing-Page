/**
 * Klok wordmark — a simple, self-made logo: a minimal clock glyph plus the
 * name. Simple wordmarks read as more credible than over-designed ones.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-[0.65rem] bg-ink text-white"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="8.5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 7.5V12l3 1.8"
            stroke="var(--color-violet)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight text-ink">
        Klok
      </span>
    </span>
  );
}
