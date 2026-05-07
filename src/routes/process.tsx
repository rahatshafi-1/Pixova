import { createFileRoute } from "@tanstack/react-router";
import { Section, FadeIn, SectionLabel } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Check } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Pixova" },
      { name: "description", content: "From first message to final launch — here's exactly what working with us looks like." },
      { property: "og:title", content: "Process — Pixova" },
      { property: "og:description", content: "How Pixova works." },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  ["01", "Discovery Call", "We learn about your business, goals, and the problems you need solved. No commitment, just a conversation."],
  ["02", "Scoping & Planning", "We map out the full project — features, timeline, tech stack, and deliverables. You know exactly what to expect."],
  ["03", "Design & Prototyping", "We build the visual blueprint. You review, give feedback, and approve before a single line of code is written."],
  ["04", "Development & Integration", "We build your product — clean code, tested features, and seamless integrations. Regular updates keep you in the loop."],
  ["05", "Launch & Ongoing Support", "We deploy, monitor, and stay available. Your success after launch matters as much as the build itself."],
];

function ProcessPage() {
  return (
    <>
      <section className="bg-mesh py-32 md:py-40">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <SectionLabel>Process</SectionLabel>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tighter">How Pixova <span className="text-gradient">Works.</span></h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">From first message to final launch — here's exactly what working with us looks like.</p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-border" />
            <div className="space-y-12">
              {steps.map(([num, title, desc], i) => (
                <FadeIn key={num} delay={i * 0.05}>
                  <div className="flex gap-6 md:gap-10">
                    <div className="relative shrink-0">
                      <div className="h-12 w-12 md:h-16 md:w-16 rounded-full border border-accent/40 bg-card flex items-center justify-center font-display font-semibold text-accent shadow-[0_0_30px_-8px_var(--accent)]">
                        {num}
                      </div>
                    </div>
                    <div className="pt-2 md:pt-4 pb-4">
                      <h3 className="font-display text-2xl md:text-3xl font-semibold">{title}</h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-mesh">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">Why our clients trust the process.</h2>
          </FadeIn>
          <ul className="mt-10 space-y-4">
            {["Transparent communication", "Milestone-based delivery", "Post-launch support included"].map((item, i) => (
              <FadeIn key={item} delay={i * 0.06}>
                <li className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card">
                  <Check className="h-5 w-5 text-accent" />
                  <span className="font-medium">{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBanner title="Ready to start your project?" cta="Reach Out to Us" />
    </>
  );
}
