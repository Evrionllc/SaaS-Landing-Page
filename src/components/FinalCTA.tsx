import Container from "./ui/Container";
import Button from "./ui/Button";
import { ArrowRightIcon } from "./ui/icons";

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* ambient accents */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-violet/40 blur-[90px]" />
            <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-violet/30 blur-[90px]" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Stop guessing your hours. Start billing them.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Join 3,000+ freelance designers who let Klok handle the clock —
              and got their evenings back.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#pricing" size="lg">
                Start your free trial
                <ArrowRightIcon width={18} height={18} />
              </Button>
              <Button
                href="#features"
                size="lg"
                className="bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15"
              >
                See all features
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/50">
              Free 14-day trial · No credit card required
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
