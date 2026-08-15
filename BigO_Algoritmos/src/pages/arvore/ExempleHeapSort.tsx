import { motion, type Variants } from "motion/react";

import { Container } from "../../components/shared/Container";
import { ViewArray } from "../../components/shared/ViewArray";
import { ViewTree } from "./ViewTree";
import { PageHeader } from "../../components/shared/PageHeader";

const exampleArray = [4, 10, 3, 5, 1];

const heapMaximo = [10, 5, 3, 4, 1];

const posSwap1 = [1, 5, 3, 4];
const ordenado1 = [10];

const heapifyApos1 = [5, 4, 3, 1];

const posSwap2 = [1, 4, 3];
const ordenado2 = [5, 10];

const heapifyApos2 = [4, 1, 3];

const posSwap3 = [3, 1];
const ordenado3 = [4, 5, 10];

const posSwapFinal = [1, 3];

const arrayOrdenado = [1, 3, 4, 5, 10];

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

function Step({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex w-full flex-col items-center gap-4 "
    >
      {children}
    </motion.div>
  );
}

export function ExempleHeapSort() {
  return (
    <Container
      variant="small"
      className="mx-auto my-6 flex w-full max-w-3xl flex-col items-center gap-6 rounded-lg border border-border p-4 shadow-lg sm:p-5"
    >
      <Step>
        <PageHeader
          title="Observação"
          description="Para fins didáticos, o exemplo do Heap Sort demonstrará tanto o array no formato normal como em formato de árvore."
        />
      </Step>

      <Step>
        <p className="text-center text-sm">Primeiro temos o array completo:</p>

        <ViewArray array={exampleArray} />
        <p>Em árvore:</p>
        <ViewTree array={exampleArray} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          O Heap Sort primeiro constrói um{" "}
          <span className="font-medium">heap máximo</span>: cada elemento pai é
          sempre maior que seus filhos, considerando o array como uma árvore
          binária completa:
        </p>
        <ViewArray array={heapMaximo} />
        <p>Em árvore:</p>
        <ViewTree array={heapMaximo} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          A raiz do heap (o maior elemento) é trocada com o último elemento.
          Esse último elemento sai do heap e passa a fazer parte da região já
          ordenada:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Heap restante</p>

            <ViewArray array={posSwap1} />
            <p className="text-sm font-medium">Ordenado</p>
            <ViewArray array={ordenado1} />

            <p className="text-sm font-medium mt-6">Em árvore:</p>
            <ViewTree array={posSwap1} />
            <p className="text-sm font-medium">Em árvore</p>
            <ViewTree array={ordenado1} />
          </div>
        </div>
      </Step>

      <Step>
        <p className="text-center text-sm">
          Fazemos o <span className="font-medium">heapify</span> no heap
          restante para restaurar a propriedade de heap máximo:
        </p>

        <ViewArray array={heapifyApos1} />
        <p>Em árvore:</p>
        <ViewTree array={heapifyApos1} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          Repetimos o processo: trocamos a raiz com o último elemento do heap e
          fazemos o heapify novamente. A cada repetição, a região ordenada
          cresce:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Heap restante</p>

            <ViewArray array={posSwap2} />
            <p>Em árvore:</p>
            <ViewTree array={posSwap2} />
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Ordenado</p>

            <ViewArray array={ordenado2} />
            <p>Em árvore:</p>
            <ViewTree array={ordenado2} />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
          <ViewArray array={heapifyApos2} />
          <p>Em árvore:</p>
          <ViewTree array={heapifyApos2} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Heap restante</p>

            <ViewArray array={posSwap3} />
            <p>Em árvore:</p>
            <ViewTree array={posSwap3} />
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Ordenado</p>

            <ViewArray array={ordenado3} />
            <p>Em árvore:</p>
            <ViewTree array={ordenado3} />
          </div>
        </div>
      </Step>

      <Step>
        <p className="text-center text-sm">
          Por fim, trocamos os últimos dois elementos do heap. O número 3 é
          maior que o 1, então o 1 passa para a primeira posição:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Heap ordenado</p>

            <ViewArray array={posSwapFinal} />
            <p>Em árvore:</p>
            <ViewTree array={posSwapFinal} />
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Região ordenada</p>
            <ViewArray array={ordenado3} />
            <p>Em árvore:</p>
            <ViewTree array={ordenado3} />
          </div>
        </div>
      </Step>

      <Step>
        <p className="text-center text-sm">
          Quando o heap fica vazio, o array está totalmente ordenado:
        </p>

        <ViewArray array={arrayOrdenado} />
        <p>Em árvore:</p>
        <ViewTree array={arrayOrdenado} />
      </Step>
    </Container>
  );
}
