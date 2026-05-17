import { T as jsxRuntimeExports } from "./server-E0KvAQjM.js";
import { F as FadeIn, S as SectionLabel, a as Section } from "./Section-B4KusVYJ.js";
import { C as CtaBanner } from "./CtaBanner-DPmpjCMp.js";
import { C as Code, S as Smartphone, a as Sparkles, W as Workflow, R as Rocket } from "./workflow-Ec-YZLRl.js";
import { C as Check } from "./check-a5qy86to.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-Ck0Q69hq.js";
const services = [{
  icon: Code,
  title: "Website Development",
  desc: "Custom, fast, conversion-focused websites — built on modern stacks and shipped quickly.",
  bullets: ["Custom design system", "Lightning-fast performance", "SEO-ready architecture", "CMS integration", "Analytics & conversion tracking"]
}, {
  icon: Smartphone,
  title: "App Development",
  desc: "Native iOS, Android, and cross-platform apps designed for retention and scale.",
  bullets: ["iOS & Android native", "React Native cross-platform", "Backend & API integration", "Push notifications", "App Store launch support"]
}, {
  icon: Sparkles,
  title: "AI Automations",
  desc: "Intelligent workflows powered by LLMs that save time and unlock new capabilities.",
  bullets: ["Custom AI agents", "Document & email automation", "Lead qualification", "Smart customer support", "Data extraction & analysis"]
}, {
  icon: Workflow,
  title: "Service Automations",
  desc: "Automate repetitive ops, CRMs, and pipelines so your team focuses on what matters.",
  bullets: ["CRM integration", "Workflow automation", "Slack & email triggers", "Reporting dashboards", "Tool consolidation"]
}, {
  icon: Rocket,
  title: "Digital Transformation",
  desc: "End-to-end tech strategy for small businesses ready to scale and modernize.",
  bullets: ["Tech stack audit", "Process digitization", "Cloud migration", "Team training", "Ongoing strategy support"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-mesh py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tighter", children: [
        "Services built for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "growth." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg text-muted-foreground max-w-2xl", children: "Five focused services. Endless ways to help your business grow, automate, and scale." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 space-y-32", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid md:grid-cols-2 gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-3xl border border-border bg-card bg-mesh flex items-center justify-center glow-hover", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-32 w-32 text-accent", strokeWidth: 1.2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionLabel, { children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: s.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-accent shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: b })
        ] }, b)) })
      ] })
    ] }) }, s.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, { title: "Not sure which service is right for you? Let's figure it out together.", cta: "Talk to Us" })
  ] });
}
export {
  ServicesPage as component
};
