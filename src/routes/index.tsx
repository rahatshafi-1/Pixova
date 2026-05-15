import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Code, Smartphone, Sparkles, Workflow, Rocket, Star, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Section, FadeIn, SectionLabel, ShowcaseRowReveal } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PixovaScrollCanvas } from "@/components/site/PixovaScrollCanvas";
import { cn } from "@/lib/utils";

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

const heroReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
} as const;

const heroChild = {
  hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

function HomePage() {
  const { scrollYProgress } = useScroll();

  const reduceMotion = useReducedMotion();

  const [narrowViewport, setNarrowViewport] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setNarrowViewport(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const workAnchorRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: workScrollProgress } = useScroll({
    target: workAnchorRef,
    offset: ["start end", "end start"],
  });

  /** Drives vignette fade; WebGL fades out visually by stacking beneath Services (solid shell), not opacity. */
  const postWorkRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: postWorkRevealProgress } = useScroll({
    target: postWorkRef,
    offset: ["start end", "start start"],
  });

  /** Stops orbital motion briefly before burying canvas behind Services (mute → pose hold). */
  const orbitMotionMute = useTransform(
    postWorkRevealProgress,
    [0, 0.78, 0.935, 1],
    reduceMotion ? [1, 1, 0, 0] : [1, 1, 0, 0],
  );

  /** Tucks fixed WebGL beneath the Services block (opaque bg) instead of ramping transparency. */
  const canvasZIndex = useTransform(
    postWorkRevealProgress,
    [0, 0.78, 0.912, 1],
    reduceMotion ? [6, 6, -1, -1] : [6, 6, -1, -1],
  );

  const layerPresence = useTransform(
    postWorkRevealProgress,
    [0, 0.045, 0.16],
    reduceMotion ? [1, 0.45, 0] : [1, 0.55, 0],
  );

  const vignetteOpacity = useTransform(layerPresence, (v) =>
    Math.min(1, v * (narrowViewport ? 0.94 : 0.995)),
  );

  const trustedRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: trustedProgress } = useScroll({
    target: trustedRef,
    offset: ["start 0.95", "end 0.05"],
  });

  const stripDrift = useTransform(trustedProgress, [0, 1], reduceMotion ? [0, 0] : [-18, 18]);
  const stripOpacity = useTransform(trustedProgress, [0, 0.35, 0.72, 1], reduceMotion ? [1, 1, 1, 1] : [0.35, 0.78, 0.78, 0.42]);

  const cueOpacity = useTransform(scrollYProgress, [0, 0.08], reduceMotion ? [0, 0] : [1, 0]);

  const heroItemMotion = reduceMotion
    ? {
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
        },
      }
    : heroChild;

  return (
    <>
      <div className="relative isolate overflow-x-hidden">
        <PixovaScrollCanvas
          scrollYProgress={scrollYProgress}
          workSectionProgress={workScrollProgress}
          orbitMotionMute={orbitMotionMute}
          canvasZIndex={canvasZIndex}
          projectCount={projects.length}
          viewportCompact={narrowViewport}
        />
        <motion.div
          className={cn(
            "pointer-events-none fixed inset-y-0 left-0 z-[8] bg-gradient-to-r from-background to-transparent max-w-xl sm:max-w-2xl md:max-w-3xl",
            narrowViewport ? "w-[94%]" : "w-[82%] sm:w-[72%] md:w-[61%]",
            narrowViewport ? "via-background/70" : "via-background/92 md:via-background/74 lg:via-background/54",
          )}
          aria-hidden
          style={{ opacity: vignetteOpacity }}
        />

        {/* Page scroll accent */}
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 right-0 top-20 z-[48] mx-auto max-w-none h-[2px] origin-left rounded-full bg-gradient-to-r from-accent via-primary to-accent shadow-[0_0_28px_-2px_var(--accent)]"
          style={{
            scaleX: scrollYProgress,
          }}
        />

        <div className="relative z-10">
        {/* Hero */}
        <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-mesh overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/30 blur-[120px]"
              animate={reduceMotion ? { x: 0, y: 0 } : { x: [0, 60, 0], y: [0, 40, 0] }}
              transition={{
                duration: reduceMotion ? 0 : 12,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[140px]"
              animate={reduceMotion ? { x: 0, y: 0 } : { x: [0, -40, 0], y: [0, -50, 0] }}
              transition={{
                duration: reduceMotion ? 0 : 14,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="container relative mx-auto px-6 py-20">
            <motion.div variants={heroReveal} initial="hidden" animate="visible" className="max-w-4xl">
              <motion.div variants={heroItemMotion}>
                <SectionLabel>Powering Small Businesses with Smart Technology</SectionLabel>
              </motion.div>
              <motion.div variants={heroItemMotion}>
                <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]">
                  Smart Tech for <br />
                  <span className="text-gradient">Small Businesses.</span>
                </h1>
              </motion.div>
              <motion.div variants={heroItemMotion}>
                <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Pixova builds websites, apps, and AI-powered automations that help small businesses grow faster and operate smarter.
                </p>
              </motion.div>
              <motion.div variants={heroItemMotion}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition shadow-[0_0_40px_-8px_var(--accent)]"
                  >
                    Start a Project <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/50 text-sm font-medium hover:bg-card transition"
                  >
                    See Our Work
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {!reduceMotion && (
            <motion.div
              className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 pb-[env(safe-area-inset-bottom,0)] text-muted-foreground sm:bottom-8 md:bottom-10"
              style={{ opacity: cueOpacity }}
            >
              <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-9 w-5 items-start justify-center rounded-full border border-border/80 pb-1 pt-1"
              >
                <motion.span
                  className="block h-1 w-1 rounded-full bg-accent"
                  animate={{ y: [2, 10, 2], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          )}
        </section>

      {/* Stats */}
      <section className="border-y border-border">
        <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(([value, label], i) => (
            <FadeIn key={label} variant="scale" delay={i * 0.05} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl font-semibold text-gradient">{value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Selected Work — cards stack above WebGL orbit (canvas stays z‑6 vs content z‑10+) */}
      <div ref={workAnchorRef} className="relative z-[12] isolate">
      <Section id="selected-work">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionLabel>Selected Work</SectionLabel>
            <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl">Selected Work.</h2>
              <p className="text-muted-foreground max-w-md">A look at how Pixova has helped businesses build, automate, and grow.</p>
            </div>
          </FadeIn>

          <div className="mt-16 flex flex-col gap-20 sm:gap-24 md:gap-36">
            {projects.map((p, i) => {
              const isLeftCol = i % 2 === 0;
              return (
                <ShowcaseRowReveal
                  key={p.name}
                  viewportNarrow={narrowViewport}
                  orderIndex={i}
                  side={isLeftCol ? "left" : "right"}
                  className={cn(
                    "w-full max-w-lg",
                    narrowViewport ? "mx-auto" : null,
                    !narrowViewport &&
                      "md:max-w-[min(560px,92%)] lg:max-w-[560px]",
                    !narrowViewport &&
                      (isLeftCol
                        ? "md:self-start md:mr-auto md:-translate-x-[1%] lg:translate-x-[2%]"
                        : "md:self-end md:ml-auto md:translate-x-[1%] lg:-translate-x-[2%]"),
                  )}
                >
                  <ProjectCard project={p} />
                </ShowcaseRowReveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <FadeIn variant="scale" delay={0.06}>
              <Link to="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/50 text-sm font-medium hover:bg-card transition">
                View All Work <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </Section>
      </div>

      {/* Services — sentinel ref: bury 3D + vignette as this zone enters */}
      <div ref={postWorkRef} className="relative isolate z-[14] bg-background">
      <Section className="border-t border-border bg-mesh">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
              Everything your business needs to go digital — and stay ahead.
            </h2>
          </FadeIn>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} variant={i % 2 === 0 ? "slideLeft" : "slideRight"} delay={i * 0.06}>
                <Link to="/services" className="block p-8 rounded-2xl border border-border bg-card glow-hover h-full">
                  <s.icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
      </div>

      {/* Testimonials */}
      <Section className="relative isolate z-[14] bg-background">
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
              <FadeIn key={t.name} variant="scale" delay={i * 0.08}>
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
      <section
        ref={trustedRef}
        className="relative isolate z-[14] overflow-hidden bg-background py-16 border-y border-border"
      >
        <motion.div aria-hidden style={{ opacity: stripOpacity }} className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-20%] top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-accent/14 blur-[100px]" />
          <div className="absolute left-[-14%] top-[-20%] h-[22rem] w-[22rem] rounded-full bg-primary/12 blur-[90px]" />
        </motion.div>
        <div className="container relative mx-auto px-6">
          <FadeIn className="text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Trusted by teams building the future</p>
          </FadeIn>
          <motion.div
            style={{ x: stripDrift }}
            className="mt-8 grid grid-cols-3 gap-6 md:grid-cols-6 items-center will-change-transform"
          >
            {["Helix Labs", "Nimbus", "Crestline", "Orio", "Vanta", "Kite"].map((name, i) => (
              <FadeIn key={name} variant="fadeUp" delay={i * 0.045} className="flex justify-center">
                <div className="flex h-11 w-full max-w-[118px] items-center justify-center rounded-lg border border-border/60 bg-card/40 px-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
                  <span className="truncate">{name}</span>
                </div>
              </FadeIn>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <Section className="relative isolate z-[14] bg-background">
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
              <FadeIn
                key={num}
                variant={i % 2 === 0 ? "slideRight" : "slideLeft"}
                delay={i * 0.08}
              >
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
      <Section className="relative isolate z-[14] bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold tracking-tight">Questions, answered.</h2>
          </FadeIn>
          <div className="mt-12 space-y-3">
            {faqs.map(([q, a], i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 0.05}>
                <FaqItem q={q} a={a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <CtaBanner />
        </div>
      </div>
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
