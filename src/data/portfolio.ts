import { Code2, Server, Database, Wrench } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/Icons";

export const EMAIL = "123mdasaduzzaman@gmail.com";
export const PORTFOLIO = "https://asaduzzamanrifat.vercel.app/";
export const PORTFOLIO_LABEL = "asaduzzamanrifat.vercel.app";

export const gradientText =
  "bg-linear-to-r from-sky-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent";

export const phrases = [
  "Laravel & MERN Stack Developer",
  "Learning Next.js & TypeScript",
  "Becoming a Full-Stack Developer",
];

export const marquee = [
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

export const stack = [
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

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Connect", href: "#connect" },
];

export const socials = [
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
