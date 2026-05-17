import { r as reactExports, T as jsxRuntimeExports } from "./server-E0KvAQjM.js";
import { c as createLucideIcon, e as emailjs } from "./router-Ck0Q69hq.js";
import { F as FadeIn, S as SectionLabel, a as Section } from "./Section-B4KusVYJ.js";
import { C as Check } from "./check-a5qy86to.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const CircleAlert = createLucideIcon("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Linkedin = createLucideIcon("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);
const Mail = createLucideIcon("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
const MapPin = createLucideIcon("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
const Send = createLucideIcon("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
const services = ["Website Development", "App Development", "AI Automations", "Service Automations", "Digital Transformation"];
function ContactPage() {
  const formRef = reactExports.useRef(null);
  const [sent, setSent] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const serviceSelect = e.currentTarget.querySelector("select[name='service']");
      const selectedService = serviceSelect?.value || "";
      await emailjs.send(
        "service_m630m89",
        // Replace with your EmailJS Service ID
        "template_1t6fh7j",
        // Template name you created
        {
          name: formData.get("name"),
          user_email: formData.get("email"),
          company: formData.get("company") || "Not provided",
          service: selectedService,
          message: formData.get("message"),
          to_email: ["rahatshafi22@gmail.com", "baaszunnaiyyer@gmail.com", "info@pixova.us"]
          // Your email address
        }
      );
      setSent(true);
      setError("");
      formRef.current?.reset();
      setTimeout(() => setSent(false), 3e3);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("EmailJS Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-mesh py-32 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tighter", children: [
        "Let's build something ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "great." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "!pt-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { ref: formRef, onSubmit: handleSubmit, className: "p-8 md:p-10 rounded-2xl border border-border bg-card space-y-5", children: [
          error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-red-500 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-500", children: error })
          ] }),
          sent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-green-500 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-500", children: "Message sent successfully. We'll be in touch shortly." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company (optional)", name: "company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Service Interested In" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { name: "service", className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s }, s)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, name: "message", required: true, className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition shadow-[0_0_30px_-6px_var(--accent)] disabled:opacity-50 disabled:cursor-not-allowed", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
            " Sent"
          ] }) : loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-spin", children: "⏳" }),
            " Sending..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
            " Send Message"
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-2xl border border-border bg-card space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: Mail, label: "Email", value: "info@pixova.us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/pixova" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: MapPin, label: "Location", value: "Remote, Available Globally" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Next Steps" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-tight", children: "What happens next?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-6", children: [["01", "We review your message"], ["02", "Schedule a discovery call"], ["03", "Start planning your project"]].map(([n, t], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-2xl border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl text-accent/80 font-semibold", children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-lg", children: t })
        ] }) }, n)) })
      ] })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent" })
  ] });
}
function ContactRow({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-accent" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-1", children: value })
    ] })
  ] });
}
export {
  ContactPage as component
};
