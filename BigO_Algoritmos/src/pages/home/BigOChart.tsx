import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useMemo } from "react";

interface BigOPoint {
  n: number;
  constante: number;
  logaritmica: number;
  linear: number;
  linearitmica: number | null;
  quadratica: number | null;
  exponencial: number | null;
  fatorial: number | null;
}

const MAX_N = 20;
const MAX_Y = 60;
const STEP = 0.1;

function continuousFactorial(n: number): number {
  if (n <= 0) return 1;
  return Math.sqrt(2 * Math.PI * n) * (n / Math.E) ** n;
}

function generateBigOData(): BigOPoint[] {
  const data: BigOPoint[] = [];

  for (let n = STEP; n <= MAX_N; n += STEP) {
    const logaritmica = Math.log2(n);
    const linear = n;
    const linearitmica = n * Math.log2(n);
    const quadratica = n ** 2;
    const exponencial = 2 ** n;
    const fatorial = continuousFactorial(n);

    data.push({
      n: Number(n.toFixed(2)),
      constante: 1,
      logaritmica,
      linear,
      linearitmica: linearitmica > MAX_Y ? null : linearitmica,
      quadratica: quadratica > MAX_Y ? null : quadratica,
      exponencial: exponencial > MAX_Y ? null : exponencial,
      fatorial: fatorial > MAX_Y ? null : fatorial,
    });
  }

  return data;
}

export function BigOGrowthChart() {
  const data = useMemo(() => generateBigOData(), []);

  return (
    <div className="w-full h-[500px] bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Crescimento de Funções (Notação Big O)
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="n"
            type="number"
            domain={[1, MAX_N]}
            ticks={Array.from({ length: MAX_N }, (_, i) => i + 1)}
            stroke="#6b7280"
            fontSize={12}
            label={{
              value: "n (tamanho da entrada)",
              position: "insideBottom",
              offset: -3,
            }}
          />
          <YAxis
            domain={[0, MAX_Y]}
            allowDataOverflow
            stroke="#6b7280"
            fontSize={12}
            label={{ value: "Operações", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="constante"
            name="O(1)"
            stroke="#10b981"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="logaritmica"
            name="O(log n)"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="linear"
            name="O(n)"
            stroke="#6366f1"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="linearitmica"
            name="O(n log n)"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
            connectNulls={false}
          />
          <Line
            type="monotone"
            dataKey="quadratica"
            name="O(n²)"
            stroke="#ec4899"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
            connectNulls={false}
          />
          <Line
            type="monotone"
            dataKey="exponencial"
            name="O(2ⁿ)"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
            connectNulls={false}
          />
          <Line
            type="monotone"
            dataKey="fatorial"
            name="O(n!)"
            stroke="#ef4444"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
            connectNulls={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}