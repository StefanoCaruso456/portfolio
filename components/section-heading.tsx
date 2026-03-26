type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="eyebrow text-xs font-semibold text-white/48">{eyebrow}</p>
      <h2 className="display-font text-[clamp(2rem,3vw,3.2rem)] font-semibold leading-[1.04] tracking-tight text-white">
        {title}
      </h2>
      <p className="text-sm leading-7 text-white/62 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
}
