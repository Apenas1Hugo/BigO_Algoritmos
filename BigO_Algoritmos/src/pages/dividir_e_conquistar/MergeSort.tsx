import { ArrayEditor } from "../../components/shared/ArrayEditor";
import { Button } from "../../components/shared/Button";
import { useState } from "react";
import { ViewArray } from "../../components/shared/ViewArray";

function mergeSort(array: number[]): number[] {
  const copia = [...array];

  if (copia.length <= 1) return copia;

  const meio = Math.floor(copia.length / 2);
  const esquerda = copia.slice(0, meio);
  const direita = copia.slice(meio);

  return merge(mergeSort(esquerda), mergeSort(direita));
}

function merge(esquerda: number[], direita: number[]): number[] {
  const resultado: number[] = [];
  let esquerdaIndex = 0;
  let direitaIndex = 0;

  while (esquerdaIndex < esquerda.length && direitaIndex < direita.length) {
    if (esquerda[esquerdaIndex] < direita[direitaIndex]) {
      resultado.push(esquerda[esquerdaIndex]);
      esquerdaIndex++;
    } else {
      resultado.push(direita[direitaIndex]);
      direitaIndex++;
    }
  }

  return resultado
    .concat(esquerda.slice(esquerdaIndex))
    .concat(direita.slice(direitaIndex));
}

export function MergeSortView() {
  const [arrayOrdenado, setarrayOrdenado] = useState<number[] | null>(null);

  function handleExecuteMergeSort(array: number[]) {
    const resultado = mergeSort(array);
    setarrayOrdenado(resultado);
  }

  return (
    <ArrayEditor>
      {(array) => (
        <div className="flex w-full flex-col items-center gap-4">
          <Button
            variant="primary"
            onClick={() => handleExecuteMergeSort(array)}
          >
            Executar MergeSort
          </Button>

          {arrayOrdenado && <ViewArray array={arrayOrdenado} />}
        </div>
      )}
    </ArrayEditor>
  );
}