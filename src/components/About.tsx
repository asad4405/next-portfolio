"use client";

import {
  MapPin,
  MessageCircle,
  Plane,
  Sprout,
  Target,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { gradientText } from "@/data/portfolio";

export function About() {
  const card =
    "bg-card group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        id="about-heading"
        eyebrow="01 / About"
        title="About Md. Asaduzzaman Rifat, PHP & Laravel Developer"
      />

      <div className="grid gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-4">
          <div className={`${card} h-full`}>
            <div className="absolute -top-16 -right-16 size-48 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500 group-hover:bg-sky-500/20" />
            <p className="relative text-lg leading-relaxed sm:text-xl">
              Hello! I&apos;m{" "}
              <strong className={gradientText}>Md. Asaduzzaman Rifat</strong>, a web
              developer from Bangladesh, working with{" "}
              <strong>PHP and Laravel</strong>. I enjoy building
              dynamic web applications, developing backend functionality,
              integrating APIs and solving real-world problems through code.
            </p>
            <p className="text-muted-foreground relative mt-4 text-lg leading-relaxed">
              I&apos;m currently working as a Junior Software Developer at Danpite Tech Company and expanding my skills with MERN stack, Next.js and TypeScript.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="md:col-span-2">
          <div className={`${card} h-full`}>
            <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-rose-500/10 text-rose-500">
              <Zap className="size-5" />
            </div>
            <h3 className="font-bold">Main Stack</h3>
            <p className="text-muted-foreground mt-1">
              PHP &amp; Laravel
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="md:col-span-2">
          <div className={`${card} h-full`}>
            <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-500">
              <Sprout className="size-5" />
            </div>
            <h3 className="font-bold">Learning Path</h3>
            <p className="text-muted-foreground mt-1">
              MERN Stack, Next.js &amp; TS
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} className="md:col-span-2">
          <div className={`${card} h-full`}>
            <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-indigo-500/10 text-indigo-500">
              <Target className="size-5" />
            </div>
            <h3 className="font-bold">Career Goal</h3>
            <p className="text-muted-foreground mt-1">
              Becoming a versatile Full-Stack Web Developer
            </p>
          </div>
        </Reveal>

        <Reveal delay={300} className="md:col-span-2">
          <div className={`${card} h-full`}>
            <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-sky-500/10 text-sky-500">
              <MessageCircle className="size-5" />
            </div>
            <h3 className="font-bold">Ask Me About</h3>
            <p className="text-muted-foreground mt-1">
              Laravel, PHP, REST APIs, MySQL &amp; Web Development
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="md:col-span-3">
          <div className={`${card} h-full`}>
            <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-amber-500/10 text-amber-500">
              <Plane className="size-5 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
            </div>
            <h3 className="font-bold">Fun Fact</h3>
            <p className="text-muted-foreground mt-1">I love travelling!</p>
          </div>
        </Reveal>

        <Reveal delay={200} className="md:col-span-3">
          <div className={`${card} h-full`}>
            <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-500">
              <MapPin className="size-5" />
            </div>
            <h3 className="font-bold">Based in</h3>
            <p className="text-muted-foreground mt-1">Bangladesh</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
