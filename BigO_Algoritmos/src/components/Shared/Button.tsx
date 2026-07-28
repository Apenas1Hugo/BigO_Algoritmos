import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

import { motion } from "motion/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  icon?: LucideIcon;
}

const baseClasses =
  "flex cursor-pointer items-center justify-center font-medium text-sm gap-2 px-4 py-3 transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-80";

const variantClasses = {
  primary: "bg-primary text-primary-foreground font-semibold rounded-xl",
  secondary: "bg-secondary-button border border-border rounded-3xl",
  ghost: "rounded-lg text-foreground",
};

export function Button({
  variant = "primary",
  icon: Icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
      }}
    >
      <button
        {...props}
        className={[baseClasses, variantClasses[variant], className].join(" ")}
      >
        {Icon && <Icon size={20} />}
        {children}
      </button>
    </motion.div>
  );
}
