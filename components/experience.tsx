import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-default border-t">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-[80px_1fr]">
          <div className="hidden sm:block">
            <div className="section-label">№ 02</div>
            <div className="section-label mt-1">Experience</div>
          </div>

          <div>
            <h2 className="font-display text-3xl sm:text-4xl">
              Where <em>I've worked</em>
            </h2>

            <ol className="mt-12 space-y-10">
              {experience.map((entry) => (
                <li
                  key={`${entry.company}-${entry.start}`}
                  className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-6"
                >
                  <div className="text-muted font-mono text-xs leading-relaxed">
                    {entry.start} — {entry.end}
                    <div className="mt-1 text-[11px] text-muted/70">{entry.location}</div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl">
                      {entry.role}{" "}
                      <span className="text-muted">
                        <em>at</em> {entry.company}
                      </span>
                    </h3>
                    <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5">
                          <span className="text-accent mt-1 select-none">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
