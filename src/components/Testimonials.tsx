import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { QuoteIcon, StarIcon } from "./ui/icons";

/**
 * Clearly-fictional testimonials from invented people at invented studios.
 * Plausible, but not attributed to any real person or company.
 */
const testimonials = [
  {
    quote:
      "I used to lose an afternoon every month reconstructing my hours from memory. Now Klok hands me an invoice that's already done. It paid for a year in the first week.",
    name: "Lena Hartmann",
    role: "Brand designer · Møller Studio",
    accent: "#7c5cfc",
  },
  {
    quote:
      "The effective-rate view was a gut punch in the best way — I finally saw which clients were worth it. I raised two rates and dropped one. Best business decision of my year.",
    name: "Darius Okonkwo",
    role: "Freelance product designer",
    accent: "#1faa78",
  },
  {
    quote:
      "⌥K is muscle memory now. I track without thinking about tracking, which is the whole point. It just sits quietly until I need the numbers.",
    name: "Sofia Marchetti",
    role: "Illustrator · Atelier Goro",
    accent: "#f59e0b",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Designers stopped dreading the admin"
        >
          A few words from the freelancers and studios who let Klok handle the
          clock.
        </SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              data-delay={i + 1}
              className="reveal flex flex-col rounded-card border border-line bg-surface p-7 shadow-soft"
            >
              <QuoteIcon
                width={34}
                height={34}
                className="text-violet/30"
              />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <div className="mt-5 flex text-amber-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} width={15} height={15} />
                ))}
              </div>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-line pt-4">
                <span
                  aria-hidden
                  className="grid h-10 w-10 place-items-center rounded-full font-display text-sm font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${t.accent}, ${t.accent}aa)`,
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
