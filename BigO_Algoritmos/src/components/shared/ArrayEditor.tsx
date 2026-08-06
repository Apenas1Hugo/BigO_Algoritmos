import {  useState } from "react";
import { easeIn, motion, AnimatePresence } from "motion/react";
import { Button } from "./Button";

interface ArrayEditorProps {
  children?: (array: number[]) => React.ReactNode;
}


import { CirclePlus, CircleMinus, Trash } from "lucide-react";

export function ArrayEditor({ children }: ArrayEditorProps) {
  const [array, setArray] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddNumber() {
    if (inputValue.trim() === "") return;

    const number = Number(inputValue);

    if (Number.isNaN(number)) return;

    setArray((previous) => [...previous, number]);
    setInputValue("");
  }

  function handleRemoveLastNumber() {
    setArray((previous) => previous.slice(0, -1));
  }

  function handleClearArray() {
    setArray([]);
  }

  const fadeSlideVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.10, duration: 0.35, ease: easeIn },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 400, damping: 25 },
    },
  };

  return (
    <motion.div
      variants={fadeSlideVariants}
      initial="hidden"
      whileInView="visible"
      className="mt-8 flex w-full flex-col items-center gap-6"
    >
      <div className="flex w-full max-w-4xl justify-center rounded-2xl border border-border bg-card p-4">
        <motion.div className="flex min-h-16 w-full flex-wrap justify-center gap-2">
          <AnimatePresence mode="popLayout">
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
                  exit="exit"
                  className="rounded-lg border border-border bg-background px-4 py-4 font-normal"
                >
                  {number}
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex w-full max-w-md justify-center">
        <input
          type="number"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddNumber();
            }
          }}
          placeholder="Digite um número"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
        />
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          icon={CirclePlus}
          variant="primary"
          onClick={handleAddNumber}
          className="w-full sm:w-auto"
        >
          <span>Adicionar Número na lista</span>
        </Button>

        <Button
          icon={CircleMinus}
          variant="primary"
          onClick={handleRemoveLastNumber}
          className="w-full sm:w-auto"
        >
          <span>Remover último número da lista</span>
        </Button>

        <Button
          icon={Trash}
          variant="primary"
          onClick={handleClearArray}
          className="w-full sm:w-auto"
        >
          <span>Limpar lista</span>
        </Button>
      </div>
      <div>
         {children?.(array)}
      </div>
    </motion.div>
  );
}