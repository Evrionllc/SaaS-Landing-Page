"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Button from "./ui/Button";
import {
  PlayIcon,
  PauseIcon,
  CloseIcon,
  CheckIcon,
  ReceiptIcon,
  TagIcon,
  StopwatchIcon,
} from "./ui/icons";

/**
 * "Watch demo" CTA + the modal it opens. The demo is a self-running animated
 * product tour built in HTML/CSS/JS (no video asset needed for a fictional
 * product): three auto-advancing scenes with a genuinely ticking timer.
 */

const SCENE_MS = 6000;

const scenes = [
  {
    title: "Start a timer in one keystroke",
    caption: "Press ⌥K from any app — Klok starts counting without you switching tabs.",
  },
  {
    title: "Tag it to a client & project",
    caption: "Drop the entry on a client. Rates apply automatically in the background.",
  },
  {
    title: "Turn the week into an invoice",
    caption: "One click totals your hours, applies rates, and produces a branded PDF.",
  },
];

function formatClock(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return { hm: `${pad(h)}:${pad(m)}`, s: pad(s) };
}

function SceneTimer({ seconds }: { seconds: number }) {
  const t = formatClock(seconds);
  return (
    <div className="demo-scene w-full max-w-sm">
      <div className="mx-auto mb-5 flex w-fit items-center gap-2">
        <kbd className="rounded-lg border border-line bg-surface px-2.5 py-1.5 font-display text-sm font-bold text-ink shadow-soft">
          ⌥
        </kbd>
        <span className="text-xs font-semibold text-muted">+</span>
        <kbd className="rounded-lg border border-violet bg-violet-soft px-2.5 py-1.5 font-display text-sm font-bold text-violet-ink shadow-soft">
          K
        </kbd>
      </div>
      <div className="rounded-2xl border border-line bg-surface p-5 shadow-lift">
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
        <div className="mt-4 flex items-end justify-between">
          <span className="font-display text-5xl font-extrabold tabular-nums tracking-tight text-ink">
            {t.hm}
            <span className="text-3xl text-muted">:{t.s}</span>
          </span>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-violet text-white shadow-accent">
            <PauseIcon width={20} height={20} />
          </span>
        </div>
      </div>
    </div>
  );
}

function SceneTag() {
  return (
    <div className="demo-scene w-full max-w-sm">
      <div className="rounded-2xl border border-line bg-surface p-5 shadow-lift">
        <div className="flex items-center gap-3">
          <span className="h-10 w-1.5 rounded-full bg-violet" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-ink">
              Brand identity
            </p>
            <p className="text-[11px] text-muted">Today · 2h 14m</p>
          </div>
          <span className="text-sm font-semibold tabular-nums text-ink">
            2:14
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { label: "Møller Studio", delay: "0.4s" },
            { label: "Brand identity", delay: "0.9s" },
            { label: "$95/hr", delay: "1.4s" },
          ].map((chip) => (
            <span
              key={chip.label}
              style={{ animationDelay: chip.delay }}
              className="demo-chip inline-flex items-center gap-1.5 rounded-pill border border-violet/30 bg-violet-soft px-3 py-1.5 text-xs font-semibold text-violet-ink"
            >
              <TagIcon width={13} height={13} />
              {chip.label}
            </span>
          ))}
        </div>
        <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-mint">
          <CheckIcon width={14} height={14} />
          Filed automatically — nothing to remember at month-end
        </p>
      </div>
    </div>
  );
}

function SceneInvoice() {
  return (
    <div className="demo-scene w-full max-w-sm">
      <div className="rounded-2xl border border-line bg-surface p-5 shadow-lift">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint/15 text-mint">
              <ReceiptIcon width={18} height={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Invoice #0148</p>
              <p className="text-[11px] text-muted">Møller Studio · March</p>
            </div>
          </div>
          <span className="demo-chip rounded-pill bg-mint/15 px-2.5 py-1 text-[11px] font-bold text-mint" style={{ animationDelay: "1.6s" }}>
            Sent ✓
          </span>
        </div>
        <ul className="mt-4 space-y-2 border-t border-line pt-4">
          {[
            ["Brand identity — 14.5h", "$1,377"],
            ["Landing page — 8.0h", "$760"],
            ["Icon set — 1.5h", "$143"],
          ].map(([item, amount], i) => (
            <li
              key={item}
              style={{ animationDelay: `${0.3 + i * 0.35}s` }}
              className="demo-chip flex items-center justify-between text-sm"
            >
              <span className="text-ink-soft">{item}</span>
              <span className="font-semibold tabular-nums text-ink">
                {amount}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
          <span className="text-sm font-semibold text-ink">Total</span>
          <span className="font-display text-xl font-extrabold tabular-nums text-ink">
            $2,280
          </span>
        </div>
      </div>
    </div>
  );
}

export default function WatchDemoButton() {
  const [open, setOpen] = useState(false);
  const [scene, setScene] = useState(0);
  const [seconds, setSeconds] = useState(2 * 3600 + 14 * 60 + 32);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Scene auto-advance while open.
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => setScene((s) => (s + 1) % scenes.length), SCENE_MS);
    return () => clearTimeout(id);
  }, [open, scene]);

  // Live ticking timer while open.
  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [open]);

  // Body scroll lock, Escape to close, focus into the dialog.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <Button
        variant="ghost"
        size="lg"
        onClick={(e) => {
          triggerRef.current = e.currentTarget;
          setScene(0);
          setOpen(true);
        }}
        aria-haspopup="dialog"
      >
        <PlayIcon width={16} height={16} className="text-violet" />
        Watch the demo
      </Button>

      {/* Portal to <body>: ancestors with will-change/transform (e.g. the
          hero's .reveal wrapper) would otherwise trap position:fixed. */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Klok product demo"
          >
          {/* backdrop */}
          <button
            type="button"
            aria-label="Close demo"
            onClick={close}
            className="absolute inset-0 cursor-default bg-ink/60 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-xl overflow-hidden rounded-card border border-line bg-paper shadow-lift">
            {/* header */}
            <div className="flex items-center justify-between border-b border-line bg-surface px-5 py-3.5">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <StopwatchIcon width={16} height={16} className="text-violet" />
                How Klok works
                <span className="hidden text-xs font-medium text-muted sm:inline">
                  · 3 scenes, ~20 seconds
                </span>
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close demo"
                className="grid h-8 w-8 place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
              >
                <CloseIcon width={18} height={18} />
              </button>
            </div>

            {/* stage */}
            <div className="flex min-h-[320px] items-center justify-center px-5 py-8 sm:min-h-[340px] sm:px-10">
              {scene === 0 && <SceneTimer seconds={seconds} />}
              {scene === 1 && <SceneTag />}
              {scene === 2 && <SceneInvoice />}
            </div>

            {/* caption + progress */}
            <div className="border-t border-line bg-surface px-5 py-4 sm:px-8">
              <p className="demo-scene text-center text-sm font-semibold text-ink" key={`t-${scene}`}>
                {scenes[scene].title}
              </p>
              <p className="mt-1 text-center text-xs leading-relaxed text-muted">
                {scenes[scene].caption}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                {scenes.map((s, i) => (
                  <button
                    key={s.title}
                    type="button"
                    onClick={() => setScene(i)}
                    aria-label={`Scene ${i + 1}: ${s.title}`}
                    aria-current={i === scene}
                    className="group h-4 w-16 cursor-pointer"
                  >
                    <span className="block h-1.5 w-full overflow-hidden rounded-pill bg-line transition-colors group-hover:bg-ink/20">
                      {i === scene && (
                        <span
                          key={`p-${scene}`}
                          className="demo-progress block h-full rounded-pill bg-violet"
                        />
                      )}
                      {i < scene && (
                        <span className="block h-full rounded-pill bg-violet/40" />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          </div>,
          document.body
        )}
    </>
  );
}
