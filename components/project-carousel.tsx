"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, GitBranch } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "@/data/portfolio";

type ProjectCarouselProps = {
  projects: Project[];
};

const AUTO_SCROLL_SPEED = 28;

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedUntilRef = useRef(0);
  const initializedRef = useRef(false);
  const isInteractingRef = useRef(false);
  const [cardAdvance, setCardAdvance] = useState(320);

  const loopedProjects = useMemo(
    () =>
      Array.from({ length: 3 }, (_, copyIndex) =>
        projects.map((project) => ({
          copyIndex,
          project,
        })),
      ).flat(),
    [projects],
  );

  const pauseAutoScroll = (duration = 1400) => {
    pausedUntilRef.current = performance.now() + duration;
  };

  const normalizeLoopPosition = () => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const setWidth = scroller.scrollWidth / 3;

    if (!setWidth) {
      return;
    }

    if (!initializedRef.current) {
      scroller.scrollLeft = setWidth;
      initializedRef.current = true;
      return;
    }

    if (scroller.scrollLeft <= 0) {
      scroller.scrollLeft += setWidth;
      return;
    }

    if (scroller.scrollLeft >= setWidth * 2) {
      scroller.scrollLeft -= setWidth;
    }
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;

    if (!scroller || !track) {
      return;
    }

    const measure = () => {
      const card = track.querySelector<HTMLElement>("[data-project-card]");

      if (card) {
        const gap = Number.parseFloat(getComputedStyle(track).gap || "0");
        setCardAdvance(card.getBoundingClientRect().width + gap);
      }

      normalizeLoopPosition();
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const card = track.querySelector<HTMLElement>("[data-project-card]");
    if (card) {
      resizeObserver.observe(card);
    }

    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [projects]);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const handleScroll = () => {
      normalizeLoopPosition();
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scroller.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frameId = 0;
    let lastTime = performance.now();

    const step = (time: number) => {
      const scroller = scrollerRef.current;

      if (!scroller) {
        return;
      }

      const elapsed = time - lastTime;
      lastTime = time;

      if (!isInteractingRef.current && time >= pausedUntilRef.current) {
        scroller.scrollLeft += (AUTO_SCROLL_SPEED * elapsed) / 1000;
        normalizeLoopPosition();
      }

      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const moveCarousel = (direction: "prev" | "next") => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    pauseAutoScroll(1800);
    scroller.scrollBy({
      behavior: "smooth",
      left: direction === "next" ? cardAdvance : -cardAdvance,
    });
  };

  return (
    <div className="neo-panel overflow-hidden rounded-[34px] px-4 py-4 sm:px-5 sm:py-5 lg:px-6">
      <div className="mb-4 border-b border-white/6 pb-3">
        <p className="eyebrow text-[10px] font-semibold text-white/40 sm:text-[11px]">
          Projects
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0c1018] to-transparent sm:w-12" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0c1018] to-transparent sm:w-12" />

        <div
          className="carousel-strip overflow-x-auto overflow-y-visible pb-18"
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              isInteractingRef.current = false;
            }
          }}
          onFocusCapture={() => {
            isInteractingRef.current = true;
          }}
          onMouseEnter={() => {
            isInteractingRef.current = true;
          }}
          onMouseLeave={() => {
            isInteractingRef.current = false;
            pauseAutoScroll(300);
          }}
          onPointerDownCapture={() => {
            isInteractingRef.current = true;
            pauseAutoScroll(2000);
          }}
          onTouchStartCapture={() => {
            isInteractingRef.current = true;
            pauseAutoScroll(2000);
          }}
          onWheel={() => {
            pauseAutoScroll(1600);
          }}
          ref={scrollerRef}
        >
          <div className="flex w-max gap-4 sm:gap-5" ref={trackRef}>
            {loopedProjects.map(({ project, copyIndex }, index) => (
              <article
                className="group neo-panel flex w-[280px] shrink-0 flex-col gap-4 rounded-[26px] p-3 transition-transform duration-300 hover:-translate-y-1 sm:w-[320px] sm:p-4 lg:w-[360px]"
                data-project-card
                key={`${project.title}-${copyIndex}-${index}`}
              >
                <a
                  className="block space-y-4"
                  href={project.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="neo-inset relative aspect-[0.94/1] overflow-hidden rounded-[22px]">
                    <Image
                      alt={`${project.title} homepage`}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      draggable={false}
                      fill
                      priority={copyIndex === 1 && index === projects.length}
                      sizes="(max-width: 768px) 70vw, 360px"
                      src={project.thumbnail}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/58 via-transparent to-white/6" />
                    <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/68 backdrop-blur-md">
                      Live capture
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/55">
                        {project.category}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-white/32">
                        {project.domain}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="display-font text-[1.75rem] font-semibold leading-none tracking-tight text-white">
                        {project.title}
                      </h3>
                      <p
                        className="text-sm leading-6 text-white/72 sm:text-[0.95rem]"
                        style={{
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 4,
                          display: "-webkit-box",
                          overflow: "hidden",
                        }}
                      >
                        {project.headline}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          className="rounded-full border border-white/8 bg-black/20 px-2.5 py-1 text-[10px] text-white/52"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>

                <div className="mt-auto grid grid-cols-2 gap-3">
                  <a
                    className="rounded-[18px] border border-white/6 bg-black/18 px-3 py-3 transition hover:border-white/12 hover:bg-white/[0.04]"
                    href={project.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/34">
                          Live
                        </p>
                        <p className="mt-1 text-xs text-white/62">
                          Open project
                        </p>
                      </div>
                      <span className="neo-button flex h-10 w-10 items-center justify-center rounded-full text-white/82">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </a>

                  <a
                    className="rounded-[18px] border border-white/6 bg-black/18 px-3 py-3 transition hover:border-white/12 hover:bg-white/[0.04]"
                    href={project.repoUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/34">
                          Repo
                        </p>
                        <p className="mt-1 text-xs text-white/62">
                          GitHub source
                        </p>
                      </div>
                      <span className="neo-button flex h-10 w-10 items-center justify-center rounded-full text-white/82">
                        <GitBranch className="h-4 w-4" />
                      </span>
                    </div>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-center">
          <div className="neo-panel pointer-events-auto flex items-center gap-3 rounded-full px-3 py-2">
            <button
              aria-label="Previous project"
              className="neo-button flex h-11 w-11 items-center justify-center rounded-full text-white/85"
              onClick={() => moveCarousel("prev")}
              type="button"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next project"
              className="neo-button flex h-11 w-11 items-center justify-center rounded-full text-white/85"
              onClick={() => moveCarousel("next")}
              type="button"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
