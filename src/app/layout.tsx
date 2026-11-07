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
const NAME = "Md. Asaduzzaman";
const JOB_TITLE = "Laravel & MERN Stack Developer";
const TITLE = `${NAME} | ${JOB_TITLE}`;
const DESCRIPTION =
  "Md. Asaduzzaman is a web developer from Bangladesh working with PHP, Laravel and the MERN stack, building dynamic web applications, backend functionality and API integrations. Currently learning Next.js and TypeScript.";

const SOCIAL_PROFILES = [
  "https://github.com/asad4405",
  "https://www.linkedin.com/in/md-asaduzzaman-rifat",
  "https://www.facebook.com/123mdasaduzzaman",
  "https://www.instagram.com/asad.rifat.4405/",
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
    "Md. Asaduzzaman",
    "Asaduzzaman Rifat",
    "Laravel developer",
    "PHP developer",
    "MERN stack developer",
    "full-stack web developer",
    "web developer Bangladesh",
    "Laravel developer Bangladesh",
    "React developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "REST API",
    "Tailwind CSS",
    "portfolio",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${NAME} Portfolio`,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
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
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

/* Structured data (JSON-LD): Person + WebSite + WebPage */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: NAME,
      alternateName: "Asaduzzaman Rifat",
      url: SITE_URL,
      email: "mailto:123mdasaduzzaman@gmail.com",
      jobTitle: JOB_TITLE,
      description: DESCRIPTION,
      nationality: { "@type": "Country", name: "Bangladesh" },
      address: { "@type": "PostalAddress", addressCountry: "BD" },
      knowsAbout: [
        "PHP",
        "Laravel",
        "MERN Stack",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "REST APIs",
        "Tailwind CSS",
        "Web Development",
      ],
      sameAs: SOCIAL_PROFILES,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${NAME} Portfolio`,
      description: DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

// Runs before first paint so the saved / system theme is applied with no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${jetbrains.variable} h-full scroll-smooth antialiased`}
    >
      <head>
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