import { type Project, projects } from "@/lib/data";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="border-default border-t">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-[80px_1fr]">
          <div className="hidden sm:block">
            <div className="section-label">№ 01</div>
            <div className="section-label mt-1">Projects</div>
          </div>

          <div>
            <h2 className="font-display text-3xl sm:text-4xl">
              <em>Selected</em> work
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              Each project on this list is small on purpose — focused enough to be finishable in
              evenings and weekends, deep enough to demonstrate a specific capability the day-job
              code doesn't show.
            </p>

            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index + 1} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <li className="border-default group flex flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:border-[hsl(var(--accent))]">
      {project.image ? (
        <div className="border-default relative aspect-video w-full overflow-hidden border-b bg-[hsl(var(--muted))]">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="border-default font-display relative flex aspect-video w-full items-center justify-center overflow-hidden border-b bg-[hsl(var(--muted))]">
          <span className="text-[8rem] leading-none text-[hsl(var(--muted-foreground))] opacity-30">
            {project.name.charAt(0)}
          </span>
          <span className="absolute left-3 top-3 font-mono text-[10px] tracking-widest text-muted">
            № {String(index).padStart(2, "0")}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl leading-tight">{project.name}</h3>
          <span
            className={`shrink-0 rounded-md px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${
              project.kind === "Work"
                ? "border-default text-muted border"
                : "text-accent border-[hsl(var(--accent))]/30 border"
            }`}
          >
            {project.kind}
          </span>
        </div>

        <p className="text-muted mt-3 flex-1 text-[15px] leading-relaxed">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="border-default rounded-md border px-2 py-0.5 font-mono text-[10px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent inline-flex items-center gap-1 hover:underline"
            >
              GitHub <span aria-hidden>↗</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent inline-flex items-center gap-1 hover:underline"
            >
              {project.liveLabel ?? "Live"} <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
