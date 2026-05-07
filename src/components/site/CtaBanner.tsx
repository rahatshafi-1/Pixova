import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./Section";

export function CtaBanner({
  title = "Ready to build something? Let's talk.",
  cta = "Get In Touch",
  to = "/contact",
}: {
  title?: string;
  cta?: string;
  to?: string;
}) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20 text-center bg-mesh">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
              {title}
            </h2>
            <Link
              to={to}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition shadow-[0_0_40px_-8px_var(--accent)]"
            >
              {cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
