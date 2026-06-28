import Container from "./ui/Container";

/**
 * Fictional studio "customers". Invented names + simple wordmarks only — no
 * real company logos are used (see CREDITS.md / the copyright notes).
 */
const brands = [
  "Møller Studio",
  "Fernweh",
  "Pilo Labs",
  "Northbound",
  "Atelier Goro",
  "Verso",
];

export default function SocialProof() {
  return (
    <section className="border-y border-line bg-paper-2/60 py-12">
      <Container>
        <p className="reveal text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Trusted by independent studios &amp; freelancers worldwide
        </p>
        <ul className="reveal mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {brands.map((b) => (
            <li
              key={b}
              className="font-display text-lg font-bold tracking-tight text-ink/45 transition-colors hover:text-ink/70"
            >
              {b}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
