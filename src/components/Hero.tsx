import Container from "./ui/Container";
import Button from "./ui/Button";
import HeroMock from "./HeroMock";
import { ArrowRightIcon, PlayIcon, StarIcon, BoltIcon } from "./ui/icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* ambient background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-violet-soft/60 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-line) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 70%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 70%)",
          }}
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* copy */}
          <div className="min-w-0 max-w-xl">
            <span className="reveal inline-flex items-center gap-2 rounded-pill border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink-soft shadow-soft">
              <BoltIcon width={14} height={14} className="text-violet" />
              New · Hours become invoices automatically
            </span>

            <h1 className="reveal mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Track billable hours without breaking your{" "}
              <span className="relative whitespace-nowrap text-violet">
                flow
                <svg
                  aria-hidden
                  viewBox="0 0 120 12"
                  className="absolute -bottom-1 left-0 w-full text-violet/40"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9c30-6 86-6 116 0"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="reveal mt-5 text-lg leading-relaxed text-ink-soft">
              Klok is the time tracker made for freelance designers. Start a
              timer in one keystroke, tag work to clients and projects, and turn
              your week into a polished invoice — all without leaving your
              canvas.
            </p>

            <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#pricing" size="lg">
                Start free trial
                <ArrowRightIcon width={18} height={18} />
              </Button>
              <Button href="#how" variant="ghost" size="lg">
                <PlayIcon width={16} height={16} className="text-violet" />
                Watch 2-min demo
              </Button>
            </div>

            <p className="reveal mt-4 text-sm text-muted">
              Free 14-day trial · No credit card required · Cancel anytime
            </p>

            {/* tiny social proof */}
            <div className="reveal mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#7c5cfc", "#1faa78", "#f59e0b", "#e0488b", "#3aa0ff"].map(
                  (c) => (
                    <span
                      key={c}
                      aria-hidden
                      className="h-9 w-9 rounded-full border-2 border-paper"
                      style={{
                        background: `linear-gradient(135deg, ${c}, ${c}99)`,
                      }}
                    />
                  )
                )}
              </div>
              <div>
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} width={14} height={14} />
                  ))}
                </div>
                <p className="text-xs text-muted">
                  Loved by 3,000+ freelance designers
                </p>
              </div>
            </div>
          </div>

          {/* product mock */}
          <div className="reveal min-w-0" data-delay="2">
            <HeroMock />
          </div>
        </div>
      </Container>
    </section>
  );
}
