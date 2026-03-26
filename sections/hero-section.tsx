import { ArrowRight, Sparkles } from "lucide-react";
import { portfolioContent } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section
      className="neo-panel overflow-hidden rounded-[38px] px-5 py-5 sm:px-7 sm:py-7 lg:px-10 lg:py-9"
      id="top"
    >
      <header className="mb-16 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-white/6 bg-black/18 px-4 py-4 backdrop-blur-xl sm:px-5">
        <a className="flex items-center gap-3" href="#top">
          <span className="neo-inset flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white/86">
            SC
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{portfolioContent.name}</p>
            <p className="text-xs text-white/48">{portfolioContent.role}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {portfolioContent.navigation.map((item) => (
            <a
              className="rounded-full border border-white/6 px-4 py-2 text-sm text-white/62 transition hover:border-white/14 hover:text-white"
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
        <Reveal className="space-y-8">
          <div className="neo-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/76">
            <Sparkles className="h-4 w-4" />
            Research-led portfolio system with live product proof
          </div>

          <div className="space-y-5">
            <h1 className="display-font max-w-4xl text-[clamp(3rem,8vw,6.3rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white">
              Product surfaces that make ambitious software feel clear.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              {portfolioContent.intro} {portfolioContent.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className="neo-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
              href="#projects"
            >
              See live projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="rounded-full border border-white/8 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/68 transition hover:border-white/14 hover:text-white"
              href="#stack"
            >
              Review stack
            </a>
          </div>
        </Reveal>

        <Reveal className="grid gap-4" delay={0.12}>
          <div className="neo-panel rounded-[32px] p-5 sm:p-6">
            <p className="eyebrow text-xs font-semibold text-white/45">Current Profile Signal</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Live launches across AI collaboration, runtime tooling, data intelligence, and marketplace UX.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {portfolioContent.signals.map((signal) => (
                <span
                  className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-white/58"
                  key={signal}
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {portfolioContent.highlights.map((highlight) => (
              <div className="neo-inset rounded-[28px] p-5" key={highlight.value}>
                <p className="display-font text-2xl font-semibold text-white">
                  {highlight.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/50">{highlight.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
