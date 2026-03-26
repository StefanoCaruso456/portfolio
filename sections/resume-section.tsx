import Image from "next/image";
import {
  resumeCertifications,
  resumeEducation,
  resumeIntro,
  resumeRoles,
  resumeSkillGroups,
} from "@/data/resume";
import { Reveal } from "@/components/reveal";

export function ResumeSection() {
  return (
    <section className="section-anchor space-y-7" id="experience">
      <Reveal delay={0.12}>
        <div className="neo-panel rounded-[34px] px-5 py-6 sm:px-6 sm:py-7 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow text-[10px] font-semibold text-white/42 sm:text-[11px]">
              {resumeIntro.eyebrow}
            </p>
            <h2 className="display-font max-w-4xl text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
              {resumeIntro.title}
            </h2>
            <p className="text-sm leading-7 text-white/62 sm:text-base">
              {resumeIntro.description}
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="neo-panel rounded-[34px] px-5 py-6 sm:px-6 sm:py-7">
          <div className="mb-6 space-y-2">
            <p className="eyebrow text-[10px] font-semibold text-white/42 sm:text-[11px]">
              Roles
            </p>
            <p className="text-sm leading-7 text-white/58 sm:text-base">
              Each role is framed around operating context, delivery scope, and
              measurable leverage.
            </p>
          </div>

          <div className="grid gap-4">
            {resumeRoles.map((role) => (
              <article
                className="neo-inset rounded-[26px] px-4 py-4 sm:px-5 sm:py-5"
                key={`${role.company}-${role.title}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/34">
                      {role.period}
                    </p>
                    <div className="flex items-center gap-3">
                      {role.logoSrc ? (
                        <div className="inline-flex h-12 min-w-12 items-center justify-center rounded-[14px] bg-[#f4f6f8] px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_30px_rgba(0,0,0,0.18)]">
                          <Image
                            alt={role.logoAlt ?? `${role.company} logo`}
                            className="h-auto w-auto object-contain"
                            height={role.logoHeight ?? 24}
                            src={role.logoSrc}
                            width={role.logoWidth ?? 24}
                          />
                        </div>
                      ) : null}

                      <div>
                        <p className="text-sm text-white/54">{role.company}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="display-font text-2xl font-semibold tracking-tight text-white">
                        {role.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/66 sm:text-base">
                  {role.context}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {role.badges.map((badge) => (
                    <span
                      className="rounded-full border border-white/8 bg-black/22 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/52"
                      key={badge}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-3">
                  {role.highlights.map((highlight) => (
                    <li className="flex gap-3 text-sm leading-6 text-white/68" key={highlight}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/36" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {role.note ? (
                  <div className="mt-5 rounded-[18px] border border-white/6 bg-white/[0.03] px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/32">
                      Additional context
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/60">{role.note}</p>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-7 lg:grid-cols-2">
        <Reveal delay={0.2}>
          <div className="neo-panel rounded-[34px] px-5 py-6 sm:px-6 sm:py-7">
            <div className="mb-6 space-y-2">
              <p className="eyebrow text-[10px] font-semibold text-white/42 sm:text-[11px]">
                Skills
              </p>
              <p className="text-sm leading-7 text-white/58">
                Structured by the capability groups that show up repeatedly
                across the roles above.
              </p>
            </div>

            <div className="grid gap-4">
              {resumeSkillGroups.map((group) => (
                <article
                  className="neo-inset rounded-[24px] px-4 py-4"
                  key={group.title}
                >
                  <h3 className="display-font text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    {group.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        className="rounded-full border border-white/8 bg-black/22 px-3 py-1 text-[11px] text-white/58"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="neo-panel rounded-[34px] px-5 py-6 sm:px-6 sm:py-7">
            <div className="mb-6 space-y-2">
              <p className="eyebrow text-[10px] font-semibold text-white/42 sm:text-[11px]">
                Education
              </p>
              <p className="text-sm leading-7 text-white/58">
                Formal learning and role-specific training supporting the
                product, data, and AI focus of the portfolio.
              </p>
            </div>

            <div className="space-y-4">
              <div className="neo-inset rounded-[24px] px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/32">
                  Education
                </p>
                <ul className="mt-4 space-y-3">
                  {resumeEducation.map((item) => (
                    <li className="text-sm leading-6 text-white/68" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="neo-inset rounded-[24px] px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/32">
                  Certifications & Training
                </p>
                <ul className="mt-4 space-y-3">
                  {resumeCertifications.map((item) => (
                    <li className="text-sm leading-6 text-white/68" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
