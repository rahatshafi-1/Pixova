import { T as jsxRuntimeExports } from "./server-E0KvAQjM.js";
import { c as createLucideIcon } from "./router-Ck0Q69hq.js";
const ArrowUpRight = createLucideIcon("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
const summit1 = "/assets/project-summit-1-C3Y6ZWcG.png";
const summit2 = "/assets/project-summit-2-CRvoC8eE.png";
const harvest = "/assets/project-american-harvest-CBB-suQS.png";
const urban = "/assets/project-urban-uAydtD0j.png";
const projects = [
  {
    name: "Summit Home Spark",
    description: "Premium home services landing page with a bold, conversion-focused hero.",
    image: summit1,
    url: "https://summit-home-spark.vercel.app/",
    tags: ["Web Development", "Real Estate", "Landing Page"],
    category: "Web"
  },
  {
    name: "Summit Home Spark — Interior",
    description: "Refined interior pages with rich typography and editorial layout.",
    image: summit2,
    url: "https://summit-home-spark.vercel.app/",
    tags: ["Web Development", "UI Design", "Real Estate"],
    category: "Web"
  },
  {
    name: "American Harvest",
    description: "B2B restaurant supply site with cinematic visuals and clear CTAs.",
    image: harvest,
    url: "https://americanharvest.vercel.app/",
    tags: ["Web Development", "Agriculture", "Business Website"],
    category: "Web"
  },
  {
    name: "Urban Real Estate",
    description: "Modern real-estate platform with refined search and listings UX.",
    image: urban,
    url: "https://real-state-urban.vercel.app/",
    tags: ["Web Development", "Real Estate", "Modern UI"],
    category: "Web"
  }
];
function ProjectCard({ project }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group glow-hover rounded-2xl overflow-hidden border border-border bg-card flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: project.image,
        alt: project.name,
        className: "w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: project.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: project.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: project.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border", children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: project.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all",
          children: [
            "View Project ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] });
}
export {
  ProjectCard as P,
  projects as p
};
