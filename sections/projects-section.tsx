import { ProjectCarousel } from "@/components/project-carousel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Project } from "@/data/portfolio";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="section-anchor space-y-6" id="projects">
      <Reveal className="neo-panel rounded-[36px] px-5 py-6 sm:px-7 sm:py-7 lg:px-9">
        <SectionHeading
          description="The project area arrives immediately after the hero because strong portfolio references consistently bring the work forward early. Each card is horizontal, swipeable, and wired to the live product."
          eyebrow="Projects"
          title="Featured launches presented as a tactile, horizontal product reel."
        />
      </Reveal>

      <Reveal delay={0.08}>
        <ProjectCarousel projects={projects} />
      </Reveal>
    </section>
  );
}
