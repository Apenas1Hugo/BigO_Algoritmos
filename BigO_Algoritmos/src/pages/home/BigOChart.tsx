import { motion } from "motion/react";
import { useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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

interface ComplexitySeries {
  key: keyof Omit<BigOPoint, "n">;
  label: string;
  color: string;
}

const MAX_N = 12;
const MAX_Y = 100;

const seriesConfig: ComplexitySeries[] = [
  { key: "constante", label: "O(1)", color: "#10b981" },
  { key: "logaritmica", label: "O(log n)", color: "#3b82f6" },
  { key: "linear", label: "O(n)", color: "#6366f1" },
  { key: "linearitmica", label: "O(n log n)", color: "#8b5cf6" },
  { key: "quadratica", label: "O(n²)", color: "#ec4899" },
  { key: "exponencial", label: "O(2ⁿ)", color: "#f59e0b" },
  { key: "fatorial", label: "O(n!)", color: "#ef4444" },
];

function continuousFactorial(n: number): number {
  if (n <= 0) return 1;
  return Math.sqrt(2 * Math.PI * n) * (n / Math.E) ** n;
}

function generateBigOData(): BigOPoint[] {
  const data: BigOPoint[] = [];

  for (let n = 1; n <= MAX_N; n += 1) {
    const logaritmica = Math.log2(n);
    const linear = n;
    const linearitmica = n * Math.log2(n);
    const quadratica = n ** 2;
    const exponencial = 2 ** n;
    const fatorial = continuousFactorial(n);

    data.push({
      n,
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
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 shadow-sm sm:p-6"
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            Crescimento das complexidades Big O
          </h2>
          <p className="text-sm text-slate-600">
            Comparação visual do crescimento de cada categoria conforme n
            aumenta.
          </p>
        </div>
      </div>

      <div className="h-[360px] w-full sm:h-[420px] lg:h-[480px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 12, right: 16, left: 0, bottom: 24 }}
          >
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" />
            <XAxis
              dataKey="n"
              type="number"
              domain={[1, MAX_N]}
              ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              domain={[0, MAX_Y]}
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              formatter={(value) => [Number(value).toFixed(2), "Operações"]}
              contentStyle={{ borderRadius: 12, borderColor: "#e2e8f0" }}
            />
            <Legend />

            {seriesConfig.map((series) => (
              <Line
                key={series.key}
                type="monotone"
                dataKey={series.key}
                name={series.label}
                stroke={series.color}
                strokeWidth={2.5}
                dot={false}
                connectNulls={false}
                isAnimationActive
                animationDuration={900}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}