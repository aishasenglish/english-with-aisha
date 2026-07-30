import Link from "next/link";

type Variant = "coral" | "outline" | "teal" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const variantClasses: Record<Variant, string> = {
  coral:
    "bg-coral text-white hover:bg-amber-dark focus-visible:ring-coral shadow-sm",
  outline:
    "border-2 border-ink text-ink hover:bg-ink hover:text-white focus-visible:ring-ink",
  teal: "bg-teal text-white hover:bg-ink focus-visible:ring-teal shadow-sm",
  ghost: "text-teal hover:text-ink underline-offset-4 hover:underline",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "coral",
  size = "md",
  href,
  external,
  className = "",
  children,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[2px] font-serif font-bold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
