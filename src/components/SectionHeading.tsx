"use client";

import { Reveal } from "@/components/Reveal";

export interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-10 flex flex-col gap-2">
        <span className="font-mono text-sm font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-400">
          {eyebrow}
        </span>
        <h2
          id={id}
          className="text-3xl font-extrabold tracking-tight sm:text-5xl"
        >
          {title}
        </h2>
      </div>
    </Reveal>
  );
}

export default SectionHeading;
