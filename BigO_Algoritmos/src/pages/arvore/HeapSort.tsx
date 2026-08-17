import { ArrayEditor } from "../../components/shared/ArrayEditor";
import { Button } from "../../components/shared/Button";
import { useState } from "react";
import { ViewArray } from "../../components/shared/ViewArray";
import { ViewTree } from "./ViewTree";

function heapSort(array: number[]) {
  const copia = [...array];

  const tamanho = copia.length;

  for (let i = Math.floor(tamanho / 2) - 1; i >= 0; i--) {
    heapify(copia, tamanho, i);
  }
  for (let i = tamanho - 1; i > 0; i--) {
    swap(copia, 0, i);

    heapify(copia, i, 0);
  }

  return copia;
}

function heapify(array: number[], size: number, i: number): void {
  let maior = i;
  const esquerda = 2 * i + 1;
  const direita = 2 * i + 2;

  if (esquerda < size && array[esquerda] > array[maior]) {
    maior = esquerda;
  }

  if (direita < size && array[direita] > array[maior]) {
    maior = direita;
  }

  if (maior !== i) {
    swap(array, i, maior);
    heapify(array, size, maior);
  }
}

function swap(array: number[], indexA: number, indexB: number): void {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

export function HeapSortView() {
  const [arrayOrdenado, setarrayOrdenado] = useState<number[] | null>(null);

  function handleExecuteHeapSort(array: number[]) {
    const resultado = heapSort(array);
    setarrayOrdenado(resultado);
  }

  return (
    <ArrayEditor>
      {(array) => (
        <div className="flex w-full flex-col items-center gap-3">
          <Button
            className="mb-5"
            variant="primary"
            onClick={() => handleExecuteHeapSort(array)}
          >
            Executar Heap Sort
          </Button>
          {arrayOrdenado && (
            <>
              <ViewArray array={arrayOrdenado} />
              <p className="mt-5">Em árvore:</p>
              <ViewTree array={arrayOrdenado} />
            </>
          )}
        </div>
      )}
    </ArrayEditor>
  );
}
