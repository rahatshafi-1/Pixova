import { r as reactExports, T as jsxRuntimeExports } from "./server-E0KvAQjM.js";
import { p as projects, P as ProjectCard } from "./ProjectCard-DA-fRMnh.js";
import { F as FadeIn, S as SectionLabel, a as Section } from "./Section-B4KusVYJ.js";
import { C as CtaBanner } from "./CtaBanner-DPmpjCMp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-Ck0Q69hq.js";
const filters = ["All", "Web", "App", "Automation"];
const placeholders = [{
  name: "Coming Soon",
  description: "A new project is in the works.",
  category: "App"
}, {
  name: "Coming Soon",
  description: "A new project is in the works.",
  category: "Automation"
}];
function WorkPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-mesh py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Portfolio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tighter", children: [
        "Our ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Work." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg text-muted-foreground", children: "Real projects. Real results." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-12", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `px-5 py-2 rounded-full text-sm font-medium border transition ${filter === f ? "bg-accent text-accent-foreground border-accent shadow-[0_0_20px_-4px_var(--accent)]" : "bg-card border-border text-muted-foreground hover:text-foreground"}`, children: f }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        visible.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p }) }, p.name + i)),
        filter === "All" && placeholders.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: (visible.length + i) * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-dashed border-border bg-card/30 aspect-[16/14] flex flex-col items-center justify-center text-center p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-xl font-semibold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.description })
        ] }) }, "ph" + i))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, { title: "Like what you see? Let's build yours.", cta: "Start a Project" })
  ] });
}
export {
  WorkPage as component
};
