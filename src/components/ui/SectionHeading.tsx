import { ReactNode } from "react";

/** Consistent eyebrow + title + intro block used by every major section. */
export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";
  return (
    <div className={`reveal ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-violet">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{children}</p>
      )}
    </div>
  );
}
