import { LandPlot } from "lucide-react";
import { Button } from "../../components/shared/Button";
import { Container } from "../../components/shared/Container";
import { PageHeader } from "../../components/shared/PageHeader";

import {
  TestAlgorithms,
  type AlgorithmTab,
} from "../../components/shared/TestAlgorithms";

import { useNavigate } from "react-router-dom";
import { ExempleHeapSort } from "./ExempleHeapSort";
import { HeapSortView } from "./HeapSort";

const algoritmostestados: AlgorithmTab[] = [
  {
    id: "Heap Sort",
    title: " Heap Sort",
    content: <HeapSortView />,
  },
];

export function TreePage() {
  const navigate = useNavigate();

  return (
    <Container variant="large">
      <PageHeader
        title="O que são árvores?"
        description="Árvores são estruturas de dados hierárquicas utilizadas para representar informações organizadas em diferentes níveis. Diferentemente de um vetor, em que os elementos estão dispostos de forma linear, uma árvore estabelece relações entre um elemento principal, chamado de raiz, e seus descendentes, formando uma estrutura semelhante a uma árvore genealógica. Essa organização torna operações como busca, inserção e remoção mais eficientes em diversas aplicações da computação, sendo amplamente utilizada em bancos de dados, sistemas de arquivos, compiladores e mecanismos de busca."
      />

      <PageHeader
        title="Árvore Binária e Heap"
        description={
          <>
            <p>
              Uma árvore binária é um tipo de árvore em que cada nó pode
              possuir, no máximo, dois filhos: um à esquerda e outro à direita.
              Entre os diferentes tipos de árvores binárias destaca-se a Heap,
              estrutura utilizada pelo Heap Sort.
            </p>

            <p className="mt-4">Existem dois tipos principais de Heap:</p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Max Heap:</strong> cada nó possui valor maior ou igual
                ao de seus filhos. Dessa forma, o maior elemento sempre está na
                raiz.
              </li>

              <li>
                <strong>Min Heap:</strong> cada nó possui valor menor ou igual
                ao de seus filhos. Assim, o menor elemento permanece na raiz.
              </li>
            </ul>

            <p className="mt-4">
              O Heap Sort utiliza normalmente uma Max Heap para ordenar os
              elementos em ordem crescente. A principal vantagem dessa estrutura
              é permitir localizar rapidamente o maior elemento do conjunto,
              tornando a ordenação bastante eficiente.
            </p>
          </>
        }
      />

      <PageHeader
        title="Heap Sort"
        description={
          <>
            <p>
              O Heap Sort é um algoritmo de ordenação baseado na estrutura de
              dados Heap. Inicialmente, todos os elementos do vetor são
              organizados em uma Max Heap. Como o maior elemento fica na raiz,
              ele pode ser trocado com o último elemento do vetor. Após essa
              troca, o tamanho da Heap é reduzido e sua propriedade é
              restaurada. Esse processo é repetido até que todos os elementos
              estejam ordenados.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Melhor caso:</strong> O(n log n).
              </li>

              <li>
                <strong>Caso médio:</strong> O(n log n).
              </li>

              <li>
                <strong>Pior caso:</strong> O(n log n).
              </li>
            </ul>

            <p className="mt-4">
              Diferentemente do Quick Sort, o Heap Sort mantém a mesma
              complexidade em qualquer cenário, oferecendo desempenho
              previsível. Além disso, realiza a ordenação no próprio vetor,
              dispensando memória auxiliar significativa.
            </p>
            <ExempleHeapSort />
          </>
        }
      />

      <PageHeader
        title="Teste os algoritmos"
        description="Monte uma lista de números e experimente diferentes algoritmos de ordenação para entender como eles funcionam na prática."
      />
      <TestAlgorithms tabalgorithms={algoritmostestados} />

      <div className="mt-10 flex justify-start">
        <Button
          icon={LandPlot}
          onClick={() => {
            void navigate("/algoritmos-quadraticos");
            setTimeout(() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }, 90);
          }}
          variant="secondary"
        >
          <span className="hidden lg:inline">← Algoritmos Quadráticos</span>
        </Button>
      </div>
    </Container>
  );
}
