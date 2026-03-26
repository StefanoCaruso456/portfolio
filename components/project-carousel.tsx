"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/portfolio";

type ProjectCarouselProps = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const measure = () => {
      const slide = track.querySelector<HTMLElement>("[data-project-slide]");

      if (!slide) {
        return;
      }

      const gap = Number.parseFloat(getComputedStyle(track).gap || "0");
      setSlideWidth(slide.getBoundingClientRect().width + gap);
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);
    const slide = track.querySelector<HTMLElement>("[data-project-slide]");
    if (slide) {
      resizeObserver.observe(slide);
    }
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const progressWidth =
    projects.length > 1 ? ((selectedIndex + 1) / projects.length) * 100 : 100;

  const canScrollPrev = selectedIndex > 0;
  const canScrollNext = selectedIndex < projects.length - 1;

  const moveIndex = (direction: "prev" | "next") => {
    setSelectedIndex((current) => {
      const nextValue = direction === "next" ? current + 1 : current - 1;
      return Math.max(0, Math.min(projects.length - 1, nextValue));
    });
  };

  const handleGestureEnd = (clientX: number) => {
    if (dragStartRef.current === null) {
      return;
    }

    const delta = clientX - dragStartRef.current;
    dragStartRef.current = null;

    if (Math.abs(delta) < 48) {
      return;
    }

    if (delta < 0) {
      moveIndex("next");
      return;
    }

    moveIndex("prev");
  };

  const translateX = slideWidth > 0 ? selectedIndex * slideWidth : 0;

  return (
    <div className="neo-panel overflow-hidden rounded-[34px] px-5 py-5 sm:px-6 sm:py-6 lg:px-7">
      <div className="mb-5 flex flex-col gap-4 border-b border-white/6 pb-5 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="eyebrow text-xs font-semibold text-white/50">
            Swipeable Live Work
          </p>
          <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Each card links directly to the live experience and uses a refreshed
            homepage capture from the current URL list.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            {selectedIndex + 1}/{projects.length}
          </span>
          <button
            aria-label="Previous project"
            className="neo-button flex h-11 w-11 items-center justify-center rounded-full text-white/85 disabled:opacity-35"
            disabled={!canScrollPrev}
            onClick={() => moveIndex("prev")}
            type="button"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next project"
            className="neo-button flex h-11 w-11 items-center justify-center rounded-full text-white/85 disabled:opacity-35"
            disabled={!canScrollNext}
            onClick={() => moveIndex("next")}
            type="button"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className="carousel-strip overflow-hidden pb-2"
        onPointerDown={(event) => {
          dragStartRef.current = event.clientX;
        }}
        onPointerUp={(event) => {
          handleGestureEnd(event.clientX);
        }}
        onTouchEnd={(event) => {
          handleGestureEnd(event.changedTouches[0].clientX);
        }}
        onTouchStart={(event) => {
          dragStartRef.current = event.touches[0].clientX;
        }}
      >
        <div
          className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          ref={trackRef}
          style={{ transform: `translate3d(-${translateX}px, 0, 0)` }}
        >
          {projects.map((project, index) => (
            <div
              className="min-w-[100%] snap-start md:min-w-[82%] xl:min-w-[74%]"
              data-project-slide
              key={project.title}
            >
              <a
                className="group neo-panel flex h-full flex-col gap-5 rounded-[30px] p-4 transition-transform duration-300 hover:-translate-y-1.5 sm:p-5"
                href={project.url}
                rel="noreferrer"
                target="_blank"
              >
                <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
                  <div className="neo-inset relative min-h-[260px] overflow-hidden rounded-[26px] sm:min-h-[320px]">
                    <Image
                      alt={`${project.title} homepage`}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      src={project.thumbnail}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#05070d]/75 via-transparent to-white/8" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
                      Live capture
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-5 rounded-[26px] border border-white/6 bg-white/[0.02] p-5 sm:p-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
                          {project.category}
                        </span>
                        <span className="text-xs uppercase tracking-[0.22em] text-white/40">
                          {project.domain}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="display-font text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
                          {project.title}
                        </h3>
                        <p className="text-lg leading-8 text-white/82">
                          {project.headline}
                        </p>
                        <p className="text-sm leading-7 text-white/58 sm:text-base">
                          {project.summary}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            className="rounded-full border border-white/8 bg-black/20 px-3 py-1 text-xs text-white/54"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.highlights.map((highlight) => (
                          <div
                            className="neo-inset rounded-[20px] px-4 py-3"
                            key={highlight.label}
                          >
                            <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">
                              {highlight.label}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-white/72">
                              {highlight.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 rounded-[22px] border border-white/6 bg-black/20 px-4 py-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                          Open live project
                        </p>
                        <p className="mt-1 text-sm text-white/72">
                          Browse the running product in a new tab.
                        </p>
                      </div>
                      <span className="neo-button flex h-11 w-11 items-center justify-center rounded-full text-white/85">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/6">
        <div
          className="h-full rounded-full bg-gradient-to-r from-white/85 via-white/50 to-white/20 transition-all duration-300"
          style={{ width: `${progressWidth}%` }}
        />
      </div>
    </div>
  );
}
