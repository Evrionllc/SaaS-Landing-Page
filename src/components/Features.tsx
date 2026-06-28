import { ComponentType, SVGProps } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import {
  StopwatchIcon,
  TagIcon,
  ReceiptIcon,
  ChartIcon,
  DevicesIcon,
  ShieldIcon,
} from "./ui/icons";

type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
};

// Each feature is framed as the outcome the designer gets, not the mechanism.
const features: Feature[] = [
  {
    icon: StopwatchIcon,
    title: "One-keystroke timers",
    body: "Hit ⌥K from any app to start tracking. No tab-switching, no friction — your timer follows you while you stay in the work.",
  },
  {
    icon: TagIcon,
    title: "Clients & projects, sorted",
    body: "Tag every entry to a client, project, and billable rate. Klok keeps your hours organised so month-end never feels like detective work.",
  },
  {
    icon: ReceiptIcon,
    title: "Invoices in one click",
    body: "Turn a week of tracked time into a branded, itemised invoice — with your rates applied automatically. Send it before the coffee cools.",
  },
  {
    icon: ChartIcon,
    title: "Know your real rate",
    body: "See effective hourly earnings per client and project, so you can spot the work that pays and the work that quietly doesn't.",
  },
  {
    icon: DevicesIcon,
    title: "Everywhere you design",
    body: "Mac, Windows, web, and mobile stay in perfect sync. Start a timer on your laptop, stop it from your phone on the way out.",
  },
  {
    icon: ShieldIcon,
    title: "Your data, yours alone",
    body: "No selling, no training on your work. Export everything as CSV or PDF anytime — your time logs belong to you, not us.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need, nothing you don't"
        >
          Klok does the boring parts of freelancing — tracking, tagging,
          billing — so you can spend your hours on the craft clients actually
          pay for.
        </SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.title}
              data-delay={(i % 3) + 1}
              className="reveal group rounded-card border border-line bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-soft text-violet transition-colors group-hover:bg-violet group-hover:text-white">
                <f.icon width={22} height={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
