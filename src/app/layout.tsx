import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

/* ------------------------------------------------------------------ */
/* SEO constants                                                       */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://asaduzzamanrifat.vercel.app";
const NAME = "Md. Asaduzzaman Rifat";
const SHORT_NAME = "Asaduzzaman Rifat";
const JOB_TITLE = "Junior Software Developer | PHP & Laravel Developer";
const TITLE = `${NAME} | ${JOB_TITLE}`;
const DESCRIPTION =
  "Official portfolio of Md. Asaduzzaman Rifat (asad4405) - Junior Software Developer at Danpite Tech Company and PHP & Laravel Developer from Bangladesh. Exploring projects, experience, tech stack, and software development.";

const SOCIAL_PROFILES = [
  "https://github.com/asad4405",
  "https://github.com/asad4405/next-portfolio",
  "https://www.linkedin.com/in/md-asaduzzaman-rifat",
  "https://www.facebook.com/123mdasaduzzaman",
  "https://www.instagram.com/asad.rifat.4405/",
  "https://asaduzzamanrifat.vercel.app/",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${NAME}`,
  },
  description: DESCRIPTION,
  applicationName: `${NAME} Portfolio`,
  keywords: [
    // Direct Names & Variations
    "Md. Asaduzzaman Rifat",
    "Md Asaduzzaman Rifat",
    "Asaduzzaman Rifat",
    "Asad Rifat",
    "Md. Asaduzzaman",
    "Md Asaduzzaman",
    "Asaduzzaman",
    "Rifat",
    "asad4405",
    "asad.rifat.4405",
    "123mdasaduzzaman",

    // Role & Company
    "Junior Software Developer",
    "Junior Software Developer Bangladesh",
    "Danpite Tech Company",
    "Danpite Tech",
    "Danpite Tech Asaduzzaman Rifat",
    "Software Developer Danpite Tech",

    // Tech Stack
    "PHP developer",
    "Laravel developer",
    "PHP Laravel developer",
    "Laravel developer Bangladesh",
    "PHP developer Bangladesh",
    "Backend developer Bangladesh",
    "Full-stack web developer",
    "REST API developer",
    "MySQL database developer",
    "MERN stack developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Tailwind CSS developer",

    // Portfolio Queries
    "Md. Asaduzzaman Rifat portfolio",
    "Asaduzzaman Rifat portfolio",
    "Asaduzzaman Rifat website",
    "Asaduzzaman Rifat GitHub",
    "asad4405 GitHub",
    "asaduzzamanrifat.vercel.app",
    "web developer portfolio Bangladesh",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "profile",
    firstName: "Md. Asaduzzaman",
    lastName: "Rifat",
    username: "asad4405",
    gender: "male",
    url: SITE_URL,
    siteName: `${NAME} - Portfolio`,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@asad4405",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
};

/* Structured data (JSON-LD): Person + ProfilePage + WebSite */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: NAME,
      givenName: "Md. Asaduzzaman",
      familyName: "Rifat",
      additionalName: "Asad",
      alternateName: [
        SHORT_NAME,
        "Md. Asaduzzaman",
        "Md Asaduzzaman",
        "Asad Rifat",
        "asad4405",
        "123mdasaduzzaman",
      ],
      url: SITE_URL,
      email: "mailto:123mdasaduzzaman@gmail.com",
      jobTitle: "Junior Software Developer",
      worksFor: {
        "@type": "Organization",
        name: "Danpite Tech Company",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "National University",
          address: { "@type": "PostalAddress", addressCountry: "BD" },
        },
      ],
      description: DESCRIPTION,
      nationality: { "@type": "Country", name: "Bangladesh" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jamalpur",
        addressCountry: "BD",
      },
      knowsAbout: [
        "PHP",
        "Laravel",
        "MySQL",
        "REST APIs",
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "Full-Stack Web Development",
      ],
      sameAs: SOCIAL_PROFILES,
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en",
      mainEntity: { "@id": `${SITE_URL}/#person` },
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${NAME} Portfolio`,
        alternateName: `${SHORT_NAME} Portfolio`,
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    },
  ],
};

// Runs before first paint so the saved / system theme is applied with no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${jetbrains.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col selection:bg-sky-500/30">
        <a
          href="#main"
          className="bg-background text-foreground sr-only z-100 rounded-full border px-5 py-2 text-sm font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
