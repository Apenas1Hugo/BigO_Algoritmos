import { motion } from "motion/react";
import type { ReactNode } from "react";

interface PageHeaderProps {
  title?: string;
  description?: ReactNode;
}

export function PageHeader({
  title = " ",
  description = " ",
}: PageHeaderProps) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start mt-2">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
        className=" text-foreground text-xl font-semibold sm:text-xl"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.35,
          ease: "easeOut",
        }}
        className=" text-muted-foreground mb-1 text-sm leading-6"
      >
        {description}
      </motion.div>
    </div>
  );
}
