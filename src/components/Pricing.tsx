"use client";

import { useState } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { CheckIcon } from "./ui/icons";

type Plan = {
  name: string;
  slug: string;
  tagline: string;
  monthly: number;
  annual: number; // effective per-month price billed annually
  features: string[];
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Solo",
    slug: "solo",
    tagline: "For the freelancer just getting organised.",
    monthly: 0,
    annual: 0,
    features: [
      "Unlimited time tracking",
      "Up to 3 active clients",
      "5 invoices per month",
      "Web & mobile apps",
      "CSV export",
    ],
    cta: "Start for free",
  },
  {
    name: "Studio",
    slug: "studio",
    tagline: "For working designers who bill every week.",
    monthly: 12,
    annual: 9,
    features: [
      "Everything in Solo",
      "Unlimited clients & projects",
      "Unlimited branded invoices",
      "Effective-rate analytics",
      "Desktop apps + ⌥K quick timer",
      "Priority email support",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Collective",
    slug: "collective",
    tagline: "For small studios sharing the workload.",
    monthly: 29,
    annual: 24,
    features: [
      "Everything in Studio",
      "Up to 5 team seats",
      "Shared projects & rates",
      "Team utilisation reports",
      "Roles & permissions",
    ],
    cta: "Start free trial",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that pays for itself in one invoice"
        >
          Start free, upgrade when it earns you more than it costs. Every paid
          plan includes a 14-day trial — no credit card required.
        </SectionHeading>

        {/* billing period — segmented control (stays inside its bounds on any screen) */}
        <div className="reveal mt-9 flex justify-center">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex items-center gap-1 rounded-pill border border-line bg-surface p-1 shadow-soft"
          >
            <button
              type="button"
              aria-pressed={!annual}
              onClick={() => setAnnual(false)}
              className={`rounded-pill px-4 py-2 text-sm font-semibold transition-colors ${
                annual
                  ? "text-ink-soft hover:text-ink"
                  : "bg-ink text-white shadow-soft"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={annual}
              onClick={() => setAnnual(true)}
              className={`inline-flex items-center gap-2 rounded-pill px-4 py-2 text-sm font-semibold transition-colors ${
                annual
                  ? "bg-ink text-white shadow-soft"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              Annual
              <span
                className={`rounded-pill px-2 py-0.5 text-[11px] font-bold ${
                  annual ? "bg-mint text-white" : "bg-mint/15 text-mint"
                }`}
              >
                −25%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <article
                key={plan.name}
                data-delay={i + 1}
                className={`reveal relative flex flex-col rounded-card border p-7 transition-all duration-300 ${
                  plan.featured
                    ? "border-violet bg-surface shadow-lift lg:-translate-y-3"
                    : "border-line bg-surface shadow-soft hover:-translate-y-1 hover:shadow-lift"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-violet px-3 py-1 text-xs font-bold text-white shadow-accent">
                    Most popular
                  </span>
                )}

                <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{plan.tagline}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-5xl font-extrabold tracking-tight text-ink tabular-nums">
                    ${price}
                  </span>
                  <span className="mb-1.5 text-sm text-muted">
                    {price === 0 ? "forever" : "/mo"}
                  </span>
                </div>
                <p className="mt-1 h-5 text-xs text-muted">
                  {price > 0 && annual
                    ? `Billed annually ($${price * 12}/yr)`
                    : price > 0
                    ? "Billed monthly"
                    : "No card required"}
                </p>

                <Button
                  href={`/signup?plan=${plan.slug}`}
                  variant={plan.featured ? "primary" : "ghost"}
                  size="lg"
                  className="mt-6 w-full"
                >
                  {plan.cta}
                </Button>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                        <CheckIcon width={13} height={13} />
                      </span>
                      <span className="text-ink-soft">{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="reveal mt-10 text-center text-sm text-muted">
          Prices in USD. Switch or cancel anytime — your tracked hours stay
          yours.
        </p>
      </Container>
    </section>
  );
}
