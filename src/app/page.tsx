"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type SVGProps,
} from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Compass,
  Database,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Plane,
  Rocket,
  Server,
  Sprout,
  Sun,
  Target,
  Wrench,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const EMAIL = "123mdasaduzzaman@gmail.com";
const PORTFOLIO = "https://asaduzzamanrifat.vercel.app/";
const PORTFOLIO_LABEL = "asaduzzamanrifat.vercel.app";

const gradientText =
  "bg-linear-to-r from-sky-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent";

const phrases = [
  "Laravel & MERN Stack Developer",
  "Learning Next.js & TypeScript",
  "Becoming a Full-Stack Developer",
];

const marquee = [
  "PHP",
  "Laravel",
  "MySQL",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Node.js",
  "Express",
  "MongoDB",
  "Bootstrap",
  "jQuery",
  "AJAX",
  "daisyUI",
  "Git",
  "GitHub",
  "Postman",
  "Vercel",
  "Linux",
  "VS Code",
];

const stack = [
  {
    title: "Frontend",
    icon: Code2,
    glow: "from-sky-500/20 to-transparent",
    tint: "text-sky-500",
    items: [
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "HTML",
      "CSS",
      "AJAX",
      "daisyUI",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    glow: "from-rose-500/20 to-transparent",
    tint: "text-rose-500",
    items: ["PHP", "Laravel", "Node.js", "Express"],
  },
  {
    title: "Database",
    icon: Database,
    glow: "from-emerald-500/20 to-transparent",
    tint: "text-emerald-500",
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Wrench,
    glow: "from-amber-500/20 to-transparent",
    tint: "text-amber-500",
    items: ["VS Code", "Git", "GitHub", "Postman", "Vercel", "Linux"],
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Connect", href: "#connect" },
];

const delays: Record<number, string> = {
  0: "delay-0",
  100: "delay-100",
  200: "delay-200",
  300: "delay-300",
  400: "delay-400",
  500: "delay-500",
};

/* ------------------------------------------------------------------ */
/* Social icons                                                        */
/* ------------------------------------------------------------------ */

type IconProps = SVGProps<SVGSVGElement>;

function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-asaduzzaman-rifat",
    Icon: LinkedInIcon,
  },
  { label: "GitHub", href: "https://github.com/asad4405", Icon: GitHubIcon },
  {
    label: "Facebook",
    href: "https://www.facebook.com/123mdasaduzzaman",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/asad.rifat.4405/",
    Icon: InstagramIcon,
  },
];

/* ------------------------------------------------------------------ */
/* Small interactive pieces                                            */
/* ------------------------------------------------------------------ */

function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="bg-background/60 hover:bg-accent relative inline-flex size-10 items-center justify-center rounded-full border backdrop-blur-md transition-colors"
    >
      <Sun className="size-4.5 scale-100 rotate-0 transition-all duration-500 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4.5 scale-0 rotate-90 transition-all duration-500 dark:scale-100 dark:rotate-0" />
    </button>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:transition-none ${
        delays[delay] ?? ""
      } ${
        shown
          ? "translate-y-0 opacity-100 blur-none"
          : "translate-y-7 opacity-0 blur-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[index];
    const delay = !deleting && text === full ? 1600 : deleting ? 35 : 70;

    const id = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((n) => (n + 1) % words.length);
        return;
      }
      setText(
        deleting
          ? full.slice(0, text.length - 1)
          : full.slice(0, text.length + 1),
      );
    }, delay);

    return () => clearTimeout(id);
  }, [text, deleting, index, words]);

  return (
    <span
      aria-label={words.join(", ")}
      className="inline-flex h-8 items-center"
    >
      <span aria-hidden className="motion-reduce:hidden">
        {text}
      </span>
      {/* Reduced motion: show a static line instead of the typing effect */}
      <span aria-hidden className="hidden motion-reduce:inline">
        {words[0]}
      </span>
      <span
        aria-hidden
        className="ml-1 inline-block h-6 w-0.5 animate-blink bg-sky-500 motion-reduce:hidden"
      />
    </span>
  );
}

function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function update() {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
      if (bar.current) bar.current.style.width = `${pct}%`;
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-60 h-0.75">
      <div
        ref={bar}
        className="h-full w-0 bg-linear-to-r from-sky-500 via-indigo-500 to-fuchsia-500"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Navbar() {
  return (
    <header className="bg-background/70 sticky top-0 z-50 border-b backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a href="#top" className="flex items-center gap-2 text-lg font-bold">
          <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-sky-500 to-indigo-600 font-mono text-sm text-white">
            {"</>"}
          </span>
          <span className="tracking-tight">ASAD</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-full px-4 py-2 text-sm font-medium transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function CodeCard() {
  const k = "text-fuchsia-500 dark:text-fuchsia-400";
  const s = "text-emerald-600 dark:text-emerald-400";
  const p = "text-sky-600 dark:text-sky-400";

  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-3xl bg-linear-to-br from-sky-500/30 via-indigo-500/20 to-fuchsia-500/30 blur-2xl" />
      <div className="bg-card/80 relative overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 hover:rotate-1">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-amber-400" />
          <span className="size-3 rounded-full bg-emerald-400" />
          <span className="text-muted-foreground ml-3 font-mono text-xs">
            asaduzzaman.ts
          </span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-xs leading-7 sm:text-sm">
          <code>
            <span className={k}>const</span> <span className={p}>developer</span>{" "}
            = {"{"}
            {"\n"}
            {"  "}name: <span className={s}>&quot;Md. Asaduzzaman&quot;</span>,
            {"\n"}
            {"  "}from: <span className={s}>&quot;Bangladesh&quot;</span>,{"\n"}
            {"  "}stack: [<span className={s}>&quot;Laravel&quot;</span>,{" "}
            <span className={s}>&quot;MERN&quot;</span>],{"\n"}
            {"  "}learning: [{"\n"}
            {"    "}
            <span className={s}>&quot;Next.js&quot;</span>,{"\n"}
            {"    "}
            <span className={s}>&quot;TypeScript&quot;</span>,{"\n"}
            {"  "}],{"\n"}
            {"  "}goal:{" "}
            <span className={s}>&quot;Full-Stack Web Developer&quot;</span>,
            {"\n"}
            {"  "}funFact: <span className={s}>&quot;Loves travelling&quot;</span>,
            {"\n"}
            {"}"};{"\n"}
            <span className="text-muted-foreground">
              {"// keep learning, keep building"}
            </span>
          </code>
        </pre>
      </div>
    </div>
  );
}

function Hero() {
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
              Laravel &amp; MERN Stack Developer
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1
              id="hero-heading"
              className="text-5xl leading-tight font-extrabold tracking-tight sm:text-7xl"
            >
              Hi, I&apos;m
              <br />
              <span className={gradientText}>Md. Asaduzzaman</span>{" "}
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
                href={PORTFOLIO}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/70 hover:bg-accent inline-flex h-12 items-center gap-2 rounded-full border px-7 font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5"
              >
                <Globe className="size-4" />
                Visit portfolio
                <ArrowUpRight className="size-4" />
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

function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow: string;
  title: string;
}) {
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

function About() {
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
        title="About Md. Asaduzzaman, Laravel & MERN Developer"
      />

      <div className="grid gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-4">
          <div className={`${card} h-full`}>
            <div className="absolute -top-16 -right-16 size-48 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500 group-hover:bg-sky-500/20" />
            <p className="relative text-lg leading-relaxed sm:text-xl">
              Hello! I&apos;m{" "}
              <strong className={gradientText}>Md. Asaduzzaman</strong>, a web
              developer from Bangladesh, working with{" "}
              <strong>PHP, Laravel and the MERN stack</strong>. I enjoy building
              dynamic web applications, developing backend functionality,
              integrating APIs and solving real-world problems through code.
            </p>
            <p className="text-muted-foreground relative mt-4 text-lg leading-relaxed">
              I&apos;m now expanding my skills with Next.js and TypeScript to
              become a versatile full-stack developer.
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
              Laravel &amp; MERN Stack
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
              Next.js &amp; TypeScript
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
              Laravel, PHP, MERN, REST APIs, MySQL &amp; Web Development
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

function Stack() {
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

function Connect() {
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
              href={PORTFOLIO}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/70 hover:bg-background inline-flex h-12 items-center gap-2 rounded-full border px-7 font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5"
            >
              <Globe className="size-4" />
              {PORTFOLIO_LABEL}
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

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm sm:flex-row">
        <p className="text-muted-foreground">
          © 2026 Md. Asaduzzaman. All rights reserved.
        </p>
        <p className="flex items-center gap-2 font-medium">
          <Rocket className="size-4 text-sky-500" />
          Keep Learning · Keep Building · Keep Growing
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Stack />
        <Connect />
      </main>
      <Footer />
    </>
  );
}