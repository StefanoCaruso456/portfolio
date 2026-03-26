import { portfolioContent, portfolioProjects } from "@/data/portfolio";
import { HeroSection } from "@/sections/hero-section";
import { ProcessSection } from "@/sections/process-section";
import { ProjectsSection } from "@/sections/projects-section";
import { ServicesSection } from "@/sections/services-section";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden px-4 pb-20 pt-5 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute left-[-12rem] top-28 h-[26rem] w-[26rem] rounded-full bg-white/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-10rem] top-[28rem] h-[30rem] w-[30rem] rounded-full bg-sky-400/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-slate-100/5 blur-[140px]" />

      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-7">
        <HeroSection />
        <ProjectsSection projects={portfolioProjects} />
        <ServicesSection content={portfolioContent} />
        <ProcessSection content={portfolioContent} />
      </div>
    </main>
  );
}
