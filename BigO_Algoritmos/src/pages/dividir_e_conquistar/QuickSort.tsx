import { ArrayEditor } from "../../components/shared/ArrayEditor";
import { Button } from "../../components/shared/Button";
import { useState } from "react";
import { ViewArray } from "../../components/shared/ViewArray";

function quickSort(array: number[]): number[] {
  const copia = [...array];

  if (copia.length <= 1) return copia;

  const [pivot, ...resto] = copia;

  const menores = resto.filter((numero) => numero <= pivot);
  const maiores = resto.filter((numero) => numero > pivot);

  return [...quickSort(menores), pivot, ...quickSort(maiores)];
}

export function QuickSortView() {
  const [arrayOrdenado, setArrayOrdenado] = useState<number[] | null>(null);

  function handleExecuteQuickSort(array: number[]) {
    const resultado = quickSort(array);
    setArrayOrdenado(resultado);
  }
  return (
    <ArrayEditor>
      {(array) => (
        <div className="flex w-full flex-col items-center gap-4">
          <Button
            variant="primary"
            onClick={() => handleExecuteQuickSort(array)}
          >
            Executar QuickSort
          </Button>

          {arrayOrdenado && <ViewArray array={arrayOrdenado} />}
        </div>
      )}
    </ArrayEditor>
  );
}