import { profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

export function Hero() {
  return (
    <header className="border-default border-b">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5 text-sm">
        <a
          href="#top"
          className="font-mono text-[13px] tracking-tight text-muted hover:text-[hsl(var(--foreground))]"
        >
          elio<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-5">
          <a href="#projects" className="text-muted hover:text-[hsl(var(--foreground))] px-2 py-1">
            Projects
          </a>
          <a
            href="#experience"
            className="text-muted hover:text-[hsl(var(--foreground))] px-2 py-1"
          >
            Experience
          </a>
          <a href="#about" className="text-muted hover:text-[hsl(var(--foreground))] px-2 py-1">
            About
          </a>
          <a href="#contact" className="text-muted hover:text-[hsl(var(--foreground))] px-2 py-1">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>

      <section id="top" className="mx-auto max-w-4xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        {/* Asymmetric layout — mono index in the left rail like a print magazine. */}
        <div className="grid gap-8 sm:grid-cols-[80px_1fr]">
          <div className="hidden sm:block">
            <div className="section-label">№ 00</div>
            <div className="section-label mt-1">Intro</div>
          </div>

          <div>
            <div className="border-default text-muted inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.status}
            </div>

            <h1 className="font-display mt-8 text-5xl leading-[1.05] sm:text-7xl">
              <span className="block">{profile.name.split(" ")[0]}</span>
              <span className="block italic text-muted">
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="font-mono mt-6 text-xs tracking-wide text-muted uppercase">
              {profile.signature}
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl sm:leading-[1.6]">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-[hsl(var(--accent))] px-4 py-2.5 text-sm font-medium text-[hsl(var(--accent-foreground))] transition-opacity hover:opacity-90"
              >
                Get in touch
                <span aria-hidden>→</span>
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="border-default inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[hsl(var(--muted))]"
              >
                Résumé
                <span aria-hidden className="text-muted">
                  PDF
                </span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-[hsl(var(--foreground))] px-2 py-2.5 text-sm transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-[hsl(var(--foreground))] px-2 py-2.5 text-sm transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
