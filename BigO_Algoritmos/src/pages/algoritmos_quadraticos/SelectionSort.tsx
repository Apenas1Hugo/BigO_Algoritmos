import { ArrayEditor } from "../../components/shared/ArrayEditor";
import { Button } from "../../components/shared/Button";
import { useState } from "react";
import { ViewArray } from "../../components/shared/ViewArray";

function SelectionSort(array: number[]) {
  const copia: number[] = [...array];
  for (let i = 0; i < copia.length - 1; i++) {
    let menorIndex = i;

    for (let j = i + 1; j < copia.length; j++) {
      if (copia[j] < copia[menorIndex]) {
        menorIndex = j;
      }
    }
    const aux = copia[i];
    copia[i] = copia[menorIndex];
    copia[menorIndex] = aux;
  }

  return copia;
}

export function SelectionSortView() {
  const [arrayOrdenado, setarrayOrdenado] = useState<number[] | null>(null);

  function handleExecuteSelectionSort(array: number[]) {
    const resultado = SelectionSort(array);
    setarrayOrdenado(resultado);
  }

  return (
    <ArrayEditor>
      {(array) => (
        <div className="flex w-full flex-col items-center gap-4">
          <Button
            variant="primary"
            onClick={() => handleExecuteSelectionSort(array)}
          >
            Executar SelectionSort
          </Button>
          {arrayOrdenado && <ViewArray array={arrayOrdenado} />}
        </div>
      )}
    </ArrayEditor>
  );
}
