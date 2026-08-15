import { motion } from "motion/react";

const raioDoNo = 24;
const alturaLevel = 80;
const gapNo = 24;

function getLevel(index: number): number {
  return Math.floor(Math.log2(index + 1));
}

function getPosition(index: number, width: number): { x: number; y: number } {
  const level = getLevel(index);
  const levelPrimeiroIndex = 2 ** level - 1;
  const posicaoDolevel = index - levelPrimeiroIndex;
  const levelNos = 2 ** level;

  const slotwidth = width / levelNos;
  const x = slotwidth * posicaoDolevel + slotwidth / 2;
  const y = level * alturaLevel + raioDoNo + 16;

  return { x, y };
}

export function ViewTree({ array }: { array: number[] }) {
  if (array.length === 0) {
    return (
      <div className="flex min-h-16 w-full items-center justify-center">
        <span className="text-sm text-muted-foreground">
          A lista está vazia.
        </span>
      </div>
    );
  }

  const profundidade = getLevel(array.length -1) + 1;
  const contaFolha = 2 ** (profundidade - 1);
  const width = contaFolha * (raioDoNo * 2 + gapNo);
  const height = profundidade * alturaLevel + raioDoNo * 2;

  const edges = array.flatMap((_, index) => {
    const parentPos = getPosition(index, width);
    const filhos = [2 * index + 1, 2 * index + 2].filter(
      (filhoIndex) => filhoIndex < array.length,
    );
    return filhos.map((filhoIndex) => {
      const childPos = getPosition(filhoIndex, width);
      return {
        key: `${index}-${filhoIndex}`,
        x1: parentPos.x,
        y1: parentPos.y,
        x2: childPos.x,
        y2: childPos.y,
      };
    });
  });
  return (
    <div className="flex w-full justify-center overflow-x-auto">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {edges.map((edge) => (
          <motion.line
            key={edge.key}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            className="stroke-border"
            strokeWidth={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}

        {array.map((number, index) => {
          const { x, y } = getPosition(index, width);

          return (
            <motion.g
              key={`${number}-${index}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            >
              <circle
                cx={x}
                cy={y}
                r={raioDoNo}
                className="fill-background stroke-border"
                strokeWidth={2}
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-foreground text-sm font-medium"
              >
                {number}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
