import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { ChevronDownIcon } from "./ui/icons";

/**
 * Built on native <details>/<summary>: fully keyboard-accessible and works
 * with zero JS. The shared `name` makes them behave as an exclusive accordion
 * in modern browsers, degrading gracefully where that's unsupported.
 */
const faqs = [
  {
    q: "Do I need a credit card to start?",
    a: "No. The Solo plan is free forever, and every paid plan starts with a 14-day trial that needs no card. You only enter billing details if you decide to keep a paid plan.",
  },
  {
    q: "Can I track time offline?",
    a: "Yes. The desktop and mobile apps keep tracking when you lose connection and sync automatically the moment you're back online — so a flaky café Wi-Fi never costs you billable minutes.",
  },
  {
    q: "How do invoices work?",
    a: "Klok totals your tagged hours, applies each client's rate, and generates a branded PDF you can download or send. You can edit line items, add expenses, and set your own logo and colours before sending.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "It stays yours. Export everything as CSV or PDF at any time, on any plan. If you cancel, your account drops to the free Solo plan — we never delete your history out from under you.",
  },
  {
    q: "Can I use Klok with my team?",
    a: "Yes — the Collective plan adds up to five seats with shared projects, rates, and team utilisation reports. Need more than five? Reach out and we'll sort a custom plan.",
  },
  {
    q: "Which platforms are supported?",
    a: "Klok runs on macOS, Windows, the web, iOS, and Android, all kept in sync in real time. Start a timer on your laptop and stop it from your phone — it's the same session.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-line bg-paper-2/60 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading eyebrow="FAQ" title="Questions, answered">
          Still curious? Email{" "}
          <a
            href="mailto:hello@klok.example.com"
            className="font-semibold text-violet underline-offset-4 hover:underline"
          >
            hello@klok.example.com
          </a>{" "}
          and a real human will reply.
        </SectionHeading>

        <div className="reveal mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              name="faq"
              className="group rounded-2xl border border-line bg-surface px-5 shadow-soft open:shadow-lift [&_summary]:transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDownIcon
                  width={20}
                  height={20}
                  className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 pr-8 text-[15px] leading-relaxed text-ink-soft">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
