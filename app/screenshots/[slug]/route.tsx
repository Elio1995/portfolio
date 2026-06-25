import { ImageResponse } from "next/og";

export const runtime = "edge";

// 16:9 to match the project card aspect ratio.
const WIDTH = 1600;
const HEIGHT = 900;

const PALETTE = {
  bg: "#FBFAF6",
  bgAlt: "#F5EFE0",
  surface: "#FFFFFF",
  ink: "#161412",
  muted: "#635D55",
  border: "#DDD7CB",
  accent: "#B65316",
  accentSoft: "#E89163",
  emerald: "#10B981",
};

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;

  switch (slug) {
    case "clarity":
      return clarity();
    case "pulse":
      return pulse();
    case "reservebar":
      return reservebar();
    case "cloud-sdk":
      return cloudSdk();
    default:
      return new Response("Not found", { status: 404 });
  }
}

// ─── Clarity ────────────────────────────────────────────────────────────────
// Mockup of the meeting-detail screen with extracted action items.

function clarity() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: PALETTE.bg,
        padding: "80px",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* App chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "32px",
          borderBottom: `1px solid ${PALETTE.border}`,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: PALETTE.ink, fontWeight: 600 }}>
          Clarity
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 16,
            color: PALETTE.muted,
          }}
        >
          demo@clarity.local
        </div>
      </div>

      {/* Meeting title */}
      <div style={{ display: "flex", flexDirection: "column", marginTop: "48px" }}>
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 14,
            color: PALETTE.muted,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          № 01 — Meeting
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "12px",
            fontSize: 52,
            color: PALETTE.ink,
            fontWeight: 500,
          }}
        >
          Q3 planning sync — Engineering
        </div>
      </div>

      {/* Action items */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "48px",
          gap: "16px",
        }}
      >
        <ActionItem
          title="Deliver final dashboard designs"
          owner="Priya"
          due="2026-07-08"
          priority="high"
        />
        <ActionItem title="Recommend a chart library" owner="Daniel" due="—" priority="medium" />
        <ActionItem
          title="Schedule InfoSec security review"
          owner="Tom"
          due="2026-08-04"
          priority="high"
        />
      </div>
    </div>,
    { width: WIDTH, height: HEIGHT },
  );
}

function ActionItem({
  title,
  owner,
  due,
  priority,
}: {
  title: string;
  owner: string;
  due: string;
  priority: "low" | "medium" | "high";
}) {
  const priorityColor =
    priority === "high" ? PALETTE.accent : priority === "medium" ? PALETTE.muted : "#999";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "20px 24px",
        backgroundColor: PALETTE.surface,
        border: `1px solid ${PALETTE.border}`,
        borderRadius: "8px",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: priorityColor,
          flexShrink: 0,
        }}
      />
      <div style={{ display: "flex", flex: 1, fontSize: 24, color: PALETTE.ink }}>{title}</div>
      <div
        style={{
          display: "flex",
          fontFamily: "monospace",
          fontSize: 16,
          color: PALETTE.muted,
          gap: "24px",
        }}
      >
        <span>{owner}</span>
        <span>{due}</span>
      </div>
    </div>
  );
}

// ─── Pulse ──────────────────────────────────────────────────────────────────
// Phone-frame mockup of the Discover screen with Toronto places.

function pulse() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: PALETTE.bgAlt,
        padding: "60px",
        fontFamily: "system-ui, sans-serif",
        alignItems: "center",
        justifyContent: "center",
        gap: "80px",
      }}
    >
      {/* Phone frame */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 380,
          height: 780,
          backgroundColor: "#0a0a0a",
          borderRadius: 48,
          padding: 12,
          boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            backgroundColor: PALETTE.bg,
            borderRadius: 36,
            overflow: "hidden",
            padding: "60px 20px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: PALETTE.ink,
              fontWeight: 700,
            }}
          >
            Discover
          </div>

          {/* Filter chips */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: 16,
            }}
          >
            <Chip label="All" active />
            <Chip label="Coffee" />
            <Chip label="Park" />
            <Chip label="Bar" />
          </div>

          {/* Place rows */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
              gap: 12,
            }}
          >
            <PlaceRow emoji="☕" name="Sam James" hood="Harbord Village" dist="0.4 km" />
            <PlaceRow emoji="🌳" name="Trinity Bellwoods" hood="West End" dist="0.6 km" />
            <PlaceRow emoji="🖼" name="Art Gallery of Ontario" hood="Chinatown" dist="1.2 km" />
            <PlaceRow emoji="🍸" name="Bar Raval" hood="Little Italy" dist="1.5 km" />
          </div>
        </div>
      </div>

      {/* Side caption */}
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 600 }}>
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 16,
            color: PALETTE.muted,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Pulse
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 56,
            color: PALETTE.ink,
            fontFamily: "Georgia, serif",
            fontWeight: 500,
            lineHeight: 1.05,
          }}
        >
          Discover Toronto, ranked by distance.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 22,
            color: PALETTE.muted,
            lineHeight: 1.45,
          }}
        >
          React Native · Expo · Reanimated · offline favourites · EN / FR
        </div>
      </div>
    </div>,
    { width: WIDTH, height: HEIGHT },
  );
}

function Chip({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "6px 14px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 600,
        backgroundColor: active ? PALETTE.accent : "#EFEBE3",
        color: active ? "#FFFFFF" : PALETTE.ink,
      }}
    >
      {label}
    </div>
  );
}

function PlaceRow({
  emoji,
  name,
  hood,
  dist,
}: {
  emoji: string;
  name: string;
  hood: string;
  dist: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "14px 14px",
        backgroundColor: PALETTE.surface,
        borderRadius: 12,
        border: `1px solid ${PALETTE.border}`,
        gap: 14,
      }}
    >
      <div
        style={{
          display: "flex",
          width: 48,
          height: 48,
          borderRadius: 10,
          backgroundColor: PALETTE.bgAlt,
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
        }}
      >
        {emoji}
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", fontSize: 16, fontWeight: 600, color: PALETTE.ink }}>
          {name}
        </div>
        <div style={{ display: "flex", fontSize: 12, color: PALETTE.muted, marginTop: 2 }}>
          {hood}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 13,
          color: PALETTE.muted,
          fontFamily: "monospace",
        }}
      >
        {dist}
      </div>
    </div>
  );
}

// ─── ReserveBar ─────────────────────────────────────────────────────────────
// Browser-frame mockup with a product grid hint.

function reservebar() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: PALETTE.bgAlt,
        padding: "60px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          backgroundColor: PALETTE.surface,
          borderRadius: 16,
          border: `1px solid ${PALETTE.border}`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "14px 20px",
            borderBottom: `1px solid ${PALETTE.border}`,
            backgroundColor: PALETTE.bgAlt,
            gap: 8,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "#FF5F57" }} />
          <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "#FEBC2E" }} />
          <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "#28C840" }} />
          <div
            style={{
              display: "flex",
              marginLeft: 20,
              fontFamily: "monospace",
              fontSize: 13,
              color: PALETTE.muted,
            }}
          >
            reservebar.com
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "40px 50px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia, serif",
              fontSize: 48,
              fontWeight: 500,
              color: PALETTE.ink,
            }}
          >
            ReserveBar
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "monospace",
              fontSize: 14,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: PALETTE.muted,
              marginTop: 8,
            }}
          >
            Premium spirits, wine & gifts
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 36,
              gap: 18,
            }}
          >
            <ProductCard label="Bourbon" />
            <ProductCard label="Single Malt" />
            <ProductCard label="Champagne" />
            <ProductCard label="Gift Sets" />
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "auto",
              fontSize: 18,
              color: PALETTE.muted,
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
            }}
          >
            Next.js storefront · Contentful CMS · NestJS microservices on GCP
          </div>
        </div>
      </div>
    </div>,
    { width: WIDTH, height: HEIGHT },
  );
}

function ProductCard({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: 220,
        backgroundColor: PALETTE.bgAlt,
        borderRadius: 10,
        border: `1px solid ${PALETTE.border}`,
        padding: 16,
        alignItems: "flex-start",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          display: "flex",
          fontFamily: "Georgia, serif",
          fontSize: 22,
          color: PALETTE.ink,
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ─── Cloud SDK ──────────────────────────────────────────────────────────────
// Terminal-style code snippet of SDK usage.

function cloudSdk() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: PALETTE.bgAlt,
        padding: "70px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          backgroundColor: "#1A1614",
          borderRadius: 16,
          overflow: "hidden",
          padding: "40px 50px",
          gap: 14,
          fontFamily: "monospace",
          fontSize: 22,
          color: "#F0E9DF",
          lineHeight: 1.6,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
            paddingBottom: 16,
            borderBottom: "1px solid #2A2522",
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "#FF5F57" }} />
          <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "#FEBC2E" }} />
          <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: "#28C840" }} />
          <div
            style={{
              display: "flex",
              marginLeft: 16,
              fontSize: 14,
              color: "#8A7F73",
            }}
          >
            @liquidcommerce/cloud-sdk
          </div>
        </div>

        <CodeLine indent={0}>
          <span style={{ color: "#C792EA" }}>import</span>
          <span style={{ color: "#F0E9DF" }}> &#123; CloudSDK &#125; </span>
          <span style={{ color: "#C792EA" }}>from</span>
          <span style={{ color: "#A5E844" }}> '@liquidcommerce/cloud-sdk'</span>
        </CodeLine>
        <CodeLine indent={0}> </CodeLine>
        <CodeLine indent={0}>
          <span style={{ color: "#C792EA" }}>const</span>
          <span style={{ color: "#F0E9DF" }}> sdk = </span>
          <span style={{ color: "#C792EA" }}>new</span>
          <span style={{ color: "#82AAFF" }}> CloudSDK</span>
          <span style={{ color: "#F0E9DF" }}>(&#123;</span>
        </CodeLine>
        <CodeLine indent={2}>
          <span style={{ color: "#F78C6C" }}>apiKey</span>
          <span style={{ color: "#F0E9DF" }}>: process.env.LC_API_KEY,</span>
        </CodeLine>
        <CodeLine indent={0}>
          <span style={{ color: "#F0E9DF" }}>&#125;)</span>
        </CodeLine>
        <CodeLine indent={0}> </CodeLine>
        <CodeLine indent={0}>
          <span style={{ color: "#C792EA" }}>const</span>
          <span style={{ color: "#F0E9DF" }}> order = </span>
          <span style={{ color: "#C792EA" }}>await</span>
          <span style={{ color: "#F0E9DF" }}> sdk.checkout.</span>
          <span style={{ color: "#82AAFF" }}>complete</span>
          <span style={{ color: "#F0E9DF" }}>(&#123;</span>
        </CodeLine>
        <CodeLine indent={2}>
          <span style={{ color: "#F78C6C" }}>cartId</span>
          <span style={{ color: "#F0E9DF" }}>, </span>
          <span style={{ color: "#F78C6C" }}>paymentMethod</span>
          <span style={{ color: "#F0E9DF" }}>: stripeElement,</span>
        </CodeLine>
        <CodeLine indent={0}>
          <span style={{ color: "#F0E9DF" }}>&#125;)</span>
        </CodeLine>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 30,
          fontFamily: "Georgia, serif",
          fontSize: 22,
          color: PALETTE.muted,
          fontStyle: "italic",
        }}
      >
        Multi-format Rollup builds (ESM, CJS, UMD, SSR) · semantic-release · GCP-backed NestJS
        microservices
      </div>
    </div>,
    { width: WIDTH, height: HEIGHT },
  );
}

function CodeLine({ indent, children }: { indent: number; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", paddingLeft: indent * 24 }}>
      <span>{children}</span>
    </div>
  );
}
