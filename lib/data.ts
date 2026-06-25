export type ProjectKind = "Work" | "Personal";

export type Project = {
  name: string;
  kind: ProjectKind;
  description: string;
  stack: string[];
  image?: string;
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const profile = {
  name: "Elio Mehmeti",
  role: "Software Developer",
  location: "Toronto, Canada",
  // Short, opinionated, concrete. Avoids "passionate about" language.
  tagline:
    "I build full-stack TypeScript across the whole tree — Next.js storefronts, NestJS services, React Native apps, and the embeddable widgets that drop our commerce surface onto other people's pages.",
  // Surface stack so visitors can pattern-match in 1 second.
  signature: "Next.js · NestJS · React Native · Embeddable SDKs · AI-native interfaces",
  status: "Open to new opportunities · Remote · Toronto",
  email: "mehmetielio95@gmail.com",
  github: "https://github.com/Elio1995",
  linkedin: "https://www.linkedin.com/in/elio-mehmeti-70a883217/",
  resume: "/resume.pdf",
};

/**
 * Projects ordered by hiring impact, strongest first.
 *
 * Lead with the AI-native and mobile pieces (rarest signals in 2026),
 * follow with the unique embeddable-widget work, then full-stack breadth,
 * then the work entries (which carry less weight because recruiters
 * can't click into the code).
 */
export const projects: Project[] = [
  {
    name: "Clarity",
    kind: "Personal",
    description:
      "AI-native meeting notes. Paste a transcript, get a typed list of action items with owners, deadlines, and a verbatim source quote — extracted by Claude with strict JSON schemas, prompt caching, and a Zod safety net on the way back.",
    stack: [
      "TypeScript",
      "Next.js 15",
      "Anthropic SDK",
      "Prisma",
      "PostgreSQL",
      "NextAuth v5",
      "Zod",
      "Vitest",
    ],
    image: "/screenshots/clarity",
    githubUrl: "https://github.com/Elio1995/clarity",
  },
  {
    name: "Pulse",
    kind: "Personal",
    description:
      "React Native city guide for Toronto. On-device geolocation with a Haversine ranking, Reanimated v3 spring transitions, offline favourites via AsyncStorage, and a live English / French language switch. EAS Build profiles ready for store submission.",
    stack: [
      "React Native",
      "Expo SDK 52",
      "Expo Router",
      "Reanimated v3",
      "Zustand",
      "i18next",
      "Jest",
    ],
    image: "/screenshots/pulse",
    githubUrl: "https://github.com/Elio1995/pulse",
  },
  {
    name: "Beacon",
    kind: "Personal",
    description:
      "An embeddable feedback widget you can drop on any page with a single script tag. Shadow-DOM isolated so it can't leak styles, themeable via CSS variables, with a tiny dashboard for browsing submissions.",
    stack: ["TypeScript", "Web Components", "Shadow DOM", "Rollup", "Next.js", "Prisma"],
    image: "/screenshots/beacon.png",
    githubUrl: "https://github.com/Elio1995/beacon",
  },
  {
    name: "Helm",
    kind: "Personal",
    description:
      "A small specialty bookshop in Next.js 15 — server-first cart with optimistic updates, end-to-end Stripe Checkout (test mode) with webhook reconciliation, and bilingual EN / FR routing via next-intl.",
    stack: [
      "TypeScript",
      "Next.js 15",
      "Server Actions",
      "Prisma",
      "Stripe",
      "next-intl",
      "Tailwind",
    ],
    image: "/screenshots/helm.png",
    githubUrl: "https://github.com/Elio1995/helm",
  },
  {
    name: "Relay",
    kind: "Personal",
    description:
      "An order coordination service for a fictional multi-vendor marketplace. NestJS 11 splits orders into vendor-scoped fulfillments, emits a state-transition event stream, and writes an immutable audit log. Designed to look like a slice you could lift, swap the in-process bus for GCP Pub/Sub, and ship.",
    stack: ["TypeScript", "NestJS 11", "Next.js 15", "Event sourcing", "Prisma", "Docker"],
    image: "/screenshots/relay.png",
    githubUrl: "https://github.com/Elio1995/relay",
  },
  {
    name: "Strata",
    kind: "Personal",
    description:
      "Fully-typed TypeScript SDK wrapping the Open-Meteo weather API. Retries with exponential backoff, request deduplication, timeouts, discriminated-union error types, and ESM + CJS + UMD bundles published to npm.",
    stack: ["TypeScript", "Rollup", "ESM / CJS / UMD", "Vitest", "semantic-release", "npm"],
    image: "/screenshots/strata.png",
    githubUrl: "https://github.com/Elio1995/strata",
  },
  {
    name: "ReserveBar",
    kind: "Work",
    description:
      "E-commerce platform with a Next.js storefront, Contentful CMS, and NestJS microservices on GCP. I work across customer-facing features, payment flows, embeddable third-party integrations (Shopify / WordPress), and catalog / order services.",
    stack: ["TypeScript", "Next.js", "NestJS", "Tailwind", "shadcn/ui", "Turborepo", "Docker"],
    image: "/screenshots/reservebar.png",
    liveUrl: "https://www.reservebar.com/",
    liveLabel: "reservebar.com",
  },
  {
    name: "LiquidCommerce Cloud SDK",
    kind: "Work",
    description:
      "Publishable TypeScript SDK for the LiquidCommerce e-commerce platform. Multi-format builds (ESM, CJS, UMD, SSR), Stripe Payment Element integration, and a semantic-release pipeline auto-publishing to npm. Consumed by Next.js storefronts on top of GCP-backed NestJS microservices.",
    stack: ["TypeScript", "Rollup", "Stripe", "semantic-release", "GitHub Actions"],
    image: "/screenshots/cloud-sdk",
    githubUrl: "https://github.com/liquidcommerce/cloud-sdk",
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "ReserveBar",
    role: "Software Developer",
    location: "Remote, USA",
    start: "Sep 2024",
    end: "Present",
    bullets: [
      "Build full-stack features across NestJS backends and Next.js frontends, tuning rendering strategy per route (SSR vs. CSR vs. static) and the server / client component split.",
      "Apply clean architecture and a reusable component system on top of shadcn/ui and Tailwind, with pixel-accurate Figma implementation respecting accessibility and responsive constraints.",
      "Build an embeddable third-party integration that plugs into different CMS platforms (Shopify, WordPress) so external sites can consume ReserveBar functionality with minimal setup.",
    ],
  },
  {
    company: "Sidekick AI",
    role: "Frontend Developer (Part Time)",
    location: "Remote, Toronto, ON, Canada",
    start: "May 2024",
    end: "Aug 2024",
    bullets: [
      "Shipped features for the email builder platform in TypeScript and Next.js — translating Figma designs into interactive production-ready components, and debugging cross-browser issues end-to-end.",
    ],
  },
  {
    company: "Kineton",
    role: "Software Developer",
    location: "Tirana, Albania",
    start: "Jan 2023",
    end: "Aug 2024",
    bullets: [
      "Web and Mobile developer in TypeScript with React, React Native, and Redux — Material UI and Styled Components for the design system.",
      "Built mobile experiences with React Native (Navigation, Maps, Reanimated, Swiper) and backend services on NestJS + Prisma; published apps to the Google Play Store and App Store.",
    ],
  },
  {
    company: "Nurselo GmbH",
    role: "Full-Stack Developer",
    location: "Remote",
    start: "Feb 2022",
    end: "Jan 2023",
    bullets: [
      "Built features in React and Angular with TypeScript; styled UIs using Bootstrap, Material UI, and Tailwind.",
      "Backend services using NestJS, Prisma, and Firebase, with CI/CD and Git-based workflows.",
    ],
  },
  {
    company: "Enterprise Nation",
    role: "Junior Frontend Developer",
    location: "Remote, London, UK",
    start: "Oct 2021",
    end: "Feb 2022",
    bullets: [
      "Built React and Next.js features in a DevOps (Azure) environment, integrating with CRM systems and Eventbrite.",
    ],
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
  Frontend: ["React", "Next.js", "React Native", "Expo", "shadcn/ui", "Tailwind CSS", "Reanimated"],
  Backend: ["NestJS", "Node.js", "Prisma", "PostgreSQL", "Firebase", "REST", "gRPC"],
  AI: ["Anthropic SDK", "Tool use", "Structured outputs", "Prompt caching"],
  Tools: [
    "Turborepo",
    "Docker",
    "GitHub Actions",
    "EAS Build",
    "Biome",
    "Vitest / Jest",
    "Stripe",
    "i18next",
  ],
};

export const about = [
  "I'm a software developer based in Toronto. I work across the full TypeScript stack — Next.js on the frontend, NestJS on the backend, React Native for mobile, and the embeddable pieces in between. Right now I'm at ReserveBar, where I build customer-facing features and a third-party integration that drops our commerce surface onto Shopify and WordPress sites.",
  "Before Toronto I worked in Tirana at Kineton (web + React Native), and remotely for Nurselo, Enterprise Nation, and Sidekick AI. I speak English fluently, Italian at intermediate level, and basic French.",
  "The projects on this page are deliberately focused — each one demonstrates a specific capability rather than trying to be a complete product. I build them to keep my hands on the parts of the stack my day job doesn't always touch: AI-native interfaces, embeddable SDKs, native mobile, event-driven backends.",
];
