import { ImageResponse } from "next/og";

export const alt = "Md. Asaduzzaman Rifat - Junior Software Developer & PHP Laravel Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#090d16",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(99, 102, 241, 0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(217, 70, 239, 0.25) 0%, rgba(99, 102, 241, 0) 70%)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 24px",
            borderRadius: "9999px",
            border: "1px solid rgba(14, 165, 233, 0.4)",
            backgroundColor: "rgba(14, 165, 233, 0.15)",
            color: "#38bdf8",
            fontSize: "22px",
            fontWeight: "600",
            letterSpacing: "0.5px",
          }}
        >
          Junior Software Developer &bull; PHP &amp; Laravel
        </div>

        {/* Middle title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "900",
              color: "#ffffff",
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Md. Asaduzzaman Rifat
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              fontWeight: "500",
              maxWidth: "950px",
            }}
          >
            Danpite Tech Company &bull; Laravel, PHP, MySQL, REST APIs, React, Next.js
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            borderTop: "1px solid rgba(148, 163, 184, 0.2)",
            paddingTop: "32px",
          }}
        >
          <div style={{ fontSize: "24px", color: "#38bdf8", fontWeight: "600" }}>
            asaduzzamanrifat.vercel.app
          </div>
          <div style={{ fontSize: "22px", color: "#64748b", fontWeight: "500" }}>
            github.com/asad4405
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
