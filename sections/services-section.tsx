import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolioContent } from "@/data/portfolio";

type ServicesSectionProps = {
  content: typeof portfolioContent;
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="section-anchor space-y-6" id="services">
      <Reveal className="neo-panel rounded-[36px] px-5 py-6 sm:px-7 sm:py-7 lg:px-9">
        <SectionHeading
          description="The visual direction is intentionally dark and neumorphic, but the underlying scaffold is practical: typed content, reusable sections, and a stack that is easy to maintain as the portfolio grows."
          eyebrow="Services"
          title="Built like a product system, not just a static page."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(310px,0.95fr)]">
        <Reveal className="neo-panel rounded-[34px] px-5 py-6 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {content.capabilities.map((capability, index) => (
              <div className="neo-inset rounded-[26px] p-5" key={capability.title}>
                <p className="text-xs uppercase tracking-[0.22em] text-white/34">
                  0{index + 1}
                </p>
                <h3 className="display-font mt-4 text-2xl font-semibold tracking-tight text-white">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/56 sm:text-base">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="neo-panel rounded-[34px] px-5 py-6 sm:px-6" delay={0.1} id="stack">
          <p className="eyebrow text-xs font-semibold text-white/42">Best Practice Stack</p>
          <div className="mt-4 space-y-3">
            {content.stack.map((item) => (
              <div
                className="neo-inset flex flex-col gap-2 rounded-[24px] px-4 py-4"
                key={item.label}
              >
                <p className="display-font text-xl font-semibold tracking-tight text-white">
                  {item.label}
                </p>
                <p className="text-sm leading-6 text-white/56">{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
