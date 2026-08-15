import { motion } from "motion/react";
import type { PropsWithChildren } from "react";
import type { HTMLAttributes } from "react";

interface ContainerProps
  extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  variant?: "large" | "medium" | "small";
}

const variantsClass = {
  large: "w-full max-w-7xl mx-auto px-6 py-10",
  medium: "w-full rounded-2xl border border-border bg-card p-6 shadow-sm",
  small: "transition-all",
};

export function Container({
  variant = "small",
  children,
  className,
}: ContainerProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={[variantsClass[variant], className].join(" ")}
    >
      {children}
    </motion.div>
  );
}
