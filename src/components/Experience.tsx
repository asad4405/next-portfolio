"use client";

import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-muted/30 relative scroll-mt-20 border-y py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          id="experience-heading"
          eyebrow="03 / Experience"
          title="Work Experience & Industry Journey"
        />

        <div className="relative mt-12 space-y-8">
          {/* Vertical timeline decorative line for desktop */}
          <div className="from-sky-500/50 via-indigo-500/30 absolute top-4 bottom-4 left-6.5 hidden w-0.5 bg-linear-to-b to-transparent md:block" />

          {experiences.map((item, index) => (
            <Reveal key={item.role + index} delay={index * 150}>
              <div className="relative flex flex-col gap-6 md:flex-row md:gap-10">
                {/* Timeline node icon */}
                <div className="relative z-10 hidden md:block">
                  <div
                    className={`grid size-13 place-items-center rounded-2xl border transition-all duration-300 ${
                      item.current
                        ? "border-sky-500 bg-sky-500/10 text-sky-500 shadow-lg shadow-sky-500/20"
                        : "bg-card text-muted-foreground border-border"
                    }`}
                  >
                    <Briefcase className="size-6" />
                  </div>
                </div>

                {/* Experience Card */}
                <div
                  className={`bg-card group relative flex-1 overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    item.current ? "border-sky-500/40 shadow-sm" : ""
                  }`}
                >
                  {/* Subtle glow */}
                  <div
                    className={`absolute -top-16 -right-16 size-48 rounded-full blur-3xl transition-all duration-500 ${
                      item.current
                        ? "bg-sky-500/15 group-hover:bg-sky-500/25"
                        : "bg-indigo-500/10 group-hover:bg-indigo-500/20"
                    }`}
                  />

                  <div className="relative">
                    {/* Header: Role, Company & Status */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold tracking-tight text-foreground">
                            {item.role}
                          </h3>
                          {item.current ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                              <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                              </span>
                              {item.status ?? "Currently Working"}
                            </span>
                          ) : item.status ? (
                            <span className="bg-background text-muted-foreground rounded-full border px-3 py-1 font-mono text-xs font-medium">
                              {item.status}
                            </span>
                          ) : null}
                        </div>

                        <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-4 text-sm font-medium">
                          <span className="flex items-center gap-1.5 text-foreground font-semibold">
                            <Building2 className="size-4 text-sky-500" />
                            {item.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="size-4" />
                            {item.period}
                          </span>
                          {item.location && (
                            <span className="flex items-center gap-1.5">
                              <MapPin className="size-4" />
                              {item.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-muted-foreground mt-4 text-base leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Responsibilities */}
                    {item.responsibilities &&
                      item.responsibilities.length > 0 && (
                        <div className="mt-5 space-y-2">
                          <p className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-600 uppercase dark:text-sky-400">
                            <Sparkles className="size-3.5" /> Key
                            Contributions &amp; Responsibilities
                          </p>
                          <ul className="grid gap-2 sm:grid-cols-2">
                            {item.responsibilities.map((resp, i) => (
                              <li
                                key={i}
                                className="text-muted-foreground flex items-start gap-2 text-sm leading-relaxed"
                              >
                                <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-500" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {/* Technologies Tag Pills */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="mt-6 border-t pt-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-muted-foreground mr-1 text-xs font-semibold uppercase">
                            Tech Stack:
                          </span>
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-background hover:border-sky-500/50 rounded-lg border px-2.5 py-1 font-mono text-xs font-medium text-foreground transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
