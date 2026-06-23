type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: Props) {
  const align = centered ? "text-center mx-auto" : "";
  const titleColor = light ? "text-white" : "text-ink";
  const subtitleColor = light ? "text-white/80" : "text-muted";
  const eyebrowColor = light ? "text-gold" : "text-teal";

  return (
    <div className={`max-w-2xl ${align}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
