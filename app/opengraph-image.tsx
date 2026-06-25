import { profile } from "@/lib/data";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Edge-rendered Open Graph card. Mirrors the site's editorial aesthetic:
 * warm cream background, ink type, serif display name, mono section label,
 * amber accent rule.
 */
export default async function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FBFAF6",
        color: "#161412",
        padding: "80px",
        fontFamily: "Georgia, serif",
        position: "relative",
      }}
    >
      {/* Mono section label */}
      <div
        style={{
          display: "flex",
          fontFamily: "monospace",
          fontSize: "16px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#635D55",
        }}
      >
        № 00 — INTRO
      </div>

      {/* Big display name */}
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.0,
        }}
      >
        <div style={{ fontSize: "140px", fontWeight: 500 }}>Elio</div>
        <div
          style={{
            fontSize: "140px",
            fontStyle: "italic",
            fontWeight: 500,
            color: "#635D55",
          }}
        >
          Mehmeti
        </div>
      </div>

      {/* Mono signature */}
      <div
        style={{
          marginTop: "40px",
          fontFamily: "monospace",
          fontSize: "20px",
          color: "#635D55",
          letterSpacing: "0.05em",
        }}
      >
        Next.js · NestJS · React Native · Embeddable SDKs · AI-native interfaces
      </div>

      {/* Footer rule + URL */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "80px",
          right: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #DDD7CB",
          paddingTop: "24px",
          fontFamily: "monospace",
          fontSize: "18px",
          color: "#635D55",
        }}
      >
        <span>elio-mehmeti.dev</span>
        <span style={{ color: "#B65316" }}>{profile.location}</span>
      </div>
    </div>,
    { ...size },
  );
}
