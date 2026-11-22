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
  "Junior Software Developer",
  "PHP & Laravel Developer",
  "Learning MERN, Next.js & TypeScript",
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

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  status?: string;
  current?: boolean;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Junior Software Developer",
    company: "Danpite Tech Company",
    location: "Bangladesh",
    period: "Present",
    status: "Currently Working",
    current: true,
    description:
      "Developing and maintaining web applications, building robust backend RESTful APIs with PHP & Laravel, optimizing MySQL database queries, and creating responsive, user-friendly frontend interfaces.",
    responsibilities: [
      "Building and maintaining production-ready web applications using PHP, Laravel, and JavaScript.",
      "Developing scalable REST APIs, managing database schemas, and optimizing MySQL queries.",
      "Collaborating with team members to deliver features, perform code reviews, and resolve bugs.",
      "Integrating third-party services and APIs into active software products.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "REST API",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Danpite Tech Company",
    location: "Bangladesh",
    period: "Internship Period",
    status: "Completed",
    current: false,
    description:
      "Completed software engineering internship, gaining hands-on industry experience in full-stack web development, teamwork workflows, version control, and production codebases.",
    responsibilities: [
      "Assisted senior engineers with frontend component development and backend API endpoints.",
      "Conducted debugging, responsive testing, and troubleshooting across web modules.",
      "Applied industry-standard Git workflow, code structure, and agile development practices.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "Git",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Education & Professional Training                                   */
/* ------------------------------------------------------------------ */

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
  description?: string;
}

export interface TrainingItem {
  title: string;
  institution: string;
  topic: string;
  skills: string[];
  badgeColor?: string;
}

export const education: EducationItem[] = [
  {
    degree: "B.Sc (Honours)",
    field: "Science",
    institution: "National University",
    location: "Bangladesh",
    period: "2022 – Running",
    status: "4th Year (Running)",
    description:
      "Pursuing Bachelor of Science degree in the 4th year under National University.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institution: "Nandina Sheikh Anower Hossain College",
    location: "Jamalpur, Bangladesh",
    period: "2019 – 2021",
    status: "Completed",
    description:
      "Completed Higher Secondary Certificate examination in Science group.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    institution: "Nandina Ideal School & College",
    location: "Jamalpur, Bangladesh",
    period: "Passing Year: 2019",
    status: "Completed",
    description:
      "Completed Secondary School Certificate examination in Science group.",
  },
];

export const trainings: TrainingItem[] = [
  {
    title: "PHP & Laravel Web Development",
    institution: "Creative IT Institute",
    topic: "Professional Backend & Full-Stack Development",
    badgeColor: "from-rose-500/10 to-orange-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    skills: [
      "PHP",
      "Laravel Framework",
      "OOP",
      "MySQL",
      "MVC Pattern",
      "RESTful APIs",
      "Authentication",
      "Payment Gateway",
    ],
  },
  {
    title: "Complete Web Development (MERN)",
    institution: "Programming Hero",
    topic: "Full-Stack JavaScript & MERN Ecosystem",
    badgeColor: "from-sky-500/10 to-indigo-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "JWT Auth",
      "Firebase",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
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
