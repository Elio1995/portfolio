import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Dynamic favicon — matches the site palette (cream + amber).
 * Single character monogram in mono.
 */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#B65316",
        color: "#FBFAF6",
        fontSize: 22,
        fontWeight: 700,
        fontFamily: "monospace",
        borderRadius: 6,
      }}
    >
      e
    </div>,
    { ...size },
  );
}
