import { T as jsxRuntimeExports } from "./server-E0KvAQjM.js";
import { c as createLucideIcon, L as Link } from "./router-Ck0Q69hq.js";
import { F as FadeIn } from "./Section-B4KusVYJ.js";
const ArrowRight = createLucideIcon("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
function CtaBanner({
  title = "Ready to build something? Let's talk.",
  cta = "Get In Touch",
  to = "/contact"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20 text-center bg-mesh", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to,
        className: "mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition shadow-[0_0_40px_-8px_var(--accent)]",
        children: [
          cta,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ]
      }
    )
  ] }) }) }) });
}
export {
  ArrowRight as A,
  CtaBanner as C
};
