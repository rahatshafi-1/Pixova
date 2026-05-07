import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send, Check } from "lucide-react";
import { Section, FadeIn, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pixova" },
      { name: "description", content: "Let's build something great together." },
      { property: "og:title", content: "Contact — Pixova" },
      { property: "og:description", content: "Let's build something great together." },
    ],
  }),
  component: ContactPage,
});

const services = ["Website Development", "App Development", "AI Automations", "Service Automations", "Digital Transformation"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-mesh py-32 md:py-40">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold tracking-tighter">Let's build something <span className="text-gradient">great.</span></h1>
          </FadeIn>
        </div>
      </section>

      <Section className="!pt-0">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">
          <FadeIn className="lg:col-span-2">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="p-8 md:p-10 rounded-2xl border border-border bg-card space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Company (optional)" name="company" />
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Service Interested In</label>
                <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent">
                  {services.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                <textarea rows={5} required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition shadow-[0_0_30px_-6px_var(--accent)]">
                {sent ? <><Check className="h-4 w-4" /> Sent</> : <><Send className="h-4 w-4" /> Send Message</>}
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="p-8 rounded-2xl border border-border bg-card space-y-6">
              <ContactRow icon={Mail} label="Email" value="hello@pixova.co" />
              <ContactRow icon={Linkedin} label="LinkedIn" value="linkedin.com/company/pixova" />
              <ContactRow icon={Github} label="GitHub" value="github.com/pixova" />
              <ContactRow icon={MapPin} label="Location" value="Karachi, Pakistan" />
            </div>
          </FadeIn>
        </div>

        <div className="container mx-auto px-6 mt-20">
          <FadeIn>
            <SectionLabel>Next Steps</SectionLabel>
            <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-tight">What happens next?</h2>
          </FadeIn>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[["01", "We review your message"], ["02", "Schedule a discovery call"], ["03", "Start planning your project"]].map(([n, t], i) => (
              <FadeIn key={n} delay={i * 0.07}>
                <div className="p-8 rounded-2xl border border-border bg-card">
                  <div className="font-display text-4xl text-accent/80 font-semibold">{n}</div>
                  <p className="mt-4 font-display text-lg">{t}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        name={name} type={type} required={required}
        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm mt-1">{value}</div>
      </div>
    </div>
  );
}
