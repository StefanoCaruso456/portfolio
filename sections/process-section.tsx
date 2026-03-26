import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolioContent } from "@/data/portfolio";

type ProcessSectionProps = {
  content: typeof portfolioContent;
};

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <section
      className="section-anchor neo-panel rounded-[36px] px-5 py-6 sm:px-7 sm:py-7 lg:px-9"
      id="process"
    >
      <Reveal>
        <SectionHeading
          description="The strongest portfolio references I reviewed consistently favored narrative clarity, featured work near the top, and clear project pathways. This section turns those signals into the operating model of the site."
          eyebrow="Process"
          title="A world-class portfolio layout is really a clarity system."
        />
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {content.principles.map((principle, index) => (
          <Reveal className="neo-inset rounded-[28px] p-5 sm:p-6" delay={0.08 * (index + 1)} key={principle.title}>
            <p className="eyebrow text-xs font-semibold text-white/35">
              0{index + 1}
            </p>
            <h3 className="display-font mt-4 text-2xl font-semibold tracking-tight text-white">
              {principle.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/56 sm:text-base">
              {principle.description}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal
        className="section-divider mt-8 grid gap-5 pt-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]"
        delay={0.18}
        id="next-build"
      >
        <div className="space-y-4">
          <p className="eyebrow text-xs font-semibold text-white/40">Next Build</p>
          <h3 className="display-font text-3xl font-semibold tracking-tight text-white sm:text-[2.4rem]">
            Ready to use this as the launchpad for the next version of your profile.
          </h3>
          <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            {content.availability}
          </p>
        </div>

        <div className="neo-inset rounded-[28px] p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-white/35">
            Portfolio architecture
          </p>
          <div className="mt-4 space-y-4">
            <a
              className="neo-button flex items-center justify-between rounded-[22px] px-4 py-3 text-sm text-white/75"
              href="#projects"
            >
              Browse live project reel
              <span className="text-white/40">01</span>
            </a>
            <a
              className="neo-button flex items-center justify-between rounded-[22px] px-4 py-3 text-sm text-white/75"
              href="#services"
            >
              Review services and stack
              <span className="text-white/40">02</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
