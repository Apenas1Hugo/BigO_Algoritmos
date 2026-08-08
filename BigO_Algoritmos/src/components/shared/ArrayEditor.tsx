import { useState } from "react";
import { easeIn, motion } from "motion/react";
import { Button } from "./Button";

interface ArrayEditorProps {
  children?: (array: number[]) => React.ReactNode;
}

import { CirclePlus, CircleMinus, Trash } from "lucide-react";
import { ViewArray } from "./ViewArray";

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
      transition: { delay: 0.1, duration: 0.35, ease: easeIn },
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
        <ViewArray array={array} />
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
          variant="secondary"
          onClick={handleAddNumber}
          className="w-full sm:w-auto"
        >
          <span>Adicionar Número na lista</span>
        </Button>

        <Button
          icon={CircleMinus}
          variant="secondary"
          onClick={handleRemoveLastNumber}
          className="w-full sm:w-auto"
        >
          <span>Remover último número da lista</span>
        </Button>

        <Button
          icon={Trash}
          variant="secondary"
          onClick={handleClearArray}
          className="w-full sm:w-auto"
        >
          <span>Limpar lista</span>
        </Button>
      </div>
      <div>{children?.(array)}</div>
    </motion.div>
  );
}
