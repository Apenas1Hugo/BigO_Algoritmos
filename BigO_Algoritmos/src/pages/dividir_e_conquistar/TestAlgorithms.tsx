import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

interface AlgorithmTab {
  id: string;
  title: string;
  content: React.ReactNode;
}

const ALGORITHM_TABS: readonly AlgorithmTab[] = [
  {
    id: "quick-sort",
    title: "Quick Sort",
    content: (
      <p>
        Área reservada para a visualização e execução do algoritmo Quick Sort.
      </p>
    ),
  },
  {
    id: "merge-sort",
    title: "Merge Sort",
    content: (
      <p>
        Área reservada para a visualização e execução do algoritmo Merge Sort.
      </p>
    ),
  },
];

export function TestAlgorithms() {
  const [activeTab, setActiveTab] = useState(ALGORITHM_TABS[0].id);

  const currentTab = useMemo(
    () => ALGORITHM_TABS.find((tab) => tab.id === activeTab)!,
    [activeTab],
  );

  return (
    <section className="w-full rounded-2xl border border-border bg-card p-6 shadow-sm mt-10">
      <nav className="mb-6 overflow-x-auto">
        <div className="relative flex w-max min-w-full gap-2 justify-center">
          {ALGORITHM_TABS.map((tab) => {
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
          className="rounded-xl border border-border bg-background p-6"
        >
          {currentTab.content}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}