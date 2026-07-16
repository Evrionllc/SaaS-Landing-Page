"use client";

import Link from "next/link";
import { FormEvent, InputHTMLAttributes, useState } from "react";
import Button from "./ui/Button";
import { CheckIcon, ArrowRightIcon } from "./ui/icons";

/**
 * Login / signup forms with real validation, loading and success states.
 * Klok is a fictional product, so submission is simulated client-side —
 * but the whole UX flow is wired the way the real thing would be.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const planOptions = [
  { id: "solo", label: "Solo", price: "Free" },
  { id: "studio", label: "Studio", price: "from $9/mo" },
  { id: "collective", label: "Collective", price: "from $24/mo" },
] as const;

type PlanId = (typeof planOptions)[number]["id"];

function Field({
  label,
  id,
  error,
  ...props
}: {
  label: string;
  id: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-1.5 w-full rounded-xl border bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-violet ${
          error ? "border-red-400" : "border-line hover:border-ink/20"
        }`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessPanel({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="demo-scene text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mint/15 text-mint">
        <CheckIcon width={28} height={28} />
      </span>
      <h1 className="mt-5 text-2xl font-extrabold tracking-tight text-ink">
        {title}
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{body}</p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Button href="/" size="lg">
          Back to home
          <ArrowRightIcon width={18} height={18} />
        </Button>
        <Button href="/#features" variant="ghost" size="lg">
          Explore the features
        </Button>
      </div>
    </div>
  );
}

function useSimulatedSubmit() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const submit = () => {
    setStatus("submitting");
    // Simulated network round-trip — no backend behind this fictional product.
    setTimeout(() => setStatus("success"), 900);
  };
  return { status, submit };
}

export function LoginForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { status, submit } = useSimulatedSubmit();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const next: Record<string, string> = {};
    if (!EMAIL_RE.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 8)
      next.password = "Your password is at least 8 characters.";
    setErrors(next);
    if (Object.keys(next).length === 0) submit();
  };

  if (status === "success") {
    return (
      <SuccessPanel
        title="Welcome back!"
        body="Login flow complete. Klok is a fictional portfolio product, so there's no dashboard behind this door — but everything you just used (validation, loading and success states) is fully wired."
      />
    );
  }

  return (
    <>
      <h1 className="text-2xl font-extrabold tracking-tight text-ink">
        Log in to Klok
      </h1>
      <p className="mt-2 text-sm text-ink-soft">
        Good to see you again. Your timers kept perfect count while you were
        away.
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-7 space-y-4">
        <Field
          label="Email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@studio.com"
          error={errors.email}
        />
        <div>
          <Field
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            error={errors.password}
          />
          <p className="mt-2 text-right">
            <a
              href="mailto:hello@klok.example.com?subject=Password%20reset"
              className="text-xs font-semibold text-violet underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </p>
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Logging in…" : "Log in"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-ink-soft">
        New to Klok?{" "}
        <Link
          href="/signup"
          className="font-semibold text-violet underline-offset-4 hover:underline"
        >
          Start your free trial
        </Link>
      </p>
    </>
  );
}

export function SignupForm({ initialPlan }: { initialPlan?: string }) {
  const validInitial = planOptions.some((p) => p.id === initialPlan)
    ? (initialPlan as PlanId)
    : "studio";
  const [plan, setPlan] = useState<PlanId>(validInitial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { status, submit } = useSimulatedSubmit();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Tell us what to call you.";
    if (!EMAIL_RE.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 8)
      next.password = "Use at least 8 characters.";
    setErrors(next);
    if (Object.keys(next).length === 0) submit();
  };

  if (status === "success") {
    const chosen = planOptions.find((p) => p.id === plan)!;
    return (
      <SuccessPanel
        title={`Your ${chosen.label} trial is ready 🎉`}
        body={`Signup flow complete — in the real product you'd land straight in your dashboard with a running 14-day ${chosen.label} trial. Klok is a fictional portfolio project, so no account was created and nothing was stored.`}
      />
    );
  }

  return (
    <>
      <h1 className="text-2xl font-extrabold tracking-tight text-ink">
        Start your free trial
      </h1>
      <p className="mt-2 text-sm text-ink-soft">
        14 days on any plan, no credit card required. Cancel anytime.
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-7 space-y-4">
        <fieldset>
          <legend className="block text-sm font-semibold text-ink">
            Choose a plan
          </legend>
          <div className="mt-1.5 grid grid-cols-3 gap-2">
            {planOptions.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                aria-pressed={plan === p.id}
                className={`rounded-xl border px-2 py-2.5 text-center transition-all ${
                  plan === p.id
                    ? "border-violet bg-violet-soft shadow-soft"
                    : "border-line bg-surface hover:border-ink/20"
                }`}
              >
                <span
                  className={`block text-sm font-bold ${
                    plan === p.id ? "text-violet-ink" : "text-ink"
                  }`}
                >
                  {p.label}
                </span>
                <span className="block text-[11px] text-muted">{p.price}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <Field
          label="Name"
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Alex Ronda"
          error={errors.name}
        />
        <Field
          label="Email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@studio.com"
          error={errors.email}
        />
        <Field
          label="Password"
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="At least 8 characters"
          error={errors.password}
        />
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Creating your account…" : "Create account"}
          {status !== "submitting" && (
            <ArrowRightIcon width={18} height={18} />
          )}
        </Button>
        <p className="text-center text-xs leading-relaxed text-muted">
          By continuing you agree to our{" "}
          <Link href="/terms" className="underline underline-offset-2 hover:text-ink">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-ink">
            Privacy policy
          </Link>
          .
        </p>
      </form>

      <p className="mt-5 text-center text-sm text-ink-soft">
        Already tracking with Klok?{" "}
        <Link
          href="/login"
          className="font-semibold text-violet underline-offset-4 hover:underline"
        >
          Log in
        </Link>
      </p>
    </>
  );
}
