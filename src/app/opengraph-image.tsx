import { ImageResponse } from "next/og";
import { siteSettings } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#061426",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#38bdf8", letterSpacing: 4 }}>
          WERKSKANTE
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {siteSettings.mainClaim}
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 28, color: "#ffffffb3" }}>
          Arbeitssicherheit &amp; schlanke Prozesse im Mittelstand
        </div>
      </div>
    ),
    { ...size },
  );
}
