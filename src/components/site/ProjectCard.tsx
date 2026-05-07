import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group glow-hover rounded-2xl overflow-hidden border border-border bg-card flex flex-col">
      <div className="aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold">{project.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
        >
          View Project <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
