import { ArrayEditor } from "../../components/shared/ArrayEditor";
import { Button } from "../../components/shared/Button";
import { useState } from "react";
import { ViewArray } from "../../components/shared/ViewArray";

function inserctionSort(array: number[]) {
  const copia = [...array];

  for (let i = 1; i < copia.length; i++) {
    const atual: number = copia[i];
    let j: number = i - 1;

    while (j >= 0 && copia[j] > atual) {
      copia[j + 1] = copia[j];
      j--;
    }
    copia[j + 1] = atual;
  }

  return copia;
}

export function InsertionSortView() {
  const [arrayOrdenado, setarrayOrdenado] = useState<number[] | null>(null);

  function handleExecuteSort(array: number[]) {
    const resultado = inserctionSort(array);
    setarrayOrdenado(resultado);
  }

  return (
    <ArrayEditor>
      {(array) => (
        <div className="flex w-full flex-col items-center gap-4">
          <Button variant="primary" onClick={() => handleExecuteSort(array)}>
            Executar InsertionSort
          </Button>
          {arrayOrdenado && <ViewArray array={arrayOrdenado} />}
        </div>
      )}
    </ArrayEditor>
  );
}
