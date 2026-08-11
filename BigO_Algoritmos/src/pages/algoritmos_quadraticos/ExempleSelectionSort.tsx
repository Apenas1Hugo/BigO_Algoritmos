import { motion, type Variants } from "motion/react";

import { Container } from "../../components/shared/Container";
import { ViewArray } from "../../components/shared/ViewArray";

const exampleArray = [27, 10, 15, 7, 3];

const primeiroPasso = [3, 10, 15, 7, 27];
const segundoPasso = [3, 7, 15, 10, 27];
const terceiroPasso = [3, 7, 10, 15, 27];

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

export function ExempleSelectionSort() {
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
          Procuramos o menor elemento do array. O número 3 é o menor, então
          trocamos sua posição com o primeiro elemento:
        </p>

        <ViewArray array={primeiroPasso} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          Agora ignoramos a parte já ordenada e procuramos o menor elemento
          restante. O número 7 é o menor e é colocado na segunda posição:
        </p>

        <ViewArray array={segundoPasso} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          Repetimos o processo. O menor elemento restante é o 10, que é colocado
          na terceira posição:
        </p>

        <ViewArray array={terceiroPasso} />
      </Step>

      <Step>
        <p className="text-center text-sm">Array totalmente ordenado:</p>

        <ViewArray array={terceiroPasso} />
      </Step>
    </Container>
  );
}
