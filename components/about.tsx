import { about, skills } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-default border-t">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-[80px_1fr]">
          <div className="hidden sm:block">
            <div className="section-label">№ 03</div>
            <div className="section-label mt-1">About</div>
          </div>

          <div>
            <h2 className="font-display text-3xl sm:text-4xl">
              <em>A short</em> version
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-[17px] leading-[1.7] sm:text-[18px]">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className="section-label mt-16">Skills</h3>
            <dl className="mt-5 space-y-3.5">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="grid gap-2 sm:grid-cols-[140px_1fr]">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted pt-0.5">
                    {category}
                  </dt>
                  <dd className="text-muted text-[15px] leading-relaxed">{items.join("  ·  ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
