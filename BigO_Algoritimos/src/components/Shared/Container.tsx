import type { PropsWithChildren } from "react";
import type { HTMLAttributes } from "react";

interface ContainerProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  variant?: "large" | "medium" | "small";
};

const variantsClass = {
    large: "w-full max-w-7xl mx-auto px-6 py-10",
    medium: "w-full rounded-2xl border border-border bg-card p-6 shadow-sm",
    small: "transition-all",
};

const baseClass = " ";

export function Container({variant = "small",children, className}: ContainerProps) {
  return <div className={[variantsClass[variant],baseClass,className].join(" ")}>
    {children}
    </div>;
}