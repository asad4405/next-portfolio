"use client";

import { ArrowRight, Briefcase, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Typewriter } from "@/components/Typewriter";
import { CodeCard } from "@/components/CodeCard";
import {
  EMAIL,
  PORTFOLIO,
  gradientText,
  phrases,
  marquee,
  socials,
} from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      {/* backdrop blobs */}
      <div className="absolute -top-24 -left-24 -z-10 size-112 animate-float rounded-full bg-sky-500/25 blur-3xl motion-reduce:animate-none" />
      <div className="absolute top-40 -right-24 -z-10 size-104 animate-float-slow rounded-full bg-fuchsia-500/20 blur-3xl motion-reduce:animate-none" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-16 pb-20 sm:pt-24 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="bg-card/70 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              PHP &amp; Laravel Developer
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1
              id="hero-heading"
              className="text-5xl leading-tight font-extrabold tracking-tight sm:text-7xl"
            >
              Hi, I&apos;m
              <br />
              <span className={gradientText}>Md. Asaduzzaman Rifat</span>{" "}
              <span className="inline-block origin-bottom-right animate-wave motion-reduce:animate-none">
                👋
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-mono text-lg font-semibold text-sky-600 sm:text-xl dark:text-sky-400">
              <Typewriter words={phrases} />
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              A web developer from Bangladesh. I enjoy building dynamic web
              applications, developing backend functionality, integrating APIs
              and solving real-world problems through code.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-indigo-600 px-7 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/40"
              >
                <Mail className="size-4" />
                Contact me
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#experience"
                className="bg-card/70 hover:bg-accent inline-flex h-12 items-center gap-2 rounded-full border px-7 font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5"
              >
                <Briefcase className="size-4 text-sky-500" />
                View Experience
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={label}
                  className="bg-card/70 text-muted-foreground hover:text-foreground hover:bg-accent grid size-11 place-items-center rounded-full border backdrop-blur-md transition-all hover:-translate-y-1"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <CodeCard />
        </Reveal>
      </div>

      {/* tech marquee */}
      <div aria-hidden className="relative overflow-hidden border-y py-5">
        <div className="flex w-max animate-marquee gap-3 motion-reduce:animate-none">
          {[...marquee, ...marquee].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="bg-card text-muted-foreground rounded-full border px-5 py-2 font-mono text-sm whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
