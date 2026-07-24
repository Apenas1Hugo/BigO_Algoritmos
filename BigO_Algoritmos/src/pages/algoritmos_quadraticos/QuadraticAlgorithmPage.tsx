import { LandPlot, TreePine } from "lucide-react";
import { Button } from "../../components/shared/Button";
import { Container } from "../../components/shared/Container";
import { PageHeader } from "../../components/shared/PageHeader";

import { useNavigate } from "react-router-dom";

export function QuadraticAlgorithmsPage() {
  const navigate = useNavigate();

  return (
    <Container variant="large">
      <PageHeader
        title="O que são algoritmos quadráticos?"
        description="Algoritmos quadráticos são aqueles cuja complexidade de tempo é, em média ou no pior caso, O(n²). Isso significa que, conforme a quantidade de elementos aumenta, o número de operações cresce aproximadamente de forma quadrática. Para conjuntos pequenos de dados, esse desempenho normalmente não representa um problema. Entretanto, em grandes volumes de informação, algoritmos quadráticos tendem a se tornar significativamente mais lentos quando comparados a algoritmos de complexidade O(n log n), como o Quick Sort e o Merge Sort. Apesar disso, continuam sendo importantes para o aprendizado, pois possuem implementação simples e ajudam a compreender conceitos fundamentais de ordenação."
      />

      <PageHeader
        title="Insertion Sort"
        description={
          <>
            <p>
              O Insertion Sort percorre o vetor da esquerda para a direita,
              mantendo uma parte já ordenada. A cada passo, um novo elemento é
              retirado da parte não ordenada e inserido na posição correta entre
              os elementos que já foram organizados. O funcionamento é
              semelhante à maneira como muitas pessoas organizam cartas de
              baralho nas mãos, inserindo cada nova carta no local adequado.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Melhor caso:</strong> O(n), quando o vetor já está
                ordenado.
              </li>

              <li>
                <strong>Caso médio:</strong> O(n²).
              </li>

              <li>
                <strong>Pior caso:</strong> O(n²), quando os elementos estão em
                ordem inversa.
              </li>
            </ul>

            <p className="mt-4">
              Embora não seja eficiente para grandes conjuntos de dados, o
              Insertion Sort apresenta excelente desempenho para vetores
              pequenos ou quase ordenados, além de possuir implementação simples
              e não exigir memória auxiliar.
            </p>
          </>
        }
      />

      <PageHeader
        title="Selection Sort"
        description={
          <>
            <p>
              O Selection Sort divide o vetor em duas partes: uma já ordenada e
              outra ainda não ordenada. Em cada iteração, o algoritmo procura o
              menor elemento da parte não ordenada e o troca de posição com o
              primeiro elemento dessa região. Esse processo é repetido até que
              todos os elementos estejam ordenados.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Melhor caso:</strong> O(n²).
              </li>

              <li>
                <strong>Caso médio:</strong> O(n²).
              </li>

              <li>
                <strong>Pior caso:</strong> O(n²).
              </li>
            </ul>

            <p className="mt-4">
              O Selection Sort realiza poucas trocas de elementos durante a
              execução, porém continua precisando percorrer praticamente todo o
              vetor para encontrar o menor elemento em cada etapa. Por esse
              motivo, sua complexidade permanece quadrática independentemente da
              ordem inicial dos dados.
            </p>
          </>
        }
      />

      <PageHeader
        title="Bubble Sort"
        description={
          <>
            <p>
              O Bubble Sort percorre repetidamente o vetor comparando elementos
              adjacentes. Sempre que dois elementos estão na ordem incorreta,
              eles trocam de posição. A cada passagem completa pelo vetor, os
              maiores elementos "sobem" para o final da lista, comportamento que
              deu origem ao nome Bubble Sort ("ordenação por bolha"). O processo
              continua até que nenhuma troca seja necessária.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Melhor caso:</strong> O(n), quando o algoritmo utiliza
                uma otimização para detectar que o vetor já está ordenado.
              </li>

              <li>
                <strong>Caso médio:</strong> O(n²).
              </li>

              <li>
                <strong>Pior caso:</strong> O(n²).
              </li>
            </ul>

            <p className="mt-4">
              O Bubble Sort é um dos algoritmos de ordenação mais simples de
              compreender e implementar. Apesar de sua importância didática, seu
              desempenho é inferior ao de outros algoritmos mais eficientes,
              sendo pouco utilizado em aplicações que manipulam grandes volumes
              de dados.
            </p>
          </>
        }
      />

      <div className="mt-10 flex justify-between">
        <Button
          icon={LandPlot}
          onClick={() => void navigate("/dividir-e-conquistar")}
          variant="secondary"
        >
          <span className="hidden lg:inline">← Dividir e Conquistar</span>
        </Button>

        <Button
          icon={TreePine}
          onClick={() => void navigate("/arvore")}
          variant="secondary"
        >
          <span className="hidden lg:inline">Árvore →</span>
        </Button>
      </div>
    </Container>
  );
}