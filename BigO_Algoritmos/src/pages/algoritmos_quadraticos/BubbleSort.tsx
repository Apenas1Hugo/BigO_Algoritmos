import { ArrayEditor } from "../../components/shared/ArrayEditor";
import { Button } from "../../components/shared/Button";
import { useState } from "react";
import { ViewArray } from "../../components/shared/ViewArray";

function bubbleSort(array: number[]) {
  const copia = [...array];

  for (let i = 0; i < copia.length; i++) {
    for (let j = 0; j < copia.length; j++) {
      if (copia[j] > copia[j + 1]) {
        [copia[j], copia[j + 1]] = [copia[j + 1], copia[j]];
      }
    }
  }

  return copia;
}

export function BubbleSortView() {
  const [arrayOrdenado, setArrayOrdenado] = useState<number[] | null>(null);

  function handleExecuteBubbleSort(array: number[]) {
    const resultado = bubbleSort(array);
    setArrayOrdenado(resultado);
  }

  return (
    <ArrayEditor>
      {(array) => (
        <div className="flex w-full flex-col items-center gap-4">
          <Button
            variant="primary"
            onClick={() => handleExecuteBubbleSort(array)}
          >
            Executar BubbleSort
          </Button>
          {arrayOrdenado && <ViewArray array={arrayOrdenado} />}
        </div>
      )}
    </ArrayEditor>
  );
}
