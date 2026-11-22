"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { stack } from "@/data/portfolio";

export function Stack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="bg-muted/30 relative scroll-mt-20 border-y"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeading
          id="stack-heading"
          eyebrow="02 / Tech Stack"
          title="Tech stack and tools I work with"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {stack.map(({ title, icon: Icon, glow, tint, items }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="bg-card group relative h-full overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div
                  className={`absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${glow}`}
                />
                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className={`bg-background grid size-11 place-items-center rounded-2xl border ${tint}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-bold">{title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="bg-background rounded-full border px-4 py-1.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400"
                      >
                        {item}
                      </span>
                    ))}
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

export default Stack;
