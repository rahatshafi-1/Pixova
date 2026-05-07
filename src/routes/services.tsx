import { createFileRoute } from "@tanstack/react-router";
import { Code, Smartphone, Sparkles, Workflow, Rocket, Check } from "lucide-react";
import { Section, FadeIn, SectionLabel } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pixova" },
      { name: "description", content: "Web, app, AI, automation, and digital transformation services." },
      { property: "og:title", content: "Services — Pixova" },
      { property: "og:description", content: "Web, app, AI, automation, and digital transformation services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Code, title: "Website Development",
    desc: "Custom, fast, conversion-focused websites — built on modern stacks and shipped quickly.",
    bullets: ["Custom design system", "Lightning-fast performance", "SEO-ready architecture", "CMS integration", "Analytics & conversion tracking"],
  },
  {
    icon: Smartphone, title: "App Development",
    desc: "Native iOS, Android, and cross-platform apps designed for retention and scale.",
    bullets: ["iOS & Android native", "React Native cross-platform", "Backend & API integration", "Push notifications", "App Store launch support"],
  },
  {
    icon: Sparkles, title: "AI Automations",
    desc: "Intelligent workflows powered by LLMs that save time and unlock new capabilities.",
    bullets: ["Custom AI agents", "Document & email automation", "Lead qualification", "Smart customer support", "Data extraction & analysis"],
  },
  {
    icon: Workflow, title: "Service Automations",
    desc: "Automate repetitive ops, CRMs, and pipelines so your team focuses on what matters.",
    bullets: ["CRM integration", "Workflow automation", "Slack & email triggers", "Reporting dashboards", "Tool consolidation"],
  },
  {
    icon: Rocket, title: "Digital Transformation",
    desc: "End-to-end tech strategy for small businesses ready to scale and modernize.",
    bullets: ["Tech stack audit", "Process digitization", "Cloud migration", "Team training", "Ongoing strategy support"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-mesh py-32 md:py-40">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <SectionLabel>Services</SectionLabel>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tighter">Services built for <span className="text-gradient">growth.</span></h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl">Five focused services. Endless ways to help your business grow, automate, and scale.</p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="container mx-auto px-6 space-y-32">
          {services.map((s, i) => (
            <FadeIn key={s.title}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="aspect-square rounded-3xl border border-border bg-card bg-mesh flex items-center justify-center glow-hover">
                  <s.icon className="h-32 w-32 text-accent" strokeWidth={1.2} />
                </div>
                <div>
                  <SectionLabel>0{i + 1}</SectionLabel>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">{s.title}</h2>
                  <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
                  <ul className="mt-8 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CtaBanner title="Not sure which service is right for you? Let's figure it out together." cta="Talk to Us" />
    </>
  );
}
