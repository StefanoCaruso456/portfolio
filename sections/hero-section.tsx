import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { portfolioContent } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section
      className="neo-panel overflow-hidden rounded-[38px] px-5 py-8 sm:px-7 sm:py-9 lg:px-10 lg:py-10"
      id="top"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.62fr)] lg:items-center">
        <Reveal className="space-y-8">
          <div className="space-y-5">
            <p className="eyebrow text-xs font-semibold text-white/42">Overview</p>
            <h1 className="display-font max-w-4xl text-[clamp(3.1rem,8vw,6rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
              {portfolioContent.name}
            </h1>
            <p className="display-font max-w-3xl text-[clamp(1.35rem,3vw,2.1rem)] leading-[1.15] tracking-tight text-white/90">
              {portfolioContent.role}
            </p>
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
          </div>
        </Reveal>

        <Reveal className="flex justify-center lg:justify-end" delay={0.12}>
          <div className="neo-panel w-full max-w-[320px] rounded-[30px] p-3 sm:max-w-[340px] sm:p-4">
            <div className="neo-inset relative aspect-[0.84/1] overflow-hidden rounded-[24px]">
              <Image
                alt={`${portfolioContent.name} portrait`}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 72vw, 340px"
                src="/profile/profile-pic.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080f]/24 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
