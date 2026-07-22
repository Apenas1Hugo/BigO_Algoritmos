import { Box, House } from "lucide-react";
import { Button } from "../../components/shared/Button";
import { Container } from "../../components/shared/Container";
import { PageHeader } from "../../components/shared/PageHeader";

import { useNavigate } from "react-router-dom";

export function DivideConquerPage() {
  const navigate = useNavigate();
  return (
    <Container variant="large">
      <PageHeader
        title="O que é a técnica Dividir e Conquistar?"
        description="Dividir e conquistar é uma estratégia utilizada para resolver problemas complexos transformando-os em problemas menores e mais simples. Em vez de tentar solucionar toda a tarefa de uma única vez, o algoritmo divide o problema original em várias partes menores, resolve cada uma delas individualmente e, por fim, combina os resultados para produzir a solução final. Essa abordagem torna muitos algoritmos mais eficientes e organizados, sendo amplamente utilizada em ordenação, busca e diversas outras áreas da computação. O Quick Sort e o Merge Sort são dois dos exemplos mais conhecidos dessa técnica, pois ambos dividem repetidamente o conjunto de dados até que o problema se torne simples o suficiente para ser resolvido."
      />

      <PageHeader
        title="Quick Sort"
        description={
          <>
            <p>
              O Quick Sort é um algoritmo de ordenação baseado na técnica de
              dividir e conquistar. Seu funcionamento começa escolhendo um
              elemento chamado pivô. Em seguida, todos os elementos menores que
              o pivô são posicionados à sua esquerda, enquanto os maiores são
              colocados à direita. Após essa etapa, o mesmo procedimento é
              aplicado recursivamente às duas partições até que todos os
              elementos estejam ordenados.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Melhor caso:</strong> O(n log n), quando as partições
                ficam bem equilibradas.
              </li>

              <li>
                <strong>Caso médio:</strong> O(n log n), sendo o comportamento
                esperado para entradas aleatórias.
              </li>

              <li>
                <strong>Pior caso:</strong> O(n²), quando o pivô gera partições
                muito desequilibradas, como pode ocorrer em um vetor já ordenado
                dependendo da estratégia de escolha do pivô.
              </li>
            </ul>
          </>
        }
      />

      <PageHeader
        title="Merge Sort"
        description={
          <>
            <p>
              O Merge Sort também utiliza a estratégia de dividir e conquistar.
              O algoritmo divide repetidamente o vetor em duas metades até que
              cada divisão contenha apenas um único elemento. Em seguida, inicia
              a etapa de intercalação (<em>merge</em>), reunindo as partes em
              ordem crescente até reconstruir completamente o vetor ordenado.
              Diferentemente do Quick Sort, o Merge Sort mantém um desempenho
              consistente independentemente da ordem inicial dos dados,
              tornando-se uma excelente escolha quando se deseja
              previsibilidade. Como desvantagem, ele necessita de memória
              auxiliar para realizar a intercalação dos elementos.
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
              Essa característica faz do Merge Sort um dos algoritmos de
              ordenação mais estáveis em termos de desempenho, pois sua
              complexidade permanece a mesma independentemente da disposição
              inicial dos elementos. Em contrapartida, ele utiliza memória
              auxiliar durante o processo de intercalação, diferentemente do
              Quick Sort, que normalmente realiza a ordenação no próprio vetor.
            </p>
          </>
        }
      />
      <div className="mt-10 flex justify-between">
        <Button
          icon={House}
          onClick={() => void navigate("/")}
          variant="secondary"
        >
          <span className="hidden lg:inline"> ← Home </span>
        </Button>
        <Button
          icon={Box}
          onClick={() => void navigate("/algoritmos-quadraticos")}
          variant="secondary"
        >
          <span className="hidden lg:inline"> Algoritmos Quadraticos → </span>
        </Button>
      </div>
    </Container>
  );
}