"use client";

import {
  Award,
  BookOpenCheck,
  Calendar,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { education, trainings } from "@/data/portfolio";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        id="education-heading"
        eyebrow="04 / Education & Training"
        title="Academic Background & Professional Certifications"
      />

      {/* Part 1: Academic Degrees */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <GraduationCap className="size-4.5" />
          </span>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            Academic Qualifications
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.degree + index} delay={index * 100}>
              <div className="bg-card group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute -top-12 -right-12 size-36 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500 group-hover:bg-sky-500/20" />

                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <div className="grid size-12 place-items-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      <GraduationCap className="size-6" />
                    </div>
                    {item.status && (
                      <span className="bg-background rounded-full border px-3 py-1 font-mono text-xs font-semibold text-sky-600 dark:text-sky-400">
                        {item.status}
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-bold tracking-tight text-foreground">
                    {item.degree}
                  </h4>
                  {item.field && (
                    <p className="mt-1 font-medium text-sky-600 dark:text-sky-400">
                      {item.field}
                    </p>
                  )}

                  <p className="text-muted-foreground mt-2 text-sm font-medium">
                    {item.institution}
                  </p>

                  <div className="text-muted-foreground mt-3 flex flex-wrap items-center gap-4 text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-3.5" />
                      {item.location}
                    </span>
                  </div>

                  {item.description && (
                    <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Part 2: Professional Training & Certifications */}
      <div className="mt-16 space-y-6">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <BookOpenCheck className="size-4.5" />
          </span>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            Professional Web Development Training
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {trainings.map((t, i) => (
            <Reveal key={t.title + i} delay={i * 150}>
              <div className="bg-card group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute -top-12 -right-12 size-40 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/20" />

                <div className="relative">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="grid size-12 place-items-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      <Award className="size-6" />
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border bg-linear-to-r px-3.5 py-1 text-xs font-semibold ${t.badgeColor}`}
                    >
                      <Sparkles className="size-3" />
                      {t.institution}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold tracking-tight text-foreground">
                    {t.title}
                  </h4>
                  <p className="mt-1 font-medium text-sky-600 dark:text-sky-400">
                    {t.topic}
                  </p>

                  <div className="mt-6 border-t pt-4">
                    <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-wider uppercase">
                      Covered Modules &amp; Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-background hover:border-sky-500/50 rounded-lg border px-3 py-1 text-xs font-medium text-foreground transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Education;
