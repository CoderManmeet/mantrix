import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#f5f5f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: "-0.02em" }}>MANTRIX</div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#a1a1aa" }}>
          Intelligent Digital Systems
        </div>
        <div style={{ marginTop: 40, width: 120, height: 2, background: "#00e5ff" }} />
      </div>
    ),
    { ...size }
  );
}