import { createFileRoute } from "@tanstack/react-router";
import { Zap, Eye, Brain, LifeBuoy } from "lucide-react";
import { Section, FadeIn, SectionLabel } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pixova" },
      { name: "description", content: "Pixova empowers small businesses with enterprise-grade tech." },
      { property: "og:title", content: "About — Pixova" },
      { property: "og:description", content: "Pixova empowers small businesses with enterprise-grade tech." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Zap, title: "Speed", desc: "We move fast without cutting corners. Most projects ship in weeks, not months." },
  { icon: Eye, title: "Transparency", desc: "Clear pricing, milestone updates, and no surprises. You always know where things stand." },
  { icon: Brain, title: "Smart Solutions", desc: "We choose the right tech for your business — not the trendiest. Outcomes over hype." },
  { icon: LifeBuoy, title: "Long-Term Support", desc: "Launch is just the start. We stick around to optimize, refine, and grow with you." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-mesh py-32 md:py-40">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <SectionLabel>About Pixova</SectionLabel>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tighter">We are <span className="text-gradient">Pixova.</span></h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Pixova is a small, focused team building practical technology for small businesses. We design, build, and automate — turning everyday operations into measurable growth.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <SectionLabel>Our Mission</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold tracking-tight">Empowering small businesses with enterprise-grade tech.</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Big companies have always had access to powerful technology. We're here to level the playing field — building tools, sites, apps, and automations that help small teams compete with the giants.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-mesh">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionLabel>Why Pixova</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">Built on four pillars.</h2>
          </FadeIn>
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06}>
                <div className="p-8 rounded-2xl border border-border bg-card glow-hover h-full">
                  <p.icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionLabel>Team</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold tracking-tight">The people behind Pixova.</h2>
          </FadeIn>
          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[["Founder", "CEO"], ["Lead Engineer", "Engineering"], ["Design Lead", "Design"], ["AI Engineer", "Automation"]].map(([name, role], i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-6 rounded-2xl border border-border bg-card text-center">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-accent to-primary" />
                  <div className="mt-5 font-display font-semibold">{name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{role}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <CtaBanner title="Have a project in mind? Let's talk about it." cta="Get In Touch" />
    </>
  );
}
