import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Md. Asaduzzaman Rifat - Portfolio",
    short_name: "Asaduzzaman Rifat",
    description:
      "Official portfolio of Md. Asaduzzaman Rifat (asad4405), Junior Software Developer at Danpite Tech Company and PHP & Laravel Developer from Bangladesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0284c7",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
