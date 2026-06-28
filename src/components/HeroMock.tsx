import { PauseIcon, ReceiptIcon, CheckIcon } from "./ui/icons";

/**
 * A believable Klok dashboard, built entirely in HTML/CSS so it stays crisp
 * at any resolution and ships no image weight or licensing baggage.
 * Decorative only — hidden from assistive tech.
 */

const entries = [
  { project: "Brand identity", client: "Møller Studio", tag: "Design", dur: "2:14", color: "bg-violet" },
  { project: "Landing page", client: "Fernweh Travel", tag: "UI", dur: "1:48", color: "bg-mint" },
  { project: "Icon set", client: "Pило Labs", tag: "Illustration", dur: "0:52", color: "bg-amber-400" },
];

const bars = [40, 62, 48, 80, 55, 30, 70];

export default function HeroMock() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[560px]">
      {/* soft glow behind the card */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-violet-soft via-transparent to-violet-soft blur-2xl" />

      <div className="overflow-hidden rounded-card border border-line bg-surface shadow-lift">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <div className="ml-3 flex-1">
            <div className="mx-auto h-5 w-40 rounded-pill bg-paper-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr]">
          {/* mini sidebar */}
          <div className="hidden flex-col items-center gap-4 border-r border-line px-3 py-5 sm:flex">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-[10px] font-bold text-white">
              K
            </span>
            <span className="h-7 w-7 rounded-lg bg-violet-soft" />
            <span className="h-7 w-7 rounded-lg bg-paper-2" />
            <span className="h-7 w-7 rounded-lg bg-paper-2" />
            <span className="mt-auto h-7 w-7 rounded-full bg-paper-2" />
          </div>

          {/* main panel */}
          <div className="min-w-0 p-5">
            {/* running timer */}
            <div className="rounded-2xl border border-line bg-paper p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted">
                    Tracking now
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    Brand identity · Møller Studio
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-pill bg-violet-soft px-2.5 py-1 text-[11px] font-semibold text-violet-ink">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet" />
                  Live
                </span>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <span className="font-display text-4xl font-extrabold tabular-nums tracking-tight text-ink">
                  02:14<span className="text-2xl text-muted">:36</span>
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-violet text-white shadow-accent">
                  <PauseIcon width={20} height={20} />
                </span>
              </div>
            </div>

            {/* today's entries */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-ink-soft">Today</p>
                <p className="text-xs font-medium text-muted">5.0h billable</p>
              </div>
              <ul className="mt-2 space-y-2">
                {entries.map((e) => (
                  <li
                    key={e.project}
                    className="flex items-center gap-3 rounded-xl border border-line bg-surface px-3 py-2.5"
                  >
                    <span className={`h-8 w-1.5 rounded-full ${e.color}`} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-ink">
                        {e.project}
                      </p>
                      <p className="truncate text-[11px] text-muted">
                        {e.client} · {e.tag}
                      </p>
                    </div>
                    <span className="text-sm font-semibold tabular-nums text-ink">
                      {e.dur}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* floating weekly-chart card */}
      <div className="animate-float absolute -left-4 -bottom-6 hidden w-44 rounded-2xl border border-line bg-surface p-3.5 shadow-lift sm:block">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-medium text-muted">This week</p>
          <p className="text-[11px] font-semibold text-mint">+12%</p>
        </div>
        <p className="mt-0.5 font-display text-xl font-extrabold text-ink">
          28.5h
        </p>
        <div className="mt-2 flex h-12 items-end gap-1.5">
          {bars.map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-sm ${
                i === 3 ? "bg-violet" : "bg-violet-soft"
              }`}
            />
          ))}
        </div>
      </div>

      {/* floating invoice pill */}
      <div
        className="animate-float absolute -right-3 -top-5 hidden items-center gap-2.5 rounded-2xl border border-line bg-surface px-3.5 py-3 shadow-lift sm:flex"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint/15 text-mint">
          <ReceiptIcon width={18} height={18} />
        </span>
        <div>
          <p className="text-[11px] text-muted">Invoice #0148</p>
          <p className="flex items-center gap-1 text-sm font-bold text-ink">
            $2,280
            <CheckIcon width={14} height={14} className="text-mint" />
          </p>
        </div>
      </div>
    </div>
  );
}
