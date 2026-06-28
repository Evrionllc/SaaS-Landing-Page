import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Start a timer",
    body: "Press ⌥K or click once. Klok captures the moment you start, so you never round away billable minutes again.",
  },
  {
    n: "02",
    title: "Tag as you go",
    body: "Drop each entry onto a client and project. Rates apply automatically, and everything files itself in the background.",
  },
  {
    n: "03",
    title: "Bill in a click",
    body: "At month-end, hit Invoice. Klok totals your hours, applies your rates, and hands you a polished PDF ready to send.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="scroll-mt-24 border-y border-line bg-paper-2/60 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From blank canvas to paid in three steps"
        >
          No setup weekend, no manual. Most designers track their first billable
          hour within two minutes of signing up.
        </SectionHeading>

        <ol className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* connecting line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block"
          />
          {steps.map((s, i) => (
            <li
              key={s.n}
              data-delay={i + 1}
              className="reveal relative"
            >
              <div className="flex items-center gap-4 md:block">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink font-display text-lg font-extrabold text-white shadow-lift">
                  {s.n}
                </span>
                <h3 className="text-xl font-bold text-ink md:mt-6">{s.title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft md:max-w-xs">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
