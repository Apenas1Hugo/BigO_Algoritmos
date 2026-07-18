import type { PropsWithChildren } from "react";
import type { HTMLAttributes } from "react";

interface ContainerProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  variant?: "large" | "medium" | "small";
};

const variantsClass = {
    large: " ",
    medium: " ",
    small: " ",
};

const baseClass = " ";

export function Container({variant = "small",children, className}: ContainerProps) {
  return <div className={[variantsClass[variant],baseClass,className].join(" ")}>
    {children}
    </div>;
}