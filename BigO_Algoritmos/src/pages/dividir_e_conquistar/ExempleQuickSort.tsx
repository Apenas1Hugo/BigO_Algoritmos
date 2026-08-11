import { motion, type Variants } from "motion/react";

import { Container } from "../../components/shared/Container";
import { ViewArray } from "../../components/shared/ViewArray";

const exampleArray = [8, 3, 5, 1, 7];

const menores = [3, 1];
const maiores = [8, 7];
const pivo = [5];
const arrayOrdenado = [
  ...menores.sort((a, b) => a - b),
  ...pivo,
  ...maiores.sort((a, b) => a - b),
];

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

export function ExempleQuickSort() {
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
          Em seguida selecionamos o pivô. Neste exemplo, escolhemos o elemento
          central:
        </p>

        <ViewArray array={pivo} />
      </Step>

      <Step>
        <p className="text-center text-sm">
          Agora organizamos os números menores que o pivô à esquerda e os
          maiores à direita.
        </p>

        <div className="flex w-full flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Menores</p>
            <ViewArray array={menores} />
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Maiores</p>
            <ViewArray array={maiores} />
          </div>
        </div>
      </Step>

      <Step>
        <p className="text-center text-sm">Por fim, juntamos as partes:</p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <ViewArray array={menores} />
          <span className="text-xl font-bold">+</span>
          <ViewArray array={pivo} />
          <span className="text-xl font-bold">+</span>
          <ViewArray array={maiores} />
        </div>
      </Step>

      <Step>
        <p className="text-center text-sm">Array totalmente ordenado:</p>

        <ViewArray array={arrayOrdenado} />
      </Step>
    </Container>
  );
}