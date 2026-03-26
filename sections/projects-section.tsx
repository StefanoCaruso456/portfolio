import { ProjectCarousel } from "@/components/project-carousel";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/data/portfolio";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="section-anchor" id="projects">
      <Reveal delay={0.08}>
        <ProjectCarousel projects={projects} />
      </Reveal>
    </section>
  );
}
