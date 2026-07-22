import type { ReactNode } from "react";

interface  PageHeaderProps {
  title?: string
  description?: ReactNode
}

export function PageHeader({ title = " ", description = " " }: PageHeaderProps) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start mt-2">
      <h2 className=" text-foreground text-xl font-semibold sm:text-xl">{title}</h2>
       <p className=" text-muted-foreground mb-1 text-sm leading-6">{description}</p>
    </div>
  );
}