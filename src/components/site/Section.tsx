import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const fadeVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 56 },
    show: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -56 },
    show: { opacity: 1, x: 0 },
  },
} as const;

export type FadeVariant = keyof typeof fadeVariants;

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  variant = "fadeUp",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: FadeVariant;
}) {
  const preset = fadeVariants[variant];

  return (
    <motion.div
      initial={preset.hidden}
      whileInView={preset.show}
      viewport={{ once: true, margin: "-72px 0px -72px 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Apple-style zigzag reveals: alternating entry direction + staged timing. */
export function ShowcaseRowReveal({
  viewportNarrow,
  orderIndex,
  side,
  staggerSec,
  className,
  children,
}: {
  viewportNarrow: boolean;
  orderIndex: number;
  side: "left" | "right";
  staggerSec?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduceMotion = Boolean(useReducedMotion());

  const slideX = reduceMotion
    ? side === "left"
      ? -14
      : 14
    : viewportNarrow
      ? side === "left"
        ? -48
        : 48
      : side === "left"
        ? -94
        : 94;

  const duration = reduceMotion ? 0.38 : viewportNarrow ? 0.6 : 0.82;
  const stagger = staggerSec ?? (viewportNarrow ? 0.2 : 0.3);
  /** Positive bottom rootMargin: rows trigger slightly before fully past the fold (syncs better with orbit). */
  const rootMarginBottom = reduceMotion ? "0px" : viewportNarrow ? "120px" : "200px";

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: slideX, y: viewportNarrow ? 10 : 18 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{
        once: true,
        amount: viewportNarrow ? 0.12 : 0.22,
        margin: reduceMotion ? "0px" : `0px 0px ${rootMarginBottom} 0px`,
      }}
      transition={{
        duration,
        delay: reduceMotion ? 0 : orderIndex * stagger,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs uppercase tracking-widest text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
      {children}
    </div>
  );
}
