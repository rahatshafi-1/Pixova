import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Section, FadeIn, SectionLabel } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Pixova" },
      { name: "description", content: "Real projects. Real results. Selected work by Pixova." },
      { property: "og:title", content: "Work — Pixova" },
      { property: "og:description", content: "Real projects. Real results." },
    ],
  }),
  component: WorkPage,
});

const filters = ["All", "Web", "App", "Automation"] as const;

const placeholders = [
  { name: "Coming Soon", description: "A new project is in the works.", category: "App" as const },
  { name: "Coming Soon", description: "A new project is in the works.", category: "Automation" as const },
];

function WorkPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="bg-mesh py-32 md:py-40">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tighter">Our <span className="text-gradient">Work.</span></h1>
            <p className="mt-8 text-lg text-muted-foreground">Real projects. Real results.</p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                  filter === f
                    ? "bg-accent text-accent-foreground border-accent shadow-[0_0_20px_-4px_var(--accent)]"
                    : "bg-card border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visible.map((p, i) => (
              <FadeIn key={p.name + i} delay={i * 0.06}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
            {filter === "All" && placeholders.map((p, i) => (
              <FadeIn key={"ph" + i} delay={(visible.length + i) * 0.06}>
                <div className="rounded-2xl border border-dashed border-border bg-card/30 aspect-[16/14] flex flex-col items-center justify-center text-center p-8">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</div>
                  <div className="mt-3 font-display text-xl font-semibold">{p.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <CtaBanner title="Like what you see? Let's build yours." cta="Start a Project" />
    </>
  );
}
