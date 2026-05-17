import { T as jsxRuntimeExports } from "./server-E0KvAQjM.js";
import { F as FadeIn, S as SectionLabel, a as Section } from "./Section-B4KusVYJ.js";
import { C as CtaBanner } from "./CtaBanner-DPmpjCMp.js";
import { C as Check } from "./check-a5qy86to.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-Ck0Q69hq.js";
const steps = [["01", "Discovery Call", "We learn about your business, goals, and the problems you need solved. No commitment, just a conversation."], ["02", "Scoping & Planning", "We map out the full project — features, timeline, tech stack, and deliverables. You know exactly what to expect."], ["03", "Design & Prototyping", "We build the visual blueprint. You review, give feedback, and approve before a single line of code is written."], ["04", "Development & Integration", "We build your product — clean code, tested features, and seamless integrations. Regular updates keep you in the loop."], ["05", "Launch & Ongoing Support", "We deploy, monitor, and stay available. Your success after launch matters as much as the build itself."]];
function ProcessPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-mesh py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tighter", children: [
        "How Pixova ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Works." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg text-muted-foreground max-w-2xl", children: "From first message to final launch — here's exactly what working with us looks like." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 md:left-8 top-2 bottom-2 w-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: steps.map(([num, title, desc], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 md:gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 md:h-16 md:w-16 rounded-full border border-accent/40 bg-card flex items-center justify-center font-display font-semibold text-accent shadow-[0_0_30px_-8px_var(--accent)]", children: num }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 md:pt-4 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl font-semibold", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: desc })
        ] })
      ] }) }, num)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-mesh", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl font-semibold tracking-tight", children: "Why our clients trust the process." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 space-y-4", children: ["Transparent communication", "Milestone-based delivery", "Post-launch support included"].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-4 p-5 rounded-xl border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item })
      ] }) }, item)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, { title: "Ready to start your project?", cta: "Reach Out to Us" })
  ] });
}
export {
  ProcessPage as component
};
