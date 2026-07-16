import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-violet text-white shadow-accent hover:bg-violet-dark hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-ink text-white hover:bg-black hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-transparent text-ink ring-1 ring-line hover:bg-white hover:ring-ink/20",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AnchorButtonProps = BaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<"a">,
    "href" | "className"
  >;

type NativeButtonProps = BaseProps & { href?: undefined } & Omit<
    ComponentPropsWithoutRef<"button">,
    "className"
  >;

/**
 * The whole site's CTAs route through this so the reserved accent and
 * interaction states stay consistent everywhere. Renders a Next <Link> for
 * internal routes, an <a> for hashes/external URLs, and a real <button>
 * when no href is given (e.g. form submits).
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: AnchorButtonProps | NativeButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-all duration-200 will-change-transform disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;

  if (typeof props.href === "string") {
    const { href, ...anchorProps } = props as AnchorButtonProps;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;
  return (
    <button type="button" {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
