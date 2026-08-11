import { motion, type Variants } from "motion/react";

import { Container } from "../../components/shared/Container";
import { ViewArray } from "../../components/shared/ViewArray";

const exampleArray = [27, 10, 15, 7, 3];

const primeiroPasso = [10, 27, 15, 7, 3];
const segundoPasso = [10, 15, 27, 7, 3];
const terceiroPasso = [7, 10, 15, 27, 3];
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

export function ExempleInsertionSort() {
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
          Começamos pelo segundo elemento. O número 10 é comparado com o 27 e
          inserido antes dele:
        </p>

        <ViewArray array={primeiroPasso} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          Agora pegamos o número 15 e o comparamos com os elementos anteriores
          até encontrar sua posição correta:
        </p>

        <ViewArray array={segundoPasso} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          Em seguida, o número 7 é comparado com os elementos já ordenados e
          inserido no início:
        </p>

        <ViewArray array={terceiroPasso} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          Por fim, o número 3 é comparado com os elementos da parte ordenada e,
          por ser menor que todos eles, é inserido no início:
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
