import {  motion } from "motion/react";

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  },
};
export function ViewArray({ array }: { array: number[] }) {
  return (
    <motion.div className="flex min-h-16 w-full flex-wrap justify-center gap-2">
     
        {array.length === 0 ? (
          <span className="text-sm text-muted-foreground mt-5">
            A lista está vazia.
          </span>
        ) : (
          array.map((number, index) => (
            <motion.div
              key={`${number}-${index}`}
              layout
              variants={numberVariants}
              initial="hidden"
              animate="visible"
              className="rounded-lg border border-border bg-background px-4 py-4 font-normal"
            >
              {number}
            </motion.div>
          ))
        )}
    </motion.div>
  );
}