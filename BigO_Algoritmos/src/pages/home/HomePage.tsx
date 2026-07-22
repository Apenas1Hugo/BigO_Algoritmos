import { Container } from "../../components/shared/Container";
import { PageHeader } from "../../components/shared/PageHeader";

import { useNavigate } from "react-router-dom";
import { Button } from "../../components/shared/Button";
import { LandPlot } from "lucide-react";

import tabela_bigo from "../../assets/tabela_bigo.png";

export function HomePage() {
  const navigate = useNavigate();
  return (
    <Container variant="large">
      <PageHeader
        title="Big O"
        description="A notação Big O é uma forma de descrever a eficiência de um algoritmo. Em vez de medir o tempo exato de execução em segundos, ela analisa como o desempenho do algoritmo cresce conforme a quantidade de dados de entrada aumenta. Essa abordagem permite comparar diferentes soluções de maneira independente do computador ou da linguagem de programação utilizada, tornando possível identificar qual algoritmo tende a apresentar melhor desempenho em cenários com grandes volumes de dados."
      />

      <PageHeader
        title="Por que aprender Big O?"
        description="Compreender a notação Big O é fundamental para o desenvolvimento de software de qualidade. Em aplicações pequenas, diferentes algoritmos podem apresentar tempos de execução muito semelhantes. Entretanto, conforme a quantidade de dados aumenta, pequenas diferenças na complexidade podem resultar em ganhos ou perdas significativas de desempenho. Conhecer a complexidade de um algoritmo ajuda a escolher a solução mais adequada para cada problema, reduzindo o consumo de tempo de processamento e de recursos computacionais."
      />
      <Container variant="small">
        <img
          src={tabela_bigo}
          alt="Tabela de complexidade Big O"
          className="mx-auto m-10 w-full max-w-3xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        />
      </Container>

      <PageHeader
        title="Como interpretar a tabela de complexidade?"
        description="A tabela de complexidade apresenta as principais ordens de crescimento utilizadas na análise de algoritmos. Complexidades como O(1), O(log n) e O(n) representam algoritmos que costumam escalar bem para grandes conjuntos de dados. Já algoritmos com complexidade O(n²), O(2ⁿ) ou O(n!) tendem a apresentar um crescimento muito mais acelerado do tempo de execução, tornando-se pouco eficientes quando o tamanho da entrada aumenta significativamente."
      />

      <PageHeader
        title="Pior, melhor e caso médio"
        description="Ao estudar algoritmos, é comum utilizar a notação Big O para analisar o pior caso de execução, pois ela representa o cenário em que o algoritmo realiza a maior quantidade de operações. Essa abordagem é bastante útil para garantir que o desempenho continuará aceitável mesmo nas situações mais desfavoráveis. Entretanto, também existem o melhor caso, que representa a situação mais favorável para o algoritmo, e o caso médio, que descreve o comportamento esperado considerando entradas comuns. Ao longo deste site, a análise será focada principalmente no pior caso, por ser a forma mais utilizada para comparar algoritmos e a abordagem adotada na maior parte do livro Entendendo Algoritmos."
      />

      <PageHeader
        title="O que você encontrará neste site?"
        description="Este projeto foi desenvolvido com o objetivo de reunir conteúdos sobre análise de complexidade e algoritmos de ordenação em um único lugar. Inicialmente serão abordados os algoritmos Quick Sort, Merge Sort, Bubble Sort, Selection Sort, Insertion Sort e Heap Sort. Cada página apresentará uma explicação sobre o funcionamento do algoritmo, sua análise de complexidade de tempo e espaço, vantagens, desvantagens e exemplos que auxiliem na compreensão de seu comportamento."
      />

      <PageHeader
        title="Objetivo do projeto"
        description="O conteúdo foi pensado para estudantes e desenvolvedores que desejam compreender melhor os fundamentos da análise de algoritmos. O objetivo é apresentar os conceitos de forma clara e organizada, utilizando exemplos práticos e explicações acessíveis para facilitar o aprendizado e servir como material de consulta sempre que necessário."
      />
      <div className="mt-10 flex justify-end">
        <Button
          icon={LandPlot}
          onClick={() => void navigate("/dividir-e-conquistar")}
          variant="secondary"
        >
          <span className="hidden lg:inline"> Dividir e Conquistar → </span>
        </Button>
      </div>
    </Container>
  );
}
