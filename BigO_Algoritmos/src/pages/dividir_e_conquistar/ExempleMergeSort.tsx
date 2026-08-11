import { motion, type Variants } from "motion/react";

import { Container } from "../../components/shared/Container";
import { ViewArray } from "../../components/shared/ViewArray";

const exampleArray = [8, 3, 5, 1];

const esquerda = [8, 3];
const direita = [5, 1];

const esquerdaOrdenada = [3, 8];
const direitaOrdenada = [1, 5];

const arrayOrdenado = [1, 3, 5, 8];

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

export function ExempleMergeSort() {
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
          O Merge Sort divide o array em duas partes:
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Esquerda</p>
            <ViewArray array={esquerda} />
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Direita</p>
            <ViewArray array={direita} />
          </div>
        </div>
      </Step>

      <Step>
        <p className="text-center text-sm">
          A divisão continua até chegarmos a arrays com apenas um elemento:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <ViewArray array={[8]} />
          <ViewArray array={[3]} />
          <ViewArray array={[5]} />
          <ViewArray array={[1]} />
        </div>
      </Step>

      <Step>
        <p className="text-center text-sm">
          Agora começamos a juntar e ordenar os elementos:
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Primeira metade</p>
            <ViewArray array={esquerdaOrdenada} />
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Segunda metade</p>
            <ViewArray array={direitaOrdenada} />
          </div>
        </div>
      </Step>

      <Step>
        <p className="text-center text-sm">
          Comparamos os elementos das duas partes e os juntamos em ordem:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <ViewArray array={esquerdaOrdenada} />

          <span className="text-xl font-bold">+</span>

          <ViewArray array={direitaOrdenada} />
        </div>
      </Step>

      <Step>
        <p className="text-center text-sm">Array totalmente ordenado:</p>

        <ViewArray array={arrayOrdenado} />
      </Step>
    </Container>
  );
}
