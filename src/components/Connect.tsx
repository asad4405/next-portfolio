"use client";

import { ArrowUpRight, Compass, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GitHubIcon } from "@/components/Icons";
import {
  EMAIL,
  gradientText,
  socials,
} from "@/data/portfolio";

export function Connect() {
  return (
    <section
      id="connect"
      aria-labelledby="connect-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24"
    >
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-4xl border bg-linear-to-br from-sky-500/15 via-indigo-500/10 to-fuchsia-500/15 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute -top-20 left-1/4 -z-10 size-72 animate-float rounded-full bg-sky-500/20 blur-3xl motion-reduce:animate-none" />
          <div className="absolute -right-10 -bottom-20 -z-10 size-72 animate-float-slow rounded-full bg-fuchsia-500/20 blur-3xl motion-reduce:animate-none" />

          <div className="mx-auto mb-6 grid size-14 place-items-center rounded-2xl bg-linear-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/30">
            <Compass className="size-7" />
          </div>

          <h2
            id="connect-heading"
            className="text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            Let&apos;s <span className={gradientText}>connect</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
            Professional networking, a question about Laravel, or just a hello
            from a fellow traveller. My inbox is open.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="bg-foreground text-background inline-flex h-12 items-center gap-2 rounded-full px-7 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Mail className="size-4" />
              {EMAIL}
            </a>
            <a
              href="https://github.com/asad4405"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/70 hover:bg-background inline-flex h-12 items-center gap-2 rounded-full border px-7 font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5"
            >
              <GitHubIcon className="size-4.5" />
              github.com/asad4405
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="me noopener noreferrer"
                className="bg-background/70 hover:bg-background inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium backdrop-blur-md transition-all hover:-translate-y-1"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Connect;
