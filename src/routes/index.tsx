import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Sparkles, Workflow, Rocket, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Section, FadeIn, SectionLabel } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixova — Smart Tech for Small Businesses" },
      { name: "description", content: "Websites, apps, and AI-powered automations to help small businesses grow." },
    ],
  }),
  component: HomePage,
});

const stats = [
  ["50+", "Projects Delivered"],
  ["3x", "Average ROI Growth"],
  ["100%", "Client Satisfaction"],
  ["5+", "Years of Expertise"],
];

const services = [
  { icon: Code, title: "Website Development", desc: "Custom, fast, conversion-focused websites." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile apps." },
  { icon: Sparkles, title: "AI Automations", desc: "Intelligent workflows that save time and money." },
  { icon: Workflow, title: "Service Automations", desc: "Automate repetitive ops, CRMs, pipelines." },
  { icon: Rocket, title: "Digital Transformation", desc: "End-to-end tech strategy for small businesses." },
];

const testimonials = [
  { quote: "Pixova transformed how we operate. The automation alone saved us 20 hours a week.", name: "Sarah Chen", company: "Bloom Boutique" },
  { quote: "Beautiful site, even better team. They genuinely cared about our growth.", name: "Marcus Reed", company: "Reed & Co." },
  { quote: "From concept to launch in 6 weeks. Conversions doubled in month one.", name: "Aisha Khan", company: "Lumen Studio" },
];

const faqs = [
  ["What types of businesses do you work with?", "We partner with small to mid-sized businesses across retail, real estate, hospitality, services, and SaaS — anyone ready to grow with smart technology."],
  ["How long does a typical project take?", "Most websites ship in 3–5 weeks. Apps and complex automations typically run 8–12 weeks depending on scope."],
  ["Do you offer ongoing support after launch?", "Yes. Every project includes post-launch support, and we offer monthly retainers for ongoing optimization, content, and feature work."],
  ["Can you build both a website and a mobile app together?", "Absolutely. We design unified systems so your web, app, and backend speak one language."],
  ["How do AI automations actually help my business?", "We automate the repetitive — lead qualification, inbox triage, reporting, follow-ups — so your team focuses on the work that grows revenue."],
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-mesh overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/30 blur-[120px]"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[140px]"
            animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <SectionLabel>Powering Small Businesses with Smart Technology</SectionLabel>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]">
              Smart Tech for <br />
              <span className="text-gradient">Small Businesses.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Pixova builds websites, apps, and AI-powered automations that help small businesses grow faster and operate smarter.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition shadow-[0_0_40px_-8px_var(--accent)]">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/work" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/50 text-sm font-medium hover:bg-card transition">
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border">
        <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(([value, label], i) => (
            <FadeIn key={label} delay={i * 0.05} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl font-semibold text-gradient">{value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <Section>
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionLabel>Selected Work</SectionLabel>
            <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl">Selected Work.</h2>
              <p className="text-muted-foreground max-w-md">A look at how Pixova has helped businesses build, automate, and grow.</p>
            </div>
          </FadeIn>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <FadeIn key={p.name + i} delay={i * 0.08}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50 text-sm font-medium hover:bg-card transition">
              View All Work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-mesh">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
              Everything your business needs to go digital — and stay ahead.
            </h2>
          </FadeIn>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <Link to="/services" className="block p-8 rounded-2xl border border-border bg-card glow-hover h-full">
                  <s.icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent">Learn More <ArrowRight className="h-3.5 w-3.5" /></div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="container mx-auto px-6">
          <FadeIn className="text-center">
            <div className="inline-flex items-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              <span className="ml-2 text-sm text-muted-foreground">5.0 / 5</span>
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight">What our clients say.</h2>
          </FadeIn>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08}>
                <div className="p-8 rounded-2xl border border-border bg-card h-full flex flex-col">
                  <p className="text-foreground/90 leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-primary" />
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Trusted By */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">Trusted by teams building the future</p>
          <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-60">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-8 rounded bg-secondary" />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <Section>
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionLabel>Process</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
              Our process is built for speed and clarity.
            </h2>
          </FadeIn>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              ["01", "Discovery & Scoping", "We understand your business, goals, and what tech solution fits best."],
              ["02", "Build & Integrate", "We design, develop, and deploy — with you in the loop at every milestone."],
              ["03", "Launch & Optimize", "We don't disappear. We monitor, refine, and improve post-launch."],
            ].map(([num, title, desc], i) => (
              <FadeIn key={num} delay={i * 0.08}>
                <div className="p-8 rounded-2xl border border-border bg-card h-full">
                  <div className="font-display text-5xl font-semibold text-accent/80">{num}</div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold tracking-tight">Questions, answered.</h2>
          </FadeIn>
          <div className="mt-12 space-y-3">
            {faqs.map(([q, a], i) => <FaqItem key={i} q={q} a={a} />)}
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left">
        <span className="font-medium">{q}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0 }} className="overflow-hidden">
        <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}
