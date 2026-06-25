import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="border-default border-t">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-[80px_1fr]">
          <div className="hidden sm:block">
            <div className="section-label">№ 04</div>
            <div className="section-label mt-1">Contact</div>
          </div>

          <div>
            <h2 className="font-display text-3xl sm:text-4xl">
              <em>Let's</em> talk
            </h2>
            <p className="text-muted mt-4 max-w-xl text-[16px] leading-relaxed">
              I'm open to new opportunities — full-time, contract, or just a chat about a problem
              you're stuck on. Email is fastest; I usually reply within a day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-[hsl(var(--accent))] px-4 py-2.5 font-medium text-[hsl(var(--accent-foreground))] transition-opacity hover:opacity-90"
              >
                {profile.email}
                <span aria-hidden>→</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="border-default inline-flex items-center gap-2 rounded-md border px-4 py-2.5 font-medium transition-colors hover:bg-[hsl(var(--muted))]"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border-default inline-flex items-center gap-2 rounded-md border px-4 py-2.5 font-medium transition-colors hover:bg-[hsl(var(--muted))]"
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="border-default inline-flex items-center gap-2 rounded-md border px-4 py-2.5 font-medium transition-colors hover:bg-[hsl(var(--muted))]"
              >
                Résumé (PDF)
              </a>
            </div>

            <div className="border-default text-muted mt-16 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono">
                © {new Date().getFullYear()} {profile.name} · Toronto, Canada
              </span>
              <span className="font-mono text-muted/70">v0.1</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
