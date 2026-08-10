import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

export interface AlgorithmTab {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AlgorithmTabProps {
  tabalgorithms: AlgorithmTab[];
}

export function TestAlgorithms({ tabalgorithms }: AlgorithmTabProps) {
  const [activeTab, setActiveTab] = useState(tabalgorithms[0].id);

  const currentTab = useMemo(
    () => tabalgorithms.find((tab) => tab.id === activeTab)!,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeTab],
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: [1, 0.85, 1] }}
      transition={{ delay: 0.35, duration: 1, ease: "easeInOut"}}
    >
      <section className="w-full rounded-2xl border border-border bg-card p-6 shadow-2xl mt-10 ">
        <nav className="mb-6 overflow-x-auto">
          <div className="relative flex w-max min-w-full gap-2 justify-center">
            {tabalgorithms.map((tab) => {
              const isActive = tab.id === activeTab;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 rounded-lg bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{tab.title}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -16,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="rounded-xl border border-border bg-background p-6 shadow-md"
          >
            {currentTab.content}
          </motion.div>
        </AnimatePresence>
      </section>
    </motion.div>
  );
}