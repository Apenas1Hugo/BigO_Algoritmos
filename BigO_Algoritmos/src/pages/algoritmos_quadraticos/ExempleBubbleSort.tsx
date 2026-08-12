import { motion, type Variants } from "motion/react";

import { Container } from "../../components/shared/Container";
import { ViewArray } from "../../components/shared/ViewArray";

const exampleArray = [27, 10, 15, 7, 3];

const primeiroPasso = [10, 15, 7, 3, 27];
const segundoPasso = [10, 7, 3, 15, 27];
const terceiroPasso = [7, 3, 10, 15, 27];
const quartoPasso = [3, 7, 10, 15, 27];

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
      className="flex w-full flex-col items-center gap-4"
    >
      {children}
    </motion.div>
  );
}

export function ExempleBubbleSort() {
  return (
    <Container
      variant="small"
      className="mx-auto my-6 flex w-full max-w-3xl flex-col items-center gap-6 rounded-lg border border-border p-4 shadow-lg sm:p-5"
    >
      <Step>
        <p className="text-center text-sm">Primeiro temos o array completo:</p>

        <ViewArray array={exampleArray} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          O Bubble Sort compara elementos vizinhos. Se o elemento da esquerda
          for maior, os dois trocam de posição:
        </p>

        <ViewArray array={primeiroPasso} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          Continuamos comparando os elementos vizinhos. Ao final da primeira
          passagem, o maior elemento chegou ao final do array:
        </p>

        <ViewArray array={primeiroPasso} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          Na próxima passagem, repetimos as comparações. O próximo maior
          elemento encontra sua posição:
        </p>

        <ViewArray array={segundoPasso} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          Repetimos o processo nas partes que ainda não estão ordenadas:
        </p>

        <ViewArray array={terceiroPasso} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          Após as comparações restantes, chegamos ao array ordenado:
        </p>

        <ViewArray array={quartoPasso} />
      </Step>

      <Step>
        <p className="text-center text-sm">Array totalmente ordenado:</p>

        <ViewArray array={quartoPasso} />
      </Step>
    </Container>
  );
}
